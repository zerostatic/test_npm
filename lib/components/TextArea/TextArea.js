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

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

var TextArea = function TextArea(_ref) {
  var className = _ref.className,
      id = _ref.id,
      labelText = _ref.labelText,
      hideLabel = _ref.hideLabel,
      _onChange = _ref.onChange,
      _onClick = _ref.onClick,
      invalid = _ref.invalid,
      invalidText = _ref.invalidText,
      other = _objectWithoutProperties(_ref, ["className", "id", "labelText", "hideLabel", "onChange", "onClick", "invalid", "invalidText"]);

  var textareaProps = {
    id: id,
    onChange: function onChange(evt) {
      if (!other.disabled) {
        _onChange(evt);
      }
    },
    onClick: function onClick(evt) {
      if (!other.disabled) {
        _onClick(evt);
      }
    }
  };
  var textareaClasses = (0, _classnames.default)('bx--text-area', className);
  var labelClasses = (0, _classnames.default)('bx--label', {
    'bx--visually-hidden': hideLabel
  });
  var label = labelText ? _react.default.createElement("label", {
    htmlFor: id,
    className: labelClasses
  }, labelText) : null;
  var error = invalid ? _react.default.createElement("div", {
    className: "bx--form-requirement"
  }, invalidText) : null;
  var input = invalid ? _react.default.createElement("textarea", _extends({}, other, textareaProps, {
    className: textareaClasses,
    "data-invalid": true
  })) : _react.default.createElement("textarea", _extends({}, other, textareaProps, {
    className: textareaClasses
  }));
  return _react.default.createElement("div", {
    className: "bx--form-item"
  }, label, input, error);
};

TextArea.propTypes = {
  className: _propTypes.default.string,
  cols: _propTypes.default.number,
  defaultValue: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number]),
  disabled: _propTypes.default.bool,
  id: _propTypes.default.string,
  labelText: _propTypes.default.string.isRequired,
  onChange: _propTypes.default.func,
  onClick: _propTypes.default.func,
  placeholder: _propTypes.default.string,
  rows: _propTypes.default.number,
  value: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number]),
  invalid: _propTypes.default.bool,
  invalidText: _propTypes.default.string,
  hideLabel: _propTypes.default.bool
};
TextArea.defaultProps = {
  disabled: false,
  onChange: function onChange() {},
  onClick: function onClick() {},
  placeholder: '',
  rows: 4,
  cols: 50,
  invalid: false,
  invalidText: ''
};
var _default = TextArea;
exports.default = _default;