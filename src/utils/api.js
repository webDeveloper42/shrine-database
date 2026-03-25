const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";

/**
 * Fetch all shrines from the API
 */
export const getAllShrines = async () => {
  try {
    const response = await fetch(`${API_URL}/api/shrines`);
    if (!response.ok) throw new Error("Failed to fetch shrines");
    return await response.json();
  } catch (error) {
    console.error("Error fetching shrines:", error);
    throw error;
  }
};

/**
 * Fetch a single shrine by ID
 */
export const getShrineById = async (id) => {
  try {
    const response = await fetch(`${API_URL}/api/shrines/${id}`);
    if (!response.ok) throw new Error("Shrine not found");
    return await response.json();
  } catch (error) {
    console.error(`Error fetching shrine ${id}:`, error);
    throw error;
  }
};

/**
 * Add a new shrine to the database
 */
export const addShrine = async (shrine) => {
  try {
    const response = await fetch(`${API_URL}/api/shrines`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: shrine.name,
        location: shrine.location,
        address: shrine.address,
      }),
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message || "Failed to add shrine");
    }

    return await response.json();
  } catch (error) {
    console.error("Error adding shrine:", error);
    throw error;
  }
};

/**
 * Update an existing shrine
 */
export const updateShrine = async (id, shrine) => {
  try {
    const response = await fetch(`${API_URL}/api/shrines/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(shrine),
    });

    if (!response.ok) throw new Error("Failed to update shrine");
    return await response.json();
  } catch (error) {
    console.error(`Error updating shrine ${id}:`, error);
    throw error;
  }
};

/**
 * Delete a shrine from the database
 */
export const deleteShrine = async (id) => {
  try {
    const response = await fetch(`${API_URL}/api/shrines/${id}`, {
      method: "DELETE",
    });

    if (!response.ok) throw new Error("Failed to delete shrine");
    return await response.json();
  } catch (error) {
    console.error(`Error deleting shrine ${id}:`, error);
    throw error;
  }
};

/**
 * Search shrines by query
 */
export const searchShrines = async (query) => {
  try {
    const response = await fetch(
      `${API_URL}/api/shrines/search?q=${encodeURIComponent(query)}`,
    );

    if (!response.ok) throw new Error("Search failed");
    return await response.json();
  } catch (error) {
    console.error("Error searching shrines:", error);
    throw error;
  }
};

/**
 * Get shrine count
 */
export const getShrineCount = async () => {
  try {
    const response = await fetch(`${API_URL}/api/shrines/count`);
    if (!response.ok) throw new Error("Failed to fetch shrine count");
    return await response.json();
  } catch (error) {
    console.error("Error fetching shrine count:", error);
    throw error;
  }
};
