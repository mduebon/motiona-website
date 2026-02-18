#!/bin/bash

# Define the app name used in PM2
APP_NAME="motiona"

echo "🚀 Starting deployment for $APP_NAME..."

# 1. Pull the latest changes from Git
echo "📥 Pulling latest code from Git..."
git pull origin main

# 2. Install dependencies
echo "📦 Installing dependencies..."
pnpm install

# 3. Build the project
# This runs 'vite build' and 'esbuild' as defined in your package.json
echo "🏗️ Building the application..."
pnpm run build

# 4. Reload the application with PM2
# 'reload' is safer than 'restart' as it aims for zero-downtime
echo "♻️ Reloading PM2 process..."
pm2 reload $APP_NAME --update-env

# 5. Save PM2 state
# Ensures the new build persists after a power-up
echo "💾 Saving PM2 state..."
pm2 save

echo "✅ Deployment complete! Your homepage is updated."
