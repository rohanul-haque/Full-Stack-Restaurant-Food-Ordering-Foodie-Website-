import about_image from "./about.png";
import badge from "./badge.png";
import burger_icon from "./burger.png";
import chef_1 from "./chef_1.png";
import chef_2 from "./chef_2.png";
import chef_3 from "./chef_3.png";
import chef_4 from "./chef_4.png";
import chef_5 from "./chef_5.png";
import chef_6 from "./chef_6.png";
import deilevery_icon from "./deilevery.png";
import hand from "./hand.png";
import hero_image from "./hero.png";
import logo from "./logo.png";
import parcel_icon from "./parcel_icon.png";
import phone_pay from "./phone-pay.png";
import rocket from "./rocket.png";
import varient_icon from "./varient.png";

export const assets = {
  logo,
  hero_image,
  about_image,
  parcel_icon,
};

export const nav_links = [
  { id: 1, name: "Home", id: "#home" },
  { id: 2, name: "About Us", id: "#about-us" },
  { id: 3, name: "Our Menu", id: "#our-menu" },
  { id: 4, name: "Foods", id: "#foods" },
  { id: 5, name: "Contact Us", id: "#contact-us" },
];

export const service_data = [
  {
    id: 1,
    image: badge,
    title: "🍽️ Quality Food",
    description:
      "Fresh, high-quality meals made with care and packed with flavor. 😋",
    deley: 0.3,
  },
  {
    id: 2,
    image: rocket,
    title: "⚡ Fast Delivery",
    description: "Hot and delicious food delivered quickly to your door. 🚀",
    deley: 0.6,
  },
  {
    id: 3,
    image: phone_pay,
    title: "⭐ Exceptional Service",
    description:
      "Friendly, helpful staff making every order smooth and easy. 😊",
    deley: 0.9,
  },
  {
    id: 4,
    image: hand,
    title: "🧼 Hygiene First",
    description:
      "Strict hygiene practices ensure clean, safe meals every time. 🧽",
    deley: 0.9,
  },
];

export const about_data = [
  {
    id: 1,
    icon: deilevery_icon,
    title: "🚚 Convenient and Reliable",
    description:
      "Whether you dine in, take out, or order delivery, our service is convenient, fast, and reliable — making mealtime hassle-free and enjoyable. ⏰💨",
    delay: 0.2,
  },
  {
    id: 2,
    icon: varient_icon,
    title: "🍽️ Variety of Options",
    description:
      "From hearty meals to light snacks, we offer a wide range of dishes to suit every taste, craving, and mood. 🥗🍕🍝",
    delay: 0.35,
  },
  {
    id: 3,
    icon: burger_icon,
    title: "🍔 Eat Burger, Stay Happy",
    description:
      "Our burgers are grilled to perfection with juicy patties, fresh buns, and flavorful toppings — a bite of pure satisfaction! 😋🔥",
    delay: 0.5,
  },
];

export const food_menu = [
  { id: 0, name: "All", icon: "🍽️" },
  { id: 1, name: "Starter", icon: "🥗" },
  { id: 2, name: "Main Course", icon: "🍛" },
  { id: 3, name: "Fast Food", icon: "🍔" },
  { id: 4, name: "Seafood", icon: "🦞" },
  { id: 5, name: "Dessert", icon: "🍰" },
  { id: 6, name: "Drinks", icon: "🥤" },
  { id: 7, name: "Special", icon: "⭐" },
];

