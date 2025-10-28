// src/Components/Navbar.js
import React, { useState } from "react";
import { Search, MapPin, User } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { BACKEND_URL } from "../config"; // backend endpoint
import { Link } from "react-router-dom";

const Navbar = () => {
  const [showSignIn, setShowSignIn] = useState(false);
  const [otpSent, setOtpSent] = useState(false);
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [otp, setOtp] = useState("");
  const navigate = useNavigate();

  // Send OTP
  const handleSendOtp = async () => {
    try {
      const response = await fetch(`${BACKEND_URL}/api/send-otp`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, phone }),
      });
      if (response.ok) {
        setOtpSent(true);
        alert("OTP sent!");
      } else {
        alert("Failed to send OTP");
      }
    } catch (error) {
      alert("Error sending OTP");
    }
  };

  // Sign Up → then redirect to login
  const handleSignUp = async () => {
    try {
      const response = await fetch(`${BACKEND_URL}/api/signup`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, phone, password, otp }),
      });
      if (response.ok) {
        alert("Signup successful! Please login.");
        setShowSignIn(false);
        navigate("/login"); // ✅ Correct path
      } else {
        alert("Signup failed");
      }
    } catch (error) {
      alert("Error during signup");
    }
  };

  return (
    <nav className="w-full bg-white shadow sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3">
        {/* Left Section */}
        <div className="flex items-center space-x-6">
          <div
            className="flex items-center space-x-1 cursor-pointer"
            onClick={() => navigate("/")}
          >
            {/* <img
              src="https://upload.wikimedia.org/wikipedia/commons/1/13/Swiggy_logo.png"
              alt="Swiggy"
              className="w-8 h-8"
            /> */}
            <span className="text-xl font-bold text-orange-500">Delivery App</span>
          </div>
          <div className="flex items-center text-gray-700 text-sm cursor-pointer">
            <MapPin className="w-4 h-4 text-orange-500 mr-1" />
            <span className="font-medium">Setup your precise location</span>
            <span className="ml-1 text-xs">▼</span>
          </div>
        </div>

        {/* Middle Section */}
        <div className="flex-1 max-w-xl mx-6">
          <div className="flex items-center bg-gray-100 rounded-lg px-3 py-2">
            <Search className="w-4 h-4 text-gray-500" />
            <input
              type="text"
              placeholder="Search for restaurant and food"
              className="w-full bg-transparent outline-none ml-2 text-sm"
            />
          </div>
        </div>

        {/* Right Section (Profile) */}
        <div className="flex items-center">
          <User
            className="w-6 h-6 text-gray-700 cursor-pointer"
            onClick={() => setShowSignIn(true)}
          />
        </div>
        {
          // Instamart Link
          <Link
            to="/instamart"
            className="ml-auto mr-6 px-4 py-2 bg-orange-100 text-orange-600 font-semibold rounded-lg shadow-sm hover:bg-orange-200 transition"
          >
            🛒 Instamart
          </Link>
        }
      </div>

      {/* Popup Sign In / Sign Up Form */}
      {showSignIn && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-xl shadow-lg w-96 relative">
            <h2 className="text-xl font-bold mb-4 text-center">Sign up</h2>

            <input
              type="text"
              placeholder="Full Name"
              className="w-full mb-3 px-3 py-2 border rounded-lg"
            />

            <input
              type="email"
              placeholder="Email Address"
              className="w-full mb-3 px-3 py-2 border rounded-lg"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <input
              type="tel"
              placeholder="Phone Number"
              className="w-full mb-3 px-3 py-2 border rounded-lg"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />

            <input
              type="password"
              placeholder="Password"
              className="w-full mb-3 px-3 py-2 border rounded-lg"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <div className="flex space-x-2 mb-3">
              <input
                type="text"
                placeholder="OTP"
                className="flex-1 px-3 py-2 border rounded-lg"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
              />
              <button
                className="bg-orange-500 text-white px-4 rounded-lg"
                onClick={handleSendOtp}
                disabled={otpSent}
              >
                {otpSent ? "OTP Sent" : "Send OTP"}
              </button>
            </div>

            <button
              onClick={handleSignUp}
              className="w-full bg-orange-500 hover:bg-orange-600 text-white py-2 rounded-lg"
            >
              Sign Up
            </button>

            <button
              onClick={() => setShowSignIn(false)}
              className="absolute top-2 right-3 text-gray-600 hover:text-black"
            >
              ✖
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
