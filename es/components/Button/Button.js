function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

import PropTypes from 'prop-types';
import React from 'react';
import Icon from '../Icon';
import classNames from 'classnames';

var Button = function Button(_ref) {
  var children = _ref.children,
      className = _ref.className,
      disabled = _ref.disabled,
      small = _ref.small,
      kind = _ref.kind,
      href = _ref.href,
      tabIndex = _ref.tabIndex,
      type = _ref.type,
      icon = _ref.icon,
      iconDescription = _ref.iconDescription,
      other = _objectWithoutProperties(_ref, ["children", "className", "disabled", "small", "kind", "href", "tabIndex", "type", "icon", "iconDescription"]);

  var buttonClasses = classNames(className, {
    'bx--btn': true,
    'bx--btn--sm': small,
    'bx--btn--primary': kind === 'primary',
    'bx--btn--danger': kind === 'danger',
    'bx--btn--secondary': kind === 'secondary',
    'bx--btn--ghost': kind === 'ghost',
    'bx--btn--danger--primary': kind === 'danger--primary',
    'bx--btn--tertiary': kind === 'tertiary'
  });
  var commonProps = {
    tabIndex: tabIndex,
    className: buttonClasses
  };
  var buttonImage = icon ? React.createElement(Icon, {
    name: icon,
    description: iconDescription,
    className: "bx--btn__icon"
  }) : null;
  var button = React.createElement("button", _extends({}, other, commonProps, {
    disabled: disabled,
    type: type
  }), children, buttonImage);
  var anchor = React.createElement("a", _extends({}, other, commonProps, {
    href: href,
    role: "button"
  }), children, buttonImage);
  return href ? anchor : button;
};

Button.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  small: PropTypes.bool,
  kind: PropTypes.oneOf(['primary', 'secondary', 'danger', 'ghost', 'danger--primary', 'tertiary']).isRequired,
  href: PropTypes.string,
  tabIndex: PropTypes.number,
  type: PropTypes.oneOf(['button', 'reset', 'submit']),
  role: PropTypes.string,
  icon: PropTypes.string,
  iconDescription: function iconDescription(props) {
    if (props.icon && !props.iconDescription) {
      return new Error('icon property specified without also providing an iconDescription property.');
    }

    return undefined;
  }
};
Button.defaultProps = {
  iconDescription: 'Provide icon description if icon is used',
  tabIndex: 0,
  type: 'button',
  disabled: false,
  small: false,
  kind: 'primary'
};
export default Button;