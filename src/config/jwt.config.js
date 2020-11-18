import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

export const generateToken = (payload) => {
  const token = jwt.sign({ payload }, process.env.JWT_SECRET, { expiresIn: "1d" });
  return token;
};

export const generateRefreshToken = (payload) => {
  const token = jwt.sign({ payload }, process.env.JWT_SECRET_REFRESH, { expiresIn: "7d" });
};

export const verifyToken = (token) => {
  try {
    return jwt.verify(token, process.env.JWT_SECRET);
  } catch (error) {
    return error;
  }
};
