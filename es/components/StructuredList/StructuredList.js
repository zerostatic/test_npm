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

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import uid from '../../tools/uniqueId';
export var StructuredListWrapper =
/*#__PURE__*/
function (_Component) {
  function StructuredListWrapper() {
    _classCallCheck(this, StructuredListWrapper);

    return _possibleConstructorReturn(this, _getPrototypeOf(StructuredListWrapper).apply(this, arguments));
  }

  _createClass(StructuredListWrapper, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          selection = _this$props.selection,
          className = _this$props.className,
          border = _this$props.border,
          ariaLabel = _this$props.ariaLabel,
          other = _objectWithoutProperties(_this$props, ["children", "selection", "className", "border", "ariaLabel"]);

      var classes = classNames('bx--structured-list', className, {
        'bx--structured-list--border': border,
        'bx--structured-list--selection': selection
      });
      return React.createElement("section", _extends({
        className: classes
      }, other, {
        "aria-label": ariaLabel
      }), children);
    }
  }]);

  _inherits(StructuredListWrapper, _Component);

  return StructuredListWrapper;
}(Component);

_defineProperty(StructuredListWrapper, "propTypes", {
  children: PropTypes.node,
  className: PropTypes.string,
  border: PropTypes.bool,
  selection: PropTypes.bool,
  ariaLabel: PropTypes.string
});

_defineProperty(StructuredListWrapper, "defaultProps", {
  border: false,
  selection: false,
  ariaLabel: 'Structured list section'
});

export var StructuredListHead =
/*#__PURE__*/
function (_Component2) {
  function StructuredListHead() {
    _classCallCheck(this, StructuredListHead);

    return _possibleConstructorReturn(this, _getPrototypeOf(StructuredListHead).apply(this, arguments));
  }

  _createClass(StructuredListHead, [{
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          children = _this$props2.children,
          className = _this$props2.className,
          other = _objectWithoutProperties(_this$props2, ["children", "className"]);

      var classes = classNames('bx--structured-list-thead', className);
      return React.createElement("div", _extends({
        className: classes
      }, other), children);
    }
  }]);

  _inherits(StructuredListHead, _Component2);

  return StructuredListHead;
}(Component);

_defineProperty(StructuredListHead, "propTypes", {
  children: PropTypes.node,
  className: PropTypes.string
});

export var StructuredListInput =
/*#__PURE__*/
function (_Component3) {
  function StructuredListInput() {
    _classCallCheck(this, StructuredListInput);

    return _possibleConstructorReturn(this, _getPrototypeOf(StructuredListInput).apply(this, arguments));
  }

  _createClass(StructuredListInput, [{
    key: "componentWillMount",
    value: function componentWillMount() {
      this.uid = this.props.id || uid();
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props3 = this.props,
          className = _this$props3.className,
          value = _this$props3.value,
          name = _this$props3.name,
          title = _this$props3.title,
          other = _objectWithoutProperties(_this$props3, ["className", "value", "name", "title"]);

      var classes = classNames('bx--structured-list-input', className);
      return React.createElement("input", _extends({}, other, {
        type: "radio",
        tabIndex: -1,
        id: this.uid,
        className: classes,
        value: value,
        name: name,
        title: title
      }));
    }
  }]);

  _inherits(StructuredListInput, _Component3);

  return StructuredListInput;
}(Component);

_defineProperty(StructuredListInput, "propTypes", {
  className: PropTypes.string,
  id: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  name: PropTypes.string,
  title: PropTypes.string,
  defaultChecked: PropTypes.bool,
  onChange: PropTypes.func
});

_defineProperty(StructuredListInput, "defaultProps", {
  onChange: function onChange() {},
  value: 'value',
  title: 'title'
});

