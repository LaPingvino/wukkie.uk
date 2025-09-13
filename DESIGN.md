# Wukkie.uk - a bug tracker for the world

** oopsie woopsie de trein is stukkie wukkie... **

A personal proof-of-concept project built on Bluesky/ATProto

Why do software projects have quality bug tracking and for world issues we are still dealing with slow and cumbersome political systems? While politicians have their place, I think we need a way to be able to take responsibility together for the problems we encounter around us. 

Wukkie.uk is a simple proof-of-concept platform that allows users to report and track real-world issues using Bluesky's decentralized social infrastructure. The goal is to demonstrate how location-based issue tracking could work in a federated environment, starting with basic functionality and improving over time based on actual usage.

## Core Features

### Issue Management
- **Create Issues**: Users can report bugs, problems, or improvement suggestions for real-world issues
- **Issue Categories**: Infrastructure, Environment, Social Services, Safety, Transportation, etc.
- **Priority Levels**: Critical, High, Medium, Low based on impact and urgency
- **Status Tracking**: Open, In Progress, Resolved, Closed, Duplicate
- **Media Support**: Photos, videos, and documents as evidence

### Location & Context
- **Geolocation**: GPS coordinates for precise issue location
- **Address Integration**: Human-readable addresses with map integration
- **Local Hashtag System**: Automatic relevance scoring based on geographic proximity
- **Subject Hashtags**: Categorization by topic (#potholes, #streetlights, #noise, etc.)

### Social Features
- **Vote System**: Upvote/downvote issues by relevance and severity
- **Comments & Updates**: Community discussion and progress reports
- **Follow Issues**: Subscribe to notifications for issues you care about
- **User Reputation**: Build credibility through quality contributions

### Decentralization
- **ATProto Integration**: Built on decentralized protocol for data ownership
- **Data Portability**: Users own their data and can move between instances
- **Federated Network**: Multiple servers can interoperate seamlessly
- **No Central Authority**: Distributed governance and content moderation

## Technical Architecture

### Frontend
- **Static HTML/CSS/JS**: Simple web interface deployed on Cloudflare Workers/Pages
- **Framework**: Vanilla JS or Alpine.js for simplicity
- **Basic responsive design**: Works on mobile, doesn't need to be perfect

### Backend Services
- **Bluesky APIs**: Leverage existing Bluesky infrastructure for auth and data storage
- **Cloudflare Workers**: Simple API endpoints for location processing
- **Custom Lexicon**: Define issue, vote, and comment record types

### Data Storage
- **Bluesky ATProto**: Issues stored as records in user's Bluesky data repository
- **Browser Storage**: Basic caching and offline capability
- **Simple indexing**: Basic hashtag and location filtering

### External Integrations
- **OpenStreetMap + Leaflet**: Free mapping and display
- **Browser Geolocation**: Built-in location capture
- **Government APIs**: Add per-issue when relevant (future enhancement)

## Local Hashtag System

### Geographic Relevance Algorithm
Building on the WhenWhere.uk Local Hashtag system, Wukkie.uk implements intelligent geographic filtering:

- **Proximity Scoring**: Issues are ranked by distance from user's location
- **Administrative Boundaries**: City, county, state/province, country level filtering  
- **Custom Radius**: User-configurable relevance radius (1km, 5km, 25km, etc.)
- **Auto-tagging**: Automatic generation of location hashtags (#amsterdam, #noordholland, #netherlands)

### Subject Classification
- **Category Hashtags**: #infrastructure, #environment, #safety, #transport
- **Specific Tags**: #pothole, #graffiti, #noise, #streetlight, #cycling
- **User Tags**: Custom hashtags for community-specific issues
- **Trending Topics**: Algorithm to surface popular local issues

### Relevance Engine
- **Personal Feed**: Weighted algorithm combining location, interests, and activity
- **Discovery Mode**: Explore issues outside your normal filter bubble
- **Notification Settings**: Configurable alerts for specific hashtags/locations
- **Community Clustering**: Identify recurring issues in specific areas

## User Stories

### Basic User (MVP)
"As someone who encounters a problem, I want to quickly post about it with location so others can see it and add their input."

**Simple Requirements:**
- Create issue with title, description, location
- Browse nearby issues
- Vote and comment on issues
- Basic hashtag filtering

### Future Users (Later iterations)
- **Community Members**: Following local issues, getting notifications
- **Authorities**: When they want to engage, they can comment like any user
- **Organizers**: Advanced filtering and analysis tools (if needed)

The beauty is that users can help define what features are actually needed through usage patterns.

## Data Models (ATProto Lexicon Schemas)

### Issue Record
```json
{
  "lexicon": 1,
  "id": "uk.wukkie.issue",
  "type": "record",
  "record": {
    "type": "object",
    "required": ["title", "description", "location", "category"],
    "properties": {
      "title": {"type": "string", "maxLength": 200},
      "description": {"type": "string", "maxLength": 2000},
      "location": {
        "type": "object",
        "properties": {
          "lat": {"type": "number"},
          "lng": {"type": "number"},
          "address": {"type": "string"},
          "accuracy": {"type": "number"}
        }
      },
      "category": {"type": "string"},
      "priority": {"type": "string", "enum": ["low", "medium", "high", "critical"]},
      "status": {"type": "string", "enum": ["open", "in_progress", "resolved", "closed"]},
      "hashtags": {"type": "array", "items": {"type": "string"}},
      "media": {"type": "array", "items": {"type": "blob"}},
      "createdAt": {"type": "string", "format": "datetime"}
    }
  }
}
```

### Vote Record
```json
{
  "lexicon": 1,
  "id": "uk.wukkie.vote",
  "type": "record", 
  "record": {
    "type": "object",
    "required": ["subject", "value"],
    "properties": {
      "subject": {"type": "string", "format": "at-uri"},
      "value": {"type": "string", "enum": ["up", "down"]},
      "createdAt": {"type": "string", "format": "datetime"}
    }
  }
}
```

### Comment Record  
```json
{
  "lexicon": 1,
  "id": "uk.wukkie.comment",
  "type": "record",
  "record": {
    "type": "object", 
    "required": ["text", "subject"],
    "properties": {
      "text": {"type": "string", "maxLength": 1000},
      "subject": {"type": "string", "format": "at-uri"},
      "reply": {"type": "string", "format": "at-uri"},
      "createdAt": {"type": "string", "format": "datetime"}
    }
  }
}
```

## Implementation Plan

### Week 1-2: Basic Functionality
- [ ] Bluesky authentication integration
- [ ] Simple issue creation form (title, description, location)
- [ ] Custom Lexicon schema for issues
- [ ] Basic issue list view

### Week 3-4: Location & Display
- [ ] Browser geolocation capture
- [ ] Simple map display with Leaflet
- [ ] Manual hashtag entry
- [ ] Basic location-based filtering

### Week 5-6: Community Features
- [ ] Voting on issues (up/down)
- [ ] Comment system
- [ ] Deploy to Cloudflare Workers/Pages
- [ ] Share with friends for testing

### Future Improvements (Based on Usage)
- [ ] Better location relevance algorithm
- [ ] Photo uploads
- [ ] Government contact integration (when relevant)
- [ ] Mobile app improvements
- [ ] Whatever users actually ask for

The key is getting something working quickly and iterating based on real usage.

## Privacy & Moderation

Since we're using Bluesky's infrastructure:
- **Data Ownership**: Users own their data via ATProto, can delete/edit their issues
- **Privacy**: Location precision is user-controlled, can be approximate
- **Moderation**: Leverage Bluesky's existing moderation tools and community guidelines
- **Blocking**: Users can block each other using standard Bluesky functionality

## Success Metrics (Keep It Simple)

### Proof of Concept Success
- Can create and view issues ✓
- Location-based filtering works ✓
- People actually use it ✓
- Issues lead to real-world improvements (bonus!)

### Learning Goals
- How well does ATProto work for non-social content?
- Is location-based issue tracking useful?
- What features do users actually want?
- How can this complement existing civic engagement tools?

The real success metric is: does this help people coordinate around fixing real problems?
