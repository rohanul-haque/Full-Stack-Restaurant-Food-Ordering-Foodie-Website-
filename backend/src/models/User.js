import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    wishlist: {
      type: Array,
      default: [],
    },
    cartData: {
      type: Object,
      default: {},
    },
    otp: {
      type: Number,
      default: null,
    },
  },

  {
    minimize: false,
  }
);

const User = mongoose.models.User || mongoose.model("User", userSchema);

export default User;
