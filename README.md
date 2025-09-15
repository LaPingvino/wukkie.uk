# Wukkie.uk

**oopsie woopsie de trein is stukkie wukkie...**

A proof-of-concept bug tracker for the world, built on Bluesky/ATProto. Report and track real-world issues using decentralized social infrastructure.

## 🚧 Current Status

This is an early proof-of-concept demonstrating:
- ✅ Bluesky authentication
- ✅ Issue creation with location data
- ✅ Interactive maps with OpenStreetMap
- ✅ Local storage for demo purposes
- 🚧 ATProto record storage (planned)
- 🚧 Federated issue discovery (planned)
- 🚧 Voting and commenting system (planned)

## 🎯 Vision

Why do software projects have quality bug tracking while world issues are stuck in slow political systems? This project explores how decentralized social protocols could enable better civic engagement and issue coordination.

## 🛠️ Tech Stack

- **Frontend**: Vanilla JavaScript with Leaflet maps
- **Backend**: Cloudflare Workers
- **Auth**: Bluesky/ATProto
- **Maps**: OpenStreetMap + Leaflet
- **Storage**: ATProto (planned), localStorage (demo)
- **Frontend**: TypeScript, Vite, Leaflet
- **Backend**: Cloudflare Workers

## 🏗️ Architecture

The project now uses a modern TypeScript-based architecture:

```
wukkie.uk/
├── src/
│   ├── frontend/           # Frontend TypeScript app
│   │   ├── app.ts         # Main application logic
│   │   ├── index.html     # HTML template
│   │   └── styles.css     # Styles
│   └── worker/            # Cloudflare Worker
│       └── index.ts       # Worker entry point
├── dist/                  # Built files
├── vite.config.ts         # Vite configuration
├── tsconfig.json          # TypeScript configuration
└── build.sh              # Build script
```

## 🚀 Quick Start

### Prerequisites

- Node.js 18+
- A Cloudflare account
- A Bluesky account for testing

### Local Development

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/wukkie.uk.git
   cd wukkie.uk
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start local development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:8787`

### Deployment to Cloudflare Workers

1. **Login to Cloudflare**
   ```bash
   npx wrangler login
   ```

2. **Deploy to staging**
   ```bash
   npm run deploy:dev
   ```

3. **Deploy to production**
   ```bash
   npm run deploy
   ```

4. **Configure custom domain** (optional)
   - In Cloudflare dashboard, go to Workers & Pages
   - Add custom domain `wukkie.uk` to your worker

## 📱 How to Use

1. **Login with Bluesky**
   - Click "Login with Bluesky"
   - Enter your handle (e.g., `user.bsky.social`)
   - Use an App Password (not your main password!)

2. **Report an Issue**
   - Fill out the issue form
   - Click "Get Location" or click on the map
   - Add relevant hashtags
   - Submit the issue

3. **Browse Issues**
   - View reported issues in the right panel
   - Issues show distance from your location
   - Click on hashtags to filter (planned)

## 🔧 Configuration

### Environment Variables

Create a `.dev.vars` file for local development:
```
ENVIRONMENT=development
```

### Wrangler Configuration

The `wrangler.toml` file contains deployment settings:
- Modify the `name` field for your deployment
- Add your custom domains under `routes`
- Configure KV namespaces if needed

## 🗺️ Project Structure

```
wukkie.uk/
├── src/
│   ├── worker.js          # Cloudflare Workers entry point
│   ├── index.html         # Main HTML (embedded in worker)
│   └── app.js             # Frontend JavaScript (embedded in worker)
├── wrangler.toml          # Cloudflare Workers config
├── package.json           # Dependencies and scripts
├── DESIGN.md             # Detailed project design
└── README.md             # This file
```

## 🎨 Features

### Current Features
- **Bluesky Authentication**: Secure login with your existing Bluesky account
- **Location-based Issues**: GPS location capture and address geocoding
- **Interactive Maps**: Click to set location, view issues geographically
- **Issue Categories**: Infrastructure, Environment, Safety, Transport, etc.
- **Hashtag System**: Tag issues for better organization
- **Responsive Design**: Works on desktop and mobile

### Planned Features
- **ATProto Storage**: Store issues as records in your Bluesky data repository
- **Federated Discovery**: Find issues across the decentralized network
- **Voting System**: Community validation of issue importance
- **Comment Threads**: Discussion and updates on issues
- **Local Hashtag Algorithm**: Intelligent geographic relevance scoring
- **Authority Integration**: Optional integration with local government systems

## 🏗️ Architecture

### Frontend
Simple vanilla JavaScript application with:
- Leaflet for interactive maps
- Fetch API for Bluesky integration
- LocalStorage for demo data persistence
- Responsive CSS Grid layout

### Backend
Cloudflare Workers handling:
- Static file serving
- CORS configuration
- Future: ATProto record creation/querying
- Future: Location-based search APIs

### Data Flow
1. User authenticates with Bluesky
2. Issues stored in user's ATProto repository
3. Public issues discoverable via network queries
4. Geographic relevance calculated client-side

## 🤝 Contributing

This is a personal proof-of-concept project, but suggestions and feedback are welcome!

### Development Workflow
1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test locally with `npm run dev`
5. Submit a pull request

### Areas for Contribution
- **ATProto Integration**: Help implement proper record storage
- **Geographic Algorithms**: Improve location relevance scoring  
- **UX/UI**: Better mobile experience and accessibility
- **Government APIs**: Research integration possibilities
- **Content Moderation**: Community guidelines and tools

## 📝 License

MIT License - see [LICENSE](LICENSE) file for details.

## 🙋‍♂️ FAQ

**Q: Is this connected to real government systems?**
A: Not yet. This is a proof-of-concept exploring how decentralized issue tracking could work.

**Q: Do I need to create a new account?**
A: No! You use your existing Bluesky account.

**Q: Are issues stored permanently?**
A: Currently they're stored locally for demo purposes. Full ATProto integration is planned.

**Q: Can I use this for my city/organization?**
A: Absolutely! It's MIT licensed and designed to be adaptable.

**Q: How is this different from other issue trackers?**
A: It's built on decentralized social protocols, meaning no single entity controls the data.

## 📞 Contact

- **Project Creator**: Joop Kiefte
- **Issues**: [GitHub Issues](https://github.com/your-username/wukkie.uk/issues)
- **Bluesky**: [@your-handle.bsky.social](https://bsky.app/profile/your-handle.bsky.social)

---

*"oopsie woopsie de trein is stukkie wukkie..."* - When things break, let's fix them together! 🚂✨