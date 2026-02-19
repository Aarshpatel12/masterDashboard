import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/landingPage";
import Data from "./componensts/Menrega/Data";
// import Graph from "./componensts/Menrega/Graph";
import LoginPage from "./pages/loginPage";
import RepresentData from "./componensts/Menrega/RepresentData";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/mnrega-dashboard" element={<RepresentData />} />
        <Route path="/login" element={<LoginPage/>}/>
      </Routes>
    </Router>
  );
}

export default App;
