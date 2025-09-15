import { describe, test } from "node:test";
import assert from "node:assert";

import {
  LocationPrivacySystem,
  createPrivacyLocation,
  parseGeoHashtag,
  isValidGeoHashtag,
  extractGeoHashtags,
  type PrivacyLocation,
  type LocationArea,
} from "./location-privacy.ts";

/**
 * Enhanced Location Hashtag Case Sensitivity Test Suite
 *
 * This test suite provides comprehensive testing of case sensitivity handling
 * in location hashtags, covering edge cases, performance, and real-world scenarios
 * that extend beyond the basic functionality tests.
 */
describe("Enhanced Location Hashtag Case Sensitivity", () => {
  // Test data for comprehensive case variations
  const caseVariations = [
    {
      input: "#geo9c3xgp",
      expected: "#geo9c3xgp",
      description: "all lowercase",
    },
    {
      input: "#GEO9C3XGP",
      expected: "#geo9c3xgp",
      description: "all uppercase",
    },
    {
      input: "#Geo9c3xgp",
      expected: "#geo9c3xgp",
      description: "title case prefix",
    },
    {
      input: "#geo9C3XGP",
      expected: "#geo9c3xgp",
      description: "mixed case code",
    },
    {
      input: "#GEO9c3xgp",
      expected: "#geo9c3xgp",
      description: "uppercase prefix, lowercase code",
    },
    {
      input: "#gEo9C3xGp",
      expected: "#geo9c3xgp",
      description: "random mixed case",
    },
    {
      input: "#GeO9c3XgP",
      expected: "#geo9c3xgp",
      description: "alternating case",
    },
  ];

  test("TestHashtagNormalization_ComprehensiveCases", () => {
    for (const variation of caseVariations) {
      // Test validation
      assert.ok(
        isValidGeoHashtag(variation.input),
        `${variation.description}: ${variation.input} should be valid`,
      );

      // Test extraction normalization
      const extracted = extractGeoHashtags(
        `Issue at ${variation.input} location`,
      );
      assert.strictEqual(
        extracted.length,
        1,
        `Should extract exactly one hashtag for ${variation.description}`,
      );
      assert.strictEqual(
        extracted[0],
        variation.expected,
        `${variation.description}: should normalize ${variation.input} to ${variation.expected}`,
      );
    }
  });

  test("TestLocationParsing_CaseConsistency", () => {
    // All case variations should parse to the same location
    const baseHashtag = "#geo9c3xgp";
    const baseArea = parseGeoHashtag(baseHashtag);
    assert.ok(baseArea !== null, "Base hashtag should parse successfully");

    for (const variation of caseVariations) {
      const area = parseGeoHashtag(variation.input);
      assert.ok(
        area !== null,
        `${variation.description}: should parse successfully`,
      );

      // Coordinates should be identical
      assert.strictEqual(
        area!.center.lat,
        baseArea!.center.lat,
        `${variation.description}: latitude should match base`,
      );
      assert.strictEqual(
        area!.center.lng,
        baseArea!.center.lng,
        `${variation.description}: longitude should match base`,
      );
    }
  });

  test("TestTextExtraction_MixedCaseInRealWorldScenarios", () => {
    const realWorldTexts = [
      {
        text: "Spotted a pothole at #GEO9C3XGP this morning! Really needs fixing. #infrastructure #roads",
        expected: ["#geo9c3xgp"],
        description: "social media post with uppercase geo hashtag",
      },
      {
        text: "Multiple issues today: #geo9c3xgp has flooding, #GEO456CFG needs streetlight repair, and #Geo789hjm has graffiti",
        expected: ["#geo9c3xgp", "#geo456cfg", "#geo789hjm"],
        description: "multiple mixed case geo hashtags in one text",
      },
      {
        text: "Meeting at community center near #gEo9C3xGp to discuss local issues. Bring ideas! #community #meetup",
        expected: ["#geo9c3xgp"],
        description: "community post with alternating case",
      },
      {
        text: "Emergency: Tree down blocking road at #GEO9C3XGP! Please avoid the area. #emergency #traffic",
        expected: ["#geo9c3xgp"],
        description: "emergency alert with all caps geo hashtag",
      },
      {
        text: "Love this area! #geo9c3xgp #GEO9C3XGP #Geo9c3xgp all same location but different cases!",
        expected: ["#geo9c3xgp", "#geo9c3xgp", "#geo9c3xgp"],
        description: "duplicate location with different cases",
      },
    ];

    for (const scenario of realWorldTexts) {
      const extracted = extractGeoHashtags(scenario.text);
      assert.strictEqual(
        extracted.length,
        scenario.expected.length,
        `${scenario.description}: should extract correct number of hashtags`,
      );

      for (let i = 0; i < scenario.expected.length; i++) {
        assert.strictEqual(
          extracted[i],
          scenario.expected[i],
          `${scenario.description}: hashtag ${i + 1} should be normalized correctly`,
        );
      }
    }
  });

  test("TestCaseSensitivity_ValidationEdgeCases", () => {
    // Test edge cases around validation with unusual but valid case combinations
    const edgeCases = [
      "#geO2C3fGh", // Mixed case with boundary Plus Code characters
      "#GEo9W6XrV", // Mixed case with end-of-alphabet characters
      "#gEO234567", // Mixed case with all numeric characters
      "#Geo9cFgHj", // Mixed case with alternating letters/numbers
    ];

    for (const hashtag of edgeCases) {
      assert.ok(
        isValidGeoHashtag(hashtag),
        `Edge case ${hashtag} should be valid regardless of case mixing`,
      );

      // Should extract and normalize properly
      const extracted = extractGeoHashtags(`Test ${hashtag} location`);
      assert.strictEqual(extracted.length, 1, `Should extract ${hashtag}`);
      assert.strictEqual(
        extracted[0],
        hashtag.toLowerCase(),
        `Should normalize ${hashtag} to lowercase`,
      );
    }
  });

  test("TestLocationArea_CaseInsensitiveConsistency", () => {
    // Test that isLocationInArea works consistently regardless of hashtag case
    const testLat = 51.5074;
    const testLng = -0.1278;
    const location = createPrivacyLocation(testLat, testLng, "Test Location");
    const baseHashtag = location.geoHashtag;

    // Create various case versions of the same hashtag
    const caseVersions = [
      baseHashtag,
      baseHashtag.toUpperCase(),
      baseHashtag.charAt(0) + baseHashtag.slice(1).toUpperCase(),
      baseHashtag.replace(/(.)/g, (char, index) =>
        index % 2 === 0 ? char.toLowerCase() : char.toUpperCase(),
      ),
    ];

    for (const hashtag of caseVersions) {
      const isInArea = LocationPrivacySystem.isLocationInArea(
        testLat,
        testLng,
        hashtag,
      );
      assert.ok(
        isInArea,
        `Location should be in area for hashtag variant: ${hashtag}`,
      );
    }
  });

  test("TestNearbyHashtags_CaseNormalization", () => {
    // Test that nearby hashtag generation works with mixed case input
    const mixedCaseHashtag = "#GEO9c3XgP";
    const nearby = LocationPrivacySystem.getNearbyGeoHashtags(mixedCaseHashtag);

    // First hashtag preserves original case, others are normalized to lowercase
    assert.strictEqual(
      nearby[0],
      mixedCaseHashtag,
      "First hashtag should preserve original case",
    );

    // All other hashtags should be normalized to lowercase
    for (let i = 1; i < nearby.length; i++) {
      const hashtag = nearby[i];
      assert.strictEqual(
        hashtag,
        hashtag.toLowerCase(),
        `Nearby hashtag ${hashtag} should be normalized to lowercase`,
      );
    }

    // All hashtags should be valid
    for (const hashtag of nearby) {
      assert.ok(
        isValidGeoHashtag(hashtag),
        `Nearby hashtag ${hashtag} should be valid`,
      );
    }

    // Should include the original hashtag (preserving case)
    assert.ok(
      nearby.includes(mixedCaseHashtag),
      "Nearby hashtags should include the original hashtag (preserving case)",
    );
  });

  test("TestLocationDescription_CaseHandling", () => {
    // Test location description generation with mixed case input
    // Note: The implementation preserves the original case in the description
    const testCases = [
      { input: "#GEO9C3XGP", expectedInOutput: "#GEO9C3XGP" },
      { input: "#geo9c3xgp", expectedInOutput: "#geo9c3xgp" },
      { input: "#Geo9C3xGp", expectedInOutput: "#Geo9C3xGp" },
      { input: "#gEO9c3XGP", expectedInOutput: "#gEO9c3XGP" },
    ];

    for (const testCase of testCases) {
      const description = LocationPrivacySystem.getLocationDescription(
        testCase.input,
      );

      // Should contain the original case hashtag
      assert.ok(
        description.includes(testCase.expectedInOutput),
        `Description should preserve original case: ${description} should contain ${testCase.expectedInOutput}`,
      );

      // Should have consistent format
      assert.ok(
        description.startsWith("Approximate area: ~1km radius ("),
        `Description should have consistent format: ${description}`,
      );
    }
  });

  test("TestFormatDisplay_CaseConsistency", () => {
    // Test that display formatting is consistent regardless of how the location was created
    const lat = 51.5074;
    const lng = -0.1278;
    const label = "Test Area";

    // Create same location multiple times (should be identical due to deterministic Plus Code)
    const locations = [
      createPrivacyLocation(lat, lng, label),
      createPrivacyLocation(lat, lng, label),
      createPrivacyLocation(lat, lng, label),
    ];

    // All should format identically
    const formatted = locations.map((loc) =>
      LocationPrivacySystem.formatForDisplay(loc),
    );
    const baseFormatted = formatted[0];

    for (let i = 1; i < formatted.length; i++) {
      assert.strictEqual(
        formatted[i],
        baseFormatted,
        "Display formatting should be consistent for identical locations",
      );
    }

    // Should contain lowercase hashtag
    assert.ok(
      baseFormatted.includes(locations[0].geoHashtag.toLowerCase()),
      "Formatted display should contain lowercase hashtag",
    );
  });

  test("TestCasePerformance_LargeScale", () => {
    // Performance test: ensure case-insensitive operations don't significantly impact performance
    const testText = Array(1000)
      .fill(0)
      .map((_, i) => {
        const caseVar = caseVariations[i % caseVariations.length];
        return `Issue ${i}: ${caseVar.input} needs attention #infrastructure`;
      })
      .join(" ");

    const startTime = performance.now();
    const extracted = extractGeoHashtags(testText);
    const endTime = performance.now();

    // Should extract all hashtags (1000 total)
    assert.strictEqual(
      extracted.length,
      1000,
      "Should extract all 1000 hashtags",
    );

    // All should be normalized to lowercase
    for (const hashtag of extracted) {
      assert.strictEqual(
        hashtag,
        hashtag.toLowerCase(),
        "All extracted hashtags should be normalized to lowercase",
      );
    }

    // Performance should be reasonable (less than 100ms for 1000 hashtags)
    const duration = endTime - startTime;
    assert.ok(
      duration < 100,
      `Performance test should complete in under 100ms, took ${duration.toFixed(2)}ms`,
    );

    console.log(
      `Performance test: Extracted ${extracted.length} hashtags in ${duration.toFixed(2)}ms`,
    );
  });

  test("TestInvalidCases_CaseSensitiveRejection", () => {
    // Test that invalid hashtags are rejected regardless of case
    const completelyInvalidCases = [
      "#Geo9c3x", // too short
      "#GEO9c3x1p", // invalid character (1)
      "#geo0c3xgp", // invalid character (0)
      "#GEOac3xgp", // invalid character (a)
      "#geo9c3xip", // invalid character (i)
      "#PREFIX9c3xgp", // wrong prefix
      "geo9c3xgp", // missing #
    ];

    for (const invalid of completelyInvalidCases) {
      assert.ok(
        !isValidGeoHashtag(invalid),
        `Invalid hashtag should be rejected regardless of case: ${invalid}`,
      );

      // Should not be extracted from text
      const extracted = extractGeoHashtags(`Test ${invalid} location`);
      assert.strictEqual(
        extracted.length,
        0,
        `Invalid hashtag should not be extracted: ${invalid}`,
      );
    }

    // Special case: too long hashtags - regex extracts valid prefix
    const tooLongCases = [
      { input: "#geo9c3xgph", expected: "#geo9c3xgp" }, // extracts first 6 chars
      { input: "#GEO9c3xgpHJMPQ", expected: "#geo9c3xgp" }, // extracts first 6 chars
    ];

    for (const testCase of tooLongCases) {
      // The full hashtag should be invalid
      assert.ok(
        !isValidGeoHashtag(testCase.input),
        `Too long hashtag should be invalid: ${testCase.input}`,
      );

      // But regex should extract the valid prefix
      const extracted = extractGeoHashtags(`Test ${testCase.input} location`);
      assert.strictEqual(
        extracted.length,
        1,
        `Should extract valid prefix from too long hashtag: ${testCase.input}`,
      );
      assert.strictEqual(
        extracted[0],
        testCase.expected,
        `Should extract normalized valid prefix: ${extracted[0]} should be ${testCase.expected}`,
      );
    }
  });

  test("TestUnicodeAndSpecialCharacters_CaseHandling", () => {
    // Test behavior with unicode and special characters around hashtags
    const unicodeTests = [
      {
        text: "🚨 Emergency at #GEO9C3XGP! 🚨",
        expected: ["#geo9c3xgp"],
        description: "emoji with uppercase geo hashtag",
      },
      {
        text: "Café near #geo9c3xgp serves great coffee ☕",
        expected: ["#geo9c3xgp"],
        description: "unicode characters with geo hashtag",
      },
      {
        text: "¿Problemas en #GEO9c3xGp? ¡Reporta aquí!",
        expected: ["#geo9c3xgp"],
        description: "spanish text with mixed case geo hashtag",
      },
    ];

    for (const test of unicodeTests) {
      const extracted = extractGeoHashtags(test.text);
      assert.strictEqual(
        extracted.length,
        test.expected.length,
        `${test.description}: should extract correct number of hashtags`,
      );

      for (let i = 0; i < test.expected.length; i++) {
        assert.strictEqual(
          extracted[i],
          test.expected[i],
          `${test.description}: should normalize hashtag correctly`,
        );
      }
    }
  });

  test("TestAPIConsistency_CaseInputs", () => {
    // Test that all public API methods handle case consistently
    const testHashtag = "#geo9c3xgp";
    const mixedCaseHashtag = "#GEO9c3XgP";

    // isValidGeoHashtag should accept both
    assert.ok(isValidGeoHashtag(testHashtag), "lowercase should be valid");
    assert.ok(
      isValidGeoHashtag(mixedCaseHashtag),
      "mixed case should be valid",
    );

    // parseGeoHashtag should return identical results
    const area1 = parseGeoHashtag(testHashtag);
    const area2 = parseGeoHashtag(mixedCaseHashtag);

    assert.ok(
      area1 !== null && area2 !== null,
      "Both should parse successfully",
    );
    assert.deepStrictEqual(area1, area2, "Parsed areas should be identical");

    // extractGeoHashtags should normalize consistently
    const extracted1 = extractGeoHashtags(`Test ${testHashtag}`);
    const extracted2 = extractGeoHashtags(`Test ${mixedCaseHashtag}`);

    assert.deepStrictEqual(
      extracted1,
      extracted2,
      "Extracted hashtags should be identical",
    );
    assert.strictEqual(
      extracted1[0],
      testHashtag,
      "Should normalize to lowercase",
    );

    // LocationPrivacySystem methods should work functionally identically
    // (Note: descriptions preserve original case, but both should be valid)
    const description1 =
      LocationPrivacySystem.getLocationDescription(testHashtag);
    const description2 =
      LocationPrivacySystem.getLocationDescription(mixedCaseHashtag);

    // Both should be valid descriptions with same precision
    assert.ok(
      description1.includes("~1km radius"),
      "First description should include precision",
    );
    assert.ok(
      description2.includes("~1km radius"),
      "Second description should include precision",
    );
    assert.ok(
      description1.includes(testHashtag),
      "First description should include original hashtag",
    );
    assert.ok(
      description2.includes(mixedCaseHashtag),
      "Second description should include original hashtag",
    );

    const nearby1 = LocationPrivacySystem.getNearbyGeoHashtags(testHashtag);
    const nearby2 =
      LocationPrivacySystem.getNearbyGeoHashtags(mixedCaseHashtag);

    // The arrays might have different lengths due to case-sensitive duplicate checking
    // The first hashtag preserves original case, so they might differ
    // but when normalized, they should be the same
    assert.strictEqual(
      nearby1[0].toLowerCase(),
      nearby2[0].toLowerCase(),
      "First hashtag should normalize to same value",
    );

    // Create normalized versions of both arrays for comparison
    const nearby1Normalized = nearby1.map((h) => h.toLowerCase()).sort();
    const nearby2Normalized = nearby2.map((h) => h.toLowerCase()).sort();

    // Remove duplicates from both arrays
    const nearby1Unique = [...new Set(nearby1Normalized)];
    const nearby2Unique = [...new Set(nearby2Normalized)];

    // The unique sets should be identical
    assert.deepStrictEqual(
      nearby1Unique,
      nearby2Unique,
      "Normalized unique nearby hashtags should be identical",
    );
  });
});
