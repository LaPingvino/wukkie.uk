// Early debug logging
console.log("🟢 [DEBUG] auth.ts: File loading started");

/**
 * Simple OAuth Authentication for Bluesky/ATProto
 * Implements OAuth flow from scratch without external dependencies
 */

export interface BlueskySession {
  handle: string;
  did: string;
  accessJwt: string;
  refreshJwt: string;
  active: boolean;
  isDemo?: boolean;
}

export interface AuthState {
  isAuthenticated: boolean;
  session: BlueskySession | null;
  agent: any | null;
  xrpc: any | null;
}

// Simple base64url encoding/decoding
function base64UrlEncode(input: ArrayBuffer | Uint8Array | string): string {
  let base64: string;

  if (typeof input === "string") {
    // Handle string input - convert to UTF-8 bytes first to handle Unicode
    const utf8Bytes = new TextEncoder().encode(input);
    // Convert bytes to binary string safely
    let binaryString = "";
    for (let i = 0; i < utf8Bytes.length; i++) {
      binaryString += String.fromCharCode(utf8Bytes[i]);
    }
    base64 = btoa(binaryString);
  } else {
    // Handle ArrayBuffer or Uint8Array input
    const bytes = input instanceof Uint8Array ? input : new Uint8Array(input);
    base64 = btoa(String.fromCharCode(...bytes));
  }

  return base64.split("+").join("-").split("/").join("_").split("=").join("");
}

function base64UrlDecode(str: string): ArrayBuffer {
  str = str.split("-").join("+").split("_").join("/");
  while (str.length % 4) str += "=";

  try {
    const decoded = atob(str);
    const bytes = new Uint8Array(decoded.length);
    for (let i = 0; i < decoded.length; i++) {
      bytes[i] = decoded.charCodeAt(i);
    }
    return bytes.buffer;
  } catch (error) {
    throw new Error(
      `Base64 decode error: ${error instanceof Error ? error.message : "Unknown error"}`,
    );
  }
}

// Simple random string generator
function generateRandomString(length: number = 32): string {
  const chars =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-._~";
  const array = new Uint8Array(length);
  crypto.getRandomValues(array);
  return Array.from(array, (byte) => chars[byte % chars.length]).join("");
}

// PKCE code challenge generation
async function generatePKCE(): Promise<{
  verifier: string;
  challenge: string;
}> {
  const verifier = generateRandomString(128);
  const encoder = new TextEncoder();
  const data = encoder.encode(verifier);
  const hash = await crypto.subtle.digest("SHA-256", data);
  const challenge = base64UrlEncode(hash);
  return { verifier, challenge };
}

class BlueskyAuth {
  private authState: AuthState = {
    isAuthenticated: false,
    session: null,
    agent: null,
    xrpc: null,
  };

  private listeners: Array<(state: AuthState) => void> = [];
  private dpopKeyPair: CryptoKeyPair | null = null;
  private dpopJwk: JsonWebKey | null = null;
  private dpopEnabled: boolean = false;

  constructor() {
    console.log("🟢 [DEBUG] BlueskyAuth constructor: Starting");
    console.log("🔧 BlueskyAuth: Initializing OAuth from scratch...");
    this.initializeDPoP();
    console.log("🟢 [DEBUG] BlueskyAuth constructor: Complete");
  }

  /**
   * Initialize DPoP key pair for proof generation
   */
  private async initializeDPoP(): Promise<void> {
    try {
      // Check if Web Crypto API is available
      if (!window.crypto || !window.crypto.subtle) {
        console.warn("⚠️ Web Crypto API not available, DPoP disabled");
        return;
      }

      // Generate EC P-256 key pair for DPoP
      this.dpopKeyPair = await window.crypto.subtle.generateKey(
        {
          name: "ECDSA",
          namedCurve: "P-256",
        },
        true, // extractable
        ["sign", "verify"],
      );

      // Export public key as JWK for DPoP proofs
      this.dpopJwk = await window.crypto.subtle.exportKey(
        "jwk",
        this.dpopKeyPair.publicKey,
      );

      this.dpopEnabled = true;
      console.log("🔑 DPoP key pair initialized successfully");
    } catch (error) {
      console.error("❌ Failed to initialize DPoP:", error);
      console.warn("⚠️ Continuing without DPoP support");
      this.dpopKeyPair = null;
      this.dpopJwk = null;
      this.dpopEnabled = false;
    }
  }

