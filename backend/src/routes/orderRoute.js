import express from "express";
import {
    orderList,
    orderStatusChange,
    placeOrder,
    userOrder,
    verifyOrder,
} from "../controllers/orderController.js";
import authProtected from "../middlewares/authProtected.js";

const router = express.Router();

router.post("/place", authProtected, placeOrder);
router.post("/verify", authProtected, verifyOrder);
router.get("/user-order-list", authProtected, userOrder);
router.get("/list", authProtected, orderList);
router.put("/status-change", authProtected, orderStatusChange);

export default router;
