# Getting Started with Wukkie.uk

This guide will get you up and running with the **privacy-first** Wukkie.uk platform in under 10 minutes. Our system uses geo hashtags instead of exact GPS coordinates to protect your privacy while enabling effective community issue reporting.

## 📋 Prerequisites

Before you begin, make sure you have:

- **Node.js 18+** - [Download here](https://nodejs.org/)
- **Git** - [Download here](https://git-scm.com/)
- **A Cloudflare account** - [Sign up free](https://cloudflare.com/)
- **A Bluesky account** - [Join here](https://bsky.app/)

### Prepare Your Bluesky Account

1. Go to [bsky.app](https://bsky.app) and make sure you have an account
2. Note your handle (e.g., `yourname.bsky.social`)
3. **No app passwords needed!** The app uses secure OAuth authentication

## 🛡️ Privacy-First Features

**New in this version:**
- **Geo Hashtags**: Your location is converted to privacy-friendly codes like `#geo9c3xgp` (~1km precision)
- **No GPS Tracking**: We never store or transmit your exact coordinates
- **Optional Labels**: Add human-readable context like "Near Central Station" without compromising privacy
- **ATProto Integration**: Issues can be posted to Bluesky with privacy protection built-in

## 🚀 Quick Setup

### 1. Clone and Install

```bash
# Clone the repository
git clone https://github.com/your-username/wukkie.uk.git
cd wukkie.uk

# Install dependencies
npm install
```

### 2. Start Development Server

```bash
# Start local development
npm run dev
```

You should see output like:
```
⎔ Starting local server...
⎔ Listening on http://localhost:8787
```

### 3. Test the Application

1. Open your browser to `http://localhost:8787`
2. You should see the Wukkie.uk interface
3. Click "Login with Bluesky" to open the secure login modal
4. Enter your Bluesky handle (e.g., `yourname.bsky.social`)
5. You'll be redirected to Bluesky's secure OAuth page
6. Login with your regular Bluesky credentials
7. You'll be redirected back and see "Welcome back!" message

### 4. Test Issue Creation

1. After logging in, you'll see the issue creation form
2. Fill out a test issue:
   - **Title**: "Test streetlight issue"
   - **Description**: "Testing the issue reporting system"
   - **Category**: Infrastructure
   - **Privacy Location**: Click "📍 Get My Area" to set your approximate location
   - **Location Label**: (Optional) "Near Main Street Station" 
   - **Hashtags**: `#test #streetlight`
   - **Post to Bluesky**: (Optional) Check to share with broader community
3. Click "Report Issue"
4. Your issue should appear in the "Recent Issues" section

## 🧪 Mandatory Testing Requirements

**⚠️ CRITICAL**: Before making ANY code changes, you MUST understand and follow our testing approach.

### 🚨 Pre-Development Setup

```bash
# Run the test suite (REQUIRED before any development)
node test.js

# Expected output:
# 🧪 Wukkie.uk Test Runner
# PASS
# ok      src     894.0ms
# Tests run: 58, Passed: 58, Failed: 0 ✅
```

### Mandatory Testing Workflow

1. **Before ANY code changes**: Run `node test.js` - all 58 tests MUST pass ✅
2. **During development**: Add tests for new functionality (required, not optional)
3. **After changes**: Run `node test.js` again - maintain 100% pass rate
4. **Before committing**: Final test run - ZERO failing tests allowed
5. **For bug fixes**: Write a test that reproduces the bug first

### Test Coverage Areas
- **Location Privacy System** (29 tests): Geo hashtag validation, case-insensitive support
- **Issue Management Integration** (14 tests): CRUD operations, form validation
- **Multiple Locations Handling** (15 tests): Multi-location parsing, edge cases

### Key Testing Requirements
- ✅ **Case-insensitive geo hashtags**: Test `#geo9c3xgp`, `#GEO9C3XGP`, `#Geo9C3XGP`
- ✅ **Valid Plus Code characters only**: Use `23456789CFGHJMPQRVWX` (case insensitive)
- ✅ **Edge case testing**: Empty input, malformed hashtags, boundary conditions
- ✅ **Comprehensive assertions**: Descriptive error messages in all tests

### Quick Test Commands
```bash
node test.js                     # Run all tests (58 tests)
node test.js -v                 # Verbose output with details
node test.js src/frontend/       # Run tests in specific directory

# Run individual test files
node --test --experimental-strip-types src/frontend/location-privacy.test.ts
node --test --experimental-strip-types src/frontend/issue-management.test.ts
node --test --experimental-strip-types src/frontend/multiple-locations.test.ts
```

### Development Rules
- 🔒 **No commits without passing tests** - CI will reject failing test suites
- 📝 **New features require tests** - No exceptions, tests are specifications
- 🐛 **Bug fixes need reproduction tests** - Prove the bug exists, then fix it
- 🔄 **Refactoring preserves test coverage** - All existing tests must continue passing

**📚 Complete Documentation**: See [TESTING.md](TESTING.md) for comprehensive guidelines, best practices, test-driven development workflow, and troubleshooting.

**🎯 Remember**: Tests aren't just validation—they're living documentation and safety nets. Our privacy-first location system depends on reliable, well-tested code.

## 🎯 What Works Right Now

- ✅ Secure OAuth authentication with Bluesky
- ✅ Modern login modal with user guidance
- ✅ Issue creation form
- ✅ Privacy-protected location capture (geo hashtags, ~1km precision)
- ✅ Interactive maps showing privacy areas instead of exact points
- ✅ Address to geo hashtag conversion
- ✅ Local storage with privacy protection (no GPS coordinates saved)
- ✅ Bluesky integration with threading support
- ✅ Responsive design

## 🚧 What's Coming

- 🔄 ATProto record storage (currently uses localStorage)
- 🔄 Federated issue discovery
- 🔄 Voting and commenting
- 🔄 Better location relevance algorithms

## 🚀 Deploy to Cloudflare Workers

### 1. Setup Cloudflare CLI

```bash
# Login to Cloudflare (opens browser)
npx wrangler login
```

### 2. Deploy to Development Environment

```bash
# Deploy to dev environment
npm run deploy:dev
```

You'll get a URL like: `https://wukkie-uk-dev.your-subdomain.workers.dev`

### 3. Deploy to Production

```bash
# Deploy to production
npm run deploy
```

### 4. Custom Domain (Optional)

1. Go to [Cloudflare Dashboard](https://dash.cloudflare.com/)
2. Navigate to Workers & Pages
3. Find your `wukkie-uk` worker
4. Click "Add Custom Domain"
5. Enter `wukkie.uk` (if you own the domain)

## 🐛 Troubleshooting

### "Login failed" Error

- **Check your handle**: Should be in format `username.bsky.social`
- **Network issues**: Try again in a few seconds
- **Browser compatibility**: Make sure you're using a modern browser
- **Clear browser cache**: Try refreshing or clearing browser data

### Map Not Loading

- **Check browser console**: Look for JavaScript errors
- **Internet connection**: Maps require internet access
- **Ad blockers**: Some ad blockers block map tiles

### Location Not Working

- **Browser permissions**: Allow location access when prompted
- **HTTPS required**: Geolocation only works on HTTPS (works on localhost)
- **Manual entry**: You can type addresses or geo hashtags (e.g., #geo9c3xgp)
- **Privacy protection**: Only approximate areas are captured, never exact coordinates

### Issues Not Saving

- **Currently expected**: Issues only save in browser localStorage (demo mode)
- **Clear storage**: Try clearing browser data if issues seem stuck
- **Different browser**: Test in an incognito/private window

## 🔧 Development Tips

### Project Structure
```
src/
├── worker.js     # Main Cloudflare Worker (contains HTML + JS)
├── index.html    # Original HTML (for reference)
└── app.js        # Original JavaScript (for reference)
```

### Making Changes

1. **Edit `src/worker.js`** - This contains the embedded HTML and JavaScript
2. **Restart dev server** - Changes require restart: `Ctrl+C` then `npm run dev`
3. **Test locally** - Always test on `localhost:8787` before deploying
4. **Deploy** - Use `npm run deploy:dev` for testing, `npm run deploy` for production

### Key Files

- `wrangler.toml` - Cloudflare Workers configuration
- `package.json` - Dependencies and scripts
- `DESIGN.md` - Detailed project architecture

### Environment Variables

Create `.dev.vars` for local secrets:
```
SOME_SECRET=your-secret-here
```

## 📱 Mobile Testing

The app is designed to work on mobile devices:

1. **Deploy to Cloudflare** (required for HTTPS)
2. **Access via HTTPS URL** (geolocation needs HTTPS)
3. **Test on actual devices** (mobile behavior differs from desktop)
4. **Try the privacy demo** by running `node demo-privacy-system.js`

## 🤝 Contributing

Ready to contribute? Here's how:

1. **Fork the repository** on GitHub
2. **Create a feature branch**: `git checkout -b feature-name`
3. **Make your changes** following the patterns in the code
4. **Test locally**: `npm run dev`
5. **Submit a pull request**

### Areas to Improve

- **ATProto integration**: Real record storage instead of localStorage
- **Better UX**: Improved mobile experience and loading states
- **Advanced privacy features**: Enhanced geo hashtag algorithms  
- **Government integration**: Official response channels via ATProto
- **Content moderation**: Community guidelines and reporting
- **Mobile PWA**: Enhanced offline capabilities

## ❓ Need Help?

- **Check the Issues**: [GitHub Issues](https://github.com/your-username/wukkie.uk/issues)
- **Read DESIGN.md**: Detailed technical architecture
- **Cloudflare Docs**: [Workers documentation](https://developers.cloudflare.com/workers/)
- **ATProto Docs**: [AT Protocol documentation](https://atproto.com/)

## 🎉 Success!

If you can:
1. ✅ Login with Bluesky
2. ✅ Create an issue with location
3. ✅ See it appear in the issues list

You've successfully set up Wukkie.uk! Now you're ready to explore decentralized civic engagement. 🚂✨

---

**Next Steps:**
- Try creating issues from different locations
- Experiment with different hashtags
- Think about what features would make this useful for your community
- Consider contributing to the project!