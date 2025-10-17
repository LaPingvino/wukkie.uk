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
    this.modal.setAttribute("role", "dialog");
    this.modal.setAttribute("aria-labelledby", "login-title");
    this.modal.setAttribute("aria-describedby", "login-desc");
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
        <h2 id="login-title" style="margin: 0 0 8px 0; font-size: 1.5rem; color: #1a1a1a;">Login with Bluesky</h2>
        <p id="login-desc" style="margin: 0 0 24px 0; color: #666; font-size: 0.9rem;">
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
        <form>
          <!-- Authentication Method Selector -->
          <div class="form-group" style="margin-bottom: 20px;">
            <label style="
              display: block;
              margin-bottom: 12px;
              font-weight: 500;
              color: #333;
            ">Authentication Method</label>
            <div style="
              display: flex;
              gap: 16px;
              margin-bottom: 8px;
            ">
              <label style="
                display: flex;
                align-items: center;
                gap: 6px;
                cursor: pointer;
                font-size: 0.9rem;
              ">
                <input
                  type="radio"
                  name="auth-method"
                  value="oauth"
                  checked
                  style="margin: 0;"
                />
                OAuth (Recommended)
              </label>
              <label style="
                display: flex;
                align-items: center;
                gap: 6px;
                cursor: pointer;
                font-size: 0.9rem;
              ">
                <input
                  type="radio"
                  name="auth-method"
                  value="password"
                  style="margin: 0;"
                />
                App Password
              </label>
            </div>
            <small id="auth-method-hint" style="
              display: block;
              color: #666;
              font-size: 0.8rem;
            ">
              Secure authentication via your Bluesky server
            </small>
          </div>

          <!-- Handle Input -->
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

          <!-- Password Field (hidden by default) -->
          <div id="password-field" class="form-group" style="margin-bottom: 20px; display: none;">
            <label for="login-password" style="
              display: block;
              margin-bottom: 8px;
              font-weight: 500;
              color: #333;
            ">App Password</label>
            <input
              type="password"
              id="login-password"
              placeholder="xxxx-xxxx-xxxx-xxxx"
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
              🔒 Create an app password at
              <a href="https://bsky.app/settings/app-passwords" target="_blank" style="color: #2563eb;">
                bsky.app/settings/app-passwords
              </a>
            </small>
          </div>

          <!-- Error Message -->
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

          <!-- Submit Button -->
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
            <span class="login-btn-text">Login with Bluesky</span>
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
        </form>
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

    // Initialize element states
    this.errorMessage.style.display = "none";
    if (this.loadingSpinner) this.loadingSpinner.style.display = "none";
    this.loginButton.disabled = false;

    // Initialize button text display
    const btnText = this.loginButton.querySelector(
      ".login-btn-text",
    ) as HTMLElement;
    if (btnText) btnText.style.display = "inline-block";

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

    // Handle enter key on handle input
    this.handleInput.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        e.preventDefault();
        this.handleLogin();
      }
    });

    // Handle enter key on password input
    const passwordInput = this.modal.querySelector(
      "#login-password",
    ) as HTMLInputElement;
    if (passwordInput) {
      passwordInput.addEventListener("keydown", (e) => {
        if (e.key === "Enter") {
          e.preventDefault();
          this.handleLogin();
        }
      });
    }

    // Clear error when typing
    this.handleInput.addEventListener("input", () => {
      this.clearError();
    });

    if (passwordInput) {
      passwordInput.addEventListener("input", () => {
        this.clearError();
      });
    }

    // Handle auth method toggle
    const authMethodRadios = this.modal.querySelectorAll(
      'input[name="auth-method"]',
    ) as NodeListOf<HTMLInputElement>;
    authMethodRadios.forEach((radio) => {
      radio.addEventListener("change", () => {
        this.handleAuthMethodChange(radio.value);
      });
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
    const rawHandle = this.handleInput.value;
    const handle = rawHandle.trim();

    if (!handle) {
      this.showError("Please enter a valid Bluesky handle");
      this.handleInput.focus();
      return;
    }

    // Basic handle validation (validates trimmed handle)
    if (!this.isValidHandle(handle)) {
      this.showError("Please enter a valid Bluesky handle");
      this.handleInput.focus();
      return;
    }

    // Check which auth method is selected
    const authMethod = this.getSelectedAuthMethod();
    const passwordInput = this.modal.querySelector(
      "#login-password",
    ) as HTMLInputElement;
    const password = passwordInput?.value?.trim();

    if (authMethod === "password") {
      // User chose app password mode
      if (!password) {
        this.showError("Please enter your app password");
        passwordInput?.focus();
        return;
      }
    }

    this.clearError();
    this.setLoading(true);

    try {
      if (authMethod === "password") {
        // Direct app password login
        await blueskyAuth.loginWithAppPassword(handle, password!);
        this.hide(); // App password login succeeded, close modal
      } else {
        // Try OAuth login
        await blueskyAuth.login(handle);
        // OAuth flow should redirect to authorization server
        // If we get here without redirect, something went wrong
        this.showError(
          "OAuth login flow did not start properly. Please try again.",
        );
      }
    } catch (error) {
      console.error("Login error:", error);

      if (
        error instanceof Error &&
        error.message.includes("OAUTH_NOT_SUPPORTED") &&
        authMethod === "oauth"
      ) {
        // OAuth not supported, automatically switch to app password mode
        this.switchToAppPasswordMode();
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

  private getSelectedAuthMethod(): string {
    const selectedRadio = this.modal.querySelector(
      'input[name="auth-method"]:checked',
    ) as HTMLInputElement;
    return selectedRadio?.value || "oauth";
  }

  private handleAuthMethodChange(method: string): void {
    const passwordField = this.modal.querySelector(
      "#password-field",
    ) as HTMLElement;
    const hintElement = this.modal.querySelector(
      "#auth-method-hint",
    ) as HTMLElement;
    const btnText = this.loginButton.querySelector(
      ".login-btn-text",
    ) as HTMLElement;

    if (method === "password") {
      passwordField.style.display = "block";
      hintElement.textContent =
        "Use your Bluesky app password for direct authentication";
      if (btnText) btnText.textContent = "Login with App Password";

      // Focus password field after a short delay
      setTimeout(() => {
        const passwordInput = this.modal.querySelector(
          "#login-password",
        ) as HTMLInputElement;
        if (passwordInput) passwordInput.focus();
      }, 100);
    } else {
      passwordField.style.display = "none";
      hintElement.textContent = "Secure authentication via your Bluesky server";
      if (btnText) btnText.textContent = "Login with Bluesky";

      // Clear password field
      const passwordInput = this.modal.querySelector(
        "#login-password",
      ) as HTMLInputElement;
      if (passwordInput) passwordInput.value = "";
    }

    this.clearError();
  }

  private switchToAppPasswordMode(): void {
    // Switch radio button to app password
    const passwordRadio = this.modal.querySelector(
      'input[value="password"]',
    ) as HTMLInputElement;
    if (passwordRadio) {
      passwordRadio.checked = true;
      this.handleAuthMethodChange("password");
    }

    // Show helpful message
    this.showError(
      "OAuth not available for your server. Please use an app password instead.",
      "info",
    );
  }

  private isValidHandle(handle: string): boolean {
    // Comprehensive handle validation - handle should already be trimmed
    if (!handle || handle.length === 0) return false;
    if (handle.length < 4) return false;
    if (!handle.includes(".")) return false;
    if (handle.startsWith(".") || handle.endsWith(".")) return false;
    if (handle.includes("..")) return false;
    if (handle.includes("@") || handle.includes(" ")) return false;
    if (handle.includes("\n") || handle.includes("\r") || handle.includes("\t"))
      return false;

    return true;
  }

  private setLoading(loading: boolean): void {
    const btnText = this.loginButton.querySelector(
      ".login-btn-text",
    ) as HTMLElement;
    const spinner = this.loginButton.querySelector(
      ".login-loading",
    ) as HTMLElement;

    if (loading) {
      if (btnText) btnText.style.display = "none";
      if (spinner) spinner.style.display = "block";
      this.loginButton.disabled = true;
    } else {
      if (btnText) btnText.style.display = "inline-block";
      if (spinner) spinner.style.display = "none";
      this.loginButton.disabled = false;
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

    // Reset to OAuth mode
    const oauthRadio = this.modal.querySelector(
      'input[value="oauth"]',
    ) as HTMLInputElement;
    if (oauthRadio) {
      oauthRadio.checked = true;
      this.handleAuthMethodChange("oauth");
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

    // Clear password field
    const passwordInput = this.modal.querySelector(
      "#login-password",
    ) as HTMLInputElement;
    if (passwordInput) {
      passwordInput.value = "";
    }

    // Reset to OAuth mode
    const oauthRadio = this.modal.querySelector(
      'input[value="oauth"]',
    ) as HTMLInputElement;
    if (oauthRadio) {
      oauthRadio.checked = true;
      this.handleAuthMethodChange("oauth");
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
