"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } _setPrototypeOf(subClass.prototype, superClass && superClass.prototype); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.getPrototypeOf || function _getPrototypeOf(o) { return o.__proto__; }; return _getPrototypeOf(o); }

var TabsSkeleton =
/*#__PURE__*/
function (_React$Component) {
  function TabsSkeleton() {
    _classCallCheck(this, TabsSkeleton);

    return _possibleConstructorReturn(this, _getPrototypeOf(TabsSkeleton).apply(this, arguments));
  }

  _createClass(TabsSkeleton, [{
    key: "render",
    value: function render() {
      var tab = _react.default.createElement("li", {
        className: "bx--tabs__nav-item"
      }, _react.default.createElement("a", {
        className: "bx--tabs__nav-link",
        href: "javascript:void(0)"
      }, "\xA0"));

      return _react.default.createElement("nav", {
        className: "bx--tabs bx--skeleton"
      }, _react.default.createElement("div", {
        className: "bx--tabs-trigger"
      }, _react.default.createElement("a", {
        href: "javascript:void(0)",
        className: "bx--tabs-trigger-text"
      }, "\xA0"), _react.default.createElement("svg", {
        width: "10",
        height: "5",
        viewBox: "0 0 10 5",
        "fill-rule": "evenodd"
      }, _react.default.createElement("path", {
        d: "M10 0L5 5 0 0z"
      }))), _react.default.createElement("ul", {
        className: "bx--tabs__nav bx--tabs__nav--hidden"
      }, _react.default.createElement("li", {
        className: "bx--tabs__nav-item bx--tabs__nav-item--selected"
      }, _react.default.createElement("a", {
        className: "bx--tabs__nav-link",
        href: "javascript:void(0)"
      }, "\xA0")), tab, tab, tab));
    }
  }]);

  _inherits(TabsSkeleton, _React$Component);

  return TabsSkeleton;
}(_react.default.Component);

exports.default = TabsSkeleton;