import mongoose from "mongoose";
const { Schema, model } = mongoose;

const userSchema = new Schema({
  email: String,
  password: String,
  role: String,
});

export default model("Users", userSchema);
