//  export const API_URL = "https://deliveryappbackendapis-16.onrender.com/"; // Add your backend URL here

// // Categories List
// export const getCategoriesList = async () => {
//   // return [
//   //   {
//   //     name: "Pizza",
//   //     image:
//   //       "https://images.unsplash.com/photo-1593504049359-74330189a345?q=80&w=627&auto=format&fit=crop",
//   //     link: "/pizza",
//   //   },
//   //   {
//   //     name: "Burger",
//   //     image:
//   //       "https://media.istockphoto.com/id/520410807/photo/cheeseburger.jpg?s=612x612&w=0&k=20&c=fG_OrCzR5HkJGI8RXBk76NwxxTasMb1qpTVlEM0oyg4=",
//   //     link: "/burger",
//   //   },
//   //   {
//   //     name: "Biryani",
//   //     image:
//   //       "https://images.unsplash.com/photo-1701579231305-d84d8af9a3fd?q=80&w=687&auto=format&fit=crop",
//   //     link: "/biryani",
//   //   },
//   //   {
//   //     name: "Cake",
//   //     image:
//   //       "https://images.unsplash.com/photo-1551024601-bec78aea704b?q=80&w=764&auto=format&fit=crop",
//   //     link: "/cake",
//   //   },
//   //   {
//   //     name: "Dhokla",
//   //     image:
//   //       "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/8f508de7-e0ac-4ba8-b54d-def9db98959e_dhokla.png",
//   //     link: "/dhokla",
//   //   },
//   //   {
//   //     name: "South Indian",
//   //     image:
//   //       "https://t4.ftcdn.net/jpg/00/86/59/89/360_F_86598969_ju2bZp0D2siXwGqNfVlBWj0kCwyuFt5p.jpg",
//   //     link: "/southindian",
//   //   },
//   //   {
//   //     name: "Chinese",
//   //     image:
//   //       "https://media.istockphoto.com/id/545286388/photo/chinese-food-blank-background.jpg?s=612x612&w=0&k=20&c=pqOIy07YKO5PlU5VxjscwTGRrrZ8PluKMUjSOz-II60=",
//   //     link: "/chinese",
//   //   },
//   //   {
//   //     name: "North Indian",
//   //     image:
//   //       "https://media.istockphoto.com/id/1292564353/photo/assorted-indian-food-on-wooden-background-paneer-tikka-dal-tadka-jeera-rice-roti-dishes-and.jpg?s=1024x1024&w=is&k=20&c=93IIFJmPZZ1wq5PvWbUlW9-5tTWwi5zysinwn4h3JQ0=",
//   //     link: "/northindian",
//   //   },
//   // ];

//   try {
//     const response = await fetch(`${API_URL}`);
//     if (!response.ok) throw new Error("Network response was not ok");
//     return await response.json();
//   } catch (error) {
//     console.error("Error fetching categories:", error);
//     throw error;
//   }
// };

// // Popular Restaurants
// export const getPopularRestaurants = async () => {
//   // return [
//   //   {
//   //     name: "Burger King",
//   //     img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2025/6/18/9c75fd37-f428-4a2f-9beb-ba1f2e2cf391_90186.jpg",
//   //     offer: "ITEMS AT ₹59",
//   //     rating: "4.2",
//   //     time: "35-40 mins",
//   //     cuisines: "Burgers, American",
//   //     location: "Vaishali Nagar",
//   //   },
//   //   {
//   //     name: "Subway",
//   //     img: "https://www.shutterstock.com/shutterstock/photos/2286250855/display_1500/stock-photo-subway-foot-long-roast-beef-lunch-delicous-but-healthy-2286250855.jpg",
//   //     offer: "ITEMS AT ₹119",
//   //     rating: "4.4",
//   //     time: "20-25 mins",
//   //     cuisines: "Sandwich, Salads, Wrap, Healthy Food",
//   //     location: "C Scheme",
//   //   },
//   //   {
//   //     name: "Burger Farm",
//   //     img: "https://b.zmtcdn.com/data/pictures/chains/3/102003/b54d7bf184c2bb18a325f9ed25c8afb8.jpg?output-format=webp&fit=around|771.75:416.25&crop=771.75:416.25;*,*",
//   //     offer: "₹150 OFF ABOVE ₹499",
//   //     rating: "4.5",
//   //     time: "15-20 mins",
//   //     cuisines: "American, Continental, Italian-American",
//   //     location: "C Scheme",
//   //   },
//   //   {
//   //     name: "DMB (Doodh Misthan Bhandar)",
//   //     img: "https://b.zmtcdn.com/data/pictures/8/100108/aa94adf9d31cce1150515a784100d83f_featured_v2.jpg?output-format=webp&fit=around|771.75:416.25&crop=771.75:416.25;*,*",
//   //     offer: "40% OFF UPTO ₹80",
//   //     rating: "4.6",
//   //     time: "25-30 mins",
//   //     cuisines: "Navratri Special, Thalis",
//   //     location: "Bani Park",
//   //   },
//   // ];

