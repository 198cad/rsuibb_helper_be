import mongoose from "mongoose";
import mongoosePaginate from "mongoose-paginate-v2";
import uniqueValidator from "mongoose-unique-validator";
const { Schema, model } = mongoose;

const roleSchema = new Schema({
  role_name: { type: String, unique: true },
  is_active: Boolean,
});

roleSchema.plugin(mongoosePaginate);
roleSchema.plugin(uniqueValidator);

export default model("Roles", roleSchema);
