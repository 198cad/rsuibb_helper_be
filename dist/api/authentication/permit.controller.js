"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updatePermit = exports.readPermit = exports.createPermit = void 0;

var _joi = _interopRequireDefault(require("@hapi/joi"));

var _http = require("../../res/http.res");

var _permit = _interopRequireDefault(require("./permit.model"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var createPermit = function createPermit(req, res) {
  var schema = _joi["default"].object().keys({
    role: _joi["default"].string().required(),
    service: _joi["default"].string().required(),
    create: _joi["default"]["boolean"]().required(),
    read: _joi["default"]["boolean"]().required(),
    update: _joi["default"]["boolean"]().required(),
    "delete": _joi["default"]["boolean"]().required(),
    search: _joi["default"]["boolean"]().required(),
    print: _joi["default"]["boolean"]().required(),
    report: _joi["default"]["boolean"]().required(),
    strict: _joi["default"]["boolean"]().required()
  });

  _joi["default"].validate(req.body, schema, function (error, result) {
    if (error) {
      (0, _http.badRequest)(res, error);
    } else {
      _permit["default"].create(result, function (error, result) {
        if (error) {
          (0, _http.internalServerError)(res, error);
        } else {
          (0, _http.created)(res, result);
        }
      });
    }
  });
};

exports.createPermit = createPermit;

var readPermit = function readPermit(req, res) {
  var id = req.params.id;
  var _req$query = req.query,
      page = _req$query.page,
      limit = _req$query.limit,
      role = _req$query.role,
      service = _req$query.service;

  if (role !== undefined) {
    _permit["default"].paginate({}, {
      page: page || 1,
      limit: limit || 10,
      populate: [{
        path: "role",
        match: {
          role_name: role || ""
        }
      }, {
        path: "service",
        match: {
          service: service || ""
        }
      }]
    }, function (error, result) {
      if (error) {
        (0, _http.internalServerError)(res, error);
      } else {
        (0, _http.ok)(res, result);
      }
    });
  } else if (service !== undefined) {
    _permit["default"].paginate({}, {
      page: page || 1,
      limit: limit || 10,
      populate: [{
        path: "role",
        match: {
          role_name: role || ""
        }
      }, {
        path: "service",
        match: {
          service: service || ""
        }
      }]
    }, function (error, result) {
      if (error) {
        (0, _http.internalServerError)(res, error);
      } else {
        (0, _http.ok)(res, result);
      }
    });
  } else {
    if (id === undefined) {
      _permit["default"].paginate({}, {
        page: page || 1,
        limit: limit || 10
      }, function (error, result) {
        (0, _http.ok)(res, result);
      });
    } else {
      _permit["default"].findOne({
        _id: id
      }, function (error, result) {
        if (error) {
          notFound(res, error);
        } else {
          (0, _http.ok)(res, result);
        }
      });
    }
  }
};

exports.readPermit = readPermit;

var updatePermit = function updatePermit(req, res) {
  var id = req.params.id;

  var schema = _joi["default"].object().keys({
    role: _joi["default"].string().required(),
    service: _joi["default"].string().required(),
    create: _joi["default"]["boolean"]().required(),
    read: _joi["default"]["boolean"]().required(),
    update: _joi["default"]["boolean"]().required(),
    "delete": _joi["default"]["boolean"]().required(),
    search: _joi["default"]["boolean"]().required(),
    print: _joi["default"]["boolean"]().required(),
    report: _joi["default"]["boolean"]().required(),
    strict: _joi["default"]["boolean"]().required()
  });

  _joi["default"].validate(req.body, schema, function (error, result) {
    if (error) {
      (0, _http.badRequest)(res, error);
    } else {
      _permit["default"].updateOne({
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

exports.updatePermit = updatePermit;