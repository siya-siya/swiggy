// src/Components/Categories.js
import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";

const Categories = () => {
  const scrollRef = useRef(null);
  const navigate = useNavigate();

  const [categories] = useState([
    {
      name: "Pizza",
      image:
        "https://images.unsplash.com/photo-1593504049359-74330189a345?q=80&w=627&auto=format&fit=crop",
      link: "/pizza",
    },
    {
      name: "Burger",
      image:
        "https://media.istockphoto.com/id/520410807/photo/cheeseburger.jpg?s=612x612&w=0&k=20&c=fG_OrCzR5HkJGI8RXBk76NwxxTasMb1qpTVlEM0oyg4=",
      link: "/burger",
    },
    {
      name: "Biryani",
      image:
        "https://images.unsplash.com/photo-1701579231305-d84d8af9a3fd?q=80&w=687&auto=format&fit=crop",
      link: "/biryani",
    },
    {
      name: "Cake",
      image:
        "https://images.unsplash.com/photo-1551024601-bec78aea704b?q=80&w=764&auto=format&fit=crop",
      link: "/cake",
    },
    {
      name: "Dhokla",
      image:
        "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/8f508de7-e0ac-4ba8-b54d-def9db98959e_dhokla.png",
      link: "/dhokla",
    },
    {
      name: "Khichdi",
      image:
        "   https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_Khichdi.png ",
          link: "/Khichdi",
    },
    {
      name: "Chinese",
      image:
        "https://media.istockphoto.com/id/545286388/photo/chinese-food-blank-background.jpg?s=612x612&w=0&k=20&c=pqOIy07YKO5PlU5VxjscwTGRrrZ8PluKMUjSOz-II60=",
      link: "/chinese",
    },
    {
      name: "North Indian",
      image:
        "https://media.istockphoto.com/id/1292564353/photo/assorted-indian-food-on-wooden-background-paneer-tikka-dal-tadka-jeera-rice-roti-dishes-and.jpg?s=1024x1024&w=is&k=20&c=93IIFJmPZZ1wq5PvWbUlW9-5tTWwi5zysinwn4h3JQ0=",
      link: "/NorthIndia",
    },

    
  ]);

  const scroll = (direction) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === "left" ? -200 : 200,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="px-8 py-6">
      {/* Header with scroll buttons */}
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-2xl font-semibold">What's on your mind?</h1>
        <div className="flex gap-2">
          <button
            onClick={() => scroll("left")}
            className="bg-white p-2 rounded-full shadow-md hover:bg-gray-100"
          >
            <ChevronLeftIcon className="h-5 w-5 text-gray-700" />
          </button>
          <button
            onClick={() => scroll("right")}
            className="bg-white p-2 rounded-full shadow-md hover:bg-gray-100"
          >
            <ChevronRightIcon className="h-5 w-5 text-gray-700" />
          </button>
        </div>
      </div>

      {/* Categories list */}
      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto scrollbar-hide scroll-smooth"
      >
        {categories.map((cat, index) => (
          <div
            key={index}
            onClick={() => cat.link && navigate(cat.link)}
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
