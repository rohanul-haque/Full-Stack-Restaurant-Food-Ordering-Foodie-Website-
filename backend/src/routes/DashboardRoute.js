import express from "express";
import { getDashboardData } from "../controllers/dashboardController.js";
import authProtected from "../middlewares/authProtected.js";

const router = express.Router();

router.get("/data", authProtected, getDashboardData);

export default router;
