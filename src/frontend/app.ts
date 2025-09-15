// Early debug logging
console.log("🟢 [DEBUG] app.ts: File loading started");

// Type definitions
interface BlueskySession {
  accessJwt: string;
  refreshJwt: string;
  handle: string;
  did: string;
  isDemo?: boolean;
}

interface Location {
  address?: string;
  lat: number;
  lng: number;
  accuracy?: number;
}

interface Issue {
  id?: string;
  title: string;
  description: string;
  category: string;
  location?: Location;
  hashtags: string[];
  status: "open" | "in-progress" | "resolved";
  createdAt: string;
  author: string;
}

interface GeolocationResult {
  display_name?: string;
  lat: string;
  lon: string;
}

// Extend Leaflet types
declare global {
  interface Window {
    L: typeof import("leaflet");
  }
}

// Import OAuth authentication
import { blueskyAuth, type AuthState } from "./auth.js";
import { LoginModal } from "./login-modal.js";

class WukkieApp {
  private map: L.Map | null = null;
  private userLocation: Location | null = null;
  private session: BlueskySession | null = null;
  private geocodeTimeout?: number;
  private loginModal: LoginModal;
  private authUnsubscribe?: () => void;
  private isLoading: boolean = false;

  constructor() {
    console.log("🟢 [DEBUG] WukkieApp constructor: Starting");
    try {
      console.log("🟢 [DEBUG] WukkieApp constructor: Creating LoginModal");
      this.loginModal = new LoginModal();
      console.log(
        "🟢 [DEBUG] WukkieApp constructor: LoginModal created, calling init",
      );
      this.init();
    } catch (error) {
      console.error("❌ [DEBUG] Error in WukkieApp constructor:", error);
    }
  }

  private async init(): Promise<void> {
    console.log("🟢 [DEBUG] init(): Starting initialization");
    console.log("🚀 Initializing Wukkie app...");

    try {
      console.log("🟢 [DEBUG] init(): About to show loading");
      this.showLoading("Initializing app...");
    } catch (error) {
      console.error("❌ [DEBUG] Error in showLoading:", error);
    }

    // Emergency timeout to prevent infinite loading
    const emergencyTimeout = setTimeout(() => {
      console.warn("⚠️ App initialization timeout reached, forcing completion");
      this.hideLoading();
      this.showStatus(
        "App loaded with limited functionality. Please refresh if issues persist.",
        "error",
      );
    }, 10000); // 10 second timeout

    try {
      console.log("🟢 [DEBUG] init(): About to setup event listeners");
      this.setupEventListeners();

      console.log("🟢 [DEBUG] init(): About to init map");
      this.initMap();

      // Set up authentication state listener
      console.log("🟢 [DEBUG] init(): About to setup auth state listener");
      try {
        this.authUnsubscribe = blueskyAuth.onStateChange((authState) => {
          console.log("🟢 [DEBUG] Auth state changed:", authState);
          this.handleAuthStateChange(authState);
        });
        console.log("🟢 [DEBUG] init(): Auth state listener setup complete");
      } catch (error) {
        console.error("❌ [DEBUG] Error setting up auth listener:", error);
      }

      // Load issues and hide loading immediately
      console.log("🟢 [DEBUG] init(): About to load issues");
      this.loadIssues();

      console.log("🟢 [DEBUG] init(): About to clear timeout and hide loading");
      clearTimeout(emergencyTimeout);
      this.hideLoading();
      console.log("✅ Basic app initialization complete");

      // Handle auth operations in background (non-blocking)
      console.log("🟢 [DEBUG] init(): About to handle auth in background");
      this.handleAuthInBackground();
    } catch (error) {
      console.error("💥 Critical app initialization error:", error);
      clearTimeout(emergencyTimeout);
      this.hideLoading();
      this.showStatus(
        "App failed to initialize properly. Please refresh the page.",
        "error",
      );
    }
  }

