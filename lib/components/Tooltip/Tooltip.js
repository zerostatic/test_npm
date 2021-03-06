"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _lodash = _interopRequireDefault(require("lodash.debounce"));

var _Icon = _interopRequireDefault(require("../Icon"));

var _classnames = _interopRequireDefault(require("classnames"));

var _FloatingMenu = _interopRequireWildcard(require("../../internal/FloatingMenu"));

var _ClickListener = _interopRequireDefault(require("../../internal/ClickListener"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

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

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * @param {Element} menuBody The menu body with the menu arrow.
 * @param {string} menuDirection Where the floating menu menu should be placed relative to the trigger button.
 * @returns {FloatingMenu~offset} The adjustment of the floating menu position, upon the position of the menu arrow.
 * @private
 */
var getMenuOffset = function getMenuOffset(menuBody, menuDirection) {
  var _DIRECTION_LEFT$DIREC, _DIRECTION_LEFT$DIREC2;

  var arrowStyle = menuBody.ownerDocument.defaultView.getComputedStyle(menuBody, ':before');
  var arrowPositionProp = (_DIRECTION_LEFT$DIREC = {}, _defineProperty(_DIRECTION_LEFT$DIREC, _FloatingMenu.DIRECTION_LEFT, 'right'), _defineProperty(_DIRECTION_LEFT$DIREC, _FloatingMenu.DIRECTION_TOP, 'bottom'), _defineProperty(_DIRECTION_LEFT$DIREC, _FloatingMenu.DIRECTION_RIGHT, 'left'), _defineProperty(_DIRECTION_LEFT$DIREC, _FloatingMenu.DIRECTION_BOTTOM, 'top'), _DIRECTION_LEFT$DIREC)[menuDirection];
  var menuPositionAdjustmentProp = (_DIRECTION_LEFT$DIREC2 = {}, _defineProperty(_DIRECTION_LEFT$DIREC2, _FloatingMenu.DIRECTION_LEFT, 'left'), _defineProperty(_DIRECTION_LEFT$DIREC2, _FloatingMenu.DIRECTION_TOP, 'top'), _defineProperty(_DIRECTION_LEFT$DIREC2, _FloatingMenu.DIRECTION_RIGHT, 'left'), _defineProperty(_DIRECTION_LEFT$DIREC2, _FloatingMenu.DIRECTION_BOTTOM, 'top'), _DIRECTION_LEFT$DIREC2)[menuDirection];
  var values = [arrowPositionProp, 'border-bottom-width'].reduce(function (o, name) {
    return _objectSpread({}, o, _defineProperty({}, name, Number((/^([\d-]+)px$/.exec(arrowStyle.getPropertyValue(name)) || [])[1])));
  }, {});
  values[arrowPositionProp] = values[arrowPositionProp] || -6; // IE, etc.

  if (Object.keys(values).every(function (name) {
    return !isNaN(values[name]);
  })) {
    var arrowPosition = values[arrowPositionProp],
        borderBottomWidth = values['border-bottom-width'];
    return _defineProperty({
      left: 0,
      top: 0
    }, menuPositionAdjustmentProp, Math.sqrt(Math.pow(borderBottomWidth, 2) * 2) - arrowPosition);
  }
};

var Tooltip =
/*#__PURE__*/
function (_Component) {
  function Tooltip() {
    var _getPrototypeOf2;

    var _temp, _this;

    _classCallCheck(this, Tooltip);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _possibleConstructorReturn(_this, (_temp = _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Tooltip)).call.apply(_getPrototypeOf2, [this].concat(args))), _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "_hasContextMenu", false), _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "_tooltipEl", null), _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      open: _this.props.open
    }), _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "getTriggerPosition", function () {
      if (_this.triggerEl) {
        var triggerPosition = _this.triggerEl.getBoundingClientRect();

        _this.setState({
          triggerPosition: triggerPosition
        });
      }
    }), _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "_handleHover", function (state, relatedTarget) {
      if (state === 'over') {
        _this.getTriggerPosition();

        _this.setState({
          open: true
        });
      } else {
        // Note: SVGElement in IE11 does not have `.contains()`
        var shouldPreventClose = relatedTarget && (_this.triggerEl && _this.triggerEl.contains && _this.triggerEl.contains(relatedTarget) || _this._tooltipEl && _this._tooltipEl.contains(relatedTarget));

        if (!shouldPreventClose) {
          _this.setState({
            open: false
          });
        }
      }
    }), _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "_debouncedHandleHover", (0, _lodash.default)(_this._handleHover, 200)), _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleMouse", function (evt) {
      var state = typeof evt === 'string' ? evt : {
        mouseover: 'over',
        mouseout: 'out',
        focus: 'over',
        blur: 'out'
      }[evt.type];
      var hadContextMenu = _this._hasContextMenu;
      _this._hasContextMenu = evt.type === 'contextmenu';

      if (_this.props.clickToOpen) {
        if (state === 'click') {
          _this.setState({
            open: !_this.state.open
          });
        }
      } else if (state && (state !== 'out' || !hadContextMenu)) {
        _this._debouncedHandleHover(state, evt.relatedTarget);
      }
    }), _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleClickOutside", function (evt) {
      var shouldPreventClose = evt && evt.target && _this._tooltipEl && _this._tooltipEl.contains(evt.target);

      if (!shouldPreventClose) {
        _this.setState({
          open: false
        });
      }
    }), _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleKeyPress", function (evt) {
      var key = evt.key || evt.which;

      if (key === 'Enter' || key === 13 || key === ' ' || key === 32) {
        _this.setState({
          open: !_this.state.open
        });
      }
    }), _temp));
  }

  _createClass(Tooltip, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      requestAnimationFrame(function () {
        _this2.getTriggerPosition();
      });
    }
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(_ref2) {
      var open = _ref2.open;

      /**
       * so that tooltip can be controlled programmatically through this `open` prop
       */
      var origOpen = this.props.open;

      if (origOpen !== open) {
        this.setState({
          open: open
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var _this$props = this.props,
          _this$props$triggerId = _this$props.triggerId,
          triggerId = _this$props$triggerId === void 0 ? this.triggerId = this.triggerId || "__carbon-tooltip-trigger_".concat(Math.random().toString(36).substr(2)) : _this$props$triggerId,
          _this$props$tooltipId = _this$props.tooltipId,
          tooltipId = _this$props$tooltipId === void 0 ? this.tooltipId = this.tooltipId || "__carbon-tooltip_".concat(Math.random().toString(36).substr(2)) : _this$props$tooltipId,
          children = _this$props.children,
          className = _this$props.className,
          triggerClassName = _this$props.triggerClassName,
          direction = _this$props.direction,
          triggerText = _this$props.triggerText,
          showIcon = _this$props.showIcon,
          iconName = _this$props.iconName,
          iconDescription = _this$props.iconDescription,
          menuOffset = _this$props.menuOffset,
          clickToOpen = _this$props.clickToOpen,
          other = _objectWithoutProperties(_this$props, ["triggerId", "tooltipId", "children", "className", "triggerClassName", "direction", "triggerText", "showIcon", "iconName", "iconDescription", "menuOffset", "clickToOpen"]);

      var open = this.state.open;
      var tooltipClasses = (0, _classnames.default)('bx--tooltip', {
        'bx--tooltip--shown': open
      }, className);
      var triggerClasses = (0, _classnames.default)('bx--tooltip__trigger', triggerClassName);
      return _react.default.createElement("div", null, _react.default.createElement(_ClickListener.default, {
        onClickOutside: this.handleClickOutside
      }, showIcon ? _react.default.createElement("div", {
        className: triggerClasses
      }, triggerText, _react.default.createElement("div", {
        id: triggerId,
        role: "button",
        tabIndex: "0",
        onMouseOver: function onMouseOver(evt) {
          return _this3.handleMouse(evt);
        },
        onMouseOut: function onMouseOut(evt) {
          return _this3.handleMouse(evt);
        },
        onFocus: function onFocus(evt) {
          return _this3.handleMouse(evt);
        },
        onBlur: function onBlur(evt) {
          return _this3.handleMouse(evt);
        },
        "aria-haspopup": "true",
        "aria-owns": tooltipId,
        "aria-expanded": open
      }, _react.default.createElement(_Icon.default, {
        onKeyDown: this.handleKeyPress,
        onClick: function onClick() {
          return _this3.handleMouse('click');
        },
        name: iconName,
        description: iconDescription,
        iconRef: function iconRef(node) {
          _this3.triggerEl = node;
        }
      }))) : _react.default.createElement("div", {
        id: triggerId,
        className: triggerClasses,
        ref: function ref(node) {
          _this3.triggerEl = node;
        },
        onMouseOver: function onMouseOver(evt) {
          return _this3.handleMouse(evt);
        },
        onMouseOut: function onMouseOut(evt) {
          return _this3.handleMouse(evt);
        },
        onFocus: function onFocus(evt) {
          return _this3.handleMouse(evt);
        },
        onBlur: function onBlur(evt) {
          return _this3.handleMouse(evt);
        },
        "aria-haspopup": "true",
        "aria-owns": tooltipId,
        "aria-expanded": open
      }, triggerText)), open && _react.default.createElement(_FloatingMenu.default, {
        menuPosition: this.state.triggerPosition,
        menuDirection: direction,
        menuOffset: menuOffset
      }, _react.default.createElement("div", _extends({
        id: tooltipId,
        className: tooltipClasses
      }, other, {
        "data-floating-menu-direction": direction,
        "aria-labelledby": triggerId,
        onMouseOver: function onMouseOver(evt) {
          return _this3.handleMouse(evt);
        },
        onMouseOut: function onMouseOut(evt) {
          return _this3.handleMouse(evt);
        },
        onFocus: function onFocus(evt) {
          return _this3.handleMouse(evt);
        },
        onBlur: function onBlur(evt) {
          return _this3.handleMouse(evt);
        },
        onContextMenu: function onContextMenu(evt) {
          return _this3.handleMouse(evt);
        },
        ref: function ref(node) {
          _this3._tooltipEl = node;
        }
      }), children)));
    }
  }]);

  _inherits(Tooltip, _Component);

  return Tooltip;
}(_react.Component);

