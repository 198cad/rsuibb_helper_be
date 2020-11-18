"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.compare = exports.hash = void 0;

var _bcrypt = _interopRequireDefault(require("bcrypt"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var hash = function hash(password) {
  var saltRounds = 10;

  var salt = _bcrypt["default"].genSaltSync(saltRounds);

  var hash = _bcrypt["default"].hashSync(password, salt);

  return hash;
};

exports.hash = hash;

var compare = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(password, hash) {
    var match;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return _bcrypt["default"].compare(password, hash);

          case 2:
            match = _context.sent;

            if (!match) {
              _context.next = 5;
              break;
            }

            return _context.abrupt("return", match);

          case 5:
            return _context.abrupt("return", false);

          case 6:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function compare(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.compare = compare;