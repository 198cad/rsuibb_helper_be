import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

export const generateToken = (payload) => {
  const token = jwt.sign({ payload }, process.env.JWT_SECRET);
  return token;
};

export const verifyToken = (token) => {};