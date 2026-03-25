import { useState } from "react";
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

function App() {
  const [shrines, setShrine] = useState(shrinesData);
  const counter = shrines.length;

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
