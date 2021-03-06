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

var TableHeader = function TableHeader(props) {
  var children = props.children,
      className = props.className,
      iconClassName = props.iconClassName,
      sortDir = props.sortDir,
      other = _objectWithoutProperties(props, ["children", "className", "iconClassName", "sortDir"]);

  var tableHeaderClasses = (0, _classnames.default)(className, 'bx--table-header');
  var iconClasses = (0, _classnames.default)(iconClassName, 'bx--table-sort__svg');
  var sortContent;

  if (sortDir) {
    sortContent = sortDir === 'DESC' ? _react.default.createElement(_Icon.default, {
      name: "caret--down",
      description: "descending sort",
      className: iconClasses
    }) : _react.default.createElement(_Icon.default, {
      name: "caret--up",
      description: "ascending sort",
      className: iconClasses
    });
  } else {
    sortContent = '';
  }

  return _react.default.createElement("th", _extends({}, other, {
    className: tableHeaderClasses
  }), children, sortContent);
};

TableHeader.propTypes = {
  children: _propTypes.default.node,
  className: _propTypes.default.string,
  iconClassName: _propTypes.default.string,
  sortDir: _propTypes.default.string
};
var _default = TableHeader;
exports.default = _default;