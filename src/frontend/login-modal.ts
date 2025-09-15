// Early debug logging
console.log("🟢 [DEBUG] login-modal.ts: File loading started");

/**
 * Login Modal Component
 * Provides a user-friendly OAuth login interface
 */

import { blueskyAuth } from "./auth.js";

export class LoginModal {
  private modal: HTMLElement;
  private overlay: HTMLElement;
  private handleInput: HTMLInputElement;
  private loginButton: HTMLButtonElement;
  private errorMessage: HTMLElement;
  private loadingSpinner: HTMLElement;
  private isVisible: boolean = false;

  constructor() {
    console.log("🟢 [DEBUG] LoginModal constructor: Starting");
    try {
      console.log("🟢 [DEBUG] LoginModal constructor: About to create modal");
      this.createModal();
      console.log(
        "🟢 [DEBUG] LoginModal constructor: About to setup event listeners",
      );
      this.setupEventListeners();
      console.log("🟢 [DEBUG] LoginModal constructor: Complete");
    } catch (error) {
      console.error("❌ [DEBUG] Error in LoginModal constructor:", error);
    }
  }

  private createModal(): void {
    console.log("🟢 [DEBUG] LoginModal createModal: Starting");
    // Create overlay
    this.overlay = document.createElement("div");
    this.overlay.className = "login-modal-overlay";
    this.overlay.style.cssText = `
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: rgba(0, 0, 0, 0.5);
      backdrop-filter: blur(4px);
      z-index: 1000;
      display: none;
      justify-content: center;
      align-items: center;
      padding: 20px;
      box-sizing: border-box;
    `;

    // Create modal
    this.modal = document.createElement("div");
    this.modal.className = "login-modal";
    this.modal.style.cssText = `
      background: white;
      border-radius: 12px;
      padding: 32px;
      width: 100%;
      max-width: 400px;
      box-shadow: 0 20px 50px rgba(0, 0, 0, 0.3);
      position: relative;
      animation: modalAppear 0.2s ease-out;
    `;

    // Create modal content
    this.modal.innerHTML = `
      <div class="login-modal-header">
        <h2 style="margin: 0 0 8px 0; font-size: 1.5rem; color: #1a1a1a;">Login with Bluesky</h2>
        <p style="margin: 0 0 24px 0; color: #666; font-size: 0.9rem;">
          Enter your Bluesky handle to securely authenticate with OAuth
        </p>
        <button class="login-modal-close" style="
          position: absolute;
          top: 16px;
          right: 16px;
          background: none;
          border: none;
          font-size: 24px;
          cursor: pointer;
          color: #666;
          line-height: 1;
          padding: 4px;
          border-radius: 4px;
        ">×</button>
      </div>

      <div class="login-modal-form">
        <div class="form-group" style="margin-bottom: 20px;">
          <label for="login-handle" style="
            display: block;
            margin-bottom: 8px;
            font-weight: 500;
            color: #333;
          ">Bluesky Handle</label>
          <input
            type="text"
            id="login-handle"
            placeholder="user.bsky.social"
            style="
              width: 100%;
              padding: 12px 16px;
              border: 2px solid #e1e5e9;
              border-radius: 8px;
              font-size: 1rem;
              background: #fff;
              transition: border-color 0.2s;
              box-sizing: border-box;
            "
          />
          <small style="
            display: block;
            margin-top: 6px;
            color: #666;
            font-size: 0.85rem;
          ">
            Don't include the @ symbol. Example: alice.bsky.social
          </small>
        </div>

        <div class="login-error" style="
          display: none;
          background: #fef2f2;
          border: 1px solid #fecaca;
          color: #dc2626;
          padding: 12px;
          border-radius: 6px;
          margin-bottom: 16px;
          font-size: 0.9rem;
        "></div>

        <button class="login-submit-btn" style="
          width: 100%;
          padding: 12px 24px;
          background: #1d4ed8;
          color: white;
          border: none;
          border-radius: 8px;
          font-size: 1rem;
          font-weight: 500;
          cursor: pointer;
          transition: background-color 0.2s;
          position: relative;
        ">
          <span class="login-btn-text">Continue with OAuth</span>
          <span class="login-loading" style="
            display: none;
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
          ">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" style="animation: spin 1s linear infinite;">
              <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" opacity="0.25"/>
              <path fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"/>
            </svg>
          </span>
        </button>

        <div class="login-info" style="
          margin-top: 16px;
          padding: 16px;
          background: #f8fafc;
          border-radius: 6px;
          border-left: 4px solid #3b82f6;
        ">
          <div style="font-size: 0.85rem; color: #475569;">
            <strong>🔒 Secure OAuth Flow</strong><br>
            You'll be redirected to Bluesky's secure login page. No passwords are stored on this site.
          </div>
        </div>
      </div>
    `;

    // Add keyframe animation
    const style = document.createElement("style");
    style.textContent = `
      @keyframes modalAppear {
        from {
          opacity: 0;
          transform: scale(0.9);
        }
        to {
          opacity: 1;
          transform: scale(1);
        }
      }

      @keyframes spin {
        from { transform: rotate(0deg); }
        to { transform: rotate(360deg); }
      }

      .login-modal input:focus {
        outline: none;
        border-color: #3b82f6 !important;
        box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
      }

      .login-submit-btn:hover {
        background: #1e40af !important;
      }

      .login-submit-btn:disabled {
        background: #9ca3af !important;
        cursor: not-allowed !important;
      }

      .login-modal-close:hover {
        background: #f3f4f6 !important;
      }
    `;
    document.head.appendChild(style);

    // Get references to elements
    this.handleInput = this.modal.querySelector(
      "#login-handle",
    ) as HTMLInputElement;
    this.loginButton = this.modal.querySelector(
      ".login-submit-btn",
    ) as HTMLButtonElement;
    this.errorMessage = this.modal.querySelector(".login-error") as HTMLElement;
    this.loadingSpinner = this.modal.querySelector(
      ".login-loading",
    ) as HTMLElement;

    this.overlay.appendChild(this.modal);
    document.body.appendChild(this.overlay);
  }

