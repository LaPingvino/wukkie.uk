#!/bin/bash

# Build script for Wukkie.uk
set -e

echo "🚀 Building Wukkie.uk..."

# Clean previous builds
echo "🧹 Cleaning previous builds..."
rm -rf dist/

# Install dependencies if needed
if [ ! -d "node_modules" ]; then
  echo "📦 Installing dependencies..."
  npm install
fi

# Build frontend with Vite
echo "🏗️  Building frontend..."
npm run build:frontend

# Check if frontend build succeeded
if [ ! -f "dist/index.html" ]; then
  echo "❌ Frontend build failed - no index.html generated"
  exit 1
fi

# Build worker
echo "🔧 Building worker..."
npx tsc src/worker/index.ts --outDir dist --target ES2022 --module ESNext --moduleResolution bundler --types @cloudflare/workers-types

# Check if worker build succeeded
if [ ! -f "dist/index.js" ]; then
  echo "❌ Worker build failed - no worker JS generated"
  exit 1
fi

# Move worker to correct location for wrangler
mv dist/index.js dist/worker.js

# Type check everything
echo "🔍 Type checking..."
npm run type-check

echo "✅ Build completed successfully!"
echo ""
echo "📁 Built files:"
ls -la dist/
echo ""
echo "🚀 Ready to deploy with: npm run deploy"