//   try {
//       const response = await fetch(`${API_URL}/Categories/PopularRestaurants`);
//       if (!response.ok) throw new Error("Network response was not ok");
//       return await response.json();
//     } catch (error) {
//       console.error("Error fetching popular restaurants:", error);
//       throw error;
//     }
// };

// // Order Online
// export const getOrderOnline = async () => {
//   // return [
//   //   {
//   //     name: "Burger King",
//   //     img: "https://images.unsplash.com/photo-1716825340643-e2cb63393141?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YnVyZ2VyJTIwa2luZ3xlbnwwfHwwfHx8MA%3D%3D",
//   //     offer: "ITEMS AT ₹59",
//   //     rating: "4.2",
//   //     time: "35-40 mins",
//   //     cuisines: "Burgers, American",
//   //     location: "Vaishali Nagar",
//   //   },
//   //   {
//   //     name: "Subway",
//   //     img: "https://www.shutterstock.com/shutterstock/photos/2286250855/display_1500/stock-photo-subway-foot-long-roast-beef-lunch-delicous-but-healthy-2286250855.jpg",
//   //     offer: "ITEMS AT ₹119",
//   //     rating: "4.4",
//   //     time: "20-25 mins",
//   //     cuisines: "Sandwich, Salads, Wrap, Healthy Food",
//   //     location: "C Scheme",
//   //   },
//   //   {
//   //     name: "Burger Farm",
//   //     img: "https://b.zmtcdn.com/data/pictures/chains/3/102003/b54d7bf184c2bb18a325f9ed25c8afb8.jpg?output-format=webp&fit=around|771.75:416.25&crop=771.75:416.25;*,*",
//   //     offer: "₹150 OFF ABOVE ₹499",
//   //     rating: "4.5",
//   //     time: "15-20 mins",
//   //     cuisines: "American, Continental, Italian-American",
//   //     location: "C Scheme",
//   //   },
//   // ];

//   try {
//     const response = await fetch(`${API_URL}/categories/burger`);
//     if (!response.ok) throw new Error("Network response was not ok");
//     return await response.json();
//   } catch (error) {
//     console.error("Error fetching burger:", error);
//     throw error;
//   }
// };

// // Pizza Category
// export const getPizza = async () => {
//   // return [
//   //   {
//   //     id: 1,
//   //     name: "Oven Story Pizza",
//   //     rating: 4.6,
//   //     time: "25-30 mins",
//   //     offer: "20% OFF",
//   //     items: "Pizzas, Pastas, Italian, Desserts",
//   //     location: "Bais Godam",
//   //     img: " https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2025/5/29/4c378225-63f5-4f87-806a-8afcab2c98ce_223159.jpg   ",
//   //   },
//   //   {
//   //     id: 2,
//   //     name: "Pizza Hut",
//   //     rating: 4.2,
//   //     time: "25-30 mins",
//   //     offer: "ITEMS AT ₹99",
//   //     items: "Pizzas",
//   //     location: "Bais Godam",
//   //     img: " https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2025/6/9/4f2f9d35-895a-4f66-b015-d38bf551cac4_53744.JPG      ",
//   //   },
//   //   {
//   //     id: 3,
//   //     name: "Pastas By Pizza Hut",
//   //     rating: 3.8,
//   //     time: "25-30 mins",
//   //     offer: "",
//   //     items: "Pastas",
//   //     location: "Bais Godam",
//   //     img: " https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/FOOD_CATALOG/IMAGES/CMS/2025/6/16/47ff36f6-9ae0-41e9-aa58-61a61c77bdfd_068cc99c-a082-403c-9e9a-295d6b303a7d.png_compressed        ",
//   //   },
//   //   {
//   //     id: 4,
//   //     name: "Chicago Pizza",
//   //     rating: 3.9,
//   //     time: "35-40 mins",
//   //     offer: "ITEMS AT ₹99",
//   //     items: "Desserts, Italian, Beverages",
//   //     location: "C Scheme",
//   //     img: "   https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/FOOD_CATALOG/IMAGES/CMS/2024/7/9/f5142936-32cc-4463-a453-83c5af0b1022_4da0a8d7-e5eb-4781-a6f2-c79c82f0513a.jpg     ",
//   //   },
//  // ];

