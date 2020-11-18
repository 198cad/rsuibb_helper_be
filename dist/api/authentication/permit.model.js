"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

var _mongoosePaginateV = _interopRequireDefault(require("mongoose-paginate-v2"));

var _mongooseUniqueValidator = _interopRequireDefault(require("mongoose-unique-validator"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Schema = _mongoose["default"].Schema,
    model = _mongoose["default"].model;
var permitSchema = new Schema({
  role: {
    type: Schema.Types.ObjectId,
    ref: "Roles"
  },
  service: {
    type: Schema.Types.ObjectId,
    ref: "Services"
  },
  create: Boolean,
  read: Boolean,
  update: Boolean,
  "delete": Boolean,
  search: Boolean,
  print: Boolean,
  report: Boolean,
  strict: Boolean
});
permitSchema.plugin(_mongoosePaginateV["default"]);
permitSchema.plugin(_mongooseUniqueValidator["default"]);

var _default = model("Permits", permitSchema);

exports["default"] = _default;