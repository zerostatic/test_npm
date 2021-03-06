"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Filename = exports.FileUploaderButton = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _Icon = _interopRequireDefault(require("../Icon"));

var _uniqueId = _interopRequireDefault(require("../../tools/uniqueId"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

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

var FileUploaderButton =
/*#__PURE__*/
function (_Component) {
  function FileUploaderButton() {
    var _getPrototypeOf2;

    var _temp, _this;

    _classCallCheck(this, FileUploaderButton);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _possibleConstructorReturn(_this, (_temp = _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(FileUploaderButton)).call.apply(_getPrototypeOf2, [this].concat(args))), _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      labelText: _this.props.labelText
    }), _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleChange", function (evt) {
      var files = evt.target.files;
      var length = evt.target.files.length;

      if (files && !_this.props.disableLabelChanges) {
        if (length > 1) {
          _this.setState({
            labelText: "".concat(length, " files")
          });
        } else if (length === 1) {
          _this.setState({
            labelText: files[0].name
          });
        }
      }

      _this.props.onChange(evt);
    }), _temp));
  }

  _createClass(FileUploaderButton, [{
    key: "componentWillMount",
    value: function componentWillMount() {
      this.uid = this.props.id || (0, _uniqueId.default)();
    }
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      if (nextProps.labelText !== this.props.labelText) {
        this.setState({
          labelText: nextProps.labelText
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          className = _this$props.className,
          disableLabelChanges = _this$props.disableLabelChanges,
          labelText = _this$props.labelText,
          multiple = _this$props.multiple,
          role = _this$props.role,
          tabIndex = _this$props.tabIndex,
          buttonKind = _this$props.buttonKind,
          accept = _this$props.accept,
          other = _objectWithoutProperties(_this$props, ["className", "disableLabelChanges", "labelText", "multiple", "role", "tabIndex", "buttonKind", "accept"]);

      var classes = (0, _classnames.default)(_defineProperty({
        'bx--file': true
      }, className, className));
      return _react.default.createElement("div", {
        role: "button",
        className: classes,
        onKeyDown: function onKeyDown(evt) {
          if (evt.which === 13 || evt.which === 32) {
            _this2.input.click();
          }
        }
      }, _react.default.createElement("label", _extends({
        className: "bx--btn bx--btn--".concat(buttonKind),
        tabIndex: tabIndex,
        htmlFor: this.uid,
        role: role
      }, other), this.state.labelText), _react.default.createElement("input", {
        className: "bx--visually-hidden",
        ref: function ref(input) {
          return _this2.input = input;
        },
        id: this.uid,
        type: "file",
        multiple: multiple,
        accept: accept,
        onChange: this.handleChange,
        onClick: function onClick(evt) {
          evt.target.value = null;
        }
      }));
    }
  }]);

  _inherits(FileUploaderButton, _Component);

  return FileUploaderButton;
}(_react.Component);

exports.FileUploaderButton = FileUploaderButton;

_defineProperty(FileUploaderButton, "propTypes", {
  className: _propTypes.default.string,
  disableLabelChanges: _propTypes.default.bool,
  id: _propTypes.default.string,
  labelText: _propTypes.default.string,
  listFiles: _propTypes.default.bool,
  multiple: _propTypes.default.bool,
  onChange: _propTypes.default.func,
  onClick: _propTypes.default.func,
  role: _propTypes.default.string,
  tabIndex: _propTypes.default.number,
  buttonKind: _propTypes.default.oneOf(['primary', 'secondary']),
  accept: _propTypes.default.arrayOf(_propTypes.default.string)
});

_defineProperty(FileUploaderButton, "defaultProps", {
  tabIndex: 0,
  disableLabelChanges: false,
  labelText: 'Add file',
  buttonKind: 'primary',
  multiple: false,
  onChange: function onChange() {},
  onClick: function onClick() {},
  accept: []
});

var Filename =
/*#__PURE__*/
function (_Component2) {
  function Filename() {
    _classCallCheck(this, Filename);

    return _possibleConstructorReturn(this, _getPrototypeOf(Filename).apply(this, arguments));
  }

  _createClass(Filename, [{
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          iconDescription = _this$props2.iconDescription,
          status = _this$props2.status,
          style = _this$props2.style,
          other = _objectWithoutProperties(_this$props2, ["iconDescription", "status", "style"]);

      if (status === 'uploading') {
        return _react.default.createElement("div", _extends({
          className: "bx--loading",
          style: _objectSpread({}, style, {
            width: '1rem',
            height: '1rem'
          })
        }, other), _react.default.createElement("svg", {
          className: "bx--loading__svg",
          viewBox: "-42 -42 84 84"
        }, _react.default.createElement("circle", {
          cx: "0",
          cy: "0",
          r: "37.5"
        })));
      } else if (status === 'edit') {
        return _react.default.createElement(_Icon.default, _extends({
          description: iconDescription,
          className: "bx--file-close",
          name: "close--glyph",
          style: style
        }, other));
      } else if (status === 'complete') {
        return _react.default.createElement(_Icon.default, _extends({
          description: iconDescription,
          className: "bx--file-complete",
          name: "checkmark--glyph",
          style: style
        }, other));
      } else {
        return null;
      }
    }
  }]);

  _inherits(Filename, _Component2);

  return Filename;
}(_react.Component);

exports.Filename = Filename;

_defineProperty(Filename, "propTypes", {
  style: _propTypes.default.object,
  status: _propTypes.default.oneOf(['edit', 'complete', 'uploading']),
  tabIndex: _propTypes.default.number,
  onKeyDown: _propTypes.default.func
});

