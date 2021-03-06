function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

import React from 'react';
import PropTypes from 'prop-types';
import ToolbarSearch from '../ToolbarSearch';
import classNames from 'classnames';

var Toolbar = function Toolbar(_ref) {
  var children = _ref.children,
      className = _ref.className,
      other = _objectWithoutProperties(_ref, ["children", "className"]);

  var wrapperClasses = classNames('bx--toolbar', className);
  return React.createElement("div", _extends({
    className: wrapperClasses
  }, other), children);
};

Toolbar.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
};
export var ToolbarItem = function ToolbarItem(_ref2) {
  var children = _ref2.children,
      type = _ref2.type,
      placeHolderText = _ref2.placeHolderText;
  var toolbarItem = type === 'search' ? React.createElement(ToolbarSearch, {
    placeHolderText: placeHolderText
  }) : children;
  return toolbarItem;
};
ToolbarItem.propTypes = {
  children: PropTypes.node,
  type: PropTypes.string,
  placeHolderText: PropTypes.string
};
ToolbarItem.defaultProps = {
  placeHolderText: 'Provide placeHolderText'
};
export var ToolbarTitle = function ToolbarTitle(_ref3) {
  var title = _ref3.title;
  return React.createElement("li", {
    className: "bx--toolbar-menu__title"
  }, title);
};
ToolbarTitle.propTypes = {
  title: PropTypes.string
};
export var ToolbarOption = function ToolbarOption(_ref4) {
  var children = _ref4.children;
  return React.createElement("li", {
    className: "bx--toolbar-menu__option"
  }, children);
};
ToolbarOption.propTypes = {
  children: PropTypes.node
};
export var ToolbarDivider = function ToolbarDivider() {
  return React.createElement("hr", {
    className: "bx--toolbar-menu__divider"
  });
};
export default Toolbar;