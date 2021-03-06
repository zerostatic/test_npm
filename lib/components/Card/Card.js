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

var Card = function Card(_ref) {
  var children = _ref.children,
      className = _ref.className,
      tabIndex = _ref.tabIndex,
      other = _objectWithoutProperties(_ref, ["children", "className", "tabIndex"]);

  var cardClasses = (0, _classnames.default)(_defineProperty({
    'bx--card': true
  }, className, className));
  return _react.default.createElement("div", _extends({}, other, {
    className: cardClasses,
    tabIndex: tabIndex
  }), children);
};

Card.propTypes = {
  children: _propTypes.default.node,
  className: _propTypes.default.string,
  tabIndex: _propTypes.default.number,
  onBlur: _propTypes.default.func,
  onClick: _propTypes.default.func,
  onFocus: _propTypes.default.func,
  onKeyDown: _propTypes.default.func,
  onKeyUp: _propTypes.default.func,
  onMouseDown: _propTypes.default.func,
  onMouseEnter: _propTypes.default.func,
  onMouseLeave: _propTypes.default.func,
  onMouseUp: _propTypes.default.func
};
Card.defaultProps = {
  tabIndex: 0
};
var _default = Card;
exports.default = _default;