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
    try {
      // Check if this is an OAuth callback
      if (
        !window.location.href.includes("state") &&
        !window.location.href.includes("code")
      ) {
        return false;
      }

      // Extract parameters from URL fragment or search params
      const urlParams = new URLSearchParams(window.location.search);
      const fragmentParams = new URLSearchParams(window.location.hash.slice(1));

      // Combine both parameter sources
      const params = new URLSearchParams();
      urlParams.forEach((value, key) => params.set(key, value));
      fragmentParams.forEach((value, key) => params.set(key, value));

      if (!params.has("state") && !params.has("code")) {
        return false;
      }

      // Clean up URL
      const cleanUrl = window.location.origin + window.location.pathname;
      window.history.replaceState(null, "", cleanUrl);

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

      return true;
    } catch (error) {
      console.error("OAuth callback error:", error);
      throw new Error(
        `OAuth callback failed: ${error instanceof Error ? error.message : "Unknown error"}`,
      );
    }
  }

  /**
   * Restore existing session from storage
   */
  async restoreSession(): Promise<boolean> {
    try {
      const sessions = localStorage.getItem("atcute-oauth:sessions");
      if (!sessions) {
        return false;
      }

      const sessionData = JSON.parse(sessions);
      const dids = Object.keys(sessionData);

      if (dids.length === 0) {
        return false;
      }

      // Use the first (most recent) session
      const did = dids[0];
      const session = await getSession(did, { allowStale: true });

      if (!session) {
        return false;
      }

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

      return true;
    } catch (error) {
      console.error("Session restore error:", error);
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
