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
var serviceSchema = new Schema({
  service_name: {
    type: String,
    unique: true
  },
  is_active: Boolean
});
serviceSchema.plugin(_mongoosePaginateV["default"]);
serviceSchema.plugin(_mongooseUniqueValidator["default"]);

var _default = model("Services", serviceSchema);

exports["default"] = _default;