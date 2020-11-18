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
var antreanPoliSchema = new Schema({
  nomorkartu: String,
  nama: String,
  norm: String,
  nik: String,
  notelp: String,
  tanggalperiksa: String,
  kodepoli: String,
  namapoli: String,
  nomorreferensi: String,
  jenisreferensi: String,
  jenisrequest: String,
  polieksekutif: String,
  kodebooking: String,
  nomorantrean: String,
  jenisantrean: String,
  estimasidilayani: String,
  namadokter: String,
  dilayani: Boolean,
  createAt: Date,
  updateAt: Date
});
antreanPoliSchema.plugin(_mongoosePaginateV["default"]);
antreanPoliSchema.plugin(_mongooseUniqueValidator["default"]);

var _default = model("AntreanPoli", antreanPoliSchema);

exports["default"] = _default;