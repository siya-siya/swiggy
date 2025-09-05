// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./Components/Header";
import Dashboard from "./Pages/Dashboard";
import Categories from "./Components/Categories";
import LoginPage from "./Pages/Login";   // ✅ match folder casing
import SignIn from "./Pages/SignIn";
import InfoSection from "./Components/InfoSection";
import AppPromo from "./Components/AppPromo";
import Footer from "./Components/Footer";
import Pizza from "./Pages/Pizza";
import Burger from "./Pages/Burger";
import Cakes from "./Pages/Cake";
import Biryani from "./Pages/Biryani";
import Chinese from "./Pages/Chinese";
import Dhokla from "./Pages/Dhokla";
import NorthIndia from "./Pages/NorthIndia";
import { BACKEND_URL } from "./config";   // ✅ added
import Khichdi from "./Pages/Khichdi";
import Instamart from "./Components/Instamart";

const App = () => {
  console.log("Backend endpoint:", BACKEND_URL);

  return (
    <div>
      <Router>
        <Navbar />

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
          <Route path="/dhokla" element={<Dhokla />} /> 
          <Route path="/NorthIndia" element={<NorthIndia/>}/>
          <Route path="/Khichdi" element={<Khichdi/>}/>
          <Route path="/Instamart" element={<Instamart/>}/>

        </Routes>
      </Router>
    </div>
  );
};

export default App;
