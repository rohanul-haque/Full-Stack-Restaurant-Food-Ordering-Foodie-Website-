# 🍔 Foodie - Full Stack Restaurant Food Ordering Website

**A 🌟 modern, fully responsive 🍽️ restaurant food ordering web application** built with **⚛️ React, 🎨 Tailwind CSS, 🟢 Node.js, ⚡ Express, 🗄️ MongoDB, ✨ Framer Motion, and 🛠️ ShadCN UI**.

**Foodie** allows users to 🔍 **browse, filter, and search food items**, 🛒 **add items to their cart or ❤️ wishlist**, 📝 **place orders**, and 🚚 **track deliveries**.

👨‍💻 **Admins** can ➕ **add/edit/remove food items**, 📋 **view orders**, and 📊 **track analytics** through an **intuitive dashboard**.

---

## 🌐 Live Demo

- **Frontend:** [Vercel Deployment Link](#)
- **Admin:** [Vercel Deployment Link](#)
- **Backend:** [Vercel Deployment Link](#)

---

## 🖼️ Website Screenshot

![App Screenshot](https://res.cloudinary.com/dntarupgf/image/upload/v1759945030/Foodie_Website_dvythn.png)

---

## 🌟 Features

### 👤 For Users

- 🍽️ **Browse all food items** and filter by category.
- 🔍 **Search functionality** (planned).
- 🛒 **Add items to cart and wishlist** (favorite foods) **without logging in**.
- ✏️ **Edit or remove items** from cart and wishlist.
- 🔐 **After login, cart and wishlist data syncs** with the database.
- 📝 **Checkout with delivery details:** name, email, address, phone, etc.
- 💳 **Stripe integration** for secure online payments (success/cancel options).
- 🚚 **Track order status:** processing, out for delivery, delivered.
- 📄 **Pagination and skeleton loaders** for smooth UX.
- 🖥️ **Responsive modern design** including:
  - 🏠 Navbar & Hero section
  - 🗂️ Category & Services, About Us
  - 🍲 Food Menu & List, Food Cart
  - 👨‍🍳 Chef list carousel
  - ⭐ Customer reviews, 📧 Newsletter subscription, Footer
- 🔔 **Notifications:** All actions like add to cart, wishlist, order success/failure use **React Hot Toast** for instant feedback.

### 🛠️ For Admins

- ➕ **Add**, ✏️ **Edit**, and ❌ **Remove food items**.
- 📋 **View all orders** with status updates.
- 📊 **Dashboard with bar charts** showing latest orders and statistics.
- 🗂️ **Manage all routes** and monitor user activity.
- 🔔 **Admin notifications:** Updates, new orders, and actions trigger **React Hot Toast** alerts.

---

## 💡 Key Highlights

- ✨ **Modern UI** with responsive Tailwind CSS and Framer Motion animations.
- 🗄️ **Full-stack integration** with MongoDB database.
- 📊 **Admin dashboard** with analytics and order tracking.
- 💳 **Secure Stripe payments integration**.
- 🔔 **Real-time notifications** with **React Hot Toast** for all important user and admin actions.

---

## 🖥️ Full Tech Stack

### 🧩 Frontend Technologies

| Technology                        | Purpose & Description                                                                    |
| --------------------------------- | ---------------------------------------------------------------------------------------- |
| ⚛️ **React (Vite)**               | Modern, fast, and lightweight frontend framework for building responsive UIs.            |
| 🎨 **Tailwind CSS**               | Utility-first CSS framework to rapidly style components without writing custom CSS.      |
| 🌐 **React Router DOM**           | Enables smooth client-side routing for single-page applications.                         |
| 📡 **Axios**                      | Handles HTTP requests to interact with backend APIs efficiently.                         |
| 🧠 **Context API**                | Simplified state management without external libraries like Redux or Zustand.            |
| 🔔 **React Hot Toast**            | Provides elegant, customizable notifications and alerts.                                 |
| 🖼️ **Lucide React & React Icons** | Clean and versatile icon libraries for React applications.                               |
| ✨ **Framer Motion**              | Adds smooth, interactive animations and transitions to UI elements.                      |
| 🏗️ **ShadCN UI**                  | Component library with ready-to-use, accessible, and beautifully designed UI components. |

### 🛠️ Backend Technologies

| Technology / Package        | Purpose & Description                                                           |
| --------------------------- | ------------------------------------------------------------------------------- |
| ⚡ **Node.js**              | JavaScript runtime for building fast and scalable backend applications.         |
| 🛠️ **Express.js**           | Minimal and flexible backend framework for creating APIs and server-side logic. |
| 🗄️ **MongoDB + Mongoose**   | NoSQL database & ODM for schema-based data modeling.                            |
| 🔐 **JWT (JSON Web Token)** | Token-based authentication for secure user sessions.                            |
| 🔑 **bcrypt**               | Password hashing for secure authentication.                                     |
| 🌱 **Dotenv**               | Loads environment variables from `.env` files.                                  |
| 📤 **Multer.js**            | Handles file uploads (images, documents, etc.).                                 |
| ✉️ **Nodemailer**           | Sending emails programmatically from Node.js.                                   |
| ☁️ **Cloudinary**           | Cloud-based media storage and management.                                       |
| 🛡️ **Express Rate Limiter** | Protects APIs from brute-force attacks by limiting requests.                    |
| 🛡️ **Helmet**               | Adds security headers to protect Express apps.                                  |
| 🔒 **HPP**                  | Prevents HTTP parameter pollution attacks.                                      |
| 💳 **Stripe**               | Payment processing for online transactions.                                     |
| 🔄 **Nodemon**              | Automatically restarts the server during development on file changes.           |

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

## 🌐 Environment Variables

To run this project, add the following environment variables to your `.env` files:

---

### 🖥️ Frontend `.env`

`VITE_BACKEND_URL`="http://localhost:3000"

---

### 🧑‍💻 Admin `.env`

`VITE_BACKEND_URL`="http://localhost:3000"

---

### 🛠️ Backend `.env`

`PORT`="3000"

`DATABASE_CONNECTION_STRING`=""

`JWT_SECRET`=""

`FRONTEND_URL`="http://localhost:5173"

#### Cloudinary

`CLOUDINARY_CLOUD_NAME`=""

`CLOUDINARY_API_KEY`=""

`CLOUDINARY_API_SECRET`=""

#### Stripe

`STRIPE_SECRET_KEY`=""

#### SMTP / Email

`SMTP_HOST`=""

`SMTP_PORT`=""

`SMTP_USER`=""

`SMTP_PASSWORD`=""
