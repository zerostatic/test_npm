function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

import PropTypes from 'prop-types';
import React from 'react';
import classNames from 'classnames';

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
  var wrapperClasses = classNames(_defineProperty({
    'bx--form-item': true
  }, className, className));
  var checkedProps = {};

  if (typeof toggled !== 'undefined') {
    checkedProps.checked = toggled;
  } else {
    checkedProps.defaultChecked = defaultToggled;
  }

  return React.createElement("div", {
    className: wrapperClasses
  }, React.createElement("input", _extends({}, other, checkedProps, {
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
  })), React.createElement("label", {
    className: "bx--toggle__label",
    htmlFor: id
  }, React.createElement("span", {
    className: "bx--toggle__appearance"
  }, React.createElement("svg", {
    className: "bx--toggle__check",
    width: "6px",
    height: "5px",
    viewBox: "0 0 6 5"
  }, React.createElement("path", {
    d: "M2.2403 2.7299L4.9245 0 6 1.1117 2.2384 5 0 2.6863 1.0612 1.511z"
  })))));
};

ToggleSmall.propTypes = {
  /**
   * The CSS class for the toggle
   */
  className: PropTypes.string,

  /**
   * `true` to make it toggled on by default.
   */
  defaultToggled: PropTypes.bool,

  /**
   * The event handler for the `onChange` event.
   */
  onToggle: PropTypes.func,

  /**
   * The `id` attribute for the toggle
   */
  id: PropTypes.string.isRequired,

  /**
   * `true` to make it toggled on
   */
  toggled: PropTypes.bool,

  /**
   * The `aria-label` attribute for the toggle
   */
  ariaLabel: PropTypes.string.isRequired
};
ToggleSmall.defaultProps = {
  defaultToggled: false,
  onToggle: function onToggle() {}
};
export default ToggleSmall;