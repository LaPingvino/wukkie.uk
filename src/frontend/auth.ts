/**
 * Bluesky OAuth Authentication Module
 * Handles OAuth flow for secure Bluesky authentication
 */

import { configureOAuth } from "@atcute/oauth-browser-client";
import { resolveFromIdentity } from "@atcute/oauth-browser-client";
import { createAuthorizationUrl } from "@atcute/oauth-browser-client";
import { Client } from "@atcute/client";
import {
  OAuthUserAgent,
  finalizeAuthorization,
  getSession,
} from "@atcute/oauth-browser-client";

export interface BlueskySession {
  handle: string;
  did: string;
  accessJwt: string;
  refreshJwt: string;
  active: boolean;
}

export interface AuthState {
  isAuthenticated: boolean;
  session: BlueskySession | null;
  agent: OAuthUserAgent | null;
  xrpc: Client | null;
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
    this.initialize();
  }

  /**
   * Initialize OAuth configuration
   */
  private initialize(): void {
    try {
      const baseUrl = window.location.origin;

      // Determine if we're in development or production
      const isDevelopment =
        baseUrl.includes("localhost") ||
        baseUrl.includes("127.0.0.1") ||
        baseUrl.includes(".local");

      configureOAuth({
        metadata: {
          client_id: `${baseUrl}/client-metadata.json`,
          redirect_uri: baseUrl,
        },
      });

      // Log configuration for debugging
      if (isDevelopment) {
        console.log("🔧 OAuth configured for development:", {
          baseUrl,
          client_id: `${baseUrl}/client-metadata.json`,
          redirect_uri: baseUrl,
        });
      }
    } catch (error) {
      console.error("Failed to initialize OAuth:", error);
      // Fallback: continue without OAuth - demo mode will still work
    }
  }

  /**
   * Start the OAuth login flow
   */
  async login(handle: string): Promise<void> {
    try {
      if (!handle) {
        throw new Error("Handle is required");
      }

      // Resolve the user's identity and OAuth metadata
      const { identity, metadata } = await resolveFromIdentity(handle);

      // Create authorization URL
      const authUrl = await createAuthorizationUrl({
        metadata: metadata,
        identity: identity,
        scope: "atproto transition:generic",
      });

      // Store the handle for after redirect
      localStorage.setItem("wukkie_pending_handle", handle);

      // Redirect to authorization server
      window.location.assign(authUrl);
    } catch (error) {
      console.error("Login error:", error);
      throw new Error(
        `Login failed: ${error instanceof Error ? error.message : "Unknown error"}`,
      );
    }
  }

  /**
   * Handle OAuth callback after redirect
   */
  async handleOAuthCallback(): Promise<boolean> {
    console.log("🔍 handleOAuthCallback: Starting...");
    try {
      // Check if this is an OAuth callback
      if (
        !window.location.href.includes("state") &&
        !window.location.href.includes("code")
      ) {
        console.log("🔍 handleOAuthCallback: No OAuth params found, skipping");
        return false;
      }
      console.log(
        "🔍 handleOAuthCallback: OAuth params detected, processing...",
      );

      // Extract parameters from URL fragment or search params
      const urlParams = new URLSearchParams(window.location.search);
      const fragmentParams = new URLSearchParams(window.location.hash.slice(1));

      // Combine both parameter sources
      const params = new URLSearchParams();
      urlParams.forEach((value, key) => params.set(key, value));
      fragmentParams.forEach((value, key) => params.set(key, value));

      if (!params.has("state") && !params.has("code")) {
        console.log(
          "🔍 handleOAuthCallback: No valid OAuth params after parsing",
        );
        return false;
      }

      console.log("🔍 handleOAuthCallback: Cleaning up URL...");
      // Clean up URL
      const cleanUrl = window.location.origin + window.location.pathname;
      window.history.replaceState(null, "", cleanUrl);

      console.log("🔍 handleOAuthCallback: Finalizing authorization...");
      // Finalize authorization
      const session = await finalizeAuthorization(params);
      const agent = new OAuthUserAgent(session);
      const xrpc = new Client({ handler: agent });

      // Get handle from storage or session
      const pendingHandle = localStorage.getItem("wukkie_pending_handle");
      localStorage.removeItem("wukkie_pending_handle");

      // Update auth state
      this.authState = {
        isAuthenticated: true,
        session: {
          handle: pendingHandle || session.info.sub || "unknown",
          did: session.info.sub,
          accessJwt: "oauth-token", // OAuth tokens are handled internally
          refreshJwt: "oauth-refresh", // OAuth tokens are handled internally
          active: true,
        },
        agent,
        xrpc,
      };

      // Notify listeners
      this.notifyListeners();

      console.log("✅ handleOAuthCallback: Success!");
      return true;
    } catch (error) {
      console.error("❌ handleOAuthCallback: Error:", error);
      throw new Error(
        `OAuth callback failed: ${error instanceof Error ? error.message : "Unknown error"}`,
      );
    }
  }

  /**
   * Restore existing session from storage
   */
  async restoreSession(): Promise<boolean> {
    console.log("🔑 restoreSession: Starting...");
    try {
      const sessions = localStorage.getItem("atcute-oauth:sessions");
      if (!sessions) {
        console.log("🔑 restoreSession: No sessions in localStorage");
        return false;
      }
      console.log("🔑 restoreSession: Found sessions, parsing...");

      const sessionData = JSON.parse(sessions);
      const dids = Object.keys(sessionData);

      if (dids.length === 0) {
        console.log("🔑 restoreSession: No DIDs found in sessions");
        return false;
      }

      console.log(
        `🔑 restoreSession: Found ${dids.length} session(s), using first one`,
      );
      // Use the first (most recent) session
      const did = dids[0];
      console.log("🔑 restoreSession: Getting session for DID:", did);
      const session = await getSession(did, { allowStale: true });

      if (!session) {
        console.log("🔑 restoreSession: Session not found or invalid");
        return false;
      }

      console.log("🔑 restoreSession: Creating OAuth agent and client...");
      const agent = new OAuthUserAgent(session);
      const xrpc = new Client({ handler: agent });

      // Update auth state
      this.authState = {
        isAuthenticated: true,
        session: {
          handle: session.info.sub || "unknown",
          did: session.info.sub,
          accessJwt: "oauth-token",
          refreshJwt: "oauth-refresh",
          active: true,
        },
        agent,
        xrpc,
      };

      // Notify listeners
      this.notifyListeners();

      console.log("✅ restoreSession: Success!");
      return true;
    } catch (error) {
      console.error("❌ restoreSession: Error:", error);
      return false;
    }
  }

  /**
   * Logout and clear session
   */
  async logout(): Promise<void> {
    try {
      // Clear OAuth sessions from storage
      localStorage.removeItem("atcute-oauth:sessions");
      localStorage.removeItem("wukkie_pending_handle");

      // Reset auth state
      this.authState = {
        isAuthenticated: false,
        session: null,
        agent: null,
        xrpc: null,
      };

      // Notify listeners
      this.notifyListeners();
    } catch (error) {
      console.error("Logout error:", error);
    }
  }

  /**
   * Get current authentication state
   */
  getAuthState(): AuthState {
    return { ...this.authState };
  }

  /**
   * Get authenticated XRPC client
   */
  getXRPC(): Client | null {
    return this.authState.xrpc;
  }

  /**
   * Get authenticated agent
   */
  getAgent(): OAuthUserAgent | null {
    return this.authState.agent;
  }

  /**
   * Check if user is authenticated
   */
  isAuthenticated(): boolean {
    return this.authState.isAuthenticated;
  }

  /**
   * Get current session info
   */
  getSession(): BlueskySession | null {
    return this.authState.session;
  }

  /**
   * Subscribe to authentication state changes
   */
  onStateChange(callback: (state: AuthState) => void): () => void {
    this.listeners.push(callback);

    // Return unsubscribe function
    return () => {
      const index = this.listeners.indexOf(callback);
      if (index > -1) {
        this.listeners.splice(index, 1);
      }
    };
  }

  /**
   * Notify all listeners of state changes
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
   * Make an authenticated API request
   */
  async makeRequest(options: {
    type: "get" | "post";
    nsid: string;
    params?: Record<string, unknown>;
    data?: Record<string, unknown>;
  }): Promise<any> {
    if (!this.authState.xrpc) {
      throw new Error("Not authenticated");
    }

    try {
      const response = await this.authState.xrpc.call({
        lex: options.nsid,
        ...(options.params && { params: options.params }),
        ...(options.data && { data: options.data }),
      });

      return response.data;
    } catch (error) {
      console.error("API request error:", error);
      throw error;
    }
  }
}

// Export singleton instance
export const blueskyAuth = new BlueskyAuth();
export default blueskyAuth;
