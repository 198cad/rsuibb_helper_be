"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _auth = _interopRequireDefault(require("./authentication/auth.router"));

var _user = _interopRequireDefault(require("./user/user.router"));

var _antrean_poli = _interopRequireDefault(require("./bpjs_antrean_poli/antrean_poli.router"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var router = _express["default"].Router();

router.use("/api/v1/", _antrean_poli["default"]);
router.use("/api/v1/", _auth["default"]);
router.use("/api/v1/", _user["default"]);
var _default = router;
exports["default"] = _default;