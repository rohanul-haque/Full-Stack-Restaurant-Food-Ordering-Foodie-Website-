import express from "express";
import {
  addToCart,
  getCartData,
  removeFromCart,
} from "../controllers/cartController.js";
import authProtected from "../middlewares/authProtected.js";

const router = express.Router();

router.post("/add/:itemId", authProtected, addToCart);
router.delete("/remove/:itemId", authProtected, removeFromCart);
router.get("/list", authProtected, getCartData);

export default router;
