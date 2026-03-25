// Example: Adding a Shrine to the Database
// This shows how to use the API utility functions in a React component

import { useState } from "react";
import { addShrine } from "../../utils/api";

function AddShrineForm({ onShrineAdded }) {
  const [formData, setFormData] = useState({
    name: "",
    location: "",
    address: "",
  });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const response = await addShrine(formData);
      setMessage(`✅ ${response.shrine.name} added successfully!`);
      setFormData({ name: "", location: "", address: "" });

      // Call callback to update parent component
      if (onShrineAdded) {
        onShrineAdded(response.shrine);
      }
    } catch (error) {
      setMessage(`❌ Error: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Shrine Name:</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="e.g., Meiji Shrine"
          required
        />
      </div>

      <div>
        <label>Location:</label>
        <input
          type="text"
          name="location"
          value={formData.location}
          onChange={handleChange}
          placeholder="e.g., Shibuya - Tokyo, Japan"
          required
        />
      </div>

      <div>
        <label>Address:</label>
        <input
          type="text"
          name="address"
          value={formData.address}
          onChange={handleChange}
          placeholder="Full address"
          required
        />
      </div>

      <button type="submit" disabled={loading}>
        {loading ? "Adding..." : "Add Shrine"}
      </button>

      {message && <p>{message}</p>}
    </form>
  );
}

export default AddShrineForm;
