"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.readUser = exports.createUser = void 0;

var _http = require("../../res/http.res");

var _user = _interopRequireDefault(require("./user.model"));

var _joi = _interopRequireDefault(require("@hapi/joi"));

var _bcrypt = require("../../config/bcrypt.config");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

/*
TODO :
- createUser *
- readUser *
- updateUser
- deleteUser
- loginUser
*/
var SERVICE_NAME = "USER";

var createUser = function createUser(req, res) {
  var METHODE_NAME = "CREATE";

  var joiSchema = _joi["default"].object().keys({
    username: _joi["default"].string().required(),
    password: _joi["default"].string().required(),
    role: _joi["default"].string().required(),
    is_active: _joi["default"]["boolean"]().required()
  });

  _joi["default"].validate(req.body, joiSchema, /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(error, result) {
      var password;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (!error) {
                _context.next = 4;
                break;
              }

              (0, _http.badRequest)(res, error);
              _context.next = 8;
              break;

            case 4:
              _context.next = 6;
              return (0, _bcrypt.hash)(result.password);

            case 6:
              password = _context.sent;

              _user["default"].create({
                username: result.username,
                password: password,
                role: result.role,
                is_active: result.is_active
              }, function (error, doc) {
                if (error) {
                  if (error._message === "Users validation failed") {
                    (0, _http.conflict)(res, error);
                  } else {
                    (0, _http.internalServerError)(res, error);
                  }
                } else {
                  (0, _http.created)(res, {
                    _id: doc._id,
                    username: doc.username,
                    role: doc.role,
                    is_active: doc.is_active
                  });
                }
              });

            case 8:
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

exports.createUser = createUser;

var readUser = function readUser(req, res) {
  var METHODE_NAME = "READ";
  var id = req.params.id;
  var _req$query = req.query,
      page = _req$query.page,
      limit = _req$query.limit;

  if (id === undefined) {
    _user["default"].paginate({}, {
      page: page || 1,
      limit: limit || 10
    }, function (error, result) {
      (0, _http.ok)(res, result);
    });
  } else {
    _user["default"].findOne({
      _id: id
    }, function (error, result) {
      if (error) {
        (0, _http.notFound)(res, error);
      } else {
        (0, _http.ok)(res, result);
      }
    });
  }
};

exports.readUser = readUser;