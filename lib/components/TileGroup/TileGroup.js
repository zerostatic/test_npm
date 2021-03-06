"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var _RadioTile = _interopRequireDefault(require("../RadioTile"));

var _warning = _interopRequireDefault(require("warning"));

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

var TileGroup =
/*#__PURE__*/
function (_React$Component) {
  function TileGroup() {
    var _getPrototypeOf2;

    var _temp, _this;

    _classCallCheck(this, TileGroup);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _possibleConstructorReturn(_this, (_temp = _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(TileGroup)).call.apply(_getPrototypeOf2, [this].concat(args))), _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      selected: null
    }), _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "getRadioTiles", function () {
      var childrenArray = _react.default.Children.toArray(_this.props.children);

      var children = childrenArray.map(function (tileRadio) {
        var _tileRadio$props = tileRadio.props,
            value = _tileRadio$props.value,
            other = _objectWithoutProperties(_tileRadio$props, ["value"]);
        /* istanbul ignore if */


        if (tileRadio.props.hasOwnProperty('checked')) {
          (0, _warning.default)(false, "Instead of using the checked property on the RadioTile, set\n            the defaultSelected property or valueSelected property on the TileGroup.");
        }

        return _react.default.createElement(_RadioTile.default, _extends({}, other, {
          name: _this.props.name,
          key: value,
          value: value,
          onChange: _this.handleChange,
          checked: value === _this.state.selected
        }));
      });
      return children;
    }), _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleChange", function (newSelection, value, evt) {
      if (newSelection !== _this.state.selected) {
        _this.setState({
          selected: newSelection
        });

        _this.props.onChange(newSelection, _this.props.name, evt);
      }
    }), _temp));
  }

  _createClass(TileGroup, [{
    key: "componentWillMount",
    value: function componentWillMount() {
      this.setState({
        selected: this.props.valueSelected || this.props.defaultSelected || null
      });
    }
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      if (nextProps.hasOwnProperty('valueSelected')) {
        this.setState({
          selected: nextProps.valueSelected
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          disabled = _this$props.disabled,
          className = _this$props.className;
      return _react.default.createElement("div", {
        className: className,
        disabled: disabled
      }, this.getRadioTiles());
    }
  }]);

  _inherits(TileGroup, _React$Component);

  return TileGroup;
}(_react.default.Component);

exports.default = TileGroup;

_defineProperty(TileGroup, "propTypes", {
  children: _propTypes.default.node,
  className: _propTypes.default.string,
  defaultSelected: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number]),
  name: _propTypes.default.string.isRequired,
  disabled: _propTypes.default.bool,
  onChange: _propTypes.default.func,
  valueSelected: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number])
});

_defineProperty(TileGroup, "defaultProps", {
  onChange:
  /* istanbul ignore next */
  function onChange() {},
  className: 'bx--tile-group'
});