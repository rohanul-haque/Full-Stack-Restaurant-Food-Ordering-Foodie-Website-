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

## 🚀 Run Locally

### Clone the project

```bash
  git clone https://github.com/rohanul-haque/Full-Stack-Restaurant-Food-Ordering-Website.git
```

---

### 🖥️ Frontend

Go to the project **_Frontend_** directory:

```bash
  cd frontend
```

Install dependencies:

```bash
  npm install
```

Start the development server:

```bash
  npm run dev
```

---

### 🧑‍💻 Admin

Go to the project **_Admin_** directory:

```bash
cd admin

```

Install dependencies:

```bash
  npm install
```

Start the development server:

```bash
  npm run dev
```

---

### 🛠️ Backend

Go to the project **_Backend_** directory:

```bash
  cd backend
```

Install dependencies:

```bash
  npm install
```

Start the development server:

```bash
  npm run dev
```

## 📚 API Documentation

### Base_URL

```
http://localhost:3000
```

### Core Endpoints

### 1️⃣ Registered Routes in `server.js`

In `server.js`, the routes are registered as follows:

```js
app.use("/food", foodRoute);
app.use("/user", userRoute);
app.use("/cart", cartRoute);
app.use("/wishlist", wishListRoute);
app.use("/order", orderRoute);
app.use("/dashboard", dashboardRoute);
app.use("/admin", adminRoute);
```

### 🔐 User Authentication API

These endpoints handle user registration, login, password reset, and authentication.

| Method | Endpoint          | Description                    | Request Body / Headers       |
| ------ | ----------------- | ------------------------------ | ---------------------------- |
| POST   | `/register`       | Register a new user            | `{ name, email, password }`  |
| POST   | `/login`          | Login user                     | `{ email, password }`        |
| GET    | `/data`           | Get authenticated user data    | `Headers: { token: <JWT> }`  |
| POST   | `/reset-otp`      | Request OTP for password reset | `{ email}`                   |
| POST   | `/verify-otp`     | Verify OTP                     | `{ email, otp}`              |
| POST   | `/hange-password` | Change user password           | `{ email, otp, newPassword}` |

### 🔐 Admin Authentication API

These endpoints handle **Admin registration, login, password management, and authentication**.  
All JWT-protected endpoints require the token to be sent in headers as `req.headers.token`.

| Method | Endpoint    | Description                  | Request Body / Headers      |
| ------ | ----------- | ---------------------------- | --------------------------- |
| POST   | `/register` | Register a new admin         | `{ name, email, password }` |
| POST   | `/login`    | Admin login                  | `{ email, password }`       |
| GET    | `/data`     | Get authenticated admin data | `Headers: { token: <JWT> }` |

### 🍔🍕🍲 Food Management API

These endpoints manage food items in the system.

- **Admin** can add and delete food items (JWT required).
- **Public** can view the food list without authentication.

| Method | Endpoint | Description              | Request Body / Headers                                        |
| ------ | -------- | ------------------------ | ------------------------------------------------------------- |
| POST   | `/add`   | Add a new food item      | `{ name, description, price, category }` (Admin JWT required) |
| GET    | `/list`  | Get all food items       | No authentication required                                    |
| DELETE | `/:id`   | Delete a food item by ID | `Headers: { token: <JWT> }` (Admin JWT required)              |
|        |

### 🛒 Add to Cart API

These endpoints allow **authenticated users** to manage their cart.  
All endpoints require **user login** and JWT token in headers (`req.headers.token`).

| Method | Endpoint          | Description                  | Request Body / Headers      |
| ------ | ----------------- | ---------------------------- | --------------------------- |
| POST   | `/add/:itemId`    | Add a food item to the cart  | `Headers: { token: <JWT> }` |
| DELETE | `/remove/:itemId` | Remove a food item from cart | `Headers: { token: <JWT> }` |
| GET    | `/list`           | Get all items in the cart    | `Headers: { token: <JWT> }` |

### 💖 Add to Wish List API

These endpoints allow **authenticated users** to manage their wishlist.  
All endpoints require **user login** and JWT token in headers (`req.headers.token`).

| Method | Endpoint             | Description                             | Request Body / Headers      |
| ------ | -------------------- | --------------------------------------- | --------------------------- |
| POST   | `/toggle/:productId` | Add or remove a food item from wishlist | `Headers: { token: <JWT> }` |
| GET    | `/list`              | Get all items in the user's wishlist    | `Headers: { token: <JWT> }` |

### 📝 Order API

These endpoints allow **authenticated users** to place and verify orders,  
and **admins** to change order status.  
All endpoints require **JWT token** in headers (`req.headers.token`).

| Method | Endpoint         | Description                                                                  | Request Body / Headers                                                          |
| ------ | ---------------- | ---------------------------------------------------------------------------- | ------------------------------------------------------------------------------- |
| POST   | `/place`         | Place a new order                                                            | `body: { items, amount, address }`, `Headers: { token: <JWT> }`                 |
| POST   | `verify`         | Verify order payment status                                                  | `body: { orderId, status: "success" or "cancel" }`, `Headers: { token: <JWT> }` |
| GET    | `/list`          | Get all orders (users see own orders; admins see all orders)                 | `Headers: { token: <JWT> }`                                                     |
| PUT    | `/status-change` | Change order status (processing, out for delivery, delivered) **Admin only** | `body: { orderId, status }`, `Headers: { token: <JWT> }`                        |

### 📊 Admin Dashboard API

These endpoints allow **admins** to retrieve comprehensive dashboard data,  
including orders, food items, and user statistics.  
All endpoints require **Admin login** and JWT token in headers (`req.headers.token`).

| Method | Endpoint | Description                             | Request Body / Headers      |
| ------ | -------- | --------------------------------------- | --------------------------- |
| GET    | `/data`  | Retrieve dashboard analytics including: | `Headers: { token: <JWT> }` |
|        |          | • Orders chart with **amount and date** |                             |
|        |          | • Recently added food items             |                             |
|        |          | • Recent user orders Profile            |                             |
