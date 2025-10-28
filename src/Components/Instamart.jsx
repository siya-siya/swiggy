// src/pages/Instamart.jsx
import React, { useState } from "react";
import ProductCard from "../components/ProductCard";

const categories = [
  {
    id: 1,
    name: "Fruits & Vegetables 🍎",
    products: [
      {
        name: "Apples",
        image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtywKdongNUiZ8YexgVsgx4hOkSSONFea6eA&s "
          
          
      },
      {
        name: "Bananas",
        image:
          " https://media.istockphoto.com/id/172876004/photo/banana-wallpaper.jpg?s=612x612&w=0&k=20&c=DjUIq77Fh3ljde_WJNwYl17e86VxMUpOwYiVL2XJo9U=  " ,
      },
      {
        name: "Tomatoes",
        image:
          " https://t4.ftcdn.net/jpg/03/27/96/23/360_F_327962332_6mb5jQLnTOjhYeXML7v45Hc5eED2GYOD.jpg",
      },
      {
        name: "Onion",
        image:
          "https://static.vecteezy.com/system/resources/previews/046/439/096/non_2x/onion-isolated-on-a-transparent-background-png.png ",
      },
      {
        name: "Orange",
        image:
          "https://www.shutterstock.com/shutterstock/photos/2053015835/display_1500/stock-photo-orange-with-sliced-and-green-leaves-isolated-on-white-background-2053015835.jpg  ",
      },
      {
        name: "Grapes",
        image:
          " https://cdn.pixabay.com/photo/2021/01/05/05/30/grapes-5889697_1280.jpg ",
      },
      {
        name: "Watermelon",
        image:
          " https://media.istockphoto.com/id/1496179914/photo/watermelon-slice-in-the-summer.jpg?s=612x612&w=0&k=20&c=-dEIRWjVtoyXxJiEXJSLj7MfoiNVlGXo4ku6ckZX1eQ= ",
      },
    ],
  },
  {
    id: 2,
    name: "Dairy & Bakery 🥛",
    products: [
      {
        name: "Milk",
        image:
          " https://media.istockphoto.com/id/1222018207/photo/pouring-milk-into-a-drinking-glass.jpg?s=612x612&w=0&k=20&c=eD4YHoSjKIYSPDgnM2OgWD_HVH2IcmjZSRq7IjUnH6M=",
      },
      {
        name: "Cheese",
        image:
          "  https://cdn.britannica.com/14/167214-050-3F143067/Cheese-assortment-Blue-cheese-swiss-Brie-parmesan.jpg  ",
      },
      {
        name: "Bread",
        image:
          " https://media.gettyimages.com/id/1223423223/photo/wholegrain-and-seeds-sliced-bread.jpg?s=612x612&w=gi&k=20&c=uBp7-FQtKDtKtr-CXT1JwvFFcUpVhoInCdofZ9iyAik=  ",
      },
      {
        name: "Curd",
        image:
          "https://media.istockphoto.com/id/1214850940/photo/yogurt-is-good-for-health-with-black-background.jpg?s=612x612&w=0&k=20&c=8GqPjqx9ykwamtCXQE_lOfsQRTQE89RxzBz2kcndXEg= ",
      },
      {
        name: "Malai",
        image:
          " https://www.shutterstock.com/image-photo/butter-makhan-clay-handi-on-260nw-2010274265.jpg ",
      },
      {
        name: "Water Bottle",
        image:
          "https://thumbs.dreamstime.com/b/big-water-bottle-water-splash-isolated-white-background-55131367.jpg ",
      },
      {
        name: "Tea",
        image:
          "  https://www.sharmispassions.com/wp-content/uploads/2012/12/cardamom-tea3.jpg",
      },
    ],
  },
  {
    id: 3,
    name: "Snacks & Beverages 🍪",
    products: [
      {
        name: "Chips",
        image:
          " https://www.shutterstock.com/image-photo/crispy-potato-chips-golden-crunchy-260nw-2592397643.jpg",
      },
      {
        name: "Biscuits",
        image:
          " https://www.biggerbolderbaking.com/wp-content/uploads/2021/07/BBB_050225_2958-scaled.jpg  ",
      },
      {
        name: "Sandwich",
        image:
          "https://images.arla.com/recordid/15F33607-F6D9-4952-B6AA210D3033BF14/club-sandwich1.jpg?format=jpg&width=1200&height=630&mode=crop ",
      },
      {
        name: "Chocos",
        image:
          "https://m.media-amazon.com/images/I/61fRSMtXE6L._UF1000,1000_QL80_.jpg ",
      },
      {
        name: "Namkeen",
        image:
          "https://media.gettyimages.com/id/84595459/photo/high-angle-view-of-various-type-of-snacks-in-bowls.jpg?s=612x612&w=gi&k=20&c=AcYhw9wbvsAxD9QQGx1RvFkIyw6RfdfGXcB334JH5u0= ",
      },
      {
        name: "Cookies",
        image:
          "https://images.contentstack.io/v3/assets/bltcedd8dbd5891265b/bltcf8370ba0b3162f8/6790184458fb6d84f38112bc/cookie-types-hero-assorted-cookies.jpeg ",
      },
      {
        name: "cold coffee",
        image:
          "   https://skydecklounge.in/wp-content/uploads/2022/01/Cold-Coffee-with-Ice-Cream.jpg",
      },
    ],
  },
  {
    id: 4,
    name: "Personal Care 🧴",
    products: [
      {
        name: "Soap",
        image:
          "https://plus.unsplash.com/premium_photo-1664544673664-04dd7cd85c18?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c29hcCUyMGJhcnxlbnwwfHwwfHx8MA%3D%3D  ",
      },
      {
        name: "Shampoo",
        image:
          " https://thumbs.dreamstime.com/b/composition-containers-global-cosmetics-brands-poznan-poland-dec-plastic-body-care-products-including-widely-available-106604090.jpg ",
      },
      {
        name: "Toothpaste",
        image:
          " https://www.altimadental.com/wp-content/uploads/2019/02/Should-we-brush-with-plenty-of-toothpaste1.jpg",
      },
      {
        name: "Facewash",
        image:
          "https://skininspired.in/cdn/shop/files/Skininspired_Creme_Cleanser_facewash.jpg?v=1750949241 ",
      },
      {
        name: "Moisturizer",
        image:
          "https://aqualogica.in/cdn/shop/files/1_8d797483-8cdc-4d99-9a42-49972639c3cd.jpg?v=1739731583&width=1946 ",
      },
      {
        name: "Lipbalm",
        image:
          "https://www.dotandkey.com/cdn/shop/files/1_fa77191d-35f3-41c9-8644-f6c7a0fc7774.jpg?v=1744711227 ",
      },
      {
        name: "Cream",
        image:
          "https://www.biggerbolderbaking.com/wp-content/uploads/2021/02/Homemade-cream-cheese-Thumbnail-scaled.jpg ",
      },
    ],
  },
];