_defineProperty(Filename, "defaultProps", {
  onKeyDown: function onKeyDown() {},
  status: 'uploading',
  style: {},
  tabIndex: 0
});

var FileUploader =
/*#__PURE__*/
function (_Component3) {
  function FileUploader() {
    var _getPrototypeOf3;

    var _temp2, _this3;

    _classCallCheck(this, FileUploader);

    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    return _possibleConstructorReturn(_this3, (_temp2 = _this3 = _possibleConstructorReturn(this, (_getPrototypeOf3 = _getPrototypeOf(FileUploader)).call.apply(_getPrototypeOf3, [this].concat(args))), _defineProperty(_assertThisInitialized(_assertThisInitialized(_this3)), "state", {
      filenames: [],
      filenameStatus: ''
    }), _defineProperty(_assertThisInitialized(_assertThisInitialized(_this3)), "nodes", []), _defineProperty(_assertThisInitialized(_assertThisInitialized(_this3)), "handleChange", function (evt) {
      _this3.setState({
        filenames: _toConsumableArray(evt.target.files).map(function (file) {
          return file.name;
        })
      });

      _this3.props.onChange(evt);
    }), _defineProperty(_assertThisInitialized(_assertThisInitialized(_this3)), "handleClick", function (evt, index) {
      var filteredArray = _this3.state.filenames.filter(function (filename) {
        return filename !== _this3.nodes[index].innerText.trim();
      });

      _this3.setState({
        filenames: filteredArray
      });

      _this3.props.onClick(evt);
    }), _defineProperty(_assertThisInitialized(_assertThisInitialized(_this3)), "clearFiles", function () {
      // A clearFiles function that resets filenames and can be referenced using a ref by the parent.
      _this3.setState({
        filenames: []
      });
    }), _temp2));
  }

  _createClass(FileUploader, [{
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      if (nextProps.filenameStatus !== this.props.filenameStatus) {
        this.setState({
          filenameStatus: nextProps.filenameStatus
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this4 = this;

      var _this$props3 = this.props,
          iconDescription = _this$props3.iconDescription,
          buttonLabel = _this$props3.buttonLabel,
          buttonKind = _this$props3.buttonKind,
          filenameStatus = _this$props3.filenameStatus,
          labelDescription = _this$props3.labelDescription,
          labelTitle = _this$props3.labelTitle,
          className = _this$props3.className,
          multiple = _this$props3.multiple,
          accept = _this$props3.accept,
          other = _objectWithoutProperties(_this$props3, ["iconDescription", "buttonLabel", "buttonKind", "filenameStatus", "labelDescription", "labelTitle", "className", "multiple", "accept"]);

      var classes = (0, _classnames.default)(_defineProperty({
        'bx--form-item': true
      }, className, className));
      return _react.default.createElement("div", _extends({
        className: classes
      }, other), _react.default.createElement("strong", {
        className: "bx--label"
      }, labelTitle), _react.default.createElement("p", {
        className: "bx--label-description"
      }, labelDescription), _react.default.createElement(FileUploaderButton, {
        labelText: buttonLabel,
        multiple: multiple,
        buttonKind: buttonKind,
        onChange: this.handleChange,
        disableLabelChanges: true,
        accept: accept
      }), _react.default.createElement("div", {
        className: "bx--file-container"
      }, this.state.filenames.length === 0 ? null : this.state.filenames.map(function (name, index) {
        var _React$createElement;

        return _react.default.createElement("span", _extends({
          key: index,
          className: "bx--file__selected-file",
          ref: function ref(node) {
            return _this4.nodes[index] = node;
          } // eslint-disable-line

        }, other), _react.default.createElement("p", {
          className: "bx--file-filename"
        }, name), _react.default.createElement("span", {
          className: "bx--file__state-container"
        }, _react.default.createElement(Filename, (_React$createElement = {
          iconDescription: iconDescription,
          status: filenameStatus,
          onClick: function onClick(evt) {
            if (filenameStatus === 'edit') {
              _this4.handleClick(evt, index);
            }
          }
        }, _defineProperty(_React$createElement, "iconDescription", iconDescription), _defineProperty(_React$createElement, "onKeyDown", function onKeyDown(evt) {
          if (evt.which === 13 || evt.which === 32) {
            _this4.handleClick(evt, index);
          }
        }), _defineProperty(_React$createElement, "onClick", function onClick(evt) {
          if (filenameStatus === 'edit') {
            _this4.handleClick(evt, index);
          }
        }), _React$createElement))));
      })));
    }
  }]);

  _inherits(FileUploader, _Component3);

  return FileUploader;
}(_react.Component);

exports.default = FileUploader;

_defineProperty(FileUploader, "propTypes", {
  iconDescription: _propTypes.default.string,
  buttonLabel: _propTypes.default.string,
  buttonKind: _propTypes.default.oneOf(['primary', 'secondary']),
  filenameStatus: _propTypes.default.oneOf(['edit', 'complete', 'uploading']).isRequired,
  labelDescription: _propTypes.default.string,
  labelTitle: _propTypes.default.string,
  multiple: _propTypes.default.bool,
  onChange: _propTypes.default.func,
  onClick: _propTypes.default.func,
  className: _propTypes.default.string,
  accept: _propTypes.default.arrayOf(_propTypes.default.string)
});

_defineProperty(FileUploader, "defaultProps", {
  iconDescription: 'Provide icon description',
  filenameStatus: 'uploading',
  buttonLabel: '',
  buttonKind: 'primary',
  multiple: false,
  onChange: function onChange() {},
  onClick: function onClick() {},
  accept: []
});