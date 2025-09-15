// Early debug logging
console.log("🟢 [DEBUG] app.ts: File loading started");

// Import ATProto integration
import { ATProtoIssueManager, WukkieIssue } from "./atproto-integration";
import { LocationPrivacySystem } from "./location-privacy";
import { BskyAgent } from "@atproto/api";

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
  blueskyUri?: string; // URI of the Bluesky post if posted
  blueskyStatus?: "pending" | "posted" | "failed" | "local-only"; // Bluesky posting status
  lastEditedAt?: string; // Timestamp of last edit
  lat?: number; // Latitude for editing support
  lng?: number; // Longitude for editing support
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
  private atprotoManager?: ATProtoIssueManager;

  private taglines: string[] = [
    "oopsie woopsie de trein is stukkie wukkie...",
    "it's barely a respectable world as it is",
    "this is fine 🔥",
    "another day, another issue to fix",
    "The earth is but one country, and mankind its citizens.",
    "So powerful is the light of unity that it can illuminate the whole earth.",
    "The well-being of mankind, its peace and security, are unattainable unless and until its unity is firmly established.",
    "Let your vision be world-embracing, rather than confined to your own self.",
    "The diversity in the human family should be the cause of love and harmony.",
    "when something's broken, let's fix it together! 🚂",
    "bug tracker for the world (literally)",
    "because even the world needs debugging",
    "The betterment of the conditions of the people is the fundamental purpose of government.",
    "Regard ye the world as a man's body.",
    "All men have been created to carry forward an ever-advancing civilization.",
  ];

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

      // Set random tagline
      console.log("🟢 [DEBUG] init(): About to set random tagline");
      this.setRandomTagline();

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
    // Handle OAuth callback first, then session restore if needed (sequential to avoid race condition)
    setTimeout(async () => {
      let oauthHandled = false;

      try {
        console.log("🔍 Checking for OAuth callback...");
        oauthHandled = await Promise.race([
          blueskyAuth.handleOAuthCallback(),
          new Promise<boolean>((_, reject) =>
            setTimeout(() => reject(new Error("OAuth callback timeout")), 5000),
          ),
        ]);

        if (oauthHandled) {
          console.log("✅ OAuth callback handled successfully");
          return; // Skip session restore since OAuth login succeeded
        }
      } catch (error) {
        console.error("OAuth callback error:", error);
        if (!error.message.includes("timeout")) {
          this.showStatus("Login failed. Please try again.", "error");
        }
      }

      // Only try to restore session if OAuth callback didn't handle authentication
      if (!oauthHandled) {
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
      }
    }, 100);
  }

  private handleAuthStateChange(authState: AuthState): void {
    if (authState.isAuthenticated && authState.session) {
      this.session = {
        accessJwt: authState.session.accessJwt,
        refreshJwt: authState.session.refreshJwt,
        handle: authState.session.handle,
        did: authState.session.did,
      };

      // Initialize ATProto manager when authenticated
      const agent = new BskyAgent({ service: "https://bsky.social" });
      agent.session = authState.session;
      this.atprotoManager = new ATProtoIssueManager(agent);
      console.log("🟢 ATProto manager initialized");

      this.updateAuthUI(true);
      this.loginModal.hide();
      this.showStatus(`Welcome back, @${this.session.handle}! 🎉`, "success");
    } else {
      this.session = null;
      this.atprotoManager = undefined;
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
    const postToBluesky = formData.get("postToBluesky") === "on";
    const editingId = form.dataset.editingId;

    if (!title.trim() || !description.trim()) {
      this.showStatus("Please fill in title and description", "error");
      return;
    }

    const issue: Issue & { postToBluesky: boolean } = {
      id: editingId || Date.now().toString(),
      title: title.trim(),
      description: description.trim(),
      category: category || "other",
      location: this.userLocation || undefined,
      hashtags: this.parseHashtags(hashtags),
      status: "open",
      createdAt: editingId
        ? this.getIssueById(editingId)?.createdAt || new Date().toISOString()
        : new Date().toISOString(),
      author: this.session.handle,
      postToBluesky: postToBluesky,
      blueskyStatus: postToBluesky ? "pending" : "local-only",
      lat: lat ? parseFloat(lat) : undefined,
      lng: lng ? parseFloat(lng) : undefined,
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
      form.removeAttribute("data-editing-id");
      this.userLocation = null;

      // Reset submit button text
      const submitBtn = document.getElementById(
        "submit-btn",
      ) as HTMLButtonElement;
      if (submitBtn) submitBtn.textContent = "Report Issue";

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
      .split(" ")
      .filter((tag) => tag.trim() && tag.startsWith("#"))
      .map((tag) => tag.toLowerCase())
      .filter((tag, index, arr) => arr.indexOf(tag) === index); // Remove duplicates
  }

  private async createIssueRecord(
    issue: Issue & { postToBluesky?: boolean },
  ): Promise<void> {
    try {
      if (!blueskyAuth.isAuthenticated() || !this.atprotoManager) {
        console.warn("Not authenticated or ATProto manager not initialized");
        return;
      }

      // Convert to privacy location
      const privacyLocation = LocationPrivacySystem.fromCoordinates(
        issue.lat,
        issue.lng,
        issue.location || "Unknown location",
      );

      // Create WukkieIssue from the form data
      const wukkieIssue: Omit<WukkieIssue, "id" | "createdAt" | "blueskyUri"> =
        {
          title: issue.title,
          description: issue.description,
          category: issue.category,
          priority: "medium", // Default priority
          status: "open",
          location: privacyLocation,
          hashtags: issue.hashtags,
        };

      if (issue.postToBluesky) {
        // Create the issue with Bluesky posting
        const createdIssue = await this.atprotoManager.createIssue(
          wukkieIssue,
          true,
          {
            includeLocation: true,
            linkToIssue: true,
          },
        );

        console.log("✅ Successfully created ATProto issue:", createdIssue);

        if (createdIssue.blueskyUri) {
          issue.blueskyUri = createdIssue.blueskyUri;
          issue.blueskyStatus = "posted";
          this.showStatus(
            "Issue posted to Bluesky successfully! 📢",
            "success",
          );
        } else {
          issue.blueskyStatus = "failed";
          this.showStatus(
            "Issue created locally (Bluesky post failed)",
            "error",
          );
        }
      } else {
        // Store locally only
        console.log("📝 Storing issue locally only (user choice)");
        issue.blueskyStatus = "local-only";
        this.showStatus(
          "Issue saved locally only (not shared on Bluesky)",
          "info",
        );
      }
    } catch (error) {
      console.error("ATProto record creation error:", error);
      issue.blueskyStatus = "failed";
      this.showStatus(
        "Failed to post to Bluesky, but issue saved locally",
        "error",
      );
      // Don't throw - we'll fall back to local storage
    }
  }

  private storeIssueLocally(issue: Issue): void {
    try {
      const existing = localStorage.getItem("wukkie_issues");
      const issues = existing ? JSON.parse(existing) : [];

      // Check if this is an update (editing existing issue)
      const existingIndex = issues.findIndex((i: Issue) => i.id === issue.id);

      if (existingIndex !== -1) {
        // Update existing issue
        issues[existingIndex] = issue;
      } else {
        // Add new issue to the beginning
        issues.unshift(issue);

        // Keep only the last 50 issues
        if (issues.length > 50) {
          issues.splice(50);
        }
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

        // Determine Bluesky status display
        let blueskyStatus = "";
        let retryButtons = "";

        if (issue.blueskyStatus === "posted" && issue.blueskyUri) {
          blueskyStatus =
            '<span class="bluesky-status posted">📢 On Bluesky</span>';
        } else if (issue.blueskyStatus === "failed") {
          blueskyStatus =
            '<span class="bluesky-status failed">❌ Bluesky post failed</span>';
          retryButtons = `<button class="action-btn retry-btn" onclick="wukkie.retryBlueskyPost('${issue.id}')">🔄 Retry Bluesky</button>`;
        } else if (issue.blueskyStatus === "pending") {
          blueskyStatus =
            '<span class="bluesky-status pending">⏳ Posting to Bluesky...</span>';
        } else {
          blueskyStatus =
            '<span class="bluesky-status local-only">📝 Local only</span>';
          if (this.session && !this.session.isDemo) {
            retryButtons = `<button class="action-btn post-btn" onclick="wukkie.postToBluesky('${issue.id}')">📢 Post to Bluesky</button>`;
          }
        }

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
            <div class="issue-author">${timeAgo} • @${this.escapeHtml(issue.author)} ${blueskyStatus}</div>
          </div>
          <div class="issue-actions">
            <button class="action-btn" onclick="wukkie.voteIssue('${issue.id}')">👍 ${Math.floor(Math.random() * 50)}</button>
            <button class="action-btn" onclick="wukkie.commentOnIssue('${issue.id}')">💬 ${Math.floor(Math.random() * 10)}</button>
            ${issue.location ? `<button class="action-btn" onclick="wukkie.showOnMap('${issue.id}')">📍 View</button>` : ""}
            <button class="action-btn edit-btn" onclick="wukkie.editIssue('${issue.id}')">✏️ Edit</button>
            ${retryButtons}
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

  public async retryBlueskyPost(issueId: string): Promise<void> {
    console.log("Retry Bluesky post for issue:", issueId);

    if (!this.session || this.session.isDemo) {
      this.showStatus("Please login to post to Bluesky", "error");
      return;
    }

    if (!this.atprotoManager) {
      this.showStatus("Bluesky connection not available", "error");
      return;
    }

    const issue = this.getIssueById(issueId);
    if (!issue) {
      this.showStatus("Issue not found", "error");
      return;
    }

    try {
      this.showStatus("Retrying Bluesky post...", "info");
      issue.blueskyStatus = "pending";
      this.updateIssueInStorage(issue);
      this.loadIssues(); // Refresh display

      await this.createIssueRecord({ ...issue, postToBluesky: true });
    } catch (error) {
      console.error("Retry Bluesky post error:", error);
      issue.blueskyStatus = "failed";
      this.updateIssueInStorage(issue);
      this.loadIssues();
    }
  }

  public async postToBluesky(issueId: string): Promise<void> {
    console.log("Post to Bluesky for issue:", issueId);

    if (!this.session || this.session.isDemo) {
      this.showStatus("Please login to post to Bluesky", "error");
      return;
    }

    const issue = this.getIssueById(issueId);
    if (!issue) {
      this.showStatus("Issue not found", "error");
      return;
    }

    if (issue.blueskyStatus === "posted") {
      this.showStatus("Issue already posted to Bluesky", "info");
      return;
    }

    try {
      this.showStatus("Posting to Bluesky...", "info");
      issue.blueskyStatus = "pending";
      this.updateIssueInStorage(issue);
      this.loadIssues(); // Refresh display

      await this.createIssueRecord({ ...issue, postToBluesky: true });
    } catch (error) {
      console.error("Post to Bluesky error:", error);
      issue.blueskyStatus = "failed";
      this.updateIssueInStorage(issue);
      this.loadIssues();
    }
  }

  public editIssue(issueId: string): void {
    console.log("Edit issue:", issueId);

    const issue = this.getIssueById(issueId);
    if (!issue) {
      this.showStatus("Issue not found", "error");
      return;
    }

    // Populate form with existing issue data
    const titleInput = document.getElementById("title") as HTMLInputElement;
    const descriptionTextarea = document.getElementById(
      "description",
    ) as HTMLTextAreaElement;
    const categorySelect = document.getElementById(
      "category",
    ) as HTMLSelectElement;
    const hashtagsInput = document.getElementById(
      "hashtags",
    ) as HTMLInputElement;
    const postToBlueskyCheckbox = document.getElementById(
      "post-to-bluesky",
    ) as HTMLInputElement;
    const locationInput = document.getElementById(
      "location",
    ) as HTMLInputElement;

    if (titleInput) titleInput.value = issue.title;
    if (descriptionTextarea) descriptionTextarea.value = issue.description;
    if (categorySelect) categorySelect.value = issue.category;
    if (hashtagsInput) hashtagsInput.value = issue.hashtags.join(" ");
    if (postToBlueskyCheckbox) {
      postToBlueskyCheckbox.checked = issue.blueskyStatus !== "local-only";
    }
    if (locationInput && issue.location) {
      locationInput.value = issue.location;
      this.userLocation = issue.location;
      // Update hidden lat/lng fields if available
      const latInput = document.getElementById("lat") as HTMLInputElement;
      const lngInput = document.getElementById("lng") as HTMLInputElement;
      if (latInput && issue.lat) latInput.value = issue.lat.toString();
      if (lngInput && issue.lng) lngInput.value = issue.lng.toString();
    }

    // Store the issue ID for update instead of create
    (
      document.getElementById("issue-form") as HTMLFormElement
    ).dataset.editingId = issueId;

    // Update submit button text
    const submitBtn = document.getElementById(
      "submit-btn",
    ) as HTMLButtonElement;
    if (submitBtn) submitBtn.textContent = "Update Issue";

    // Scroll to form
    document
      .getElementById("issue-form")
      ?.scrollIntoView({ behavior: "smooth" });

    this.showStatus(
      "Loaded issue for editing. Make your changes and submit.",
      "info",
    );
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
  private setRandomTagline(): void {
    try {
      const taglineElement = document.querySelector(".tagline") as HTMLElement;
      if (taglineElement) {
        const randomTagline =
          this.taglines[Math.floor(Math.random() * this.taglines.length)];
        taglineElement.textContent = randomTagline;
        console.log("🟢 [DEBUG] Set random tagline:", randomTagline);
      } else {
        console.warn("⚠️ [DEBUG] Tagline element not found");
      }
    } catch (error) {
      console.error("❌ [DEBUG] Error setting random tagline:", error);
    }
  }

  /**
   * Get issue by ID from local storage
   */
  private getIssueById(issueId: string): Issue | null {
    try {
      const stored = localStorage.getItem("wukkie_issues");
      const issues: Issue[] = stored ? JSON.parse(stored) : [];
      return issues.find((issue) => issue.id === issueId) || null;
    } catch (error) {
      console.error("Error getting issue by ID:", error);
      return null;
    }
  }

  /**
   * Update issue in local storage
   */
  private updateIssueInStorage(updatedIssue: Issue): void {
    try {
      const existing = localStorage.getItem("wukkie_issues");
      const issues: Issue[] = existing ? JSON.parse(existing) : [];

      const index = issues.findIndex((issue) => issue.id === updatedIssue.id);
      if (index !== -1) {
        issues[index] = updatedIssue;
        localStorage.setItem("wukkie_issues", JSON.stringify(issues));
      }
    } catch (error) {
      console.error("Error updating issue in storage:", error);
    }
  }

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
