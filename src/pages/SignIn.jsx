import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  // 🔹 Simulated backend function (static data instead of API)
  const fakeBackendSignup = async (username, password) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Example static check (you can replace with any logic)
        if (username === "testuser" && password === "12345") {
          resolve({ success: true, message: "Sign Up successful!" });
        } else {
          reject({ success: false, message: "Invalid username or password" });
        }
      }, 1000); // fake delay (1s)
    });
  };

  const handleSignUp = async () => {
    try {
      const result = await fakeBackendSignup(username, password);
      alert(result.message);
      navigate("/login"); // redirect after success
    } catch (err) {
      setError(err.message || "Sign Up failed");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h2 className="text-2xl font-semibold mb-6">Sign In Page</h2>

      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="border p-2 rounded mb-4 w-64"
      />

      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="border p-2 rounded mb-4 w-64"
      />

      <button
        onClick={handleSignUp}
        className="bg-orange-500 text-white px-6 py-2 rounded-lg"
      >
        Sign Up
      </button>

      {error && <p className="text-red-500 mt-4">{error}</p>}
    </div>
  );
};

export default SignIn;
