"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.deleteService = exports.updateService = exports.readService = exports.createService = void 0;

var _service = _interopRequireDefault(require("./service.model"));

var _joi = _interopRequireDefault(require("@hapi/joi"));

var _http = require("../../res/http.res");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var SERVICE_NAME = "SERVICE";

var createService = function createService(req, res) {
  var schema = _joi["default"].object().keys({
    service_name: _joi["default"].string().required().min(2),
    is_active: _joi["default"]["boolean"]().required()
  });

  _joi["default"].validate(req.body, schema, function (err, result) {
    if (err) {
      (0, _http.badRequest)(res, err);
    } else {
      _service["default"].create(result, function (err, doc) {
        if (err) {
          (0, _http.internalServerError)(res, err);
        } else {
          (0, _http.created)(res, doc);
        }
      });
    }
  });
};

exports.createService = createService;

var readService = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
    var id, _req$query, page, limit;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            id = req.params.id;
            _req$query = req.query, page = _req$query.page, limit = _req$query.limit;

            if (id === undefined) {
              _service["default"].paginate({}, {
                page: page || 1,
                limit: limit || 10
              }, function (error, result) {
                (0, _http.ok)(res, result);
              });
            } else {
              _service["default"].findOne({
                _id: id
              }, function (error, result) {
                if (error) {
                  (0, _http.notFound)(res, error);
                } else {
                  (0, _http.ok)(res, result);
                }
              });
            }

          case 3:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function readService(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.readService = readService;

var updateService = function updateService(req, res) {
  var id = req.params.id;

  var schema = _joi["default"].object().keys({
    service_name: _joi["default"].string().required().min(2),
    is_active: _joi["default"]["boolean"]().required()
  });

  _joi["default"].validate(req.body, schema, function (error, result) {
    if (error) {
      (0, _http.badRequest)(res, error);
    } else {
      _service["default"].updateOne({
        _id: id
      }, {
        $set: result
      }, function (error, result) {
        if (error) {
          (0, _http.internalServerError)(res, error);
        } else {
          (0, _http.ok)(res, result);
        }
      });
    }
  });
};

exports.updateService = updateService;

var deleteService = function deleteService(req, res) {
  var id = req.params.id;

  _service["default"].deleteOne({
    _id: id
  }, function (error, result) {
    if (error) {
      (0, _http.internalServerError)(res, error);
    } else {
      (0, _http.ok)(res, result);
    }
  });
};

exports.deleteService = deleteService;