  private setupEventListeners(): void {
    // Close modal when clicking overlay
    this.overlay.addEventListener("click", (e) => {
      if (e.target === this.overlay) {
        this.hide();
      }
    });

    // Close modal when clicking close button
    const closeButton = this.modal.querySelector(
      ".login-modal-close",
    ) as HTMLButtonElement;
    closeButton.addEventListener("click", () => {
      this.hide();
    });

    // Handle form submission
    this.loginButton.addEventListener("click", (e) => {
      e.preventDefault();
      this.handleLogin();
    });

    // Handle enter key
    this.handleInput.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        e.preventDefault();
        this.handleLogin();
      }
    });

    // Clear error when typing
    this.handleInput.addEventListener("input", () => {
      this.clearError();
    });

    // Handle escape key
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && this.isVisible) {
        this.hide();
      }
    });
  }

  private async handleLogin(): Promise<void> {
    console.log("🟢 [DEBUG] LoginModal handleLogin: Starting");
    const handle = this.handleInput.value.trim();

    if (!handle) {
      this.showError("Please enter your Bluesky handle");
      this.handleInput.focus();
      return;
    }

    // Basic handle validation
    if (!this.isValidHandle(handle)) {
      this.showError(
        "Please enter a valid Bluesky handle (e.g., user.bsky.social)",
      );
      this.handleInput.focus();
      return;
    }

    // Check if we're in password mode (OAuth fallback)
    const passwordInput = this.modal.querySelector(
      "#login-password",
    ) as HTMLInputElement;
    const password = passwordInput?.value?.trim();

    if (passwordInput && passwordInput.style.display !== "none") {
      // We're in app password mode
      if (!password) {
        this.showError("Please enter your app password");
        passwordInput.focus();
        return;
      }
    }

    this.clearError();
    this.setLoading(true);

    try {
      await blueskyAuth.login(handle, password);
      // OAuth flow should redirect to authorization server
      // If we get here without redirect, either app password worked or something went wrong
      if (!password) {
        this.showError(
          "OAuth login flow did not start properly. Please try again.",
        );
      } else {
        // App password login succeeded, close modal
        this.hide();
      }
    } catch (error) {
      console.error("Login error:", error);

      if (
        error instanceof Error &&
        error.message.includes("OAUTH_NOT_SUPPORTED")
      ) {
        // OAuth not supported, show app password option
        this.showAppPasswordOption();
      } else {
        this.showError(
          error instanceof Error
            ? error.message.replace("Login failed: ", "")
            : "Login failed. Please check your credentials and try again.",
        );
      }
    } finally {
      this.setLoading(false);
    }
  }

  private showAppPasswordOption(): void {
    // Update modal content to show app password field
    const form = this.modal.querySelector("form");
    if (!form) return;

    // Check if password field already exists
    let passwordInput = this.modal.querySelector(
      "#login-password",
    ) as HTMLInputElement;

    if (!passwordInput) {
      // Create password field
      const passwordGroup = document.createElement("div");
      passwordGroup.style.cssText = "margin-bottom: 1rem;";
      passwordGroup.innerHTML = `
        <label style="display: block; margin-bottom: 0.5rem; font-weight: 500; color: #374151;">
          App Password
        </label>
        <input
          type="password"
          id="login-password"
          placeholder="xxxx-xxxx-xxxx-xxxx"
          required
          style="width: 100%; padding: 0.75rem; border: 1px solid #d1d5db; border-radius: 6px; font-size: 1rem;"
        >
        <small style="color: #6b7280; margin-top: 0.25rem; display: block;">
          🔒 OAuth not available. Create an app password at
          <a href="https://bsky.app/settings/app-passwords" target="_blank" style="color: #2563eb;">
            bsky.app/settings/app-passwords
          </a>
        </small>
      `;

      // Insert after handle field
      const handleGroup = form.querySelector("div");
      if (handleGroup?.nextSibling) {
        form.insertBefore(passwordGroup, handleGroup.nextSibling);
      } else {
        form.appendChild(passwordGroup);
      }

      passwordInput = passwordGroup.querySelector(
        "#login-password",
      ) as HTMLInputElement;

      // Add enter key handler for password field
      passwordInput.addEventListener("keydown", (e) => {
        if (e.key === "Enter") {
          e.preventDefault();
          this.handleLogin();
        }
      });
    }

    // Show the password field and focus it
    passwordInput.style.display = "block";
    passwordInput.focus();

    // Update button text
    const btnText = this.loginButton.querySelector(
      ".login-btn-text",
    ) as HTMLElement;
    if (btnText) {
      btnText.textContent = "Login with App Password";
    }

    // Show helpful message
    this.showError(
      "OAuth not available for your server. Please use an app password instead.",
      "info",
    );
  }

  private isValidHandle(handle: string): boolean {
    // Basic validation - should contain at least one dot and no @ symbol
    return handle.includes(".") && !handle.includes("@") && handle.length > 3;
  }

  private setLoading(loading: boolean): void {
    const btnText = this.loginButton.querySelector(
      ".login-btn-text",
    ) as HTMLElement;
    const spinner = this.loginButton.querySelector(
      ".login-loading",
    ) as HTMLElement;

    if (loading) {
      btnText.style.display = "none";
      spinner.style.display = "block";
      this.loginButton.disabled = true;
      this.handleInput.disabled = true;
    } else {
      btnText.style.display = "block";
      spinner.style.display = "none";
      this.loginButton.disabled = false;
      this.handleInput.disabled = false;
    }
  }

  private showError(message: string, type: string = "error"): void {
    this.errorMessage.textContent = message;
    this.errorMessage.style.display = "block";

    // Update styling based on type
    if (type === "info") {
      this.errorMessage.style.backgroundColor = "#dbeafe";
      this.errorMessage.style.color = "#1e40af";
      this.errorMessage.style.borderColor = "#93c5fd";
    } else {
      this.errorMessage.style.backgroundColor = "#fef2f2";
      this.errorMessage.style.color = "#991b1b";
      this.errorMessage.style.borderColor = "#fecaca";
    }
  }

  private clearError(): void {
    this.errorMessage.style.display = "none";
    this.errorMessage.textContent = "";
  }

  public show(): void {
    this.isVisible = true;
    this.overlay.style.display = "flex";
    this.clearError();
    this.setLoading(false);

    // Reset to OAuth mode (hide password field if it exists)
    const passwordInput = this.modal.querySelector(
      "#login-password",
    ) as HTMLInputElement;
    if (passwordInput) {
      passwordInput.value = "";
      passwordInput.style.display = "none";
    }

    // Reset button text
    const btnText = this.loginButton.querySelector(
      ".login-btn-text",
    ) as HTMLElement;
    if (btnText) {
      btnText.textContent = "Login with Bluesky";
    }

    // Focus the handle input after a short delay
    setTimeout(() => {
      this.handleInput.focus();
    }, 100);

    // Prevent body scroll
    document.body.style.overflow = "hidden";
  }

  public hide(): void {
    this.isVisible = false;
    this.overlay.style.display = "none";
    this.handleInput.value = "";

    // Clear password field if it exists
    const passwordInput = this.modal.querySelector(
      "#login-password",
    ) as HTMLInputElement;
    if (passwordInput) {
      passwordInput.value = "";
    }

    this.clearError();
    this.setLoading(false);

    // Restore body scroll
    document.body.style.overflow = "";
  }

  public isOpen(): boolean {
    return this.isVisible;
  }
}
