"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _Icon = _interopRequireDefault(require("../Icon"));

var _Button = _interopRequireDefault(require("../Button"));

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

var Modal =
/*#__PURE__*/
function (_Component) {
  function Modal() {
    var _getPrototypeOf2;

    var _temp, _this;

    _classCallCheck(this, Modal);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _possibleConstructorReturn(_this, (_temp = _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Modal)).call.apply(_getPrototypeOf2, [this].concat(args))), _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleKeyDown", function (evt) {
      if (evt.which === 27) {
        _this.props.onRequestClose();
      }

      if (evt.which === 13 && _this.props.shouldSubmitOnEnter) {
        _this.props.onRequestSubmit();
      }
    }), _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleClick", function (evt) {
      if (_this.innerModal && !_this.innerModal.contains(evt.target)) {
        _this.props.onRequestClose();
      }
    }), _temp));
  }

  _createClass(Modal, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          modalHeading = _this$props.modalHeading,
          modalLabel = _this$props.modalLabel,
          modalAriaLabel = _this$props.modalAriaLabel,
          passiveModal = _this$props.passiveModal,
          secondaryButtonText = _this$props.secondaryButtonText,
          primaryButtonText = _this$props.primaryButtonText,
          open = _this$props.open,
          onRequestClose = _this$props.onRequestClose,
          onRequestSubmit = _this$props.onRequestSubmit,
          onSecondarySubmit = _this$props.onSecondarySubmit,
          iconDescription = _this$props.iconDescription,
          primaryButtonDisabled = _this$props.primaryButtonDisabled,
          danger = _this$props.danger,
          other = _objectWithoutProperties(_this$props, ["modalHeading", "modalLabel", "modalAriaLabel", "passiveModal", "secondaryButtonText", "primaryButtonText", "open", "onRequestClose", "onRequestSubmit", "onSecondarySubmit", "iconDescription", "primaryButtonDisabled", "danger"]);

      var onSecondaryButtonClick = onSecondarySubmit ? onSecondarySubmit : onRequestClose;
      var modalClasses = (0, _classnames.default)(_defineProperty({
        'bx--modal': true,
        'bx--modal-tall': !passiveModal,
        'is-visible': open,
        'bx--modal--danger': this.props.danger
      }, this.props.className, this.props.className));

      var modalButton = _react.default.createElement("button", {
        className: "bx--modal-close",
        type: "button",
        onClick: onRequestClose
      }, _react.default.createElement(_Icon.default, {
        name: "close",
        className: "bx--modal-close__icon",
        description: iconDescription
      }));

      var modalBody = _react.default.createElement("div", {
        ref: function ref(modal) {
          _this2.innerModal = modal;
        },
        role: "dialog",
        className: "bx--modal-container",
        "aria-label": modalAriaLabel
      }, _react.default.createElement("div", {
        className: "bx--modal-header"
      }, passiveModal && modalButton, modalLabel && _react.default.createElement("h4", {
        className: "bx--modal-header__label"
      }, modalLabel), _react.default.createElement("h2", {
        className: "bx--modal-header__heading"
      }, modalHeading), !passiveModal && modalButton), _react.default.createElement("div", {
        className: "bx--modal-content"
      }, this.props.children), !passiveModal && _react.default.createElement("div", {
        className: "bx--modal-footer"
      }, _react.default.createElement("div", {
        className: "bx--modal__buttons-container"
      }, _react.default.createElement(_Button.default, {
        kind: danger ? 'tertiary' : 'secondary',
        onClick: onSecondaryButtonClick
      }, secondaryButtonText), _react.default.createElement(_Button.default, {
        kind: danger ? 'danger--primary' : 'primary',
        disabled: primaryButtonDisabled,
        onClick: onRequestSubmit
      }, primaryButtonText))));

      return _react.default.createElement("div", _extends({}, other, {
        onKeyDown: this.handleKeyDown,
        onClick: this.handleClick,
        className: modalClasses,
        role: "presentation",
        tabIndex: -1
      }), modalBody);
    }
  }]);

  _inherits(Modal, _Component);

  return Modal;
}(_react.Component);

exports.default = Modal;

_defineProperty(Modal, "propTypes", {
  children: _propTypes.default.node,
  className: _propTypes.default.string,
  passiveModal: _propTypes.default.bool,
  onRequestClose: _propTypes.default.func,
  id: _propTypes.default.string,
  modalHeading: _propTypes.default.string,
  modalLabel: _propTypes.default.string,
  modalAriaLabel: _propTypes.default.string,
  secondaryButtonText: _propTypes.default.string,
  primaryButtonText: _propTypes.default.string,
  open: _propTypes.default.bool,
  onRequestSubmit: _propTypes.default.func,
  onKeyDown: _propTypes.default.func,
  iconDescription: _propTypes.default.string,
  primaryButtonDisabled: _propTypes.default.bool,
  onSecondarySubmit: _propTypes.default.func,
  danger: _propTypes.default.bool,
  shouldSubmitOnEnter: _propTypes.default.bool
});

_defineProperty(Modal, "defaultProps", {
  onRequestClose: function onRequestClose() {},
  onRequestSubmit: function onRequestSubmit() {},
  primaryButtonDisabled: false,
  onKeyDown: function onKeyDown() {},
  passiveModal: false,
  iconDescription: 'close the modal',
  modalHeading: '',
  modalLabel: ''
});