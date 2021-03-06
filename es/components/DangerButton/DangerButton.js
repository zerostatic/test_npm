function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import Button from '../Button';

var DangerButton = function DangerButton(props) {
  return React.createElement(Button, _extends({
    kind: "danger"
  }, props));
};

export default DangerButton;