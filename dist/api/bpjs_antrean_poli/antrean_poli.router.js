"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _antrean_poli = require("./antrean_poli.controller");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var router = _express["default"].Router();

router.post("/poli", _antrean_poli.antreanPoli);
router.post("/get-rekap-poli", _antrean_poli.rekapAntrean);
var _default = router;
exports["default"] = _default;