/**
 * Cloudflare Worker for Wukkie.uk
 * Simple static file serving for proof of concept
 */

const HTML_CONTENT = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Wukkie.uk - Bug Tracker for the World</title>
    <link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css" />
    <style>
        * { box-sizing: border-box; margin: 0; padding: 0; }
        body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; line-height: 1.6; color: #333; background: #f5f5f5; }
        .container { max-width: 1200px; margin: 0 auto; padding: 0 20px; }
        header { background: #2563eb; color: white; padding: 1rem 0; margin-bottom: 2rem; }
        .header-content { display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; }
        h1 { font-size: 1.8rem; margin-bottom: 0.5rem; }
        .tagline { font-size: 0.9rem; opacity: 0.9; }
        .auth-section { display: flex; gap: 1rem; align-items: center; }
        button { background: #3b82f6; color: white; border: none; padding: 0.5rem 1rem; border-radius: 6px; cursor: pointer; font-size: 0.9rem; }
        button:hover { background: #2563eb; }
        button:disabled { background: #94a3b8; cursor: not-allowed; }
        .main-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 2rem; margin-bottom: 2rem; }
        @media (max-width: 768px) { .main-grid { grid-template-columns: 1fr; gap: 1rem; } }
        .card { background: white; border-radius: 8px; padding: 1.5rem; box-shadow: 0 2px 4px rgba(0,0,0,0.1); }
        .form-group { margin-bottom: 1rem; }
        label { display: block; margin-bottom: 0.5rem; font-weight: 500; }
        input, textarea, select { width: 100%; padding: 0.75rem; border: 1px solid #d1d5db; border-radius: 6px; font-size: 1rem; }
        textarea { resize: vertical; min-height: 100px; }
        .location-group { display: flex; gap: 0.5rem; align-items: end; }
        .location-input { flex: 1; }
        .get-location-btn { background: #10b981; white-space: nowrap; height: fit-content; }
        .get-location-btn:hover { background: #059669; }
        .status-message { padding: 0.75rem; border-radius: 6px; margin-bottom: 1rem; display: none; }
        .status-success { background: #dcfce7; color: #166534; border: 1px solid #bbf7d0; }
        .status-error { background: #fef2f2; color: #991b1b; border: 1px solid #fecaca; }
        #map { height: 300px; border-radius: 6px; margin-top: 1rem; }
        .issues-list { max-height: 500px; overflow-y: auto; }
        .issue-item { border: 1px solid #e5e7eb; border-radius: 6px; padding: 1rem; margin-bottom: 1rem; background: white; }
        .issue-title { font-weight: 600; font-size: 1.1rem; color: #1f2937; }
        .issue-description { color: #4b5563; margin: 0.5rem 0; }
        .hashtag { background: #eff6ff; color: #2563eb; padding: 0.25rem 0.5rem; border-radius: 4px; margin-right: 0.5rem; }
        .hidden { display: none !important; }
        .demo-notice { background: #fef3c7; color: #92400e; padding: 1rem; border-radius: 6px; margin-bottom: 2rem; border: 1px solid #fbbf24; }
    </style>
</head>
<body>
    <header>
        <div class="container">
            <div class="header-content">
                <div>
                    <h1>Wukkie.uk</h1>
                    <div class="tagline">oopsie woopsie de trein is stukkie wukkie...</div>
                </div>
                <div class="auth-section">
                    <div id="user-info" class="hidden"><span id="username"></span></div>
                    <button id="login-btn">Login with Bluesky</button>
                    <button id="logout-btn" class="hidden">Logout</button>
                </div>
            </div>
        </div>
    </header>

    <div class="container">
        <div class="demo-notice">
            <strong>🚧 Proof of Concept Demo</strong><br>
            This is an early proof of concept for world issue tracking on ATProto.
            Login works with your real Bluesky account, but issues are stored locally for now.
        </div>

        <div class="main-grid">
            <div class="card">
                <h2>Report an Issue</h2>
                <div id="auth-required">
                    <p>Please login with Bluesky to report issues.</p>
                </div>

                <form id="issue-form" class="hidden">
                    <div id="status-message" class="status-message"></div>
                    <div class="form-group">
                        <label for="title">Issue Title *</label>
                        <input type="text" id="title" required placeholder="e.g. Broken streetlight on Main Street">
                    </div>
                    <div class="form-group">
                        <label for="description">Description *</label>
                        <textarea id="description" required placeholder="Describe the issue in detail..."></textarea>
                    </div>
                    <div class="form-group">
                        <label for="category">Category</label>
                        <select id="category">
                            <option value="infrastructure">Infrastructure</option>
                            <option value="environment">Environment</option>
                            <option value="safety">Safety</option>
                            <option value="transport">Transport</option>
                            <option value="other">Other</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label for="location">Location</label>
                        <div class="location-group">
                            <input type="text" id="location" placeholder="Address or description" class="location-input">
                            <button type="button" class="get-location-btn" id="get-location">📍 Get Location</button>
                        </div>
                        <input type="hidden" id="lat">
                        <input type="hidden" id="lng">
                    </div>
                    <div class="form-group">
                        <label for="hashtags">Hashtags</label>
                        <input type="text" id="hashtags" placeholder="#pothole #mainstreet #infrastructure">
                    </div>
                    <button type="submit" id="submit-btn">Report Issue</button>
                </form>
                <div id="map"></div>
            </div>

            <div class="card">
                <h2>Recent Issues</h2>
                <div id="issues-list" class="issues-list">
                    <div class="issue-item">
                        <div class="issue-title">Broken streetlight on Dam Square</div>
                        <div class="issue-description">The streetlight has been flickering for weeks and is completely dark now.</div>
                        <div><span class="hashtag">#streetlight</span><span class="hashtag">#infrastructure</span></div>
                        <small>1 day ago • demo.bsky.social</small>
                    </div>
                    <div class="issue-item">
                        <div class="issue-title">Pothole on cycling path</div>
                        <div class="issue-description">Large pothole is dangerous for cyclists.</div>
                        <div><span class="hashtag">#pothole</span><span class="hashtag">#cycling</span></div>
                        <small>2 days ago • cyclist.bsky.social</small>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <script src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"></script>
    <script src="/app.js"></script>
</body>
</html>`;

const APP_JS = `
class WukkieApp {
    constructor() {
        this.map = null;
        this.session = null;
        this.init();
    }

    init() {
        this.setupEventListeners();
        this.initMap();
        this.checkExistingAuth();
    }

    setupEventListeners() {
        document.getElementById('login-btn').addEventListener('click', () => this.login());
        document.getElementById('logout-btn').addEventListener('click', () => this.logout());
        document.getElementById('issue-form').addEventListener('submit', (e) => this.submitIssue(e));
        document.getElementById('get-location').addEventListener('click', () => this.getCurrentLocation());
    }

    initMap() {
        this.map = L.map('map').setView([52.3676, 4.9041], 10);
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '© OpenStreetMap contributors'
        }).addTo(this.map);
        this.map.on('click', (e) => this.setLocation(e.latlng.lat, e.latlng.lng));
    }

    async checkExistingAuth() {
        const stored = localStorage.getItem('wukkie_session');
        if (stored) {
            try {
                this.session = JSON.parse(stored);
                this.updateAuthUI(true);
            } catch (error) {
                localStorage.removeItem('wukkie_session');
            }
        }
    }

    async login() {
        const handle = prompt('Enter your Bluesky handle (e.g., user.bsky.social):');
        const password = prompt('Enter your Bluesky app password:');
        if (!handle || !password) return;

        try {
            const response = await fetch('https://bsky.social/xrpc/com.atproto.server.createSession', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ identifier: handle, password: password })
            });

            if (!response.ok) throw new Error('Login failed');

            this.session = await response.json();
            localStorage.setItem('wukkie_session', JSON.stringify(this.session));
            this.updateAuthUI(true);
            this.showStatus('Successfully logged in!', 'success');
        } catch (error) {
            this.showStatus('Login failed. Check your credentials.', 'error');
        }
    }

    logout() {
        this.session = null;
        localStorage.removeItem('wukkie_session');
        this.updateAuthUI(false);
        this.showStatus('Logged out successfully', 'success');
    }

    updateAuthUI(loggedIn) {
        document.getElementById('login-btn').classList.toggle('hidden', loggedIn);
        document.getElementById('logout-btn').classList.toggle('hidden', !loggedIn);
        document.getElementById('user-info').classList.toggle('hidden', !loggedIn);
        document.getElementById('auth-required').classList.toggle('hidden', loggedIn);
        document.getElementById('issue-form').classList.toggle('hidden', !loggedIn);

        if (loggedIn && this.session) {
            document.getElementById('username').textContent = this.session.handle || 'User';
        }
    }

    getCurrentLocation() {
        if (!navigator.geolocation) {
            this.showStatus('Geolocation not supported', 'error');
            return;
        }

        navigator.geolocation.getCurrentPosition(
            (position) => {
                this.setLocation(position.coords.latitude, position.coords.longitude);
                this.reverseGeocode(position.coords.latitude, position.coords.longitude);
            },
            () => this.showStatus('Failed to get location', 'error')
        );
    }

    setLocation(lat, lng) {
        document.getElementById('lat').value = lat;
        document.getElementById('lng').value = lng;
        this.map.setView([lat, lng], 15);

        this.map.eachLayer(layer => {
            if (layer instanceof L.Marker) this.map.removeLayer(layer);
        });

        L.marker([lat, lng]).addTo(this.map).bindPopup('Issue location').openPopup();
    }

    async reverseGeocode(lat, lng) {
        try {
            const response = await fetch(\`https://nominatim.openstreetmap.org/reverse?format=json&lat=\${lat}&lon=\${lng}\`);
            const data = await response.json();
            if (data?.display_name) {
                document.getElementById('location').value = data.display_name;
            }
        } catch (error) {
            console.error('Reverse geocoding failed:', error);
        }
    }

    async submitIssue(e) {
        e.preventDefault();
        if (!this.session) return;

        const formData = new FormData(e.target);
        const issueData = {
            title: formData.get('title') || document.getElementById('title').value,
            description: formData.get('description') || document.getElementById('description').value,
            category: document.getElementById('category').value,
            location: {
                address: document.getElementById('location').value,
                lat: parseFloat(document.getElementById('lat').value),
                lng: parseFloat(document.getElementById('lng').value)
            },
            hashtags: (document.getElementById('hashtags').value || '').split(/\s+/).filter(tag => tag.startsWith('#')),
            createdAt: new Date().toISOString(),
            author: this.session.handle
        };

        // Store locally for demo
        const issues = JSON.parse(localStorage.getItem('wukkie_issues') || '[]');
        issues.unshift({...issueData, id: Date.now().toString()});
        localStorage.setItem('wukkie_issues', JSON.stringify(issues.slice(0, 20)));

        this.showStatus('Issue reported successfully! (Demo mode)', 'success');
        e.target.reset();
        this.loadLocalIssues();
    }

    loadLocalIssues() {
        const issues = JSON.parse(localStorage.getItem('wukkie_issues') || '[]');
        if (issues.length === 0) return;

        const listEl = document.getElementById('issues-list');
        listEl.innerHTML = issues.map(issue => \`
            <div class="issue-item">
                <div class="issue-title">\${this.escapeHtml(issue.title)}</div>
                <div class="issue-description">\${this.escapeHtml(issue.description)}</div>
                <div>\${issue.hashtags.map(tag => \`<span class="hashtag">\${tag}</span>\`).join('')}</div>
                <small>\${this.formatTimeAgo(new Date(issue.createdAt))} • \${issue.author}</small>
            </div>
        \`).join('');
    }

    formatTimeAgo(date) {
        const diff = Date.now() - date;
        const minutes = Math.floor(diff / 60000);
        const hours = Math.floor(diff / 3600000);
        const days = Math.floor(diff / 86400000);

        if (minutes < 60) return \`\${minutes}m ago\`;
        if (hours < 24) return \`\${hours}h ago\`;
        return \`\${days}d ago\`;
    }

    escapeHtml(text) {
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    }

    showStatus(message, type) {
        const statusEl = document.getElementById('status-message');
        statusEl.textContent = message;
        statusEl.className = \`status-message status-\${type}\`;
        statusEl.style.display = 'block';
        setTimeout(() => statusEl.style.display = 'none', 5000);
    }
}

document.addEventListener('DOMContentLoaded', () => new WukkieApp());
`;

export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    const { pathname } = url;

    const corsHeaders = {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type, Authorization",
    };

    if (request.method === "OPTIONS") {
      return new Response(null, { headers: corsHeaders });
    }

    try {
      if (pathname === "/app.js") {
        return new Response(APP_JS, {
          headers: {
            "Content-Type": "application/javascript; charset=utf-8",
            "Cache-Control": "public, max-age=3600",
            ...corsHeaders,
          },
        });
      }

      // Serve main HTML for all other routes (SPA)
      return new Response(HTML_CONTENT, {
        headers: {
          "Content-Type": "text/html; charset=utf-8",
          "Cache-Control": "public, max-age=300",
          ...corsHeaders,
        },
      });
    } catch (error) {
      console.error("Worker error:", error);
      return new Response("Internal Server Error", {
        status: 500,
        headers: corsHeaders,
      });
    }
  },
};
