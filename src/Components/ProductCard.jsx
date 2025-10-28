// src/components/ProductCard.jsx
import React, { useState } from "react";

const ProductCard = ({ productName }) => {
  const [isAdded, setIsAdded] = useState(false);

  const handleAddClick = () => {
    setIsAdded(true);
  };

  return (
    <div className="p-4 border rounded-lg shadow-md flex justify-between items-center">
      <h3 className="font-semibold">{productName}</h3>
      {isAdded ? (
        <button
          className="px-4 py-2 bg-green-500 text-white rounded-lg cursor-not-allowed"
          disabled
        >
          ✅ Added
        </button>
      ) : (
        <button
          onClick={handleAddClick}
          className="px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600"
        >
          + Add
        </button>
      )}
    </div>
  );
};

export default ProductCard;
