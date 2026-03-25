import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import "../../vendors/normalize.css";
import "./App.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Dashboard from "../Dashboard/Dashboard";
import Shrines from "../Shrines/Shrines";
import PublicApi from "../PublicApi/PublicApi";
import PageNotFound from "../PageNotFound/PageNotFound";
import shrinesData from "../../utils/constants.js";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";

function App() {
  const [shrines, setShrine] = useState(shrinesData);
  const [loading, setLoading] = useState(false);
  const counter = shrines.length;

  // Fetch shrines from API on mount
  useEffect(() => {
    const fetchShrines = async () => {
      try {
        setLoading(true);
        const response = await fetch(`${API_URL}/api/shrines`);
        if (response.ok) {
          const data = await response.json();
          setShrine(data);
          console.log("✅ Shrines loaded from API");
        } else {
          console.log("⚠️ API not available, using local data");
          setShrine(shrinesData);
        }
      } catch (error) {
        console.log(
          "⚠️ Error fetching from API, using local data:",
          error.message,
        );
        setShrine(shrinesData);
      } finally {
        setLoading(false);
      }
    };

    fetchShrines();
  }, []);

  return (
    <div className="page__content">
      <Header counter={counter} />
      <Routes>
        <Route path="*" element={<PageNotFound />} />
        <Route path="/" element={<Dashboard />} />
        <Route
          path="/shrines"
          element={<Shrines shrines={shrines} setShrine={setShrine} />}
        />
        <Route path="/public-api" element={<PublicApi />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
