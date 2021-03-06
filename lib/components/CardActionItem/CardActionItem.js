"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _Icon = _interopRequireDefault(require("../Icon"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

var CardActionItem = function CardActionItem(_ref) {
  var className = _ref.className,
      id = _ref.id,
      ariaLabel = _ref.ariaLabel,
      iconName = _ref.iconName,
      description = _ref.description,
      other = _objectWithoutProperties(_ref, ["className", "id", "ariaLabel", "iconName", "description"]);

  var cardActionItemClasses = (0, _classnames.default)(_defineProperty({
    'bx--app-actions__button': true
  }, className, className));
  return _react.default.createElement("button", _extends({}, other, {
    className: cardActionItemClasses,
    id: id,
    "aria-label": ariaLabel
  }), _react.default.createElement(_Icon.default, {
    className: "bx--app-actions__button--icon",
    name: iconName,
    description: description
  }));
};

CardActionItem.propTypes = {
  className: _propTypes.default.string,
  id: _propTypes.default.string,
  ariaLabel: _propTypes.default.string,
  iconName: _propTypes.default.string.isRequired,
  description: _propTypes.default.string.isRequired
};
CardActionItem.defaultProps = {
  ariaLabel: '',
  description: 'card action'
};
var _default = CardActionItem;
exports.default = _default;