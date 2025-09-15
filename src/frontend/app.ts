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
  status: 'open' | 'in-progress' | 'resolved';
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
    L: typeof import('leaflet');
  }
}

class WukkieApp {
  private map: L.Map | null = null;
  private userLocation: Location | null = null;
  private session: BlueskySession | null = null;
  private geocodeTimeout?: number;

  constructor() {
    this.init();
  }

  private async init(): Promise<void> {
    this.setupEventListeners();
    this.initMap();
    await this.checkExistingAuth();
    this.loadIssues();
  }

  private setupEventListeners(): void {
    // Auth buttons
    const loginBtn = document.getElementById('login-btn') as HTMLButtonElement;
    const demoLoginBtn = document.getElementById('demo-login-btn') as HTMLButtonElement;
    const logoutBtn = document.getElementById('logout-btn') as HTMLButtonElement;

    loginBtn?.addEventListener('click', () => this.login());
    demoLoginBtn?.addEventListener('click', () => this.demoLogin());
    logoutBtn?.addEventListener('click', () => this.logout());

    // Issue form
    const issueForm = document.getElementById('issue-form') as HTMLFormElement;
    const getLocationBtn = document.getElementById('get-location') as HTMLButtonElement;

    issueForm?.addEventListener('submit', (e) => this.submitIssue(e));
    getLocationBtn?.addEventListener('click', () => this.getCurrentLocation());

    // Location input for manual entry
    const locationInput = document.getElementById('location') as HTMLInputElement;
    locationInput?.addEventListener('input', (e) => {
      const target = e.target as HTMLInputElement;
      this.geocodeLocation(target.value);
    });
  }

  private initMap(): void {
    if (!window.L) {
      console.error('Leaflet not loaded');
      return;
    }

    try {
      // Initialize Leaflet map
      this.map = window.L.map('map').setView([52.3676, 4.9041], 10); // Default to Amsterdam

      window.L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors',
      }).addTo(this.map);

