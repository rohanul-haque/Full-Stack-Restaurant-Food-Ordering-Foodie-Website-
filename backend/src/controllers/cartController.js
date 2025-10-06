import User from "../models/User.js";

export const addToCart = async (req, res) => {
  const { itemId } = req.params;

  if (!itemId)
    return res
      .status(400)
      .json({ success: false, message: "itemId is required" });

  const userId = req.id;

  try {
    const userData = await User.findById(userId);
    if (!userData) {
      return res
        .status(404)
        .json({ success: false, message: "User not found" });
    }

    const cartData = userData.cartData || {};

    if (!cartData[itemId]) {
      cartData[itemId] = 1;
    } else {
      cartData[itemId] += 1;
    }

    userData.cartData = cartData;

    await User.findByIdAndUpdate(userId, { cartData });

    return res.json({
      success: true,
      message: "Cart added successfully",
    });
  } catch (error) {
    return res
      .status(500)
      .json({ success: false, message: "Failed to add to cart" });
  }
};

export const removeFromCart = async (req, res) => {
  const { itemId } = req.params;

  if (!itemId) {
    return res
      .status(400)
      .json({ success: false, message: "itemId is required" });
  }

  const userId = req.id;

  try {
    const userData = await User.findById(userId);
    if (!userData) {
      return res
        .status(404)
        .json({ success: false, message: "User not found" });
    }

    const cartData = userData.cartData || {};

    if (cartData[itemId] && cartData[itemId] > 0) {
      cartData[itemId] -= 1;

      if (cartData[itemId] === 0) {
        delete cartData[itemId];
      }
    } else {
      return res.status(400).json({
        success: false,
        message: "Item not found in cart",
      });
    }

    userData.cartData = cartData;

    await User.findByIdAndUpdate(userId, { cartData });

    return res.json({
      success: true,
      message: "Item removed from cart successfully",
      cartData,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Failed to remove from cart",
      error: error.message,
    });
  }
};

export const getCartData = async (req, res) => {
  const userId = req.id;

  try {
    const userData = await User.findById(userId);

    if (!userData) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    const cartData = userData.cartData || {};

    return res.json({
      success: true,
      cartList: cartData,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Failed to fetch cart data",
    });
  }
};
