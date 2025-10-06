import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(
      `${process.env.DATABASE_CONNECTION_STRING}/restaurant`
    );
    console.log("✅ Database Connection Successful");
  } catch (error) {
    console.error("❌ Database Connection Failed:");
    process.exit(1);
  }
};

export default connectDB;