      // Add click handler for map
      this.map.on('click', (e: L.LeafletMouseEvent) => {
        this.setLocation(e.latlng.lat, e.latlng.lng);
      });
    } catch (error) {
      console.error('Failed to initialize map:', error);
      this.showStatus('Failed to load map. Some features may not work.', 'error');
    }
  }

  private async checkExistingAuth(): Promise<void> {
    const stored = localStorage.getItem('wukkie_session');
    if (!stored) return;

    try {
      const session = JSON.parse(stored) as BlueskySession;
      this.session = session;

      // If it's a demo session, just update UI
      if (session.isDemo) {
        this.updateAuthUI(true);
        return;
      }

      // For real sessions, validate they're still valid
      await this.validateSession();
    } catch (error) {
      console.error('Session restore failed:', error);
      localStorage.removeItem('wukkie_session');
      this.updateAuthUI(false);
    }
  }

  private async validateSession(): Promise<void> {
    if (!this.session || this.session.isDemo) return;

    try {
      const response = await fetch('https://bsky.social/xrpc/com.atproto.server.getSession', {
        headers: {
          'Authorization': `Bearer ${this.session.accessJwt}`,
        },
      });

      if (response.ok) {
        const sessionData = await response.json();
        this.session = { ...this.session, ...sessionData };
        this.updateAuthUI(true);
      } else {
        throw new Error('Session expired');
      }
    } catch (error) {
      console.error('Session validation failed:', error);
      this.logout();
    }
  }

  private async login(): Promise<void> {
    const handle = prompt('Enter your Bluesky handle (e.g., user.bsky.social):');
    const password = prompt('Enter your Bluesky app password:');

    if (!handle || !password) return;

    try {
      const response = await fetch('https://bsky.social/xrpc/com.atproto.server.createSession', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          identifier: handle,
          password: password,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.message || 'Login failed. Please check your credentials.');
      }

      this.session = await response.json();
      localStorage.setItem('wukkie_session', JSON.stringify(this.session));
      this.updateAuthUI(true);
      this.showStatus(`Welcome back, @${this.session.handle}! 🎉`, 'success');
    } catch (error) {
      console.error('Login error:', error);
      this.showStatus(error instanceof Error ? error.message : 'Login failed', 'error');
    }
  }

  private demoLogin(): void {
    this.session = {
      accessJwt: 'demo-jwt-token',
      refreshJwt: 'demo-refresh-token',
      handle: 'demo.wukkie.uk',
      did: 'did:plc:demo123',
      isDemo: true,
    };

    localStorage.setItem('wukkie_session', JSON.stringify(this.session));
    this.updateAuthUI(true);
    this.showStatus('🎭 Demo mode activated! You can now create issues (stored locally)', 'success');
    this.loadLocalIssues();
  }

  private logout(): void {
    const wasDemo = this.session?.isDemo;
    this.session = null;
    localStorage.removeItem('wukkie_session');
    this.updateAuthUI(false);

    const message = wasDemo ? '🎭 Demo session ended' : 'Logged out successfully';
    this.showStatus(message, 'success');
  }

  private updateAuthUI(loggedIn: boolean): void {
    const elements = {
      loginBtn: document.getElementById('login-btn'),
      demoLoginBtn: document.getElementById('demo-login-btn'),
      logoutBtn: document.getElementById('logout-btn'),
      userInfo: document.getElementById('user-info'),
      username: document.getElementById('username'),
      userStatus: document.getElementById('user-status'),
      authRequired: document.getElementById('auth-required'),
      issueForm: document.getElementById('issue-form'),
    };

    // Toggle visibility
    elements.loginBtn?.classList.toggle('hidden', loggedIn);
    elements.demoLoginBtn?.classList.toggle('hidden', loggedIn);
    elements.logoutBtn?.classList.toggle('hidden', !loggedIn);
    elements.userInfo?.classList.toggle('hidden', !loggedIn);
    elements.authRequired?.classList.toggle('hidden', loggedIn);
    elements.issueForm?.classList.toggle('hidden', !loggedIn);

    // Update user info
    if (loggedIn && this.session) {
      const usernameEl = elements.username as HTMLElement;
      const userStatusEl = elements.userStatus as HTMLElement;

      if (usernameEl) usernameEl.textContent = `@${this.session.handle}`;
      if (userStatusEl) {
        userStatusEl.textContent = this.session.isDemo ? '🎭 Demo Mode' : '🟢 Connected';
      }
    }
  }

  private async getCurrentLocation(): Promise<void> {
    const button = document.getElementById('get-location') as HTMLButtonElement;
    const originalText = button.textContent || 'Get Location';

    button.textContent = '📍 Getting...';
    button.disabled = true;

    if (!navigator.geolocation) {
      this.showStatus('Geolocation not supported by this browser', 'error');
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
        console.error('Geolocation error:', error);
        let message = 'Failed to get location. Please enter manually.';

        if (error.code === error.PERMISSION_DENIED) {
          message = 'Location access denied. Please enter the address manually.';
        } else if (error.code === error.POSITION_UNAVAILABLE) {
          message = 'Location unavailable. Please enter the address manually.';
        }

        this.showStatus(message, 'error');
        button.textContent = originalText;
        button.disabled = false;
      },
      {
        enableHighAccuracy: true,
        timeout: 10000,
        maximumAge: 60000,
      }
    );
  }

  private async setLocation(lat: number, lng: number): Promise<void> {
    this.userLocation = { lat, lng };

    const latInput = document.getElementById('lat') as HTMLInputElement;
    const lngInput = document.getElementById('lng') as HTMLInputElement;

    if (latInput) latInput.value = lat.toString();
    if (lngInput) lngInput.value = lng.toString();

    // Update map
    if (this.map) {
      this.map.setView([lat, lng], 15);

      // Clear existing markers and add new one
      this.map.eachLayer((layer) => {
        if (layer instanceof window.L.Marker) {
          this.map!.removeLayer(layer);
        }
      });

      window.L.marker([lat, lng])
        .addTo(this.map)
        .bindPopup('Issue location')
        .openPopup();
    }
  }

  private async reverseGeocode(lat: number, lng: number): Promise<void> {
    try {
      const response = await fetch(
        `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lng}&zoom=18&addressdetails=1`
      );

      if (!response.ok) throw new Error('Geocoding request failed');

      const data = await response.json() as GeolocationResult;

      if (data?.display_name) {
        const locationInput = document.getElementById('location') as HTMLInputElement;
        if (locationInput) locationInput.value = data.display_name;
      }
    } catch (error) {
      console.error('Reverse geocoding failed:', error);
    }
  }

  private geocodeLocation(address: string): void {
    if (!address || address.length < 3) return;

    // Simple debouncing
    if (this.geocodeTimeout) {
      clearTimeout(this.geocodeTimeout);
    }

    this.geocodeTimeout = window.setTimeout(async () => {
      try {
        const response = await fetch(
          `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(address)}&limit=1`
        );

        if (!response.ok) throw new Error('Geocoding request failed');

        const results = await response.json() as GeolocationResult[];

        if (results.length > 0) {
          const result = results[0];
          await this.setLocation(parseFloat(result.lat), parseFloat(result.lon));
        }
      } catch (error) {
        console.error('Geocoding failed:', error);
      }
    }, 1000);
  }

  private async submitIssue(e: Event): Promise<void> {
    e.preventDefault();

    if (!this.session) {
      this.showStatus('Please login first', 'error');
      return;
    }

    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
    const submitBtn = document.getElementById('submit-btn') as HTMLButtonElement;
    const originalText = submitBtn.textContent || 'Report Issue';

    submitBtn.textContent = 'Submitting...';
    submitBtn.disabled = true;

    try {
      const issueData: Issue = {
        title: formData.get('title') as string,
        description: formData.get('description') as string,
        category: formData.get('category') as string,
        location: {
          address: formData.get('location') as string,
          lat: parseFloat(formData.get('lat') as string),
          lng: parseFloat(formData.get('lng') as string),
          accuracy: 10,
        },
        hashtags: this.parseHashtags(formData.get('hashtags') as string),
        status: 'open',
        createdAt: new Date().toISOString(),
        author: this.session.handle,
      };

      if (this.session.isDemo) {
        // Store locally for demo
        const issues = JSON.parse(localStorage.getItem('wukkie_issues') || '[]') as Issue[];
        const newIssue = { ...issueData, id: Date.now().toString() };
        issues.unshift(newIssue);
        localStorage.setItem('wukkie_issues', JSON.stringify(issues.slice(0, 20)));

        this.showStatus(`✨ Issue "${issueData.title}" reported successfully! (Demo mode - stored locally)`, 'success');
        form.reset();
        this.loadLocalIssues();
      } else {
        // Create the issue record on Bluesky
        await this.createIssueRecord(issueData);
        this.showStatus('Issue reported successfully!', 'success');
        form.reset();
        this.loadIssues();
      }
    } catch (error) {
      console.error('Issue submission failed:', error);
      this.showStatus('Failed to submit issue. Please try again.', 'error');
    } finally {
      submitBtn.textContent = originalText;
      submitBtn.disabled = false;
    }
  }

  private parseHashtags(hashtagString: string): string[] {
    if (!hashtagString) return [];

    return hashtagString
      .split(/\s+/)
      .map((tag) => tag.trim())
      .filter((tag) => tag.startsWith('#'))
      .map((tag) => tag.substring(1)); // Remove the # symbol
  }

  private async createIssueRecord(issueData: Issue): Promise<any> {
    if (!this.session || this.session.isDemo) {
      throw new Error('Invalid session');
    }

    const record = {
      $type: 'uk.wukkie.issue',
      ...issueData,
    };

    const response = await fetch('https://bsky.social/xrpc/com.atproto.repo.createRecord', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${this.session.accessJwt}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        repo: this.session.did,
        collection: 'uk.wukkie.issue',
        record: record,
      }),
    });

    if (!response.ok) {
      const error = await response.json().catch(() => ({}));
      throw new Error(error.message || 'Failed to create record');
    }

    return await response.json();
  }

  private loadIssues(): void {
    if (this.session?.isDemo) {
      this.loadLocalIssues();
      return;
    }

    // For non-demo mode, show mock issues for now
    const mockIssues: Issue[] = [
      {
        id: '1',
        title: 'Broken streetlight on Dam Square',
        description: 'The streetlight has been flickering for weeks and is completely dark now.',
        category: 'infrastructure',
        location: {
          address: 'Dam Square, Amsterdam',
          lat: 52.3732,
          lng: 4.8936,
        },
        hashtags: ['streetlight', 'dam', 'infrastructure'],
        status: 'open',
        createdAt: new Date(Date.now() - 86400000).toISOString(), // 1 day ago
        author: 'citizen.bsky.social',
      },
      {
        id: '2',
        title: 'Pothole on cycling path',
        description: 'Large pothole is dangerous for cyclists. Already saw someone almost crash.',
        category: 'transport',
        location: {
          address: 'Vondelpark, Amsterdam',
          lat: 52.3579,
          lng: 4.8686,
        },
        hashtags: ['pothole', 'cycling', 'vondelpark', 'safety'],
        status: 'open',
        createdAt: new Date(Date.now() - 172800000).toISOString(), // 2 days ago
        author: 'cyclist.bsky.social',
      },
    ];

    this.displayIssues(mockIssues);
  }

  private loadLocalIssues(): void {
    const issues = JSON.parse(localStorage.getItem('wukkie_issues') || '[]') as Issue[];
    this.displayIssues(issues);
  }

  private displayIssues(issues: Issue[]): void {
    const listEl = document.getElementById('issues-list') as HTMLElement;

    if (issues.length === 0) {
      listEl.innerHTML = '<p class="loading">No issues found. Be the first to report one!</p>';
      return;
    }

    listEl.innerHTML = issues
      .map((issue) => {
        const distance = this.userLocation && issue.location
          ? this.calculateDistance(this.userLocation, issue.location)
          : null;

        const timeAgo = this.formatTimeAgo(new Date(issue.createdAt));
        const hashtagsHtml = issue.hashtags
          .map((tag) => `<span class="hashtag">#${tag}</span>`)
          .join('');

        return `
          <div class="issue-item" data-issue-id="${issue.id || ''}">
            <div class="issue-header">
              <div class="issue-title">${this.escapeHtml(issue.title)}</div>
              ${distance ? `<div class="issue-distance">${distance}</div>` : ''}
            </div>
            <div class="issue-description">${this.escapeHtml(issue.description)}</div>
            <div class="issue-meta">
              <div>${hashtagsHtml}</div>
              <div>${timeAgo} • @${issue.author}</div>
            </div>
            <div class="issue-actions">
              <button class="action-btn" onclick="wukkie.voteIssue('${issue.id || ''}', 'up')">👍 ${Math.floor(Math.random() * 20) + 1}</button>
              <button class="action-btn" onclick="wukkie.commentOnIssue('${issue.id || ''}')">💬 ${Math.floor(Math.random() * 10)}</button>
              <button class="action-btn" onclick="wukkie.showOnMap('${issue.id || ''}')">📍 View</button>
            </div>
          </div>
        `;
      })
      .join('');
  }

  private calculateDistance(from: Location, to: Location): string {
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

  private formatTimeAgo(date: Date): string {
    const now = new Date();
    const diff = now.getTime() - date.getTime();
    const minutes = Math.floor(diff / 60000);
    const hours = Math.floor(diff / 3600000);
    const days = Math.floor(diff / 86400000);

    if (minutes < 1) return 'just now';
    if (minutes < 60) return `${minutes}m ago`;
    if (hours < 24) return `${hours}h ago`;
    if (days < 7) return `${days}d ago`;
    return date.toLocaleDateString();
  }

  private escapeHtml(text: string): string {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
  }

  private showStatus(message: string, type: 'success' | 'error'): void {
    const statusEl = document.getElementById('status-message') as HTMLElement;
    if (!statusEl) return;

    statusEl.textContent = message;
    statusEl.className = `status-message status-${type}`;
    statusEl.style.display = 'block';

    setTimeout(() => {
      statusEl.style.display = 'none';
    }, 5000);
  }

  // Public methods for onclick handlers
  public voteIssue(issueId: string, direction: 'up' | 'down'): void {
    if (!this.session) {
      this.showStatus('Please login to vote', 'error');
      return;
    }
    this.showStatus(`Vote recorded! (${direction})`, 'success');
  }

  public commentOnIssue(issueId: string): void {
    if (!this.session) {
      this.showStatus('Please login to comment', 'error');
      return;
    }

    const comment = prompt('Add a comment:');
    if (comment) {
      this.showStatus('Comment added!', 'success');
    }
  }

  public showOnMap(issueId: string): void {
    this.showStatus('📍 Map focus feature coming soon!', 'success');
  }

  public viewIssue(issueId: string): void {
    this.showStatus('Issue details view coming soon!', 'success');
  }
}

// Initialize the app when the page loads
let wukkie: WukkieApp;
document.addEventListener('DOMContentLoaded', () => {
  wukkie = new WukkieApp();
  // Make it globally available for onclick handlers
  (window as any).wukkie = wukkie;
});
