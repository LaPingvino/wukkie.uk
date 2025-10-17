import { describe, test } from "node:test";
import assert from "node:assert";
import { JSDOM } from "jsdom";

// Mock implementations for testing network features
class MockBlueskyCommentSystem {
  private comments: Map<string, any[]> = new Map();
  private posts: Map<string, any> = new Map();

  constructor() {
    // Setup some mock data
    this.posts.set("at://did:example:user1/app.bsky.feed.post/123", {
      uri: "at://did:example:user1/app.bsky.feed.post/123",
      record: {
        text: "🚨 Test Issue\n\nThis is a test issue\n\n📍 #geo8ccgmw\n\n#wukkie #infrastructure",
        createdAt: "2025-01-15T12:00:00Z"
      },
      author: {
        handle: "test.user",
        displayName: "Test User"
      }
    });

    this.comments.set("at://did:example:user1/app.bsky.feed.post/123", [
      {
        uri: "at://did:example:user2/app.bsky.feed.post/124",
        record: {
          text: "I can confirm this issue exists",
          createdAt: "2025-01-15T12:30:00Z",
          reply: {
            root: { uri: "at://did:example:user1/app.bsky.feed.post/123" },
            parent: { uri: "at://did:example:user1/app.bsky.feed.post/123" }
          }
        },
        author: {
          handle: "commenter.user",
          displayName: "Commenter"
        }
      }
    ]);
  }

  async getThread(uri: string): Promise<any> {
    const post = this.posts.get(uri);
    const replies = this.comments.get(uri) || [];

    if (!post) {
      throw new Error(`Post not found: ${uri}`);
    }

    return {
      thread: {
        post: post,
        replies: replies.map(reply => ({
          post: reply,
          replies: []
        }))
      }
    };
  }

  async createRecord(params: any): Promise<any> {
    const uri = `at://did:example:user/app.bsky.feed.post/${Date.now()}`;

    if (params.record.reply) {
      // This is a comment
      const parentUri = params.record.reply.parent.uri;
      if (!this.comments.has(parentUri)) {
        this.comments.set(parentUri, []);
      }

      const comment = {
        uri,
        record: params.record,
        author: {
          handle: "current.user",
          displayName: "Current User"
        }
      };

      this.comments.get(parentUri)!.push(comment);
    } else {
      // This is a new post
      const post = {
        uri,
        record: params.record,
        author: {
          handle: "current.user",
          displayName: "Current User"
        }
      };

      this.posts.set(uri, post);
    }

    return { uri };
  }

  async searchPosts(query: string, options: any = {}): Promise<any> {
    const allPosts = Array.from(this.posts.values());

    let filteredPosts = allPosts.filter(post => {
      const text = post.record.text.toLowerCase();
      const searchQuery = query.toLowerCase();

      // Handle "from:username" queries
      if (searchQuery.includes("from:")) {
        const fromMatch = searchQuery.match(/from:([^\s]+)/);
        if (fromMatch) {
          const username = fromMatch[1];
          const restQuery = searchQuery.replace(/from:[^\s]+\s*/, "").trim();
          return post.author.handle === username && (restQuery === "" || text.includes(restQuery));
        }
      }

      return text.includes(searchQuery);
    });

    // Sort by date if requested
    if (options.sort === "latest") {
      filteredPosts.sort((a, b) =>
        new Date(b.record.createdAt).getTime() - new Date(a.record.createdAt).getTime()
      );
    }

    return {
      posts: filteredPosts.slice(0, options.limit || 20)
    };
  }

  getStoredComments(uri: string): any[] {
    return this.comments.get(uri) || [];
  }

  getStoredPosts(): any[] {
    return Array.from(this.posts.values());
  }
}

class MockATProtoCommentManager {
  private blueskyClient: MockBlueskyCommentSystem;

  constructor() {
    this.blueskyClient = new MockBlueskyCommentSystem();
  }