  /**
   * Handle authentication operations in background (non-blocking)
   */
  private async handleAuthInBackground(): Promise<void> {
    // Handle OAuth callback if present (non-blocking)
    setTimeout(async () => {
      try {
        console.log("🔍 Checking for OAuth callback...");
        const callbackHandled = await Promise.race([
          blueskyAuth.handleOAuthCallback(),
          new Promise<boolean>((_, reject) =>
            setTimeout(() => reject(new Error("OAuth callback timeout")), 5000),
          ),
        ]);

        if (callbackHandled) {
          console.log("✅ OAuth callback handled successfully");
        }
      } catch (error) {
        console.error("OAuth callback error:", error);
        if (!error.message.includes("timeout")) {
          this.showStatus("Login failed. Please try again.", "error");
        }
      }
    }, 100);

    // Try to restore existing session (non-blocking)
    setTimeout(async () => {
      try {
        console.log("🔑 Attempting to restore session...");
        await Promise.race([
          blueskyAuth.restoreSession(),
          new Promise<boolean>((_, reject) =>
            setTimeout(
              () => reject(new Error("Session restore timeout")),
              3000,
            ),
          ),
        ]);
      } catch (error) {
        console.error("Session restore error:", error);
        // Don't show error to user - this is expected when no session exists
      }
    }, 200);
  }

  private handleAuthStateChange(authState: AuthState): void {
    if (authState.isAuthenticated && authState.session) {
      this.session = {
        accessJwt: authState.session.accessJwt,
        refreshJwt: authState.session.refreshJwt,
        handle: authState.session.handle,
        did: authState.session.did,
      };
      this.updateAuthUI(true);
      this.loginModal.hide();
      this.showStatus(`Welcome back, @${this.session.handle}! 🎉`, "success");
    } else {
      this.session = null;
      this.updateAuthUI(false);
    }
  }

  private setupEventListeners(): void {
    console.log("🟢 [DEBUG] setupEventListeners(): Starting");

    // Auth buttons
    console.log("🟢 [DEBUG] setupEventListeners(): Getting DOM elements");
    const loginBtn = document.getElementById("login-btn") as HTMLButtonElement;
    const demoLoginBtn = document.getElementById(
      "demo-login-btn",
    ) as HTMLButtonElement;
    const logoutBtn = document.getElementById(
      "logout-btn",
    ) as HTMLButtonElement;

    loginBtn?.addEventListener("click", () => this.login());
    demoLoginBtn?.addEventListener("click", () => this.demoLogin());
    logoutBtn?.addEventListener("click", () => this.logout());

    // Issue form
    const issueForm = document.getElementById("issue-form") as HTMLFormElement;
    const getLocationBtn = document.getElementById(
      "get-location",
    ) as HTMLButtonElement;

    issueForm?.addEventListener("submit", (e) => this.submitIssue(e));
    getLocationBtn?.addEventListener("click", () => this.getCurrentLocation());

    // Location input for manual entry
    const locationInput = document.getElementById(
      "location",
    ) as HTMLInputElement;
    locationInput?.addEventListener("input", (e) => {
      const target = e.target as HTMLInputElement;
      this.geocodeLocation(target.value);
    });

    // Map click handler will be set up in initMap()
  }

  private initMap(): void {
    console.log("🗺️ Initializing map...");
    try {
      // Check if Leaflet is loaded
      if (!window.L) {
        console.error("❌ Leaflet not loaded");
        this.showStatus(
          "Map library not loaded. Please refresh the page.",
          "error",
        );
        return;
      }
      console.log("✅ Leaflet loaded successfully");

      // Initialize map centered on Netherlands (wukkie's homeland!)
      console.log("🗺️ Creating map instance...");
      this.map = window.L.map("map").setView([52.3676, 4.9041], 10);
      console.log("✅ Map instance created");

      // Add OpenStreetMap tiles
      console.log("🗺️ Adding tile layer...");
      window.L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: "© OpenStreetMap contributors",
      }).addTo(this.map);
      console.log("✅ Tile layer added");

