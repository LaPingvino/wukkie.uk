// Early debug logging
console.log("🟢 [DEBUG] app.ts: File loading started");

// Import privacy location system and ATProto integration
import {
  LocationPrivacySystem,
  PrivacyLocation,
  createPrivacyLocation,
  extractGeoHashtags,
  isValidGeoHashtag,
  getLocationTooltip,
} from "./location-privacy";

import {
  ATProtoIssueManager,
  WukkieIssue,
  BlueskyPostOptions,
} from "./atproto-integration";

import { RichText, BskyAgent } from "@atproto/api";

// Type definitions
interface BlueskySession {
  accessJwt: string;
  refreshJwt: string;
  handle: string;
  did: string;
  isDemo?: boolean;
}

interface Issue {
  id?: string;
  title: string;
  description: string;
  category: string;
  hashtags: string[];
  status: "open" | "in-progress" | "resolved";
  createdAt: string;
  author: string;
  blueskyUri?: string; // URI of the Bluesky post if posted
  blueskyStatus?: "pending" | "posted" | "failed" | "local-only"; // Bluesky posting status
  lastEditedAt?: string; // Timestamp of last edit
  likes?: number; // Number of likes
  comments?: Comment[]; // Array of comments
}

interface Comment {
  id: string;
  text: string;
  author: string;
  createdAt: string;
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
  private currentPrivacyLocation: PrivacyLocation | null = null;
  private session: BlueskySession | null = null;
  private geocodeTimeout?: number;
  private loginModal!: LoginModal;
  private authUnsubscribe?: () => void;
  private isLoading: boolean = false;
  private atprotoManager: ATProtoIssueManager | null = null;
  private allIssues: Issue[] = [];
  private currentTagFilter: string | null = null;

