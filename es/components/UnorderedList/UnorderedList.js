function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

import PropTypes from 'prop-types';
import React from 'react';
import classnames from 'classnames';

var UnorderedList = function UnorderedList(_ref) {
  var children = _ref.children,
      className = _ref.className,
      nested = _ref.nested,
      other = _objectWithoutProperties(_ref, ["children", "className", "nested"]);

  var classNames = classnames('bx--list--unordered', className, {
    'bx--list--nested': nested
  });
  return React.createElement("ul", _extends({
    className: classNames
  }, other), children);
};

UnorderedList.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  nested: PropTypes.bool
};
UnorderedList.defaultProps = {
  nested: false
};
export default UnorderedList;