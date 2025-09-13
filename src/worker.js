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
        @media (max-width: 768px) {
            .main-grid { grid-template-columns: 1fr; gap: 1rem; }
            .header-content { flex-direction: column; align-items: flex-start; gap: 1rem; }
            .container { padding: 0 1rem; }
            button { padding: 0.75rem 1rem; font-size: 1rem; min-height: 44px; }
            .get-location-btn { font-size: 0.9rem; padding: 0.5rem; }
        }
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
        .issue-item {
            border: 1px solid #e5e7eb; border-radius: 8px; padding: 1rem; margin-bottom: 1rem;
            background: white; transition: box-shadow 0.2s, border-color 0.2s;
            cursor: pointer;
        }
        .issue-item:hover { box-shadow: 0 4px 12px rgba(0,0,0,0.1); border-color: #3b82f6; }
        .issue-header { display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 0.75rem; }
        .issue-title { font-weight: 600; font-size: 1.1rem; color: #1f2937; line-height: 1.4; }
        .issue-description { color: #4b5563; margin: 0.5rem 0; line-height: 1.5; }
        .issue-meta { display: flex; justify-content: space-between; align-items: center; margin-top: 0.75rem; font-size: 0.85rem; color: #6b7280; }
        .issue-distance { font-size: 0.75rem; color: #059669; background: #d1fae5; padding: 0.25rem 0.5rem; border-radius: 12px; font-weight: 500; }
        .hashtag { background: #eff6ff; color: #2563eb; padding: 0.25rem 0.5rem; border-radius: 12px; margin-right: 0.5rem; font-size: 0.8rem; font-weight: 500; }
        .issue-actions { display: flex; gap: 0.5rem; margin-top: 0.75rem; }
        .action-btn { background: #f3f4f6; color: #374151; border: none; padding: 0.5rem 0.75rem; border-radius: 6px; font-size: 0.8rem; cursor: pointer; transition: all 0.2s; }
        .action-btn:hover { background: #e5e7eb; transform: translateY(-1px); }
        .hidden { display: none !important; }
        .demo-notice { background: #fef3c7; color: #92400e; padding: 1rem; border-radius: 6px; margin-bottom: 2rem; border: 1px solid #fbbf24; }
        .loading-spinner { display: inline-block; width: 16px; height: 16px; border: 2px solid #f3f3f3; border-top: 2px solid #3498db; border-radius: 50%; animation: spin 1s linear infinite; margin-right: 8px; }
        @keyframes spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }
        .user-status { font-size: 0.8rem; color: #10b981; }
        .form-feedback { font-size: 0.8rem; color: #6b7280; margin-top: 0.25rem; }
        .form-feedback.error { color: #ef4444; }
        .form-feedback.success { color: #10b981; }
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
                    <div id="user-info" class="hidden">
                        <span id="username"></span>
                        <div class="user-status" id="user-status"></div>
                    </div>
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
            Login with your Bluesky account (requires <a href="https://bsky.app/settings/app-passwords" target="_blank" style="color: #2563eb;">app password</a>). Issues are currently stored locally.
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
                        <input type="text" id="title" required placeholder="e.g. Broken streetlight on Main Street" maxlength="200">
                        <small style="color: #6b7280; font-size: 0.8rem;">Describe the issue clearly and concisely</small>
                    </div>
                    <div class="form-group">
                        <label for="description">Description *</label>
                        <textarea id="description" required placeholder="Describe the issue in detail. What exactly is the problem? How does it affect people?" maxlength="2000"></textarea>
                        <small style="color: #6b7280; font-size: 0.8rem;">Be specific and include relevant details</small>
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
                        <div class="form-feedback" id="location-feedback"></div>
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
                        <div class="issue-header">
                            <div class="issue-title">Broken streetlight on Dam Square</div>
                            <div class="issue-distance">1.2km away</div>
                        </div>
                        <div class="issue-description">The streetlight has been flickering for weeks and is completely dark now. Makes walking unsafe at night.</div>
                        <div class="issue-meta">
                            <div><span class="hashtag">#streetlight</span><span class="hashtag">#infrastructure</span><span class="hashtag">#safety</span></div>
                            <div>1 day ago • @demo.bsky.social</div>
                        </div>
                        <div class="issue-actions">
                            <button class="action-btn">👍 12</button>
                            <button class="action-btn">💬 3</button>
                            <button class="action-btn">📍 View</button>
                        </div>
                    </div>
                    <div class="issue-item">
                        <div class="issue-header">
                            <div class="issue-title">Pothole on cycling path</div>
                            <div class="issue-distance">850m away</div>
                        </div>
                        <div class="issue-description">Large pothole is dangerous for cyclists. Already saw someone almost crash this morning.</div>
                        <div class="issue-meta">
                            <div><span class="hashtag">#pothole</span><span class="hashtag">#cycling</span><span class="hashtag">#transport</span></div>
                            <div>2 days ago • @cyclist.bsky.social</div>
                        </div>
                        <div class="issue-actions">
                            <button class="action-btn">👍 28</button>
                            <button class="action-btn">💬 7</button>
                            <button class="action-btn">📍 View</button>
                        </div>
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
        // Create and show login modal with better UX
        const modal = this.createLoginModal();
        document.body.appendChild(modal);

        // Focus the handle input
        setTimeout(() => {
            modal.querySelector('#modal-handle').focus();
        }, 100);
    }

    generateState() {
        return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
    }

    createLoginModal() {
        const modal = document.createElement('div');
        modal.style.cssText = `
            position: fixed; top: 0; left: 0; width: 100%; height: 100%;
            background: rgba(0,0,0,0.5); display: flex; align-items: center;
            justify-content: center; z-index: 1000;
        `;

        modal.innerHTML = `
            <div style="background: white; padding: 2rem; border-radius: 12px; max-width: 420px; width: 90%; box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);">
                <h3 style="margin-bottom: 1rem; color: #1f2937; font-size: 1.5rem;">Login with Bluesky</h3>
                <div id="modal-error" style="display: none; background: #fef2f2; color: #991b1b; padding: 0.75rem; border-radius: 6px; margin-bottom: 1rem; border: 1px solid #fecaca;"></div>
                <form id="login-form">
                    <div style="margin-bottom: 1rem;">
                        <label style="display: block; margin-bottom: 0.5rem; font-weight: 500; color: #374151;">Handle</label>
                        <input type="text" id="modal-handle" placeholder="user.bsky.social" required
                               style="width: 100%; padding: 0.75rem; border: 1px solid #d1d5db; border-radius: 6px; font-size: 1rem;">
                        <div class="form-feedback" id="handle-feedback"></div>
                    </div>
                    <div style="margin-bottom: 1.5rem;">
                        <label style="display: block; margin-bottom: 0.5rem; font-weight: 500; color: #374151;">App Password</label>
                        <input type="password" id="modal-password" placeholder="xxxx-xxxx-xxxx-xxxx" required
                               style="width: 100%; padding: 0.75rem; border: 1px solid #d1d5db; border-radius: 6px; font-size: 1rem;">
                        <small style="color: #6b7280; margin-top: 0.25rem; display: block;">
                            🔒 Create an app password at <a href="https://bsky.app/settings/app-passwords" target="_blank" style="color: #2563eb;">bsky.app/settings/app-passwords</a>
                        </small>
                    </div>
                    <div style="display: flex; gap: 1rem;">
                        <button type="submit" id="login-submit" style="flex: 1; background: #3b82f6; color: white; border: none; padding: 0.75rem; border-radius: 6px; cursor: pointer; font-weight: 500; transition: background 0.2s;">
                            Login
                        </button>
                        <button type="button" id="cancel-login" style="flex: 1; background: #6b7280; color: white; border: none; padding: 0.75rem; border-radius: 6px; cursor: pointer; transition: background 0.2s;">
                            Cancel
                        </button>
                    </div>
                </form>
            </div>
        `;

        // Handle form submission
        modal.querySelector('#login-form').addEventListener('submit', async (e) => {
            e.preventDefault();
            const submitBtn = modal.querySelector('#login-submit');
            const errorDiv = modal.querySelector('#modal-error');
            const originalText = submitBtn.textContent;

            // Clear previous errors
            errorDiv.style.display = 'none';

            // Show loading state
            submitBtn.innerHTML = '<span class="loading-spinner"></span>Logging in...';
            submitBtn.disabled = true;

            try {
                const handle = modal.querySelector('#modal-handle').value.trim();
                const password = modal.querySelector('#modal-password').value;

                await this.performLogin(handle, password);
                document.body.removeChild(modal);
            } catch (error) {
                submitBtn.innerHTML = originalText;
                submitBtn.disabled = false;
                errorDiv.textContent = error.message;
                errorDiv.style.display = 'block';

                // Also show in main app
                setTimeout(() => {
                    this.showStatus('Login failed: ' + error.message, 'error');
                }, 100);
            }
        });

        // Handle cancel
        modal.querySelector('#cancel-login').addEventListener('click', () => {
            document.body.removeChild(modal);
        });

        // Close on backdrop click
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                document.body.removeChild(modal);
            }
        });

        return modal;
    }

    async performLogin(handle, password) {
        if (!handle || !password) {
            throw new Error('Please enter both handle and password');
        }

        // Validate handle format
        if (!handle.includes('.')) {
            throw new Error('Handle must be in format: user.bsky.social');
        }

        try {
            const response = await fetch('https://bsky.social/xrpc/com.atproto.server.createSession', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ identifier: handle, password: password })
            });

            if (!response.ok) {
                const error = await response.json().catch(() => ({}));
                let errorMessage = 'Login failed. Check your credentials.';

                if (response.status === 401) {
                    errorMessage = 'Invalid credentials. Make sure you\'re using an app password, not your main password.';
                } else if (response.status === 429) {
                    errorMessage = 'Too many login attempts. Please try again in a few minutes.';
                } else if (error.message) {
                    errorMessage = error.message;
                }

                throw new Error(errorMessage);
            }

            this.session = await response.json();

            // Validate session has required fields
            if (!this.session.accessJwt || !this.session.handle) {
                throw new Error('Login succeeded but session data is incomplete');
            }

            localStorage.setItem('wukkie_session', JSON.stringify(this.session));
            this.updateAuthUI(true);
            this.showStatus(`Welcome back, @${this.session.handle}! 🎉`, 'success');

        } catch (networkError) {
            if (networkError.name === 'TypeError' && networkError.message.includes('fetch')) {
                throw new Error('Network error. Please check your internet connection.');
            }
            throw networkError;
        }
    }
</text>

<old_text line=55>
                <div class="auth-section">
                    <div id="user-info" class="hidden"><span id="username"></span></div>
                    <button id="login-btn">Login with Bluesky</button>
                    <button id="logout-btn" class="hidden">Logout</button>
                </div>

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
            document.getElementById('username').textContent = '@' + (this.session.handle || 'user');
            document.getElementById('user-status').textContent = '🟢 Connected';
        } else {
            document.getElementById('user-status').textContent = '';
        }
    }

    getCurrentLocation() {
        const button = document.getElementById('get-location');
        const feedback = document.getElementById('location-feedback');

        if (!navigator.geolocation) {
            feedback.textContent = 'Geolocation not supported by this browser';
            feedback.className = 'form-feedback error';
            return;
        }

        // Show loading state
        button.innerHTML = '<span class="loading-spinner"></span>Getting location...';
        button.disabled = true;
        feedback.textContent = 'Requesting location permission...';
        feedback.className = 'form-feedback';

        navigator.geolocation.getCurrentPosition(
            (position) => {
                this.setLocation(position.coords.latitude, position.coords.longitude);
                this.reverseGeocode(position.coords.latitude, position.coords.longitude);

                feedback.textContent = '✓ Location captured successfully';
                feedback.className = 'form-feedback success';

                button.innerHTML = '📍 Get Location';
                button.disabled = false;
            },
            (error) => {
                let errorMessage = 'Failed to get location';
                if (error.code === 1) {
                    errorMessage = 'Location access denied. You can enter the address manually.';
                } else if (error.code === 2) {
                    errorMessage = 'Location unavailable. Try entering the address manually.';
                } else if (error.code === 3) {
                    errorMessage = 'Location request timed out. Try again or enter manually.';
                }

                feedback.textContent = errorMessage;
                feedback.className = 'form-feedback error';

                button.innerHTML = '📍 Get Location';
                button.disabled = false;
            },
            {
                enableHighAccuracy: true,
                timeout: 15000,
                maximumAge: 60000
            }
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

        this.showStatus(`✨ Issue "${issueData.title}" reported successfully! (Demo mode - stored locally)`, 'success');
        e.target.reset();
        document.getElementById('location-feedback').textContent = '';
        this.loadLocalIssues();
    }

    loadLocalIssues() {
        const issues = JSON.parse(localStorage.getItem('wukkie_issues') || '[]');
        if (issues.length === 0) return;

        const listEl = document.getElementById('issues-list');
        listEl.innerHTML = issues.map(issue => `
            <div class="issue-item" onclick="wukkie.viewIssue('${issue.id}')">
                <div class="issue-header">
                    <div class="issue-title">${this.escapeHtml(issue.title)}</div>
                    ${issue.location ? `<div class="issue-distance">📍 ${issue.location.address ? this.truncateAddress(issue.location.address) : 'Location set'}</div>` : ''}
                </div>
                <div class="issue-description">${this.escapeHtml(issue.description)}</div>
                <div class="issue-meta">
                    <div>${issue.hashtags.map(tag => `<span class="hashtag">${tag.startsWith('#') ? tag : '#' + tag}</span>`).join('')}</div>
                    <div>${this.formatTimeAgo(new Date(issue.createdAt))} • @${issue.author}</div>
                </div>
                <div class="issue-actions" onclick="event.stopPropagation()">
                    <button class="action-btn" onclick="wukkie.voteIssue('${issue.id}', 'up')">👍 ${Math.floor(Math.random() * 20) + 1}</button>
                    <button class="action-btn" onclick="wukkie.commentOnIssue('${issue.id}')">💬 ${Math.floor(Math.random() * 10)}</button>
                    <button class="action-btn" onclick="wukkie.showOnMap('${issue.id}')">📍 View</button>
                </div>
            </div>
        `).join('');
    }

    formatTimeAgo(date) {
        const diff = Date.now() - date;
        const minutes = Math.floor(diff / 60000);
        const hours = Math.floor(diff / 3600000);
        const days = Math.floor(diff / 86400000);

        if (minutes < 1) return 'just now';
        if (minutes < 60) return `${minutes}m ago`;
        if (hours < 24) return `${hours}h ago`;
        if (days < 7) return `${days}d ago`;
        return new Date(date).toLocaleDateString();
    }

    truncateAddress(address) {
        if (!address) return '';
        const parts = address.split(',');
        if (parts.length > 2) {
            return parts.slice(0, 2).join(',') + '...';
        }
        return address.length > 25 ? address.substring(0, 25) + '...' : address;
    }

    viewIssue(issueId) {
        // Future: Show detailed issue view
        console.log('View issue:', issueId);
        this.showStatus('Issue details view coming soon!', 'success');
    }

    voteIssue(issueId) {
        if (!this.session) {
            this.showStatus('Please login to vote', 'error');
            return;
        }
        // Future: Implement actual voting
        this.showStatus('👍 Vote recorded! (Demo)', 'success');
    }

    commentOnIssue(issueId) {
        if (!this.session) {
            this.showStatus('Please login to comment', 'error');
            return;
        }
        // Future: Show comment dialog
        this.showStatus('💬 Comment feature coming soon!', 'success');
    }

    showOnMap(issueId) {
        // Future: Focus map on issue location
        this.showStatus('📍 Map focus feature coming soon!', 'success');
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