  /**
   * Create a DPoP proof JWT
   */
  private async createDPoPProof(
    method: string,
    url: string,
    nonce?: string,
  ): Promise<string | null> {
    if (!this.dpopEnabled || !this.dpopKeyPair || !this.dpopJwk) {
      if (!this.dpopEnabled) {
        console.debug("🔄 DPoP not available, skipping proof creation");
      }
      return null;
    }

    try {
      const now = Math.floor(Date.now() / 1000);
      const jti = this.generateJti();

      // Create JWT header
      const header = {
        typ: "dpop+jwt",
        alg: "ES256",
        jwk: {
          kty: this.dpopJwk.kty,
          crv: this.dpopJwk.crv,
          x: this.dpopJwk.x,
          y: this.dpopJwk.y,
        },
      };

      // Create JWT payload
      const payload: any = {
        jti: jti,
        htm: method,
        htu: url,
        iat: now,
      };

      // Add nonce if provided
      if (nonce) {
        payload.nonce = nonce;
      }

      // Create and sign JWT
      const headerB64 = base64UrlEncode(JSON.stringify(header));
      const payloadB64 = base64UrlEncode(JSON.stringify(payload));
      const signatureInput = `${headerB64}.${payloadB64}`;

      const signature = await window.crypto.subtle.sign(
        {
          name: "ECDSA",
          hash: "SHA-256",
        },
        this.dpopKeyPair.privateKey,
        new TextEncoder().encode(signatureInput),
      );

      const signatureB64 = base64UrlEncode(new Uint8Array(signature));
      const dpopProof = `${signatureInput}.${signatureB64}`;

      console.log("🔑 DPoP proof created successfully");
      return dpopProof;
    } catch (error) {
      console.error("❌ Failed to create DPoP proof:", error);
      return null;
    }
  }

  /**
   * Generate a unique JWT ID for DPoP proof
   */
  private generateJti(): string {
    const array = new Uint8Array(16);
    window.crypto.getRandomValues(array);
    return Array.from(array, (byte) => byte.toString(16).padStart(2, "0")).join(
      "",
    );
  }

