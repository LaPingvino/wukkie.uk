// Wukkie.uk Privacy Location System - Live Demonstration
// This script demonstrates the privacy-first geo hashtag system

console.log('🚀 Wukkie.uk Privacy Location System Demo');
console.log('==========================================\n');

// Simulated Plus Code library (simplified for demo)
const PlusCodeDemo = {
  encode: (lat, lng) => {
    // Simplified encoding - in reality uses Google's algorithm
    const chars = '23456789CFGHJMPQRVWX';
    let code = '';
    for (let i = 0; i < 10; i++) {
      code += chars[Math.floor(Math.random() * chars.length)];
    }
    return code.substring(0, 8) + '+' + code.substring(8);
  },

  decode: (code) => {
    // Simplified decoding for demo
    return {
      latitude: 51.5074 + (Math.random() - 0.5) * 0.02,
      longitude: -0.1278 + (Math.random() - 0.5) * 0.02,
      resolution: 0.000125
    };
  }
};

// Privacy Location System Implementation
class PrivacyLocationDemo {
  static createPrivacyLocation(lat, lng, label) {
    // Generate full plus code
    const fullPlusCode = PlusCodeDemo.encode(lat, lng);

    // Extract first 6 characters for privacy
    const privacyCode = fullPlusCode.substring(0, 6);

    // Create geo hashtag
    const geoHashtag = `#geo${privacyCode.toLowerCase()}`;

    return {
      geoHashtag,
      label,
      plusCode: fullPlusCode,
      centerLat: lat + (Math.random() - 0.5) * 0.01, // Approximate center
      centerLng: lng + (Math.random() - 0.5) * 0.01,
      precision: 1.0 // ~1km radius
    };
  }

  static parseGeoHashtag(geoHashtag) {
    const code = geoHashtag.replace('#geo', '').toUpperCase() + '00+';
    const decoded = PlusCodeDemo.decode(code);

    return {
      southWest: {
        lat: decoded.latitude - 0.005,
        lng: decoded.longitude - 0.005
      },
      northEast: {
        lat: decoded.latitude + 0.005,
        lng: decoded.longitude + 0.005
      },
      center: {
        lat: decoded.latitude,
        lng: decoded.longitude
      }
    };
  }

  static getNearbyGeoHashtags(geoHashtag) {
    // Simulate finding nearby areas
    const base = geoHashtag.replace('#geo', '');
    const nearby = [geoHashtag];

    // Generate some nearby codes (simplified)
    for (let i = 0; i < 8; i++) {
      const variation = base.slice(0, -1) + '23456789cfghjmpqrvwx'[i];
      nearby.push(`#geo${variation}`);
    }

    return nearby;
  }
}

// Demo 1: Privacy Protection in Action
console.log('🛡️  DEMO 1: Privacy Protection');
console.log('================================');

const exactLocation = {
  name: "User's Home",
  lat: 51.507351,
  lng: -0.127758
};

const workLocation = {
  name: "User's Office",
  lat: 51.515419,
  lng: -0.141205
};

console.log('❌ WITHOUT Privacy System:');
console.log(`   Home: ${exactLocation.lat}, ${exactLocation.lng}`);
console.log(`   Work: ${workLocation.lat}, ${workLocation.lng}`);
console.log('   ⚠️  Exact coordinates expose personal locations!\n');

console.log('✅ WITH Privacy System:');
const homePrivacy = PrivacyLocationDemo.createPrivacyLocation(
  exactLocation.lat,
  exactLocation.lng,
  'Central London'
);

const workPrivacy = PrivacyLocationDemo.createPrivacyLocation(
  workLocation.lat,
  workLocation.lng,
  'Business District'
);

console.log(`   Home area: ${homePrivacy.geoHashtag} (${homePrivacy.label})`);
console.log(`   Work area: ${workPrivacy.geoHashtag} (${workPrivacy.label})`);
console.log('   🛡️  Only approximate 1km² areas revealed!\n');

// Demo 2: Issue Creation with Privacy
console.log('📝 DEMO 2: Privacy-First Issue Creation');
console.log('=======================================');

const issueLocation = PrivacyLocationDemo.createPrivacyLocation(
  51.509865,
  -0.118092,
  'Near London Bridge'
);

