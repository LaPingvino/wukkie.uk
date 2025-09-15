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
function base64UrlEncode(buffer: ArrayBuffer): string {
  const bytes = new Uint8Array(buffer);
  const base64 = btoa(String.fromCharCode(...bytes));
  return base64.replace(/\+/g, "-").replace(/\//g, "_").replace(/=/g, "");
}

function base64UrlDecode(str: string): ArrayBuffer {
  str = str.replace(/-/g, "+").replace(/_/g, "/");
  while (str.length % 4) str += "=";
  const decoded = atob(str);
  const bytes = new Uint8Array(decoded.length);
  for (let i = 0; i < decoded.length; i++) {
    bytes[i] = decoded.charCodeAt(i);
  }
  return bytes.buffer;
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

  constructor() {
    console.log("🔧 BlueskyAuth: Initializing OAuth from scratch...");
  }

  /**
   * Start OAuth login flow
   */
  async login(handle: string): Promise<void> {
    try {
      console.log("🔐 Starting OAuth login for:", handle);

      // Step 1: Resolve handle to DID and get PDS
      const { did, pds } = await this.resolveHandle(handle);
      console.log("✅ Resolved handle:", { did, pds });

      // Step 2: Get OAuth metadata from PDS
      const metadata = await this.getOAuthMetadata(pds);
      console.log("✅ Got OAuth metadata:", metadata);

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
          pds,
        }),
      );

      // Step 4: Build authorization URL
      const authUrl = new URL(metadata.authorization_endpoint);
      const clientId = window.location.origin + "/client-metadata.json";

      authUrl.searchParams.set("response_type", "code");
      authUrl.searchParams.set("client_id", clientId);
      authUrl.searchParams.set("redirect_uri", window.location.origin);
      authUrl.searchParams.set("scope", "atproto transition:generic");
      authUrl.searchParams.set("state", state);
      authUrl.searchParams.set("code_challenge", challenge);
      authUrl.searchParams.set("code_challenge_method", "S256");
      authUrl.searchParams.set("login_hint", handle);

      // Step 5: Redirect to authorization server
      console.log("🔗 Redirecting to authorization server...");
      window.location.href = authUrl.toString();
    } catch (error) {
      console.error("❌ OAuth login failed:", error);
      throw new Error(
        `Login failed: ${error instanceof Error ? error.message : "Unknown error"}`,
      );
    }
  }

  /**
   * Handle OAuth callback
   */
  async handleOAuthCallback(): Promise<boolean> {
    console.log("🔍 Checking for OAuth callback...");

    try {
      // Check if we have OAuth callback parameters
      const urlParams = new URLSearchParams(window.location.search);
      const code = urlParams.get("code");
      const state = urlParams.get("state");
      const error = urlParams.get("error");

      if (!code && !error) {
        console.log("🔍 No OAuth callback parameters found");
        return false;
      }

      console.log("🔍 OAuth callback detected");

      // Clean up URL
      const cleanUrl = window.location.origin + window.location.pathname;
      window.history.replaceState(null, "", cleanUrl);

      if (error) {
        throw new Error(`OAuth error: ${error}`);
      }

      if (!code || !state) {
        throw new Error("Missing required OAuth parameters");
      }

      // Get stored OAuth state
      const storedStateData = localStorage.getItem("oauth_state");
      if (!storedStateData) {
        throw new Error("Missing OAuth state data");
      }

      const stateData = JSON.parse(storedStateData);
      localStorage.removeItem("oauth_state");

      if (stateData.state !== state) {
        throw new Error("OAuth state mismatch");
      }

      console.log("✅ OAuth state verified");

      // Exchange code for tokens
      await this.exchangeCodeForTokens(code, stateData);

      console.log("✅ OAuth callback completed successfully");
      return true;
    } catch (error) {
      console.error("❌ OAuth callback failed:", error);
      throw new Error(
        `OAuth callback failed: ${error instanceof Error ? error.message : "Unknown error"}`,
      );
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

    const data = await response.json();
    const did = data.did;

    // Get DID document to find PDS
    const didResponse = await fetch(`https://plc.directory/${did}`);
    if (!didResponse.ok) {
      throw new Error(`Failed to get DID document: ${didResponse.statusText}`);
    }

    const didDoc = await didResponse.json();
    const pdsService = didDoc.service?.find(
      (s: any) =>
        s.type === "AtprotoPersonalDataServer" || s.id === "#atproto_pds",
    );

    if (!pdsService) {
      throw new Error("No PDS service found in DID document");
    }

    return { did, pds: pdsService.serviceEndpoint };
  }

  /**
   * Get OAuth metadata from PDS
   */
  private async getOAuthMetadata(pds: string): Promise<any> {
    const response = await fetch(
      `${pds}/.well-known/oauth-authorization-server`,
    );
    if (!response.ok) {
      throw new Error(`Failed to get OAuth metadata: ${response.statusText}`);
    }
    return await response.json();
  }

  /**
   * Exchange authorization code for tokens
   */
  private async exchangeCodeForTokens(
    code: string,
    stateData: any,
  ): Promise<void> {
    const metadata = await this.getOAuthMetadata(stateData.pds);
    const clientId = window.location.origin + "/client-metadata.json";

    const tokenResponse = await fetch(metadata.token_endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams({
        grant_type: "authorization_code",
        client_id: clientId,
        code: code,
        redirect_uri: window.location.origin,
        code_verifier: stateData.verifier,
      }),
    });

    if (!tokenResponse.ok) {
      const errorText = await tokenResponse.text();
      throw new Error(`Token exchange failed: ${errorText}`);
    }

    const tokens = await tokenResponse.json();

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
    } catch (error) {
      console.error("❌ Session restore failed:", error);
      localStorage.removeItem("wukkie_session");
      return false;
    }
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
    try {
      const url = `https://bsky.social/xrpc/${options.nsid}`;
      const method = options.type.toUpperCase();

      const requestInit: RequestInit = {
        method,
        headers: {
          Authorization: `Bearer ${this.authState.session.accessJwt}`,
          "Content-Type": "application/json",
        },
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
      console.error("API request error:", error);
      throw error;
    }
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
      throw new Error(`API request failed: ${JSON.stringify(errorData)}`);
    }

    return isJson ? await response.json() : await response.text();
  }

  /**
   * XRPC client interface compatibility
   */
  async call(options: {
    lex: string;
    params?: any;
    data?: any;
  }): Promise<{ data: any }> {
    const result = await this.makeRequest({
      type: options.data ? "post" : "get",
      nsid: options.lex,
      params: options.params,
      data: options.data,
    });

    return { data: result };
  }
}

// Export singleton instance
export const blueskyAuth = new BlueskyAuth();
export default blueskyAuth;
