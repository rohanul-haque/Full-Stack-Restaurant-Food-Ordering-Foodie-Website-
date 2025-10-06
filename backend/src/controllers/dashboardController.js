import Food from "../models/Food.js";
import Order from "../models/Order.js";
import User from "../models/User.js";

export const getDashboardData = async (req, res) => {
  try {
    const [orders, foods, customers] = await Promise.all([
      Order.find({}),
      Food.find({}),
      User.find({}),
    ]);

    return res.json({
      success: true,
      orderList: orders,
      foodList: foods,
      customerList: customers,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Failed to fetch dashboard data",
    });
  }
};
