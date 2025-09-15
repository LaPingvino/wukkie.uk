import { test, describe } from "node:test";
import assert from "node:assert";
import {
  LocationPrivacySystem,
  createPrivacyLocation,
  parseGeoHashtag,
  isValidGeoHashtag,
  extractGeoHashtags,
} from "./location-privacy.ts";

describe("LocationPrivacySystem", () => {
  test("TestCreatePrivacyLocation_ValidCoordinates", () => {
    const lat = 51.5074; // London
    const lng = -0.1278;
    const label = "Central London";

    const location = createPrivacyLocation(lat, lng, label);

    assert.ok(location, "location should not be null");
    assert.strictEqual(location.label, label);
    assert.strictEqual(typeof location.geoHashtag, "string");
    assert.ok(
      location.geoHashtag.startsWith("#geo"),
      "geo hashtag should start with #geo",
    );
    assert.strictEqual(
      location.geoHashtag.length,
      10,
      "geo hashtag should be 10 characters (#geo + 6 chars)",
    );
    assert.ok(location.precision > 0, "precision should be positive");
    assert.strictEqual(typeof location.centerLat, "number");
    assert.strictEqual(typeof location.centerLng, "number");
    assert.strictEqual(typeof location.plusCode, "string");
  });

  test("TestCreatePrivacyLocation_WithoutLabel", () => {
    const lat = 52.3676; // Amsterdam
    const lng = 4.9041;

    const location = createPrivacyLocation(lat, lng);

    assert.ok(location, "location should not be null");
    assert.strictEqual(location.label, undefined);
    assert.ok(location.geoHashtag.startsWith("#geo"));
  });

  test("TestCreatePrivacyLocation_EdgeCoordinates", () => {
    // Test extreme coordinates
    const testCases = [
      { lat: 0, lng: 0, name: "equator prime meridian" },
      { lat: 90, lng: 0, name: "north pole" },
      { lat: -90, lng: 0, name: "south pole" },
      { lat: 0, lng: 180, name: "date line" },
      { lat: 0, lng: -180, name: "date line negative" },
    ];

    for (const testCase of testCases) {
      const location = createPrivacyLocation(testCase.lat, testCase.lng);
      assert.ok(location, `location should be created for ${testCase.name}`);
      assert.ok(
        location.geoHashtag.startsWith("#geo"),
        `geo hashtag should be valid for ${testCase.name}`,
      );
    }
  });

  test("TestIsValidGeoHashtag_ValidCases", () => {
    const validHashtags = [
      "#geo9c3xgp",
      "#geocfghjm",
      "#geo234567",
      "#geoqrvwxc",
      "#geo2468fg",
    ];

    for (const hashtag of validHashtags) {
      assert.ok(isValidGeoHashtag(hashtag), `${hashtag} should be valid`);
    }
  });

  test("TestIsValidGeoHashtag_InvalidCases", () => {
    const invalidHashtags = [
      "",
      "geo9c3xgp", // missing #
      "#geo", // too short
      "#geo9c3xgp7", // too long
      "#geo9c3xg", // too short
      "#geoABCDEF", // uppercase not allowed in plus codes
      "#geo9c3x!p", // invalid character
      "#infrastructure", // not a geo hashtag
      "#geo 12345", // space
      "not a hashtag",
    ];

    for (const hashtag of invalidHashtags) {
      assert.ok(!isValidGeoHashtag(hashtag), `${hashtag} should be invalid`);
    }
  });

  test("TestParseGeoHashtag_ValidHashtag", () => {
    const hashtag = "#geo9c3xgp";
    const area = parseGeoHashtag(hashtag);

    assert.ok(area, "area should not be null");
    assert.strictEqual(typeof area.center.lat, "number");
    assert.strictEqual(typeof area.center.lng, "number");
    assert.ok(
      area.southWest.lat < area.northEast.lat,
      "southWest lat should be less than northEast lat",
    );
    assert.ok(
      area.southWest.lng < area.northEast.lng,
      "southWest lng should be less than northEast lng",
    );
  });

  test("TestParseGeoHashtag_InvalidHashtag", () => {
    const invalidHashtags = ["#invalid", "#geo123", "not-a-hashtag"];

    for (const hashtag of invalidHashtags) {
      const area = parseGeoHashtag(hashtag);
      assert.strictEqual(area, null, `${hashtag} should return null`);
    }
  });

  test("TestExtractGeoHashtags_FromText", () => {
    const text =
      "Found an issue at #geo9c3xgp near the station #infrastructure and also #geo456cfg";
    const hashtags = extractGeoHashtags(text);

    assert.strictEqual(hashtags.length, 2, "should find 2 geo hashtags");
    assert.ok(
      hashtags.includes("#geo9c3xgp"),
      "should include first geo hashtag",
    );
    assert.ok(
      hashtags.includes("#geo456cfg"),
      "should include second geo hashtag",
    );
  });

  test("TestExtractGeoHashtags_NoGeoHashtags", () => {
    const text = "Just regular hashtags #infrastructure #safety #pothole";
    const hashtags = extractGeoHashtags(text);

    assert.strictEqual(hashtags.length, 0, "should find no geo hashtags");
  });

  test("TestExtractGeoHashtags_EmptyText", () => {
    const hashtags = extractGeoHashtags("");
    assert.strictEqual(hashtags.length, 0, "should handle empty text");
  });

  test("TestCreateAndParseRoundtrip", () => {
    // Test that creating a privacy location and parsing it back works
    const originalLat = 51.5074;
    const originalLng = -0.1278;
    const label = "Test Location";

    const location = createPrivacyLocation(originalLat, originalLng, label);
    const area = parseGeoHashtag(location.geoHashtag);

    assert.ok(area, "should be able to parse created geo hashtag");

    // Due to precision loss, we can't expect exact coordinates
    // but they should be reasonably close (within the ~1km precision)
    const latDiff = Math.abs(area.center.lat - originalLat);
    const lngDiff = Math.abs(area.center.lng - originalLng);

    assert.ok(latDiff < 0.05, "parsed latitude should be close to original");
    assert.ok(lngDiff < 0.05, "parsed longitude should be close to original");
  });

  test("TestPrecisionConsistency", () => {
    // Test that similar coordinates produce similar precision
    const location1 = createPrivacyLocation(51.5074, -0.1278);
    const location2 = createPrivacyLocation(51.5075, -0.1279);

    // Should have same precision since they're very close
    assert.strictEqual(
      location1.precision,
      location2.precision,
      "nearby locations should have same precision",
    );
  });

  test("TestGeoHashtagUniqueness", () => {
    // Test that different coordinates produce different geo hashtags
    const locations = [
      createPrivacyLocation(51.5074, -0.1278), // London
      createPrivacyLocation(52.3676, 4.9041), // Amsterdam
      createPrivacyLocation(48.8566, 2.3522), // Paris
      createPrivacyLocation(40.7128, -74.006), // New York
    ];

    const hashtags = locations.map((loc) => loc.geoHashtag);
    const uniqueHashtags = new Set(hashtags);

    assert.strictEqual(
      hashtags.length,
      uniqueHashtags.size,
      "all geo hashtags should be unique",
    );
  });

  test("TestMultipleGeoHashtagsInText", () => {
    const text =
      "Issue affects #geo9c3xgp and #geo456cfg areas, also near #safety and #geo789hjm";
    const hashtags = extractGeoHashtags(text);

    assert.strictEqual(hashtags.length, 3, "should find all 3 geo hashtags");
    assert.ok(hashtags.includes("#geo9c3xgp"));
    assert.ok(hashtags.includes("#geo456cfg"));
    assert.ok(hashtags.includes("#geo789hjm"));
  });

  test("TestExtractGeoHashtags_CaseInsensitive", () => {
    const text =
      "Multiple cases: #geo9c3xgp #GEO456CFG #Geo789HjM and #GEOQRVWX2 with #infrastructure";
    const hashtags = extractGeoHashtags(text);

    assert.strictEqual(
      hashtags.length,
      4,
      "should find all 4 geo hashtags regardless of case",
    );

    // All extracted hashtags should be normalized to lowercase
    const expectedHashtags = [
      "#geo9c3xgp",
      "#geo456cfg",
      "#geo789hjm",
      "#geoqrvwx2",
    ];
    for (const expected of expectedHashtags) {
      assert.ok(
        hashtags.includes(expected),
        `should include normalized hashtag: ${expected}`,
      );
    }
  });

  test("TestExtractGeoHashtags_MixedCaseInText", () => {
    const textCases = [
      {
        text: "Issue at #GEO9C3XGP location",
        expected: ["#geo9c3xgp"],
        description: "uppercase geo hashtag",
      },
      {
        text: "Problem near #Geo456CFG area",
        expected: ["#geo456cfg"],
        description: "mixed case geo hashtag",
      },
      {
        text: "Found #geo9c3xgp and #GEO456CFG nearby",
        expected: ["#geo9c3xgp", "#geo456cfg"],
        description: "multiple case variations",
      },
    ];

    for (const testCase of textCases) {
      const hashtags = extractGeoHashtags(testCase.text);
      assert.strictEqual(
        hashtags.length,
        testCase.expected.length,
        `${testCase.description}: should find correct number of hashtags`,
      );

      for (const expectedHashtag of testCase.expected) {
        assert.ok(
          hashtags.includes(expectedHashtag),
          `${testCase.description}: should include ${expectedHashtag}`,
        );
      }
    }
  });

  test("TestGeoHashtagValidation_ComprehensiveCaseSupport", () => {
    const validCaseCombinations = [
      "#geo9c3xgp", // all lowercase
      "#GEO9C3XGP", // all uppercase
      "#Geo9C3XGP", // mixed case prefix
      "#geo9C3XGP", // mixed case code
      "#GEO9c3xgp", // mixed case prefix lowercase code
      "#GeO9C3xGp", // random mixed case
    ];

    for (const hashtag of validCaseCombinations) {
      assert.ok(
        isValidGeoHashtag(hashtag),
        `${hashtag} should be valid regardless of case`,
      );
    }
  });

  test("TestGeoHashtagParsing_CaseInsensitive", () => {
    const testHashtags = [
      "#geo9c3xgp",
      "#GEO9C3XGP",
      "#Geo9C3XGP",
      "#geo9C3XGP",
    ];

    // All these hashtags represent the same location, so should parse to same area
    const areas = testHashtags.map((hashtag) => parseGeoHashtag(hashtag));

    // All should parse successfully
    for (let i = 0; i < areas.length; i++) {
      assert.ok(
        areas[i] !== null,
        `${testHashtags[i]} should parse successfully`,
      );
    }

    // All should have the same center coordinates (within tolerance)
    const tolerance = 0.001;
    const baseArea = areas[0]!;

    for (let i = 1; i < areas.length; i++) {
      const area = areas[i]!;
      assert.ok(
        Math.abs(area.center.lat - baseArea.center.lat) < tolerance,
        `${testHashtags[i]} should have same latitude as ${testHashtags[0]}`,
      );
      assert.ok(
        Math.abs(area.center.lng - baseArea.center.lng) < tolerance,
        `${testHashtags[i]} should have same longitude as ${testHashtags[0]}`,
      );
    }
  });

  test("TestLocationCreation_CaseNormalization", () => {
    // Create locations and verify they produce consistent hashtags
    const location1 = createPrivacyLocation(51.5074, -0.1278, "London");
    const location2 = createPrivacyLocation(51.5074, -0.1278, "London");

    // Both should create identical hashtags (normalized)
    assert.strictEqual(
      location1.geoHashtag,
      location2.geoHashtag,
      "identical coordinates should produce identical normalized hashtags",
    );

    // Hashtag should be lowercase
    assert.ok(
      location1.geoHashtag === location1.geoHashtag.toLowerCase(),
      "created geo hashtag should be normalized to lowercase",
    );
  });

  test("TestGeoHashtagCaseInsensitivity", () => {
    // Geo hashtags should be case insensitive (allowing both upper and lowercase)
    assert.ok(isValidGeoHashtag("#geo9c3xgp"), "lowercase should be valid");
    assert.ok(isValidGeoHashtag("#geo9C3XGP"), "uppercase should be valid");
    assert.ok(
      isValidGeoHashtag("#GEO9c3xgp"),
      "mixed case prefix should be valid",
    );
    assert.ok(isValidGeoHashtag("#Geo9C3xGp"), "mixed case should be valid");
    assert.ok(isValidGeoHashtag("#GEO9C3XGP"), "all uppercase should be valid");
  });

  test("TestLocationPrecision_DifferentRegions", () => {
    // Test precision consistency across different geographical regions
    const locations = [
      { lat: 0, lng: 0, name: "Equator/Prime Meridian" },
      { lat: 60, lng: 30, name: "Northern Europe" },
      { lat: -33.8688, lng: 151.2093, name: "Sydney, Australia" },
      { lat: 35.6762, lng: 139.6503, name: "Tokyo, Japan" },
      { lat: -22.9068, lng: -43.1729, name: "Rio de Janeiro, Brazil" },
    ];

    for (const location of locations) {
      const privacyLoc = createPrivacyLocation(
        location.lat,
        location.lng,
        location.name,
      );

      assert.ok(
        privacyLoc.precision > 0,
        `${location.name}: precision should be positive`,
      );
      assert.ok(
        privacyLoc.precision <= 2.0,
        `${location.name}: precision should be reasonable (~1km, max 2km)`,
      );
      assert.ok(
        isValidGeoHashtag(privacyLoc.geoHashtag),
        `${location.name}: should generate valid geo hashtag`,
      );

      // Test that we can parse it back
      const area = parseGeoHashtag(privacyLoc.geoHashtag);
      assert.ok(area !== null, `${location.name}: should be parseable`);

      // Verify the parsed area contains the original coordinates (approximately)
      const tolerance = 0.05; // ~5km tolerance for Plus Code precision
      assert.ok(
        Math.abs(area!.center.lat - location.lat) < tolerance,
        `${location.name}: parsed latitude should be close to original`,
      );
      assert.ok(
        Math.abs(area!.center.lng - location.lng) < tolerance,
        `${location.name}: parsed longitude should be close to original`,
      );
    }
  });

  test("TestLocationArea_BoundaryValidation", () => {
    // Test that parsed location areas have valid boundaries
    const testHashtags = [
      "#geo9c3xgp", // London area
      "#geo456def", // Synthetic
      "#geo789abc", // Synthetic
      "#geofghcvw", // Synthetic with different chars
    ];

    for (const hashtag of testHashtags) {
      const area = parseGeoHashtag(hashtag);

      if (area) {
        // Southwest corner should be south and west of northeast corner
        assert.ok(
          area.southWest.lat < area.northEast.lat,
          `${hashtag}: southWest lat should be less than northEast lat`,
        );
        assert.ok(
          area.southWest.lng < area.northEast.lng,
          `${hashtag}: southWest lng should be less than northEast lng`,
        );

        // Center should be within the area
        assert.ok(
          area.center.lat >= area.southWest.lat &&
            area.center.lat <= area.northEast.lat,
          `${hashtag}: center lat should be within bounds`,
        );
        assert.ok(
          area.center.lng >= area.southWest.lng &&
            area.center.lng <= area.northEast.lng,
          `${hashtag}: center lng should be within bounds`,
        );

        // Area should not be too large (privacy codes are ~1km precision)
        const latSpan = area.northEast.lat - area.southWest.lat;
        const lngSpan = area.northEast.lng - area.southWest.lng;

        assert.ok(
          latSpan > 0 && latSpan < 0.1,
          `${hashtag}: latitude span should be reasonable (0 < ${latSpan} < 0.1)`,
        );
        assert.ok(
          lngSpan > 0 && lngSpan < 0.1,
          `${hashtag}: longitude span should be reasonable (0 < ${lngSpan} < 0.1)`,
        );
      }
    }
  });

  test("TestGeoHashtagExtraction_EdgeCases", () => {
    const edgeCases = [
      {
        text: "",
        expected: 0,
        description: "empty string",
      },
      {
        text: "#geo",
        expected: 0,
        description: "incomplete geo prefix",
      },
      {
        text: "#geo123",
        expected: 0,
        description: "too short code",
      },
      {
        text: "#geo1234567",
        expected: 0,
        description: "too long code",
      },
      {
        text: "#geo234567 #geo789hjm #geo345cfg",
        expected: 3,
        description: "multiple valid hashtags",
      },
      {
        text: "Text with #geo234567 in the middle and #infrastructure at end",
        expected: 1,
        description: "mixed hashtags",
      },
      {
        text: "#GEO234567 #geo789hjm #GeO345CFG",
        expected: 3,
        description: "mixed case variations",
      },
      {
        text: "##geo234567 #geo#789hjm",
        expected: 0,
        description: "malformed hashtags with extra # should not match",
      },
      {
        text: "#geo23456! #geo@34567",
        expected: 0,
        description: "invalid characters in code",
      },
    ];

    for (const testCase of edgeCases) {
      const hashtags = extractGeoHashtags(testCase.text);
      assert.strictEqual(
        hashtags.length,
        testCase.expected,
        `${testCase.description}: should find ${testCase.expected} hashtags in "${testCase.text}"`,
      );
    }
  });

  test("TestLocationCreation_StressTest", () => {
    // Test creating many locations to ensure consistency and performance
    const testCount = 100;
    const locations = [];

    for (let i = 0; i < testCount; i++) {
      // Generate random coordinates within reasonable bounds
      const lat = -90 + Math.random() * 180; // -90 to 90
      const lng = -180 + Math.random() * 360; // -180 to 180

      const location = createPrivacyLocation(lat, lng, `Test Location ${i}`);
      locations.push(location);

      // Basic validation for each location
      assert.ok(
        isValidGeoHashtag(location.geoHashtag),
        `Location ${i}: should have valid geo hashtag`,
      );
      assert.ok(
        location.precision > 0,
        `Location ${i}: should have positive precision`,
      );
      assert.strictEqual(
        typeof location.centerLat,
        "number",
        `Location ${i}: centerLat should be number`,
      );
      assert.strictEqual(
        typeof location.centerLng,
        "number",
        `Location ${i}: centerLng should be number`,
      );
    }

    // Test uniqueness - very close coordinates might have same hashtag,
    // but random coordinates should mostly be unique
    const uniqueHashtags = new Set(locations.map((loc) => loc.geoHashtag));
    const uniquenessRatio = uniqueHashtags.size / locations.length;

    assert.ok(
      uniquenessRatio > 0.8,
      `Should have high uniqueness ratio: ${uniquenessRatio} (${uniqueHashtags.size}/${locations.length})`,
    );
  });

  test("TestNearbyHashtags_Generation", () => {
    // Create a real location first to ensure we have a valid hashtag
    const location = createPrivacyLocation(51.5074, -0.1278, "Test Location");
    const testHashtag = location.geoHashtag;

    const nearbyHashtags = LocationPrivacySystem.getNearbyGeoHashtags(
      testHashtag,
      1,
    );

    // Should include the original hashtag
    assert.ok(
      nearbyHashtags.includes(testHashtag),
      "nearby hashtags should include original hashtag",
    );

    // Should have multiple nearby hashtags (original + nearby ones)
    assert.ok(
      nearbyHashtags.length > 1,
      `should generate multiple nearby hashtags, got ${nearbyHashtags.length}: ${nearbyHashtags.join(", ")}`,
    );
    assert.ok(
      nearbyHashtags.length <= 10,
      "should not generate too many nearby hashtags",
    );

    // All nearby hashtags should be valid
    for (const hashtag of nearbyHashtags) {
      assert.ok(
        isValidGeoHashtag(hashtag),
        `nearby hashtag ${hashtag} should be valid`,
      );
    }

    // Should not have duplicates
    const uniqueNearby = new Set(nearbyHashtags);
    assert.strictEqual(
      nearbyHashtags.length,
      uniqueNearby.size,
      "nearby hashtags should be unique",
    );
  });

  test("TestLocationDescription_Formatting", () => {
    const validHashtag = "#geo9c3xgp";
    const invalidHashtag = "#invalid123";

    const validDescription =
      LocationPrivacySystem.getLocationDescription(validHashtag);
    const invalidDescription =
      LocationPrivacySystem.getLocationDescription(invalidHashtag);

    assert.ok(
      validDescription.includes(validHashtag),
      "valid description should include the hashtag",
    );
    assert.ok(
      validDescription.includes("km"),
      "valid description should include precision in km",
    );

    assert.strictEqual(
      invalidDescription,
      "Invalid location",
      "invalid hashtag should return error message",
    );
  });

  test("TestLocationInArea_Validation", () => {
    // Create a location and test if points are correctly identified as inside/outside
    const centerLat = 51.5074;
    const centerLng = -0.1278;
    const location = createPrivacyLocation(centerLat, centerLng, "Test Area");

    // Test the center point (should be inside)
    assert.ok(
      LocationPrivacySystem.isLocationInArea(
        centerLat,
        centerLng,
        location.geoHashtag,
      ),
      "center coordinates should be inside the area",
    );

    // Test nearby points (should mostly be inside due to precision)
    const nearbyLat = centerLat + 0.001; // ~100m north
    const nearbyLng = centerLng + 0.001; // ~100m east

    assert.ok(
      LocationPrivacySystem.isLocationInArea(
        nearbyLat,
        nearbyLng,
        location.geoHashtag,
      ),
      "nearby coordinates should be inside the area",
    );

    // Test far away points (should be outside)
    const farLat = centerLat + 0.1; // ~10km north
    const farLng = centerLng + 0.1; // ~10km east

    assert.ok(
      !LocationPrivacySystem.isLocationInArea(
        farLat,
        farLng,
        location.geoHashtag,
      ),
      "far away coordinates should be outside the area",
    );

    // Test with invalid hashtag
    assert.ok(
      !LocationPrivacySystem.isLocationInArea(centerLat, centerLng, "#invalid"),
      "invalid hashtag should return false",
    );
  });

  test("TestPrivacyLocationProperties", () => {
    const location = createPrivacyLocation(51.5074, -0.1278, "Test");

    // Test that all required properties exist
    assert.ok("geoHashtag" in location, "should have geoHashtag property");
    assert.ok("label" in location, "should have label property");
    assert.ok("plusCode" in location, "should have plusCode property");
    assert.ok("centerLat" in location, "should have centerLat property");
    assert.ok("centerLng" in location, "should have centerLng property");
    assert.ok("precision" in location, "should have precision property");

    // Test property types
    assert.strictEqual(typeof location.geoHashtag, "string");
    assert.strictEqual(typeof location.label, "string");
    assert.strictEqual(typeof location.plusCode, "string");
    assert.strictEqual(typeof location.centerLat, "number");
    assert.strictEqual(typeof location.centerLng, "number");
    assert.strictEqual(typeof location.precision, "number");
  });

  test("TestLocationAreaProperties", () => {
    const area = parseGeoHashtag("#geo9c3xgp");

    if (!area) {
      assert.fail("area should not be null");
      return;
    }

    // Test that all required properties exist
    assert.ok("center" in area, "should have center property");
    assert.ok("southWest" in area, "should have southWest property");
    assert.ok("northEast" in area, "should have northEast property");

    // Test nested properties
    assert.ok(
      "lat" in area.center && "lng" in area.center,
      "center should have lat/lng",
    );
    assert.ok(
      "lat" in area.southWest && "lng" in area.southWest,
      "southWest should have lat/lng",
    );
    assert.ok(
      "lat" in area.northEast && "lng" in area.northEast,
      "northEast should have lat/lng",
    );

    // Test that the area makes geographic sense
    assert.ok(
      area.southWest.lat <= area.center.lat,
      "southWest lat should be <= center lat",
    );
    assert.ok(
      area.center.lat <= area.northEast.lat,
      "center lat should be <= northEast lat",
    );
    assert.ok(
      area.southWest.lng <= area.center.lng,
      "southWest lng should be <= center lng",
    );
    assert.ok(
      area.center.lng <= area.northEast.lng,
      "center lng should be <= northEast lng",
    );
  });
});
