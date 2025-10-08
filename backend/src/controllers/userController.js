import bcrypt from "bcrypt";
import { v2 as cloudinary } from "cloudinary";

import User from "../models/User.js";
import generateToken from "../utils/generateToken.js";
import transporter from "../utils/transporter.js";

export const registerUser = async (req, res) => {
  const { name, email, password } = req.body;
  const imageFile = req.file;

  if (!name || !email || !password || !imageFile) {
    return res.status(400).json({
      success: false,
      message: "All fields are required",
    });
  }

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({
        success: false,
        message: "User already exists",
      });
    }

    const imageFileUrl = await cloudinary.uploader.upload(imageFile.path);

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
      name,
      email,
      password: hashedPassword,
      image: imageFileUrl.secure_url,
    });

    await newUser.save();

    return res.status(201).json({
      success: true,
      message: "Registration successful",
      token: generateToken(newUser._id),
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      success: false,
      message: "Registration failed",
    });
  }
};

export const loginUser = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({
      success: false,
      message: "All fields are required",
    });
  }

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    const isValidPassword = await bcrypt.compare(password, user.password);
    if (!isValidPassword) {
      return res.status(401).json({
        success: false,
        message: "Invalid credentials",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Login successful",
      token: generateToken(user._id),
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Login failed",
    });
  }
};

export const getUserData = async (req, res) => {
  const userId = req.id;

  try {
    const user = await User.findById(userId).select("-password");

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User data not found",
      });
    }

    return res.json({
      success: true,
      userData: user,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      success: false,
      message: "User data not found",
    });
  }
};

export const sendResetPasswordOtp = async (req, res) => {
  const { email } = req.body;

  if (!email) return res.json({ success: false, message: "Email is required" });

  try {
    const user = await User.findOne({ email });

    if (!user) return res.json({ success: false, message: "User not found" });

    // Generate 6-digit OTP
    const otp = Math.floor(100000 + Math.random() * 900000);

    // Save OTP to user and await
    user.otp = otp;

    await user.save();

    // Mail options
    const mailOptions = {
      from: "mdrohanulhaquerohan368@gmail.com",
      to: email,
      subject: "Your Password Reset OTP",
      text: `Your password reset is: ${otp}.`,
    };

    await transporter.sendMail(mailOptions);

    return res.json({ success: true, message: "OTP sent successfully" });
  } catch (error) {
    console.error("OTP Error:", error);
    return res.json({ success: false, message: "OTP sending failed" });
  }
};

export const verifyResetOtp = async (req, res) => {
  const { email, otp } = req.body;

  if (!email || !otp)
    return res.json({ success: false, message: "All fields are required" });

  try {
    const user = await User.findOne({ email });

    if (!user) return res.json({ success: false, message: "User not found" });

    if (user.otp !== Number(otp))
      return res.json({ success: false, message: "OTP is invalid" });

    return res.json({ success: true, message: "OTP verification successful" });
  } catch (error) {
    return res.json({ success: false, message: "OTP verification failed" });
  }
};

export const changePassword = async (req, res) => {
  const { email, otp, newPassword } = req.body;

  if (!email || !otp || !newPassword)
    return res.json({ success: false, message: "All fields are required" });

  try {
    const user = await User.findOne({ email });

    if (!user) return res.json({ success: false, message: "User not found" });

    if (user.otp !== Number(otp))
      return res.json({ success: false, message: "OTP is invalid" });

    const hashedPassword = await bcrypt.hash(newPassword, 10);

    user.password = hashedPassword;
    await user.save();

    return res.json({
      success: true,
      message: "Password changed successfully",
    });
  } catch (error) {
    console.error(error);
    return res.json({ success: false, message: "Password change failed" });
  }
};
