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

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

var TableData = function TableData(props) {
  var children = props.children,
      className = props.className,
      iconClassName = props.iconClassName,
      expanded = props.expanded,
      other = _objectWithoutProperties(props, ["children", "className", "iconClassName", "expanded"]);

  var tableDataClasses = (0, _classnames.default)(className);
  var iconClasses = (0, _classnames.default)(iconClassName, 'bx--table-expand__svg');
  var style = expanded ? {
    transform: 'rotate(90deg)'
  } : {};
  return _react.default.createElement("td", _extends({}, other, {
    className: tableDataClasses
  }), expanded === undefined ? children : _react.default.createElement(_Icon.default, {
    className: iconClasses,
    name: "chevron--right",
    description: "expand row",
    style: style,
    tabIndex: 0,
    onKeyPress: function onKeyPress(evt) {
      if (props.onClick && (evt.which === 13 || evt.which === 32)) {
        props.onClick(evt);
      }
    }
  }));
};

TableData.propTypes = {
  children: _propTypes.default.node,
  className: _propTypes.default.string,
  iconClassName: _propTypes.default.string,
  expanded: _propTypes.default.bool
};
var _default = TableData;
exports.default = _default;