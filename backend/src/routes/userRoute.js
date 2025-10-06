import express from "express";
import {
    getUserData,
    loginUser,
    registerUser,
} from "../controllers/userController.js";
import authProtected from "../middlewares/authProtected.js";
import imageUploader from "../utils/imageUploader.js";

const router = express.Router();

router.post("/register", imageUploader.single("image"), registerUser);
router.post("/login", loginUser);
router.get("/data", authProtected, getUserData);

export default router;
