#!/usr/bin/env node

/**
 * Test script for reverse geocoding functionality
 * Tests the new location description features using real geo hashtags
 */

import { LocationPrivacySystem } from './src/frontend/location-privacy.js';

async function testReverseGeocoding() {
  console.log('🧪 Testing Reverse Geocoding Feature\n');

  // Test locations with known coordinates
  const testLocations = [
    { lat: 51.5074, lng: -0.1278, name: 'London, UK' },
    { lat: 40.7128, lng: -74.0060, name: 'New York City, USA' },
    { lat: 48.8566, lng: 2.3522, name: 'Paris, France' },
    { lat: 35.6762, lng: 139.6503, name: 'Tokyo, Japan' },
    { lat: -33.8688, lng: 151.2093, name: 'Sydney, Australia' },
    { lat: 52.5200, lng: 13.4050, name: 'Berlin, Germany' },
  ];

  for (const location of testLocations) {
    console.log(`\n📍 Testing location: ${location.name}`);
    console.log(`   Coordinates: ${location.lat}, ${location.lng}`);

    try {
      // Create privacy location (geo hashtag)
      const privacyLocation = LocationPrivacySystem.createPrivacyLocation(
        location.lat,
        location.lng,
        location.name
      );

      console.log(`   Geo hashtag: ${privacyLocation.geoHashtag}`);
      console.log(`   Area size: ~${privacyLocation.precision}km²`);

      // Test reverse geocoding
      const description = await LocationPrivacySystem.getLocationDescription(
        privacyLocation.geoHashtag
      );

      if (description) {
        console.log(`   ✅ Reverse geocoded:`);
        console.log(`      Neighborhood: ${description.neighborhood || 'N/A'}`);
        console.log(`      City: ${description.city || 'N/A'}`);
        console.log(`      State/Region: ${description.state || 'N/A'}`);
        console.log(`      Country: ${description.country || 'N/A'}`);
        console.log(`      Formatted: ${description.formatted}`);

        // Test tooltip
        const tooltip = await LocationPrivacySystem.getLocationTooltip(
          privacyLocation.geoHashtag
        );
        console.log(`   💬 Tooltip: ${tooltip}`);
      } else {
        console.log(`   ❌ Failed to reverse geocode`);
      }

      // Small delay to be nice to the Nominatim service
      await new Promise(resolve => setTimeout(resolve, 1000));

    } catch (error) {
      console.log(`   ❌ Error: ${error.message}`);
    }
  }

  console.log('\n🔍 Testing invalid geo hashtags:');

  const invalidTags = ['#geo123', '#notgeo9c3xgp', '#geo', '#geo9c3xgpTOOLONG'];

  for (const tag of invalidTags) {
    const description = await LocationPrivacySystem.getLocationDescription(tag);
    console.log(`   ${tag}: ${description ? 'Valid' : 'Invalid'} ❌`);
  }

  console.log('\n📊 Cache status:');
  console.log(`   Cache entries: ${LocationPrivacySystem.locationCache?.size || 'N/A'}`);

  console.log('\n✅ Testing complete!');
  console.log('\nHow to use in the app:');
  console.log('1. Location hashtags like #geo9c3xgp will now show human-readable tooltips');
  console.log('2. Hover over geo hashtags to see "Paris, France" instead of just "#geo9c3xgp (~1km area)"');
  console.log('3. Uses OpenStreetMap Nominatim API (no API key required)');
  console.log('4. Results are cached to avoid repeated requests');
}

// Handle both ES modules and CommonJS
if (import.meta.url === `file://${process.argv[1]}`) {
  testReverseGeocoding().catch(console.error);
}

export { testReverseGeocoding };
