# Getting Started with Wukkie.uk

This guide will get you up and running with the Wukkie.uk proof-of-concept in under 10 minutes.

## 📋 Prerequisites

Before you begin, make sure you have:

- **Node.js 18+** - [Download here](https://nodejs.org/)
- **Git** - [Download here](https://git-scm.com/)
- **A Cloudflare account** - [Sign up free](https://cloudflare.com/)
- **A Bluesky account** - [Join here](https://bsky.app/)

### Generate a Bluesky App Password

1. Go to [bsky.app](https://bsky.app) and log in
2. Navigate to Settings → App Passwords
3. Create a new app password (save this - you'll need it for testing)
4. **Never use your main Bluesky password in the app!**

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
3. Click "Login with Bluesky"
4. Enter your Bluesky handle (e.g., `yourname.bsky.social`)
5. Enter your **app password** (not your main password!)
6. You should see "Successfully logged in!"

### 4. Test Issue Creation

1. After logging in, you'll see the issue creation form
2. Fill out a test issue:
   - **Title**: "Test streetlight issue"
   - **Description**: "Testing the issue reporting system"
   - **Category**: Infrastructure
   - **Location**: Click "📍 Get Location" or type an address
   - **Hashtags**: `#test #streetlight`
3. Click "Report Issue"
4. Your issue should appear in the "Recent Issues" section

## 🎯 What Works Right Now

- ✅ Bluesky authentication
- ✅ Issue creation form
- ✅ GPS location capture
- ✅ Interactive maps (click to set location)
- ✅ Address geocoding
- ✅ Local storage (issues persist in browser)
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

- **Check your app password**: Make sure you're using an app password, not your main password
- **Check your handle**: Should be in format `username.bsky.social`
- **Network issues**: Try again in a few seconds

### Map Not Loading

- **Check browser console**: Look for JavaScript errors
- **Internet connection**: Maps require internet access
- **Ad blockers**: Some ad blockers block map tiles

### Location Not Working

- **Browser permissions**: Allow location access when prompted
- **HTTPS required**: Geolocation only works on HTTPS (works on localhost)
- **Manual entry**: You can type addresses if GPS fails

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
- **Geographic algorithms**: Smarter location relevance
- **Content moderation**: Community guidelines and reporting

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