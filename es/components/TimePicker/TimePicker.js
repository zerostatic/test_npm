function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } _setPrototypeOf(subClass.prototype, superClass && superClass.prototype); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.getPrototypeOf || function _getPrototypeOf(o) { return o.__proto__; }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import PropTypes from 'prop-types';
import React, { Component } from 'react';
import classNames from 'classnames';

var TimePicker =
/*#__PURE__*/
function (_Component) {
  function TimePicker(props) {
    var _this;

    _classCallCheck(this, TimePicker);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(TimePicker).call(this, props));
    _this.state = {
      value: props.value
    };
    return _this;
  }

  _createClass(TimePicker, [{
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      if (nextProps.value !== this.props.value) {
        this.setState({
          value: nextProps.value
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          children = _this$props.children,
          className = _this$props.className,
          id = _this$props.id,
          labelText = _this$props.labelText,
          type = _this$props.type,
          pattern = _this$props.pattern,
          _onChange = _this$props.onChange,
          _onClick = _this$props.onClick,
          _onBlur = _this$props.onBlur,
          placeholder = _this$props.placeholder,
          maxLength = _this$props.maxLength,
          invalidText = _this$props.invalidText,
          invalid = _this$props.invalid,
          hideLabel = _this$props.hideLabel,
          other = _objectWithoutProperties(_this$props, ["children", "className", "id", "labelText", "type", "pattern", "onChange", "onClick", "onBlur", "placeholder", "maxLength", "invalidText", "invalid", "hideLabel"]);

      var timePickerInputProps = {
        onChange: function onChange(evt) {
          if (!other.disabled) {
            _this2.setState({
              value: evt.target.value
            });

            _onChange(evt);
          }
        },
        onClick: function onClick(evt) {
          if (!other.disabled) {
            _this2.setState({
              value: evt.target.value
            });

            _onClick(evt);
          }
        },
        onBlur: function onBlur(evt) {
          if (!other.disabled) {
            _this2.setState({
              value: evt.target.value
            });

            _onBlur(evt);
          }
        },
        pattern: pattern,
        placeholder: placeholder,
        maxLength: maxLength,
        id: id,
        type: type,
        value: this.state.value
      };
      var timePickerClasses = classNames(_defineProperty({
        'bx--time-picker': true
      }, className, className));
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
      return React.createElement("div", {
        className: "bx--form-item"
      }, label, React.createElement("div", {
        className: timePickerClasses
      }, React.createElement("div", {
        className: "bx--time-picker__input"
      }, React.createElement("input", _extends({}, other, timePickerInputProps, {
        "data-invalid": invalid ? invalid : undefined,
        className: "bx--time-picker__input-field"
      })), error), children));
    }
  }]);

  _inherits(TimePicker, _Component);

  return TimePicker;
}(Component);

_defineProperty(TimePicker, "propTypes", {
  children: PropTypes.node,
  className: PropTypes.string,
  id: PropTypes.string.isRequired,
  labelText: PropTypes.string,
  onClick: PropTypes.func,
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
  type: PropTypes.string,
  pattern: PropTypes.string,
  placeholder: PropTypes.string,
  maxLength: PropTypes.number,
  invalid: PropTypes.bool,
  invalidText: PropTypes.string,
  hideLabel: PropTypes.bool,
  disabled: PropTypes.bool,
  value: PropTypes.string
});

_defineProperty(TimePicker, "defaultProps", {
  type: 'text',
  pattern: '(1[012]|[1-9]):[0-5][0-9](\\s)?(?i)',
  placeholder: 'hh:mm',
  maxLength: 5,
  invalidText: 'Invalid time format.',
  invalid: false,
  disabled: false,
  onChange: function onChange() {},
  onClick: function onClick() {},
  onBlur: function onBlur() {}
});

export { TimePicker as default };