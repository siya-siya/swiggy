// src/components/PopularRestaurants.js
import React, { useState } from "react";
import { SlidersHorizontal, ChevronDown } from "lucide-react";

const filterChips = [
  { label: "Filter", icon: SlidersHorizontal },
  { label: "Sort By", icon: ChevronDown },
  { label: "Fast Delivery" },
  { label: "New on Swiggy" },
  { label: "Ratings 4.0+" },
  { label: "Pure Veg" },
  { label: "Offers" },
  { label: "Rs. 300–Rs. 600" },
  { label: "Less than Rs. 300" },
];

function Chip({ label, Icon }) {
  return (
    <button className="flex items-center gap-2 rounded-full border px-4 py-2 text-sm bg-white hover:bg-gray-50 shadow-sm">
      {Icon ? <Icon size={16} /> : null}
      <span>{label}</span>
      {/* show small down arrow only for "Sort By" */}
      {label === "Sort By" ? <ChevronDown size={16} /> : null}
    </button>
  );
}

export default function PopularRestaurants() {
  const [restaurants] = useState([
    {
      name: "Burger King",
      img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2025/6/18/9c75fd37-f428-4a2f-9beb-ba1f2e2cf391_90186.jpg",
      offer: "ITEMS AT ₹59",
      rating: "4.2",
      time: "35-40 mins",
      cuisines: "Burgers, American",
      location: "Vaishali Nagar",
    },
    {
      name: "Subway",
      img: "https://www.shutterstock.com/shutterstock/photos/2286250855/display_1500/stock-photo-subway-foot-long-roast-beef-lunch-delicous-but-healthy-2286250855.jpg",
      offer: "ITEMS AT ₹119",
      rating: "4.4",
      time: "20-25 mins",
      cuisines: "Sandwich, Salads, Wrap, Healthy Food",
      location: "C Scheme",
    },
    {
      name: "Burger Farm",
      img: "https://b.zmtcdn.com/data/pictures/chains/3/102003/b54d7bf184c2bb18a325f9ed25c8afb8.jpg?output-format=webp&fit=around|771.75:416.25&crop=771.75:416.25;*,*",
      offer: "₹150 OFF ABOVE ₹499",
      rating: "4.5",
      time: "15-20 mins",
      cuisines: "American, Continental, Italian-American",
      location: "C Scheme",
    },
    {
      name: "DMB (Doodh Misthan Bhandar)",
      img: "https://b.zmtcdn.com/data/pictures/8/100108/aa94adf9d31cce1150515a784100d83f_featured_v2.jpg?output-format=webp&fit=around|771.75:416.25&crop=771.75:416.25;*,*",
      offer: "40% OFF UPTO ₹80",
      rating: "4.6",
      time: "25-30 mins",
      cuisines: "Navratri Special, Thalis",
      location: "Bani Park",
    },
  ]);

  return (
    <div className="max-w-6xl mx-auto p-4">
      {/* Tabs */}
      <div className="flex gap-6 border-b mb-6">
        <button className="pb-3 -mb-[1px] border-b-2 border-orange-500 font-semibold">
          Order Online
        </button>
        <button className="pb-3 text-gray-500 hover:text-black">Dineout</button>
      </div>

      {/* Heading */}
      <h2 className="text-2xl font-bold mb-5">
        Popular Order Food Online restaurants near me
      </h2>

      {/* Filter chips */}
      <div className="flex flex-wrap gap-3 mb-8">
        {filterChips.map((chip, i) => (
          <Chip key={i} label={chip.label} Icon={chip.icon} />
        ))}
      </div>

      {/* Restaurant cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {restaurants.map((res, idx) => (
          <div
            key={idx}
            className="rounded-2xl overflow-hidden shadow hover:shadow-md transition"
          >
            <div className="relative">
              <img
                src={res.img}
                alt={res.name}
                className="h-44 w-full object-cover"
              />
              <div
                className="absolute inset-x-0 bottom-0 px-4 py-2 text-white font-extrabold text-sm
                              bg-gradient-to-t from-black/60 to-transparent"
              >
                {res.offer}
              </div>
            </div>

            <div className="p-3">
              <h3 className="font-bold text-lg truncate max-w-[260px]">
                {res.name}
              </h3>

              <p className="text-sm text-gray-700 flex items-center gap-2 mt-1">
                <span className="text-green-600 font-bold">★ {res.rating}</span>
                <span>• {res.time}</span>
              </p>

              <p className="text-sm text-gray-500 mt-1">{res.cuisines}</p>
              <p className="text-sm text-gray-500">{res.location}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
