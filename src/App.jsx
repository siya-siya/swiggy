// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./Components/Header";
import Dashboard from "./Pages/Dashboard";
import Categories  from "./Components/Categories";
import LoginPage from "./pages/Login";   // 👈 corrected to match "Login.jsx"
import SignIn from "./pages/SignIn";
import InfoSection from "./Components/InfoSection";
import AppPromo from "./Components/AppPromo";
import Footer from "./Components/Footer";

import Pizza from "./pages/Pizza";
import Burger from "./pages/Burger";
import Cakes from "./pages/Cake";
import Biryani from "./pages/Biryani";
import Chinese from "./pages/Chinese";


import { BACKEND_URL } from "./config";

const App = () => {
  console.log("Backend endpoint:", BACKEND_URL);

  return (
    <div>
      <Router>
        {/* Navbar is always visible */}
        <Navbar />

        {/* Define all routes */}
        <Routes>
          {/* Homepage */}
          <Route
            path="/"
            element={
              <>
                
                <Dashboard />
                <InfoSection />
                <AppPromo />
                <Footer />
              </>
            }
          />

          {/* Other pages */}
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/pizza" element={<Pizza />} />
          <Route path="/burger" element={<Burger />} />
          <Route path="/cake" element={<Cakes />} />
          <Route path="/biryani" element={<Biryani />} />
          <Route path="/chinese" element={<Chinese />} />
          
        </Routes>
      </Router>
    </div>
  );
};

export default App;
