// src/pages/PizzaPage.jsx
import React from "react";
import { SlidersHorizontal, ChevronDown, Clock } from "lucide-react";

const restaurants = [
  {
    id: 1,
    name: "Oven Story Pizza",
    rating: 4.6,
    time: "25-30 mins",
    offer: "20% OFF",
    items: "Pizzas, Pastas, Italian, Desserts",
    location: "Bais Godam",
    img: " https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2025/5/29/4c378225-63f5-4f87-806a-8afcab2c98ce_223159.jpg   ",
  },
  {
    id: 2,
    name: "Pizza Hut",
    rating: 4.2,
    time: "25-30 mins",
    offer: "ITEMS AT ₹99",
    items: "Pizzas",
    location: "Bais Godam",
    img: " https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2025/6/9/4f2f9d35-895a-4f66-b015-d38bf551cac4_53744.JPG      ",
  },
  {
    id: 3,
    name: "Pastas By Pizza Hut",
    rating: 3.8,
    time: "25-30 mins",
    offer: "",
    items: "Pastas",
    location: "Bais Godam",
    img: " https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/FOOD_CATALOG/IMAGES/CMS/2025/6/16/47ff36f6-9ae0-41e9-aa58-61a61c77bdfd_068cc99c-a082-403c-9e9a-295d6b303a7d.png_compressed        ",
  },
  {
    id: 4,
    name: "Chicago Pizza",
    rating: 3.9,
    time: "35-40 mins",
    offer: "ITEMS AT ₹99",
    items: "Desserts, Italian, Beverages",
    location: "C Scheme",
    img: "   https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/FOOD_CATALOG/IMAGES/CMS/2024/7/9/f5142936-32cc-4463-a453-83c5af0b1022_4da0a8d7-e5eb-4781-a6f2-c79c82f0513a.jpg     ",
  },
];
const Pizza = () => {
  return (
    <div className="px-6 py-6">
      {/* Heading */}
      <h1 className="text-4xl font-bold mb-2">Pizza</h1>
      <p className="text-gray-600 mb-6">
        Cheesilicious pizzas to make every day extraordinary.
      </p>

      {/* Filters */}
      <div className="flex gap-3 mb-6">
        <button className="flex items-center gap-2 border px-4 py-2 rounded-lg">
          <SlidersHorizontal size={18} /> Filter
        </button>
        <button className="flex items-center gap-2 border px-4 py-2 rounded-lg">
          Sort By <ChevronDown size={18} />
        </button>
        <button className="flex items-center gap-2 border px-4 py-2 rounded-lg">
          10 Mins Delivery
        </button>
      </div>

      {/* Restaurants count */}
      <h2 className="text-2xl font-bold mb-4">
        {restaurants.length} Restaurants to explore
      </h2>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {restaurants.map((res) => (
          <div
            key={res.id}
            className="rounded-2xl overflow-hidden shadow hover:shadow-lg transition bg-white"
          >
            <div className="relative">
              <img
                src={res.img}
                alt={res.name}
                className="w-full h-40 object-cover"
              />
              {res.offer && (
                <div className="absolute bottom-2 left-2 bg-black text-white text-sm px-2 py-1 rounded-lg">
                  {res.offer}
                </div>
              )}
            </div>
            <div className="p-4">
              <h3 className="font-semibold text-lg">{res.name}</h3>
              <div className="flex items-center text-sm text-gray-600 mt-1">
                ⭐ {res.rating} • <Clock className="mx-1" size={14} /> {res.time}
              </div>
              <p className="text-sm text-gray-500 mt-1">{res.items}</p>
              <p className="text-sm text-gray-500">{res.location}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pizza;
