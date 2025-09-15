import { test, describe } from "node:test";
import assert from "node:assert";
import {
  isValidGeoHashtag,
  createPrivacyLocation,
  parseGeoHashtag,
} from "./location-privacy.ts";

// Mock Issue interface for testing
interface Issue {
  id?: string;
  title: string;
  description: string;
  category: string;
  hashtags: string[];
  status: "open" | "in-progress" | "resolved";
  createdAt: string;
  author: string;
  blueskyUri?: string;
  blueskyStatus?: "pending" | "posted" | "failed" | "local-only";
  lastEditedAt?: string;
}

describe("Issue Management with Privacy Locations", () => {
  test("TestCreateIssue_WithSingleLocation", () => {
    const privacyLocation = createPrivacyLocation(51.5074, -0.1278, "London");
    const hashtags = ["#infrastructure", "#safety"];

    // Add geo hashtag to hashtags array (as implemented in app.ts)
    if (
      privacyLocation.geoHashtag &&
      !hashtags.includes(privacyLocation.geoHashtag)
    ) {
      hashtags.unshift(privacyLocation.geoHashtag);
    }

    const issue: Issue = {
      id: "12345",
      title: "Broken streetlight",
      description: "Street light on Main St is not working",
      category: "infrastructure",
      hashtags: hashtags,
      status: "open",
      createdAt: new Date().toISOString(),
      author: "test.bsky.social",
      blueskyStatus: "local-only",
    };

    assert.ok(
      issue.hashtags.some((tag) => isValidGeoHashtag(tag)),
      "should contain geo hashtag",
    );
    assert.strictEqual(
      issue.hashtags[0],
      privacyLocation.geoHashtag,
      "geo hashtag should be first",
    );
    assert.ok(
      issue.hashtags.includes("#infrastructure"),
      "should contain original hashtags",
    );
    assert.ok(
      issue.hashtags.includes("#safety"),
      "should contain original hashtags",
    );
  });

  test("TestCreateIssue_WithMultipleLocations", () => {
    const locations = [
      createPrivacyLocation(51.5074, -0.1278, "London"),
      createPrivacyLocation(52.3676, 4.9041, "Amsterdam"),
      createPrivacyLocation(48.8566, 2.3522, "Paris"),
    ];

    const hashtags = ["#transport", "#railway"];

    // Add all geo hashtags (simulating multiple map clicks or input)
    for (const location of locations) {
      if (!hashtags.includes(location.geoHashtag)) {
        hashtags.unshift(location.geoHashtag);
      }
    }

    const issue: Issue = {
      id: "12346",
      title: "International train delays",
      description: "Delays affecting multiple cities on the route",
      category: "transport",
      hashtags: hashtags,
      status: "open",
      createdAt: new Date().toISOString(),
      author: "test.bsky.social",
    };

    const geoHashtags = issue.hashtags.filter((tag) => isValidGeoHashtag(tag));
    assert.strictEqual(geoHashtags.length, 3, "should have 3 geo hashtags");
    assert.ok(
      issue.hashtags.includes("#transport"),
      "should preserve original hashtags",
    );
    assert.ok(
      issue.hashtags.includes("#railway"),
      "should preserve original hashtags",
    );
  });

  test("TestExtractLocationsFromIssue", () => {
    const issue: Issue = {
      title: "Multi-area problem",
      description: "Issue affecting several neighborhoods",
      category: "environment",
      hashtags: [
        "#geo9c3xgp",
        "#environment",
        "#geo456cfg",
        "#pollution",
        "#geo789hjm",
        "#health",
      ],
      status: "open",
      createdAt: new Date().toISOString(),
      author: "test.bsky.social",
    };

    const geoHashtags = issue.hashtags.filter((tag) => isValidGeoHashtag(tag));
    const otherHashtags = issue.hashtags.filter(
      (tag) => !isValidGeoHashtag(tag),
    );

    assert.strictEqual(
      geoHashtags.length,
      3,
      "should extract 3 location hashtags",
    );
    assert.strictEqual(
      otherHashtags.length,
      3,
      "should extract 3 non-location hashtags",
    );

    assert.deepStrictEqual(geoHashtags, [
      "#geo9c3xgp",
      "#geo456cfg",
      "#geo789hjm",
    ]);
    assert.deepStrictEqual(otherHashtags, [
      "#environment",
      "#pollution",
      "#health",
    ]);
  });

  test("TestIssueValidation_RequiredFields", () => {
    const validIssue: Issue = {
      title: "Test Issue",
      description: "Test description",
      category: "infrastructure",
      hashtags: ["#test"],
      status: "open",
      createdAt: new Date().toISOString(),
      author: "test.bsky.social",
    };

    // Test required fields
    assert.ok(validIssue.title.trim(), "title should not be empty");
    assert.ok(validIssue.description.trim(), "description should not be empty");
    assert.ok(validIssue.category, "category should be present");
    assert.ok(Array.isArray(validIssue.hashtags), "hashtags should be array");
    assert.ok(validIssue.status, "status should be present");
    assert.ok(validIssue.createdAt, "createdAt should be present");
    assert.ok(validIssue.author, "author should be present");
  });

  test("TestIssueValidation_InvalidCases", () => {
    const invalidCases = [
      { title: "", description: "desc", reason: "empty title" },
      { title: "   ", description: "desc", reason: "whitespace title" },
      { title: "title", description: "", reason: "empty description" },
      { title: "title", description: "   ", reason: "whitespace description" },
    ];

    for (const testCase of invalidCases) {
      const isValid = testCase.title.trim() && testCase.description.trim();
      assert.ok(!isValid, `should be invalid for ${testCase.reason}`);
    }
  });

  test("TestFormDataToIssue_WithMultipleLocations", () => {
    // Simulate form data collection
    const formData = {
      title: "Road closure affects multiple areas",
      description: "Construction blocking main route",
      category: "transport",
      hashtags: "#construction #traffic",
      postToBluesky: true,
    };

    const locationInputValue = "#geo9c3xgp #geo456cfg";
    const currentPrivacyLocation = createPrivacyLocation(48.8566, 2.3522);

    // Parse hashtags (simulating app.ts logic)
    const parsedHashtags = formData.hashtags
      .split(/\s+/)
      .map((tag) => tag.trim())
      .filter((tag) => tag.startsWith("#"));

    // Add current privacy location
    if (
      currentPrivacyLocation.geoHashtag &&
      !parsedHashtags.includes(currentPrivacyLocation.geoHashtag)
    ) {
      parsedHashtags.unshift(currentPrivacyLocation.geoHashtag);
    }

    // Add location input geo hashtags
    const inputGeoHashtags = locationInputValue
      .split(/\s+/)
      .filter((tag) => isValidGeoHashtag(tag))
      .filter((tag) => !parsedHashtags.includes(tag));
    parsedHashtags.unshift(...inputGeoHashtags);

    const issue: Issue = {
      id: Date.now().toString(),
      title: formData.title.trim(),
      description: formData.description.trim(),
      category: formData.category,
      hashtags: parsedHashtags,
      status: "open",
      createdAt: new Date().toISOString(),
      author: "test.bsky.social",
      blueskyStatus: formData.postToBluesky ? "pending" : "local-only",
    };

    const geoHashtags = issue.hashtags.filter((tag) => isValidGeoHashtag(tag));
    assert.strictEqual(geoHashtags.length, 3, "should have 3 geo hashtags");
    assert.ok(
      issue.hashtags.includes("#construction"),
      "should include form hashtags",
    );
    assert.ok(
      issue.hashtags.includes("#traffic"),
      "should include form hashtags",
    );
    assert.strictEqual(
      issue.blueskyStatus,
      "pending",
      "should set correct Bluesky status",
    );
  });

  test("TestIssueLocationDisplay_SingleLocation", () => {
    const issue: Issue = {
      title: "Local issue",
      description: "Problem in one area",
      category: "safety",
      hashtags: ["#geo9c3xgp", "#safety", "#lighting"],
      status: "open",
      createdAt: new Date().toISOString(),
      author: "test.bsky.social",
    };

    const geoHashtags = issue.hashtags.filter((tag) => isValidGeoHashtag(tag));
    const hasLocation = geoHashtags.length > 0;
    const buttonText =
      geoHashtags.length === 1
        ? "View Location"
        : `View ${geoHashtags.length} Locations`;

    assert.ok(hasLocation, "should have location");
    assert.strictEqual(geoHashtags.length, 1, "should have one location");
    assert.strictEqual(
      buttonText,
      "View Location",
      "should show singular button text",
    );
  });

  test("TestIssueLocationDisplay_MultipleLocations", () => {
    const issue: Issue = {
      title: "Multi-area issue",
      description: "Problem affecting several locations",
      category: "environment",
      hashtags: ["#geo9c3xgp", "#geo456cfg", "#geo789hjm", "#environment"],
      status: "open",
      createdAt: new Date().toISOString(),
      author: "test.bsky.social",
    };

    const geoHashtags = issue.hashtags.filter((tag) => isValidGeoHashtag(tag));
    const buttonText =
      geoHashtags.length === 1
        ? "View Location"
        : `View ${geoHashtags.length} Locations`;

    assert.strictEqual(geoHashtags.length, 3, "should have three locations");
    assert.strictEqual(
      buttonText,
      "View 3 Locations",
      "should show plural button text",
    );
  });

  test("TestIssueEditing_PreserveLocations", () => {
    const originalIssue: Issue = {
      id: "12345",
      title: "Original title",
      description: "Original description",
      category: "infrastructure",
      hashtags: ["#geo9c3xgp", "#geo456cfg", "#infrastructure", "#safety"],
      status: "open",
      createdAt: "2024-01-01T00:00:00Z",
      author: "test.bsky.social",
    };

    // Simulate editing (extracting geo hashtags for location input)
    const geoHashtags = originalIssue.hashtags.filter((tag) =>
      isValidGeoHashtag(tag),
    );
    const locationInputValue = geoHashtags.join(" ");

    assert.strictEqual(
      locationInputValue,
      "#geo9c3xgp #geo456cfg",
      "should create space-separated input",
    );

    // Simulate form submission after editing
    const updatedHashtags = [
      ...geoHashtags, // preserve locations
      "#infrastructure",
      "#maintenance", // changed hashtag
      "#urgent", // added hashtag
    ];

    const updatedIssue: Issue = {
      ...originalIssue,
      title: "Updated title",
      description: "Updated description",
      hashtags: updatedHashtags,
      lastEditedAt: new Date().toISOString(),
    };

    const updatedGeoHashtags = updatedIssue.hashtags.filter((tag) =>
      isValidGeoHashtag(tag),
    );
    assert.deepStrictEqual(
      updatedGeoHashtags,
      geoHashtags,
      "should preserve geo hashtags",
    );
    assert.ok(
      updatedIssue.hashtags.includes("#maintenance"),
      "should include updated hashtags",
    );
    assert.ok(
      updatedIssue.hashtags.includes("#urgent"),
      "should include new hashtags",
    );
    assert.ok(updatedIssue.lastEditedAt, "should set lastEditedAt");
  });

  test("TestIssueFiltering_ByLocation", () => {
    const issues: Issue[] = [
      {
        title: "Issue 1",
        description: "Description 1",
        category: "safety",
        hashtags: ["#geo9c3xgp", "#safety"],
        status: "open",
        createdAt: new Date().toISOString(),
        author: "user1",
      },
      {
        title: "Issue 2",
        description: "Description 2",
        category: "infrastructure",
        hashtags: ["#geo456cfg", "#infrastructure"],
        status: "open",
        createdAt: new Date().toISOString(),
        author: "user2",
      },
      {
        title: "Issue 3",
        description: "Description 3",
        category: "transport",
        hashtags: ["#geo9c3xgp", "#geo789hjm", "#transport"], // multiple locations
        status: "open",
        createdAt: new Date().toISOString(),
        author: "user3",
      },
    ];

    // Filter by specific geo hashtag
    const targetGeoHashtag = "#geo9c3xgp";
    const issuesInArea = issues.filter((issue) =>
      issue.hashtags.some((tag) => tag === targetGeoHashtag),
    );

    assert.strictEqual(issuesInArea.length, 2, "should find 2 issues in area");
    assert.strictEqual(
      issuesInArea[0].title,
      "Issue 1",
      "should include first matching issue",
    );
    assert.strictEqual(
      issuesInArea[1].title,
      "Issue 3",
      "should include multi-location issue",
    );
  });

  test("TestIssueCreation_WithoutLocation", () => {
    const issue: Issue = {
      title: "General issue",
      description: "Not location-specific",
      category: "other",
      hashtags: ["#general", "#feedback"],
      status: "open",
      createdAt: new Date().toISOString(),
      author: "test.bsky.social",
    };

    const geoHashtags = issue.hashtags.filter((tag) => isValidGeoHashtag(tag));
    const hasLocation = geoHashtags.length > 0;

    assert.strictEqual(geoHashtags.length, 0, "should have no geo hashtags");
    assert.ok(!hasLocation, "should not have location");
  });

  test("TestBlueskStatusManagement", () => {
    const issue: Issue = {
      title: "Test issue",
      description: "Test description",
      category: "test",
      hashtags: ["#test"],
      status: "open",
      createdAt: new Date().toISOString(),
      author: "test.bsky.social",
      blueskyStatus: "pending",
    };

    // Test status transitions
    const statusTransitions = [
      { from: "pending", to: "posted", valid: true },
      { from: "pending", to: "failed", valid: true },
      { from: "posted", to: "failed", valid: false }, // shouldn't change from posted
      { from: "local-only", to: "pending", valid: true },
    ];

    for (const transition of statusTransitions) {
      const canTransition =
        transition.from === "pending" ||
        (transition.from === "local-only" && transition.to === "pending");
      assert.strictEqual(
        canTransition,
        transition.valid,
        `transition from ${transition.from} to ${transition.to} should be ${transition.valid ? "valid" : "invalid"}`,
      );
    }
  });

  test("TestIssueHashtagManagement", () => {
    const initialHashtags = ["#infrastructure", "#safety"];
    const geoHashtagsToAdd = ["#geo9c3xgp", "#geo456cfg"];

    // Simulate adding geo hashtags to existing hashtags
    const combinedHashtags = [...geoHashtagsToAdd, ...initialHashtags];

    assert.strictEqual(
      combinedHashtags.length,
      4,
      "should have 4 total hashtags",
    );

    // Geo hashtags should come first
    const firstTwoHashtags = combinedHashtags.slice(0, 2);
    const allGeo = firstTwoHashtags.every((tag) => isValidGeoHashtag(tag));
    assert.ok(allGeo, "first two hashtags should be geo hashtags");

    // Original hashtags should be preserved
    assert.ok(
      combinedHashtags.includes("#infrastructure"),
      "should preserve original hashtags",
    );
    assert.ok(
      combinedHashtags.includes("#safety"),
      "should preserve original hashtags",
    );
  });

  test("TestIssueLocationArea_BoundingBox", () => {
    const issue: Issue = {
      title: "Multi-location issue",
      description: "Spans multiple areas",
      category: "transport",
      hashtags: ["#geo9c3xgp", "#geo456cfg", "#geo789hjm"],
      status: "open",
      createdAt: new Date().toISOString(),
      author: "test.bsky.social",
    };

    const geoHashtags = issue.hashtags.filter((tag) => isValidGeoHashtag(tag));
    const areas = [];

    // Parse all geo hashtags to areas
    for (const geoHashtag of geoHashtags) {
      const area = parseGeoHashtag(geoHashtag);
      if (area) {
        areas.push(area);
      }
    }

    assert.strictEqual(
      areas.length,
      geoHashtags.length,
      "should parse all geo hashtags",
    );

    if (areas.length > 1) {
      // Calculate bounding box for map display
      let minLat = areas[0].center.lat;
      let maxLat = areas[0].center.lat;
      let minLng = areas[0].center.lng;
      let maxLng = areas[0].center.lng;

      for (const area of areas) {
        minLat = Math.min(minLat, area.center.lat);
        maxLat = Math.max(maxLat, area.center.lat);
        minLng = Math.min(minLng, area.center.lng);
        maxLng = Math.max(maxLng, area.center.lng);
      }

      assert.ok(minLat <= maxLat, "bounding box should be valid");
      assert.ok(minLng <= maxLng, "bounding box should be valid");
    }
  });
});
