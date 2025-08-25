import React from "react";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h2 className="text-2xl font-semibold mb-6">Sign In Page</h2>
      <button
        onClick={() => navigate("/login")}
        className="bg-orange-500 text-white px-6 py-2 rounded-lg"
      >
        Sign Up
      </button>
    </div>
  );
};

export default SignIn;
