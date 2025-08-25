import React from "react";
import Categories from "../Components/categories";
import OrderOnline from "../Components/OrderOnline";
import PopularRestaurants from "../Components/PopularRestaurants";
const Dashboard = () => {
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

        <Categories />
        <OrderOnline />
        <PopularRestaurants />
      </div>
    </section>
  );
};

export default Dashboard;