  private taglines: string[] = [
    "oopsie woopsie de trein is stukkie wukkie...",
    "it's barely a respectable world to begin with anyway...",
    "this is fine 🔥",
    "another day, another issue to fix",
    "fixing the world, one bug report at a time ✨",
    "\"The earth is but one country, and mankind its citizens.\" - Bahá'u'lláh",
    "making the world a little less broken 🌍",
    "\"So powerful is the light of unity that it can illuminate the whole earth.\" - Bahá'u'lláh",
    "\"The well-being of mankind, its peace and security, are unattainable unless and until its unity is firmly established.\" - Bahá'u'lláh",
    "Let your vision be world-embracing, rather than confined to your own self.",
    "The diversity in the human family should be the cause of love and harmony.",
    "when something's broken, let's fix it together! 🚂",
    "when life gives you bugs, make bug reports 🐛",
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
      console.error(
        "❌ [DEBUG] Error in showLoading:",
        error instanceof Error ? error.message : error,
      );
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

      // Setup privacy location UI
      this.setupPrivacyLocationUI();

      // Set up authentication state listener
      console.log("🟢 [DEBUG] init(): About to setup auth state listener");
      try {
        // Debug OAuth metadata being served
        this.debugOAuthMetadata();

        this.authUnsubscribe = blueskyAuth.onStateChange(async (authState) => {
          console.log("🟢 [DEBUG] Auth state changed:", authState);
          await this.handleAuthStateChange(authState);
        });
        console.log("🟢 [DEBUG] init(): Auth state listener setup complete");
      } catch (error) {
        console.error("❌ Failed to setup auth state listener:", error);
      }

      // Load issues and hide loading immediately
      console.log("🟢 [DEBUG] init(): About to load issues");
      await this.loadIssues();

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
        if (!(error instanceof Error) || !error.message.includes("timeout")) {
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

  private async handleAuthStateChange(authState: AuthState): Promise<void> {
    if (authState.isAuthenticated && authState.session) {
      // Store session for persistence
      this.session = {
        accessJwt: authState.session.accessJwt,
        refreshJwt: authState.session.refreshJwt,
        handle: authState.session.handle,
        did: authState.session.did,
      };

      // Initialize ATProto manager when authenticated
      try {
        if (authState.session.isDemo) {
          // Demo mode - create manager without authentication
          console.log("🎭 Using demo mode authentication");
          const agent = new BskyAgent({ service: "https://bsky.social" });
          this.atprotoManager = new ATProtoIssueManager(agent);
          console.log("🟢 ATProto manager initialized (demo mode)");
        } else {
          // Try to determine if this is OAuth or traditional ATProto session
          // OAuth sessions will have an XRPC client available in authState
          const isOAuthToken =
            authState.xrpc !== null && authState.xrpc !== undefined;

          if (isOAuthToken) {
            console.log("🔐 OAuth authentication detected");
            // For OAuth, we need to create an agent with the OAuth tokens
            // The authState.xrpc should contain the authenticated XRPC client
            if (authState.xrpc) {
              console.log("🟢 Using OAuth XRPC client for ATProto operations");
              this.atprotoManager = new ATProtoIssueManager(
                null,
                authState.xrpc,
                "https://wukkie.uk",
                authState.session.did,
              );
              console.log("🟢 ATProto manager initialized with OAuth");
            } else {
              console.warn("⚠️ OAuth XRPC client not available");
              this.atprotoManager = null;
              this.showStatus(
                `Welcome back, @${this.session.handle}! Bluesky posting temporarily unavailable.`,
                "info",
              );
            }
          } else {
            // Traditional ATProto session - try to resume
            console.log("🔐 Using ATProto session authentication");
            const agent = new BskyAgent({ service: "https://bsky.social" });
            await agent.resumeSession(authState.session);
            this.atprotoManager = new ATProtoIssueManager(agent);
            console.log("🟢 ATProto manager initialized");
          }
        }
      } catch (error) {
        console.error("⚠️ Failed to initialize ATProto manager:", error);
        this.atprotoManager = null;
        this.showStatus(
          `Welcome back, @${this.session.handle}! Some Bluesky features may be limited.`,
          "info",
        );
      }

      // Update demo issues to current user if transitioning from demo
      await this.updateDemoIssuesOnLogin();

      // Update ATProto manager with current user handle
      if (this.atprotoManager && this.session.handle) {
        this.atprotoManager.setUserHandle(this.session.handle);
      }

      this.updateAuthUI(true);
      this.loginModal.hide();

      // Only show generic success message if we haven't already shown a more specific one
      if (this.atprotoManager !== null || authState.session.isDemo) {
        this.showStatus(`Welcome back, @${this.session.handle}! 🎉`, "success");
      }

      // Reload issues to trigger network search with authentication
      console.log(
        "🔄 Reloading issues after authentication to trigger network search...",
      );
      await this.loadIssues();
    } else {
      this.session = null;
      this.atprotoManager = null;
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

    // Title click to return home
    const titleElement = document.querySelector("h1");
    titleElement?.addEventListener("click", () => {
      // Clear form and reload issues to return to main view
      const form = document.getElementById("issue-form") as HTMLFormElement;
      form?.reset();
      this.loadIssues().catch(console.error);
      // Scroll to top
      window.scrollTo({ top: 0, behavior: "smooth" });
    });

    // Issue form
    const issueForm = document.getElementById("issue-form") as HTMLFormElement;
    const getLocationBtn = document.getElementById(
      "get-location",
    ) as HTMLButtonElement;

    issueForm?.addEventListener("submit", (e) => this.submitIssue(e));
    getLocationBtn?.addEventListener("click", () => this.getCurrentLocation());

    // Location input for manual entry and geo hashtag parsing
    const locationInput = document.getElementById(
      "location",
    ) as HTMLInputElement;
    locationInput?.addEventListener("input", (e) => this.parseLocationInput(e));

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
        this.onMapClick(e);
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
      handle: "demo-user.invalid",
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

  private setupPrivacyLocationUI(): void {
    // Privacy info and location label input are now included in HTML
    // This method is kept for future privacy-related setup if needed
  }

  private async getCurrentLocation(): Promise<void> {
    console.log("🟢 [DEBUG] getCurrentLocation: Starting location retrieval");
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
        '<div class="location-loading">📍 Getting your approximate area...</div>';
      feedback.className = "form-feedback loading";
    }

    try {
      // Get location label if provided
      const labelInput = document.getElementById(
        "location-label",
      ) as HTMLInputElement;
      const label = labelInput?.value || undefined;
      console.log("🟢 [DEBUG] getCurrentLocation: Label:", label);

      // Get precise coordinates first
      console.log(
        "🟢 [DEBUG] getCurrentLocation: Getting position from browser",
      );
      const position = await new Promise<GeolocationPosition>(
        (resolve, reject) => {
          navigator.geolocation.getCurrentPosition(resolve, reject, {
            enableHighAccuracy: false, // We don't need high accuracy
            timeout: 10000,
            maximumAge: 300000, // 5 minutes cache
          });
        },
      );

      const { latitude, longitude } = position.coords;
      console.log(
        "🟢 [DEBUG] getCurrentLocation: Got coordinates:",
        latitude,
        longitude,
      );

      if (!latitude || !longitude || isNaN(latitude) || isNaN(longitude)) {
        throw new Error(
          `Invalid coordinates received: lat=${latitude}, lng=${longitude}`,
        );
      }

      // Use the privacy system to get current location
      console.log("🟢 [DEBUG] getCurrentLocation: Creating privacy location");
      const privacyLocation =
        await LocationPrivacySystem.createFromCurrentLocation(label);
      console.log(
        "🟢 [DEBUG] getCurrentLocation: Privacy location created:",
        privacyLocation,
      );

      if (!privacyLocation || !privacyLocation.geoHashtag) {
        throw new Error("Failed to create privacy location");
      }

      // Set the privacy location
      console.log(
        "🟢 [DEBUG] getCurrentLocation: Setting privacy location with coords:",
        latitude,
        longitude,
      );
      await this.setPrivacyLocation(privacyLocation, latitude, longitude);

      this.showStatus(
        "Privacy location set successfully! Your exact location is protected.",
        "success",
      );
    } catch (error) {
      console.error("Privacy location error:", error);
      let message = "Unable to get your location. ";

      if (error instanceof GeolocationPositionError) {
        switch (error.code) {
          case error.PERMISSION_DENIED:
            message +=
              "Location access was denied. Please allow location access and try again.";
            break;
          case error.POSITION_UNAVAILABLE:
            message +=
              "Location information is unavailable. Please try again later.";
            break;
          case error.TIMEOUT:
            message += "Location request timed out. Please try again.";
            break;
        }
      } else {
        message +=
          error instanceof Error ? error.message : "Unknown error occurred.";
      }

      if (feedback) {
        feedback.innerHTML = `<div class="location-error">${message}</div>`;
        feedback.className = "form-feedback error";
      }

      this.showStatus(message, "error");
    } finally {
      // Restore button state
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
      // Update form inputs - using privacy-first approach
      const locationInput = document.getElementById(
        "location",
      ) as HTMLInputElement;

      // Reverse geocode to get address
      const address = await this.reverseGeocode(lat, lng);
      if (address && locationInput) {
        locationInput.value = address;
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
    const postToBluesky = formData.get("post-to-bluesky") === "on";
    const editingId = form.dataset.editingId;

    if (!title.trim() || !description.trim()) {
      this.showStatus("Please fill in title and description", "error");
      return;
    }

    // Parse hashtags and add geo hashtag if we have a privacy location
    const parsedHashtags = this.parseHashtags(hashtags);

    // Add current privacy location if not already in hashtags
    if (this.currentPrivacyLocation?.geoHashtag) {
      if (!parsedHashtags.includes(this.currentPrivacyLocation.geoHashtag)) {
        parsedHashtags.unshift(this.currentPrivacyLocation.geoHashtag);
      }
    }

    // Also check for geo hashtags directly entered in location input
    const locationInput = document.getElementById(
      "location",
    ) as HTMLInputElement;
    if (locationInput?.value) {
      const inputGeoHashtags = locationInput.value
        .split(/\s+/)
        .filter((tag) => LocationPrivacySystem.isValidGeoHashtag(tag))
        .filter((tag) => !parsedHashtags.includes(tag));
      parsedHashtags.unshift(...inputGeoHashtags);
    }

    const issue: Issue & { postToBluesky: boolean } = {
      id: editingId || Date.now().toString(),
      title: title.trim(),
      description: description.trim(),
      category: category || "other",
      hashtags: parsedHashtags,
      status: "open",
      createdAt: editingId
        ? this.findIssueById(editingId)?.createdAt || new Date().toISOString()
        : new Date().toISOString(),
      author: this.session.handle,
      postToBluesky: postToBluesky,
      blueskyStatus: postToBluesky ? "pending" : "local-only",
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
      this.currentPrivacyLocation = null;

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
      await this.loadIssues(); // Refresh issues list
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

      // Extract all geo hashtags from hashtags array or use current privacy location
      const geoHashtags = issue.hashtags.filter((tag) =>
        LocationPrivacySystem.isValidGeoHashtag(tag),
      );
      let privacyLocation = this.currentPrivacyLocation;

      if (!privacyLocation && geoHashtags.length > 0) {
        // Use the first geo hashtag as primary location for ATProto
        const area = LocationPrivacySystem.parseGeoHashtag(geoHashtags[0]);
        if (area) {
          // Create proper PrivacyLocation from area center
          privacyLocation = createPrivacyLocation(
            area.center.lat,
            area.center.lng,
            `Area ${geoHashtags[0]}`,
          );
        }
      }

      if (!privacyLocation) {
        throw new Error("No valid location found for issue");
      }

      // Create WukkieIssue from the form data
      const wukkieIssue: Omit<WukkieIssue, "id" | "createdAt" | "blueskyUri"> =
        {
          title: issue.title,
          description: issue.description,
          category: issue.category,
          priority: "medium", // Default priority
          status: "open",
          location: privacyLocation,
          hashtags: geoHashtags,
          author: issue.author,
        };

      if (issue.postToBluesky && this.atprotoManager) {
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
      } else if (issue.postToBluesky && !this.atprotoManager) {
        // User wanted to post to Bluesky but ATProto manager not available
        console.log(
          "📝 Bluesky posting requested but not available due to OAuth limitations",
        );
        issue.blueskyStatus = "local-only";
        this.showStatus(
          "Issue saved locally (Bluesky posting not available with OAuth authentication)",
          "info",
        );
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

  private async loadIssues(): Promise<void> {
    try {
      console.log("🔍 loadIssues() called");

      // Load local issues first
      const stored = localStorage.getItem("wukkie_issues");
      const localIssues: Issue[] = stored ? JSON.parse(stored) : [];

      let networkIssues: Issue[] = [];

      if (this.atprotoManager && blueskyAuth.isAuthenticated()) {
        console.log(
          "✅ Conditions met for authenticated network search - calling loadNetworkIssues()",
        );
        networkIssues = await this.loadNetworkIssues();
        await this.loadNetworkComments();
      } else if (!blueskyAuth.isAuthenticated()) {
        console.log("🌐 Not authenticated - attempting public issue discovery");
        networkIssues = await this.loadPublicIssues();
      } else {
        console.log("⚠️ Network search skipped:", {
          hasAtprotoManager: !!this.atprotoManager,
          isAuthenticated: blueskyAuth.isAuthenticated(),
        });
      }

      // Merge all issues (local first, then network)
      const allIssues = [...localIssues, ...networkIssues];

      // Sort by creation date (newest first)
      allIssues.sort(
        (a, b) =>
          new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
      );

      // Display merged results
      this.displayIssues(allIssues);
      this.displayIssueStats(allIssues);
    } catch (error) {
      console.error("Load issues error:", error);
    }
  }

  private async loadNetworkIssues(): Promise<Issue[]> {
    try {
      console.log(
        "🔍 Loading issues from ATProto network using enhanced search...",
      );

      if (!this.atprotoManager) {
        console.log("⚠️ ATProto manager not available");
        return [];
      }

      // Set user handle for personalized search
      if (this.session && this.session.handle) {
        this.atprotoManager.setUserHandle(this.session.handle);
      }

      // Set current location if available
      if (this.currentPrivacyLocation) {
        this.atprotoManager.setCurrentLocation(this.currentPrivacyLocation);
      }

      // Use enhanced multi-strategy search
      const networkIssues = await this.atprotoManager.searchIssues({
        hashtags: ["#wukkie"],
      });

      console.log(
        `✅ Found ${networkIssues.length} network issues (enhanced search)`,
      );

      // Extract author from ATProto record when possible
      const convertedIssues: Issue[] = networkIssues.map((wissue) => {
        // Try to extract author from blueskyUri or use handle from session
        let author = "network-user";
        if (wissue.blueskyUri) {
          // Extract DID or handle from URI: at://did:plc:xyz/app.bsky.feed.post/123
          const uriMatch = wissue.blueskyUri.match(/at:\/\/([^\/]+)/);
          if (
            uriMatch &&
            this.session &&
            wissue.blueskyUri.includes(this.session.did)
          ) {
            author = this.session.handle;
          }
        }

        return {
          id: wissue.id,
          title: wissue.title,
          description: wissue.description,
          category: wissue.category,
          hashtags: wissue.hashtags,
          status:
            wissue.status === "in_progress"
              ? "in-progress"
              : wissue.status === "closed"
                ? "resolved"
                : wissue.status,
          createdAt: wissue.createdAt,
          author,
          blueskyUri: wissue.blueskyUri,
          blueskyStatus: "posted",
        };
      });

      return convertedIssues;
    } catch (error) {
      console.error("Failed to load network issues:", error);
      return [];
    }
  }

  /**
   * Load public issues for unauthenticated users using public Bluesky API
   */
  private async loadPublicIssues(): Promise<Issue[]> {
    try {
      console.log("🔍 Loading public issues from Bluesky network...");

      // Use Cloudflare Worker proxy to avoid CORS issues
      const targetUrl = "https://api.bsky.app/xrpc/app.bsky.feed.searchPosts";
      const searchParams = new URLSearchParams({
        q: "wukkie",
        limit: "20",
        sort: "latest",
      });

      const proxyUrl = `/api/bluesky-proxy?url=${encodeURIComponent(`${targetUrl}?${searchParams}`)}`;
      const response = await fetch(proxyUrl);

      if (!response.ok) {
        if (response.status === 403) {
          console.warn(
            "🚫 Bluesky public API is currently restricted (403 Forbidden)",
          );
          console.warn(
            "ℹ️  This is a known issue - public search API should work without auth but currently doesn't",
          );
          console.warn(
            "🔄 Falling back to local issues only. Login to access network features.",
          );
        } else {
          console.warn(
            "Public API search failed:",
            response.status,
            response.statusText,
          );
        }
        return [];
      }

      const data: any = await response.json();
      console.log(
        `🔍 Found ${data.posts?.length || 0} public posts with #wukkie`,
      );

      if (!data.posts || data.posts.length === 0) {
        console.log("📭 No public issues found");
        return [];
      }

      // Parse posts into issues
      const publicIssues: Issue[] = [];

      for (const post of data.posts) {
        try {
          const issue = this.parseBlueskyPostAsIssue(post);
          if (issue) {
            publicIssues.push(issue);
          }
        } catch (error) {
          console.warn("Failed to parse public post as issue:", error);
        }
      }

      if (publicIssues.length > 0) {
        console.log(`✅ Parsed ${publicIssues.length} public issues`);

        // Sort by creation date (newest first)
        publicIssues.sort(
          (a, b) =>
            new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
        );

        this.displayPublicIssueStats(publicIssues.length, 0);
        return publicIssues;
      } else {
        console.log("📭 No valid public issues found after parsing");
      }
      return [];
    } catch (error) {
      console.error("Failed to load public issues:", error);
      console.log("🔄 Falling back to local issues only");

      // Show a user-friendly message about the limitation
      const statusEl = document.getElementById("status");
      if (statusEl) {
        statusEl.innerHTML = `
          <div style="background: #fff3cd; color: #856404; padding: 12px; border-radius: 4px; border-left: 4px solid #ffc107; margin: 10px 0;">
            📡 <strong>Network Discovery Unavailable</strong><br>
            Public issue discovery is temporarily unavailable due to API restrictions.<br>
            <a href="#" onclick="document.getElementById('login-btn').click(); return false;" style="color: #856404; text-decoration: underline;">Login</a> to access full network features and discover issues from other users.
          </div>
        `;
      }
    }
    return [];
  }

  /**
   * Parse a Bluesky post into a Wukkie issue format
   */
  private parseBlueskyPostAsIssue(post: any): Issue | null {
    try {
      const text = post.record?.text || "";

      // Must contain #wukkie and issue emoji
      if (!text.includes("#wukkie") || !text.includes("🚨")) {
        return null;
      }

      const lines = text.split("\n");
      const titleLine = lines.find((line: string) => line.includes("🚨"));
      const title = titleLine?.replace("🚨", "").trim();

      if (!title) return null;

      // Extract description (lines between title and location/hashtags)
      const titleIndex = lines.findIndex((line: string) => line.includes("🚨"));
      const locationIndex = lines.findIndex((line: string) =>
        line.includes("📍"),
      );
      const hashtagIndex = lines.findIndex((line: string) =>
        line.includes("#wukkie"),
      );

      const descriptionEnd = Math.min(
        locationIndex === -1 ? Infinity : locationIndex,
        hashtagIndex === -1 ? Infinity : hashtagIndex,
      );

      const description = lines
        .slice(
          titleIndex + 1,
          descriptionEnd === Infinity ? undefined : descriptionEnd,
        )
        .join("\n")
        .trim();

      // Extract hashtags
      const hashtags = (text.match(/#\w+/g) || []).filter(
        (tag: string) => tag !== "#wukkie",
      );

      // Determine category from hashtags
      const categoryTags = {
        infrastructure: "#infrastructure",
        safety: "#safety",
        environment: "#environment",
        transportation: "#transportation",
      };

      let category = "other";
      for (const [cat, tag] of Object.entries(categoryTags)) {
        if (hashtags.includes(tag)) {
          category = cat;
          break;
        }
      }

      return {
        id: `public_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
        title,
        description: description || "No description provided",
        category,
        hashtags,
        status: "open",
        createdAt: post.record.createdAt || new Date().toISOString(),
        author: post.author?.handle || "unknown",
        blueskyUri: post.uri,
        blueskyStatus: "posted",
      };
    } catch (error) {
      console.warn("Error parsing Bluesky post:", error);
      return null;
    }
  }

  /**
   * Display statistics for public issues
   */
  private displayPublicIssueStats(
    publicCount: number,
    localCount: number,
  ): void {
    const statsContainer = document.getElementById("issue-stats");
    if (statsContainer) {
      const totalCount = publicCount + localCount;
      statsContainer.innerHTML = `
        <div class="issue-stats">
          <span class="stat-item">📊 ${totalCount} issues</span>
          ${localCount > 0 ? `<span class="stat-item">📱 ${localCount} local</span>` : ""}
          ${publicCount > 0 ? `<span class="stat-item">🌐 ${publicCount} public</span>` : ""}
        </div>
      `;
    }
  }

  private async loadNetworkComments(): Promise<void> {
    try {
      console.log("🔍 Loading comments from ATProto network...");

      if (!this.atprotoManager) {
        console.log("⚠️ ATProto manager not available for comments");
        return;
      }

      const stored = localStorage.getItem("wukkie_issues");
      const issues: Issue[] = stored ? JSON.parse(stored) : [];
      let updated = false;

      // For each issue that has a blueskyUri, try to fetch replies
      for (const issue of issues) {
        if (issue.blueskyUri) {
          try {
            const networkComments = await this.fetchCommentsForIssue(
              issue.blueskyUri,
            );
            if (networkComments.length > 0) {
              // Merge network comments with local ones, avoiding duplicates
              if (!issue.comments) {
                issue.comments = [];
              }

              networkComments.forEach((networkComment) => {
                const existsLocally = issue.comments!.some(
                  (local) =>
                    local.text === networkComment.text &&
                    Math.abs(
                      new Date(local.createdAt).getTime() -
                        new Date(networkComment.createdAt).getTime(),
                    ) < 60000, // within 1 minute
                );

                if (!existsLocally) {
                  issue.comments!.push(networkComment);
                  updated = true;
                }
              });

              // Sort comments by creation date
              issue.comments.sort(
                (a, b) =>
                  new Date(a.createdAt).getTime() -
                  new Date(b.createdAt).getTime(),
              );
            }
          } catch (error) {
            console.warn(
              `Failed to fetch comments for issue ${issue.id}:`,
              error,
            );
          }
        }
      }

      // Update storage if we found new comments
      if (updated) {
        localStorage.setItem("wukkie_issues", JSON.stringify(issues));
        console.log("✅ Updated issues with network comments");
      }
    } catch (error) {
      console.error("Failed to load network issues:", error);
    }
    return;
  }

  private async fetchCommentsForIssue(blueskyUri: string): Promise<Comment[]> {
    try {
      if (!this.atprotoManager || !blueskyAuth.isAuthenticated()) {
        return [];
      }

      // Use the XRPC client to get the thread
      const xrpc = blueskyAuth.getXRPC();
      if (!xrpc) {
        return [];
      }

      // Extract the AT-URI components
      const uriParts = blueskyUri.split("/");
      const did = uriParts[2];
      const rkey = uriParts[4];

      // Get the thread (post and its replies)
      const threadResponse = await xrpc.call("app.bsky.feed.getPostThread", {
        uri: blueskyUri,
        depth: 3, // Get replies up to 3 levels deep
      });

      const comments: Comment[] = [];

      // Parse replies from the thread
      if (threadResponse.thread && threadResponse.thread.replies) {
        this.parseRepliesAsComments(threadResponse.thread.replies, comments);
      }

      console.log(`Found ${comments.length} network comments for issue`);
      return comments;
    } catch (error) {
      console.error("Error fetching comments:", error);
      return [];
    }
  }

  private parseRepliesAsComments(replies: any[], comments: Comment[]): void {
    for (const reply of replies) {
      if (reply.post && reply.post.record) {
        const record = reply.post.record;
        const text = record.text || "";

        // Skip if this looks like a Wukkie issue post (not a comment)
        if (text.includes("🚨 New Issue:")) {
          continue;
        }

        // Extract the actual comment text (remove "💬 Follow-up on:" prefix if present)
        let commentText = text;
        if (text.includes("💬 Follow-up on:")) {
          const lines = text.split("\n");
          // Find the content after the follow-up line
          let foundFollowUp = false;
          let contentLines: string[] = [];
          for (const line of lines) {
            if (foundFollowUp && line.trim()) {
              contentLines.push(line.trim());
            } else if (line.includes("💬 Follow-up on:")) {
              foundFollowUp = true;
            }
          }
          commentText = contentLines.join(" ") || text;
        }

        if (commentText.trim()) {
          comments.push({
            id:
              reply.post.uri ||
              `network_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
            text: commentText.trim(),
            author: reply.post.author?.handle || "anonymous",
            createdAt: reply.post.record.createdAt || new Date().toISOString(),
          });
        }

        // Recursively parse nested replies
        if (reply.replies && reply.replies.length > 0) {
          this.parseRepliesAsComments(reply.replies, comments);
        }
      }
    }
  }

  private displayIssues(issues: Issue[]): void {
    // Store all issues for filtering
    this.allIssues = issues;

    // Apply tag filter if active
    const filteredIssues = this.currentTagFilter
      ? issues.filter((issue) =>
          issue.hashtags.includes(this.currentTagFilter!),
        )
      : issues;

    this.displayFilteredIssues(filteredIssues).catch(console.error);
    this.updateTagCloud(issues);
  }

  private async displayFilteredIssues(issues: Issue[]): Promise<void> {
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

    // Pre-process all hashtags with tooltips
    const issueHtmlPromises = issues.map(async (issue) => {
      const distance = null; // Distance calculation disabled for privacy

      const timeAgo = this.formatTimeAgo(new Date(issue.createdAt));

      // Determine Bluesky status display
      let blueskyStatus = "";
      let retryButtons = "";

      if (issue.blueskyStatus === "posted" && issue.blueskyUri) {
        const blueskyUrl = `https://bsky.app/profile/${this.escapeHtml(issue.author)}/post/${issue.blueskyUri.split("/").pop()}`;
        blueskyStatus = `<a href="${blueskyUrl}" target="_blank" class="bluesky-status posted">📢 On Bluesky</a>`;
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
            <div class="issue-title"><a href="#issue/${issue.id}" onclick="wukkie.viewIssue('${issue.id}'); return false;" style="text-decoration: none; color: inherit; cursor: pointer;">${this.escapeHtml(issue.title)}</a></div>
            ${distance ? `<div class="issue-distance">${distance}</div>` : ""}
          </div>
          <div class="issue-description">${this.escapeHtml(issue.description)}</div>
          <div class="issue-meta">
            <div class="issue-hashtags">
              ${await this.renderHashtagsWithTooltips(issue.hashtags)}
            </div>
            <div class="issue-author">${timeAgo} • @${this.escapeHtml(issue.author)} ${blueskyStatus}</div>
          </div>
          <div class="issue-actions">
            <button class="action-btn" onclick="wukkie.likeIssue('${issue.id}')">👍 <span id="likes-${issue.id}">${issue.likes || 0}</span></button>
            <button class="action-btn" onclick="wukkie.commentOnIssue('${issue.id}')">💬 <span id="comments-${issue.id}">${issue.comments ? issue.comments.length : 0}</span></button>
            ${issue.comments && issue.comments.length > 0 ? `<button class="action-btn" onclick="wukkie.toggleComments('${issue.id}')">👁️ Show Comments</button>` : ""}
            ${issue.hashtags.filter((tag) => LocationPrivacySystem.isValidGeoHashtag(tag)).length > 0 ? `<button class="action-btn" onclick="wukkie.showOnMap('${issue.id}')">📍 ${issue.hashtags.filter((tag) => LocationPrivacySystem.isValidGeoHashtag(tag)).length > 1 ? `View ${issue.hashtags.filter((tag) => LocationPrivacySystem.isValidGeoHashtag(tag)).length} Locations` : "View Location"}</button>` : ""}
            <button class="action-btn edit-btn" onclick="wukkie.editIssue('${issue.id}')">✏️ Edit</button>
            ${retryButtons}
          </div>
          ${
            issue.comments && issue.comments.length > 0
              ? `
          <div id="comments-${issue.id}" class="comments-section" style="display: none;">
            <h4>Comments (${issue.comments.length})</h4>
            ${issue.comments
              .map(
                (comment) => `
              <div class="comment">
                <div class="comment-header">
                  <span class="comment-author">@${comment.author}</span>
                  <span class="comment-time">${this.formatTimeAgo(new Date(comment.createdAt))}</span>
                </div>
                <div class="comment-text">${comment.text}</div>
              </div>
            `,
              )
              .join("")}
          </div>
          `
              : ""
          }
        </div>`;
    });

    // Wait for all hashtag processing to complete
    const issueHtmlArray = await Promise.all(issueHtmlPromises);
    issuesList.innerHTML = issueHtmlArray.join("");

    // Update filter status
    this.updateFilterStatus(issues.length);
  }

  private updateFilterStatus(filteredCount: number): void {
    const statusEl = document.getElementById("filter-status");
    if (statusEl) {
      if (this.currentTagFilter) {
        const totalCount = this.allIssues.length;
        statusEl.innerHTML = `
          <div style="margin-bottom: 16px; padding: 12px; background: #e3f2fd; border-radius: 8px; display: flex; justify-content: space-between; align-items: center;">
            <span>Filtering by <strong>${this.escapeHtml(this.currentTagFilter)}</strong>: ${filteredCount} of ${totalCount} issues</span>
            <button onclick="wukkie.clearTagFilter()" style="padding: 4px 8px; background: #1976d2; color: white; border: none; border-radius: 4px; cursor: pointer; font-size: 0.9rem;">Clear Filter</button>
          </div>
        `;
      } else {
        statusEl.innerHTML = "";
      }
    }
  }

  private updateTagCloud(issues: Issue[]): void {
    const tagCloudEl = document.getElementById("tag-cloud");
    if (!tagCloudEl) return;

    // Count tag frequency
    const tagCounts = new Map<string, number>();
    issues.forEach((issue) => {
      issue.hashtags.forEach((tag) => {
        // Skip geo hashtags from the cloud as they're location-specific
        if (!tag.startsWith("#geo")) {
          tagCounts.set(tag, (tagCounts.get(tag) || 0) + 1);
        }
      });
    });

    if (tagCounts.size === 0) {
      tagCloudEl.innerHTML =
        '<div style="text-align: center; color: #666; font-style: italic;">No hashtags found</div>';
      return;
    }

    // Sort tags by frequency
    const sortedTags = Array.from(tagCounts.entries())
      .sort((a, b) => b[1] - a[1])
      .slice(0, 20); // Show top 20 tags

    // Generate tag cloud HTML
    const maxCount = sortedTags[0]?.[1] || 1;
    const tagCloudHTML = sortedTags
      .map(([tag, count]) => {
        const size = Math.max(0.8, Math.min(2.0, (count / maxCount) * 1.5));
        const isActive = this.currentTagFilter === tag;
        return `
        <span
          class="tag-cloud-item ${isActive ? "active" : ""}"
          onclick="wukkie.filterByTag('${this.escapeHtml(tag).replace(/'/g, "\\'")}')"
          style="
            font-size: ${size}rem;
            margin: 4px 8px 4px 0;
            padding: 6px 12px;
            background: ${isActive ? "#1976d2" : "#f0f0f0"};
            color: ${isActive ? "white" : "#333"};
            border-radius: 20px;
            cursor: pointer;
            display: inline-block;
            transition: all 0.2s ease;
            border: 1px solid ${isActive ? "#1976d2" : "#ddd"};
          "
          title="Filter by ${this.escapeHtml(tag)} (${count} issue${count !== 1 ? "s" : ""})"
          onmouseover="this.style.backgroundColor='${isActive ? "#1565c0" : "#e0e0e0"}'"
          onmouseout="this.style.backgroundColor='${isActive ? "#1976d2" : "#f0f0f0"}'"
        >
          ${this.escapeHtml(tag)} (${count})
        </span>
      `;
      })
      .join("");

    tagCloudEl.innerHTML = `
      <div style="line-height: 1.6;">
        ${tagCloudHTML}
      </div>
    `;
  }

  public filterByTag(tag: string): void {
    console.log("🏷️ Filter by tag:", tag);

    if (this.currentTagFilter === tag) {
      // If clicking the same tag, clear the filter
      this.clearTagFilter();
    } else {
      this.currentTagFilter = tag;
      this.displayIssues(this.allIssues);
      this.showStatus(`Filtering by ${tag}`, "info");
    }
  }

  public clearTagFilter(): void {
    console.log("🏷️ Clear tag filter");
    this.currentTagFilter = null;
    this.displayIssues(this.allIssues);
    this.showStatus("Filter cleared", "info");
  }

  // Distance calculation removed for privacy protection
  // Issues now use geo hashtags (~1km precision) instead of exact coordinates

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

  public showOnMap(issueId: string): void {
    console.log("🗺️ Show issue on map:", issueId);
    const stored = localStorage.getItem("wukkie_issues");
    const issues: Issue[] = stored ? JSON.parse(stored) : [];
    const issue = issues.find((i) => i.id === issueId);

    if (!issue) {
      this.showStatus("Issue not found", "error");
      return;
    }

    // Extract all geo hashtags from hashtags to show on map
    const geoHashtags =
      issue?.hashtags.filter((tag) =>
        LocationPrivacySystem.isValidGeoHashtag(tag),
      ) || [];

    console.log("🔍 Found geo hashtags:", geoHashtags);

    if (geoHashtags.length > 0 && this.map) {
      try {
        // Clear existing markers and areas
        this.map.eachLayer((layer) => {
          if (
            layer instanceof window.L.Marker ||
            layer instanceof window.L.Rectangle
          ) {
            this.map!.removeLayer(layer);
          }
        });

        const locations = [];
        for (const geoHashtag of geoHashtags) {
          const area = LocationPrivacySystem.parseGeoHashtag(geoHashtag);
          if (area) {
            // Create PrivacyLocation from area
            const privacyLoc = createPrivacyLocation(
              area.center.lat,
              area.center.lng,
              `Area ${geoHashtag}`,
            );
            locations.push(privacyLoc);

            // Add marker for each location
            const marker = window.L.marker([
              area.center.lat,
              area.center.lng,
            ]).addTo(this.map);
            marker.bindPopup(
              `Location: ${geoHashtag}<br>Area: ~${privacyLoc.precision}km²`,
            );

            // Show privacy area
            const bounds = window.L.latLngBounds(
              [area.southWest.lat, area.southWest.lng],
              [area.northEast.lat, area.northEast.lng],
            );
            window.L.rectangle(bounds, {
              color: "#3b82f6",
              weight: 2,
              fillOpacity: 0.2,
            }).addTo(this.map);
          }
        }

        if (locations.length > 0) {
          // Fit map to show all locations
          if (locations.length === 1) {
            this.map.setView(
              [locations[0].centerLat, locations[0].centerLng],
              16,
            );
          } else {
            const group = window.L.featureGroup(
              locations.map((loc) =>
                window.L.marker([loc.centerLat, loc.centerLng]),
              ),
            );
            this.map.fitBounds(group.getBounds().pad(0.1));
          }

          const locationText =
            geoHashtags.length === 1
              ? "location"
              : `${geoHashtags.length} locations`;
          this.showStatus(
            `Showing ${issue?.title} ${locationText} on map 🗺️`,
            "success",
          );
        }
      } catch (error) {
        this.showStatus("Unable to show location on map", "error");
      }
    }
  }

  public async viewIssue(issueId: string): Promise<void> {
    console.log("View issue details:", issueId);

    // Try to find issue in local storage first
    const stored = localStorage.getItem("wukkie_issues");
    const localIssues: Issue[] = stored ? JSON.parse(stored) : [];
    let issue = localIssues.find((i) => i.id === issueId);

    // If not found locally, try to find in current displayed issues (including public ones)
    if (!issue) {
      const issuesList = document.getElementById("issues-list");
      if (issuesList) {
        // Extract issue data from the currently displayed issues
        // This is a fallback to get public issue data that's already rendered
        issue = this.findIssueInDisplayedContent(issueId);
      }
    }

    if (!issue) {
      this.showStatus("Issue not found", "error");
      return;
    }

    // Remove any existing modal first
    const existingModal = document.querySelector(".issue-modal-overlay");
    if (existingModal) {
      existingModal.remove();
    }

    // Create modal for detailed issue view
    const modal = document.createElement("div");
    modal.className = "issue-modal-overlay";
    modal.style.cssText = `
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: rgba(0, 0, 0, 0.5);
      display: flex;
      justify-content: center;
      align-items: center;
      z-index: 1000;
      padding: 20px;
      box-sizing: border-box;
    `;

    const timeAgo = this.formatTimeAgo(new Date(issue.createdAt));

    // Determine Bluesky status and link
    let blueskySection = "";
    if (issue.blueskyStatus === "posted" && issue.blueskyUri) {
      const blueskyUrl = `https://bsky.app/profile/${this.escapeHtml(issue.author)}/post/${issue.blueskyUri.split("/").pop()}`;
      blueskySection = `
        <div class="issue-bluesky" style="margin: 16px 0; padding: 12px; background: #e3f2fd; border-radius: 8px;">
          <div style="display: flex; align-items: center; gap: 8px;">
            <span>📢 Posted on Bluesky</span>
            <a href="${blueskyUrl}" target="_blank" style="color: #1976d2; text-decoration: none; font-weight: 500;">View Post →</a>
          </div>
        </div>
      `;
    } else if (issue.blueskyStatus === "pending") {
      blueskySection = `
        <div class="issue-bluesky" style="margin: 16px 0; padding: 12px; background: #fff3e0; border-radius: 8px;">
          <span>⏳ Posting to Bluesky...</span>
        </div>
      `;
    } else if (issue.blueskyStatus === "failed") {
      blueskySection = `
        <div class="issue-bluesky" style="margin: 16px 0; padding: 12px; background: #ffebee; border-radius: 8px;">
          <span>❌ Failed to post to Bluesky</span>
          <button onclick="wukkie.retryBlueskyPost('${issue.id}')" style="margin-left: 8px; padding: 4px 8px; background: #1976d2; color: white; border: none; border-radius: 4px; cursor: pointer;">Retry</button>
        </div>
      `;
    }

    modal.innerHTML = `
      <div class="issue-modal" style="
        background: white;
        border-radius: 12px;
        padding: 24px;
        max-width: 600px;
        width: 100%;
        max-height: 80vh;
        overflow-y: auto;
        position: relative;
      ">
        <button class="close-modal" style="
          position: absolute;
          top: 16px;
          right: 16px;
          background: none;
          border: none;
          font-size: 24px;
          cursor: pointer;
          color: #666;
          line-height: 1;
        ">×</button>

        <h2 style="margin: 0 0 16px 0; padding-right: 32px;">${this.escapeHtml(issue.title)}</h2>

        <div class="issue-meta" style="margin-bottom: 16px; color: #666; font-size: 0.9rem;">
          <div>By @${this.escapeHtml(issue.author)} • ${timeAgo}</div>
          <div>Category: ${this.escapeHtml(issue.category)}</div>
        </div>

        ${blueskySection}

        <div class="issue-description" style="margin: 16px 0; line-height: 1.6;">
          ${this.escapeHtml(issue.description).replace(/\n/g, "<br>")}
        </div>

        <div class="issue-hashtags" style="margin: 16px 0;">
          ${await this.renderHashtagsWithTooltips(issue.hashtags)}
        </div>

        <div class="issue-actions" style="margin: 20px 0; display: flex; gap: 8px; flex-wrap: wrap;">
          <button onclick="wukkie.likeIssueInModal('${issue.id}')" style="padding: 8px 16px; background: #f8f9fa; border: 1px solid #dee2e6; border-radius: 6px; cursor: pointer;">👍 <span id="modal-likes-${issue.id}">${issue.likes || 0}</span></button>
          <button onclick="wukkie.showCommentFormInModal('${issue.id}')" style="padding: 8px 16px; background: #f8f9fa; border: 1px solid #dee2e6; border-radius: 6px; cursor: pointer;">💬 Add Comment</button>
          ${issue.hashtags.filter((tag) => tag.startsWith("#geo")).length > 0 ? `<button onclick="wukkie.showOnMap('${issue.id}')" style="padding: 8px 16px; background: #f8f9fa; border: 1px solid #dee2e6; border-radius: 6px; cursor: pointer;">📍 View on Map</button>` : ""}
          <button onclick="wukkie.editIssue('${issue.id}')" style="padding: 8px 16px; background: #f8f9fa; border: 1px solid #dee2e6; border-radius: 6px; cursor: pointer;">✏️ Edit</button>
        </div>

        <!-- Comment Form Container (initially hidden) -->
        <div id="modal-comment-form-${issue.id}" style="display: none; margin-top: 16px; padding: 16px; background: #f8f9fa; border-radius: 8px;">
          <h5 style="margin: 0 0 12px 0;">Add Comment</h5>
          <textarea id="modal-comment-text-${issue.id}" placeholder="Write your comment..." style="width: 100%; min-height: 80px; padding: 8px; border: 1px solid #ddd; border-radius: 4px; resize: vertical; font-family: inherit; box-sizing: border-box;"></textarea>
          <div style="margin-top: 12px; display: flex; gap: 8px;">
            <button onclick="wukkie.submitModalComment('${issue.id}')" style="padding: 8px 16px; background: #007bff; color: white; border: none; border-radius: 4px; cursor: pointer;">Post Comment</button>
            <button onclick="wukkie.cancelModalComment('${issue.id}')" style="padding: 8px 16px; background: #6c757d; color: white; border: none; border-radius: 4px; cursor: pointer;">Cancel</button>
          </div>
        </div>

        ${
          issue.comments && issue.comments.length > 0
            ? `
          <div class="comments-section" style="margin-top: 24px; border-top: 1px solid #eee; padding-top: 20px;">
            <h3 style="margin: 0 0 16px 0; font-size: 1.1rem;">Comments (${issue.comments.length})</h3>
            <div id="modal-comments-${issue.id}" style="display: block;">
              ${issue.comments
                .map(
                  (comment) => `
                <div class="comment" style="
                  margin-bottom: 16px;
                  padding: 12px;
                  background: #f8f9fa;
                  border-radius: 8px;
                  border-left: 3px solid #007bff;
                ">
                  <div class="comment-header" style="
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    margin-bottom: 8px;
                    font-size: 0.9rem;
                    color: #666;
                  ">
                    <span class="comment-author" style="font-weight: 500; color: #333;">@${this.escapeHtml(comment.author)}</span>
                    <span class="comment-time">${this.formatTimeAgo(new Date(comment.createdAt))}</span>
                  </div>
                  <div class="comment-text" style="line-height: 1.5;">${this.escapeHtml(comment.text).replace(/\n/g, "<br>")}</div>
                </div>
              `,
                )
                .join("")}
            </div>
          </div>
        `
            : ""
        }
      </div>
    `;

    // Add modal to page
    document.body.appendChild(modal);

    // Close modal handlers
    const closeBtn = modal.querySelector(".close-modal") as HTMLButtonElement;
    closeBtn.onclick = () => {
      document.body.removeChild(modal);
    };

    modal.onclick = (e) => {
      if (e.target === modal) {
        document.body.removeChild(modal);
      }
    };

    // Close on Escape key
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        document.body.removeChild(modal);
        document.removeEventListener("keydown", handleKeyPress);
      }
    };
    document.addEventListener("keydown", handleKeyPress);
  }

  private findIssueInDisplayedContent(issueId: string): Issue | undefined {
    // This is a helper method to extract issue data from displayed content
    // when we need to show details of public issues that aren't in localStorage
    const issueElement = document
      .querySelector(`[onclick*="${issueId}"]`)
      ?.closest(".issue-item");
    if (!issueElement) return undefined;

    try {
      const titleElement =
        issueElement.querySelector(".issue-title a") ||
        issueElement.querySelector(".issue-title");
      const descElement = issueElement.querySelector(".issue-description");
      const hashtagElements = issueElement.querySelectorAll(".hashtag");
      const authorElement = issueElement.querySelector(".issue-author");

      const title = titleElement?.textContent?.trim() || "Unknown Title";
      const description = descElement?.textContent?.trim() || "No description";
      const hashtags = Array.from(hashtagElements).map(
        (el) => el.textContent?.trim() || "",
      );
      const authorText = authorElement?.textContent || "";
      const author = authorText.includes("@")
        ? authorText.split("@")[1]?.split(" ")[0] || "unknown"
        : "unknown";

      return {
        id: issueId,
        title,
        description,
        category: "other",
        hashtags,
        status: "open",
        createdAt: new Date().toISOString(),
        author,
        likes: 0,
        blueskyStatus: "posted",
        blueskyUri: "",
      } as Issue;
    } catch (error) {
      console.warn("Error extracting issue data:", error);
      return undefined;
    }
  }

  public likeIssue(issueId: string): void {
    console.log("👍 Like issue:", issueId);
    const stored = localStorage.getItem("wukkie_issues");
    const issues: Issue[] = stored ? JSON.parse(stored) : [];
    const issue = issues.find((i) => i.id === issueId);

    if (issue) {
      issue.likes = (issue.likes || 0) + 1;
      localStorage.setItem("wukkie_issues", JSON.stringify(issues));

      // Update the display in both locations
      const likesSpan = document.getElementById(`likes-${issueId}`);
      if (likesSpan) {
        likesSpan.textContent = issue.likes.toString();
      }

      this.showStatus("Issue liked! 👍", "success");
    } else {
      // Handle liking public issues (not stored locally)
      this.showStatus("👍 Like noted! (Public issue)", "info");
    }
  }

  public likeIssueInModal(issueId: string): void {
    this.likeIssue(issueId);

    // Update modal display
    const modalLikesSpan = document.getElementById(`modal-likes-${issueId}`);
    if (modalLikesSpan) {
      const currentLikes = parseInt(modalLikesSpan.textContent || "0") + 1;
      modalLikesSpan.textContent = currentLikes.toString();
    }
  }

  public toggleComments(issueId: string): void {
    const commentsSection = document.getElementById(
      `comments-${issueId}`,
    ) as HTMLElement;
    const toggleButton = document.querySelector(
      `button[onclick="wukkie.toggleComments('${issueId}')"]`,
    ) as HTMLElement;

    if (commentsSection) {
      if (commentsSection.style.display === "none") {
        commentsSection.style.display = "block";
        if (toggleButton) toggleButton.textContent = "👁️ Hide Comments";
      } else {
        commentsSection.style.display = "none";
        if (toggleButton) toggleButton.textContent = "👁️ Show Comments";
      }
    }
  }

  public async commentOnIssue(issueId: string): Promise<void> {
    console.log("💬 Comment on issue:", issueId);

    // For main issue list, open the detailed view instead
    this.viewIssue(issueId);
  }

  public showCommentFormInModal(issueId: string): void {
    const commentForm = document.getElementById(
      `modal-comment-form-${issueId}`,
    );
    if (commentForm) {
      commentForm.style.display =
        commentForm.style.display === "none" ? "block" : "none";

      if (commentForm.style.display === "block") {
        const textarea = document.getElementById(
          `modal-comment-text-${issueId}`,
        ) as HTMLTextAreaElement;
        if (textarea) {
          textarea.focus();
        }
      }
    }
  }

  public submitModalComment(issueId: string): void {
    const textarea = document.getElementById(
      `modal-comment-text-${issueId}`,
    ) as HTMLTextAreaElement;
    if (!textarea) return;

    const comment = textarea.value.trim();
    if (!comment) {
      alert("Please enter a comment");
      return;
    }

    this.submitCommentText(issueId, comment).then(() => {
      // Clear the form and hide it
      textarea.value = "";
      const commentForm = document.getElementById(
        `modal-comment-form-${issueId}`,
      );
      if (commentForm) {
        commentForm.style.display = "none";
      }

      // Refresh the modal comments section
      this.refreshModalComments(issueId);
    });
  }

  public cancelModalComment(issueId: string): void {
    const textarea = document.getElementById(
      `modal-comment-text-${issueId}`,
    ) as HTMLTextAreaElement;
    const commentForm = document.getElementById(
      `modal-comment-form-${issueId}`,
    );

    if (textarea) textarea.value = "";
    if (commentForm) commentForm.style.display = "none";
  }

  private refreshModalComments(issueId: string): void {
    const stored = localStorage.getItem("wukkie_issues");
    const issues: Issue[] = stored ? JSON.parse(stored) : [];
    const issue = issues.find((i) => i.id === issueId);

    if (issue && issue.comments) {
      const commentsContainer = document.getElementById(
        `modal-comments-${issueId}`,
      );
      if (commentsContainer) {
        commentsContainer.innerHTML = issue.comments
          .map(
            (comment) => `
          <div class="comment" style="
            margin-bottom: 16px;
            padding: 12px;
            background: #f8f9fa;
            border-radius: 8px;
            border-left: 3px solid #007bff;
          ">
            <div class="comment-header" style="
              display: flex;
              justify-content: space-between;
              align-items: center;
              margin-bottom: 8px;
              font-size: 0.9rem;
              color: #666;
            ">
              <span class="comment-author" style="font-weight: 500; color: #333;">@${this.escapeHtml(comment.author)}</span>
              <span class="comment-time">${this.formatTimeAgo(new Date(comment.createdAt))}</span>
            </div>
            <div class="comment-text" style="line-height: 1.5;">${this.escapeHtml(comment.text).replace(/\n/g, "<br>")}</div>
          </div>
        `,
          )
          .join("");
      }
    }
  }

  public async submitComment(issueId: string): Promise<void> {
    const textarea = document.getElementById(
      `comment-text-${issueId}`,
    ) as HTMLTextAreaElement;
    if (!textarea) return;

    const comment = textarea.value.trim();
    if (!comment) {
      alert("Please enter a comment");
      return;
    }

    await this.submitCommentText(issueId, comment);

    // Remove the comment form
    const commentForm = textarea.closest(".comment-form") as HTMLElement;
    if (commentForm) {
      commentForm.remove();
    }
  }

  public cancelComment(issueId: string): void {
    const textarea = document.getElementById(
      `comment-text-${issueId}`,
    ) as HTMLTextAreaElement;
    if (textarea) {
      const commentForm = textarea.closest(".comment-form") as HTMLElement;
      if (commentForm) {
        commentForm.remove();
      }
    }
  }

  private async submitCommentText(
    issueId: string,
    comment: string,
  ): Promise<void> {
    const stored = localStorage.getItem("wukkie_issues");
    const issues: Issue[] = stored ? JSON.parse(stored) : [];
    const issue = issues.find((i) => i.id === issueId);

    if (issue) {
      try {
        // Add comment locally first
        if (!issue.comments) {
          issue.comments = [];
        }

        const newComment: Comment = {
          id: Date.now().toString(),
          text: comment,
          author: this.session?.handle || "Anonymous",
          createdAt: new Date().toISOString(),
        };

        issue.comments.push(newComment);
        localStorage.setItem("wukkie_issues", JSON.stringify(issues));

        // Post to Bluesky if authenticated and has blueskyUri
        if (
          this.atprotoManager &&
          issue.blueskyUri &&
          this.session &&
          !this.session.isDemo
        ) {
          console.log("🔄 Posting comment to Bluesky...");
          this.showStatus("Posting comment to Bluesky...", "info");

          // Find the WukkieIssue format for ATProto manager
          const wukkieIssue = {
            id: issue.id || "",
            title: issue.title,
            description: issue.description,
            category: issue.category,
            priority: "medium" as const,
            status: issue.status as any,
            location: {
              geoHashtag:
                issue.hashtags.find((tag) => tag.startsWith("#geo")) ||
                "#geo000000",
              label: "Issue location",
              precision: 5,
              plusCode: "8FVC2222+22",
              centerLat: 0,
              centerLng: 0,
            },
            hashtags: issue.hashtags,
            createdAt: issue.createdAt,
            author: issue.author,
            blueskyUri: issue.blueskyUri,
          };

          await this.atprotoManager.postFollowUp(wukkieIssue, comment);
          console.log("✅ Comment posted to Bluesky successfully");
          this.showStatus("Comment posted to Bluesky! 💬", "success");
        } else {
          this.showStatus("Comment added locally! 💬", "success");
        }

        // Update the display
        this.displayIssues(issues);
      } catch (error) {
        console.error("Failed to post comment:", error);
        this.showStatus(
          "Failed to post comment to Bluesky, but saved locally",
          "error",
        );
      }
    } else {
      console.error("Issue not found:", issueId);
    }
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

    const issue = this.findIssueById(issueId);
    if (!issue) {
      this.showStatus("Issue not found", "error");
      return;
    }

    try {
      this.showStatus("Retrying Bluesky post...", "info");
      issue.blueskyStatus = "pending";
      this.updateIssueInStorage(issue);
      await this.loadIssues(); // Refresh display

      await this.createIssueRecord({ ...issue, postToBluesky: true });
    } catch (error) {
      console.error("Retry Bluesky post error:", error);
      issue.blueskyStatus = "failed";
      this.updateIssueInStorage(issue);
      await this.loadIssues();
    }
  }

  public async postToBluesky(issueId: string): Promise<void> {
    console.log("Post to Bluesky for issue:", issueId);

    if (!this.session || this.session.isDemo) {
      this.showStatus("Please login to post to Bluesky", "error");
      return;
    }

    const issue = this.findIssueById(issueId);
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

      // Update author if this was a demo issue
      if (issue.author === "demo-user.invalid") {
        issue.author = this.session.handle;
      }

      this.updateIssueInStorage(issue);
      await this.loadIssues(); // Refresh display

      await this.createIssueRecord({ ...issue, postToBluesky: true });

      // Update UI after successful posting
      issue.blueskyStatus = "posted";
      this.updateIssueInStorage(issue);
      await this.loadIssues(); // Refresh display
      this.showStatus("Issue posted to Bluesky successfully! 📢", "success");
    } catch (error) {
      console.error("Post to Bluesky error:", error);
      issue.blueskyStatus = "failed";
      this.updateIssueInStorage(issue);
      await this.loadIssues();
      this.showStatus("Failed to post to Bluesky", "error");
    }
  }

  public editIssue(issueId: string): void {
    console.log("Edit issue:", issueId);

    const issue = this.findIssueById(issueId);
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
    ) as unknown as HTMLSelectElement;
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
    // Extract all geo hashtags from hashtags for editing
    const geoHashtags = issue.hashtags.filter((tag: string) =>
      LocationPrivacySystem.isValidGeoHashtag(tag),
    );
    if (locationInput && geoHashtags.length > 0) {
      // Show all geo hashtags in the input, space-separated
      locationInput.value = geoHashtags.join(" ");

      // Set the first location as current privacy location for editing
      try {
        const area = LocationPrivacySystem.parseGeoHashtag(geoHashtags[0]);
        if (area) {
          this.currentPrivacyLocation = createPrivacyLocation(
            area.center.lat,
            area.center.lng,
            `Area ${geoHashtags[0]}`,
          );
        }
      } catch (error) {
        console.warn("Could not parse geo hashtag for editing:", error);
      }
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
   * Handle map click for privacy location setting
   */
  private async onMapClick(e: L.LeafletMouseEvent): Promise<void> {
    const { lat, lng } = e.latlng;

    // Get location label if provided
    const labelInput = document.getElementById(
      "location-label",
    ) as HTMLInputElement;
    const label = labelInput?.value || undefined;

    // Create privacy location
    const privacyLocation = createPrivacyLocation(lat, lng, label);

    // Get current location input to support multiple locations
    const locationInput = document.getElementById(
      "location",
    ) as HTMLInputElement;
    const existingLocations = locationInput?.value
      ? locationInput.value
          .split(/\s+/)
          .filter((tag) => LocationPrivacySystem.isValidGeoHashtag(tag))
      : [];

    // Check if this location already exists (avoid duplicates)
    if (!existingLocations.includes(privacyLocation.geoHashtag)) {
      existingLocations.push(privacyLocation.geoHashtag);
      if (locationInput) {
        locationInput.value = existingLocations.join(" ");
      }
    }

    // Set privacy location and update map display
    try {
      await this.setPrivacyLocation(privacyLocation, lat, lng);

      // Update feedback to show multiple locations
      const locationFeedback = document.getElementById("location-feedback");
      if (locationFeedback && existingLocations.length > 1) {
        const locationText =
          existingLocations.length === 1
            ? "location"
            : `${existingLocations.length} locations`;
        locationFeedback.innerHTML += `<p><strong>Multiple locations added:</strong> ${locationText} selected for this issue</p>`;
      }
    } catch (error) {
      console.error("Error setting privacy location:", error);
      this.showStatus("Failed to set location", "error");
    }
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
  private findIssueById(id: string): Issue | undefined {
    try {
      const stored = localStorage.getItem("wukkie_issues");
      const issues: Issue[] = stored ? JSON.parse(stored) : [];
      return issues.find((issue) => issue.id === id);
    } catch (error) {
      console.error("Error getting issue by ID:", error);
      return undefined;
    }
  }

  /**
   * Display enhanced statistics about loaded issues
   */
  private displayIssueStats(allIssues: Issue[]): void {
    if (!this.atprotoManager) return;

    const ownIssues = allIssues.filter(
      (issue) => issue.author === this.session?.handle,
    );
    const networkIssues = allIssues.filter(
      (issue) => issue.author !== this.session?.handle,
    );

    console.log(`📊 Issue Statistics:
    - Own issues: ${ownIssues.length}
    - Network issues: ${networkIssues.length}
    - Total: ${allIssues.length}`);

    // Get tag cloud data
    const tagCloud = this.atprotoManager.getTagCloud();
    if (tagCloud.length > 0) {
      console.log(
        "🏷️ Top Tags:",
        tagCloud
          .slice(0, 10)
          .map((t) => `${t.tag}(${t.count})`)
          .join(", "),
      );
    }

    // Update UI with stats if we have a stats container
    const statsContainer = document.getElementById("issue-stats");
    if (statsContainer) {
      statsContainer.innerHTML = `
        <div class="issue-stats">
          <span class="stat-item">📊 ${allIssues.length} issues</span>
          ${ownIssues.length > 0 ? `<span class="stat-item">👤 ${ownIssues.length} yours</span>` : ""}
          ${networkIssues.length > 0 ? `<span class="stat-item">🌐 ${networkIssues.length} from network</span>` : ""}
        </div>
      `;
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

  /**
   * Update demo issues to current user when transitioning from demo to real login
   */
  private async updateDemoIssuesOnLogin(): Promise<void> {
    if (!this.session || this.session.isDemo) return;

    try {
      const existing = localStorage.getItem("wukkie_issues");
      const issues: Issue[] = existing ? JSON.parse(existing) : [];

      let updated = false;
      issues.forEach((issue) => {
        if (issue.author === "demo-user.invalid") {
          issue.author = this.session!.handle;
          // Mark as local-only so user can choose to post to Bluesky
          if (!issue.blueskyStatus || issue.blueskyStatus === "pending") {
            issue.blueskyStatus = "local-only";
          }
          updated = true;
        }
      });

      if (updated) {
        localStorage.setItem("wukkie_issues", JSON.stringify(issues));
        await this.loadIssues(); // Refresh display
        console.log(
          "🔄 Updated demo issues to current user:",
          this.session.handle,
        );
      }
    } catch (error) {
      console.error("Error updating demo issues:", error);
    }
  }

  /**
   * Set privacy location and update UI
   */
  private async setPrivacyLocation(
    privacyLocation: PrivacyLocation,
    originalLat: number,
    originalLng: number,
  ): Promise<void> {
    console.log(
      "🟢 [DEBUG] setPrivacyLocation: Starting with:",
      privacyLocation,
      originalLat,
      originalLng,
    );

    if (!privacyLocation || !privacyLocation.geoHashtag) {
      throw new Error("Invalid privacy location provided");
    }

    if (
      !originalLat ||
      !originalLng ||
      isNaN(originalLat) ||
      isNaN(originalLng)
    ) {
      throw new Error(
        `Invalid coordinates provided: lat=${originalLat}, lng=${originalLng}`,
      );
    }

    this.currentPrivacyLocation = privacyLocation;

    // Update map with privacy area instead of precise location
    if (this.map) {
      // Clear existing markers
      this.map.eachLayer((layer) => {
        if (
          layer instanceof window.L.Marker ||
          layer instanceof window.L.Rectangle
        ) {
          this.map!.removeLayer(layer);
        }
      });

      // Get the area covered by this privacy location
      console.log(
        "🟢 [DEBUG] setPrivacyLocation: Parsing geo hashtag:",
        privacyLocation.geoHashtag,
      );
      const area = LocationPrivacySystem.parseGeoHashtag(
        privacyLocation.geoHashtag,
      );
      console.log("🟢 [DEBUG] setPrivacyLocation: Parsed area:", area);

      if (
        area &&
        area.southWest &&
        area.northEast &&
        typeof area.southWest.lat === "number" &&
        typeof area.southWest.lng === "number" &&
        typeof area.northEast.lat === "number" &&
        typeof area.northEast.lng === "number"
      ) {
        // Draw rectangle showing privacy area
        const bounds = window.L.latLngBounds(
          [area.southWest.lat, area.southWest.lng],
          [area.northEast.lat, area.northEast.lng],
        );

        window.L.rectangle(bounds, {
          color: "#3b82f6",
          weight: 2,
          fillOpacity: 0.2,
        }).addTo(this.map).bindPopup(`
            <div class="privacy-popup">
              <strong>Privacy Location</strong><br>
              ${privacyLocation.geoHashtag}<br>
              ${privacyLocation.label ? `"${privacyLocation.label}"<br>` : ""}
              <small>~${privacyLocation.precision}km precision</small>
            </div>
          `);

        // Center map on the privacy area
        this.map.fitBounds(bounds);
      } else {
        console.warn(
          "🟡 [WARN] setPrivacyLocation: Could not parse area or invalid area data, centering on original coordinates",
        );
        // Fallback: center map on original coordinates
        this.map.setView([originalLat, originalLng], 15);

        // Add a simple marker
        window.L.marker([originalLat, originalLng]).addTo(this.map).bindPopup(`
            <div class="privacy-popup">
              <strong>Privacy Location</strong><br>
              ${privacyLocation.geoHashtag}<br>
              ${privacyLocation.label ? `"${privacyLocation.label}"<br>` : ""}
              <small>Approximate area</small>
            </div>
          `);
      }
    }

    // Update location input display
    const locationInput = document.getElementById(
      "location",
    ) as HTMLInputElement;
    if (locationInput) {
      const displayText = privacyLocation.label
        ? `${privacyLocation.geoHashtag} (${privacyLocation.label})`
        : privacyLocation.geoHashtag;
      locationInput.value = displayText;
    }

    // Update location feedback
    const locationFeedback = document.getElementById("location-feedback");
    if (locationFeedback) {
      locationFeedback.innerHTML = `
        <div class="location-set privacy-location">
          <div class="location-icon">📍</div>
          <div class="location-details">
            <strong>Privacy Location Set</strong><br>
            <code>${privacyLocation.geoHashtag}</code>
            ${privacyLocation.label ? `<br>"${privacyLocation.label}"` : ""}
            <br><small>Approximate area: ~${privacyLocation.precision}km radius</small>
          </div>
        </div>
      `;
      locationFeedback.className = "form-feedback success";
    }

    console.log("Privacy location set:", privacyLocation);
  }

  /**
   * Parse location input for geo hashtags or regular addresses
   */
  private async parseLocationInput(event: Event): Promise<void> {
    const input = event.target as HTMLInputElement;
    const value = input.value.trim();

    if (!value) return;

    // Split input by spaces and filter for valid geo hashtags
    const tokens = value.split(/\s+/);
    const geoHashtags = tokens.filter((token) =>
      LocationPrivacySystem.isValidGeoHashtag(token),
    );

    console.log("🔍 Parsed geo hashtags from input:", geoHashtags);

    if (geoHashtags.length > 0) {
      // Support multiple locations - show all on map
      console.log(`📍 Processing ${geoHashtags.length} location(s)`);

      // Update input field to show clean geo hashtags
      input.value = geoHashtags.join(" ");

      // Update feedback to show multiple location support
      const locationFeedback = document.getElementById("location-feedback");
      if (locationFeedback) {
        const locationText =
          geoHashtags.length === 1 ? "location" : "locations";
        locationFeedback.innerHTML = `<div class="location-success">✅ ${geoHashtags.length} privacy ${locationText} detected</div>`;
        locationFeedback.className = "form-feedback success";
      }
      try {
        // Clear existing markers and areas
        if (this.map) {
          this.map.eachLayer((layer) => {
            if (
              layer instanceof window.L.Marker ||
              layer instanceof window.L.Rectangle
            ) {
              this.map!.removeLayer(layer);
            }
          });
        }

        const locations = [];

        // Process each geo hashtag
        for (const geoHashtag of geoHashtags) {
          const area = LocationPrivacySystem.parseGeoHashtag(geoHashtag);
          if (area) {
            // Create PrivacyLocation from area
            const privacyLoc = createPrivacyLocation(
              area.center.lat,
              area.center.lng,
              `Area ${geoHashtag}`,
            );
            locations.push(privacyLoc);

            // Add marker and area for each location
            if (this.map) {
              const marker = window.L.marker([
                area.center.lat,
                area.center.lng,
              ]).addTo(this.map);
              marker.bindPopup(
                `Location: ${geoHashtag}<br>Area: ~${privacyLoc.precision}km²`,
              );

              // Show privacy area
              const bounds = window.L.latLngBounds(
                [area.southWest.lat, area.southWest.lng],
                [area.northEast.lat, area.northEast.lng],
              );
              window.L.rectangle(bounds, {
                color: "#3b82f6",
                weight: 2,
                fillOpacity: 0.2,
              }).addTo(this.map);
            }
          }
        }

        if (locations.length > 0) {
          // Set the first location as current privacy location
          this.currentPrivacyLocation = locations[0];

          // Fit map to show all locations
          if (this.map) {
            if (locations.length === 1) {
              this.map.setView(
                [locations[0].centerLat, locations[0].centerLng],
                16,
              );
            } else {
              const group = window.L.featureGroup(
                locations.map((loc) =>
                  window.L.marker([loc.centerLat, loc.centerLng]),
                ),
              );
              this.map.fitBounds(group.getBounds().pad(0.1));
            }
          }

          // Update feedback
          const locationFeedback = document.getElementById("location-feedback");
          if (locationFeedback) {
            const locationText =
              geoHashtags.length === 1
                ? "location"
                : `${geoHashtags.length} locations`;
            locationFeedback.innerHTML = `
              <div class="privacy-info">
                <h4>📍 Privacy-Friendly Location${geoHashtags.length > 1 ? "s" : ""}</h4>
                <p><strong>${geoHashtags.length} ${locationText}</strong> parsed and displayed on map</p>
                <p>Each geo hashtag covers approximately 1km² area</p>
                <p><strong>Your privacy is protected!</strong> 🛡️</p>
              </div>
            `;
            locationFeedback.className = "form-feedback success";
          }
        }
      } catch (error) {
        console.error("Error parsing geo hashtags:", error);
        this.showStatus("Error parsing location input", "error");
      }
    }
    // For regular addresses, we could add geocoding here in the future
    // For now, users can click on the map or use GPS
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

  /**
   * Debug OAuth metadata being served (for troubleshooting)
   */
  private async debugOAuthMetadata(): Promise<void> {
    try {
      console.log("🔍 [DEBUG] Fetching OAuth client metadata for debugging...");
      const response = await fetch(
        window.location.origin + "/client-metadata.json",
      );

      if (response.ok) {
        const metadata = (await response.json()) as {
          scope?: string;
          client_id?: string;
          redirect_uris?: string[];
        };
        console.log(
          "📋 [DEBUG] OAuth client metadata:",
          JSON.stringify(metadata, null, 2),
        );
        console.log("🎯 [DEBUG] OAuth scopes:", metadata.scope);
        console.log("🆔 [DEBUG] Client ID:", metadata.client_id);
        console.log("📍 [DEBUG] Redirect URIs:", metadata.redirect_uris);
      } else {
        console.error(
          "❌ [DEBUG] Failed to fetch OAuth metadata:",
          response.status,
          response.statusText,
        );
      }
    } catch (error) {
      console.error("❌ [DEBUG] Error fetching OAuth metadata:", error);
    }
  }

  /**
   * Render hashtags with reverse geocoding tooltips for location tags
   */
  private async renderHashtagsWithTooltips(
    hashtags: string[],
  ): Promise<string> {
    const renderedTags = await Promise.all(
      hashtags.map(async (tag) => {
        let tooltip = `Filter by ${this.escapeHtml(tag)}`;

        // Add reverse geocoding tooltip for geo hashtags
        if (LocationPrivacySystem.isValidGeoHashtag(tag)) {
          try {
            const locationTooltip = await getLocationTooltip(tag);
            tooltip = locationTooltip;
          } catch (error) {
            console.warn("Failed to get location tooltip for", tag, error);
          }
        }

        return `<span class="hashtag" onclick="wukkie.filterByTag('${this.escapeHtml(tag).replace(/'/g, "\\'")}')" style="display: inline-block; background: #f0f0f0; padding: 4px 8px; margin: 2px 4px 2px 0; border-radius: 12px; font-size: 0.85rem; color: #333; cursor: pointer;" title="${this.escapeHtml(tooltip)}">${this.escapeHtml(tag)}</span>`;
      }),
    );

    return renderedTags.join("");
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

      // Make wukkie globally available for debugging
      console.log("🟢 [DEBUG] Making wukkie globally available");
      try {
        (window as any).wukkie = wukkie;
        console.log("🟢 [DEBUG] Global wukkie assignment complete");
      } catch (error) {
        console.error("❌ [DEBUG] Error setting global wukkie:", error);
      }
    } catch (error) {
      console.error("❌ [DEBUG] Error creating WukkieApp:", error);
    }
  });
} else {
  console.log("🟢 [DEBUG] DOM already loaded, creating WukkieApp immediately");
  try {
    wukkie = new WukkieApp();
    console.log("🟢 [DEBUG] WukkieApp created successfully");

    // Make wukkie globally available for debugging
    console.log("🟢 [DEBUG] Making wukkie globally available");
    try {
      (window as any).wukkie = wukkie;
      console.log("🟢 [DEBUG] Global wukkie assignment complete");
    } catch (error) {
      console.error("❌ [DEBUG] Error setting global wukkie:", error);
    }
  } catch (error) {
    console.error("❌ [DEBUG] Error creating WukkieApp:", error);
  }
}

// Global assignment will happen after wukkie is initialized
