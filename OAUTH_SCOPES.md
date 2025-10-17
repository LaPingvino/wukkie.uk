# OAuth Scopes Configuration for Wukkie.uk

## ⚠️ CRITICAL INFORMATION

**DO NOT change the OAuth scopes back to `"atproto transition:generic"`** - this will cause authentication failures with "Bad token scope" errors.

## Background

As of January 2025, Bluesky/ATProto has transitioned from transitional OAuth scopes to a granular permissions system. The old `"atproto transition:generic"` scope is deprecated and no longer works.

## Sources

- **Primary Source**: https://github.com/bluesky-social/atproto/discussions/4118
- **Blog Post**: https://docs.bsky.app/blog/auth-scopes
- **Last Updated**: January 17, 2025

## Current Working Scopes

```
repo:* rpc:com.atproto.repo.createRecord?aud=* rpc:com.atproto.repo.putRecord?aud=* rpc:com.atproto.repo.deleteRecord?aud=* rpc:com.atproto.repo.listRecords?aud=* rpc:com.atproto.repo.getRecord?aud=* rpc:com.atproto.server.getSession?aud=* blob:*/*
```

## Scope Breakdown

### Repository Permissions
- `repo:*` - Full permission (create, update, delete) on ALL record types in user's repository
  - The `*` wildcard covers all record collections
  - Alternative: `repo?collection=app.bsky.actor.profile` for specific collections

### RPC (Remote Procedure Call) Permissions
- `rpc:com.atproto.repo.createRecord?aud=*` - Create new records on any ATProto service
- `rpc:com.atproto.repo.putRecord?aud=*` - Update/put existing records on any service
- `rpc:com.atproto.repo.deleteRecord?aud=*` - Delete records on any service
- `rpc:com.atproto.repo.listRecords?aud=*` - List/query records on any service
- `rpc:com.atproto.repo.getRecord?aud=*` - Retrieve specific records on any service
- `rpc:com.atproto.server.getSession?aud=*` - Get session information (required for authentication)

### Blob Permissions
- `blob:*/*` - Upload any MIME type of blob/file (images, videos, documents, etc.)
  - Alternative: `blob:image/*` for images only, `blob:video/*` for videos only

## Scope Syntax Rules

1. **Format**: `permission:resource?param=value&param2=value2`
2. **Case Sensitive**: All scope strings are case-sensitive
3. **Character Set**: Uses subset of printable non-whitespace ASCII characters
4. **Wildcards**: Either `lxm` (lexicon method) or `aud` (audience) can be wildcard (`*`), but NOT both
5. **Parameters**: 
   - Separated by `&`
   - Use `=` for name-value pairs
   - Support percent-encoding for special characters
   - Array values: repeat parameter name (e.g., `action=create&action=update`)

## Configuration Files

These scopes are configured in two places:

1. **`package.json`** - Source of truth, used by build script
2. **`static/client-metadata.json`** - Updated automatically by build script

## Troubleshooting

### "Bad token scope" Error
- **Symptom**: OAuth exchange succeeds but ATProto API calls fail
- **Cause**: Using deprecated `"atproto transition:generic"` scope
- **Solution**: Use the granular permissions listed above

### Permission Denied Errors
- **Check**: Ensure all required RPC permissions are included
- **Verify**: The `aud=*` parameter allows calls to any ATProto service
- **Confirm**: `rpc:com.atproto.server.getSession?aud=*` is included for authentication

## Migration History

- **Before Jan 2025**: Used `"atproto transition:generic"`
- **Jan 17, 2025**: Migrated to granular permissions due to Bluesky system updates
- **Status**: Tested and working on production deployment

## Future Updates

When Bluesky introduces "permission sets" (higher-level permissions), we may be able to simplify these scopes. However, until then, these granular permissions are required.

## Testing

These exact scopes have been tested and verified working with:
- OAuth authentication flow
- ATProto record operations (create, read, update, delete)
- Blob uploads
- Session management

## References for Developers

- **ATProto Specification**: https://atproto.com/
- **Bluesky Developer Docs**: https://docs.bsky.app/
- **OAuth 2.1 Specification**: https://datatracker.ietf.org/doc/html/draft-ietf-oauth-v2-1

---

**⚠️ Remember**: Always test OAuth changes thoroughly before deploying to production!