// export const food_list = [
//   // 1–32 আসল আইটেম
//   {
//     _id: "1",
//     name: "Greek salad",
//     image: food_1,
//     price: 12,
//     description:
//       "Food provides essential nutrients for overall health and well-being",
//     category: "Salad",
//   },
//   {
//     _id: "2",
//     name: "Veg salad",
//     image: food_2,
//     price: 18,
//     description:
//       "Food provides essential nutrients for overall health and well-being",
//     category: "Salad",
//   },
//   {
//     _id: "3",
//     name: "Clover Salad",
//     image: food_3,
//     price: 16,
//     description:
//       "Food provides essential nutrients for overall health and well-being",
//     category: "Salad",
//   },
//   {
//     _id: "4",
//     name: "Chicken Salad",
//     image: food_4,
//     price: 24,
//     description:
//       "Food provides essential nutrients for overall health and well-being",
//     category: "Salad",
//   },
//   {
//     _id: "5",
//     name: "Lasagna Rolls",
//     image: food_5,
//     price: 14,
//     description:
//       "Food provides essential nutrients for overall health and well-being",
//     category: "Rolls",
//   },
//   {
//     _id: "6",
//     name: "Peri Peri Rolls",
//     image: food_6,
//     price: 12,
//     description:
//       "Food provides essential nutrients for overall health and well-being",
//     category: "Rolls",
//   },
//   {
//     _id: "7",
//     name: "Chicken Rolls",
//     image: food_7,
//     price: 20,
//     description:
//       "Food provides essential nutrients for overall health and well-being",
//     category: "Rolls",
//   },
//   {
//     _id: "8",
//     name: "Veg Rolls",
//     image: food_8,
//     price: 15,
//     description:
//       "Food provides essential nutrients for overall health and well-being",
//     category: "Rolls",
//   },
//   {
//     _id: "9",
//     name: "Ripple Ice Cream",
//     image: food_9,
//     price: 14,
//     description:
//       "Food provides essential nutrients for overall health and well-being",
//     category: "Deserts",
//   },
//   {
//     _id: "10",
//     name: "Fruit Ice Cream",
//     image: food_10,
//     price: 22,
//     description:
//       "Food provides essential nutrients for overall health and well-being",
//     category: "Deserts",
//   },
//   {
//     _id: "11",
//     name: "Jar Ice Cream",
//     image: food_11,
//     price: 10,
//     description:
//       "Food provides essential nutrients for overall health and well-being",
//     category: "Deserts",
//   },
//   {
//     _id: "12",
//     name: "Vanilla Ice Cream",
//     image: food_12,
//     price: 12,
//     description:
//       "Food provides essential nutrients for overall health and well-being",
//     category: "Deserts",
//   },
//   {
//     _id: "13",
//     name: "Chicken Sandwich",
//     image: food_13,
//     price: 12,
//     description:
//       "Food provides essential nutrients for overall health and well-being",
//     category: "Sandwich",
//   },
//   {
//     _id: "14",
//     name: "Vegan Sandwich",
//     image: food_14,
//     price: 18,
//     description:
//       "Food provides essential nutrients for overall health and well-being",
//     category: "Sandwich",
//   },
//   {
//     _id: "15",
//     name: "Grilled Sandwich",
//     image: food_15,
//     price: 16,
//     description:
//       "Food provides essential nutrients for overall health and well-being",
//     category: "Sandwich",
//   },
//   {
//     _id: "16",
//     name: "Bread Sandwich",
//     image: food_16,
//     price: 24,
//     description:
//       "Food provides essential nutrients for overall health and well-being",
//     category: "Sandwich",
//   },
//   {
//     _id: "17",
//     name: "Cup Cake",
//     image: food_17,
//     price: 14,
//     description:
//       "Food provides essential nutrients for overall health and well-being",
//     category: "Cake",
//   },
//   {
//     _id: "18",
//     name: "Vegan Cake",
//     image: food_18,
//     price: 12,
//     description:
//       "Food provides essential nutrients for overall health and well-being",
//     category: "Cake",
//   },
//   {
//     _id: "19",
//     name: "Butterscotch Cake",
//     image: food_19,
//     price: 20,
//     description:
//       "Food provides essential nutrients for overall health and well-being",
//     category: "Cake",
//   },
//   {
//     _id: "20",
//     name: "Sliced Cake",
//     image: food_20,
//     price: 15,
//     description:
//       "Food provides essential nutrients for overall health and well-being",
//     category: "Cake",
//   },
//   {
//     _id: "21",
//     name: "Garlic Mushroom",
//     image: food_21,
//     price: 14,
//     description:
//       "Food provides essential nutrients for overall health and well-being",
//     category: "Pure Veg",
//   },
//   {
//     _id: "22",
//     name: "Fried Cauliflower",
//     image: food_22,
//     price: 22,
//     description:
//       "Food provides essential nutrients for overall health and well-being",
//     category: "Pure Veg",
//   },
//   {
//     _id: "23",
//     name: "Mix Veg Pulao",
//     image: food_23,
//     price: 10,
//     description:
//       "Food provides essential nutrients for overall health and well-being",
//     category: "Pure Veg",
//   },
//   {
//     _id: "24",
//     name: "Rice Zucchini",
//     image: food_24,
//     price: 12,
//     description:
//       "Food provides essential nutrients for overall health and well-being",
//     category: "Pure Veg",
//   },
//   {
//     _id: "25",
//     name: "Cheese Pasta",
//     image: food_25,
//     price: 12,
//     description:
//       "Food provides essential nutrients for overall health and well-being",
//     category: "Pasta",
//   },
//   {
//     _id: "26",
//     name: "Tomato Pasta",
//     image: food_26,
//     price: 18,
//     description:
//       "Food provides essential nutrients for overall health and well-being",
//     category: "Pasta",
//   },
//   {
//     _id: "27",
//     name: "Creamy Pasta",
//     image: food_27,
//     price: 16,
//     description:
//       "Food provides essential nutrients for overall health and well-being",
//     category: "Pasta",
//   },
//   {
//     _id: "28",
//     name: "Chicken Pasta",
//     image: food_28,
//     price: 24,
//     description:
//       "Food provides essential nutrients for overall health and well-being",
//     category: "Pasta",
//   },
//   {
//     _id: "29",
//     name: "Buttter Noodles",
//     image: food_29,
//     price: 14,
//     description:
//       "Food provides essential nutrients for overall health and well-being",
//     category: "Noodles",
//   },
//   {
//     _id: "30",
//     name: "Veg Noodles",
//     image: food_30,
//     price: 12,
//     description:
//       "Food provides essential nutrients for overall health and well-being",
//     category: "Noodles",
//   },
//   {
//     _id: "31",
//     name: "Somen Noodles",
//     image: food_31,
//     price: 20,
//     description:
//       "Food provides essential nutrients for overall health and well-being",
//     category: "Noodles",
//   },
//   {
//     _id: "32",
//     name: "Cooked Noodles",
//     image: food_32,
//     price: 15,
//     description:
//       "Food provides essential nutrients for overall health and well-being",
//     category: "Noodles",
//   },

