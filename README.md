# 🍔 Foodie - Full Stack Restaurant Food Ordering Website

**Foodie** is a **modern, fully responsive restaurant delivery website** built with **React, Node.js, Express, MongoDB, and TailwindCSS**.

Users can **browse the menu**, **add items to Cart/Wishlist**, and **place orders online with Stripe payment** 💳.  
Temporary data is **stored on the client-side** 🕒 and **synced to the database after login**.  
**React Toast notifications** 🔔 provide friendly alerts.

**Admins** 👨‍💻 can **manage all orders**, **add/update/delete food items**, **track order status via a dashboard**, and **view order statistics with graphs/charts** 📊.

---

## 🌐 Live Demo

- **Frontend:** [Vercel Deployment Link](#)
- **Admin:** [Vercel Deployment Link](#)
- **Backend:** [Vercel Deployment Link](#)

---

## 🖼️ Website Screenshot

![App Screenshot](https://res.cloudinary.com/dntarupgf/image/upload/v1759945030/Foodie_Website_dvythn.png)

---

## 🌟 Features / ফিচারগুলো

### 👤 User Features (No Login Required / লগইন ছাড়াই)

- 🍽 Browse food menu with categories and detailed food lists.
- 🛒 Add items to **Cart** and **Wishlist**.
- ❌ Remove items from **Cart/Wishlist**.
- 🕒 Temporary cart and wishlist storage before login.
- 💳 Place orders with **delivery information** and **Stripe payment**.
- 📱 Fully **responsive design** for all devices.
- 🖼 Custom **Hero Section, Categories, About, Food Menu, Food List, Saved Cards, Customer Reviews, Newsletter**.
- 🔢 Pagination for smooth food browsing.
- 🔔 **React Toast notifications** for success/error messages.

### 🔐 Authentication & Account / অথেন্টিকেশন & অ্যাকাউন্ট

- 📝 **Sign Up / Login** system with **JWT authentication**.
- 🔑 **Reset Password / Change Password** functionality.
- 🛡 Secure authentication using **bcrypt, helmet, rate limiter, CORS, HPP**.
- 📧 Email notifications using **Nodemailer**.
- 🗄 Temporary cart/wishlist data is **saved to database** once the user logs in.

### 🛠 Admin Features / অ্যাডমিন ফিচার

- 📊 View all **Orders** with **charts & analytics**.
- ➕ Add new food items easily.
- 🗑 Delete or update existing food items.
- 🔄 Track and change **order status**.
- 🗂 Manage projected routes and pagination for orders and menu items.

---

## ⚙️ Tech Stack

### 🧩 Frontend Technologies

| Technology                     | Purpose & Description                                                                       |
| ------------------------------ | ------------------------------------------------------------------------------------------- |
| **React (Vite)**               | ⚡ Modern, fast, and lightweight frontend framework for building responsive UIs.            |
| **Tailwind CSS**               | 🎨 Utility-first CSS framework to rapidly style components without writing custom CSS.      |
| **React Router DOM**           | 🌐 Enables smooth client-side routing for single-page applications.                         |
| **Axios**                      | 📡 Handles HTTP requests to interact with backend APIs efficiently.                         |
| **Context API**                | 🧠 Simplified state management without needing external libraries like Redux or Zustand.    |
| **React Hot Toast**            | 🔔 Provides elegant, customizable notifications and alerts.                                 |
| **Lucide React & React Icons** | 🖼️ Clean and versatile icon libraries for React applications.                               |
| **Framer Motion**              | ✨ Adds smooth, interactive animations and transitions to UI elements.                      |
| **ShadCN UI**                  | 🏗️ Component library with ready-to-use, accessible, and beautifully designed UI components. |

### 🛠️ Backend Technologies

| Technology / Package               | Purpose & Description                                                                   |
| ---------------------------------- | --------------------------------------------------------------------------------------- |
| **Node.js**                        | ⚡ JavaScript runtime environment for building fast and scalable backend applications.  |
| **Express.js**                     | 🛠️ Minimal and flexible backend framework for creating APIs and server-side logic.      |
| **MongoDB + Mongoose**             | 🗄️ NoSQL database & ODM for schema-based data modeling and easy database interactions.  |
| **JWT (JSON Web Token)**           | 🔐 Token-based authentication for secure user sessions.                                 |
| **bcrypt**                         | 🔑 Password hashing for secure authentication.                                          |
| **Dotenv**                         | 🌱 Loads environment variables from `.env` files.                                       |
| **Multer.js**                      | 📤 Handles file uploads (images, documents, etc.).                                      |
| **Nodemailer**                     | ✉️ Sending emails programmatically from Node.js.                                        |
| **Cloudinary**                     | ☁️ Cloud-based media storage and management (image/video hosting).                      |
| **Express Rate Limiter**           | 🛡️ Protects APIs from brute-force attacks by limiting requests.                         |
| **Helmet**                         | 🛡️ Adds security headers to protect Express apps.                                       |
| **HPP (HTTP Parameter Pollution)** | 🔒 Prevents HTTP parameter pollution attacks.                                           |
| **Stripe**                         | 💳 Payment processing for online transactions.                                          |
| **Nodemon**                        | 🔄 Automatically restarts the server during development when file changes are detected. |

---

## 🚀 Key Points / মূল বিষয়গুলো

- ✅ Fully responsive, modern UI.
- ✅ Guest users can add to cart/wishlist without login.
- ✅ Data temporarily stored in client; synced to database after login.
- ✅ Smooth checkout with **Stripe payment**.
- ✅ Admin dashboard with order tracking, charts & CRUD for foods.
- ✅ Toast notifications for real-time feedback.

---

## 💻 Installation / ইনস্টলেশন ও রান করার ধাপ

1. Clone the repository / রেপোজিটরি ক্লোন করুন:

```bash
git clone https://github.com/yourusername/foodie.git
```

## 📁 Project Structure

```
├── 📁 .git/ 🚫 (auto-hidden)
├── 📁 admin/
│   ├── 📁 node_modules/ 🚫 (auto-hidden)
│   ├── 📁 public/
│   │   └── 🖼️ vite.svg
│   ├── 📁 src/
│   │   ├── 📁 assets/
│   │   ├── 📁 components/
│   │   │   ├── 📁 ui/
│   │   │   │   ├── 📄 avatar.jsx
│   │   │   │   ├── 📄 button.jsx
│   │   │   │   ├── 📄 card.jsx
│   │   │   │   ├── 📄 chart.jsx
│   │   │   │   ├── 📄 input.jsx
│   │   │   │   ├── 📄 label.jsx
│   │   │   │   ├── 📄 select.jsx
│   │   │   │   ├── 📄 skeleton.jsx
│   │   │   │   └── 📄 textarea.jsx
│   │   │   ├── 📄 AdminProtectedRoute.jsx
│   │   │   ├── 📄 Loader.jsx
│   │   │   ├── 📄 Navbar.jsx
│   │   │   ├── 📄 OrderBarChart.jsx
│   │   │   ├── 📄 RecentFoods.jsx
│   │   │   ├── 📄 RecentUser.jsx
│   │   │   └── 📄 Sidebar.jsx
│   │   ├── 📁 contexts/
│   │   │   └── 📄 AppContext.jsx
│   │   ├── 📁 layouts/
│   │   │   ├── 📄 AuthLayout.jsx
│   │   │   └── 📄 MainLayout.jsx
│   │   ├── 📁 lib/
│   │   │   └── 📄 utils.js
│   │   ├── 📁 pages/
│   │   │   ├── 📄 AddFood.jsx
│   │   │   ├── 📄 FoodListPage.jsx
│   │   │   ├── 📄 HomePage.jsx
│   │   │   ├── 📄 LoginPage.jsx
│   │   │   └── 📄 PlaceOrderPage.jsx
│   │   ├── 📄 App.jsx
│   │   ├── 🎨 index.css
│   │   └── 📄 main.jsx
│   ├── 🔒 .env 🚫 (auto-hidden)
│   ├── 📄 components.json
│   ├── 📄 eslint.config.js
│   ├── 🌐 index.html
│   ├── 📄 jsconfig.json
│   ├── 📄 package-lock.json
│   ├── 📄 package.json
│   ├── 📄 vercel.json
│   └── 📄 vite.config.js
├── 📁 backend/
│   ├── 📁 node_modules/ 🚫 (auto-hidden)
│   ├── 📁 src/
│   │   ├── 📁 controllers/
│   │   │   ├── 📄 adminController.js
│   │   │   ├── 📄 cartController.js
│   │   │   ├── 📄 dashboardController.js
│   │   │   ├── 📄 foodController.js
│   │   │   ├── 📄 orderController.js
│   │   │   ├── 📄 userController.js
│   │   │   └── 📄 wishListController.js
│   │   ├── 📁 db/
│   │   │   └── 📄 connectDB.js
│   │   ├── 📁 middlewares/
│   │   │   └── 📄 authProtected.js
│   │   ├── 📁 models/
│   │   │   ├── 📄 Admin.js
│   │   │   ├── 📄 Food.js
│   │   │   ├── 📄 Order.js
│   │   │   └── 📄 User.js
│   │   ├── 📁 routes/
│   │   │   ├── 📄 AdminRoute.js
│   │   │   ├── 📄 DashboardRoute.js
│   │   │   ├── 📄 WishListRoute.js
│   │   │   ├── 📄 cartRoute.js
│   │   │   ├── 📄 foodRoute.js
│   │   │   ├── 📄 orderRoute.js
│   │   │   └── 📄 userRoute.js
│   │   └── 📁 utils/
│   │       ├── 📄 connectCloudinary.js
│   │       ├── 📄 generateToken.js
│   │       ├── 📄 imageUploader.js
│   │       └── 📄 transporter.js
│   ├── 🔒 .env 🚫 (auto-hidden)
│   ├── 📄 package-lock.json
│   ├── 📄 package.json
│   ├── 📄 server.js
│   └── 📄 versel.json
├── 📁 frontend/
│   ├── 📁 node_modules/ 🚫 (auto-hidden)
│   ├── 📁 public/
│   │   └── 🖼️ vite.svg
│   ├── 📁 src/
│   │   ├── 📁 assets/
│   │   ├── 📁 components/
│   │   │   ├── 📁 ui/
│   │   │   │   ├── 📄 avatar.jsx
│   │   │   │   ├── 📄 button.jsx
│   │   │   │   ├── 📄 carousel.jsx
│   │   │   │   ├── 📄 dialog.jsx
│   │   │   │   ├── 📄 input.jsx
│   │   │   │   ├── 📄 pagination.jsx
│   │   │   │   └── 📄 skeleton.jsx
│   │   │   ├── 📄 About.jsx
│   │   │   ├── 📄 Category.jsx
│   │   │   ├── 📄 ChefList.jsx
│   │   │   ├── 📄 CustomerReview.jsx
│   │   │   ├── 📄 FoodCard.jsx
│   │   │   ├── 📄 FoodMenu.jsx
│   │   │   ├── 📄 Footer.jsx
│   │   │   ├── 📄 Hero.jsx
│   │   │   ├── 📄 Navbar.jsx
│   │   │   ├── 📄 NewsLatter.jsx
│   │   │   ├── 📄 ProtectedRoute.jsx
│   │   │   ├── 📄 PublicRoute.jsx
│   │   │   └── 📄 SectionTitle.jsx
│   │   ├── 📁 contexts/
│   │   │   ├── 📄 AppContext.jsx
│   │   │   ├── 📄 CartContext.jsx
│   │   │   └── 📄 WishListContext.jsx
│   │   ├── 📁 hooks/
│   │   │   └── 📄 Animation.jsx
│   │   ├── 📁 layouts/
│   │   │   ├── 📄 AuthLayout.jsx
│   │   │   └── 📄 MainLayout.jsx
│   │   ├── 📁 lib/
│   │   │   └── 📄 utils.js
│   │   ├── 📁 pages/
│   │   │   ├── 📄 CartPage.jsx
│   │   │   ├── 📄 ForgotPasswordPage.jsx
│   │   │   ├── 📄 HomePage.jsx
│   │   │   ├── 📄 LoginPage.jsx
│   │   │   ├── 📄 MyOrderPage.jsx
│   │   │   ├── 📄 PlaceOrderPage.jsx
│   │   │   ├── 📄 SignupPage.jsx
│   │   │   ├── 📄 VerifyPage.jsx
│   │   │   └── 📄 WishListPage.jsx
│   │   ├── 📄 App.jsx
│   │   ├── 🎨 index.css
│   │   └── 📄 main.jsx
│   ├── 🔒 .env 🚫 (auto-hidden)
│   ├── 📄 components.json
│   ├── 📄 eslint.config.js
│   ├── 🌐 index.html
│   ├── 📄 jsconfig.json
│   ├── 📄 package-lock.json
│   ├── 📄 package.json
│   ├── 📄 vercel.json
│   └── 📄 vite.config.js
├── 🚫 .gitignore
└── 📖 README.md
```
