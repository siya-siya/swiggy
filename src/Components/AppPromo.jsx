import React, { useEffect, useState } from "react";
import { BACKEND_URL } from "../config";

const AppPromo = () => {
  const [promo, setPromo] = useState({
    message: "For best offers and discounts curated specially for you.",
    qr: "https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=https://www.swiggy.com",
  });

  // useEffect(() => {
  //   const fetchPromo = async () => {
  //     try {
  //       const res = await fetch(`${BACKEND_URL}/promo`); // ensure BACKEND_URL has no trailing slash
  //       const data = await res.json();
  //       setPromo(data);
  //     } catch (error) {
  //       console.error("Failed to fetch promo:", error);
  //       // fallback to default promo (already in state)
  //     }
  //   };
  //   fetchPromo();
  // }, []);


  useEffect(() => {
  setPromo({
    title: "Big Savings on Instamart!",
    description: "Get up to 50% off on groceries 🥦",
  });
}, []);


  return (
    <div className="bg-[#0d0d0d] text-white py-16 px-6 md:px-20 flex flex-col md:flex-row items-center justify-between">
      {/* Left Content */}
      <div className="text-center md:text-left md:w-1/2">
        <div className="flex items-center justify-center md:justify-start gap-2 mb-4">
          <img
            src="https://cdn.iconscout.com/icon/free/png-256/free-swiggy-1613371-1369418.png"
            alt="Swiggy Logo"
            className="w-8 h-8"
          />
          <span className="text-orange-500 font-semibold text-lg">Delivery App</span>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold mb-3">
          Get the Swiggy App now!
        </h2>
        <p className="text-gray-400 text-lg">{promo.message}</p>
      </div>

      {/* Right Content */}
      <div className="relative mt-10 md:mt-0 md:w-1/2 flex justify-center">
        <div className="bg-white p-4 rounded-2xl shadow-lg">
          <img src={promo.qr} alt="QR Code" className="w-40 h-40" />
          <p className="text-center text-orange-500 font-semibold mt-2">
            Scan to download
          </p>
        </div>

        {/* Floating Food Icons */}
        <img
          src="https://img.icons8.com/3d-fluency/94/hamburger.png"
          alt="Burger"
          className="absolute -left-16 top-6 w-16 h-16 animate-bounce"
        />
        <img
          src="https://img.icons8.com/3d-fluency/94/sushi.png"
          alt="Sushi"
          className="absolute -left-12 bottom-6 w-16 h-16 animate-bounce"
        />
        <img
          src="https://img.icons8.com/3d-fluency/94/delivery.png"
          alt="Delivery"
          className="absolute -right-16 top-12 w-20 h-20 animate-bounce"
        />
      </div>
    </div>
  );
};

export default AppPromo;