export var StructuredListRow =
/*#__PURE__*/
function (_Component4) {
  function StructuredListRow() {
    _classCallCheck(this, StructuredListRow);

    return _possibleConstructorReturn(this, _getPrototypeOf(StructuredListRow).apply(this, arguments));
  }

  _createClass(StructuredListRow, [{
    key: "render",
    value: function render() {
      var _this$props4 = this.props,
          onKeyDown = _this$props4.onKeyDown,
          tabIndex = _this$props4.tabIndex,
          children = _this$props4.children,
          className = _this$props4.className,
          head = _this$props4.head,
          label = _this$props4.label,
          other = _objectWithoutProperties(_this$props4, ["onKeyDown", "tabIndex", "children", "className", "head", "label"]);

      var classes = classNames('bx--structured-list-row', className, {
        'bx--structured-list-row--header-row': head
      });
      return label ? React.createElement("label", _extends({}, other, {
        tabIndex: tabIndex,
        className: classes,
        onKeyDown: onKeyDown,
        role: "presentation"
      }), children) : React.createElement("div", _extends({}, other, {
        className: classes
      }), children);
    }
  }]);

  _inherits(StructuredListRow, _Component4);

  return StructuredListRow;
}(Component);

_defineProperty(StructuredListRow, "propTypes", {
  children: PropTypes.node,
  className: PropTypes.string,
  head: PropTypes.bool,
  label: PropTypes.bool,
  tabIndex: PropTypes.number,
  onKeyDown: PropTypes.func
});

_defineProperty(StructuredListRow, "defaultProps", {
  head: false,
  label: false,
  tabIndex: 0,
  onKeyDown: function onKeyDown() {}
});

export var StructuredListBody =
/*#__PURE__*/
function (_Component5) {
  function StructuredListBody() {
    var _getPrototypeOf2;

    var _temp, _this;

    _classCallCheck(this, StructuredListBody);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _possibleConstructorReturn(_this, (_temp = _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(StructuredListBody)).call.apply(_getPrototypeOf2, [this].concat(args))), _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      labelRows: null,
      rowSelected: 0
    }), _temp));
  }

  _createClass(StructuredListBody, [{
    key: "render",
    value: function render() {
      var _this$props5 = this.props,
          children = _this$props5.children,
          className = _this$props5.className,
          other = _objectWithoutProperties(_this$props5, ["children", "className"]);

      var classes = classNames('bx--structured-list-tbody', className);
      return React.createElement("div", _extends({
        className: classes
      }, other), children);
    }
  }]);

  _inherits(StructuredListBody, _Component5);

  return StructuredListBody;
}(Component);

_defineProperty(StructuredListBody, "propTypes", {
  children: PropTypes.node,
  className: PropTypes.string,
  head: PropTypes.bool,
  onKeyDown: PropTypes.func
});

_defineProperty(StructuredListBody, "defaultProps", {
  onKeyDown: function onKeyDown() {}
});

export var StructuredListCell =
/*#__PURE__*/
function (_Component6) {
  function StructuredListCell() {
    _classCallCheck(this, StructuredListCell);

    return _possibleConstructorReturn(this, _getPrototypeOf(StructuredListCell).apply(this, arguments));
  }

  _createClass(StructuredListCell, [{
    key: "render",
    value: function render() {
      var _this$props6 = this.props,
          children = _this$props6.children,
          className = _this$props6.className,
          head = _this$props6.head,
          noWrap = _this$props6.noWrap,
          other = _objectWithoutProperties(_this$props6, ["children", "className", "head", "noWrap"]);

      var classes = classNames(className, {
        'bx--structured-list-th': head,
        'bx--structured-list-td': !head,
        'bx--structured-list-content--nowrap': noWrap
      });
      return React.createElement("div", _extends({
        className: classes
      }, other), children);
    }
  }]);

  _inherits(StructuredListCell, _Component6);

  return StructuredListCell;
}(Component);

_defineProperty(StructuredListCell, "propTypes", {
  children: PropTypes.node,
  className: PropTypes.string,
  head: PropTypes.bool,
  noWrap: PropTypes.bool
});

_defineProperty(StructuredListCell, "defaultProps", {
  head: false,
  noWrap: false
});