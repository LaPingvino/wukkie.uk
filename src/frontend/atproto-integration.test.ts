import { test, describe } from "node:test";
import assert from "node:assert";

// Mock ATProto API components for testing
const mockBskyAgent = {
  post: async () => ({ uri: "at://mock.post.uri", cid: "mock-cid" }),
  getProfile: async () => ({ handle: "test.bsky.social", did: "did:plc:test" }),
  login: async () => ({ success: true }),
};

const mockAtpAgent = {
  com: {
    atproto: {
      repo: {
        createRecord: async () => ({ uri: "at://mock.record.uri" }),
        listRecords: async () => ({ records: [] }),
      },
    },
  },
};

describe("ATProto Integration", () => {
  test("TestWukkieIssue_InterfaceStructure", () => {
    interface PrivacyLocation {
      geoHashtag: string;
      label?: string;
      plusCode: string;
      centerLat: number;
      centerLng: number;
      precision: number;
    }

    interface WukkieIssue {
      id: string;
      title: string;
      description: string;
      category: string;
      priority: "low" | "medium" | "high" | "critical";
      status: "open" | "in_progress" | "resolved" | "closed";
      location: PrivacyLocation;
      hashtags: string[];
      media?: Blob[];
      createdAt: string;
      blueskyUri?: string;
      blueskyReplyUri?: string;
    }

    const validIssue: WukkieIssue = {
      id: "issue-123",
      title: "Broken streetlight",
      description: "The streetlight at the corner is not working",
      category: "infrastructure",
      priority: "medium",
      status: "open",
      location: {
        geoHashtag: "#geo9c3xgp",
        label: "Main Street Corner",
        plusCode: "9C3XGP2Q+2V",
        centerLat: 51.5074,
        centerLng: -0.1278,
        precision: 1.0,
      },
      hashtags: ["#infrastructure", "#streetlight", "#geo9c3xgp"],
      createdAt: "2024-01-01T12:00:00Z",
    };

    assert.strictEqual(typeof validIssue.id, "string", "id should be string");
    assert.strictEqual(
      typeof validIssue.title,
      "string",
      "title should be string",
    );
    assert.strictEqual(
      typeof validIssue.description,
      "string",
      "description should be string",
    );
    assert.strictEqual(
      typeof validIssue.category,
      "string",
      "category should be string",
    );
    assert.ok(
      ["low", "medium", "high", "critical"].includes(validIssue.priority),
      "priority should be valid",
    );
    assert.ok(
      ["open", "in_progress", "resolved", "closed"].includes(validIssue.status),
      "status should be valid",
    );
    assert.ok(Array.isArray(validIssue.hashtags), "hashtags should be array");
    assert.strictEqual(
      typeof validIssue.location.geoHashtag,
      "string",
      "geoHashtag should be string",
    );
    assert.ok(
      validIssue.location.geoHashtag.startsWith("#geo"),
      "geoHashtag should start with #geo",
    );
  });

  test("TestWukkieIssue_WithOptionalFields", () => {
    interface PrivacyLocation {
      geoHashtag: string;
      label?: string;
      plusCode: string;
      centerLat: number;
      centerLng: number;
      precision: number;
    }

    interface WukkieIssue {
      id: string;
      title: string;
      description: string;
      category: string;
      priority: "low" | "medium" | "high" | "critical";
      status: "open" | "in_progress" | "resolved" | "closed";
      location: PrivacyLocation;
      hashtags: string[];
      media?: Blob[];
      createdAt: string;
      blueskyUri?: string;
      blueskyReplyUri?: string;
    }

    const issueWithOptionals: WukkieIssue = {
      id: "issue-456",
      title: "Noise complaint",
      description: "Construction noise at night",
      category: "noise",
      priority: "high",
      status: "open",
      location: {
        geoHashtag: "#geo456cfg",
        plusCode: "456CFG2Q+2V",
        centerLat: 52.3676,
        centerLng: 4.9041,
        precision: 1.0,
      },
      hashtags: ["#noise", "#construction", "#geo456cfg"],
      createdAt: "2024-01-01T18:00:00Z",
      blueskyUri: "at://did:plc:test/app.bsky.feed.post/123",
      blueskyReplyUri: "at://did:plc:test/app.bsky.feed.post/456",
    };

    assert.ok(issueWithOptionals.blueskyUri, "should have bluesky URI");
    assert.ok(
      issueWithOptionals.blueskyReplyUri,
      "should have bluesky reply URI",
    );
    assert.ok(
      issueWithOptionals.blueskyUri!.startsWith("at://"),
      "bluesky URI should be AT URI format",
    );
    assert.strictEqual(
      issueWithOptionals.location.label,
      undefined,
      "label should be optional",
    );
  });

  test("TestBlueskyPostOptions_InterfaceStructure", () => {
    interface BlueskyPostOptions {
      linkToIssue?: boolean;
      includeLocation?: boolean;
      customHashtags?: string[];
      threadReply?: string;
    }

    const options: BlueskyPostOptions = {
      linkToIssue: true,
      includeLocation: true,
      customHashtags: ["#emergency", "#urgent"],
      threadReply: "at://did:plc:test/app.bsky.feed.post/parent",
    };

    assert.strictEqual(
      typeof options.linkToIssue,
      "boolean",
      "linkToIssue should be boolean",
    );
    assert.strictEqual(
      typeof options.includeLocation,
      "boolean",
      "includeLocation should be boolean",
    );
    assert.ok(
      Array.isArray(options.customHashtags),
      "customHashtags should be array",
    );
    assert.strictEqual(
      typeof options.threadReply,
      "string",
      "threadReply should be string",
    );

    // Test with empty options
    const emptyOptions: BlueskyPostOptions = {};
    assert.strictEqual(
      typeof emptyOptions,
      "object",
      "empty options should be valid",
    );
  });

  test("TestIssueSearchOptions_InterfaceStructure", () => {
    interface PrivacyLocation {
      geoHashtag: string;
      label?: string;
      plusCode: string;
      centerLat: number;
      centerLng: number;
      precision: number;
    }

    interface IssueSearchOptions {
      geoHashtags?: string[];
      category?: string;
      status?: string;
      hashtags?: string[];
      nearLocation?: PrivacyLocation;
      radius?: number;
    }

    const searchOptions: IssueSearchOptions = {
      geoHashtags: ["#geo9c3xgp", "#geo456cfg"],
      category: "infrastructure",
      status: "open",
      hashtags: ["#streetlight", "#pothole"],
      nearLocation: {
        geoHashtag: "#geo789hjm",
        plusCode: "789HJM2Q+2V",
        centerLat: 48.8566,
        centerLng: 2.3522,
        precision: 1.0,
      },
      radius: 5,
    };

    assert.ok(
      Array.isArray(searchOptions.geoHashtags),
      "geoHashtags should be array",
    );
    assert.strictEqual(
      typeof searchOptions.category,
      "string",
      "category should be string",
    );
    assert.strictEqual(
      typeof searchOptions.status,
      "string",
      "status should be string",
    );
    assert.ok(
      Array.isArray(searchOptions.hashtags),
      "hashtags should be array",
    );
    assert.ok(searchOptions.nearLocation, "nearLocation should be object");
    assert.strictEqual(
      typeof searchOptions.radius,
      "number",
      "radius should be number",
    );
  });

  test("TestWukkieLexicon_Structure", () => {
    const WUKKIE_LEXICON = {
      lex: 1,
      id: "uk.wukkie.issue",
      defs: {
        main: {
          type: "record",
          description: "A public issue report with privacy-friendly location",
          key: "tid",
          record: {
            type: "object",
            required: [
              "title",
              "description",
              "location",
              "category",
              "createdAt",
            ],
            properties: {
              title: {
                type: "string",
                maxLength: 200,
                description: "Issue title",
              },
              description: {
                type: "string",
                maxLength: 2000,
                description: "Detailed issue description",
              },
              location: {
                type: "object",
                required: ["geoHashtag"],
                properties: {
                  geoHashtag: {
                    type: "string",
                    pattern: "^#geo[23456789cfghjmpqrvwxCFGHJMPQRVWX]{6}$",
                    description: "Privacy-friendly geo hashtag",
                  },
                  label: {
                    type: "string",
                    maxLength: 100,
                    description: "Optional location label",
                  },
                },
              },
              category: {
                type: "string",
                enum: [
                  "infrastructure",
                  "environment",
                  "safety",
                  "transport",
                  "social",
                  "other",
                ],
                description: "Issue category",
              },
              priority: {
                type: "string",
                enum: ["low", "medium", "high", "critical"],
                default: "medium",
                description: "Issue priority level",
              },
              status: {
                type: "string",
                enum: ["open", "in_progress", "resolved", "closed"],
                default: "open",
                description: "Current issue status",
              },
              hashtags: {
                type: "array",
                items: { type: "string" },
                description: "Subject hashtags",
              },
              createdAt: {
                type: "string",
                format: "datetime",
                description: "ISO timestamp of creation",
              },
            },
          },
        },
      },
    };

    assert.strictEqual(WUKKIE_LEXICON.lex, 1, "lexicon version should be 1");
    assert.strictEqual(
      WUKKIE_LEXICON.id,
      "uk.wukkie.issue",
      "lexicon ID should match",
    );
    assert.ok(WUKKIE_LEXICON.defs.main, "should have main definition");
    assert.strictEqual(
      WUKKIE_LEXICON.defs.main.type,
      "record",
      "main should be record type",
    );

    // Test required fields
    const required = WUKKIE_LEXICON.defs.main.record.required;
    assert.ok(Array.isArray(required), "required should be array");
    assert.ok(required.includes("title"), "title should be required");
    assert.ok(
      required.includes("description"),
      "description should be required",
    );
    assert.ok(required.includes("location"), "location should be required");
    assert.ok(required.includes("category"), "category should be required");
    assert.ok(required.includes("createdAt"), "createdAt should be required");

    // Test geo hashtag pattern
    const geoPattern =
      WUKKIE_LEXICON.defs.main.record.properties.location.properties.geoHashtag
        .pattern;
    assert.strictEqual(
      geoPattern,
      "^#geo[23456789cfghjmpqrvwxCFGHJMPQRVWX]{6}$",
      "geo hashtag pattern should be correct",
    );
  });

  test("TestLexicon_GeoHashtagPattern", () => {
    const geoHashtagPattern = /^#geo[23456789cfghjmpqrvwxCFGHJMPQRVWX]{6}$/i;

    const validGeoHashtags = [
      "#geo9c3xgp",
      "#geo234567",
      "#geocfghjm",
      "#geoqrvwx2",
      "#GEO9C3XGP", // Should match case-insensitive
      "#GEOcfghjm",
    ];

    const invalidGeoHashtags = [
      "#geo", // too short
      "#geo12345", // too short
      "#geo1234567", // too long
      "#geoabcdef", // invalid characters (a, b, d, e not allowed)
      "#infrastructure", // not a geo hashtag
      "geo9c3xgp", // missing #
      "#geo9c3xg!", // invalid character
      "",
    ];

    for (const hashtag of validGeoHashtags) {
      assert.ok(
        geoHashtagPattern.test(hashtag),
        `"${hashtag}" should match geo hashtag pattern`,
      );
    }

    for (const hashtag of invalidGeoHashtags) {
      assert.ok(
        !geoHashtagPattern.test(hashtag),
        `"${hashtag}" should not match geo hashtag pattern`,
      );
    }
  });

  test("TestATProtoIssueManager_MockImplementation", () => {
    class MockATProtoIssueManager {
      private agent: any;
      private issues: Map<string, any> = new Map();

      constructor(agent: any) {
        this.agent = agent;
      }

      async createIssue(
        issue: any,
      ): Promise<{ success: boolean; uri?: string; error?: string }> {
        try {
          if (!issue.title || !issue.description) {
            return { success: false, error: "Title and description required" };
          }

          const record = {
            $type: "uk.wukkie.issue",
            ...issue,
          };

          const result = await this.agent.com.atproto.repo.createRecord({
            repo: "did:plc:test",
            collection: "uk.wukkie.issue",
            record,
          });

          this.issues.set(issue.id, { ...issue, uri: result.uri });
          return { success: true, uri: result.uri };
        } catch (error) {
          return {
            success: false,
            error: error instanceof Error ? error.message : "Unknown error",
          };
        }
      }

      async getIssue(id: string): Promise<any | null> {
        return this.issues.get(id) || null;
      }

      async listIssues(options: any = {}): Promise<any[]> {
        const issues = Array.from(this.issues.values());

        if (options.category) {
          return issues.filter((issue) => issue.category === options.category);
        }

        if (options.geoHashtags && Array.isArray(options.geoHashtags)) {
          return issues.filter((issue) =>
            options.geoHashtags.includes(issue.location.geoHashtag),
          );
        }

        return issues;
      }
    }

    const manager = new MockATProtoIssueManager(mockAtpAgent);

    const testIssue = {
      id: "test-123",
      title: "Test Issue",
      description: "This is a test issue",
      category: "infrastructure",
      location: { geoHashtag: "#geo9c3xgp" },
    };

    return manager
      .createIssue(testIssue)
      .then((result) => {
        assert.strictEqual(
          result.success,
          true,
          "should create issue successfully",
        );
        assert.ok(result.uri, "should return URI");

        return manager.getIssue("test-123");
      })
      .then((retrievedIssue) => {
        assert.ok(retrievedIssue, "should retrieve created issue");
        assert.strictEqual(
          retrievedIssue.title,
          "Test Issue",
          "should have correct title",
        );

        return manager.listIssues();
      })
      .then((issues) => {
        assert.strictEqual(issues.length, 1, "should list created issues");
        assert.strictEqual(
          issues[0].id,
          "test-123",
          "should have correct issue ID",
        );
      });
  });

  test("TestBlueskyPostFormatting", () => {
    function formatIssueForBluesky(issue: any, options: any = {}): string {
      let post = `🚨 New Issue: ${issue.title}\n\n${issue.description}`;

      if (options.includeLocation && issue.location) {
        post += `\n\n📍 ${issue.location.geoHashtag}`;
        if (issue.location.label) {
          post += ` (${issue.location.label})`;
        }
      }

      if (issue.hashtags && issue.hashtags.length > 0) {
        post += `\n\n${issue.hashtags.join(" ")}`;
      }

      if (options.linkToIssue && issue.id) {
        post += `\n\nFull details: https://wukkie.uk/issue/${issue.id}`;
      }

      return post;
    }

    const testIssue = {
      id: "test-456",
      title: "Broken streetlight",
      description: "The streetlight is not working",
      location: {
        geoHashtag: "#geo9c3xgp",
        label: "Main Street",
      },
      hashtags: ["#infrastructure", "#streetlight", "#geo9c3xgp"],
    };

    // Test basic formatting
    const basicPost = formatIssueForBluesky(testIssue);
    assert.ok(
      basicPost.includes("🚨 New Issue: Broken streetlight"),
      "should include title",
    );
    assert.ok(
      basicPost.includes("The streetlight is not working"),
      "should include description",
    );

    // Test with location
    const withLocation = formatIssueForBluesky(testIssue, {
      includeLocation: true,
    });
    assert.ok(
      withLocation.includes("📍 #geo9c3xgp (Main Street)"),
      "should include location",
    );

    // Test with link
    const withLink = formatIssueForBluesky(testIssue, { linkToIssue: true });
    assert.ok(
      withLink.includes("https://wukkie.uk/issue/test-456"),
      "should include issue link",
    );

    // Test with all options
    const fullPost = formatIssueForBluesky(testIssue, {
      includeLocation: true,
      linkToIssue: true,
    });
    assert.ok(
      fullPost.includes("#geo9c3xgp"),
      "full post should include geo hashtag",
    );
    assert.ok(
      fullPost.includes("#infrastructure"),
      "full post should include hashtags",
    );
    assert.ok(
      fullPost.includes("https://wukkie.uk/issue/"),
      "full post should include link",
    );
  });

  test("TestBlueskyPostLengthValidation", () => {
    function validatePostLength(text: string): {
      valid: boolean;
      length: number;
      maxLength: number;
    } {
      const maxLength = 300; // Bluesky character limit
      const length = text.length;

      return {
        valid: length <= maxLength,
        length,
        maxLength,
      };
    }

    function truncatePost(text: string, maxLength: number = 300): string {
      if (text.length <= maxLength) return text;

      const truncated = text.substring(0, maxLength - 3);
      return truncated + "...";
    }

    // Test normal length post
    const normalPost = "This is a normal length post about an issue.";
    const normalValidation = validatePostLength(normalPost);
    assert.strictEqual(
      normalValidation.valid,
      true,
      "normal post should be valid",
    );
    assert.ok(
      normalValidation.length < normalValidation.maxLength,
      "should be under limit",
    );

    // Test long post
    const longPost = "A".repeat(350);
    const longValidation = validatePostLength(longPost);
    assert.strictEqual(
      longValidation.valid,
      false,
      "long post should be invalid",
    );
    assert.strictEqual(
      longValidation.length,
      350,
      "should report correct length",
    );

    // Test truncation
    const truncated = truncatePost(longPost);
    assert.ok(truncated.length <= 300, "truncated post should be under limit");
    assert.ok(
      truncated.endsWith("..."),
      "truncated post should end with ellipsis",
    );

    // Test edge case - exactly at limit
    const exactLimitPost = "A".repeat(300);
    const exactValidation = validatePostLength(exactLimitPost);
    assert.strictEqual(
      exactValidation.valid,
      true,
      "post at exact limit should be valid",
    );
  });

  test("TestIssueSearchFunctionality", () => {
    const mockIssues = [
      {
        id: "1",
        category: "infrastructure",
        status: "open",
        location: { geoHashtag: "#geo9c3xgp" },
        hashtags: ["#infrastructure", "#streetlight", "#geo9c3xgp"],
      },
      {
        id: "2",
        category: "environment",
        status: "resolved",
        location: { geoHashtag: "#geo456cfg" },
        hashtags: ["#environment", "#pollution", "#geo456cfg"],
      },
      {
        id: "3",
        category: "infrastructure",
        status: "open",
        location: { geoHashtag: "#geo9c3xgp" },
        hashtags: ["#infrastructure", "#pothole", "#geo9c3xgp"],
      },
    ];

    function searchIssues(issues: any[], options: any): any[] {
      let results = [...issues];

      if (options.category) {
        results = results.filter(
          (issue) => issue.category === options.category,
        );
      }

      if (options.status) {
        results = results.filter((issue) => issue.status === options.status);
      }

      if (options.geoHashtags && Array.isArray(options.geoHashtags)) {
        results = results.filter((issue) =>
          options.geoHashtags.includes(issue.location.geoHashtag),
        );
      }

      if (options.hashtags && Array.isArray(options.hashtags)) {
        results = results.filter((issue) =>
          options.hashtags.some((tag) => issue.hashtags.includes(tag)),
        );
      }

      return results;
    }

    // Test category search
    const infraResults = searchIssues(mockIssues, {
      category: "infrastructure",
    });
    assert.strictEqual(
      infraResults.length,
      2,
      "should find 2 infrastructure issues",
    );

    // Test status search
    const openResults = searchIssues(mockIssues, { status: "open" });
    assert.strictEqual(openResults.length, 2, "should find 2 open issues");

    // Test geo hashtag search
    const geoResults = searchIssues(mockIssues, {
      geoHashtags: ["#geo9c3xgp"],
    });
    assert.strictEqual(
      geoResults.length,
      2,
      "should find 2 issues in geo area",
    );

    // Test hashtag search
    const hashtagResults = searchIssues(mockIssues, {
      hashtags: ["#streetlight"],
    });
    assert.strictEqual(
      hashtagResults.length,
      1,
      "should find 1 streetlight issue",
    );

    // Test combined search
    const combinedResults = searchIssues(mockIssues, {
      category: "infrastructure",
      status: "open",
    });
    assert.strictEqual(
      combinedResults.length,
      2,
      "should find 2 open infrastructure issues",
    );

    // Test no results
    const noResults = searchIssues(mockIssues, { category: "nonexistent" });
    assert.strictEqual(
      noResults.length,
      0,
      "should find no results for nonexistent category",
    );
  });

  test("TestErrorHandling_InvalidIssueData", () => {
    function validateIssueData(issue: any): {
      valid: boolean;
      errors: string[];
    } {
      const errors: string[] = [];

      if (!issue.title || issue.title.trim().length === 0) {
        errors.push("Title is required");
      }

      if (issue.title && issue.title.length > 200) {
        errors.push("Title must be 200 characters or less");
      }

      if (!issue.description || issue.description.trim().length === 0) {
        errors.push("Description is required");
      }

      if (issue.description && issue.description.length > 2000) {
        errors.push("Description must be 2000 characters or less");
      }

      if (!issue.location || !issue.location.geoHashtag) {
        errors.push("Location with geo hashtag is required");
      }

      const validCategories = [
        "infrastructure",
        "environment",
        "safety",
        "transport",
        "social",
        "other",
      ];
      if (!issue.category || !validCategories.includes(issue.category)) {
        errors.push("Valid category is required");
      }

      const validPriorities = ["low", "medium", "high", "critical"];
      if (issue.priority && !validPriorities.includes(issue.priority)) {
        errors.push("Invalid priority level");
      }

      return {
        valid: errors.length === 0,
        errors,
      };
    }

    // Test valid issue
    const validIssue = {
      title: "Valid Issue",
      description: "This is a valid issue description",
      category: "infrastructure",
      priority: "medium",
      location: { geoHashtag: "#geo9c3xgp" },
    };

    const validResult = validateIssueData(validIssue);
    assert.strictEqual(
      validResult.valid,
      true,
      "valid issue should pass validation",
    );
    assert.strictEqual(
      validResult.errors.length,
      0,
      "valid issue should have no errors",
    );

    // Test invalid issues
    const invalidIssues = [
      {
        description: "Missing title",
        category: "infrastructure",
        location: { geoHashtag: "#geo9c3xgp" },
      },
      {
        title: "Missing description",
        category: "infrastructure",
        location: { geoHashtag: "#geo9c3xgp" },
      },
      {
        title: "Missing category",
        description: "Description",
        location: { geoHashtag: "#geo9c3xgp" },
      },
      {
        title: "Missing location",
        description: "Description",
        category: "infrastructure",
      },
      {
        title: "A".repeat(201),
        description: "Description",
        category: "infrastructure",
        location: { geoHashtag: "#geo9c3xgp" },
      },
    ];

    for (let i = 0; i < invalidIssues.length; i++) {
      const result = validateIssueData(invalidIssues[i]);
      assert.strictEqual(
        result.valid,
        false,
        `invalid issue ${i} should fail validation`,
      );
      assert.ok(
        result.errors.length > 0,
        `invalid issue ${i} should have errors`,
      );
    }
  });

  test("TestATProtoRecord_Structure", () => {
    function createATProtoRecord(issue: any): any {
      const record = {
        $type: "uk.wukkie.issue",
        title: issue.title,
        description: issue.description,
        location: {
          geoHashtag: issue.location.geoHashtag,
          ...(issue.location.label && { label: issue.location.label }),
        },
        category: issue.category,
        priority: issue.priority || "medium",
        status: issue.status || "open",
        hashtags: issue.hashtags || [],
        createdAt: issue.createdAt || new Date().toISOString(),
      };

      return record;
    }

    const testIssue = {
      title: "Test Issue",
      description: "Test description",
      category: "infrastructure",
      location: {
        geoHashtag: "#geo9c3xgp",
        label: "Test Location",
      },
      hashtags: ["#test", "#infrastructure"],
    };

    const record = createATProtoRecord(testIssue);

    assert.strictEqual(
      record.$type,
      "uk.wukkie.issue",
      "should have correct type",
    );
    assert.strictEqual(
      record.title,
      testIssue.title,
      "should have correct title",
    );
    assert.strictEqual(
      record.description,
      testIssue.description,
      "should have correct description",
    );
    assert.strictEqual(
      record.category,
      testIssue.category,
      "should have correct category",
    );
    assert.strictEqual(
      record.location.geoHashtag,
      testIssue.location.geoHashtag,
      "should have correct geo hashtag",
    );
    assert.strictEqual(
      record.location.label,
      testIssue.location.label,
      "should have correct location label",
    );
    assert.strictEqual(
      record.priority,
      "medium",
      "should have default priority",
    );
    assert.strictEqual(record.status, "open", "should have default status");
    assert.ok(Array.isArray(record.hashtags), "hashtags should be array");
    assert.ok(record.createdAt, "should have creation timestamp");
  });

  test("TestThreading_BlueskyReplies", () => {
    interface ThreadContext {
      root?: string;
      parent?: string;
    }

    function createThreadedPost(
      issue: any,
      replyTo?: string,
    ): { text: string; reply?: ThreadContext } {
      const post: any = {
        text: `🚨 Update on issue: ${issue.title}\n\nStatus: ${issue.status}\n\n${issue.hashtags.join(" ")}`,
      };

      if (replyTo) {
        post.reply = {
          root: replyTo,
          parent: replyTo,
        };
      }

      return post;
    }

    const issue = {
      title: "Streetlight Issue",
      status: "in_progress",
      hashtags: ["#infrastructure", "#streetlight", "#geo9c3xgp"],
    };

    // Test initial post (no reply)
    const initialPost = createThreadedPost(issue);
    assert.ok(
      initialPost.text.includes("🚨 Update on issue"),
      "should format update text",
    );
    assert.ok(
      initialPost.text.includes("Status: in_progress"),
      "should include status",
    );
    assert.strictEqual(
      initialPost.reply,
      undefined,
      "initial post should have no reply context",
    );

    // Test reply post
    const parentUri = "at://did:plc:test/app.bsky.feed.post/parent123";
    const replyPost = createThreadedPost(issue, parentUri);
    assert.ok(replyPost.reply, "reply post should have reply context");
    assert.strictEqual(
      replyPost.reply!.root,
      parentUri,
      "should set correct root",
    );
    assert.strictEqual(
      replyPost.reply!.parent,
      parentUri,
      "should set correct parent",
    );
  });

  test("TestIntegration_ATProtoWithBluesky", () => {
    class MockIntegratedManager {
      private atpAgent: any;
      private bskyAgent: any;

      constructor(atpAgent: any, bskyAgent: any) {
        this.atpAgent = atpAgent;
        this.bskyAgent = bskyAgent;
      }

      async createIssueAndPost(
        issue: any,
        postToBluesky: boolean = false,
      ): Promise<{
        atpUri?: string;
        bskyUri?: string;
        success: boolean;
        error?: string;
      }> {
        try {
          // Create ATProto record
          const atpResult = await this.atpAgent.com.atproto.repo.createRecord({
            repo: "did:plc:test",
            collection: "uk.wukkie.issue",
            record: {
              $type: "uk.wukkie.issue",
              ...issue,
            },
          });

          const result: any = {
            atpUri: atpResult.uri,
            success: true,
          };

          // Optionally post to Bluesky
          if (postToBluesky) {
            const postText = this.formatForBluesky(issue);
            const bskyResult = await this.bskyAgent.post({ text: postText });
            result.bskyUri = bskyResult.uri;
          }

          return result;
        } catch (error) {
          return {
            success: false,
            error: error instanceof Error ? error.message : "Unknown error",
          };
        }
      }

      private formatForBluesky(issue: any): string {
        return `🚨 ${issue.title}\n\n${issue.description}\n\n📍 ${issue.location.geoHashtag}\n\n${issue.hashtags.join(" ")}`;
      }
    }

    const manager = new MockIntegratedManager(mockAtpAgent, mockBskyAgent);

    const testIssue = {
      title: "Integration Test Issue",
      description: "Testing ATProto and Bluesky integration",
      category: "infrastructure",
      location: { geoHashtag: "#geo9c3xgp" },
      hashtags: ["#test", "#integration", "#geo9c3xgp"],
    };

    return manager
      .createIssueAndPost(testIssue, false)
      .then((result) => {
        assert.strictEqual(
          result.success,
          true,
          "should create ATProto record successfully",
        );
        assert.ok(result.atpUri, "should return ATProto URI");
        assert.strictEqual(
          result.bskyUri,
          undefined,
          "should not post to Bluesky when disabled",
        );

        return manager.createIssueAndPost(testIssue, true);
      })
      .then((result) => {
        assert.strictEqual(
          result.success,
          true,
          "should create both ATProto record and Bluesky post",
        );
        assert.ok(result.atpUri, "should return ATProto URI");
        assert.ok(result.bskyUri, "should return Bluesky URI when enabled");
      });
  });

  test("TestRichText_BlueskyFormatting", () => {
    function createRichTextPost(issue: any): any {
      const text = `🚨 New Issue: ${issue.title}\n\n${issue.description}\n\n📍 ${issue.location.geoHashtag}`;

      // Mock RichText facets for hashtags and links
      const facets: any[] = [];

      // Find hashtag positions
      issue.hashtags.forEach((hashtag: string) => {
        const index = text.indexOf(hashtag);
        if (index !== -1) {
          facets.push({
            index: { byteStart: index, byteEnd: index + hashtag.length },
            features: [
              {
                $type: "app.bsky.richtext.facet#tag",
                tag: hashtag.substring(1), // Remove # for tag feature
              },
            ],
          });
        }
      });

      return {
        text,
        facets,
      };
    }

    const issue = {
      title: "Rich Text Test",
      description: "Testing rich text formatting",
      location: { geoHashtag: "#geo9c3xgp" },
      hashtags: ["#infrastructure", "#geo9c3xgp"],
    };

    const richText = createRichTextPost(issue);

    assert.ok(richText.text, "should have text content");
    assert.ok(Array.isArray(richText.facets), "should have facets array");
    assert.ok(
      richText.facets.length > 0,
      "should have facet entries for hashtags",
    );

    // Verify facet structure
    const facet = richText.facets[0];
    assert.ok(facet.index, "facet should have index");
    assert.ok(
      typeof facet.index.byteStart === "number",
      "should have byte start",
    );
    assert.ok(typeof facet.index.byteEnd === "number", "should have byte end");
    assert.ok(Array.isArray(facet.features), "should have features array");
  });

  test("TestPerformance_LargeDatasets", () => {
    function measurePerformance<T>(fn: () => T): {
      result: T;
      duration: number;
    } {
      const start = Date.now();
      const result = fn();
      const duration = Date.now() - start;
      return { result, duration };
    }

    // Test creating many issues
    const createManyIssues = () => {
      const issues = [];
      for (let i = 0; i < 100; i++) {
        issues.push({
          id: `issue-${i}`,
          title: `Issue ${i}`,
          description: `Description for issue ${i}`,
          category: "infrastructure",
          location: { geoHashtag: `#geo${i.toString().padStart(6, "0")}` },
          hashtags: [`#issue${i}`, "#performance"],
        });
      }
      return issues;
    };

    const { result: issues, duration } = measurePerformance(createManyIssues);

    assert.strictEqual(issues.length, 100, "should create 100 issues");
    assert.ok(
      duration < 1000,
      `issue creation should be fast (took ${duration}ms)`,
    );

    // Test searching through issues
    const searchPerformance = measurePerformance(() => {
      return issues.filter(
        (issue) =>
          issue.category === "infrastructure" &&
          issue.hashtags.includes("#performance"),
      );
    });

    assert.ok(
      searchPerformance.duration < 100,
      `search should be fast (took ${searchPerformance.duration}ms)`,
    );
    assert.strictEqual(
      searchPerformance.result.length,
      100,
      "should find all matching issues",
    );
  });

  test("TestEdgeCases_ATProtoIntegration", () => {
    // Test with minimal issue data
    const minimalIssue = {
      title: "Minimal",
      description: "Minimal description",
      category: "other",
      location: { geoHashtag: "#geo234567" },
    };

    function validateMinimalIssue(issue: any): boolean {
      return !!(
        issue.title &&
        issue.description &&
        issue.category &&
        issue.location?.geoHashtag
      );
    }

    assert.ok(
      validateMinimalIssue(minimalIssue),
      "minimal issue should be valid",
    );

    // Test with maximum data
    const maximalIssue = {
      id: "maximal-test",
      title: "A".repeat(200), // Max title length
      description: "B".repeat(2000), // Max description length
      category: "infrastructure",
      priority: "critical",
      status: "open",
      location: {
        geoHashtag: "#geocfghjm",
        label: "C".repeat(100), // Max label length
      },
      hashtags: Array.from({ length: 20 }, (_, i) => `#tag${i}`), // Many hashtags
      createdAt: "2024-01-01T12:00:00Z",
      blueskyUri: "at://did:plc:test/app.bsky.feed.post/maximal",
      blueskyReplyUri: "at://did:plc:test/app.bsky.feed.post/reply",
    };

    assert.ok(
      validateMinimalIssue(maximalIssue),
      "maximal issue should be valid",
    );
    assert.strictEqual(
      maximalIssue.title.length,
      200,
      "should handle max title length",
    );
    assert.strictEqual(
      maximalIssue.description.length,
      2000,
      "should handle max description length",
    );
    assert.strictEqual(
      maximalIssue.hashtags.length,
      20,
      "should handle many hashtags",
    );

    // Test with edge case geo hashtags
    const edgeCaseGeoHashtags = [
      "#geo234567", // All numbers
      "#geocfghjm", // All letters
      "#geo2cfgjm", // Mixed
      "#geoQRVWX2", // Mixed case (should be handled)
    ];

    const geoPattern = /^#geo[23456789cfghjmpqrvwxCFGHJMPQRVWX]{6}$/i;

    for (const geoHashtag of edgeCaseGeoHashtags) {
      assert.ok(
        geoPattern.test(geoHashtag),
        `${geoHashtag} should be valid geo hashtag`,
      );
    }
  });
});