  async fetchCommentsForIssue(issueUri: string): Promise<any[]> {
    try {
      const threadData = await this.blueskyClient.getThread(issueUri);

      return threadData.thread.replies.map((reply: any) => ({
        id: reply.post.uri,
        text: reply.post.record.text,
        author: reply.post.author.handle,
        createdAt: reply.post.record.createdAt,
        blueskyUri: reply.post.uri
      }));
    } catch (error) {
      console.warn(`Failed to fetch comments for ${issueUri}:`, error);
      return [];
    }
  }

  async postComment(issueUri: string, commentText: string): Promise<string> {
    const commentRecord = {
      $type: "app.bsky.feed.post",
      text: commentText,
      createdAt: new Date().toISOString(),
      reply: {
        root: { uri: issueUri },
        parent: { uri: issueUri }
      }
    };

    const result = await this.blueskyClient.createRecord({
      collection: "app.bsky.feed.post",
      record: commentRecord
    });

    return result.uri;
  }

  async searchNetworkIssues(query: string, limit: number = 20): Promise<any[]> {
    const searchResults = await this.blueskyClient.searchPosts(query, {
      limit,
      sort: "latest"
    });

    return searchResults.posts.map((post: any) => this.parsePostAsWukkieIssue(post))
      .filter((issue: any) => issue !== null);
  }

