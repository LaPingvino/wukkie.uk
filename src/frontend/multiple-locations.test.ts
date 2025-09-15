import { test, describe } from "node:test";
import assert from "node:assert";
import {
  isValidGeoHashtag,
  extractGeoHashtags,
  createPrivacyLocation,
  parseGeoHashtag,
} from "./location-privacy.ts";

describe("Multiple Location Functionality", () => {
  test("TestParseMultipleGeoHashtagsFromInput", () => {
    const input = "#geo9c3xgp #geo456cfg #geo789hjm";
    const tokens = input.split(/\s+/);
    const geoHashtags = tokens.filter((token) => isValidGeoHashtag(token));

    assert.strictEqual(geoHashtags.length, 3, "should find 3 geo hashtags");
    assert.deepStrictEqual(geoHashtags, [
      "#geo9c3xgp",
      "#geo456cfg",
      "#geo789hjm",
    ]);
  });

  test("TestParseMultipleGeoHashtagsWithOtherContent", () => {
    const input =
      "some text #geo9c3xgp more text #infrastructure #geo456cfg end";
    const tokens = input.split(/\s+/);
    const geoHashtags = tokens.filter((token) => isValidGeoHashtag(token));

    assert.strictEqual(geoHashtags.length, 2, "should find only geo hashtags");
    assert.ok(geoHashtags.includes("#geo9c3xgp"));
    assert.ok(geoHashtags.includes("#geo456cfg"));
    assert.ok(
      !geoHashtags.includes("#infrastructure"),
      "should not include non-geo hashtags",
    );
  });

  test("TestFilterGeoHashtagsFromHashtagArray", () => {
    const allHashtags = [
      "#infrastructure",
      "#geo9c3xgp",
      "#safety",
      "#geo456cfg",
      "#pothole",
      "#geo789hjm",
    ];

    const geoHashtags = allHashtags.filter((tag) => isValidGeoHashtag(tag));

    assert.strictEqual(
      geoHashtags.length,
      3,
      "should extract only geo hashtags",
    );
    assert.deepStrictEqual(geoHashtags, [
      "#geo9c3xgp",
      "#geo456cfg",
      "#geo789hjm",
    ]);
  });

  test("TestNoDuplicateGeoHashtags", () => {
    const existingHashtags = ["#geo9c3xgp", "#infrastructure"];
    const newGeoHashtag = "#geo9c3xgp"; // duplicate

    const shouldAdd = !existingHashtags.includes(newGeoHashtag);
    assert.strictEqual(
      shouldAdd,
      false,
      "should not add duplicate geo hashtag",
    );
  });

  test("TestAddNewGeoHashtagToExisting", () => {
    const existingHashtags = ["#geo9c3xgp", "#infrastructure"];
    const newGeoHashtag = "#geo456cfg"; // new

    const shouldAdd = !existingHashtags.includes(newGeoHashtag);
    assert.strictEqual(shouldAdd, true, "should add new geo hashtag");

    if (shouldAdd) {
      existingHashtags.push(newGeoHashtag);
    }

    assert.strictEqual(
      existingHashtags.length,
      3,
      "should have 3 hashtags total",
    );
    assert.ok(
      existingHashtags.includes("#geo456cfg"),
      "should include new geo hashtag",
    );
  });

  test("TestCreateMultiplePrivacyLocations", () => {
    const coordinates = [
      { lat: 51.5074, lng: -0.1278, label: "London" },
      { lat: 52.3676, lng: 4.9041, label: "Amsterdam" },
      { lat: 48.8566, lng: 2.3522, label: "Paris" },
    ];

    const locations = coordinates.map((coord) =>
      createPrivacyLocation(coord.lat, coord.lng, coord.label),
    );

    assert.strictEqual(locations.length, 3, "should create 3 locations");

    // All should be valid privacy locations
    for (const location of locations) {
      assert.ok(
        location.geoHashtag.startsWith("#geo"),
        "should have valid geo hashtag",
      );
      assert.strictEqual(typeof location.label, "string", "should have label");
      assert.ok(location.precision > 0, "should have positive precision");
    }

    // All geo hashtags should be unique
    const hashtags = locations.map((loc) => loc.geoHashtag);
    const uniqueHashtags = new Set(hashtags);
    assert.strictEqual(
      hashtags.length,
      uniqueHashtags.size,
      "all geo hashtags should be unique",
    );
  });

  test("TestParseMultipleGeoHashtagsToAreas", () => {
    const geoHashtags = ["#geo9c3xgp", "#geo456cfg", "#geo789hjm"];
    const areas = [];

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

    for (const area of areas) {
      assert.ok("center" in area, "should have center");
      assert.ok("southWest" in area, "should have southWest");
      assert.ok("northEast" in area, "should have northEast");
    }
  });

  test("TestMixedHashtagsWithMultipleLocations", () => {
    // Simulate hashtags array from a real issue
    const issueHashtags = [
      "#geo9c3xgp", // London area
      "#infrastructure", // category
      "#geo456cfg", // Amsterdam area
      "#safety", // category
      "#pothole", // specific issue
      "#geo789hjm", // Paris area
    ];

    const geoHashtags = issueHashtags.filter((tag) => isValidGeoHashtag(tag));
    const otherHashtags = issueHashtags.filter(
      (tag) => !isValidGeoHashtag(tag),
    );

    assert.strictEqual(
      geoHashtags.length,
      3,
      "should find 3 location hashtags",
    );
    assert.strictEqual(
      otherHashtags.length,
      3,
      "should find 3 non-location hashtags",
    );

    assert.deepStrictEqual(geoHashtags, [
      "#geo9c3xgp",
      "#geo456cfg",
      "#geo789hjm",
    ]);
    assert.deepStrictEqual(otherHashtags, [
      "#infrastructure",
      "#safety",
      "#pothole",
    ]);
  });

  test("TestMultipleLocationButtonText", () => {
    // Test the logic for showing location button text
    const testCases = [
      { geoCount: 0, expected: "" }, // no button
      { geoCount: 1, expected: "View Location" },
      { geoCount: 2, expected: "View 2 Locations" },
      { geoCount: 5, expected: "View 5 Locations" },
    ];

    for (const testCase of testCases) {
      let buttonText = "";
      if (testCase.geoCount > 0) {
        buttonText =
          testCase.geoCount === 1
            ? "View Location"
            : `View ${testCase.geoCount} Locations`;
      }

      assert.strictEqual(
        buttonText,
        testCase.expected,
        `should show correct button text for ${testCase.geoCount} locations`,
      );
    }
  });

  test("TestSpaceSeparatedGeoHashtagInput", () => {
    const testInputs = [
      {
        input: "#geo9c3xgp #geo456cfg",
        expected: ["#geo9c3xgp", "#geo456cfg"],
      },
      {
        input: "  #geo9c3xgp   #geo456cfg  ",
        expected: ["#geo9c3xgp", "#geo456cfg"],
        description: "should handle extra whitespace",
      },
      {
        input: "#geo9c3xgp\n#geo456cfg\t#geo789hjm",
        expected: ["#geo9c3xgp", "#geo456cfg", "#geo789hjm"],
      },
      {
        input: "text #geo9c3xgp more #geo456cfg text",
        expected: ["#geo9c3xgp", "#geo456cfg"],
      },
    ];

    for (const testCase of testInputs) {
      const tokens = testCase.input.split(/\s+/);
      const geoHashtags = tokens.filter((token) => isValidGeoHashtag(token));

      assert.deepStrictEqual(
        geoHashtags,
        testCase.expected,
        `should parse "${testCase.input}" correctly`,
      );
    }
  });

  test("TestLocationBoundingBoxCalculation", () => {
    // Test calculating bounding box for multiple locations
    const areas = [
      { center: { lat: 51.5074, lng: -0.1278 } }, // London
      { center: { lat: 52.3676, lng: 4.9041 } }, // Amsterdam
      { center: { lat: 48.8566, lng: 2.3522 } }, // Paris
    ];

    if (areas.length === 0) {
      assert.fail("should have areas to test");
      return;
    }

    // Calculate bounding box
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

    assert.ok(minLat < maxLat, "min lat should be less than max lat");
    assert.ok(minLng < maxLng, "min lng should be less than max lng");

    // Should encompass all locations
    assert.ok(minLat <= 48.8566, "should include Paris lat"); // Paris is southernmost
    assert.ok(maxLat >= 52.3676, "should include Amsterdam lat"); // Amsterdam is northernmost
    assert.ok(minLng <= -0.1278, "should include London lng"); // London is westernmost
    assert.ok(maxLng >= 4.9041, "should include Amsterdam lng"); // Amsterdam is easternmost
  });

  test("TestMultipleLocationFormSubmission", () => {
    // Simulate form submission with multiple locations
    const formHashtags = "#infrastructure #safety";
    const locationInput = "#geo9c3xgp #geo456cfg";
    const currentPrivacyLocation = createPrivacyLocation(
      48.8566,
      2.3522,
      "Paris",
    );

    // Parse hashtags from form
    const parsedHashtags = formHashtags
      .split(/\s+/)
      .map((tag) => tag.trim())
      .filter((tag) => tag.startsWith("#"));

    // Add current privacy location if not already present
    if (
      currentPrivacyLocation?.geoHashtag &&
      !parsedHashtags.includes(currentPrivacyLocation.geoHashtag)
    ) {
      parsedHashtags.unshift(currentPrivacyLocation.geoHashtag);
    }

    // Add geo hashtags from location input
    const inputGeoHashtags = locationInput
      .split(/\s+/)
      .filter((tag) => isValidGeoHashtag(tag))
      .filter((tag) => !parsedHashtags.includes(tag));
    parsedHashtags.unshift(...inputGeoHashtags);

    // Should have all hashtags combined
    assert.ok(
      parsedHashtags.includes(currentPrivacyLocation.geoHashtag),
      "should include current privacy location",
    );
    assert.ok(
      parsedHashtags.includes("#geo9c3xgp"),
      "should include first input location",
    );
    assert.ok(
      parsedHashtags.includes("#geo456cfg"),
      "should include second input location",
    );
    assert.ok(
      parsedHashtags.includes("#infrastructure"),
      "should include form hashtag",
    );
    assert.ok(
      parsedHashtags.includes("#safety"),
      "should include form hashtag",
    );

    // Geo hashtags should come first
    const geoCount = parsedHashtags.filter((tag) =>
      isValidGeoHashtag(tag),
    ).length;
    assert.strictEqual(geoCount, 3, "should have 3 geo hashtags total");
  });

  test("TestEmptyAndInvalidLocationInput", () => {
    const testCases = [
      "",
      "   ",
      "no hashtags here",
      "#infrastructure #safety",
      "#geo", // too short
      "#geo12345678", // too long
      "#geoabcdef", // invalid Plus Code characters (a, b, d, e not allowed)
    ];

    for (const input of testCases) {
      const tokens = input.split(/\s+/);
      const geoHashtags = tokens.filter((token) => isValidGeoHashtag(token));

      assert.strictEqual(
        geoHashtags.length,
        0,
        `should find no valid geo hashtags in "${input}"`,
      );
    }
  });

  test("TestLocationArrayJoinAndSplit", () => {
    const hashtags = ["#geo9c3xgp", "#geo456cfg", "#geo789hjm"];

    // Join for display in input field (space-separated)
    const joinedString = hashtags.join(" ");
    assert.strictEqual(joinedString, "#geo9c3xgp #geo456cfg #geo789hjm");

    // Split back from input field
    const splitHashtags = joinedString
      .split(/\s+/)
      .filter((tag) => isValidGeoHashtag(tag));

    assert.deepStrictEqual(
      splitHashtags,
      hashtags,
      "should round-trip correctly",
    );
  });

  test("TestLocationCountForDisplay", () => {
    // Test different scenarios for location count display
    const scenarios = [
      { hashtags: [], expectedCount: 0, expectedText: "no locations" },
      {
        hashtags: ["#infrastructure"],
        expectedCount: 0,
        expectedText: "no locations",
      },
      {
        hashtags: ["#geo9c3xgp"],
        expectedCount: 1,
        expectedText: "1 location",
      },
      {
        hashtags: ["#geo9c3xgp", "#infrastructure"],
        expectedCount: 1,
        expectedText: "1 location",
      },
      {
        hashtags: ["#geo9c3xgp", "#geo456cfg"],
        expectedCount: 2,
        expectedText: "2 locations",
      },
      {
        hashtags: ["#geo9c3xgp", "#geo456cfg", "#safety", "#geo789hjm"],
        expectedCount: 3,
        expectedText: "3 locations",
      },
    ];

    for (const scenario of scenarios) {
      const geoCount = scenario.hashtags.filter((tag) =>
        isValidGeoHashtag(tag),
      ).length;
      assert.strictEqual(
        geoCount,
        scenario.expectedCount,
        `should count ${scenario.expectedCount} locations in ${JSON.stringify(scenario.hashtags)}`,
      );

      let displayText;
      if (geoCount === 0) {
        displayText = "no locations";
      } else if (geoCount === 1) {
        displayText = "1 location";
      } else {
        displayText = `${geoCount} locations`;
      }

      assert.strictEqual(
        displayText,
        scenario.expectedText,
        `should generate correct display text for ${geoCount} locations`,
      );
    }
  });
});