  /**
   * Start OAuth login flow with fallback to app password auth
   */
  async login(handle: string, password?: string): Promise<void> {
    try {
      console.log("🔐 Starting login for:", handle);

      // If password is provided, use app password auth directly
      if (password) {
        return await this.loginWithAppPassword(handle, password);
      }

      // Step 1: Resolve handle to DID and get PDS
      const { did, pds } = await this.resolveHandle(handle);
      console.log("✅ Resolved handle:", { did, pds });

      // Step 2: Try OAuth endpoints in order of preference
      let metadata, oauthPds;

      // Try 1: bsky.app OAuth (most likely to work)
      try {
        console.log("🔄 Trying bsky.app OAuth...");
        metadata = await this.getOAuthMetadata("https://bsky.social");
        oauthPds = "https://bsky.social";
        console.log("✅ Got OAuth metadata from bsky.app");
      } catch (bskyError) {
        console.log("⚠️ bsky.app OAuth not available, trying user's PDS...");

        // Try 2: User's specific PDS OAuth
        try {
          metadata = await this.getOAuthMetadata(pds);
          oauthPds = pds;
          console.log("✅ Got OAuth metadata from user's PDS");
        } catch (pdsError) {
          console.log(
            "⚠️ User's PDS OAuth not available, falling back to app password auth",
          );
          throw new Error("OAUTH_NOT_SUPPORTED");
        }
      }

      // Step 3: Generate PKCE and state
      const { verifier, challenge } = await generatePKCE();
      const state = generateRandomString(32);

      // Store OAuth state
      localStorage.setItem(
        "oauth_state",
        JSON.stringify({
          state,
          verifier,
          handle,
          did,
          pds: oauthPds, // Store which PDS we're using for OAuth
          userPds: pds, // Store user's actual PDS
        }),
      );

      // Step 4: Build authorization URL
      const authUrl = new URL(metadata.authorization_endpoint);
      const clientId = window.location.origin + "/client-metadata.json";

      const requestedScope = "__OAUTH_SCOPES__";

      authUrl.searchParams.set("response_type", "code");
      authUrl.searchParams.set("client_id", clientId);
      authUrl.searchParams.set("redirect_uri", window.location.origin);
      authUrl.searchParams.set("scope", requestedScope);
      authUrl.searchParams.set("state", state);
      authUrl.searchParams.set("code_challenge", challenge);
      authUrl.searchParams.set("code_challenge_method", "S256");

      console.log("🔍 [DEBUG] Authorization URL scope:", requestedScope);
      console.log("🔍 [DEBUG] Full authorization URL:", authUrl.toString());
      authUrl.searchParams.set("login_hint", handle);

      // Step 5: Redirect to authorization server
      console.log(`🔗 Redirecting to ${oauthPds} authorization server...`);
      window.location.href = authUrl.toString();
    } catch (error) {
      console.error("❌ Login failed:", error);
      if (error instanceof Error && error.message === "OAUTH_NOT_SUPPORTED") {
        throw error;
      }

      throw new Error(
        `Login failed: ${error instanceof Error ? error.message : "Unknown error"}`,
      );
    }
  }

