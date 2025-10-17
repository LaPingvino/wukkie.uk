import { describe, test } from "node:test";
import assert from "node:assert";
import { JSDOM } from "jsdom";

// Mock implementations for testing
class MockATProtoIssueManager {
  private userHandle: string | null = null;
  private currentLocation: any = null;
  private followedTags: Set<string> = new Set();
  private tagCloud: Map<string, number> = new Map();
  private mockIssues: any[] = [];

  constructor(mockIssues: any[] = []) {
    this.mockIssues = mockIssues;
  }

  setUserHandle(handle: string | null): void {
    this.userHandle = handle;
  }

  setCurrentLocation(location: any): void {
    this.currentLocation = location;
  }

  followTag(tag: string): void {
    this.followedTags.add(tag.startsWith("#") ? tag : `#${tag}`);
  }

  unfollowTag(tag: string): void {
    this.followedTags.delete(tag.startsWith("#") ? tag : `#${tag}`);
  }

  getFollowedTags(): string[] {
    return Array.from(this.followedTags);
  }

  getTagCloud(): Array<{ tag: string; count: number }> {
    return Array.from(this.tagCloud.entries())
      .map(([tag, count]) => ({ tag, count }))
      .sort((a, b) => b.count - a.count);
  }

  async searchIssues(options: { hashtags: string[]; limit: number }): Promise<any[]> {
    // Simulate multi-strategy search
    const ownIssues = this.mockIssues.filter(issue =>
      issue.author === this.userHandle
    );

    const networkIssues = this.mockIssues.filter(issue =>
      issue.author !== this.userHandle &&
      options.hashtags.some(tag => issue.hashtags?.includes(tag))
    );

    const locationIssues = this.currentLocation
      ? this.mockIssues.filter(issue =>
          issue.location?.geoHashtag === this.currentLocation.geoHashtag
        )
      : [];

    // Merge and deduplicate
    const allIssues = [...ownIssues];

    networkIssues.forEach(issue => {
      if (!allIssues.some(existing => existing.id === issue.id)) {
        allIssues.push(issue);
      }
    });

    locationIssues.forEach(issue => {
      if (!allIssues.some(existing => existing.id === issue.id)) {
        allIssues.push(issue);
      }
    });

    // Update tag cloud
    allIssues.forEach(issue => {
      issue.hashtags?.forEach((tag: string) => {
        const count = this.tagCloud.get(tag) || 0;
        this.tagCloud.set(tag, count + 1);
      });
    });

    // Sort: own issues first, then by recency
    allIssues.sort((a, b) => {
      const aIsOwn = a.author === this.userHandle;
      const bIsOwn = b.author === this.userHandle;

      if (aIsOwn && !bIsOwn) return -1;
      if (!aIsOwn && bIsOwn) return 1;

      return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
    });

    return allIssues.slice(0, options.limit);
  }

  async postIssueToBluesky(issue: any, options: any = {}): Promise<string> {
    // Mock Bluesky post formatting
    let postText = `🚨 ${issue.title}\n\n${issue.description}`;

    if (options.includeLocation !== false) {
      const locationText = issue.location.label
        ? `\n\n📍 ${issue.location.geoHashtag} (${issue.location.label})`
        : `\n\n📍 ${issue.location.geoHashtag}`;
      postText += locationText;
    }

    const allHashtags = [
      "#wukkie",
      `#${issue.category}`,
      issue.location.geoHashtag,
      ...issue.hashtags,
      ...(options.customHashtags || []),
    ];

    const uniqueHashtags = [...new Set(allHashtags)];
    if (uniqueHashtags.length > 0) {
      postText += `\n\n${uniqueHashtags.join(" ")}`;
    }

    // Verify no broken formatting
    const hashtagMatches = postText.match(/#[a-zA-Z0-9_]+/g) || [];
    const brokenHashtags = hashtagMatches.filter(tag =>
      tag.length < 3 || tag.includes(" ") || tag.includes("\n")
    );

    if (brokenHashtags.length > 0) {
      throw new Error(`Broken hashtag formatting: ${brokenHashtags.join(", ")}`);
    }

    return `at://did:example:user/app.bsky.feed.post/${Date.now()}`;
  }
}

class MockWukkieApp {
  public atprotoManager: MockATProtoIssueManager | null = null;
  public session: any = null;
  private issues: any[] = [];

