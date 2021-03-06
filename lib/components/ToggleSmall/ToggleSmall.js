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

var ToggleSmall = function ToggleSmall(_ref) {
  var className = _ref.className,
      defaultToggled = _ref.defaultToggled,
      toggled = _ref.toggled,
      _onChange = _ref.onChange,
      onToggle = _ref.onToggle,
      id = _ref.id,
      ariaLabel = _ref.ariaLabel,
      other = _objectWithoutProperties(_ref, ["className", "defaultToggled", "toggled", "onChange", "onToggle", "id", "ariaLabel"]);

  var input;
  var wrapperClasses = (0, _classnames.default)(_defineProperty({
    'bx--form-item': true
  }, className, className));
  var checkedProps = {};

  if (typeof toggled !== 'undefined') {
    checkedProps.checked = toggled;
  } else {
    checkedProps.defaultChecked = defaultToggled;
  }

  return _react.default.createElement("div", {
    className: wrapperClasses
  }, _react.default.createElement("input", _extends({}, other, checkedProps, {
    type: "checkbox",
    id: id,
    className: "bx--toggle bx--toggle--small",
    onChange: function onChange(evt) {
      _onChange && _onChange(evt);
      onToggle(input.checked, id, evt);
    },
    ref: function ref(el) {
      input = el;
    },
    "aria-label": ariaLabel
  })), _react.default.createElement("label", {
    className: "bx--toggle__label",
    htmlFor: id
  }, _react.default.createElement("span", {
    className: "bx--toggle__appearance"
  }, _react.default.createElement("svg", {
    className: "bx--toggle__check",
    width: "6px",
    height: "5px",
    viewBox: "0 0 6 5"
  }, _react.default.createElement("path", {
    d: "M2.2403 2.7299L4.9245 0 6 1.1117 2.2384 5 0 2.6863 1.0612 1.511z"
  })))));
};

ToggleSmall.propTypes = {
  /**
   * The CSS class for the toggle
   */
  className: _propTypes.default.string,

  /**
   * `true` to make it toggled on by default.
   */
  defaultToggled: _propTypes.default.bool,

  /**
   * The event handler for the `onChange` event.
   */
  onToggle: _propTypes.default.func,

  /**
   * The `id` attribute for the toggle
   */
  id: _propTypes.default.string.isRequired,

  /**
   * `true` to make it toggled on
   */
  toggled: _propTypes.default.bool,

  /**
   * The `aria-label` attribute for the toggle
   */
  ariaLabel: _propTypes.default.string.isRequired
};
ToggleSmall.defaultProps = {
  defaultToggled: false,
  onToggle: function onToggle() {}
};
var _default = ToggleSmall;
exports.default = _default;