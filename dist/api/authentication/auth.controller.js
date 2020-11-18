"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.checkToken = exports.login = void 0;

var _user = _interopRequireDefault(require("../user/user.model"));

var _bcrypt = require("bcrypt");

var _http = require("../../res/http.res");

var _jwt = require("../../config/jwt.config");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var login = function login(req, res) {
  var _req$body = req.body,
      username = _req$body.username,
      password = _req$body.password;

  _user["default"].findOne({
    username: username
  }, /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(error, docs) {
      var match, token;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (!error) {
                _context.next = 4;
                break;
              }

              (0, _http.internalServerError)(res, error);
              _context.next = 19;
              break;

            case 4:
              if (!docs) {
                _context.next = 18;
                break;
              }

              _context.next = 7;
              return (0, _bcrypt.compare)(password, docs.password);

            case 7:
              match = _context.sent;

              if (!match) {
                _context.next = 15;
                break;
              }

              _context.next = 11;
              return (0, _jwt.generateToken)(docs);

            case 11:
              token = _context.sent;
              //   Response disesuaikan dengan spesifikasi JKN Mobile BPJS
              res.status(200).json({
                response: {
                  token: token
                },
                metadata: {
                  message: "Ok",
                  code: 200
                }
              });
              _context.next = 16;
              break;

            case 15:
              (0, _http.forbidden)(res, "Password not matched !");

            case 16:
              _context.next = 19;
              break;

            case 18:
              (0, _http.notFound)(res, "data tidak ditemukan");

            case 19:
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
};

exports.login = login;

var checkToken = function checkToken(req, res) {
  var token = req.header("x-token");
  var decode = (0, _jwt.verifyToken)(token);
  var payload = decode.payload;

  if (payload !== undefined) {
    (0, _http.ok)(res, payload);
  } else {
    (0, _http.forbidden)(res, decode);
  }
};

exports.checkToken = checkToken;