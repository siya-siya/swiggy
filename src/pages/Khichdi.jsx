// src/Pages/Khichdi.jsx
import React from "react";

const restaurants = [
  {
    id: 1,
    name: "Satkar Restaurant",
    rating: "4.4",
    time: "40-50 mins",
    cuisines: "South Indian, Indian, Salads, Desserts",
    location: "Satkar Chowk",
    image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/FOOD_CATALOG/IMAGES/CMS/2024/3/14/dff34b28-5a3b-4ec2-b757-ff8106a491fc_daa1d2cb-b9f5-4f43-b123-d194d1f6ba4a.png  ",
    offer: null,
  },
  {
    id: 2,
    name: "Jai Ganesh Bhojnalaya",
    rating: "4.1",
    time: "35-40 mins",
    cuisines: "South Indian, Indian, Chinese",
    location: "Bus stand",
    image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/FOOD_CATALOG/IMAGES/CMS/2024/4/9/788d4ff6-5d5b-4956-b136-24159b8799b9_308d4115-d37f-4f09-b679-ae583d59641a.JPG  ",
    offer: null,
  },
  {
    id: 3,
    name: "Shree Naivedyam",
    rating: "4.2",
    time: "60-70 mins",
    cuisines: "Chinese, South Indian, Pizzas",
    location: "Chhindwara City",
    image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/FOOD_CATALOG/IMAGES/CMS/2025/1/5/686aa581-198e-4f80-a21e-368161c5d0d2_52cb212c-7f27-4389-8069-04cf33fa5c55.jpg  ",
    offer: "₹40 OFF ABOVE ₹399",
  },
  {
    id: 4,
    name: "Hotel Sai Bajrang Family",
    rating: "4.3",
    time: "50-60 mins",
    cuisines: "Pure Veg, North Indian, Chinese",
    location: "Chhindwara City",
    image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/FOOD_CATALOG/IMAGES/CMS/2025/5/17/88e8e4d3-38bc-443b-b470-d24e3abb0741_a4bac834-24b1-49c7-8a11-ad4cc41b1865.jpg   ",
    offer: null,
  },
];

const Khichdi = () => {
  return (
    <div className="p-6">
      <h1 className="text-4xl font-bold">Khichdi</h1>
      <p className="text-lg text-gray-600 mb-6">
        Comforting and filling, dive into the delicious flavour of Khichdi.
      </p>

      {/* Filter + Sort */}
      <div className="flex gap-4 mb-6">
        <button className="border rounded-full px-4 py-2 flex items-center gap-2">
          <span>⚙️</span> Filter
        </button>
        <button className="border rounded-full px-4 py-2 flex items-center gap-2">
          Sort By ⌄
        </button>
      </div>

      <h2 className="text-2xl font-semibold mb-4">Restaurants to explore</h2>

      {/* Restaurant cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {restaurants.map((res) => (
          <div key={res.id} className="rounded-2xl overflow-hidden shadow-md relative">
            <img src={res.image} alt={res.name} className="w-full h-48 object-cover" />

            {res.offer && (
              <span className="absolute bottom-20 left-0 bg-black text-white px-3 py-1 text-sm font-bold">
                {res.offer}
              </span>
            )}

            <div className="p-4">
              <h3 className="font-bold text-lg">{res.name}</h3>
              <p className="text-sm text-gray-500 flex items-center gap-2">
                ⭐ {res.rating} • {res.time}
              </p>
              <p className="text-sm text-gray-600">{res.cuisines}</p>
              <p className="text-sm text-gray-600">{res.location}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Khichdi;
