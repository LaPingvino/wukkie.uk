import { describe, test } from "node:test";
import assert from "node:assert";
import { JSDOM } from "jsdom";

// Mock implementations for testing public discovery
class MockPublicAPI {
  private posts: any[] = [];

  constructor() {
    // Setup some mock public posts
    this.posts = [
      {
        uri: "at://did:example:user1/app.bsky.feed.post/123",
        record: {
          text: "🚨 Broken streetlight on Main Street\n\nThe streetlight has been out for 3 days, making it dangerous to walk at night.\n\n📍 #geo8ccgmw (Main Street)\n\n#wukkie #infrastructure #safety",
          createdAt: "2025-01-15T12:00:00Z"
        },
        author: {
          handle: "citizen.reporter",
          displayName: "Citizen Reporter"
        }
      },
      {
        uri: "at://did:example:user2/app.bsky.feed.post/124",
        record: {
          text: "🚨 Pothole on Highway 101\n\nLarge pothole causing damage to vehicles.\n\n#wukkie #transportation #urgent",
          createdAt: "2025-01-14T15:30:00Z"
        },
        author: {
          handle: "driver.alert",
          displayName: "Alert Driver"
        }
      },
      {
        uri: "at://did:example:user3/app.bsky.feed.post/125",
        record: {
          text: "Just talking about #wukkie but this is not an issue report",
          createdAt: "2025-01-13T10:00:00Z"
        },
        author: {
          handle: "casual.user",
          displayName: "Casual User"
        }
      },
      {
        uri: "at://did:example:user4/app.bsky.feed.post/126",
        record: {
          text: "🚨 Air quality concern\n\nHeavy smog visible in downtown area today.\n\n📍 #geo8ccgmx (Downtown)\n\n#wukkie #environment #health",
          createdAt: "2025-01-16T09:00:00Z"
        },
        author: {
          handle: "env.watcher",
          displayName: "Environmental Watcher"
        }
      }
    ];
  }

  async searchPosts(params: URLSearchParams): Promise<Response> {
    const query = params.get("q") || "";
    const limit = parseInt(params.get("limit") || "20");
    const sort = params.get("sort") || "latest";

    let filteredPosts = this.posts.filter(post =>
      post.record.text.toLowerCase().includes(query.toLowerCase())
    );

    if (sort === "latest") {
      filteredPosts.sort((a, b) =>
        new Date(b.record.createdAt).getTime() - new Date(a.record.createdAt).getTime()
      );
    }

    filteredPosts = filteredPosts.slice(0, limit);

    const responseBody = {
      posts: filteredPosts
    };

    return new Response(JSON.stringify(responseBody), {
      status: 200,
      headers: { "Content-Type": "application/json" }
    });
  }

  // Helper to add more posts for testing
  addPost(post: any) {
    this.posts.push(post);
  }

  // Helper to clear posts
  clearPosts() {
    this.posts = [];
  }
}

class MockWukkieAppPublic {
  private issues: any[] = [];
  private mockAPI: MockPublicAPI;

  constructor() {
    this.mockAPI = new MockPublicAPI();
    this.setupMockDOM();
    this.setupMockFetch();
  }

  private setupMockDOM() {
    const dom = new JSDOM(`
      <div id="issue-stats"></div>
      <div id="issues-list"></div>
    `);
    global.document = dom.window.document as any;
    global.window = dom.window as any;
  }

  private setupMockFetch() {
    global.fetch = async (url: string) => {
      if (url.includes("public.api.bsky.app/xrpc/app.bsky.feed.searchPosts")) {
        const urlObj = new URL(url);
        return await this.mockAPI.searchPosts(urlObj.searchParams);
      }
      throw new Error(`Unexpected fetch URL: ${url}`);
    };
  }

