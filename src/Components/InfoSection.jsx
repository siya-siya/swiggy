
// src/components/InfoSection.jsx
import React, { useState } from "react";

export default function InfoSection() {
  const [showMoreFirst, setShowMoreFirst] = useState(false);
  const [showMoreSecond, setShowMoreSecond] = useState(false);

  const firstParagraph = `Craving something delicious? Discover a world of culinary delights right at your fingertips with food delivery near me! Whether you're in the mood for a hearty burger, fresh sushi, or a comforting bowl of pasta, there's no shortage of options to satisfy your cravings. The convenience of online food delivery near me allows you to explore various restaurants and cuisines without leaving the comfort of your home.

  Simply browse through local eateries, check out their menus, and find the perfect meal for any occasion. Whether you're planning a casual dinner with friends, a family feast, or a cozy night in, the choices are endless. With many restaurants offering exclusive deals and discounts, you can enjoy gourmet meals at great prices. Plus, you can read reviews to ensure you pick the best spot to suit your taste. Take the stress out of mealtime by leveraging the power of technology to enjoy a delightful dining experience delivered straight to your door. Don't wait any longer—start exploring and indulge in delicious food delights today!`;

  const secondParagraph = `Experience the ultimate convenience with food ordering near me and indulge in your favourite meals without the hassle! With just a few clicks, you can order food online near me from a variety of restaurants, all offering speedy delivery right to your doorstep. Whether you’re at home, at work, or anywhere in between, satisfying your cravings has never been easier.

  The process is quick and user-friendly: browse through menus, select your favourite dishes, and place your order. You can enjoy a wide array of options—from local favourites to international cuisines—catered to every palate and occasion. Plus, many platforms offer exclusive discounts and deals, making it more affordable to treat yourself.`;

  return (
    <div className="max-w-5xl mx-auto p-6 bg-white rounded-lg shadow-sm">
      {/* First Section */}
      <h2 className="text-2xl font-bold text-gray-800 mb-3">
        Discover Delicious Food Delights Online Near You
      </h2>
      <p className="text-gray-600 whitespace-pre-line leading-relaxed">
        {showMoreFirst ? firstParagraph : firstParagraph.slice(0, 250) + "..."}
      </p>
      <button
        onClick={() => setShowMoreFirst(!showMoreFirst)}
        className="mt-2 text-orange-500 font-medium hover:underline"
      >
        {showMoreFirst ? "Show Less" : "Show More"}
      </button>

      {/* Second Section */}
      <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-3">
        Convenience at Your Fingertips: Order Food Online Near You Now
      </h2>
      <p className="text-gray-600 whitespace-pre-line leading-relaxed">
        {showMoreSecond ? secondParagraph : secondParagraph.slice(0, 250) + "..."}
      </p>
      <button
        onClick={() => setShowMoreSecond(!showMoreSecond)}
        className="mt-2 text-orange-500 font-medium hover:underline"
      >
        {showMoreSecond ? "Show Less" : "Show More"}
      </button>
    </div>
  );
};
