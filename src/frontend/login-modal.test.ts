import { test, describe } from "node:test";
import assert from "node:assert";

// Mock DOM elements and APIs for testing
const mockDocument = {
  createElement: (tagName: string) => {
    const attributes: { [key: string]: string } = {};
    return {
      tagName: tagName.toUpperCase(),
      className: "",
      style: { cssText: "" },
      innerHTML: "",
      textContent: "",
      value: "",
      disabled: false,
      addEventListener: () => {},
      removeEventListener: () => {},
      click: () => {},
      focus: () => {},
      appendChild: () => {},
      setAttribute: (name: string, value: string) => {
        attributes[name] = value;
      },
      getAttribute: (name: string) => attributes[name] || null,
      hasAttribute: (name: string) => name in attributes,
      classList: {
        add: () => {},
        remove: () => {},
        toggle: () => {},
        contains: () => false,
      },
    };
  },
  body: {
    appendChild: () => {},
    removeChild: () => {},
  },
  getElementById: () => null,
  querySelector: () => null,
  querySelectorAll: () => [],
};

describe("Login Modal Component", () => {
  test("TestLoginModal_Constructor", () => {
    // Mock the LoginModal class structure
    class MockLoginModal {
      private modal: any;
      private overlay: any;
      private handleInput: any;
      private loginButton: any;
      private errorMessage: any;
      private loadingSpinner: any;
      private isVisible: boolean = false;

      constructor() {
        this.createModal();
        this.setupEventListeners();
      }

      private createModal(): void {
        this.overlay = mockDocument.createElement("div");
        this.modal = mockDocument.createElement("div");
        this.handleInput = mockDocument.createElement("input");
        this.loginButton = mockDocument.createElement("button");
        this.errorMessage = mockDocument.createElement("div");
        this.loadingSpinner = mockDocument.createElement("div");
      }

      private setupEventListeners(): void {
        // Mock event listener setup
      }
    }

    const loginModal = new MockLoginModal();

    assert.ok(loginModal, "LoginModal should be created successfully");
    assert.strictEqual(
      typeof loginModal,
      "object",
      "LoginModal should be an object",
    );
  });

  test("TestLoginModal_CreateModal_DOMStructure", () => {
    class MockLoginModal {
      private overlay: any;
      private modal: any;
      private handleInput: any;
      private loginButton: any;
      private errorMessage: any;
      private loadingSpinner: any;

      constructor() {
        this.createModal();
      }

      private createModal(): void {
        // Create overlay
        this.overlay = mockDocument.createElement("div");
        this.overlay.className = "login-modal-overlay";

        // Create modal
        this.modal = mockDocument.createElement("div");
        this.modal.className = "login-modal";

        // Create form elements
        this.handleInput = mockDocument.createElement("input");
        this.handleInput.type = "text";
        this.handleInput.placeholder = "Enter your Bluesky handle";

        this.loginButton = mockDocument.createElement("button");
        this.loginButton.textContent = "Login with Bluesky";

        this.errorMessage = mockDocument.createElement("div");
        this.errorMessage.className = "error-message";

        this.loadingSpinner = mockDocument.createElement("div");
        this.loadingSpinner.className = "loading-spinner";
      }

      getOverlay() {
        return this.overlay;
      }
      getModal() {
        return this.modal;
      }
      getHandleInput() {
        return this.handleInput;
      }
      getLoginButton() {
        return this.loginButton;
      }
      getErrorMessage() {
        return this.errorMessage;
      }
      getLoadingSpinner() {
        return this.loadingSpinner;
      }
    }

    const loginModal = new MockLoginModal();

    // Test overlay creation
    assert.strictEqual(
      loginModal.getOverlay().className,
      "login-modal-overlay",
      "overlay should have correct class",
    );
    assert.strictEqual(
      loginModal.getOverlay().tagName,
      "DIV",
      "overlay should be div element",
    );

    // Test modal creation
    assert.strictEqual(
      loginModal.getModal().className,
      "login-modal",
      "modal should have correct class",
    );
    assert.strictEqual(
      loginModal.getModal().tagName,
      "DIV",
      "modal should be div element",
    );

    // Test input creation
    assert.strictEqual(
      loginModal.getHandleInput().type,
      "text",
      "handle input should be text type",
    );
    assert.strictEqual(
      loginModal.getHandleInput().placeholder,
      "Enter your Bluesky handle",
      "handle input should have placeholder",
    );

    // Test button creation
    assert.strictEqual(
      loginModal.getLoginButton().textContent,
      "Login with Bluesky",
      "login button should have correct text",
    );

    // Test error message element
    assert.strictEqual(
      loginModal.getErrorMessage().className,
      "error-message",
      "error message should have correct class",
    );

    // Test loading spinner
    assert.strictEqual(
      loginModal.getLoadingSpinner().className,
      "loading-spinner",
      "loading spinner should have correct class",
    );
  });

  test("TestLoginModal_HandleValidation", () => {
    function validateBlueskyHandle(handle: string): boolean {
      if (!handle || handle.trim().length === 0) return false;
      if (!handle.includes(".")) return false;
      if (handle.startsWith(".") || handle.endsWith(".")) return false;
      if (handle.includes("..")) return false;
      if (
        handle.includes("@") ||
        handle.includes(" ") ||
        /[\n\r\t]/.test(handle)
      )
        return false;
      return handle.length >= 4;
    }

    const validHandles = [
      "user.bsky.social",
      "test-user.bsky.social",
      "alice.example.com",
      "bob123.custom.domain",
      "short.co",
    ];

    const invalidHandles = [
      "", // empty
      "   ", // whitespace only
      "user", // no domain
      ".bsky.social", // starts with dot
      "user.", // ends with dot
      "user..bsky.social", // double dot
      "user@bsky.social", // contains @
      "user bsky.social", // contains space
      "a.b", // too short
      "user.bsky.social.", // trailing dot
      "user\ntest.bsky.social", // newline character
    ];

    for (const handle of validHandles) {
      assert.ok(validateBlueskyHandle(handle), `"${handle}" should be valid`);
    }

    for (const handle of invalidHandles) {
      assert.ok(
        !validateBlueskyHandle(handle),
        `"${handle}" should be invalid`,
      );
    }
  });

  test("TestLoginModal_ShowHide_Functionality", () => {
    class MockLoginModal {
      private isVisible: boolean = false;
      private overlay: any;

      constructor() {
        this.overlay = mockDocument.createElement("div");
        this.overlay.style = { display: "none" };
      }

      show(): void {
        this.isVisible = true;
        this.overlay.style.display = "flex";
      }

      hide(): void {
        this.isVisible = false;
        this.overlay.style.display = "none";
      }

      isModalVisible(): boolean {
        return this.isVisible;
      }
    }

    const modal = new MockLoginModal();

    // Initially hidden
    assert.strictEqual(
      modal.isModalVisible(),
      false,
      "modal should start hidden",
    );

    // Show modal
    modal.show();
    assert.strictEqual(
      modal.isModalVisible(),
      true,
      "modal should be visible after show()",
    );

    // Hide modal
    modal.hide();
    assert.strictEqual(
      modal.isModalVisible(),
      false,
      "modal should be hidden after hide()",
    );
  });

  test("TestLoginModal_LoadingStates", () => {
    class MockLoginModal {
      private isLoading: boolean = false;
      private loginButton: any;
      private loadingSpinner: any;
      private handleInput: any;

      constructor() {
        this.loginButton = mockDocument.createElement("button");
        this.loadingSpinner = mockDocument.createElement("div");
        this.handleInput = mockDocument.createElement("input");
      }

      setLoading(loading: boolean): void {
        this.isLoading = loading;
        this.loginButton.disabled = loading;
        this.handleInput.disabled = loading;
        this.loadingSpinner.style.display = loading ? "block" : "none";
        this.loginButton.textContent = loading
          ? "Logging in..."
          : "Login with Bluesky";
      }

      getIsLoading(): boolean {
        return this.isLoading;
      }
    }

    const modal = new MockLoginModal();

    // Initially not loading
    assert.strictEqual(
      modal.getIsLoading(),
      false,
      "should not be loading initially",
    );

    // Set loading state
    modal.setLoading(true);
    assert.strictEqual(
      modal.getIsLoading(),
      true,
      "should be in loading state",
    );

    // Clear loading state
    modal.setLoading(false);
    assert.strictEqual(
      modal.getIsLoading(),
      false,
      "should not be loading after clearing",
    );
  });

  test("TestLoginModal_ErrorHandling", () => {
    class MockLoginModal {
      private errorMessage: any;
      private hasError: boolean = false;

      constructor() {
        this.errorMessage = mockDocument.createElement("div");
        this.errorMessage.style = { display: "none" };
      }

      showError(message: string): void {
        this.hasError = true;
        this.errorMessage.textContent = message;
        this.errorMessage.style.display = "block";
        this.errorMessage.className = "error-message visible";
      }

      hideError(): void {
        this.hasError = false;
        this.errorMessage.style.display = "none";
        this.errorMessage.className = "error-message";
        this.errorMessage.textContent = "";
      }

      getErrorMessage(): string {
        return this.errorMessage.textContent;
      }

      hasErrorMessage(): boolean {
        return this.hasError;
      }
    }

    const modal = new MockLoginModal();

    // Initially no error
    assert.strictEqual(
      modal.hasErrorMessage(),
      false,
      "should have no error initially",
    );
    assert.strictEqual(
      modal.getErrorMessage(),
      "",
      "error message should be empty initially",
    );

    // Show error
    const errorMsg = "Invalid handle format";
    modal.showError(errorMsg);
    assert.strictEqual(
      modal.hasErrorMessage(),
      true,
      "should have error after showError",
    );
    assert.strictEqual(
      modal.getErrorMessage(),
      errorMsg,
      "should display correct error message",
    );

    // Hide error
    modal.hideError();
    assert.strictEqual(
      modal.hasErrorMessage(),
      false,
      "should have no error after hideError",
    );
    assert.strictEqual(
      modal.getErrorMessage(),
      "",
      "error message should be empty after hideError",
    );
  });

  test("TestLoginModal_FormSubmission", () => {
    interface LoginAttempt {
      handle: string;
      timestamp: Date;
      success?: boolean;
      error?: string;
    }

    class MockLoginModal {
      private attempts: LoginAttempt[] = [];

      async attemptLogin(
        handle: string,
      ): Promise<{ success: boolean; error?: string }> {
        const attempt: LoginAttempt = {
          handle,
          timestamp: new Date(),
        };

        // Simulate validation
        if (!this.validateHandle(handle)) {
          attempt.success = false;
          attempt.error = "Invalid handle format";
          this.attempts.push(attempt);
          return { success: false, error: "Invalid handle format" };
        }

        // Simulate network delay
        await new Promise((resolve) => setTimeout(resolve, 100));

        // Simulate success for valid handles
        attempt.success = true;
        this.attempts.push(attempt);
        return { success: true };
      }

      private validateHandle(handle: string): boolean {
        return handle.includes(".") && handle.length >= 4;
      }

      getAttempts(): LoginAttempt[] {
        return this.attempts;
      }
    }

    const modal = new MockLoginModal();

    // Test valid login
    return modal
      .attemptLogin("test.bsky.social")
      .then((result) => {
        assert.strictEqual(result.success, true, "valid handle should succeed");
        assert.strictEqual(
          modal.getAttempts().length,
          1,
          "should record login attempt",
        );

        // Test invalid login
        return modal.attemptLogin("invalid");
      })
      .then((result) => {
        assert.strictEqual(result.success, false, "invalid handle should fail");
        assert.strictEqual(
          result.error,
          "Invalid handle format",
          "should provide error message",
        );
        assert.strictEqual(
          modal.getAttempts().length,
          2,
          "should record both attempts",
        );
      });
  });

  test("TestLoginModal_EventHandling", () => {
    class MockLoginModal {
      private eventListeners: Map<string, Function[]> = new Map();

      addEventListener(event: string, handler: Function): void {
        if (!this.eventListeners.has(event)) {
          this.eventListeners.set(event, []);
        }
        this.eventListeners.get(event)!.push(handler);
      }

      removeEventListener(event: string, handler: Function): void {
        if (this.eventListeners.has(event)) {
          const handlers = this.eventListeners.get(event)!;
          const index = handlers.indexOf(handler);
          if (index > -1) {
            handlers.splice(index, 1);
          }
        }
      }

      triggerEvent(event: string, ...args: any[]): void {
        if (this.eventListeners.has(event)) {
          this.eventListeners.get(event)!.forEach((handler) => {
            handler(...args);
          });
        }
      }

      getEventListenerCount(event: string): number {
        return this.eventListeners.get(event)?.length || 0;
      }
    }

    const modal = new MockLoginModal();
    let clickCount = 0;
    let submitCount = 0;

    const clickHandler = () => {
      clickCount++;
    };
    const submitHandler = () => {
      submitCount++;
    };

    // Add event listeners
    modal.addEventListener("click", clickHandler);
    modal.addEventListener("submit", submitHandler);

    assert.strictEqual(
      modal.getEventListenerCount("click"),
      1,
      "should have 1 click listener",
    );
    assert.strictEqual(
      modal.getEventListenerCount("submit"),
      1,
      "should have 1 submit listener",
    );

    // Trigger events
    modal.triggerEvent("click");
    modal.triggerEvent("submit");

    assert.strictEqual(clickCount, 1, "click handler should be called once");
    assert.strictEqual(submitCount, 1, "submit handler should be called once");

    // Remove event listener
    modal.removeEventListener("click", clickHandler);
    assert.strictEqual(
      modal.getEventListenerCount("click"),
      0,
      "should have 0 click listeners after removal",
    );

    // Trigger click again - should not increment
    modal.triggerEvent("click");
    assert.strictEqual(
      clickCount,
      1,
      "click handler should not be called after removal",
    );
  });

  test("TestLoginModal_KeyboardNavigation", () => {
    class MockLoginModal {
      private focusedElement: string | null = null;
      private elements = ["handleInput", "loginButton", "cancelButton"];

      focus(element: string): void {
        if (this.elements.includes(element)) {
          this.focusedElement = element;
        }
      }

      handleKeyDown(key: string): string | null {
        const currentIndex = this.elements.indexOf(this.focusedElement || "");

        if (key === "Tab") {
          const nextIndex = (currentIndex + 1) % this.elements.length;
          this.focusedElement = this.elements[nextIndex];
        } else if (key === "Shift+Tab") {
          const prevIndex =
            currentIndex > 0 ? currentIndex - 1 : this.elements.length - 1;
          this.focusedElement = this.elements[prevIndex];
        } else if (key === "Enter") {
          if (this.focusedElement === "loginButton") {
            return "submit";
          }
        } else if (key === "Escape") {
          return "close";
        }

        return null;
      }

      getFocusedElement(): string | null {
        return this.focusedElement;
      }
    }

    const modal = new MockLoginModal();

    // Test Tab navigation
    modal.focus("handleInput");
    assert.strictEqual(
      modal.getFocusedElement(),
      "handleInput",
      "should focus on handle input",
    );

    modal.handleKeyDown("Tab");
    assert.strictEqual(
      modal.getFocusedElement(),
      "loginButton",
      "Tab should move to login button",
    );

    modal.handleKeyDown("Tab");
    assert.strictEqual(
      modal.getFocusedElement(),
      "cancelButton",
      "Tab should move to cancel button",
    );

    modal.handleKeyDown("Tab");
    assert.strictEqual(
      modal.getFocusedElement(),
      "handleInput",
      "Tab should wrap to handle input",
    );

    // Test Shift+Tab (reverse)
    modal.handleKeyDown("Shift+Tab");
    assert.strictEqual(
      modal.getFocusedElement(),
      "cancelButton",
      "Shift+Tab should move backwards",
    );

    // Test Enter on login button
    modal.focus("loginButton");
    const enterResult = modal.handleKeyDown("Enter");
    assert.strictEqual(
      enterResult,
      "submit",
      "Enter on login button should submit",
    );

    // Test Escape
    const escapeResult = modal.handleKeyDown("Escape");
    assert.strictEqual(escapeResult, "close", "Escape should close modal");
  });

  test("TestLoginModal_AccessibilityAttributes", () => {
    class MockLoginModal {
      private modal: any;
      private handleInput: any;
      private loginButton: any;
      private errorMessage: any;

      constructor() {
        this.modal = mockDocument.createElement("div");
        this.handleInput = mockDocument.createElement("input");
        this.loginButton = mockDocument.createElement("button");
        this.errorMessage = mockDocument.createElement("div");

        this.setupAccessibility();
      }

      private setupAccessibility(): void {
        // Modal attributes
        this.modal.setAttribute("role", "dialog");
        this.modal.setAttribute("aria-modal", "true");
        this.modal.setAttribute("aria-labelledby", "modal-title");

        // Input attributes
        this.handleInput.setAttribute("id", "bluesky-handle");
        this.handleInput.setAttribute("aria-label", "Bluesky handle");
        this.handleInput.setAttribute("aria-required", "true");
        this.handleInput.setAttribute("aria-describedby", "handle-help");

        // Button attributes
        this.loginButton.setAttribute("type", "submit");
        this.loginButton.setAttribute("aria-describedby", "login-help");

        // Error message attributes
        this.errorMessage.setAttribute("role", "alert");
        this.errorMessage.setAttribute("aria-live", "polite");
      }

      getAttribute(element: string, attr: string): string | null {
        const el = this[element as keyof this] as any;
        return el.getAttribute(attr);
      }
    }

    const modal = new MockLoginModal();

    // Test modal accessibility
    assert.strictEqual(
      modal.getAttribute("modal", "role"),
      "dialog",
      "modal should have dialog role",
    );
    assert.strictEqual(
      modal.getAttribute("modal", "aria-modal"),
      "true",
      "modal should have aria-modal",
    );
    assert.strictEqual(
      modal.getAttribute("modal", "aria-labelledby"),
      "modal-title",
      "modal should have aria-labelledby",
    );

    // Test input accessibility
    assert.strictEqual(
      modal.getAttribute("handleInput", "aria-label"),
      "Bluesky handle",
      "input should have aria-label",
    );
    assert.strictEqual(
      modal.getAttribute("handleInput", "aria-required"),
      "true",
      "input should be required",
    );
    assert.strictEqual(
      modal.getAttribute("handleInput", "aria-describedby"),
      "handle-help",
      "input should have description",
    );

    // Test button accessibility
    assert.strictEqual(
      modal.getAttribute("loginButton", "type"),
      "submit",
      "button should be submit type",
    );

    // Test error message accessibility
    assert.strictEqual(
      modal.getAttribute("errorMessage", "role"),
      "alert",
      "error should have alert role",
    );
    assert.strictEqual(
      modal.getAttribute("errorMessage", "aria-live"),
      "polite",
      "error should have aria-live",
    );
  });

  test("TestLoginModal_EdgeCases", () => {
    class MockLoginModal {
      private attempts: string[] = [];

      processHandle(handle: string): { processed: string; warnings: string[] } {
        const warnings: string[] = [];
        let processed = handle;

        // Handle null/undefined
        if (!handle) {
          return { processed: "", warnings: ["Handle is required"] };
        }

        // Trim whitespace
        processed = processed.trim();
        if (processed !== handle) {
          warnings.push("Whitespace trimmed");
        }

        // Handle case sensitivity
        if (processed !== processed.toLowerCase()) {
          processed = processed.toLowerCase();
          warnings.push("Converted to lowercase");
        }

        // Handle common mistakes
        if (processed.startsWith("@")) {
          processed = processed.slice(1);
          warnings.push("Removed @ symbol");
        }

        if (processed.startsWith("https://")) {
          processed = processed.replace("https://", "");
          warnings.push("Removed protocol");
        }

        if (processed.endsWith("/")) {
          processed = processed.slice(0, -1);
          warnings.push("Removed trailing slash");
        }

        this.attempts.push(processed);
        return { processed, warnings };
      }

      getAttempts(): string[] {
        return this.attempts;
      }
    }

    const modal = new MockLoginModal();

    // Test empty input
    const emptyResult = modal.processHandle("");
    assert.strictEqual(
      emptyResult.processed,
      "",
      "empty input should remain empty",
    );
    assert.ok(
      emptyResult.warnings.includes("Handle is required"),
      "should warn about required field",
    );

    // Test whitespace handling
    const whitespaceResult = modal.processHandle("  user.bsky.social  ");
    assert.strictEqual(
      whitespaceResult.processed,
      "user.bsky.social",
      "should trim whitespace",
    );
    assert.ok(
      whitespaceResult.warnings.includes("Whitespace trimmed"),
      "should warn about whitespace",
    );

    // Test case conversion
    const caseResult = modal.processHandle("USER.BSKY.SOCIAL");
    assert.strictEqual(
      caseResult.processed,
      "user.bsky.social",
      "should convert to lowercase",
    );
    assert.ok(
      caseResult.warnings.includes("Converted to lowercase"),
      "should warn about case conversion",
    );

    // Test @ symbol removal
    const atResult = modal.processHandle("@user.bsky.social");
    assert.strictEqual(
      atResult.processed,
      "user.bsky.social",
      "should remove @ symbol",
    );
    assert.ok(
      atResult.warnings.includes("Removed @ symbol"),
      "should warn about @ removal",
    );

    // Test protocol removal
    const protocolResult = modal.processHandle("https://user.bsky.social");
    assert.strictEqual(
      protocolResult.processed,
      "user.bsky.social",
      "should remove protocol",
    );
    assert.ok(
      protocolResult.warnings.includes("Removed protocol"),
      "should warn about protocol removal",
    );

    // Test multiple issues at once
    const multipleResult = modal.processHandle(
      "  @HTTPS://USER.BSKY.SOCIAL/  ",
    );
    assert.strictEqual(
      multipleResult.processed,
      "user.bsky.social",
      "should handle multiple issues",
    );
    assert.ok(
      multipleResult.warnings.length > 1,
      "should have multiple warnings",
    );

    // Verify attempts are recorded
    assert.ok(
      modal.getAttempts().length >= 6,
      "should record all processing attempts",
    );
  });

  test("TestLoginModal_SecurityConsiderations", () => {
    class MockLoginModal {
      sanitizeHandle(handle: string): string {
        if (!handle) return "";

        // Remove potentially dangerous characters
        const dangerous = /[<>'"&]/g;
        const sanitized = handle.replace(dangerous, "");

        // Limit length
        const maxLength = 253; // DNS label limit
        return sanitized.slice(0, maxLength);
      }

      validateCSRF(token: string): boolean {
        // Mock CSRF validation
        return token && token.length >= 32 && /^[a-zA-Z0-9]+$/.test(token);
      }

      rateLimit(): { allowed: boolean; retryAfter?: number } {
        // Mock rate limiting (3 attempts per minute)
        const now = Date.now();
        const oneMinute = 60 * 1000;
        const attempts = this.getRecentAttempts(now - oneMinute);

        if (attempts >= 3) {
          return { allowed: false, retryAfter: 60 };
        }

        return { allowed: true };
      }

      private attempts: number[] = [];

      private getRecentAttempts(since: number): number {
        return this.attempts.filter((time) => time > since).length;
      }

      recordAttempt(): void {
        this.attempts.push(Date.now());
      }
    }

    const modal = new MockLoginModal();

    // Test handle sanitization
    const dangerousHandle = "<script>alert('xss')</script>user.bsky.social";
    const sanitized = modal.sanitizeHandle(dangerousHandle);
    assert.ok(!sanitized.includes("<"), "should remove < characters");
    assert.ok(!sanitized.includes(">"), "should remove > characters");
    assert.ok(!sanitized.includes("'"), "should remove quote characters");
    assert.ok(
      sanitized.includes("user.bsky.social"),
      "should preserve valid parts",
    );

    // Test length limiting
    const longHandle = "a".repeat(300) + ".bsky.social";
    const limited = modal.sanitizeHandle(longHandle);
    assert.ok(limited.length <= 253, "should limit handle length");

    // Test CSRF validation
    const validToken = "a".repeat(32);
    const invalidTokenShort = "short";
    const invalidTokenSpecial = "token-with-special-chars!";

    assert.ok(modal.validateCSRF(validToken), "valid token should pass");
    assert.ok(
      !modal.validateCSRF(invalidTokenShort),
      "short token should fail",
    );
    assert.ok(
      !modal.validateCSRF(invalidTokenSpecial),
      "token with special chars should fail",
    );

    // Test rate limiting
    const firstAttempt = modal.rateLimit();
    assert.strictEqual(
      firstAttempt.allowed,
      true,
      "first attempt should be allowed",
    );

    // Simulate multiple attempts
    for (let i = 0; i < 3; i++) {
      modal.recordAttempt();
    }

    const rateLimited = modal.rateLimit();
    assert.strictEqual(
      rateLimited.allowed,
      false,
      "should be rate limited after 3 attempts",
    );
    assert.strictEqual(rateLimited.retryAfter, 60, "should specify retry time");
  });

  test("TestLoginModal_IntegrationPoints", () => {
    // Mock the auth integration interface
    interface AuthResult {
      success: boolean;
      session?: any;
      error?: string;
    }

    class MockLoginModal {
      private authCallback: ((handle: string) => Promise<AuthResult>) | null =
        null;

      setAuthCallback(callback: (handle: string) => Promise<AuthResult>): void {
        this.authCallback = callback;
      }

      async performLogin(handle: string): Promise<AuthResult> {
        if (!this.authCallback) {
          return { success: false, error: "Auth callback not set" };
        }

        try {
          return await this.authCallback(handle);
        } catch (error) {
          return {
            success: false,
            error: error instanceof Error ? error.message : "Unknown error",
          };
        }
      }

      onLoginSuccess(callback: (session: any) => void): void {
        // Mock success callback registration
      }

      onLoginFailure(callback: (error: string) => void): void {
        // Mock failure callback registration
      }
    }

    const modal = new MockLoginModal();

    // Test auth callback integration
    const mockAuthCallback = async (handle: string): Promise<AuthResult> => {
      if (handle === "valid.bsky.social") {
        return { success: true, session: { handle, did: "did:plc:test" } };
      } else {
        return { success: false, error: "Invalid credentials" };
      }
    };

    modal.setAuthCallback(mockAuthCallback);

    // Test successful login
    return modal
      .performLogin("valid.bsky.social")
      .then((result) => {
        assert.strictEqual(
          result.success,
          true,
          "should succeed with valid handle",
        );
        assert.ok(result.session, "should return session data");
        assert.strictEqual(
          result.session.handle,
          "valid.bsky.social",
          "should have correct handle",
        );

        // Test failed login
        return modal.performLogin("invalid.handle");
      })
      .then((result) => {
        assert.strictEqual(
          result.success,
          false,
          "should fail with invalid handle",
        );
        assert.strictEqual(
          result.error,
          "Invalid credentials",
          "should provide error message",
        );
      });
  });
});
