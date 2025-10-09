import Stripe from "stripe";
import Order from "../models/Order.js";
import User from "../models/User.js";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export const placeOrder = async (req, res) => {
  const { items, amount, address } = req.body;

  const userId = req.id;

  if (!userId || !items || !amount || !address) {
    return res.status(400).json({
      success: false,
      message: "All fields are required",
    });
  }

  try {
    const newOrder = new Order({
      userId,
      items,
      amount,
      address,
    });

    await newOrder.save();

    await User.findByIdAndUpdate(userId, { cartData: {} });

    const line_items = items.map((item) => ({
      price_data: {
        currency: "usd",
        product_data: {
          name: item.name,
        },
        unit_amount: Math.round(item.price * 100),
      },
      quantity: item.quantity,
    }));

    line_items.push({
      price_data: {
        currency: "usd",
        product_data: {
          name: "Delivery charges",
        },
        unit_amount: 50 * 100,
      },
      quantity: 1,
    });

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items,
      mode: "payment",
      success_url: `${process.env.FRONTEND_URL}/verify?success=true&orderId=${newOrder._id}`,
      cancel_url: `${process.env.FRONTEND_URL}/verify?success=false&orderId=${newOrder._id}`,
    });

    res.status(201).json({
      success: true,
      message: "Order placed successfully",
      session_url: session.url,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Order placed failed",
    });
  }
};

export const verifyOrder = async (req, res) => {
  const { orderId, success } = req.body;

  if (!orderId || !success) {
    return res.status(400).json({
      success: false,
      message: "All fields are required",
    });
  }

  try {
    if (success == true || success === "true") {
      await Order.findByIdAndUpdate(orderId, { payment: true });

      return res.status(200).json({
        success: true,
        message: "Order payment successful",
      });
    } else {
      await Order.findByIdAndDelete(orderId);

      return res.status(200).json({
        success: false,
        message: "Order payment failed",
      });
    }
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Order payment failed",
    });
  }
};

export const userOrder = async (req, res) => {
  const userId = req.id;

  try {
    const orders = await Order.find({ userId });

    if (!orders || orders.length === 0) {
      return res
        .status(404)
        .json({ success: false, message: "No orders found for this user" });
    }

    return res.status(200).json({
      success: true,
      orderList: orders,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "No orders found for this user",
    });
  }
};

export const orderList = async (req, res) => {
  try {
    const orders = await Order.find({});

    if (!orders || orders.length === 0) {
      return res.status(404).json({
        success: false,
        message: "No orders found",
      });
    }

    return res.status(200).json({
      success: true,
      orderList: orders,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "No orders found",
    });
  }
};

export const orderStatusChange = async (req, res) => {
  const { orderId, status } = req.body;

  if (!orderId || !status) {
    return res.json({
      success: false,
      message: "orderId and status are required",
    });
  }

  try {
    const updatedOrder = await Order.findByIdAndUpdate(
      orderId,
      { status },
      { new: true } // returns the updated document
    );

    if (!updatedOrder) {
      return res.json({ success: false, message: "Order not found" });
    }

    return res.json({
      success: true,
      message: "Status changed successfully",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Status changed failed",
    });
  }
};
