import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Header";
import Dashboard from "./pages/Dashboard";
import LoginPage from "./pages/login";
import { BACKEND_URL } from "./config"; // <-- Import backend endpoint
import SignIn  from "./pages/SignIn";

const App = () => {
  // Example usage: log the endpoint
  console.log("Backend endpoint:", BACKEND_URL);

  return (
    <div>
      <Router>
        <Navbar />
        <Dashboard />
        <Routes>
          <Route path="/pages/login" element={<LoginPage />} />
          <Route path="/pages/signin" element={<SignIn />} /> 
        </Routes>
      </Router>
    </div>
  );
};

export default App;
