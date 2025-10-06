import express from "express";
import {
    addFood,
    deleteFood,
    foodList,
} from "../controllers/foodController.js";
import imageUploader from "../utils/imageUploader.js";

const router = express.Router();

router.post("/add", imageUploader.single("image"), addFood);
router.get("/list", foodList);
router.delete("/:id", deleteFood);

export default router;
