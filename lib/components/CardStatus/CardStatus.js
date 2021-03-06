"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

var appStatus = {
  RUNNING: 0,
  NOT_RUNNING: 1,
  STOPPED: 2
};

function createCardStatusContent(status, labels) {
  var cardStatusArray = ['running', 'not-running', 'stopped'];
  var statusText = cardStatusArray[status];

  if (statusText) {
    var cardStatusClassName = "bx--card-footer__app-status--".concat(statusText, " active");
    var cardStatusTextClassName = "bx--".concat(statusText, "__text");
    return _react.default.createElement("div", {
      className: cardStatusClassName
    }, _react.default.createElement("div", {
      className: cardStatusTextClassName
    }, labels["".concat(statusText.replace(/(-(\w))/g, function (match, separator, letter) {
      return letter.toUpperCase();
    }), "Text")]));
  }

  return '';
}

var CardStatus = function CardStatus(_ref) {
  var className = _ref.className,
      status = _ref.status,
      runningText = _ref.runningText,
      notRunningText = _ref.notRunningText,
      stoppedText = _ref.stoppedText,
      other = _objectWithoutProperties(_ref, ["className", "status", "runningText", "notRunningText", "stoppedText"]);

  var cardStatusClasses = (0, _classnames.default)(_defineProperty({
    'bx--card-footer__app-status': true
  }, className, className));
  var labels = {
    runningText: runningText,
    notRunningText: notRunningText,
    stoppedText: stoppedText
  };
  return _react.default.createElement("div", _extends({
    className: cardStatusClasses
  }, other), createCardStatusContent(status, labels));
};

CardStatus.propTypes = {
  status: _propTypes.default.number,
  className: _propTypes.default.string,
  runningText: _propTypes.default.string,
  notRunningText: _propTypes.default.string,
  stoppedText: _propTypes.default.string
};
CardStatus.defaultProps = {
  status: 0,
  runningText: 'Running',
  notRunningText: 'Not Running',
  stoppedText: 'Stopped'
};
CardStatus.appStatus = appStatus;
var _default = CardStatus;
exports.default = _default;