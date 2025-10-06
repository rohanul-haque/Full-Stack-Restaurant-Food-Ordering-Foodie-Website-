import jwt from "jsonwebtoken";

// Token generation function
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "7d" });
};

export default generateToken;
