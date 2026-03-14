import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "../../vendors/normalize.css";
import "./App.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Dashboard from "../Dashboard/Dashboard";
import Shrines from "../Shrines/Shrines";
import PublicApi from "../PublicApi/PublicApi";

function App() {
  return (
    <div className="page">
      <div className="page__content">
        <Header />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/Shrines" element={<Shrines />} />
          <Route path="/PublicApi" element={<PublicApi />} />
        </Routes>
        {/* <Footer /> */}
      </div>
    </div>
  );
}

export default App;
