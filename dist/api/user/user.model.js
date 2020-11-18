"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

var _mongooseUniqueValidator = _interopRequireDefault(require("mongoose-unique-validator"));

var _mongoosePaginateV = _interopRequireDefault(require("mongoose-paginate-v2"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Schema = _mongoose["default"].Schema,
    model = _mongoose["default"].model;
var userSchema = new Schema({
  username: {
    type: String,
    unique: true
  },
  password: String,
  role: {
    type: String,
    "default": "Guest"
  },
  is_active: {
    type: Boolean,
    "default": false
  }
});
userSchema.plugin(_mongooseUniqueValidator["default"]);
userSchema.plugin(_mongoosePaginateV["default"]);

var _default = model("Users", userSchema);

exports["default"] = _default;