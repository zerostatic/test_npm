"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ModalFooter = exports.ModalBody = exports.ModalHeader = exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Button = _interopRequireDefault(require("../Button"));

var _Icon = _interopRequireDefault(require("../Icon"));

var _classnames = _interopRequireDefault(require("classnames"));

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

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var ComposedModal =
/*#__PURE__*/
function (_Component) {
  function ComposedModal() {
    var _getPrototypeOf2;

    var _temp, _this;

    _classCallCheck(this, ComposedModal);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _possibleConstructorReturn(_this, (_temp = _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(ComposedModal)).call.apply(_getPrototypeOf2, [this].concat(args))), _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      open: _this.props.open
    }), _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleKeyDown", function (evt) {
      if (evt.which === 27) {
        _this.closeModal();
      }

      _this.props.onKeyDown(evt);
    }), _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "closeModal", function () {
      _this.setState({
        open: false
      });
    }), _temp));
  }

  _createClass(ComposedModal, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this.modal) {
        this.modal.focus();
      }
    }
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      if (nextProps.open !== this.state.open) {
        this.setState({
          open: nextProps.open
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var open = this.state.open;

      var _this$props = this.props,
          className = _this$props.className,
          containerClassName = _this$props.containerClassName,
          children = _this$props.children,
          other = _objectWithoutProperties(_this$props, ["className", "containerClassName", "children"]);

      var modalClass = (0, _classnames.default)(_defineProperty({
        'bx--modal': true,
        'is-visible': open
      }, className, className));
      var containerClass = (0, _classnames.default)(_defineProperty({
        'bx--modal-container': true
      }, containerClassName, containerClassName));

      var childrenWithProps = _react.default.Children.toArray(children).map(function (child) {
        if (child.type === ModalHeader || child.type === ModalFooter) {
          return _react.default.cloneElement(child, {
            closeModal: _this2.closeModal
          });
        }

        return child;
      });

      return _react.default.createElement("div", _extends({}, other, {
        role: "presentation",
        ref: function ref(modal) {
          return _this2.modal = modal;
        },
        onKeyDown: this.handleKeyDown,
        className: modalClass,
        tabIndex: -1
      }), _react.default.createElement("div", {
        className: containerClass
      }, childrenWithProps));
    }
  }]);

  _inherits(ComposedModal, _Component);

  return ComposedModal;
}(_react.Component);

exports.default = ComposedModal;

_defineProperty(ComposedModal, "defaultProps", {
  onKeyDown: function onKeyDown() {}
});

_defineProperty(ComposedModal, "propTypes", {
  className: _propTypes.default.string,
  containerClassName: _propTypes.default.string,
  onKeyDown: _propTypes.default.func
});

var ModalHeader =
/*#__PURE__*/
function (_Component2) {
  function ModalHeader() {
    var _getPrototypeOf3;

    var _temp2, _this3;

    _classCallCheck(this, ModalHeader);

    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    return _possibleConstructorReturn(_this3, (_temp2 = _this3 = _possibleConstructorReturn(this, (_getPrototypeOf3 = _getPrototypeOf(ModalHeader)).call.apply(_getPrototypeOf3, [this].concat(args))), _defineProperty(_assertThisInitialized(_assertThisInitialized(_this3)), "handleCloseButtonClick", function () {
      _this3.props.closeModal();

      _this3.props.buttonOnClick();
    }), _temp2));
  }

  _createClass(ModalHeader, [{
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          className = _this$props2.className,
          labelClassName = _this$props2.labelClassName,
          titleClassName = _this$props2.titleClassName,
          closeClassName = _this$props2.closeClassName,
          closeIconClassName = _this$props2.closeIconClassName,
          label = _this$props2.label,
          title = _this$props2.title,
          children = _this$props2.children,
          iconDescription = _this$props2.iconDescription,
          closeModal = _this$props2.closeModal,
          buttonOnClick = _this$props2.buttonOnClick,
          other = _objectWithoutProperties(_this$props2, ["className", "labelClassName", "titleClassName", "closeClassName", "closeIconClassName", "label", "title", "children", "iconDescription", "closeModal", "buttonOnClick"]);

      var headerClass = (0, _classnames.default)(_defineProperty({
        'bx--modal-header': true
      }, className, className));
      var labelClass = (0, _classnames.default)(_defineProperty({
        'bx--modal-header__label bx--type-delta': true
      }, labelClassName, labelClassName));
      var titleClass = (0, _classnames.default)(_defineProperty({
        'bx--modal-header__heading bx--type-beta': true
      }, titleClassName, titleClassName));
      var closeClass = (0, _classnames.default)(_defineProperty({
        'bx--modal-close': true
      }, closeClassName, closeClassName));
      var closeIconClass = (0, _classnames.default)(_defineProperty({
        'bx--modal-close__icon': true
      }, closeIconClassName, closeIconClassName));
      return _react.default.createElement("div", _extends({
        className: headerClass
      }, other), label && _react.default.createElement("p", {
        className: labelClass
      }, label), title && _react.default.createElement("p", {
        className: titleClass
      }, title), children, _react.default.createElement("button", {
        onClick: this.handleCloseButtonClick,
        className: closeClass,
        type: "button"
      }, _react.default.createElement(_Icon.default, {
        name: "close",
        className: closeIconClass,
        description: iconDescription
      })));
    }
  }]);

  _inherits(ModalHeader, _Component2);

  return ModalHeader;
}(_react.Component);

