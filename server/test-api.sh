#!/bin/bash
# Simple test script for the Shrine Database API

API_URL="http://localhost:5000"
echo "🧪 Testing Shrine Database API at $API_URL"
echo ""

# Test health check
echo "✓ Health Check:"
curl -s "$API_URL/api/health" | jq . 2>/dev/null || echo "Error fetching health"
echo ""

# Test shrine count
echo "✓ Shrine Count:"
curl -s "$API_URL/api/shrines/count" | jq . 2>/dev/null || echo "Error fetching count"
echo ""

# Test get all shrines
echo "✓ All Shrines (first 2):"
curl -s "$API_URL/api/shrines" | jq '.[0:2]' 2>/dev/null || echo "Error fetching shrines"
echo ""

# Test get shrine by ID
echo "✓ Shrine by ID (ID=1):"
curl -s "$API_URL/api/shrines/1" | jq . 2>/dev/null || echo "Error fetching shrine"
echo ""

# Test search
echo "✓ Search for 'Kyoto':"
curl -s "$API_URL/api/shrines/search?q=Kyoto" | jq . 2>/dev/null || echo "Error searching"
echo ""

# Test POST - Add a new shrine
echo "✓ POST - Add New Shrine:"
curl -s -X POST "$API_URL/api/shrines" \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test Shrine",
    "location": "Test City - Test Prefecture, Japan",
    "address": "100 Test Street, Test City"
  }' | jq . 2>/dev/null || echo "Error adding shrine"
echo ""

# Test PUT - Update a shrine
echo "✓ PUT - Update Shrine (ID=1):"
curl -s -X PUT "$API_URL/api/shrines/1" \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Ise Grand Shrine (Updated)"
  }' | jq . 2>/dev/null || echo "Error updating shrine"
echo ""

# Test DELETE - Remove a shrine
echo "✓ DELETE - Delete a Shrine:"
# First, get the last shrine ID
LAST_ID=$(curl -s "$API_URL/api/shrines" | jq '.[-1].id' 2>/dev/null)
if [ ! -z "$LAST_ID" ] && [ "$LAST_ID" != "null" ]; then
  curl -s -X DELETE "$API_URL/api/shrines/$LAST_ID" | jq . 2>/dev/null || echo "Error deleting shrine"
else
  echo "Could not find shrine to delete"
fi
echo ""

# Final shrine count after operations
echo "✓ Final Shrine Count:"
curl -s "$API_URL/api/shrines/count" | jq . 2>/dev/null || echo "Error fetching final count"
echo ""

echo "✅ Tests complete!"
