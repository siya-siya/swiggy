// src/components/OrderOnline.js
import React, { useState, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function OrderOnline() {
  const scrollRef = useRef(null);

  const [restaurants] = useState([
    {
      name: "Burger King",
      img: "https://images.unsplash.com/photo-1716825340643-e2cb63393141?w=600&auto=format&fit=crop&q=60",
      offer: "ITEMS AT ₹59",
      rating: "4.2",
      time: "35-40 mins",
      cuisines: "Burgers, American",
      location: "Vaishali Nagar",
    },
    {
      name: "Subway",
      img: " https://media.gettyimages.com/id/1074617856/photo/subway-chicken-tikka-burger-in-wheat-bread-with-vegetables.jpg?s=612x612&w=0&k=20&c=5CjDSWuSXwokoTCyVwaVH3HVvjY0V6NnpbbKgXuVRP4=  ", // ✅ replaced with Unsplash
      offer: "ITEMS AT ₹119",
      rating: "4.4",
      time: "20-25 mins",
      cuisines: "Sandwich, Salads, Wrap, Healthy Food",
      location: "C Scheme",
    },
    {
      name: "Burger Farm",
      img: "https://b.zmtcdn.com/data/pictures/chains/3/102003/b54d7bf184c2bb18a325f9ed25c8afb8.jpg?output-format=webp",
      offer: "₹150 OFF ABOVE ₹499",
      rating: "4.5",
      time: "15-20 mins",
      cuisines: "American, Continental, Italian-American",
      location: "C Scheme",
    },
  ]);

  const scroll = (direction) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === "left" ? -300 : 300,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="max-w-6xl mx-auto p-4">
      {/* Header with buttons */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">Best Food Outlets Near Me</h2>
        <div className="flex gap-2">
          <button
            onClick={() => scroll("left")}
            className="p-2 rounded-full bg-gray-200 hover:bg-gray-300"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={() => scroll("right")}
            className="p-2 rounded-full bg-gray-200 hover:bg-gray-300"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>

      {/* Restaurant cards */}
      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto scrollbar-hide scroll-smooth"
      >
        {restaurants.map((res, index) => (
          <div
            key={index}
            className="min-w-[280px] bg-white rounded-2xl shadow-md hover:shadow-lg transition overflow-hidden"
          >
            <div className="relative">
              <img
                src={res.img}
                alt={res.name}
                className="h-44 w-full object-cover"
              />
              <div className="absolute bottom-0 w-full bg-black bg-opacity-50 text-white px-3 py-2 text-sm font-bold">
                {res.offer}
              </div>
            </div>
            <div className="p-3">
              <h3 className="font-bold text-lg">{res.name}</h3>
              <p className="text-sm text-gray-600 flex items-center">
                <span className="text-green-600 font-bold mr-2">
                  ★ {res.rating}
                </span>
                • {res.time}
              </p>
              <p className="text-sm text-gray-500">{res.cuisines}</p>
              <p className="text-sm text-gray-500">{res.location}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
