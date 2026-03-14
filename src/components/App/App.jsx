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

function App() {
  return (
    <div className="page">
      <div className="page__content">
        <Header />
        <Routes>
          <Route path="*" element={<PageNotFound />} />
          <Route path="/" element={<Dashboard />} />
          <Route path="/shrines" element={<Shrines />} />
          <Route path="/public-api" element={<PublicApi />} />
        </Routes>
        <Footer />
      </div>
    </div>
  );
}

export default App;
