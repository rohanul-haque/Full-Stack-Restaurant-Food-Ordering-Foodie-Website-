import Food from "../models/Food.js";
import User from "../models/User.js";

export const toggleWishlist = async (req, res) => {
  const userId = req.id;
  const { productId } = req.params;

  if (!productId) {
    return res
      .status(400)
      .json({ success: false, message: "Product ID is required" });
  }

  try {
    const user = await User.findById(userId);
    if (!user)
      return res
        .status(404)
        .json({ success: false, message: "User not found" });

    const food = await Food.findById(productId);
    if (!food)
      return res
        .status(404)
        .json({ success: false, message: "Food not found" });

    let updateQuery = {};
    let message = "";

    if (user.wishlist.includes(productId)) {
      updateQuery = { $pull: { wishlist: productId } };
      message = "Removed from wishlist";
    } else {
      updateQuery = { $addToSet: { wishlist: productId } };
      message = "Added to wishlist";
    }

    const updatedUser = await User.findByIdAndUpdate(userId, updateQuery, {
      new: true,
      select: "wishlist",
    });

    return res.json({
      success: true,
      message,
      wishlist: updatedUser.wishlist,
    });
  } catch (error) {
    console.error("Wishlist toggle error:", error);
    return res
      .status(500)
      .json({ success: false, message: "Failed to toggle wishlist" });
  }
};

export const getWishlist = async (req, res) => {
  const userId = req.id;

  try {
    const user = await User.findById(userId);
    if (!user)
      return res
        .status(404)
        .json({ success: false, message: "User not found" });

    return res.json({
      success: true,
      wishlist: user.wishlist,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Wishlist not found!",
    });
  }
};