const sampleIssue = {
  id: 'wukkie_' + Date.now(),
  title: 'Broken streetlight causing safety hazard',
  description: 'The streetlight on the main pedestrian path has been out for 3 days, making it dangerous for evening commuters.',
  category: 'infrastructure',
  priority: 'medium',
  status: 'open',
  location: issueLocation,
  hashtags: ['#streetlight', '#safety', '#infrastructure', issueLocation.geoHashtag],
  createdAt: new Date().toISOString()
};

console.log('Issue Created:');
console.log(`  Title: ${sampleIssue.title}`);
console.log(`  Location: ${sampleIssue.location.geoHashtag} (${sampleIssue.location.label})`);
console.log(`  Privacy Protection: ~${sampleIssue.location.precision}km area coverage`);
console.log(`  Hashtags: ${sampleIssue.hashtags.join(', ')}\n`);

// Demo 3: Bluesky Post Generation
console.log('🦋 DEMO 3: Bluesky Integration');
console.log('==============================');

function formatIssueForBluesky(issue) {
  let postText = `🚨 New Issue: ${issue.title}\n\n${issue.description}`;

  const locationText = issue.location.label
    ? `📍 ${issue.location.geoHashtag} (${issue.location.label})`
    : `📍 ${issue.location.geoHashtag}`;

  postText += `\n\n${locationText}`;

  const hashtags = ['#wukkie', `#${issue.category}`, ...issue.hashtags].join(' ');
  postText += `\n\n${hashtags}`;

  postText += `\n\nFull details: https://wukkie.uk/issue/${issue.id}`;

  return postText;
}

const blueskyPost = formatIssueForBluesky(sampleIssue);
console.log('Generated Bluesky Post:');
console.log('------------------------');
console.log(blueskyPost);
console.log('\n✨ Privacy maintained while enabling community discovery!\n');

// Demo 4: Location-Based Search
console.log('🔍 DEMO 4: Privacy-Safe Search & Discovery');
console.log('==========================================');

const userCurrentLocation = PrivacyLocationDemo.createPrivacyLocation(
  51.510321,
  -0.116773,
  'City Center'
);

console.log(`User's current area: ${userCurrentLocation.geoHashtag}`);

// Find nearby areas for discovery
const nearbyAreas = PrivacyLocationDemo.getNearbyGeoHashtags(userCurrentLocation.geoHashtag);
console.log(`\nSearching nearby areas (${nearbyAreas.length} locations):`);
nearbyAreas.slice(0, 4).forEach(area => {
  console.log(`  - ${area}`);
});

// Simulate finding issues in nearby areas
const nearbyIssues = [
  {
    title: 'Pothole on major road',
    location: nearbyAreas[1],
    category: 'infrastructure',
    distance: '0.8km'
  },
  {
    title: 'Graffiti on public building',
    location: nearbyAreas[2],
    category: 'community',
    distance: '1.2km'
  },
  {
    title: 'Broken bus stop shelter',
    location: nearbyAreas[3],
    category: 'transport',
    distance: '0.5km'
  }
];

console.log('\nNearby Issues Found:');
nearbyIssues.forEach(issue => {
  console.log(`  📌 ${issue.title}`);
  console.log(`     Location: ${issue.location} (~${issue.distance} away)`);
  console.log(`     Category: ${issue.category}\n`);
});

// Demo 5: Privacy Comparison
console.log('📊 DEMO 5: Privacy vs Utility Comparison');
console.log('=========================================');

const locations = [
  { name: 'Trafalgar Square', lat: 51.508039, lng: -0.128069 },
  { name: 'Covent Garden', lat: 51.511214, lng: -0.123092 },
  { name: 'Oxford Circus', lat: 51.515419, lng: -0.141205 }
];

console.log('Privacy Protection Analysis:');
console.log('----------------------------');

