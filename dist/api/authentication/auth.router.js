"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _permit = require("./permit.controller");

var _auth = require("./auth.controller");

var _service = require("./service.controller");

var _role = require("./role.controllers");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var router = _express["default"].Router();

router.post("/auth/service", _service.createService);
router.get("/auth/service/:id?", _service.readService);
router.patch("/auth/service/:id", _service.updateService);
router["delete"]("/auth/service/:id", _service.deleteService);
router.post("/auth/login", _auth.login);
router.get("/auth/token", _auth.checkToken);
router.post("/auth/role", _role.createRole);
router.get("/auth/role/:id?", _role.readRole);
router.patch("/auth/role/:id", _role.updateRole);
router["delete"]("/auth/role/:id", _role.deleteRole);
router.post("/auth/permit", _permit.createPermit);
router.get("/auth/permit/:id?", _permit.readPermit);
var _default = router;
exports["default"] = _default;