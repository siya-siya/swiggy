import React from "react";

const restaurants = [
  {
    id: 1,
    name: "Satkar Restaurant",
    img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/FOOD_CATALOG/IMAGES/CMS/2025/3/15/418108f8-ee01-4111-bb3b-25cc472899a1_01503c40-374d-4694-93d3-ef9165c5174d.jpg  ",
    rating: 4.4,
    time: "50-60 mins",
    cuisines: "South Indian, Indian, Salads, Desserts",
    location: "Satkar Chowk",
    ad: true,
  },
  {
    id: 2,
    name: "Hotel Sai Bajrang Family",
    img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/FOOD_CATALOG/IMAGES/CMS/2024/10/2/0194680b-3902-4cd1-b12d-e26bdf876f57_f33c8563-6a82-41c1-84b1-0580111a1b20.JPG ",
    rating: 4.3,
    time: "60-70 mins",
    cuisines: "Pure Veg, North Indian, Chinese",
    location: "Chhindwara City",
    ad: false,
  },
  {
    id: 3,
    name: "Blue Chilli Restaurant",
    img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/b85ed4f300d122ae59fd7c6becea5dd3  ",
    rating: 3.8,
    time: "60-70 mins",
    cuisines: "South Indian, Indian, Fast Food",
    location: "Prasia Road",
    offer: "20% OFF Upto ₹120",
    ad: true,
  },
  {
    id: 4,
    name: "Jai Ganesh Bhojnalaya",
    img: "  https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/7/14/075a4401-3091-45f9-a2f1-1b22024d51df_925308.jpg",
    rating: 4.1,
    time: "45-55 mins",
    cuisines: "South Indian, Indian, Chinese",
    location: "Bus Stand",
    ad: false,
  },
];

const NorthIndia = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-8">
      {/* Page heading */}
      <h1 className="text-3xl font-bold mb-2">North Indian</h1>
      <p className="text-gray-600 mb-6">
        Indulge with the best of North Indian cuisines.
      </p>

      {/* Filters & Sort */}
      <div className="flex items-center gap-4 mb-6">
        <button className="flex items-center gap-2 border rounded-full px-4 py-2 text-sm font-medium">
          <span>⚙️</span> Filter
        </button>
        <button className="flex items-center gap-2 border rounded-full px-4 py-2 text-sm font-medium">
          Sort By ▼
        </button>
      </div>

      {/* Restaurants */}
      <h2 className="text-xl font-semibold mb-4">Restaurants to explore</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {restaurants.map((res) => (
          <div
            key={res.id}
            className="bg-white rounded-2xl shadow hover:shadow-lg transition overflow-hidden"
          >
            {/* Image */}
            <div className="relative">
              <img
                src={res.img}
                alt={res.name}
                className="w-full h-40 object-cover"
              />
              {res.offer && (
                <div className="absolute bottom-2 left-2 bg-black text-white text-xs px-2 py-1 rounded">
                  {res.offer}
                </div>
              )}
            </div>

            {/* Content */}
            <div className="p-4">
              {res.ad && <p className="text-xs text-gray-500">Ad</p>}
              <h3 className="font-semibold">{res.name}</h3>
              <p className="text-sm flex items-center gap-2 text-gray-700">
                ⭐ {res.rating} • {res.time}
              </p>
              <p className="text-sm text-gray-500 truncate">{res.cuisines}</p>
              <p className="text-sm text-gray-500">{res.location}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default NorthIndia;
