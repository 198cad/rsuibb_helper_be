import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

export const generateToken = (payload) => {
  const token = jwt.sign({ payload }, process.env.JWT_SECRET, { expiresIn: "2m" });
  return token;
};

export const generateRefreshToken = (payload) => {
  const token = jwt.sign({ payload }, process.env.JWT_SECRET_REFRESH, { expiresIn: "7d" });
};

export const verifyToken = (token) => {
  try {
    const decode = jwt.verify(token, process.env.JWT_SECRET);
    if (decode) {
      return decode;
    }
  } catch (error) {
    return error;
  }
};
