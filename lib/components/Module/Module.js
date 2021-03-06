"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ModuleHeader = exports.ModuleBody = exports.Module = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

var propTypes = {
  children: _propTypes.default.node,
  className: _propTypes.default.string,
  size: _propTypes.default.oneOf(['single', 'double'])
};
var moduleBodyPropTypes = {
  children: _propTypes.default.node,
  centered: _propTypes.default.bool,
  className: _propTypes.default.string
};
var moduleHeaderPropTypes = {
  children: _propTypes.default.node,
  className: _propTypes.default.string
};
var defaultProps = {
  size: 'double'
};
var moduleBodydefaultProps = {
  centered: false
};

var Module = function Module(_ref) {
  var children = _ref.children,
      className = _ref.className,
      size = _ref.size,
      other = _objectWithoutProperties(_ref, ["children", "className", "size"]);

  var wrapperClasses = (0, _classnames.default)("bx--module bx--module--".concat(size), className);
  return _react.default.createElement("div", _extends({
    className: wrapperClasses
  }, other), _react.default.createElement("div", {
    className: "bx--module__inner"
  }, children));
};

exports.Module = Module;

var ModuleBody = function ModuleBody(_ref2) {
  var children = _ref2.children,
      className = _ref2.className,
      centered = _ref2.centered,
      other = _objectWithoutProperties(_ref2, ["children", "className", "centered"]);

  var wrapperClasses = (0, _classnames.default)('bx--module__content', className, {
    'bx--module__content--centered': centered
  });
  return _react.default.createElement("div", _extends({
    className: wrapperClasses
  }, other), children);
};

exports.ModuleBody = ModuleBody;

var ModuleHeader = function ModuleHeader(_ref3) {
  var children = _ref3.children,
      className = _ref3.className,
      other = _objectWithoutProperties(_ref3, ["children", "className"]);

  var wrapperClasses = (0, _classnames.default)('bx--module__header', className);
  return _react.default.createElement("div", _extends({
    className: wrapperClasses
  }, other), _react.default.createElement("h1", {
    className: "bx--module__title"
  }, children));
};

exports.ModuleHeader = ModuleHeader;
Module.propTypes = propTypes;
ModuleBody.propTypes = moduleBodyPropTypes;
Module.defaultProps = defaultProps;
ModuleBody.defaultProps = moduleBodydefaultProps;
ModuleHeader.propTypes = moduleHeaderPropTypes;