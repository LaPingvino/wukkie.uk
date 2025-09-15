# Wukkie.uk

**oopsie woopsie de trein is stukkie wukkie...**

A **privacy-first** issue tracking platform built on Bluesky/ATProto. Report and track real-world issues using decentralized social infrastructure with location privacy protection via geo hashtags.

## 🚧 Current Status

This privacy-first platform demonstrates:
- ✅ **Privacy-Protected Location System** using geo hashtags (~1km precision, no GPS tracking)
- ✅ **Secure OAuth authentication** with Bluesky (no more app passwords!)
- ✅ **ATProto Integration** with custom lexicon for structured issue data
- ✅ **Bluesky Social Features** with threading and community engagement
- ✅ Issue creation with privacy-friendly location data
- ✅ Interactive maps showing privacy areas instead of exact coordinates
- ✅ Modern UI with privacy indicators and controls
- ✅ Local storage with privacy protection (no GPS coordinates saved)
- 🚧 Custom lexicon deployment to ATProto network
- 🚧 Enhanced community discovery and search features

## 🎯 Vision

Why do software projects have quality bug tracking while world issues are stuck in slow political systems? This project explores how decentralized social protocols could enable better civic engagement and issue coordination **while protecting user privacy**.

**🛡️ Privacy-First Approach**: Unlike traditional civic platforms that collect precise GPS coordinates, Wukkie.uk uses geo hashtags (like `#geo9c3xgp`) that represent ~1km² areas. This prevents location tracking while maintaining effective community issue discovery and resolution.

## 🛠️ Tech Stack

- **Frontend**: TypeScript with privacy-first location system
- **Location**: Plus Codes converted to geo hashtags for privacy protection
- **Social**: ATProto/Bluesky with custom lexicon (`uk.wukkie.issue`)
- **Maps**: OpenStreetMap + Leaflet with privacy area visualization
- **Auth**: Bluesky OAuth 2.0 (secure, no passwords)
- **Storage**: Local-first with optional ATProto sync
- **Backend**: Cloudflare Workers (future)

## 🏗️ Architecture

The project uses a privacy-first TypeScript architecture:

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

1. **🔐 Secure OAuth Login**
   - Click "Login with Bluesky" to open the modern login modal
   - Enter your Bluesky handle (e.g., `user.bsky.social`)
   - Get redirected to Bluesky's secure OAuth page
   - **No passwords stored on this site!** ✨

2. **📍 Report an Issue**
   - Fill out the issue form with title and description
   - Click "Get Location" or click directly on the map
   - Add relevant hashtags for better organization
   - Submit the issue to help your community

3. **🗺️ Browse Issues**
   - View reported issues in the right panel
   - Issues show distance from your current location
   - Click "📍 View" to see issues on the map
   - Vote and comment features coming soon!

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

## 🧪 Testing

**⚠️ CRITICAL**: All code changes MUST include tests and pass the full test suite before committing.

### Quick Test Commands
```bash
# Run all tests (REQUIRED before every commit)
node test.js                     # 58 tests across 3 files

# Run with verbose output  
node test.js -v

# Run specific test file
node --test --experimental-strip-types src/frontend/location-privacy.test.ts
```

### Test Requirements
- ✅ **58/58 tests must pass** before any commit
- ✅ **Add tests for new features** (required)
- ✅ **Update tests when modifying existing code**
- ✅ **Test case-insensitive geo hashtags**: `#geo9c3xgp`, `#GEO9C3XGP`, `#Geo9C3XGP`
- ✅ **Use only valid Plus Code characters**: `23456789CFGHJMPQRVWX`

### Test Coverage
- **Location Privacy** (29 tests): Core geo hashtag functionality, case sensitivity, validation
- **Issue Management** (14 tests): CRUD operations, location integration, form validation  
- **Multiple Locations** (15 tests): Multi-location parsing, validation, edge cases

### Expected Output
```
🧪 Wukkie.uk Test Runner
PASS
ok      src     894.0ms
Tests run: 58, Passed: 58, Failed: 0 ✅
```

📚 **Detailed Documentation**: See [TESTING.md](TESTING.md) for comprehensive testing guidelines, best practices, and troubleshooting.

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
- **🛡️ Privacy-First Locations**: Geo hashtags (~1km precision) instead of exact GPS coordinates
- **🔒 OAuth Authentication**: Modern, secure login flow - no app passwords needed!
- **🦋 Bluesky Integration**: Post issues to Bluesky with threading support
- **🎨 Beautiful Login Modal**: User-friendly interface with helpful guidance
- **📍 Location-based Issues**: Privacy-protected area capture with optional labels
- **🗺️ Interactive Maps**: Click to set privacy areas, visualize ~1km coverage zones
- **🔍 Smart Discovery**: Find nearby issues using geo hashtag search
- **📊 Issue Categories**: Infrastructure, Environment, Safety, Transport, etc.
- **🏷️ Smart Hashtag System**: Geographic and subject hashtags for organization
- **📱 Responsive Design**: Works perfectly on desktop and mobile
- **🎭 Demo Mode**: Try all features without creating an account
- **🔌 Offline Capable**: Works without internet using Plus Code navigation

### Planned Features
- **ATProto Storage**: Store issues as records in your Bluesky data repository
- **Federated Discovery**: Find issues across the decentralized network
- **Voting System**: Community validation of issue importance
- **Comment Threads**: Discussion and updates on issues
- **Local Hashtag Algorithm**: Intelligent geographic relevance scoring
- **Authority Integration**: Optional integration with local government systems

## 🏗️ Architecture

### Frontend
Modern TypeScript application featuring:
- **OAuth Integration**: Secure authentication with @atcute/oauth-browser-client
- **Interactive Maps**: Leaflet with location picking and issue visualization  
- **Modern UI**: CSS Grid layout with beautiful animations and status messages
- **Smart Storage**: LocalStorage for demo data with session management
- **Responsive Design**: Mobile-first approach with progressive enhancement

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