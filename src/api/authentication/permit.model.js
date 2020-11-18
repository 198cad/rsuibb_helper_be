import mongoose from "mongoose";
import mongoosePaginate from "mongoose-paginate-v2";
import uniqueValidator from "mongoose-unique-validator";
const { Schema, model } = mongoose;

const permitSchema = new Schema({
  role: { type: Schema.Types.ObjectId, ref: "Roles" },
  service: { type: Schema.Types.ObjectId, ref: "Services" },
  create: Boolean,
  read: Boolean,
  update: Boolean,
  delete: Boolean,
  search: Boolean,
  print: Boolean,
  report: Boolean,
  strict: Boolean,
});

permitSchema.plugin(mongoosePaginate);
permitSchema.plugin(uniqueValidator);

export default model("Permits", permitSchema);
