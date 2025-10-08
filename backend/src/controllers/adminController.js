import bcrypt from "bcrypt";
import { v2 as cloudinary } from "cloudinary";
import Admin from "../models/Admin.js";
import generateToken from "../utils/generateToken.js";

export const registerAdmin = async (req, res) => {
  const { name, email, password } = req.body;
  const imageFile = req.file;

  if (!name || !email || !password || !imageFile) {
    return res.json({ success: false, message: "All fields are required" });
  }

  try {
    const existingAdmin = await Admin.findOne({ email });
    if (existingAdmin) {
      return res.json({ success: false, message: "Email already registered" });
    }

    const uploadResult = await cloudinary.uploader.upload(imageFile.path);

    const hashedPassword = await bcrypt.hash(password, 10);

    const newAdmin = new Admin({
      name,
      email,
      password: hashedPassword,
      image: uploadResult.secure_url,
    });

    await newAdmin.save();

    return res.json({
      success: true,
      message: "Registration successful",
      token: generateToken(newAdmin._id),
    });
  } catch (error) {
    return res.json({
      success: false,
      message: "Registration failed",
    });
  }
};

export const AdminLogin = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password)
    return res.json({ success: false, message: "All fields are required" });

  try {
    const admin = await Admin.findOne({ email });
    if (!admin) return res.json({ success: false, message: "Admin not found" });

    const isMatch = await bcrypt.compare(password, admin.password);
    if (!isMatch)
      return res.json({ success: false, message: "Password is incorrect" });

    const token = generateToken(admin._id);

    return res.json({
      success: true,
      message: "Login successful",
      token,
    });
  } catch (error) {
    return res.json({
      success: false,
      message: "Login failed",
    });
  }
};

export const getAdminData = async (req, res) => {
  const adminId = req.id;

  try {
    const admin = await Admin.findById(adminId).select("-password");

    if (!admin) {
      return res.json({ success: false, message: "Admin not found" });
    }

    return res.json({
      success: true,
      adminData: admin,
    });
  } catch (error) {
    return res.json({
      success: false,
      message: "Admin data not found",
    });
  }
};
