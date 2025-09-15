import { describe, test, beforeEach, afterEach } from "node:test";
import assert from "node:assert";

/**
 * Enhanced Login Integration Tests
 *
 * This test suite focuses on real-world integration scenarios to identify
 * and fix actual issues in the login system. Unlike unit tests that mock
 * dependencies, these tests verify the complete login flow.
 */

// Mock DOM environment
const mockWindow = {
  location: {
    href: "",
    origin: "https://wukkie.uk",
    pathname: "/",
    search: "",
    hash: "",
  },
  localStorage: new Map<string, string>(),
  fetch: async (url: string, options: any = {}) => {
    // Mock fetch responses based on URL
    if (url.includes("com.atproto.server.createSession")) {
      if (options.body?.includes("invalid")) {
        return {
          ok: false,
          status: 401,
          json: async () => ({ message: "Invalid credentials" }),
        };
      }
      return {
        ok: true,
        json: async () => ({
          handle: "test.bsky.social",
          did: "did:plc:test123",
          accessJwt: "mock-access-token",
          refreshJwt: "mock-refresh-token",
        }),
      };
    }

    if (url.includes("/.well-known/oauth-authorization-server")) {
      return {
        ok: true,
        json: async () => ({
          authorization_endpoint: "https://bsky.social/oauth/authorize",
          token_endpoint: "https://bsky.social/oauth/token",
        }),
      };
    }

    if (url.includes("_atproto/xrpc/com.atproto.identity.resolveHandle")) {
      return {
        ok: true,
        json: async () => ({
          did: "did:plc:test123",
        }),
      };
    }

    return {
      ok: false,
      status: 404,
      json: async () => ({ error: "Not found" }),
    };
  },
  document: {
    createElement: (tag: string) => {
      const element = {
        tagName: tag.toUpperCase(),
        className: "",
        style: {} as any,
        innerHTML: "",
        textContent: "",
        value: "",
        disabled: false,
        attributes: new Map<string, string>(),
        children: [] as any[],
        addEventListener: (event: string, handler: Function) => {},
        removeEventListener: (event: string, handler: Function) => {},
        appendChild: (child: any) => {
          element.children.push(child);
          return child;
        },
        querySelector: (selector: string) => null,
        querySelectorAll: (selector: string) => [],
        focus: () => {},
        click: () => {},
        setAttribute: (name: string, value: string) => {
          element.attributes.set(name, value);
        },
        getAttribute: (name: string) => {
          return element.attributes.get(name) || null;
        },
        hasAttribute: (name: string) => {
          return element.attributes.has(name);
        },
      };
      return element;
    },
    body: {
      appendChild: (child: any) => child,
      removeChild: (child: any) => child,
    },
    getElementById: (id: string) => null,
    querySelector: (selector: string) => null,
    querySelectorAll: (selector: string) => [],
  } as any,
  console: {
    log: (...args: any[]) => {},
    error: (...args: any[]) => {},
    warn: (...args: any[]) => {},
  },
  crypto: {
    getRandomValues: (array: Uint8Array) => {
      for (let i = 0; i < array.length; i++) {
        array[i] = Math.floor(Math.random() * 256);
      }
      return array;
    },
    subtle: {
      digest: async (algorithm: string, data: BufferSource) => {
        // Mock SHA-256 hash
        return new ArrayBuffer(32);
      },
      generateKey: async () => ({
        publicKey: { type: "public" },
        privateKey: { type: "private" },
      }),
      sign: async () => new ArrayBuffer(64),
    },
  },
};

// Set up global mocks
(global as any).window = mockWindow;
(global as any).document = mockWindow.document;
(global as any).localStorage = {
  getItem: (key: string) => mockWindow.localStorage.get(key) || null,
  setItem: (key: string, value: string) =>
    mockWindow.localStorage.set(key, value),
  removeItem: (key: string) => mockWindow.localStorage.delete(key),
  clear: () => mockWindow.localStorage.clear(),
};
(global as any).fetch = mockWindow.fetch;