//   try {
//     const response = await fetch(`${API_URL}/categories/pizza`);
//     if (!response.ok) throw new Error("Network response was not ok");
//     return await response.json();
//   } catch (error) {
//     console.error("Error fetching pizza:", error);
//     throw error;
//   }
// };

// // Cake Category
// export const getCake = async () => {
//   // return [
//   //   {
//   //     id: 1,
//   //     name: "Dmb(Doodh Misthan Bhandar)",
//   //     rating: "4.6",
//   //     time: "30-35 mins",
//   //     offer: "40% OFF UPTO ₹80",
//   //     category: "Navratri Special, Thalis, Chinese...",
//   //     location: "Bani Park",
//   //     image:
//   //       "  https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/mwxhhhmz9gdap5zrcojj  ",
//   //   },
//   //   {
//   //     id: 2,
//   //     name: "Theobroma",
//   //     rating: "4.6",
//   //     time: "15-20 mins",
//   //     offer: "ITEMS AT ₹290",
//   //     category: "Bakery, Desserts",
//   //     location: "C Scheme",
//   //     image:
//   //       " https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2025/8/14/9957e122-1975-48bc-9947-1645592be390_764055.JPG   ",
//   //   },
//   //   {
//   //     id: 3,
//   //     name: "Sweet Truth - Cake and...",
//   //     rating: "4.3",
//   //     time: "25-30 mins",
//   //     offer: "ITEMS AT ₹59",
//   //     category: "Desserts, Ice Cream, Bakery...",
//   //     location: "Bais Godam",
//   //     image:
//   //       " https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2025/6/18/c6f7ef55-1379-4206-b5d2-08c2f341071e_223161.jpg ",
//   //   },
//   //   {
//   //     id: 4,
//   //     name: "Baskin Robbins - Ice Cream...",
//   //     rating: "4.6",
//   //     time: "20-25 mins",
//   //     offer: "₹75 OFF ABOVE ₹499",
//   //     category: "Desserts, Ice Cream",
//   //     location: "Yudhister Marg",
//   //     image:
//   //       " https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2025/4/24/ada7adf6-5ff9-4a48-a9b0-b0f879f405a7_1002630.JPG ",
//   //   },
//   // ];

//   try {
//     const response = await fetch(`${API_URL}/categories/cake`);
//     if (!response.ok) throw new Error("Network response was not ok");
//     return await response.json();
//   } catch (error) {
//     console.error("Error fetching cake:", error);
//     throw error;
//   }
// };

// // Biryani Category
// export const getBiryani = async () => {
//   // return [
//   //   {
//   //     id: 1,
//   //     name: "The Good Bowl",
//   //     rating: 4.3,
//   //     time: "20-25 mins",
//   //     cuisines: "Biryani, North Indian, Pastas, Punjabi",
//   //     location: "Bais Godam",
//   //     price: "₹119",
//   //     img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/11/15/65b0b2ca-68ce-4d81-8b2d-c9ec039b6494_223162.jpg",
//   //   },
//   //   {
//   //     id: 2,
//   //     name: "Behrouz Biryani",
//   //     rating: 4.3,
//   //     time: "25-30 mins",
//   //     cuisines: "Biryani, North Indian, Kebabs, Mughlai",
//   //     location: "Bais Godam",
//   //     price: "₹99",
//   //     img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/1a8dfa8b2a73ddf7c6193465ab24c898  ",
//   //   },
//   //   {
//   //     id: 3,
//   //     name: "The Biryani Life",
//   //     rating: 4.2,
//   //     time: "20-25 mins",
//   //     cuisines: "Biryani, Mughlai, Lucknowi",
//   //     location: "Bais Godam",
//   //     price: "₹159",
//   //     img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/gt8ebg2jovq3gxnefjko  ",
//   //   },
//   //   {
//   //     id: 4,
//   //     name: "Mughal Restaurant",
//   //     rating: 4.0,
//   //     time: "20-25 mins",
//   //     cuisines: "North Indian, Biryani, Mughlai, Kebabs",
//   //     location: "Hasan Pura",
//   //     offer: "60% OFF Upto ₹120",
//   //     img: " https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/p6rwjeq5xgfmvogt4pko ",
//   //   },
//   // ];