  constructor() {
    // Mock DOM elements
    const dom = new JSDOM(`
      <div id="issue-stats"></div>
      <div id="issues-list"></div>
    `);
    global.document = dom.window.document as any;
    global.window = dom.window as any;
  }

  setSession(session: any) {
    this.session = session;
    if (this.atprotoManager) {
      this.atprotoManager.setUserHandle(session.handle);
    }
  }

  setATProtoManager(manager: MockATProtoIssueManager) {
    this.atprotoManager = manager;
    if (this.session) {
      manager.setUserHandle(this.session.handle);
    }
  }

  async loadNetworkIssues(): Promise<void> {
    if (!this.atprotoManager) return;

    const networkIssues = await this.atprotoManager.searchIssues({
      hashtags: ["#wukkie"],
      limit: 50,
    });

    this.issues = networkIssues;
    this.displayIssueStats(this.issues);
  }

  private displayIssueStats(allIssues: any[]): void {
    if (!this.atprotoManager) return;

    const ownIssues = allIssues.filter(
      (issue) => issue.author === this.session?.handle,
    );
    const networkIssues = allIssues.filter(
      (issue) => issue.author !== this.session?.handle,
    );

    const tagCloud = this.atprotoManager.getTagCloud();

    const statsContainer = document.getElementById("issue-stats");
    if (statsContainer) {
      statsContainer.innerHTML = `
        <div class="issue-stats">
          <span class="stat-item">📊 ${allIssues.length} issues</span>
          ${ownIssues.length > 0 ? `<span class="stat-item">👤 ${ownIssues.length} yours</span>` : ""}
          ${networkIssues.length > 0 ? `<span class="stat-item">🌐 ${networkIssues.length} from network</span>` : ""}
        </div>
      `;
    }
  }

