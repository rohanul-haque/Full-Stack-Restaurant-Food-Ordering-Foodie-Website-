import express from "express";
import {
  changePassword,
  getUserData,
  loginUser,
  registerUser,
  sendResetPasswordOtp,
  verifyResetOtp,
} from "../controllers/userController.js";
import authProtected from "../middlewares/authProtected.js";
import imageUploader from "../utils/imageUploader.js";

const router = express.Router();

router.post("/register", imageUploader.single("image"), registerUser);
router.post("/login", loginUser);
router.get("/data", authProtected, getUserData);
router.post("/reset-otp", sendResetPasswordOtp);
router.post("/verify-otp", verifyResetOtp);
router.post("/change-password", changePassword);

export default router;
