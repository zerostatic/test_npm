"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Icon = _interopRequireDefault(require("../Icon"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } _setPrototypeOf(subClass.prototype, superClass && superClass.prototype); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.getPrototypeOf || function _getPrototypeOf(o) { return o.__proto__; }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * The layout button for `<Search>`.
 */
var SearchLayoutButton =
/*#__PURE__*/
function (_Component) {
  function SearchLayoutButton() {
    var _getPrototypeOf2;

    var _temp, _this;

    _classCallCheck(this, SearchLayoutButton);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _possibleConstructorReturn(_this, (_temp = _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(SearchLayoutButton)).call.apply(_getPrototypeOf2, [this].concat(args))), _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      /**
       * The current layout.
       * @type {string}
       */
      format: _this.props.format || 'list'
    }), _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "toggleLayout", function () {
      var format = _this.state.format === 'list' ? 'grid' : 'list';

      _this.setState({
        format: format
      }, function () {
        var onChangeFormat = _this.props.onChangeFormat;

        if (typeof onChangeFormat === 'function') {
          onChangeFormat({
            format: format
          });
        }
      });
    }), _temp));
  }

  _createClass(SearchLayoutButton, [{
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(_ref) {
      var format = _ref.format;
      var prevFormat = this.props.format;

      if (prevFormat !== format) {
        this.setState({
          format: format || 'list'
        });
      }
    }
    /**
     * Toggles the button state upon user-initiated event.
     */

  }, {
    key: "render",
    value: function render() {
      var labelText = this.props.labelText;
      return _react.default.createElement("button", {
        className: "bx--search-button",
        type: "button",
        onClick: this.toggleLayout,
        "aria-label": labelText
      }, this.state.format === 'list' ? _react.default.createElement("div", {
        className: "bx--search__toggle-layout__container"
      }, _react.default.createElement(_Icon.default, {
        name: "list",
        description: "list",
        className: "bx--search-view"
      })) : _react.default.createElement("div", {
        className: "bx--search__toggle-layout__container"
      }, _react.default.createElement(_Icon.default, {
        name: "grid",
        description: "toggle-layout",
        className: "bx--search-view"
      })));
    }
  }]);

  _inherits(SearchLayoutButton, _Component);

  return SearchLayoutButton;
}(_react.Component);

_defineProperty(SearchLayoutButton, "propTypes", {
  /**
   * The layout.
   */
  format: _propTypes.default.oneOf(['list', 'grid']),

  /**
   * The a11y label text.
   */
  labelText: _propTypes.default.string,

  /**
   * The callback called when layout switches.
   */
  onChangeFormat: _propTypes.default.func
});

_defineProperty(SearchLayoutButton, "defaultProps", {
  labelText: 'Filter'
});

var _default = SearchLayoutButton;
exports.default = _default;