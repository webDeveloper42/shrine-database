# Shrine Database API

A RESTful API built with Express.js to serve shrine data for the Shrine Database application.

## Getting Started

### Installation

Dependencies are already installed. Make sure you have Node.js installed on your system.

### Running the Server

```bash
# Start the server (default port: 5000)
npm run server

# Start the server with file watching (development mode)
npm run server:dev

# Or run directly
node server/server.js
```

The API will be available at `http://localhost:5000`

## API Endpoints

### Get All Shrines

```
GET /api/shrines
```

Returns an array of all shrines in the database.

**Example Response:**

```json
[
  {
    "id": 1,
    "name": "Ise Grand Shrine",
    "location": "Ise - Mie, Japan",
    "address": "1 Ujitachicho, Ise City, Mie Prefecture 516-0023, Japan"
  },
  ...
]
```

### Get Shrine by ID

```
GET /api/shrines/:id
```

Returns a specific shrine by its ID.

**Example:**

```
GET /api/shrines/1
```

**Example Response:**

```json
{
  "id": 1,
  "name": "Ise Grand Shrine",
  "location": "Ise - Mie, Japan",
  "address": "1 Ujitachicho, Ise City, Mie Prefecture 516-0023, Japan"
}
```

### Add a New Shrine

```
POST /api/shrines
```

Adds a new shrine to the database.

**Request Body:**

```json
{
  "name": "Meiji Shrine",
  "location": "Shibuya - Tokyo, Japan",
  "address": "1-1 Yoyogikamizonocho, Shibuya Ward, Tokyo"
}
```

**Example Response (Status 201):**

```json
{
  "message": "Shrine added successfully",
  "shrine": {
    "id": 11,
    "name": "Meiji Shrine",
    "location": "Shibuya - Tokyo, Japan",
    "address": "1-1 Yoyogikamizonocho, Shibuya Ward, Tokyo"
  }
}
```

**Error Response (Status 400):**

```json
{
  "message": "Missing required fields: name, location, address"
}
```

### Update a Shrine

```
PUT /api/shrines/:id
```

Updates an existing shrine. Only provided fields are updated.

**Request Body (all fields optional):**

```json
{
  "name": "Updated Shrine Name",
  "location": "Updated Location",
  "address": "Updated Address"
}
```

**Example Response:**

```json
{
  "message": "Shrine updated successfully",
  "shrine": {
    "id": 1,
    "name": "Updated Shrine Name",
    "location": "Updated Location",
    "address": "Updated Address"
  }
}
```

### Delete a Shrine

```
DELETE /api/shrines/:id
```

Removes a shrine from the database.

**Example Response:**

```json
{
  "message": "Shrine deleted successfully",
  "shrine": {
    "id": 11,
    "name": "Meiji Shrine",
    "location": "Shibuya - Tokyo, Japan",
    "address": "1-1 Yoyogikamizonocho, Shibuya Ward, Tokyo"
  }
}
```

### Search Shrines

```
GET /api/shrines/search?q=query
```

Search shrines by name, location, or address.

**Parameters:**

- `q` (required): Search query string

**Example:**

```
GET /api/shrines/search?q=Kyoto
```

### Get Shrine Count

```
GET /api/shrines/count
```

Returns the total count of shrines in the database.

**Example Response:**

```json
{
  "count": 11
}
```

### Health Check

```
GET /api/health
```

Returns the health status of the API.

**Example Response:**

```json
{
  "status": "ok",
  "message": "Shrine Database API is running"
}
```

### API Documentation

```
GET /
```

Returns a list of all available endpoints and their descriptions.

## Data Structure

Each shrine object contains the following fields:

| Field    | Type   | Description                      |
| -------- | ------ | -------------------------------- |
| id       | number | Unique identifier for the shrine |
| name     | string | Official name of the shrine      |
| location | string | City and prefecture location     |
| address  | string | Complete postal address          |

## Features

- ✅ RESTful API design with full CRUD operations
- ✅ GET - Retrieve shrines
- ✅ POST - Add new shrines
- ✅ PUT - Update existing shrines
- ✅ DELETE - Remove shrines
- ✅ CORS enabled for cross-origin requests
- ✅ JSON request/response format
- ✅ Search functionality
- ✅ Error handling and validation
- ✅ Health check endpoint
- ✅ In-memory data store

## Future Enhancements

- [ ] Persistent database integration (MongoDB, PostgreSQL)
- [ ] User authentication and authorization
- [ ] Role-based access control (admin, user)
- [ ] Pagination and filtering
- [ ] Additional shrine fields (latitude, longitude, images, visiting hours, etc.)
- [ ] Rate limiting
- [ ] API versioning
- [ ] Request logging and monitoring

## Environment Variables

- `PORT` - The port to run the server on (default: 5000)

## Example Usage with Fetch

### GET Requests

```javascript
// Get all shrines
fetch("http://localhost:5000/api/shrines")
  .then((res) => res.json())
  .then((data) => console.log(data));

// Search shrines
fetch("http://localhost:5000/api/shrines/search?q=Kyoto")
  .then((res) => res.json())
  .then((data) => console.log(data));

// Get specific shrine
fetch("http://localhost:5000/api/shrines/1")
  .then((res) => res.json())
  .then((data) => console.log(data));

// Get shrine count
fetch("http://localhost:5000/api/shrines/count")
  .then((res) => res.json())
  .then((data) => console.log(`Total shrines: ${data.count}`));
```

### POST Request - Add a Shrine

```javascript
const newShrine = {
  name: "Meiji Shrine",
  location: "Shibuya - Tokyo, Japan",
  address: "1-1 Yoyogikamizonocho, Shibuya Ward, Tokyo",
};

fetch("http://localhost:5000/api/shrines", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify(newShrine),
})
  .then((res) => res.json())
  .then((data) => console.log("Shrine added:", data.shrine));
```

### PUT Request - Update a Shrine

```javascript
const updates = {
  name: "Updated Shrine Name",
  location: "Updated Location",
};

fetch("http://localhost:5000/api/shrines/1", {
  method: "PUT",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify(updates),
})
  .then((res) => res.json())
  .then((data) => console.log("Shrine updated:", data.shrine));
```

### DELETE Request - Remove a Shrine

```javascript
fetch("http://localhost:5000/api/shrines/1", {
  method: "DELETE",
})
  .then((res) => res.json())
  .then((data) => console.log("Shrine deleted:", data.shrine));
```

### Using the Frontend API Module

The frontend includes a utility module (`src/utils/api.js`) that wraps these API calls:

```javascript
import {
  getAllShrines,
  getShrineById,
  addShrine,
  updateShrine,
  deleteShrine,
  searchShrines,
} from "./utils/api.js";

// Get all shrines
const shrines = await getAllShrines();

// Add a new shrine
const newShrine = await addShrine({
  name: "Meiji Shrine",
  location: "Shibuya - Tokyo, Japan",
  address: "1-1 Yoyogikamizonocho, Shibuya Ward, Tokyo",
});

// Update a shrine
const updated = await updateShrine(1, { name: "Updated Name" });

// Delete a shrine
await deleteShrine(1);

// Search
const results = await searchShrines("Kyoto");
```
