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

var Select = function Select(_ref) {
  var className = _ref.className,
      id = _ref.id,
      inline = _ref.inline,
      labelText = _ref.labelText,
      disabled = _ref.disabled,
      children = _ref.children,
      iconDescription = _ref.iconDescription,
      hideLabel = _ref.hideLabel,
      other = _objectWithoutProperties(_ref, ["className", "id", "inline", "labelText", "disabled", "children", "iconDescription", "hideLabel"]);

  var selectClasses = (0, _classnames.default)(_defineProperty({
    'bx--select': true,
    'bx--select--inline': inline
  }, className, className));
  var labelClasses = (0, _classnames.default)('bx--label', {
    'bx--visually-hidden': hideLabel
  });
  return _react.default.createElement("div", {
    className: "bx--form-item"
  }, !inline ? _react.default.createElement("label", {
    htmlFor: id,
    className: labelClasses
  }, labelText) : null, _react.default.createElement("div", {
    className: selectClasses
  }, inline ? _react.default.createElement("label", {
    htmlFor: id,
    className: labelClasses
  }, labelText) : null, _react.default.createElement("select", _extends({}, other, {
    id: id,
    className: "bx--select-input",
    disabled: disabled
  }), children), _react.default.createElement(_Icon.default, {
    name: "caret--down",
    className: "bx--select__arrow",
    description: iconDescription
  })));
};

Select.propTypes = {
  children: _propTypes.default.node,
  className: _propTypes.default.string,
  id: _propTypes.default.string.isRequired,
  inline: _propTypes.default.bool,
  labelText: _propTypes.default.string,
  onChange: _propTypes.default.func,
  disabled: _propTypes.default.bool,
  defaultValue: _propTypes.default.any,
  iconDescription: _propTypes.default.string.isRequired,
  hideLabel: _propTypes.default.bool
};
Select.defaultProps = {
  disabled: false,
  labelText: 'Select',
  inline: false,
  iconDescription: 'open list of options'
};
var _default = Select;
exports.default = _default;