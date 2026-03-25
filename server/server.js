import express from "express";
import cors from "cors";
import shrinesData from "./data.js";

const app = express();
const PORT = process.env.PORT || 5000;

// In-memory store for shrines
let shrines = [...shrinesData];
let nextId = shrines.length + 1;

// Middleware
app.use(cors());
app.use(express.json());

// Routes

// Get all shrines
app.get("/api/shrines", (req, res) => {
  res.json(shrines);
});

// Get shrine count
app.get("/api/shrines/count", (req, res) => {
  res.json({ count: shrines.length });
});

// Get shrine by ID
app.get("/api/shrines/:id", (req, res) => {
  const shrine = shrines.find((s) => s.id === parseInt(req.params.id));

  if (!shrine) {
    return res.status(404).json({ message: "Shrine not found" });
  }

  res.json(shrine);
});

// Add a new shrine
app.post("/api/shrines", (req, res) => {
  const { name, location, address } = req.body;

  // Validation
  if (!name || !location || !address) {
    return res
      .status(400)
      .json({ message: "Missing required fields: name, location, address" });
  }

  if (
    typeof name !== "string" ||
    typeof location !== "string" ||
    typeof address !== "string"
  ) {
    return res.status(400).json({ message: "All fields must be strings" });
  }

  // Create new shrine
  const newShrine = {
    id: nextId++,
    name: name.trim(),
    location: location.trim(),
    address: address.trim(),
  };

  shrines.push(newShrine);

  res.status(201).json({
    message: "Shrine added successfully",
    shrine: newShrine,
  });
});

// Update a shrine
app.put("/api/shrines/:id", (req, res) => {
  const shrine = shrines.find((s) => s.id === parseInt(req.params.id));

  if (!shrine) {
    return res.status(404).json({ message: "Shrine not found" });
  }

  const { name, location, address } = req.body;

  if (name) shrine.name = name.trim();
  if (location) shrine.location = location.trim();
  if (address) shrine.address = address.trim();

  res.json({
    message: "Shrine updated successfully",
    shrine,
  });
});

// Delete a shrine
app.delete("/api/shrines/:id", (req, res) => {
  const index = shrines.findIndex((s) => s.id === parseInt(req.params.id));

  if (index === -1) {
    return res.status(404).json({ message: "Shrine not found" });
  }

  const deletedShrine = shrines.splice(index, 1);

  res.json({
    message: "Shrine deleted successfully",
    shrine: deletedShrine[0],
  });
});

// Search shrines by name or location
app.get("/api/shrines/search", (req, res) => {
  const query = req.query.q?.toLowerCase();

  if (!query) {
    return res.status(400).json({ message: "Search query is required" });
  }

  const results = shrines.filter(
    (shrine) =>
      shrine.name.toLowerCase().includes(query) ||
      shrine.location.toLowerCase().includes(query) ||
      shrine.address.toLowerCase().includes(query),
  );

  res.json(results);
});

// Health check
app.get("/api/health", (req, res) => {
  res.json({ status: "ok", message: "Shrine Database API is running" });
});

// Root endpoint
app.get("/", (req, res) => {
  res.json({
    message: "Shrine Database API",
    version: "1.0.0",
    endpoints: {
      "GET /api/shrines": "Get all shrines",
      "GET /api/shrines/:id": "Get a specific shrine by ID",
      "GET /api/shrines/search?q=query":
        "Search shrines by name, location, or address",
      "POST /api/shrines": "Add a new shrine",
      "PUT /api/shrines/:id": "Update a shrine",
      "DELETE /api/shrines/:id": "Delete a shrine",
      "GET /api/shrines/count": "Get the total count of shrines",
      "GET /api/health": "Health check endpoint",
    },
  });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: "Internal server error" });
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({ message: "Endpoint not found" });
});

// Start server
app.listen(PORT, () => {
  console.log(`🏯 Shrine Database API running on http://localhost:${PORT}`);
  console.log(`📚 API documentation available at http://localhost:${PORT}`);
});
