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
var roleSchema = new Schema({
  role_name: {
    type: String,
    unique: true
  },
  is_active: Boolean
});
roleSchema.plugin(_mongoosePaginateV["default"]);
roleSchema.plugin(_mongooseUniqueValidator["default"]);

var _default = model("Roles", roleSchema);

exports["default"] = _default;