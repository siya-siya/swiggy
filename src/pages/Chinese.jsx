import React from "react";
import { Star } from "lucide-react";


const restaurants = [
  {
    id: 1,
    name: "Chinese Wok",
    rating: 4.2,
    time: "30-40 mins",
    desc: "Chinese, Asian, Tibetan, Desserts",
    location: "Vivek Vihar",
    img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/FOOD_CATALOG/IMAGES/CMS/2024/6/7/38c2e066-8dd1-453d-b7c9-a40b4706dd55_8f6bfe25-466b-4c8a-88a5-73c27e254c42.jpg_compressed  ",
    offer: "ITEMS AT ₹129",
    isAd: true,
  },
  {
    id: 2,
    name: "Urban Chinese",
    rating: 4.1,
    time: "30-35 mins",
    desc: "Chinese",
    location: "MI Road",
    img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/0a6b932a25017f42fd3d4d7bcc6d798c   ",
    offer: "20% OFF UPTO ₹120",
    isAd: false,
  },
  {
    id: 3,
    name: "Shreeji Chinese Fast Food",
    rating: 4.4,
    time: "40-50 mins",
    desc: "Chinese, Fast Food, Burgers",
    location: "Lal Kothi",
    img: "  https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/FOOD_CATALOG/IMAGES/CMS/2025/2/19/c6af923a-0d48-434b-96d1-91bf19f8bb11_e558d093-81b2-4d04-9e85-e236bd5b2734.jpg",
    offer: "₹100 OFF ABOVE ₹199",
    isAd: true,
  },
  {
    id: 4,
    name: "Chao Chinese Bistro - Holiday Inn",
    rating: 4.3,
    time: "35-40 mins",
    desc: "Chinese, Asian, Thai",
    location: "C Scheme",
    img: " https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/qg565sekubsrw8a22w5o   ",
    offer: "₹125 OFF ABOVE ₹199",
    isAd: false,
  },
];

const ChinesePage = () => {
  return (
    <div className="p-6">
      <h1 className="text-4xl font-bold">Chinese</h1>
      <p className="text-gray-600 mt-2">
        Transport your taste buds to the heart of Chinese cuisine with these
        scrumptious dishes.
      </p>

      <div className="flex gap-3 mt-4">
        <button className="border px-4 py-2 rounded-full">Filter</button>
        <button className="border px-4 py-2 rounded-full">Sort By</button>
        <button className="border px-4 py-2 rounded-full">
          10 Mins Delivery
        </button>
      </div>

      <h2 className="text-xl font-semibold mt-6">
        278 Restaurants to explore
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-4">
        {restaurants.map((res) => (
          <div key={res.id} className="relative bg-white rounded-xl shadow hover:shadow-lg overflow-hidden">
            <img
              src={res.img}
              alt={res.name}
              className="h-40 w-full object-cover"
            />
            <p className="absolute bottom-2 left-2 bg-black text-white px-2 py-1 text-sm rounded">
              {res.offer}
            </p>
            <div className="p-3">
              {res.isAd && (
                <span className="text-xs bg-gray-200 px-2 py-1 rounded">
                  Ad
                </span>
              )}
              <h3 className="font-bold mt-1">{res.name}</h3>
              <div className="flex items-center text-sm mt-1">
                <Star className="w-4 h-4 text-green-600 mr-1" />
                <span>
                  {res.rating} • {res.time}
                </span>
              </div>
              <p className="text-gray-500 text-sm mt-1">{res.desc}</p>
              <p className="text-gray-500 text-sm">{res.location}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChinesePage;
