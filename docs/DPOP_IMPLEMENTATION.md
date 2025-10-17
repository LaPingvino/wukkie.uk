# DPoP Implementation for Bluesky OAuth

## Overview

This document explains the implementation of DPoP (Demonstration of Proof of Possession) support for Bluesky OAuth authentication in the Wukkie.uk application.

## What is DPoP?

DPoP (RFC 9449) is a security extension to OAuth 2.0 that binds access tokens to a specific client's cryptographic key. This prevents token theft attacks by ensuring that even if an access token is intercepted, it cannot be used without the corresponding private key.

## Why is DPoP Required?

Bluesky's OAuth implementation requires DPoP for enhanced security. When the client metadata includes `"dpop_bound_access_tokens": true`, all token requests must include a valid DPoP proof.

## Implementation Details

### Key Components

1. **Key Pair Generation**: Uses Web Crypto API to generate ECDSA P-256 key pairs
2. **DPoP Proof Creation**: Creates signed JWT proofs for each authenticated request
3. **Automatic Integration**: Transparently adds DPoP headers to token and API requests

### Code Changes

#### 1. Key Initialization (`initializeDPoP()`)

```javascript
// Generates ECDSA P-256 key pair
this.dpopKeyPair = await window.crypto.subtle.generateKey({
  name: "ECDSA",
  namedCurve: "P-256",
}, true, ["sign", "verify"]);

// Exports public key as JWK for DPoP proofs
this.dpopJwk = await window.crypto.subtle.exportKey("jwk", this.dpopKeyPair.publicKey);
```

#### 2. DPoP Proof Creation (`createDPoPProof()`)

Creates a signed JWT with:
- **Header**: `{"typ": "dpop+jwt", "alg": "ES256", "jwk": {...}}`
- **Payload**: `{"jti": "...", "htm": "POST", "htu": "https://...", "iat": 1234567890}`
- **Signature**: ECDSA signature using the private key

#### 3. Token Exchange Integration

```javascript
// Add DPoP proof to token requests
const dpopProof = await this.createDPoPProof("POST", metadata.token_endpoint);
if (dpopProof) {
  headers["DPoP"] = dpopProof;
}
```

#### 4. API Request Integration

All authenticated API requests now include DPoP proofs automatically via the `makeRequest()` method.

### Security Features

- **Unique JTI**: Each proof uses a cryptographically random JWT ID
- **Time-based**: Proofs include issued-at timestamps
- **Method/URL Binding**: Proofs are bound to specific HTTP methods and URLs
- **Key Rotation**: New key pairs are generated per session

### Error Handling

The implementation includes comprehensive error handling:

1. **Web Crypto Unavailable**: Gracefully falls back without DPoP
2. **Key Generation Failure**: Continues without DPoP support
3. **Proof Creation Failure**: Logs errors but doesn't block requests

### Browser Compatibility

- **Requires**: Modern browsers with Web Crypto API support
- **Fallback**: Graceful degradation when crypto APIs are unavailable
- **Algorithms**: Uses widely supported ECDSA P-256

## Testing the Implementation

### Success Indicators

1. No "invalid_dpop_proof" errors in console
2. Successful OAuth token exchange
3. Successful authenticated API requests
4. Console logs showing "🔑 DPoP proof created successfully"

### Debug Information

Enable debug logging to see:
- Key pair initialization status
- DPoP proof creation attempts
- Token exchange with DPoP headers
- API request authentication

## Troubleshooting

### Common Issues

1. **"DPoP not initialized"**: Check if Web Crypto API is available
2. **"invalid_dpop_proof"**: Verify JWT structure and signature
3. **Clock skew**: Ensure system time is accurate for `iat` claims

### Debug Commands

```javascript
// Check if DPoP is enabled
console.log(blueskyAuth.dpopEnabled);

// Manually create a proof for testing
const proof = await blueskyAuth.createDPoPProof("GET", "https://example.com");
```

## Future Considerations

1. **Key Persistence**: Currently generates new keys per session
2. **Token Refresh**: May need DPoP support for refresh token flows
3. **Error Recovery**: Could implement automatic retry with new keys
4. **Performance**: Consider key caching strategies for high-frequency requests

## Standards Compliance

This implementation follows:
- **RFC 9449**: OAuth 2.0 Demonstration of Proof of Possession
- **RFC 7519**: JSON Web Token (JWT)
- **RFC 7518**: JSON Web Algorithms (JWA)

## Dependencies

- **Web Crypto API**: For key generation and signing
- **Base64URL Encoding**: Custom implementation for JWT formatting
- **JSON**: Native JSON handling for JWT payloads

---

*Last updated: January 2025*
*Implementation version: 1.0*