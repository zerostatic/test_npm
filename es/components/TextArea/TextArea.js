function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

import PropTypes from 'prop-types';
import React from 'react';
import classNames from 'classnames';

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
  var textareaClasses = classNames('bx--text-area', className);
  var labelClasses = classNames('bx--label', {
    'bx--visually-hidden': hideLabel
  });
  var label = labelText ? React.createElement("label", {
    htmlFor: id,
    className: labelClasses
  }, labelText) : null;
  var error = invalid ? React.createElement("div", {
    className: "bx--form-requirement"
  }, invalidText) : null;
  var input = invalid ? React.createElement("textarea", _extends({}, other, textareaProps, {
    className: textareaClasses,
    "data-invalid": true
  })) : React.createElement("textarea", _extends({}, other, textareaProps, {
    className: textareaClasses
  }));
  return React.createElement("div", {
    className: "bx--form-item"
  }, label, input, error);
};

TextArea.propTypes = {
  className: PropTypes.string,
  cols: PropTypes.number,
  defaultValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  disabled: PropTypes.bool,
  id: PropTypes.string,
  labelText: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  onClick: PropTypes.func,
  placeholder: PropTypes.string,
  rows: PropTypes.number,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  invalid: PropTypes.bool,
  invalidText: PropTypes.string,
  hideLabel: PropTypes.bool
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
export default TextArea;