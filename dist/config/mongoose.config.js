"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _dotenv = _interopRequireDefault(require("dotenv"));

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_dotenv["default"].config();

var helper = "\nmongodb://".concat(process.env.MONGO_USER, ":").concat(process.env.MONGO_PASSWORD, "@").concat(process.env.MONGO_HOST, ":").concat(process.env.MONGO_PORT, "/").concat(process.env.MONGO_DB, "\n");

_mongoose["default"].connect(helper, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
}).then(function () {
  console.log("database connected ".concat(process.env.MONGO_DB, "@").concat(process.env.MONGO_HOST));
})["catch"](function (err) {
  console.log("Error saat membuat koneksi ke server mongodb");
});

var db = _mongoose["default"].connection;

_mongoose["default"].connection.on("connected", function () {
  console.log("Mongoose default connection open to ".concat(process.env.MONGO_DB, "@").concat(process.env.MONGO_HOST));
});

_mongoose["default"].connection.on("error", function (err) {
  console.log("Mongoose default connection error: ".concat(process.env.MONGO_DB, "@").concat(process.env.MONGO_HOST));
});

_mongoose["default"].connection.on("disconnected", function () {
  console.log("Mongoose default connection disconnected");
});

var _default = db;
exports["default"] = _default;