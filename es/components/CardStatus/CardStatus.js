function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

import PropTypes from 'prop-types';
import React from 'react';
import classNames from 'classnames';
var appStatus = {
  RUNNING: 0,
  NOT_RUNNING: 1,
  STOPPED: 2
};

function createCardStatusContent(status, labels) {
  var cardStatusArray = ['running', 'not-running', 'stopped'];
  var statusText = cardStatusArray[status];

  if (statusText) {
    var cardStatusClassName = "bx--card-footer__app-status--".concat(statusText, " active");
    var cardStatusTextClassName = "bx--".concat(statusText, "__text");
    return React.createElement("div", {
      className: cardStatusClassName
    }, React.createElement("div", {
      className: cardStatusTextClassName
    }, labels["".concat(statusText.replace(/(-(\w))/g, function (match, separator, letter) {
      return letter.toUpperCase();
    }), "Text")]));
  }

  return '';
}

var CardStatus = function CardStatus(_ref) {
  var className = _ref.className,
      status = _ref.status,
      runningText = _ref.runningText,
      notRunningText = _ref.notRunningText,
      stoppedText = _ref.stoppedText,
      other = _objectWithoutProperties(_ref, ["className", "status", "runningText", "notRunningText", "stoppedText"]);

  var cardStatusClasses = classNames(_defineProperty({
    'bx--card-footer__app-status': true
  }, className, className));
  var labels = {
    runningText: runningText,
    notRunningText: notRunningText,
    stoppedText: stoppedText
  };
  return React.createElement("div", _extends({
    className: cardStatusClasses
  }, other), createCardStatusContent(status, labels));
};

CardStatus.propTypes = {
  status: PropTypes.number,
  className: PropTypes.string,
  runningText: PropTypes.string,
  notRunningText: PropTypes.string,
  stoppedText: PropTypes.string
};
CardStatus.defaultProps = {
  status: 0,
  runningText: 'Running',
  notRunningText: 'Not Running',
  stoppedText: 'Stopped'
};
CardStatus.appStatus = appStatus;
export default CardStatus;