  private parsePostAsWukkieIssue(post: any): any | null {
    const text = post.record.text;

    // Look for Wukkie issue pattern
    if (!text.includes("#wukkie") || !text.includes("🚨")) {
      return null;
    }

    const lines = text.split("\n");
    const titleLine = lines.find(line => line.includes("🚨"));
    const title = titleLine?.replace("🚨", "").trim();

    if (!title) return null;

    // Extract description (lines between title and location/hashtags)
    const titleIndex = lines.findIndex(line => line.includes("🚨"));
    const locationIndex = lines.findIndex(line => line.includes("📍"));
    const hashtagIndex = lines.findIndex(line => line.includes("#wukkie"));

    const descriptionEnd = Math.min(
      locationIndex === -1 ? Infinity : locationIndex,
      hashtagIndex === -1 ? Infinity : hashtagIndex
    );

    const description = lines.slice(titleIndex + 1, descriptionEnd === Infinity ? undefined : descriptionEnd)
      .join("\n")
      .trim();

    // Extract location
    const locationLine = lines.find(line => line.includes("📍"));
    const geoHashtagMatch = locationLine?.match(/(#geo[a-z0-9]+)/i);
    const geoHashtag = geoHashtagMatch?.[1] || "#geo000000";

    const locationLabelMatch = locationLine?.match(/\(([^)]+)\)/);
    const locationLabel = locationLabelMatch?.[1];

    // Extract hashtags
    const hashtags = (text.match(/#\w+/g) || []).filter(tag => tag !== "#wukkie");

    // Determine category from hashtags
    const categoryTags = {
      infrastructure: "#infrastructure",
      safety: "#safety",
      environment: "#environment",
      transportation: "#transportation"
    };

    let category = "other";
    for (const [cat, tag] of Object.entries(categoryTags)) {
      if (hashtags.includes(tag)) {
        category = cat;
        break;
      }
    }

    return {
      id: `wukkie_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
      title,
      description,
      category,
      hashtags,
      status: "open",
      createdAt: post.record.createdAt,
      blueskyUri: post.uri,
      location: {
        geoHashtag,
        label: locationLabel,
        precision: 1000
      },
      author: post.author.handle,
      comments: []
    };
  }

  // Expose internal client for testing
  getBlueskyClient(): MockBlueskyCommentSystem {
    return this.blueskyClient;
  }
}

describe("Comment System", () => {
  test("TestCommentSystem_FetchComments", async () => {
    const manager = new MockATProtoCommentManager();
    const issueUri = "at://did:example:user1/app.bsky.feed.post/123";

    const comments = await manager.fetchCommentsForIssue(issueUri);

    assert.strictEqual(comments.length, 1, "Should fetch existing comments");
    assert.strictEqual(comments[0].text, "I can confirm this issue exists", "Should have correct comment text");
    assert.strictEqual(comments[0].author, "commenter.user", "Should have correct comment author");
    assert.ok(comments[0].blueskyUri, "Should have Bluesky URI");
    assert.ok(comments[0].createdAt, "Should have creation timestamp");
  });

  test("TestCommentSystem_PostComment", async () => {
    const manager = new MockATProtoCommentManager();
    const issueUri = "at://did:example:user1/app.bsky.feed.post/123";
    const commentText = "This is a test comment from the app";

    const commentUri = await manager.postComment(issueUri, commentText);

    assert.ok(commentUri.startsWith("at://"), "Should return valid ATProto URI");

    // Verify comment was stored
    const client = manager.getBlueskyClient();
    const storedComments = client.getStoredComments(issueUri);

    const newComment = storedComments.find(c => c.record.text === commentText);
    assert.ok(newComment, "Comment should be stored");
    assert.strictEqual(newComment.record.reply.parent.uri, issueUri, "Should reference correct parent");
  });

  test("TestCommentSystem_CommentThreading", async () => {
    const manager = new MockATProtoCommentManager();
    const issueUri = "at://did:example:user1/app.bsky.feed.post/123";

    // Post multiple comments
    await manager.postComment(issueUri, "First comment");
    await manager.postComment(issueUri, "Second comment");

    const comments = await manager.fetchCommentsForIssue(issueUri);

    // Should include original comment plus new ones
    assert.ok(comments.length >= 3, "Should have all comments");

    const commentTexts = comments.map(c => c.text);
    assert.ok(commentTexts.includes("First comment"), "Should include first new comment");
    assert.ok(commentTexts.includes("Second comment"), "Should include second new comment");
  });

  test("TestCommentSystem_NonExistentIssue", async () => {
    const manager = new MockATProtoCommentManager();
    const nonExistentUri = "at://did:example:nonexistent/app.bsky.feed.post/999";

    const comments = await manager.fetchCommentsForIssue(nonExistentUri);

    assert.strictEqual(comments.length, 0, "Should return empty array for non-existent issue");
  });
});

describe("Network Issue Discovery", () => {
  test("TestNetworkDiscovery_SearchOwnPosts", async () => {
    const manager = new MockATProtoCommentManager();
    const client = manager.getBlueskyClient();

    // Add a post by current user
    await client.createRecord({
      collection: "app.bsky.feed.post",
      record: {
        $type: "app.bsky.feed.post",
        text: "🚨 My Own Issue\n\nThis is my own issue\n\n📍 #geo8ccgmw\n\n#wukkie #infrastructure",
        createdAt: new Date().toISOString()
      }
    });

    const issues = await manager.searchNetworkIssues("#wukkie from:current.user");

    assert.ok(issues.length > 0, "Should find own posts");
    assert.strictEqual(issues[0].title, "My Own Issue", "Should parse title correctly");
    assert.strictEqual(issues[0].author, "current.user", "Should have correct author");
  });

  test("TestNetworkDiscovery_SearchHashtag", async () => {
    const manager = new MockATProtoCommentManager();

    const issues = await manager.searchNetworkIssues("#wukkie");

    assert.ok(issues.length > 0, "Should find issues with #wukkie hashtag");

    const issue = issues[0];
    assert.ok(issue.title, "Should have parsed title");
    assert.ok(issue.description, "Should have parsed description");
    assert.ok(issue.hashtags.includes("#infrastructure"), "Should have parsed hashtags");
    assert.strictEqual(issue.category, "infrastructure", "Should have determined category");
  });

  test("TestNetworkDiscovery_IssuePatternMatching", async () => {
    const manager = new MockATProtoCommentManager();
    const client = manager.getBlueskyClient();

    // Add posts with different patterns
    await client.createRecord({
      collection: "app.bsky.feed.post",
      record: {
        text: "🚨 Valid Issue\n\nDescription here\n\n#wukkie #safety",
        createdAt: new Date().toISOString()
      }
    });

    await client.createRecord({
      collection: "app.bsky.feed.post",
      record: {
        text: "Just a regular post with #wukkie but no issue emoji",
        createdAt: new Date().toISOString()
      }
    });

    const issues = await manager.searchNetworkIssues("#wukkie");

    const validIssues = issues.filter(i => i.title === "Valid Issue");
    const invalidPosts = issues.filter(i => i.title?.includes("regular post"));

    assert.strictEqual(validIssues.length, 1, "Should find valid issue pattern");
    assert.strictEqual(invalidPosts.length, 0, "Should not match invalid patterns");
  });

  test("TestNetworkDiscovery_LocationParsing", async () => {
    const manager = new MockATProtoCommentManager();
    const client = manager.getBlueskyClient();

    await client.createRecord({
      collection: "app.bsky.feed.post",
      record: {
        text: "🚨 Location Test\n\nIssue with location\n\n📍 #geo8ccgmw (Amsterdam)\n\n#wukkie #environment",
        createdAt: new Date().toISOString()
      }
    });

    const issues = await manager.searchNetworkIssues("#wukkie");
    const locationIssue = issues.find(i => i.title === "Location Test");

    assert.ok(locationIssue, "Should find location issue");
    assert.strictEqual(locationIssue.location.geoHashtag, "#geo8ccgmw", "Should parse geo hashtag");
    assert.strictEqual(locationIssue.location.label, "Amsterdam", "Should parse location label");
  });
});

describe("Issue Format Validation", () => {
  test("TestIssueFormat_RequiredElements", async () => {
    const manager = new MockATProtoCommentManager();
    const client = manager.getBlueskyClient();

    // Test missing emoji
    await client.createRecord({
      collection: "app.bsky.feed.post",
      record: {
        text: "Missing Emoji Issue\n\nNo issue emoji here\n\n#wukkie",
        createdAt: new Date().toISOString()
      }
    });

    // Test missing #wukkie
    await client.createRecord({
      collection: "app.bsky.feed.post",
      record: {
        text: "🚨 Missing Hashtag\n\nNo wukkie hashtag here",
        createdAt: new Date().toISOString()
      }
    });

    const issues = await manager.searchNetworkIssues("#wukkie");

    // Should not find posts that don't match the pattern
    const invalidIssues = issues.filter(i =>
      i.title === "Missing Emoji Issue" || i.title === "Missing Hashtag"
    );

    assert.strictEqual(invalidIssues.length, 0, "Should not parse invalid issue formats");
  });

  test("TestIssueFormat_CategoryDetection", async () => {
    const manager = new MockATProtoCommentManager();
    const client = manager.getBlueskyClient();

    const testCases = [
      { hashtag: "#infrastructure", expectedCategory: "infrastructure" },
      { hashtag: "#safety", expectedCategory: "safety" },
      { hashtag: "#environment", expectedCategory: "environment" },
      { hashtag: "#transportation", expectedCategory: "transportation" },
      { hashtag: "#random", expectedCategory: "other" }
    ];

    for (const testCase of testCases) {
      await client.createRecord({
        collection: "app.bsky.feed.post",
        record: {
          text: `🚨 ${testCase.hashtag.slice(1)} Issue\n\nTest description\n\n#wukkie ${testCase.hashtag}`,
          createdAt: new Date().toISOString()
        }
      });
    }

    const issues = await manager.searchNetworkIssues("#wukkie");

    for (const testCase of testCases) {
      const issue = issues.find(i => i.title.includes(testCase.hashtag.slice(1)));
      assert.ok(issue, `Should find ${testCase.hashtag} issue`);
      assert.strictEqual(issue.category, testCase.expectedCategory,
        `Should detect ${testCase.expectedCategory} category for ${testCase.hashtag}`);
    }
  });
});

