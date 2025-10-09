import express from "express";
import {
  AdminLogin,
  getAdminData,
  registerAdmin,
} from "../controllers/adminController.js";
import authProtected from "../middlewares/authProtected.js";
import imageUploader from "../utils/imageUploader.js";

const router = express.Router();

router.post("/register", imageUploader.single("image"), registerAdmin);
router.post("/login", AdminLogin);
router.get("/data", authProtected, getAdminData);

export default router;