locations.forEach(loc => {
  const privacy = PrivacyLocationDemo.createPrivacyLocation(loc.lat, loc.lng, loc.name);
  const area = PrivacyLocationDemo.parseGeoHashtag(privacy.geoHashtag);

  console.log(`${loc.name}:`);
  console.log(`  Exact GPS: ${loc.lat.toFixed(6)}, ${loc.lng.toFixed(6)} ❌ PRIVACY RISK`);
  console.log(`  Geo Hash: ${privacy.geoHashtag} ✅ PRIVACY SAFE`);
  console.log(`  Coverage: ~1km² area (${(area.northEast.lat - area.southWest.lat).toFixed(3)}° x ${(area.northEast.lng - area.southWest.lng).toFixed(3)}°)`);
  console.log(`  Utility: Perfect for community issue reporting\n`);
});

// Demo 6: Issue Thread Simulation
console.log('💬 DEMO 6: Community Follow-up Threading');
console.log('========================================');

const issueThread = {
  original: sampleIssue,
  updates: [
    {
      timestamp: new Date(Date.now() + 3600000).toISOString(),
      author: '@council_repairs',
      message: 'Thanks for reporting! We\'ve logged this issue. Repair crew scheduled for tomorrow.',
      status: 'in_progress'
    },
    {
      timestamp: new Date(Date.now() + 86400000).toISOString(),
      author: '@local_resident',
      message: 'Great to see quick action! The area is much safer now.',
      attachments: ['fixed_streetlight.jpg']
    },
    {
      timestamp: new Date(Date.now() + 90000000).toISOString(),
      author: sampleIssue.author || '@issue_reporter',
      message: 'Confirmed fixed! Thanks everyone. Marking as resolved.',
      status: 'resolved'
    }
  ]
};

console.log('Issue Thread on Bluesky:');
console.log('------------------------');
console.log(`🚨 ORIGINAL: ${issueThread.original.title}`);
console.log(`   ${issueThread.original.location.geoHashtag} | ${new Date(issueThread.original.createdAt).toLocaleString()}\n`);

issueThread.updates.forEach((update, index) => {
  console.log(`💬 REPLY ${index + 1}: ${update.author}`);
  console.log(`   ${update.message}`);
  if (update.status) {
    console.log(`   📄 Status: ${issueThread.original.status} → ${update.status}`);
  }
  if (update.attachments) {
    console.log(`   📎 Attachments: ${update.attachments.join(', ')}`);
  }
  console.log(`   ${new Date(update.timestamp).toLocaleString()}\n`);
});

// Demo 7: System Benefits Summary
console.log('🌟 DEMO 7: System Benefits Summary');
console.log('==================================');

const benefits = [
  {
    aspect: 'Privacy Protection',
    traditional: 'Exact GPS coordinates stored and shared',
    wukkie: '~1km area codes only, no precise location tracking',
    improvement: '🛡️ MAJOR privacy enhancement'
  },
  {
    aspect: 'Community Discovery',
    traditional: 'Limited to exact coordinate matching',
    wukkie: 'Area-based discovery with nearby hashtag search',
    improvement: '🔍 BETTER discoverability'
  },
  {
    aspect: 'Social Integration',
    traditional: 'Isolated platform with limited reach',
    wukkie: 'Native Bluesky integration with threading',
    improvement: '🌐 WIDER community engagement'
  },
  {
    aspect: 'Offline Capability',
    traditional: 'Requires constant internet connection',
    wukkie: 'Works offline with Plus Code navigation',
    improvement: '📱 ENHANCED accessibility'
  },
  {
    aspect: 'Data Portability',
    traditional: 'Locked into single platform',
    wukkie: 'Open standards (AT Protocol, Plus Codes)',
    improvement: '🔓 FULL data freedom'
  }
];

benefits.forEach(benefit => {
  console.log(`${benefit.aspect}:`);
  console.log(`  Traditional: ${benefit.traditional}`);
  console.log(`  Wukkie.uk:   ${benefit.wukkie}`);
  console.log(`  Result:      ${benefit.improvement}\n`);
});

console.log('✨ CONCLUSION');
console.log('=============');
console.log('Wukkie.uk creates a privacy-first, community-driven issue reporting system that:');
console.log('• Protects user privacy with geo hashtags instead of precise coordinates');
console.log('• Enables effective community discovery and engagement');
console.log('• Integrates with decentralized social networks (Bluesky/ATProto)');
console.log('• Works offline and respects user autonomy');
console.log('• Uses open standards for maximum interoperability');
console.log('\n🚀 Ready to revolutionize civic engagement while protecting privacy!');
