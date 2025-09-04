// src/pages/Cakes.jsx
import React from "react";
import { SlidersHorizontal } from "lucide-react";

const CakesData = [
  {
    id: 1,
    name: "Dmb(Doodh Misthan Bhandar)",
    rating: "4.6",
    time: "30-35 mins",
    offer: "40% OFF UPTO ₹80",
    category: "Navratri Special, Thalis, Chinese...",
    location: "Bani Park",
    image:
      "  https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/mwxhhhmz9gdap5zrcojj  ",
  },
  {
    id: 2,
    name: "Theobroma",
    rating: "4.6",
    time: "15-20 mins",
    offer: "ITEMS AT ₹290",
    category: "Bakery, Desserts",
    location: "C Scheme",
    image:
      " https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2025/8/14/9957e122-1975-48bc-9947-1645592be390_764055.JPG   ",
  },
  {
    id: 3,
    name: "Sweet Truth - Cake and...",
    rating: "4.3",
    time: "25-30 mins",
    offer: "ITEMS AT ₹59",
    category: "Desserts, Ice Cream, Bakery...",
    location: "Bais Godam",
    image:
      " https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2025/6/18/c6f7ef55-1379-4206-b5d2-08c2f341071e_223161.jpg ",
  },
  {
    id: 4,
    name: "Baskin Robbins - Ice Cream...",
    rating: "4.6",
    time: "20-25 mins",
    offer: "₹75 OFF ABOVE ₹499",
    category: "Desserts, Ice Cream",
    location: "Yudhister Marg",
    image:
      " https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2025/4/24/ada7adf6-5ff9-4a48-a9b0-b0f879f405a7_1002630.JPG ",
  },
];

const Cakes = () => {
  return (
    <div className="p-6">
      {/* Title */}
      <h1 className="text-4xl font-bold">Cakes</h1>
      <p className="text-gray-600 mt-1">
        Feast on amazing cakes to satisfy your sweet tooth.
      </p>

      {/* Filters */}
      <div className="flex items-center gap-4 mt-4">
        <button className="flex items-center gap-2 border px-4 py-2 rounded-full text-sm font-medium">
          <SlidersHorizontal size={16} /> Filter
        </button>
        <button className="border px-4 py-2 rounded-full text-sm font-medium">
          Sort By
        </button>
        <button className="border px-4 py-2 rounded-full text-sm font-medium">
          10 Mins Delivery
        </button>
      </div>

      {/* Restaurant count */}
      <h2 className="mt-6 text-2xl font-bold">181 Restaurants to explore</h2>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
        {CakesData.map((cake) => (
          <div
            key={cake.id}
            className="rounded-2xl shadow hover:shadow-lg transition overflow-hidden bg-white"
          >
            {/* Image */}
            <div className="relative">
              <img
                src={cake.image}
                alt={cake.name}
                className="w-full h-48 object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black/60 text-white text-sm font-bold px-3 py-2">
                {cake.offer}
              </div>
            </div>

            {/* Details */}
            <div className="p-3">
              <h3 className="font-bold">{cake.name}</h3>
              <div className="flex items-center text-sm text-gray-700 mt-1">
                <span className="text-green-600 font-semibold">
                  ★ {cake.rating}
                </span>
                <span className="mx-2">•</span>
                <span>{cake.time}</span>
              </div>
              <p className="text-sm text-gray-500 mt-1">{cake.category}</p>
              <p className="text-sm text-gray-500">{cake.location}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cakes;
