function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

import PropTypes from 'prop-types';
import React from 'react';
import classNames from 'classnames';
import Icon from '../Icon';

var CardActionItem = function CardActionItem(_ref) {
  var className = _ref.className,
      id = _ref.id,
      ariaLabel = _ref.ariaLabel,
      iconName = _ref.iconName,
      description = _ref.description,
      other = _objectWithoutProperties(_ref, ["className", "id", "ariaLabel", "iconName", "description"]);

  var cardActionItemClasses = classNames(_defineProperty({
    'bx--app-actions__button': true
  }, className, className));
  return React.createElement("button", _extends({}, other, {
    className: cardActionItemClasses,
    id: id,
    "aria-label": ariaLabel
  }), React.createElement(Icon, {
    className: "bx--app-actions__button--icon",
    name: iconName,
    description: description
  }));
};

CardActionItem.propTypes = {
  className: PropTypes.string,
  id: PropTypes.string,
  ariaLabel: PropTypes.string,
  iconName: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
};
CardActionItem.defaultProps = {
  ariaLabel: '',
  description: 'card action'
};
export default CardActionItem;