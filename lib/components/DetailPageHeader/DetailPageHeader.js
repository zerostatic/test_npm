"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _lodash = _interopRequireDefault(require("lodash.debounce"));

var _windowOrGlobal = _interopRequireDefault(require("window-or-global"));

var _Breadcrumb = _interopRequireDefault(require("../Breadcrumb"));

var _Tabs = _interopRequireDefault(require("../Tabs"));

var _OverflowMenu = _interopRequireDefault(require("../OverflowMenu"));

var _Icon = _interopRequireDefault(require("../Icon"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

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

var DetailPageHeader =
/*#__PURE__*/
function (_Component) {
  function DetailPageHeader() {
    var _getPrototypeOf2;

    var _temp, _this;

    _classCallCheck(this, DetailPageHeader);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _possibleConstructorReturn(_this, (_temp = _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(DetailPageHeader)).call.apply(_getPrototypeOf2, [this].concat(args))), _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      isScrolled: _this.props.isScrolled || false,
      isScrollingDownward: _this.props.isScrollingDownward || false,
      lastPosition: 0
    }), _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleScroll", function () {
      var lastPosition = _this.state.lastPosition;
      var currentPosition = _windowOrGlobal.default.pageYOffset || 0;

      if (currentPosition > 86) {
        if (currentPosition > lastPosition) {
          _this.setState({
            isScrolled: true,
            isScrollingDownward: true,
            lastPosition: currentPosition
          });
        } else {
          _this.setState({
            isScrolled: true,
            isScrollingDownward: false,
            lastPosition: currentPosition
          });
        }
      } else {
        _this.setState({
          isScrolled: false,
          isScrollingDownward: false,
          lastPosition: currentPosition
        });
      }
    }), _temp));
  }

  _createClass(DetailPageHeader, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this._debouncedScroll = (0, _lodash.default)(this.handleScroll, 25);

      _windowOrGlobal.default.addEventListener('scroll', this._debouncedScroll);
    }
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      if (nextProps.isScrolled !== this.props.isScrolled) {
        this.setState({
          isScrolled: nextProps.isScrolled
        });
      }

      if (nextProps.isScrollingDownward !== this.props.isScrollingDownward) {
        this.setState({
          isScrollingDownward: nextProps.isScrollingDownward
        });
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      _windowOrGlobal.default.removeEventListener('scroll', this._debouncedScroll);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          title = _this$props.title,
          hasTabs = _this$props.hasTabs,
          statusColor = _this$props.statusColor,
          statusContent = _this$props.statusContent,
          statusText = _this$props.statusText,
          other = _objectWithoutProperties(_this$props, ["children", "title", "hasTabs", "statusColor", "statusContent", "statusText"]);

      var _this$state = this.state,
          isScrolled = _this$state.isScrolled,
          isScrollingDownward = _this$state.isScrollingDownward;

      var defaultIcon = _react.default.createElement("svg", {
        width: "24",
        height: "24",
        viewBox: "0 0 24 24"
      }, _react.default.createElement("path", {
        fill: "#D8D8D8",
        d: "M0 0h24v24H0z",
        fillRule: "evenodd"
      }));

      var withTabs = hasTabs ? 'bx--detail-page-header--with-tabs' : 'bx--detail-page-header--no-tabs';
      var scrolled = isScrollingDownward ? 'bx--detail-page-header--scroll' : null;
      var classNames = (0, _classnames.default)('bx--detail-page-header', withTabs, scrolled);
      var breadcrumb;
      var tabs;
      var overflow;
      var icon;

      _react.Children.map(children, function (child) {
        if (child.type === _Breadcrumb.default) {
          breadcrumb = child;
        }

        if (child.type === _Tabs.default) {
          tabs = child;
        }

        if (child.type === _OverflowMenu.default) {
          overflow = child;
        }

        if (child.type === _Icon.default) {
          icon = child;
        }

        return null;
      });

      var statusStyles = {
        backgroundColor: statusColor
      };
      icon = icon === undefined ? defaultIcon : icon;
      return _react.default.createElement("header", _extends({}, other, {
        className: classNames,
        "data-header-active": isScrolled
      }), _react.default.createElement("div", {
        className: "bx--detail-page-header-content"
      }, breadcrumb, _react.default.createElement("div", {
        className: "bx--detail-page-header-title-container"
      }, _react.default.createElement("div", {
        className: "bx--detail-page-header-icon-container"
      }, icon), _react.default.createElement("h1", {
        className: "bx--detail-page-header-title"
      }, title), _react.default.createElement("div", {
        className: "bx--detail-page-header-status-container"
      }, _react.default.createElement("div", {
        style: statusStyles,
        className: "bx--detail-page-header-status-icon"
      }), ' ', _react.default.createElement("span", {
        className: "bx--detail-page-header-status-text"
      }, statusText, statusContent))), tabs), _react.default.createElement("div", {
        className: "bx--detail-page-header-menu"
      }, overflow));
    }
  }]);

  _inherits(DetailPageHeader, _Component);

  return DetailPageHeader;
}(_react.Component);

exports.default = DetailPageHeader;

_defineProperty(DetailPageHeader, "propTypes", {
  children: _propTypes.default.node,
  title: _propTypes.default.string.isRequired,
  role: _propTypes.default.string,
  statusColor: _propTypes.default.string,
  statusContent: _propTypes.default.node,
  statusText: _propTypes.default.string,
  hasTabs: _propTypes.default.bool,
  isScrolled: _propTypes.default.bool,
  isScrollingDownward: _propTypes.default.bool
});

_defineProperty(DetailPageHeader, "defaultProps", {
  title: 'Provide a title',
  statusText: 'Running',
  role: 'banner',
  // a11y compliance
  hasTabs: false
});