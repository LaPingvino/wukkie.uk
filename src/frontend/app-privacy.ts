// Privacy-enhanced Wukkie App with geo hashtag location system
console.log("🟢 [DEBUG] app-privacy.ts: File loading started");

// Import privacy location system and ATProto integration
import {
  LocationPrivacySystem,
  PrivacyLocation,
  createPrivacyLocation,
  extractGeoHashtags,
  isValidGeoHashtag
} from "./location-privacy.js";

import {
  ATProtoIssueManager,
  WukkieIssue,
  BlueskyPostOptions
} from "./atproto-integration.js";

import { BskyAgent } from '@atproto/api';

// Type definitions - Updated for privacy
interface BlueskySession {
  accessJwt: string;
  refreshJwt: string;
  handle: string;
  did: string;
  isDemo?: boolean;
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

class WukkiePrivacyApp {
  private map: L.Map | null = null;
  private currentPrivacyLocation: PrivacyLocation | null = null;
  private session: BlueskySession | null = null;
  private geocodeTimeout?: number;
  private loginModal: LoginModal;
  private authUnsubscribe?: () => void;
  private isLoading: boolean = false;
  private atprotoManager: ATProtoIssueManager | null = null;
  private bskyAgent: BskyAgent;

  constructor() {
    console.log("🟢 [DEBUG] WukkiePrivacyApp constructor: Starting");
    try {
      // Initialize Bluesky agent
      this.bskyAgent = new BskyAgent({ service: 'https://bsky.social' });

      // Initialize login modal
      this.loginModal = new LoginModal();

      // Setup authentication
      this.setupAuthentication();

      // Wait for DOM to be ready
      if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", () => this.init());
      } else {
        this.init();
      }
    } catch (error) {
      console.error("🔴 [ERROR] WukkiePrivacyApp constructor failed:", error);
    }
  }

  private setupAuthentication(): void {
    this.authUnsubscribe = blueskyAuth.subscribe((authState: AuthState) => {
      console.log("🟢 [DEBUG] Auth state changed:", authState.isAuthenticated);
      this.session = authState.session;

      if (authState.isAuthenticated && authState.session) {
        // Initialize ATProto manager when authenticated
        this.bskyAgent.session = {
          accessJwt: authState.session.accessJwt,
          refreshJwt: authState.session.refreshJwt,
          handle: authState.session.handle,
          did: authState.session.did
        };
        this.atprotoManager = new ATProtoIssueManager(this.bskyAgent);
      } else {
        this.atprotoManager = null;
      }

      this.updateAuthUI(authState.isAuthenticated, authState.session);
    });
  }

  private async init(): Promise<void> {
    console.log("🟢 [DEBUG] WukkiePrivacyApp init: Starting initialization");
    try {
      // Initialize map
      await this.initMap();

      // Setup event listeners
      this.setupEventListeners();

      // Load existing issues
      this.loadIssues();

      // Setup privacy location UI
      this.setupPrivacyLocationUI();

      console.log("✅ [DEBUG] WukkiePrivacyApp init: Completed successfully");
    } catch (error) {
      console.error("🔴 [ERROR] WukkiePrivacyApp init failed:", error);
      this.showStatus("App initialization failed. Please refresh the page.", "error");
    }
  }

  private setupPrivacyLocationUI(): void {
    // Update location display to show privacy info
    const locationFeedback = document.getElementById("location-feedback");
    if (locationFeedback) {
      locationFeedback.innerHTML = `
        <div class="privacy-info">
          <h4>📍 Privacy-Friendly Location</h4>
          <p>We use geo hashtags that only show your approximate area (~1km), not your exact location.</p>
          <p>Example: <code>#geo9c3xgp</code> covers about 1km² area</p>
        </div>
      `;
    }

    // Add location label input
    const locationInput = document.getElementById("location-input");
    if (locationInput?.parentElement) {
      const labelInput = document.createElement("input");
      labelInput.type = "text";
      labelInput.id = "location-label";
      labelInput.placeholder = "Optional location label (e.g., 'Near Central Station')";
      labelInput.className = "location-label-input";

      locationInput.parentElement.insertBefore(labelInput, locationInput.nextSibling);
    }
  }