//   // 33–64: duplicate items but new _id
//   {
//     _id: "33",
//     name: "Greek salad",
//     image: food_1,
//     price: 12,
//     description:
//       "Food provides essential nutrients for overall health and well-being",
//     category: "Salad",
//   },
//   {
//     _id: "34",
//     name: "Veg salad",
//     image: food_2,
//     price: 18,
//     description:
//       "Food provides essential nutrients for overall health and well-being",
//     category: "Salad",
//   },
//   {
//     _id: "35",
//     name: "Clover Salad",
//     image: food_3,
//     price: 16,
//     description:
//       "Food provides essential nutrients for overall health and well-being",
//     category: "Salad",
//   },
//   {
//     _id: "36",
//     name: "Chicken Salad",
//     image: food_4,
//     price: 24,
//     description:
//       "Food provides essential nutrients for overall health and well-being",
//     category: "Salad",
//   },
//   {
//     _id: "37",
//     name: "Lasagna Rolls",
//     image: food_5,
//     price: 14,
//     description:
//       "Food provides essential nutrients for overall health and well-being",
//     category: "Rolls",
//   },
//   {
//     _id: "38",
//     name: "Peri Peri Rolls",
//     image: food_6,
//     price: 12,
//     description:
//       "Food provides essential nutrients for overall health and well-being",
//     category: "Rolls",
//   },
//   {
//     _id: "39",
//     name: "Chicken Rolls",
//     image: food_7,
//     price: 20,
//     description:
//       "Food provides essential nutrients for overall health and well-being",
//     category: "Rolls",
//   },
//   {
//     _id: "40",
//     name: "Veg Rolls",
//     image: food_8,
//     price: 15,
//     description:
//       "Food provides essential nutrients for overall health and well-being",
//     category: "Rolls",
//   },
//   {
//     _id: "41",
//     name: "Ripple Ice Cream",
//     image: food_9,
//     price: 14,
//     description:
//       "Food provides essential nutrients for overall health and well-being",
//     category: "Deserts",
//   },
//   {
//     _id: "42",
//     name: "Fruit Ice Cream",
//     image: food_10,
//     price: 22,
//     description:
//       "Food provides essential nutrients for overall health and well-being",
//     category: "Deserts",
//   },
//   {
//     _id: "43",
//     name: "Jar Ice Cream",
//     image: food_11,
//     price: 10,
//     description:
//       "Food provides essential nutrients for overall health and well-being",
//     category: "Deserts",
//   },
//   {
//     _id: "44",
//     name: "Vanilla Ice Cream",
//     image: food_12,
//     price: 12,
//     description:
//       "Food provides essential nutrients for overall health and well-being",
//     category: "Deserts",
//   },
//   {
//     _id: "45",
//     name: "Chicken Sandwich",
//     image: food_13,
//     price: 12,
//     description:
//       "Food provides essential nutrients for overall health and well-being",
//     category: "Sandwich",
//   },
//   {
//     _id: "46",
//     name: "Vegan Sandwich",
//     image: food_14,
//     price: 18,
//     description:
//       "Food provides essential nutrients for overall health and well-being",
//     category: "Sandwich",
//   },
//   {
//     _id: "47",
//     name: "Grilled Sandwich",
//     image: food_15,
//     price: 16,
//     description:
//       "Food provides essential nutrients for overall health and well-being",
//     category: "Sandwich",
//   },
//   {
//     _id: "48",
//     name: "Bread Sandwich",
//     image: food_16,
//     price: 24,
//     description:
//       "Food provides essential nutrients for overall health and well-being",
//     category: "Sandwich",
//   },
//   {
//     _id: "49",
//     name: "Cup Cake",
//     image: food_17,
//     price: 14,
//     description:
//       "Food provides essential nutrients for overall health and well-being",
//     category: "Cake",
//   },
//   {
//     _id: "50",
//     name: "Vegan Cake",
//     image: food_18,
//     price: 12,
//     description:
//       "Food provides essential nutrients for overall health and well-being",
//     category: "Cake",
//   },
//   {
//     _id: "51",
//     name: "Butterscotch Cake",
//     image: food_19,
//     price: 20,
//     description:
//       "Food provides essential nutrients for overall health and well-being",
//     category: "Cake",
//   },
//   {
//     _id: "52",
//     name: "Sliced Cake",
//     image: food_20,
//     price: 15,
//     description:
//       "Food provides essential nutrients for overall health and well-being",
//     category: "Cake",
//   },
//   {
//     _id: "53",
//     name: "Garlic Mushroom",
//     image: food_21,
//     price: 14,
//     description:
//       "Food provides essential nutrients for overall health and well-being",
//     category: "Pure Veg",
//   },
//   {
//     _id: "54",
//     name: "Fried Cauliflower",
//     image: food_22,
//     price: 22,
//     description:
//       "Food provides essential nutrients for overall health and well-being",
//     category: "Pure Veg",
//   },
//   {
//     _id: "55",
//     name: "Mix Veg Pulao",
//     image: food_23,
//     price: 10,
//     description:
//       "Food provides essential nutrients for overall health and well-being",
//     category: "Pure Veg",
//   },
//   {
//     _id: "56",
//     name: "Rice Zucchini",
//     image: food_24,
//     price: 12,
//     description:
//       "Food provides essential nutrients for overall health and well-being",
//     category: "Pure Veg",
//   },
//   {
//     _id: "57",
//     name: "Cheese Pasta",
//     image: food_25,
//     price: 12,
//     description:
//       "Food provides essential nutrients for overall health and well-being",
//     category: "Pasta",
//   },
//   {
//     _id: "58",
//     name: "Tomato Pasta",
//     image: food_26,
//     price: 18,
//     description:
//       "Food provides essential nutrients for overall health and well-being",
//     category: "Pasta",
//   },
//   {
//     _id: "59",
//     name: "Creamy Pasta",
//     image: food_27,
//     price: 16,
//     description:
//       "Food provides essential nutrients for overall health and well-being",
//     category: "Pasta",
//   },
//   {
//     _id: "60",
//     name: "Chicken Pasta",
//     image: food_28,
//     price: 24,
//     description:
//       "Food provides essential nutrients for overall health and well-being",
//     category: "Pasta",
//   },
//   {
//     _id: "61",
//     name: "Buttter Noodles",
//     image: food_29,
//     price: 14,
//     description:
//       "Food provides essential nutrients for overall health and well-being",
//     category: "Noodles",
//   },
//   {
//     _id: "62",
//     name: "Veg Noodles",
//     image: food_30,
//     price: 12,
//     description:
//       "Food provides essential nutrients for overall health and well-being",
//     category: "Noodles",
//   },
//   {
//     _id: "63",
//     name: "Somen Noodles",
//     image: food_31,
//     price: 20,
//     description:
//       "Food provides essential nutrients for overall health and well-being",
//     category: "Noodles",
//   },
//   {
//     _id: "64",
//     name: "Cooked Noodles",
//     image: food_32,
//     price: 15,
//     description:
//       "Food provides essential nutrients for overall health and well-being",
//     category: "Noodles",
//   },
// ];

