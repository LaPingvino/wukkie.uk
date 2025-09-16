# OAuth Scopes Documentation for Wukkie.uk

## Current OAuth Scope Configuration

Wukkie.uk currently uses **transitional scopes** while the granular scope system stabilizes. The current scope configuration is:

```javascript
scope: 'atproto transition:generic transition:chat.bsky'
```

**Note:** We're using transitional scopes because the granular scope system is still evolving and not all providers fully support it yet. This provides reliable OAuth functionality during the transition period.

## Current Functionality Coverage

| Scope | Functionality | Used For |
|-------|---------------|----------|
| `atproto` | Required base scope for AT Protocol access | All ATProto operations |
| `transition:generic` | App Password equivalent (broad read/write) | Issue creation, posting, user data |
| `transition:chat.bsky` | Chat functionality (when available) | Future chat features |

## Scope System Overview

Bluesky uses a **granular scope system** with the format: `resource:part?parameter=value`

### Scope Categories

#### 1. Repo Permissions (`repo:`)
Controls access to records in user's repository:
- `repo:app.bsky.feed.post` - Full access to posts
- `repo:app.bsky.graph.follow` - Manage follows
- `repo:app.bsky.actor.profile` - Edit profile
- `repo:*` - Full access to all record types

#### 2. RPC Permissions (`rpc:`)
Access to specific API endpoints:
- `rpc:com.atproto.repo.createRecord` - Create records
- `rpc:com.atproto.moderation.createReport` - Submit moderation reports

#### 3. Blob Permissions (`blob:`)
File upload capabilities:
- `blob:*/*` - Upload any file type
- `blob:image/*` - Upload only images
- `blob:video/*` - Upload only videos

#### 4. Account Permissions (`account:`)
Account-level access:
- `account:email` - Read email address
- `account:repo?action=manage` - Manage entire repository

#### 5. Identity Permissions (`identity:`)
Identity management:
- `identity:handle` - Manage account handle
- `identity:*` - Full identity control

## Adding New Features

### To Add Profile Management
Add to scope:
```javascript
scope: 'atproto repo:app.bsky.feed.post repo:app.bsky.actor.profile blob:*/*'
```

### To Add Follow/Unfollow Users
Add to scope:
```javascript
scope: 'atproto repo:app.bsky.feed.post repo:app.bsky.graph.follow blob:*/*'
```

### To Add Moderation Reporting
Add to scope:
```javascript
scope: 'atproto repo:app.bsky.feed.post rpc:com.atproto.moderation.createReport blob:*/*'
```

### To Add Email Access
Add to scope:
```javascript
scope: 'atproto repo:app.bsky.feed.post account:email blob:*/*'
```

### To Add Chat Features (if needed)
Add to scope:
```javascript
scope: 'atproto repo:app.bsky.feed.post repo:app.bsky.chat.* blob:*/*'
```

## Transitional Scopes (Legacy)

For reference, the old transitional scopes that provide broader access:
- `transition:generic` - App Password equivalent (very broad)
- `transition:chat.bsky` - Chat functionality
- `transition:email` - Email access

**Note:** Transitional scopes are currently the most reliable option. Granular scopes will be adopted when fully stable across providers.

## Current Implementation Status

**Using Transitional Scopes** (Current):
```javascript
scope: 'atproto transition:generic transition:chat.bsky'
```

**Future Granular Scopes** (When Stable):
```javascript  
scope: 'atproto repo:app.bsky.feed.post blob:*/*'
```

OAuth scope is configured in:
- **File:** `build.js`
- **Location:** Line ~136 in the `dynamicMetadata` object
- **Property:** `scope`

## Scope Testing

To test new scopes:
1. Update the `scope` property in `build.js`
2. Run `npm run build`
3. Deploy or test locally
4. Verify the new permissions work in your OAuth flow

## Security Best Practices

1. **Minimal Scopes:** Only request permissions you actually use
2. **Regular Review:** Audit scopes when adding features
3. **User Communication:** Clearly explain what permissions are needed
4. **Fallback Handling:** Handle scope-related errors gracefully

## Future Expansion Examples

### Community Features
```javascript
// For likes, reposts, replies
scope: 'atproto repo:app.bsky.feed.post repo:app.bsky.feed.like repo:app.bsky.feed.repost blob:*/*'
```

### Advanced Moderation
```javascript
// For reporting and blocking
scope: 'atproto repo:app.bsky.feed.post rpc:com.atproto.moderation.createReport repo:app.bsky.graph.block blob:*/*'
```

### Full Social Features
```javascript
// Complete social functionality
scope: 'atproto repo:app.bsky.* rpc:com.atproto.* blob:*/* account:email'
```

## Resources

- [Bluesky OAuth Documentation](https://docs.bsky.app/docs/advanced-guides/oauth-client)
- [ATProto OAuth Specification](https://atproto.com/specs/oauth)
- [OAuth Scope Proposal Discussion](https://github.com/bluesky-social/atproto/discussions/2656)

---

**Last Updated:** January 2025
**Current Scope Version:** Transitional (stable)
**Migration Status:** Will transition to granular scopes when fully supported