      // Add click handler for setting location
      console.log("🗺️ Setting up click handler...");
      this.map.on("click", (e: L.LeafletMouseEvent) => {
        this.setLocation(e.latlng.lat, e.latlng.lng);
      });
      console.log("✅ Click handler set up");

      console.log("✅ Map initialization complete");
    } catch (error) {
      console.error("❌ Map initialization error:", error);
      this.showStatus("Map failed to load. Please refresh the page.", "error");
    }
  }

  private async login(): Promise<void> {
    try {
      this.loginModal.show();
    } catch (error) {
      console.error("Login error:", error);
      this.showStatus("Login failed. Please try again.", "error");
    }
  }

  private demoLogin(): void {
    this.session = {
      accessJwt: "demo-token",
      refreshJwt: "demo-refresh",
      handle: "demo.bsky.social",
      did: "did:demo:user",
      isDemo: true,
    };

    this.updateAuthUI(true);
    this.showStatus(
      "Demo mode active! 🎭 You can now test all features.",
      "success",
    );
  }

  private async logout(): Promise<void> {
    try {
      await blueskyAuth.logout();
      this.session = null;
      this.updateAuthUI(false);
      this.showStatus("Logged out successfully. See you soon! 👋", "success");
    } catch (error) {
      console.error("Logout error:", error);
      this.showStatus("Logout failed", "error");
    }
  }

  private updateAuthUI(isAuthenticated: boolean): void {
    const loginBtn = document.getElementById("login-btn") as HTMLButtonElement;
    const demoLoginBtn = document.getElementById(
      "demo-login-btn",
    ) as HTMLButtonElement;
    const logoutBtn = document.getElementById(
      "logout-btn",
    ) as HTMLButtonElement;
    const userInfo = document.getElementById("user-info") as HTMLElement;
    const username = document.getElementById("username") as HTMLElement;
    const issueForm = document.getElementById("issue-form") as HTMLFormElement;
    const authRequired = document.getElementById(
      "auth-required",
    ) as HTMLElement;

    if (isAuthenticated && this.session) {
      // Show authenticated state
      loginBtn?.classList.add("hidden");
      demoLoginBtn?.classList.add("hidden");
      logoutBtn?.classList.remove("hidden");
      userInfo?.classList.remove("hidden");
      issueForm?.classList.remove("hidden");
      authRequired?.classList.add("hidden");

      // Update username display
      if (username) {
        username.textContent = `@${this.session.handle}`;
      }
    } else {
      // Show unauthenticated state
      loginBtn?.classList.remove("hidden");
      demoLoginBtn?.classList.remove("hidden");
      logoutBtn?.classList.add("hidden");
      userInfo?.classList.add("hidden");
      issueForm?.classList.add("hidden");
      authRequired?.classList.remove("hidden");
    }
  }

  private async getCurrentLocation(): Promise<void> {
    const feedback = document.getElementById(
      "location-feedback",
    ) as HTMLElement;
    const getLocationBtn = document.getElementById(
      "get-location",
    ) as HTMLButtonElement;

    if (!navigator.geolocation) {
      this.showStatus("Geolocation is not supported by this browser", "error");
      return;
    }

    // Update button state
    const originalText = getLocationBtn.textContent;
    getLocationBtn.textContent = "🔄 Getting location...";
    getLocationBtn.disabled = true;

    if (feedback) {
      feedback.innerHTML =
        '<div class="location-loading">📍 Getting your location...</div>';
      feedback.className = "form-feedback loading";
    }

    try {
      const position = await new Promise<GeolocationPosition>(
        (resolve, reject) => {
          navigator.geolocation.getCurrentPosition(resolve, reject, {
            enableHighAccuracy: true,
            timeout: 10000,
            maximumAge: 60000,
          });
        },
      );

      const { latitude, longitude, accuracy } = position.coords;
      await this.setLocation(latitude, longitude, accuracy);
    } catch (error) {
      console.error("Geolocation error:", error);
      let message = "Unable to get your location. ";

      if (error instanceof GeolocationPositionError) {
        switch (error.code) {
          case error.PERMISSION_DENIED:
            message += "Location access was denied.";
            break;
          case error.POSITION_UNAVAILABLE:
            message += "Location information is unavailable.";
            break;
          case error.TIMEOUT:
            message += "Location request timed out.";
            break;
        }
      }

      if (feedback) {
        feedback.innerHTML = `<div class="location-error">${message}</div>`;
        feedback.className = "form-feedback error";
      }
    } finally {
      // Reset button state
      getLocationBtn.textContent = originalText;
      getLocationBtn.disabled = false;
    }
  }

  private async setLocation(
    lat: number,
    lng: number,
    accuracy?: number,
  ): Promise<void> {
    try {
      this.userLocation = { lat, lng, accuracy };

      // Update form inputs
      const latInput = document.getElementById("lat") as HTMLInputElement;
      const lngInput = document.getElementById("lng") as HTMLInputElement;
      const locationInput = document.getElementById(
        "location",
      ) as HTMLInputElement;

      if (latInput) latInput.value = lat.toString();
      if (lngInput) lngInput.value = lng.toString();

      // Reverse geocode to get address
      const address = await this.reverseGeocode(lat, lng);
      if (address && locationInput) {
        locationInput.value = address;
        this.userLocation.address = address;
      }

      // Update map
      if (this.map) {
        // Remove existing markers
        this.map.eachLayer((layer) => {
          if (layer instanceof window.L.Marker) {
            this.map!.removeLayer(layer);
          }
        });

        // Add new marker
        const marker = window.L.marker([lat, lng]).addTo(this.map);
        marker.bindPopup(
          `📍 Selected location${address ? `<br><strong>${address}</strong>` : ""}`,
        );

        // Center map on location
        this.map.setView([lat, lng], Math.max(this.map.getZoom(), 15));
      }

      // Update feedback
      const feedback = document.getElementById(
        "location-feedback",
      ) as HTMLElement;
      if (feedback) {
        feedback.innerHTML = `
          <div class="location-success">
            ✅ Location set: ${address || `${lat.toFixed(4)}, ${lng.toFixed(4)}`}
            ${accuracy ? `<br><small>Accuracy: ${Math.round(accuracy)}m</small>` : ""}
          </div>
        `;
        feedback.className = "form-feedback success";
      }
    } catch (error) {
      console.error("Set location error:", error);
      this.showStatus("Failed to set location", "error");
    }
  }

  private async reverseGeocode(
    lat: number,
    lng: number,
  ): Promise<string | null> {
    try {
      const response = await fetch(
        `https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lng}&format=json&addressdetails=1`,
      );

      if (!response.ok) return null;

      const data: GeolocationResult = await response.json();
      return data.display_name || null;
    } catch (error) {
      console.error("Reverse geocoding error:", error);
      return null;
    }
  }

  private geocodeLocation(query: string): void {
    if (!query.trim()) return;

    // Clear previous timeout
    if (this.geocodeTimeout) {
      clearTimeout(this.geocodeTimeout);
    }

    // Debounce geocoding requests
    this.geocodeTimeout = window.setTimeout(async () => {
      try {
        const response = await fetch(
          `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(query)}&format=json&limit=1&addressdetails=1`,
        );

        if (!response.ok) return;

        const data: GeolocationResult[] = await response.json();
        if (data.length > 0) {
          const result = data[0];
          const lat = parseFloat(result.lat);
          const lng = parseFloat(result.lon);

          if (!isNaN(lat) && !isNaN(lng)) {
            await this.setLocation(lat, lng);
          }
        }
      } catch (error) {
        console.error("Geocoding error:", error);
      }
    }, 500);
  }

  private async submitIssue(event: Event): Promise<void> {
    event.preventDefault();

    if (!this.session) {
      this.showStatus("Please login to report issues", "error");
      return;
    }

    const form = event.target as HTMLFormElement;
    const formData = new FormData(form);

    const title = formData.get("title") as string;
    const description = formData.get("description") as string;
    const category = formData.get("category") as string;
    const hashtags = formData.get("hashtags") as string;
    const lat = formData.get("lat") as string;
    const lng = formData.get("lng") as string;

    if (!title.trim() || !description.trim()) {
      this.showStatus("Please fill in title and description", "error");
      return;
    }

    const issue: Issue = {
      id: Date.now().toString(),
      title: title.trim(),
      description: description.trim(),
      category: category || "other",
      location: this.userLocation || undefined,
      hashtags: this.parseHashtags(hashtags),
      status: "open",
      createdAt: new Date().toISOString(),
      author: this.session.handle,
    };

    try {
      this.showStatus("Submitting issue...", "info");

      // Try to create ATProto record if not demo mode
      if (!this.session.isDemo) {
        await this.createIssueRecord(issue);
      }

      // Store locally for demo purposes
      this.storeIssueLocally(issue);

      // Reset form
      form.reset();
      this.userLocation = null;

      // Clear location feedback
      const feedback = document.getElementById(
        "location-feedback",
      ) as HTMLElement;
      if (feedback) {
        feedback.innerHTML = "";
        feedback.className = "form-feedback";
      }

      // Clear map markers
      if (this.map) {
        this.map.eachLayer((layer) => {
          if (layer instanceof window.L.Marker) {
            this.map!.removeLayer(layer);
          }
        });
      }

      this.showStatus("Issue reported successfully! 🎉", "success");
      this.loadIssues(); // Refresh issues list
    } catch (error) {
      console.error("Submit issue error:", error);
      this.showStatus("Failed to submit issue. Please try again.", "error");
    }
  }

  private parseHashtags(hashtagsString: string): string[] {
    if (!hashtagsString) return [];

    return hashtagsString
      .split(/\s+/)
      .filter((tag) => tag.startsWith("#"))
      .map((tag) => tag.toLowerCase())
      .filter((tag, index, arr) => arr.indexOf(tag) === index); // Remove duplicates
  }

  private async createIssueRecord(issue: Issue): Promise<void> {
    try {
      if (!blueskyAuth.isAuthenticated()) {
        throw new Error("Not authenticated");
      }

      // Create ATProto record (this would be the actual implementation)
      // For now, we'll simulate this
      const record = {
        $type: "app.bsky.feed.post",
        text: `🚨 Issue Report: ${issue.title}\n\n${issue.description}\n\n${issue.hashtags.join(" ")} #wukkie`,
        createdAt: issue.createdAt,
        // In a real implementation, we'd include location data and proper record structure
      };

      // This would actually create the record via the authenticated XRPC client
      console.log("Would create ATProto record:", record);
    } catch (error) {
      console.error("ATProto record creation error:", error);
      // Don't throw - we'll fall back to local storage
    }
  }

  private storeIssueLocally(issue: Issue): void {
    try {
      const existing = localStorage.getItem("wukkie_issues");
      const issues = existing ? JSON.parse(existing) : [];
      issues.unshift(issue);

      // Keep only the last 50 issues
      if (issues.length > 50) {
        issues.splice(50);
      }

      localStorage.setItem("wukkie_issues", JSON.stringify(issues));
    } catch (error) {
      console.error("Local storage error:", error);
    }
  }

  private loadIssues(): void {
    try {
      // For now, load from local storage
      // In the future, this would query ATProto records
      this.loadLocalIssues();
    } catch (error) {
      console.error("Load issues error:", error);
    }
  }

  private loadLocalIssues(): void {
    const stored = localStorage.getItem("wukkie_issues");
    const issues: Issue[] = stored ? JSON.parse(stored) : [];
    this.displayIssues(issues);
  }

  private displayIssues(issues: Issue[]): void {
    const issuesList = document.getElementById("issues-list") as HTMLElement;
    if (!issuesList) return;

    if (issues.length === 0) {
      issuesList.innerHTML = `
        <div class="no-issues">
          <div class="no-issues-icon">📋</div>
          <div class="no-issues-text">No issues reported yet.</div>
          <div class="no-issues-subtext">Be the first to report an issue!</div>
        </div>
      `;
      return;
    }

    issuesList.innerHTML = issues
      .map((issue) => {
        const distance =
          this.userLocation && issue.location
            ? this.calculateDistance(this.userLocation, issue.location)
            : null;

        const timeAgo = this.formatTimeAgo(new Date(issue.createdAt));

        return `
        <div class="issue-item">
          <div class="issue-header">
            <div class="issue-title">${this.escapeHtml(issue.title)}</div>
            ${distance ? `<div class="issue-distance">${distance}</div>` : ""}
          </div>
          <div class="issue-description">${this.escapeHtml(issue.description)}</div>
          <div class="issue-meta">
            <div class="issue-hashtags">
              ${issue.hashtags.map((tag) => `<span class="hashtag">${this.escapeHtml(tag)}</span>`).join("")}
            </div>
            <div class="issue-author">${timeAgo} • @${this.escapeHtml(issue.author)}</div>
          </div>
          <div class="issue-actions">
            <button class="action-btn" onclick="wukkie.voteIssue('${issue.id}')">👍 ${Math.floor(Math.random() * 50)}</button>
            <button class="action-btn" onclick="wukkie.commentOnIssue('${issue.id}')">💬 ${Math.floor(Math.random() * 10)}</button>
            ${issue.location ? `<button class="action-btn" onclick="wukkie.showOnMap('${issue.id}')">📍 View</button>` : ""}
          </div>
        </div>
      `;
      })
      .join("");
  }

  private calculateDistance(from: Location, to: Location): string {
    const R = 6371; // Earth's radius in kilometers
    const dLat = ((to.lat - from.lat) * Math.PI) / 180;
    const dLng = ((to.lng - from.lng) * Math.PI) / 180;

    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos((from.lat * Math.PI) / 180) *
        Math.cos((to.lat * Math.PI) / 180) *
        Math.sin(dLng / 2) *
        Math.sin(dLng / 2);

    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const distance = R * c;

    if (distance < 1) {
      return `${Math.round(distance * 1000)}m away`;
    } else {
      return `${distance.toFixed(1)}km away`;
    }
  }

  private formatTimeAgo(date: Date): string {
    const now = new Date();
    const diffMs = now.getTime() - date.getTime();
    const diffMins = Math.floor(diffMs / (1000 * 60));
    const diffHours = Math.floor(diffMins / 60);
    const diffDays = Math.floor(diffHours / 24);

    if (diffMins < 60) return `${diffMins} minutes ago`;
    if (diffHours < 24) return `${diffHours} hours ago`;
    if (diffDays < 7) return `${diffDays} days ago`;

    return date.toLocaleDateString();
  }

  private escapeHtml(text: string): string {
    const div = document.createElement("div");
    div.textContent = text;
    return div.innerHTML;
  }

  private showStatus(
    message: string,
    type: "success" | "error" | "info" = "info",
  ): void {
    const statusElement = document.getElementById(
      "status-message",
    ) as HTMLElement;
    if (!statusElement) return;

    statusElement.textContent = message;
    statusElement.className = `status-message ${type}`;
    statusElement.style.display = "block";

    // Auto-hide after 5 seconds
    setTimeout(() => {
      statusElement.style.display = "none";
    }, 5000);
  }

  // Public methods for button handlers
  public voteIssue(issueId: string): void {
    console.log("Vote on issue:", issueId);
    this.showStatus("Voting feature coming soon! 🗳️", "info");
  }

  public commentOnIssue(issueId: string): void {
    console.log("Comment on issue:", issueId);
    this.showStatus("Comments feature coming soon! 💬", "info");
  }

  public showOnMap(issueId: string): void {
    console.log("Show issue on map:", issueId);
    const stored = localStorage.getItem("wukkie_issues");
    const issues: Issue[] = stored ? JSON.parse(stored) : [];
    const issue = issues.find((i) => i.id === issueId);

    if (issue && issue.location && this.map) {
      this.map.setView([issue.location.lat, issue.location.lng], 16);
      this.showStatus(`Showing ${issue.title} on map 🗺️`, "success");
    }
  }

  public viewIssue(issueId: string): void {
    console.log("View issue details:", issueId);
    this.showStatus("Issue details view coming soon! 📋", "info");
  }

  /**
   * Helper method to add timeout to promises
   */
  private withTimeout<T>(
    promise: Promise<T>,
    timeoutMs: number,
    errorMessage: string,
  ): Promise<T> {
    return Promise.race([
      promise,
      new Promise<T>((_, reject) =>
        setTimeout(() => reject(new Error(errorMessage)), timeoutMs),
      ),
    ]);
  }

  /**
   * Show loading state
   */
  private showLoading(message: string = "Loading..."): void {
    console.log("🟢 [DEBUG] showLoading(): Called with message:", message);
    this.isLoading = true;
    const statusEl = document.getElementById("status-message") as HTMLElement;
    console.log("🟢 [DEBUG] showLoading(): Status element found:", !!statusEl);
    if (statusEl) {
      statusEl.innerHTML = `
        <div class="loading-indicator">
          <div class="loading-spinner"></div>
          <span>${message}</span>
        </div>
      `;
      statusEl.className = "status-message info";
      statusEl.style.display = "block";
    }

    // Disable all buttons during loading
    const buttons = document.querySelectorAll("button");
    buttons.forEach((button) => {
      button.disabled = true;
      button.classList.add("loading");
    });
  }

  /**
   * Hide loading state
   */
  private hideLoading(): void {
    this.isLoading = false;
    const statusEl = document.getElementById("status-message") as HTMLElement;
    if (statusEl) {
      statusEl.style.display = "none";
    }

    // Re-enable buttons
    const buttons = document.querySelectorAll("button");
    buttons.forEach((button) => {
      button.disabled = false;
      button.classList.remove("loading");
    });

    // Update auth UI to ensure correct button states
    this.updateAuthUI(this.session !== null);
  }
}

