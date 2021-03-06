function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } _setPrototypeOf(subClass.prototype, superClass && superClass.prototype); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.getPrototypeOf || function _getPrototypeOf(o) { return o.__proto__; }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import PropTypes from 'prop-types';
import React, { Component } from 'react';
import classnames from 'classnames';
export var ProgressStep = function ProgressStep(_ref) {
  var props = _extends({}, _ref);

  var label = props.label,
      description = props.description,
      className = props.className,
      current = props.current,
      complete = props.complete;
  var classes = classnames(_defineProperty({
    'bx--progress-step': true,
    'bx--progress-step--current': current,
    'bx--progress-step--complete': complete,
    'bx--progress-step--incomplete': !complete && !current
  }, className, className));
  var currentSvg = current && React.createElement("g", null, React.createElement("circle", {
    stroke: "#3d70b2",
    strokeWidth: "5",
    fill: "transparent",
    cx: "12",
    cy: "12",
    r: "12"
  }), React.createElement("circle", {
    fill: "#3d70b2",
    cx: "12",
    cy: "12",
    r: "6"
  }));
  var completeSvg = complete && React.createElement("g", null, React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "12"
  }), React.createElement("polygon", {
    points: "10.3 13.6 7.7 11 6.3 12.4 10.3 16.4 17.8 9 16.4 7.6"
  }));
  var incompleteSvg = !complete && React.createElement("g", null, React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "12"
  }));
  return React.createElement("li", {
    className: classes
  }, React.createElement("svg", null, React.createElement("title", null, description), currentSvg || completeSvg || incompleteSvg), React.createElement("p", {
    className: "bx--progress-label"
  }, label), React.createElement("span", {
    className: "bx--progress-line"
  }));
};
ProgressStep.propTypes = {
  label: PropTypes.string.isRequired,
  className: PropTypes.string,
  current: PropTypes.bool,
  complete: PropTypes.bool,
  description: PropTypes.string
};
export var ProgressIndicator =
/*#__PURE__*/
function (_Component) {
  function ProgressIndicator() {
    var _getPrototypeOf2;

    var _temp, _this;

    _classCallCheck(this, ProgressIndicator);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _possibleConstructorReturn(_this, (_temp = _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(ProgressIndicator)).call.apply(_getPrototypeOf2, [this].concat(args))), _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      currentIndex: _this.props.currentIndex
    }), _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "renderSteps", function () {
      return React.Children.map(_this.props.children, function (child, index) {
        if (index === _this.state.currentIndex) {
          return React.cloneElement(child, {
            current: true
          });
        } else if (index < _this.state.currentIndex) {
          return React.cloneElement(child, {
            complete: true
          });
        } else if (index > _this.state.currentIndex) {
          return React.cloneElement(child, {
            complete: false
          });
        }

        return null;
      });
    }), _temp));
  }

  _createClass(ProgressIndicator, [{
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      if (nextProps.currentIndex !== this.props.currentIndex) {
        this.setState({
          currentIndex: nextProps.currentIndex
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          className = _this$props.className,
          currentIndex = _this$props.currentIndex,
          other = _objectWithoutProperties(_this$props, ["className", "currentIndex"]); // eslint-disable-line no-unused-vars


      var classes = classnames(_defineProperty({
        'bx--progress': true
      }, className, className));
      return React.createElement("ul", _extends({
        className: classes
      }, other), this.renderSteps());
    }
  }]);

  _inherits(ProgressIndicator, _Component);

  return ProgressIndicator;
}(Component);

_defineProperty(ProgressIndicator, "propTypes", {
  children: PropTypes.node,
  className: PropTypes.string,
  currentIndex: PropTypes.number
});

_defineProperty(ProgressIndicator, "defaultProps", {
  currentIndex: 0
});