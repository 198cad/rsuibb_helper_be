"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.verifyToken = exports.generateRefreshToken = exports.generateToken = void 0;

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

var _dotenv = _interopRequireDefault(require("dotenv"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_dotenv["default"].config();

var generateToken = function generateToken(payload) {
  var token = _jsonwebtoken["default"].sign({
    payload: payload
  }, process.env.JWT_SECRET, {
    expiresIn: "1d"
  });

  return token;
};

exports.generateToken = generateToken;

var generateRefreshToken = function generateRefreshToken(payload) {
  var token = _jsonwebtoken["default"].sign({
    payload: payload
  }, process.env.JWT_SECRET_REFRESH, {
    expiresIn: "7d"
  });
};

exports.generateRefreshToken = generateRefreshToken;

var verifyToken = function verifyToken(token) {
  try {
    return _jsonwebtoken["default"].verify(token, process.env.JWT_SECRET);
  } catch (error) {
    return error;
  }
};

exports.verifyToken = verifyToken;