# API Integration Guide

This guide explains how to use the Shrine Database API from the frontend application.

## Setup

### 1. Start the API Server

Open a terminal and run:

```bash
npm run server
```

The API will be available at `http://localhost:5000`

### 2. Start the Frontend

Open another terminal and run:

```bash
npm run dev
```

The frontend will start at `http://localhost:5173`

## Using the API from React

### Import the API Utilities

All API functions are available in `src/utils/api.js`:

```javascript
import {
  getAllShrines,
  getShrineById,
  addShrine,
  updateShrine,
  deleteShrine,
  searchShrines,
  getShrineCount,
} from "../utils/api";
```

### Example 1: Fetch All Shrines

```javascript
import { useEffect, useState } from "react";
import { getAllShrines } from "../utils/api";

function ShrineList() {
  const [shrines, setShrines] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getAllShrines();
        setShrines(data);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchData();
  }, []);

  if (error) return <div>Error: {error}</div>;

  return (
    <ul>
      {shrines.map((shrine) => (
        <li key={shrine.id}>{shrine.name}</li>
      ))}
    </ul>
  );
}

export default ShrineList;
```

### Example 2: Add a New Shrine (POST)

```javascript
import { useState } from "react";
import { addShrine } from "../utils/api";

function AddShrine() {
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [address, setAddress] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const result = await addShrine({ name, location, address });
      setMessage(`✅ Added: ${result.shrine.name}`);
      setName("");
      setLocation("");
      setAddress("");
    } catch (error) {
      setMessage(`❌ Error: ${error.message}`);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Shrine Name"
        required
      />
      <input
        type="text"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        placeholder="Location"
        required
      />
      <input
        type="text"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
        placeholder="Address"
        required
      />
      <button type="submit">Add Shrine</button>
      {message && <p>{message}</p>}
    </form>
  );
}

export default AddShrine;
```

### Example 3: Search Shrines

```javascript
import { useState } from "react";
import { searchShrines } from "../utils/api";

function SearchShrines() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  const handleSearch = async (e) => {
    const searchTerm = e.target.value;
    setQuery(searchTerm);

    if (searchTerm.trim()) {
      try {
        const data = await searchShrines(searchTerm);
        setResults(data);
      } catch (error) {
        console.error("Search error:", error);
      }
    } else {
      setResults([]);
    }
  };

  return (
    <div>
      <input
        type="text"
        value={query}
        onChange={handleSearch}
        placeholder="Search shrines..."
      />
      <ul>
        {results.map((shrine) => (
          <li key={shrine.id}>{shrine.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default SearchShrines;
```

### Example 4: Update a Shrine (PUT)

```javascript
import { updateShrine } from "../utils/api";

async function updateShrineLocation(shrineId, newLocation) {
  try {
    const result = await updateShrine(shrineId, { location: newLocation });
    console.log("Updated:", result.shrine);
  } catch (error) {
    console.error("Update error:", error);
  }
}
```

### Example 5: Delete a Shrine (DELETE)

```javascript
import { deleteShrine } from "../utils/api";

async function removeShrineFromDatabase(shrineId) {
  try {
    const result = await deleteShrine(shrineId);
    console.log("Deleted:", result.shrine);
  } catch (error) {
    console.error("Delete error:", error);
  }
}
```

## Error Handling

The API utility functions throw errors on failure. Always wrap API calls in try-catch blocks:

```javascript
try {
  const shrine = await getShrineById(1);
  console.log(shrine);
} catch (error) {
  console.error("Error:", error.message);
  // Handle error (show user message, retry, etc.)
}
```

## How the Data Flows

### Frontend Initialization

1. App.jsx loads with local shrine data as fallback
2. useEffect triggers on mount
3. Fetches shrines from API endpoint: `GET /api/shrines`
4. If successful → uses API data
5. If API unavailable → uses local fallback data

### Adding a Shrine

1. User fills out add shrine form
2. Form submission calls `addShrine()` from api.js
3. API function sends `POST /api/shrines` request
4. Server adds shrine and returns new shrine object with ID
5. Frontend updates local state
6. UI re-renders with new shrine

### Searching Shrines

1. User types in search box
2. Search triggers API call: `GET /api/shrines/search?q=query`
3. Server returns filtered results
4. Frontend displays results

## Current Implementation

The following is already set up:

- ✅ `src/utils/api.js` - API utility functions
- ✅ `src/components/App/App.jsx` - Fetches data on load
- ✅ `server/server.js` - Express API with CRUD endpoints
- ✅ `.env.example` - Environment configuration

## Testing the API

Test individual endpoints with curl:

```bash
# GET all shrines
curl http://localhost:5000/api/shrines

# POST a new shrine
curl -X POST http://localhost:5000/api/shrines \
  -H "Content-Type: application/json" \
  -d '{"name":"New Shrine","location":"City","address":"Address"}'

# PUT update a shrine
curl -X PUT http://localhost:5000/api/shrines/1 \
  -H "Content-Type: application/json" \
  -d '{"name":"Updated Name"}'

# DELETE a shrine
curl -X DELETE http://localhost:5000/api/shrines/11

# Search
curl "http://localhost:5000/api/shrines/search?q=Kyoto"
```

Or run the automated test script:

```bash
bash server/test-api.sh
```

## Environment Configuration

Create a `.env.local` file in the project root to override the API URL:

```
VITE_API_URL=http://localhost:5000
```

For production:

```
VITE_API_URL=https://your-api-domain.com
```

## Next Steps

1. Create UI components for adding/editing shrines
2. Add form validation for user inputs
3. Implement loading states and error messages
4. Add confirmation dialogs for delete operations
5. Implement persistence with a real database

## Troubleshooting

### API Connection Issues

- Ensure the server is running: `npm run server`
- Check that port 5000 is available
- Check browser console for CORS errors
- Verify API URL in `.env.local`

### Data Not Updating

- API data is in-memory, restart server to reset
- Check that frontend is actually calling the API
- Monitor Network tab in browser dev tools

### Deploy to Production

- Use a persistent database (MongoDB, PostgreSQL)
- Deploy API server separately
- Update `VITE_API_URL` for production domain
- Implement proper error handling and logging
