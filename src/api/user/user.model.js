import mongoose from "mongoose";
import uniqueValidator from "mongoose-unique-validator";
import mongoosePaginate from "mongoose-paginate-v2";
const { Schema, model } = mongoose;

const userSchema = new Schema({
  username: { type: String, unique: true },
  password: String,
  role: { type: String, default: "Guest" },
  is_active: { type: Boolean, default: false },
});

userSchema.plugin(uniqueValidator);
userSchema.plugin(mongoosePaginate);

export default model("Users", userSchema);