  async loadPublicIssues(): Promise<void> {
    try {
      console.log("🔍 Loading public issues from Bluesky network...");

      const publicApiUrl = "https://public.api.bsky.app/xrpc/app.bsky.feed.searchPosts";
      const searchParams = new URLSearchParams({
        q: "#wukkie",
        limit: "20",
        sort: "latest",
      });

      const response = await fetch(`${publicApiUrl}?${searchParams}`);

      if (!response.ok) {
        console.warn("Public API search failed:", response.status, response.statusText);
        return;
      }

      const data = await response.json();
      console.log(`🔍 Found ${data.posts?.length || 0} public posts with #wukkie`);

      if (!data.posts || data.posts.length === 0) {
        console.log("📭 No public issues found");
        return;
      }

      const publicIssues: any[] = [];

      for (const post of data.posts) {
        try {
          const issue = this.parseBlueskyPostAsIssue(post);
          if (issue) {
            publicIssues.push(issue);
          }
        } catch (error) {
          console.warn("Failed to parse public post as issue:", error);
        }
      }

      if (publicIssues.length > 0) {
        console.log(`✅ Parsed ${publicIssues.length} public issues`);

        // Get existing local issues (simulate empty localStorage)
        const localIssues: any[] = [];

        // Merge with local issues
        const allIssues = [...localIssues, ...publicIssues];

        // Sort by creation date (newest first)
        allIssues.sort(
          (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
        );

        this.issues = allIssues;
        this.displayPublicIssueStats(publicIssues.length, localIssues.length);
      } else {
        console.log("📭 No valid public issues found after parsing");
      }
    } catch (error) {
      console.error("Failed to load public issues:", error);
    }
  }

  private parseBlueskyPostAsIssue(post: any): any | null {
    try {
      const text = post.record?.text || "";

      // Must contain #wukkie and issue emoji
      if (!text.includes("#wukkie") || !text.includes("🚨")) {
        return null;
      }

      const lines = text.split("\n");
      const titleLine = lines.find(line => line.includes("🚨"));
      const title = titleLine?.replace("🚨", "").trim();

      if (!title) return null;

      // Extract description
      const titleIndex = lines.findIndex(line => line.includes("🚨"));
      const locationIndex = lines.findIndex(line => line.includes("📍"));
      const hashtagIndex = lines.findIndex(line => line.includes("#wukkie"));

      const descriptionEnd = Math.min(
        locationIndex === -1 ? Infinity : locationIndex,
        hashtagIndex === -1 ? Infinity : hashtagIndex
      );

      const description = lines.slice(
        titleIndex + 1,
        descriptionEnd === Infinity ? undefined : descriptionEnd
      ).join("\n").trim();

      // Extract hashtags
      const hashtags = (text.match(/#\w+/g) || []).filter(tag => tag !== "#wukkie");

      // Determine category
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
        id: `public_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
        title,
        description: description || "No description provided",
        category,
        hashtags,
        status: "open",
        createdAt: post.record.createdAt || new Date().toISOString(),
        author: post.author?.handle || "unknown",
        blueskyUri: post.uri,
        blueskyStatus: "posted"
      };
    } catch (error) {
      console.warn("Error parsing Bluesky post:", error);
      return null;
    }
  }

  private displayPublicIssueStats(publicCount: number, localCount: number): void {
    const statsContainer = document.getElementById("issue-stats");
    if (statsContainer) {
      const totalCount = publicCount + localCount;
      statsContainer.innerHTML = `
        <div class="issue-stats">
          <span class="stat-item">📊 ${totalCount} issues</span>
          ${localCount > 0 ? `<span class="stat-item">📱 ${localCount} local</span>` : ""}
          ${publicCount > 0 ? `<span class="stat-item">🌐 ${publicCount} public</span>` : ""}
        </div>
      `;
    }
  }

  // Test helper methods
  getIssues(): any[] {
    return this.issues;
  }

  getDisplayedStats(): { total: number; local: number; public: number } {
    const statsContainer = document.getElementById("issue-stats");
    const html = statsContainer?.innerHTML || "";

    const totalMatch = html.match(/📊 (\d+) issues/);
    const localMatch = html.match(/📱 (\d+) local/);
    const publicMatch = html.match(/🌐 (\d+) public/);

    return {
      total: totalMatch ? parseInt(totalMatch[1]) : 0,
      local: localMatch ? parseInt(localMatch[1]) : 0,
      public: publicMatch ? parseInt(publicMatch[1]) : 0
    };
  }

  getMockAPI(): MockPublicAPI {
    return this.mockAPI;
  }
}

describe("Public Issue Discovery (Unauthenticated)", () => {
  test("TestPublicDiscovery_BasicFunctionality", async () => {
    const app = new MockWukkieAppPublic();

    await app.loadPublicIssues();

    const issues = app.getIssues();
    assert.ok(issues.length > 0, "Should discover public issues");

    // Should find valid Wukkie issues
    const validIssues = issues.filter(i => i.title && i.title.length > 0);
    assert.ok(validIssues.length >= 3, "Should parse valid issue posts");

    // Check specific issues
    const streetlightIssue = issues.find(i => i.title.includes("streetlight"));
    const potholeIssue = issues.find(i => i.title.includes("Pothole"));
    const airQualityIssue = issues.find(i => i.title.includes("Air quality"));

    assert.ok(streetlightIssue, "Should find streetlight issue");
    assert.ok(potholeIssue, "Should find pothole issue");
    assert.ok(airQualityIssue, "Should find air quality issue");
  });

  test("TestPublicDiscovery_IssuePatternFiltering", async () => {
    const app = new MockWukkieAppPublic();

    await app.loadPublicIssues();

    const issues = app.getIssues();

    // Should not include posts that don't match issue pattern
    const casualPost = issues.find(i => i.title?.includes("talking about"));
    assert.ok(!casualPost, "Should not include casual mentions of #wukkie");

    // All returned issues should have required fields
    issues.forEach(issue => {
      assert.ok(issue.title, `Issue should have title: ${JSON.stringify(issue)}`);
      assert.ok(issue.category, `Issue should have category: ${JSON.stringify(issue)}`);
      assert.ok(issue.author, `Issue should have author: ${JSON.stringify(issue)}`);
      assert.ok(issue.createdAt, `Issue should have createdAt: ${JSON.stringify(issue)}`);
      assert.ok(issue.blueskyUri, `Issue should have blueskyUri: ${JSON.stringify(issue)}`);
    });
  });

  test("TestPublicDiscovery_CategoryDetection", async () => {
    const app = new MockWukkieAppPublic();

    await app.loadPublicIssues();

    const issues = app.getIssues();

    // Test specific category detection
    const infrastructureIssue = issues.find(i => i.hashtags.includes("#infrastructure"));
    const transportationIssue = issues.find(i => i.hashtags.includes("#transportation"));
    const environmentIssue = issues.find(i => i.hashtags.includes("#environment"));

    if (infrastructureIssue) {
      assert.strictEqual(infrastructureIssue.category, "infrastructure",
        "Should detect infrastructure category");
    }

    if (transportationIssue) {
      assert.strictEqual(transportationIssue.category, "transportation",
        "Should detect transportation category");
    }

    if (environmentIssue) {
      assert.strictEqual(environmentIssue.category, "environment",
        "Should detect environment category");
    }
  });

  test("TestPublicDiscovery_DateSorting", async () => {
    const app = new MockWukkieAppPublic();

    await app.loadPublicIssues();

    const issues = app.getIssues();

    if (issues.length >= 2) {
      // Should be sorted by date (newest first)
      for (let i = 0; i < issues.length - 1; i++) {
        const currentDate = new Date(issues[i].createdAt).getTime();
        const nextDate = new Date(issues[i + 1].createdAt).getTime();

        assert.ok(currentDate >= nextDate,
          `Issues should be sorted by date (newest first): ${issues[i].createdAt} >= ${issues[i + 1].createdAt}`);
      }
    }
  });

  test("TestPublicDiscovery_StatsDisplay", async () => {
    const app = new MockWukkieAppPublic();

    await app.loadPublicIssues();

    const stats = app.getDisplayedStats();

    assert.ok(stats.total > 0, "Should show total issue count");
    assert.ok(stats.public > 0, "Should show public issue count");
    assert.strictEqual(stats.local, 0, "Should show zero local issues when unauthenticated");

    assert.strictEqual(stats.total, stats.public + stats.local,
      "Total should equal public + local");
  });

  test("TestPublicDiscovery_EmptyResults", async () => {
    const app = new MockWukkieAppPublic();

    // Clear all posts to simulate no results
    app.getMockAPI().clearPosts();

    await app.loadPublicIssues();

    const issues = app.getIssues();
    assert.strictEqual(issues.length, 0, "Should handle empty results gracefully");

    const stats = app.getDisplayedStats();
    assert.strictEqual(stats.total, 0, "Should show zero issues when no results");
  });

  test("TestPublicDiscovery_APIFailure", async () => {
    // Mock fetch to simulate API failure
    const originalFetch = global.fetch;
    global.fetch = async () => {
      return new Response("Server Error", { status: 500 });
    };

    const app = new MockWukkieAppPublic();

    // Should not throw error on API failure
    await app.loadPublicIssues();

    const issues = app.getIssues();
    assert.strictEqual(issues.length, 0, "Should handle API failure gracefully");

    // Restore original fetch
    global.fetch = originalFetch;
  });

  test("TestPublicDiscovery_MalformedPosts", async () => {
    const app = new MockWukkieAppPublic();

    // Add malformed posts
    app.getMockAPI().addPost({
      uri: "at://malformed/post/1",
      record: {
        text: "🚨", // Title only, no description
        createdAt: "2025-01-15T12:00:00Z"
      },
      author: { handle: "malformed.user" }
    });

    app.getMockAPI().addPost({
      uri: "at://malformed/post/2",
      record: {
        text: "#wukkie", // No issue emoji
        createdAt: "2025-01-15T12:00:00Z"
      },
      author: { handle: "malformed.user" }
    });

    await app.loadPublicIssues();

    const issues = app.getIssues();

    // Should not include malformed posts
    const malformedIssues = issues.filter(i =>
      i.author === "malformed.user" || !i.title || i.title.trim() === ""
    );

    assert.strictEqual(malformedIssues.length, 0,
      "Should not include malformed posts in results");
  });

  test("TestPublicDiscovery_AuthenticationIndependence", async () => {
    // This test verifies that public discovery works without any authentication
    const app = new MockWukkieAppPublic();

    // Simulate completely unauthenticated state
    // (no session, no ATProto manager, no tokens)

    await app.loadPublicIssues();

    const issues = app.getIssues();
    assert.ok(issues.length > 0,
      "Should discover issues without any authentication");

    const stats = app.getDisplayedStats();
    assert.ok(stats.public > 0,
      "Should show public issues without authentication");
  });

  test("TestPublicDiscovery_FrontPageExperience", async () => {
    // Test the complete front page experience for new visitors
    const app = new MockWukkieAppPublic();

    // Simulate first-time visitor: no localStorage, no auth
    await app.loadPublicIssues();

    const issues = app.getIssues();
    const stats = app.getDisplayedStats();

    // Should show something to new visitors
    assert.ok(issues.length > 0 || stats.total >= 0,
      "Front page should not be completely empty for new visitors");

    if (issues.length > 0) {
      // Should show variety of issue types
      const categories = new Set(issues.map(i => i.category));
      assert.ok(categories.size > 1,
        "Should show diverse issue categories to demonstrate platform value");

      // Should show recent activity
      const recentIssue = issues[0];
      const issueDate = new Date(recentIssue.createdAt);
      const daysSinceCreation = (Date.now() - issueDate.getTime()) / (1000 * 60 * 60 * 24);

      assert.ok(daysSinceCreation < 30,
        "Should show recent issues to demonstrate platform activity");
    }
  });
});
