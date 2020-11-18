"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _appRootPath = _interopRequireDefault(require("app-root-path"));

var _winston = _interopRequireDefault(require("winston"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var options = {
  file: {
    level: "info",
    filename: "".concat(_appRootPath["default"], "/logs/app.log"),
    handleExceptions: true,
    json: true,
    maxsize: 5242880,
    maxFiles: 5,
    colorize: false
  },
  console: {
    level: "debug",
    handleExceptions: true,
    json: false,
    colorize: true
  }
};

var logger = _winston["default"].createLogger({
  transports: [new _winston["default"].transports.File(options.file), new _winston["default"].transports.Console(options.console)],
  exitOnError: false
});

logger.stream = {
  write: function write(message, encoding) {
    logger.info(message);
  }
};
var _default = logger;
exports["default"] = _default;