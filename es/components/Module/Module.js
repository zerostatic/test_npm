function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

import PropTypes from 'prop-types';
import React from 'react';
import classNames from 'classnames';
var propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  size: PropTypes.oneOf(['single', 'double'])
};
var moduleBodyPropTypes = {
  children: PropTypes.node,
  centered: PropTypes.bool,
  className: PropTypes.string
};
var moduleHeaderPropTypes = {
  children: PropTypes.node,
  className: PropTypes.string
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

  var wrapperClasses = classNames("bx--module bx--module--".concat(size), className);
  return React.createElement("div", _extends({
    className: wrapperClasses
  }, other), React.createElement("div", {
    className: "bx--module__inner"
  }, children));
};

var ModuleBody = function ModuleBody(_ref2) {
  var children = _ref2.children,
      className = _ref2.className,
      centered = _ref2.centered,
      other = _objectWithoutProperties(_ref2, ["children", "className", "centered"]);

  var wrapperClasses = classNames('bx--module__content', className, {
    'bx--module__content--centered': centered
  });
  return React.createElement("div", _extends({
    className: wrapperClasses
  }, other), children);
};

var ModuleHeader = function ModuleHeader(_ref3) {
  var children = _ref3.children,
      className = _ref3.className,
      other = _objectWithoutProperties(_ref3, ["children", "className"]);

  var wrapperClasses = classNames('bx--module__header', className);
  return React.createElement("div", _extends({
    className: wrapperClasses
  }, other), React.createElement("h1", {
    className: "bx--module__title"
  }, children));
};

Module.propTypes = propTypes;
ModuleBody.propTypes = moduleBodyPropTypes;
Module.defaultProps = defaultProps;
ModuleBody.defaultProps = moduleBodydefaultProps;
ModuleHeader.propTypes = moduleHeaderPropTypes;
export { Module, ModuleBody, ModuleHeader };