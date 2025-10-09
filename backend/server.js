import cors from "cors";
import "dotenv/config";
import express from "express";
import rateLimit from "express-rate-limit";
import helmet from "helmet";
import hpp from "hpp";

import connectDB from "./src/db/connectDB.js";
import AdminRoute from "./src/routes/AdminRoute.js";
import cartRoute from "./src/routes/cartRoute.js";
import DashboardRoute from "./src/routes/DashboardRoute.js";
import foodRoute from "./src/routes/foodRoute.js";
import orderRoute from "./src/routes/orderRoute.js";
import userRoute from "./src/routes/userRoute.js";
import WishListRoute from "./src/routes/WishListRoute.js";
import connectCloudinary from "./src/utils/connectCloudinary.js";

const app = express();

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
});

app.use(helmet());
app.use(cors());
app.use(limiter);
app.use(hpp());
app.use(express.json());

app.use("/food", foodRoute);
app.use("/user", userRoute);
app.use("/cart", cartRoute);
app.use("/wishlist", WishListRoute);
app.use("/order", orderRoute);
app.use("/dashboard", DashboardRoute);
app.use("/admin", AdminRoute);
app.get("/", (req, res) => res.send("✅ Api is working"));

connectDB();
connectCloudinary();

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`✅ Server Running on http://localhost:${PORT}`));
