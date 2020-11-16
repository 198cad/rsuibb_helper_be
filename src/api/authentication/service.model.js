import mongoose from "mongoose";
import mongoosePaginate from "mongoose-paginate-v2";
import uniqueValidator from "mongoose-unique-validator";
const { Schema, model } = mongoose;

const serviceSchema = new Schema({
  service: { type: String, unique: true },
  is_active: Boolean,
});
serviceSchema.plugin(mongoosePaginate);
serviceSchema.plugin(uniqueValidator);

export default model("Services", serviceSchema);