// Initialize app when DOM is loaded
console.log("🟢 [DEBUG] DOM readyState:", document.readyState);
let wukkie: WukkieApp;

if (document.readyState === "loading") {
  console.log("🟢 [DEBUG] DOM still loading, waiting for DOMContentLoaded");
  document.addEventListener("DOMContentLoaded", () => {
    console.log("🟢 [DEBUG] DOMContentLoaded event fired, creating WukkieApp");
    try {
      wukkie = new WukkieApp();
      console.log("🟢 [DEBUG] WukkieApp created successfully");
    } catch (error) {
      console.error("❌ [DEBUG] Error creating WukkieApp:", error);
    }
  });
} else {
  console.log("🟢 [DEBUG] DOM already loaded, creating WukkieApp immediately");
  try {
    wukkie = new WukkieApp();
    console.log("🟢 [DEBUG] WukkieApp created successfully");
  } catch (error) {
    console.error("❌ [DEBUG] Error creating WukkieApp:", error);
  }
}

// Make wukkie available globally for button handlers
console.log("🟢 [DEBUG] Making wukkie globally available");
try {
  (window as any).wukkie = wukkie;
  console.log("🟢 [DEBUG] Global wukkie assignment complete");
} catch (error) {
  console.error("❌ [DEBUG] Error setting global wukkie:", error);
}
