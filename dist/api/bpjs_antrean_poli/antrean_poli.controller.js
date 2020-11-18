"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.rekapAntrean = exports.antreanPoli = void 0;

var _jwt = require("../../config/jwt.config");

var _http = require("../../res/http.res");

var _joi = _interopRequireDefault(require("@hapi/joi"));

var _poli = _interopRequireDefault(require("../../../poli.json"));

var _lodash = _interopRequireWildcard(require("lodash"));

var _uniqueNamesGenerator = require("unique-names-generator");

var _bpjs = require("../../config/bpjs.config");

var _moment = _interopRequireDefault(require("moment"));

var _antrean_poli = _interopRequireDefault(require("./antrean_poli.model"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var antreanPoli = function antreanPoli(req, res) {
  var match = (0, _jwt.verifyToken)(req.header("x-token"));

  if (match.payload) {
    var schema = _joi["default"].object().keys({
      nomorkartu: _joi["default"].string().required(),
      nik: _joi["default"].string(),
      notelp: _joi["default"].string(),
      tanggalperiksa: _joi["default"].string().required(),
      kodepoli: _joi["default"].string().required(),
      nomorreferensi: _joi["default"].string().required(),
      jenisreferensi: _joi["default"].number().required(),
      jenisrequest: _joi["default"].number().required(),
      polieksekutif: _joi["default"].number().required()
    });

    _joi["default"].validate(req.body, schema, /*#__PURE__*/function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(error, result) {
        var nomorkartu, nik, notelp, tanggalperiksa, kodepoli, nomorreferensi, jenisreferensi, jenisrequest, polieksekutif, _estimasidilayani, _datapengguna, _kodebooking, _namapoli, base, _nomerantrean, antrean;

        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!error) {
                  _context.next = 4;
                  break;
                }

                (0, _http.badRequest)(res, error);
                _context.next = 23;
                break;

              case 4:
                nomorkartu = result.nomorkartu, nik = result.nik, notelp = result.notelp, tanggalperiksa = result.tanggalperiksa, kodepoli = result.kodepoli, nomorreferensi = result.nomorreferensi, jenisreferensi = result.jenisreferensi, jenisrequest = result.jenisrequest, polieksekutif = result.polieksekutif;
                _context.next = 7;
                return (0, _moment["default"])("".concat(tanggalperiksa, " 00:00:00"), "YYYY-MM-DD hh:mm:ss").format("x");

              case 7:
                _estimasidilayani = _context.sent;
                _context.next = 10;
                return (0, _bpjs.getBPJSPatientUseNoKartu)(nomorkartu);

              case 10:
                _datapengguna = _context.sent;
                _context.next = 13;
                return (0, _uniqueNamesGenerator.uniqueNamesGenerator)({
                  dictionaries: [_uniqueNamesGenerator.colors, _uniqueNamesGenerator.adjectives, _uniqueNamesGenerator.names],
                  length: 3,
                  style: "upperCase"
                });

              case 13:
                _kodebooking = _context.sent;
                _context.next = 16;
                return _lodash["default"].find(_poli["default"], {
                  kdpoli: kodepoli
                });

              case 16:
                _namapoli = _context.sent;
                _context.next = 19;
                return _antrean_poli["default"].findOne({
                  kodepoli: kodepoli,
                  tanggalperiksa: tanggalperiksa
                }, {}, {
                  sort: {
                    createAt: -1
                  }
                });

              case 19:
                base = _context.sent;
                _nomerantrean = base ? "".concat(_namapoli.nmpoli.substr(0, 3).toUpperCase()).concat(parseInt(base.nomorantrean.replace(/^\D+/g, "")) + 1) : "".concat(_namapoli.nmpoli.substr(0, 3).toUpperCase(), 1);
                antrean = {
                  nomorkartu: nomorkartu,
                  nama: _datapengguna.peserta.nama,
                  norm: _datapengguna.peserta.mr.noMR || "",
                  nik: nik || "",
                  notelp: notelp || "",
                  tanggalperiksa: tanggalperiksa,
                  kodepoli: kodepoli,
                  namapoli: _namapoli.nmpoli || "",
                  nomorreferensi: nomorreferensi,
                  jenisreferensi: jenisreferensi,
                  jenisrequest: jenisrequest,
                  polieksekutif: polieksekutif,
                  kodebooking: _kodebooking,
                  nomorantrean: _nomerantrean,
                  jenisantrean: 1,
                  estimasidilayani: _estimasidilayani,
                  namadokter: "D",
                  dilayani: false,
                  createAt: Date.now(),
                  updateAt: Date.now()
                };

                _antrean_poli["default"].create(antrean, function (error, result) {
                  if (error) {
                    (0, _http.internalServerError)(res, error);
                  } else {
                    res.status(200).json({
                      response: {
                        nomorantrean: _nomerantrean,
                        kodebooking: _kodebooking,
                        jenisantrean: 1,
                        estimasidilayani: _estimasidilayani,
                        namapoli: _namapoli.nmpoli || "",
                        namadokter: ""
                      },
                      metadata: {
                        message: "Ok",
                        code: 200
                      }
                    });
                  }
                });

              case 23:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function (_x, _x2) {
        return _ref.apply(this, arguments);
      };
    }());
  } else {
    (0, _http.unAuthorized)(res, "token kadaluwarsa");
  }
};

exports.antreanPoli = antreanPoli;

var rekapAntrean = function rekapAntrean(req, res) {
  var token = req.header("x-token");
  var match = (0, _jwt.verifyToken)(token);

  if (match.payload) {
    var _req$body = req.body,
        tanggalperiksa = _req$body.tanggalperiksa,
        kodepoli = _req$body.kodepoli,
        polieksekutif = _req$body.polieksekutif;

    var schema = _joi["default"].object().keys({
      tanggalperiksa: _joi["default"].string(),
      kodepoli: _joi["default"].string(),
      polieksekutif: _joi["default"].string()
    });

    _joi["default"].validate(req.body, schema, /*#__PURE__*/function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(error, result) {
        var _yield$_$find, nmpoli, _antrean, _totalantrean, _jumlahterlayani, _response;

        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                if (!error) {
                  _context2.next = 4;
                  break;
                }

                (0, _http.badRequest)(res, error);
                _context2.next = 17;
                break;

              case 4:
                _context2.next = 6;
                return _lodash["default"].find(_poli["default"], {
                  kdpoli: kodepoli
                });

              case 6:
                _yield$_$find = _context2.sent;
                nmpoli = _yield$_$find.nmpoli;
                _context2.next = 10;
                return _antrean_poli["default"].find(req.body);

              case 10:
                _antrean = _context2.sent;
                _totalantrean = _antrean.length;
                _context2.next = 14;
                return _lodash["default"].filter(_antrean, {
                  dilayani: true
                }).length;

              case 14:
                _jumlahterlayani = _context2.sent;
                _response = {
                  response: {
                    namapoli: nmpoli,
                    totalantrean: _totalantrean,
                    jumlahterlayani: _jumlahterlayani
                  },
                  metadata: {
                    message: "Ok",
                    code: 200
                  }
                };
                res.status(200).json(_response);

              case 17:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      return function (_x3, _x4) {
        return _ref2.apply(this, arguments);
      };
    }());
  } else {
    (0, _http.unAuthorized)(res, "token kadaluwarsa");
  }
}; // {
//   "tanggalperiksa": "2019-12-11",
//   "kodepoli": "001",
//   "polieksekutif": 0
// }
// {
//   "response": {
//       "namapoli" : "Poli Jantung"
//       "totalantrean" : 100,
//       "jumlahterlayani" : 46,
//       "lastupdate" : 1576040301000
//   },
//   "metadata": {
//       "message": "Ok",
//       "code": 200
//   }
// }
// {
//   "peserta": {
//       "cob": {
//           "nmAsuransi": null,
//           "noAsuransi": null,
//           "tglTAT": null,
//           "tglTMT": null
//       },
//       "hakKelas": {
//           "keterangan": "KELAS I",
//           "kode": "1"
//       },
//       "informasi": {
//           "dinsos": null,
//           "noSKTM": null,
//           "prolanisPRB": null
//       },
//       "jenisPeserta": {
//           "keterangan": "PNS DAERAH",
//           "kode": "3"
//       },
//       "mr": {
//           "noMR": "1915",
//           "noTelepon": "081215045701"
//       },
//       "nama": "AHYANI ",
//       "nik": null,
//       "noKartu": "0000086894976",
//       "pisa": "2",
//       "provUmum": {
//           "kdProvider": "1121U031",
//           "nmProvider": "DR. RATRI S. LINA"
//       },
//       "sex": "L",
//       "statusPeserta": {
//           "keterangan": "AKTIF",
//           "kode": "0"
//       },
//       "tglCetakKartu": "2020-06-10",
//       "tglLahir": "1974-10-13",
//       "tglTAT": "2033-07-11",
//       "tglTMT": "2006-09-06",
//       "umur": {
//           "umurSaatPelayanan": "45 tahun ,8 bulan ,3 hari",
//           "umurSekarang": "46 tahun ,1 bulan ,4 hari"
//       }
//   }
// {
//   "nomorkartu": "0000000000123",
//   "nik": "3506141308950002",
//   "notelp": "081123456778",
//   "tanggalperiksa": "2019-12-11",
//   "kodepoli": "001",
//   "nomorreferensi": "0001R0040116A000001",
//   "jenisreferensi": 1,
//   "jenisrequest": 2,
//   "polieksekutif": 0
// }
// {
//   "response": {
//       "nomorantrean" : "A10",
//       "kodebooking" : "QWERTYUIO123",
//       "jenisantrean" : 2,
//       "estimasidilayani" : 1576040301000,
//       "namapoli" : "Poli Jantung",
//       "namadokter" : ""
//   },
//   "metadata": {
//       "message": "Ok",
//       "code": 200
//   }
// }


exports.rekapAntrean = rekapAntrean;