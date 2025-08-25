// src/components/Categories.js
import React from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
const categories = [
  {
    name: "Pizza",
    image:
      " https://images.unsplash.com/photo-1593504049359-74330189a345?q=80&w=627&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D   ",
  },
  {
    name: "Burger",
    image:
      "  https://media.istockphoto.com/id/520410807/photo/cheeseburger.jpg?s=612x612&w=0&k=20&c=fG_OrCzR5HkJGI8RXBk76NwxxTasMb1qpTVlEM0oyg4=                   ",
  },
  {
    name: "Biryani",
    image:
      "https://images.unsplash.com/photo-1701579231305-d84d8af9a3fd?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D ",
  },
  {
    name: "Desserts",
    image:
      " https://images.unsplash.com/photo-1551024601-bec78aea704b?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D ",
  },
  {
    name: "Ice Cream",
    image:
      " https://plus.unsplash.com/premium_photo-1678198786424-c2cc6593f59c?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D ",
  },
  {
    name: "South Indian",
    image:
      " https://t4.ftcdn.net/jpg/00/86/59/89/360_F_86598969_ju2bZp0D2siXwGqNfVlBWj0kCwyuFt5p.jpg   ",
  },
  {
    name: "Chinese",
    image:
      " https://media.istockphoto.com/id/545286388/photo/chinese-food-blank-background.jpg?s=612x612&w=0&k=20&c=pqOIy07YKO5PlU5VxjscwTGRrrZ8PluKMUjSOz-II60= ",
  },
  {
    name: "North Indian",
    image:
      " https://media.istockphoto.com/id/1292564353/photo/assorted-indian-food-on-wooden-background-paneer-tikka-dal-tadka-jeera-rice-roti-dishes-and.jpg?s=1024x1024&w=is&k=20&c=93IIFJmPZZ1wq5PvWbUlW9-5tTWwi5zysinwn4h3JQ0=  ",
  },
];

const Categories = () => {
  return (
    <div className="px-8 py-6">
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-2xl font-semibold">What's on your mind?</h1>

        {/* Buttons on right side */}
        <div className="flex gap-2">
          {/* Left Arrow */}
          <button className="bg-white p-2 rounded-full shadow-md hover:bg-gray-100">
            <ChevronLeftIcon className="h-5 w-5 text-gray-700" />
          </button>

          {/* Right Arrow */}
          <button className="bg-white p-2 rounded-full shadow-md hover:bg-gray-100">
            <ChevronRightIcon className="h-5 w-5 text-gray-700" />
          </button>
        </div>
      </div>
      <div className="flex gap-6 overflow-x-auto scrollbar-hide">
        {categories.map((cat, index) => (
          <div
            key={index}
            className="min-w-[120px] flex flex-col items-center cursor-pointer hover:scale-105 transition"
          >
            <img
              src={cat.image}
              alt={cat.name}
              className="w-20 h-20 rounded-full object-cover"
            />
            <p className="mt-2 text-gray-700 font-medium">{cat.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
