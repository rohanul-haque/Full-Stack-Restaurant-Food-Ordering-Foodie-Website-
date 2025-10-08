import express from "express";

import {
    getWishlist,
    toggleWishlist
} from "../controllers/wishListController.js";
import authProtected from "../middlewares/authProtected.js";

const router = express.Router();

router.get("/toggle/:productId", authProtected, toggleWishlist);
router.get("/list", authProtected, getWishlist);

export default router;
