import express from "express";
import {
    addFood,
    deleteFood,
    foodList,
} from "../controllers/foodController.js";
import authProtected from "../middlewares/authProtected.js";
import imageUploader from "../utils/imageUploader.js";

const router = express.Router();

router.post("/add", authProtected, imageUploader.single("image"), addFood);
router.get("/list", foodList);
router.delete("/:id", authProtected, deleteFood);

export default router;
