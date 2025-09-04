import React from "react";
import { SlidersHorizontal } from "lucide-react";

const burgerRestaurants = [
  {
    id: 1,
    name: "Burger King",
    rating: 4.2,
    time: "20-25 mins",
    cuisines: "Burgers, Fast Food, Beverages",
    location: "Bais Godam",
    price: "ITEMS AT ₹129",
    image: " https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_264,h_288,c_fill/RX_THUMBNAIL/IMAGES/VENDOR/2025/6/18/9c75fd37-f428-4a2f-9beb-ba1f2e2cf391_90186.jpg",
  },
  {
    id: 2,
    name: "McDonald's",
    rating: 4.1,
    time: "15-20 mins",
    cuisines: "Burgers, Wraps, Fast Food",
    location: "Hasan Pura",
    price: "ITEMS AT ₹99",
    image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_264,h_288,c_fill/RX_THUMBNAIL/IMAGES/VENDOR/2025/2/19/c2e79efc-fb2e-4639-ae73-a2ef51defc8e_1044103.jpg  ",
  },
  {
    id: 3,
    name: "KFC",
    rating: 4.3,
    time: "20-30 mins",
    cuisines: "Burgers, Fried Chicken, Fast Food",
    location: "MI Road",
    price: "ITEMS AT ₹149",
    image: " https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_264,h_288,c_fill/c9247d3243cd1a292290f68b6c810a62",
  },
  {
    id: 4,
    name: "Burger Farm",
    rating: 4.4,
    time: "25-30 mins",
    cuisines: "Burgers, Snacks, Beverages",
    location: "Vaishali Nagar",
    price: "60% OFF UPTO ₹120",
    image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_264,h_288,c_fill/4661988ec103829aeab2e4f09ef1fdfe  ",
  },
];

const BurgerPage = () => {
  return (
    <div className="p-6">
      <h1 className="text-4xl font-bold mb-2">Burger</h1>
      <p className="text-gray-600 mb-6">
        Bite into these juicy, cheesy, and crispy burgers to satisfy your cravings.
      </p>

      <div className="flex gap-3 mb-6">
        <button className="border px-4 py-2 rounded">Filter</button>
        <button className="border px-4 py-2 rounded">Sort By</button>
        <button className="border px-4 py-2 rounded">10 Mins Delivery</button>
      </div>

      <h2 className="text-2xl font-semibold mb-4">98 Restaurants to explore</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {burgerRestaurants.map((restaurant) => (
          <div key={restaurant.id} className="rounded-lg shadow-md overflow-hidden">
            <div className="relative">
              <img
                src={restaurant.image}
                alt={restaurant.name}
                className="w-full h-40 object-cover"
              />
              <p className="absolute bottom-0 left-0 bg-black text-white text-sm px-2 py-1">
                {restaurant.price}
              </p>
            </div>
            <div className="p-3">
              <h3 className="font-semibold">{restaurant.name}</h3>
              <p className="text-sm text-gray-500">
                ⭐ {restaurant.rating} • {restaurant.time}
              </p>
              <p className="text-sm text-gray-600 truncate">{restaurant.cuisines}</p>
              <p className="text-sm text-gray-600">{restaurant.location}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BurgerPage;
