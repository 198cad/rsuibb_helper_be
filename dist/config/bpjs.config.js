"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getBPJSPatientUseNIK = exports.getBPJSPatientUseNoKartu = void 0;

var _axios = _interopRequireDefault(require("axios"));

var _crypto = _interopRequireDefault(require("crypto"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var consumer_id = "2881";
var secret_key = "4eOF876F80";
var base_url = "https://dvlp.bpjs-kesehatan.go.id";
var service_name = "vclaim-rest";
var timestamp = Math.floor(Date.now() / 1000);

var generateSignature = function generateSignature(_ref) {
  var consumer_id = _ref.consumer_id,
      timestamp = _ref.timestamp,
      secret_key = _ref.secret_key;

  var hmac = _crypto["default"].createHmac("sha256", secret_key);

  hmac.update("".concat(consumer_id, "&").concat(timestamp));
  return hmac.digest("base64");
};

var headers = {
  "X-cons-id": consumer_id,
  "X-timestamp": timestamp,
  "X-signature": generateSignature({
    consumer_id: consumer_id,
    timestamp: timestamp,
    secret_key: secret_key
  })
};

var getBPJSPatientUseNoKartu = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(nokartu) {
    var response;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return (0, _axios["default"])({
              method: "GET",
              url: "".concat(base_url, "/").concat(service_name, "/Peserta/nokartu/").concat(nokartu, "/tglSEP/2020-06-10"),
              headers: headers
            });

          case 2:
            response = _context.sent;
            return _context.abrupt("return", response.data.response);

          case 4:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function getBPJSPatientUseNoKartu(_x) {
    return _ref2.apply(this, arguments);
  };
}();

exports.getBPJSPatientUseNoKartu = getBPJSPatientUseNoKartu;

var getBPJSPatientUseNIK = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(NIK) {
    var response;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return (0, _axios["default"])({
              method: "GET",
              url: "".concat(base_url, "/").concat(service_name, "/Peserta/nik/").concat(NIK, "/tglSEP/2020-06-10"),
              headers: headers
            });

          case 2:
            response = _context2.sent;
            console.log(response.data.response);

          case 4:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function getBPJSPatientUseNIK(_x2) {
    return _ref3.apply(this, arguments);
  };
}();

exports.getBPJSPatientUseNIK = getBPJSPatientUseNIK;