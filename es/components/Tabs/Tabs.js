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

import PropTypes from 'prop-types';
import React from 'react';
import classNames from 'classnames';
import Icon from '../Icon';
import TabContent from '../TabContent';

var Tabs =
/*#__PURE__*/
function (_React$Component) {
  function Tabs() {
    var _getPrototypeOf2;

    var _temp, _this;

    _classCallCheck(this, Tabs);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _possibleConstructorReturn(_this, (_temp = _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Tabs)).call.apply(_getPrototypeOf2, [this].concat(args))), _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      dropdownHidden: true,
      selected: _this.props.selected
    }), _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "getTabAt", function (index) {
      return _this["tab".concat(index)] || React.Children.toArray(_this.props.children)[index];
    }), _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "setTabAt", function (index, tabRef) {
      _this["tab".concat(index)] = tabRef;
    }), _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleTabClick", function (onSelectionChange) {
      return function (index, label, evt) {
        evt.preventDefault();

        _this.selectTabAt(index, onSelectionChange);

        _this.setState({
          dropdownHidden: !_this.state.dropdownHidden
        });
      };
    }), _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleTabKeyDown", function (onSelectionChange) {
      return function (index, label, evt) {
        var key = evt.key || evt.which;

        if (key === 'Enter' || key === 13 || key === ' ' || key === 32) {
          _this.selectTabAt(index, onSelectionChange);

          _this.setState({
            dropdownHidden: !_this.state.dropdownHidden
          });
        }
      };
    }), _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleTabAnchorFocus", function (onSelectionChange) {
      return function (index) {
        var tabCount = React.Children.count(_this.props.children) - 1;
        var tabIndex = index;

        if (index < 0) {
          tabIndex = tabCount;
        } else if (index > tabCount) {
          tabIndex = 0;
        }

        var tab = _this.getTabAt(tabIndex);

        if (tab) {
          _this.selectTabAt(tabIndex, onSelectionChange);

          if (tab.tabAnchor) {
            tab.tabAnchor.focus();
          }
        }
      };
    }), _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleDropdownClick", function () {
      _this.setState({
        dropdownHidden: !_this.state.dropdownHidden
      });
    }), _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "selectTabAt", function (index, onSelectionChange) {
      if (_this.state.selected !== index) {
        _this.setState({
          selected: index
        });

        if (typeof onSelectionChange === 'function') {
          onSelectionChange(index);
        }
      }
    }), _temp));
  }

  _createClass(Tabs, [{
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(_ref) {
      var selected = _ref.selected;
      this.selectTabAt(selected);
    }
  }, {
    key: "getTabs",
    value: function getTabs() {
      return React.Children.map(this.props.children, function (tab) {
        return tab;
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          ariaLabel = _this$props.ariaLabel,
          iconDescription = _this$props.iconDescription,
          className = _this$props.className,
          triggerHref = _this$props.triggerHref,
          role = _this$props.role,
          onSelectionChange = _this$props.onSelectionChange,
          other = _objectWithoutProperties(_this$props, ["ariaLabel", "iconDescription", "className", "triggerHref", "role", "onSelectionChange"]);

      var tabsWithProps = this.getTabs().map(function (tab, index) {
        var newTab = React.cloneElement(tab, {
          index: index,
          selected: index === _this2.state.selected,
          handleTabClick: _this2.handleTabClick(onSelectionChange),
          handleTabAnchorFocus: _this2.handleTabAnchorFocus(onSelectionChange),
          ref: function ref(e) {
            _this2.setTabAt(index, e);
          },
          handleTabKeyDown: _this2.handleTabKeyDown(onSelectionChange)
        });
        return newTab;
      });
      var tabContentWithProps = React.Children.map(tabsWithProps, function (tab) {
        var _tab$props = tab.props,
            children = _tab$props.children,
            selected = _tab$props.selected;
        return React.createElement(TabContent, {
          className: "tab-content",
          hidden: !selected,
          selected: selected
        }, children);
      });
      var classes = {
        tabs: classNames('bx--tabs', className),
        tablist: classNames('bx--tabs__nav', {
          'bx--tabs__nav--hidden': this.state.dropdownHidden
        })
      };
      var selectedTab = this.getTabAt(this.state.selected);
      var selectedLabel = selectedTab ? selectedTab.props.label : '';
      return React.createElement("div", null, React.createElement("nav", _extends({}, other, {
        className: classes.tabs,
        role: role
      }), React.createElement("div", {
        role: "listbox",
        "aria-label": ariaLabel,
        tabIndex: 0,
        className: "bx--tabs-trigger",
        onClick: this.handleDropdownClick,
        onKeyPress: this.handleDropdownClick
      }, React.createElement("a", {
        tabIndex: -1,
        className: "bx--tabs-trigger-text",
        href: triggerHref,
        onClick: this.handleDropdownClick
      }, selectedLabel), React.createElement(Icon, {
        description: iconDescription,
        name: "caret--down"
      })), React.createElement("ul", {
        role: "tablist",
        className: classes.tablist
      }, tabsWithProps)), tabContentWithProps);
    }
  }]);

  _inherits(Tabs, _React$Component);

  return Tabs;
}(React.Component);

_defineProperty(Tabs, "propTypes", {
  ariaLabel: PropTypes.string,
  children: PropTypes.node,
  className: PropTypes.string,
  hidden: PropTypes.bool,
  href: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  onKeyDown: PropTypes.func,

  /** Called whenever selection changes, with index of the tab that was selected */
  onSelectionChange: PropTypes.func,
  triggerHref: PropTypes.string.isRequired,
  selected: PropTypes.number,
  iconDescription: PropTypes.string.isRequired
});

_defineProperty(Tabs, "defaultProps", {
  iconDescription: 'show menu options',
  role: 'navigation',
  href: '#',
  triggerHref: '#',
  selected: 0,
  ariaLabel: 'listbox'
});

export { Tabs as default };