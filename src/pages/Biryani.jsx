import React from "react";
import { SlidersHorizontal } from "lucide-react";

const restaurants = [
  {
    id: 1,
    name: "The Good Bowl",
    rating: 4.3,
    time: "20-25 mins",
    cuisines: "Biryani, North Indian, Pastas, Punjabi",
    location: "Bais Godam",
    price: "₹119",
    img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/FOOD_CATALOG/IMAGES/CMS/2025/2/11/afe984c3-57eb-4ca8-b459-9258a62ca3c9_9a889d30-8117-4e78-ae8c-0616ae388be4.JPG  ",
  },
  {
    id: 2,
    name: "Behrouz Biryani",
    rating: 4.3,
    time: "25-30 mins",
    cuisines: "Biryani, North Indian, Kebabs, Mughlai",
    location: "Bais Godam",
    price: "₹99",
    img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/FOOD_CATALOG/IMAGES/CMS/2025/5/11/37f44124-8087-4dd6-b48f-d91810e3831c_0452b182-5f7c-4a82-a603-778f8f62a49d.jpeg  ",
  },
  {
    id: 3,
    name: "The Biryani Life",
    rating: 4.2,
    time: "20-25 mins",
    cuisines: "Biryani, Mughlai, Lucknowi",
    location: "Bais Godam",
    price: "₹159",
    img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/FOOD_CATALOG/IMAGES/CMS/2025/5/14/4f3a6687-3dda-43fe-a36d-8c97946234fe_97e8e3bb-aa8a-4087-b6c5-c855ff500ad1.jpg ",
  },
  {
    id: 4,
    name: "Mughal Restaurant",
    rating: 4.0,
    time: "20-25 mins",
    cuisines: "North Indian, Biryani, Mughlai, Kebabs",
    location: "Hasan Pura",
    offer: "60% OFF Upto ₹120",
    img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/FOOD_CATALOG/IMAGES/CMS/2025/7/2/8bf3bbe1-bccf-4067-9340-4ef0ce3caf28_4928d658-b637-4deb-8c57-b975167aaf4e.jpeg  ",
  },
];

const BiryaniPage = () => {
  return (
    <div className="p-6">
      {/* Header */}
      <h1 className="text-3xl font-bold mb-2">Biryani</h1>
      <p className="text-gray-600 mb-6">
        Taste these delectable classics, delectable biryanis to make your day.
      </p>

      {/* Filters */}
      <div className="flex gap-3 mb-6">
        <button className="px-4 py-2 border rounded-lg">Filter</button>
        <button className="px-4 py-2 border rounded-lg">Sort By</button>
        <button className="px-4 py-2 border rounded-lg">10 Mins Delivery</button>
      </div>

      <h2 className="text-xl font-semibold mb-4">108 Restaurants to explore</h2>

      {/* Restaurant Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {restaurants.map((res) => (
          <div
            key={res.id}
            className="border rounded-xl overflow-hidden shadow hover:shadow-lg transition"
          >
            <div className="relative">
              <img src={res.img} alt={res.name} className="w-full h-48 object-cover" />
              <div className="absolute bottom-2 left-2 bg-black text-white text-sm px-2 py-1 rounded">
                {res.offer ? res.offer : `ITEMS AT ${res.price}`}
              </div>
            </div>
            <div className="p-4">
              <h3 className="font-semibold text-lg">{res.name}</h3>
              <p className="text-sm text-gray-500 flex items-center">
                ⭐ {res.rating} • {res.time}
              </p>
              <p className="text-sm text-gray-600 mt-1">{res.cuisines}</p>
              <p className="text-sm text-gray-600">{res.location}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BiryaniPage;