exports.default = Tooltip;

_defineProperty(Tooltip, "propTypes", {
  /**
   * The ID of the trigger button.
   */
  triggerId: _propTypes.default.string,

  /**
   * The ID of the tooltip content.
   */
  tooltipId: _propTypes.default.string,

  /**
   * Open/closed state.
   */
  open: _propTypes.default.bool,

  /**
   * Contents to put into the tooltip.
   */
  children: _propTypes.default.node,

  /**
   * The CSS class names of the tooltip.
   */
  className: _propTypes.default.string,

  /**
   * The CSS class names of the trigger UI.
   */
  triggerClassName: _propTypes.default.string,

  /**
   * Where to put the tooltip, relative to the trigger UI.
   */
  direction: _propTypes.default.oneOf(['bottom', 'top', 'left', 'right']),

  /**
   * The adjustment of the tooltip position.
   */
  menuOffset: _propTypes.default.oneOfType([_propTypes.default.shape({
    top: _propTypes.default.number,
    left: _propTypes.default.number
  }), _propTypes.default.func]),

  /**
   * The content to put into the trigger UI, except the (default) tooltip icon.
   */
  triggerText: _propTypes.default.node,

  /**
   * `true` to show the default tooltip icon.
   */
  showIcon: _propTypes.default.bool,

  /**
   * The name of the default tooltip icon.
   */
  iconName: _propTypes.default.string,

  /**
   * The description of the default tooltip icon, to be put in its SVG `<title>` element.
   */
  iconDescription: _propTypes.default.string,

  /**
   * `true` if opening tooltip should be triggered by clicking the trigger button.
   */
  clickToOpen: _propTypes.default.bool
});

_defineProperty(Tooltip, "defaultProps", {
  open: false,
  direction: _FloatingMenu.DIRECTION_BOTTOM,
  showIcon: true,
  iconName: 'info--glyph',
  iconDescription: 'tooltip',
  triggerText: 'Provide triggerText',
  menuOffset: getMenuOffset
});