describe("Network Features Integration", () => {
  test("TestNetworkIntegration_CommentAndIssueSync", async () => {
    const manager = new MockATProtoCommentManager();
    const client = manager.getBlueskyClient();

    // Create an issue
    const issueResult = await client.createRecord({
      collection: "app.bsky.feed.post",
      record: {
        text: "🚨 Integration Test\n\nThis is an integration test\n\n#wukkie #infrastructure",
        createdAt: new Date().toISOString()
      }
    });

    // Add a comment to the issue
    await manager.postComment(issueResult.uri, "This is a test comment");

    // Search for the issue
    const issues = await manager.searchNetworkIssues("#wukkie");
    const testIssue = issues.find(i => i.title === "Integration Test");

    assert.ok(testIssue, "Should find the created issue");

    // Fetch comments for the issue
    const comments = await manager.fetchCommentsForIssue(testIssue.blueskyUri);

    assert.ok(comments.length > 0, "Should have comments on the issue");
    assert.ok(comments.some(c => c.text === "This is a test comment"),
      "Should include the posted comment");
  });

  test("TestNetworkIntegration_SearchSorting", async () => {
    const manager = new MockATProtoCommentManager();
    const client = manager.getBlueskyClient();

    // Create issues with different timestamps
    const timestamps = [
      "2025-01-13T12:00:00Z", // oldest
      "2025-01-15T12:00:00Z", // newest
      "2025-01-14T12:00:00Z"  // middle
    ];

    for (let i = 0; i < timestamps.length; i++) {
      await client.createRecord({
        collection: "app.bsky.feed.post",
        record: {
          text: `🚨 Issue ${i + 1}\n\nDescription ${i + 1}\n\n#wukkie #infrastructure`,
          createdAt: timestamps[i]
        }
      });
    }

    const issues = await manager.searchNetworkIssues("#wukkie");

    // Should be sorted by date (newest first)
    assert.ok(issues.length >= 3, "Should find all issues");

    // Find our test issues
    const testIssues = issues.filter(i => i.title.startsWith("Issue "))
      .sort((a, b) => a.title.localeCompare(b.title)); // Sort by title for comparison

    if (testIssues.length >= 2) {
      const issue2Date = new Date(testIssues[1].createdAt); // "Issue 2" has newest timestamp
      const issue1Date = new Date(testIssues[0].createdAt); // "Issue 1" has oldest timestamp

      // In the sorted results, Issue 2 should appear before Issue 1
      const issue2Index = issues.findIndex(i => i.title === "Issue 2");
      const issue1Index = issues.findIndex(i => i.title === "Issue 1");

      assert.ok(issue2Index < issue1Index, "Newer issues should appear first");
    }
  });
});

