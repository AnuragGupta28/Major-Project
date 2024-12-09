import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import AlumniDirectory from "./pages/AlumniDirectory";

import Donation from "./pages/Donation";



function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/directory" element={<AlumniDirectory />} />
        
        <Route path="/donation" element={<Donation />} />
        
        
      </Routes>
    </Router>
  );
}

export default AppRoutes;