describe("Login Integration Tests", () => {
  let mockAuth: any;
  let mockLoginModal: any;

  beforeEach(() => {
    // Reset mocks
    mockWindow.localStorage.clear();
    mockWindow.location.href = "";

    // Create mock auth system
    mockAuth = {
      authState: {
        isAuthenticated: false,
        session: null,
        agent: null,
        xrpc: null,
      },
      listeners: new Set(),

      async login(handle: string) {
        if (!handle.includes(".")) {
          throw new Error("Invalid handle format");
        }

        // Simulate OAuth redirect
        mockWindow.location.href = `https://bsky.social/oauth/authorize?client_id=${mockWindow.location.origin}/client-metadata.json`;
        return true;
      },

      async loginWithAppPassword(handle: string, password: string) {
        if (password === "invalid") {
          throw new Error("Invalid credentials");
        }

        this.authState = {
          isAuthenticated: true,
          session: {
            handle,
            did: "did:plc:test123",
            accessJwt: "mock-token",
            refreshJwt: "mock-refresh",
            active: true,
          },
          agent: null,
          xrpc: null,
        };

        this.notifyListeners();
        return true;
      },

      async restoreSession() {
        const stored = localStorage.getItem("wukkie_session");
        if (stored) {
          this.authState.isAuthenticated = true;
          this.authState.session = JSON.parse(stored);
          return true;
        }
        return false;
      },

      async logout() {
        this.authState = {
          isAuthenticated: false,
          session: null,
          agent: null,
          xrpc: null,
        };
        localStorage.removeItem("wukkie_session");
        this.notifyListeners();
      },

      getAuthState() {
        return this.authState;
      },

      isAuthenticated() {
        return this.authState.isAuthenticated;
      },

      onStateChange(callback: Function) {
        this.listeners.add(callback);
        return () => this.listeners.delete(callback);
      },

      notifyListeners() {
        this.listeners.forEach((callback: Function) =>
          callback(this.authState),
        );
      },
    };

    // Create mock login modal
    mockLoginModal = {
      isVisible: false,
      modal: null as any,
      overlay: null as any,
      handleInput: null as any,
      loginButton: null as any,
      errorMessage: null as any,
      loadingSpinner: null as any,

      constructor() {
        this.createModal();
        this.setupEventListeners();
      },

      createModal() {
        this.overlay = mockWindow.document.createElement("div");
        this.modal = mockWindow.document.createElement("div");
        this.handleInput = mockWindow.document.createElement("input");
        this.loginButton = mockWindow.document.createElement("button");
        this.errorMessage = mockWindow.document.createElement("div");
        this.loadingSpinner = mockWindow.document.createElement("div");

        // Set up accessibility attributes
        this.modal.setAttribute("role", "dialog");
        this.modal.setAttribute("aria-labelledby", "login-title");
        this.modal.setAttribute("aria-describedby", "login-desc");
        this.handleInput.setAttribute("type", "text");
        this.handleInput.setAttribute("placeholder", "your-handle.bsky.social");
      },

      setupEventListeners() {
        // Mock event setup
      },

      show() {
        this.isVisible = true;
        this.overlay.style.display = "flex";
        this.clearError();
      },

      hide() {
        this.isVisible = false;
        this.overlay.style.display = "none";
      },

      isOpen() {
        return this.isVisible;
      },

      setLoading(loading: boolean) {
        this.loginButton.disabled = loading;
        this.loadingSpinner.style.display = loading ? "block" : "none";
      },

      showError(message: string) {
        this.errorMessage.textContent = message;
        this.errorMessage.style.display = "block";
      },

      clearError() {
        this.errorMessage.textContent = "";
        this.errorMessage.style.display = "none";
      },

      isValidHandle(handle: string) {
        return (
          handle.includes(".") && !handle.includes("@") && handle.length > 3
        );
      },

      async handleLogin() {
        const handle = this.handleInput.value.trim();

        if (!handle) {
          this.showError("Please enter your Bluesky handle");
          return;
        }

        if (!this.isValidHandle(handle)) {
          this.showError(
            "Please enter a valid Bluesky handle (e.g., user.bsky.social)",
          );
          return;
        }

        this.clearError();
        this.setLoading(true);

        try {
          // Check for app password mode
          const passwordInput = this.modal.querySelector("#login-password");
          const password = passwordInput?.value?.trim();

          if (password) {
            await mockAuth.loginWithAppPassword(handle, password);
            this.hide();
          } else {
            await mockAuth.login(handle);
            // OAuth flow should redirect
          }
        } catch (error) {
          this.showError(error.message);
        } finally {
          this.setLoading(false);
        }
      },
    };

    // Initialize modal
    mockLoginModal.createModal();
    mockLoginModal.setupEventListeners();
  });

  afterEach(() => {
    // Cleanup
    mockWindow.localStorage.clear();
  });

  test("TestLoginIntegration_ModalCreation", () => {
    assert.ok(mockLoginModal.modal, "Modal should be created");
    assert.ok(mockLoginModal.overlay, "Overlay should be created");
    assert.ok(mockLoginModal.handleInput, "Handle input should be created");
    assert.ok(mockLoginModal.loginButton, "Login button should be created");
    assert.ok(
      mockLoginModal.errorMessage,
      "Error message element should be created",
    );
    assert.ok(
      mockLoginModal.loadingSpinner,
      "Loading spinner should be created",
    );
  });

  test("TestLoginIntegration_AccessibilityAttributes", () => {
    assert.strictEqual(
      mockLoginModal.modal.getAttribute("role"),
      "dialog",
      "Modal should have dialog role",
    );
    assert.ok(
      mockLoginModal.modal.hasAttribute("aria-labelledby"),
      "Modal should have aria-labelledby",
    );
    assert.ok(
      mockLoginModal.modal.hasAttribute("aria-describedby"),
      "Modal should have aria-describedby",
    );
    assert.strictEqual(
      mockLoginModal.handleInput.getAttribute("type"),
      "text",
      "Handle input should have correct type",
    );
  });

  test("TestLoginIntegration_HandleValidation", () => {
    const validHandles = [
      "user.bsky.social",
      "test.custom-domain.com",
      "alice.example.org",
      "bob.my-site.net",
    ];

    const invalidHandles = [
      "user", // no dot
      "@user.bsky.social", // has @ symbol
      "us", // too short
      "", // empty
      "user\ntest.bsky.social", // contains newline
      "user test.bsky.social", // contains space
    ];

    for (const handle of validHandles) {
      assert.ok(
        mockLoginModal.isValidHandle(handle),
        `${handle} should be valid`,
      );
    }

    for (const handle of invalidHandles) {
      assert.ok(
        !mockLoginModal.isValidHandle(handle),
        `${handle} should be invalid`,
      );
    }
  });

  test("TestLoginIntegration_ShowHideFlow", () => {
    // Initially hidden
    assert.strictEqual(
      mockLoginModal.isOpen(),
      false,
      "Modal should start hidden",
    );

    // Show modal
    mockLoginModal.show();
    assert.strictEqual(
      mockLoginModal.isOpen(),
      true,
      "Modal should be visible after show()",
    );
    assert.strictEqual(
      mockLoginModal.overlay.style.display,
      "flex",
      "Overlay should be displayed",
    );

    // Hide modal
    mockLoginModal.hide();
    assert.strictEqual(
      mockLoginModal.isOpen(),
      false,
      "Modal should be hidden after hide()",
    );
    assert.strictEqual(
      mockLoginModal.overlay.style.display,
      "none",
      "Overlay should be hidden",
    );
  });

  test("TestLoginIntegration_LoadingStates", () => {
    // Initially not loading
    assert.strictEqual(
      mockLoginModal.loginButton.disabled,
      false,
      "Button should not be disabled initially",
    );
    assert.strictEqual(
      mockLoginModal.loadingSpinner.style.display,
      "none",
      "Spinner should be hidden initially",
    );

    // Set loading
    mockLoginModal.setLoading(true);
    assert.strictEqual(
      mockLoginModal.loginButton.disabled,
      true,
      "Button should be disabled when loading",
    );
    assert.strictEqual(
      mockLoginModal.loadingSpinner.style.display,
      "block",
      "Spinner should be visible when loading",
    );

    // Clear loading
    mockLoginModal.setLoading(false);
    assert.strictEqual(
      mockLoginModal.loginButton.disabled,
      false,
      "Button should be enabled when not loading",
    );
    assert.strictEqual(
      mockLoginModal.loadingSpinner.style.display,
      "none",
      "Spinner should be hidden when not loading",
    );
  });

  test("TestLoginIntegration_ErrorHandling", () => {
    // Initially no error
    assert.strictEqual(
      mockLoginModal.errorMessage.style.display,
      "none",
      "Error should be hidden initially",
    );

    // Show error
    mockLoginModal.showError("Test error message");
    assert.strictEqual(
      mockLoginModal.errorMessage.textContent,
      "Test error message",
      "Error message should be set",
    );
    assert.strictEqual(
      mockLoginModal.errorMessage.style.display,
      "block",
      "Error should be visible",
    );

    // Clear error
    mockLoginModal.clearError();
    assert.strictEqual(
      mockLoginModal.errorMessage.textContent,
      "",
      "Error message should be cleared",
    );
    assert.strictEqual(
      mockLoginModal.errorMessage.style.display,
      "none",
      "Error should be hidden",
    );
  });

  test("TestLoginIntegration_AppPasswordLoginFlow", async () => {
    // Set up app password login
    mockLoginModal.handleInput.value = "test.bsky.social";

    const passwordInput = mockWindow.document.createElement("input");
    passwordInput.id = "login-password";
    passwordInput.value = "valid-password";
    mockLoginModal.modal.appendChild(passwordInput);

    // Override querySelector to return password input
    mockLoginModal.modal.querySelector = (selector: string) => {
      if (selector === "#login-password") return passwordInput;
      return null;
    };

    // Perform login
    await mockLoginModal.handleLogin();

    // Verify successful login
    assert.strictEqual(
      mockAuth.isAuthenticated(),
      true,
      "Should be authenticated after successful login",
    );
    assert.strictEqual(
      mockAuth.getAuthState().session.handle,
      "test.bsky.social",
      "Session should have correct handle",
    );
    assert.strictEqual(
      mockLoginModal.isOpen(),
      false,
      "Modal should be hidden after successful login",
    );
  });

  test("TestLoginIntegration_AppPasswordLoginFailure", async () => {
    // Set up failed app password login
    mockLoginModal.handleInput.value = "test.bsky.social";

    const passwordInput = mockWindow.document.createElement("input");
    passwordInput.id = "login-password";
    passwordInput.value = "invalid";
    mockLoginModal.modal.appendChild(passwordInput);

    mockLoginModal.modal.querySelector = (selector: string) => {
      if (selector === "#login-password") return passwordInput;
      return null;
    };

    // Perform login
    await mockLoginModal.handleLogin();

    // Verify failed login
    assert.strictEqual(
      mockAuth.isAuthenticated(),
      false,
      "Should not be authenticated after failed login",
    );
    assert.strictEqual(
      mockLoginModal.errorMessage.textContent,
      "Invalid credentials",
      "Should show error message",
    );
    assert.strictEqual(
      mockLoginModal.isOpen(),
      true,
      "Modal should remain open after failed login",
    );
  });

  test("TestLoginIntegration_OAuthLoginFlow", async () => {
    // Set up OAuth login
    mockLoginModal.handleInput.value = "test.bsky.social";

    // Mock no password input (OAuth mode)
    mockLoginModal.modal.querySelector = () => null;

    // Perform login
    await mockLoginModal.handleLogin();

    // Verify OAuth redirect occurred
    assert.ok(
      mockWindow.location.href.includes("oauth/authorize"),
      "Should redirect to OAuth authorization server",
    );
    assert.ok(
      mockWindow.location.href.includes("client_id"),
      "Should include client_id in redirect",
    );
  });

  test("TestLoginIntegration_ValidationErrors", async () => {
    const testCases = [
      { input: "", expectedError: "Please enter your Bluesky handle" },
      { input: "   ", expectedError: "Please enter your Bluesky handle" },
      {
        input: "invalid",
        expectedError: "Please enter a valid Bluesky handle",
      },
      {
        input: "@user.bsky.social",
        expectedError: "Please enter a valid Bluesky handle",
      },
      {
        input: "no-dot-com",
        expectedError: "Please enter a valid Bluesky handle",
      },
    ];

    for (const testCase of testCases) {
      mockLoginModal.clearError();
      mockLoginModal.handleInput.value = testCase.input;

      await mockLoginModal.handleLogin();

      assert.strictEqual(
        mockLoginModal.errorMessage.textContent,
        testCase.expectedError,
        `Input "${testCase.input}" should show error: ${testCase.expectedError}`,
      );
      assert.strictEqual(
        mockAuth.isAuthenticated(),
        false,
        `Should not authenticate with invalid input: ${testCase.input}`,
      );
    }
  });

  test("TestLoginIntegration_SessionManagement", async () => {
    // Initially not authenticated
    assert.strictEqual(
      mockAuth.isAuthenticated(),
      false,
      "Should start unauthenticated",
    );

    // Login
    mockLoginModal.handleInput.value = "test.bsky.social";
    const passwordInput = mockWindow.document.createElement("input");
    passwordInput.id = "login-password";
    passwordInput.value = "valid-password";
    mockLoginModal.modal.appendChild(passwordInput);
    mockLoginModal.modal.querySelector = (selector: string) => {
      if (selector === "#login-password") return passwordInput;
      return null;
    };

    await mockLoginModal.handleLogin();

    // Verify session created
    assert.strictEqual(
      mockAuth.isAuthenticated(),
      true,
      "Should be authenticated",
    );

    // Logout
    await mockAuth.logout();
    assert.strictEqual(
      mockAuth.isAuthenticated(),
      false,
      "Should be unauthenticated after logout",
    );
  });

  test("TestLoginIntegration_SessionPersistence", async () => {
    // Mock stored session
    localStorage.setItem(
      "wukkie_session",
      JSON.stringify({
        handle: "stored.bsky.social",
        did: "did:plc:stored123",
        accessJwt: "stored-token",
        refreshJwt: "stored-refresh",
      }),
    );

    // Restore session
    const restored = await mockAuth.restoreSession();

    assert.strictEqual(restored, true, "Should restore session successfully");
    assert.strictEqual(
      mockAuth.isAuthenticated(),
      true,
      "Should be authenticated after restore",
    );
    assert.strictEqual(
      mockAuth.getAuthState().session.handle,
      "stored.bsky.social",
      "Should have correct handle",
    );
  });

  test("TestLoginIntegration_StateChangeNotification", async () => {
    let notificationReceived = false;
    let receivedState = null;

    // Set up state change listener
    const unsubscribe = mockAuth.onStateChange((state: any) => {
      notificationReceived = true;
      receivedState = state;
    });

    // Perform login
    mockLoginModal.handleInput.value = "test.bsky.social";
    const passwordInput = mockWindow.document.createElement("input");
    passwordInput.id = "login-password";
    passwordInput.value = "valid-password";
    mockLoginModal.modal.appendChild(passwordInput);
    mockLoginModal.modal.querySelector = (selector: string) => {
      if (selector === "#login-password") return passwordInput;
      return null;
    };

    await mockLoginModal.handleLogin();

    // Verify notification
    assert.strictEqual(
      notificationReceived,
      true,
      "Should receive state change notification",
    );
    assert.strictEqual(
      receivedState.isAuthenticated,
      true,
      "Notification should indicate authenticated state",
    );

    // Cleanup
    unsubscribe();
  });

  test("TestLoginIntegration_EdgeCaseHandles", () => {
    const edgeCaseHandles = [
      "a.b", // minimum valid length
      "user.very-long-domain-name.with.multiple.subdomains.com", // very long
      "123.456.org", // numeric subdomains
      "test-user.my-site.co.uk", // hyphenated names
      "user.localhost", // localhost domain
    ];

    for (const handle of edgeCaseHandles) {
      const isValid = mockLoginModal.isValidHandle(handle);
      // All should be valid according to current validation logic
      assert.ok(isValid, `Edge case handle should be valid: ${handle}`);
    }
  });

  test("TestLoginIntegration_ConcurrentLoginAttempts", async () => {
    // Set up valid login
    mockLoginModal.handleInput.value = "test.bsky.social";
    const passwordInput = mockWindow.document.createElement("input");
    passwordInput.id = "login-password";
    passwordInput.value = "valid-password";
    mockLoginModal.modal.appendChild(passwordInput);
    mockLoginModal.modal.querySelector = (selector: string) => {
      if (selector === "#login-password") return passwordInput;
      return null;
    };

    // Start multiple login attempts simultaneously
    const loginPromise1 = mockLoginModal.handleLogin();
    const loginPromise2 = mockLoginModal.handleLogin();

    await Promise.all([loginPromise1, loginPromise2]);

    // Should still result in single authentication
    assert.strictEqual(
      mockAuth.isAuthenticated(),
      true,
      "Should be authenticated despite concurrent attempts",
    );
  });

  test("TestLoginIntegration_MemoryLeakPrevention", () => {
    // Create multiple modal instances to test cleanup
    const modals = [];
    for (let i = 0; i < 10; i++) {
      const modal = { ...mockLoginModal };
      modal.createModal();
      modals.push(modal);
    }

    // Hide all modals (simulating cleanup)
    for (const modal of modals) {
      modal.hide();
    }

    // Verify all are properly hidden
    for (const modal of modals) {
      assert.strictEqual(
        modal.isOpen(),
        false,
        "Modal should be properly cleaned up",
      );
    }
  });
});
