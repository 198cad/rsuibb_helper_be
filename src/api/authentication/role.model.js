import mongoose from "mongoose";

const { Schema, model } = mongoose;

const roleSchema = new Schema({
  roleName: String,
  services: [
    {
      serviceName: String,
      allow: {
        create: { type: Boolean, default: false },
        read: { type: Boolean, default: false },
        update: { type: Boolean, default: false },
        delete: { type: Boolean, default: false },
        search: { type: Boolean, default: false },
        report: { type: Boolean, default: false },
        print: { type: Boolean, default: false },
      },
    },
  ],
});

export default model("Roles", roleSchema);
