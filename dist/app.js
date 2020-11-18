"use strict";

var _dotenv = _interopRequireDefault(require("dotenv"));

var _express = _interopRequireDefault(require("express"));

var _morgan = _interopRequireDefault(require("morgan"));

var _bodyParser = _interopRequireDefault(require("body-parser"));

var _swaggerUiExpress = _interopRequireDefault(require("swagger-ui-express"));

var _winston = _interopRequireDefault(require("./config/winston.config"));

var _swagger = _interopRequireDefault(require("./swagger.json"));

var _mongoose = _interopRequireDefault(require("./config/mongoose.config"));

var _api = _interopRequireDefault(require("./api/api.v1"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// import swaggerJsDoc from "swagger-jsdoc";
_dotenv["default"].config();

var app = (0, _express["default"])();
app.use(_bodyParser["default"].json());
app.use(_bodyParser["default"].urlencoded({
  extended: false
})); // app.use(morgan("dev", { stream: logger.stream }));

app.use("/api-docs", _swaggerUiExpress["default"].serve, _swaggerUiExpress["default"].setup(_swagger["default"]));
app.use(_api["default"]);
app.listen(process.env.SERVER_PORT, function () {
  return console.log("Listening on http://localhost:".concat(process.env.SERVER_PORT));
});