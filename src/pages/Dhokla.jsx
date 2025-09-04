// src/Pages/Dhokla.jsx
import React from "react";
import { Star } from "lucide-react";
const restaurants = [
  {
    id: 1,
    name: "Kanha",
    offer: "50% OFF UPTO ₹100",
    rating: "4.6",
    time: "30-40 mins",
    cuisines: "Sweets, Fast Food, South Indian...",
    location: "Lal Kothi",
    image:
      "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/FOOD_CATALOG/IMAGES/CMS/2025/7/2/c99391d6-5ace-43b7-a511-ee8d38b2e3d2_370e4060-4b57-4300-9aff-64391d5dd32f.jpeg  ",
  },
  {
    id: 2,
    name: "Falahaar & Kota Kachori",
    offer: "ITEMS AT ₹29",
    rating: "4.5",
    time: "15-20 mins",
    cuisines: "Snacks, Indian",
    location: "Ahinsa Circle, C-Scheme",
    image:
      " https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/ff6ae056c1bc8183ab00c301651559cb  ",
  },
  {
    id: 3,
    name: "Kesar Sweets",
    offer: "40% OFF UPTO ₹80",
    rating: "4.3",
    time: "35-40 mins",
    cuisines: "Chaat, Indian, Sweets, Snacks...",
    location: "C Scheme",
    image:
      "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/FOOD_CATALOG/IMAGES/CMS/2025/1/4/eae364a5-0d7f-4739-bc2d-a05112ff8ffa_2069d8e8-8677-40a7-97e7-b0e639347745.jpg   ",
  },
  {
    id: 4,
    name: "Rawat Misthan Bhandar",
    offer: "",
    rating: "4.6",
    time: "35-45 mins",
    cuisines: "Thalis, Chinese, Mughlai, Chaat",
    location: "Sindhi Camp",
    image:
      " https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/dewv6wtrqzndqafdjg1g ",
  },
];

const Dhokla = () => {
  return (
    <div className="p-6">
      {/* Heading */}
      <h1 className="text-3xl font-bold">Dhokla</h1>
      <p className="text-gray-600 mb-4">
        Savour these classic, juicy and delectable Dhoklas.
      </p>

      {/* Filters */}
      <div className="flex gap-3 mb-6">
        <button className="border px-4 py-2 rounded-full">Filter</button>
        <button className="border px-4 py-2 rounded-full">Sort By</button>
        <button className="border px-4 py-2 rounded-full">10 Mins Delivery</button>
      </div>

      {/* Restaurant Section */}
      <h2 className="text-xl font-semibold mb-4">Restaurants to explore</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {restaurants.map((res) => (
          <div
            key={res.id}
            className="rounded-xl overflow-hidden shadow-md hover:shadow-lg transition"
          >
            <div className="relative">
              <img
                src={res.image}
                alt={res.name}
                className="w-full h-40 object-cover"
              />
              {res.offer && (
                <span className="absolute bottom-2 left-2 bg-black text-white px-2 py-1 text-sm rounded">
                  {res.offer}
                </span>
              )}
            </div>
            <div className="p-3">
              <h3 className="font-bold">{res.name}</h3>
              <p className="text-sm text-gray-600">
                ⭐ {res.rating} • {res.time}
              </p>
              <p className="text-sm text-gray-500">{res.cuisines}</p>
              <p className="text-sm text-gray-400">{res.location}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dhokla;
