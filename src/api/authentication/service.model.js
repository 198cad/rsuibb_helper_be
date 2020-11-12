import mongoose from "mongoose";
const { Schema, model } = mongoose;

const serviceSchema = new Schema({
  service: String,
  is_active: Boolean,
});

export default model("Services", serviceSchema);