  /**
   * Login with app password (direct authentication)
   */
  async loginWithAppPassword(handle: string, password: string): Promise<void> {
    try {
      console.log("🔐 Logging in with app password for:", handle);

      const response = await fetch(
        "https://bsky.social/xrpc/com.atproto.server.createSession",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            identifier: handle,
            password: password,
          }),
        },
      );

      if (!response.ok) {
        const errorData = (await response.json()) as { message?: string };
        throw new Error(errorData.message || "Login failed");
      }

      const sessionData = (await response.json()) as {
        handle: string;
        did: string;
        accessJwt: string;
        refreshJwt: string;
      };

      // Create session
      this.authState = {
        isAuthenticated: true,
        session: {
          handle: sessionData.handle,
          did: sessionData.did,
          accessJwt: sessionData.accessJwt,
          refreshJwt: sessionData.refreshJwt,
          active: true,
        },
        agent: null,
        xrpc: this,
      };

      // Store session
      localStorage.setItem(
        "wukkie_session",
        JSON.stringify(this.authState.session),
      );

      // Notify listeners
      this.notifyListeners();

      console.log("✅ App password login successful");
    } catch (error) {
      console.error("❌ App password login failed:", error);
      throw new Error(
        `Login failed: ${error instanceof Error ? error.message : "Unknown error"}`,
      );
    }
  }

  /**
   * Handle OAuth callback (simplified and non-blocking)
   */
  async handleOAuthCallback(): Promise<boolean> {
    try {
      // Quick check for OAuth parameters
      const urlParams = new URLSearchParams(window.location.search);
      const code = urlParams.get("code");
      const state = urlParams.get("state");
      const error = urlParams.get("error");

      // Return immediately if no OAuth parameters
      if (!code && !error) {
        return false;
      }

      console.log("🔍 OAuth callback detected");

      // Clean up URL immediately
      const cleanUrl = window.location.origin + window.location.pathname;
      window.history.replaceState(null, "", cleanUrl);

      // Handle error case
      if (error) {
        console.error("🚨 OAuth error detected:", error);
        const errorDescription = urlParams.get("error_description");
        const errorUri = urlParams.get("error_uri");

        console.error("📋 Error details:", {
          error,
          error_description: errorDescription,
          error_uri: errorUri,
        });

        // Clear any existing session on OAuth error
        this.clearSessionAndStorage();
        return false;
      }

      // Validate required parameters
      if (!code || !state) {
        console.error("Missing OAuth parameters");
        return false;
      }

      // Get and validate stored state (with fallback)
      const storedStateData = localStorage.getItem("oauth_state");
      if (!storedStateData) {
        console.error("Missing OAuth state data");
        return false;
      }

      let stateData;
      try {
        stateData = JSON.parse(storedStateData);
        localStorage.removeItem("oauth_state");
      } catch (e) {
        console.error("🚨 Invalid OAuth state data - clearing session:", e);
        this.clearSessionAndStorage();
        return false;
      }

      if (stateData.state !== state) {
        console.error("🚨 OAuth state mismatch - clearing session");
        console.error("🔍 Expected:", stateData.state, "Got:", state);
        this.clearSessionAndStorage();
        return false;
      }

      console.log("✅ OAuth state verified");

      // Exchange code for tokens (non-blocking)
      this.exchangeCodeForTokens(code, stateData).catch((error) => {
        console.error("🚨 Token exchange failed:", error);
        console.error("🔍 Clearing session due to token exchange failure");
        this.clearSessionAndStorage();
      });

      return true;
    } catch (error) {
      console.error("🚨 OAuth callback error:", error);
      console.error("🔍 Clearing session due to callback error");
      this.clearSessionAndStorage();
      return false;
    }
  }

  /**
   * Resolve handle to DID and PDS
   */
  private async resolveHandle(
    handle: string,
  ): Promise<{ did: string; pds: string }> {
    // First try to resolve handle
    const response = await fetch(
      `https://public.api.bsky.app/xrpc/com.atproto.identity.resolveHandle?handle=${encodeURIComponent(handle)}`,
    );

    if (!response.ok) {
      throw new Error(`Failed to resolve handle: ${response.statusText}`);
    }

    const data = (await response.json()) as { did: string };
    const did = data.did;

    // Get DID document to find PDS
    // Get DID document
    const didResponse = await fetch(`https://plc.directory/${did}`);
    if (!didResponse.ok) {
      throw new Error(`Failed to get DID document: ${didResponse.statusText}`);
    }

    const didDoc = (await didResponse.json()) as {
      service?: Array<{
        id: string;
        type: string;
        serviceEndpoint: string;
      }>;
    };
    const pdsService = didDoc.service?.find(
      (s) => s.type === "AtprotoPersonalDataServer" || s.id === "#atproto_pds",
    );

    if (!pdsService) {
      throw new Error("No PDS service found in DID document");
    }

    return { did, pds: pdsService.serviceEndpoint };
  }

  /**
   * Get OAuth metadata from PDS with improved error handling
   */
  private async getOAuthMetadata(pds: string): Promise<any> {
    // Try different OAuth metadata endpoints in order of preference
    const endpoints = [
      `${pds}/.well-known/oauth-authorization-server`,
      `${pds}/.well-known/oauth-protected-resource`,
    ];

    let lastError: Error = new Error("No OAuth metadata endpoints available");

    for (const endpoint of endpoints) {
      try {
        console.log(`🔄 Trying OAuth metadata at: ${endpoint}`);

        const response = await Promise.race([
          fetch(endpoint),
          new Promise<Response>((_, reject) =>
            setTimeout(() => reject(new Error("OAuth metadata timeout")), 5000),
          ),
        ]);

        if (response.ok) {
          const metadata = await response.json();
          console.log(`✅ Got OAuth metadata from: ${endpoint}`);
          return metadata;
        } else {
          console.log(
            `❌ OAuth metadata failed at ${endpoint}: ${response.status}`,
          );
          lastError = new Error(
            `HTTP ${response.status}: ${response.statusText}`,
          );
        }
      } catch (error) {
        console.log(
          `❌ OAuth metadata error at ${endpoint}:`,
          error instanceof Error ? error.message : "Unknown error",
        );
        lastError = error instanceof Error ? error : new Error("Unknown error");
      }
    }

    throw new Error(
      `Failed to get OAuth metadata from ${pds}: ${lastError.message}`,
    );
  }

  /**
   * Exchange authorization code for tokens (with timeout)
   */
  private async exchangeCodeForTokens(
    code: string,
    stateData: any,
  ): Promise<void> {
    try {
      console.log("🔄 Exchanging code for tokens...");

      const metadata = await Promise.race([
        this.getOAuthMetadata(stateData.pds),
        new Promise((_, reject) =>
          setTimeout(() => reject(new Error("Metadata timeout")), 5000),
        ),
      ]);

      const clientId = window.location.origin + "/client-metadata.json";

      // Log OAuth scopes being requested
      console.log("🔍 OAuth scopes being used:", this.getScopesFromMetadata());
      console.log("🔍 Client ID:", clientId);
      console.log("🔍 Token endpoint:", metadata.token_endpoint);

      // Try token exchange with DPoP (with nonce retry if needed)
      const tokenResponse = await this.performTokenExchange(
        metadata.token_endpoint,
        {
          grant_type: "authorization_code",
          client_id: clientId,
          code: code,
          redirect_uri: window.location.origin,
          code_verifier: stateData.verifier,
        },
      );

      if (!tokenResponse.ok) {
        const errorText = await tokenResponse.text();
        console.error(
          "🚨 Token exchange HTTP error:",
          tokenResponse.status,
          tokenResponse.statusText,
        );
        console.error("🚨 Token exchange error body:", errorText);

        // Try to parse error as JSON for better debugging
        try {
          const errorJson = JSON.parse(errorText);
          console.error("🔍 Parsed error:", errorJson);
        } catch (e) {
          console.error("🔍 Raw error text:", errorText);
        }

        throw new Error(
          `Token exchange failed (${tokenResponse.status}): ${errorText}`,
        );
      }

      const tokens = (await tokenResponse.json()) as {
        access_token: string;
        refresh_token?: string;
      };

      // Create session
      this.authState = {
        isAuthenticated: true,
        session: {
          handle: stateData.handle,
          did: stateData.did,
          accessJwt: tokens.access_token,
          refreshJwt: tokens.refresh_token || "",
          active: true,
        },
        agent: null,
        xrpc: this,
      };

      // Store session
      localStorage.setItem(
        "wukkie_session",
        JSON.stringify(this.authState.session),
      );

      // Notify listeners
      this.notifyListeners();

      console.log("✅ Token exchange successful");
    } catch (error) {
      console.error("❌ Token exchange failed:", error);
      console.error("🔍 Clearing session due to token exchange failure");
      this.clearSessionAndStorage();
      throw error;
    }
  }

  /**
   * Perform token exchange with DPoP nonce retry logic
   */
  private async performTokenExchange(
    tokenEndpoint: string,
    params: Record<string, string>,
  ): Promise<Response> {
    // First attempt without nonce
    let dpopProof = await this.createDPoPProof("POST", tokenEndpoint);

    const headers: Record<string, string> = {
      "Content-Type": "application/x-www-form-urlencoded",
    };

    if (dpopProof) {
      headers["DPoP"] = dpopProof;
    }

    let response = await Promise.race([
      fetch(tokenEndpoint, {
        method: "POST",
        headers,
        body: new URLSearchParams(params),
      }),
      new Promise<Response>((_, reject) =>
        setTimeout(() => reject(new Error("Token request timeout")), 10000),
      ),
    ]);

    // If server requires nonce, retry with nonce
    if (response.status === 400) {
      try {
        const errorText = await response.text();
        const errorData = JSON.parse(errorText);

        if (errorData.error === "use_dpop_nonce") {
          console.log("🔄 Server requires DPoP nonce, retrying...");

          // Extract nonce from DPoP-Nonce header
          const nonce = response.headers.get("DPoP-Nonce");
          if (nonce) {
            console.log("🔑 Using DPoP nonce for retry");

            // Create new DPoP proof with nonce
            dpopProof = await this.createDPoPProof(
              "POST",
              tokenEndpoint,
              nonce,
            );

            if (dpopProof) {
              headers["DPoP"] = dpopProof;

              // Retry the request with nonce
              response = await Promise.race([
                fetch(tokenEndpoint, {
                  method: "POST",
                  headers,
                  body: new URLSearchParams(params),
                }),
                new Promise<Response>((_, reject) =>
                  setTimeout(
                    () => reject(new Error("Token request timeout")),
                    10000,
                  ),
                ),
              ]);
            }
          }
        }
      } catch (parseError) {
        // If we can't parse error response, return original response
        console.warn("⚠️ Could not parse error response for nonce extraction");
      }
    }

    return response;
  }

  /**
   * Demo login for testing
   */
  async demoLogin(): Promise<void> {
    console.log("🎭 Demo login");

    this.authState = {
      isAuthenticated: true,
      session: {
        handle: "demo.wukkie.uk",
        did: "did:demo:wukkie",
        accessJwt: "demo-token",
        refreshJwt: "demo-refresh",
        active: true,
        isDemo: true,
      },
      agent: null,
      xrpc: this,
    };

    localStorage.setItem(
      "wukkie_session",
      JSON.stringify(this.authState.session),
    );
    this.notifyListeners();
    console.log("✅ Demo login successful");
  }

  /**
   * Restore session from storage
   */
  async restoreSession(): Promise<boolean> {
    console.log("🔑 Attempting to restore session...");

    try {
      // Add timeout protection
      return await Promise.race([
        this.doRestoreSession(),
        new Promise<boolean>((resolve) =>
          setTimeout(() => {
            console.log(
              "🔑 Session restore timeout, continuing without session",
            );
            resolve(false);
          }, 2000),
        ),
      ]);
    } catch (error) {
      console.error("❌ Session restore failed:", error);
      localStorage.removeItem("wukkie_session");
      return false;
    }
  }

  private async doRestoreSession(): Promise<boolean> {
    // Don't restore if already authenticated (e.g., from OAuth callback)
    if (this.authState.isAuthenticated) {
      console.log("🔑 Already authenticated, skipping session restore");
      return true;
    }

    const stored = localStorage.getItem("wukkie_session");
    if (!stored) {
      console.log("🔑 No stored session found");
      return false;
    }

    const session: BlueskySession = JSON.parse(stored);

    // Demo sessions can be restored directly
    if (session.isDemo) {
      this.authState = {
        isAuthenticated: true,
        session: session,
        agent: null,
        xrpc: this,
      };
      this.notifyListeners();
      console.log("✅ Demo session restored");
      return true;
    }

    // For real sessions, we'd need to validate tokens
    // For now, assume they're valid
    this.authState = {
      isAuthenticated: true,
      session: session,
      agent: null,
      xrpc: this,
    };

    this.notifyListeners();
    console.log("✅ Session restored successfully");
    return true;
  }

  /**
   * Logout
   */
  async logout(): Promise<void> {
    try {
      console.log("👋 Logging out...");

      // Clear stored data
      localStorage.removeItem("wukkie_session");
      localStorage.removeItem("oauth_state");

      // Reset auth state
      this.authState = {
        isAuthenticated: false,
        session: null,
        agent: null,
        xrpc: null,
      };

      this.notifyListeners();
      console.log("✅ Logout successful");
    } catch (error) {
      console.error("❌ Logout error:", error);
    }
  }

  /**
   * Clear session and local storage (for error recovery)
   */
  private clearSessionAndStorage(): void {
    console.log("🧹 Clearing OAuth session and storage");

    // Clear auth state
    this.authState = {
      isAuthenticated: false,
      session: null,
      agent: null,
      xrpc: null,
    };

    // Clear all OAuth-related localStorage
    localStorage.removeItem("wukkie_session");
    localStorage.removeItem("oauth_state");
    localStorage.removeItem("dpop_key");

    // Notify listeners of logout
    this.notifyListeners();

    console.log("✅ Session and storage cleared");
  }

  /**
   * Get current OAuth scopes from client metadata (for debugging)
   */
  private async getScopesFromMetadata(): Promise<string> {
    try {
      const response = await fetch(
        window.location.origin + "/client-metadata.json",
      );
      if (response.ok) {
        const metadata = (await response.json()) as { scope?: string };
        return metadata.scope || "unknown";
      }
      return "fetch-failed";
    } catch (e) {
      return "error";
    }
  }

  /**
   * Get current authentication state
   */
  getAuthState(): AuthState {
    return { ...this.authState };
  }

  /**
   * Get XRPC client
   */
  getXRPC(): any | null {
    return this.authState.xrpc;
  }

  /**
   * Get agent
   */
  getAgent(): any | null {
    return this.authState.agent;
  }

  /**
   * Check if authenticated
   */
  isAuthenticated(): boolean {
    return this.authState.isAuthenticated;
  }

  /**
   * Get session
   */
  getSession(): BlueskySession | null {
    return this.authState.session;
  }

  /**
   * Subscribe to auth state changes
   */
  onStateChange(callback: (state: AuthState) => void): () => void {
    this.listeners.push(callback);
    return () => {
      const index = this.listeners.indexOf(callback);
      if (index > -1) {
        this.listeners.splice(index, 1);
      }
    };
  }

  /**
   * Notify listeners
   */
  private notifyListeners(): void {
    this.listeners.forEach((listener) => {
      try {
        listener(this.getAuthState());
      } catch (error) {
        console.error("Auth state listener error:", error);
      }
    });
  }

  /**
   * Make authenticated API request
   */
  async makeRequest(options: {
    type: "get" | "post";
    nsid: string;
    params?: Record<string, unknown>;
    data?: Record<string, unknown>;
  }): Promise<any> {
    if (!this.authState.session) {
      throw new Error("Not authenticated");
    }

    // Mock data for demo sessions
    if (this.authState.session.isDemo) {
      console.log("🎭 Mock API request for demo:", options.nsid);
      return {
        success: true,
        uri: "at://demo.wukkie.uk/uk.wukkie.issue/demo123",
        cid: "demo-cid-123",
      };
    }

    // For real sessions, make actual API calls
    let retryCount = 0;
    const maxRetries = 2;

    while (retryCount <= maxRetries) {
      try {
        // Extract PDS endpoint from JWT token's 'aud' field or use stored PDS
        let pdsEndpoint = "https://bsky.social"; // fallback
        try {
          // Try to decode JWT to get the audience (PDS endpoint)
          const tokenParts = this.authState.session.accessJwt.split(".");
          if (tokenParts.length === 3) {
            const payload = JSON.parse(atob(tokenParts[1]));
            if (payload.aud) {
              let audienceUrl = payload.aud;
              console.log("🎯 JWT audience field:", audienceUrl);

              // If the audience is a DID, we need to resolve it to HTTP URL
              if (audienceUrl.startsWith("did:")) {
                console.log("🔄 DID detected, converting to HTTP URL...");
                // Extract hostname from DID (e.g., did:web:lionsmane.us-east.host.bsky.network)
                if (audienceUrl.startsWith("did:web:")) {
                  const hostname = audienceUrl.replace("did:web:", "");
                  audienceUrl = `https://${hostname}`;
                  console.log("✅ Converted DID to HTTP URL:", audienceUrl);
                } else {
                  console.log("⚠️ Unknown DID format, using fallback");
                  audienceUrl = "https://bsky.social";
                }
              }

              pdsEndpoint = audienceUrl;
              console.log("🎯 Using PDS endpoint:", pdsEndpoint);
            }
          }
        } catch (e) {
          console.log("⚠️ Could not decode JWT, using fallback PDS");
        }

        const url = `${pdsEndpoint}/xrpc/${options.nsid}`;
        const method = options.type.toUpperCase();

        // Create DPoP proof for API request (use stored nonce if available)
        const dpopProof = await this.createDPoPProof(
          method,
          url,
          this.dpopNonce,
        );

        const headers: Record<string, string> = {
          Authorization: `DPoP ${this.authState.session.accessJwt}`,
          "Content-Type": "application/json",
        };

        if (dpopProof) {
          headers["DPoP"] = dpopProof;
        }

        const requestInit: RequestInit = {
          method,
          headers,
        };

        if (method === "POST" && options.data) {
          requestInit.body = JSON.stringify(options.data);
        }

        if (method === "GET" && options.params) {
          const searchParams = new URLSearchParams();
          Object.entries(options.params).forEach(([key, value]) => {
            searchParams.append(key, String(value));
          });
          const urlWithParams = `${url}?${searchParams.toString()}`;
          const response = await fetch(urlWithParams, requestInit);
          return await this.handleResponse(response);
        }

        const response = await fetch(url, requestInit);
        return await this.handleResponse(response);
      } catch (error) {
        // Handle DPoP nonce retry
        if (
          error instanceof Error &&
          error.message.startsWith("DPOP_NONCE_REQUIRED:")
        ) {
          const nonce = error.message.split(":")[1];
          console.log(
            `🔄 API request requires DPoP nonce, retrying attempt ${retryCount + 1} with nonce: ${nonce}`,
          );
          // Note: nonce is already stored in this.dpopNonce by handleResponse
          retryCount++;
          continue;
        }

        console.error("API request error:", error);
        throw error;
      }
    }

    throw new Error("API request failed after maximum retries");
  }

  /**
   * Handle API response
   */
  private async handleResponse(response: Response): Promise<any> {
    const contentType = response.headers.get("content-type");
    const isJson = contentType && contentType.includes("application/json");

    if (!response.ok) {
      let errorData;
      try {
        errorData = isJson ? await response.json() : await response.text();
      } catch {
        errorData = "Unknown error";
      }

      // Log detailed error information for debugging
      console.log(`🚨 API Error ${response.status}:`, errorData);
      console.log(
        "🔍 Response headers:",
        Object.fromEntries(response.headers.entries()),
      );

      // Handle DPoP nonce requirement for API requests
      if (response.status === 401) {
        const dpopNonce = response.headers.get("dpop-nonce");
        if (dpopNonce) {
          console.log(
            `🔄 API request requires DPoP nonce: ${dpopNonce} (previous: ${this.dpopNonce})`,
          );
          this.dpopNonce = dpopNonce;
          // The caller should retry the request
          throw new Error(`DPOP_NONCE_REQUIRED:${dpopNonce}`);
        } else {
          console.log("⚠️ 401 error but no dpop-nonce header found");
        }
      }

      throw new Error(`API request failed: ${JSON.stringify(errorData)}`);
    }

    return isJson ? await response.json() : await response.text();
  }

  /**
   * XRPC client interface compatibility
   */
  async call(nsid: string, params?: any): Promise<any> {
    const result = await this.makeRequest({
      type: params ? "post" : "get",
      nsid: nsid,
      params: params ? undefined : params,
      data: params,
    });

    return result;
  }
}

// Export singleton instance
console.log("🟢 [DEBUG] auth.ts: About to create BlueskyAuth singleton");

let blueskyAuthInstance: BlueskyAuth;
try {
  blueskyAuthInstance = new BlueskyAuth();
  console.log("🟢 [DEBUG] auth.ts: BlueskyAuth singleton created successfully");
} catch (error) {
  console.error("❌ [DEBUG] Error creating BlueskyAuth singleton:", error);
  throw error;
}

export const blueskyAuth = blueskyAuthInstance;
export default blueskyAuth;
