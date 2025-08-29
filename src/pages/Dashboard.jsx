import React, { useEffect, useState } from "react";
import Categories from "../Components/Categories";
import OrderOnline from "../Components/OrderOnline";
import PopularRestaurants from "../Components/PopularRestaurants";
import { BACKEND_URL } from "../config";

const Dashboard = () => {
  const [categories, setCategories] = useState([]);
  const [orders, setOrders] = useState([]);
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    // --- STATIC DATA (Uncomment for testing without backend) ---
    /*
    setCategories([
      { name: "Pizza", image: "...", link: "/pizza" },
      { name: "Burger", image: "...", link: "/burger" },
      // ...other categories
    ]);
    setOrders([
      { name: "Burger King", img: "...", offer: "ITEMS AT ₹59", rating: "4.2", time: "35-40 mins", cuisines: "Burgers, American", location: "Vaishali Nagar" },
      // ...other orders
    ]);
    setRestaurants([
      { name: "Burger King", img: "...", offer: "ITEMS AT ₹59", rating: "4.2", time: "35-40 mins", cuisines: "Burgers, American", location: "Vaishali Nagar" },
      // ...other restaurants
    ]);
    return; // Remove this line when using backend
    */
    // --- BACKEND DATA ---
    // Fetch categories
    fetch(`${BACKEND_URL}categories`)
      .then((res) => res.json())
      .then((data) => setCategories(data))
      .catch(() => setCategories([]));

    // Fetch orders
    fetch(`${BACKEND_URL}orders`)
      .then((res) => res.json())
      .then((data) => setOrders(data))
      .catch(() => setOrders([]));

    // Fetch restaurants
    fetch(`${BACKEND_URL}restaurants`)
      .then((res) => res.json())
      .then((data) => setRestaurants(data))
      .catch(() => setRestaurants([]));
  }, []);

  return (
    <section className="max-w-7xl mx-auto mt-6 px-6">
      <div className="w-[80%] ml-[10%]">
        <div className="relative rounded-3xl overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1600891964599-f61ba0e24092"
            alt="Food Banner"
            className="w-full h-72 object-cover"
          />
          <div className="absolute top-0 left-0 w-full h-full bg-black/40 flex flex-col justify-center p-8">
            <h1 className="text-3xl md:text-4xl font-bold text-white max-w-lg">
              Order Online Delivery Restaurants Near Me
            </h1>
          </div>
        </div>

        <Categories data={categories} />
        <OrderOnline data={orders} />
        <PopularRestaurants data={restaurants} />
      </div>
    </section>
  );
};

export default Dashboard;