  private async initMap(): Promise<void> {
    console.log("🟢 [DEBUG] Initializing map");

    if (!window.L) {
      throw new Error("Leaflet not loaded");
    }

    const mapElement = document.getElementById("map");
    if (!mapElement) {
      console.log("ℹ️ [INFO] Map element not found, skipping map initialization");
      return;
    }

    // Initialize map with default center
    this.map = window.L.map("map").setView([51.5074, -0.1278], 10);

    // Add tile layer
    window.L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: '© OpenStreetMap contributors',
      maxZoom: 18,
    }).addTo(this.map);

    // Add click handler for setting privacy location
    this.map.on('click', (e) => this.onMapClick(e));

    console.log("✅ [DEBUG] Map initialized successfully");
  }

  private async onMapClick(e: L.LeafletMouseEvent): Promise<void> {
    const { lat, lng } = e.latlng;

    // Get location label if provided
    const labelInput = document.getElementById("location-label") as HTMLInputElement;
    const label = labelInput?.value || undefined;

    // Create privacy location
    const privacyLocation = createPrivacyLocation(lat, lng, label);

    // Set reverse geocoding for context
    try {
      await this.setPrivacyLocation(privacyLocation, lat, lng);
    } catch (error) {
      console.error("Error setting privacy location:", error);
      this.showStatus("Failed to set location", "error");
    }
  }

  private async setPrivacyLocation(
    privacyLocation: PrivacyLocation,
    originalLat: number,
    originalLng: number
  ): Promise<void> {
    this.currentPrivacyLocation = privacyLocation;

    // Update map with privacy area instead of precise location
    if (this.map) {
      // Clear existing markers
      this.map.eachLayer((layer) => {
        if (layer instanceof window.L.Marker || layer instanceof window.L.Rectangle) {
          this.map!.removeLayer(layer);
        }
      });

      // Get the area covered by this privacy location
      const area = LocationPrivacySystem.parseGeoHashtag(privacyLocation.geoHashtag);

      if (area) {
        // Show the approximate area instead of exact point
        const bounds = window.L.latLngBounds(
          [area.southWest.lat, area.southWest.lng],
          [area.northEast.lat, area.northEast.lng]
        );

        // Add rectangle to show privacy area
        window.L.rectangle(bounds, {
          color: "#ff7800",
          weight: 2,
          fillOpacity: 0.1
        }).addTo(this.map);

        // Add center marker
        window.L.marker([area.center.lat, area.center.lng])
          .bindPopup(`
            <div class="privacy-popup">
              <strong>Privacy Location</strong><br>
              ${privacyLocation.geoHashtag}<br>
              ${privacyLocation.label ? `"${privacyLocation.label}"<br>` : ''}
              <small>~${privacyLocation.precision}km precision</small>
            </div>
          `)
          .addTo(this.map);

        // Fit map to show the area
        this.map.fitBounds(bounds, { padding: [20, 20] });
      }
    }

    // Update location input display
    const locationInput = document.getElementById("location-input") as HTMLInputElement;
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
            ${privacyLocation.label ? `<br>"${privacyLocation.label}"` : ''}
            <br><small>Approximate area: ~${privacyLocation.precision}km radius</small>
          </div>
        </div>
      `;
      locationFeedback.className = "form-feedback success";
    }

    console.log("Privacy location set:", privacyLocation);
  }

  private setupEventListeners(): void {
    console.log("🟢 [DEBUG] Setting up event listeners");

    // Get current privacy location
    const getLocationBtn = document.getElementById("get-location");
    getLocationBtn?.addEventListener("click", () => this.getCurrentPrivacyLocation());

    // Issue form submission
    const issueForm = document.getElementById("issue-form");
    issueForm?.addEventListener("submit", (e) => this.handleIssueSubmission(e));

    // Privacy location input parsing
    const locationInput = document.getElementById("location-input");
    locationInput?.addEventListener("input", (e) => this.parseLocationInput(e));

    // Authentication
    const loginBtn = document.getElementById("auth-login");
    loginBtn?.addEventListener("click", () => this.loginModal.show());

    const logoutBtn = document.getElementById("auth-logout");
    logoutBtn?.addEventListener("click", () => blueskyAuth.logout());

    // Search functionality
    const searchInput = document.getElementById("search-input");
    searchInput?.addEventListener("input", (e) => this.debounceSearch(e));

    console.log("✅ [DEBUG] Event listeners set up");
  }

  private async getCurrentPrivacyLocation(): Promise<void> {
    const feedback = document.getElementById("location-feedback") as HTMLElement;
    const getLocationBtn = document.getElementById("get-location") as HTMLButtonElement;

    if (!navigator.geolocation) {
      this.showStatus("Geolocation is not supported by this browser", "error");
      return;
    }

    // Update button state
    const originalText = getLocationBtn.textContent;
    getLocationBtn.textContent = "🔄 Getting location...";
    getLocationBtn.disabled = true;

    if (feedback) {
      feedback.innerHTML = '<div class="location-loading">📍 Getting your approximate area...</div>';
      feedback.className = "form-feedback loading";
    }

    try {
      // Get location label if provided
      const labelInput = document.getElementById("location-label") as HTMLInputElement;
      const label = labelInput?.value || undefined;

      // Use the privacy system to get current location
      const privacyLocation = await LocationPrivacySystem.createFromCurrentLocation(label);

      // Get precise coordinates for map centering (not stored)
      const position = await new Promise<GeolocationPosition>((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(resolve, reject, {
          enableHighAccuracy: false, // We don't need high accuracy
          timeout: 10000,
          maximumAge: 300000 // 5 minutes cache
        });
      });

      const { latitude, longitude } = position.coords;

      // Set the privacy location
      await this.setPrivacyLocation(privacyLocation, latitude, longitude);

      this.showStatus("Privacy location set successfully! Your exact location is protected.", "success");

    } catch (error) {
      console.error("Privacy location error:", error);
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

      this.showStatus(message, "error");

      if (feedback) {
        feedback.innerHTML = `<div class="location-error">${message}</div>`;
        feedback.className = "form-feedback error";
      }
    } finally {
      // Restore button state
      getLocationBtn.textContent = originalText;
      getLocationBtn.disabled = false;
    }
  }

  private parseLocationInput(e: Event): void {
    const input = e.target as HTMLInputElement;
    const value = input.value.trim();

    // Clear existing timeout
    if (this.geocodeTimeout) {
      clearTimeout(this.geocodeTimeout);
    }

    // Check if input is a geo hashtag
    if (isValidGeoHashtag(value)) {
      const area = LocationPrivacySystem.parseGeoHashtag(value);
      if (area && this.map) {
        // Show the area on map
        this.showPrivacyArea(value, area);
      }
      return;
    }

    // If it's an address, geocode it with a delay
    if (value.length > 3) {
      this.geocodeTimeout = setTimeout(() => {
        this.geocodeAddress(value);
      }, 500) as any;
    }
  }

  private showPrivacyArea(geoHashtag: string, area: any): void {
    if (!this.map) return;

    // Clear existing markers
    this.map.eachLayer((layer) => {
      if (layer instanceof window.L.Marker || layer instanceof window.L.Rectangle) {
        this.map!.removeLayer(layer);
      }
    });

    // Show the privacy area
    const bounds = window.L.latLngBounds(
      [area.southWest.lat, area.southWest.lng],
      [area.northEast.lat, area.northEast.lng]
    );

    window.L.rectangle(bounds, {
      color: "#ff7800",
      weight: 2,
      fillOpacity: 0.1
    }).addTo(this.map);

    window.L.marker([area.center.lat, area.center.lng])
      .bindPopup(`<strong>${geoHashtag}</strong><br>Privacy Area`)
      .addTo(this.map);

    this.map.fitBounds(bounds, { padding: [20, 20] });

    // Create privacy location object
    this.currentPrivacyLocation = {
      geoHashtag,
      plusCode: geoHashtag, // Placeholder
      centerLat: area.center.lat,
      centerLng: area.center.lng,
      precision: 1.0
    };
  }

  private async geocodeAddress(address: string): Promise<void> {
    try {
      const response = await fetch(
        `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(address)}&format=json&limit=1`
      );
      const results = await response.json();

      if (results && results.length > 0) {
        const result = results[0];
        const lat = parseFloat(result.lat);
        const lng = parseFloat(result.lon);

        // Get location label
        const labelInput = document.getElementById("location-label") as HTMLInputElement;
        const label = labelInput?.value || result.display_name;

        // Create privacy location from geocoded address
        const privacyLocation = createPrivacyLocation(lat, lng, label);
        await this.setPrivacyLocation(privacyLocation, lat, lng);
      }
    } catch (error) {
      console.error("Geocoding error:", error);
    }
  }

  private async handleIssueSubmission(e: Event): Promise<void> {
    e.preventDefault();

    if (this.isLoading) return;

    this.isLoading = true;

    try {
      const formData = new FormData(e.target as HTMLFormElement);
      const title = formData.get('title') as string;
      const description = formData.get('description') as string;
      const category = formData.get('category') as string;
      const hashtagsText = formData.get('hashtags') as string;

      // Validation
      if (!title || !description || !category) {
        this.showStatus("Please fill in all required fields", "error");
        return;
      }

      if (!this.currentPrivacyLocation) {
        this.showStatus("Please set a location first", "error");
        return;
      }

      // Parse hashtags
      const hashtags = hashtagsText.split(/[,\s]+/)
        .filter(tag => tag.trim())
        .map(tag => tag.startsWith('#') ? tag : `#${tag}`);

      // Add geo hashtag if not already present
      if (!hashtags.includes(this.currentPrivacyLocation.geoHashtag)) {
        hashtags.push(this.currentPrivacyLocation.geoHashtag);
      }

      // Create issue object
      const issueData: Omit<WukkieIssue, 'id' | 'createdAt' | 'blueskyUri'> = {
        title,
        description,
        category: category as any,
        priority: 'medium',
        status: 'open',
        location: this.currentPrivacyLocation,
        hashtags
      };

      // Check if user wants to post to Bluesky
      const postToBluesky = (document.getElementById('post-to-bluesky') as HTMLInputElement)?.checked || false;

      let issue: WukkieIssue;

      if (postToBluesky && this.atprotoManager) {
        // Create issue and post to Bluesky
        issue = await this.atprotoManager.createIssue(issueData, true, {
          includeLocation: true,
          linkToIssue: true
        });

        this.showStatus("Issue created and posted to Bluesky successfully! 🎉", "success");
      } else {
        // Create issue locally only
        issue = {
          ...issueData,
          id: `wukkie_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
          createdAt: new Date().toISOString()
        };

        // Store locally
        await this.storeIssueLocally(issue);
        this.showStatus("Issue created successfully! 📝", "success");
      }

      // Reset form
      (e.target as HTMLFormElement).reset();
      this.currentPrivacyLocation = null;

      // Clear map
      if (this.map) {
        this.map.eachLayer((layer) => {
          if (layer instanceof window.L.Marker || layer instanceof window.L.Rectangle) {
            this.map!.removeLayer(layer);
          }
        });
      }

      // Refresh issues list
      this.loadIssues();

    } catch (error) {
      console.error("Error creating issue:", error);
      this.showStatus("Failed to create issue. Please try again.", "error");
    } finally {
      this.isLoading = false;
    }
  }

  private async storeIssueLocally(issue: WukkieIssue): Promise<void> {
    const stored = localStorage.getItem('wukkie_issues') || '[]';
    const issues: WukkieIssue[] = JSON.parse(stored);
    issues.unshift(issue); // Add to beginning
    localStorage.setItem('wukkie_issues', JSON.stringify(issues));
  }

  private loadIssues(): void {
    const stored = localStorage.getItem('wukkie_issues') || '[]';
    const issues: WukkieIssue[] = JSON.parse(stored);

    const issuesContainer = document.getElementById('issues-container');
    if (!issuesContainer) return;

    if (issues.length === 0) {
      issuesContainer.innerHTML = '<p class="no-issues">No issues reported yet. Be the first to report an issue!</p>';
      return;
    }

    issuesContainer.innerHTML = issues.map(issue => this.renderIssue(issue)).join('');
  }

  private renderIssue(issue: WukkieIssue): string {
    const locationDisplay = issue.location.label
      ? `${issue.location.geoHashtag} (${issue.location.label})`
      : issue.location.geoHashtag;

    const hashtagsHtml = issue.hashtags.map(tag => `<span class="hashtag">${tag}</span>`).join(' ');

    const blueskyLink = issue.blueskyUri
      ? `<a href="https://bsky.app/profile/${this.session?.handle}/post/${issue.blueskyUri.split('/').pop()}" target="_blank" class="bluesky-link">View on Bluesky</a>`
      : '';

    return `
      <div class="issue-card" data-issue-id="${issue.id}">
        <div class="issue-header">
          <h3 class="issue-title">${this.escapeHtml(issue.title)}</h3>
          <span class="issue-status status-${issue.status}">${issue.status}</span>
        </div>
        <div class="issue-meta">
          <span class="issue-category">${issue.category}</span>
          <span class="issue-location">${locationDisplay}</span>
          <span class="issue-date">${new Date(issue.createdAt).toLocaleDateString()}</span>
        </div>
        <div class="issue-description">
          ${this.escapeHtml(issue.description)}
        </div>
        <div class="issue-hashtags">
          ${hashtagsHtml}
        </div>
        ${blueskyLink}
      </div>
    `;
  }

  private debounceSearch(e: Event): void {
    // Implement search functionality for issues by geo hashtags, categories, etc.
    const searchTerm = (e.target as HTMLInputElement).value.toLowerCase();

    const issueCards = document.querySelectorAll('.issue-card');
    issueCards.forEach((card) => {
      const title = card.querySelector('.issue-title')?.textContent?.toLowerCase() || '';
      const description = card.querySelector('.issue-description')?.textContent?.toLowerCase() || '';
      const hashtags = card.querySelector('.issue-hashtags')?.textContent?.toLowerCase() || '';
      const location = card.querySelector('.issue-location')?.textContent?.toLowerCase() || '';

      const matches = title.includes(searchTerm) ||
                     description.includes(searchTerm) ||
                     hashtags.includes(searchTerm) ||
                     location.includes(searchTerm);

      (card as HTMLElement).style.display = matches ? 'block' : 'none';
    });
  }

  private updateAuthUI(isAuthenticated: boolean, session: BlueskySession | null): void {
    const loginSection = document.getElementById("auth-login");
    const logoutSection = document.getElementById("auth-logout");
    const userInfo = document.getElementById("user-info");
    const postToBlueskyOption = document.getElementById("post-to-bluesky-section");

    if (isAuthenticated && session) {
      loginSection?.classList.add("hidden");
      logoutSection?.classList.remove("hidden");
      postToBlueskyOption?.classList.remove("hidden");

      if (userInfo) {
        userInfo.innerHTML = `
          <div class="user-profile">
            <span class="user-handle">@${session.handle}</span>
            ${session.isDemo ? '<span class="demo-badge">Demo Mode</span>' : ''}
          </div>
        `;
      }
    } else {
      loginSection?.classList.remove("hidden");
      logoutSection?.classList.add("hidden");
      postToBlueskyOption?.classList.add("hidden");

      if (userInfo) {
        userInfo.innerHTML = "";
      }
    }
  }

  private showStatus(message: string, type: "success" | "error" | "info" = "info"): void {
    const statusEl = document.getElementById("status") || this.createStatusElement();
    statusEl.textContent = message;
    statusEl.className = `status ${type}`;
    statusEl.style.display = "block";

    setTimeout(() => {
      statusEl.style.display = "none";
    }, 5000);
  }

  private createStatusElement(): HTMLElement {
    const statusEl = document.createElement("div");
    statusEl.id = "status";
    statusEl.className = "status";
    document.body.appendChild(statusEl);
    return statusEl;
  }

  private escapeHtml(text: string): string {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
  }

  // Cleanup method
  public destroy(): void {
    if (this.authUnsubscribe) {
      this.authUnsubscribe();
    }

    if (this.geocodeTimeout) {
      clearTimeout(this.geocodeTimeout);
    }
  }
}

// Initialize the privacy-enhanced app
console.log("🟢 [DEBUG] Creating WukkiePrivacyApp instance");

// Wait for dependencies to load
async function initApp() {
  try {
    // Ensure all dependencies are loaded
    await new Promise(resolve => setTimeout(resolve, 100));

    const app = new WukkiePrivacyApp();

    // Make app globally available for debugging
    (window as any).wukkieApp = app;

    console.log("✅ [DEBUG] WukkiePrivacyApp initialized successfully");
  } catch (error) {
    console.error("🔴 [ERROR] Failed to initialize WukkiePrivacyApp:", error);
  }
}

initApp();
