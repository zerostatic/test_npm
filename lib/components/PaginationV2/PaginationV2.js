"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _Icon = _interopRequireDefault(require("../Icon"));

var _Select = _interopRequireDefault(require("../Select"));

var _SelectItem = _interopRequireDefault(require("../SelectItem"));

var _array = require("../../tools/array");

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

var instanceId = 0;

var PaginationV2 =
/*#__PURE__*/
function (_Component) {
  function PaginationV2() {
    var _getPrototypeOf2;

    var _temp, _this;

    _classCallCheck(this, PaginationV2);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _possibleConstructorReturn(_this, (_temp = _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(PaginationV2)).call.apply(_getPrototypeOf2, [this].concat(args))), _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      page: _this.props.page,
      pageSize: _this.props.pageSize && _this.props.pageSizes.includes(_this.props.pageSize) ? _this.props.pageSize : _this.props.pageSizes[0]
    }), _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleSizeChange", function (evt) {
      var pageSize = Number(evt.target.value);

      _this.setState({
        pageSize: pageSize,
        page: 1
      });

      _this.props.onChange({
        page: 1,
        pageSize: pageSize
      });
    }), _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handlePageChange", function (evt) {
      _this.setState({
        page: evt.target.value
      });
    }), _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handlePageInputChange", function (evt) {
      var page = Number(evt.target.value);

      if (page > 0 && page <= Math.max(Math.ceil(_this.props.totalItems / _this.state.pageSize), 1)) {
        _this.setState({
          page: page
        });

        _this.props.onChange({
          page: page,
          pageSize: _this.state.pageSize
        });
      }
    }), _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "incrementPage", function () {
      var page = _this.state.page + 1;

      _this.setState({
        page: page
      });

      _this.props.onChange({
        page: page,
        pageSize: _this.state.pageSize
      });
    }), _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "decrementPage", function () {
      var page = _this.state.page - 1;

      _this.setState({
        page: page
      });

      _this.props.onChange({
        page: page,
        pageSize: _this.state.pageSize
      });
    }), _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "renderSelectItems", function (total) {
      var counter = 1;
      var itemArr = [];

      while (counter <= total) {
        itemArr.push(_react.default.createElement(_SelectItem.default, {
          key: counter,
          value: counter,
          text: String(counter)
        }));
        counter++;
      }

      return itemArr;
    }), _temp));
  }

  _createClass(PaginationV2, [{
    key: "componentWillMount",
    value: function componentWillMount() {
      this.uniqueId = ++instanceId;
    }
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(_ref) {
      var pageSizes = _ref.pageSizes,
          page = _ref.page,
          pageSize = _ref.pageSize;

      if (!(0, _array.equals)(pageSizes, this.props.pageSizes)) {
        this.setState({
          pageSize: pageSizes[0],
          page: 1
        });
      }

      if (page !== this.props.page) {
        this.setState({
          page: page
        });
      }

      if (pageSize !== this.props.pageSize) {
        this.setState({
          pageSize: pageSize
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          backwardText = _this$props.backwardText,
          className = _this$props.className,
          forwardText = _this$props.forwardText,
          id = _this$props.id,
          itemsPerPageText = _this$props.itemsPerPageText,
          itemsPerPageFollowsText = _this$props.itemsPerPageFollowsText,
          itemRangeText = _this$props.itemRangeText,
          pageRangeText = _this$props.pageRangeText,
          pageSize = _this$props.pageSize,
          pageSizes = _this$props.pageSizes,
          itemText = _this$props.itemText,
          pageText = _this$props.pageText,
          pageNumberText = _this$props.pageNumberText,
          pagesUnknown = _this$props.pagesUnknown,
          isLastPage = _this$props.isLastPage,
          pageInputDisabled = _this$props.pageInputDisabled,
          totalItems = _this$props.totalItems,
          onChange = _this$props.onChange,
          pageNumber = _this$props.page,
          other = _objectWithoutProperties(_this$props, ["backwardText", "className", "forwardText", "id", "itemsPerPageText", "itemsPerPageFollowsText", "itemRangeText", "pageRangeText", "pageSize", "pageSizes", "itemText", "pageText", "pageNumberText", "pagesUnknown", "isLastPage", "pageInputDisabled", "totalItems", "onChange", "page"]);

      var statePage = this.state.page;
      var statePageSize = this.state.pageSize;
      var classNames = (0, _classnames.default)('bx--pagination', className);
      var backButtonClasses = (0, _classnames.default)('bx--pagination__button', 'bx--pagination__button--backward', {
        'bx--pagination__button--no-index': pageInputDisabled
      });
      var inputId = id || this.uniqueId;
      var totalPages = Math.max(Math.ceil(totalItems / statePageSize), 1);
      var selectItems = this.renderSelectItems(totalPages);
      return _react.default.createElement("div", _extends({
        className: classNames
      }, other), _react.default.createElement("div", {
        className: "bx--pagination__left"
      }, _react.default.createElement("span", {
        className: "bx--pagination__text"
      }, itemsPerPageFollowsText || "".concat(itemsPerPageText, ":")), _react.default.createElement(_Select.default, {
        id: "bx-pagination-select-".concat(inputId),
        labelText: itemsPerPageText,
        hideLabel: true,
        inline: true,
        onChange: this.handleSizeChange,
        value: statePageSize
      }, pageSizes.map(function (size) {
        return _react.default.createElement(_SelectItem.default, {
          key: size,
          value: size,
          text: String(size)
        });
      })), _react.default.createElement("span", {
        className: "bx--pagination__text"
      }, "\xA0|\xA0\xA0", pagesUnknown ? itemText(statePageSize * (statePage - 1) + 1, statePage * statePageSize) : itemRangeText(Math.min(statePageSize * (statePage - 1) + 1, totalItems), Math.min(statePage * statePageSize, totalItems), totalItems))), _react.default.createElement("div", {
        className: "bx--pagination__right bx--pagination--inline"
      }, _react.default.createElement("span", {
        className: "bx--pagination__text"
      }, pagesUnknown ? pageText(statePage) : pageRangeText(statePage, totalPages)), _react.default.createElement("button", {
        className: backButtonClasses,
        onClick: this.decrementPage,
        disabled: this.props.disabled || statePage === 1
      }, _react.default.createElement(_Icon.default, {
        className: "bx--pagination__button-icon",
        name: "chevron--left",
        description: backwardText
      })), pageInputDisabled ? null : _react.default.createElement(_Select.default, {
        id: "bx-pagination-select-".concat(inputId + 2),
        labelText: itemsPerPageText,
        hideLabel: true,
        inline: true,
        onChange: this.handlePageInputChange,
        value: statePage
      }, selectItems), _react.default.createElement("button", {
        className: "bx--pagination__button bx--pagination__button--forward",
        onClick: this.incrementPage,
        disabled: this.props.disabled || statePage === totalPages || isLastPage
      }, _react.default.createElement(_Icon.default, {
        className: "bx--pagination__button-icon",
        name: "chevron--right",
        description: forwardText
      }))));
    }
  }]);

  _inherits(PaginationV2, _Component);

  return PaginationV2;
}(_react.Component);

exports.default = PaginationV2;

_defineProperty(PaginationV2, "propTypes", {
  /**
   * The description for the backward icon.
   */
  backwardText: _propTypes.default.string,

  /**
   * The CSS class names.
   */
  className: _propTypes.default.string,

  /**
   * The function returning a translatable text showing where the current page is,
   * in a manner of the range of items.
   */
  itemRangeText: _propTypes.default.func,

  /**
   * The description for the forward icon.
   */
  forwardText: _propTypes.default.string,

  /**
   * The unique ID of this component instance.
   */
  id: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number]),

  /**
   * The translatable text indicating the number of items per page.
   */
  itemsPerPageText: _propTypes.default.string,

  /**
   * A variant of `itemsPerPageText`, with a sign indicating that the number follows, e.g. ':'.
   */
  itemsPerPageFollowsText: _propTypes.default.string,

  /**
   * A variant of `itemRangeText`, used if the total number of items is unknown.
   */
  itemText: _propTypes.default.func,

  /**
   * The callback function called when the current page changes.
   */
  onChange: _propTypes.default.func,
  pageNumberText: _propTypes.default.string,

  /**
   * A function returning PII showing where the current page is.
   */
  pageRangeText: _propTypes.default.func,

  /**
   * The translatable text showing the current page.
   */
  pageText: _propTypes.default.func,

  /**
   * The choices for `pageSize`.
   */
  pageSizes: _propTypes.default.arrayOf(_propTypes.default.number).isRequired,

  /**
   * The total number of items.
   */
  totalItems: _propTypes.default.number,

  /**
   * `true` if the backward/forward buttons should be disabled.
   */
  disabled: _propTypes.default.bool,

  /**
   * The current page.
   */
  page: _propTypes.default.number,

  /**
   * The number dictating how many items a page contains.
   */
  pageSize: _propTypes.default.number,

  /**
   * `true` if the total number of items is unknown.
   */
  pagesUnknown: _propTypes.default.bool,

  /**
   * `true` if the current page should be the last page.
   */
  isLastPage: _propTypes.default.bool,

  /**
   * `true` if the select box to change the page should be disabled.
   */
  pageInputDisabled: _propTypes.default.bool
});

_defineProperty(PaginationV2, "defaultProps", {
  backwardText: 'Backward',
  itemRangeText: function itemRangeText(min, max, total) {
    return "".concat(min, "-").concat(max, " of ").concat(total, " items");
  },
  forwardText: 'Forward',
  itemsPerPageText: 'Items per page',
  pageNumberText: 'Page Number',
  pageRangeText: function pageRangeText(current, total) {
    return "".concat(current, " of ").concat(total, " pages");
  },
  disabled: false,
  page: 1,
  pagesUnknown: false,
  isLastPage: false,
  pageInputDisabled: false,
  itemText: function itemText(min, max) {
    return "".concat(min, "-").concat(max, " items");
  },
  pageText: function pageText(page) {
    return "page ".concat(page);
  }
});