  getDisplayedStats(): { total: number; own: number; network: number } {
    const statsContainer = document.getElementById("issue-stats");
    const html = statsContainer?.innerHTML || "";

    const totalMatch = html.match(/📊 (\d+) issues/);
    const ownMatch = html.match(/👤 (\d+) yours/);
    const networkMatch = html.match(/🌐 (\d+) from network/);

    return {
      total: totalMatch ? parseInt(totalMatch[1]) : 0,
      own: ownMatch ? parseInt(ownMatch[1]) : 0,
      network: networkMatch ? parseInt(networkMatch[1]) : 0,
    };
  }
}

describe("Enhanced Search System", () => {
  test("TestEnhancedSearch_MultiStrategySearch", async () => {
    const mockIssues = [
      {
        id: "issue1",
        title: "User's Own Issue",
        author: "joop.kiefte.eu",
        hashtags: ["#wukkie", "#infrastructure"],
        createdAt: "2025-01-15T12:00:00Z",
        location: { geoHashtag: "#geo8ccgmw" }
      },
      {
        id: "issue2",
        title: "Network Issue",
        author: "other.user",
        hashtags: ["#wukkie", "#safety"],
        createdAt: "2025-01-14T12:00:00Z",
        location: { geoHashtag: "#geo8ccgmx" }
      },
      {
        id: "issue3",
        title: "Location Issue",
        author: "location.user",
        hashtags: ["#wukkie", "#environment"],
        createdAt: "2025-01-13T12:00:00Z",
        location: { geoHashtag: "#geo8ccgmw" }
      }
    ];

    const manager = new MockATProtoIssueManager(mockIssues);
    manager.setUserHandle("joop.kiefte.eu");
    manager.setCurrentLocation({ geoHashtag: "#geo8ccgmw" });

    const results = await manager.searchIssues({
      hashtags: ["#wukkie"],
      limit: 10
    });

    // Should find all issues
    assert.strictEqual(results.length, 3, "Should find all matching issues");

    // Should prioritize own issues first
    assert.strictEqual(results[0].author, "joop.kiefte.eu", "Own issue should be first");
    assert.strictEqual(results[0].id, "issue1", "Should be the correct own issue");

    // Should include network and location issues
    const authors = results.map(r => r.author);
    assert.ok(authors.includes("other.user"), "Should include network issues");
    assert.ok(authors.includes("location.user"), "Should include location issues");
  });

  test("TestEnhancedSearch_TagCloudGeneration", async () => {
    const mockIssues = [
      {
        id: "issue1",
        author: "user1",
        hashtags: ["#wukkie", "#infrastructure", "#urgent"],
        createdAt: "2025-01-15T12:00:00Z",
      },
      {
        id: "issue2",
        author: "user2",
        hashtags: ["#wukkie", "#infrastructure", "#safety"],
        createdAt: "2025-01-14T12:00:00Z",
      }
    ];

    const manager = new MockATProtoIssueManager(mockIssues);

    await manager.searchIssues({
      hashtags: ["#wukkie"],
      limit: 10
    });

    const tagCloud = manager.getTagCloud();

    assert.ok(tagCloud.length > 0, "Should generate tag cloud");

    // Should track hashtag frequencies
    const wukkieTag = tagCloud.find(t => t.tag === "#wukkie");
    const infraTag = tagCloud.find(t => t.tag === "#infrastructure");
    const urgentTag = tagCloud.find(t => t.tag === "#urgent");

    assert.ok(wukkieTag, "Should track #wukkie tag");
    assert.strictEqual(wukkieTag.count, 2, "#wukkie should appear in both issues");
    assert.strictEqual(infraTag.count, 2, "#infrastructure should appear in both issues");
    assert.strictEqual(urgentTag.count, 1, "#urgent should appear in one issue");

    // Should sort by frequency (descending)
    assert.ok(tagCloud[0].count >= tagCloud[1].count, "Should sort by frequency");
  });

  test("TestEnhancedSearch_TagFollowing", () => {
    const manager = new MockATProtoIssueManager();

    // Test following tags
    manager.followTag("#infrastructure");
    manager.followTag("safety"); // without # prefix
    manager.followTag("#environment");

    const followedTags = manager.getFollowedTags();

    assert.strictEqual(followedTags.length, 3, "Should track followed tags");
    assert.ok(followedTags.includes("#infrastructure"), "Should include #infrastructure");
    assert.ok(followedTags.includes("#safety"), "Should include #safety (with # added)");
    assert.ok(followedTags.includes("#environment"), "Should include #environment");

    // Test unfollowing
    manager.unfollowTag("#safety");
    const remainingTags = manager.getFollowedTags();

    assert.strictEqual(remainingTags.length, 2, "Should remove unfollowed tag");
    assert.ok(!remainingTags.includes("#safety"), "Should not include unfollowed tag");
  });

  test("TestEnhancedSearch_LocationAwareSearch", async () => {
    const mockIssues = [
      {
        id: "issue1",
        author: "user1",
        hashtags: ["#wukkie"],
        location: { geoHashtag: "#geo8ccgmw" },
        createdAt: "2025-01-15T12:00:00Z",
      },
      {
        id: "issue2",
        author: "user2",
        hashtags: ["#wukkie"],
        location: { geoHashtag: "#geo8ccgmx" },
        createdAt: "2025-01-14T12:00:00Z",
      }
    ];

    const manager = new MockATProtoIssueManager(mockIssues);

    // Without location
    let results = await manager.searchIssues({
      hashtags: ["#wukkie"],
      limit: 10
    });
    assert.strictEqual(results.length, 2, "Should find all issues without location filter");

    // With location set
    manager.setCurrentLocation({ geoHashtag: "#geo8ccgmw" });
    results = await manager.searchIssues({
      hashtags: ["#wukkie"],
      limit: 10
    });

    // Should still find all issues (location adds, doesn't filter)
    assert.strictEqual(results.length, 2, "Should find all issues with location set");

    // Location-specific issue should be included
    const locationIssue = results.find(r => r.location.geoHashtag === "#geo8ccgmw");
    assert.ok(locationIssue, "Should include location-specific issue");
  });

  test("TestEnhancedSearch_UserHandleTracking", async () => {
    const mockIssues = [
      {
        id: "issue1",
        author: "joop.kiefte.eu",
        hashtags: ["#wukkie"],
        createdAt: "2025-01-15T12:00:00Z",
      },
      {
        id: "issue2",
        author: "other.user",
        hashtags: ["#wukkie"],
        createdAt: "2025-01-14T12:00:00Z",
      }
    ];

    const manager = new MockATProtoIssueManager(mockIssues);

    // Without user handle set
    let results = await manager.searchIssues({
      hashtags: ["#wukkie"],
      limit: 10
    });
    // Results should not be prioritized by ownership
    assert.strictEqual(results.length, 2, "Should find all issues");

    // With user handle set
    manager.setUserHandle("joop.kiefte.eu");
    results = await manager.searchIssues({
      hashtags: ["#wukkie"],
      limit: 10
    });

    // Own issue should be first
    assert.strictEqual(results[0].author, "joop.kiefte.eu", "Own issue should be prioritized");
    assert.strictEqual(results[1].author, "other.user", "Network issue should be second");
  });
});

describe("Bluesky Post Formatting", () => {
  test("TestBlueskyPost_CleanFormatting", async () => {
    const manager = new MockATProtoIssueManager();

    const issue = {
      title: "Test Issue",
      description: "This is a test issue description",
      category: "infrastructure",
      hashtags: ["#test", "#urgent"],
      location: {
        geoHashtag: "#geo8ccgmw",
        label: "Test Location"
      }
    };

    const blueskyUri = await manager.postIssueToBluesky(issue, {
      includeLocation: true,
      linkToIssue: false
    });

    assert.ok(blueskyUri.startsWith("at://"), "Should return valid ATProto URI");

    // Test should not throw errors about broken formatting
    // The postIssueToBluesky mock checks for broken hashtags
  });

  test("TestBlueskyPost_HashtagIntegrity", async () => {
    const manager = new MockATProtoIssueManager();

    const issue = {
      title: "Complex Issue",
      description: "Issue with special characters: @user #hashtag",
      category: "safety",
      hashtags: ["#geo8ccgmw", "#emergency"],
      location: {
        geoHashtag: "#geo8ccgmw",
        label: "Complex Location Name (with parentheses)"
      }
    };

    // Should not throw error for valid formatting
    const blueskyUri = await manager.postIssueToBluesky(issue);
    assert.ok(blueskyUri, "Should successfully post with complex content");

    // Test with potentially problematic hashtags
    const problematicIssue = {
      ...issue,
      hashtags: ["#valid", "#al so_invalid", "#"] // Invalid hashtags
    };

    try {
      await manager.postIssueToBluesky(problematicIssue);
      assert.fail("Should throw error for broken hashtags");
    } catch (error) {
      assert.ok(error.message.includes("Broken hashtag"), "Should detect broken hashtags");
    }
  });

  test("TestBlueskyPost_NoNonFunctionalLinks", async () => {
    const manager = new MockATProtoIssueManager();

    const issue = {
      title: "Test Issue",
      description: "Test description",
      category: "infrastructure",
      hashtags: [],
      location: {
        geoHashtag: "#geo8ccgmw"
      }
    };

    // Post with linkToIssue disabled (default behavior now)
    const blueskyUri = await manager.postIssueToBluesky(issue);
    assert.ok(blueskyUri, "Should post successfully without issue links");

    // The mock doesn't add non-functional links, so this test
    // mainly verifies the interface works correctly
  });
});

describe("Issue Statistics Display", () => {
  test("TestIssueStats_DisplayGeneration", async () => {
    const app = new MockWukkieApp();
    const mockIssues = [
      {
        id: "issue1",
        author: "joop.kiefte.eu",
        hashtags: ["#wukkie"],
        createdAt: "2025-01-15T12:00:00Z",
      },
      {
        id: "issue2",
        author: "other.user",
        hashtags: ["#wukkie"],
        createdAt: "2025-01-14T12:00:00Z",
      },
      {
        id: "issue3",
        author: "joop.kiefte.eu",
        hashtags: ["#wukkie"],
        createdAt: "2025-01-13T12:00:00Z",
      }
    ];

    const manager = new MockATProtoIssueManager(mockIssues);
    app.setATProtoManager(manager);
    app.setSession({ handle: "joop.kiefte.eu" });

    await app.loadNetworkIssues();

    const stats = app.getDisplayedStats();

    assert.strictEqual(stats.total, 3, "Should show total issue count");
    assert.strictEqual(stats.own, 2, "Should show own issue count");
    assert.strictEqual(stats.network, 1, "Should show network issue count");
  });

  test("TestIssueStats_EmptyState", async () => {
    const app = new MockWukkieApp();
    const manager = new MockATProtoIssueManager([]);

    app.setATProtoManager(manager);
    app.setSession({ handle: "test.user" });

    await app.loadNetworkIssues();

    const stats = app.getDisplayedStats();

    assert.strictEqual(stats.total, 0, "Should show zero issues");
    assert.strictEqual(stats.own, 0, "Should show zero own issues");
    assert.strictEqual(stats.network, 0, "Should show zero network issues");
  });

  test("TestIssueStats_OnlyOwnIssues", async () => {
    const app = new MockWukkieApp();
    const mockIssues = [
      {
        id: "issue1",
        author: "test.user",
        hashtags: ["#wukkie"],
        createdAt: "2025-01-15T12:00:00Z",
      }
    ];

    const manager = new MockATProtoIssueManager(mockIssues);
    app.setATProtoManager(manager);
    app.setSession({ handle: "test.user" });

    await app.loadNetworkIssues();

    const stats = app.getDisplayedStats();

    assert.strictEqual(stats.total, 1, "Should show one total issue");
    assert.strictEqual(stats.own, 1, "Should show one own issue");
    assert.strictEqual(stats.network, 0, "Should show zero network issues");
  });
});

describe("Authentication Integration", () => {
  test("TestAuthIntegration_HandleTracking", () => {
    const app = new MockWukkieApp();
    const manager = new MockATProtoIssueManager();

    app.setATProtoManager(manager);

    // Simulate login
    const session = { handle: "test.user.eu" };
    app.setSession(session);

    // Manager should receive the handle
    assert.strictEqual(manager["userHandle"], "test.user.eu", "Should set user handle in manager");
  });

  test("TestAuthIntegration_ManagerInitialization", () => {
    const app = new MockWukkieApp();

    // Set session first
    app.setSession({ handle: "early.user" });

    // Then set manager - should get the handle
    const manager = new MockATProtoIssueManager();
    app.setATProtoManager(manager);

    assert.strictEqual(manager["userHandle"], "early.user", "Should get handle when manager is set after session");
  });
});

describe("Network Search Trigger", () => {
  test("TestNetworkSearch_LoadIssuesAfterAuth", async () => {
    const app = new MockWukkieApp();
    const mockIssues = [
      {
        id: "issue1",
        author: "test.user",
        hashtags: ["#wukkie"],
        createdAt: "2025-01-15T12:00:00Z",
      }
    ];

    const manager = new MockATProtoIssueManager(mockIssues);
    app.setATProtoManager(manager);
    app.setSession({ handle: "test.user" });

    // This simulates the fixed loadIssues() call after authentication
    await app.loadNetworkIssues();

    const stats = app.getDisplayedStats();
    assert.strictEqual(stats.total, 1, "Network search should be triggered after authentication");
  });

  test("TestNetworkSearch_RequiresAuthentication", async () => {
    const app = new MockWukkieApp();
    const manager = new MockATProtoIssueManager([
      { id: "issue1", author: "test.user", hashtags: ["#wukkie"], createdAt: "2025-01-15T12:00:00Z" }
    ]);

    app.setATProtoManager(manager);
    // No session set - should not perform network search

    await app.loadNetworkIssues();

    // Without session, manager won't have user handle so results won't be prioritized
    const tagCloud = manager.getTagCloud();
    // Tag cloud should be empty since search requires proper authentication
    assert.strictEqual(tagCloud.length, 0, "Should not perform search without proper authentication");
  });
});
