function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } _setPrototypeOf(subClass.prototype, superClass && superClass.prototype); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.getPrototypeOf || function _getPrototypeOf(o) { return o.__proto__; }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Icon from '../Icon';
import ClickListener from '../../internal/ClickListener';

var ToolbarSearch =
/*#__PURE__*/
function (_Component) {
  function ToolbarSearch() {
    var _getPrototypeOf2;

    var _temp, _this;

    _classCallCheck(this, ToolbarSearch);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _possibleConstructorReturn(_this, (_temp = _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(ToolbarSearch)).call.apply(_getPrototypeOf2, [this].concat(args))), _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      expanded: false
    }), _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "expandSearch", function () {
      _this.setState({
        expanded: !_this.state.expanded
      });

      _this.input.focus();
    }), _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleClickOutside", function () {
      _this.setState({
        expanded: false
      });
    }), _temp));
  }

  _createClass(ToolbarSearch, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          className = _this$props.className,
          type = _this$props.type,
          id = _this$props.id,
          placeHolderText = _this$props.placeHolderText,
          labelText = _this$props.labelText,
          role = _this$props.role,
          other = _objectWithoutProperties(_this$props, ["className", "type", "id", "placeHolderText", "labelText", "role"]);

      var searchClasses = classNames(_defineProperty({
        'bx--search bx--search--sm bx--toolbar-search': true,
        'bx--toolbar-search--active': this.state.expanded
      }, className, className));
      return React.createElement(ClickListener, {
        onClickOutside: this.handleClickOutside
      }, React.createElement("div", {
        className: searchClasses,
        role: role
      }, React.createElement("label", {
        htmlFor: id,
        className: "bx--label"
      }, labelText), React.createElement("input", _extends({}, other, {
        type: type,
        className: "bx--search-input",
        id: id,
        placeholder: placeHolderText,
        ref: function ref(input) {
          _this2.input = input;
        }
      })), React.createElement("button", {
        className: "bx--toolbar-search__btn",
        onClick: this.expandSearch
      }, React.createElement(Icon, {
        name: "search--glyph",
        description: "search",
        className: "bx--search-magnifier"
      }))));
    }
  }]);

  _inherits(ToolbarSearch, _Component);

  return ToolbarSearch;
}(Component);

_defineProperty(ToolbarSearch, "propTypes", {
  children: PropTypes.node,
  className: PropTypes.string,
  type: PropTypes.string,
  small: PropTypes.bool,
  placeHolderText: PropTypes.string,
  labelText: PropTypes.string,
  id: PropTypes.string
});

_defineProperty(ToolbarSearch, "defaultProps", {
  type: 'search',
  id: 'search__input',
  labelText: '',
  placeHolderText: '',
  role: 'search'
});

export { ToolbarSearch as default };