const Instamart = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    const existing = cart.find((i) => i.name === item.name);
    if (existing) {
      setCart(
        cart.map((i) => (i.name === item.name ? { ...i, qty: i.qty + 1 } : i))
      );
    } else {
      setCart([...cart, { ...item, qty: 1 }]);
    }
  };

  const removeFromCart = (item) => {
    setCart(
      cart
        .map((i) => (i.name === item.name ? { ...i, qty: i.qty - 1 } : i))
        .filter((i) => i.qty > 0)
    );
  };

  const totalItems = cart.reduce((sum, i) => sum + i.qty, 0);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-2">🛒 Instamart</h1>
      <p className="text-gray-600 mb-6">
        Instant groceries delivered in 15-20 mins 🚴‍♂️
      </p>

      {/* Cart Summary */}
      <div className="mb-8 p-4 bg-orange-100 border border-orange-300 rounded-lg flex justify-between items-center">
        <h2 className="text-lg font-semibold">
          🛍️ Cart: {totalItems} {totalItems === 1 ? "item" : "items"}
        </h2>
        {cart.length > 0 && (
          <button
            onClick={() => setCart([])}
            className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
          >
            Clear Cart
          </button>
        )}
      </div>

      {/* Categories */}
      {categories.map((cat) => (
        <div key={cat.id} className="mb-8">
          <h2 className="text-xl font-semibold mb-3">{cat.name}</h2>
          <div className="flex gap-6 overflow-x-auto scrollbar-hide">
            {cat.products.map((product, index) => (
              <div
                key={index}
                className="p-4 border rounded-xl shadow-sm min-w-[160px] text-center hover:shadow-md transition"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-24 h-24 object-cover mx-auto rounded-lg mb-2"
                />
                <p className="font-medium mb-2">{product.name}</p>
                <button
                  onClick={() => addToCart(product)}
                  className="px-3 py-1 bg-orange-500 text-white rounded-lg hover:bg-orange-600"
                >
                  Add
                </button>
              </div>
            ))}
          </div>
        </div>
      ))}

      {/* Detailed Cart */}
      {cart.length > 0 && (
        <div className="mt-10 p-4 border rounded-xl shadow">
          <h2 className="text-2xl font-semibold mb-3">Cart Details</h2>
          <ul className="space-y-2">
            {cart.map((item, index) => (
              <li
                key={index}
                className="flex justify-between items-center border-b pb-2"
              >
                <span>
                  {item.name} × {item.qty}
                </span>
                <div className="flex gap-2">
                  <button
                    onClick={() => removeFromCart(item)}
                    className="px-2 py-1 bg-red-500 text-white rounded hover:bg-red-600"
                  >
                    -
                  </button>
                  <button
                    onClick={() => addToCart(item)}
                    className="px-2 py-1 bg-green-500 text-white rounded hover:bg-green-600"
                  >
                    +
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Instamart;
