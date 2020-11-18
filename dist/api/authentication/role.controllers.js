"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.deleteRole = exports.updateRole = exports.readRole = exports.createRole = void 0;

var _role = _interopRequireDefault(require("./role.model"));

var _joi = _interopRequireDefault(require("@hapi/joi"));

var _http = require("../../res/http.res");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var createRole = function createRole(req, res) {
  var schema = _joi["default"].object().keys({
    role_name: _joi["default"].string().required(),
    is_active: _joi["default"]["boolean"]().required()
  });

  _joi["default"].validate(req.body, schema, function (error, result) {
    if (error) {
      (0, _http.badRequest)(res, error);
    } else {
      _role["default"].create(result, function (error, result) {
        if (error) {
          (0, _http.internalServerError)(res, error);
        } else {
          (0, _http.created)(res, result);
        }
      });
    }
  });
};

exports.createRole = createRole;

var readRole = function readRole(req, res) {
  var id = req.params.id;
  var _req$query = req.query,
      page = _req$query.page,
      limit = _req$query.limit;

  if (id === undefined) {
    _role["default"].paginate({}, {
      page: page || 1,
      limit: limit || 10
    }, function (error, result) {
      (0, _http.ok)(res, result);
    });
  } else {
    _role["default"].findOne({
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

exports.readRole = readRole;

var updateRole = function updateRole(req, res) {
  var id = req.params.id;

  var schema = _joi["default"].object().keys({
    role_name: _joi["default"].string().required(),
    is_active: _joi["default"]["boolean"]().required()
  });

  _joi["default"].validate(req.body, schema, function (error, result) {
    if (error) {
      (0, _http.badRequest)(res, error);
    } else {
      _role["default"].updateOne({
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

exports.updateRole = updateRole;

var deleteRole = function deleteRole(req, res) {
  var id = req.params.id;

  _role["default"].deleteOne({
    _id: id
  }, function (error, result) {
    if (error) {
      (0, _http.internalServerError)(res, error);
    } else {
      (0, _http.ok)(res, result);
    }
  });
};

exports.deleteRole = deleteRole;