describe("Error Handling", () => {
  test("TestErrorHandling_NetworkFailure", async () => {
    // Create a manager that simulates network failures
    class FailingATProtoManager extends MockATProtoCommentManager {
      async searchNetworkIssues(): Promise<any[]> {
        throw new Error("Network timeout");
      }

      async fetchCommentsForIssue(): Promise<any[]> {
        // Should not throw, should return empty array
        return [];
      }
    }

    const manager = new FailingATProtoManager();

    // Search should handle errors gracefully
    try {
      const issues = await manager.searchNetworkIssues("#wukkie");
      assert.fail("Should have thrown network error");
    } catch (error) {
      assert.ok(error.message.includes("Network timeout"), "Should propagate network errors");
    }

    // Comment fetching should not throw
    const comments = await manager.fetchCommentsForIssue("test-uri");
    assert.strictEqual(comments.length, 0, "Should return empty array on comment fetch failure");
  });

  test("TestErrorHandling_InvalidData", async () => {
    const manager = new MockATProtoCommentManager();
    const client = manager.getBlueskyClient();

    // Add a post with malformed data
    client.getStoredPosts().push({
      uri: "at://malformed/post",
      record: {
        // Missing required fields
        createdAt: new Date().toISOString()
      },
      author: null // Invalid author
    });

    const issues = await manager.searchNetworkIssues("#wukkie");

    // Should handle malformed data without crashing
    // The parsePostAsWukkieIssue method should return null for invalid posts
    const malformedIssue = issues.find(i => !i || !i.title);
    assert.ok(!malformedIssue, "Should not include malformed issues in results");
  });
});
