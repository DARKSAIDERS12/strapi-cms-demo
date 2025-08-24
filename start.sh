#!/bin/bash
echo "🚀 Starting Strapi build and deployment process..."
echo "📦 Building Strapi application..."
npm run build
if [ $? -eq 0 ]; then
    echo "✅ Build successful! Starting Strapi..."
    npm start
else
    echo "❌ Build failed!"
    exit 1
fi
