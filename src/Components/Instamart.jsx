// src/pages/Instamart.jsx
import React, { useState } from "react";

const categories = [
  { id: 1, name: "Fruits & Vegetables 🍎", products: ["Apples", "Bananas", "Tomatoes"] },
  { id: 2, name: "Dairy & Bakery 🥛", products: ["Milk", "Cheese", "Bread"] },
  { id: 3, name: "Snacks & Beverages 🍪", products: ["Chips", "Biscuits", "Coke"] },
  { id: 4, name: "Personal Care 🧴", products: ["Soap", "Shampoo", "Toothpaste"] },
];

const Instamart = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart([...cart, item]);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>🛒 Instamart</h1>
      <p>Instant groceries delivered in 15-20 mins 🚴‍♂️</p>

      {/* Categories */}
      {categories.map((cat) => (
        <div key={cat.id} style={{ marginBottom: "20px" }}>
          <h2>{cat.name}</h2>
          <div style={{ display: "flex", gap: "15px" }}>
            {cat.products.map((product, index) => (
              <div
                key={index}
                style={{
                  border: "1px solid #ddd",
                  borderRadius: "10px",
                  padding: "10px",
                  textAlign: "center",
                }}
              >
                <p>{product}</p>
                <button onClick={() => addToCart(product)}>Add to Cart</button>
              </div>
            ))}
          </div>
        </div>
      ))}

      {/* Cart Section */}
      <div style={{ marginTop: "30px" }}>
        <h2>🛍️ Cart</h2>
        {cart.length === 0 ? (
          <p>No items in cart</p>
        ) : (
          <ul>
            {cart.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Instamart;
