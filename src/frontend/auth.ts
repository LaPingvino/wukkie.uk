/**
 * Simple Bluesky App Password Authentication
 * Replaces complex OAuth with direct app password authentication
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

class BlueskyAuth {
  private authState: AuthState = {
    isAuthenticated: false,
    session: null,
    agent: null,
    xrpc: null,
  };

  private listeners: Array<(state: AuthState) => void> = [];

  constructor() {
    console.log("🔧 BlueskyAuth: Initializing simple auth...");
  }

  /**
   * Login with Bluesky handle and app password
   */
  async login(handle: string, password: string): Promise<void> {
    try {
      console.log("🔐 Logging in with handle:", handle);

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
        const error = await response.json();
        throw new Error(error.message || "Login failed");
      }

      const data = await response.json();

      // Create session
      this.authState = {
        isAuthenticated: true,
        session: {
          handle: data.handle,
          did: data.did,
          accessJwt: data.accessJwt,
          refreshJwt: data.refreshJwt,
          active: true,
        },
        agent: null,
        xrpc: this, // Use this auth instance as the XRPC client
      };

      // Store session
      localStorage.setItem(
        "wukkie_session",
        JSON.stringify(this.authState.session),
      );

      // Notify listeners
      this.notifyListeners();

      console.log("✅ Login successful");
    } catch (error) {
      console.error("❌ Login failed:", error);
      throw new Error(
        `Login failed: ${error instanceof Error ? error.message : "Unknown error"}`,
      );
    }
  }

  /**
   * Demo login for testing
   */
  async demoLogin(): Promise<void> {
    console.log("🎭 Demo login");

    // Create demo session
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

    // Store demo session
    localStorage.setItem(
      "wukkie_session",
      JSON.stringify(this.authState.session),
    );

    // Notify listeners
    this.notifyListeners();

    console.log("✅ Demo login successful");
  }

  /**
   * Handle OAuth callback - not needed for app password auth
   */
  async handleOAuthCallback(): Promise<boolean> {
    return false; // No OAuth handling needed
  }

  /**
   * Restore existing session from storage
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

      // If it's a demo session, just restore it
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

      // For real sessions, test if they're still valid
      const testResponse = await fetch(
        "https://bsky.social/xrpc/com.atproto.server.getSession",
        {
          headers: {
            Authorization: `Bearer ${session.accessJwt}`,
          },
        },
      );

      if (!testResponse.ok) {
        console.log("🔑 Stored session is invalid, removing");
        localStorage.removeItem("wukkie_session");
        return false;
      }

      // Session is valid, restore it
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
   * Logout and clear session
   */
  async logout(): Promise<void> {
    try {
      console.log("👋 Logging out...");

      // Clear stored session
      localStorage.removeItem("wukkie_session");

      // Reset auth state
      this.authState = {
        isAuthenticated: false,
        session: null,
        agent: null,
        xrpc: null,
      };

      // Notify listeners
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
   * Get authenticated XRPC client (this instance)
   */
  getXRPC(): any | null {
    return this.authState.xrpc;
  }

  /**
   * Get authenticated agent (not needed for simple auth)
   */
  getAgent(): any | null {
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
    if (!this.authState.session) {
      throw new Error("Not authenticated");
    }

    // For demo sessions, return mock data
    if (this.authState.session.isDemo) {
      console.log("🎭 Mock API request for demo:", options.nsid);
      return {
        success: true,
        uri: "at://demo.wukkie.uk/uk.wukkie.issue/demo123",
        cid: "demo-cid-123",
      };
    }

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

    if (isJson) {
      return await response.json();
    }

    return await response.text();
  }

  /**
   * Simplified call method compatible with XRPC client interface
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
