class WukkieApp {
  constructor() {
    this.map = null;
    this.userLocation = null;
    this.session = null;
    this.agent = null;

    this.init();
  }

  async init() {
    // Initialize the app
    this.setupEventListeners();
    this.initMap();
    this.checkExistingAuth();
    this.loadIssues();
  }

  setupEventListeners() {
    // Auth buttons
    document
      .getElementById("login-btn")
      .addEventListener("click", () => this.login());
    document
      .getElementById("demo-login-btn")
      .addEventListener("click", () => this.demoLogin());
    document
      .getElementById("logout-btn")
      .addEventListener("click", () => this.logout());

    // Issue form
    document
      .getElementById("issue-form")
      .addEventListener("submit", (e) => this.submitIssue(e));
    document
      .getElementById("get-location")
      .addEventListener("click", () => this.getCurrentLocation());

    // Location input for manual entry
    document
      .getElementById("location")
      .addEventListener("input", (e) => this.geocodeLocation(e.target.value));
  }

  initMap() {
    // Initialize Leaflet map
    this.map = L.map("map").setView([52.3676, 4.9041], 10); // Default to Amsterdam

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: "© OpenStreetMap contributors",
    }).addTo(this.map);

    // Add click handler for map
    this.map.on("click", (e) => {
      this.setLocation(e.latlng.lat, e.latlng.lng);
    });
  }

  async checkExistingAuth() {
    // Check if user is already logged in
    const stored = localStorage.getItem("wukkie_session");
    if (stored) {
      try {
        this.session = JSON.parse(stored);

        // If it's a demo session, just update UI
        if (this.session.isDemo) {
          this.updateAuthUI(true);
          return;
        }

        await this.initBlueskyAgent();
        this.updateAuthUI(true);
      } catch (error) {
        console.error("Session restore failed:", error);
        localStorage.removeItem("wukkie_session");
        this.updateAuthUI(false);
      }
    }
  }

  async login() {
    const handle = prompt(
      "Enter your Bluesky handle (e.g., user.bsky.social):",
    );
    const password = prompt("Enter your Bluesky password or app password:");

    if (!handle || !password) return;

    try {
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
        throw new Error("Login failed");
      }

      this.session = await response.json();
      localStorage.setItem("wukkie_session", JSON.stringify(this.session));

      await this.initBlueskyAgent();
      this.updateAuthUI(true);
      this.showStatus("Successfully logged in!", "success");
    } catch (error) {
      console.error("Login error:", error);
      this.showStatus("Login failed. Please check your credentials.", "error");
    }
  }

  async initBlueskyAgent() {
    // Initialize our connection to Bluesky
    // For now, we'll use direct API calls
    if (!this.session) return;

    // Test the session
    try {
      const response = await fetch(
        "https://bsky.social/xrpc/com.atproto.server.getSession",
        {
          headers: {
            Authorization: `Bearer ${this.session.accessJwt}`,
          },
        },
      );

      if (!response.ok) {
        throw new Error("Session invalid");
      }

      const sessionData = await response.json();
      this.session = { ...this.session, ...sessionData };
    } catch (error) {
      console.error("Session validation failed:", error);
      this.logout();
    }
  }

  logout() {
    const wasDemo = this.session && this.session.isDemo;
    this.session = null;
    this.agent = null;
    localStorage.removeItem("wukkie_session");
    this.updateAuthUI(false);

    const message = wasDemo
      ? "🎭 Demo session ended"
      : "Logged out successfully";
    this.showStatus(message, "success");
  }

  demoLogin() {
    // Create a fake session for demo purposes
    this.session = {
      accessJwt: "demo-jwt-token",
      refreshJwt: "demo-refresh-token",
      handle: "demo.wukkie.uk",
      did: "did:plc:demo123",
      isDemo: true,
    };

    localStorage.setItem("wukkie_session", JSON.stringify(this.session));
    this.updateAuthUI(true);
    this.showStatus(
      "🎭 Demo mode activated! You can now create issues (stored locally)",
      "success",
    );
  }

  updateAuthUI(loggedIn) {
    const loginBtn = document.getElementById("login-btn");
    const logoutBtn = document.getElementById("logout-btn");
    const userInfo = document.getElementById("user-info");
    const username = document.getElementById("username");
    const authRequired = document.getElementById("auth-required");
    const issueForm = document.getElementById("issue-form");

    if (loggedIn && this.session) {
      loginBtn.classList.add("hidden");
      logoutBtn.classList.remove("hidden");
      userInfo.classList.remove("hidden");
      username.textContent = this.session.handle || "User";
      authRequired.classList.add("hidden");
      issueForm.classList.remove("hidden");
    } else {
      loginBtn.classList.remove("hidden");
      logoutBtn.classList.add("hidden");
      userInfo.classList.add("hidden");
      authRequired.classList.remove("hidden");
      issueForm.classList.add("hidden");
    }
  }

  async getCurrentLocation() {
    const button = document.getElementById("get-location");
    const originalText = button.textContent;
    button.textContent = "📍 Getting...";
    button.disabled = true;

    if (!navigator.geolocation) {
      this.showStatus("Geolocation not supported by this browser", "error");
      button.textContent = originalText;
      button.disabled = false;
      return;
    }

    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const lat = position.coords.latitude;
        const lng = position.coords.longitude;

        await this.setLocation(lat, lng);
        await this.reverseGeocode(lat, lng);

        button.textContent = originalText;
        button.disabled = false;
      },
      (error) => {
        console.error("Geolocation error:", error);
        this.showStatus(
          "Failed to get location. Please enter manually.",
          "error",
        );
        button.textContent = originalText;
        button.disabled = false;
      },
      {
        enableHighAccuracy: true,
        timeout: 10000,
        maximumAge: 60000,
      },
    );
  }

  async setLocation(lat, lng) {
    this.userLocation = { lat, lng };
    document.getElementById("lat").value = lat;
    document.getElementById("lng").value = lng;

    // Update map
    this.map.setView([lat, lng], 15);

    // Clear existing markers and add new one
    this.map.eachLayer((layer) => {
      if (layer instanceof L.Marker) {
        this.map.removeLayer(layer);
      }
    });

    L.marker([lat, lng])
      .addTo(this.map)
      .bindPopup("Issue location")
      .openPopup();
  }

  async reverseGeocode(lat, lng) {
    try {
      const response = await fetch(
        `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lng}&zoom=18&addressdetails=1`,
      );
      const data = await response.json();

      if (data && data.display_name) {
        document.getElementById("location").value = data.display_name;
      }
    } catch (error) {
      console.error("Reverse geocoding failed:", error);
    }
  }

  async geocodeLocation(address) {
    if (!address || address.length < 3) return;

    // Simple debouncing
    clearTimeout(this.geocodeTimeout);
    this.geocodeTimeout = setTimeout(async () => {
      try {
        const response = await fetch(
          `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(address)}&limit=1`,
        );
        const results = await response.json();

        if (results.length > 0) {
          const result = results[0];
          await this.setLocation(
            parseFloat(result.lat),
            parseFloat(result.lon),
          );
        }
      } catch (error) {
        console.error("Geocoding failed:", error);
      }
    }, 1000);
  }

  async submitIssue(e) {
    e.preventDefault();

    if (!this.session) {
      this.showStatus("Please login first", "error");
      return;
    }

    const submitBtn = document.getElementById("submit-btn");
    const originalText = submitBtn.textContent;
    submitBtn.textContent = "Submitting...";
    submitBtn.disabled = true;

    try {
      const formData = new FormData(e.target);
      const issueData = {
        title: formData.get("title"),
        description: formData.get("description"),
        category: formData.get("category"),
        priority: formData.get("priority"),
        location: {
          address: formData.get("location"),
          lat: parseFloat(formData.get("lat")),
          lng: parseFloat(formData.get("lng")),
          accuracy: 10, // meters
        },
        hashtags: this.parseHashtags(formData.get("hashtags")),
        status: "open",
        createdAt: new Date().toISOString(),
      };

      // Create the issue record on Bluesky
      await this.createIssueRecord(issueData);

      this.showStatus("Issue reported successfully!", "success");
      e.target.reset();
      this.loadIssues(); // Refresh the list
    } catch (error) {
      console.error("Issue submission failed:", error);
      this.showStatus("Failed to submit issue. Please try again.", "error");
    }

    submitBtn.textContent = originalText;
    submitBtn.disabled = false;
  }

  parseHashtags(hashtagString) {
    if (!hashtagString) return [];

    return hashtagString
      .split(/\s+/)
      .map((tag) => tag.trim())
      .filter((tag) => tag.startsWith("#"))
      .map((tag) => tag.substring(1)); // Remove the # symbol
  }

  async createIssueRecord(issueData) {
    // Create a record in the user's ATProto repository
    const record = {
      $type: "uk.wukkie.issue",
      ...issueData,
    };

    const response = await fetch(
      "https://bsky.social/xrpc/com.atproto.repo.createRecord",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${this.session.accessJwt}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          repo: this.session.did,
          collection: "uk.wukkie.issue",
          record: record,
        }),
      },
    );

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message || "Failed to create record");
    }

    return await response.json();
  }

  async loadIssues() {
    const loadingEl = document.getElementById("issues-loading");
    const listEl = document.getElementById("issues-list");

    loadingEl.style.display = "block";
    listEl.innerHTML = "";

    try {
      // For MVP, we'll show a placeholder message
      // In a real implementation, we'd query the ATProto network for issue records
      const mockIssues = [
        {
          title: "Broken streetlight on Dam Square",
          description:
            "The streetlight has been flickering for weeks and is completely dark now.",
          category: "infrastructure",
          priority: "medium",
          location: {
            address: "Dam Square, Amsterdam",
            lat: 52.3732,
            lng: 4.8936,
          },
          hashtags: ["streetlight", "dam", "infrastructure"],
          createdAt: new Date(Date.now() - 86400000).toISOString(), // 1 day ago
          author: "citizen.bsky.social",
        },
        {
          title: "Pothole on cycling path",
          description:
            "Large pothole is dangerous for cyclists. Already saw someone almost crash.",
          category: "transport",
          priority: "high",
          location: {
            address: "Vondelpark, Amsterdam",
            lat: 52.3579,
            lng: 4.8686,
          },
          hashtags: ["pothole", "cycling", "vondelpark", "safety"],
          createdAt: new Date(Date.now() - 172800000).toISOString(), // 2 days ago
          author: "cyclist.bsky.social",
        },
      ];

      this.displayIssues(mockIssues);
    } catch (error) {
      console.error("Failed to load issues:", error);
      listEl.innerHTML =
        '<p class="loading">Failed to load issues. Please refresh to try again.</p>';
    }

    loadingEl.style.display = "none";
  }

  displayIssues(issues) {
    const listEl = document.getElementById("issues-list");

    if (issues.length === 0) {
      listEl.innerHTML =
        '<p class="loading">No issues found. Be the first to report one!</p>';
      return;
    }

    listEl.innerHTML = issues
      .map((issue) => {
        const distance = this.userLocation
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
                            ${issue.hashtags.map((tag) => `<span class="hashtag">#${tag}</span>`).join("")}
                        </div>
                        <div>${timeAgo} • ${issue.author}</div>
                    </div>
                    <div class="issue-actions">
                        <button class="vote-btn" onclick="wukkie.voteIssue('${issue.id}', 'up')">👍 Vote</button>
                        <button class="vote-btn" onclick="wukkie.commentOnIssue('${issue.id}')">💬 Comment</button>
                    </div>
                </div>
            `;
      })
      .join("");
  }

  calculateDistance(from, to) {
    // Simple haversine formula for distance calculation
    const R = 6371; // Earth's radius in km
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

  formatTimeAgo(date) {
    const now = new Date();
    const diff = now - date;
    const minutes = Math.floor(diff / 60000);
    const hours = Math.floor(diff / 3600000);
    const days = Math.floor(diff / 86400000);

    if (minutes < 60) return `${minutes}m ago`;
    if (hours < 24) return `${hours}h ago`;
    return `${days}d ago`;
  }

  escapeHtml(text) {
    const div = document.createElement("div");
    div.textContent = text;
    return div.innerHTML;
  }

  showStatus(message, type) {
    const statusEl = document.getElementById("status-message");
    statusEl.textContent = message;
    statusEl.className = `status-message status-${type}`;
    statusEl.style.display = "block";

    setTimeout(() => {
      statusEl.style.display = "none";
    }, 5000);
  }

  // Placeholder methods for future functionality
  async voteIssue(issueId, direction) {
    if (!this.session) {
      this.showStatus("Please login to vote", "error");
      return;
    }
    // TODO: Implement voting
    this.showStatus(`Vote recorded! (${direction})`, "success");
  }

  async commentOnIssue(issueId) {
    if (!this.session) {
      this.showStatus("Please login to comment", "error");
      return;
    }

    const comment = prompt("Add a comment:");
    if (comment) {
      // TODO: Implement commenting
      this.showStatus("Comment added!", "success");
    }
  }
}

// Initialize the app when the page loads
let wukkie;
document.addEventListener("DOMContentLoaded", () => {
  wukkie = new WukkieApp();
});
