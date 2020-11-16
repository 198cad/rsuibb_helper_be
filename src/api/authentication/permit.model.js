import mongoose from "mongoose";

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

export default model("Permits", permitSchema);