//   try {
//     const response = await fetch(`${API_URL}/categories/biryani`);
//     if (!response.ok) throw new Error("Network response was not ok");
//     return await response.json();
//   } catch (error) {
//     console.error("Error fetching biryani:", error);
//     throw error;
//   }
// };
// //this api is for chinese...
// export const getChinese = async () => {
//   // return [
//   //   {
//   //     id: 1,
//   //     name: "Chinese Wok",
//   //     rating: 4.2,
//   //     time: "30-40 mins",
//   //     desc: "Chinese, Asian, Tibetan, Desserts",
//   //     location: "Vivek Vihar",
//   //     img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/FOOD_CATALOG/IMAGES/CMS/2024/6/7/38c2e066-8dd1-453d-b7c9-a40b4706dd55_8f6bfe25-466b-4c8a-88a5-73c27e254c42.jpg_compressed  ",
//   //     offer: "ITEMS AT ₹129",
//   //     isAd: true,
//   //   },
//   //   {
//   //     id: 2,
//   //     name: "Urban Chinese",
//   //     rating: 4.1,
//   //     time: "30-35 mins",
//   //     desc: "Chinese",
//   //     location: "MI Road",
//   //     img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/0a6b932a25017f42fd3d4d7bcc6d798c   ",
//   //     offer: "20% OFF UPTO ₹120",
//   //     isAd: false,
//   //   },
//   //   {
//   //     id: 3,
//   //     name: "Shreeji Chinese Fast Food",
//   //     rating: 4.4,
//   //     time: "40-50 mins",
//   //     desc: "Chinese, Fast Food, Burgers",
//   //     location: "Lal Kothi",
//   //     img: "  https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/FOOD_CATALOG/IMAGES/CMS/2025/2/19/c6af923a-0d48-434b-96d1-91bf19f8bb11_e558d093-81b2-4d04-9e85-e236bd5b2734.jpg",
//   //     offer: "₹100 OFF ABOVE ₹199",
//   //     isAd: true,
//   //   },
//   //   {
//   //     id: 4,
//   //     name: "Chao Chinese Bistro - Holiday Inn",
//   //     rating: 4.3,
//   //     time: "35-40 mins",
//   //     desc: "Chinese, Asian, Thai",
//   //     location: "C Scheme",
//   //     img: " https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/qg565sekubsrw8a22w5o   ",
//   //     offer: "₹125 OFF ABOVE ₹199",
//   //     isAd: false,
//   //   },
//   // ];
// try {
//     const response = await fetch(`${API_URL}/categories/biryani`);
//     if (!response.ok) throw new Error("Network response was not ok");
//     return await response.json();
//   } catch (error) {
//     console.error("Error fetching biryani:", error);
//     throw error;
//   }


// };
//   //this api for burger...
// export const getBurger = async () => {
// //   return [
// //     {
      




// //  id: 1,
// //     name: "Burger King",
// //    rating: 4.2,
// //    time: "20-25 mins",
// //    cuisines: "Burgers, Fast Food, Beverages",   location: "Bais Godam",
// //    price: "ITEMS AT ₹129",
// //    image: " https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/n9bkfix37ohwikvjlzyg ",
// //  },
// //  {
// //    id: 2,
// //    name: "McDonald's",
// //    rating: 4.1,
// // time: "15-20 mins",
// //    cuisines: "Burgers, Wraps, Fast Food",
// //    location: "Hasan Pura",
// //    price: "ITEMS AT ₹99",
// //    image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/adxf6yzsbbzvx1n4kkzp  ",
// //  },
// // {
// //    id: 3,
// //    name: "KFC",
// //    rating: 4.3,
// //    time: "20-30 mins",
// //    cuisines: "Burgers, Fried Chicken, Fast Food",
// //    location: "MI Road",   price: "ITEMS AT ₹149",
// //    image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/n9bkfix37ohwikvjlzyg  ",
// //    },
// //  {
// //    id: 4,
// //    name: "Burger Farm",
// //    rating: 4.4,
// //    time: "25-30 mins",
// //    cuisines: "Burgers, Snacks, Beverages",
// //    location: "Vaishali Nagar",
// //    price: "60% OFF UPTO ₹120",     image: " https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/Autosuggest/Top%20200%20queries/Burger.png ",
// //   },
// //  ];

// try {
//     const response = await fetch(`${API_URL}/categories/Burger`);
//     if (!response.ok) throw new Error("Network response was not ok");
//     return await response.json();
//   } catch (error) {
//     console.error("Error fetching Burger:", error);
//     throw error;
//   }


// };