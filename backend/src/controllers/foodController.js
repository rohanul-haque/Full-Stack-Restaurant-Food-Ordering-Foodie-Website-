import { v2 as cloudinary } from "cloudinary";
import Food from "../models/Food.js";

export const addFood = async (req, res) => {
  const { name, description, price, category } = req.body;
  const foodImage = req.file;

  if (!name || !description || !price || !category || !foodImage) {
    return res.status(400).json({
      success: false,
      message: "All fields are required",
    });
  }

  try {
    const foodImageUrl = await cloudinary.uploader.upload(foodImage.path);

    const newFood = new Food({
      name,
      description,
      price,
      category,
      image: foodImageUrl.secure_url,
    });

    await newFood.save();

    return res.status(201).json({
      success: true,
      message: "Food added successfully",
      food: newFood,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Failed to add food",
    });
  }
};

export const foodList = async (req, res) => {
  try {
    const foods = await Food.find({});

    if (!foods || foods.length === 0) {
      return res.status(404).json({
        success: false,
        message: "Food list not found",
      });
    }

    return res.status(200).json({
      success: true,
      foodList: foods,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      success: false,
      message: "Failed to fetch food list",
    });
  }
};

export const deleteFood = async (req, res) => {
  const { id } = req.params;

  if (!id)
    return res.status(400).json({ success: false, message: "ID is required" });

  try {
    const deletedFood = await Food.findByIdAndDelete(id);

    if (!deletedFood) {
      return res
        .status(404)
        .json({ success: false, message: "Food not found" });
    }

    return res.status(200).json({
      success: true,
      message: "Food deleted successfully",
      food: deletedFood,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Failed to delete food",
    });
  }
};
