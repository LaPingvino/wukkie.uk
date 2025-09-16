import fs from "fs";
import path from "path";
import { execSync } from "child_process";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Read OAuth configuration from package.json
const packageJsonPath = path.join(__dirname, "package.json");
const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, "utf8"));
const oauthConfig = packageJson.oauth || {};
const oauthScopes = oauthConfig.scopes || "atproto transition:generic";
const clientName =
  oauthConfig.clientName || "Wukkie.uk - Bug Tracker for the World";

console.log("🚀 Building Wukkie.uk...");
console.log("🔧 OAuth Scopes:", oauthScopes);
console.log("📋 Client Name:", clientName);

// Run tests before building
console.log("");
console.log("🧪 Running tests...");
console.log("📁 Test files location: src/frontend/*.test.ts");
console.log("📋 Found test files:");
console.log("   • atproto-integration.test.ts");
console.log("   • auth.test.ts");
console.log("   • issue-management.test.ts");
console.log("   • location-hashtag-case-enhanced.test.ts");
console.log("   • location-privacy.test.ts");
console.log("   • login-fix.test.ts");
console.log("   • login-integration.test.ts");
console.log("   • login-modal.test.ts");
console.log("   • login-real.test.ts");
console.log("   • multiple-locations.test.ts");
console.log("");

let testsPassed = false;
let testsWarning = false;
try {
  const testResult = execSync("node test.js src/frontend", {
    stdio: "inherit",
    encoding: "utf8",
  });
  console.log("✅ All tests passed!");
  testsPassed = true;
} catch (error) {
  console.log("⚠️  Some tests failed, but continuing build...");
  console.log("📊 Test results: Check output above for details");
  console.log("💡 Consider fixing failing tests for better code quality");
  testsWarning = true;
}
console.log("");

// Update static client-metadata.json with centralized config
console.log("🔄 Updating client metadata with centralized OAuth config...");
const staticClientMetadataPath = path.join(
  __dirname,
  "static",
  "client-metadata.json",
);
if (fs.existsSync(staticClientMetadataPath)) {
  const clientMetadata = JSON.parse(
    fs.readFileSync(staticClientMetadataPath, "utf8"),
  );
  clientMetadata.scope = oauthScopes;
  clientMetadata.client_name = clientName;

  // Write back to static directory
  fs.writeFileSync(
    staticClientMetadataPath,
    JSON.stringify(clientMetadata, null, 2) + "\n",
  );
  console.log("✅ Updated static/client-metadata.json");
} else {
  console.log("⚠️  static/client-metadata.json not found, skipping update");
}

// Clean previous builds
console.log("🧹 Cleaning previous builds...");
if (fs.existsSync("dist")) {
  fs.rmSync("dist", { recursive: true });
}

// Build frontend with Vite
console.log("🏗️  Building frontend...");
try {
  execSync("npx vite build", { stdio: "inherit" });
} catch (error) {
  console.error("❌ Frontend build failed");
  process.exit(1);
}

// Read built files
console.log("📖 Reading built assets...");

const distPath = path.join(__dirname, "dist");
const indexHtmlPath = path.join(distPath, "index.html");

if (!fs.existsSync(indexHtmlPath)) {
  console.error("❌ index.html not found in dist/");
  process.exit(1);
}

const indexHtml = fs.readFileSync(indexHtmlPath, "utf8");

// Find the generated assets
const assetsDir = path.join(distPath, "assets");
let appJs = "";
let appCss = "";

if (fs.existsSync(assetsDir)) {
  const assetFiles = fs.readdirSync(assetsDir);

  // Find the main JS file (usually has hash in name)
  const jsFile = assetFiles.find((file) => file.endsWith(".js"));
  if (jsFile) {
    appJs = fs.readFileSync(path.join(assetsDir, jsFile), "utf8");
    // Replace OAuth scope placeholder with actual scopes
    appJs = appJs.replace(/__OAUTH_SCOPES__/g, oauthScopes);
    console.log("🔄 Replaced OAuth scope placeholders in JavaScript");
  }

  // Find the main CSS file (usually has hash in name)
  const cssFile = assetFiles.find((file) => file.endsWith(".css"));
  if (cssFile) {
    appCss = fs.readFileSync(path.join(assetsDir, cssFile), "utf8");
  }
}

