"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.roles = void 0;

var roles = function roles() {
  for (var _len = arguments.length, roles = new Array(_len), _key = 0; _key < _len; _key++) {
    roles[_key] = arguments[_key];
  }

  return function (req, res, next) {
    res.json({
      message: roles
    });
  };
};

exports.roles = roles;