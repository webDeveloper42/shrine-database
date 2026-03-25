#!/bin/bash
# Quick Start Guide for Shrine Database API

echo "🏯 Shrine Database - Quick Start Guide"
echo "======================================"
echo ""

echo "📋 STEP 1: Start the API Server"
echo "Terminal 1:"
echo "  cd /Users/ceotrainlock/Documents/my-projects/shrine-finder"
echo "  npm run server"
echo ""

echo "⏳ Wait for: '🏯 Shrine Database API running on http://localhost:5000'"
echo ""

echo "📋 STEP 2: Start the Frontend"
echo "Terminal 2:"
echo "  npm run dev"
echo ""

echo "✅ Frontend will be at http://localhost:5173"
echo "✅ API will be at http://localhost:5000"
echo ""

echo "🧪 STEP 3: Test the API"
echo ""

# Test GET all shrines
echo "GET all shrines:"
echo "  curl http://localhost:5000/api/shrines"
echo ""

# Test POST add shrine
echo "POST add a shrine:"
echo "  curl -X POST http://localhost:5000/api/shrines \\"
echo "    -H 'Content-Type: application/json' \\"
echo "    -d '{\"name\":\"New Shrine\",\"location\":\"City\",\"address\":\"Address\"}'"
echo ""

# Test GET shrine count
echo "GET shrine count:"
echo "  curl http://localhost:5000/api/shrines/count"
echo ""

echo "📚 Documentation:"
echo "  - API Docs: server/API.md"
echo "  - Integration Guide: API_INTEGRATION.md"
echo "  - Test Script: bash server/test-api.sh"
echo ""

echo "✨ API Features Implemented:"
echo "  ✅ GET /api/shrines - Get all shrines"
echo "  ✅ GET /api/shrines/:id - Get specific shrine"
echo "  ✅ POST /api/shrines - Add new shrine"
echo "  ✅ PUT /api/shrines/:id - Update shrine"
echo "  ✅ DELETE /api/shrines/:id - Delete shrine"
echo "  ✅ GET /api/shrines/search?q=query - Search shrines"
echo "  ✅ GET /api/shrines/count - Get count"
echo ""

echo "🔐 Data Flow:"
echo "  1. Frontend loads and fetches data from API"
echo "  2. If API unavailable, falls back to local data"
echo "  3. Form submissions POST new data to API"
echo "  4. API stores in-memory and returns updated data"
echo "  5. Frontend updates state and re-renders"
echo ""

echo "💡 Pro Tips:"
echo "  - Use 'npm run server:dev' for auto-restart on file changes"
echo "  - Check browser console for API errors"
echo "  - API imports available in src/utils/api.js"
echo "  - Try the test script: bash server/test-api.sh"
echo ""

echo "🚀 Ready to develop!"