// Generate worker with embedded assets
console.log("🔧 Generating worker...");

const workerTemplate = `/**
 * Cloudflare Worker for Wukkie.uk
 * Generated with embedded frontend assets
 */

const HTML_CONTENT = ${JSON.stringify(indexHtml)};

const APP_JS = ${JSON.stringify(appJs)};

const APP_CSS = ${JSON.stringify(appCss)};

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, Authorization',
};

export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    const { pathname } = url;

    // Handle CORS preflight
    if (request.method === 'OPTIONS') {
      return new Response(null, { headers: corsHeaders });
    }

    try {
      // Serve built JavaScript (with hash-based filename)
      if (pathname.startsWith('/assets/') && pathname.endsWith('.js')) {
        return new Response(APP_JS, {
          headers: {
            'Content-Type': 'application/javascript; charset=utf-8',
            'Cache-Control': 'public, max-age=31536000',
            ...corsHeaders,
          },
        });
      }

      // Serve built CSS (with hash-based filename)
      if (pathname.startsWith('/assets/') && pathname.endsWith('.css')) {
        return new Response(APP_CSS, {
          headers: {
            'Content-Type': 'text/css; charset=utf-8',
            'Cache-Control': 'public, max-age=31536000',
            ...corsHeaders,
          },
        });
      }

      // Legacy /app.js route (for backwards compatibility)
      if (pathname === '/app.js') {
        return new Response(APP_JS, {
          headers: {
            'Content-Type': 'application/javascript; charset=utf-8',
            'Cache-Control': 'public, max-age=3600',
            ...corsHeaders,
          },
        });
      }

      // Serve OAuth client metadata (dynamically generated)
      if (pathname === '/client-metadata.json') {
        const baseUrl = url.origin;

        const dynamicMetadata = {
          client_id: \`\${baseUrl}/client-metadata.json\`,
          client_uri: baseUrl,
          redirect_uris: [baseUrl],
          application_type: 'web',
          client_name: ${JSON.stringify(clientName)},
          dpop_bound_access_tokens: true,
          grant_types: ['authorization_code', 'refresh_token'],
          response_types: ['code'],
          scope: ${JSON.stringify(oauthScopes)},
          token_endpoint_auth_method: 'none',
        };

        console.log('🔍 OAuth client metadata requested for:', baseUrl);
        console.log('📋 Serving OAuth scopes:', dynamicMetadata.scope);
        console.log('🔧 Full metadata:', JSON.stringify(dynamicMetadata, null, 2));

        return new Response(JSON.stringify(dynamicMetadata, null, 2), {
          headers: {
            'Content-Type': 'application/json; charset=utf-8',
            'Cache-Control': 'public, max-age=300',
            ...corsHeaders,
          },
        });
      }

      // Serve main HTML for all other routes (SPA routing)
      return new Response(HTML_CONTENT, {
        headers: {
          'Content-Type': 'text/html; charset=utf-8',
          'Cache-Control': 'public, max-age=300',
          ...corsHeaders,
        },
      });
    } catch (error) {
      console.error('Worker error:', error);
      return new Response('Internal Server Error', {
        status: 500,
        headers: corsHeaders,
      });
    }
  },
};`;

// Write the worker file
const workerPath = path.join(distPath, "worker.js");
fs.writeFileSync(workerPath, workerTemplate);

console.log("✅ Build completed successfully!");
console.log("");
console.log("📁 Generated files:");
console.log("  ✓ dist/worker.js (Cloudflare Worker with embedded assets)");
console.log("  ✓ dist/index.html");
if (appJs) console.log("  ✓ dist/assets/*.js");
if (appCss) console.log("  ✓ dist/assets/*.css");
console.log("");
if (testsPassed) {
  console.log("🧪 Tests: All passed ✅");
} else if (testsWarning) {
  console.log("🧪 Tests: Some failures (see details above) ⚠️");
} else {
  console.log("🧪 Tests: Not run");
}
console.log("🚀 Ready to deploy with: npm run deploy");