exports.ModalHeader = ModalHeader;

_defineProperty(ModalHeader, "defaultProps", {
  iconDescription: 'Close the modal',
  buttonOnClick: function buttonOnClick() {}
});

_defineProperty(ModalHeader, "propTypes", {
  className: _propTypes.default.string,
  labelClassName: _propTypes.default.string,
  titleClassName: _propTypes.default.string,
  closeClassName: _propTypes.default.string,
  closeIconClassName: _propTypes.default.string,
  label: _propTypes.default.string,
  title: _propTypes.default.string,
  children: _propTypes.default.node,
  iconDescription: _propTypes.default.string,
  closeModal: _propTypes.default.func,
  buttonOnClick: _propTypes.default.func
});

var ModalBody =
/*#__PURE__*/
function (_Component3) {
  function ModalBody() {
    _classCallCheck(this, ModalBody);

    return _possibleConstructorReturn(this, _getPrototypeOf(ModalBody).apply(this, arguments));
  }

  _createClass(ModalBody, [{
    key: "render",
    value: function render() {
      var _this$props3 = this.props,
          className = _this$props3.className,
          children = _this$props3.children,
          other = _objectWithoutProperties(_this$props3, ["className", "children"]);

      var contentClass = (0, _classnames.default)(_defineProperty({
        'bx--modal-content': true
      }, className, className));
      return _react.default.createElement("div", _extends({
        className: contentClass
      }, other), children);
    }
  }]);

  _inherits(ModalBody, _Component3);

  return ModalBody;
}(_react.Component);

exports.ModalBody = ModalBody;

_defineProperty(ModalBody, "propTypes", {
  className: _propTypes.default.string
});

var ModalFooter =
/*#__PURE__*/
function (_Component4) {
  function ModalFooter() {
    var _getPrototypeOf4;

    var _temp3, _this4;

    _classCallCheck(this, ModalFooter);

    for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
      args[_key3] = arguments[_key3];
    }

    return _possibleConstructorReturn(_this4, (_temp3 = _this4 = _possibleConstructorReturn(this, (_getPrototypeOf4 = _getPrototypeOf(ModalFooter)).call.apply(_getPrototypeOf4, [this].concat(args))), _defineProperty(_assertThisInitialized(_assertThisInitialized(_this4)), "handleRequestClose", function (evt) {
      _this4.props.closeModal();

      _this4.props.onRequestClose(evt);
    }), _temp3));
  }

  _createClass(ModalFooter, [{
    key: "render",
    value: function render() {
      var _this$props4 = this.props,
          className = _this$props4.className,
          primaryClassName = _this$props4.primaryClassName,
          secondaryClassName = _this$props4.secondaryClassName,
          secondaryButtonText = _this$props4.secondaryButtonText,
          primaryButtonText = _this$props4.primaryButtonText,
          primaryButtonDisabled = _this$props4.primaryButtonDisabled,
          closeModal = _this$props4.closeModal,
          onRequestClose = _this$props4.onRequestClose,
          onRequestSubmit = _this$props4.onRequestSubmit,
          children = _this$props4.children,
          other = _objectWithoutProperties(_this$props4, ["className", "primaryClassName", "secondaryClassName", "secondaryButtonText", "primaryButtonText", "primaryButtonDisabled", "closeModal", "onRequestClose", "onRequestSubmit", "children"]);

      var footerClass = (0, _classnames.default)(_defineProperty({
        'bx--modal-footer': true
      }, className, className));
      var primaryClass = (0, _classnames.default)(_defineProperty({}, primaryClassName, primaryClassName));
      var secondaryClass = (0, _classnames.default)(_defineProperty({}, secondaryClassName, secondaryClassName));
      return _react.default.createElement("div", _extends({
        className: footerClass
      }, other), secondaryButtonText && _react.default.createElement(_Button.default, {
        className: secondaryClass,
        onClick: this.handleRequestClose,
        kind: "secondary"
      }, secondaryButtonText), primaryButtonText && _react.default.createElement(_Button.default, {
        onClick: onRequestSubmit,
        className: primaryClass,
        disabled: primaryButtonDisabled,
        kind: "primary"
      }, primaryButtonText), children);
    }
  }]);

  _inherits(ModalFooter, _Component4);

  return ModalFooter;
}(_react.Component);

exports.ModalFooter = ModalFooter;

_defineProperty(ModalFooter, "propTypes", {
  className: _propTypes.default.string,
  primaryClassName: _propTypes.default.string,
  secondaryClassName: _propTypes.default.string,
  secondaryButtonText: _propTypes.default.string,
  primaryButtonText: _propTypes.default.string,
  primaryButtonDisabled: _propTypes.default.bool,
  onRequestClose: _propTypes.default.func,
  onRequestSubmit: _propTypes.default.func,
  closeModal: _propTypes.default.func,
  children: _propTypes.default.node
});

_defineProperty(ModalFooter, "defaultProps", {
  onRequestClose: function onRequestClose() {},
  onRequestSubmit: function onRequestSubmit() {}
});