export const chef_list = [
  {
    id: 1,
    name: "John Smith",
    position: "Head Chef",
    image: chef_1,
  },
  {
    id: 2,
    name: "Emily Johnson",
    position: "Pastry Chef",
    image: chef_2,
  },
  {
    id: 3,
    name: "Michael Brown",
    position: "Sous Chef",
    image: chef_3,
  },
  {
    id: 4,
    name: "Sophia Davis",
    position: "Grill Master",
    image: chef_4,
  },
  {
    id: 5,
    name: "Daniel Wilson",
    position: "Seafood Specialist",
    image: chef_5,
  },
  {
    id: 6,
    name: "Olivia Taylor",
    position: "Salad Expert",
    image: chef_6,
  },
];

export const customer_reviews = [
  {
    id: 1,
    name: "Jonathan Yombo",
    title: "Happy Diner",
    review:
      "🌟 Absolutely amazing food! Every dish is fresh and flavorful. The chef clearly takes pride in each creation. The ambiance is cozy and welcoming, making it perfect for both casual meals and special occasions. 🍽️💎 Highly recommend the seafood platter!",
    image:
      "https://i.pinimg.com/1200x/c2/4e/27/c24e271f2f992fd7e62e8c1e8d9b3e2f.jpg",
    delay: 0.2,
  },
  {
    id: 2,
    name: "Yves Kakume",
    title: "First-time Visitor",
    review: "🍔 Exceeded all expectations! Chef’s specials are incredible. 🙌",
    image:
      "https://i.pinimg.com/736x/8c/6d/db/8c6ddb5fe6600fcc4b183cb2ee228eb7.jpg",
    delay: 0.3,
  },
  {
    id: 3,
    name: "Yucel Farukşahan",
    title: "Food Enthusiast",
    review:
      "🎨 Plates are works of art! Presentation and taste are perfect. The flavors are well-balanced, and the portion sizes are generous. Every visit is a delight, and the dessert menu is not to be missed! 😍🍰",
    image:
      "https://i.pinimg.com/736x/6f/a3/6a/6fa36aa2c367da06b2a4c8ae1cf9ee02.jpg",
    delay: 0.4,
  },
  {
    id: 4,
    name: "Anonymous",
    title: "New Customer",
    review:
      "💡 Staff made me feel welcome. Dishes were tasty and easy to enjoy. 👍",
    image:
      "https://i.pinimg.com/1200x/c2/4e/27/c24e271f2f992fd7e62e8c1e8d9b3e2f.jpg",
    delay: 0.45,
  },
  {
    id: 5,
    name: "Shekinah Tshikulila",
    title: "Regular Guest",
    review: "✨ Amazing flavors and fast service. Lovely atmosphere! 🌟",
    image:
      "https://i.pinimg.com/736x/81/d6/b1/81d6b158728f5fc97ca6e0a025fefee0.jpg",
    delay: 0.5,
  },
  {
    id: 6,
    name: "Khatab Wedaa",
    title: "Food Lover",
    review:
      "⚡ Every dish is cooked to perfection! Fresh ingredients, elegant presentation, and creative combinations that surprise the taste buds. The drinks menu complements the meals perfectly, making it a complete dining experience. 🏃‍♂️🍹",
    image:
      "https://i.pinimg.com/736x/9f/46/74/9f4674ca9c17330ab419c1b2f5951d9a.jpg",
    delay: 0.55,
  },
  {
    id: 7,
    name: "Oketa Fred",
    title: "Satisfied Customer",
    review: "❤️ Diverse menu, tasty food, and perfect ambiance. 🌈",
    image:
      "https://i.pinimg.com/736x/57/3c/80/573c80967c9429d0ed0ce32701f85b70.jpg",
    delay: 0.6,
  },
  {
    id: 8,
    name: "Rodrigo Aguilar",
    title: "Restaurant Critic",
    review:
      "👍 Excellent service and delicious dishes from starters to desserts. 🚀",
    image:
      "https://i.pinimg.com/736x/b0/c4/21/b0c421e77cf563962026ade82c90dd5b.jpg",
    delay: 0.65,
  },
  {
    id: 9,
    name: "Zeki",
    title: "Food Blogger",
    review: "💎 A must-visit! Unique flavors and stunning presentation. 🧩",
    image:
      "https://i.pinimg.com/736x/ce/31/42/ce3142d7a968fff3aecd0100572a5e8b.jpg",
    delay: 0.7,
  },
  {
    id: 10,
    name: "Eric Ampire",
    title: "Restaurant Fan",
    review:
      "🌟 Never disappoints. Flavorful meals, fresh and beautifully served. The chef consistently delivers high-quality dishes, and the staff ensures every guest has a memorable dining experience. The dessert selection is divine, and the overall ambiance is perfect for family dinners or romantic evenings. 💯🍷",
    image:
      "https://i.pinimg.com/736x/79/63/a5/7963a5246188d408b8f28961a0cf2b90.jpg",
    delay: 0.8,
  },
];
