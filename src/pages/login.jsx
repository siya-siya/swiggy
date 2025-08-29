import React, { useState } from "react";
import { BACKEND_URL } from "../config";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  // 🔹 STATIC FUNCTION (Fake backend, just for testing without real server)
  const fakeBackendLogin = async (username, password) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Example static user
        if (username === "testuser" && password === "12345") {
          resolve({ success: true, message: "Login successful!" });
        } else {
          reject({ success: false, message: "Invalid username or password" });
        }
      }, 1000); // fake delay of 1 second
    });
  };

  // 🔹 DYNAMIC FUNCTION (Calls your real backend API at BACKEND_URL)
  const realBackendLogin = async () => {
    try {
      const response = await fetch(`${BACKEND_URL}login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });

      const result = await response.json();

      if (response.ok) {
        alert("Login successful!"); 
        // ✅ You can save token or user info here
        // localStorage.setItem("token", result.token);
      } else {
        setError(result.message || "Login failed");
      }
    } catch (error) {
      setError(error.message || "Network error");
    }
  };

  // 🔹 Switch easily between static / dynamic function here
  const handleLogin = async () => {
    setError(""); // clear old error
    try {
      // 👉 USE THIS for static fake login
      const result = await fakeBackendLogin(username, password);
      alert(result.message);

      // 👉 USE THIS for real backend login
      // await realBackendLogin();

    } catch (err) {
      setError(err.message || "Login failed");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h2 className="text-2xl font-semibold mb-6">Login Page</h2>

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
        onClick={handleLogin}
        className="bg-green-600 text-white px-6 py-2 rounded-lg"
      >
        Login
      </button>

      {error && <p className="text-red-500 mt-4">{error}</p>}
    </div>
  );
};

export default Login;
