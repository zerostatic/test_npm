(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('prop-types'), require('react'), require('carbon-icons'), require('classnames'), require('react-dom')) :
  typeof define === 'function' && define.amd ? define(['exports', 'prop-types', 'react', 'carbon-icons', 'classnames', 'react-dom'], factory) :
  (factory((global.CarbonComponentsReact = {}),global.PropTypes,global.React,global.CarbonIcons,global.classNames,global.ReactDOM));
}(this, (function (exports,PropTypes,React,icons,classNames,ReactDOM) { 'use strict';

  PropTypes = PropTypes && PropTypes.hasOwnProperty('default') ? PropTypes['default'] : PropTypes;
  var React__default = 'default' in React ? React['default'] : React;
  icons = icons && icons.hasOwnProperty('default') ? icons['default'] : icons;
  classNames = classNames && classNames.hasOwnProperty('default') ? classNames['default'] : classNames;
  ReactDOM = ReactDOM && ReactDOM.hasOwnProperty('default') ? ReactDOM['default'] : ReactDOM;

  function _typeof(obj) {
    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
      _typeof = function (obj) {
        return typeof obj;
      };
    } else {
      _typeof = function (obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
      };
    }

    return _typeof(obj);
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }

  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  }

  function _extends() {
    _extends = Object.assign || function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];

        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }

      return target;
    };

    return _extends.apply(this, arguments);
  }

  function _objectSpread(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i] != null ? arguments[i] : {};
      var ownKeys = Object.keys(source);

      if (typeof Object.getOwnPropertySymbols === 'function') {
        ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
          return Object.getOwnPropertyDescriptor(source, sym).enumerable;
        }));
      }

      ownKeys.forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    }

    return target;
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }

    _setPrototypeOf(subClass.prototype, superClass && superClass.prototype);

    if (superClass) _setPrototypeOf(subClass, superClass);
  }

  function _getPrototypeOf(o) {
    _getPrototypeOf = Object.getPrototypeOf || function _getPrototypeOf(o) {
      return o.__proto__;
    };

    return _getPrototypeOf(o);
  }

  function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };

    return _setPrototypeOf(o, p);
  }

  function _objectWithoutProperties(source, excluded) {
    if (source == null) return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;

    for (i = 0; i < sourceKeys.length; i++) {
      key = sourceKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      target[key] = source[key];
    }

    if (Object.getOwnPropertySymbols) {
      var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

      for (i = 0; i < sourceSymbolKeys.length; i++) {
        key = sourceSymbolKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
        target[key] = source[key];
      }
    }

    return target;
  }

  function _assertThisInitialized(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  }

  function _possibleConstructorReturn(self, call) {
    if (call && (typeof call === "object" || typeof call === "function")) {
      return call;
    }

    return _assertThisInitialized(self);
  }

  function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
  }

  function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) {
      for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

      return arr2;
    }
  }

  function _iterableToArray(iter) {
    if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
  }

  function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance");
  }

  /**
   * Returns a single icon Object
   * @param {string} name - "name" property of icon
   * @param {Object} [iconsObj=icons] - JSON Array of Objects
   * @example
   * // Returns a single icon Object
   * this.findIcon('copy-code', icons.json);
   */

  function findIcon(name) {
    var iconsObj = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : icons;
    var icon = iconsObj.filter(function (obj) {
      return obj.name === name;
    });

    if (icon.length === 0) {
      return false;
    } else if (icon.length > 1) {
      throw new Error('Multiple icons found...');
    } else {
      return icon[0];
    }
  }
  /**
   * Returns Elements/Nodes for SVG
   * @param {Object} svgData - JSON Object for an SVG icon
   * @example
   * // Returns SVG elements
   * const svgData = getSvgData('copy-code');
   * svgShapes(svgData);
   */

  function svgShapes(svgData) {
    var svgElements = Object.keys(svgData).filter(function (key) {
      return svgData[key];
    }).map(function (svgProp) {
      var data = svgData[svgProp];

      if (svgProp === 'circles') {
        return data.map(function (circle, index) {
          var circleProps = {
            cx: circle.cx,
            cy: circle.cy,
            r: circle.r,
            key: "circle".concat(index)
          };
          return React__default.createElement("circle", circleProps);
        });
      } else if (svgProp === 'paths') {
        return data.map(function (path, index) {
          return React__default.createElement("path", {
            d: path.d,
            key: "key".concat(index)
          });
        });
      }

      return '';
    });
    return svgElements;
  }
  function isPrefixed(name) {
    return name.split('--')[0] === 'icon';
  }

  var Icon = function Icon(_ref) {
    var className = _ref.className,
        description = _ref.description,
        fill = _ref.fill,
        fillRule = _ref.fillRule,
        height = _ref.height,
        name = _ref.name,
        role = _ref.role,
        style = _ref.style,
        width = _ref.width,
        iconRef = _ref.iconRef,
        other = _objectWithoutProperties(_ref, ["className", "description", "fill", "fillRule", "height", "name", "role", "style", "width", "iconRef"]);

    var icon = isPrefixed(name) ? findIcon(name) : findIcon("icon--".concat(name));

    var props = _objectSpread({
      className: className,
      fill: fill,
      fillRule: fillRule,
      height: height || icon.height,
      name: isPrefixed ? name : "icon--".concat(name),
      role: role,
      style: style,
      viewBox: icon.viewBox,
      width: width || icon.width,
      ref: iconRef
    }, other);

    var svgContent = icon ? svgShapes(icon.svgData) : '';
    return React__default.createElement("svg", _extends({}, props, {
      "aria-label": description,
      alt: description
    }), React__default.createElement("title", null, description), svgContent);
  };

  Icon.propTypes = {
    /**
     * The CSS class name.
     */
    className: PropTypes.string,

    /**
     * The icon description.
     */
    description: PropTypes.string.isRequired,

    /**
     * The `<svg>` `fill` attribute.
     */
    fill: PropTypes.string,

    /**
     * The `<svg>` `fillRule` attribute.
     */
    fillRule: PropTypes.string,

    /**
     * The `<svg>` `height` attribute.
     */
    height: PropTypes.string,

    /**
     * The name in the sprite.
     */
    name: PropTypes.string.isRequired,

    /**
     * The `role` attribute.
     */
    role: PropTypes.string,

    /**
     * The CSS styles.
     */
    style: PropTypes.object,

    /**
     * The `<svg>` `viewbox` attribute.
     */
    viewBox: PropTypes.string,

    /**
     * The `<svg>` `width` attribute.
     */
    width: PropTypes.string,

    /**
     * The `ref` callback for the icon.
     */
    iconRef: PropTypes.func
  };
  Icon.defaultProps = {
    fillRule: 'evenodd',
    role: 'img',
    description: 'Provide a description that will be used as the title'
  };

  var IconSkeleton = function IconSkeleton(_ref) {
    var style = _ref.style;
    var props = {
      style: style
    };
    return React__default.createElement("div", _extends({
      className: "bx--icon--skeleton"
    }, props));
  };

  IconSkeleton.propTypes = {
    /**
     * The CSS styles.
     */
    style: PropTypes.object
  };

  var SkeletonText = function SkeletonText(_ref) {
    var paragraph = _ref.paragraph,
        lineCount = _ref.lineCount,
        width = _ref.width,
        heading = _ref.heading,
        className = _ref.className,
        other = _objectWithoutProperties(_ref, ["paragraph", "lineCount", "width", "heading", "className"]);

    var skeletonTextClasses = classNames(_defineProperty({
      'bx--skeleton__text': true,
      'bx--skeleton__heading': heading
    }, className, className));
    var widthNum = parseInt(width, 10);
    var widthPx = width.includes('px');
    var widthPercent = width.includes('%');

    function getRandomInt(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    if (widthPercent & paragraph) {
      var lines = [];

      for (var i = 0; i < lineCount; i++) {
        var randomWidth = getRandomInt(0, 75) + 'px';
        lines.push(React__default.createElement("p", _extends({
          className: skeletonTextClasses,
          style: {
            width: "calc(".concat(width, " - ").concat(randomWidth, ")")
          },
          key: i
        }, other)));
      }

      return React__default.createElement("div", null, lines);
    }

    if (widthPx & paragraph) {
      var _lines = [];

      for (var j = 0; j < lineCount; j++) {
        var _randomWidth = getRandomInt(widthNum - 75, widthNum) + 'px';

        _lines.push(React__default.createElement("p", _extends({
          className: skeletonTextClasses,
          style: {
            width: _randomWidth
          },
          key: j
        }, other)));
      }

      return React__default.createElement("div", null, _lines);
    }

    return React__default.createElement("p", _extends({
      className: skeletonTextClasses,
      style: {
        width: width
      }
    }, other));
  };

  SkeletonText.propTypes = {
    /**
     * will generate multiple lines of text
     */
    paragraph: PropTypes.bool,

    /**
     * the number of lines in a paragraph
     */
    lineCount: PropTypes.number,

    /**
     * width (in px or %) of single line of text or max-width of paragraph lines
     */
    width: PropTypes.string,

    /**
     * generates skeleton text at a larger size
     */
    heading: PropTypes.bool,
    className: PropTypes.string
  };
  SkeletonText.defaultProps = {
    paragraph: false,
    width: '100%',
    heading: false,
    lineCount: 3
  };

  var AccordionSkeleton =
  /*#__PURE__*/
  function (_React$Component) {
    function AccordionSkeleton() {
      _classCallCheck(this, AccordionSkeleton);

      return _possibleConstructorReturn(this, _getPrototypeOf(AccordionSkeleton).apply(this, arguments));
    }

    _createClass(AccordionSkeleton, [{
      key: "render",
      value: function render() {
        var item = React__default.createElement("li", {
          className: "bx--accordion__item"
        }, React__default.createElement("button", {
          type: "button",
          className: "bx--accordion__heading"
        }, React__default.createElement(Icon, {
          className: "bx--accordion__arrow",
          name: "chevron--right"
        }), React__default.createElement(SkeletonText, {
          className: "bx--accordion__title"
        })));
        return React__default.createElement("ul", {
          className: "bx--accordion bx--skeleton"
        }, React__default.createElement("li", {
          className: "bx--accordion__item bx--accordion__item--active"
        }, React__default.createElement("button", {
          type: "button",
          className: "bx--accordion__heading"
        }, React__default.createElement(Icon, {
          className: "bx--accordion__arrow",
          name: "chevron--right"
        }), React__default.createElement(SkeletonText, {
          className: "bx--accordion__title"
        })), React__default.createElement("div", {
          className: "bx--accordion__content"
        }, React__default.createElement(SkeletonText, {
          width: "90%"
        }), React__default.createElement(SkeletonText, {
          width: "80%"
        }), React__default.createElement(SkeletonText, {
          width: "95%"
        }))), item, item, item);
      }
    }]);

    _inherits(AccordionSkeleton, _React$Component);

    return AccordionSkeleton;
  }(React__default.Component);

  var Accordion = function Accordion(_ref) {
    var children = _ref.children,
        className = _ref.className,
        other = _objectWithoutProperties(_ref, ["children", "className"]);

    var classNames$$1 = classNames('bx--accordion', className);
    return React__default.createElement("ul", _extends({
      className: classNames$$1,
      role: "tablist",
      "aria-multiselectable": "true"
    }, other), children);
  };

  Accordion.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string
  };

  var AccordionItem =
  /*#__PURE__*/
  function (_Component) {
    function AccordionItem() {
      var _getPrototypeOf2;

      var _temp, _this;

      _classCallCheck(this, AccordionItem);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _possibleConstructorReturn(_this, (_temp = _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(AccordionItem)).call.apply(_getPrototypeOf2, [this].concat(args))), _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
        open: _this.props.open
      }), _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleClick", function (evt) {
        _this.props.onClick(evt);
      }), _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleHeadingClick", function (evt) {
        var open = !_this.state.open;

        _this.setState({
          open: open
        });

        _this.props.onHeadingClick({
          isOpen: open,
          event: evt
        });
      }), _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleKeyPress", function (evt) {
        var isKeyPressTarget = evt.target === evt.currentTarget;
        var isValidKeyPress = [13, 32].indexOf(evt.which) !== -1;

        if (isKeyPressTarget && isValidKeyPress) {
          _this.handleHeadingClick(evt);
        }
      }), _temp));
    }

    _createClass(AccordionItem, [{
      key: "componentWillReceiveProps",
      value: function componentWillReceiveProps(_ref) {
        var open = _ref.open;

        if (open !== this.props.open) {
          this.setState({
            open: open
          });
        }
      }
    }, {
      key: "render",
      value: function render() {
        var _this$props = this.props,
            className = _this$props.className,
            title = _this$props.title,
            children = _this$props.children,
            onClick = _this$props.onClick,
            onHeadingClick = _this$props.onHeadingClick,
            other = _objectWithoutProperties(_this$props, ["className", "title", "children", "onClick", "onHeadingClick"]);

        var classNames$$1 = classNames({
          'bx--accordion__item--active': this.state.open
        }, 'bx--accordion__item', className);
        return React__default.createElement("li", _extends({
          className: classNames$$1,
          onClick: this.handleClick,
          onKeyPress: this.handleKeyPress,
          role: "presentation"
        }, other), React__default.createElement("button", {
          type: "button",
          className: "bx--accordion__heading",
          role: "tab",
          onClick: this.handleHeadingClick
        }, React__default.createElement(Icon, {
          className: "bx--accordion__arrow",
          name: "chevron--right",
          description: "Expand/Collapse"
        }), React__default.createElement("p", {
          className: "bx--accordion__title"
        }, title)), React__default.createElement("div", {
          className: "bx--accordion__content"
        }, children));
      }
    }]);

    _inherits(AccordionItem, _Component);

    return AccordionItem;
  }(React.Component);

  _defineProperty(AccordionItem, "propTypes", {
    children: PropTypes.node,
    className: PropTypes.string,
    title: PropTypes.node,
    open: PropTypes.bool,
    onClick: PropTypes.func,
    onHeadingClick: PropTypes.func
  });

  _defineProperty(AccordionItem, "defaultProps", {
    title: 'title',
    open: false,
    onClick: function onClick() {},
    onHeadingClick: function onHeadingClick() {}
  });

  var BreadcrumbSkeleton =
  /*#__PURE__*/
  function (_React$Component) {
    function BreadcrumbSkeleton() {
      _classCallCheck(this, BreadcrumbSkeleton);

      return _possibleConstructorReturn(this, _getPrototypeOf(BreadcrumbSkeleton).apply(this, arguments));
    }

    _createClass(BreadcrumbSkeleton, [{
      key: "render",
      value: function render() {
        var item = React__default.createElement("div", {
          className: "bx--breadcrumb-item"
        }, React__default.createElement("a", {
          href: "/#",
          className: "bx--link"
        }, "\xA0"));
        return React__default.createElement("div", {
          className: "bx--breadcrumb bx--skeleton"
        }, item, item, item);
      }
    }]);

    _inherits(BreadcrumbSkeleton, _React$Component);

    return BreadcrumbSkeleton;
  }(React__default.Component);

  var Breadcrumb = function Breadcrumb(_ref) {
    var children = _ref.children,
        className = _ref.className,
        other = _objectWithoutProperties(_ref, ["children", "className"]);

    var classNames$$1 = classNames('bx--breadcrumb', className);
    return React__default.createElement("div", _extends({
      className: classNames$$1
    }, other), children);
  };

  Breadcrumb.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string
  };

  var Link = function Link(_ref) {
    var children = _ref.children,
        className = _ref.className,
        href = _ref.href,
        other = _objectWithoutProperties(_ref, ["children", "className", "href"]);

    var classNames$$1 = classNames('bx--link', className);
    return React__default.createElement("a", _extends({
      href: href,
      className: classNames$$1
    }, other), children);
  };

  Link.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    href: PropTypes.string
  };

  var newChild = function newChild(children, href) {
    if (typeof children === 'string' && !(href === undefined)) {
      return React__default.createElement(Link, {
        href: href
      }, children);
    } else {
      return React__default.cloneElement(React__default.Children.only(children), {
        className: 'bx--link'
      });
    }
  };

  var BreadcrumbItem = function BreadcrumbItem(_ref) {
    var children = _ref.children,
        className = _ref.className,
        href = _ref.href,
        other = _objectWithoutProperties(_ref, ["children", "className", "href"]);

    var classNames$$1 = classNames('bx--breadcrumb-item', className);
    return React__default.createElement("div", _extends({
      className: classNames$$1
    }, other), newChild(children, href));
  };

  BreadcrumbItem.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    href: PropTypes.string
  };

  var ButtonSkeleton = function ButtonSkeleton(_ref) {
    var small = _ref.small,
        href = _ref.href;
    var buttonClasses = classNames({
      'bx--skeleton': true,
      'bx--btn': true,
      'bx--btn--sm': small
    });
    var commonProps = {
      className: buttonClasses
    };
    var button = React__default.createElement("button", _extends({}, commonProps, {
      type: "button"
    }));
    var anchor = React__default.createElement("a", _extends({}, commonProps, {
      href: href,
      role: "button"
    })); // eslint-disable-line

    return href ? anchor : button;
  };

  ButtonSkeleton.propTypes = {
    small: PropTypes.bool,
    href: PropTypes.string
  };
  ButtonSkeleton.defaultProps = {
    small: false
  };

  var Button = function Button(_ref) {
    var children = _ref.children,
        className = _ref.className,
        disabled = _ref.disabled,
        small = _ref.small,
        kind = _ref.kind,
        href = _ref.href,
        tabIndex = _ref.tabIndex,
        type = _ref.type,
        icon = _ref.icon,
        iconDescription = _ref.iconDescription,
        other = _objectWithoutProperties(_ref, ["children", "className", "disabled", "small", "kind", "href", "tabIndex", "type", "icon", "iconDescription"]);

    var buttonClasses = classNames(className, {
      'bx--btn': true,
      'bx--btn--sm': small,
      'bx--btn--primary': kind === 'primary',
      'bx--btn--danger': kind === 'danger',
      'bx--btn--secondary': kind === 'secondary',
      'bx--btn--ghost': kind === 'ghost',
      'bx--btn--danger--primary': kind === 'danger--primary',
      'bx--btn--tertiary': kind === 'tertiary'
    });
    var commonProps = {
      tabIndex: tabIndex,
      className: buttonClasses
    };
    var buttonImage = icon ? React__default.createElement(Icon, {
      name: icon,
      description: iconDescription,
      className: "bx--btn__icon"
    }) : null;
    var button = React__default.createElement("button", _extends({}, other, commonProps, {
      disabled: disabled,
      type: type
    }), children, buttonImage);
    var anchor = React__default.createElement("a", _extends({}, other, commonProps, {
      href: href,
      role: "button"
    }), children, buttonImage);
    return href ? anchor : button;
  };

  Button.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    disabled: PropTypes.bool,
    small: PropTypes.bool,
    kind: PropTypes.oneOf(['primary', 'secondary', 'danger', 'ghost', 'danger--primary', 'tertiary']).isRequired,
    href: PropTypes.string,
    tabIndex: PropTypes.number,
    type: PropTypes.oneOf(['button', 'reset', 'submit']),
    role: PropTypes.string,
    icon: PropTypes.string,
    iconDescription: function iconDescription(props) {
      if (props.icon && !props.iconDescription) {
        return new Error('icon property specified without also providing an iconDescription property.');
      }

      return undefined;
    }
  };
  Button.defaultProps = {
    iconDescription: 'Provide icon description if icon is used',
    tabIndex: 0,
    type: 'button',
    disabled: false,
    small: false,
    kind: 'primary'
  };

  var Card = function Card(_ref) {
    var children = _ref.children,
        className = _ref.className,
        tabIndex = _ref.tabIndex,
        other = _objectWithoutProperties(_ref, ["children", "className", "tabIndex"]);

    var cardClasses = classNames(_defineProperty({
      'bx--card': true
    }, className, className));
    return React__default.createElement("div", _extends({}, other, {
      className: cardClasses,
      tabIndex: tabIndex
    }), children);
  };

  Card.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    tabIndex: PropTypes.number,
    onBlur: PropTypes.func,
    onClick: PropTypes.func,
    onFocus: PropTypes.func,
    onKeyDown: PropTypes.func,
    onKeyUp: PropTypes.func,
    onMouseDown: PropTypes.func,
    onMouseEnter: PropTypes.func,
    onMouseLeave: PropTypes.func,
    onMouseUp: PropTypes.func
  };
  Card.defaultProps = {
    tabIndex: 0
  };

  var CardActionItem = function CardActionItem(_ref) {
    var className = _ref.className,
        id = _ref.id,
        ariaLabel = _ref.ariaLabel,
        iconName = _ref.iconName,
        description = _ref.description,
        other = _objectWithoutProperties(_ref, ["className", "id", "ariaLabel", "iconName", "description"]);

    var cardActionItemClasses = classNames(_defineProperty({
      'bx--app-actions__button': true
    }, className, className));
    return React__default.createElement("button", _extends({}, other, {
      className: cardActionItemClasses,
      id: id,
      "aria-label": ariaLabel
    }), React__default.createElement(Icon, {
      className: "bx--app-actions__button--icon",
      name: iconName,
      description: description
    }));
  };

  CardActionItem.propTypes = {
    className: PropTypes.string,
    id: PropTypes.string,
    ariaLabel: PropTypes.string,
    iconName: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
  };
  CardActionItem.defaultProps = {
    ariaLabel: '',
    description: 'card action'
  };

  var CardActions = function CardActions(_ref) {
    var children = _ref.children,
        className = _ref.className,
        other = _objectWithoutProperties(_ref, ["children", "className"]);

    var cardActionClasses = classNames(_defineProperty({
      'bx--card-footer__app-actions': true
    }, className, className));
    return React__default.createElement("div", _extends({
      className: cardActionClasses
    }, other), children);
  };

  CardActions.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string
  };

  /**
   * Copyright 2014-2015, Facebook, Inc.
   * All rights reserved.
   *
   * This source code is licensed under the BSD-style license found in the
   * LICENSE file in the root directory of this source tree. An additional grant
   * of patent rights can be found in the PATENTS file in the same directory.
   */

  /**
   * Similar to invariant but only logs a warning if the condition is not met.
   * This can be used to log issues in development environments in critical
   * paths. Removing the logging code for production environments will keep the
   * same logic and follow the same code paths.
   */

  var __DEV__ = "development" !== 'production';

  var warning = function() {};

  if (__DEV__) {
    warning = function(condition, format, args) {
      var len = arguments.length;
      args = new Array(len > 2 ? len - 2 : 0);
      for (var key = 2; key < len; key++) {
        args[key - 2] = arguments[key];
      }
      if (format === undefined) {
        throw new Error(
          '`warning(condition, format, ...args)` requires a warning ' +
          'message argument'
        );
      }

      if (format.length < 10 || (/^[s\W]*$/).test(format)) {
        throw new Error(
          'The warning format should be able to uniquely identify this ' +
          'warning. Please, use a more descriptive format than: ' + format
        );
      }

      if (!condition) {
        var argIndex = 0;
        var message = 'Warning: ' +
          format.replace(/%s/g, function() {
            return args[argIndex++];
          });
        if (typeof console !== 'undefined') {
          console.error(message);
        }
        try {
          // This error was thrown as a convenience so that you can use this stack
          // to find the callsite that caused this warning to fire.
          throw new Error(message);
        } catch(x) {}
      }
    };
  }

  var warning_1 = warning;

  var CardContent = function CardContent(_ref) {
    var className = _ref.className,
        children = _ref.children,
        cardIcon = _ref.cardIcon,
        cardTitle = _ref.cardTitle,
        cardLink = _ref.cardLink,
        cardInfo = _ref.cardInfo,
        iconDescription = _ref.iconDescription,
        other = _objectWithoutProperties(_ref, ["className", "children", "cardIcon", "cardTitle", "cardLink", "cardInfo", "iconDescription"]);

    var cardContentClasses = classNames(_defineProperty({
      'bx--card__card-overview': true
    }, className, className));
    var cardLinkContent = cardLink ? cardLink.map(function (link, key) {
      return React__default.createElement("a", {
        key: key,
        href: link,
        className: "bx--about__title--link"
      }, link);
    }) : '';
    var cardInfoContent = cardInfo ? cardInfo.map(function (info, key) {
      return React__default.createElement("h4", {
        key: key,
        className: "bx--about__title--additional-info"
      }, info);
    }) : '';
    var cardLinkContentArray = Object.keys(cardLinkContent);
    var cardInfoContentArray = Object.keys(cardInfoContent);
    warning_1(!React.isValidElement(cardIcon) || iconDescription === CardContent.defaultProps.iconDescription, "Specified a custom icon while the icon description is provided.\nIt'll be ignored as an icon description is only used for carbon-icons sprite.");
    return React__default.createElement("div", _extends({}, other, {
      className: cardContentClasses
    }), children, React__default.createElement("div", {
      className: "bx--card-overview__about"
    }, cardIcon && React__default.createElement("div", {
      className: "bx--about__icon"
    }, React.isValidElement(cardIcon) ? cardIcon : React__default.createElement(Icon, {
      className: "bx--about__icon--img",
      name: cardIcon,
      description: iconDescription
    })), React__default.createElement("div", {
      className: "bx--about__title"
    }, React__default.createElement("p", {
      id: "card-app-title",
      className: "bx--about__title--name"
    }, cardTitle), cardLinkContentArray.map(function (info, key) {
      return cardLinkContent[key];
    }), cardInfoContentArray.map(function (info, key) {
      return cardInfoContent[key];
    }))));
  };

  CardContent.propTypes = {
    /**
     * The child nodes.
     */
    children: PropTypes.node,

    /**
     * The name of icon sprite, or icon itself.
     */
    cardIcon: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),

    /**
     * The title of the card.
     */
    cardTitle: PropTypes.string,

    /**
     * A link to put in the card.
     */
    cardLink: PropTypes.node,

    /**
     * Additional info to put in the card.
     */
    cardInfo: PropTypes.array,

    /**
     * The CSS class names.
     */
    className: PropTypes.string,

    /**
     * The description of the icon.
     */
    iconDescription: PropTypes.string
  };
  CardContent.defaultProps = {
    iconDescription: 'card icon',
    cardIcon: 'app-services',
    cardTitle: 'card title'
  };

  var CardFooter = function CardFooter(_ref) {
    var children = _ref.children,
        className = _ref.className,
        other = _objectWithoutProperties(_ref, ["children", "className"]);

    var cardFooterClasses = classNames(_defineProperty({
      'bx--card-footer': true
    }, className, className));
    return React__default.createElement("div", _extends({
      className: cardFooterClasses
    }, other), children);
  };

  CardFooter.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string
  };

  var appStatus = {
    RUNNING: 0,
    NOT_RUNNING: 1,
    STOPPED: 2
  };

  function createCardStatusContent(status, labels) {
    var cardStatusArray = ['running', 'not-running', 'stopped'];
    var statusText = cardStatusArray[status];

    if (statusText) {
      var cardStatusClassName = "bx--card-footer__app-status--".concat(statusText, " active");
      var cardStatusTextClassName = "bx--".concat(statusText, "__text");
      return React__default.createElement("div", {
        className: cardStatusClassName
      }, React__default.createElement("div", {
        className: cardStatusTextClassName
      }, labels["".concat(statusText.replace(/(-(\w))/g, function (match, separator, letter) {
        return letter.toUpperCase();
      }), "Text")]));
    }

    return '';
  }

  var CardStatus = function CardStatus(_ref) {
    var className = _ref.className,
        status = _ref.status,
        runningText = _ref.runningText,
        notRunningText = _ref.notRunningText,
        stoppedText = _ref.stoppedText,
        other = _objectWithoutProperties(_ref, ["className", "status", "runningText", "notRunningText", "stoppedText"]);

    var cardStatusClasses = classNames(_defineProperty({
      'bx--card-footer__app-status': true
    }, className, className));
    var labels = {
      runningText: runningText,
      notRunningText: notRunningText,
      stoppedText: stoppedText
    };
    return React__default.createElement("div", _extends({
      className: cardStatusClasses
    }, other), createCardStatusContent(status, labels));
  };

  CardStatus.propTypes = {
    status: PropTypes.number,
    className: PropTypes.string,
    runningText: PropTypes.string,
    notRunningText: PropTypes.string,
    stoppedText: PropTypes.string
  };
  CardStatus.defaultProps = {
    status: 0,
    runningText: 'Running',
    notRunningText: 'Not Running',
    stoppedText: 'Stopped'
  };
  CardStatus.appStatus = appStatus;

  var CheckboxSkeleton =
  /*#__PURE__*/
  function (_React$Component) {
    function CheckboxSkeleton() {
      _classCallCheck(this, CheckboxSkeleton);

      return _possibleConstructorReturn(this, _getPrototypeOf(CheckboxSkeleton).apply(this, arguments));
    }

    _createClass(CheckboxSkeleton, [{
      key: "render",
      value: function render() {
        var id = this.props.id;
        return React__default.createElement("div", {
          className: "bx--form-item bx--checkbox-wrapper"
        }, React__default.createElement("label", {
          className: "bx--checkbox-label bx--skeleton",
          htmlFor: id
        }));
      }
    }]);

    _inherits(CheckboxSkeleton, _React$Component);

    return CheckboxSkeleton;
  }(React__default.Component);

  var Checkbox = function Checkbox(_ref) {
    var className = _ref.className,
        id = _ref.id,
        labelText = _ref.labelText,
        _onChange = _ref.onChange,
        indeterminate = _ref.indeterminate,
        hideLabel = _ref.hideLabel,
        wrapperClassName = _ref.wrapperClassName,
        other = _objectWithoutProperties(_ref, ["className", "id", "labelText", "onChange", "indeterminate", "hideLabel", "wrapperClassName"]);

    var input;
    var labelClasses = classNames('bx--checkbox-label', className);
    var innerLabelClasses = classNames({
      'bx--visually-hidden': hideLabel
    });
    var wrapperClasses = classNames('bx--form-item', 'bx--checkbox-wrapper', wrapperClassName);
    return React__default.createElement("div", {
      className: wrapperClasses
    }, React__default.createElement("input", _extends({}, other, {
      type: "checkbox",
      onChange: function onChange(evt) {
        _onChange(input.checked, id, evt);
      },
      className: "bx--checkbox",
      id: id,
      ref: function ref(el) {
        input = el;

        if (input) {
          input.indeterminate = indeterminate;
        }
      }
    })), React__default.createElement("label", {
      htmlFor: id,
      className: labelClasses
    }, React__default.createElement("span", {
      className: innerLabelClasses
    }, labelText)));
  };

  Checkbox.propTypes = {
    checked: PropTypes.bool,
    defaultChecked: PropTypes.bool,
    indeterminate: PropTypes.bool,

    /**
     * The CSS class name to be placed on inner label element.
     */
    className: PropTypes.string,
    disabled: PropTypes.bool,
    id: PropTypes.string.isRequired,
    labelText: PropTypes.node.isRequired,
    hideLabel: PropTypes.bool,
    onChange: PropTypes.func,

    /**
     * The CSS class name to be placed on the wrapping element
     */
    wrapperClassName: PropTypes.string
  };
  Checkbox.defaultProps = {
    onChange: function onChange() {},
    indeterminate: false
  };

  var CodeSnippetSkeleton = function CodeSnippetSkeleton(_ref) {
    var className = _ref.className,
        type = _ref.type;
    var snippetType = type === 'terminal' ? 'bx--snippet--terminal' : 'bx--snippet--code';
    var wrapperClasses = classNames('bx--snippet', 'bx--skeleton', className, snippetType);
    return React__default.createElement("div", {
      className: wrapperClasses
    }, React__default.createElement("div", {
      className: "bx--snippet-container"
    }, React__default.createElement("code", null, React__default.createElement("pre", null))));
  };

  CodeSnippetSkeleton.propTypes = {
    type: PropTypes.string,
    className: PropTypes.string
  };
  CodeSnippetSkeleton.defaultProps = {
    type: 'terminal'
  };

  var CopyButton =
  /*#__PURE__*/
  function (_Component) {
    function CopyButton() {
      var _getPrototypeOf2;

      var _temp, _this;

      _classCallCheck(this, CopyButton);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _possibleConstructorReturn(_this, (_temp = _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(CopyButton)).call.apply(_getPrototypeOf2, [this].concat(args))), _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
        showFeedback: false
      }), _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleClick", function (evt) {
        _this.setState({
          showFeedback: true
        });

        _this.timeoutId = setTimeout(function () {
          _this.setState({
            showFeedback: false
          });
        }, _this.props.feedbackTimeout);

        _this.props.onClick(evt);
      }), _temp));
    }

    _createClass(CopyButton, [{
      key: "componentWillUnmount",

      /* istanbul ignore next */
      value: function componentWillUnmount() {
        if (typeof this.timeoutId !== 'undefined') {
          clearTimeout(this.timeoutId);
          delete this.timeoutId;
        }
      }
    }, {
      key: "render",
      // eslint-disable-line no-unused-vars
      value: function render() {
        var _this$props = this.props,
            iconDescription = _this$props.iconDescription,
            className = _this$props.className,
            feedback = _this$props.feedback,
            feedbackTimeout = _this$props.feedbackTimeout,
            onClick = _this$props.onClick,
            other = _objectWithoutProperties(_this$props, ["iconDescription", "className", "feedback", "feedbackTimeout", "onClick"]);

        var classNames$$1 = classNames('bx--snippet-button', className);
        var feedbackClassNames = classNames('bx--btn--copy__feedback', {
          'bx--btn--copy__feedback--displayed': this.state.showFeedback
        });
        return React__default.createElement("button", _extends({
          type: "button",
          className: classNames$$1,
          onClick: this.handleClick
        }, other), React__default.createElement(Icon, {
          className: "bx--snippet__icon",
          name: "copy",
          description: iconDescription
        }), React__default.createElement("div", {
          className: feedbackClassNames,
          "data-feedback": feedback
        }));
      }
    }]);

    _inherits(CopyButton, _Component);

    return CopyButton;
  }(React.Component);

  _defineProperty(CopyButton, "propTypes", {
    children: PropTypes.node,
    className: PropTypes.string,
    iconDescription: PropTypes.string,
    feedback: PropTypes.string,
    feedbackTimeout: PropTypes.number,
    onClick: PropTypes.func
  });

  _defineProperty(CopyButton, "defaultProps", {
    iconDescription: 'Copy to clipboard',
    feedback: 'Copied!',
    feedbackTimeout: 2000,
    onClick: function onClick() {}
  });

  var CodeSnippet = function CodeSnippet(_ref) {
    var className = _ref.className,
        type = _ref.type,
        children = _ref.children,
        feedback = _ref.feedback,
        onClick = _ref.onClick,
        wrappedContentRef = _ref.wrappedContentRef,
        other = _objectWithoutProperties(_ref, ["className", "type", "children", "feedback", "onClick", "wrappedContentRef"]);

    var snippetType = type === 'terminal' ? 'bx--snippet--terminal' : 'bx--snippet--code';
    var wrapperClasses = classNames('bx--snippet', className, snippetType);
    return React__default.createElement("div", _extends({
      className: wrapperClasses
    }, other), React__default.createElement("div", {
      role: "textbox",
      tabIndex: 0,
      className: "bx--snippet-container"
    }, React__default.createElement("code", null, React__default.createElement("pre", {
      ref: wrappedContentRef
    }, children))), React__default.createElement(CopyButton, {
      onClick: onClick,
      feedback: feedback
    }));
  };

  CodeSnippet.propTypes = {
    type: PropTypes.string,
    className: PropTypes.string,
    children: PropTypes.string,
    feedback: PropTypes.string,
    onClick: PropTypes.func,
    wrappedContentRef: PropTypes.func
  };
  CodeSnippet.defaultProps = {
    type: 'terminal'
  };

  // istanbul ignore next
  var statusDiv = typeof document === 'undefined' ? null : document.getElementById('a11y-status-message');

  var statuses = [];

  function setStatus(status) {
    var isSameAsLast = statuses[statuses.length - 1] === status;
    if (isSameAsLast) {
      statuses = [].concat(statuses, [status]);
    } else {
      statuses = [status];
    }
    var div = getStatusDiv();

    // Remove previous children
    while (div.lastChild) {
      div.removeChild(div.firstChild);
    }

    statuses.filter(Boolean).forEach(function (statusItem, index) {
      div.appendChild(getStatusChildDiv(statusItem, index));
    });
  }

  function getStatusChildDiv(status, index) {
    var display = index === statuses.length - 1 ? 'block' : 'none';

    var childDiv = document.createElement('div');
    childDiv.style.display = display;
    childDiv.textContent = status;

    return childDiv;
  }

  function getStatusDiv() {
    if (statusDiv) {
      return statusDiv;
    }
    statusDiv = document.createElement('div');
    statusDiv.setAttribute('id', 'a11y-status-message');
    statusDiv.setAttribute('role', 'status');
    statusDiv.setAttribute('aria-live', 'assertive');
    statusDiv.setAttribute('aria-relevant', 'additions text');
    Object.assign(statusDiv.style, {
      border: '0',
      clip: 'rect(0 0 0 0)',
      height: '1px',
      margin: '-1px',
      overflow: 'hidden',
      padding: '0',
      position: 'absolute',
      width: '1px'
    });
    document.body.appendChild(statusDiv);
    return statusDiv;
  }

  var idCounter = 0;

  /**
   * Accepts a parameter and returns it if it's a function
   * or a noop function if it's not. This allows us to
   * accept a callback, but not worry about it if it's not
   * passed.
   * @param {Function} cb the callback
   * @return {Function} a function
   */
  function cbToCb(cb) {
    return typeof cb === 'function' ? cb : noop;
  }
  function noop() {}

  function findParent(finder, node, rootNode) {
    if (node !== null && node !== rootNode.parentNode) {
      if (finder(node)) {
        if (node === document.body && node.scrollTop === 0) {
          // in chrome body.scrollTop always return 0
          return document.documentElement;
        }
        return node;
      } else {
        return findParent(finder, node.parentNode, rootNode);
      }
    } else {
      return null;
    }
  }

  /**
   * Get the closest element that scrolls
   * @param {HTMLElement} node - the child element to start searching for scroll parent at
   * @param {HTMLElement} rootNode - the root element of the component
   * @return {HTMLElement} the closest parentNode that scrolls
   */
  var getClosestScrollParent = findParent.bind(null, function (node) {
    return node.scrollHeight > node.clientHeight;
  });

  /**
   * Scroll node into view if necessary
   * @param {HTMLElement} node - the element that should scroll into view
   * @param {HTMLElement} rootNode - the root element of the component
   * @param {Boolean} alignToTop - align element to the top of the visible area of the scrollable ancestor
   */
  // eslint-disable-next-line complexity
  function scrollIntoView(node, rootNode) {
    var scrollParent = getClosestScrollParent(node, rootNode);
    if (scrollParent === null) {
      return;
    }
    var scrollParentStyles = getComputedStyle(scrollParent);
    var scrollParentRect = scrollParent.getBoundingClientRect();
    var scrollParentBorderTopWidth = parseInt(scrollParentStyles.borderTopWidth, 10);
    var scrollParentBorderBottomWidth = parseInt(scrollParentStyles.borderBottomWidth, 10);
    var bordersWidth = scrollParentBorderTopWidth + scrollParentBorderBottomWidth;
    var scrollParentTop = scrollParentRect.top + scrollParentBorderTopWidth;
    var nodeRect = node.getBoundingClientRect();

    if (nodeRect.top < 0 && scrollParentRect.top < 0) {
      scrollParent.scrollTop += nodeRect.top;
      return;
    }

    if (nodeRect.top < 0) {
      // the item is above the viewport and the parent is not above the viewport
      scrollParent.scrollTop += nodeRect.top - scrollParentTop;
      return;
    }

    if (nodeRect.top > 0 && scrollParentRect.top < 0) {
      if (scrollParentRect.bottom > 0 && nodeRect.bottom + bordersWidth > scrollParentRect.bottom) {
        // the item is below scrollable area
        scrollParent.scrollTop += nodeRect.bottom - scrollParentRect.bottom + bordersWidth;
      }
      // item and parent top are on different sides of view top border (do nothing)
      return;
    }

    var nodeOffsetTop = nodeRect.top + scrollParent.scrollTop;
    var nodeTop = nodeOffsetTop - scrollParentTop;
    if (nodeTop < scrollParent.scrollTop) {
      // the item is above the scrollable area
      scrollParent.scrollTop = nodeTop;
    } else if (nodeTop + nodeRect.height + bordersWidth > scrollParent.scrollTop + scrollParentRect.height) {
      // the item is below the scrollable area
      scrollParent.scrollTop = nodeTop + nodeRect.height - scrollParentRect.height + bordersWidth;
    }
    // the item is within the scrollable area (do nothing)
  }

  /**
   * @param {HTMLElement} parent the parent node
   * @param {HTMLElement} child the child node
   * @return {Boolean} whether the parent is the child or the child is in the parent
   */
  function isOrContainsNode(parent, child) {
    return parent === child || parent.contains(child);
  }

  /**
   * Simple debounce implementation. Will call the given
   * function once after the time given has passed since
   * it was last called.
   * @param {Function} fn the function to call after the time
   * @param {Number} time the time to wait
   * @return {Function} the debounced function
   */
  function debounce(fn, time) {
    var timeoutId = void 0;
    return wrapper;
    function wrapper() {
      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      if (timeoutId) {
        clearTimeout(timeoutId);
      }
      timeoutId = setTimeout(function () {
        timeoutId = null;
        fn.apply(undefined, args);
      }, time);
    }
  }

  /**
   * This is intended to be used to compose event handlers.
   * They are executed in order until one of them sets
   * `event.preventDownshiftDefault = true`.
   * @param {Function} fns the event handler functions
   * @return {Function} the event handler to add to an element
   */
  function composeEventHandlers() {
    for (var _len2 = arguments.length, fns = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      fns[_key2] = arguments[_key2];
    }

    return function (event) {
      for (var _len3 = arguments.length, args = Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
        args[_key3 - 1] = arguments[_key3];
      }

      return fns.some(function (fn) {
        fn && fn.apply(undefined, [event].concat(args));
        // TODO: remove everything after the || in the next breaking change
        return event.preventDownshiftDefault || event.defaultPrevented;
      });
    };
  }

  /**
   * This generates a unique ID for an instance of Downshift
   * @return {String} the unique ID
   */
  function generateId() {
    return String(idCounter++);
  }

  /**
   * Resets idCounter to 0. Used for SSR.
   */
  function resetIdCounter() {
    idCounter = 0;
  }

  /**
   * Returns the first argument that is not undefined
   * @param {...*} args the arguments
   * @return {*} the defined value
   */
  function firstDefined() {
    for (var _len4 = arguments.length, args = Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
      args[_key4] = arguments[_key4];
    }

    return args.find(function (a) {
      return typeof a !== 'undefined';
    });
  }

  // eslint-disable-next-line complexity
  function getA11yStatusMessage(_ref) {
    var isOpen = _ref.isOpen,
        highlightedItem = _ref.highlightedItem,
        selectedItem = _ref.selectedItem,
        resultCount = _ref.resultCount,
        previousResultCount = _ref.previousResultCount,
        itemToString = _ref.itemToString;

    if (!isOpen) {
      if (selectedItem) {
        return itemToString(selectedItem);
      } else {
        return '';
      }
    }

    if (!resultCount) {
      return 'No results.';
    } else if (!highlightedItem || resultCount !== previousResultCount) {
      return resultCount + ' ' + (resultCount === 1 ? 'result is' : 'results are') + ' available, use up and down arrow keys to navigate.';
    }
    return itemToString(highlightedItem);
  }

  /**
   * Takes an argument and if it's an array, returns the first item in the array
   * otherwise returns the argument
   * @param {*} arg the maybe-array
   * @param {*} defaultValue the value if arg is falsey not defined
   * @return {*} the arg or it's first item
   */
  function unwrapArray(arg, defaultValue) {
    arg = Array.isArray(arg) ? /* istanbul ignore next (preact) */arg[0] : arg;
    if (!arg && defaultValue) {
      return defaultValue;
    } else {
      return arg;
    }
  }

  /**
   * @param {Object} element (P)react element
   * @return {Boolean} whether it's a DOM element
   */
  function isDOMElement(element) {
    /* istanbul ignore if */
    if (element.nodeName) {
      // then this is preact
      return typeof element.nodeName === 'string';
    } else {
      // then we assume this is react
      return typeof element.type === 'string';
    }
  }

  /**
   * @param {Object} element (P)react element
   * @return {Object} the props
   */
  function getElementProps(element) {
    // props for react, attributes for preact
    return element.props || /* istanbul ignore next (preact) */element.attributes;
  }

  /**
   * Throws a helpful error message for required properties. Useful
   * to be used as a default in destructuring or object params.
   * @param {String} fnName the function name
   * @param {String} propName the prop name
   */
  function requiredProp(fnName, propName) {
    throw new Error('The property "' + propName + '" is required in "' + fnName + '"');
  }

  var stateKeys = ['highlightedIndex', 'inputValue', 'isOpen', 'selectedItem', 'type'];
  /**
   * @param {Object} state The state object
   * @return {Object} State that is relevant to downshift
   */
  function pickState() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    var result = {};
    stateKeys.forEach(function (k) {
      if (state.hasOwnProperty(k)) {
        result[k] = state[k];
      }
    });
    return result;
  }

  /**
   * Normalizes the 'key' property of a KeyboardEvent in IE/Edge
   * @param {Object} event a KeyboardEvent object
   * @return {String} keyboard key
   */
  function normalizeArrowKey(event) {
    var key = event.key,
        keyCode = event.keyCode;
    /* istanbul ignore next (ie) */

    if (keyCode >= 37 && keyCode <= 40 && key.indexOf('Arrow') !== 0) {
      return 'Arrow' + key;
    }
    return key;
  }

  /**
   * Simple check if the value passed is object literal
   * @param {*} obj any things
   * @return {Boolean} whether it's object literal
   */
  function isPlainObject(obj) {
    return Object.prototype.toString.call(obj) === '[object Object]';
  }

  var classCallCheck = function (instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };

  var _extends$1 = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  var inherits = function (subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
  };

  var objectWithoutProperties = function (obj, keys) {
    var target = {};

    for (var i in obj) {
      if (keys.indexOf(i) >= 0) continue;
      if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
      target[i] = obj[i];
    }

    return target;
  };

  var possibleConstructorReturn = function (self, call) {
    if (!self) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return call && (typeof call === "object" || typeof call === "function") ? call : self;
  };

  /* eslint camelcase:0 */

  var Downshift = function (_Component) {
    inherits(Downshift, _Component);

    function Downshift() {
      classCallCheck(this, Downshift);

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      var _this = possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args)));

      _initialiseProps.call(_this);

      var state = _this.getState({
        highlightedIndex: _this.props.defaultHighlightedIndex,
        isOpen: _this.props.defaultIsOpen,
        inputValue: _this.props.defaultInputValue,
        selectedItem: _this.props.defaultSelectedItem
      });
      if (state.selectedItem != null) {
        state.inputValue = _this.props.itemToString(state.selectedItem);
      }
      _this.state = state;
      _this.id = _this.props.id || 'downshift-' + generateId();
      return _this;
    }
    // itemCount can be changed asynchronously
    // from within downshift (so it can't come from a prop)
    // this is why we store it as an instance and use
    // getItemCount rather than just use items.length
    // (to support windowing + async)


    /**
     * Gets the state based on internal state or props
     * If a state value is passed via props, then that
     * is the value given, otherwise it's retrieved from
     * stateToMerge
     *
     * This will perform a shallow merge of the given state object
     * with the state coming from props
     * (for the controlled component scenario)
     * This is used in state updater functions so they're referencing
     * the right state regardless of where it comes from.
     *
     * @param {Object} stateToMerge defaults to this.state
     * @return {Object} the state
     */
    Downshift.prototype.getState = function getState() {
      var _this2 = this;

      var stateToMerge = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.state;

      return Object.keys(stateToMerge).reduce(function (state, key) {
        state[key] = _this2.isControlledProp(key) ? _this2.props[key] : stateToMerge[key];
        return state;
      }, {});
    };

    /**
     * This determines whether a prop is a "controlled prop" meaning it is
     * state which is controlled by the outside of this component rather
     * than within this component.
     * @param {String} key the key to check
     * @return {Boolean} whether it is a controlled controlled prop
     */


    Downshift.prototype.isControlledProp = function isControlledProp(key) {
      return this.props[key] !== undefined;
    };

    Downshift.prototype.getItemCount = function getItemCount() {
      // things read better this way. They're in priority order:
      // 1. `this.itemCount`
      // 2. `this.props.itemCount`
      // 3. `this.items.length`
      /* eslint-disable no-negated-condition */
      if (this.itemCount != null) {
        return this.itemCount;
      } else if (this.props.itemCount !== undefined) {
        return this.props.itemCount;
      } else {
        return this.items.length;
      }
      /* eslint-enable no-negated-condition */
    };

    Downshift.prototype.getItemNodeFromIndex = function getItemNodeFromIndex(index) {
      return this.props.environment.document.getElementById(this.getItemId(index));
    };

    Downshift.prototype.scrollHighlightedItemIntoView = function scrollHighlightedItemIntoView() {
      /* istanbul ignore else (react-native) */
      {
        var node = this.getItemNodeFromIndex(this.getState().highlightedIndex);
        scrollIntoView(node, this._rootNode);
      }
    };

    Downshift.prototype.moveHighlightedIndex = function moveHighlightedIndex(amount, otherStateToSet) {
      if (this.getState().isOpen) {
        this.changeHighlightedIndex(amount, otherStateToSet);
      } else {
        this.setHighlightedIndex(undefined, _extends$1({ isOpen: true }, otherStateToSet));
      }
    };

    // eslint-disable-next-line complexity


    Downshift.prototype.changeHighlightedIndex = function changeHighlightedIndex(moveAmount, otherStateToSet) {
      var itemsLastIndex = this.getItemCount() - 1;
      if (itemsLastIndex < 0) {
        return;
      }

      var _getState = this.getState(),
          highlightedIndex = _getState.highlightedIndex;

      var baseIndex = highlightedIndex;
      if (baseIndex === null) {
        baseIndex = moveAmount > 0 ? -1 : itemsLastIndex + 1;
      }
      var newIndex = baseIndex + moveAmount;
      if (newIndex < 0) {
        newIndex = itemsLastIndex;
      } else if (newIndex > itemsLastIndex) {
        newIndex = 0;
      }
      this.setHighlightedIndex(newIndex, otherStateToSet);
    };

    // any piece of our state can live in two places:
    // 1. Uncontrolled: it's internal (this.state)
    //    We will call this.setState to update that state
    // 2. Controlled: it's external (this.props)
    //    We will call this.props.onStateChange to update that state
    //
    // In addition, we'll call this.props.onChange if the
    // selectedItem is changed.


    Downshift.prototype.getStateAndHelpers = function getStateAndHelpers() {
      var _getState2 = this.getState(),
          highlightedIndex = _getState2.highlightedIndex,
          inputValue = _getState2.inputValue,
          selectedItem = _getState2.selectedItem,
          isOpen = _getState2.isOpen;

      var itemToString = this.props.itemToString;
      var id = this.id;
      var getRootProps = this.getRootProps,
          getButtonProps = this.getButtonProps,
          getToggleButtonProps = this.getToggleButtonProps,
          getLabelProps = this.getLabelProps,
          getInputProps = this.getInputProps,
          getItemProps = this.getItemProps,
          openMenu = this.openMenu,
          closeMenu = this.closeMenu,
          toggleMenu = this.toggleMenu,
          selectItem = this.selectItem,
          selectItemAtIndex = this.selectItemAtIndex,
          selectHighlightedItem = this.selectHighlightedItem,
          setHighlightedIndex = this.setHighlightedIndex,
          clearSelection = this.clearSelection,
          clearItems = this.clearItems,
          reset = this.reset,
          setItemCount = this.setItemCount,
          unsetItemCount = this.unsetItemCount,
          setState = this.internalSetState;

      return {
        // prop getters
        getRootProps: getRootProps,
        getButtonProps: getButtonProps,
        getToggleButtonProps: getToggleButtonProps,
        getLabelProps: getLabelProps,
        getInputProps: getInputProps,
        getItemProps: getItemProps,

        // actions
        reset: reset,
        openMenu: openMenu,
        closeMenu: closeMenu,
        toggleMenu: toggleMenu,
        selectItem: selectItem,
        selectItemAtIndex: selectItemAtIndex,
        selectHighlightedItem: selectHighlightedItem,
        setHighlightedIndex: setHighlightedIndex,
        clearSelection: clearSelection,
        clearItems: clearItems,
        setItemCount: setItemCount,
        unsetItemCount: unsetItemCount,
        setState: setState,

        //props
        itemToString: itemToString,

        //derived
        id: id,

        // state
        highlightedIndex: highlightedIndex,
        inputValue: inputValue,
        isOpen: isOpen,
        selectedItem: selectedItem
      };
    };

    //////////////////////////// ROOT

    //\\\\\\\\\\\\\\\\\\\\\\\\\\ ROOT

    //////////////////////////// BUTTON

    // TODO: remove this in 2.0.0 and just call it `getToggleButtonProps`


    //\\\\\\\\\\\\\\\\\\\\\\\\\\\\\ BUTTON

    /////////////////////////////// LABEL

    //\\\\\\\\\\\\\\\\\\\\\\\\\\\\\ LABEL

    /////////////////////////////// INPUT

    //\\\\\\\\\\\\\\\\\\\\\\\\\\\\\ INPUT

    /////////////////////////////// ITEM
    Downshift.prototype.getItemId = function getItemId(index) {
      return this.id + '-item-' + index;
    };
    //\\\\\\\\\\\\\\\\\\\\\\\\\\\\\ ITEM

    Downshift.prototype.componentDidMount = function componentDidMount() {
      var _this3 = this;

      // the _isMounted property is because we have `updateStatus` in a `debounce`
      // and we don't want to update the status if the component has been umounted
      this._isMounted = true;
      /* istanbul ignore if (react-native) */
      {
        // this.isMouseDown helps us track whether the mouse is currently held down.
        // This is useful when the user clicks on an item in the list, but holds the mouse
        // down long enough for the list to disappear (because the blur event fires on the input)
        // this.isMouseDown is used in the blur handler on the input to determine whether the blur event should
        // trigger hiding the menu.
        var onMouseDown = function () {
          _this3.isMouseDown = true;
        };
        var onMouseUp = function (event) {
          var document = _this3.props.environment.document;

          _this3.isMouseDown = false;
          var targetInDownshift = _this3._rootNode && isOrContainsNode(_this3._rootNode, event.target);
          var activeElementInDownshift = _this3._rootNode && isOrContainsNode(_this3._rootNode, document.activeElement);
          if (!targetInDownshift && !activeElementInDownshift && _this3.getState().isOpen) {
            _this3.reset({ type: Downshift.stateChangeTypes.mouseUp }, function () {
              return _this3.props.onOuterClick(_this3.getStateAndHelpers());
            });
          }
        };
        // Touching an element in iOS gives focus and hover states, but touching out of
        // the element will remove hover, and persist the focus state, resulting in the
        // blur event not being triggered.
        var onTouchStart = function (event) {
          var targetInDownshift = _this3._rootNode && isOrContainsNode(_this3._rootNode, event.target);
          if (!targetInDownshift && _this3.getState().isOpen) {
            _this3.reset({ type: Downshift.stateChangeTypes.touchStart }, function () {
              return _this3.props.onOuterClick(_this3.getStateAndHelpers());
            });
          }
        };

        this.props.environment.addEventListener('mousedown', onMouseDown);
        this.props.environment.addEventListener('mouseup', onMouseUp);
        this.props.environment.addEventListener('touchstart', onTouchStart);

        this.cleanup = function () {
          _this3._isMounted = false;
          _this3.props.environment.removeEventListener('mousedown', onMouseDown);
          _this3.props.environment.removeEventListener('mouseup', onMouseUp);
          _this3.props.environment.removeEventListener('touchstart', onTouchStart);
        };
      }
    };

    Downshift.prototype.componentDidUpdate = function componentDidUpdate(prevProps, prevState) {
      if (this.isControlledProp('selectedItem') && this.props.selectedItemChanged(prevProps.selectedItem, this.props.selectedItem)) {
        this.internalSetState({
          type: Downshift.stateChangeTypes.controlledPropUpdatedSelectedItem,
          inputValue: this.props.itemToString(this.props.selectedItem)
        });
      }

      var current = this.props.highlightedIndex === undefined ? this.state : this.props;
      var prev = prevProps.highlightedIndex === undefined ? prevState : prevProps;

      if (current.highlightedIndex !== prev.highlightedIndex && !this.avoidScrolling) {
        this.scrollHighlightedItemIntoView();
      }

      this.updateStatus();
    };

    Downshift.prototype.componentWillUnmount = function componentWillUnmount() {
      this.cleanup(); // avoids memory leak
    };

    // eslint-disable-next-line complexity


    Downshift.prototype.render = function render() {
      var children = unwrapArray(this.props.render || this.props.children, noop);
      // because the items are rerendered every time we call the children
      // we clear this out each render and
      this.clearItems();
      // we reset this so we know whether the user calls getRootProps during
      // this render. If they do then we don't need to do anything,
      // if they don't then we need to clone the element they return and
      // apply the props for them.
      this.getRootProps.called = false;
      this.getRootProps.refKey = undefined;
      this.getRootProps.suppressRefError = undefined;
      // we do something similar for getLabelProps
      this.getLabelProps.called = false;
      // and something similar for getInputProps
      this.getInputProps.called = false;
      var element = unwrapArray(children(this.getStateAndHelpers()));
      if (!element) {
        return null;
      }
      if (this.getRootProps.called) {
        if (!this.getRootProps.suppressRefError) {
          validateGetRootPropsCalledCorrectly(element, this.getRootProps);
        }
        return element;
      } else if (isDOMElement(element)) {
        // they didn't apply the root props, but we can clone
        // this and apply the props ourselves
        return React__default.cloneElement(element, this.getRootProps(getElementProps(element)));
      } else {
        // they didn't apply the root props, but they need to
        // otherwise we can't query around the autocomplete
        throw new Error('downshift: If you return a non-DOM element, you must use apply the getRootProps function');
      }
    };

    return Downshift;
  }(React.Component);

  Downshift.defaultProps = {
    defaultHighlightedIndex: null,
    defaultSelectedItem: null,
    defaultInputValue: '',
    defaultIsOpen: false,
    getA11yStatusMessage: getA11yStatusMessage,
    itemToString: function itemToString(i) {
      if (i == null) {
        return '';
      }
      if ("development" !== 'production' && isPlainObject(i)) {
        //eslint-disable-next-line no-console
        console.warn('downshift: An object was passed to the default implementation of `itemToString`. You should probably provide your own `itemToString` implementation. Please refer to the `itemToString` API documentation.', 'The object that was passed:', i);
      }
      return String(i);
    },
    onStateChange: function onStateChange() {},
    onInputValueChange: function onInputValueChange() {},
    onUserAction: function onUserAction() {},
    onChange: function onChange() {},
    onSelect: function onSelect() {},
    onOuterClick: function onOuterClick() {},
    selectedItemChanged: function selectedItemChanged(prevItem, item) {
      return prevItem !== item;
    },
    environment: typeof window === 'undefined' /* istanbul ignore next (ssr) */
    ? {} : window,
    stateReducer: function stateReducer(state, stateToSet) {
      return stateToSet;
    },
    breakingChanges: {}
  };
  Downshift.stateChangeTypes = {
    unknown: '__autocomplete_unknown__',
    mouseUp: '__autocomplete_mouseup__',
    itemMouseEnter: '__autocomplete_item_mouseenter__',
    keyDownArrowUp: '__autocomplete_keydown_arrow_up__',
    keyDownArrowDown: '__autocomplete_keydown_arrow_down__',
    keyDownEscape: '__autocomplete_keydown_escape__',
    keyDownEnter: '__autocomplete_keydown_enter__',
    clickItem: '__autocomplete_click_item__',
    blurInput: '__autocomplete_blur_input__',
    changeInput: '__autocomplete_change_input__',
    keyDownSpaceButton: '__autocomplete_keydown_space_button__',
    clickButton: '__autocomplete_click_button__',
    blurButton: '__autocomplete_blur_button__',
    controlledPropUpdatedSelectedItem: '__autocomplete_controlled_prop_updated_selected_item__',
    touchStart: '__autocomplete_touchstart__'
  };

  var _initialiseProps = function () {
    var _this4 = this;

    this.input = null;
    this.items = [];
    this.itemCount = null;
    this.previousResultCount = 0;

    this.setItemCount = function (count) {
      return _this4.itemCount = count;
    };

    this.unsetItemCount = function () {
      return _this4.itemCount = null;
    };

    this.setHighlightedIndex = function () {
      var highlightedIndex = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _this4.props.defaultHighlightedIndex;
      var otherStateToSet = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      otherStateToSet = pickState(otherStateToSet);
      _this4.internalSetState(_extends$1({ highlightedIndex: highlightedIndex }, otherStateToSet));
    };

    this.clearSelection = function (cb) {
      _this4.internalSetState({
        selectedItem: null,
        inputValue: '',
        isOpen: false
      }, cb);
    };

    this.selectItem = function (item, otherStateToSet, cb) {
      otherStateToSet = pickState(otherStateToSet);
      _this4.internalSetState(_extends$1({
        isOpen: false,
        highlightedIndex: _this4.props.defaultHighlightedIndex,
        selectedItem: item,
        inputValue: _this4.isControlledProp('selectedItem') && _this4.props.breakingChanges.resetInputOnSelection ? _this4.props.defaultInputValue : _this4.props.itemToString(item)
      }, otherStateToSet), cb);
    };

    this.selectItemAtIndex = function (itemIndex, otherStateToSet, cb) {
      var item = _this4.items[itemIndex];
      if (item == null) {
        return;
      }
      _this4.selectItem(item, otherStateToSet, cb);
    };

    this.selectHighlightedItem = function (otherStateToSet, cb) {
      return _this4.selectItemAtIndex(_this4.getState().highlightedIndex, otherStateToSet, cb);
    };

    this.internalSetState = function (stateToSet, cb) {
      var isItemSelected = void 0,
          onChangeArg = void 0;

      var onStateChangeArg = {};
      var isStateToSetFunction = typeof stateToSet === 'function';

      // we want to call `onInputValueChange` before the `setState` call
      // so someone controlling the `inputValue` state gets notified of
      // the input change as soon as possible. This avoids issues with
      // preserving the cursor position.
      // See https://github.com/paypal/downshift/issues/217 for more info.
      if (!isStateToSetFunction && stateToSet.hasOwnProperty('inputValue')) {
        _this4.props.onInputValueChange(stateToSet.inputValue, _extends$1({}, _this4.getStateAndHelpers(), stateToSet));
      }
      return _this4.setState(function (state) {
        state = _this4.getState(state);
        var newStateToSet = isStateToSetFunction ? stateToSet(state) : stateToSet;

        // Your own function that could modify the state that will be set.
        newStateToSet = _this4.props.stateReducer(state, newStateToSet);

        // checks if an item is selected, regardless of if it's different from
        // what was selected before
        // used to determine if onSelect and onChange callbacks should be called
        isItemSelected = newStateToSet.hasOwnProperty('selectedItem');
        // this keeps track of the object we want to call with setState
        var nextState = {};
        // this is just used to tell whether the state changed
        var nextFullState = {};
        // we need to call on change if the outside world is controlling any of our state
        // and we're trying to update that state. OR if the selection has changed and we're
        // trying to update the selection
        if (isItemSelected && newStateToSet.selectedItem !== state.selectedItem) {
          onChangeArg = newStateToSet.selectedItem;
        }
        newStateToSet.type = newStateToSet.type || Downshift.stateChangeTypes.unknown;

        Object.keys(newStateToSet).forEach(function (key) {
          // onStateChangeArg should only have the state that is
          // actually changing
          if (state[key] !== newStateToSet[key]) {
            onStateChangeArg[key] = newStateToSet[key];
          }
          // the type is useful for the onStateChangeArg
          // but we don't actually want to set it in internal state.
          // this is an undocumented feature for now... Not all internalSetState
          // calls support it and I'm not certain we want them to yet.
          // But it enables users controlling the isOpen state to know when
          // the isOpen state changes due to mouseup events which is quite handy.
          if (key === 'type') {
            return;
          }
          nextFullState[key] = newStateToSet[key];
          // if it's coming from props, then we don't care to set it internally
          if (!_this4.isControlledProp(key)) {
            nextState[key] = newStateToSet[key];
          }
        });

        // if stateToSet is a function, then we weren't able to call onInputValueChange
        // earlier, so we'll call it now that we know what the inputValue state will be.
        if (isStateToSetFunction && newStateToSet.hasOwnProperty('inputValue')) {
          _this4.props.onInputValueChange(newStateToSet.inputValue, _extends$1({}, _this4.getStateAndHelpers(), newStateToSet));
        }

        return nextState;
      }, function () {
        // call the provided callback if it's a callback
        cbToCb(cb)();

        // only call the onStateChange and onChange callbacks if
        // we have relevant information to pass them.
        var hasMoreStateThanType = Object.keys(onStateChangeArg).length > 1;
        if (hasMoreStateThanType) {
          _this4.props.onStateChange(onStateChangeArg, _this4.getStateAndHelpers());
        }

        if (isItemSelected) {
          _this4.props.onSelect(stateToSet.selectedItem, _this4.getStateAndHelpers());
        }

        if (onChangeArg !== undefined) {
          _this4.props.onChange(onChangeArg, _this4.getStateAndHelpers());
        }
        // this is currently undocumented and therefore subject to change
        // We'll try to not break it, but just be warned.
        _this4.props.onUserAction(onStateChangeArg, _this4.getStateAndHelpers());
      });
    };

    this.rootRef = function (node) {
      return _this4._rootNode = node;
    };

    this.getRootProps = function () {
      var _babelHelpers$extends;

      var _ref2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      var _ref3 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
          _ref3$suppressRefErro = _ref3.suppressRefError,
          suppressRefError = _ref3$suppressRefErro === undefined ? false : _ref3$suppressRefErro;

      var _ref2$refKey = _ref2.refKey,
          refKey = _ref2$refKey === undefined ? 'ref' : _ref2$refKey,
          rest = objectWithoutProperties(_ref2, ['refKey']);

      // this is used in the render to know whether the user has called getRootProps.
      // It uses that to know whether to apply the props automatically
      _this4.getRootProps.called = true;
      _this4.getRootProps.refKey = refKey;
      _this4.getRootProps.suppressRefError = suppressRefError;
      return _extends$1((_babelHelpers$extends = {}, _babelHelpers$extends[refKey] = _this4.rootRef, _babelHelpers$extends), rest);
    };

    this.keyDownHandlers = {
      ArrowDown: function ArrowDown(event) {
        event.preventDefault();
        var amount = event.shiftKey ? 5 : 1;
        this.moveHighlightedIndex(amount, {
          type: Downshift.stateChangeTypes.keyDownArrowDown
        });
      },
      ArrowUp: function ArrowUp(event) {
        event.preventDefault();
        var amount = event.shiftKey ? -5 : -1;
        this.moveHighlightedIndex(amount, {
          type: Downshift.stateChangeTypes.keyDownArrowUp
        });
      },
      Enter: function Enter(event) {
        if (this.getState().isOpen) {
          event.preventDefault();
          var itemIndex = this.getState().highlightedIndex;
          var item = this.items[itemIndex];
          var itemNode = this.getItemNodeFromIndex(itemIndex);
          if (item == null || itemNode && itemNode.hasAttribute('disabled')) {
            return;
          }
          this.selectHighlightedItem({
            type: Downshift.stateChangeTypes.keyDownEnter
          });
        }
      },
      Escape: function Escape(event) {
        event.preventDefault();
        this.reset({ type: Downshift.stateChangeTypes.keyDownEscape });
      }
    };
    this.buttonKeyDownHandlers = _extends$1({}, this.keyDownHandlers, {
      ' ': function _(event) {
        event.preventDefault();
        this.toggleMenu({ type: Downshift.stateChangeTypes.keyDownSpaceButton });
      }
    });

    this.getToggleButtonProps = function () {
      var _ref4 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      var onClick = _ref4.onClick,
          onKeyDown = _ref4.onKeyDown,
          onBlur = _ref4.onBlur,
          rest = objectWithoutProperties(_ref4, ['onClick', 'onKeyDown', 'onBlur']);

      var _getState3 = _this4.getState(),
          isOpen = _getState3.isOpen;

      var enabledEventHandlers = {
        onClick: composeEventHandlers(onClick, _this4.button_handleClick),
        onKeyDown: composeEventHandlers(onKeyDown, _this4.button_handleKeyDown),
        onBlur: composeEventHandlers(onBlur, _this4.button_handleBlur)
      };
      var eventHandlers = rest.disabled ? {} : enabledEventHandlers;
      return _extends$1({
        type: 'button',
        role: 'button',
        'aria-label': isOpen ? 'close menu' : 'open menu',
        'aria-expanded': isOpen,
        'aria-haspopup': true,
        'data-toggle': true
      }, eventHandlers, rest);
    };

    this.getButtonProps = this.getToggleButtonProps;

    this.button_handleKeyDown = function (event) {
      var key = normalizeArrowKey(event);
      if (_this4.buttonKeyDownHandlers[key]) {
        _this4.buttonKeyDownHandlers[key].call(_this4, event);
      }
    };

    this.button_handleClick = function (event) {
      event.preventDefault();
      // handle odd case for Safari and Firefox which
      // don't give the button the focus properly.
      /* istanbul ignore if (can't reasonably test this) */
      if (_this4.props.environment.document.activeElement === _this4.props.environment.document.body) {
        event.target.focus();
      }
      // to simplify testing components that use downshift, we'll not wrap this in a setTimeout
      // if the NODE_ENV is test. With the proper build system, this should be dead code eliminated
      // when building for production and should therefore have no impact on production code.
      {
        // Ensure that toggle of menu occurs after the potential blur event in iOS
        setTimeout(function () {
          return _this4.toggleMenu({ type: Downshift.stateChangeTypes.clickButton });
        });
      }
    };

    this.button_handleBlur = function () {
      // Need setTimeout, so that when the user presses Tab, the activeElement is the next focused element, not body element
      setTimeout(function () {
        if (!_this4.isMouseDown && (_this4.props.environment.document.activeElement == null || _this4.props.environment.document.activeElement.id !== _this4.inputId)) {
          _this4.reset({ type: Downshift.stateChangeTypes.blurButton });
        }
      });
    };

    this.getLabelProps = function () {
      var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      _this4.getLabelProps.called = true;
      if (_this4.getInputProps.called && props.htmlFor && props.htmlFor !== _this4.inputId) {
        throw new Error('downshift: You provided the htmlFor of "' + props.htmlFor + '" for your label, but the id of your input is "' + _this4.inputId + '". You must either remove the id from your input or set the htmlFor of the label equal to the input id.');
      }
      _this4.inputId = firstDefined(_this4.inputId, props.htmlFor, _this4.id + '-input');
      return _extends$1({}, props, {
        htmlFor: _this4.inputId
      });
    };

    this.getInputProps = function () {
      var _ref6;

      var _ref5 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      var onKeyDown = _ref5.onKeyDown,
          onBlur = _ref5.onBlur,
          onChange = _ref5.onChange,
          onInput = _ref5.onInput,
          rest = objectWithoutProperties(_ref5, ['onKeyDown', 'onBlur', 'onChange', 'onInput']);

      _this4.getInputProps.called = true;
      if (_this4.getLabelProps.called && rest.id && rest.id !== _this4.inputId) {
        throw new Error('downshift: You provided the id of "' + rest.id + '" for your input, but the htmlFor of your label is "' + _this4.inputId + '". You must either remove the id from your input or set the htmlFor of the label equal to the input id.');
      }
      _this4.inputId = firstDefined(_this4.inputId, rest.id, _this4.id + '-input');
      var onChangeKey = void 0;
      /* istanbul ignore next (preact) */
      onChangeKey = 'onChange';

      var _getState4 = _this4.getState(),
          inputValue = _getState4.inputValue,
          isOpen = _getState4.isOpen,
          highlightedIndex = _getState4.highlightedIndex;

      var eventHandlers = rest.disabled ? {} : (_ref6 = {}, _ref6[onChangeKey] = composeEventHandlers(onChange, onInput, _this4.input_handleChange), _ref6.onKeyDown = composeEventHandlers(onKeyDown, _this4.input_handleKeyDown), _ref6.onBlur = composeEventHandlers(onBlur, _this4.input_handleBlur), _ref6);
      return _extends$1({
        role: 'combobox',
        'aria-autocomplete': 'list',
        'aria-expanded': isOpen,
        'aria-activedescendant': isOpen && typeof highlightedIndex === 'number' && highlightedIndex >= 0 ? _this4.getItemId(highlightedIndex) : null,
        autoComplete: 'off',
        value: inputValue
      }, eventHandlers, rest, {
        id: _this4.inputId
      });
    };

    this.input_handleKeyDown = function (event) {
      var key = normalizeArrowKey(event);
      if (key && _this4.keyDownHandlers[key]) {
        _this4.keyDownHandlers[key].call(_this4, event);
      }
    };

    this.input_handleChange = function (event) {
      _this4.internalSetState({
        type: Downshift.stateChangeTypes.changeInput,
        isOpen: true,
        inputValue: event.target.value
      });
    };

    this.input_handleBlur = function () {
      // Need setTimeout, so that when the user presses Tab, the activeElement is the next focused element, not the body element
      setTimeout(function () {
        var downshiftButtonIsActive = _this4.props.environment.document.activeElement.dataset.toggle && _this4._rootNode && _this4._rootNode.contains(_this4.props.environment.document.activeElement);
        if (!_this4.isMouseDown && !downshiftButtonIsActive) {
          _this4.reset({ type: Downshift.stateChangeTypes.blurInput });
        }
      });
    };

    this.getItemProps = function () {
      var _enabledEventHandlers;

      var _ref7 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      var onMouseMove = _ref7.onMouseMove,
          onMouseDown = _ref7.onMouseDown,
          onClick = _ref7.onClick,
          index = _ref7.index,
          _ref7$item = _ref7.item,
          item = _ref7$item === undefined ? requiredProp('getItemProps', 'item') : _ref7$item,
          rest = objectWithoutProperties(_ref7, ['onMouseMove', 'onMouseDown', 'onClick', 'index', 'item']);

      if (index === undefined) {
        _this4.items.push(item);
        index = _this4.items.indexOf(item);
      } else {
        _this4.items[index] = item;
      }

      var onSelectKey = 'onClick';

      var enabledEventHandlers = (_enabledEventHandlers = {
        // onMouseMove is used over onMouseEnter here. onMouseMove
        // is only triggered on actual mouse movement while onMouseEnter
        // can fire on DOM changes, interrupting keyboard navigation
        onMouseMove: composeEventHandlers(onMouseMove, function () {
          if (index === _this4.getState().highlightedIndex) {
            return;
          }
          _this4.setHighlightedIndex(index, {
            type: Downshift.stateChangeTypes.itemMouseEnter
          });

          // We never want to manually scroll when changing state based
          // on `onMouseMove` because we will be moving the element out
          // from under the user which is currently scrolling/moving the
          // cursor
          _this4.avoidScrolling = true;
          setTimeout(function () {
            return _this4.avoidScrolling = false;
          }, 250);
        }),
        onMouseDown: composeEventHandlers(onMouseDown, function (event) {
          // This prevents the activeElement from being changed
          // to the item so it can remain with the current activeElement
          // which is a more common use case.
          event.preventDefault();
        })
      }, _enabledEventHandlers[onSelectKey] = composeEventHandlers(onClick, function () {
        _this4.selectItemAtIndex(index, {
          type: Downshift.stateChangeTypes.clickItem
        });
      }), _enabledEventHandlers);

      var eventHandlers = rest.disabled ? {} : enabledEventHandlers;

      return _extends$1({
        id: _this4.getItemId(index)
      }, eventHandlers, rest);
    };

    this.clearItems = function () {
      _this4.items = [];
    };

    this.reset = function () {
      var otherStateToSet = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var cb = arguments[1];

      otherStateToSet = pickState(otherStateToSet);
      _this4.internalSetState(function (_ref8) {
        var selectedItem = _ref8.selectedItem;
        return _extends$1({
          isOpen: false,
          highlightedIndex: _this4.props.defaultHighlightedIndex,
          inputValue: _this4.props.itemToString(selectedItem)
        }, otherStateToSet);
      }, cbToCb(cb));
    };

    this.toggleMenu = function () {
      var otherStateToSet = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var cb = arguments[1];

      otherStateToSet = pickState(otherStateToSet);
      _this4.internalSetState(function (_ref9) {
        var isOpen = _ref9.isOpen;

        return _extends$1({ isOpen: !isOpen }, otherStateToSet);
      }, function () {
        var _getState5 = _this4.getState(),
            isOpen = _getState5.isOpen;

        if (isOpen) {
          // highlight default index
          _this4.setHighlightedIndex(undefined, otherStateToSet);
        }
        cbToCb(cb)();
      });
    };

    this.openMenu = function (cb) {
      _this4.internalSetState({ isOpen: true }, cbToCb(cb));
    };

    this.closeMenu = function (cb) {
      _this4.internalSetState({ isOpen: false }, cbToCb(cb));
    };

    this.updateStatus = debounce(function () {
      if (!_this4._isMounted) {
        return;
      }
      var state = _this4.getState();
      var item = _this4.items[state.highlightedIndex];
      var resultCount = _this4.getItemCount();
      var status = _this4.props.getA11yStatusMessage(_extends$1({
        itemToString: _this4.props.itemToString,
        previousResultCount: _this4.previousResultCount,
        resultCount: resultCount,
        highlightedItem: item
      }, state));
      _this4.previousResultCount = resultCount;
      /* istanbul ignore else (react-native) */
      setStatus(status);
    }, 200);
  };

  Downshift.propTypes = {
    children: PropTypes.func,
    render: PropTypes.func,
    defaultHighlightedIndex: PropTypes.number,
    defaultSelectedItem: PropTypes.any,
    defaultInputValue: PropTypes.string,
    defaultIsOpen: PropTypes.bool,
    getA11yStatusMessage: PropTypes.func,
    itemToString: PropTypes.func,
    onChange: PropTypes.func,
    onSelect: PropTypes.func,
    onStateChange: PropTypes.func,
    onInputValueChange: PropTypes.func,
    onUserAction: PropTypes.func,
    onOuterClick: PropTypes.func,
    selectedItemChanged: PropTypes.func,
    stateReducer: PropTypes.func,
    itemCount: PropTypes.number,
    id: PropTypes.string,
    environment: PropTypes.shape({
      addEventListener: PropTypes.func,
      removeEventListener: PropTypes.func,
      document: PropTypes.shape({
        getElementById: PropTypes.func,
        activeElement: PropTypes.any,
        body: PropTypes.any
      })
    }),
    // things we keep in state for uncontrolled components
    // but can accept as props for controlled components
    /* eslint-disable react/no-unused-prop-types */
    selectedItem: PropTypes.any,
    isOpen: PropTypes.bool,
    inputValue: PropTypes.string,
    highlightedIndex: PropTypes.number,
    breakingChanges: PropTypes.shape({
      resetInputOnSelection: PropTypes.bool
    })
    /* eslint-enable */
  };

  function validateGetRootPropsCalledCorrectly(element, _ref) {
    var refKey = _ref.refKey;

    var refKeySpecified = refKey !== 'ref';
    var isComposite = !isDOMElement(element);
    if (isComposite && !refKeySpecified) {
      throw new Error('downshift: You returned a non-DOM element. You must specify a refKey in getRootProps');
    } else if (!isComposite && refKeySpecified) {
      throw new Error('downshift: You returned a DOM element. You should not specify a refKey in getRootProps. You specified "' + refKey + '"');
    }
    if (!getElementProps(element)[refKey]) {
      throw new Error('downshift: You must apply the ref prop "' + refKey + '" from getRootProps onto your root element.');
    }
  }

  /*
   * Fix importing in typescript after rollup compilation
   * https://github.com/rollup/rollup/issues/1156
   * https://github.com/Microsoft/TypeScript/issues/13017#issuecomment-268657860
   */
  Downshift.default = Downshift;
  Downshift.resetIdCounter = resetIdCounter;

  var _defaultTranslations;
  var translationIds = {
    'close.menu': 'close.menu',
    'open.menu': 'open.menu'
  };
  var defaultTranslations = (_defaultTranslations = {}, _defineProperty(_defaultTranslations, translationIds['close.menu'], 'Close menu'), _defineProperty(_defaultTranslations, translationIds['open.menu'], 'Open menu'), _defaultTranslations);
  /**
   * `ListBoxMenuIcon` is used to orient the icon up or down depending on the
   * state of the menu for a given `ListBox`
   */

  var ListBoxMenuIcon = function ListBoxMenuIcon(_ref) {
    var isOpen = _ref.isOpen,
        t = _ref.translateWithId;
    var className = classNames({
      'bx--list-box__menu-icon': true,
      'bx--list-box__menu-icon--open': isOpen
    });
    var description = isOpen ? t('close.menu') : t('open.menu');
    return React__default.createElement("div", {
      className: className
    }, React__default.createElement(Icon, {
      name: "caret--down",
      description: description,
      alt: description
    }));
  };

  ListBoxMenuIcon.propTypes = {
    /**
     * Specify whether the menu is currently open, which will influence the
     * direction of the menu icon
     */
    isOpen: PropTypes.bool.isRequired,

    /**
     * i18n hook used to provide the appropriate description for the given menu
     * icon. This function takes in an id defined in `translationIds` and should
     * return a string message for that given message id.
     */
    translateWithId: PropTypes.func.isRequired
  };
  ListBoxMenuIcon.defaultProps = {
    translateWithId: function translateWithId(id) {
      return defaultTranslations[id];
    }
  };

  var _defaultTranslations$1;
  /**
   * `ListBoxSelection` is used to provide controls for clearing a selection, in
   * addition to conditionally rendering a badge if the control has more than one
   * selection.
   */

  var ListBoxSelection = function ListBoxSelection(_ref) {
    var clearSelection = _ref.clearSelection,
        selectionCount = _ref.selectionCount,
        t = _ref.translateWithId;
    var className = classNames({
      'bx--list-box__selection': true,
      'bx--list-box__selection--multi': selectionCount
    });

    var handleOnClick = function handleOnClick(event) {
      // If we have a mult-select badge, clicking it shouldn't open the menu back
      // up. However, if we have a clear badge then we want the click to have this
      // behavior.
      if (selectionCount) {
        event.stopPropagation();
      }

      clearSelection(event);
    };

    var handleOnKeyDown = function handleOnKeyDown(event) {
      // When a user hits ENTER, we'll clear the selection
      if (event.keyCode === 13) {
        clearSelection(event);
      }
    };

    var description = selectionCount ? t('clear.all') : t('clear.selection');
    return React__default.createElement("div", {
      role: "button",
      className: className,
      tabIndex: "0",
      onClick: handleOnClick,
      onKeyDown: handleOnKeyDown,
      title: description
    }, selectionCount, React__default.createElement(Icon, {
      name: "close",
      description: description,
      focusable: "false"
    }));
  };

  var translationIds$1 = {
    'clear.all': 'clear.all',
    'clear.selection': 'clear.selection'
  };
  var defaultTranslations$1 = (_defaultTranslations$1 = {}, _defineProperty(_defaultTranslations$1, translationIds$1['clear.all'], 'Clear all selected items'), _defineProperty(_defaultTranslations$1, translationIds$1['clear.selection'], 'Clear selected item'), _defaultTranslations$1);
  ListBoxSelection.propTypes = {
    /**
     * Specify a function to be invoked when a user interacts with the clear
     * selection element.
     */
    clearSelection: PropTypes.func.isRequired,

    /**
     * Specify an optional `selectionCount` value that will be used to determine
     * whether the selection should display a badge or a single clear icon.
     */
    selectionCount: PropTypes.number,

    /**
     * i18n hook used to provide the appropriate description for the given menu
     * icon. This function takes in an id defined in `translationIds` and should
     * return a string message for that given message id.
     */
    translateWithId: PropTypes.func.isRequired
  };
  ListBoxSelection.defaultProps = {
    translateWithId: function translateWithId(id) {
      return defaultTranslations$1[id];
    }
  };

  /**
   * `createChainableTypeChecker` is used inside of our custom prop validators to
   * add in chaining `isRequired` on a given prop validator.
   */
  var createChainableTypeChecker = function createChainableTypeChecker(validate) {
    // `checkType` is borrowed heavily from the `prop-types` package
    var checkType = function checkType(isRequired, props, propName, componentName, location) {
      if (props[propName] == null) {
        if (isRequired) {
          if (props[propName] === null) {
            return new Error("The ".concat(location, " `").concat(propName, "` is marked as required in ") + "".concat(componentName, ", but its value is `null`."));
          }

          return new Error("The ".concat(location, " `").concat(propName, "` is marked as required in ") + "".concat(componentName, ", but its value is `undefined`."));
        }

        return null;
      } else {
        return validate(props, propName, componentName, location);
      }
    }; // By default, the validator will have `isRequired` set to false. However, we
    // also define the `isRequired` property on the validtor so that consumers can
    // chain their prop validator and assert that the property is required.


    var chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);
    return chainedCheckType;
  };

  var cachedDisplayNames = new WeakMap();
  /**
   * `getDisplayName` is a utility function for getting a name from a given
   * component type. It supports names from React elements, Stateless Functional
   * Components, and Class-based Components
   */

  var getDisplayName = function getDisplayName(type) {
    if (typeof type === 'string') {
      return type;
    }

    if (cachedDisplayNames.has(type)) {
      return cachedDisplayNames.get(type);
    }

    var displayName;

    if (typeof type.displayName === 'string') {
      displayName = type.displayName;
    }

    if (!displayName) {
      displayName = type.name || 'Unknown';
    }

    cachedDisplayNames.set(type, displayName);
    return displayName;
  };

  /**
   * `childrenOf` is used for asserting that the children of a given React
   * component are of a given set of types. Currently, this will work with types
   * that are Stateless Functional and Class-based components
   *
   * This prop validator also supports chaining through `isRequired`
   */

  var childrenOf = function childrenOf(expectedChildTypes) {
    // Support both React elements and components by using `type` if it exists
    var expectedDisplayNames = expectedChildTypes.map(function (child) {
      return getDisplayName(child.type || child);
    }).join(', ');

    var validate = function validate(props, propName, componentName) {
      React.Children.forEach(props[propName], function (child) {
        if (!child) {
          return;
        }

        var childDisplayName = getDisplayName(child.type || child);

        if (!expectedChildTypes.includes(child.type)) {
          throw new Error("Invalid prop `children` of type `".concat(childDisplayName, "` ") + "supplied to `".concat(componentName, "`, expected each child to be one ") + "of: `[".concat(expectedDisplayNames, "]`."));
        }
      });
    };

    return createChainableTypeChecker(validate);
  };

  /**
   * `ListBoxField` is responsible for creating the containing node for valid
   * elements inside of a field. It also provides a11y-related attributes like
   * `role` to make sure a user can focus the given field.
   */

  var ListBoxField = function ListBoxField(_ref) {
    var children = _ref.children,
        rest = _objectWithoutProperties(_ref, ["children"]);

    return React__default.createElement("div", _extends({
      role: "button",
      className: "bx--list-box__field",
      tabIndex: "0"
    }, rest), children);
  };

  ListBoxField.propTypes = {
    children: childrenOf([ListBoxMenuIcon, ListBoxSelection, 'span', 'input'])
  };

  /**
   * `ListBoxMenuItem` is a helper component for managing the container class
   * name, alongside any classes for any corresponding states, for a generic list
   * box menu item.
   */

  var ListBoxMenuItem = function ListBoxMenuItem(_ref) {
    var children = _ref.children,
        isActive = _ref.isActive,
        isHighlighted = _ref.isHighlighted,
        rest = _objectWithoutProperties(_ref, ["children", "isActive", "isHighlighted"]);

    var className = classNames({
      'bx--list-box__menu-item': true,
      'bx--list-box__menu-item--active': isActive,
      'bx--list-box__menu-item--highlighted': isHighlighted
    });
    return React__default.createElement("div", _extends({
      className: className
    }, rest), children);
  };

  ListBoxMenuItem.propTypes = {
    /**
     * Specify any children nodes that hsould be rendered inside of the ListBox
     * Menu Item
     */
    children: PropTypes.node,

    /**
     * Specify whether the current menu item is "active".
     */
    isActive: PropTypes.bool.isRequired,

    /**
     * Specify whether the current menu item is "highlighed".
     */
    isHighlighted: PropTypes.bool.isRequired
  };
  ListBoxMenuItem.defaultProps = {
    isActive: false,
    isHighlighted: false
  };

  /**
   * `childrenOfType` is used for asserting that children of a given React
   * component are only of a given type. Currently, this supports React elements,
   * Stateless Functional Components, and Class-based components.
   *
   * This prop validator also supports chaining through `isRequired`
   */

  var childrenOfType = function childrenOfType(expectedChildType) {
    var expectedDisplayName = getDisplayName( // Support both React elements and components by using `type` if it exists
    expectedChildType.type || expectedChildType);

    var validate = function validate(props, propName, componentName) {
      React.Children.forEach(props[propName], function (child) {
        var childDisplayName = getDisplayName(child.type);

        if (child.type !== expectedChildType.type && child.type !== expectedChildType) {
          throw new Error("Invalid prop `children` of type `".concat(childDisplayName, "` ") + "supplied to `".concat(componentName, "`, expected each child to be a ") + "`".concat(expectedDisplayName, "` component."));
        }
      });
    };

    return createChainableTypeChecker(validate);
  };

  /**
   * `ListBoxMenu` is a simple container node that isolates the `list-box__menu`
   * class into a single component. It is also being used to validate given
   * `children` components.
   */

  var ListBoxMenu = function ListBoxMenu(_ref) {
    var children = _ref.children,
        rest = _objectWithoutProperties(_ref, ["children"]);

    return React__default.createElement("div", _extends({
      className: "bx--list-box__menu"
    }, rest), children);
  };

  ListBoxMenu.propTypes = {
    children: childrenOfType(ListBoxMenuItem)
  };

  var ListBoxType = PropTypes.oneOf(['default', 'inline']);

  var handleOnKeyDown = function handleOnKeyDown(event) {
    if (event.keyCode === 27) {
      event.stopPropagation();
    }
  };
  /**
   * `ListBox` is a generic container component that handles creating the
   * container class name in response to certain props.
   */


  var ListBox = function ListBox(_ref) {
    var _cx;

    var children = _ref.children,
        containerClassName = _ref.className,
        disabled = _ref.disabled,
        innerRef = _ref.innerRef,
        type = _ref.type,
        rest = _objectWithoutProperties(_ref, ["children", "className", "disabled", "innerRef", "type"]);

    var className = classNames((_cx = {}, _defineProperty(_cx, containerClassName, !!containerClassName), _defineProperty(_cx, 'bx--list-box', true), _defineProperty(_cx, 'bx--list-box--inline', type === 'inline'), _defineProperty(_cx, 'bx--list-box--disabled', disabled), _cx));
    return React__default.createElement("div", _extends({}, rest, {
      className: className,
      ref: innerRef,
      onKeyDown: handleOnKeyDown
    }), children);
  };

  ListBox.propTypes = {
    children: childrenOf([ListBoxField, ListBoxMenu]),

    /**
     * Specify a class name to be applied on the containing list box node
     */
    className: PropTypes.string,

    /**
     * `innerRef` hook used for libraries like Downshift that require a reference
     * on a container node when it is not a native element
     */
    innerRef: PropTypes.func.isRequired,

    /**
     * Specify whether the ListBox is currently disabled
     */
    disabled: PropTypes.bool.isRequired,

    /**
     * Specify the "type" of the ListBox. Currently supports either `default` or
     * `inline` as an option.
     */
    type: ListBoxType.isRequired
  };
  ListBox.defaultProps = {
    innerRef: function innerRef() {},
    disabled: false,
    type: 'default'
  };

  ListBox.Field = ListBoxField;
  ListBox.Menu = ListBoxMenu;
  ListBox.MenuIcon = ListBoxMenuIcon;
  ListBox.MenuItem = ListBoxMenuItem;
  ListBox.Selection = ListBoxSelection;

  var defaultItemToString = function defaultItemToString(item) {
    if (typeof item === 'string') {
      return item;
    }

    return item && item.label;
  };

  var defaultShouldFilterItem = function defaultShouldFilterItem(_ref) {
    var inputValue = _ref.inputValue,
        item = _ref.item,
        itemToString = _ref.itemToString;
    return !inputValue || itemToString(item).toLowerCase().includes(inputValue.toLowerCase());
  };

  var getInputValue = function getInputValue(props, state) {
    if (props.initialSelectedItem) {
      return props.itemToString(props.initialSelectedItem);
    }

    return state.inputValue || '';
  };

  var ComboBox =
  /*#__PURE__*/
  function (_React$Component) {
    function ComboBox(props) {
      var _this;

      _classCallCheck(this, ComboBox);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(ComboBox).call(this, props));

      _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "filterItems", function (items, itemToString, inputValue) {
        return items.filter(function (item) {
          return _this.props.shouldFilterItem({
            item: item,
            itemToString: itemToString,
            inputValue: inputValue
          });
        });
      });

      _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleOnChange", function (selectedItem) {
        if (_this.props.onChange) {
          _this.props.onChange({
            selectedItem: selectedItem
          });
        }
      });

      _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleOnInputKeyDown", function (event) {
        event.stopPropagation();
      });

      _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleOnInputValueChange", function (inputValue) {
        var onInputChange = _this.props.onInputChange;

        _this.setState(function () {
          return {
            // Default to empty string if we have a false-y `inputValue`
            inputValue: inputValue || ''
          };
        }, function () {
          if (onInputChange) {
            onInputChange(inputValue);
          }
        });
      });

      _this.state = {
        inputValue: getInputValue(props, {})
      };
      return _this;
    }

    _createClass(ComboBox, [{
      key: "componentWillReceiveProps",
      value: function componentWillReceiveProps(nextProps) {
        this.setState(function (state) {
          return {
            inputValue: getInputValue(nextProps, state)
          };
        });
      }
    }, {
      key: "render",
      value: function render() {
        var _this2 = this;

        var _this$props = this.props,
            containerClassName = _this$props.className,
            disabled = _this$props.disabled,
            id = _this$props.id,
            items = _this$props.items,
            itemToString = _this$props.itemToString,
            placeholder = _this$props.placeholder,
            initialSelectedItem = _this$props.initialSelectedItem,
            ariaLabel = _this$props.ariaLabel;
        var className = classNames('bx--combo-box', containerClassName);
        return React__default.createElement(Downshift, {
          onChange: this.handleOnChange,
          onInputValueChange: this.handleOnInputValueChange,
          inputValue: this.state.inputValue || '',
          itemToString: itemToString,
          defaultSelectedItem: initialSelectedItem
        }, function (_ref2) {
          var getButtonProps = _ref2.getButtonProps,
              getInputProps = _ref2.getInputProps,
              getItemProps = _ref2.getItemProps,
              getRootProps = _ref2.getRootProps,
              isOpen = _ref2.isOpen,
              inputValue = _ref2.inputValue,
              selectedItem = _ref2.selectedItem,
              highlightedIndex = _ref2.highlightedIndex,
              clearSelection = _ref2.clearSelection;
          return React__default.createElement(ListBox, _extends({
            className: className,
            disabled: disabled
          }, getRootProps({
            refKey: 'innerRef'
          })), React__default.createElement(ListBox.Field, getButtonProps({
            disabled: disabled
          }), React__default.createElement("input", _extends({
            className: "bx--text-input",
            "aria-label": ariaLabel
          }, getInputProps({
            disabled: disabled,
            id: id,
            placeholder: placeholder,
            onKeyDown: _this2.handleOnInputKeyDown
          }))), inputValue && isOpen && React__default.createElement(ListBox.Selection, {
            clearSelection: clearSelection
          }), React__default.createElement(ListBox.MenuIcon, {
            isOpen: isOpen
          })), isOpen && React__default.createElement(ListBox.Menu, null, _this2.filterItems(items, itemToString, inputValue).map(function (item, index) {
            return React__default.createElement(ListBox.MenuItem, _extends({
              key: itemToString(item),
              isActive: selectedItem === item,
              isHighlighted: highlightedIndex === index
            }, getItemProps({
              item: item,
              index: index
            })), itemToString(item));
          })));
        });
      }
    }]);

    _inherits(ComboBox, _React$Component);

    return ComboBox;
  }(React__default.Component);

  _defineProperty(ComboBox, "propTypes", {
    /**
     * An optional className to add to the container node
     */
    className: PropTypes.string,

    /**
     * Specify if the control should be disabled, or not
     */
    disabled: PropTypes.bool,

    /**
     * Specify a custom `id` for the input
     */
    id: PropTypes.string,

    /**
     * Allow users to pass in an arbitrary item or a string (in case their items are an array of strings)
     * from their collection that are pre-selected
     */
    initialSelectedItem: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),

    /**
     * We try to stay as generic as possible here to allow individuals to pass
     * in a collection of whatever kind of data structure they prefer
     */
    items: PropTypes.array.isRequired,

    /**
     * Helper function passed to downshift that allows the library to render a
     * given item to a string label. By default, it extracts the `label` field
     * from a given item to serve as the item label in the list
     */
    itemToString: PropTypes.func,

    /**
     * `onChange` is a utility for this controlled component to communicate to a
     * consuming component when a specific dropdown item is selected.
     * @param {{ selectedItem }}
     */
    onChange: PropTypes.func.isRequired,

    /**
     * Used to provide a placeholder text node before a user enters any input.
     * This is only present if the control has no items selected
     */
    placeholder: PropTypes.string.isRequired,

    /**
     * Specify your own filtering logic by passing in a `shouldFilterItem`
     * function that takes in the current input and an item and passes back
     * whether or not the item should be filtered.
     */
    shouldFilterItem: PropTypes.func,

    /**
     * Currently supports either the default type, or an inline variant
     */
    type: ListBoxType,

    /**
     * Callback function to notify consumer when the text input changes.
     * This provides support to change available items based on the text.
     * @param {string} inputText
     */
    onInputChange: PropTypes.func
  });

  _defineProperty(ComboBox, "defaultProps", {
    disabled: false,
    itemToString: defaultItemToString,
    shouldFilterItem: defaultShouldFilterItem,
    type: 'default',
    ariaLabel: 'ListBox input field'
  });

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

        var modalClass = classNames(_defineProperty({
          'bx--modal': true,
          'is-visible': open
        }, className, className));
        var containerClass = classNames(_defineProperty({
          'bx--modal-container': true
        }, containerClassName, containerClassName));
        var childrenWithProps = React__default.Children.toArray(children).map(function (child) {
          if (child.type === ModalHeader || child.type === ModalFooter) {
            return React__default.cloneElement(child, {
              closeModal: _this2.closeModal
            });
          }

          return child;
        });
        return React__default.createElement("div", _extends({}, other, {
          role: "presentation",
          ref: function ref(modal) {
            return _this2.modal = modal;
          },
          onKeyDown: this.handleKeyDown,
          className: modalClass,
          tabIndex: -1
        }), React__default.createElement("div", {
          className: containerClass
        }, childrenWithProps));
      }
    }]);

    _inherits(ComposedModal, _Component);

    return ComposedModal;
  }(React.Component);

  _defineProperty(ComposedModal, "defaultProps", {
    onKeyDown: function onKeyDown() {}
  });

  _defineProperty(ComposedModal, "propTypes", {
    className: PropTypes.string,
    containerClassName: PropTypes.string,
    onKeyDown: PropTypes.func
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

        var headerClass = classNames(_defineProperty({
          'bx--modal-header': true
        }, className, className));
        var labelClass = classNames(_defineProperty({
          'bx--modal-header__label bx--type-delta': true
        }, labelClassName, labelClassName));
        var titleClass = classNames(_defineProperty({
          'bx--modal-header__heading bx--type-beta': true
        }, titleClassName, titleClassName));
        var closeClass = classNames(_defineProperty({
          'bx--modal-close': true
        }, closeClassName, closeClassName));
        var closeIconClass = classNames(_defineProperty({
          'bx--modal-close__icon': true
        }, closeIconClassName, closeIconClassName));
        return React__default.createElement("div", _extends({
          className: headerClass
        }, other), label && React__default.createElement("p", {
          className: labelClass
        }, label), title && React__default.createElement("p", {
          className: titleClass
        }, title), children, React__default.createElement("button", {
          onClick: this.handleCloseButtonClick,
          className: closeClass,
          type: "button"
        }, React__default.createElement(Icon, {
          name: "close",
          className: closeIconClass,
          description: iconDescription
        })));
      }
    }]);

    _inherits(ModalHeader, _Component2);

    return ModalHeader;
  }(React.Component);

  _defineProperty(ModalHeader, "defaultProps", {
    iconDescription: 'Close the modal',
    buttonOnClick: function buttonOnClick() {}
  });

  _defineProperty(ModalHeader, "propTypes", {
    className: PropTypes.string,
    labelClassName: PropTypes.string,
    titleClassName: PropTypes.string,
    closeClassName: PropTypes.string,
    closeIconClassName: PropTypes.string,
    label: PropTypes.string,
    title: PropTypes.string,
    children: PropTypes.node,
    iconDescription: PropTypes.string,
    closeModal: PropTypes.func,
    buttonOnClick: PropTypes.func
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

        var contentClass = classNames(_defineProperty({
          'bx--modal-content': true
        }, className, className));
        return React__default.createElement("div", _extends({
          className: contentClass
        }, other), children);
      }
    }]);

    _inherits(ModalBody, _Component3);

    return ModalBody;
  }(React.Component);

  _defineProperty(ModalBody, "propTypes", {
    className: PropTypes.string
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

        var footerClass = classNames(_defineProperty({
          'bx--modal-footer': true
        }, className, className));
        var primaryClass = classNames(_defineProperty({}, primaryClassName, primaryClassName));
        var secondaryClass = classNames(_defineProperty({}, secondaryClassName, secondaryClassName));
        return React__default.createElement("div", _extends({
          className: footerClass
        }, other), secondaryButtonText && React__default.createElement(Button, {
          className: secondaryClass,
          onClick: this.handleRequestClose,
          kind: "secondary"
        }, secondaryButtonText), primaryButtonText && React__default.createElement(Button, {
          onClick: onRequestSubmit,
          className: primaryClass,
          disabled: primaryButtonDisabled,
          kind: "primary"
        }, primaryButtonText), children);
      }
    }]);

    _inherits(ModalFooter, _Component4);

    return ModalFooter;
  }(React.Component);

  _defineProperty(ModalFooter, "propTypes", {
    className: PropTypes.string,
    primaryClassName: PropTypes.string,
    secondaryClassName: PropTypes.string,
    secondaryButtonText: PropTypes.string,
    primaryButtonText: PropTypes.string,
    primaryButtonDisabled: PropTypes.bool,
    onRequestClose: PropTypes.func,
    onRequestSubmit: PropTypes.func,
    closeModal: PropTypes.func,
    children: PropTypes.node
  });

  _defineProperty(ModalFooter, "defaultProps", {
    onRequestClose: function onRequestClose() {},
    onRequestSubmit: function onRequestSubmit() {}
  });

  var ContentSwitcher =
  /*#__PURE__*/
  function (_React$Component) {
    function ContentSwitcher() {
      var _getPrototypeOf2;

      var _temp, _this;

      _classCallCheck(this, ContentSwitcher);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _possibleConstructorReturn(_this, (_temp = _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(ContentSwitcher)).call.apply(_getPrototypeOf2, [this].concat(args))), _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
        selectedIndex: _this.props.selectedIndex
      }), _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleChildChange", function (data) {
        var selectedIndex = _this.state.selectedIndex;
        var index = data.index;

        if (selectedIndex !== index) {
          _this.setState({
            selectedIndex: index
          });

          _this.props.onChange(data);
        }
      }), _temp));
    }

    _createClass(ContentSwitcher, [{
      key: "getChildren",
      value: function getChildren(children) {
        var _this2 = this;

        return React__default.Children.map(children, function (child, index) {
          return React__default.cloneElement(child, {
            index: index,
            onClick: _this2.handleChildChange,
            onKeyDown: _this2.handleChildChange,
            selected: index === _this2.state.selectedIndex
          });
        });
      }
    }, {
      key: "render",
      value: function render() {
        var _this$props = this.props,
            children = _this$props.children,
            className = _this$props.className,
            selectedIndex = _this$props.selectedIndex,
            other = _objectWithoutProperties(_this$props, ["children", "className", "selectedIndex"]);

        var classes = classNames('bx--content-switcher', className);
        return React__default.createElement("div", _extends({}, other, {
          className: classes
        }), this.getChildren(children));
      }
    }]);

    _inherits(ContentSwitcher, _React$Component);

    return ContentSwitcher;
  }(React__default.Component);

  _defineProperty(ContentSwitcher, "propTypes", {
    children: PropTypes.node,
    className: PropTypes.string,
    onChange: PropTypes.func.isRequired,
    selectedIndex: PropTypes.number
  });

  _defineProperty(ContentSwitcher, "defaultProps", {
    selectedIndex: 0
  });

  var DangerButton = function DangerButton(props) {
    return React__default.createElement(Button, _extends({
      kind: "danger"
    }, props));
  };

  var commonjsGlobal = typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

  function unwrapExports (x) {
  	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
  }

  function createCommonjsModule(fn, module) {
  	return module = { exports: {} }, fn(module, module.exports), module.exports;
  }

  var lodash_isequal = createCommonjsModule(function (module, exports) {
  /**
   * Lodash (Custom Build) <https://lodash.com/>
   * Build: `lodash modularize exports="npm" -o ./`
   * Copyright JS Foundation and other contributors <https://js.foundation/>
   * Released under MIT license <https://lodash.com/license>
   * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
   * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
   */

  /** Used as the size to enable large array optimizations. */
  var LARGE_ARRAY_SIZE = 200;

  /** Used to stand-in for `undefined` hash values. */
  var HASH_UNDEFINED = '__lodash_hash_undefined__';

  /** Used to compose bitmasks for value comparisons. */
  var COMPARE_PARTIAL_FLAG = 1,
      COMPARE_UNORDERED_FLAG = 2;

  /** Used as references for various `Number` constants. */
  var MAX_SAFE_INTEGER = 9007199254740991;

  /** `Object#toString` result references. */
  var argsTag = '[object Arguments]',
      arrayTag = '[object Array]',
      asyncTag = '[object AsyncFunction]',
      boolTag = '[object Boolean]',
      dateTag = '[object Date]',
      errorTag = '[object Error]',
      funcTag = '[object Function]',
      genTag = '[object GeneratorFunction]',
      mapTag = '[object Map]',
      numberTag = '[object Number]',
      nullTag = '[object Null]',
      objectTag = '[object Object]',
      promiseTag = '[object Promise]',
      proxyTag = '[object Proxy]',
      regexpTag = '[object RegExp]',
      setTag = '[object Set]',
      stringTag = '[object String]',
      symbolTag = '[object Symbol]',
      undefinedTag = '[object Undefined]',
      weakMapTag = '[object WeakMap]';

  var arrayBufferTag = '[object ArrayBuffer]',
      dataViewTag = '[object DataView]',
      float32Tag = '[object Float32Array]',
      float64Tag = '[object Float64Array]',
      int8Tag = '[object Int8Array]',
      int16Tag = '[object Int16Array]',
      int32Tag = '[object Int32Array]',
      uint8Tag = '[object Uint8Array]',
      uint8ClampedTag = '[object Uint8ClampedArray]',
      uint16Tag = '[object Uint16Array]',
      uint32Tag = '[object Uint32Array]';

  /**
   * Used to match `RegExp`
   * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
   */
  var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

  /** Used to detect host constructors (Safari). */
  var reIsHostCtor = /^\[object .+?Constructor\]$/;

  /** Used to detect unsigned integer values. */
  var reIsUint = /^(?:0|[1-9]\d*)$/;

  /** Used to identify `toStringTag` values of typed arrays. */
  var typedArrayTags = {};
  typedArrayTags[float32Tag] = typedArrayTags[float64Tag] =
  typedArrayTags[int8Tag] = typedArrayTags[int16Tag] =
  typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] =
  typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] =
  typedArrayTags[uint32Tag] = true;
  typedArrayTags[argsTag] = typedArrayTags[arrayTag] =
  typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] =
  typedArrayTags[dataViewTag] = typedArrayTags[dateTag] =
  typedArrayTags[errorTag] = typedArrayTags[funcTag] =
  typedArrayTags[mapTag] = typedArrayTags[numberTag] =
  typedArrayTags[objectTag] = typedArrayTags[regexpTag] =
  typedArrayTags[setTag] = typedArrayTags[stringTag] =
  typedArrayTags[weakMapTag] = false;

  /** Detect free variable `global` from Node.js. */
  var freeGlobal = typeof commonjsGlobal == 'object' && commonjsGlobal && commonjsGlobal.Object === Object && commonjsGlobal;

  /** Detect free variable `self`. */
  var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

  /** Used as a reference to the global object. */
  var root = freeGlobal || freeSelf || Function('return this')();

  /** Detect free variable `exports`. */
  var freeExports = 'object' == 'object' && exports && !exports.nodeType && exports;

  /** Detect free variable `module`. */
  var freeModule = freeExports && 'object' == 'object' && module && !module.nodeType && module;

  /** Detect the popular CommonJS extension `module.exports`. */
  var moduleExports = freeModule && freeModule.exports === freeExports;

  /** Detect free variable `process` from Node.js. */
  var freeProcess = moduleExports && freeGlobal.process;

  /** Used to access faster Node.js helpers. */
  var nodeUtil = (function() {
    try {
      return freeProcess && freeProcess.binding && freeProcess.binding('util');
    } catch (e) {}
  }());

  /* Node.js helper references. */
  var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;

  /**
   * A specialized version of `_.filter` for arrays without support for
   * iteratee shorthands.
   *
   * @private
   * @param {Array} [array] The array to iterate over.
   * @param {Function} predicate The function invoked per iteration.
   * @returns {Array} Returns the new filtered array.
   */
  function arrayFilter(array, predicate) {
    var index = -1,
        length = array == null ? 0 : array.length,
        resIndex = 0,
        result = [];

    while (++index < length) {
      var value = array[index];
      if (predicate(value, index, array)) {
        result[resIndex++] = value;
      }
    }
    return result;
  }

  /**
   * Appends the elements of `values` to `array`.
   *
   * @private
   * @param {Array} array The array to modify.
   * @param {Array} values The values to append.
   * @returns {Array} Returns `array`.
   */
  function arrayPush(array, values) {
    var index = -1,
        length = values.length,
        offset = array.length;

    while (++index < length) {
      array[offset + index] = values[index];
    }
    return array;
  }

  /**
   * A specialized version of `_.some` for arrays without support for iteratee
   * shorthands.
   *
   * @private
   * @param {Array} [array] The array to iterate over.
   * @param {Function} predicate The function invoked per iteration.
   * @returns {boolean} Returns `true` if any element passes the predicate check,
   *  else `false`.
   */
  function arraySome(array, predicate) {
    var index = -1,
        length = array == null ? 0 : array.length;

    while (++index < length) {
      if (predicate(array[index], index, array)) {
        return true;
      }
    }
    return false;
  }

  /**
   * The base implementation of `_.times` without support for iteratee shorthands
   * or max array length checks.
   *
   * @private
   * @param {number} n The number of times to invoke `iteratee`.
   * @param {Function} iteratee The function invoked per iteration.
   * @returns {Array} Returns the array of results.
   */
  function baseTimes(n, iteratee) {
    var index = -1,
        result = Array(n);

    while (++index < n) {
      result[index] = iteratee(index);
    }
    return result;
  }

  /**
   * The base implementation of `_.unary` without support for storing metadata.
   *
   * @private
   * @param {Function} func The function to cap arguments for.
   * @returns {Function} Returns the new capped function.
   */
  function baseUnary(func) {
    return function(value) {
      return func(value);
    };
  }

  /**
   * Checks if a `cache` value for `key` exists.
   *
   * @private
   * @param {Object} cache The cache to query.
   * @param {string} key The key of the entry to check.
   * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
   */
  function cacheHas(cache, key) {
    return cache.has(key);
  }

  /**
   * Gets the value at `key` of `object`.
   *
   * @private
   * @param {Object} [object] The object to query.
   * @param {string} key The key of the property to get.
   * @returns {*} Returns the property value.
   */
  function getValue(object, key) {
    return object == null ? undefined : object[key];
  }

  /**
   * Converts `map` to its key-value pairs.
   *
   * @private
   * @param {Object} map The map to convert.
   * @returns {Array} Returns the key-value pairs.
   */
  function mapToArray(map) {
    var index = -1,
        result = Array(map.size);

    map.forEach(function(value, key) {
      result[++index] = [key, value];
    });
    return result;
  }

  /**
   * Creates a unary function that invokes `func` with its argument transformed.
   *
   * @private
   * @param {Function} func The function to wrap.
   * @param {Function} transform The argument transform.
   * @returns {Function} Returns the new function.
   */
  function overArg(func, transform) {
    return function(arg) {
      return func(transform(arg));
    };
  }

  /**
   * Converts `set` to an array of its values.
   *
   * @private
   * @param {Object} set The set to convert.
   * @returns {Array} Returns the values.
   */
  function setToArray(set) {
    var index = -1,
        result = Array(set.size);

    set.forEach(function(value) {
      result[++index] = value;
    });
    return result;
  }

  /** Used for built-in method references. */
  var arrayProto = Array.prototype,
      funcProto = Function.prototype,
      objectProto = Object.prototype;

  /** Used to detect overreaching core-js shims. */
  var coreJsData = root['__core-js_shared__'];

  /** Used to resolve the decompiled source of functions. */
  var funcToString = funcProto.toString;

  /** Used to check objects for own properties. */
  var hasOwnProperty = objectProto.hasOwnProperty;

  /** Used to detect methods masquerading as native. */
  var maskSrcKey = (function() {
    var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
    return uid ? ('Symbol(src)_1.' + uid) : '';
  }());

  /**
   * Used to resolve the
   * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
   * of values.
   */
  var nativeObjectToString = objectProto.toString;

  /** Used to detect if a method is native. */
  var reIsNative = RegExp('^' +
    funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
    .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
  );

  /** Built-in value references. */
  var Buffer = moduleExports ? root.Buffer : undefined,
      Symbol = root.Symbol,
      Uint8Array = root.Uint8Array,
      propertyIsEnumerable = objectProto.propertyIsEnumerable,
      splice = arrayProto.splice,
      symToStringTag = Symbol ? Symbol.toStringTag : undefined;

  /* Built-in method references for those with the same name as other `lodash` methods. */
  var nativeGetSymbols = Object.getOwnPropertySymbols,
      nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined,
      nativeKeys = overArg(Object.keys, Object);

  /* Built-in method references that are verified to be native. */
  var DataView = getNative(root, 'DataView'),
      Map = getNative(root, 'Map'),
      Promise = getNative(root, 'Promise'),
      Set = getNative(root, 'Set'),
      WeakMap = getNative(root, 'WeakMap'),
      nativeCreate = getNative(Object, 'create');

  /** Used to detect maps, sets, and weakmaps. */
  var dataViewCtorString = toSource(DataView),
      mapCtorString = toSource(Map),
      promiseCtorString = toSource(Promise),
      setCtorString = toSource(Set),
      weakMapCtorString = toSource(WeakMap);

  /** Used to convert symbols to primitives and strings. */
  var symbolProto = Symbol ? Symbol.prototype : undefined,
      symbolValueOf = symbolProto ? symbolProto.valueOf : undefined;

  /**
   * Creates a hash object.
   *
   * @private
   * @constructor
   * @param {Array} [entries] The key-value pairs to cache.
   */
  function Hash(entries) {
    var index = -1,
        length = entries == null ? 0 : entries.length;

    this.clear();
    while (++index < length) {
      var entry = entries[index];
      this.set(entry[0], entry[1]);
    }
  }

  /**
   * Removes all key-value entries from the hash.
   *
   * @private
   * @name clear
   * @memberOf Hash
   */
  function hashClear() {
    this.__data__ = nativeCreate ? nativeCreate(null) : {};
    this.size = 0;
  }

  /**
   * Removes `key` and its value from the hash.
   *
   * @private
   * @name delete
   * @memberOf Hash
   * @param {Object} hash The hash to modify.
   * @param {string} key The key of the value to remove.
   * @returns {boolean} Returns `true` if the entry was removed, else `false`.
   */
  function hashDelete(key) {
    var result = this.has(key) && delete this.__data__[key];
    this.size -= result ? 1 : 0;
    return result;
  }

  /**
   * Gets the hash value for `key`.
   *
   * @private
   * @name get
   * @memberOf Hash
   * @param {string} key The key of the value to get.
   * @returns {*} Returns the entry value.
   */
  function hashGet(key) {
    var data = this.__data__;
    if (nativeCreate) {
      var result = data[key];
      return result === HASH_UNDEFINED ? undefined : result;
    }
    return hasOwnProperty.call(data, key) ? data[key] : undefined;
  }

  /**
   * Checks if a hash value for `key` exists.
   *
   * @private
   * @name has
   * @memberOf Hash
   * @param {string} key The key of the entry to check.
   * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
   */
  function hashHas(key) {
    var data = this.__data__;
    return nativeCreate ? (data[key] !== undefined) : hasOwnProperty.call(data, key);
  }

  /**
   * Sets the hash `key` to `value`.
   *
   * @private
   * @name set
   * @memberOf Hash
   * @param {string} key The key of the value to set.
   * @param {*} value The value to set.
   * @returns {Object} Returns the hash instance.
   */
  function hashSet(key, value) {
    var data = this.__data__;
    this.size += this.has(key) ? 0 : 1;
    data[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED : value;
    return this;
  }

  // Add methods to `Hash`.
  Hash.prototype.clear = hashClear;
  Hash.prototype['delete'] = hashDelete;
  Hash.prototype.get = hashGet;
  Hash.prototype.has = hashHas;
  Hash.prototype.set = hashSet;

  /**
   * Creates an list cache object.
   *
   * @private
   * @constructor
   * @param {Array} [entries] The key-value pairs to cache.
   */
  function ListCache(entries) {
    var index = -1,
        length = entries == null ? 0 : entries.length;

    this.clear();
    while (++index < length) {
      var entry = entries[index];
      this.set(entry[0], entry[1]);
    }
  }

  /**
   * Removes all key-value entries from the list cache.
   *
   * @private
   * @name clear
   * @memberOf ListCache
   */
  function listCacheClear() {
    this.__data__ = [];
    this.size = 0;
  }

  /**
   * Removes `key` and its value from the list cache.
   *
   * @private
   * @name delete
   * @memberOf ListCache
   * @param {string} key The key of the value to remove.
   * @returns {boolean} Returns `true` if the entry was removed, else `false`.
   */
  function listCacheDelete(key) {
    var data = this.__data__,
        index = assocIndexOf(data, key);

    if (index < 0) {
      return false;
    }
    var lastIndex = data.length - 1;
    if (index == lastIndex) {
      data.pop();
    } else {
      splice.call(data, index, 1);
    }
    --this.size;
    return true;
  }

  /**
   * Gets the list cache value for `key`.
   *
   * @private
   * @name get
   * @memberOf ListCache
   * @param {string} key The key of the value to get.
   * @returns {*} Returns the entry value.
   */
  function listCacheGet(key) {
    var data = this.__data__,
        index = assocIndexOf(data, key);

    return index < 0 ? undefined : data[index][1];
  }

  /**
   * Checks if a list cache value for `key` exists.
   *
   * @private
   * @name has
   * @memberOf ListCache
   * @param {string} key The key of the entry to check.
   * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
   */
  function listCacheHas(key) {
    return assocIndexOf(this.__data__, key) > -1;
  }

  /**
   * Sets the list cache `key` to `value`.
   *
   * @private
   * @name set
   * @memberOf ListCache
   * @param {string} key The key of the value to set.
   * @param {*} value The value to set.
   * @returns {Object} Returns the list cache instance.
   */
  function listCacheSet(key, value) {
    var data = this.__data__,
        index = assocIndexOf(data, key);

    if (index < 0) {
      ++this.size;
      data.push([key, value]);
    } else {
      data[index][1] = value;
    }
    return this;
  }

  // Add methods to `ListCache`.
  ListCache.prototype.clear = listCacheClear;
  ListCache.prototype['delete'] = listCacheDelete;
  ListCache.prototype.get = listCacheGet;
  ListCache.prototype.has = listCacheHas;
  ListCache.prototype.set = listCacheSet;

  /**
   * Creates a map cache object to store key-value pairs.
   *
   * @private
   * @constructor
   * @param {Array} [entries] The key-value pairs to cache.
   */
  function MapCache(entries) {
    var index = -1,
        length = entries == null ? 0 : entries.length;

    this.clear();
    while (++index < length) {
      var entry = entries[index];
      this.set(entry[0], entry[1]);
    }
  }

  /**
   * Removes all key-value entries from the map.
   *
   * @private
   * @name clear
   * @memberOf MapCache
   */
  function mapCacheClear() {
    this.size = 0;
    this.__data__ = {
      'hash': new Hash,
      'map': new (Map || ListCache),
      'string': new Hash
    };
  }

  /**
   * Removes `key` and its value from the map.
   *
   * @private
   * @name delete
   * @memberOf MapCache
   * @param {string} key The key of the value to remove.
   * @returns {boolean} Returns `true` if the entry was removed, else `false`.
   */
  function mapCacheDelete(key) {
    var result = getMapData(this, key)['delete'](key);
    this.size -= result ? 1 : 0;
    return result;
  }

  /**
   * Gets the map value for `key`.
   *
   * @private
   * @name get
   * @memberOf MapCache
   * @param {string} key The key of the value to get.
   * @returns {*} Returns the entry value.
   */
  function mapCacheGet(key) {
    return getMapData(this, key).get(key);
  }

  /**
   * Checks if a map value for `key` exists.
   *
   * @private
   * @name has
   * @memberOf MapCache
   * @param {string} key The key of the entry to check.
   * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
   */
  function mapCacheHas(key) {
    return getMapData(this, key).has(key);
  }

  /**
   * Sets the map `key` to `value`.
   *
   * @private
   * @name set
   * @memberOf MapCache
   * @param {string} key The key of the value to set.
   * @param {*} value The value to set.
   * @returns {Object} Returns the map cache instance.
   */
  function mapCacheSet(key, value) {
    var data = getMapData(this, key),
        size = data.size;

    data.set(key, value);
    this.size += data.size == size ? 0 : 1;
    return this;
  }

  // Add methods to `MapCache`.
  MapCache.prototype.clear = mapCacheClear;
  MapCache.prototype['delete'] = mapCacheDelete;
  MapCache.prototype.get = mapCacheGet;
  MapCache.prototype.has = mapCacheHas;
  MapCache.prototype.set = mapCacheSet;

  /**
   *
   * Creates an array cache object to store unique values.
   *
   * @private
   * @constructor
   * @param {Array} [values] The values to cache.
   */
  function SetCache(values) {
    var index = -1,
        length = values == null ? 0 : values.length;

    this.__data__ = new MapCache;
    while (++index < length) {
      this.add(values[index]);
    }
  }

  /**
   * Adds `value` to the array cache.
   *
   * @private
   * @name add
   * @memberOf SetCache
   * @alias push
   * @param {*} value The value to cache.
   * @returns {Object} Returns the cache instance.
   */
  function setCacheAdd(value) {
    this.__data__.set(value, HASH_UNDEFINED);
    return this;
  }

  /**
   * Checks if `value` is in the array cache.
   *
   * @private
   * @name has
   * @memberOf SetCache
   * @param {*} value The value to search for.
   * @returns {number} Returns `true` if `value` is found, else `false`.
   */
  function setCacheHas(value) {
    return this.__data__.has(value);
  }

  // Add methods to `SetCache`.
  SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
  SetCache.prototype.has = setCacheHas;

  /**
   * Creates a stack cache object to store key-value pairs.
   *
   * @private
   * @constructor
   * @param {Array} [entries] The key-value pairs to cache.
   */
  function Stack(entries) {
    var data = this.__data__ = new ListCache(entries);
    this.size = data.size;
  }

  /**
   * Removes all key-value entries from the stack.
   *
   * @private
   * @name clear
   * @memberOf Stack
   */
  function stackClear() {
    this.__data__ = new ListCache;
    this.size = 0;
  }

  /**
   * Removes `key` and its value from the stack.
   *
   * @private
   * @name delete
   * @memberOf Stack
   * @param {string} key The key of the value to remove.
   * @returns {boolean} Returns `true` if the entry was removed, else `false`.
   */
  function stackDelete(key) {
    var data = this.__data__,
        result = data['delete'](key);

    this.size = data.size;
    return result;
  }

  /**
   * Gets the stack value for `key`.
   *
   * @private
   * @name get
   * @memberOf Stack
   * @param {string} key The key of the value to get.
   * @returns {*} Returns the entry value.
   */
  function stackGet(key) {
    return this.__data__.get(key);
  }

  /**
   * Checks if a stack value for `key` exists.
   *
   * @private
   * @name has
   * @memberOf Stack
   * @param {string} key The key of the entry to check.
   * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
   */
  function stackHas(key) {
    return this.__data__.has(key);
  }

  /**
   * Sets the stack `key` to `value`.
   *
   * @private
   * @name set
   * @memberOf Stack
   * @param {string} key The key of the value to set.
   * @param {*} value The value to set.
   * @returns {Object} Returns the stack cache instance.
   */
  function stackSet(key, value) {
    var data = this.__data__;
    if (data instanceof ListCache) {
      var pairs = data.__data__;
      if (!Map || (pairs.length < LARGE_ARRAY_SIZE - 1)) {
        pairs.push([key, value]);
        this.size = ++data.size;
        return this;
      }
      data = this.__data__ = new MapCache(pairs);
    }
    data.set(key, value);
    this.size = data.size;
    return this;
  }

  // Add methods to `Stack`.
  Stack.prototype.clear = stackClear;
  Stack.prototype['delete'] = stackDelete;
  Stack.prototype.get = stackGet;
  Stack.prototype.has = stackHas;
  Stack.prototype.set = stackSet;

  /**
   * Creates an array of the enumerable property names of the array-like `value`.
   *
   * @private
   * @param {*} value The value to query.
   * @param {boolean} inherited Specify returning inherited property names.
   * @returns {Array} Returns the array of property names.
   */
  function arrayLikeKeys(value, inherited) {
    var isArr = isArray(value),
        isArg = !isArr && isArguments(value),
        isBuff = !isArr && !isArg && isBuffer(value),
        isType = !isArr && !isArg && !isBuff && isTypedArray(value),
        skipIndexes = isArr || isArg || isBuff || isType,
        result = skipIndexes ? baseTimes(value.length, String) : [],
        length = result.length;

    for (var key in value) {
      if ((inherited || hasOwnProperty.call(value, key)) &&
          !(skipIndexes && (
             // Safari 9 has enumerable `arguments.length` in strict mode.
             key == 'length' ||
             // Node.js 0.10 has enumerable non-index properties on buffers.
             (isBuff && (key == 'offset' || key == 'parent')) ||
             // PhantomJS 2 has enumerable non-index properties on typed arrays.
             (isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset')) ||
             // Skip index properties.
             isIndex(key, length)
          ))) {
        result.push(key);
      }
    }
    return result;
  }

  /**
   * Gets the index at which the `key` is found in `array` of key-value pairs.
   *
   * @private
   * @param {Array} array The array to inspect.
   * @param {*} key The key to search for.
   * @returns {number} Returns the index of the matched value, else `-1`.
   */
  function assocIndexOf(array, key) {
    var length = array.length;
    while (length--) {
      if (eq(array[length][0], key)) {
        return length;
      }
    }
    return -1;
  }

  /**
   * The base implementation of `getAllKeys` and `getAllKeysIn` which uses
   * `keysFunc` and `symbolsFunc` to get the enumerable property names and
   * symbols of `object`.
   *
   * @private
   * @param {Object} object The object to query.
   * @param {Function} keysFunc The function to get the keys of `object`.
   * @param {Function} symbolsFunc The function to get the symbols of `object`.
   * @returns {Array} Returns the array of property names and symbols.
   */
  function baseGetAllKeys(object, keysFunc, symbolsFunc) {
    var result = keysFunc(object);
    return isArray(object) ? result : arrayPush(result, symbolsFunc(object));
  }

  /**
   * The base implementation of `getTag` without fallbacks for buggy environments.
   *
   * @private
   * @param {*} value The value to query.
   * @returns {string} Returns the `toStringTag`.
   */
  function baseGetTag(value) {
    if (value == null) {
      return value === undefined ? undefinedTag : nullTag;
    }
    return (symToStringTag && symToStringTag in Object(value))
      ? getRawTag(value)
      : objectToString(value);
  }

  /**
   * The base implementation of `_.isArguments`.
   *
   * @private
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is an `arguments` object,
   */
  function baseIsArguments(value) {
    return isObjectLike(value) && baseGetTag(value) == argsTag;
  }

  /**
   * The base implementation of `_.isEqual` which supports partial comparisons
   * and tracks traversed objects.
   *
   * @private
   * @param {*} value The value to compare.
   * @param {*} other The other value to compare.
   * @param {boolean} bitmask The bitmask flags.
   *  1 - Unordered comparison
   *  2 - Partial comparison
   * @param {Function} [customizer] The function to customize comparisons.
   * @param {Object} [stack] Tracks traversed `value` and `other` objects.
   * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
   */
  function baseIsEqual(value, other, bitmask, customizer, stack) {
    if (value === other) {
      return true;
    }
    if (value == null || other == null || (!isObjectLike(value) && !isObjectLike(other))) {
      return value !== value && other !== other;
    }
    return baseIsEqualDeep(value, other, bitmask, customizer, baseIsEqual, stack);
  }

  /**
   * A specialized version of `baseIsEqual` for arrays and objects which performs
   * deep comparisons and tracks traversed objects enabling objects with circular
   * references to be compared.
   *
   * @private
   * @param {Object} object The object to compare.
   * @param {Object} other The other object to compare.
   * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
   * @param {Function} customizer The function to customize comparisons.
   * @param {Function} equalFunc The function to determine equivalents of values.
   * @param {Object} [stack] Tracks traversed `object` and `other` objects.
   * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
   */
  function baseIsEqualDeep(object, other, bitmask, customizer, equalFunc, stack) {
    var objIsArr = isArray(object),
        othIsArr = isArray(other),
        objTag = objIsArr ? arrayTag : getTag(object),
        othTag = othIsArr ? arrayTag : getTag(other);

    objTag = objTag == argsTag ? objectTag : objTag;
    othTag = othTag == argsTag ? objectTag : othTag;

    var objIsObj = objTag == objectTag,
        othIsObj = othTag == objectTag,
        isSameTag = objTag == othTag;

    if (isSameTag && isBuffer(object)) {
      if (!isBuffer(other)) {
        return false;
      }
      objIsArr = true;
      objIsObj = false;
    }
    if (isSameTag && !objIsObj) {
      stack || (stack = new Stack);
      return (objIsArr || isTypedArray(object))
        ? equalArrays(object, other, bitmask, customizer, equalFunc, stack)
        : equalByTag(object, other, objTag, bitmask, customizer, equalFunc, stack);
    }
    if (!(bitmask & COMPARE_PARTIAL_FLAG)) {
      var objIsWrapped = objIsObj && hasOwnProperty.call(object, '__wrapped__'),
          othIsWrapped = othIsObj && hasOwnProperty.call(other, '__wrapped__');

      if (objIsWrapped || othIsWrapped) {
        var objUnwrapped = objIsWrapped ? object.value() : object,
            othUnwrapped = othIsWrapped ? other.value() : other;

        stack || (stack = new Stack);
        return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
      }
    }
    if (!isSameTag) {
      return false;
    }
    stack || (stack = new Stack);
    return equalObjects(object, other, bitmask, customizer, equalFunc, stack);
  }

  /**
   * The base implementation of `_.isNative` without bad shim checks.
   *
   * @private
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a native function,
   *  else `false`.
   */
  function baseIsNative(value) {
    if (!isObject(value) || isMasked(value)) {
      return false;
    }
    var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
    return pattern.test(toSource(value));
  }

  /**
   * The base implementation of `_.isTypedArray` without Node.js optimizations.
   *
   * @private
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
   */
  function baseIsTypedArray(value) {
    return isObjectLike(value) &&
      isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
  }

  /**
   * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
   *
   * @private
   * @param {Object} object The object to query.
   * @returns {Array} Returns the array of property names.
   */
  function baseKeys(object) {
    if (!isPrototype(object)) {
      return nativeKeys(object);
    }
    var result = [];
    for (var key in Object(object)) {
      if (hasOwnProperty.call(object, key) && key != 'constructor') {
        result.push(key);
      }
    }
    return result;
  }

  /**
   * A specialized version of `baseIsEqualDeep` for arrays with support for
   * partial deep comparisons.
   *
   * @private
   * @param {Array} array The array to compare.
   * @param {Array} other The other array to compare.
   * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
   * @param {Function} customizer The function to customize comparisons.
   * @param {Function} equalFunc The function to determine equivalents of values.
   * @param {Object} stack Tracks traversed `array` and `other` objects.
   * @returns {boolean} Returns `true` if the arrays are equivalent, else `false`.
   */
  function equalArrays(array, other, bitmask, customizer, equalFunc, stack) {
    var isPartial = bitmask & COMPARE_PARTIAL_FLAG,
        arrLength = array.length,
        othLength = other.length;

    if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
      return false;
    }
    // Assume cyclic values are equal.
    var stacked = stack.get(array);
    if (stacked && stack.get(other)) {
      return stacked == other;
    }
    var index = -1,
        result = true,
        seen = (bitmask & COMPARE_UNORDERED_FLAG) ? new SetCache : undefined;

    stack.set(array, other);
    stack.set(other, array);

    // Ignore non-index properties.
    while (++index < arrLength) {
      var arrValue = array[index],
          othValue = other[index];

      if (customizer) {
        var compared = isPartial
          ? customizer(othValue, arrValue, index, other, array, stack)
          : customizer(arrValue, othValue, index, array, other, stack);
      }
      if (compared !== undefined) {
        if (compared) {
          continue;
        }
        result = false;
        break;
      }
      // Recursively compare arrays (susceptible to call stack limits).
      if (seen) {
        if (!arraySome(other, function(othValue, othIndex) {
              if (!cacheHas(seen, othIndex) &&
                  (arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
                return seen.push(othIndex);
              }
            })) {
          result = false;
          break;
        }
      } else if (!(
            arrValue === othValue ||
              equalFunc(arrValue, othValue, bitmask, customizer, stack)
          )) {
        result = false;
        break;
      }
    }
    stack['delete'](array);
    stack['delete'](other);
    return result;
  }

  /**
   * A specialized version of `baseIsEqualDeep` for comparing objects of
   * the same `toStringTag`.
   *
   * **Note:** This function only supports comparing values with tags of
   * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
   *
   * @private
   * @param {Object} object The object to compare.
   * @param {Object} other The other object to compare.
   * @param {string} tag The `toStringTag` of the objects to compare.
   * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
   * @param {Function} customizer The function to customize comparisons.
   * @param {Function} equalFunc The function to determine equivalents of values.
   * @param {Object} stack Tracks traversed `object` and `other` objects.
   * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
   */
  function equalByTag(object, other, tag, bitmask, customizer, equalFunc, stack) {
    switch (tag) {
      case dataViewTag:
        if ((object.byteLength != other.byteLength) ||
            (object.byteOffset != other.byteOffset)) {
          return false;
        }
        object = object.buffer;
        other = other.buffer;

      case arrayBufferTag:
        if ((object.byteLength != other.byteLength) ||
            !equalFunc(new Uint8Array(object), new Uint8Array(other))) {
          return false;
        }
        return true;

      case boolTag:
      case dateTag:
      case numberTag:
        // Coerce booleans to `1` or `0` and dates to milliseconds.
        // Invalid dates are coerced to `NaN`.
        return eq(+object, +other);

      case errorTag:
        return object.name == other.name && object.message == other.message;

      case regexpTag:
      case stringTag:
        // Coerce regexes to strings and treat strings, primitives and objects,
        // as equal. See http://www.ecma-international.org/ecma-262/7.0/#sec-regexp.prototype.tostring
        // for more details.
        return object == (other + '');

      case mapTag:
        var convert = mapToArray;

      case setTag:
        var isPartial = bitmask & COMPARE_PARTIAL_FLAG;
        convert || (convert = setToArray);

        if (object.size != other.size && !isPartial) {
          return false;
        }
        // Assume cyclic values are equal.
        var stacked = stack.get(object);
        if (stacked) {
          return stacked == other;
        }
        bitmask |= COMPARE_UNORDERED_FLAG;

        // Recursively compare objects (susceptible to call stack limits).
        stack.set(object, other);
        var result = equalArrays(convert(object), convert(other), bitmask, customizer, equalFunc, stack);
        stack['delete'](object);
        return result;

      case symbolTag:
        if (symbolValueOf) {
          return symbolValueOf.call(object) == symbolValueOf.call(other);
        }
    }
    return false;
  }

  /**
   * A specialized version of `baseIsEqualDeep` for objects with support for
   * partial deep comparisons.
   *
   * @private
   * @param {Object} object The object to compare.
   * @param {Object} other The other object to compare.
   * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
   * @param {Function} customizer The function to customize comparisons.
   * @param {Function} equalFunc The function to determine equivalents of values.
   * @param {Object} stack Tracks traversed `object` and `other` objects.
   * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
   */
  function equalObjects(object, other, bitmask, customizer, equalFunc, stack) {
    var isPartial = bitmask & COMPARE_PARTIAL_FLAG,
        objProps = getAllKeys(object),
        objLength = objProps.length,
        othProps = getAllKeys(other),
        othLength = othProps.length;

    if (objLength != othLength && !isPartial) {
      return false;
    }
    var index = objLength;
    while (index--) {
      var key = objProps[index];
      if (!(isPartial ? key in other : hasOwnProperty.call(other, key))) {
        return false;
      }
    }
    // Assume cyclic values are equal.
    var stacked = stack.get(object);
    if (stacked && stack.get(other)) {
      return stacked == other;
    }
    var result = true;
    stack.set(object, other);
    stack.set(other, object);

    var skipCtor = isPartial;
    while (++index < objLength) {
      key = objProps[index];
      var objValue = object[key],
          othValue = other[key];

      if (customizer) {
        var compared = isPartial
          ? customizer(othValue, objValue, key, other, object, stack)
          : customizer(objValue, othValue, key, object, other, stack);
      }
      // Recursively compare objects (susceptible to call stack limits).
      if (!(compared === undefined
            ? (objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack))
            : compared
          )) {
        result = false;
        break;
      }
      skipCtor || (skipCtor = key == 'constructor');
    }
    if (result && !skipCtor) {
      var objCtor = object.constructor,
          othCtor = other.constructor;

      // Non `Object` object instances with different constructors are not equal.
      if (objCtor != othCtor &&
          ('constructor' in object && 'constructor' in other) &&
          !(typeof objCtor == 'function' && objCtor instanceof objCtor &&
            typeof othCtor == 'function' && othCtor instanceof othCtor)) {
        result = false;
      }
    }
    stack['delete'](object);
    stack['delete'](other);
    return result;
  }

  /**
   * Creates an array of own enumerable property names and symbols of `object`.
   *
   * @private
   * @param {Object} object The object to query.
   * @returns {Array} Returns the array of property names and symbols.
   */
  function getAllKeys(object) {
    return baseGetAllKeys(object, keys, getSymbols);
  }

  /**
   * Gets the data for `map`.
   *
   * @private
   * @param {Object} map The map to query.
   * @param {string} key The reference key.
   * @returns {*} Returns the map data.
   */
  function getMapData(map, key) {
    var data = map.__data__;
    return isKeyable(key)
      ? data[typeof key == 'string' ? 'string' : 'hash']
      : data.map;
  }

  /**
   * Gets the native function at `key` of `object`.
   *
   * @private
   * @param {Object} object The object to query.
   * @param {string} key The key of the method to get.
   * @returns {*} Returns the function if it's native, else `undefined`.
   */
  function getNative(object, key) {
    var value = getValue(object, key);
    return baseIsNative(value) ? value : undefined;
  }

  /**
   * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
   *
   * @private
   * @param {*} value The value to query.
   * @returns {string} Returns the raw `toStringTag`.
   */
  function getRawTag(value) {
    var isOwn = hasOwnProperty.call(value, symToStringTag),
        tag = value[symToStringTag];

    try {
      value[symToStringTag] = undefined;
      var unmasked = true;
    } catch (e) {}

    var result = nativeObjectToString.call(value);
    if (unmasked) {
      if (isOwn) {
        value[symToStringTag] = tag;
      } else {
        delete value[symToStringTag];
      }
    }
    return result;
  }

  /**
   * Creates an array of the own enumerable symbols of `object`.
   *
   * @private
   * @param {Object} object The object to query.
   * @returns {Array} Returns the array of symbols.
   */
  var getSymbols = !nativeGetSymbols ? stubArray : function(object) {
    if (object == null) {
      return [];
    }
    object = Object(object);
    return arrayFilter(nativeGetSymbols(object), function(symbol) {
      return propertyIsEnumerable.call(object, symbol);
    });
  };

  /**
   * Gets the `toStringTag` of `value`.
   *
   * @private
   * @param {*} value The value to query.
   * @returns {string} Returns the `toStringTag`.
   */
  var getTag = baseGetTag;

  // Fallback for data views, maps, sets, and weak maps in IE 11 and promises in Node.js < 6.
  if ((DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag) ||
      (Map && getTag(new Map) != mapTag) ||
      (Promise && getTag(Promise.resolve()) != promiseTag) ||
      (Set && getTag(new Set) != setTag) ||
      (WeakMap && getTag(new WeakMap) != weakMapTag)) {
    getTag = function(value) {
      var result = baseGetTag(value),
          Ctor = result == objectTag ? value.constructor : undefined,
          ctorString = Ctor ? toSource(Ctor) : '';

      if (ctorString) {
        switch (ctorString) {
          case dataViewCtorString: return dataViewTag;
          case mapCtorString: return mapTag;
          case promiseCtorString: return promiseTag;
          case setCtorString: return setTag;
          case weakMapCtorString: return weakMapTag;
        }
      }
      return result;
    };
  }

  /**
   * Checks if `value` is a valid array-like index.
   *
   * @private
   * @param {*} value The value to check.
   * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
   * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
   */
  function isIndex(value, length) {
    length = length == null ? MAX_SAFE_INTEGER : length;
    return !!length &&
      (typeof value == 'number' || reIsUint.test(value)) &&
      (value > -1 && value % 1 == 0 && value < length);
  }

  /**
   * Checks if `value` is suitable for use as unique object key.
   *
   * @private
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
   */
  function isKeyable(value) {
    var type = typeof value;
    return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
      ? (value !== '__proto__')
      : (value === null);
  }

  /**
   * Checks if `func` has its source masked.
   *
   * @private
   * @param {Function} func The function to check.
   * @returns {boolean} Returns `true` if `func` is masked, else `false`.
   */
  function isMasked(func) {
    return !!maskSrcKey && (maskSrcKey in func);
  }

  /**
   * Checks if `value` is likely a prototype object.
   *
   * @private
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
   */
  function isPrototype(value) {
    var Ctor = value && value.constructor,
        proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto;

    return value === proto;
  }

  /**
   * Converts `value` to a string using `Object.prototype.toString`.
   *
   * @private
   * @param {*} value The value to convert.
   * @returns {string} Returns the converted string.
   */
  function objectToString(value) {
    return nativeObjectToString.call(value);
  }

  /**
   * Converts `func` to its source code.
   *
   * @private
   * @param {Function} func The function to convert.
   * @returns {string} Returns the source code.
   */
  function toSource(func) {
    if (func != null) {
      try {
        return funcToString.call(func);
      } catch (e) {}
      try {
        return (func + '');
      } catch (e) {}
    }
    return '';
  }

  /**
   * Performs a
   * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
   * comparison between two values to determine if they are equivalent.
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Lang
   * @param {*} value The value to compare.
   * @param {*} other The other value to compare.
   * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
   * @example
   *
   * var object = { 'a': 1 };
   * var other = { 'a': 1 };
   *
   * _.eq(object, object);
   * // => true
   *
   * _.eq(object, other);
   * // => false
   *
   * _.eq('a', 'a');
   * // => true
   *
   * _.eq('a', Object('a'));
   * // => false
   *
   * _.eq(NaN, NaN);
   * // => true
   */
  function eq(value, other) {
    return value === other || (value !== value && other !== other);
  }

  /**
   * Checks if `value` is likely an `arguments` object.
   *
   * @static
   * @memberOf _
   * @since 0.1.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is an `arguments` object,
   *  else `false`.
   * @example
   *
   * _.isArguments(function() { return arguments; }());
   * // => true
   *
   * _.isArguments([1, 2, 3]);
   * // => false
   */
  var isArguments = baseIsArguments(function() { return arguments; }()) ? baseIsArguments : function(value) {
    return isObjectLike(value) && hasOwnProperty.call(value, 'callee') &&
      !propertyIsEnumerable.call(value, 'callee');
  };

  /**
   * Checks if `value` is classified as an `Array` object.
   *
   * @static
   * @memberOf _
   * @since 0.1.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is an array, else `false`.
   * @example
   *
   * _.isArray([1, 2, 3]);
   * // => true
   *
   * _.isArray(document.body.children);
   * // => false
   *
   * _.isArray('abc');
   * // => false
   *
   * _.isArray(_.noop);
   * // => false
   */
  var isArray = Array.isArray;

  /**
   * Checks if `value` is array-like. A value is considered array-like if it's
   * not a function and has a `value.length` that's an integer greater than or
   * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
   * @example
   *
   * _.isArrayLike([1, 2, 3]);
   * // => true
   *
   * _.isArrayLike(document.body.children);
   * // => true
   *
   * _.isArrayLike('abc');
   * // => true
   *
   * _.isArrayLike(_.noop);
   * // => false
   */
  function isArrayLike(value) {
    return value != null && isLength(value.length) && !isFunction(value);
  }

  /**
   * Checks if `value` is a buffer.
   *
   * @static
   * @memberOf _
   * @since 4.3.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
   * @example
   *
   * _.isBuffer(new Buffer(2));
   * // => true
   *
   * _.isBuffer(new Uint8Array(2));
   * // => false
   */
  var isBuffer = nativeIsBuffer || stubFalse;

  /**
   * Performs a deep comparison between two values to determine if they are
   * equivalent.
   *
   * **Note:** This method supports comparing arrays, array buffers, booleans,
   * date objects, error objects, maps, numbers, `Object` objects, regexes,
   * sets, strings, symbols, and typed arrays. `Object` objects are compared
   * by their own, not inherited, enumerable properties. Functions and DOM
   * nodes are compared by strict equality, i.e. `===`.
   *
   * @static
   * @memberOf _
   * @since 0.1.0
   * @category Lang
   * @param {*} value The value to compare.
   * @param {*} other The other value to compare.
   * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
   * @example
   *
   * var object = { 'a': 1 };
   * var other = { 'a': 1 };
   *
   * _.isEqual(object, other);
   * // => true
   *
   * object === other;
   * // => false
   */
  function isEqual(value, other) {
    return baseIsEqual(value, other);
  }

  /**
   * Checks if `value` is classified as a `Function` object.
   *
   * @static
   * @memberOf _
   * @since 0.1.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a function, else `false`.
   * @example
   *
   * _.isFunction(_);
   * // => true
   *
   * _.isFunction(/abc/);
   * // => false
   */
  function isFunction(value) {
    if (!isObject(value)) {
      return false;
    }
    // The use of `Object#toString` avoids issues with the `typeof` operator
    // in Safari 9 which returns 'object' for typed arrays and other constructors.
    var tag = baseGetTag(value);
    return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
  }

  /**
   * Checks if `value` is a valid array-like length.
   *
   * **Note:** This method is loosely based on
   * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
   * @example
   *
   * _.isLength(3);
   * // => true
   *
   * _.isLength(Number.MIN_VALUE);
   * // => false
   *
   * _.isLength(Infinity);
   * // => false
   *
   * _.isLength('3');
   * // => false
   */
  function isLength(value) {
    return typeof value == 'number' &&
      value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
  }

  /**
   * Checks if `value` is the
   * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
   * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
   *
   * @static
   * @memberOf _
   * @since 0.1.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is an object, else `false`.
   * @example
   *
   * _.isObject({});
   * // => true
   *
   * _.isObject([1, 2, 3]);
   * // => true
   *
   * _.isObject(_.noop);
   * // => true
   *
   * _.isObject(null);
   * // => false
   */
  function isObject(value) {
    var type = typeof value;
    return value != null && (type == 'object' || type == 'function');
  }

  /**
   * Checks if `value` is object-like. A value is object-like if it's not `null`
   * and has a `typeof` result of "object".
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
   * @example
   *
   * _.isObjectLike({});
   * // => true
   *
   * _.isObjectLike([1, 2, 3]);
   * // => true
   *
   * _.isObjectLike(_.noop);
   * // => false
   *
   * _.isObjectLike(null);
   * // => false
   */
  function isObjectLike(value) {
    return value != null && typeof value == 'object';
  }

  /**
   * Checks if `value` is classified as a typed array.
   *
   * @static
   * @memberOf _
   * @since 3.0.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
   * @example
   *
   * _.isTypedArray(new Uint8Array);
   * // => true
   *
   * _.isTypedArray([]);
   * // => false
   */
  var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;

  /**
   * Creates an array of the own enumerable property names of `object`.
   *
   * **Note:** Non-object values are coerced to objects. See the
   * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
   * for more details.
   *
   * @static
   * @since 0.1.0
   * @memberOf _
   * @category Object
   * @param {Object} object The object to query.
   * @returns {Array} Returns the array of property names.
   * @example
   *
   * function Foo() {
   *   this.a = 1;
   *   this.b = 2;
   * }
   *
   * Foo.prototype.c = 3;
   *
   * _.keys(new Foo);
   * // => ['a', 'b'] (iteration order is not guaranteed)
   *
   * _.keys('hi');
   * // => ['0', '1']
   */
  function keys(object) {
    return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
  }

  /**
   * This method returns a new empty array.
   *
   * @static
   * @memberOf _
   * @since 4.13.0
   * @category Util
   * @returns {Array} Returns the new empty array.
   * @example
   *
   * var arrays = _.times(2, _.stubArray);
   *
   * console.log(arrays);
   * // => [[], []]
   *
   * console.log(arrays[0] === arrays[1]);
   * // => false
   */
  function stubArray() {
    return [];
  }

  /**
   * This method returns `false`.
   *
   * @static
   * @memberOf _
   * @since 4.13.0
   * @category Util
   * @returns {boolean} Returns `false`.
   * @example
   *
   * _.times(2, _.stubFalse);
   * // => [false, false]
   */
  function stubFalse() {
    return false;
  }

  module.exports = isEqual;
  });

  /**
   * Generic helper used to consolidate all call sites for getting a cell id into
   * one method. The strategy currently is that a "cellId" is just the combination
   * of the row id and the header key used to access this field in a row.
   *
   * @param {string} rowId
   * @param {string} header
   * @returns {string}
   */
  var getCellId = function getCellId(rowId, header) {
    return "".concat(rowId, ":").concat(header);
  };

  /**
   * Compare two primitives to determine which comes first. Initially, this method
   * will try and figure out if both entries are the same type. If so, it will
   * apply the default sort algorithm for those types. Otherwise, it defaults to a
   * string conversion.
   *
   * @param {number|string} a
   * @param {number|string} b
   * @param {string} locale
   * @returns {number}
   */

  var compare = function compare(a, b) {
    var locale = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'en';

    if (typeof a === 'number' && typeof b === 'number') {
      return a - b;
    }

    if (typeof a === 'string' && typeof b === 'string') {
      return compareStrings(a, b, locale);
    }

    return compareStrings('' + a, '' + b, locale);
  };
  /**
   * Use the built-in `localeCompare` function available on strings to compare two
   * srints.
   *
   * @param {string} a
   * @param {string} b
   * @param {string} locale
   * @returns {number}
   */

  var compareStrings = function compareStrings(a, b) {
    var locale = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'en';
    return a.localeCompare(b, locale, {
      numeric: true
    });
  };
  /**
   * Default implementation of how we sort rows internally. The idea behind this
   * implementation is to use the given list of row ids to look up the cells in
   * the row by the given key. We then use the value of these cells and pipe them
   * into our local `compareStrings` method, including the locale where
   * appropriate.
   *
   * @param {Object} config
   * @param {Array[string]} config.rowIds array of all the row ids in the table
   * @param {Object} config.cellsById object containing a mapping of cell id to
   * cell
   * @param {string} config.direction the sort direction used to determine the
   * order the comparison is called in
   * @param {string} config.key the header key that we use to lookup the cell
   * @param {string} [config.locale] optional locale used in the comparison
   * function
   * @returns {Array[string]} array of sorted rowIds
   */

  var sortRows = function sortRows(_ref) {
    var rowIds = _ref.rowIds,
        cellsById = _ref.cellsById,
        sortDirection = _ref.sortDirection,
        key = _ref.key,
        locale = _ref.locale,
        sortRow = _ref.sortRow;
    return rowIds.slice().sort(function (a, b) {
      var cellA = cellsById[getCellId(a, key)];
      var cellB = cellsById[getCellId(b, key)];
      return sortRow(cellA.value, cellB.value, {
        key: key,
        sortDirection: sortDirection,
        locale: locale,
        sortStates: sortStates,
        compare: compare
      });
    });
  };
  var defaultSortRow = function defaultSortRow(cellA, cellB, _ref2) {
    var sortDirection = _ref2.sortDirection,
        sortStates$$1 = _ref2.sortStates,
        locale = _ref2.locale;

    if (sortDirection === sortStates$$1.ASC) {
      return compare(cellB, cellA, locale);
    }

    return compare(cellA, cellB, locale);
  };

  /**
   * We currently support the following sorting states for DataTable headers,
   * namely: `NONE` for no sorting being applied, and then `DESC` and `ASC` for
   * the corresponding direction of the sorting order.
   */

  var sortStates = {
    NONE: 'NONE',
    DESC: 'DESC',
    ASC: 'ASC'
  }; // Our initialSortState should be `NONE`, unless a consumer has specified a
  // different initialSortState

  var initialSortState = sortStates.NONE;
  /**
   * Utility used to get the next sort state given the following pieces of
   * information:
   *
   * @param {string} prevHeader the value of the previous header
   * @param {string} header the value of the currently selected header
   * @param {string} prevState the previous sort state of the table
   * @returns {string}
   */

  var getNextSortDirection = function getNextSortDirection(prevHeader, header, prevState) {
    // If the previous header is equivalent to the current header, we know that we
    // have to derive the next sort state from the previous sort state
    if (prevHeader === header) {
      // When transitioning, we know that the sequence of states is as follows:
      // NONE -> DESC -> ASC -> NONE
      if (prevState === 'NONE') {
        return sortStates.DESC;
      }

      if (prevState === 'DESC') {
        return sortStates.ASC;
      }

      return sortStates.NONE;
    } // Otherwise, we have selected a new header and need to start off by sorting
    // in descending order by default


    return sortStates.DESC;
  };
  var getNextSortState = function getNextSortState(props, state, _ref) {
    var key = _ref.key;
    var sortDirection = state.sortDirection,
        sortHeaderKey = state.sortHeaderKey;
    var nextSortDirection = getNextSortDirection(key, sortHeaderKey, sortDirection);
    return getSortedState(props, state, key, nextSortDirection);
  };
  /**
   * Derive the set of sorted state fields from props and state for the given
   * header key and sortDirection
   *
   * @param {Object} props
   * @param {string} props.locale The current locale
   * @param {Function} props.sortRows Method to handle sorting a collection of
   * rows
   * @param {Object} state
   * @param {Array<string>} state.rowIds Array of row ids
   * @param {Object} state.cellsById Lookup object for cells by id
   * @param {Array<string>} state.initialRowOrder Initial row order for the
   * current set of rows
   * @param {string} key The key for the given header we are derving the
   * sorted state for
   * @param {string} sortDirection The sortState that we want to order by
   * @returns {Object}
   */

  var getSortedState = function getSortedState(props, state, key, sortDirection) {
    var rowIds = state.rowIds,
        cellsById = state.cellsById,
        initialRowOrder = state.initialRowOrder;
    var locale = props.locale,
        sortRow = props.sortRow;
    var nextRowIds = sortDirection !== sortStates.NONE ? sortRows({
      rowIds: rowIds,
      cellsById: cellsById,
      sortDirection: sortDirection,
      key: key,
      locale: locale,
      sortRow: sortRow
    }) : initialRowOrder;
    return {
      sortHeaderKey: key,
      sortDirection: sortDirection,
      rowIds: nextRowIds
    };
  };

  /**
   * Normalize a collection of rows with the given headers.
   *
   * @param {Array<Object>} rows
   * @param {Array<Object>} headers
   * @returns {Object}
   */

  var normalize = function normalize(rows, headers) {
    var prevState = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    var prevRowsByIds = prevState.rowsById;
    var rowIds = new Array(rows.length);
    var rowsById = {};
    var cellsById = {};
    rows.forEach(function (row, i) {
      rowIds[i] = row.id; // Initialize the row info and state values, namely for selection and
      // expansion

      rowsById[row.id] = {
        id: row.id,
        isSelected: false,
        isExpanded: false,
        cells: new Array(headers.length)
      }; // If we have a previous state, and the row existed in that previous state,
      // then we'll set the state values of the row to the previous state values.

      if (prevRowsByIds && prevRowsByIds[row.id] !== undefined) {
        rowsById[row.id].isSelected = prevRowsByIds[row.id].isSelected;
        rowsById[row.id].isExpanded = prevRowsByIds[row.id].isExpanded;
      }

      headers.forEach(function (_ref, i) {
        var key = _ref.key;
        var id = getCellId(row.id, key); // Initialize the cell info and state values, namely for editing

        cellsById[id] = {
          id: id,
          value: row[key],
          isEditable: false,
          isEditing: false,
          isValid: true,
          errors: null,
          info: {
            header: key
          }
        }; // TODO: When working on inline edits, we'll need to derive the state
        // values similarly to rows above.

        rowsById[row.id].cells[i] = id;
      });
    });
    return {
      rowIds: rowIds,
      rowsById: rowsById,
      cellsById: cellsById
    };
  };

  /**
   * Helper to derive the next state from the given props and the
   * prevState. Potential future-facing API hook for React v17.
   *
   * Currently, it's being used as a way to normalize the incoming data that we
   * are receiving for rows
   */

  var getDerivedStateFromProps = function getDerivedStateFromProps(props, prevState) {
    var _normalize = normalize(props.rows, props.headers, prevState),
        rowIds = _normalize.rowIds,
        rowsById = _normalize.rowsById,
        cellsById = _normalize.cellsById;

    var state = {
      rowIds: rowIds,
      rowsById: rowsById,
      cellsById: cellsById,
      sortDirection: prevState.sortDirection || initialSortState,
      sortHeaderKey: prevState.sortHeaderKey || null,
      // Copy over rowIds so the reference doesn't mutate the stored
      // `initialRowOrder`
      initialRowOrder: rowIds.slice(),
      filterInputValue: prevState.filterInputValue || null,
      // Optional state field to indicate whether a consumer should show a
      // batch actions menu
      shouldShowBatchActions: prevState.shouldShowBatchActions || false
    };

    if (prevState.sortDirection && prevState.sortHeaderKey) {
      var _getSortedState = getSortedState(props, state, prevState.sortHeaderKey, prevState.sortDirection),
          _rowIds = _getSortedState.rowIds;

      state.rowIds = _rowIds;
    }

    return state;
  };

  /**
   * Counterpart to `normalize` for a collection of rows. This method unravels the
   * normalization step that we use to build the given parameters in order to
   * return a natural interface to working with rows for a consumer.
   *
   * The default heuristic here is to map through all the row ids and return the
   * value of the row for the given id, in addition to adding a `cells` key that
   * contains the results of mapping over the rows cells and getting individual
   * cell info.
   *
   * @param {Array<string>} rowIds array of row ids in the table
   * @param {Object} rowsById object containing lookups for rows by id
   * @param {Object} cellsById object containing lookups for cells by id
   */
  var denormalize = function denormalize(rowIds, rowsById, cellsById) {
    return rowIds.map(function (id) {
      return _objectSpread({}, rowsById[id], {
        cells: rowsById[id].cells.map(function (cellId) {
          return cellsById[cellId];
        })
      });
    });
  };

  /**
   * Generic utility to compose event handlers so that consumers can supply their
   * own event listeners on table components. The default heuristic here is to
   * iterate through the given functions until `preventDefault` is called on the
   * given event.
   *
   * @param {Array<Function>} fns array of functions to apply to the event
   * @returns {Function}
   */
  var composeEventHandlers$1 = function composeEventHandlers(fns) {
    return function (event) {
      for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }

      for (var i = 0; i < fns.length; i++) {
        if (event.defaultPrevented) {
          break;
        }

        if (typeof fns[i] === 'function') {
          fns[i].apply(fns, [event].concat(args));
        }
      }
    };
  };

  /**
   * Default implemention of how we filter rows internally. The idea behind this
   * implementation is to use the given list of row ids and headers to get the
   * individual cell values for a row. Then, we go through each cell value and see
   * if any of them includes the given inputValue.
   *
   * @param {Object} config
   * @param {Array<string>} config.rowIds array of all the row ids in the table
   * @param {Array<Object>} config.headers
   * @param {Object} config.cellsById object containing a map of cell id to cell
   * @param {string} config.inputValue the current input value in the Table Search
   * @returns {Array<string>} rowIds
   */

  var defaultFilterRows = function defaultFilterRows(_ref) {
    var rowIds = _ref.rowIds,
        headers = _ref.headers,
        cellsById = _ref.cellsById,
        inputValue = _ref.inputValue;
    return rowIds.filter(function (rowId) {
      return headers.some(function (_ref2) {
        var key = _ref2.key;
        var id = getCellId(rowId, key);
        return ('' + cellsById[id].value).toLowerCase().includes(inputValue.toLowerCase());
      });
    });
  };

  /**
   * Generic utility to initialize a method that will return a unique instance id
   * for a component.
   */
  var setupGetInstanceId = function setupGetInstanceId() {
    var instanceId = 0;
    return function getInstanceId() {
      return ++instanceId;
    };
  };

  var _defaultTranslations$2;
  var getInstanceId = setupGetInstanceId();
  var translationKeys = {
    expandRow: 'carbon.table.row.expand',
    collapseRow: 'carbon.table.row.collapse',
    selectAll: 'carbon.table.all.select',
    unselectAll: 'carbon.table.all.unselect',
    selectRow: 'carbon.table.row.select',
    unselectRow: 'carbon.table.row.unselect'
  };
  var defaultTranslations$2 = (_defaultTranslations$2 = {}, _defineProperty(_defaultTranslations$2, translationKeys.expandRow, 'Expand current row'), _defineProperty(_defaultTranslations$2, translationKeys.collapseRow, 'Collapse current row'), _defineProperty(_defaultTranslations$2, translationKeys.selectAll, 'Select all rows'), _defineProperty(_defaultTranslations$2, translationKeys.unselectAll, 'Unselect all rows'), _defineProperty(_defaultTranslations$2, translationKeys.selectRow, 'Select row'), _defineProperty(_defaultTranslations$2, translationKeys.unselectRow, 'Unselect row'), _defaultTranslations$2);

  var translateWithId = function translateWithId(id) {
    return defaultTranslations$2[id];
  };
  /**
   * Data Tables are used to represent a collection of resources, displaying a
   * subset of their fields in columns, or headers. We prioritize direct updates
   * to the state of what we're rendering, so internally we end up normalizing the
   * given data and then denormalizing it when rendering.
   *
   * As a result, each part of the DataTable is accessible through look-up by id,
   * and updating the state of the single entity will cascade updates to the
   * consumer.
   */


  var DataTable =
  /*#__PURE__*/
  function (_React$Component) {
    function DataTable(_props) {
      var _this;

      _classCallCheck(this, DataTable);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(DataTable).call(this, _props));

      _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "getHeaderProps", function (_ref) {
        var header = _ref.header,
            onClick = _ref.onClick,
            rest = _objectWithoutProperties(_ref, ["header", "onClick"]);

        var _this$state = _this.state,
            sortDirection = _this$state.sortDirection,
            sortHeaderKey = _this$state.sortHeaderKey;
        return _objectSpread({}, rest, {
          key: header.key,
          sortDirection: sortDirection,
          isSortable: true,
          isSortHeader: sortHeaderKey === header.key,
          // Compose the event handlers so we don't overwrite a consumer's `onClick`
          // handler
          onClick: composeEventHandlers$1([_this.handleSortBy(header.key), onClick])
        });
      });

      _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "getRowProps", function (_ref2) {
        var row = _ref2.row,
            onClick = _ref2.onClick,
            rest = _objectWithoutProperties(_ref2, ["row", "onClick"]);

        var t = _this.props.translateWithId;
        var translationKey = row.isExpanded ? translationKeys.collapseRow : translationKeys.expandRow;
        return _objectSpread({}, rest, {
          key: row.id,
          // Compose the event handlers so we don't overwrite a consumer's `onClick`
          // handler
          onExpand: composeEventHandlers$1([_this.handleOnExpandRow(row.id), onClick]),
          isExpanded: row.isExpanded,
          ariaLabel: t(translationKey)
        });
      });

      _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "getSelectionProps", function () {
        var _ref3 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        var onClick = _ref3.onClick,
            row = _ref3.row,
            rest = _objectWithoutProperties(_ref3, ["onClick", "row"]);

        var t = _this.props.translateWithId; // If we're given a row, return the selection state values for that row

        if (row) {
          var _translationKey = row.isSelected ? translationKeys.unselectRow : translationKeys.selectRow;

          return _objectSpread({}, rest, {
            checked: row.isSelected,
            onSelect: composeEventHandlers$1([_this.handleOnSelectRow(row.id), onClick]),
            id: "".concat(_this.getTablePrefix(), "__select-row-").concat(row.id),
            name: "select-row-".concat(row.id),
            ariaLabel: t(_translationKey)
          });
        } // Otherwise, we're working on `TableSelectAll` which handles toggling the
        // selection state of all rows.


        var rowCount = _this.state.rowIds.length;

        var selectedRowCount = _this.getSelectedRows().length;

        var checked = rowCount > 0 && selectedRowCount === rowCount;
        var indeterminate = rowCount > 0 && selectedRowCount > 0 && selectedRowCount !== rowCount;
        var translationKey = checked ? translationKeys.unselectAll : translationKeys.selectAll;
        return _objectSpread({}, rest, {
          ariaLabel: t(translationKey),
          checked: checked,
          id: "".concat(_this.getTablePrefix(), "__select-all"),
          indeterminate: indeterminate,
          name: 'select-all',
          onSelect: composeEventHandlers$1([_this.handleSelectAll, onClick])
        });
      });

      _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "getBatchActionProps", function () {
        var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        var shouldShowBatchActions = _this.state.shouldShowBatchActions;

        var totalSelected = _this.getSelectedRows().length;

        return _objectSpread({}, props, {
          shouldShowBatchActions: shouldShowBatchActions,
          totalSelected: totalSelected,
          onCancel: _this.handleOnCancel
        });
      });

      _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "getSelectedRows", function () {
        return _this.state.rowIds.filter(function (id) {
          var row = _this.state.rowsById[id];
          return row.isSelected;
        });
      });

      _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "getTablePrefix", function () {
        return "data-table-".concat(_this.instanceId);
      });

      _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "setAllSelectedState", function (initialState, isSelected) {
        var rowIds = initialState.rowIds;
        return {
          rowsById: rowIds.reduce(function (acc, id) {
            return _objectSpread({}, acc, _defineProperty({}, id, _objectSpread({}, initialState.rowsById[id], {
              isSelected: isSelected
            })));
          }, {})
        };
      });

      _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleOnCancel", function () {
        _this.setState(function (state) {
          return _objectSpread({
            shouldShowBatchActions: false
          }, _this.setAllSelectedState(state, false));
        });
      });

      _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleSelectAll", function () {
        _this.setState(function (state) {
          var rowIds = state.rowIds;
          var isSelected = _this.getSelectedRows().length !== rowIds.length;
          return _objectSpread({
            shouldShowBatchActions: isSelected
          }, _this.setAllSelectedState(state, isSelected));
        });
      });

      _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleOnSelectRow", function (rowId) {
        return function () {
          _this.setState(function (state) {
            var row = state.rowsById[rowId];
            var selectedRows = state.rowIds.filter(function (id) {
              return state.rowsById[id].isSelected;
            }).length; // Predict the length of the selected rows after this change occurs

            var selectedRowsCount = !row.isSelected ? selectedRows + 1 : selectedRows - 1;
            return {
              // Basic assumption here is that we want to show the batch action bar if
              // the row is being selected. If it's being unselected, then see if we
              // have a non-zero number of selected rows that batch actions could
              // still apply to
              shouldShowBatchActions: !row.isSelected || selectedRowsCount > 0,
              rowsById: _objectSpread({}, state.rowsById, _defineProperty({}, rowId, _objectSpread({}, row, {
                isSelected: !row.isSelected
              })))
            };
          });
        };
      });

      _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleOnExpandRow", function (rowId) {
        return function () {
          _this.setState(function (state) {
            var row = state.rowsById[rowId];
            return {
              rowsById: _objectSpread({}, state.rowsById, _defineProperty({}, rowId, _objectSpread({}, row, {
                isExpanded: !row.isExpanded
              })))
            };
          });
        };
      });

      _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleSortBy", function (headerKey) {
        return function () {
          _this.setState(function (state) {
            return getNextSortState(_this.props, state, {
              key: headerKey
            });
          });
        };
      });

      _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleOnInputValueChange", function (event) {
        _this.setState({
          filterInputValue: event.target.value
        });
      });

      _this.state = getDerivedStateFromProps(_props, {});
      _this.instanceId = getInstanceId();
      return _this;
    }

    _createClass(DataTable, [{
      key: "componentWillReceiveProps",
      value: function componentWillReceiveProps(nextProps) {
        var rowIds = this.props.rows.map(function (row) {
          return row.id;
        });
        var nextRowIds = nextProps.rows.map(function (row) {
          return row.id;
        });

        if (!lodash_isequal(rowIds, nextRowIds)) {
          this.setState(function (state) {
            return getDerivedStateFromProps(nextProps, state);
          });
          return;
        }

        var headers = this.props.headers.map(function (header) {
          return header.key;
        });
        var nextHeaders = nextProps.headers.map(function (header) {
          return header.key;
        });

        if (!lodash_isequal(headers, nextHeaders)) {
          this.setState(function (state) {
            return getDerivedStateFromProps(nextProps, state);
          });
          return;
        }

        if (!lodash_isequal(this.props.rows, nextProps.rows)) {
          this.setState(function (state) {
            return getDerivedStateFromProps(nextProps, state);
          });
          return;
        }
      }
      /**
       * Get the props associated with the given header. Mostly used for adding in
       * sorting behavior.
       *
       * @param {Object} config
       * @param {string} config.header the header we want the props for
       * @param {Function} config.onClick a custom click handler for the header
       * @returns {Object}
       */

    }, {
      key: "render",
      value: function render() {
        var _this2 = this;

        var _this$props = this.props,
            children = _this$props.children,
            filterRows = _this$props.filterRows,
            headers = _this$props.headers,
            render = _this$props.render;
        var _this$state2 = this.state,
            filterInputValue = _this$state2.filterInputValue,
            rowIds = _this$state2.rowIds,
            rowsById = _this$state2.rowsById,
            cellsById = _this$state2.cellsById;
        var filteredRowIds = typeof filterInputValue === 'string' ? filterRows({
          rowIds: rowIds,
          headers: headers,
          cellsById: cellsById,
          inputValue: filterInputValue
        }) : rowIds;
        var renderProps = {
          // Data derived from state
          rows: denormalize(filteredRowIds, rowsById, cellsById),
          headers: this.props.headers,
          selectedRows: denormalize(this.getSelectedRows(), rowsById, cellsById),
          // Prop accessors/getters
          getHeaderProps: this.getHeaderProps,
          getRowProps: this.getRowProps,
          getSelectionProps: this.getSelectionProps,
          getBatchActionProps: this.getBatchActionProps,
          // Custom event handlers
          onInputChange: this.handleOnInputValueChange,
          // Expose internal state change actions
          sortBy: function sortBy(headerKey) {
            return _this2.handleSortBy(headerKey)();
          },
          selectAll: this.handleSelectAll,
          selectRow: function selectRow(rowId) {
            return _this2.handleOnSelectRow(rowId)();
          },
          expandRow: function expandRow(rowId) {
            return _this2.handleOnExpandRow(rowId)();
          }
        };

        if (render !== undefined) {
          return render(renderProps);
        }

        if (children !== undefined) {
          return children(renderProps);
        }

        return null;
      }
    }]);

    _inherits(DataTable, _React$Component);

    return DataTable;
  }(React__default.Component);

  _defineProperty(DataTable, "propTypes", {
    /**
     * The `rows` prop is where you provide us with a list of all the rows that
     * you want to render in the table. The only hard requirement is that this
     * is an array of objects, and that each object has a unique `id` field
     * available on it.
     */
    rows: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.string.isRequired
    })).isRequired,

    /**
     * The `headers` prop represents the order in which the headers should
     * appear in the table. We expect an array of objects to be passed in, where
     * `key` is the name of the key in a row object, and `header` is the name of
     * the header.
     */
    headers: PropTypes.arrayOf(PropTypes.shape({
      key: PropTypes.string.isRequired,
      header: PropTypes.string.isRequired
    })).isRequired,

    /**
     * Optional hook to manually control sorting of the rows.
     */
    sortRow: PropTypes.func,

    /**
     * Optional hook to manually control filtering of the rows from the
     * TableToolbarSearch component
     */
    filterRows: PropTypes.func,

    /**
     * Provide a string for the current locale
     */
    locale: PropTypes.string,

    /**
     * Optional method that takes in a message id and returns an
     * internationalized string. See `DataTable.translationKeys` for all
     * available message ids.
     */
    translateWithId: PropTypes.func
  });

  _defineProperty(DataTable, "defaultProps", {
    sortRow: defaultSortRow,
    filterRows: defaultFilterRows,
    locale: 'en',
    translateWithId: translateWithId
  });

  _defineProperty(DataTable, "translationKeys", Object.values(translationKeys));

  var wrapComponent = function wrapComponent(_ref) {
    var name = _ref.name,
        className = _ref.className,
        type = _ref.type;

    var Component = function Component(props) {
      var componentClass = classNames(className, props.className);
      return React__default.createElement(type, _objectSpread({}, props, {
        // Prevent Weird quirk where `cx` will evaluate to an empty string, '',
        // and so we have empty `class` attributes in the resulting markup
        // eslint-disable-next-line no-extra-boolean-cast
        className: !!componentClass ? componentClass : undefined
      }));
    };

    Component.displayName = name;
    Component.propTypes = {
      className: PropTypes.string
    };
    return Component;
  };

  var Table = wrapComponent({
    name: 'Table',
    className: ['bx--data-table-v2', 'bx--data-table-v2--zebra'],
    type: 'table'
  });

  var TableActionList = wrapComponent({
    name: 'TableActionList',
    type: 'div',
    className: ['bx--action-list']
  });

  var TableBatchAction = function TableBatchAction(props) {
    return React__default.createElement(Button, _extends({
      small: true,
      kind: "ghost",
      icon: "add--glyph"
    }, props));
  };

  TableBatchAction.propTypes = {
    /**
     * Provide a text description for the icon in the button
     */
    iconDescription: PropTypes.string.isRequired
  };
  TableBatchAction.defaultProps = {
    iconDescription: 'Add'
  };

  var translationKeys$1 = {
    'carbon.table.batch.items.selected': 'items selected',
    'carbon.table.batch.item.selected': 'item selected'
  };

  var translateWithId$1 = function translateWithId(id) {
    return translationKeys$1[id];
  };

  var TableBatchActions = function TableBatchActions(_ref) {
    var className = _ref.className,
        children = _ref.children,
        shouldShowBatchActions = _ref.shouldShowBatchActions,
        totalSelected = _ref.totalSelected,
        onCancel = _ref.onCancel,
        t = _ref.translateWithId,
        rest = _objectWithoutProperties(_ref, ["className", "children", "shouldShowBatchActions", "totalSelected", "onCancel", "translateWithId"]);

    var batchActionsClasses = classNames({
      'bx--batch-actions': true,
      'bx--batch-actions--active': shouldShowBatchActions
    }, className);
    return React__default.createElement("div", _extends({}, rest, {
      className: batchActionsClasses
    }), children, React__default.createElement("div", {
      className: "bx--batch-summary"
    }, React__default.createElement("p", {
      className: "bx--batch-summary__para"
    }, React__default.createElement("span", null, totalSelected), ' ', totalSelected > 1 ? t('carbon.table.batch.items.selected') : t('carbon.table.batch.item.selected')), React__default.createElement("button", {
      className: "bx--batch-summary__cancel",
      onClick: onCancel
    }, "Cancel")));
  };

  TableBatchActions.translationKeys = Object.keys(translationKeys$1);
  TableBatchActions.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,

    /**
     * Boolean specifier for whether or not the batch action bar should be
     * displayed
     */
    shouldShowBatchActions: PropTypes.bool,

    /**
     * Numeric representation of the total number of items selected in a table.
     * This number is used to derive the selection message
     */
    totalSelected: PropTypes.number.isRequired,

    /**
     * Hook required to listen for when the user initiates a cancel request
     * through this comopnent
     */
    onCancel: PropTypes.func.isRequired,

    /**
     * Supply a method to translate internal strings with your i18n tool of
     * choice. Translation keys are avabile on the `translationKeys` field for
     * this component.
     */
    translateWithId: PropTypes.func
  };
  TableBatchActions.defaultProps = {
    translateWithId: translateWithId$1
  };

  var TableBody = wrapComponent({
    name: 'TableBody',
    type: 'tbody'
  });

  var TableCell = wrapComponent({
    name: 'TableCell',
    type: 'td'
  });

  var TableContainer = function TableContainer(_ref) {
    var className = _ref.className,
        children = _ref.children,
        title = _ref.title,
        rest = _objectWithoutProperties(_ref, ["className", "children", "title"]);

    var tableContainerClasses = classNames(className, 'bx--data-table-v2-container');
    return React__default.createElement("div", _extends({}, rest, {
      className: tableContainerClasses
    }), title && React__default.createElement("h4", {
      className: "bx--data-table-v2-header"
    }, title), children);
  };

  TableContainer.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node,

    /**
     * Provide a title for the Table
     */
    title: PropTypes.string
  };

  var TableExpandHeader = function TableExpandHeader(props) {
    return React__default.createElement("th", _extends({
      scope: "col"
    }, props));
  };

  var TableExpandRow = function TableExpandRow(_ref) {
    var ariaLabel = _ref.ariaLabel,
        rowClassName = _ref.className,
        children = _ref.children,
        isExpanded = _ref.isExpanded,
        onExpand = _ref.onExpand,
        rest = _objectWithoutProperties(_ref, ["ariaLabel", "className", "children", "isExpanded", "onExpand"]);

    var className = classNames({
      'bx--parent-row-v2': true,
      'bx--expandable-row-v2': isExpanded
    }, rowClassName);
    var previousValue = isExpanded ? 'collapsed' : undefined;
    return React__default.createElement("tr", _extends({}, rest, {
      className: className,
      "data-parent-row": true
    }), React__default.createElement(TableCell, {
      className: "bx--table-expand-v2",
      "data-previous-value": previousValue
    }, React__default.createElement("button", {
      className: "bx--table-expand-v2__button",
      onClick: onExpand,
      "aria-label": ariaLabel
    }, React__default.createElement(Icon, {
      className: "bx--table-expand-v2__svg",
      name: "chevron--right"
    }))), children);
  };

  TableExpandRow.propTypes = {
    /**
     * Specify the string read by a voice reader when the expand trigger is
     * focused
     */
    ariaLabel: PropTypes.string.isRequired,
    className: PropTypes.string,
    children: PropTypes.node,

    /**
     * Specify whether this row is expanded or not. This helps coordinate data
     * attributes so that `TableExpandRow` and `TableExapndedRow` work together
     */
    isExpanded: PropTypes.bool.isRequired,

    /**
     * Hook for when a listener initiates a request to expand the given row
     */
    onExpand: PropTypes.func.isRequired
  };

  var TableExpandedRow = function TableExpandedRow(_ref) {
    var customClassName = _ref.className,
        children = _ref.children,
        rest = _objectWithoutProperties(_ref, ["className", "children"]);

    var className = classNames('bx--expandable-row-v2', customClassName);
    return React__default.createElement("tr", _extends({}, rest, {
      className: className,
      "data-child-row": true
    }), children);
  };

  TableExpandedRow.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string
  };

  var TableHead = wrapComponent({
    name: 'TableHead',
    type: 'thead'
  });

  var translationKeys$2 = {
    iconDescription: 'carbon.table.header.icon.description'
  };

  var translateWithId$2 = function translateWithId(key, _ref) {
    var sortDirection = _ref.sortDirection,
        isSortHeader = _ref.isSortHeader,
        sortStates$$1 = _ref.sortStates;

    if (key === translationKeys$2.iconDescription) {
      if (isSortHeader) {
        var order = sortDirection === sortStates$$1.DESC ? 'descending' : 'ascending';
        return "Sort rows by this header in ".concat(order, " order");
      }

      return "Sort rows by this header in descending order";
    }

    return '';
  };

  var TableHeader = function TableHeader(_ref2) {
    var headerClassName = _ref2.className,
        children = _ref2.children,
        isSortable = _ref2.isSortable,
        isSortHeader = _ref2.isSortHeader,
        onClick = _ref2.onClick,
        scope = _ref2.scope,
        sortDirection = _ref2.sortDirection,
        t = _ref2.translateWithId,
        rest = _objectWithoutProperties(_ref2, ["className", "children", "isSortable", "isSortHeader", "onClick", "scope", "sortDirection", "translateWithId"]);

    if (!isSortable) {
      return React__default.createElement("th", _extends({}, rest, {
        className: headerClassName,
        scope: scope
      }), children);
    }

    var className = classNames(headerClassName, {
      'bx--table-sort-v2': true,
      'bx--table-sort-v2--active': isSortHeader && sortDirection !== sortStates.NONE,
      'bx--table-sort-v2--ascending': isSortHeader && sortDirection === sortStates.ASC
    });
    return React__default.createElement("th", {
      scope: scope
    }, React__default.createElement("button", _extends({
      className: className,
      onClick: onClick
    }, rest), React__default.createElement("span", {
      className: "bx--table-header-label"
    }, children), React__default.createElement(Icon, {
      className: "bx--table-sort-v2__icon",
      name: "caret--down",
      description: t('carbon.table.header.icon.description', {
        header: children,
        sortDirection: sortDirection,
        isSortHeader: isSortHeader,
        sortStates: sortStates
      })
    })));
  };

  TableHeader.propTypes = {
    /**
     * Specify an optional className to be applied to the container node
     */
    className: PropTypes.string,

    /**
     * Pass in children that will be embedded in the table header label
     */
    children: PropTypes.string,

    /**
     * Specify whether this header is one through which a user can sort the table
     */
    isSortable: PropTypes.bool,

    /**
     * Specify whether this header is the header by which a table is being sorted
     * by
     */
    isSortHeader: PropTypes.bool,

    /**
     * Hook that is invoked when the header is clicked
     */
    onClick: PropTypes.func,

    /**
     * Specify the scope of this table header. You can find more info about this
     * attribute at the following URL:
     * https://developer.mozilla.org/en-US/docs/Web/HTML/Element/th#attr-scope
     */
    scope: PropTypes.string.isRequired,

    /**
     * Specify which direction we are currently sorting by, should be one of DESC,
     * NONE, or ASC.
     */
    sortDirection: PropTypes.oneOf(Object.values(sortStates)),

    /**
     * Supply a method to translate internal strings with your i18n tool of
     * choice. Translation keys are avabile on the `translationKeys` field for
     * this component.
     */
    translateWithId: PropTypes.func
  };
  TableHeader.defaultProps = {
    isSortable: false,
    scope: 'col',
    translateWithId: translateWithId$2
  };
  TableHeader.translationKeys = Object.values(translationKeys$2);

  /**
   * lodash (Custom Build) <https://lodash.com/>
   * Build: `lodash modularize exports="npm" -o ./`
   * Copyright jQuery Foundation and other contributors <https://jquery.org/>
   * Released under MIT license <https://lodash.com/license>
   * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
   * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
   */

  /** Used as the size to enable large array optimizations. */
  var LARGE_ARRAY_SIZE = 200;

  /** Used to stand-in for `undefined` hash values. */
  var HASH_UNDEFINED = '__lodash_hash_undefined__';

  /** Used as references for various `Number` constants. */
  var INFINITY = 1 / 0,
      MAX_SAFE_INTEGER = 9007199254740991;

  /** `Object#toString` result references. */
  var argsTag = '[object Arguments]',
      funcTag = '[object Function]',
      genTag = '[object GeneratorFunction]',
      symbolTag = '[object Symbol]';

  /**
   * Used to match `RegExp`
   * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
   */
  var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

  /** Used to detect host constructors (Safari). */
  var reIsHostCtor = /^\[object .+?Constructor\]$/;

  /** Used to detect unsigned integer values. */
  var reIsUint = /^(?:0|[1-9]\d*)$/;

  /** Detect free variable `global` from Node.js. */
  var freeGlobal = typeof commonjsGlobal == 'object' && commonjsGlobal && commonjsGlobal.Object === Object && commonjsGlobal;

  /** Detect free variable `self`. */
  var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

  /** Used as a reference to the global object. */
  var root = freeGlobal || freeSelf || Function('return this')();

  /**
   * A faster alternative to `Function#apply`, this function invokes `func`
   * with the `this` binding of `thisArg` and the arguments of `args`.
   *
   * @private
   * @param {Function} func The function to invoke.
   * @param {*} thisArg The `this` binding of `func`.
   * @param {Array} args The arguments to invoke `func` with.
   * @returns {*} Returns the result of `func`.
   */
  function apply(func, thisArg, args) {
    switch (args.length) {
      case 0: return func.call(thisArg);
      case 1: return func.call(thisArg, args[0]);
      case 2: return func.call(thisArg, args[0], args[1]);
      case 3: return func.call(thisArg, args[0], args[1], args[2]);
    }
    return func.apply(thisArg, args);
  }

  /**
   * A specialized version of `_.includes` for arrays without support for
   * specifying an index to search from.
   *
   * @private
   * @param {Array} [array] The array to inspect.
   * @param {*} target The value to search for.
   * @returns {boolean} Returns `true` if `target` is found, else `false`.
   */
  function arrayIncludes(array, value) {
    var length = array ? array.length : 0;
    return !!length && baseIndexOf(array, value, 0) > -1;
  }

  /**
   * This function is like `arrayIncludes` except that it accepts a comparator.
   *
   * @private
   * @param {Array} [array] The array to inspect.
   * @param {*} target The value to search for.
   * @param {Function} comparator The comparator invoked per element.
   * @returns {boolean} Returns `true` if `target` is found, else `false`.
   */
  function arrayIncludesWith(array, value, comparator) {
    var index = -1,
        length = array ? array.length : 0;

    while (++index < length) {
      if (comparator(value, array[index])) {
        return true;
      }
    }
    return false;
  }

  /**
   * A specialized version of `_.map` for arrays without support for iteratee
   * shorthands.
   *
   * @private
   * @param {Array} [array] The array to iterate over.
   * @param {Function} iteratee The function invoked per iteration.
   * @returns {Array} Returns the new mapped array.
   */
  function arrayMap(array, iteratee) {
    var index = -1,
        length = array ? array.length : 0,
        result = Array(length);

    while (++index < length) {
      result[index] = iteratee(array[index], index, array);
    }
    return result;
  }

  /**
   * Appends the elements of `values` to `array`.
   *
   * @private
   * @param {Array} array The array to modify.
   * @param {Array} values The values to append.
   * @returns {Array} Returns `array`.
   */
  function arrayPush(array, values) {
    var index = -1,
        length = values.length,
        offset = array.length;

    while (++index < length) {
      array[offset + index] = values[index];
    }
    return array;
  }

  /**
   * The base implementation of `_.findIndex` and `_.findLastIndex` without
   * support for iteratee shorthands.
   *
   * @private
   * @param {Array} array The array to inspect.
   * @param {Function} predicate The function invoked per iteration.
   * @param {number} fromIndex The index to search from.
   * @param {boolean} [fromRight] Specify iterating from right to left.
   * @returns {number} Returns the index of the matched value, else `-1`.
   */
  function baseFindIndex(array, predicate, fromIndex, fromRight) {
    var length = array.length,
        index = fromIndex + (fromRight ? 1 : -1);

    while ((fromRight ? index-- : ++index < length)) {
      if (predicate(array[index], index, array)) {
        return index;
      }
    }
    return -1;
  }

  /**
   * The base implementation of `_.indexOf` without `fromIndex` bounds checks.
   *
   * @private
   * @param {Array} array The array to inspect.
   * @param {*} value The value to search for.
   * @param {number} fromIndex The index to search from.
   * @returns {number} Returns the index of the matched value, else `-1`.
   */
  function baseIndexOf(array, value, fromIndex) {
    if (value !== value) {
      return baseFindIndex(array, baseIsNaN, fromIndex);
    }
    var index = fromIndex - 1,
        length = array.length;

    while (++index < length) {
      if (array[index] === value) {
        return index;
      }
    }
    return -1;
  }

  /**
   * The base implementation of `_.isNaN` without support for number objects.
   *
   * @private
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is `NaN`, else `false`.
   */
  function baseIsNaN(value) {
    return value !== value;
  }

  /**
   * The base implementation of `_.times` without support for iteratee shorthands
   * or max array length checks.
   *
   * @private
   * @param {number} n The number of times to invoke `iteratee`.
   * @param {Function} iteratee The function invoked per iteration.
   * @returns {Array} Returns the array of results.
   */
  function baseTimes(n, iteratee) {
    var index = -1,
        result = Array(n);

    while (++index < n) {
      result[index] = iteratee(index);
    }
    return result;
  }

  /**
   * The base implementation of `_.unary` without support for storing metadata.
   *
   * @private
   * @param {Function} func The function to cap arguments for.
   * @returns {Function} Returns the new capped function.
   */
  function baseUnary(func) {
    return function(value) {
      return func(value);
    };
  }

  /**
   * Checks if a cache value for `key` exists.
   *
   * @private
   * @param {Object} cache The cache to query.
   * @param {string} key The key of the entry to check.
   * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
   */
  function cacheHas(cache, key) {
    return cache.has(key);
  }

  /**
   * Gets the value at `key` of `object`.
   *
   * @private
   * @param {Object} [object] The object to query.
   * @param {string} key The key of the property to get.
   * @returns {*} Returns the property value.
   */
  function getValue(object, key) {
    return object == null ? undefined : object[key];
  }

  /**
   * Checks if `value` is a host object in IE < 9.
   *
   * @private
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a host object, else `false`.
   */
  function isHostObject(value) {
    // Many host objects are `Object` objects that can coerce to strings
    // despite having improperly defined `toString` methods.
    var result = false;
    if (value != null && typeof value.toString != 'function') {
      try {
        result = !!(value + '');
      } catch (e) {}
    }
    return result;
  }

  /**
   * Creates a unary function that invokes `func` with its argument transformed.
   *
   * @private
   * @param {Function} func The function to wrap.
   * @param {Function} transform The argument transform.
   * @returns {Function} Returns the new function.
   */
  function overArg(func, transform) {
    return function(arg) {
      return func(transform(arg));
    };
  }

  /** Used for built-in method references. */
  var arrayProto = Array.prototype,
      funcProto = Function.prototype,
      objectProto = Object.prototype;

  /** Used to detect overreaching core-js shims. */
  var coreJsData = root['__core-js_shared__'];

  /** Used to detect methods masquerading as native. */
  var maskSrcKey = (function() {
    var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
    return uid ? ('Symbol(src)_1.' + uid) : '';
  }());

  /** Used to resolve the decompiled source of functions. */
  var funcToString = funcProto.toString;

  /** Used to check objects for own properties. */
  var hasOwnProperty = objectProto.hasOwnProperty;

  /**
   * Used to resolve the
   * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
   * of values.
   */
  var objectToString = objectProto.toString;

  /** Used to detect if a method is native. */
  var reIsNative = RegExp('^' +
    funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
    .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
  );

  /** Built-in value references. */
  var Symbol$1 = root.Symbol,
      getPrototype = overArg(Object.getPrototypeOf, Object),
      propertyIsEnumerable = objectProto.propertyIsEnumerable,
      splice = arrayProto.splice,
      spreadableSymbol = Symbol$1 ? Symbol$1.isConcatSpreadable : undefined;

  /* Built-in method references for those with the same name as other `lodash` methods. */
  var nativeGetSymbols = Object.getOwnPropertySymbols,
      nativeMax = Math.max;

  /* Built-in method references that are verified to be native. */
  var Map$1 = getNative(root, 'Map'),
      nativeCreate = getNative(Object, 'create');

  /**
   * Creates a hash object.
   *
   * @private
   * @constructor
   * @param {Array} [entries] The key-value pairs to cache.
   */
  function Hash(entries) {
    var index = -1,
        length = entries ? entries.length : 0;

    this.clear();
    while (++index < length) {
      var entry = entries[index];
      this.set(entry[0], entry[1]);
    }
  }

  /**
   * Removes all key-value entries from the hash.
   *
   * @private
   * @name clear
   * @memberOf Hash
   */
  function hashClear() {
    this.__data__ = nativeCreate ? nativeCreate(null) : {};
  }

  /**
   * Removes `key` and its value from the hash.
   *
   * @private
   * @name delete
   * @memberOf Hash
   * @param {Object} hash The hash to modify.
   * @param {string} key The key of the value to remove.
   * @returns {boolean} Returns `true` if the entry was removed, else `false`.
   */
  function hashDelete(key) {
    return this.has(key) && delete this.__data__[key];
  }

  /**
   * Gets the hash value for `key`.
   *
   * @private
   * @name get
   * @memberOf Hash
   * @param {string} key The key of the value to get.
   * @returns {*} Returns the entry value.
   */
  function hashGet(key) {
    var data = this.__data__;
    if (nativeCreate) {
      var result = data[key];
      return result === HASH_UNDEFINED ? undefined : result;
    }
    return hasOwnProperty.call(data, key) ? data[key] : undefined;
  }

  /**
   * Checks if a hash value for `key` exists.
   *
   * @private
   * @name has
   * @memberOf Hash
   * @param {string} key The key of the entry to check.
   * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
   */
  function hashHas(key) {
    var data = this.__data__;
    return nativeCreate ? data[key] !== undefined : hasOwnProperty.call(data, key);
  }

  /**
   * Sets the hash `key` to `value`.
   *
   * @private
   * @name set
   * @memberOf Hash
   * @param {string} key The key of the value to set.
   * @param {*} value The value to set.
   * @returns {Object} Returns the hash instance.
   */
  function hashSet(key, value) {
    var data = this.__data__;
    data[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED : value;
    return this;
  }

  // Add methods to `Hash`.
  Hash.prototype.clear = hashClear;
  Hash.prototype['delete'] = hashDelete;
  Hash.prototype.get = hashGet;
  Hash.prototype.has = hashHas;
  Hash.prototype.set = hashSet;

  /**
   * Creates an list cache object.
   *
   * @private
   * @constructor
   * @param {Array} [entries] The key-value pairs to cache.
   */
  function ListCache(entries) {
    var index = -1,
        length = entries ? entries.length : 0;

    this.clear();
    while (++index < length) {
      var entry = entries[index];
      this.set(entry[0], entry[1]);
    }
  }

  /**
   * Removes all key-value entries from the list cache.
   *
   * @private
   * @name clear
   * @memberOf ListCache
   */
  function listCacheClear() {
    this.__data__ = [];
  }

  /**
   * Removes `key` and its value from the list cache.
   *
   * @private
   * @name delete
   * @memberOf ListCache
   * @param {string} key The key of the value to remove.
   * @returns {boolean} Returns `true` if the entry was removed, else `false`.
   */
  function listCacheDelete(key) {
    var data = this.__data__,
        index = assocIndexOf(data, key);

    if (index < 0) {
      return false;
    }
    var lastIndex = data.length - 1;
    if (index == lastIndex) {
      data.pop();
    } else {
      splice.call(data, index, 1);
    }
    return true;
  }

  /**
   * Gets the list cache value for `key`.
   *
   * @private
   * @name get
   * @memberOf ListCache
   * @param {string} key The key of the value to get.
   * @returns {*} Returns the entry value.
   */
  function listCacheGet(key) {
    var data = this.__data__,
        index = assocIndexOf(data, key);

    return index < 0 ? undefined : data[index][1];
  }

  /**
   * Checks if a list cache value for `key` exists.
   *
   * @private
   * @name has
   * @memberOf ListCache
   * @param {string} key The key of the entry to check.
   * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
   */
  function listCacheHas(key) {
    return assocIndexOf(this.__data__, key) > -1;
  }

  /**
   * Sets the list cache `key` to `value`.
   *
   * @private
   * @name set
   * @memberOf ListCache
   * @param {string} key The key of the value to set.
   * @param {*} value The value to set.
   * @returns {Object} Returns the list cache instance.
   */
  function listCacheSet(key, value) {
    var data = this.__data__,
        index = assocIndexOf(data, key);

    if (index < 0) {
      data.push([key, value]);
    } else {
      data[index][1] = value;
    }
    return this;
  }

  // Add methods to `ListCache`.
  ListCache.prototype.clear = listCacheClear;
  ListCache.prototype['delete'] = listCacheDelete;
  ListCache.prototype.get = listCacheGet;
  ListCache.prototype.has = listCacheHas;
  ListCache.prototype.set = listCacheSet;

  /**
   * Creates a map cache object to store key-value pairs.
   *
   * @private
   * @constructor
   * @param {Array} [entries] The key-value pairs to cache.
   */
  function MapCache(entries) {
    var index = -1,
        length = entries ? entries.length : 0;

    this.clear();
    while (++index < length) {
      var entry = entries[index];
      this.set(entry[0], entry[1]);
    }
  }

  /**
   * Removes all key-value entries from the map.
   *
   * @private
   * @name clear
   * @memberOf MapCache
   */
  function mapCacheClear() {
    this.__data__ = {
      'hash': new Hash,
      'map': new (Map$1 || ListCache),
      'string': new Hash
    };
  }

  /**
   * Removes `key` and its value from the map.
   *
   * @private
   * @name delete
   * @memberOf MapCache
   * @param {string} key The key of the value to remove.
   * @returns {boolean} Returns `true` if the entry was removed, else `false`.
   */
  function mapCacheDelete(key) {
    return getMapData(this, key)['delete'](key);
  }

  /**
   * Gets the map value for `key`.
   *
   * @private
   * @name get
   * @memberOf MapCache
   * @param {string} key The key of the value to get.
   * @returns {*} Returns the entry value.
   */
  function mapCacheGet(key) {
    return getMapData(this, key).get(key);
  }

  /**
   * Checks if a map value for `key` exists.
   *
   * @private
   * @name has
   * @memberOf MapCache
   * @param {string} key The key of the entry to check.
   * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
   */
  function mapCacheHas(key) {
    return getMapData(this, key).has(key);
  }

  /**
   * Sets the map `key` to `value`.
   *
   * @private
   * @name set
   * @memberOf MapCache
   * @param {string} key The key of the value to set.
   * @param {*} value The value to set.
   * @returns {Object} Returns the map cache instance.
   */
  function mapCacheSet(key, value) {
    getMapData(this, key).set(key, value);
    return this;
  }

  // Add methods to `MapCache`.
  MapCache.prototype.clear = mapCacheClear;
  MapCache.prototype['delete'] = mapCacheDelete;
  MapCache.prototype.get = mapCacheGet;
  MapCache.prototype.has = mapCacheHas;
  MapCache.prototype.set = mapCacheSet;

  /**
   *
   * Creates an array cache object to store unique values.
   *
   * @private
   * @constructor
   * @param {Array} [values] The values to cache.
   */
  function SetCache(values) {
    var index = -1,
        length = values ? values.length : 0;

    this.__data__ = new MapCache;
    while (++index < length) {
      this.add(values[index]);
    }
  }

  /**
   * Adds `value` to the array cache.
   *
   * @private
   * @name add
   * @memberOf SetCache
   * @alias push
   * @param {*} value The value to cache.
   * @returns {Object} Returns the cache instance.
   */
  function setCacheAdd(value) {
    this.__data__.set(value, HASH_UNDEFINED);
    return this;
  }

  /**
   * Checks if `value` is in the array cache.
   *
   * @private
   * @name has
   * @memberOf SetCache
   * @param {*} value The value to search for.
   * @returns {number} Returns `true` if `value` is found, else `false`.
   */
  function setCacheHas(value) {
    return this.__data__.has(value);
  }

  // Add methods to `SetCache`.
  SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
  SetCache.prototype.has = setCacheHas;

  /**
   * Creates an array of the enumerable property names of the array-like `value`.
   *
   * @private
   * @param {*} value The value to query.
   * @param {boolean} inherited Specify returning inherited property names.
   * @returns {Array} Returns the array of property names.
   */
  function arrayLikeKeys(value, inherited) {
    // Safari 8.1 makes `arguments.callee` enumerable in strict mode.
    // Safari 9 makes `arguments.length` enumerable in strict mode.
    var result = (isArray(value) || isArguments(value))
      ? baseTimes(value.length, String)
      : [];

    var length = result.length,
        skipIndexes = !!length;

    for (var key in value) {
      if ((inherited || hasOwnProperty.call(value, key)) &&
          !(skipIndexes && (key == 'length' || isIndex(key, length)))) {
        result.push(key);
      }
    }
    return result;
  }

  /**
   * Gets the index at which the `key` is found in `array` of key-value pairs.
   *
   * @private
   * @param {Array} array The array to inspect.
   * @param {*} key The key to search for.
   * @returns {number} Returns the index of the matched value, else `-1`.
   */
  function assocIndexOf(array, key) {
    var length = array.length;
    while (length--) {
      if (eq(array[length][0], key)) {
        return length;
      }
    }
    return -1;
  }

  /**
   * The base implementation of methods like `_.difference` without support
   * for excluding multiple arrays or iteratee shorthands.
   *
   * @private
   * @param {Array} array The array to inspect.
   * @param {Array} values The values to exclude.
   * @param {Function} [iteratee] The iteratee invoked per element.
   * @param {Function} [comparator] The comparator invoked per element.
   * @returns {Array} Returns the new array of filtered values.
   */
  function baseDifference(array, values, iteratee, comparator) {
    var index = -1,
        includes = arrayIncludes,
        isCommon = true,
        length = array.length,
        result = [],
        valuesLength = values.length;

    if (!length) {
      return result;
    }
    if (iteratee) {
      values = arrayMap(values, baseUnary(iteratee));
    }
    if (comparator) {
      includes = arrayIncludesWith;
      isCommon = false;
    }
    else if (values.length >= LARGE_ARRAY_SIZE) {
      includes = cacheHas;
      isCommon = false;
      values = new SetCache(values);
    }
    outer:
    while (++index < length) {
      var value = array[index],
          computed = iteratee ? iteratee(value) : value;

      value = (comparator || value !== 0) ? value : 0;
      if (isCommon && computed === computed) {
        var valuesIndex = valuesLength;
        while (valuesIndex--) {
          if (values[valuesIndex] === computed) {
            continue outer;
          }
        }
        result.push(value);
      }
      else if (!includes(values, computed, comparator)) {
        result.push(value);
      }
    }
    return result;
  }

  /**
   * The base implementation of `_.flatten` with support for restricting flattening.
   *
   * @private
   * @param {Array} array The array to flatten.
   * @param {number} depth The maximum recursion depth.
   * @param {boolean} [predicate=isFlattenable] The function invoked per iteration.
   * @param {boolean} [isStrict] Restrict to values that pass `predicate` checks.
   * @param {Array} [result=[]] The initial result value.
   * @returns {Array} Returns the new flattened array.
   */
  function baseFlatten(array, depth, predicate, isStrict, result) {
    var index = -1,
        length = array.length;

    predicate || (predicate = isFlattenable);
    result || (result = []);

    while (++index < length) {
      var value = array[index];
      if (depth > 0 && predicate(value)) {
        if (depth > 1) {
          // Recursively flatten arrays (susceptible to call stack limits).
          baseFlatten(value, depth - 1, predicate, isStrict, result);
        } else {
          arrayPush(result, value);
        }
      } else if (!isStrict) {
        result[result.length] = value;
      }
    }
    return result;
  }

  /**
   * The base implementation of `getAllKeys` and `getAllKeysIn` which uses
   * `keysFunc` and `symbolsFunc` to get the enumerable property names and
   * symbols of `object`.
   *
   * @private
   * @param {Object} object The object to query.
   * @param {Function} keysFunc The function to get the keys of `object`.
   * @param {Function} symbolsFunc The function to get the symbols of `object`.
   * @returns {Array} Returns the array of property names and symbols.
   */
  function baseGetAllKeys(object, keysFunc, symbolsFunc) {
    var result = keysFunc(object);
    return isArray(object) ? result : arrayPush(result, symbolsFunc(object));
  }

  /**
   * The base implementation of `_.isNative` without bad shim checks.
   *
   * @private
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a native function,
   *  else `false`.
   */
  function baseIsNative(value) {
    if (!isObject(value) || isMasked(value)) {
      return false;
    }
    var pattern = (isFunction(value) || isHostObject(value)) ? reIsNative : reIsHostCtor;
    return pattern.test(toSource(value));
  }

  /**
   * The base implementation of `_.keysIn` which doesn't treat sparse arrays as dense.
   *
   * @private
   * @param {Object} object The object to query.
   * @returns {Array} Returns the array of property names.
   */
  function baseKeysIn(object) {
    if (!isObject(object)) {
      return nativeKeysIn(object);
    }
    var isProto = isPrototype(object),
        result = [];

    for (var key in object) {
      if (!(key == 'constructor' && (isProto || !hasOwnProperty.call(object, key)))) {
        result.push(key);
      }
    }
    return result;
  }

  /**
   * The base implementation of `_.pick` without support for individual
   * property identifiers.
   *
   * @private
   * @param {Object} object The source object.
   * @param {string[]} props The property identifiers to pick.
   * @returns {Object} Returns the new object.
   */
  function basePick(object, props) {
    object = Object(object);
    return basePickBy(object, props, function(value, key) {
      return key in object;
    });
  }

  /**
   * The base implementation of  `_.pickBy` without support for iteratee shorthands.
   *
   * @private
   * @param {Object} object The source object.
   * @param {string[]} props The property identifiers to pick from.
   * @param {Function} predicate The function invoked per property.
   * @returns {Object} Returns the new object.
   */
  function basePickBy(object, props, predicate) {
    var index = -1,
        length = props.length,
        result = {};

    while (++index < length) {
      var key = props[index],
          value = object[key];

      if (predicate(value, key)) {
        result[key] = value;
      }
    }
    return result;
  }

  /**
   * The base implementation of `_.rest` which doesn't validate or coerce arguments.
   *
   * @private
   * @param {Function} func The function to apply a rest parameter to.
   * @param {number} [start=func.length-1] The start position of the rest parameter.
   * @returns {Function} Returns the new function.
   */
  function baseRest(func, start) {
    start = nativeMax(start === undefined ? (func.length - 1) : start, 0);
    return function() {
      var args = arguments,
          index = -1,
          length = nativeMax(args.length - start, 0),
          array = Array(length);

      while (++index < length) {
        array[index] = args[start + index];
      }
      index = -1;
      var otherArgs = Array(start + 1);
      while (++index < start) {
        otherArgs[index] = args[index];
      }
      otherArgs[start] = array;
      return apply(func, this, otherArgs);
    };
  }

  /**
   * Creates an array of own and inherited enumerable property names and
   * symbols of `object`.
   *
   * @private
   * @param {Object} object The object to query.
   * @returns {Array} Returns the array of property names and symbols.
   */
  function getAllKeysIn(object) {
    return baseGetAllKeys(object, keysIn, getSymbolsIn);
  }

  /**
   * Gets the data for `map`.
   *
   * @private
   * @param {Object} map The map to query.
   * @param {string} key The reference key.
   * @returns {*} Returns the map data.
   */
  function getMapData(map, key) {
    var data = map.__data__;
    return isKeyable(key)
      ? data[typeof key == 'string' ? 'string' : 'hash']
      : data.map;
  }

  /**
   * Gets the native function at `key` of `object`.
   *
   * @private
   * @param {Object} object The object to query.
   * @param {string} key The key of the method to get.
   * @returns {*} Returns the function if it's native, else `undefined`.
   */
  function getNative(object, key) {
    var value = getValue(object, key);
    return baseIsNative(value) ? value : undefined;
  }

  /**
   * Creates an array of the own enumerable symbol properties of `object`.
   *
   * @private
   * @param {Object} object The object to query.
   * @returns {Array} Returns the array of symbols.
   */
  var getSymbols = nativeGetSymbols ? overArg(nativeGetSymbols, Object) : stubArray;

  /**
   * Creates an array of the own and inherited enumerable symbol properties
   * of `object`.
   *
   * @private
   * @param {Object} object The object to query.
   * @returns {Array} Returns the array of symbols.
   */
  var getSymbolsIn = !nativeGetSymbols ? stubArray : function(object) {
    var result = [];
    while (object) {
      arrayPush(result, getSymbols(object));
      object = getPrototype(object);
    }
    return result;
  };

  /**
   * Checks if `value` is a flattenable `arguments` object or array.
   *
   * @private
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is flattenable, else `false`.
   */
  function isFlattenable(value) {
    return isArray(value) || isArguments(value) ||
      !!(spreadableSymbol && value && value[spreadableSymbol]);
  }

  /**
   * Checks if `value` is a valid array-like index.
   *
   * @private
   * @param {*} value The value to check.
   * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
   * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
   */
  function isIndex(value, length) {
    length = length == null ? MAX_SAFE_INTEGER : length;
    return !!length &&
      (typeof value == 'number' || reIsUint.test(value)) &&
      (value > -1 && value % 1 == 0 && value < length);
  }

  /**
   * Checks if `value` is suitable for use as unique object key.
   *
   * @private
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
   */
  function isKeyable(value) {
    var type = typeof value;
    return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
      ? (value !== '__proto__')
      : (value === null);
  }

  /**
   * Checks if `func` has its source masked.
   *
   * @private
   * @param {Function} func The function to check.
   * @returns {boolean} Returns `true` if `func` is masked, else `false`.
   */
  function isMasked(func) {
    return !!maskSrcKey && (maskSrcKey in func);
  }

  /**
   * Checks if `value` is likely a prototype object.
   *
   * @private
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
   */
  function isPrototype(value) {
    var Ctor = value && value.constructor,
        proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto;

    return value === proto;
  }

  /**
   * This function is like
   * [`Object.keys`](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
   * except that it includes inherited enumerable properties.
   *
   * @private
   * @param {Object} object The object to query.
   * @returns {Array} Returns the array of property names.
   */
  function nativeKeysIn(object) {
    var result = [];
    if (object != null) {
      for (var key in Object(object)) {
        result.push(key);
      }
    }
    return result;
  }

  /**
   * Converts `value` to a string key if it's not a string or symbol.
   *
   * @private
   * @param {*} value The value to inspect.
   * @returns {string|symbol} Returns the key.
   */
  function toKey(value) {
    if (typeof value == 'string' || isSymbol(value)) {
      return value;
    }
    var result = (value + '');
    return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
  }

  /**
   * Converts `func` to its source code.
   *
   * @private
   * @param {Function} func The function to process.
   * @returns {string} Returns the source code.
   */
  function toSource(func) {
    if (func != null) {
      try {
        return funcToString.call(func);
      } catch (e) {}
      try {
        return (func + '');
      } catch (e) {}
    }
    return '';
  }

  /**
   * Performs a
   * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
   * comparison between two values to determine if they are equivalent.
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Lang
   * @param {*} value The value to compare.
   * @param {*} other The other value to compare.
   * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
   * @example
   *
   * var object = { 'a': 1 };
   * var other = { 'a': 1 };
   *
   * _.eq(object, object);
   * // => true
   *
   * _.eq(object, other);
   * // => false
   *
   * _.eq('a', 'a');
   * // => true
   *
   * _.eq('a', Object('a'));
   * // => false
   *
   * _.eq(NaN, NaN);
   * // => true
   */
  function eq(value, other) {
    return value === other || (value !== value && other !== other);
  }

  /**
   * Checks if `value` is likely an `arguments` object.
   *
   * @static
   * @memberOf _
   * @since 0.1.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is an `arguments` object,
   *  else `false`.
   * @example
   *
   * _.isArguments(function() { return arguments; }());
   * // => true
   *
   * _.isArguments([1, 2, 3]);
   * // => false
   */
  function isArguments(value) {
    // Safari 8.1 makes `arguments.callee` enumerable in strict mode.
    return isArrayLikeObject(value) && hasOwnProperty.call(value, 'callee') &&
      (!propertyIsEnumerable.call(value, 'callee') || objectToString.call(value) == argsTag);
  }

  /**
   * Checks if `value` is classified as an `Array` object.
   *
   * @static
   * @memberOf _
   * @since 0.1.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is an array, else `false`.
   * @example
   *
   * _.isArray([1, 2, 3]);
   * // => true
   *
   * _.isArray(document.body.children);
   * // => false
   *
   * _.isArray('abc');
   * // => false
   *
   * _.isArray(_.noop);
   * // => false
   */
  var isArray = Array.isArray;

  /**
   * Checks if `value` is array-like. A value is considered array-like if it's
   * not a function and has a `value.length` that's an integer greater than or
   * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
   * @example
   *
   * _.isArrayLike([1, 2, 3]);
   * // => true
   *
   * _.isArrayLike(document.body.children);
   * // => true
   *
   * _.isArrayLike('abc');
   * // => true
   *
   * _.isArrayLike(_.noop);
   * // => false
   */
  function isArrayLike(value) {
    return value != null && isLength(value.length) && !isFunction(value);
  }

  /**
   * This method is like `_.isArrayLike` except that it also checks if `value`
   * is an object.
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is an array-like object,
   *  else `false`.
   * @example
   *
   * _.isArrayLikeObject([1, 2, 3]);
   * // => true
   *
   * _.isArrayLikeObject(document.body.children);
   * // => true
   *
   * _.isArrayLikeObject('abc');
   * // => false
   *
   * _.isArrayLikeObject(_.noop);
   * // => false
   */
  function isArrayLikeObject(value) {
    return isObjectLike(value) && isArrayLike(value);
  }

  /**
   * Checks if `value` is classified as a `Function` object.
   *
   * @static
   * @memberOf _
   * @since 0.1.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a function, else `false`.
   * @example
   *
   * _.isFunction(_);
   * // => true
   *
   * _.isFunction(/abc/);
   * // => false
   */
  function isFunction(value) {
    // The use of `Object#toString` avoids issues with the `typeof` operator
    // in Safari 8-9 which returns 'object' for typed array and other constructors.
    var tag = isObject(value) ? objectToString.call(value) : '';
    return tag == funcTag || tag == genTag;
  }

  /**
   * Checks if `value` is a valid array-like length.
   *
   * **Note:** This method is loosely based on
   * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
   * @example
   *
   * _.isLength(3);
   * // => true
   *
   * _.isLength(Number.MIN_VALUE);
   * // => false
   *
   * _.isLength(Infinity);
   * // => false
   *
   * _.isLength('3');
   * // => false
   */
  function isLength(value) {
    return typeof value == 'number' &&
      value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
  }

  /**
   * Checks if `value` is the
   * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
   * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
   *
   * @static
   * @memberOf _
   * @since 0.1.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is an object, else `false`.
   * @example
   *
   * _.isObject({});
   * // => true
   *
   * _.isObject([1, 2, 3]);
   * // => true
   *
   * _.isObject(_.noop);
   * // => true
   *
   * _.isObject(null);
   * // => false
   */
  function isObject(value) {
    var type = typeof value;
    return !!value && (type == 'object' || type == 'function');
  }

  /**
   * Checks if `value` is object-like. A value is object-like if it's not `null`
   * and has a `typeof` result of "object".
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
   * @example
   *
   * _.isObjectLike({});
   * // => true
   *
   * _.isObjectLike([1, 2, 3]);
   * // => true
   *
   * _.isObjectLike(_.noop);
   * // => false
   *
   * _.isObjectLike(null);
   * // => false
   */
  function isObjectLike(value) {
    return !!value && typeof value == 'object';
  }

  /**
   * Checks if `value` is classified as a `Symbol` primitive or object.
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
   * @example
   *
   * _.isSymbol(Symbol.iterator);
   * // => true
   *
   * _.isSymbol('abc');
   * // => false
   */
  function isSymbol(value) {
    return typeof value == 'symbol' ||
      (isObjectLike(value) && objectToString.call(value) == symbolTag);
  }

  /**
   * Creates an array of the own and inherited enumerable property names of `object`.
   *
   * **Note:** Non-object values are coerced to objects.
   *
   * @static
   * @memberOf _
   * @since 3.0.0
   * @category Object
   * @param {Object} object The object to query.
   * @returns {Array} Returns the array of property names.
   * @example
   *
   * function Foo() {
   *   this.a = 1;
   *   this.b = 2;
   * }
   *
   * Foo.prototype.c = 3;
   *
   * _.keysIn(new Foo);
   * // => ['a', 'b', 'c'] (iteration order is not guaranteed)
   */
  function keysIn(object) {
    return isArrayLike(object) ? arrayLikeKeys(object, true) : baseKeysIn(object);
  }

  /**
   * The opposite of `_.pick`; this method creates an object composed of the
   * own and inherited enumerable string keyed properties of `object` that are
   * not omitted.
   *
   * @static
   * @since 0.1.0
   * @memberOf _
   * @category Object
   * @param {Object} object The source object.
   * @param {...(string|string[])} [props] The property identifiers to omit.
   * @returns {Object} Returns the new object.
   * @example
   *
   * var object = { 'a': 1, 'b': '2', 'c': 3 };
   *
   * _.omit(object, ['a', 'c']);
   * // => { 'b': '2' }
   */
  var omit = baseRest(function(object, props) {
    if (object == null) {
      return {};
    }
    props = arrayMap(baseFlatten(props, 1), toKey);
    return basePick(object, baseDifference(getAllKeysIn(object), props));
  });

  /**
   * This method returns a new empty array.
   *
   * @static
   * @memberOf _
   * @since 4.13.0
   * @category Util
   * @returns {Array} Returns the new empty array.
   * @example
   *
   * var arrays = _.times(2, _.stubArray);
   *
   * console.log(arrays);
   * // => [[], []]
   *
   * console.log(arrays[0] === arrays[1]);
   * // => false
   */
  function stubArray() {
    return [];
  }

  var lodash_omit = omit;

  var TableRow = function TableRow(props) {
    // Remove unnecessary props if provided to this component, these are
    // only useful in `TableExpandRow`
    var cleanProps = lodash_omit(props, ['ariaLabel', 'onExpand', 'isExpanded']);
    return React__default.createElement("tr", cleanProps);
  };

  var InlineCheckbox =
  /*#__PURE__*/
  function (_React$Component) {
    function InlineCheckbox() {
      var _getPrototypeOf2;

      var _temp, _this;

      _classCallCheck(this, InlineCheckbox);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _possibleConstructorReturn(_this, (_temp = _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(InlineCheckbox)).call.apply(_getPrototypeOf2, [this].concat(args))), _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleRef", function (el) {
        _this.inputNode = el;
      }), _temp));
    }

    _createClass(InlineCheckbox, [{
      key: "componentDidMount",
      value: function componentDidMount() {
        this.inputNode.indeterminate = this.props.indeterminate;
      }
    }, {
      key: "componentDidUpdate",
      value: function componentDidUpdate(prevProps) {
        if (prevProps.indeterminate !== this.props.indeterminate) {
          this.inputNode.indeterminate = this.props.indeterminate;
        }
      }
    }, {
      key: "render",
      value: function render() {
        var _this$props = this.props,
            id = _this$props.id,
            indeterminate = _this$props.indeterminate,
            checked = _this$props.checked,
            ariaLabel = _this$props.ariaLabel,
            name = _this$props.name,
            onClick = _this$props.onClick,
            onKeyDown = _this$props.onKeyDown;
        var inputProps = {
          id: id,
          name: name,
          onClick: onClick,
          onKeyDown: onKeyDown,
          className: 'bx--checkbox',
          type: 'checkbox',
          ref: this.handleRef,
          checked: false
        };

        if (checked) {
          inputProps.checked = true;
        }

        if (indeterminate) {
          inputProps.checked = false;
          inputProps['aria-checked'] = 'mixed';
        }

        return React__default.createElement(React__default.Fragment, null, React__default.createElement("input", inputProps), React__default.createElement("label", {
          htmlFor: id,
          className: "bx--checkbox-label",
          "aria-label": ariaLabel
        }));
      }
    }]);

    _inherits(InlineCheckbox, _React$Component);

    return InlineCheckbox;
  }(React__default.Component);

  _defineProperty(InlineCheckbox, "propTypes", {
    /**
     * Specify the label for the control
     */
    ariaLabel: PropTypes.string.isRequired,

    /**
     * Specify whether the underlying control is checked, or not
     */
    checked: PropTypes.bool.isRequired,

    /**
     * Provide an `id` for the underlying input control
     */
    id: PropTypes.string.isRequired,

    /**
     * Specify whether the control is in an indterminate state
     */
    indeterminate: PropTypes.bool,

    /**
     * Provide a `name` for the underlying input control
     */
    name: PropTypes.string.isRequired,

    /**
     * Provide a handler that is invoked when a user clicks on the control
     */
    onClick: PropTypes.func,

    /**
     * Provide a handler that is invoked on the key down event for the control
     */
    onKeyDown: PropTypes.func
  });

  var TableSelectAll = function TableSelectAll(_ref) {
    var ariaLabel = _ref.ariaLabel,
        checked = _ref.checked,
        id = _ref.id,
        indeterminate = _ref.indeterminate,
        name = _ref.name,
        onSelect = _ref.onSelect;
    return React__default.createElement("th", {
      scope: "col"
    }, React__default.createElement(InlineCheckbox, {
      ariaLabel: ariaLabel,
      checked: checked,
      id: id,
      indeterminate: indeterminate,
      name: name,
      onClick: onSelect
    }));
  };

  TableSelectAll.propTypes = {
    /**
     * Specify the aria label for the underlying input control
     */
    ariaLabel: PropTypes.string.isRequired,

    /**
     * Specify whether all items are selected, or not
     */
    checked: PropTypes.bool.isRequired,

    /**
     * Provide an `id` for the underlying input control
     */
    id: PropTypes.string.isRequired,

    /**
     * Specify whether the selection only has a subset of all items
     */
    indeterminate: PropTypes.bool,

    /**
     * Provide a `name` for the underlying input control
     */
    name: PropTypes.string.isRequired,

    /**
     * Provide a handler to listen to when a user initiates a selection request
     */
    onSelect: PropTypes.func.isRequired
  };
  TableSelectAll.defaultProps = {
    ariaLabel: 'Select all rows in the table'
  };

  var TableSelectRow = function TableSelectRow(_ref) {
    var ariaLabel = _ref.ariaLabel,
        checked = _ref.checked,
        id = _ref.id,
        name = _ref.name,
        onSelect = _ref.onSelect;
    return React__default.createElement("td", null, React__default.createElement(InlineCheckbox, {
      id: id,
      name: name,
      onClick: onSelect,
      checked: checked,
      ariaLabel: ariaLabel
    }));
  };

  TableSelectRow.propTypes = {
    /**
     * Specify the aria label for the underlying input control
     */
    ariaLabel: PropTypes.string.isRequired,

    /**
     * Specify whether all items are selected, or not
     */
    checked: PropTypes.bool.isRequired,

    /**
     * Provide an `id` for the underlying input control
     */
    id: PropTypes.string.isRequired,

    /**
     * Provide a `name` for the underlying input control
     */
    name: PropTypes.string.isRequired,

    /**
     * Provide a handler to listen to when a user initiates a selection request
     */
    onSelect: PropTypes.func.isRequired
  };

  var TableToolbar = wrapComponent({
    name: 'TableToolbar',
    type: 'section',
    className: ['bx--table-toolbar']
  });

  var TableToolbarAction = function TableToolbarAction(_ref) {
    var className = _ref.className,
        iconName = _ref.iconName,
        iconDescription = _ref.iconDescription,
        rest = _objectWithoutProperties(_ref, ["className", "iconName", "iconDescription"]);

    var toolbarActionClasses = classNames(className, 'bx--toolbar-action');
    return React__default.createElement("button", _extends({
      className: toolbarActionClasses
    }, rest), React__default.createElement(Icon, {
      className: "bx--toolbar-action__icon",
      name: iconName,
      description: iconDescription
    }));
  };

  TableToolbarAction.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,

    /**
     * Specify the name of the icon for the toolbar action
     */
    iconName: PropTypes.string.isRequired,

    /**
     * Specify the description of the icon for the toolbar action
     */
    iconDescription: PropTypes.string.isRequired
  };

  var TableToolbarContent = wrapComponent({
    name: 'TableToolbarContent',
    type: 'div',
    className: ['bx--toolbar-content']
  });

  var SearchSkeleton =
  /*#__PURE__*/
  function (_Component) {
    function SearchSkeleton() {
      _classCallCheck(this, SearchSkeleton);

      return _possibleConstructorReturn(this, _getPrototypeOf(SearchSkeleton).apply(this, arguments));
    }

    _createClass(SearchSkeleton, [{
      key: "render",
      value: function render() {
        var _this$props = this.props,
            small = _this$props.small,
            id = _this$props.id;
        var searchClasses = classNames({
          'bx--skeleton': true,
          'bx--search--lg': !small,
          'bx--search--sm': small
        });
        return React__default.createElement("div", {
          className: searchClasses,
          role: "search"
        }, React__default.createElement("label", {
          htmlFor: id,
          className: "bx--label"
        }), React__default.createElement("div", {
          className: "bx--search-input"
        }));
      }
    }]);

    _inherits(SearchSkeleton, _Component);

    return SearchSkeleton;
  }(React.Component);

  _defineProperty(SearchSkeleton, "propTypes", {
    small: PropTypes.bool
  });

  _defineProperty(SearchSkeleton, "defaultProps", {
    small: false
  });

  /**
   * The filter button for `<Search>`.
   */

  var SearchFilterButton = function SearchFilterButton(_ref) {
    var labelText = _ref.labelText,
        other = _objectWithoutProperties(_ref, ["labelText"]);

    return React__default.createElement("button", _extends({
      className: "bx--search-button",
      type: "button",
      "aria-label": labelText
    }, other), React__default.createElement(Icon, {
      name: "filter--glyph",
      description: "filter",
      className: "bx--search-filter"
    }));
  };

  SearchFilterButton.propTypes = {
    /**
     * The a11y label text.
     */
    labelText: PropTypes.string
  };
  SearchFilterButton.defaultProps = {
    labelText: 'Search'
  };

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
        return React__default.createElement("button", {
          className: "bx--search-button",
          type: "button",
          onClick: this.toggleLayout,
          "aria-label": labelText
        }, this.state.format === 'list' ? React__default.createElement("div", {
          className: "bx--search__toggle-layout__container"
        }, React__default.createElement(Icon, {
          name: "list",
          description: "list",
          className: "bx--search-view"
        })) : React__default.createElement("div", {
          className: "bx--search__toggle-layout__container"
        }, React__default.createElement(Icon, {
          name: "grid",
          description: "toggle-layout",
          className: "bx--search-view"
        })));
      }
    }]);

    _inherits(SearchLayoutButton, _Component);

    return SearchLayoutButton;
  }(React.Component);

  _defineProperty(SearchLayoutButton, "propTypes", {
    /**
     * The layout.
     */
    format: PropTypes.oneOf(['list', 'grid']),

    /**
     * The a11y label text.
     */
    labelText: PropTypes.string,

    /**
     * The callback called when layout switches.
     */
    onChangeFormat: PropTypes.func
  });

  _defineProperty(SearchLayoutButton, "defaultProps", {
    labelText: 'Filter'
  });

  var Search =
  /*#__PURE__*/
  function (_Component) {
    function Search() {
      var _getPrototypeOf2;

      var _temp, _this;

      _classCallCheck(this, Search);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _possibleConstructorReturn(_this, (_temp = _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Search)).call.apply(_getPrototypeOf2, [this].concat(args))), _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
        hasContent: _this.props.value || _this.props.defaultValue || false
      }), _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "clearInput", function (evt) {
        if (!_this.props.value) {
          _this.input.value = '';

          _this.props.onChange(evt);
        } else {
          var clearedEvt = Object.assign({}, evt.target, {
            target: {
              value: ''
            }
          });

          _this.props.onChange(clearedEvt);
        }

        _this.setState({
          hasContent: false
        }, function () {
          return _this.input.focus();
        });
      }), _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleChange", function (evt) {
        _this.setState({
          hasContent: evt.target.value !== ''
        });

        _this.props.onChange(evt);
      }), _temp));
    }

    _createClass(Search, [{
      key: "render",
      value: function render() {
        var _this2 = this;

        var _this$props = this.props,
            className = _this$props.className,
            type = _this$props.type,
            _this$props$id = _this$props.id,
            id = _this$props$id === void 0 ? this._inputId = this._inputId || "search__input__id_".concat(Math.random().toString(36).substr(2)) : _this$props$id,
            placeHolderText = _this$props.placeHolderText,
            labelText = _this$props.labelText,
            searchButtonLabelText = _this$props.searchButtonLabelText,
            layoutButtonLabelText = _this$props.layoutButtonLabelText,
            closeButtonLabelText = _this$props.closeButtonLabelText,
            small = _this$props.small,
            children = _this$props.children,
            other = _objectWithoutProperties(_this$props, ["className", "type", "id", "placeHolderText", "labelText", "searchButtonLabelText", "layoutButtonLabelText", "closeButtonLabelText", "small", "children"]);

        var hasContent = this.state.hasContent;
        var searchClasses = classNames(_defineProperty({
          'bx--search bx--search-with-options': true,
          'bx--search--lg': !small,
          'bx--search--sm': small
        }, className, className));
        var clearClasses = classNames({
          'bx--search-close': true,
          'bx--search-close--hidden': !hasContent
        });
        var renderButtons = !children && !small;
        return React__default.createElement("div", {
          className: searchClasses,
          role: "search"
        }, React__default.createElement(Icon, {
          name: "search--glyph",
          description: "search",
          className: "bx--search-magnifier"
        }), React__default.createElement("label", {
          htmlFor: id,
          className: "bx--label"
        }, labelText), React__default.createElement("input", _extends({}, other, {
          type: type,
          className: "bx--search-input",
          id: id,
          placeholder: placeHolderText,
          onChange: this.handleChange,
          ref: function ref(input) {
            _this2.input = input;
          }
        })), React__default.createElement("button", {
          className: clearClasses,
          onClick: this.clearInput,
          type: "button",
          "aria-label": closeButtonLabelText
        }, React__default.createElement(Icon, {
          name: "close--glyph",
          description: "close"
        })), children, renderButtons && React__default.createElement(SearchFilterButton, {
          labelText: searchButtonLabelText
        }), renderButtons && React__default.createElement(SearchLayoutButton, {
          labelText: layoutButtonLabelText
        }));
      }
    }]);

    _inherits(Search, _Component);

    return Search;
  }(React.Component);

  _defineProperty(Search, "propTypes", {
    children: PropTypes.node,
    className: PropTypes.string,
    type: PropTypes.string,
    small: PropTypes.bool,
    placeHolderText: PropTypes.string,
    labelText: PropTypes.node.isRequired,
    id: PropTypes.string,
    searchButtonLabelText: PropTypes.string,
    layoutButtonLabelText: PropTypes.string,
    closeButtonLabelText: PropTypes.string
  });

  _defineProperty(Search, "defaultProps", {
    type: 'text',
    small: false,
    placeHolderText: '',
    onChange: function onChange() {}
  });

  var getInstanceId$1 = setupGetInstanceId();

  var TableToolbarSearch = function TableToolbarSearch(_ref) {
    var className = _ref.className,
        searchContainerClass = _ref.searchContainerClass,
        onChange = _ref.onChange,
        _ref$id = _ref.id,
        id = _ref$id === void 0 ? "data-table-search-".concat(getInstanceId$1()) : _ref$id,
        rest = _objectWithoutProperties(_ref, ["className", "searchContainerClass", "onChange", "id"]);

    var searchContainerClasses = classNames(searchContainerClass, 'bx--toolbar-search-container');
    return React__default.createElement("div", {
      className: searchContainerClasses
    }, React__default.createElement(Search, _extends({
      className: className
    }, rest, {
      small: true,
      id: id,
      labelText: "Filter table",
      placeHolderText: "Search",
      onChange: onChange
    })));
  };

  TableToolbarSearch.propTypes = {
    children: PropTypes.node,

    /**
     * Provide an optional class name for the search container
     */
    className: PropTypes.string,

    /**
     * Provide an optional id for the search container
     */
    id: PropTypes.string,
    searchContainerClasses: PropTypes.string,

    /**
     * Provide an optional hook that is called each time the input is updated
     */
    onChange: PropTypes.func
  };

  DataTable.Table = Table;
  DataTable.TableActionList = TableActionList;
  DataTable.TableBatchAction = TableBatchAction;
  DataTable.TableBatchActions = TableBatchActions;
  DataTable.TableBody = TableBody;
  DataTable.TableCell = TableCell;
  DataTable.TableContainer = TableContainer;
  DataTable.TableExpandHeader = TableExpandHeader;
  DataTable.TableExpandRow = TableExpandRow;
  DataTable.TableExpandedRow = TableExpandedRow;
  DataTable.TableHead = TableHead;
  DataTable.TableHeader = TableHeader;
  DataTable.TableRow = TableRow;
  DataTable.TableSelectAll = TableSelectAll;
  DataTable.TableSelectRow = TableSelectRow;
  DataTable.TableToolbar = TableToolbar;
  DataTable.TableToolbarAction = TableToolbarAction;
  DataTable.TableToolbarContent = TableToolbarContent;
  DataTable.TableToolbarSearch = TableToolbarSearch;

  var DatePickerSkeleton = function DatePickerSkeleton(_ref) {
    var range = _ref.range,
        id = _ref.id;
    var dateInput = React__default.createElement("div", {
      className: "bx--date-picker-container"
    }, React__default.createElement("label", {
      className: "bx--label",
      htmlFor: id
    }), React__default.createElement("div", {
      className: "bx--date-picker__input bx--skeleton"
    }));

    if (range) {
      return React__default.createElement("div", {
        className: "bx--form-item"
      }, React__default.createElement("div", {
        className: "bx--date-picker bx--date-picker--range bx--skeleton"
      }, dateInput, dateInput));
    }

    return React__default.createElement("div", {
      className: "bx--form-item"
    }, React__default.createElement("div", {
      className: "bx--date-picker bx--date-picker--short bx--date-picker--simple bx--skeleton"
    }, dateInput));
  };

  DatePickerSkeleton.propTypes = {
    range: PropTypes.bool
  };

  var flatpickr = createCommonjsModule(function (module, exports) {
  /* flatpickr v4.4.1, @license MIT */
  (function (global, factory) {
      module.exports = factory();
  }(commonjsGlobal, (function () {
      var pad = function pad(number) {
        return ("0" + number).slice(-2);
      };
      var int = function int(bool) {
        return bool === true ? 1 : 0;
      };
      function debounce(func, wait, immediate) {
        if (immediate === void 0) {
          immediate = false;
        }

        var timeout;
        return function () {
          var context = this,
              args = arguments;
          timeout !== null && clearTimeout(timeout);
          timeout = window.setTimeout(function () {
            timeout = null;
            if (!immediate) func.apply(context, args);
          }, wait);
          if (immediate && !timeout) func.apply(context, args);
        };
      }
      var arrayify = function arrayify(obj) {
        return obj instanceof Array ? obj : [obj];
      };

      var do_nothing = function do_nothing() {
        return undefined;
      };

      var monthToStr = function monthToStr(monthNumber, shorthand, locale) {
        return locale.months[shorthand ? "shorthand" : "longhand"][monthNumber];
      };
      var revFormat = {
        D: do_nothing,
        F: function F(dateObj, monthName, locale) {
          dateObj.setMonth(locale.months.longhand.indexOf(monthName));
        },
        G: function G(dateObj, hour) {
          dateObj.setHours(parseFloat(hour));
        },
        H: function H(dateObj, hour) {
          dateObj.setHours(parseFloat(hour));
        },
        J: function J(dateObj, day) {
          dateObj.setDate(parseFloat(day));
        },
        K: function K(dateObj, amPM, locale) {
          dateObj.setHours(dateObj.getHours() % 12 + 12 * int(new RegExp(locale.amPM[1], "i").test(amPM)));
        },
        M: function M(dateObj, shortMonth, locale) {
          dateObj.setMonth(locale.months.shorthand.indexOf(shortMonth));
        },
        S: function S(dateObj, seconds) {
          dateObj.setSeconds(parseFloat(seconds));
        },
        U: function U(_, unixSeconds) {
          return new Date(parseFloat(unixSeconds) * 1000);
        },
        W: function W(dateObj, weekNum) {
          var weekNumber = parseInt(weekNum);
          return new Date(dateObj.getFullYear(), 0, 2 + (weekNumber - 1) * 7, 0, 0, 0, 0);
        },
        Y: function Y(dateObj, year) {
          dateObj.setFullYear(parseFloat(year));
        },
        Z: function Z(_, ISODate) {
          return new Date(ISODate);
        },
        d: function d(dateObj, day) {
          dateObj.setDate(parseFloat(day));
        },
        h: function h(dateObj, hour) {
          dateObj.setHours(parseFloat(hour));
        },
        i: function i(dateObj, minutes) {
          dateObj.setMinutes(parseFloat(minutes));
        },
        j: function j(dateObj, day) {
          dateObj.setDate(parseFloat(day));
        },
        l: do_nothing,
        m: function m(dateObj, month) {
          dateObj.setMonth(parseFloat(month) - 1);
        },
        n: function n(dateObj, month) {
          dateObj.setMonth(parseFloat(month) - 1);
        },
        s: function s(dateObj, seconds) {
          dateObj.setSeconds(parseFloat(seconds));
        },
        w: do_nothing,
        y: function y(dateObj, year) {
          dateObj.setFullYear(2000 + parseFloat(year));
        }
      };
      var tokenRegex = {
        D: "(\\w+)",
        F: "(\\w+)",
        G: "(\\d\\d|\\d)",
        H: "(\\d\\d|\\d)",
        J: "(\\d\\d|\\d)\\w+",
        K: "",
        M: "(\\w+)",
        S: "(\\d\\d|\\d)",
        U: "(.+)",
        W: "(\\d\\d|\\d)",
        Y: "(\\d{4})",
        Z: "(.+)",
        d: "(\\d\\d|\\d)",
        h: "(\\d\\d|\\d)",
        i: "(\\d\\d|\\d)",
        j: "(\\d\\d|\\d)",
        l: "(\\w+)",
        m: "(\\d\\d|\\d)",
        n: "(\\d\\d|\\d)",
        s: "(\\d\\d|\\d)",
        w: "(\\d\\d|\\d)",
        y: "(\\d{2})"
      };
      var formats = {
        Z: function Z(date) {
          return date.toISOString();
        },
        D: function D(date, locale, options) {
          return locale.weekdays.shorthand[formats.w(date, locale, options)];
        },
        F: function F(date, locale, options) {
          return monthToStr(formats.n(date, locale, options) - 1, false, locale);
        },
        G: function G(date, locale, options) {
          return pad(formats.h(date, locale, options));
        },
        H: function H(date) {
          return pad(date.getHours());
        },
        J: function J(date, locale) {
          return locale.ordinal !== undefined ? date.getDate() + locale.ordinal(date.getDate()) : date.getDate();
        },
        K: function K(date, locale) {
          return locale.amPM[int(date.getHours() > 11)];
        },
        M: function M(date, locale) {
          return monthToStr(date.getMonth(), true, locale);
        },
        S: function S(date) {
          return pad(date.getSeconds());
        },
        U: function U(date) {
          return date.getTime() / 1000;
        },
        W: function W(date, _, options) {
          return options.getWeek(date);
        },
        Y: function Y(date) {
          return date.getFullYear();
        },
        d: function d(date) {
          return pad(date.getDate());
        },
        h: function h(date) {
          return date.getHours() % 12 ? date.getHours() % 12 : 12;
        },
        i: function i(date) {
          return pad(date.getMinutes());
        },
        j: function j(date) {
          return date.getDate();
        },
        l: function l(date, locale) {
          return locale.weekdays.longhand[date.getDay()];
        },
        m: function m(date) {
          return pad(date.getMonth() + 1);
        },
        n: function n(date) {
          return date.getMonth() + 1;
        },
        s: function s(date) {
          return date.getSeconds();
        },
        w: function w(date) {
          return date.getDay();
        },
        y: function y(date) {
          return String(date.getFullYear()).substring(2);
        }
      };

      var english = {
        weekdays: {
          shorthand: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
          longhand: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
        },
        months: {
          shorthand: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
          longhand: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
        },
        daysInMonth: [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
        firstDayOfWeek: 0,
        ordinal: function ordinal(nth) {
          var s = nth % 100;
          if (s > 3 && s < 21) return "th";

          switch (s % 10) {
            case 1:
              return "st";

            case 2:
              return "nd";

            case 3:
              return "rd";

            default:
              return "th";
          }
        },
        rangeSeparator: " to ",
        weekAbbreviation: "Wk",
        scrollTitle: "Scroll to increment",
        toggleTitle: "Click to toggle",
        amPM: ["AM", "PM"],
        yearAriaLabel: "Year"
      };

      var createDateFormatter = function createDateFormatter(_ref) {
        var _ref$config = _ref.config,
            config = _ref$config === void 0 ? defaults : _ref$config,
            _ref$l10n = _ref.l10n,
            l10n = _ref$l10n === void 0 ? english : _ref$l10n;
        return function (dateObj, frmt, overrideLocale) {
          if (config.formatDate !== undefined) return config.formatDate(dateObj, frmt);
          var locale = overrideLocale || l10n;
          return frmt.split("").map(function (c, i, arr) {
            return formats[c] && arr[i - 1] !== "\\" ? formats[c](dateObj, locale, config) : c !== "\\" ? c : "";
          }).join("");
        };
      };
      var createDateParser = function createDateParser(_ref2) {
        var _ref2$config = _ref2.config,
            config = _ref2$config === void 0 ? defaults : _ref2$config,
            _ref2$l10n = _ref2.l10n,
            l10n = _ref2$l10n === void 0 ? english : _ref2$l10n;
        return function (date, givenFormat, timeless) {
          if (date !== 0 && !date) return undefined;
          var parsedDate;
          var date_orig = date;
          if (date instanceof Date) parsedDate = new Date(date.getTime());else if (typeof date !== "string" && date.toFixed !== undefined) parsedDate = new Date(date);else if (typeof date === "string") {
            var format = givenFormat || (config || defaults).dateFormat;
            var datestr = String(date).trim();

            if (datestr === "today") {
              parsedDate = new Date();
              timeless = true;
            } else if (/Z$/.test(datestr) || /GMT$/.test(datestr)) parsedDate = new Date(date);else if (config && config.parseDate) parsedDate = config.parseDate(date, format);else {
              parsedDate = !config || !config.noCalendar ? new Date(new Date().getFullYear(), 0, 1, 0, 0, 0, 0) : new Date(new Date().setHours(0, 0, 0, 0));
              var matched,
                  ops = [];

              for (var i = 0, matchIndex = 0, regexStr = ""; i < format.length; i++) {
                var token = format[i];
                var isBackSlash = token === "\\";
                var escaped = format[i - 1] === "\\" || isBackSlash;

                if (tokenRegex[token] && !escaped) {
                  regexStr += tokenRegex[token];
                  var match = new RegExp(regexStr).exec(date);

                  if (match && (matched = true)) {
                    ops[token !== "Y" ? "push" : "unshift"]({
                      fn: revFormat[token],
                      val: match[++matchIndex]
                    });
                  }
                } else if (!isBackSlash) regexStr += ".";

                ops.forEach(function (_ref3) {
                  var fn = _ref3.fn,
                      val = _ref3.val;
                  return parsedDate = fn(parsedDate, val, l10n) || parsedDate;
                });
              }

              parsedDate = matched ? parsedDate : undefined;
            }
          }

          if (!(parsedDate instanceof Date)) {
            config.errorHandler(new Error("Invalid date provided: " + date_orig));
            return undefined;
          }

          if (timeless === true) parsedDate.setHours(0, 0, 0, 0);
          return parsedDate;
        };
      };
      function compareDates(date1, date2, timeless) {
        if (timeless === void 0) {
          timeless = true;
        }

        if (timeless !== false) {
          return new Date(date1.getTime()).setHours(0, 0, 0, 0) - new Date(date2.getTime()).setHours(0, 0, 0, 0);
        }

        return date1.getTime() - date2.getTime();
      }
      var getWeek = function getWeek(givenDate) {
        var date = new Date(givenDate.getTime());
        date.setHours(0, 0, 0, 0);
        date.setDate(date.getDate() + 3 - (date.getDay() + 6) % 7);
        var week1 = new Date(date.getFullYear(), 0, 4);
        return 1 + Math.round(((date.getTime() - week1.getTime()) / 86400000 - 3 + (week1.getDay() + 6) % 7) / 7);
      };
      var isBetween = function isBetween(ts, ts1, ts2) {
        return ts > Math.min(ts1, ts2) && ts < Math.max(ts1, ts2);
      };
      var duration = {
        DAY: 86400000
      };

      var defaults = {
        _disable: [],
        _enable: [],
        allowInput: false,
        altFormat: "F j, Y",
        altInput: false,
        altInputClass: "form-control input",
        animate: typeof window === "object" && window.navigator.userAgent.indexOf("MSIE") === -1,
        ariaDateFormat: "F j, Y",
        clickOpens: true,
        closeOnSelect: true,
        conjunction: ", ",
        dateFormat: "Y-m-d",
        defaultHour: 12,
        defaultMinute: 0,
        defaultSeconds: 0,
        disable: [],
        disableMobile: false,
        enable: [],
        enableSeconds: false,
        enableTime: false,
        errorHandler: console.warn,
        getWeek: getWeek,
        hourIncrement: 1,
        ignoredFocusElements: [],
        inline: false,
        locale: "default",
        minuteIncrement: 5,
        mode: "single",
        nextArrow: "<svg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 17 17'><g></g><path d='M13.207 8.472l-7.854 7.854-0.707-0.707 7.146-7.146-7.146-7.148 0.707-0.707 7.854 7.854z' /></svg>",
        noCalendar: false,
        now: new Date(),
        onChange: [],
        onClose: [],
        onDayCreate: [],
        onDestroy: [],
        onKeyDown: [],
        onMonthChange: [],
        onOpen: [],
        onParseConfig: [],
        onReady: [],
        onValueUpdate: [],
        onYearChange: [],
        onPreCalendarPosition: [],
        plugins: [],
        position: "auto",
        positionElement: undefined,
        prevArrow: "<svg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 17 17'><g></g><path d='M5.207 8.471l7.146 7.147-0.707 0.707-7.853-7.854 7.854-7.853 0.707 0.707-7.147 7.146z' /></svg>",
        shorthandCurrentMonth: false,
        showMonths: 1,
        static: false,
        time_24hr: false,
        weekNumbers: false,
        wrap: false
      };

      function toggleClass(elem, className, bool) {
        if (bool === true) return elem.classList.add(className);
        elem.classList.remove(className);
      }
      function createElement(tag, className, content) {
        var e = window.document.createElement(tag);
        className = className || "";
        content = content || "";
        e.className = className;
        if (content !== undefined) e.textContent = content;
        return e;
      }
      function clearNode(node) {
        while (node.firstChild) {
          node.removeChild(node.firstChild);
        }
      }
      function findParent(node, condition) {
        if (condition(node)) return node;else if (node.parentNode) return findParent(node.parentNode, condition);
        return undefined;
      }
      function createNumberInput(inputClassName, opts) {
        var wrapper = createElement("div", "numInputWrapper"),
            numInput = createElement("input", "numInput " + inputClassName),
            arrowUp = createElement("span", "arrowUp"),
            arrowDown = createElement("span", "arrowDown");
        numInput.type = "text";
        numInput.pattern = "\\d*";
        if (opts !== undefined) for (var key in opts) {
          numInput.setAttribute(key, opts[key]);
        }
        wrapper.appendChild(numInput);
        wrapper.appendChild(arrowUp);
        wrapper.appendChild(arrowDown);
        return wrapper;
      }

      if (typeof Object.assign !== "function") {
        Object.assign = function (target) {
          if (!target) {
            throw TypeError("Cannot convert undefined or null to object");
          }

          for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
            args[_key - 1] = arguments[_key];
          }

          var _loop = function _loop(source) {
            if (source) {
              Object.keys(source).forEach(function (key) {
                return target[key] = source[key];
              });
            }
          };

          for (var _i = 0; _i < args.length; _i++) {
            var source = args[_i];

            _loop(source);
          }

          return target;
        };
      }

      var DEBOUNCED_CHANGE_MS = 300;

      function FlatpickrInstance(element, instanceConfig) {
        var self = {
          config: Object.assign({}, flatpickr.defaultConfig),
          l10n: english
        };
        self.parseDate = createDateParser({
          config: self.config,
          l10n: self.l10n
        });
        self._handlers = [];
        self._bind = bind;
        self._setHoursFromDate = setHoursFromDate;
        self.changeMonth = changeMonth;
        self.changeYear = changeYear;
        self.clear = clear;
        self.close = close;
        self._createElement = createElement;
        self.destroy = destroy;
        self.isEnabled = isEnabled;
        self.jumpToDate = jumpToDate;
        self.open = open;
        self.redraw = redraw;
        self.set = set;
        self.setDate = setDate;
        self.toggle = toggle;

        function setupHelperFunctions() {
          self.utils = {
            getDaysInMonth: function getDaysInMonth(month, yr) {
              if (month === void 0) {
                month = self.currentMonth;
              }

              if (yr === void 0) {
                yr = self.currentYear;
              }

              if (month === 1 && (yr % 4 === 0 && yr % 100 !== 0 || yr % 400 === 0)) return 29;
              return self.l10n.daysInMonth[month];
            }
          };
        }

        function init() {
          self.element = self.input = element;
          self.isOpen = false;
          parseConfig();
          setupLocale();
          setupInputs();
          setupDates();
          setupHelperFunctions();
          if (!self.isMobile) build();
          bindEvents();

          if (self.selectedDates.length || self.config.noCalendar) {
            if (self.config.enableTime) {
              setHoursFromDate(self.config.noCalendar ? self.latestSelectedDateObj || self.config.minDate : undefined);
            }

            updateValue(false);
          }

          self.showTimeInput = self.selectedDates.length > 0 || self.config.noCalendar;

          if (self.daysContainer !== undefined) {
            self.calendarContainer.style.visibility = "hidden";
            self.calendarContainer.style.display = "block";
            var daysWidth = (self.calendarContainer.clientWidth + 1) * self.config.showMonths + "px";
            self.daysContainer.style.width = daysWidth;
            self.calendarContainer.style.width = daysWidth;

            if (self.weekWrapper !== undefined) {
              self.calendarContainer.style.width = daysWidth + self.weekWrapper.offsetWidth + "px";
            }

            self.calendarContainer.style.visibility = "visible";
            self.calendarContainer.style.display = null;
          }

          var isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);

          if (!self.isMobile && isSafari) {
            positionCalendar();
          }

          triggerEvent("onReady");
        }

        function bindToInstance(fn) {
          return fn.bind(self);
        }

        function updateTime(e) {
          if (self.selectedDates.length === 0) return;
          timeWrapper(e);

          if (e.type !== "input") {
            setHoursFromInputs();
            updateValue();
          } else {
            setTimeout(function () {
              setHoursFromInputs();
              updateValue();
            }, DEBOUNCED_CHANGE_MS);
          }
        }

        function ampm2military(hour, amPM) {
          return hour % 12 + 12 * int(amPM === self.l10n.amPM[1]);
        }

        function military2ampm(hour) {
          switch (hour % 24) {
            case 0:
            case 12:
              return 12;

            default:
              return hour % 12;
          }
        }

        function setHoursFromInputs() {
          if (self.hourElement === undefined || self.minuteElement === undefined) return;
          var hours = (parseInt(self.hourElement.value.slice(-2), 10) || 0) % 24,
              minutes = (parseInt(self.minuteElement.value, 10) || 0) % 60,
              seconds = self.secondElement !== undefined ? (parseInt(self.secondElement.value, 10) || 0) % 60 : 0;
          if (self.amPM !== undefined) hours = ampm2military(hours, self.amPM.textContent);
          var limitMinHours = self.config.minTime !== undefined || self.config.minDate && self.minDateHasTime && self.latestSelectedDateObj && compareDates(self.latestSelectedDateObj, self.config.minDate, true) === 0;
          var limitMaxHours = self.config.maxTime !== undefined || self.config.maxDate && self.maxDateHasTime && self.latestSelectedDateObj && compareDates(self.latestSelectedDateObj, self.config.maxDate, true) === 0;

          if (limitMaxHours) {
            var maxTime = self.config.maxTime !== undefined ? self.config.maxTime : self.config.maxDate;
            hours = Math.min(hours, maxTime.getHours());
            if (hours === maxTime.getHours()) minutes = Math.min(minutes, maxTime.getMinutes());
            if (minutes === maxTime.getMinutes()) seconds = Math.min(seconds, maxTime.getSeconds());
          }

          if (limitMinHours) {
            var minTime = self.config.minTime !== undefined ? self.config.minTime : self.config.minDate;
            hours = Math.max(hours, minTime.getHours());
            if (hours === minTime.getHours()) minutes = Math.max(minutes, minTime.getMinutes());
            if (minutes === minTime.getMinutes()) seconds = Math.max(seconds, minTime.getSeconds());
          }

          setHours(hours, minutes, seconds);
        }

        function setHoursFromDate(dateObj) {
          var date = dateObj || self.latestSelectedDateObj;
          if (date) setHours(date.getHours(), date.getMinutes(), date.getSeconds());
        }

        function setHours(hours, minutes, seconds) {
          if (self.latestSelectedDateObj !== undefined) {
            self.latestSelectedDateObj.setHours(hours % 24, minutes, seconds || 0, 0);
          }

          if (!self.hourElement || !self.minuteElement || self.isMobile) return;
          self.hourElement.value = pad(!self.config.time_24hr ? (12 + hours) % 12 + 12 * int(hours % 12 === 0) : hours);
          self.minuteElement.value = pad(minutes);
          if (self.amPM !== undefined) self.amPM.textContent = self.l10n.amPM[int(hours >= 12)];
          if (self.secondElement !== undefined) self.secondElement.value = pad(seconds);
        }

        function onYearInput(event) {
          var year = parseInt(event.target.value) + (event.delta || 0);

          if (year.toString().length === 4 || event.key === "Enter") {
            event.target.blur();
            if (!/[^\d]/.test(year.toString())) changeYear(year);
          }
        }

        function bind(element, event, handler, options) {
          if (event instanceof Array) return event.forEach(function (ev) {
            return bind(element, ev, handler, options);
          });
          if (element instanceof Array) return element.forEach(function (el) {
            return bind(el, event, handler, options);
          });
          element.addEventListener(event, handler, options);

          self._handlers.push({
            element: element,
            event: event,
            handler: handler
          });
        }

        function onClick(handler) {
          return function (evt) {
            evt.which === 1 && handler(evt);
          };
        }

        function triggerChange() {
          triggerEvent("onChange");
        }

        function bindEvents() {
          if (self.config.wrap) {
            ["open", "close", "toggle", "clear"].forEach(function (evt) {
              Array.prototype.forEach.call(self.element.querySelectorAll("[data-" + evt + "]"), function (el) {
                return bind(el, "click", self[evt]);
              });
            });
          }

          if (self.isMobile) {
            setupMobile();
            return;
          }

          var debouncedResize = debounce(onResize, 50);
          self._debouncedChange = debounce(triggerChange, DEBOUNCED_CHANGE_MS);
          if (self.daysContainer && !/iPhone|iPad|iPod/i.test(navigator.userAgent)) bind(self.daysContainer, "mouseover", function (e) {
            if (self.config.mode === "range") onMouseOver(e.target);
          });
          bind(window.document.body, "keydown", onKeyDown);
          if (!self.config.static) bind(self._input, "keydown", onKeyDown);
          if (!self.config.inline && !self.config.static) bind(window, "resize", debouncedResize);
          if (window.ontouchstart !== undefined) bind(window.document, "touchstart", documentClick);
          bind(window.document, "mousedown", onClick(documentClick));
          bind(window.document, "focus", documentClick, {
            capture: true
          });

          if (self.config.clickOpens === true) {
            bind(self._input, "focus", self.open);
            bind(self._input, "mousedown", onClick(self.open));
          }

          if (self.daysContainer !== undefined) {
            bind(self.monthNav, "mousedown", onClick(onMonthNavClick));
            bind(self.monthNav, ["keyup", "increment"], onYearInput);
            bind(self.daysContainer, "mousedown", onClick(selectDate));
          }

          if (self.timeContainer !== undefined && self.minuteElement !== undefined && self.hourElement !== undefined) {
            var selText = function selText(e) {
              return e.target.select();
            };

            bind(self.timeContainer, ["input", "increment"], updateTime);
            bind(self.timeContainer, "mousedown", onClick(timeIncrement));
            bind(self.timeContainer, ["input", "increment"], self._debouncedChange, {
              passive: true
            });
            bind([self.hourElement, self.minuteElement], ["focus", "click"], selText);
            if (self.secondElement !== undefined) bind(self.secondElement, "focus", function () {
              return self.secondElement && self.secondElement.select();
            });

            if (self.amPM !== undefined) {
              bind(self.amPM, "mousedown", onClick(function (e) {
                updateTime(e);
                triggerChange();
              }));
            }
          }
        }

        function jumpToDate(jumpDate) {
          var jumpTo = jumpDate !== undefined ? self.parseDate(jumpDate) : self.latestSelectedDateObj || (self.config.minDate && self.config.minDate > self.now ? self.config.minDate : self.config.maxDate && self.config.maxDate < self.now ? self.config.maxDate : self.now);

          try {
            if (jumpTo !== undefined) {
              self.currentYear = jumpTo.getFullYear();
              self.currentMonth = jumpTo.getMonth();
            }
          } catch (e) {
            e.message = "Invalid date supplied: " + jumpTo;
            self.config.errorHandler(e);
          }

          self.redraw();
        }

        function timeIncrement(e) {
          if (~e.target.className.indexOf("arrow")) incrementNumInput(e, e.target.classList.contains("arrowUp") ? 1 : -1);
        }

        function incrementNumInput(e, delta, inputElem) {
          var target = e && e.target;
          var input = inputElem || target && target.parentNode && target.parentNode.firstChild;
          var event = createEvent("increment");
          event.delta = delta;
          input && input.dispatchEvent(event);
        }

        function build() {
          var fragment = window.document.createDocumentFragment();
          self.calendarContainer = createElement("div", "flatpickr-calendar");
          self.calendarContainer.tabIndex = -1;

          if (!self.config.noCalendar) {
            fragment.appendChild(buildMonthNav());
            self.innerContainer = createElement("div", "flatpickr-innerContainer");

            if (self.config.weekNumbers) {
              var _buildWeeks = buildWeeks(),
                  weekWrapper = _buildWeeks.weekWrapper,
                  weekNumbers = _buildWeeks.weekNumbers;

              self.innerContainer.appendChild(weekWrapper);
              self.weekNumbers = weekNumbers;
              self.weekWrapper = weekWrapper;
            }

            self.rContainer = createElement("div", "flatpickr-rContainer");
            self.rContainer.appendChild(buildWeekdays());

            if (!self.daysContainer) {
              self.daysContainer = createElement("div", "flatpickr-days");
              self.daysContainer.tabIndex = -1;
            }

            buildDays();
            self.rContainer.appendChild(self.daysContainer);
            self.innerContainer.appendChild(self.rContainer);
            fragment.appendChild(self.innerContainer);
          }

          if (self.config.enableTime) {
            fragment.appendChild(buildTime());
          }

          toggleClass(self.calendarContainer, "rangeMode", self.config.mode === "range");
          toggleClass(self.calendarContainer, "animate", self.config.animate === true);
          toggleClass(self.calendarContainer, "multiMonth", self.config.showMonths > 1);
          self.calendarContainer.appendChild(fragment);
          var customAppend = self.config.appendTo !== undefined && self.config.appendTo.nodeType !== undefined;

          if (self.config.inline || self.config.static) {
            self.calendarContainer.classList.add(self.config.inline ? "inline" : "static");

            if (self.config.inline) {
              if (!customAppend && self.element.parentNode) self.element.parentNode.insertBefore(self.calendarContainer, self._input.nextSibling);else if (self.config.appendTo !== undefined) self.config.appendTo.appendChild(self.calendarContainer);
            }

            if (self.config.static) {
              var wrapper = createElement("div", "flatpickr-wrapper");
              if (self.element.parentNode) self.element.parentNode.insertBefore(wrapper, self.element);
              wrapper.appendChild(self.element);
              if (self.altInput) wrapper.appendChild(self.altInput);
              wrapper.appendChild(self.calendarContainer);
            }
          }

          if (!self.config.static && !self.config.inline) (self.config.appendTo !== undefined ? self.config.appendTo : window.document.body).appendChild(self.calendarContainer);
        }

        function createDay(className, date, dayNumber, i) {
          var dateIsEnabled = isEnabled(date, true),
              dayElement = createElement("span", "flatpickr-day " + className, date.getDate().toString());
          dayElement.dateObj = date;
          dayElement.$i = i;
          dayElement.setAttribute("aria-label", self.formatDate(date, self.config.ariaDateFormat));

          if (compareDates(date, self.now) === 0) {
            self.todayDateElem = dayElement;
            dayElement.classList.add("today");
          }

          if (dateIsEnabled) {
            dayElement.tabIndex = -1;

            if (isDateSelected(date)) {
              dayElement.classList.add("selected");
              self.selectedDateElem = dayElement;

              if (self.config.mode === "range") {
                toggleClass(dayElement, "startRange", self.selectedDates[0] && compareDates(date, self.selectedDates[0], true) === 0);
                toggleClass(dayElement, "endRange", self.selectedDates[1] && compareDates(date, self.selectedDates[1], true) === 0);
                if (className === "nextMonthDay") dayElement.classList.add("inRange");
              }
            }
          } else {
            dayElement.classList.add("disabled");
          }

          if (self.config.mode === "range") {
            if (isDateInRange(date) && !isDateSelected(date)) dayElement.classList.add("inRange");
          }

          if (self.weekNumbers && className !== "prevMonthDay" && dayNumber % 7 === 1) {
            self.weekNumbers.insertAdjacentHTML("beforeend", "<span class='flatpickr-day'>" + self.config.getWeek(date) + "</span>");
          }

          triggerEvent("onDayCreate", dayElement);
          return dayElement;
        }

        function focusOnDay(currentInd, offset) {
          var currentIndex = currentInd !== undefined ? currentInd : document.activeElement.$i;
          var newIndex = (currentIndex || 0) + offset || 0,
              targetNode = Array.prototype.find.call(self.days.children, function (c, i) {
            return i >= newIndex && c.className.indexOf("MonthDay") === -1 && isEnabled(c.dateObj);
          });

          if (targetNode !== undefined) {
            targetNode.focus();
            if (self.config.mode === "range") onMouseOver(targetNode);
          }
        }

        function buildMonthDays(year, month) {
          var firstOfMonth = (new Date(year, month, 1).getDay() - self.l10n.firstDayOfWeek + 7) % 7;
          var prevMonthDays = self.utils.getDaysInMonth((month - 1 + 12) % 12);
          var daysInMonth = self.utils.getDaysInMonth(month),
              days = window.document.createDocumentFragment();
          var dayNumber = prevMonthDays + 1 - firstOfMonth,
              dayIndex = 0;

          for (; dayNumber <= prevMonthDays; dayNumber++, dayIndex++) {
            days.appendChild(createDay("prevMonthDay", new Date(year, month - 1, dayNumber), dayNumber, dayIndex));
          }

          for (dayNumber = 1; dayNumber <= daysInMonth; dayNumber++, dayIndex++) {
            days.appendChild(createDay("", new Date(year, month, dayNumber), dayNumber, dayIndex));
          }

          for (var dayNum = daysInMonth + 1; dayNum <= 42 - firstOfMonth && (self.config.showMonths === 1 || dayIndex % 7 !== 0); dayNum++, dayIndex++) {
            days.appendChild(createDay("nextMonthDay", new Date(year, month + 1, dayNum % daysInMonth), dayNum, dayIndex));
          }

          var dayContainer = createElement("div", "dayContainer");
          dayContainer.appendChild(days);
          return dayContainer;
        }

        function buildDays() {
          if (self.daysContainer === undefined) {
            return;
          }

          clearNode(self.daysContainer);
          var frag = document.createDocumentFragment();

          for (var i = 0; i < self.config.showMonths; i++) {
            var d = new Date(self.currentYear, self.currentMonth, 1);
            d.setMonth(self.currentMonth + i);
            frag.appendChild(buildMonthDays(d.getFullYear(), d.getMonth()));
          }

          self.daysContainer.appendChild(frag);
          self.days = self.daysContainer.firstChild;
        }

        function buildMonth() {
          var container = createElement("div", "flatpickr-month");
          var monthNavFragment = window.document.createDocumentFragment();
          var monthElement = createElement("span", "cur-month");
          monthElement.title = self.l10n.scrollTitle;
          var yearInput = createNumberInput("cur-year", {
            tabindex: "-1"
          });
          var yearElement = yearInput.childNodes[0];
          yearElement.title = self.l10n.scrollTitle;
          yearElement.setAttribute("aria-label", self.l10n.yearAriaLabel);
          if (self.config.minDate) yearElement.setAttribute("data-min", self.config.minDate.getFullYear().toString());

          if (self.config.maxDate) {
            yearElement.setAttribute("data-max", self.config.maxDate.getFullYear().toString());
            yearElement.disabled = !!self.config.minDate && self.config.minDate.getFullYear() === self.config.maxDate.getFullYear();
          }

          var currentMonth = createElement("div", "flatpickr-current-month");
          currentMonth.appendChild(monthElement);
          currentMonth.appendChild(yearInput);
          monthNavFragment.appendChild(currentMonth);
          container.appendChild(monthNavFragment);
          return {
            container: container,
            yearElement: yearElement,
            monthElement: monthElement
          };
        }

        function buildMonthNav() {
          self.monthNav = createElement("div", "flatpickr-months");
          self.yearElements = [];
          self.monthElements = [];
          self.prevMonthNav = createElement("span", "flatpickr-prev-month");
          self.prevMonthNav.innerHTML = self.config.prevArrow;
          self.nextMonthNav = createElement("span", "flatpickr-next-month");
          self.nextMonthNav.innerHTML = self.config.nextArrow;
          self.monthNav.appendChild(self.prevMonthNav);

          for (var m = self.config.showMonths; m--;) {
            var month = buildMonth();
            self.yearElements.push(month.yearElement);
            self.monthElements.push(month.monthElement);
            self.monthNav.appendChild(month.container);
          }

          self.monthNav.appendChild(self.nextMonthNav);
          Object.defineProperty(self, "_hidePrevMonthArrow", {
            get: function get() {
              return self.__hidePrevMonthArrow;
            },
            set: function set(bool) {
              if (self.__hidePrevMonthArrow !== bool) {
                toggleClass(self.prevMonthNav, "disabled", bool);
                self.__hidePrevMonthArrow = bool;
              }
            }
          });
          Object.defineProperty(self, "_hideNextMonthArrow", {
            get: function get() {
              return self.__hideNextMonthArrow;
            },
            set: function set(bool) {
              if (self.__hideNextMonthArrow !== bool) {
                toggleClass(self.nextMonthNav, "disabled", bool);
                self.__hideNextMonthArrow = bool;
              }
            }
          });
          self.currentYearElement = self.yearElements[0];
          updateNavigationCurrentMonth();
          return self.monthNav;
        }

        function buildTime() {
          self.calendarContainer.classList.add("hasTime");
          if (self.config.noCalendar) self.calendarContainer.classList.add("noCalendar");
          self.timeContainer = createElement("div", "flatpickr-time");
          self.timeContainer.tabIndex = -1;
          var separator = createElement("span", "flatpickr-time-separator", ":");
          var hourInput = createNumberInput("flatpickr-hour");
          self.hourElement = hourInput.childNodes[0];
          var minuteInput = createNumberInput("flatpickr-minute");
          self.minuteElement = minuteInput.childNodes[0];
          self.hourElement.tabIndex = self.minuteElement.tabIndex = -1;
          self.hourElement.value = pad(self.latestSelectedDateObj ? self.latestSelectedDateObj.getHours() : self.config.time_24hr ? self.config.defaultHour : military2ampm(self.config.defaultHour));
          self.minuteElement.value = pad(self.latestSelectedDateObj ? self.latestSelectedDateObj.getMinutes() : self.config.defaultMinute);
          self.hourElement.setAttribute("data-step", self.config.hourIncrement.toString());
          self.minuteElement.setAttribute("data-step", self.config.minuteIncrement.toString());
          self.hourElement.setAttribute("data-min", self.config.time_24hr ? "0" : "1");
          self.hourElement.setAttribute("data-max", self.config.time_24hr ? "23" : "12");
          self.minuteElement.setAttribute("data-min", "0");
          self.minuteElement.setAttribute("data-max", "59");
          self.timeContainer.appendChild(hourInput);
          self.timeContainer.appendChild(separator);
          self.timeContainer.appendChild(minuteInput);
          if (self.config.time_24hr) self.timeContainer.classList.add("time24hr");

          if (self.config.enableSeconds) {
            self.timeContainer.classList.add("hasSeconds");
            var secondInput = createNumberInput("flatpickr-second");
            self.secondElement = secondInput.childNodes[0];
            self.secondElement.value = pad(self.latestSelectedDateObj ? self.latestSelectedDateObj.getSeconds() : self.config.defaultSeconds);
            self.secondElement.setAttribute("data-step", self.minuteElement.getAttribute("data-step"));
            self.secondElement.setAttribute("data-min", self.minuteElement.getAttribute("data-min"));
            self.secondElement.setAttribute("data-max", self.minuteElement.getAttribute("data-max"));
            self.timeContainer.appendChild(createElement("span", "flatpickr-time-separator", ":"));
            self.timeContainer.appendChild(secondInput);
          }

          if (!self.config.time_24hr) {
            self.amPM = createElement("span", "flatpickr-am-pm", self.l10n.amPM[int((self.latestSelectedDateObj ? self.hourElement.value : self.config.defaultHour) > 11)]);
            self.amPM.title = self.l10n.toggleTitle;
            self.amPM.tabIndex = -1;
            self.timeContainer.appendChild(self.amPM);
          }

          return self.timeContainer;
        }

        function buildWeekdays() {
          if (!self.weekdayContainer) self.weekdayContainer = createElement("div", "flatpickr-weekdays");

          for (var i = self.config.showMonths; i--;) {
            var container = createElement("div", "flatpickr-weekdaycontainer");
            self.weekdayContainer.appendChild(container);
          }

          updateWeekdays();
          return self.weekdayContainer;
        }

        function updateWeekdays() {
          var firstDayOfWeek = self.l10n.firstDayOfWeek;
          var weekdays = self.l10n.weekdays.shorthand.concat();

          if (firstDayOfWeek > 0 && firstDayOfWeek < weekdays.length) {
            weekdays = weekdays.splice(firstDayOfWeek, weekdays.length).concat(weekdays.splice(0, firstDayOfWeek));
          }

          for (var i = self.config.showMonths; i--;) {
            self.weekdayContainer.children[i].innerHTML = "\n      <span class=flatpickr-weekday>\n        " + weekdays.join("</span><span class=flatpickr-weekday>") + "\n      </span>\n      ";
          }
        }

        function buildWeeks() {
          self.calendarContainer.classList.add("hasWeeks");
          var weekWrapper = createElement("div", "flatpickr-weekwrapper");
          weekWrapper.appendChild(createElement("span", "flatpickr-weekday", self.l10n.weekAbbreviation));
          var weekNumbers = createElement("div", "flatpickr-weeks");
          weekWrapper.appendChild(weekNumbers);
          return {
            weekWrapper: weekWrapper,
            weekNumbers: weekNumbers
          };
        }

        function changeMonth(value, is_offset, from_keyboard) {
          if (is_offset === void 0) {
            is_offset = true;
          }

          if (from_keyboard === void 0) {
            from_keyboard = false;
          }

          var delta = is_offset ? value : value - self.currentMonth;
          if (delta < 0 && self._hidePrevMonthArrow === true || delta > 0 && self._hideNextMonthArrow === true) return;
          self.currentMonth += delta;

          if (self.currentMonth < 0 || self.currentMonth > 11) {
            self.currentYear += self.currentMonth > 11 ? 1 : -1;
            self.currentMonth = (self.currentMonth + 12) % 12;
            triggerEvent("onYearChange");
          }

          buildDays();
          triggerEvent("onMonthChange");
          updateNavigationCurrentMonth();

          if (from_keyboard === true) {
            focusOnDay(undefined, 0);
          }
        }

        function clear(triggerChangeEvent) {
          if (triggerChangeEvent === void 0) {
            triggerChangeEvent = true;
          }

          self.input.value = "";
          if (self.altInput !== undefined) self.altInput.value = "";
          if (self.mobileInput !== undefined) self.mobileInput.value = "";
          self.selectedDates = [];
          self.latestSelectedDateObj = undefined;
          self.showTimeInput = false;

          if (self.config.enableTime === true) {
            if (self.config.minDate !== undefined) setHoursFromDate(self.config.minDate);else setHours(self.config.defaultHour, self.config.defaultMinute, self.config.defaultSeconds);
          }

          self.redraw();
          if (triggerChangeEvent) triggerEvent("onChange");
        }

        function close() {
          self.isOpen = false;

          if (!self.isMobile) {
            self.calendarContainer.classList.remove("open");

            self._input.classList.remove("active");
          }

          triggerEvent("onClose");
        }

        function destroy() {
          if (self.config !== undefined) triggerEvent("onDestroy");

          for (var i = self._handlers.length; i--;) {
            var h = self._handlers[i];
            h.element.removeEventListener(h.event, h.handler);
          }

          self._handlers = [];

          if (self.mobileInput) {
            if (self.mobileInput.parentNode) self.mobileInput.parentNode.removeChild(self.mobileInput);
            self.mobileInput = undefined;
          } else if (self.calendarContainer && self.calendarContainer.parentNode) self.calendarContainer.parentNode.removeChild(self.calendarContainer);

          if (self.altInput) {
            self.input.type = "text";
            if (self.altInput.parentNode) self.altInput.parentNode.removeChild(self.altInput);
            delete self.altInput;
          }

          if (self.input) {
            self.input.type = self.input._type;
            self.input.classList.remove("flatpickr-input");
            self.input.removeAttribute("readonly");
            self.input.value = "";
          }

          ["_showTimeInput", "latestSelectedDateObj", "_hideNextMonthArrow", "_hidePrevMonthArrow", "__hideNextMonthArrow", "__hidePrevMonthArrow", "isMobile", "isOpen", "selectedDateElem", "minDateHasTime", "maxDateHasTime", "days", "daysContainer", "_input", "_positionElement", "innerContainer", "rContainer", "monthNav", "todayDateElem", "calendarContainer", "weekdayContainer", "prevMonthNav", "nextMonthNav", "currentMonthElement", "currentYearElement", "navigationCurrentMonth", "selectedDateElem", "config"].forEach(function (k) {
            try {
              delete self[k];
            } catch (_) {}
          });
        }

        function isCalendarElem(elem) {
          if (self.config.appendTo && self.config.appendTo.contains(elem)) return true;
          return self.calendarContainer.contains(elem);
        }

        function documentClick(e) {
          if (self.isOpen && !self.config.inline) {
            var isCalendarElement = isCalendarElem(e.target);
            var isInput = e.target === self.input || e.target === self.altInput || self.element.contains(e.target) || e.path && e.path.indexOf && (~e.path.indexOf(self.input) || ~e.path.indexOf(self.altInput));
            var lostFocus = e.type === "blur" ? isInput && e.relatedTarget && !isCalendarElem(e.relatedTarget) : !isInput && !isCalendarElement;
            var isIgnored = !self.config.ignoredFocusElements.some(function (elem) {
              return elem.contains(e.target);
            });

            if (lostFocus && isIgnored) {
              self.close();

              if (self.config.mode === "range" && self.selectedDates.length === 1) {
                self.clear(false);
                self.redraw();
              }
            }
          }
        }

        function changeYear(newYear) {
          if (!newYear || self.config.minDate && newYear < self.config.minDate.getFullYear() || self.config.maxDate && newYear > self.config.maxDate.getFullYear()) return;
          var newYearNum = newYear,
              isNewYear = self.currentYear !== newYearNum;
          self.currentYear = newYearNum || self.currentYear;

          if (self.config.maxDate && self.currentYear === self.config.maxDate.getFullYear()) {
            self.currentMonth = Math.min(self.config.maxDate.getMonth(), self.currentMonth);
          } else if (self.config.minDate && self.currentYear === self.config.minDate.getFullYear()) {
            self.currentMonth = Math.max(self.config.minDate.getMonth(), self.currentMonth);
          }

          if (isNewYear) {
            self.redraw();
            triggerEvent("onYearChange");
          }
        }

        function isEnabled(date, timeless) {
          if (timeless === void 0) {
            timeless = true;
          }

          var dateToCheck = self.parseDate(date, undefined, timeless);
          if (self.config.minDate && dateToCheck && compareDates(dateToCheck, self.config.minDate, timeless !== undefined ? timeless : !self.minDateHasTime) < 0 || self.config.maxDate && dateToCheck && compareDates(dateToCheck, self.config.maxDate, timeless !== undefined ? timeless : !self.maxDateHasTime) > 0) return false;
          if (self.config.enable.length === 0 && self.config.disable.length === 0) return true;
          if (dateToCheck === undefined) return false;
          var bool = self.config.enable.length > 0,
              array = bool ? self.config.enable : self.config.disable;

          for (var i = 0, d; i < array.length; i++) {
            d = array[i];
            if (typeof d === "function" && d(dateToCheck)) return bool;else if (d instanceof Date && dateToCheck !== undefined && d.getTime() === dateToCheck.getTime()) return bool;else if (typeof d === "string" && dateToCheck !== undefined) {
              var parsed = self.parseDate(d, undefined, true);
              return parsed && parsed.getTime() === dateToCheck.getTime() ? bool : !bool;
            } else if (typeof d === "object" && dateToCheck !== undefined && d.from && d.to && dateToCheck.getTime() >= d.from.getTime() && dateToCheck.getTime() <= d.to.getTime()) return bool;
          }

          return !bool;
        }

        function onKeyDown(e) {
          var isInput = e.target === self._input;
          var calendarElem = isCalendarElem(e.target);
          var allowInput = self.config.allowInput;
          var allowKeydown = self.isOpen && (!allowInput || !isInput);
          var allowInlineKeydown = self.config.inline && isInput && !allowInput;

          if (e.keyCode === 13 && isInput) {
            if (allowInput) {
              self.setDate(self._input.value, true, e.target === self.altInput ? self.config.altFormat : self.config.dateFormat);
              return e.target.blur();
            } else self.open();
          } else if (calendarElem || allowKeydown || allowInlineKeydown) {
            var isTimeObj = !!self.timeContainer && self.timeContainer.contains(e.target);

            switch (e.keyCode) {
              case 13:
                if (isTimeObj) updateValue();else selectDate(e);
                break;

              case 27:
                e.preventDefault();
                focusAndClose();
                break;

              case 8:
              case 46:
                if (isInput && !self.config.allowInput) {
                  e.preventDefault();
                  self.clear();
                }

                break;

              case 37:
              case 39:
                if (!isTimeObj) {
                  e.preventDefault();

                  if (self.daysContainer) {
                    var _delta = isInput ? 0 : e.keyCode === 39 ? 1 : -1;

                    if (!e.ctrlKey) focusOnDay(undefined, _delta);else changeMonth(_delta, true, true);
                  }
                } else if (self.hourElement) self.hourElement.focus();

                break;

              case 38:
              case 40:
                e.preventDefault();
                var delta = e.keyCode === 40 ? 1 : -1;

                if (self.daysContainer && e.target.$i !== undefined) {
                  if (e.ctrlKey) {
                    changeYear(self.currentYear - delta);
                    focusOnDay(e.target.$i, 0);
                  } else if (!isTimeObj) focusOnDay(e.target.$i, delta * 7);
                } else if (self.config.enableTime) {
                  if (!isTimeObj && self.hourElement) self.hourElement.focus();
                  updateTime(e);

                  self._debouncedChange();
                }

                break;

              case 9:
                if (e.target === self.hourElement) {
                  e.preventDefault();
                  self.minuteElement.select();
                } else if (e.target === self.minuteElement && (self.secondElement || self.amPM)) {
                  e.preventDefault();
                  if (self.secondElement !== undefined) self.secondElement.focus();else if (self.amPM !== undefined) self.amPM.focus();
                } else if (e.target === self.secondElement && self.amPM) {
                  e.preventDefault();
                  self.amPM.focus();
                }

                break;

              default:
                break;
            }

            switch (e.key) {
              case self.l10n.amPM[0].charAt(0):
              case self.l10n.amPM[0].charAt(0).toLowerCase():
                if (self.amPM !== undefined && e.target === self.amPM) {
                  self.amPM.textContent = self.l10n.amPM[0];
                  setHoursFromInputs();
                  updateValue();
                }

                break;

              case self.l10n.amPM[1].charAt(0):
              case self.l10n.amPM[1].charAt(0).toLowerCase():
                if (self.amPM !== undefined && e.target === self.amPM) {
                  self.amPM.textContent = self.l10n.amPM[1];
                  setHoursFromInputs();
                  updateValue();
                }

                break;

              default:
                break;
            }

            triggerEvent("onKeyDown", e);
          }
        }

        function onMouseOver(elem) {
          if (self.selectedDates.length !== 1 || !elem.classList.contains("flatpickr-day") || elem.classList.contains("disabled")) return;
          var hoverDate = elem.dateObj.getTime(),
              initialDate = self.parseDate(self.selectedDates[0], undefined, true).getTime(),
              rangeStartDate = Math.min(hoverDate, self.selectedDates[0].getTime()),
              rangeEndDate = Math.max(hoverDate, self.selectedDates[0].getTime());
          var months = self.daysContainer.children,
              firstDay = months[0].children[0].dateObj.getTime(),
              lastDay = months[months.length - 1].lastChild.dateObj.getTime();
          var containsDisabled = false;
          var minRange = 0,
              maxRange = 0;

          for (var t = firstDay; t < lastDay; t += duration.DAY) {
            if (!isEnabled(new Date(t), true)) {
              containsDisabled = containsDisabled || t > rangeStartDate && t < rangeEndDate;
              if (t < initialDate && (!minRange || t > minRange)) minRange = t;else if (t > initialDate && (!maxRange || t < maxRange)) maxRange = t;
            }
          }

          for (var m = 0; m < self.config.showMonths; m++) {
            var month = self.daysContainer.children[m];
            var prevMonth = self.daysContainer.children[m - 1];

            var _loop = function _loop(i, l) {
              var dayElem = month.children[i],
                  date = dayElem.dateObj;
              var timestamp = date.getTime();
              var outOfRange = minRange > 0 && timestamp < minRange || maxRange > 0 && timestamp > maxRange;

              if (outOfRange) {
                dayElem.classList.add("notAllowed");
                ["inRange", "startRange", "endRange"].forEach(function (c) {
                  dayElem.classList.remove(c);
                });
                return "continue";
              } else if (containsDisabled && !outOfRange) return "continue";

              ["startRange", "inRange", "endRange", "notAllowed"].forEach(function (c) {
                dayElem.classList.remove(c);
              });
              elem.classList.add(hoverDate < self.selectedDates[0].getTime() ? "startRange" : "endRange");

              if (month.contains(elem) || !(m > 0 && prevMonth && prevMonth.lastChild.dateObj.getTime() >= timestamp)) {
                if (initialDate < hoverDate && timestamp === initialDate) dayElem.classList.add("startRange");else if (initialDate > hoverDate && timestamp === initialDate) dayElem.classList.add("endRange");
                if (timestamp >= minRange && (maxRange === 0 || timestamp <= maxRange) && isBetween(timestamp, initialDate, hoverDate)) dayElem.classList.add("inRange");
              }
            };

            for (var i = 0, l = month.children.length; i < l; i++) {
              var _ret = _loop(i, l);

              if (_ret === "continue") continue;
            }
          }
        }

        function onResize() {
          if (self.isOpen && !self.config.static && !self.config.inline) positionCalendar();
        }

        function open(e, positionElement) {
          if (positionElement === void 0) {
            positionElement = self._input;
          }

          if (self.isMobile === true) {
            if (e) {
              e.preventDefault();
              e.target && e.target.blur();
            }

            setTimeout(function () {
              self.mobileInput !== undefined && self.mobileInput.click();
            }, 0);
            triggerEvent("onOpen");
            return;
          }

          if (self._input.disabled || self.config.inline) return;
          var wasOpen = self.isOpen;
          self.isOpen = true;

          if (!wasOpen) {
            self.calendarContainer.classList.add("open");

            self._input.classList.add("active");

            triggerEvent("onOpen");
            positionCalendar(positionElement);
          }

          if (self.config.enableTime === true && self.config.noCalendar === true) {
            if (self.selectedDates.length === 0) {
              self.setDate(self.config.minDate !== undefined ? new Date(self.config.minDate.getTime()) : new Date().setHours(self.config.defaultHour, self.config.defaultMinute, self.config.defaultSeconds, 0), false);
              setHoursFromInputs();
              updateValue();
            }

            setTimeout(function () {
              return self.hourElement.select();
            }, 50);
          }
        }

        function minMaxDateSetter(type) {
          return function (date) {
            var dateObj = self.config["_" + type + "Date"] = self.parseDate(date, self.config.dateFormat);
            var inverseDateObj = self.config["_" + (type === "min" ? "max" : "min") + "Date"];

            if (dateObj !== undefined) {
              self[type === "min" ? "minDateHasTime" : "maxDateHasTime"] = dateObj.getHours() > 0 || dateObj.getMinutes() > 0 || dateObj.getSeconds() > 0;
            }

            if (self.selectedDates) {
              self.selectedDates = self.selectedDates.filter(function (d) {
                return isEnabled(d);
              });
              if (!self.selectedDates.length && type === "min") setHoursFromDate(dateObj);
              updateValue();
            }

            if (self.daysContainer) {
              redraw();
              if (dateObj !== undefined) self.currentYearElement[type] = dateObj.getFullYear().toString();else self.currentYearElement.removeAttribute(type);
              self.currentYearElement.disabled = !!inverseDateObj && dateObj !== undefined && inverseDateObj.getFullYear() === dateObj.getFullYear();
            }
          };
        }

        function parseConfig() {
          var boolOpts = ["wrap", "weekNumbers", "allowInput", "clickOpens", "time_24hr", "enableTime", "noCalendar", "altInput", "shorthandCurrentMonth", "inline", "static", "enableSeconds", "disableMobile"];
          var hooks = ["onChange", "onClose", "onDayCreate", "onDestroy", "onKeyDown", "onMonthChange", "onOpen", "onParseConfig", "onReady", "onValueUpdate", "onYearChange", "onPreCalendarPosition"];
          var userConfig = Object.assign({}, instanceConfig, JSON.parse(JSON.stringify(element.dataset || {})));
          var formats$$1 = {};
          self.config.parseDate = userConfig.parseDate;
          self.config.formatDate = userConfig.formatDate;
          Object.defineProperty(self.config, "enable", {
            get: function get() {
              return self.config._enable;
            },
            set: function set(dates) {
              self.config._enable = parseDateRules(dates);
            }
          });
          Object.defineProperty(self.config, "disable", {
            get: function get() {
              return self.config._disable;
            },
            set: function set(dates) {
              self.config._disable = parseDateRules(dates);
            }
          });

          if (!userConfig.dateFormat && userConfig.enableTime) {
            formats$$1.dateFormat = userConfig.noCalendar ? "H:i" + (userConfig.enableSeconds ? ":S" : "") : flatpickr.defaultConfig.dateFormat + " H:i" + (userConfig.enableSeconds ? ":S" : "");
          }

          if (userConfig.altInput && userConfig.enableTime && !userConfig.altFormat) {
            formats$$1.altFormat = userConfig.noCalendar ? "h:i" + (userConfig.enableSeconds ? ":S K" : " K") : flatpickr.defaultConfig.altFormat + (" h:i" + (userConfig.enableSeconds ? ":S" : "") + " K");
          }

          Object.defineProperty(self.config, "minDate", {
            get: function get() {
              return self.config._minDate;
            },
            set: minMaxDateSetter("min")
          });
          Object.defineProperty(self.config, "maxDate", {
            get: function get() {
              return self.config._maxDate;
            },
            set: minMaxDateSetter("max")
          });

          var minMaxTimeSetter = function minMaxTimeSetter(type) {
            return function (val) {
              self.config[type === "min" ? "_minTime" : "_maxTime"] = self.parseDate(val, "H:i");
            };
          };

          Object.defineProperty(self.config, "minTime", {
            get: function get() {
              return self.config._minTime;
            },
            set: minMaxTimeSetter("min")
          });
          Object.defineProperty(self.config, "maxTime", {
            get: function get() {
              return self.config._maxTime;
            },
            set: minMaxTimeSetter("max")
          });
          Object.assign(self.config, formats$$1, userConfig);

          for (var i = 0; i < boolOpts.length; i++) {
            self.config[boolOpts[i]] = self.config[boolOpts[i]] === true || self.config[boolOpts[i]] === "true";
          }

          for (var _i = hooks.length; _i--;) {
            if (self.config[hooks[_i]] !== undefined) {
              self.config[hooks[_i]] = arrayify(self.config[hooks[_i]] || []).map(bindToInstance);
            }
          }

          if (self.config.mode === "time") {
            self.config.noCalendar = true;
            self.config.enableTime = true;
          }

          for (var _i2 = 0; _i2 < self.config.plugins.length; _i2++) {
            var pluginConf = self.config.plugins[_i2](self) || {};

            for (var key in pluginConf) {
              if (~hooks.indexOf(key)) {
                self.config[key] = arrayify(pluginConf[key]).map(bindToInstance).concat(self.config[key]);
              } else if (typeof userConfig[key] === "undefined") self.config[key] = pluginConf[key];
            }
          }

          self.isMobile = !self.config.disableMobile && !self.config.inline && self.config.mode === "single" && !self.config.disable.length && !self.config.enable.length && !self.config.weekNumbers && /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
          triggerEvent("onParseConfig");
        }

        function setupLocale() {
          if (typeof self.config.locale !== "object" && typeof flatpickr.l10ns[self.config.locale] === "undefined") self.config.errorHandler(new Error("flatpickr: invalid locale " + self.config.locale));
          self.l10n = Object.assign({}, flatpickr.l10ns.default, typeof self.config.locale === "object" ? self.config.locale : self.config.locale !== "default" ? flatpickr.l10ns[self.config.locale] : undefined);
          tokenRegex.K = "(" + self.l10n.amPM[0] + "|" + self.l10n.amPM[1] + "|" + self.l10n.amPM[0].toLowerCase() + "|" + self.l10n.amPM[1].toLowerCase() + ")";
          self.formatDate = createDateFormatter(self);
        }

        function positionCalendar(customPositionElement) {
          if (self.calendarContainer === undefined) return;
          triggerEvent("onPreCalendarPosition");
          var positionElement = customPositionElement || self._positionElement;
          var calendarHeight = Array.prototype.reduce.call(self.calendarContainer.children, function (acc, child) {
            return acc + child.offsetHeight;
          }, 0),
              calendarWidth = self.calendarContainer.offsetWidth,
              configPos = self.config.position,
              inputBounds = positionElement.getBoundingClientRect(),
              distanceFromBottom = window.innerHeight - inputBounds.bottom,
              showOnTop = configPos === "above" || configPos !== "below" && distanceFromBottom < calendarHeight && inputBounds.top > calendarHeight;
          var top = window.pageYOffset + inputBounds.top + (!showOnTop ? positionElement.offsetHeight + 2 : -calendarHeight - 2);
          toggleClass(self.calendarContainer, "arrowTop", !showOnTop);
          toggleClass(self.calendarContainer, "arrowBottom", showOnTop);
          if (self.config.inline) return;
          var left = window.pageXOffset + inputBounds.left;
          var right = window.document.body.offsetWidth - inputBounds.right;
          var rightMost = left + calendarWidth > window.document.body.offsetWidth;
          toggleClass(self.calendarContainer, "rightMost", rightMost);
          if (self.config.static) return;
          self.calendarContainer.style.top = top + "px";

          if (!rightMost) {
            self.calendarContainer.style.left = left + "px";
            self.calendarContainer.style.right = "auto";
          } else {
            self.calendarContainer.style.left = "auto";
            self.calendarContainer.style.right = right + "px";
          }
        }

        function redraw() {
          if (self.config.noCalendar || self.isMobile) return;
          updateWeekdays();
          updateNavigationCurrentMonth();
          buildDays();
        }

        function focusAndClose() {
          self._input.focus();

          if (window.navigator.userAgent.indexOf("MSIE") !== -1 || navigator.msMaxTouchPoints !== undefined) {
            setTimeout(self.close, 0);
          } else {
            self.close();
          }
        }

        function selectDate(e) {
          e.preventDefault();
          e.stopPropagation();

          var isSelectable = function isSelectable(day) {
            return day.classList && day.classList.contains("flatpickr-day") && !day.classList.contains("disabled") && !day.classList.contains("notAllowed");
          };

          var t = findParent(e.target, isSelectable);
          if (t === undefined) return;
          var target = t;
          var selectedDate = self.latestSelectedDateObj = new Date(target.dateObj.getTime());
          var shouldChangeMonth = selectedDate.getMonth() !== self.currentMonth && self.config.mode !== "range";
          self.selectedDateElem = target;
          if (self.config.mode === "single") self.selectedDates = [selectedDate];else if (self.config.mode === "multiple") {
            var selectedIndex = isDateSelected(selectedDate);
            if (selectedIndex) self.selectedDates.splice(parseInt(selectedIndex), 1);else self.selectedDates.push(selectedDate);
          } else if (self.config.mode === "range") {
            if (self.selectedDates.length === 2) self.clear(false);
            self.selectedDates.push(selectedDate);
            if (compareDates(selectedDate, self.selectedDates[0], true) !== 0) self.selectedDates.sort(function (a, b) {
              return a.getTime() - b.getTime();
            });
          }
          setHoursFromInputs();

          if (shouldChangeMonth) {
            var isNewYear = self.currentYear !== selectedDate.getFullYear();
            self.currentYear = selectedDate.getFullYear();
            self.currentMonth = selectedDate.getMonth();
            if (isNewYear) triggerEvent("onYearChange");
            triggerEvent("onMonthChange");
          }

          buildDays();
          if (self.config.minDate && self.minDateHasTime && self.config.enableTime && compareDates(selectedDate, self.config.minDate) === 0) setHoursFromDate(self.config.minDate);
          updateValue();
          if (self.config.enableTime) setTimeout(function () {
            return self.showTimeInput = true;
          }, 50);

          if (self.config.mode === "range") {
            if (self.selectedDates.length === 1) {
              onMouseOver(target);
            } else updateNavigationCurrentMonth();
          }

          if (!shouldChangeMonth && self.config.mode !== "range") focusOnDay(target.$i, 0);else self.selectedDateElem && self.selectedDateElem.focus();
          if (self.hourElement !== undefined) setTimeout(function () {
            return self.hourElement !== undefined && self.hourElement.select();
          }, 451);

          if (self.config.closeOnSelect) {
            var single = self.config.mode === "single" && !self.config.enableTime;
            var range = self.config.mode === "range" && self.selectedDates.length === 2 && !self.config.enableTime;

            if (single || range) {
              focusAndClose();
            }
          }

          triggerChange();
        }

        var CALLBACKS = {
          locale: [setupLocale]
        };

        function set(option, value) {
          if (option !== null && typeof option === "object") Object.assign(self.config, option);else {
            self.config[option] = value;
            if (CALLBACKS[option] !== undefined) CALLBACKS[option].forEach(function (x) {
              return x();
            });
          }
          self.redraw();
          jumpToDate();
        }

        function setSelectedDate(inputDate, format) {
          var dates = [];
          if (inputDate instanceof Array) dates = inputDate.map(function (d) {
            return self.parseDate(d, format);
          });else if (inputDate instanceof Date || typeof inputDate === "number") dates = [self.parseDate(inputDate, format)];else if (typeof inputDate === "string") {
            switch (self.config.mode) {
              case "single":
                dates = [self.parseDate(inputDate, format)];
                break;

              case "multiple":
                dates = inputDate.split(self.config.conjunction).map(function (date) {
                  return self.parseDate(date, format);
                });
                break;

              case "range":
                dates = inputDate.split(self.l10n.rangeSeparator).map(function (date) {
                  return self.parseDate(date, format);
                });
                break;

              default:
                break;
            }
          } else self.config.errorHandler(new Error("Invalid date supplied: " + JSON.stringify(inputDate)));
          self.selectedDates = dates.filter(function (d) {
            return d instanceof Date && isEnabled(d, false);
          });
          if (self.config.mode === "range") self.selectedDates.sort(function (a, b) {
            return a.getTime() - b.getTime();
          });
        }

        function setDate(date, triggerChange, format) {
          if (triggerChange === void 0) {
            triggerChange = false;
          }

          if (format === void 0) {
            format = self.config.dateFormat;
          }

          if (date !== 0 && !date) return self.clear(triggerChange);
          setSelectedDate(date, format);
          self.showTimeInput = self.selectedDates.length > 0;
          self.latestSelectedDateObj = self.selectedDates[0];
          self.redraw();
          jumpToDate();
          setHoursFromDate();
          updateValue(triggerChange);
          if (triggerChange) triggerEvent("onChange");
        }

        function parseDateRules(arr) {
          return arr.map(function (rule) {
            if (typeof rule === "string" || typeof rule === "number" || rule instanceof Date) {
              return self.parseDate(rule, undefined, true);
            } else if (rule && typeof rule === "object" && rule.from && rule.to) return {
              from: self.parseDate(rule.from, undefined),
              to: self.parseDate(rule.to, undefined)
            };

            return rule;
          }).filter(function (x) {
            return x;
          });
        }

        function setupDates() {
          self.selectedDates = [];
          self.now = self.parseDate(self.config.now) || new Date();
          var preloadedDate = self.config.defaultDate || self.input.value;
          if (preloadedDate) setSelectedDate(preloadedDate, self.config.dateFormat);
          var initialDate = self.selectedDates.length > 0 ? self.selectedDates[0] : self.config.minDate && self.config.minDate.getTime() > self.now.getTime() ? self.config.minDate : self.config.maxDate && self.config.maxDate.getTime() < self.now.getTime() ? self.config.maxDate : self.now;
          self.currentYear = initialDate.getFullYear();
          self.currentMonth = initialDate.getMonth();
          if (self.selectedDates.length > 0) self.latestSelectedDateObj = self.selectedDates[0];
          if (self.config.minTime !== undefined) self.config.minTime = self.parseDate(self.config.minTime, "H:i");
          if (self.config.maxTime !== undefined) self.config.maxTime = self.parseDate(self.config.maxTime, "H:i");
          self.minDateHasTime = !!self.config.minDate && (self.config.minDate.getHours() > 0 || self.config.minDate.getMinutes() > 0 || self.config.minDate.getSeconds() > 0);
          self.maxDateHasTime = !!self.config.maxDate && (self.config.maxDate.getHours() > 0 || self.config.maxDate.getMinutes() > 0 || self.config.maxDate.getSeconds() > 0);
          Object.defineProperty(self, "showTimeInput", {
            get: function get() {
              return self._showTimeInput;
            },
            set: function set(bool) {
              self._showTimeInput = bool;
              if (self.calendarContainer) toggleClass(self.calendarContainer, "showTimeInput", bool);
              self.isOpen && positionCalendar();
            }
          });
        }

        function setupInputs() {
          self.input = self.config.wrap ? element.querySelector("[data-input]") : element;

          if (!self.input) {
            self.config.errorHandler(new Error("Invalid input element specified"));
            return;
          }

          self.input._type = self.input.type;
          self.input.type = "text";
          self.input.classList.add("flatpickr-input");
          self._input = self.input;

          if (self.config.altInput) {
            self.altInput = createElement(self.input.nodeName, self.input.className + " " + self.config.altInputClass);
            self._input = self.altInput;
            self.altInput.placeholder = self.input.placeholder;
            self.altInput.disabled = self.input.disabled;
            self.altInput.required = self.input.required;
            self.altInput.tabIndex = self.input.tabIndex;
            self.altInput.type = "text";
            self.input.type = "hidden";
            if (!self.config.static && self.input.parentNode) self.input.parentNode.insertBefore(self.altInput, self.input.nextSibling);
          }

          if (!self.config.allowInput) self._input.setAttribute("readonly", "readonly");
          self._positionElement = self.config.positionElement || self._input;
        }

        function setupMobile() {
          var inputType = self.config.enableTime ? self.config.noCalendar ? "time" : "datetime-local" : "date";
          self.mobileInput = createElement("input", self.input.className + " flatpickr-mobile");
          self.mobileInput.step = self.input.getAttribute("step") || "any";
          self.mobileInput.tabIndex = 1;
          self.mobileInput.type = inputType;
          self.mobileInput.disabled = self.input.disabled;
          self.mobileInput.required = self.input.required;
          self.mobileInput.placeholder = self.input.placeholder;
          self.mobileFormatStr = inputType === "datetime-local" ? "Y-m-d\\TH:i:S" : inputType === "date" ? "Y-m-d" : "H:i:S";

          if (self.selectedDates.length > 0) {
            self.mobileInput.defaultValue = self.mobileInput.value = self.formatDate(self.selectedDates[0], self.mobileFormatStr);
          }

          if (self.config.minDate) self.mobileInput.min = self.formatDate(self.config.minDate, "Y-m-d");
          if (self.config.maxDate) self.mobileInput.max = self.formatDate(self.config.maxDate, "Y-m-d");
          self.input.type = "hidden";
          if (self.altInput !== undefined) self.altInput.type = "hidden";

          try {
            if (self.input.parentNode) self.input.parentNode.insertBefore(self.mobileInput, self.input.nextSibling);
          } catch (_a) {}

          bind(self.mobileInput, "change", function (e) {
            self.setDate(e.target.value, false, self.mobileFormatStr);
            triggerEvent("onChange");
            triggerEvent("onClose");
          });
        }

        function toggle() {
          if (self.isOpen) return self.close();
          self.open();
        }

        function triggerEvent(event, data) {
          var hooks = self.config[event];

          if (hooks !== undefined && hooks.length > 0) {
            for (var i = 0; hooks[i] && i < hooks.length; i++) {
              hooks[i](self.selectedDates, self.input.value, self, data);
            }
          }

          if (event === "onChange") {
            self.input.dispatchEvent(createEvent("change"));
            self.input.dispatchEvent(createEvent("input"));
          }
        }

        function createEvent(name) {
          var e = document.createEvent("Event");
          e.initEvent(name, true, true);
          return e;
        }

        function isDateSelected(date) {
          for (var i = 0; i < self.selectedDates.length; i++) {
            if (compareDates(self.selectedDates[i], date) === 0) return "" + i;
          }

          return false;
        }

        function isDateInRange(date) {
          if (self.config.mode !== "range" || self.selectedDates.length < 2) return false;
          return compareDates(date, self.selectedDates[0]) >= 0 && compareDates(date, self.selectedDates[1]) <= 0;
        }

        function updateNavigationCurrentMonth() {
          if (self.config.noCalendar || self.isMobile || !self.monthNav) return;
          self.yearElements.forEach(function (yearElement, i) {
            var d = new Date(self.currentYear, self.currentMonth, 1);
            d.setMonth(self.currentMonth + i);
            self.monthElements[i].textContent = monthToStr(d.getMonth(), self.config.shorthandCurrentMonth, self.l10n) + " ";
            yearElement.value = d.getFullYear().toString();
          });
          self._hidePrevMonthArrow = self.config.minDate !== undefined && (self.currentYear === self.config.minDate.getFullYear() ? self.currentMonth <= self.config.minDate.getMonth() : self.currentYear < self.config.minDate.getFullYear());
          self._hideNextMonthArrow = self.config.maxDate !== undefined && (self.currentYear === self.config.maxDate.getFullYear() ? self.currentMonth + 1 > self.config.maxDate.getMonth() : self.currentYear > self.config.maxDate.getFullYear());
        }

        function updateValue(triggerChange) {
          if (triggerChange === void 0) {
            triggerChange = true;
          }

          if (self.selectedDates.length === 0) return self.clear(triggerChange);

          if (self.mobileInput !== undefined && self.mobileFormatStr) {
            self.mobileInput.value = self.latestSelectedDateObj !== undefined ? self.formatDate(self.latestSelectedDateObj, self.mobileFormatStr) : "";
          }

          var joinChar = self.config.mode !== "range" ? self.config.conjunction : self.l10n.rangeSeparator;
          self.input.value = self.selectedDates.map(function (dObj) {
            return self.formatDate(dObj, self.config.dateFormat);
          }).join(joinChar);

          if (self.altInput !== undefined) {
            self.altInput.value = self.selectedDates.map(function (dObj) {
              return self.formatDate(dObj, self.config.altFormat);
            }).join(joinChar);
          }

          if (triggerChange !== false) triggerEvent("onValueUpdate");
        }

        function onMonthNavClick(e) {
          var isPrevMonth = self.prevMonthNav.contains(e.target);
          var isNextMonth = self.nextMonthNav.contains(e.target);

          if (isPrevMonth || isNextMonth) {
            changeMonth(isPrevMonth ? -1 : 1);
          } else if (self.yearElements.indexOf(e.target) >= 0) {
            e.preventDefault();
            e.target.select();
          } else if (e.target.classList.contains("arrowUp")) {
            self.changeYear(self.currentYear + 1);
          } else if (e.target.classList.contains("arrowDown")) {
            self.changeYear(self.currentYear - 1);
          }
        }

        function timeWrapper(e) {
          e.preventDefault();
          var isKeyDown = e.type === "keydown",
              input = e.target;

          if (self.amPM !== undefined && e.target === self.amPM) {
            self.amPM.textContent = self.l10n.amPM[int(self.amPM.textContent === self.l10n.amPM[0])];
          }

          var min = parseFloat(input.getAttribute("data-min")),
              max = parseFloat(input.getAttribute("data-max")),
              step = parseFloat(input.getAttribute("data-step")),
              curValue = parseInt(input.value, 10),
              delta = e.delta || (isKeyDown ? e.which === 38 ? 1 : -1 : 0);
          var newValue = curValue + step * delta;

          if (typeof input.value !== "undefined" && input.value.length === 2) {
            var isHourElem = input === self.hourElement,
                isMinuteElem = input === self.minuteElement;

            if (newValue < min) {
              newValue = max + newValue + int(!isHourElem) + (int(isHourElem) && int(!self.amPM));
              if (isMinuteElem) incrementNumInput(undefined, -1, self.hourElement);
            } else if (newValue > max) {
              newValue = input === self.hourElement ? newValue - max - int(!self.amPM) : min;
              if (isMinuteElem) incrementNumInput(undefined, 1, self.hourElement);
            }

            if (self.amPM && isHourElem && (step === 1 ? newValue + curValue === 23 : Math.abs(newValue - curValue) > step)) {
              self.amPM.textContent = self.l10n.amPM[int(self.amPM.textContent === self.l10n.amPM[0])];
            }

            input.value = pad(newValue);
          }
        }

        init();
        return self;
      }

      function _flatpickr(nodeList, config) {
        var nodes = Array.prototype.slice.call(nodeList);
        var instances = [];

        for (var i = 0; i < nodes.length; i++) {
          var node = nodes[i];

          try {
            if (node.getAttribute("data-fp-omit") !== null) continue;

            if (node._flatpickr !== undefined) {
              node._flatpickr.destroy();

              node._flatpickr = undefined;
            }

            node._flatpickr = FlatpickrInstance(node, config || {});
            instances.push(node._flatpickr);
          } catch (e) {
            console.error(e);
          }
        }

        return instances.length === 1 ? instances[0] : instances;
      }

      if (typeof HTMLElement !== "undefined") {
        HTMLCollection.prototype.flatpickr = NodeList.prototype.flatpickr = function (config) {
          return _flatpickr(this, config);
        };

        HTMLElement.prototype.flatpickr = function (config) {
          return _flatpickr([this], config);
        };
      }

      var flatpickr = function flatpickr(selector, config) {
        if (selector instanceof NodeList) return _flatpickr(selector, config);else if (typeof selector === "string") return _flatpickr(window.document.querySelectorAll(selector), config);
        return _flatpickr([selector], config);
      };

      flatpickr.defaultConfig = defaults;
      flatpickr.l10ns = {
        en: Object.assign({}, english),
        default: Object.assign({}, english)
      };

      flatpickr.localize = function (l10n) {
        flatpickr.l10ns.default = Object.assign({}, flatpickr.l10ns.default, l10n);
      };

      flatpickr.setDefaults = function (config) {
        flatpickr.defaultConfig = Object.assign({}, flatpickr.defaultConfig, config);
      };

      flatpickr.parseDate = createDateParser({});
      flatpickr.formatDate = createDateFormatter({});
      flatpickr.compareDates = compareDates;

      if (typeof jQuery !== "undefined") {
        jQuery.fn.flatpickr = function (config) {
          return _flatpickr(this, config);
        };
      }

      Date.prototype.fp_incr = function (days) {
        return new Date(this.getFullYear(), this.getMonth(), this.getDate() + (typeof days === "string" ? parseInt(days, 10) : days));
      };

      return flatpickr;

  })));
  });

  var l10n = createCommonjsModule(function (module, exports) {
  /* flatpickr v4.4.1, @license MIT */
  (function (global, factory) {
      factory(exports);
  }(commonjsGlobal, (function (exports) {
      var fp = typeof window !== "undefined" && window.flatpickr !== undefined ? window.flatpickr : {
        l10ns: {}
      };
      var Arabic = {
        weekdays: {
          shorthand: ["أحد", "اثنين", "ثلاثاء", "أربعاء", "خميس", "جمعة", "سبت"],
          longhand: ["الأحد", "الاثنين", "الثلاثاء", "الأربعاء", "الخميس", "الجمعة", "السبت"]
        },
        months: {
          shorthand: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
          longhand: ["يناير", "فبراير", "مارس", "أبريل", "مايو", "يونيو", "يوليو", "أغسطس", "سبتمبر", "أكتوبر", "نوفمبر", "ديسمبر"]
        }
      };
      fp.l10ns.ar = Arabic;
      fp.l10ns;

      var fp$1 = typeof window !== "undefined" && window.flatpickr !== undefined ? window.flatpickr : {
        l10ns: {}
      };
      var Austria = {
        weekdays: {
          shorthand: ["So", "Mo", "Di", "Mi", "Do", "Fr", "Sa"],
          longhand: ["Sonntag", "Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag"]
        },
        months: {
          shorthand: ["Jän", "Feb", "Mär", "Apr", "Mai", "Jun", "Jul", "Aug", "Sep", "Okt", "Nov", "Dez"],
          longhand: ["Jänner", "Februar", "März", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Dezember"]
        },
        firstDayOfWeek: 1,
        weekAbbreviation: "KW",
        rangeSeparator: " bis ",
        scrollTitle: "Zum Ändern scrollen",
        toggleTitle: "Zum Umschalten klicken"
      };
      fp$1.l10ns.at = Austria;
      fp$1.l10ns;

      var fp$2 = typeof window !== "undefined" && window.flatpickr !== undefined ? window.flatpickr : {
        l10ns: {}
      };
      var Belarusian = {
        weekdays: {
          shorthand: ["Нд", "Пн", "Аў", "Ср", "Чц", "Пт", "Сб"],
          longhand: ["Нядзеля", "Панядзелак", "Аўторак", "Серада", "Чацвер", "Пятніца", "Субота"]
        },
        months: {
          shorthand: ["Сту", "Лют", "Сак", "Кра", "Тра", "Чэр", "Ліп", "Жні", "Вер", "Кас", "Ліс", "Сне"],
          longhand: ["Студзень", "Люты", "Сакавік", "Красавік", "Травень", "Чэрвень", "Ліпень", "Жнівень", "Верасень", "Кастрычнік", "Лістапад", "Снежань"]
        },
        firstDayOfWeek: 1,
        ordinal: function ordinal() {
          return "";
        },
        rangeSeparator: " — ",
        weekAbbreviation: "Тыд.",
        scrollTitle: "Пракруціце для павелічэння",
        toggleTitle: "Націсніце для пераключэння",
        amPM: ["ДП", "ПП"],
        yearAriaLabel: "Год"
      };
      fp$2.l10ns.be = Belarusian;
      fp$2.l10ns;

      var fp$3 = typeof window !== "undefined" && window.flatpickr !== undefined ? window.flatpickr : {
        l10ns: {}
      };
      var Bulgarian = {
        weekdays: {
          shorthand: ["Нд", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"],
          longhand: ["Неделя", "Понеделник", "Вторник", "Сряда", "Четвъртък", "Петък", "Събота"]
        },
        months: {
          shorthand: ["Яну", "Фев", "Март", "Апр", "Май", "Юни", "Юли", "Авг", "Сеп", "Окт", "Ное", "Дек"],
          longhand: ["Януари", "Февруари", "Март", "Април", "Май", "Юни", "Юли", "Август", "Септември", "Октомври", "Ноември", "Декември"]
        }
      };
      fp$3.l10ns.bg = Bulgarian;
      fp$3.l10ns;

      var fp$4 = typeof window !== "undefined" && window.flatpickr !== undefined ? window.flatpickr : {
        l10ns: {}
      };
      var Bangla = {
        weekdays: {
          shorthand: ["রবি", "সোম", "মঙ্গল", "বুধ", "বৃহস্পতি", "শুক্র", "শনি"],
          longhand: ["রবিবার", "সোমবার", "মঙ্গলবার", "বুধবার", "বৃহস্পতিবার", "শুক্রবার", "শনিবার"]
        },
        months: {
          shorthand: ["জানু", "ফেব্রু", "মার্চ", "এপ্রিল", "মে", "জুন", "জুলাই", "আগ", "সেপ্টে", "অক্টো", "নভে", "ডিসে"],
          longhand: ["জানুয়ারী", "ফেব্রুয়ারী", "মার্চ", "এপ্রিল", "মে", "জুন", "জুলাই", "আগস্ট", "সেপ্টেম্বর", "অক্টোবর", "নভেম্বর", "ডিসেম্বর"]
        }
      };
      fp$4.l10ns.bn = Bangla;
      fp$4.l10ns;

      var fp$5 = typeof window !== "undefined" && window.flatpickr !== undefined ? window.flatpickr : {
        l10ns: {}
      };
      var Catalan = {
        weekdays: {
          shorthand: ["Dg", "Dl", "Dt", "Dc", "Dj", "Dv", "Ds"],
          longhand: ["Diumenge", "Dilluns", "Dimarts", "Dimecres", "Dijous", "Divendres", "Dissabte"]
        },
        months: {
          shorthand: ["Gen", "Febr", "Març", "Abr", "Maig", "Juny", "Jul", "Ag", "Set", "Oct", "Nov", "Des"],
          longhand: ["Gener", "Febrer", "Març", "Abril", "Maig", "Juny", "Juliol", "Agost", "Setembre", "Octubre", "Novembre", "Desembre"]
        },
        ordinal: function ordinal(nth) {
          var s = nth % 100;
          if (s > 3 && s < 21) return "è";

          switch (s % 10) {
            case 1:
              return "r";

            case 2:
              return "n";

            case 3:
              return "r";

            case 4:
              return "t";

            default:
              return "è";
          }
        },
        firstDayOfWeek: 1
      };
      fp$5.l10ns.cat = Catalan;
      fp$5.l10ns;

      var fp$6 = typeof window !== "undefined" && window.flatpickr !== undefined ? window.flatpickr : {
        l10ns: {}
      };
      var Czech = {
        weekdays: {
          shorthand: ["Ne", "Po", "Út", "St", "Čt", "Pá", "So"],
          longhand: ["Neděle", "Pondělí", "Úterý", "Středa", "Čtvrtek", "Pátek", "Sobota"]
        },
        months: {
          shorthand: ["Led", "Ún", "Bře", "Dub", "Kvě", "Čer", "Čvc", "Srp", "Zář", "Říj", "Lis", "Pro"],
          longhand: ["Leden", "Únor", "Březen", "Duben", "Květen", "Červen", "Červenec", "Srpen", "Září", "Říjen", "Listopad", "Prosinec"]
        },
        firstDayOfWeek: 1,
        ordinal: function ordinal() {
          return ".";
        },
        rangeSeparator: " do ",
        weekAbbreviation: "Týd.",
        scrollTitle: "Rolujte pro změnu",
        toggleTitle: "Přepnout dopoledne/odpoledne",
        amPM: ["dop.", "odp."],
        yearAriaLabel: "Rok"
      };
      fp$6.l10ns.cs = Czech;
      fp$6.l10ns;

      var fp$7 = typeof window !== "undefined" && window.flatpickr !== undefined ? window.flatpickr : {
        l10ns: {}
      };
      var Welsh = {
        weekdays: {
          shorthand: ["Sul", "Llun", "Maw", "Mer", "Iau", "Gwe", "Sad"],
          longhand: ["Dydd Sul", "Dydd Llun", "Dydd Mawrth", "Dydd Mercher", "Dydd Iau", "Dydd Gwener", "Dydd Sadwrn"]
        },
        months: {
          shorthand: ["Ion", "Chwef", "Maw", "Ebr", "Mai", "Meh", "Gorff", "Awst", "Medi", "Hyd", "Tach", "Rhag"],
          longhand: ["Ionawr", "Chwefror", "Mawrth", "Ebrill", "Mai", "Mehefin", "Gorffennaf", "Awst", "Medi", "Hydref", "Tachwedd", "Rhagfyr"]
        },
        firstDayOfWeek: 1,
        ordinal: function ordinal(nth) {
          if (nth === 1) return "af";
          if (nth === 2) return "ail";
          if (nth === 3 || nth === 4) return "ydd";
          if (nth === 5 || nth === 6) return "ed";
          if (nth >= 7 && nth <= 10 || nth == 12 || nth == 15 || nth == 18 || nth == 20) return "fed";
          if (nth == 11 || nth == 13 || nth == 14 || nth == 16 || nth == 17 || nth == 19) return "eg";
          if (nth >= 21 && nth <= 39) return "ain";
          return "";
        }
      };
      fp$7.l10ns.cy = Welsh;
      fp$7.l10ns;

      var fp$8 = typeof window !== "undefined" && window.flatpickr !== undefined ? window.flatpickr : {
        l10ns: {}
      };
      var Danish = {
        weekdays: {
          shorthand: ["søn", "man", "tir", "ons", "tors", "fre", "lør"],
          longhand: ["søndag", "mandag", "tirsdag", "onsdag", "torsdag", "fredag", "lørdag"]
        },
        months: {
          shorthand: ["jan", "feb", "mar", "apr", "maj", "jun", "jul", "aug", "sep", "okt", "nov", "dec"],
          longhand: ["januar", "februar", "marts", "april", "maj", "juni", "juli", "august", "september", "oktober", "november", "december"]
        },
        ordinal: function ordinal() {
          return ".";
        },
        firstDayOfWeek: 1,
        rangeSeparator: " til ",
        weekAbbreviation: "uge"
      };
      fp$8.l10ns.da = Danish;
      fp$8.l10ns;

      var fp$9 = typeof window !== "undefined" && window.flatpickr !== undefined ? window.flatpickr : {
        l10ns: {}
      };
      var German = {
        weekdays: {
          shorthand: ["So", "Mo", "Di", "Mi", "Do", "Fr", "Sa"],
          longhand: ["Sonntag", "Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag"]
        },
        months: {
          shorthand: ["Jan", "Feb", "Mär", "Apr", "Mai", "Jun", "Jul", "Aug", "Sep", "Okt", "Nov", "Dez"],
          longhand: ["Januar", "Februar", "März", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Dezember"]
        },
        firstDayOfWeek: 1,
        weekAbbreviation: "KW",
        rangeSeparator: " bis ",
        scrollTitle: "Zum Ändern scrollen",
        toggleTitle: "Zum Umschalten klicken"
      };
      fp$9.l10ns.de = German;
      fp$9.l10ns;

      var english = {
        weekdays: {
          shorthand: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
          longhand: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
        },
        months: {
          shorthand: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
          longhand: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
        },
        daysInMonth: [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
        firstDayOfWeek: 0,
        ordinal: function ordinal(nth) {
          var s = nth % 100;
          if (s > 3 && s < 21) return "th";

          switch (s % 10) {
            case 1:
              return "st";

            case 2:
              return "nd";

            case 3:
              return "rd";

            default:
              return "th";
          }
        },
        rangeSeparator: " to ",
        weekAbbreviation: "Wk",
        scrollTitle: "Scroll to increment",
        toggleTitle: "Click to toggle",
        amPM: ["AM", "PM"],
        yearAriaLabel: "Year"
      };

      var fp$10 = typeof window !== "undefined" && window.flatpickr !== undefined ? window.flatpickr : {
        l10ns: {}
      };
      var Esperanto = {
        firstDayOfWeek: 1,
        rangeSeparator: " ĝis ",
        weekAbbreviation: "Sem",
        scrollTitle: "Rulumu por pligrandigi la valoron",
        toggleTitle: "Klaku por ŝalti",
        weekdays: {
          shorthand: ["Dim", "Lun", "Mar", "Mer", "Ĵaŭ", "Ven", "Sab"],
          longhand: ["dimanĉo", "lundo", "mardo", "merkredo", "ĵaŭdo", "vendredo", "sabato"]
        },
        months: {
          shorthand: ["Jan", "Feb", "Mar", "Apr", "Maj", "Jun", "Jul", "Aŭg", "Sep", "Okt", "Nov", "Dec"],
          longhand: ["januaro", "februaro", "marto", "aprilo", "majo", "junio", "julio", "aŭgusto", "septembro", "oktobro", "novembro", "decembro"]
        },
        ordinal: function ordinal() {
          return "-a";
        }
      };
      fp$10.l10ns.eo = Esperanto;
      fp$10.l10ns;

      var fp$11 = typeof window !== "undefined" && window.flatpickr !== undefined ? window.flatpickr : {
        l10ns: {}
      };
      var Spanish = {
        weekdays: {
          shorthand: ["Dom", "Lun", "Mar", "Mié", "Jue", "Vie", "Sáb"],
          longhand: ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"]
        },
        months: {
          shorthand: ["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"],
          longhand: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"]
        },
        ordinal: function ordinal() {
          return "º";
        },
        firstDayOfWeek: 1
      };
      fp$11.l10ns.es = Spanish;
      fp$11.l10ns;

      var fp$12 = typeof window !== "undefined" && window.flatpickr !== undefined ? window.flatpickr : {
        l10ns: {}
      };
      var Estonian = {
        weekdays: {
          shorthand: ["P", "E", "T", "K", "N", "R", "L"],
          longhand: ["Pühapäev", "Esmaspäev", "Teisipäev", "Kolmapäev", "Neljapäev", "Reede", "Laupäev"]
        },
        months: {
          shorthand: ["Jaan", "Veebr", "Märts", "Apr", "Mai", "Juuni", "Juuli", "Aug", "Sept", "Okt", "Nov", "Dets"],
          longhand: ["Jaanuar", "Veebruar", "Märts", "Aprill", "Mai", "Juuni", "Juuli", "August", "September", "Oktoober", "November", "Detsember"]
        },
        firstDayOfWeek: 1,
        ordinal: function ordinal() {
          return ".";
        },
        weekAbbreviation: "Näd",
        rangeSeparator: " kuni ",
        scrollTitle: "Keri, et suurendada",
        toggleTitle: "Klõpsa, et vahetada"
      };
      fp$12.l10ns.et = Estonian;
      fp$12.l10ns;

      var fp$13 = typeof window !== "undefined" && window.flatpickr !== undefined ? window.flatpickr : {
        l10ns: {}
      };
      var Persian = {
        weekdays: {
          shorthand: ["یک", "دو", "سه", "چهار", "پنج", "آدینه", "شنبه"],
          longhand: ["یک‌شنبه", "دوشنبه", "سه‌شنبه", "چهارشنبه", "پنچ‌شنبه", "آدینه", "شنبه"]
        },
        months: {
          shorthand: ["ژانویه", "فوریه", "مارس", "آوریل", "مه", "ژوئن", "ژوئیه", "اوت", "سپتامبر", "اکتبر", "نوامبر", "دسامبر"],
          longhand: ["ژانویه", "فوریه", "مارس", "آوریل", "مه", "ژوئن", "ژوئیه", "اوت", "سپتامبر", "اکتبر", "نوامبر", "دسامبر"]
        },
        ordinal: function ordinal() {
          return "";
        }
      };
      fp$13.l10ns.fa = Persian;
      fp$13.l10ns;

      var fp$14 = typeof window !== "undefined" && window.flatpickr !== undefined ? window.flatpickr : {
        l10ns: {}
      };
      var Finnish = {
        firstDayOfWeek: 1,
        weekdays: {
          shorthand: ["Su", "Ma", "Ti", "Ke", "To", "Pe", "La"],
          longhand: ["Sunnuntai", "Maanantai", "Tiistai", "Keskiviikko", "Torstai", "Perjantai", "Lauantai"]
        },
        months: {
          shorthand: ["Tammi", "Helmi", "Maalis", "Huhti", "Touko", "Kesä", "Heinä", "Elo", "Syys", "Loka", "Marras", "Joulu"],
          longhand: ["Tammikuu", "Helmikuu", "Maaliskuu", "Huhtikuu", "Toukokuu", "Kesäkuu", "Heinäkuu", "Elokuu", "Syyskuu", "Lokakuu", "Marraskuu", "Joulukuu"]
        },
        ordinal: function ordinal() {
          return ".";
        }
      };
      fp$14.l10ns.fi = Finnish;
      fp$14.l10ns;

      var fp$15 = typeof window !== "undefined" && window.flatpickr !== undefined ? window.flatpickr : {
        l10ns: {}
      };
      var French = {
        firstDayOfWeek: 1,
        weekdays: {
          shorthand: ["Dim", "Lun", "Mar", "Mer", "Jeu", "Ven", "Sam"],
          longhand: ["Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"]
        },
        months: {
          shorthand: ["Janv", "Févr", "Mars", "Avr", "Mai", "Juin", "Juil", "Août", "Sept", "Oct", "Nov", "Déc"],
          longhand: ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"]
        },
        ordinal: function ordinal(nth) {
          if (nth > 1) return "ème";
          return "er";
        },
        rangeSeparator: " au ",
        weekAbbreviation: "Sem",
        scrollTitle: "Défiler pour augmenter la valeur",
        toggleTitle: "Cliquer pour basculer"
      };
      fp$15.l10ns.fr = French;
      fp$15.l10ns;

      var fp$16 = typeof window !== "undefined" && window.flatpickr !== undefined ? window.flatpickr : {
        l10ns: {}
      };
      var Greek = {
        weekdays: {
          shorthand: ["Κυ", "Δε", "Τρ", "Τε", "Πέ", "Πα", "Σά"],
          longhand: ["Κυριακή", "Δευτέρα", "Τρίτη", "Τετάρτη", "Πέμπτη", "Παρασκευή", "Σάββατο"]
        },
        months: {
          shorthand: ["Ιαν", "Φεβ", "Μάρ", "Απρ", "Μάι", "Ιού", "Ιού", "Αύγ", "Σεπ", "Οκτ", "Νοέ", "Δεκ"],
          longhand: ["Ιανουάριος", "Φεβρουάριος", "Μάρτιος", "Απρίλιος", "Μάιος", "Ιούνιος", "Ιούλιος", "Αύγουστος", "Σεπτέμβριος", "Οκτώβριος", "Νοέμβριος", "Δεκέμβριος"]
        },
        firstDayOfWeek: 1,
        ordinal: function ordinal() {
          return "";
        },
        weekAbbreviation: "Εβδ",
        rangeSeparator: " έως ",
        scrollTitle: "Μετακυλήστε για προσαύξηση",
        toggleTitle: "Κάντε κλικ για αλλαγή",
        amPM: ["ΠΜ", "ΜΜ"]
      };
      fp$16.l10ns.gr = Greek;
      fp$16.l10ns;

      var fp$17 = typeof window !== "undefined" && window.flatpickr !== undefined ? window.flatpickr : {
        l10ns: {}
      };
      var Hebrew = {
        weekdays: {
          shorthand: ["א", "ב", "ג", "ד", "ה", "ו", "ז"],
          longhand: ["ראשון", "שני", "שלישי", "רביעי", "חמישי", "שישי", "שבת"]
        },
        months: {
          shorthand: ["ינו׳", "פבר׳", "מרץ", "אפר׳", "מאי", "יוני", "יולי", "אוג׳", "ספט׳", "אוק׳", "נוב׳", "דצמ׳"],
          longhand: ["ינואר", "פברואר", "מרץ", "אפריל", "מאי", "יוני", "יולי", "אוגוסט", "ספטמבר", "אוקטובר", "נובמבר", "דצמבר"]
        }
      };
      fp$17.l10ns.he = Hebrew;
      fp$17.l10ns;

      var fp$18 = typeof window !== "undefined" && window.flatpickr !== undefined ? window.flatpickr : {
        l10ns: {}
      };
      var Hindi = {
        weekdays: {
          shorthand: ["रवि", "सोम", "मंगल", "बुध", "गुरु", "शुक्र", "शनि"],
          longhand: ["रविवार", "सोमवार", "मंगलवार", "बुधवार", "गुरुवार", "शुक्रवार", "शनिवार"]
        },
        months: {
          shorthand: ["जन", "फर", "मार्च", "अप्रेल", "मई", "जून", "जूलाई", "अग", "सित", "अक्ट", "नव", "दि"],
          longhand: ["जनवरी ", "फरवरी", "मार्च", "अप्रेल", "मई", "जून", "जूलाई", "अगस्त ", "सितम्बर", "अक्टूबर", "नवम्बर", "दिसम्बर"]
        }
      };
      fp$18.l10ns.hi = Hindi;
      fp$18.l10ns;

      var fp$19 = typeof window !== "undefined" && window.flatpickr !== undefined ? window.flatpickr : {
        l10ns: {}
      };
      var Croatian = {
        firstDayOfWeek: 1,
        weekdays: {
          shorthand: ["Ned", "Pon", "Uto", "Sri", "Čet", "Pet", "Sub"],
          longhand: ["Nedjelja", "Ponedjeljak", "Utorak", "Srijeda", "Četvrtak", "Petak", "Subota"]
        },
        months: {
          shorthand: ["Sij", "Velj", "Ožu", "Tra", "Svi", "Lip", "Srp", "Kol", "Ruj", "Lis", "Stu", "Pro"],
          longhand: ["Siječanj", "Veljača", "Ožujak", "Travanj", "Svibanj", "Lipanj", "Srpanj", "Kolovoz", "Rujan", "Listopad", "Studeni", "Prosinac"]
        }
      };
      fp$19.l10ns.hr = Croatian;
      fp$19.l10ns;

      var fp$20 = typeof window !== "undefined" && window.flatpickr !== undefined ? window.flatpickr : {
        l10ns: {}
      };
      var Hungarian = {
        firstDayOfWeek: 1,
        weekdays: {
          shorthand: ["V", "H", "K", "Sz", "Cs", "P", "Szo"],
          longhand: ["Vasárnap", "Hétfő", "Kedd", "Szerda", "Csütörtök", "Péntek", "Szombat"]
        },
        months: {
          shorthand: ["Jan", "Feb", "Már", "Ápr", "Máj", "Jún", "Júl", "Aug", "Szep", "Okt", "Nov", "Dec"],
          longhand: ["Január", "Február", "Március", "Április", "Május", "Június", "Július", "Augusztus", "Szeptember", "Október", "November", "December"]
        },
        ordinal: function ordinal() {
          return ".";
        },
        weekAbbreviation: "Hét",
        scrollTitle: "Görgessen",
        toggleTitle: "Kattintson a váltáshoz"
      };
      fp$20.l10ns.hu = Hungarian;
      fp$20.l10ns;

      var fp$21 = typeof window !== "undefined" && window.flatpickr !== undefined ? window.flatpickr : {
        l10ns: {}
      };
      var Indonesian = {
        weekdays: {
          shorthand: ["Min", "Sen", "Sel", "Rab", "Kam", "Jum", "Sab"],
          longhand: ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"]
        },
        months: {
          shorthand: ["Jan", "Feb", "Mar", "Apr", "Mei", "Jun", "Jul", "Agu", "Sep", "Okt", "Nov", "Des"],
          longhand: ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"]
        },
        firstDayOfWeek: 1,
        ordinal: function ordinal() {
          return "";
        }
      };
      fp$21.l10ns.id = Indonesian;
      fp$21.l10ns;

      var fp$22 = typeof window !== "undefined" && window.flatpickr !== undefined ? window.flatpickr : {
        l10ns: {}
      };
      var Italian = {
        weekdays: {
          shorthand: ["Dom", "Lun", "Mar", "Mer", "Gio", "Ven", "Sab"],
          longhand: ["Domenica", "Lunedì", "Martedì", "Mercoledì", "Giovedì", "Venerdì", "Sabato"]
        },
        months: {
          shorthand: ["Gen", "Feb", "Mar", "Apr", "Mag", "Giu", "Lug", "Ago", "Set", "Ott", "Nov", "Dic"],
          longhand: ["Gennaio", "Febbraio", "Marzo", "Aprile", "Maggio", "Giugno", "Luglio", "Agosto", "Settembre", "Ottobre", "Novembre", "Dicembre"]
        },
        firstDayOfWeek: 1,
        ordinal: function ordinal() {
          return "°";
        },
        rangeSeparator: " al ",
        weekAbbreviation: "Se",
        scrollTitle: "Scrolla per aumentare",
        toggleTitle: "Clicca per cambiare"
      };
      fp$22.l10ns.it = Italian;
      fp$22.l10ns;

      var fp$23 = typeof window !== "undefined" && window.flatpickr !== undefined ? window.flatpickr : {
        l10ns: {}
      };
      var Japanese = {
        weekdays: {
          shorthand: ["日", "月", "火", "水", "木", "金", "土"],
          longhand: ["日曜日", "月曜日", "火曜日", "水曜日", "木曜日", "金曜日", "土曜日"]
        },
        months: {
          shorthand: ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"],
          longhand: ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"]
        }
      };
      fp$23.l10ns.ja = Japanese;
      fp$23.l10ns;

      var fp$24 = typeof window !== "undefined" && window.flatpickr !== undefined ? window.flatpickr : {
        l10ns: {}
      };
      var Korean = {
        weekdays: {
          shorthand: ["일", "월", "화", "수", "목", "금", "토"],
          longhand: ["일요일", "월요일", "화요일", "수요일", "목요일", "금요일", "토요일"]
        },
        months: {
          shorthand: ["1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월"],
          longhand: ["1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월"]
        },
        ordinal: function ordinal() {
          return "일";
        }
      };
      fp$24.l10ns.ko = Korean;
      fp$24.l10ns;

      var fp$25 = typeof window !== "undefined" && window.flatpickr !== undefined ? window.flatpickr : {
        l10ns: {}
      };
      var Lithuanian = {
        weekdays: {
          shorthand: ["S", "Pr", "A", "T", "K", "Pn", "Š"],
          longhand: ["Sekmadienis", "Pirmadienis", "Antradienis", "Trečiadienis", "Ketvirtadienis", "Penktadienis", "Šeštadienis"]
        },
        months: {
          shorthand: ["Sau", "Vas", "Kov", "Bal", "Geg", "Bir", "Lie", "Rgp", "Rgs", "Spl", "Lap", "Grd"],
          longhand: ["Sausis", "Vasaris", "Kovas", "Balandis", "Gegužė", "Birželis", "Liepa", "Rugpjūtis", "Rugsėjis", "Spalis", "Lapkritis", "Gruodis"]
        },
        firstDayOfWeek: 1,
        ordinal: function ordinal() {
          return "-a";
        },
        weekAbbreviation: "Sav",
        scrollTitle: "Keisti laiką pelės rateliu",
        toggleTitle: "Perjungti laiko formatą"
      };
      fp$25.l10ns.lt = Lithuanian;
      fp$25.l10ns;

      var fp$26 = typeof window !== "undefined" && window.flatpickr !== undefined ? window.flatpickr : {
        l10ns: {}
      };
      var Latvian = {
        firstDayOfWeek: 1,
        weekdays: {
          shorthand: ["Sv", "P", "Ot", "Tr", "Ce", "Pk", "Se"],
          longhand: ["Svētdiena", "Pirmdiena", "Otrdiena", "Trešdiena", "Ceturtdiena", "Piektdiena", "Sestdiena"]
        },
        months: {
          shorthand: ["Jan", "Feb", "Mar", "Mai", "Apr", "Jūn", "Jūl", "Aug", "Sep", "Okt", "Nov", "Dec"],
          longhand: ["Janvāris", "Februāris", "Marts", "Aprīlis", "Maijs", "Jūnijs", "Jūlijs", "Augusts", "Septembris", "Oktobris", "Novembris", "Decembris"]
        },
        rangeSeparator: " līdz "
      };
      fp$26.l10ns.lv = Latvian;
      fp$26.l10ns;

      var fp$27 = typeof window !== "undefined" && window.flatpickr !== undefined ? window.flatpickr : {
        l10ns: {}
      };
      var Macedonian = {
        weekdays: {
          shorthand: ["Не", "По", "Вт", "Ср", "Че", "Пе", "Са"],
          longhand: ["Недела", "Понеделник", "Вторник", "Среда", "Четврток", "Петок", "Сабота"]
        },
        months: {
          shorthand: ["Јан", "Фев", "Мар", "Апр", "Мај", "Јун", "Јул", "Авг", "Сеп", "Окт", "Ное", "Дек"],
          longhand: ["Јануари", "Февруари", "Март", "Април", "Мај", "Јуни", "Јули", "Август", "Септември", "Октомври", "Ноември", "Декември"]
        },
        firstDayOfWeek: 1,
        weekAbbreviation: "Нед.",
        rangeSeparator: " до "
      };
      fp$27.l10ns.mk = Macedonian;
      fp$27.l10ns;

      var fp$28 = typeof window !== "undefined" && window.flatpickr !== undefined ? window.flatpickr : {
        l10ns: {}
      };
      var Mongolian = {
        firstDayOfWeek: 1,
        weekdays: {
          shorthand: ["Да", "Мя", "Лх", "Пү", "Ба", "Бя", "Ня"],
          longhand: ["Даваа", "Мягмар", "Лхагва", "Пүрэв", "Баасан", "Бямба", "Ням"]
        },
        months: {
          shorthand: ["1-р сар", "2-р сар", "3-р сар", "4-р сар", "5-р сар", "6-р сар", "7-р сар", "8-р сар", "9-р сар", "10-р сар", "11-р сар", "12-р сар"],
          longhand: ["Нэгдүгээр сар", "Хоёрдугаар сар", "Гуравдугаар сар", "Дөрөвдүгээр сар", "Тавдугаар сар", "Зургаадугаар сар", "Долдугаар сар", "Наймдугаар сар", "Есдүгээр сар", "Аравдугаар сар", "Арваннэгдүгээр сар", "Арванхоёрдугаар сар"]
        },
        rangeSeparator: "-с "
      };
      fp$28.l10ns.mn = Mongolian;
      fp$28.l10ns;

      var fp$29 = typeof window !== "undefined" && window.flatpickr !== undefined ? window.flatpickr : {
        l10ns: {}
      };
      var Malaysian = {
        weekdays: {
          shorthand: ["Min", "Isn", "Sel", "Rab", "Kha", "Jum", "Sab"],
          longhand: ["Minggu", "Isnin", "Selasa", "Rabu", "Khamis", "Jumaat", "Sabtu"]
        },
        months: {
          shorthand: ["Jan", "Feb", "Mac", "Apr", "Mei", "Jun", "Jul", "Ogo", "Sep", "Okt", "Nov", "Dis"],
          longhand: ["Januari", "Februari", "Mac", "April", "Mei", "Jun", "Julai", "Ogos", "September", "Oktober", "November", "Disember"]
        },
        firstDayOfWeek: 1,
        ordinal: function ordinal() {
          return "";
        }
      };
      fp$29.l10ns;

      var fp$30 = typeof window !== "undefined" && window.flatpickr !== undefined ? window.flatpickr : {
        l10ns: {}
      };
      var Burmese = {
        weekdays: {
          shorthand: ["နွေ", "လာ", "ဂါ", "ဟူး", "ကြာ", "သော", "နေ"],
          longhand: ["တနင်္ဂနွေ", "တနင်္လာ", "အင်္ဂါ", "ဗုဒ္ဓဟူး", "ကြာသပတေး", "သောကြာ", "စနေ"]
        },
        months: {
          shorthand: ["ဇန်", "ဖေ", "မတ်", "ပြီ", "မေ", "ဇွန်", "လိုင်", "သြ", "စက်", "အောက်", "နို", "ဒီ"],
          longhand: ["ဇန်နဝါရီ", "ဖေဖော်ဝါရီ", "မတ်", "ဧပြီ", "မေ", "ဇွန်", "ဇူလိုင်", "သြဂုတ်", "စက်တင်ဘာ", "အောက်တိုဘာ", "နိုဝင်ဘာ", "ဒီဇင်ဘာ"]
        },
        firstDayOfWeek: 1,
        ordinal: function ordinal() {
          return "";
        }
      };
      fp$30.l10ns.my = Burmese;
      fp$30.l10ns;

      var fp$31 = typeof window !== "undefined" && window.flatpickr !== undefined ? window.flatpickr : {
        l10ns: {}
      };
      var Dutch = {
        weekdays: {
          shorthand: ["zo", "ma", "di", "wo", "do", "vr", "za"],
          longhand: ["zondag", "maandag", "dinsdag", "woensdag", "donderdag", "vrijdag", "zaterdag"]
        },
        months: {
          shorthand: ["jan", "feb", "mrt", "apr", "mei", "jun", "jul", "aug", "sept", "okt", "nov", "dec"],
          longhand: ["januari", "februari", "maart", "april", "mei", "juni", "juli", "augustus", "september", "oktober", "november", "december"]
        },
        firstDayOfWeek: 1,
        weekAbbreviation: "wk",
        rangeSeparator: " tot ",
        scrollTitle: "Scroll voor volgende / vorige",
        toggleTitle: "Klik om te wisselen",
        ordinal: function ordinal(nth) {
          if (nth === 1 || nth === 8 || nth >= 20) return "ste";
          return "de";
        }
      };
      fp$31.l10ns.nl = Dutch;
      fp$31.l10ns;

      var fp$32 = typeof window !== "undefined" && window.flatpickr !== undefined ? window.flatpickr : {
        l10ns: {}
      };
      var Norwegian = {
        weekdays: {
          shorthand: ["Søn", "Man", "Tir", "Ons", "Tor", "Fre", "Lør"],
          longhand: ["Søndag", "Mandag", "Tirsdag", "Onsdag", "Torsdag", "Fredag", "Lørdag"]
        },
        months: {
          shorthand: ["Jan", "Feb", "Mar", "Apr", "Mai", "Jun", "Jul", "Aug", "Sep", "Okt", "Nov", "Des"],
          longhand: ["Januar", "Februar", "Mars", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Desember"]
        },
        firstDayOfWeek: 1,
        rangeSeparator: " til ",
        weekAbbreviation: "Uke",
        scrollTitle: "Scroll for å endre",
        toggleTitle: "Klikk for å veksle",
        ordinal: function ordinal() {
          return ".";
        }
      };
      fp$32.l10ns.no = Norwegian;
      fp$32.l10ns;

      var fp$33 = typeof window !== "undefined" && window.flatpickr !== undefined ? window.flatpickr : {
        l10ns: {}
      };
      var Punjabi = {
        weekdays: {
          shorthand: ["ਐਤ", "ਸੋਮ", "ਮੰਗਲ", "ਬੁੱਧ", "ਵੀਰ", "ਸ਼ੁੱਕਰ", "ਸ਼ਨਿੱਚਰ"],
          longhand: ["ਐਤਵਾਰ", "ਸੋਮਵਾਰ", "ਮੰਗਲਵਾਰ", "ਬੁੱਧਵਾਰ", "ਵੀਰਵਾਰ", "ਸ਼ੁੱਕਰਵਾਰ", "ਸ਼ਨਿੱਚਰਵਾਰ"]
        },
        months: {
          shorthand: ["ਜਨ", "ਫ਼ਰ", "ਮਾਰ", "ਅਪ੍ਰੈ", "ਮਈ", "ਜੂਨ", "ਜੁਲਾ", "ਅਗ", "ਸਤੰ", "ਅਕ", "ਨਵੰ", "ਦਸੰ"],
          longhand: ["ਜਨਵਰੀ", "ਫ਼ਰਵਰੀ", "ਮਾਰਚ", "ਅਪ੍ਰੈਲ", "ਮਈ", "ਜੂਨ", "ਜੁਲਾਈ", "ਅਗਸਤ", "ਸਤੰਬਰ", "ਅਕਤੂਬਰ", "ਨਵੰਬਰ", "ਦਸੰਬਰ"]
        }
      };
      fp$33.l10ns.pa = Punjabi;
      fp$33.l10ns;

      var fp$34 = typeof window !== "undefined" && window.flatpickr !== undefined ? window.flatpickr : {
        l10ns: {}
      };
      var Polish = {
        weekdays: {
          shorthand: ["Nd", "Pn", "Wt", "Śr", "Cz", "Pt", "So"],
          longhand: ["Niedziela", "Poniedziałek", "Wtorek", "Środa", "Czwartek", "Piątek", "Sobota"]
        },
        months: {
          shorthand: ["Sty", "Lut", "Mar", "Kwi", "Maj", "Cze", "Lip", "Sie", "Wrz", "Paź", "Lis", "Gru"],
          longhand: ["Styczeń", "Luty", "Marzec", "Kwiecień", "Maj", "Czerwiec", "Lipiec", "Sierpień", "Wrzesień", "Październik", "Listopad", "Grudzień"]
        },
        firstDayOfWeek: 1,
        ordinal: function ordinal() {
          return ".";
        }
      };
      fp$34.l10ns.pl = Polish;
      fp$34.l10ns;

      var fp$35 = typeof window !== "undefined" && window.flatpickr !== undefined ? window.flatpickr : {
        l10ns: {}
      };
      var Portuguese = {
        weekdays: {
          shorthand: ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"],
          longhand: ["Domingo", "Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado"]
        },
        months: {
          shorthand: ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"],
          longhand: ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"]
        },
        rangeSeparator: " até "
      };
      fp$35.l10ns.pt = Portuguese;
      fp$35.l10ns;

      var fp$36 = typeof window !== "undefined" && window.flatpickr !== undefined ? window.flatpickr : {
        l10ns: {}
      };
      var Romanian = {
        weekdays: {
          shorthand: ["Dum", "Lun", "Mar", "Mie", "Joi", "Vin", "Sam"],
          longhand: ["Duminică", "Luni", "Marți", "Miercuri", "Joi", "Vineri", "Sâmbătă"]
        },
        months: {
          shorthand: ["Ian", "Feb", "Mar", "Apr", "Mai", "Iun", "Iul", "Aug", "Sep", "Oct", "Noi", "Dec"],
          longhand: ["Ianuarie", "Februarie", "Martie", "Aprilie", "Mai", "Iunie", "Iulie", "August", "Septembrie", "Octombrie", "Noiembrie", "Decembrie"]
        },
        firstDayOfWeek: 1,
        ordinal: function ordinal() {
          return "";
        }
      };
      fp$36.l10ns.ro = Romanian;
      fp$36.l10ns;

      var fp$37 = typeof window !== "undefined" && window.flatpickr !== undefined ? window.flatpickr : {
        l10ns: {}
      };
      var Russian = {
        weekdays: {
          shorthand: ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"],
          longhand: ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"]
        },
        months: {
          shorthand: ["Янв", "Фев", "Март", "Апр", "Май", "Июнь", "Июль", "Авг", "Сен", "Окт", "Ноя", "Дек"],
          longhand: ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"]
        },
        firstDayOfWeek: 1,
        ordinal: function ordinal() {
          return "";
        },
        rangeSeparator: " — ",
        weekAbbreviation: "Нед.",
        scrollTitle: "Прокрутите для увеличения",
        toggleTitle: "Нажмите для переключения",
        amPM: ["ДП", "ПП"],
        yearAriaLabel: "Год"
      };
      fp$37.l10ns.ru = Russian;
      fp$37.l10ns;

      var fp$38 = typeof window !== "undefined" && window.flatpickr !== undefined ? window.flatpickr : {
        l10ns: {}
      };
      var Sinhala = {
        weekdays: {
          shorthand: ["ඉ", "ස", "අ", "බ", "බ්‍ර", "සි", "සෙ"],
          longhand: ["ඉරිදා", "සඳුදා", "අඟහරුවාදා", "බදාදා", "බ්‍රහස්පතින්දා", "සිකුරාදා", "සෙනසුරාදා"]
        },
        months: {
          shorthand: ["ජන", "පෙබ", "මාර්", "අප්‍රේ", "මැයි", "ජුනි", "ජූලි", "අගෝ", "සැප්", "ඔක්", "නොවැ", "දෙසැ"],
          longhand: ["ජනවාරි", "පෙබරවාරි", "මාර්තු", "අප්‍රේල්", "මැයි", "ජුනි", "ජූලි", "අගෝස්තු", "සැප්තැම්බර්", "ඔක්තෝබර්", "නොවැම්බර්", "දෙසැම්බර්"]
        }
      };
      fp$38.l10ns.si = Sinhala;
      fp$38.l10ns;

      var fp$39 = typeof window !== "undefined" && window.flatpickr !== undefined ? window.flatpickr : {
        l10ns: {}
      };
      var Slovak = {
        weekdays: {
          shorthand: ["Ned", "Pon", "Ut", "Str", "Štv", "Pia", "Sob"],
          longhand: ["Nedeľa", "Pondelok", "Utorok", "Streda", "Štvrtok", "Piatok", "Sobota"]
        },
        months: {
          shorthand: ["Jan", "Feb", "Mar", "Apr", "Máj", "Jún", "Júl", "Aug", "Sep", "Okt", "Nov", "Dec"],
          longhand: ["Január", "Február", "Marec", "Apríl", "Máj", "Jún", "Júl", "August", "September", "Október", "November", "December"]
        },
        firstDayOfWeek: 1,
        rangeSeparator: " do ",
        ordinal: function ordinal() {
          return ".";
        }
      };
      fp$39.l10ns.sk = Slovak;
      fp$39.l10ns;

      var fp$40 = typeof window !== "undefined" && window.flatpickr !== undefined ? window.flatpickr : {
        l10ns: {}
      };
      var Slovenian = {
        weekdays: {
          shorthand: ["Ned", "Pon", "Tor", "Sre", "Čet", "Pet", "Sob"],
          longhand: ["Nedelja", "Ponedeljek", "Torek", "Sreda", "Četrtek", "Petek", "Sobota"]
        },
        months: {
          shorthand: ["Jan", "Feb", "Mar", "Apr", "Maj", "Jun", "Jul", "Avg", "Sep", "Okt", "Nov", "Dec"],
          longhand: ["Januar", "Februar", "Marec", "April", "Maj", "Junij", "Julij", "Avgust", "September", "Oktober", "November", "December"]
        },
        firstDayOfWeek: 1,
        rangeSeparator: " do ",
        ordinal: function ordinal() {
          return ".";
        }
      };
      fp$40.l10ns.sl = Slovenian;
      fp$40.l10ns;

      var fp$41 = typeof window !== "undefined" && window.flatpickr !== undefined ? window.flatpickr : {
        l10ns: {}
      };
      var Albanian = {
        weekdays: {
          shorthand: ["Di", "Hë", "Ma", "Më", "En", "Pr", "Sh"],
          longhand: ["E Diel", "E Hënë", "E Martë", "E Mërkurë", "E Enjte", "E Premte", "E Shtunë"]
        },
        months: {
          shorthand: ["Jan", "Shk", "Mar", "Pri", "Maj", "Qer", "Kor", "Gus", "Sht", "Tet", "Nën", "Dhj"],
          longhand: ["Janar", "Shkurt", "Mars", "Prill", "Maj", "Qershor", "Korrik", "Gusht", "Shtator", "Tetor", "Nëntor", "Dhjetor"]
        }
      };
      fp$41.l10ns.sq = Albanian;
      fp$41.l10ns;

      var fp$42 = typeof window !== "undefined" && window.flatpickr !== undefined ? window.flatpickr : {
        l10ns: {}
      };
      var Serbian = {
        weekdays: {
          shorthand: ["Ned", "Pon", "Uto", "Sre", "Čet", "Pet", "Sub"],
          longhand: ["Nedelja", "Ponedeljak", "Utorak", "Sreda", "Četvrtak", "Petak", "Subota"]
        },
        months: {
          shorthand: ["Jan", "Feb", "Mar", "Apr", "Maj", "Jun", "Jul", "Avg", "Sep", "Okt", "Nov", "Dec"],
          longhand: ["Januar", "Februar", "Mart", "April", "Maj", "Jun", "Jul", "Avgust", "Septembar", "Oktobar", "Novembar", "Decembar"]
        },
        firstDayOfWeek: 1,
        weekAbbreviation: "Ned.",
        rangeSeparator: " do "
      };
      fp$42.l10ns.sr = Serbian;
      fp$42.l10ns;

      var fp$43 = typeof window !== "undefined" && window.flatpickr !== undefined ? window.flatpickr : {
        l10ns: {}
      };
      var Swedish = {
        firstDayOfWeek: 1,
        weekAbbreviation: "v",
        weekdays: {
          shorthand: ["Sön", "Mån", "Tis", "Ons", "Tor", "Fre", "Lör"],
          longhand: ["Söndag", "Måndag", "Tisdag", "Onsdag", "Torsdag", "Fredag", "Lördag"]
        },
        months: {
          shorthand: ["Jan", "Feb", "Mar", "Apr", "Maj", "Jun", "Jul", "Aug", "Sep", "Okt", "Nov", "Dec"],
          longhand: ["Januari", "Februari", "Mars", "April", "Maj", "Juni", "Juli", "Augusti", "September", "Oktober", "November", "December"]
        },
        ordinal: function ordinal() {
          return ".";
        }
      };
      fp$43.l10ns.sv = Swedish;
      fp$43.l10ns;

      var fp$44 = typeof window !== "undefined" && window.flatpickr !== undefined ? window.flatpickr : {
        l10ns: {}
      };
      var Thai = {
        weekdays: {
          shorthand: ["อา", "จ", "อ", "พ", "พฤ", "ศ", "ส"],
          longhand: ["อาทิตย์", "จันทร์", "อังคาร", "พุธ", "พฤหัสบดี", "ศุกร์", "เสาร์"]
        },
        months: {
          shorthand: ["ม.ค.", "ก.พ.", "มี.ค.", "เม.ย.", "พ.ค.", "มิ.ย.", "ก.ค.", "ส.ค.", "ก.ย.", "ต.ค.", "พ.ย.", "ธ.ค."],
          longhand: ["มกราคม", "กุมภาพันธ์", "มีนาคม", "เมษายน", "พฤษภาคม", "มิถุนายน", "กรกฎาคม", "สิงหาคม", "กันยายน", "ตุลาคม", "พฤศจิกายน", "ธันวาคม"]
        },
        firstDayOfWeek: 1,
        rangeSeparator: " ถึง ",
        scrollTitle: "เลื่อนเพื่อเพิ่มหรือลด",
        toggleTitle: "คลิกเพื่อเปลี่ยน",
        ordinal: function ordinal() {
          return "";
        }
      };
      fp$44.l10ns.th = Thai;
      fp$44.l10ns;

      var fp$45 = typeof window !== "undefined" && window.flatpickr !== undefined ? window.flatpickr : {
        l10ns: {}
      };
      var Turkish = {
        weekdays: {
          shorthand: ["Paz", "Pzt", "Sal", "Çar", "Per", "Cum", "Cmt"],
          longhand: ["Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"]
        },
        months: {
          shorthand: ["Oca", "Şub", "Mar", "Nis", "May", "Haz", "Tem", "Ağu", "Eyl", "Eki", "Kas", "Ara"],
          longhand: ["Ocak", "Şubat", "Mart", "Nisan", "Mayıs", "Haziran", "Temmuz", "Ağustos", "Eylül", "Ekim", "Kasım", "Aralık"]
        },
        firstDayOfWeek: 1,
        ordinal: function ordinal() {
          return ".";
        },
        rangeSeparator: " - ",
        weekAbbreviation: "Hf",
        scrollTitle: "Artırmak için kaydırın",
        toggleTitle: "Aç/Kapa",
        amPM: ["ÖÖ", "ÖS"]
      };
      fp$45.l10ns.tr = Turkish;
      fp$45.l10ns;

      var fp$46 = typeof window !== "undefined" && window.flatpickr !== undefined ? window.flatpickr : {
        l10ns: {}
      };
      var Ukrainian = {
        firstDayOfWeek: 1,
        weekdays: {
          shorthand: ["Нд", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"],
          longhand: ["Неділя", "Понеділок", "Вівторок", "Середа", "Четвер", "П'ятниця", "Субота"]
        },
        months: {
          shorthand: ["Січ", "Лют", "Бер", "Кві", "Тра", "Чер", "Лип", "Сер", "Вер", "Жов", "Лис", "Гру"],
          longhand: ["Січень", "Лютий", "Березень", "Квітень", "Травень", "Червень", "Липень", "Серпень", "Вересень", "Жовтень", "Листопад", "Грудень"]
        }
      };
      fp$46.l10ns.uk = Ukrainian;
      fp$46.l10ns;

      var fp$47 = typeof window !== "undefined" && window.flatpickr !== undefined ? window.flatpickr : {
        l10ns: {}
      };
      var Vietnamese = {
        weekdays: {
          shorthand: ["CN", "T2", "T3", "T4", "T5", "T6", "T7"],
          longhand: ["Chủ nhật", "Thứ hai", "Thứ ba", "Thứ tư", "Thứ năm", "Thứ sáu", "Thứ bảy"]
        },
        months: {
          shorthand: ["Th1", "Th2", "Th3", "Th4", "Th5", "Th6", "Th7", "Th8", "Th9", "Th10", "Th11", "Th12"],
          longhand: ["Tháng một", "Tháng hai", "Tháng ba", "Tháng tư", "Tháng năm", "Tháng sáu", "Tháng bảy", "Tháng tám", "Tháng chín", "Tháng mười", "Tháng 11", "Tháng 12"]
        },
        firstDayOfWeek: 1
      };
      fp$47.l10ns.vn = Vietnamese;
      fp$47.l10ns;

      var fp$48 = typeof window !== "undefined" && window.flatpickr !== undefined ? window.flatpickr : {
        l10ns: {}
      };
      var Mandarin = {
        weekdays: {
          shorthand: ["周日", "周一", "周二", "周三", "周四", "周五", "周六"],
          longhand: ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"]
        },
        months: {
          shorthand: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"],
          longhand: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"]
        },
        rangeSeparator: " 至 ",
        weekAbbreviation: "周",
        scrollTitle: "滚动切换",
        toggleTitle: "点击切换 12/24 小时时制"
      };
      fp$48.l10ns.zh = Mandarin;
      fp$48.l10ns;

      var l10n = {
        ar: Arabic,
        at: Austria,
        be: Belarusian,
        bg: Bulgarian,
        bn: Bangla,
        cat: Catalan,
        cs: Czech,
        cy: Welsh,
        da: Danish,
        de: German,
        default: Object.assign({}, english),
        en: english,
        eo: Esperanto,
        es: Spanish,
        et: Estonian,
        fa: Persian,
        fi: Finnish,
        fr: French,
        gr: Greek,
        he: Hebrew,
        hi: Hindi,
        hr: Croatian,
        hu: Hungarian,
        id: Indonesian,
        it: Italian,
        ja: Japanese,
        ko: Korean,
        lt: Lithuanian,
        lv: Latvian,
        mk: Macedonian,
        mn: Mongolian,
        ms: Malaysian,
        my: Burmese,
        nl: Dutch,
        no: Norwegian,
        pa: Punjabi,
        pl: Polish,
        pt: Portuguese,
        ro: Romanian,
        ru: Russian,
        si: Sinhala,
        sk: Slovak,
        sl: Slovenian,
        sq: Albanian,
        sr: Serbian,
        sv: Swedish,
        th: Thai,
        tr: Turkish,
        uk: Ukrainian,
        vn: Vietnamese,
        zh: Mandarin
      };

      exports.default = l10n;

      Object.defineProperty(exports, '__esModule', { value: true });

  })));
  });

  var l10n$1 = unwrapExports(l10n);

  var rangePlugin = createCommonjsModule(function (module, exports) {
  /* flatpickr v4.4.1, @license MIT */
  (function (global, factory) {
      module.exports = factory();
  }(commonjsGlobal, (function () {
      function rangePlugin(config) {
        if (config === void 0) {
          config = {};
        }

        return function (fp) {
          var dateFormat = "",
              secondInput,
              _secondInputFocused,
              _prevDates;

          var createSecondInput = function createSecondInput() {
            if (config.input) {
              secondInput = config.input instanceof Element ? config.input : window.document.querySelector(config.input);
            } else {
              secondInput = fp._input.cloneNode();
              secondInput.removeAttribute("id");
              secondInput._flatpickr = undefined;
            }

            if (secondInput.value) {
              var parsedDate = fp.parseDate(secondInput.value);
              if (parsedDate) fp.selectedDates.push(parsedDate);
            }

            secondInput.setAttribute("data-fp-omit", "");

            fp._bind(secondInput, ["focus", "click"], function () {
              if (fp.selectedDates[1]) {
                fp.latestSelectedDateObj = fp.selectedDates[1];

                fp._setHoursFromDate(fp.selectedDates[1]);

                fp.jumpToDate(fp.selectedDates[1]);
              }
              _secondInputFocused = true;
              fp.open(undefined, secondInput);
            });

            fp._bind(secondInput, "keydown", function (e) {
              if (e.key === "Enter") {
                fp.setDate([fp.selectedDates[0], secondInput.value], true, dateFormat);
                secondInput.click();
              }
            });

            if (!config.input) fp._input.parentNode && fp._input.parentNode.insertBefore(secondInput, fp._input.nextSibling);
          };

          var plugin = {
            onParseConfig: function onParseConfig() {
              fp.config.mode = "range";
              fp.config.allowInput = true;
              dateFormat = fp.config.altInput ? fp.config.altFormat : fp.config.dateFormat;
            },
            onReady: function onReady() {
              createSecondInput();
              fp.config.ignoredFocusElements.push(secondInput);

              fp._input.removeAttribute("readonly");

              secondInput.removeAttribute("readonly");

              fp._bind(fp._input, "focus", function () {
                fp.latestSelectedDateObj = fp.selectedDates[0];

                fp._setHoursFromDate(fp.selectedDates[0]);
                _secondInputFocused = false;
                fp.jumpToDate(fp.selectedDates[0]);
              });

              fp._bind(fp._input, "keydown", function (e) {
                if (e.key === "Enter") fp.setDate([fp._input.value, fp.selectedDates[1]], true, dateFormat);
              });

              fp.setDate(fp.selectedDates, false);
              plugin.onValueUpdate(fp.selectedDates);
            },
            onPreCalendarPosition: function onPreCalendarPosition() {
              if (_secondInputFocused) {
                fp._positionElement = secondInput;
                setTimeout(function () {
                  fp._positionElement = fp._input;
                }, 0);
              }
            },
            onChange: function onChange() {
              if (!fp.selectedDates.length) {
                setTimeout(function () {
                  if (fp.selectedDates.length) return;
                  secondInput.value = "";
                  _prevDates = [];
                }, 10);
              }

              if (_secondInputFocused) {
                setTimeout(function () {
                  secondInput.focus();
                }, 0);
              }
            },
            onDestroy: function onDestroy() {
              if (!config.input) secondInput.parentNode && secondInput.parentNode.removeChild(secondInput);
            },
            onValueUpdate: function onValueUpdate(selDates) {
              if (!secondInput) return;
              _prevDates = !_prevDates || selDates.length >= _prevDates.length ? selDates.concat() : _prevDates;

              if (_prevDates.length > selDates.length) {
                var newSelectedDate = selDates[0];
                var newDates = _secondInputFocused ? [_prevDates[0], newSelectedDate] : [newSelectedDate, _prevDates[1]];
                fp.setDate(newDates, false);
                _prevDates = newDates.concat();
              }

              var _fp$selectedDates$map = fp.selectedDates.map(function (d) {
                return fp.formatDate(d, dateFormat);
              });

              var _fp$selectedDates$map2 = _fp$selectedDates$map[0];
              fp._input.value = _fp$selectedDates$map2 === void 0 ? "" : _fp$selectedDates$map2;
              var _fp$selectedDates$map3 = _fp$selectedDates$map[1];
              secondInput.value = _fp$selectedDates$map3 === void 0 ? "" : _fp$selectedDates$map3;
            }
          };
          return plugin;
        };
      }

      return rangePlugin;

  })));
  });

  var DatePickerInput =
  /*#__PURE__*/
  function (_Component) {
    function DatePickerInput() {
      _classCallCheck(this, DatePickerInput);

      return _possibleConstructorReturn(this, _getPrototypeOf(DatePickerInput).apply(this, arguments));
    }

    _createClass(DatePickerInput, [{
      key: "render",
      value: function render() {
        var _this = this;

        var _this$props = this.props,
            id = _this$props.id,
            labelText = _this$props.labelText,
            invalid = _this$props.invalid,
            invalidText = _this$props.invalidText,
            hideLabel = _this$props.hideLabel,
            _onChange = _this$props.onChange,
            _onClick = _this$props.onClick,
            placeholder = _this$props.placeholder,
            type = _this$props.type,
            datePickerType = _this$props.datePickerType,
            pattern = _this$props.pattern,
            other = _objectWithoutProperties(_this$props, ["id", "labelText", "invalid", "invalidText", "hideLabel", "onChange", "onClick", "placeholder", "type", "datePickerType", "pattern"]);

        var datePickerInputProps = {
          id: id,
          onChange: function onChange(evt) {
            if (!other.disabled) {
              _onChange(evt);
            }
          },
          onClick: function onClick(evt) {
            if (!other.disabled) {
              _onClick(evt);
            }
          },
          placeholder: placeholder,
          type: type,
          pattern: pattern
        };
        var labelClasses = classNames('bx--label', {
          'bx--visually-hidden': hideLabel
        });
        var datePickerIcon = datePickerType === 'single' ? React__default.createElement("svg", {
          className: "bx--date-picker__icon",
          width: "17",
          height: "19",
          viewBox: "0 0 17 19"
        }, React__default.createElement("path", {
          d: "M12 0h2v2.7h-2zM3 0h2v2.7H3z"
        }), React__default.createElement("path", {
          d: "M0 2v17h17V2H0zm15 15H2V7h13v10z"
        }), React__default.createElement("path", {
          d: "M9.9 15H8.6v-3.9H7.1v-.9c.9 0 1.7-.3 1.8-1.2h1v6z"
        })) : '';
        var label = labelText ? React__default.createElement("label", {
          htmlFor: id,
          className: labelClasses
        }, labelText) : null;
        var error = invalid ? React__default.createElement("div", {
          className: "bx--form-requirement"
        }, invalidText) : null;
        var input = invalid ? React__default.createElement("input", _extends({}, other, datePickerInputProps, {
          ref: function ref(input) {
            _this.input = input;
          },
          "data-invalid": true,
          className: "bx--date-picker__input"
        })) : React__default.createElement("input", _extends({
          ref: function ref(input) {
            _this.input = input;
          }
        }, other, datePickerInputProps, {
          className: "bx--date-picker__input"
        }));
        return React__default.createElement("div", {
          className: "bx--date-picker-container"
        }, label, datePickerIcon, input, error);
      }
    }]);

    _inherits(DatePickerInput, _Component);

    return DatePickerInput;
  }(React.Component);

  _defineProperty(DatePickerInput, "propTypes", {
    id: PropTypes.string.isRequired,
    children: PropTypes.node
  });

  _defineProperty(DatePickerInput, "defaultProps", {
    pattern: '\\d{1,2}\\/\\d{1,2}\\/\\d{4}',
    type: 'text',
    disabled: false,
    invalid: false,
    labelText: '',
    onClick: function onClick() {},
    onChange: function onChange() {}
  });

  l10n$1.en.weekdays.shorthand.forEach(function (day, index) {
    var currentDay = l10n$1.en.weekdays.shorthand;

    if (currentDay[index] === 'Thu' || currentDay[index] === 'Th') {
      currentDay[index] = 'Th';
    } else {
      currentDay[index] = currentDay[index].charAt(0);
    }
  });

  var DatePicker =
  /*#__PURE__*/
  function (_Component) {
    function DatePicker() {
      var _getPrototypeOf2;

      var _temp, _this;

      _classCallCheck(this, DatePicker);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _possibleConstructorReturn(_this, (_temp = _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(DatePicker)).call.apply(_getPrototypeOf2, [this].concat(args))), _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onChange", function (e) {
        if (e.target.value === '' && _this.cal.selectedDates.length > 0) {
          _this.cal.clear();
        }
      }), _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "addKeyboardEvents", function (cal) {
        var input = _this.inputField;
        input.addEventListener('keydown', function (e) {
          if (e.which === 40) {
            cal.calendarContainer.focus();
          }
        });
        input.addEventListener('change', _this.onChange);

        if (_this.toInputField) {
          _this.toInputField.addEventListener('blur', function () {
            _this.cal.close();
          });

          _this.toInputField.addEventListener('change', _this.onChange);
        }
      }), _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "openCalendar", function () {
        _this.cal.open();
      }), _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "updateClassNames", function (calendar) {
        var calendarContainer = calendar.calendarContainer;
        var daysContainer = calendar.days;
        calendarContainer.classList.add('bx--date-picker__calendar');
        calendarContainer.querySelector('.flatpickr-month').classList.add('bx--date-picker__month');
        calendarContainer.querySelector('.flatpickr-weekdays').classList.add('bx--date-picker__weekdays');
        calendarContainer.querySelector('.flatpickr-days').classList.add('bx--date-picker__days');

        _toConsumableArray(calendarContainer.querySelectorAll('.flatpickr-weekday')).forEach(function (item) {
          var currentItem = item;
          currentItem.innerHTML = currentItem.innerHTML.replace(/\s+/g, '');
          currentItem.classList.add('bx--date-picker__weekday');
        });

        _toConsumableArray(daysContainer.querySelectorAll('.flatpickr-day')).forEach(function (item) {
          item.classList.add('bx--date-picker__day');

          if (item.classList.contains('today') && calendar.selectedDates.length > 0) {
            item.classList.add('no-border');
          } else if (item.classList.contains('today') && calendar.selectedDates.length === 0) {
            item.classList.remove('no-border');
          }
        });
      }), _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "assignInputFieldRef", function (node) {
        _this.inputField = !node ? null : // Child is a regular DOM node, seen in tests
        node.nodeType === Node.ELEMENT_NODE ? node.querySelector('.bx--date-picker__input') : // Child is a React component
        node.input && node.input.nodeType === Node.ELEMENT_NODE ? node.input : null;
      }), _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "assignToInputFieldRef", function (node) {
        _this.toInputField = !node ? null : // Child is a regular DOM node, seen in tests
        node.nodeType === Node.ELEMENT_NODE ? node.querySelector('.bx--date-picker__input') : // Child is a React component
        node.input && node.input.nodeType === Node.ELEMENT_NODE ? node.input : null;
      }), _temp));
    }

    _createClass(DatePicker, [{
      key: "componentWillUpdate",
      value: function componentWillUpdate(nextProps) {
        if (nextProps.value !== this.props.value) {
          if (this.props.datePickerType === 'single' || this.props.datePickerType === 'range') {
            this.cal.setDate(nextProps.value);
            this.updateClassNames(this.cal);
          } else {
            if (this.inputField) {
              this.inputField.value = nextProps.value;
            }
          }
        }
      }
    }, {
      key: "componentDidMount",
      value: function componentDidMount() {
        var _this2 = this;

        var _this$props = this.props,
            datePickerType = _this$props.datePickerType,
            dateFormat = _this$props.dateFormat,
            locale = _this$props.locale,
            appendTo = _this$props.appendTo,
            _onChange = _this$props.onChange,
            minDate = _this$props.minDate,
            maxDate = _this$props.maxDate;

        if (datePickerType === 'single' || datePickerType === 'range') {
          var onHook = function onHook(electedDates, dateStr, instance) {
            _this2.updateClassNames(instance);
          };

          this.cal = new flatpickr(this.inputField, {
            appendTo: appendTo,
            mode: datePickerType,
            allowInput: true,
            dateFormat: dateFormat,
            locale: l10n$1[locale],
            minDate: minDate,
            maxDate: maxDate,
            plugins: datePickerType === 'range' ? [new rangePlugin({
              input: this.toInputField
            })] : '',
            clickOpens: true,
            nextArrow: this.rightArrowHTML(),
            leftArrow: this.leftArrowHTML(),
            onChange: function onChange() {
              if (_onChange) {
                _onChange.apply(void 0, arguments);
              }
            },
            onReady: onHook,
            onMonthChange: onHook,
            onYearChange: onHook,
            onOpen: onHook,
            onValueUpdate: onHook
          });
          this.addKeyboardEvents(this.cal);
        }
      }
    }, {
      key: "componentWillUnmount",
      value: function componentWillUnmount() {
        if (this.props.datePickerType === 'range' || this.props.datePickerType === 'single') {
          this.cal.destroy();
        }

        this.inputField.removeEventListener('change', this.onChange);

        if (this.toInputField) {
          this.toInputField.removeEventListener('change', this.onChange);
        }
      }
    }, {
      key: "rightArrowHTML",
      value: function rightArrowHTML() {
        return "\n      <svg width=\"8\" height=\"12\" viewBox=\"0 0 8 12\" fill-rule=\"evenodd\">\n        <path d=\"M0 10.6L4.7 6 0 1.4 1.4 0l6.1 6-6.1 6z\"></path>\n      </svg>";
      }
    }, {
      key: "leftArrowHTML",
      value: function leftArrowHTML() {
        return "\n      <svg width=\"8\" height=\"12\" viewBox=\"0 0 8 12\" fill-rule=\"evenodd\">\n        <path d=\"M7.5 10.6L2.8 6l4.7-4.6L6.1 0 0 6l6.1 6z\"></path>\n      </svg>";
      }
    }, {
      key: "render",
      value: function render() {
        var _this3 = this;

        var _this$props2 = this.props,
            children = _this$props2.children,
            className = _this$props2.className,
            short = _this$props2.short,
            datePickerType = _this$props2.datePickerType,
            minDate = _this$props2.minDate,
            maxDate = _this$props2.maxDate,
            dateFormat = _this$props2.dateFormat,
            onChange = _this$props2.onChange,
            other = _objectWithoutProperties(_this$props2, ["children", "className", "short", "datePickerType", "minDate", "maxDate", "dateFormat", "onChange"]);

        var datePickerClasses = classNames('bx--date-picker', className, {
          'bx--date-picker--short': short,
          'bx--date-picker--simple': datePickerType === 'simple',
          'bx--date-picker--single': datePickerType === 'single',
          'bx--date-picker--range': datePickerType === 'range'
        });
        var datePickerIcon = datePickerType === 'range' ? React__default.createElement("svg", {
          onClick: this.openCalendar,
          className: "bx--date-picker__icon",
          width: "17",
          height: "19",
          viewBox: "0 0 17 19"
        }, React__default.createElement("path", {
          d: "M12 0h2v2.7h-2zM3 0h2v2.7H3z"
        }), React__default.createElement("path", {
          d: "M0 2v17h17V2H0zm15 15H2V7h13v10z"
        }), React__default.createElement("path", {
          d: "M9.9 15H8.6v-3.9H7.1v-.9c.9 0 1.7-.3 1.8-1.2h1v6z"
        })) : '';
        var childArray = React__default.Children.toArray(children);
        var childrenWithProps = childArray.map(function (child, index) {
          if (index === 0 && child.type === DatePickerInput) {
            return React__default.cloneElement(child, {
              datePickerType: datePickerType,
              ref: _this3.assignInputFieldRef
            });
          } else if (index === 1 && child.type === DatePickerInput) {
            return React__default.cloneElement(child, {
              datePickerType: datePickerType,
              ref: _this3.assignToInputFieldRef
            });
          } else if (index === 0) {
            return React__default.cloneElement(child, {
              ref: _this3.assignInputFieldRef
            });
          } else if (index === 1) {
            return React__default.cloneElement(child, {
              ref: _this3.assignToInputFieldRef
            });
          }
        });
        return React__default.createElement("div", {
          className: "bx--form-item"
        }, React__default.createElement("div", _extends({
          className: datePickerClasses
        }, other), childrenWithProps, datePickerIcon));
      }
    }]);

    _inherits(DatePicker, _Component);

    return DatePicker;
  }(React.Component);

  _defineProperty(DatePicker, "propTypes", {
    /**
     * The child nodes.
     */
    children: PropTypes.node,

    /**
     * The CSS class names.
     */
    className: PropTypes.string,

    /**
     * `true` to use the short version.
     */
    short: PropTypes.bool,

    /**
     * The type of the date picker:
     *
     * * `simple` - Without calendar dropdown.
     * * `single` - With calendar dropdown and single date.
     * * `range` - With calendar dropdown and a date range.
     */
    datePickerType: PropTypes.oneOf(['simple', 'single', 'range']),

    /**
     * The date format.
     */
    dateFormat: PropTypes.string,

    /**
     *  The language locale used to format the days of the week, months, and numbers.
     *
     * * `ar` - Arabic
     * * `at` - Austria
     * * `be` - Belarusian
     * * `bg` - Bulgarian
     * * `bn` - Bangla
     * * `cat` - Catalan
     * * `cs` - Czech
     * * `cy` - Welsh
     * * `da` - Danish
     * * `de` - German
     * * `en` - English
     * * `eo` - Esperanto
     * * `es` - Spanish
     * * `et` - Estonian
     * * `fa` - Persian
     * * `fi` - Finnish
     * * `fr` - French
     * * `gr` - Greek
     * * `he` - Hebrew
     * * `hi` - Hindi
     * * `hr` - Croatian
     * * `hu` - Hungarian
     * * `id` - Indonesian
     * * `it` - Italian
     * * `ja` - Japanese
     * * `ko` - Korean
     * * `lt` - Lithuanian
     * * `lv` - Latvian
     * * `mk` - Macedonian
     * * `mn` - Mongolian
     * * `ms` - Malaysian
     * * `my` - Burmese
     * * `nl` - Dutch
     * * `no` - Norwegian
     * * `pa` - Punjabi
     * * `pl` - Polish
     * * `pt` - Portuguese
     * * `ro` - Romanian
     * * `si` - Sinhala
     * * `sk` - Slovak
     * * `sl` - Slovenian
     * * `sq` - Albanian
     * * `sr` - Serbian
     * * `sv` - Swedish
     * * `th` - Thai
     * * `tr` - Turkish
     * * `uk` - Ukrainian
     * * `vn` - Vietnamese
     * * `zh` - Mandarin
     */
    locale: PropTypes.oneOf(['ar', 'at', 'be', 'bg', 'bn', 'cat', 'cs', 'cy', 'da', 'de', 'en', 'en', 'eo', 'es', 'et', 'fa', 'fi', 'fr', 'gr', 'he', 'hi', 'hr', 'hu', 'id', 'it', 'ja', 'ko', 'lt', 'lv', 'mk', 'mn', 'ms', 'my', 'nl', 'no', 'pa', 'pl', 'pt', 'ro', 'ru', 'si', 'sk', 'sl', 'sq', 'sr', 'sv', 'th', 'tr', 'uk', 'vn', 'zh']),

    /**
     * The value of the date value provided to flatpickr, could
     * be a date, a date number, a date string, an array of dates.
     */
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.object])), PropTypes.object, PropTypes.number]),

    /**
     * The DOM element the Flatpicker should be inserted into. `<body>` by default.
     */
    appendTo: PropTypes.object,

    /**
     * The `change` event handler.
     */
    onChange: PropTypes.func,

    /**
     * The minimum date that a user can start picking from.
     */
    minDate: PropTypes.string,

    /**
     * The maximum date that a user can pick to.
     */
    maxDate: PropTypes.string
  });

  _defineProperty(DatePicker, "defaultProps", {
    short: false,
    dateFormat: 'm/d/Y',
    locale: 'en'
  });

  /**
   * lodash (Custom Build) <https://lodash.com/>
   * Build: `lodash modularize exports="npm" -o ./`
   * Copyright jQuery Foundation and other contributors <https://jquery.org/>
   * Released under MIT license <https://lodash.com/license>
   * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
   * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
   */

  /** Used as the `TypeError` message for "Functions" methods. */
  var FUNC_ERROR_TEXT = 'Expected a function';

  /** Used as references for various `Number` constants. */
  var NAN = 0 / 0;

  /** `Object#toString` result references. */
  var symbolTag$1 = '[object Symbol]';

  /** Used to match leading and trailing whitespace. */
  var reTrim = /^\s+|\s+$/g;

  /** Used to detect bad signed hexadecimal string values. */
  var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

  /** Used to detect binary string values. */
  var reIsBinary = /^0b[01]+$/i;

  /** Used to detect octal string values. */
  var reIsOctal = /^0o[0-7]+$/i;

  /** Built-in method references without a dependency on `root`. */
  var freeParseInt = parseInt;

  /** Detect free variable `global` from Node.js. */
  var freeGlobal$1 = typeof commonjsGlobal == 'object' && commonjsGlobal && commonjsGlobal.Object === Object && commonjsGlobal;

  /** Detect free variable `self`. */
  var freeSelf$1 = typeof self == 'object' && self && self.Object === Object && self;

  /** Used as a reference to the global object. */
  var root$1 = freeGlobal$1 || freeSelf$1 || Function('return this')();

  /** Used for built-in method references. */
  var objectProto$1 = Object.prototype;

  /**
   * Used to resolve the
   * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
   * of values.
   */
  var objectToString$1 = objectProto$1.toString;

  /* Built-in method references for those with the same name as other `lodash` methods. */
  var nativeMax$1 = Math.max,
      nativeMin = Math.min;

  /**
   * Gets the timestamp of the number of milliseconds that have elapsed since
   * the Unix epoch (1 January 1970 00:00:00 UTC).
   *
   * @static
   * @memberOf _
   * @since 2.4.0
   * @category Date
   * @returns {number} Returns the timestamp.
   * @example
   *
   * _.defer(function(stamp) {
   *   console.log(_.now() - stamp);
   * }, _.now());
   * // => Logs the number of milliseconds it took for the deferred invocation.
   */
  var now = function() {
    return root$1.Date.now();
  };

  /**
   * Creates a debounced function that delays invoking `func` until after `wait`
   * milliseconds have elapsed since the last time the debounced function was
   * invoked. The debounced function comes with a `cancel` method to cancel
   * delayed `func` invocations and a `flush` method to immediately invoke them.
   * Provide `options` to indicate whether `func` should be invoked on the
   * leading and/or trailing edge of the `wait` timeout. The `func` is invoked
   * with the last arguments provided to the debounced function. Subsequent
   * calls to the debounced function return the result of the last `func`
   * invocation.
   *
   * **Note:** If `leading` and `trailing` options are `true`, `func` is
   * invoked on the trailing edge of the timeout only if the debounced function
   * is invoked more than once during the `wait` timeout.
   *
   * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
   * until to the next tick, similar to `setTimeout` with a timeout of `0`.
   *
   * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
   * for details over the differences between `_.debounce` and `_.throttle`.
   *
   * @static
   * @memberOf _
   * @since 0.1.0
   * @category Function
   * @param {Function} func The function to debounce.
   * @param {number} [wait=0] The number of milliseconds to delay.
   * @param {Object} [options={}] The options object.
   * @param {boolean} [options.leading=false]
   *  Specify invoking on the leading edge of the timeout.
   * @param {number} [options.maxWait]
   *  The maximum time `func` is allowed to be delayed before it's invoked.
   * @param {boolean} [options.trailing=true]
   *  Specify invoking on the trailing edge of the timeout.
   * @returns {Function} Returns the new debounced function.
   * @example
   *
   * // Avoid costly calculations while the window size is in flux.
   * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
   *
   * // Invoke `sendMail` when clicked, debouncing subsequent calls.
   * jQuery(element).on('click', _.debounce(sendMail, 300, {
   *   'leading': true,
   *   'trailing': false
   * }));
   *
   * // Ensure `batchLog` is invoked once after 1 second of debounced calls.
   * var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });
   * var source = new EventSource('/stream');
   * jQuery(source).on('message', debounced);
   *
   * // Cancel the trailing debounced invocation.
   * jQuery(window).on('popstate', debounced.cancel);
   */
  function debounce$1(func, wait, options) {
    var lastArgs,
        lastThis,
        maxWait,
        result,
        timerId,
        lastCallTime,
        lastInvokeTime = 0,
        leading = false,
        maxing = false,
        trailing = true;

    if (typeof func != 'function') {
      throw new TypeError(FUNC_ERROR_TEXT);
    }
    wait = toNumber(wait) || 0;
    if (isObject$1(options)) {
      leading = !!options.leading;
      maxing = 'maxWait' in options;
      maxWait = maxing ? nativeMax$1(toNumber(options.maxWait) || 0, wait) : maxWait;
      trailing = 'trailing' in options ? !!options.trailing : trailing;
    }

    function invokeFunc(time) {
      var args = lastArgs,
          thisArg = lastThis;

      lastArgs = lastThis = undefined;
      lastInvokeTime = time;
      result = func.apply(thisArg, args);
      return result;
    }

    function leadingEdge(time) {
      // Reset any `maxWait` timer.
      lastInvokeTime = time;
      // Start the timer for the trailing edge.
      timerId = setTimeout(timerExpired, wait);
      // Invoke the leading edge.
      return leading ? invokeFunc(time) : result;
    }

    function remainingWait(time) {
      var timeSinceLastCall = time - lastCallTime,
          timeSinceLastInvoke = time - lastInvokeTime,
          result = wait - timeSinceLastCall;

      return maxing ? nativeMin(result, maxWait - timeSinceLastInvoke) : result;
    }

    function shouldInvoke(time) {
      var timeSinceLastCall = time - lastCallTime,
          timeSinceLastInvoke = time - lastInvokeTime;

      // Either this is the first call, activity has stopped and we're at the
      // trailing edge, the system time has gone backwards and we're treating
      // it as the trailing edge, or we've hit the `maxWait` limit.
      return (lastCallTime === undefined || (timeSinceLastCall >= wait) ||
        (timeSinceLastCall < 0) || (maxing && timeSinceLastInvoke >= maxWait));
    }

    function timerExpired() {
      var time = now();
      if (shouldInvoke(time)) {
        return trailingEdge(time);
      }
      // Restart the timer.
      timerId = setTimeout(timerExpired, remainingWait(time));
    }

    function trailingEdge(time) {
      timerId = undefined;

      // Only invoke if we have `lastArgs` which means `func` has been
      // debounced at least once.
      if (trailing && lastArgs) {
        return invokeFunc(time);
      }
      lastArgs = lastThis = undefined;
      return result;
    }

    function cancel() {
      if (timerId !== undefined) {
        clearTimeout(timerId);
      }
      lastInvokeTime = 0;
      lastArgs = lastCallTime = lastThis = timerId = undefined;
    }

    function flush() {
      return timerId === undefined ? result : trailingEdge(now());
    }

    function debounced() {
      var time = now(),
          isInvoking = shouldInvoke(time);

      lastArgs = arguments;
      lastThis = this;
      lastCallTime = time;

      if (isInvoking) {
        if (timerId === undefined) {
          return leadingEdge(lastCallTime);
        }
        if (maxing) {
          // Handle invocations in a tight loop.
          timerId = setTimeout(timerExpired, wait);
          return invokeFunc(lastCallTime);
        }
      }
      if (timerId === undefined) {
        timerId = setTimeout(timerExpired, wait);
      }
      return result;
    }
    debounced.cancel = cancel;
    debounced.flush = flush;
    return debounced;
  }

  /**
   * Checks if `value` is the
   * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
   * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
   *
   * @static
   * @memberOf _
   * @since 0.1.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is an object, else `false`.
   * @example
   *
   * _.isObject({});
   * // => true
   *
   * _.isObject([1, 2, 3]);
   * // => true
   *
   * _.isObject(_.noop);
   * // => true
   *
   * _.isObject(null);
   * // => false
   */
  function isObject$1(value) {
    var type = typeof value;
    return !!value && (type == 'object' || type == 'function');
  }

  /**
   * Checks if `value` is object-like. A value is object-like if it's not `null`
   * and has a `typeof` result of "object".
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
   * @example
   *
   * _.isObjectLike({});
   * // => true
   *
   * _.isObjectLike([1, 2, 3]);
   * // => true
   *
   * _.isObjectLike(_.noop);
   * // => false
   *
   * _.isObjectLike(null);
   * // => false
   */
  function isObjectLike$1(value) {
    return !!value && typeof value == 'object';
  }

  /**
   * Checks if `value` is classified as a `Symbol` primitive or object.
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
   * @example
   *
   * _.isSymbol(Symbol.iterator);
   * // => true
   *
   * _.isSymbol('abc');
   * // => false
   */
  function isSymbol$1(value) {
    return typeof value == 'symbol' ||
      (isObjectLike$1(value) && objectToString$1.call(value) == symbolTag$1);
  }

  /**
   * Converts `value` to a number.
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Lang
   * @param {*} value The value to process.
   * @returns {number} Returns the number.
   * @example
   *
   * _.toNumber(3.2);
   * // => 3.2
   *
   * _.toNumber(Number.MIN_VALUE);
   * // => 5e-324
   *
   * _.toNumber(Infinity);
   * // => Infinity
   *
   * _.toNumber('3.2');
   * // => 3.2
   */
  function toNumber(value) {
    if (typeof value == 'number') {
      return value;
    }
    if (isSymbol$1(value)) {
      return NAN;
    }
    if (isObject$1(value)) {
      var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
      value = isObject$1(other) ? (other + '') : other;
    }
    if (typeof value != 'string') {
      return value === 0 ? value : +value;
    }
    value = value.replace(reTrim, '');
    var isBinary = reIsBinary.test(value);
    return (isBinary || reIsOctal.test(value))
      ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
      : (reIsBadHex.test(value) ? NAN : +value);
  }

  var lodash_debounce = debounce$1;

  var lib = (typeof self === 'object' && self.self === self && self) ||
    (typeof commonjsGlobal === 'object' && commonjsGlobal.global === commonjsGlobal && commonjsGlobal) ||
    commonjsGlobal;

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
        var tab = React__default.createElement("li", {
          className: "bx--tabs__nav-item"
        }, React__default.createElement("a", {
          className: "bx--tabs__nav-link",
          href: "javascript:void(0)"
        }, "\xA0"));
        return React__default.createElement("nav", {
          className: "bx--tabs bx--skeleton"
        }, React__default.createElement("div", {
          className: "bx--tabs-trigger"
        }, React__default.createElement("a", {
          href: "javascript:void(0)",
          className: "bx--tabs-trigger-text"
        }, "\xA0"), React__default.createElement("svg", {
          width: "10",
          height: "5",
          viewBox: "0 0 10 5",
          "fill-rule": "evenodd"
        }, React__default.createElement("path", {
          d: "M10 0L5 5 0 0z"
        }))), React__default.createElement("ul", {
          className: "bx--tabs__nav bx--tabs__nav--hidden"
        }, React__default.createElement("li", {
          className: "bx--tabs__nav-item bx--tabs__nav-item--selected"
        }, React__default.createElement("a", {
          className: "bx--tabs__nav-link",
          href: "javascript:void(0)"
        }, "\xA0")), tab, tab, tab));
      }
    }]);

    _inherits(TabsSkeleton, _React$Component);

    return TabsSkeleton;
  }(React__default.Component);

  var TabContent = function TabContent(props) {
    var selected = props.selected,
        children = props.children,
        other = _objectWithoutProperties(props, ["selected", "children"]);

    return React__default.createElement("div", _extends({}, other, {
      selected: selected,
      hidden: !selected
    }), children);
  };

  TabContent.propTypes = {
    selected: PropTypes.bool,
    children: PropTypes.node
  };
  TabContent.defaultProps = {
    selected: false
  };

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
        return _this["tab".concat(index)] || React__default.Children.toArray(_this.props.children)[index];
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
          var tabCount = React__default.Children.count(_this.props.children) - 1;
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
        return React__default.Children.map(this.props.children, function (tab) {
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
          var newTab = React__default.cloneElement(tab, {
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
        var tabContentWithProps = React__default.Children.map(tabsWithProps, function (tab) {
          var _tab$props = tab.props,
              children = _tab$props.children,
              selected = _tab$props.selected;
          return React__default.createElement(TabContent, {
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
        return React__default.createElement("div", null, React__default.createElement("nav", _extends({}, other, {
          className: classes.tabs,
          role: role
        }), React__default.createElement("div", {
          role: "listbox",
          "aria-label": ariaLabel,
          tabIndex: 0,
          className: "bx--tabs-trigger",
          onClick: this.handleDropdownClick,
          onKeyPress: this.handleDropdownClick
        }, React__default.createElement("a", {
          tabIndex: -1,
          className: "bx--tabs-trigger-text",
          href: triggerHref,
          onClick: this.handleDropdownClick
        }, selectedLabel), React__default.createElement(Icon, {
          description: iconDescription,
          name: "caret--down"
        })), React__default.createElement("ul", {
          role: "tablist",
          className: classes.tablist
        }, tabsWithProps)), tabContentWithProps);
      }
    }]);

    _inherits(Tabs, _React$Component);

    return Tabs;
  }(React__default.Component);

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

  /**
   * Generic component used for reacting to a click event happening outside of a
   * given `children` element.
   */

  var ClickListener =
  /*#__PURE__*/
  function (_React$Component) {
    function ClickListener(props) {
      var _this;

      _classCallCheck(this, ClickListener);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(ClickListener).call(this, props)); // We manually bind handlers in this Component, versus using class
      // properties, so that we can properly test the `handleRef` handler with
      // enzyme.

      _this.handleRef = _this.handleRef.bind(_assertThisInitialized(_assertThisInitialized(_this)));
      _this.handleDocumentClick = _this.handleDocumentClick.bind(_assertThisInitialized(_assertThisInitialized(_this)));
      return _this;
    }

    _createClass(ClickListener, [{
      key: "componentDidMount",
      value: function componentDidMount() {
        document.addEventListener('click', this.handleDocumentClick);
      }
    }, {
      key: "componentWillUnmount",
      value: function componentWillUnmount() {
        document.removeEventListener('click', this.handleDocumentClick);
      }
    }, {
      key: "handleDocumentClick",
      value: function handleDocumentClick(evt) {
        if (this.element) {
          if (this.element.contains && !this.element.contains(evt.target)) {
            this.props.onClickOutside(evt);
          }
        }
      }
    }, {
      key: "handleRef",
      value: function handleRef(el) {
        var children = this.props.children;
        this.element = el;
        /**
         * One important note, `children.ref` corresponds to a `ref` prop passed in
         * directly to the child, not necessarily a `ref` defined in the component.
         * This means that here we target the following `ref` location:
         *
         * <ClickListener onClickOutside={() => {}}>
         *   <Child ref={targetedRefHere} />
         * </ClickListener>
         */

        if (children.ref && typeof children.ref === 'function') {
          children.ref(el);
        }
      }
    }, {
      key: "render",
      value: function render() {
        return React__default.cloneElement(this.props.children, {
          ref: this.handleRef
        });
      }
    }]);

    _inherits(ClickListener, _React$Component);

    return ClickListener;
  }(React__default.Component);

  _defineProperty(ClickListener, "propTypes", {
    children: PropTypes.element.isRequired,
    onClickOutside: PropTypes.func.isRequired
  });

  /**
   * The structure for the position of floating menu.
   * @typedef {Object} FloatingMenu~position
   * @property {number} left The left position.
   * @property {number} top The top position.
   * @property {number} right The right position.
   * @property {number} bottom The bottom position.
   */

  /**
   * The structure for the size of floating menu.
   * @typedef {Object} FloatingMenu~size
   * @property {number} width The width.
   * @property {number} height The height.
   */

  /**
   * The structure for the position offset of floating menu.
   * @typedef {Object} FloatingMenu~offset
   * @property {number} top The top position.
   * @property {number} left The left position.
   */

  var DIRECTION_LEFT = 'left';
  var DIRECTION_TOP = 'top';
  var DIRECTION_RIGHT = 'right';
  var DIRECTION_BOTTOM = 'bottom';
  var hasCreatePortal = typeof ReactDOM.createPortal === 'function';
  /**
   * @param {FloatingMenu~offset} [oldMenuOffset={}] The old value.
   * @param {FloatingMenu~offset} [menuOffset={}] The new value.
   * @returns `true` if the parent component wants to change in the adjustment of the floating menu position.
   * @private
   */

  var hasChangeInOffset = function hasChangeInOffset() {
    var oldMenuOffset = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var menuOffset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    if (_typeof(oldMenuOffset) !== _typeof(menuOffset)) {
      return true;
    } else if (Object(menuOffset) === menuOffset && typeof menuOffset !== 'function') {
      return oldMenuOffset.top !== menuOffset.top || oldMenuOffset.left !== menuOffset.left;
    }

    return oldMenuOffset !== menuOffset;
  };
  /**
   * @param {Object} params The parameters.
   * @param {FloatingMenu~size} params.menuSize The size of the menu.
   * @param {FloatingMenu~position} params.refPosition The position of the triggering element.
   * @param {FloatingMenu~offset} [params.offset={ left: 0, top: 0 }] The position offset of the menu.
   * @param {string} [params.direction=bottom] The menu direction.
   * @param {number} [params.scrollY=0] The scroll position of the viewport.
   * @returns {FloatingMenu~offset} The position of the menu, relative to the top-left corner of the viewport.
   * @private
   */


  var getFloatingPosition = function getFloatingPosition(_ref) {
    var _DIRECTION_LEFT$DIREC;

    var menuSize = _ref.menuSize,
        refPosition = _ref.refPosition,
        _ref$offset = _ref.offset,
        offset = _ref$offset === void 0 ? {} : _ref$offset,
        _ref$direction = _ref.direction,
        direction = _ref$direction === void 0 ? DIRECTION_BOTTOM : _ref$direction,
        _ref$scrollY = _ref.scrollY,
        scrollY = _ref$scrollY === void 0 ? 0 : _ref$scrollY;
    var _refPosition$left = refPosition.left,
        refLeft = _refPosition$left === void 0 ? 0 : _refPosition$left,
        _refPosition$top = refPosition.top,
        refTop = _refPosition$top === void 0 ? 0 : _refPosition$top,
        _refPosition$right = refPosition.right,
        refRight = _refPosition$right === void 0 ? 0 : _refPosition$right,
        _refPosition$bottom = refPosition.bottom,
        refBottom = _refPosition$bottom === void 0 ? 0 : _refPosition$bottom;
    var width = menuSize.width,
        height = menuSize.height;
    var _offset$top = offset.top,
        top = _offset$top === void 0 ? 0 : _offset$top,
        _offset$left = offset.left,
        left = _offset$left === void 0 ? 0 : _offset$left;
    var refCenterHorizontal = (refLeft + refRight) / 2;
    var refCenterVertical = (refTop + refBottom) / 2;
    return (_DIRECTION_LEFT$DIREC = {}, _defineProperty(_DIRECTION_LEFT$DIREC, DIRECTION_LEFT, function () {
      return {
        left: refLeft - width - left,
        top: refCenterVertical - height / 2 + scrollY + top
      };
    }), _defineProperty(_DIRECTION_LEFT$DIREC, DIRECTION_TOP, function () {
      return {
        left: refCenterHorizontal - width / 2 + left,
        top: refTop - height + scrollY - top
      };
    }), _defineProperty(_DIRECTION_LEFT$DIREC, DIRECTION_RIGHT, function () {
      return {
        left: refRight + left,
        top: refCenterVertical - height / 2 + scrollY + top
      };
    }), _defineProperty(_DIRECTION_LEFT$DIREC, DIRECTION_BOTTOM, function () {
      return {
        left: refCenterHorizontal - width / 2 + left,
        top: refBottom + scrollY + top
      };
    }), _DIRECTION_LEFT$DIREC)[direction]();
  };
  /**
   * A menu that is detached from the triggering element.
   * Useful when the container of the triggering element cannot have `overflow:visible` style, etc.
   */


  var FloatingMenu =
  /*#__PURE__*/
  function (_React$Component) {
    // `true` if the menu body is mounted and calculation of the position is in progress.

    /**
     * The cached refernce to the menu container.
     * Only used if React portal API is not available.
     * @type {Element}
     * @private
     */

    /**
     * The cached refernce to the menu body.
     * @type {Element}
     * @private
     */
    function FloatingMenu(props) {
      var _this;

      _classCallCheck(this, FloatingMenu);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(FloatingMenu).call(this, props));

      _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "_placeInProgress", false);

      _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
        /**
         * The position of the menu, relative to the top-left corner of the viewport.
         * @type {FloatingMenu~offset}
         */
        floatingPosition: undefined
      });

      _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "_menuContainer", null);

      _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "_menuBody", null);

      _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "_updateMenuSize", function () {
        var prevProps = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        var menuBody = _this._menuBody;
        warning_1(menuBody, 'The DOM node for menu body for calculating its position is not available. Skipping...');

        if (!menuBody) {
          return;
        }

        var _prevProps$menuPositi = prevProps.menuPosition,
            oldRefPosition = _prevProps$menuPositi === void 0 ? {} : _prevProps$menuPositi,
            _prevProps$menuOffset = prevProps.menuOffset,
            oldMenuOffset = _prevProps$menuOffset === void 0 ? {} : _prevProps$menuOffset,
            oldMenuDirection = prevProps.menuDirection;
        var _this$props = _this.props,
            _this$props$menuPosit = _this$props.menuPosition,
            refPosition = _this$props$menuPosit === void 0 ? {} : _this$props$menuPosit,
            _this$props$menuOffse = _this$props.menuOffset,
            menuOffset = _this$props$menuOffse === void 0 ? {} : _this$props$menuOffse,
            menuDirection = _this$props.menuDirection;

        if (oldRefPosition.top !== refPosition.top || oldRefPosition.right !== refPosition.right || oldRefPosition.bottom !== refPosition.bottom || oldRefPosition.left !== refPosition.left || hasChangeInOffset(oldMenuOffset, menuOffset) || oldMenuDirection !== menuDirection) {
          var menuSize = menuBody.getBoundingClientRect();
          var offset = typeof menuOffset !== 'function' ? menuOffset : menuOffset(menuBody, menuDirection); // Skips if either in the following condition:
          // a) Menu body has `display:none`
          // b) `menuOffset` as a callback returns `undefined` (The callback saw that it couldn't calculate the value)

          if (menuSize.width > 0 && menuSize.height > 0 || !offset) {
            _this.setState({
              floatingPosition: getFloatingPosition({
                menuSize: menuSize,
                refPosition: refPosition,
                direction: menuDirection,
                offset: offset,
                scrollY: lib.scrollY
              })
            });
          }
        }
      });

      _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "_getChildrenWithProps", function () {
        var _this$props2 = _this.props,
            styles = _this$props2.styles,
            children = _this$props2.children;
        var pos = _this.state.floatingPosition; // If no pos available, we need to hide the element (offscreen to the left)
        // This is done so we can measure the content before positioning it correctly.

        var positioningStyle = pos ? {
          left: "".concat(pos.left, "px"),
          top: "".concat(pos.top, "px"),
          right: 'auto'
        } : {
          visibility: 'hidden',
          top: '0px'
        };
        return React__default.cloneElement(children, {
          style: _objectSpread({}, styles, positioningStyle, {
            position: 'absolute',
            margin: 0,
            opacity: 1
          })
        });
      });

      if (typeof document !== 'undefined' && hasCreatePortal) {
        _this.el = document.createElement('div');
      }

      return _this;
    }
    /**
     * Calculates the position in the viewport of floating menu,
     * once this component is mounted or updated upon change in the following props:
     *
     * * `menuPosition` (The position in the viewport of the trigger button)
     * * `menuOffset` (The adjustment that should be applied to the calculated floating menu's position)
     * * `menuDirection` (Where the floating menu menu should be placed relative to the trigger button)
     *
     * @private
     */


    _createClass(FloatingMenu, [{
      key: "componentDidUpdate",
      value: function componentDidUpdate(prevProps) {
        if (!hasCreatePortal) {
          ReactDOM.render(this._getChildrenWithProps(), this._menuContainer);
        } else {
          this._updateMenuSize(prevProps);
        }

        var onPlace = this.props.onPlace;

        if (this._placeInProgress && this.state.floatingPosition && typeof onPlace === 'function') {
          onPlace(this._menuBody);
          this._placeInProgress = false;
        }
      }
    }, {
      key: "componentDidMount",
      value: function componentDidMount() {
        var _this2 = this;

        var menuRef = this.props.menuRef;

        if (!hasCreatePortal) {
          this._menuContainer = document.createElement('div');
          document.body.appendChild(this._menuContainer);
          var style = {
            display: 'block',
            opacity: 0
          };
          var childrenWithProps = React__default.cloneElement(this.props.children, {
            style: style
          });
          ReactDOM.render(childrenWithProps, this._menuContainer, function () {
            _this2._menuBody = _this2._menuContainer.firstChild;

            _this2._updateMenuSize();

            ReactDOM.render(_this2._getChildrenWithProps(), _this2._menuContainer, function () {
              _this2._placeInProgress = true;
              menuRef && menuRef(_this2._menuBody);
            });
          });
        } else {
          if (this.el && this.el.firstChild) {
            this._menuBody = this.el.firstChild;
            document.body.appendChild(this._menuBody);
            this._placeInProgress = true;
            menuRef && menuRef(this._menuBody);
          }

          this._updateMenuSize();
        }
      }
    }, {
      key: "componentWillUnmount",
      value: function componentWillUnmount() {
        var menuRef = this.props.menuRef;
        menuRef && menuRef(null);
        this._placeInProgress = false;

        if (!hasCreatePortal) {
          var menuContainer = this._menuContainer;
          ReactDOM.unmountComponentAtNode(menuContainer);

          if (menuContainer && menuContainer.parentNode) {
            menuContainer.parentNode.removeChild(menuContainer);
          }

          this._menuContainer = null;
        } else if (this._menuBody) {
          // Moves the menu body back to the portal container so that React unmount code does not crash
          this.el.appendChild(this._menuBody);
        }
      }
      /**
       * @returns The child nodes, with styles containing the floating menu position.
       * @private
       */

    }, {
      key: "render",
      value: function render() {
        if (typeof document !== 'undefined' && hasCreatePortal) {
          return ReactDOM.createPortal(this._getChildrenWithProps(), this.el);
        }

        return null;
      }
    }]);

    _inherits(FloatingMenu, _React$Component);

    return FloatingMenu;
  }(React__default.Component);

  _defineProperty(FloatingMenu, "propTypes", {
    /**
     * Contents to put into the floating menu.
     */
    children: PropTypes.object,

    /**
     * The position in the viewport of the trigger button.
     */
    menuPosition: PropTypes.shape({
      top: PropTypes.number,
      right: PropTypes.number,
      bottom: PropTypes.number,
      left: PropTypes.number
    }),

    /**
     * Where to put the tooltip, relative to the trigger button.
     */
    menuDirection: PropTypes.oneOf([DIRECTION_LEFT, DIRECTION_TOP, DIRECTION_RIGHT, DIRECTION_BOTTOM]),

    /**
     * The adjustment of the floating menu position, considering the position of dropdown arrow, etc.
     */
    menuOffset: PropTypes.oneOfType([PropTypes.shape({
      top: PropTypes.number,
      left: PropTypes.number
    }), PropTypes.func]),

    /**
     * The additional styles to put to the floating menu.
     */
    styles: PropTypes.object,

    /**
     * The callback called when the menu body has been mounted to/will be unmounted from the DOM.
     */
    menuRef: PropTypes.func,

    /**
     * The callback called when the menu body has been mounted and positioned.
     */
    onPlace: PropTypes.func
  });

  _defineProperty(FloatingMenu, "defaultProps", {
    menuPosition: {},
    menuOffset: {},
    menuDirection: DIRECTION_BOTTOM
  });

  // mdn resize function

  var OptimizedResize = function optimizedResize() {
    var callbacks = [];
    var running = false; // run the actual callbacks

    function runCallbacks() {
      callbacks.forEach(function (callback) {
        callback();
      });
      running = false;
    } // fired on resize event


    function resize() {
      if (!running) {
        running = true;
        lib.requestAnimationFrame(runCallbacks);
      }
    } // adds callback to loop


    function addCallback(callback) {
      if (callback) {
        var index = callbacks.indexOf(callback);

        if (index < 0) {
          callbacks.push(callback);
        }
      }
    }

    return {
      // public method to add additional callback
      add: function add(callback) {
        if (!callbacks.length) {
          lib.addEventListener('resize', resize);
        }

        addCallback(callback);
        return {
          release: function release() {
            var index = callbacks.indexOf(callback);

            if (index >= 0) {
              callbacks.splice(index, 1);
            }
          }
        };
      }
    };
  }();

  var matchesFuncName = typeof Element !== 'undefined' && ['matches', 'webkitMatchesSelector', 'msMatchesSelector'].filter(function (name) {
    return typeof Element.prototype[name] === 'function';
  })[0];
  /**
   * @param {Node} elem A DOM node.
   * @param {string} selector A CSS selector
   * @returns {boolean} `true` if the given DOM element is a element node and matches the given selector.
   * @private
   */

  var matches = function matches(elem, selector) {
    return typeof elem[matchesFuncName] === 'function' && elem[matchesFuncName](selector);
  };

  var on = function on(element) {
    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    element.addEventListener.apply(element, args);
    return {
      release: function release() {
        element.removeEventListener.apply(element, args);
        return null;
      }
    };
  };
  /**
   * @param {Element} menuBody The menu body with the menu arrow.
   * @returns {FloatingMenu~offset} The adjustment of the floating menu position, upon the position of the menu arrow.
   * @private
   */


  var getMenuOffset = function getMenuOffset(menuBody) {
    var menuWidth = menuBody.offsetWidth;
    var arrowStyle = menuBody.ownerDocument.defaultView.getComputedStyle(menuBody, ':before');
    var values = ['top', 'left', 'width', 'height', 'border-top-width'].reduce(function (o, name) {
      return _objectSpread({}, o, _defineProperty({}, name, Number((/^([\d-]+)px$/.exec(arrowStyle.getPropertyValue(name)) || [])[1])));
    }, {});

    if (Object.keys(values).every(function (name) {
      return !isNaN(values[name]);
    })) {
      var top = values.top,
          left = values.left,
          width = values.width,
          height = values.height,
          borderTopWidth = values['border-top-width'];
      return {
        left: menuWidth / 2 - (left + Math.sqrt(Math.pow(width, 2) + Math.pow(height, 2)) / 2),
        top: Math.sqrt(Math.pow(borderTopWidth, 2) * 2) - top
      };
    }
  };

  var OverflowMenu =
  /*#__PURE__*/
  function (_Component) {
    function OverflowMenu() {
      var _getPrototypeOf2;

      var _temp, _this;

      _classCallCheck(this, OverflowMenu);

      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }

      return _possibleConstructorReturn(_this, (_temp = _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(OverflowMenu)).call.apply(_getPrototypeOf2, [this].concat(args))), _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "_hFocusIn", null), _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
        /**
         * The open/closed state.
         * @type {boolean}
         */
        open: _this.props.open
      }), _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "getMenuPosition", function () {
        if (_this.menuEl) {
          var menuPosition = _this.menuEl.getBoundingClientRect();

          _this.setState({
            menuPosition: menuPosition
          });
        }
      }), _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleClick", function (evt) {
        _this.setState({
          open: !_this.state.open
        });

        _this.props.onClick(evt);
      }), _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleKeyDown", function (evt) {
        if (evt.which === 40) {
          _this.setState({
            open: !_this.state.open
          });

          _this.props.onClick(evt);
        }
      }), _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleKeyPress", function (evt) {
        // only respond to key events when the menu is closed, so that menu items still respond to key events
        if (!_this.state.open) {
          var key = evt.key || evt.which;

          if (key === 'Enter' || key === 13 || key === ' ' || key === 32) {
            _this.setState({
              open: true
            });
          }
        }
      }), _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleClickOutside", function () {
        _this.closeMenu();
      }), _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "closeMenu", function () {
        _this.setState({
          open: false
        });
      }), _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "bindMenuEl", function (menuEl) {
        _this.menuEl = menuEl;
      }), _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "_bindMenuBody", function (menuBody) {
        if (!menuBody && _this._hFocusIn) {
          _this._hFocusIn = _this._hFocusIn.release();
        }
      }), _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "_handlePlace", function (menuBody) {
        if (menuBody) {
          (menuBody.querySelector('[data-floating-menu-primary-focus]') || menuBody).focus();
          var hasFocusin = 'onfocusin' in window;
          var focusinEventName = hasFocusin ? 'focusin' : 'focus';
          _this._hFocusIn = on(menuBody.ownerDocument, focusinEventName, function (event) {
            var target = event.target;

            if (!menuBody.contains(target)) {
              _this.closeMenu();

              if (_this.menuEl && !matches(target, '.bx--overflow-menu,.bx--overflow-menu-options')) {
                // Note:
                // The last focusable element in the page should NOT be the trigger button of overflow menu.
                // Doing so breaks the code that detects if floating menu losing focus, e.g. by keyboard events.
                _this.menuEl.focus();
              }
            }
          }, !hasFocusin);
        }
      }), _temp));
    }

    _createClass(OverflowMenu, [{
      key: "shouldComponentUpdate",
      value: function shouldComponentUpdate(nextProps, nextState) {
        var _this2 = this;

        if (nextState.open && !this.state.open) {
          requestAnimationFrame(function () {
            _this2.getMenuPosition();
          });
          return false; // Let `.getMenuPosition()` cause render
        }

        return true;
      }
    }, {
      key: "componentDidMount",
      value: function componentDidMount() {
        var _this3 = this;

        requestAnimationFrame(function () {
          _this3.getMenuPosition();
        });
        this.hResize = OptimizedResize.add(function () {
          _this3.getMenuPosition();
        });
      }
    }, {
      key: "componentWillReceiveProps",
      value: function componentWillReceiveProps(nextProps) {
        if (nextProps.open !== this.props.open) {
          this.setState({
            open: nextProps.open
          });
        }
      }
    }, {
      key: "componentWillUnmount",
      value: function componentWillUnmount() {
        this.hResize.release();
      }
    }, {
      key: "render",
      value: function render() {
        var _this4 = this;

        var _this$props = this.props,
            id = _this$props.id,
            tabIndex = _this$props.tabIndex,
            ariaLabel = _this$props.ariaLabel,
            children = _this$props.children,
            iconDescription = _this$props.iconDescription,
            iconName = _this$props.iconName,
            flipped = _this$props.flipped,
            floatingMenu = _this$props.floatingMenu,
            menuOffset = _this$props.menuOffset,
            menuOffsetFlip = _this$props.menuOffsetFlip,
            iconClass = _this$props.iconClass,
            onClick = _this$props.onClick,
            renderIcon = _this$props.renderIcon,
            other = _objectWithoutProperties(_this$props, ["id", "tabIndex", "ariaLabel", "children", "iconDescription", "iconName", "flipped", "floatingMenu", "menuOffset", "menuOffsetFlip", "iconClass", "onClick", "renderIcon"]);

        var open = this.state.open;
        var overflowMenuClasses = classNames(this.props.className, 'bx--overflow-menu', {
          'bx--overflow-menu--open': open
        });
        var overflowMenuOptionsClasses = classNames('bx--overflow-menu-options', {
          'bx--overflow-menu--flip': this.props.flipped,
          'bx--overflow-menu-options--open': open
        });
        var overflowMenuIconClasses = classNames('bx--overflow-menu__icon', iconClass);
        var childrenWithProps = React__default.Children.toArray(children).map(function (child) {
          return React__default.cloneElement(child, {
            closeMenu: _this4.closeMenu
          });
        });
        var menuBody = React__default.createElement("ul", {
          className: overflowMenuOptionsClasses,
          tabIndex: "-1",
          ref: !floatingMenu && this._bindMenuBody
        }, childrenWithProps);
        var wrappedMenuBody = !floatingMenu ? menuBody : React__default.createElement("div", {
          role: "menuitem"
        }, React__default.createElement(FloatingMenu, {
          menuPosition: this.state.menuPosition,
          menuOffset: flipped ? menuOffsetFlip : menuOffset,
          menuRef: this._bindMenuBody,
          onPlace: this._handlePlace
        }, menuBody));
        var iconProps = {
          onClick: this.handleClick,
          onKeyDown: this.handleKeyDown,
          className: overflowMenuIconClasses,
          description: iconDescription,
          focusable: 'false' // Prevent `<svg>` in trigger icon from getting focus for IE11

        };
        return React__default.createElement(ClickListener, {
          onClickOutside: this.handleClickOutside
        }, React__default.createElement("div", _extends({}, other, {
          role: "button",
          "aria-haspopup": true,
          "aria-expanded": this.state.open,
          className: overflowMenuClasses,
          onKeyDown: this.handleKeyPress,
          "aria-label": ariaLabel,
          id: id,
          tabIndex: tabIndex,
          ref: this.bindMenuEl
        }), renderIcon ? renderIcon(iconProps) : React__default.createElement(Icon, _extends({}, iconProps, {
          name: iconName,
          style: {
            width: '100%'
          }
        })), open && wrappedMenuBody));
      }
    }]);

    _inherits(OverflowMenu, _Component);

    return OverflowMenu;
  }(React.Component);

  _defineProperty(OverflowMenu, "propTypes", {
    /**
     * `true` if the menu should be open.
     */
    open: PropTypes.bool,

    /**
     * `true` if the menu alignment should be flipped.
     */
    flipped: PropTypes.bool,

    /**
     * `true` if the menu should be floated, making the DOM of the menu body orphaned from the trigger button.
     * Useful when the container of the triggering element cannot have `overflow:visible` style, etc.
     */
    floatingMenu: PropTypes.bool,

    /**
     * The child nodes.
     */
    children: PropTypes.node,

    /**
     * The CSS class names.
     */
    className: PropTypes.string,

    /**
     * The `tabindex` attribute.
     */
    tabIndex: PropTypes.number,

    /**
     * The element ID.
     */
    id: PropTypes.string,

    /**
     * The ARIA label.
     */
    ariaLabel: PropTypes.string,

    /**
     * The event handler for the `click` event.
     */
    onClick: PropTypes.func,

    /**
     * The event handler for the `focus` event.
     */
    onFocus: PropTypes.func,

    /**
     * The event handler for the `keydown` event.
     */
    onKeyDown: PropTypes.func,

    /**
     * The icon description.
     */
    iconDescription: PropTypes.string.isRequired,

    /**
     * The icon name.
     */
    iconName: PropTypes.string,

    /**
     * The adjustment in position applied to the floating menu.
     */
    menuOffset: PropTypes.oneOfType([PropTypes.shape({
      top: PropTypes.number,
      left: PropTypes.number
    }), PropTypes.func]),

    /**
     * The adjustment in position applied to the floating menu.
     */
    menuOffsetFlip: PropTypes.oneOfType([PropTypes.shape({
      top: PropTypes.number,
      left: PropTypes.number
    }), PropTypes.func]),

    /**
     * The CSS class for the icon.
     */
    iconClass: PropTypes.string,

    /**
     * Function called to override icon rendering.
     */
    renderIcon: PropTypes.func
  });

  _defineProperty(OverflowMenu, "defaultProps", {
    ariaLabel: 'list of options',
    iconDescription: 'open and close list of options',
    iconName: 'overflow-menu',
    open: false,
    flipped: false,
    floatingMenu: false,
    onClick: function onClick() {},
    onKeyDown: function onKeyDown() {},
    tabIndex: 0,
    menuOffset: getMenuOffset,
    menuOffsetFlip: getMenuOffset
  });

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
        var currentPosition = lib.pageYOffset || 0;

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
        this._debouncedScroll = lodash_debounce(this.handleScroll, 25);
        lib.addEventListener('scroll', this._debouncedScroll);
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
        lib.removeEventListener('scroll', this._debouncedScroll);
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
        var defaultIcon = React__default.createElement("svg", {
          width: "24",
          height: "24",
          viewBox: "0 0 24 24"
        }, React__default.createElement("path", {
          fill: "#D8D8D8",
          d: "M0 0h24v24H0z",
          fillRule: "evenodd"
        }));
        var withTabs = hasTabs ? 'bx--detail-page-header--with-tabs' : 'bx--detail-page-header--no-tabs';
        var scrolled = isScrollingDownward ? 'bx--detail-page-header--scroll' : null;
        var classNames$$1 = classNames('bx--detail-page-header', withTabs, scrolled);
        var breadcrumb;
        var tabs;
        var overflow;
        var icon;
        React.Children.map(children, function (child) {
          if (child.type === Breadcrumb) {
            breadcrumb = child;
          }

          if (child.type === Tabs) {
            tabs = child;
          }

          if (child.type === OverflowMenu) {
            overflow = child;
          }

          if (child.type === Icon) {
            icon = child;
          }

          return null;
        });
        var statusStyles = {
          backgroundColor: statusColor
        };
        icon = icon === undefined ? defaultIcon : icon;
        return React__default.createElement("header", _extends({}, other, {
          className: classNames$$1,
          "data-header-active": isScrolled
        }), React__default.createElement("div", {
          className: "bx--detail-page-header-content"
        }, breadcrumb, React__default.createElement("div", {
          className: "bx--detail-page-header-title-container"
        }, React__default.createElement("div", {
          className: "bx--detail-page-header-icon-container"
        }, icon), React__default.createElement("h1", {
          className: "bx--detail-page-header-title"
        }, title), React__default.createElement("div", {
          className: "bx--detail-page-header-status-container"
        }, React__default.createElement("div", {
          style: statusStyles,
          className: "bx--detail-page-header-status-icon"
        }), ' ', React__default.createElement("span", {
          className: "bx--detail-page-header-status-text"
        }, statusText, statusContent))), tabs), React__default.createElement("div", {
          className: "bx--detail-page-header-menu"
        }, overflow));
      }
    }]);

    _inherits(DetailPageHeader, _Component);

    return DetailPageHeader;
  }(React.Component);

  _defineProperty(DetailPageHeader, "propTypes", {
    children: PropTypes.node,
    title: PropTypes.string.isRequired,
    role: PropTypes.string,
    statusColor: PropTypes.string,
    statusContent: PropTypes.node,
    statusText: PropTypes.string,
    hasTabs: PropTypes.bool,
    isScrolled: PropTypes.bool,
    isScrollingDownward: PropTypes.bool
  });

  _defineProperty(DetailPageHeader, "defaultProps", {
    title: 'Provide a title',
    statusText: 'Running',
    role: 'banner',
    // a11y compliance
    hasTabs: false
  });

  var Dropdown =
  /*#__PURE__*/
  function (_PureComponent) {
    function Dropdown(props) {
      var _this;

      _classCallCheck(this, Dropdown);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(Dropdown).call(this, props));

      _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "close", function () {
        _this.setState({
          open: false
        });
      });

      _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "toggle", function (evt) {
        if (_this.props.disabled) {
          return;
        } // Open on click, enter, or space


        if (evt.which === 13 || evt.which === 32 || evt.type === 'click') {
          _this.setState({
            open: !_this.state.open
          });
        }
      });

      _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleKeydown", function (evt) {
        var key = evt.keyCode || evt.which;

        if (key === 27 && _this.state.open) {
          _this.setState({
            open: !_this.state.open
          });
        }
      });

      _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleItemClick", function (info) {
        _this.props.onChange(info);

        _this.setState({
          selectedText: info.itemText,
          value: info.value
        });
      });

      _this.state = _this.resetState(props);
      return _this;
    }

    _createClass(Dropdown, [{
      key: "componentWillReceiveProps",
      value: function componentWillReceiveProps(nextProps) {
        this.setState(this.resetState(nextProps));
      }
    }, {
      key: "componentDidUpdate",
      value: function componentDidUpdate(prevProps, prevState) {
        if (!prevState.open && this.state.open) {
          this.props.onOpen();
        }

        if (prevState.open && !this.state.open) {
          this.props.onClose();
        }
      }
    }, {
      key: "componentDidMount",
      value: function componentDidMount() {
        document.addEventListener('keydown', this.handleKeydown);
      }
    }, {
      key: "componentWillUnmount",
      value: function componentWillUnmount() {
        document.removeEventListener('keydown', this.handleKeydown);
      }
    }, {
      key: "resetState",
      value: function resetState(props) {
        var children = props.children,
            selectedText = props.selectedText,
            value = props.value,
            defaultText = props.defaultText,
            open = props.open;
        var matchingChild;
        React__default.Children.forEach(children, function (child) {
          if (child && (child.props.itemText === selectedText || child.props.value === value)) {
            matchingChild = child;
          }
        });

        if (matchingChild) {
          return {
            open: open,
            selectedText: matchingChild.props.itemText,
            value: matchingChild.props.value
          };
        }

        return {
          open: open,
          selectedText: defaultText,
          value: ''
        };
      }
    }, {
      key: "render",
      value: function render() {
        var _this2 = this;

        var _this$props = this.props,
            ariaLabel = _this$props.ariaLabel,
            tabIndex = _this$props.tabIndex,
            defaultText = _this$props.defaultText,
            iconDescription = _this$props.iconDescription,
            disabled = _this$props.disabled,
            selectedText = _this$props.selectedText,
            onOpen = _this$props.onOpen,
            onClose = _this$props.onClose,
            other = _objectWithoutProperties(_this$props, ["ariaLabel", "tabIndex", "defaultText", "iconDescription", "disabled", "selectedText", "onOpen", "onClose"]);

        var children = React__default.Children.toArray(this.props.children).filter(Boolean).map(function (child) {
          return React__default.cloneElement(child, {
            onClick: function onClick() {
              var _child$props;

              child.props.onClick && (_child$props = child.props).onClick.apply(_child$props, arguments);

              _this2.handleItemClick.apply(_this2, arguments);
            },
            isDropdownOpen: _this2.state.open
          });
        });
        var dropdownClasses = classNames(_defineProperty({
          'bx--dropdown': true,
          'bx--dropdown--open': this.state.open,
          'bx--dropdown--disabled': disabled
        }, this.props.className, this.props.className));
        var dropdown = React__default.createElement(ClickListener, {
          onClickOutside: this.close
        }, React__default.createElement("ul", _extends({}, other, {
          onClick: this.toggle,
          onKeyPress: this.toggle,
          value: this.state.value,
          className: dropdownClasses,
          tabIndex: tabIndex,
          "aria-label": ariaLabel,
          role: "listbox"
        }), React__default.createElement("li", {
          className: "bx--dropdown-text"
        }, this.state.selectedText), React__default.createElement("li", null, React__default.createElement(Icon, {
          name: "caret--down",
          className: "bx--dropdown__arrow",
          description: iconDescription
        })), React__default.createElement("li", null, React__default.createElement("ul", {
          role: "menu",
          className: "bx--dropdown-list",
          "aria-label": "inner dropdown menu"
        }, children))));
        return dropdown;
      }
    }]);

    _inherits(Dropdown, _PureComponent);

    return Dropdown;
  }(React.PureComponent);

  _defineProperty(Dropdown, "propTypes", {
    ariaLabel: PropTypes.string.isRequired,
    children: PropTypes.node,
    className: PropTypes.string,
    defaultText: PropTypes.string,
    value: PropTypes.string,
    tabIndex: PropTypes.number,
    onClick: PropTypes.func,
    onChange: PropTypes.func.isRequired,
    onOpen: PropTypes.func,
    onClose: PropTypes.func,
    selectedText: PropTypes.string,
    open: PropTypes.bool,
    iconDescription: PropTypes.string,
    disabled: PropTypes.bool
  });

  _defineProperty(Dropdown, "defaultProps", {
    tabIndex: 0,
    open: false,
    disabled: false,
    iconDescription: 'open list of options',
    onChange: function onChange() {},
    onOpen: function onOpen() {},
    onClose: function onClose() {}
  });

  var DropdownItem = function DropdownItem(_ref) {
    var className = _ref.className,
        value = _ref.value,
        isDropdownOpen = _ref.isDropdownOpen,
        itemText = _ref.itemText,
        onClick = _ref.onClick,
        onKeyPress = _ref.onKeyPress,
        href = _ref.href,
        selected = _ref.selected,
        other = _objectWithoutProperties(_ref, ["className", "value", "isDropdownOpen", "itemText", "onClick", "onKeyPress", "href", "selected"]);

    var dropdownItemClasses = classNames(_defineProperty({
      'bx--dropdown-item': true
    }, className, className));

    var handleClick = function handleClick() {
      var info = {
        value: value,
        itemText: itemText
      };
      onClick(info);
    };

    var handleKeypress = function handleKeypress() {
      var info = {
        value: value,
        itemText: itemText
      };
      onKeyPress(info);
    };

    return React__default.createElement("li", _extends({}, other, {
      value: value,
      className: dropdownItemClasses,
      onClick: handleClick,
      onKeyPress: handleKeypress,
      tabIndex: -1,
      "aria-selected": selected,
      role: "option"
    }), React__default.createElement("a", {
      tabIndex: isDropdownOpen ? 0 : -1,
      href: href,
      onClick:
      /* istanbul ignore next */
      function onClick(evt) {
        return evt.preventDefault();
      },
      className: "bx--dropdown-link"
    }, itemText));
  };

  DropdownItem.propTypes = {
    value: PropTypes.string.isRequired,
    itemText: PropTypes.string.isRequired,
    className: PropTypes.string,
    onClick: PropTypes.func,
    onKeyPress: PropTypes.func,
    href: PropTypes.string,
    selected: PropTypes.bool
  };
  DropdownItem.defaultProps = {
    onClick:
    /* istanbul ignore next */
    function onClick() {},
    onKeyPress:
    /* istanbul ignore next */
    function onKeyPress() {},
    href: '',
    selected: false
  };

  var DropdownSkeleton = function DropdownSkeleton(_ref) {
    var inline = _ref.inline;
    var wrapperClasses = classNames({
      'bx--skeleton': true,
      'bx--dropdown-v2': true,
      'bx--list-box': true,
      'bx--form-item': true,
      'bx--list-box--inline': inline
    });
    return React__default.createElement("div", {
      className: wrapperClasses
    }, React__default.createElement("div", {
      role: "button",
      "class": "bx--list-box__field"
    }, React__default.createElement("span", {
      className: "bx--list-box__label"
    })));
  };

  DropdownSkeleton.propTypes = {
    inline: PropTypes.bool
  };
  DropdownSkeleton.defaultProps = {
    inline: false
  };

  var defaultItemToString$1 = function defaultItemToString(item) {
    if (typeof item === 'string') {
      return item;
    }

    return item ? item.label : '';
  };

  var DropdownV2 =
  /*#__PURE__*/
  function (_React$Component) {
    function DropdownV2() {
      var _getPrototypeOf2;

      var _temp, _this;

      _classCallCheck(this, DropdownV2);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _possibleConstructorReturn(_this, (_temp = _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(DropdownV2)).call.apply(_getPrototypeOf2, [this].concat(args))), _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleOnChange", function (selectedItem) {
        if (_this.props.onChange) {
          _this.props.onChange({
            selectedItem: selectedItem
          });
        }
      }), _temp));
    }

    _createClass(DropdownV2, [{
      key: "render",
      value: function render() {
        var _this$props = this.props,
            containerClassName = _this$props.className,
            disabled = _this$props.disabled,
            items = _this$props.items,
            label = _this$props.label,
            itemToString = _this$props.itemToString,
            type = _this$props.type,
            initialSelectedItem = _this$props.initialSelectedItem,
            selectedItem = _this$props.selectedItem;
        var className = classNames('bx--dropdown-v2', containerClassName);
        return React__default.createElement(Downshift, {
          onChange: this.handleOnChange,
          itemToString: itemToString,
          defaultSelectedItem: initialSelectedItem,
          selectedItem: selectedItem
        }, function (_ref) {
          var isOpen = _ref.isOpen,
              itemToString = _ref.itemToString,
              selectedItem = _ref.selectedItem,
              highlightedIndex = _ref.highlightedIndex,
              getRootProps = _ref.getRootProps,
              getButtonProps = _ref.getButtonProps,
              getItemProps = _ref.getItemProps,
              getLabelProps = _ref.getLabelProps;
          return React__default.createElement(ListBox, _extends({
            type: type,
            className: className,
            disabled: disabled
          }, getRootProps({
            refKey: 'innerRef'
          })), React__default.createElement(ListBox.Field, getButtonProps({
            disabled: disabled
          }), React__default.createElement("span", _extends({
            className: "bx--list-box__label"
          }, getLabelProps()), selectedItem ? itemToString(selectedItem) : label), React__default.createElement(ListBox.MenuIcon, {
            isOpen: isOpen
          })), isOpen && React__default.createElement(ListBox.Menu, null, items.map(function (item, index) {
            return React__default.createElement(ListBox.MenuItem, _extends({
              key: itemToString(item),
              isActive: selectedItem === item,
              isHighlighted: highlightedIndex === index
            }, getItemProps({
              item: item,
              index: index
            })), itemToString(item));
          })));
        });
      }
    }]);

    _inherits(DropdownV2, _React$Component);

    return DropdownV2;
  }(React__default.Component);

  _defineProperty(DropdownV2, "propTypes", {
    /**
     * Disable the control
     */
    disabled: PropTypes.bool,

    /**
     * We try to stay as generic as possible here to allow individuals to pass
     * in a collection of whatever kind of data structure they prefer
     */
    items: PropTypes.array.isRequired,

    /**
     * Allow users to pass in an arbitrary item or a string (in case their items are an array of strings)
     * from their collection that are pre-selected
     */
    initialSelectedItem: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),

    /**
     * Helper function passed to downshift that allows the library to render a
     * given item to a string label. By default, it extracts the `label` field
     * from a given item to serve as the item label in the list.
     */
    itemToString: PropTypes.func,

    /**
     * `onChange` is a utility for this controlled component to communicate to a
     * consuming component what kind of internal state changes are occuring.
     */
    onChange: PropTypes.func,

    /**
     * Generic `label` that will be used as the textual representation of what
     * this field is for
     */
    label: PropTypes.node.isRequired,
    type: ListBoxType,

    /**
     * In the case you want to control the dropdown selection entirely.
     */
    selectedItem: PropTypes.object
  });

  _defineProperty(DropdownV2, "defaultProps", {
    disabled: false,
    type: 'default',
    itemToString: defaultItemToString$1
  });

  var FileUploaderSkeleton =
  /*#__PURE__*/
  function (_React$Component) {
    function FileUploaderSkeleton() {
      _classCallCheck(this, FileUploaderSkeleton);

      return _possibleConstructorReturn(this, _getPrototypeOf(FileUploaderSkeleton).apply(this, arguments));
    }

    _createClass(FileUploaderSkeleton, [{
      key: "render",
      value: function render() {
        return React__default.createElement("div", {
          className: "bx--form-item"
        }, React__default.createElement(SkeletonText, {
          heading: true,
          width: "100px"
        }), React__default.createElement(SkeletonText, {
          width: "225px",
          className: "bx--label-description"
        }), React__default.createElement(ButtonSkeleton, null));
      }
    }]);

    _inherits(FileUploaderSkeleton, _React$Component);

    return FileUploaderSkeleton;
  }(React__default.Component);

  var lastId = 0;
  function uid () {
    var prefix = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'id';
    lastId++;
    return "".concat(prefix).concat(lastId);
  }

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
        this.uid = this.props.id || uid();
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

        var classes = classNames(_defineProperty({
          'bx--file': true
        }, className, className));
        return React__default.createElement("div", {
          role: "button",
          className: classes,
          onKeyDown: function onKeyDown(evt) {
            if (evt.which === 13 || evt.which === 32) {
              _this2.input.click();
            }
          }
        }, React__default.createElement("label", _extends({
          className: "bx--btn bx--btn--".concat(buttonKind),
          tabIndex: tabIndex,
          htmlFor: this.uid,
          role: role
        }, other), this.state.labelText), React__default.createElement("input", {
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
  }(React.Component);

  _defineProperty(FileUploaderButton, "propTypes", {
    className: PropTypes.string,
    disableLabelChanges: PropTypes.bool,
    id: PropTypes.string,
    labelText: PropTypes.string,
    listFiles: PropTypes.bool,
    multiple: PropTypes.bool,
    onChange: PropTypes.func,
    onClick: PropTypes.func,
    role: PropTypes.string,
    tabIndex: PropTypes.number,
    buttonKind: PropTypes.oneOf(['primary', 'secondary']),
    accept: PropTypes.arrayOf(PropTypes.string)
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
          return React__default.createElement("div", _extends({
            className: "bx--loading",
            style: _objectSpread({}, style, {
              width: '1rem',
              height: '1rem'
            })
          }, other), React__default.createElement("svg", {
            className: "bx--loading__svg",
            viewBox: "-42 -42 84 84"
          }, React__default.createElement("circle", {
            cx: "0",
            cy: "0",
            r: "37.5"
          })));
        } else if (status === 'edit') {
          return React__default.createElement(Icon, _extends({
            description: iconDescription,
            className: "bx--file-close",
            name: "close--glyph",
            style: style
          }, other));
        } else if (status === 'complete') {
          return React__default.createElement(Icon, _extends({
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
  }(React.Component);

  _defineProperty(Filename, "propTypes", {
    style: PropTypes.object,
    status: PropTypes.oneOf(['edit', 'complete', 'uploading']),
    tabIndex: PropTypes.number,
    onKeyDown: PropTypes.func
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

        var classes = classNames(_defineProperty({
          'bx--form-item': true
        }, className, className));
        return React__default.createElement("div", _extends({
          className: classes
        }, other), React__default.createElement("strong", {
          className: "bx--label"
        }, labelTitle), React__default.createElement("p", {
          className: "bx--label-description"
        }, labelDescription), React__default.createElement(FileUploaderButton, {
          labelText: buttonLabel,
          multiple: multiple,
          buttonKind: buttonKind,
          onChange: this.handleChange,
          disableLabelChanges: true,
          accept: accept
        }), React__default.createElement("div", {
          className: "bx--file-container"
        }, this.state.filenames.length === 0 ? null : this.state.filenames.map(function (name, index) {
          var _React$createElement;

          return React__default.createElement("span", _extends({
            key: index,
            className: "bx--file__selected-file",
            ref: function ref(node) {
              return _this4.nodes[index] = node;
            } // eslint-disable-line

          }, other), React__default.createElement("p", {
            className: "bx--file-filename"
          }, name), React__default.createElement("span", {
            className: "bx--file__state-container"
          }, React__default.createElement(Filename, (_React$createElement = {
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
  }(React.Component);

  _defineProperty(FileUploader, "propTypes", {
    iconDescription: PropTypes.string,
    buttonLabel: PropTypes.string,
    buttonKind: PropTypes.oneOf(['primary', 'secondary']),
    filenameStatus: PropTypes.oneOf(['edit', 'complete', 'uploading']).isRequired,
    labelDescription: PropTypes.string,
    labelTitle: PropTypes.string,
    multiple: PropTypes.bool,
    onChange: PropTypes.func,
    onClick: PropTypes.func,
    className: PropTypes.string,
    accept: PropTypes.arrayOf(PropTypes.string)
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

  var Footer = function Footer(_ref) {
    var className = _ref.className,
        children = _ref.children,
        labelOne = _ref.labelOne,
        linkTextOne = _ref.linkTextOne,
        linkHrefOne = _ref.linkHrefOne,
        labelTwo = _ref.labelTwo,
        linkTextTwo = _ref.linkTextTwo,
        linkHrefTwo = _ref.linkHrefTwo,
        buttonText = _ref.buttonText,
        other = _objectWithoutProperties(_ref, ["className", "children", "labelOne", "linkTextOne", "linkHrefOne", "labelTwo", "linkTextTwo", "linkHrefTwo", "buttonText"]);

    var classNames$$1 = classNames('bx--footer bx--footer--bottom-fixed', className);
    var footer = children ? React__default.createElement("footer", _extends({}, other, {
      className: classNames$$1
    }), children) : React__default.createElement("footer", _extends({}, other, {
      className: classNames$$1
    }), React__default.createElement("div", {
      className: "bx--footer-info"
    }, React__default.createElement("div", {
      className: "bx--footer-info__item"
    }, React__default.createElement("p", {
      className: "bx--footer-label"
    }, labelOne), React__default.createElement(Link, {
      href: linkHrefOne
    }, linkTextOne)), React__default.createElement("div", {
      className: "bx--footer-info__item"
    }, React__default.createElement("p", {
      className: "bx--footer-label"
    }, labelTwo), React__default.createElement(Link, {
      href: linkHrefTwo
    }, linkTextTwo))), React__default.createElement("div", {
      className: "bx--footer-cta"
    }, React__default.createElement(Button, {
      type: "submit"
    }, buttonText)));
    return footer;
  };

  Footer.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    labelOne: PropTypes.string,
    linkTextOne: PropTypes.string,
    linkHrefOne: PropTypes.string,
    labelTwo: PropTypes.string,
    linkTextTwo: PropTypes.string,
    linkHrefTwo: PropTypes.string,
    buttonText: PropTypes.string
  };
  Footer.defaultProps = {
    labelOne: 'Need Help?',
    linkTextOne: 'Contact Bluemix Sales',
    linkHrefOne: '#',
    labelTwo: 'Estimate Monthly Cost',
    linkTextTwo: 'Cost Calculator',
    linkHrefTwo: '#',
    buttonText: 'Create'
  };

  var Form = function Form(_ref) {
    var className = _ref.className,
        children = _ref.children,
        other = _objectWithoutProperties(_ref, ["className", "children"]);

    var classNames$$1 = classNames('bx--form', className);
    return React__default.createElement("form", _extends({
      className: classNames$$1
    }, other), ' ', children, ' ');
  };

  Form.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string
  };

  var FormGroup = function FormGroup(_ref) {
    var legendText = _ref.legendText,
        invalid = _ref.invalid,
        children = _ref.children,
        className = _ref.className,
        message = _ref.message,
        messageText = _ref.messageText,
        other = _objectWithoutProperties(_ref, ["legendText", "invalid", "children", "className", "message", "messageText"]);

    var classNamesLegend = classNames('bx--label', className);
    var classNamesFieldset = classNames('bx--fieldset', className);
    return React__default.createElement("fieldset", _extends({}, invalid && {
      'data-invalid': ''
    }, {
      className: classNamesFieldset
    }, other), React__default.createElement("legend", {
      className: classNamesLegend
    }, legendText), children, message ? React__default.createElement("div", {
      className: "bx--form__requirements"
    }, messageText) : null);
  };

  FormGroup.propTypes = {
    children: PropTypes.node,
    legendText: PropTypes.string.isRequired,
    className: PropTypes.string,
    invalid: PropTypes.bool,
    message: PropTypes.bool,
    messageText: PropTypes.string
  };
  FormGroup.defaultProps = {
    invalid: false,
    message: false,
    messageText: ''
  };

  var FormItem = function FormItem(_ref) {
    var className = _ref.className,
        children = _ref.children,
        other = _objectWithoutProperties(_ref, ["className", "children"]);

    var classNames$$1 = classNames('bx--form-item', className);
    return React__default.createElement("div", _extends({
      className: classNames$$1
    }, other), children);
  };

  FormItem.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string
  };

  var FormLabel = function FormLabel(_ref) {
    var className = _ref.className,
        children = _ref.children,
        id = _ref.id,
        other = _objectWithoutProperties(_ref, ["className", "children", "id"]);

    var classNames$$1 = classNames('bx--label', className);
    return React__default.createElement("label", _extends({
      htmlFor: id,
      className: classNames$$1
    }, other), children);
  };

  FormLabel.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    id: PropTypes.string
  };

  var newChild$1 = function newChild(children, tabIndex) {
    var child = React__default.Children.only(children);
    return React__default.cloneElement(React__default.Children.only(child), {
      tabIndex: tabIndex,
      className: 'left-nav-list__item-link'
    });
  };

  var InteriorLeftNavItem = function InteriorLeftNavItem(_ref) {
    var className = _ref.className,
        tabIndex = _ref.tabIndex,
        children = _ref.children,
        _onClick = _ref.onClick,
        activeHref = _ref.activeHref,
        other = _objectWithoutProperties(_ref, ["className", "tabIndex", "children", "onClick", "activeHref"]);

    var childHref = children.props.href === undefined ? children.props.to : children.props.href;
    var activePath = lib.location && lib.location.hash ? lib.location.hash : activeHref;
    var classNames$$1 = classNames('left-nav-list__item', className, {
      'left-nav-list__item--active': activePath === childHref
    });
    return React__default.createElement("li", _extends({
      tabIndex: children ? -1 : tabIndex,
      role: "menuitem",
      className: classNames$$1,
      onClick: function onClick(evt) {
        return _onClick(evt, childHref);
      },
      onKeyPress: function onKeyPress(evt) {
        return _onClick(evt, childHref);
      }
    }, other), newChild$1(children, tabIndex));
  };

  InteriorLeftNavItem.propTypes = {
    className: PropTypes.string,
    tabIndex: PropTypes.number,
    onClick: PropTypes.func,
    onKeyPress: PropTypes.func,
    children: PropTypes.node
  };
  InteriorLeftNavItem.defaultProps = {
    tabIndex: 0,
    label: 'InteriorLeftNavItem Label',
    onClick:
    /* istanbul ignore next */
    function onClick() {}
  };

  var InteriorLeftNavList =
  /*#__PURE__*/
  function (_Component) {
    function InteriorLeftNavList() {
      var _getPrototypeOf2;

      var _temp, _this;

      _classCallCheck(this, InteriorLeftNavList);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _possibleConstructorReturn(_this, (_temp = _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(InteriorLeftNavList)).call.apply(_getPrototypeOf2, [this].concat(args))), _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
        open: _this.props.open
      }), _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "toggle", function (evt) {
        if (evt.which === 13 || evt.which === 32 || evt.type === 'click') {
          if (!_this.state.open) {
            _this.props.onListClick(_this.props.id);
          }

          _this.setState({
            open: !_this.state.open
          });
        }
      }), _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "close", function () {
        return _this.state.open && _this.setState({
          open: false
        });
      }), _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "buildNewItemChild", function (child, index) {
        var _this$props = _this.props,
            onItemClick = _this$props.onItemClick,
            activeHref = _this$props.activeHref;
        var key = "listitem-".concat(index);
        return React__default.createElement(InteriorLeftNavItem, _extends({}, child.props, {
          key: key,
          onClick: onItemClick,
          activeHref: activeHref,
          tabIndex: _this.state.open ? 0 : -1
        }));
      }), _temp));
    }

    _createClass(InteriorLeftNavList, [{
      key: "render",
      value: function render() {
        var _this2 = this;

        var _this$props2 = this.props,
            tabIndex = _this$props2.tabIndex,
            title = _this$props2.title,
            children = _this$props2.children,
            className = _this$props2.className,
            iconDescription = _this$props2.iconDescription,
            onListClick = _this$props2.onListClick,
            onItemClick = _this$props2.onItemClick,
            activeHref = _this$props2.activeHref;
        var classNames$$1 = classNames('left-nav-list__item', 'left-nav-list__item--has-children', {
          'left-nav-list__item--expanded': this.state.open
        }, className);
        var newChildren = React__default.Children.map(children, function (child, index) {
          return _this2.buildNewItemChild(child, index);
        });
        return React__default.createElement("li", {
          className: classNames$$1,
          tabIndex: tabIndex,
          onClick: this.toggle,
          onKeyPress: this.toggle,
          role: "menuitem"
        }, React__default.createElement("div", {
          className: "left-nav-list__item-link"
        }, title, React__default.createElement("div", {
          className: "left-nav-list__item-icon"
        }, React__default.createElement(Icon, {
          name: "chevron--down",
          description: iconDescription,
          className: "left-nav-list__item-icon bx--interior-left-nav__icon"
        }))), React__default.createElement("ul", {
          role: "menu",
          className: "left-nav-list left-nav-list--nested",
          "aria-label": title,
          "aria-hidden": true
        }, newChildren));
      }
    }]);

    _inherits(InteriorLeftNavList, _Component);

    return InteriorLeftNavList;
  }(React.Component);

  _defineProperty(InteriorLeftNavList, "propTypes", {
    className: PropTypes.string,
    children: PropTypes.node,
    tabIndex: PropTypes.number,
    title: PropTypes.string,
    open: PropTypes.bool,
    onListClick: PropTypes.func,
    onItemClick: PropTypes.func,
    activeHref: PropTypes.string,
    iconDescription: PropTypes.string,
    id: PropTypes.string,
    isExpanded: PropTypes.bool
  });

  _defineProperty(InteriorLeftNavList, "defaultProps", {
    title: 'Provide title',
    open: false,
    tabIndex: 0,
    activeHref: '#',
    iconDescription: 'display sub navigation items',
    onListClick:
    /* istanbul ignore next */
    function onListClick() {},
    onItemClick:
    /* istanbul ignore next */
    function onItemClick() {},
    isExpanded: false
  });

  var InteriorLeftNav =
  /*#__PURE__*/
  function (_Component) {
    function InteriorLeftNav() {
      var _getPrototypeOf2;

      var _temp, _this;

      _classCallCheck(this, InteriorLeftNav);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _possibleConstructorReturn(_this, (_temp = _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(InteriorLeftNav)).call.apply(_getPrototypeOf2, [this].concat(args))), _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
        activeHref: _this.props.activeHref || lib.location && lib.location.pathname,
        open: _this.props.open !== undefined ? _this.props.open : true
      }), _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "componentWillReceiveProps", function (nextProps) {
        if (nextProps.activeHref) {
          _this.setState({
            activeHref: nextProps.activeHref
          });
        }

        if (nextProps.open !== undefined && nextProps.open !== _this.props.open) {
          _this.setState({
            open: nextProps.open
          });
        }
      }), _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleItemClick", function (evt, href) {
        evt.stopPropagation(); // 13 = Enter, 32 = Spacebar

        var acceptableEvent = evt.which === 13 || evt.which === 32 || evt.type === 'click';
        var diffHref = href !== _this.state.activeHref;

        if (acceptableEvent && diffHref) {
          _this.setState({
            activeHref: href
          });
        }
      }), _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleListClick", function (id) {
        _this.props.children.forEach(function (child, index) {
          if (child.type === InteriorLeftNavList) {
            var childId = "list-".concat(index);

            if (childId !== id && !child.props.isExpanded) {
              _this.refs[childId].close();
            }
          }
        });
      }), _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "toggle", function (evt) {
        evt.stopPropagation();

        _this.props.onToggle(!_this.state.open);

        _this.setState({
          open: !_this.state.open
        });
      }), _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "buildNewListChild", function (child, index) {
        var key = "list-".concat(index);
        return React__default.createElement(InteriorLeftNavList, _extends({}, child.props, {
          key: key,
          ref: key,
          id: key,
          onListClick: _this.handleListClick,
          onItemClick: _this.handleItemClick,
          activeHref: _this.state.activeHref
        }));
      }), _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "buildNewItemChild", function (child, index) {
        var key = "item-".concat(index);
        return React__default.createElement(InteriorLeftNavItem, _extends({}, child.props, {
          key: key,
          onClick: _this.handleItemClick,
          activeHref: _this.state.activeHref
        }));
      }), _temp));
    }

    _createClass(InteriorLeftNav, [{
      key: "render",
      value: function render() {
        var _this2 = this;

        var _this$props = this.props,
            className = _this$props.className,
            children = _this$props.children,
            activeHref = _this$props.activeHref,
            onToggle = _this$props.onToggle,
            other = _objectWithoutProperties(_this$props, ["className", "children", "activeHref", "onToggle"]);

        var newChildren = React__default.Children.map(children, function (child, index) {
          if (child.type === InteriorLeftNavList) {
            return _this2.buildNewListChild(child, index);
          } else if (child.type === InteriorLeftNavItem) {
            return _this2.buildNewItemChild(child, index);
          }

          return child;
        });
        var classNames$$1 = classNames('bx--interior-left-nav', 'bx--interior-left-nav--collapseable', {
          'bx--interior-left-nav--collapsed': !this.state.open
        }, className);
        var buttonStyles = {
          border: 'none'
        };
        return React__default.createElement("nav", _extends({
          role: "presentation",
          tabIndex: -1,
          "aria-label": "Interior Left Navigation",
          className: classNames$$1,
          onClick: !this.state.open ? this.toggle : function () {}
        }, other), React__default.createElement("ul", {
          key: "main_list",
          className: "left-nav-list",
          role: "menubar"
        }, newChildren), React__default.createElement("button", {
          className: "bx--interior-left-nav-collapse",
          onClick: this.toggle,
          style: buttonStyles
        }, React__default.createElement(Icon, {
          name: "chevron--left",
          description: "close/open iln",
          className: "bx--interior-left-nav-collapse__arrow"
        })));
      }
    }]);

    _inherits(InteriorLeftNav, _Component);

    return InteriorLeftNav;
  }(React.Component);

  _defineProperty(InteriorLeftNav, "propTypes", {
    children: PropTypes.node,
    className: PropTypes.string,
    activeHref: PropTypes.string,
    onToggle: PropTypes.func,
    open: PropTypes.bool
  });

  _defineProperty(InteriorLeftNav, "defaultProps", {
    onToggle: function onToggle() {},
    open: true
  });

  var ListItem = function ListItem(_ref) {
    var children = _ref.children,
        className = _ref.className,
        other = _objectWithoutProperties(_ref, ["children", "className"]);

    var classNames$$1 = classNames('bx--list__item', className);
    return React__default.createElement("li", _extends({
      className: classNames$$1
    }, other), children);
  };

  ListItem.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string
  };

  var Loading =
  /*#__PURE__*/
  function (_React$Component) {
    function Loading() {
      _classCallCheck(this, Loading);

      return _possibleConstructorReturn(this, _getPrototypeOf(Loading).apply(this, arguments));
    }

    _createClass(Loading, [{
      key: "render",
      value: function render() {
        var _this$props = this.props,
            active = _this$props.active,
            className = _this$props.className,
            withOverlay = _this$props.withOverlay,
            small = _this$props.small,
            other = _objectWithoutProperties(_this$props, ["active", "className", "withOverlay", "small"]);

        var loadingClasses = classNames('bx--loading', className, {
          'bx--loading--small': small,
          'bx--loading--stop': !active
        });
        var overlayClasses = classNames('bx--loading-overlay', {
          'bx--loading-overlay--stop': !active
        });
        var loading = React__default.createElement("div", _extends({}, other, {
          className: loadingClasses
        }), React__default.createElement("svg", {
          className: "bx--loading__svg",
          viewBox: "-75 -75 150 150"
        }, React__default.createElement("circle", {
          cx: "0",
          cy: "0",
          r: "37.5"
        })));
        return withOverlay ? React__default.createElement("div", {
          className: overlayClasses
        }, loading) : loading;
      }
    }]);

    _inherits(Loading, _React$Component);

    return Loading;
  }(React__default.Component);

  _defineProperty(Loading, "propTypes", {
    active: PropTypes.bool,
    className: PropTypes.string,
    withOverlay: PropTypes.bool,
    small: PropTypes.bool
  });

  _defineProperty(Loading, "defaultProps", {
    active: true,
    withOverlay: true,
    small: false
  });

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
        var modalClasses = classNames(_defineProperty({
          'bx--modal': true,
          'bx--modal-tall': !passiveModal,
          'is-visible': open,
          'bx--modal--danger': this.props.danger
        }, this.props.className, this.props.className));
        var modalButton = React__default.createElement("button", {
          className: "bx--modal-close",
          type: "button",
          onClick: onRequestClose
        }, React__default.createElement(Icon, {
          name: "close",
          className: "bx--modal-close__icon",
          description: iconDescription
        }));
        var modalBody = React__default.createElement("div", {
          ref: function ref(modal) {
            _this2.innerModal = modal;
          },
          role: "dialog",
          className: "bx--modal-container",
          "aria-label": modalAriaLabel
        }, React__default.createElement("div", {
          className: "bx--modal-header"
        }, passiveModal && modalButton, modalLabel && React__default.createElement("h4", {
          className: "bx--modal-header__label"
        }, modalLabel), React__default.createElement("h2", {
          className: "bx--modal-header__heading"
        }, modalHeading), !passiveModal && modalButton), React__default.createElement("div", {
          className: "bx--modal-content"
        }, this.props.children), !passiveModal && React__default.createElement("div", {
          className: "bx--modal-footer"
        }, React__default.createElement("div", {
          className: "bx--modal__buttons-container"
        }, React__default.createElement(Button, {
          kind: danger ? 'tertiary' : 'secondary',
          onClick: onSecondaryButtonClick
        }, secondaryButtonText), React__default.createElement(Button, {
          kind: danger ? 'danger--primary' : 'primary',
          disabled: primaryButtonDisabled,
          onClick: onRequestSubmit
        }, primaryButtonText))));
        return React__default.createElement("div", _extends({}, other, {
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
  }(React.Component);

  _defineProperty(Modal, "propTypes", {
    children: PropTypes.node,
    className: PropTypes.string,
    passiveModal: PropTypes.bool,
    onRequestClose: PropTypes.func,
    id: PropTypes.string,
    modalHeading: PropTypes.string,
    modalLabel: PropTypes.string,
    modalAriaLabel: PropTypes.string,
    secondaryButtonText: PropTypes.string,
    primaryButtonText: PropTypes.string,
    open: PropTypes.bool,
    onRequestSubmit: PropTypes.func,
    onKeyDown: PropTypes.func,
    iconDescription: PropTypes.string,
    primaryButtonDisabled: PropTypes.bool,
    onSecondarySubmit: PropTypes.func,
    danger: PropTypes.bool,
    shouldSubmitOnEnter: PropTypes.bool
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

  var ModalWrapper =
  /*#__PURE__*/
  function (_React$Component) {
    function ModalWrapper() {
      var _getPrototypeOf2;

      var _temp, _this;

      _classCallCheck(this, ModalWrapper);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _possibleConstructorReturn(_this, (_temp = _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(ModalWrapper)).call.apply(_getPrototypeOf2, [this].concat(args))), _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
        isOpen: false
      }), _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleOpen", function () {
        _this.setState({
          isOpen: true
        });
      }), _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleClose", function () {
        _this.setState({
          isOpen: false
        });
      }), _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleOnRequestSubmit", function () {
        var _this$props = _this.props,
            handleSubmit = _this$props.handleSubmit,
            shouldCloseAfterSubmit = _this$props.shouldCloseAfterSubmit;

        if (handleSubmit()) {
          if (shouldCloseAfterSubmit) {
            _this.handleClose();
          }
        }
      }), _temp));
    }

    _createClass(ModalWrapper, [{
      key: "render",
      value: function render() {
        var _this2 = this;

        var _this$props2 = this.props,
            id = _this$props2.id,
            buttonTriggerText = _this$props2.buttonTriggerText,
            triggerButtonKind = _this$props2.triggerButtonKind,
            modalLabel = _this$props2.modalLabel,
            modalHeading = _this$props2.modalHeading,
            passiveModal = _this$props2.passiveModal,
            primaryButtonText = _this$props2.primaryButtonText,
            secondaryButtonText = _this$props2.secondaryButtonText,
            disabled = _this$props2.disabled;
        var props = {
          id: id,
          modalLabel: modalLabel,
          modalHeading: modalHeading,
          passiveModal: passiveModal,
          primaryButtonText: primaryButtonText,
          secondaryButtonText: secondaryButtonText,
          open: this.state.isOpen,
          onRequestClose: this.handleClose,
          onRequestSubmit: this.handleOnRequestSubmit
        };
        return React__default.createElement("div", {
          role: "presentation",
          onKeyDown: function onKeyDown(evt) {
            if (evt.which === 27) {
              _this2.handleClose();

              _this2.props.onKeyDown(evt);
            }
          }
        }, React__default.createElement(Button, {
          disabled: disabled,
          kind: triggerButtonKind,
          onClick: this.handleOpen
        }, buttonTriggerText), React__default.createElement(Modal, props, this.props.children));
      }
    }]);

    _inherits(ModalWrapper, _React$Component);

    return ModalWrapper;
  }(React__default.Component);

  _defineProperty(ModalWrapper, "propTypes", {
    status: PropTypes.string,
    handleOpen: PropTypes.func,
    children: PropTypes.node,
    id: PropTypes.string,
    buttonTriggerText: PropTypes.string,
    modalLabel: PropTypes.string,
    modalHeading: PropTypes.string,
    modalText: PropTypes.string,
    passiveModal: PropTypes.bool,
    withHeader: PropTypes.bool,
    modalBeforeContent: PropTypes.bool,
    primaryButtonText: PropTypes.string,
    secondaryButtonText: PropTypes.string,
    handleSubmit: PropTypes.func,
    disabled: PropTypes.bool,
    triggerButtonKind: PropTypes.oneOf(['primary', 'secondary', 'danger', 'ghost']),
    shouldCloseAfterSubmit: PropTypes.bool
  });

  _defineProperty(ModalWrapper, "defaultProps", {
    primaryButtonText: 'Save',
    secondaryButtonText: 'Cancel',
    triggerButtonKind: 'primary',
    disabled: false
  });

  var propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    size: PropTypes.oneOf(['single', 'double'])
  };
  var moduleBodyPropTypes = {
    children: PropTypes.node,
    centered: PropTypes.bool,
    className: PropTypes.string
  };
  var moduleHeaderPropTypes = {
    children: PropTypes.node,
    className: PropTypes.string
  };
  var defaultProps = {
    size: 'double'
  };
  var moduleBodydefaultProps = {
    centered: false
  };

  var Module = function Module(_ref) {
    var children = _ref.children,
        className = _ref.className,
        size = _ref.size,
        other = _objectWithoutProperties(_ref, ["children", "className", "size"]);

    var wrapperClasses = classNames("bx--module bx--module--".concat(size), className);
    return React__default.createElement("div", _extends({
      className: wrapperClasses
    }, other), React__default.createElement("div", {
      className: "bx--module__inner"
    }, children));
  };

  var ModuleBody = function ModuleBody(_ref2) {
    var children = _ref2.children,
        className = _ref2.className,
        centered = _ref2.centered,
        other = _objectWithoutProperties(_ref2, ["children", "className", "centered"]);

    var wrapperClasses = classNames('bx--module__content', className, {
      'bx--module__content--centered': centered
    });
    return React__default.createElement("div", _extends({
      className: wrapperClasses
    }, other), children);
  };

  var ModuleHeader = function ModuleHeader(_ref3) {
    var children = _ref3.children,
        className = _ref3.className,
        other = _objectWithoutProperties(_ref3, ["children", "className"]);

    var wrapperClasses = classNames('bx--module__header', className);
    return React__default.createElement("div", _extends({
      className: wrapperClasses
    }, other), React__default.createElement("h1", {
      className: "bx--module__title"
    }, children));
  };

  Module.propTypes = propTypes;
  ModuleBody.propTypes = moduleBodyPropTypes;
  Module.defaultProps = defaultProps;
  ModuleBody.defaultProps = moduleBodydefaultProps;
  ModuleHeader.propTypes = moduleHeaderPropTypes;

  var Selection =
  /*#__PURE__*/
  function (_React$Component) {
    function Selection(props) {
      var _this;

      _classCallCheck(this, Selection);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(Selection).call(this, props));

      _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "internalSetState", function (stateToSet, callback) {
        return _this.setState(stateToSet, function () {
          if (callback) {
            callback();
          }

          if (_this.props.onChange) {
            _this.props.onChange(_this.state);
          }
        });
      });

      _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleClearSelection", function () {
        _this.internalSetState({
          selectedItems: []
        });
      });

      _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleSelectItem", function (item) {
        _this.internalSetState(function (state) {
          return {
            selectedItems: state.selectedItems.concat(item)
          };
        });
      });

      _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleRemoveItem", function (index) {
        _this.internalSetState(function (state) {
          return {
            selectedItems: removeAtIndex(state.selectedItems, index)
          };
        });
      });

      _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleOnItemChange", function (item) {
        var selectedItems = _this.state.selectedItems;
        var selectedIndex = selectedItems.indexOf(item);

        if (selectedIndex === -1) {
          _this.handleSelectItem(item);

          return;
        }

        _this.handleRemoveItem(selectedIndex);
      });

      _this.state = {
        selectedItems: props.initialSelectedItems
      };
      return _this;
    }

    _createClass(Selection, [{
      key: "render",
      value: function render() {
        var _this$props = this.props,
            children = _this$props.children,
            render = _this$props.render;
        var selectedItems = this.state.selectedItems;
        var renderProps = {
          selectedItems: selectedItems,
          onItemChange: this.handleOnItemChange,
          clearSelection: this.handleClearSelection
        };

        if (render !== undefined) {
          return render(renderProps);
        }

        if (children !== undefined) {
          return children(renderProps);
        }

        return null;
      }
    }]);

    _inherits(Selection, _React$Component);

    return Selection;
  }(React__default.Component); // Generic utility for safely removing an element at a given index from an
  // array.


  _defineProperty(Selection, "propTypes", {
    initialSelectedItems: PropTypes.array.isRequired
  });

  _defineProperty(Selection, "defaultProps", {
    initialSelectedItems: []
  });

  var removeAtIndex = function removeAtIndex(array, index) {
    var result = array.slice();
    result.splice(index, 1);
    return result;
  };

  var sortingPropTypes = {
    /**
     * Provide a compare function that is used to determine the ordering of
     * options. `compareItems` has the following function signature:
     *
     * compareFunction :
     *  (itemA: string, itemB: string, { locale: string }) => number
     */
    compareItems: PropTypes.func.isRequired,

    /**
     * Provide a method that sorts all options in the control. Overriding this
     * prop means that you also have to handle the sort logic for selected versus
     * un-selected items. If you just want to control ordering, consider the
     * `compareItems` prop instead.
     *
     * `sortItems` has the following signature:
     *
     * sortItems :
     *   (items: Array<Item>, {
     *     selectedItems: Array<Item>,
     *     itemToString: Item => string,
     *     compareItems: (itemA: string, itemB: string, {
     *       locale: string
     *     }) => number,
     *     locale: string,
     *   }) => Array<Item>
     */
    sortItems: PropTypes.func.isRequired
  };

  /**
   * Copyright (c) 2013-present, Facebook, Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */

  /**
   * Use invariant() to assert state which your program assumes to be true.
   *
   * Provide sprintf-style format (only %s is supported) and arguments
   * to provide information about what broke and what you were
   * expecting.
   *
   * The invariant message will be stripped in production, but the invariant
   * will remain to ensure logic does not differ in production.
   */

  var NODE_ENV = "development";

  var invariant = function(condition, format, a, b, c, d, e, f) {
    if (NODE_ENV !== 'production') {
      if (format === undefined) {
        throw new Error('invariant requires an error message argument');
      }
    }

    if (!condition) {
      var error;
      if (format === undefined) {
        error = new Error(
          'Minified exception occurred; use the non-minified dev environment ' +
          'for the full error message and additional helpful warnings.'
        );
      } else {
        var args = [a, b, c, d, e, f];
        var argIndex = 0;
        error = new Error(
          format.replace(/%s/g, function() { return args[argIndex++]; })
        );
        error.name = 'Invariant Violation';
      }

      error.framesToPop = 1; // we don't care about invariant's own frame
      throw error;
    }
  };

  var invariant_1 = invariant;

  var itemToString = function itemToString(item) {
    invariant_1(typeof item.label === 'string', '[MultiSelect] the default `itemToString` method expected to receive ' + 'an item with a `label` field of type `string`. Instead received: `%s`', _typeof(item.label));
    return item.label || '';
  };

  var defaultItemToString$2 = function defaultItemToString(item) {
    if (Array.isArray(item)) {
      return item.map(itemToString);
    }

    return itemToString(item);
  };

  /**
   * Use the local `localCompare` with the `numeric` option to sort two,
   * potentially alpha-numeric, strings in a list of items.
   *
   * @param {string} itemA
   * @param {string} itemB
   * @param {Object} options
   * @param {string} options.locale
   * @returns {number}
   */
  var defaultCompareItems = function defaultCompareItems(itemA, itemB, _ref) {
    var locale = _ref.locale;
    return itemA.localeCompare(itemB, locale, {
      numeric: true
    });
  };
  /**
   * Default sorting algorithm for options in a selection control
   */

  var defaultSortItems = function defaultSortItems(items, _ref2) {
    var selectedItems = _ref2.selectedItems,
        itemToString = _ref2.itemToString,
        compareItems = _ref2.compareItems,
        _ref2$locale = _ref2.locale,
        locale = _ref2$locale === void 0 ? 'en' : _ref2$locale;
    return items.sort(function (itemA, itemB) {
      var hasItemA = selectedItems.includes(itemA);
      var hasItemB = selectedItems.includes(itemB); // Prefer whichever item is in the `selectedItems` array first

      if (hasItemA && !hasItemB) {
        return -1;
      }

      if (hasItemB && !hasItemA) {
        return 1;
      }

      return compareItems(itemToString(itemA), itemToString(itemB), {
        locale: locale
      });
    });
  };

  var MultiSelect =
  /*#__PURE__*/
  function (_React$Component) {
    function MultiSelect(props) {
      var _this;

      _classCallCheck(this, MultiSelect);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(MultiSelect).call(this, props));

      _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleOnChange", function (changes) {
        if (_this.props.onChange) {
          _this.props.onChange(changes);
        }
      });

      _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleOnToggleMenu", function () {
        _this.setState(function (state) {
          return {
            isOpen: !state.isOpen
          };
        });
      });

      _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleOnOuterClick", function () {
        _this.setState({
          isOpen: false
        });
      });

      _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleOnStateChange", function (changes) {
        var type = changes.type;

        switch (type) {
          case Downshift.stateChangeTypes.keyDownArrowDown:
          case Downshift.stateChangeTypes.keyDownArrowUp:
          case Downshift.stateChangeTypes.itemMouseEnter:
            _this.setState({
              highlightedIndex: changes.highlightedIndex
            });

            break;

          case Downshift.stateChangeTypes.keyDownEscape:
          case Downshift.stateChangeTypes.mouseUp:
            _this.setState({
              isOpen: false
            });

            break;
          // Opt-in to some cases where we should be toggling the menu based on
          // a given key press or mouse handler
          // Reference: https://github.com/paypal/downshift/issues/206

          case Downshift.stateChangeTypes.clickButton:
          case Downshift.stateChangeTypes.keyDownSpaceButton:
            _this.handleOnToggleMenu();

            break;
        }
      });

      _this.state = {
        highlightedIndex: null,
        isOpen: false
      };
      return _this;
    }

    _createClass(MultiSelect, [{
      key: "render",
      value: function render() {
        var _this2 = this;

        var _this$state = this.state,
            highlightedIndex = _this$state.highlightedIndex,
            isOpen = _this$state.isOpen;
        var _this$props = this.props,
            containerClassName = _this$props.className,
            items = _this$props.items,
            itemToString = _this$props.itemToString,
            label = _this$props.label,
            type = _this$props.type,
            disabled = _this$props.disabled,
            initialSelectedItems = _this$props.initialSelectedItems,
            sortItems = _this$props.sortItems,
            compareItems = _this$props.compareItems;
        var className = classNames('bx--multi-select', containerClassName);
        return React__default.createElement(Selection, {
          onChange: this.handleOnChange,
          initialSelectedItems: initialSelectedItems,
          render: function render(_ref) {
            var selectedItems = _ref.selectedItems,
                onItemChange = _ref.onItemChange,
                clearSelection = _ref.clearSelection;
            return React__default.createElement(Downshift, {
              highlightedIndex: highlightedIndex,
              isOpen: isOpen,
              itemToString: itemToString,
              onChange: onItemChange,
              onStateChange: _this2.handleOnStateChange,
              onOuterClick: _this2.handleOnOuterClick,
              selectedItem: selectedItems,
              render: function render(_ref2) {
                var getRootProps = _ref2.getRootProps,
                    selectedItem = _ref2.selectedItem,
                    isOpen = _ref2.isOpen,
                    itemToString = _ref2.itemToString,
                    highlightedIndex = _ref2.highlightedIndex,
                    getItemProps = _ref2.getItemProps,
                    getButtonProps = _ref2.getButtonProps;
                return React__default.createElement(ListBox, _extends({
                  type: type,
                  className: className,
                  disabled: disabled
                }, getRootProps({
                  refKey: 'innerRef'
                })), React__default.createElement(ListBox.Field, getButtonProps({
                  disabled: disabled
                }), selectedItem.length > 0 && React__default.createElement(ListBox.Selection, {
                  clearSelection: clearSelection,
                  selectionCount: selectedItem.length
                }), React__default.createElement("span", {
                  className: "bx--list-box__label"
                }, label), React__default.createElement(ListBox.MenuIcon, {
                  isOpen: isOpen
                })), isOpen && React__default.createElement(ListBox.Menu, null, sortItems(items, {
                  selectedItems: selectedItems,
                  itemToString: itemToString,
                  compareItems: compareItems,
                  locale: 'en'
                }).map(function (item, index) {
                  var itemProps = getItemProps({
                    item: item
                  });
                  var itemText = itemToString(item);
                  var isChecked = selectedItem.indexOf(item) !== -1;
                  return React__default.createElement(ListBox.MenuItem, _extends({
                    key: itemProps.id,
                    isActive: selectedItem.indexOf(item) !== -1,
                    isHighlighted: highlightedIndex === index
                  }, itemProps), React__default.createElement(Checkbox, {
                    id: itemProps.id,
                    name: itemText,
                    checked: isChecked,
                    readOnly: true,
                    tabIndex: "-1",
                    labelText: itemText
                  }));
                })));
              }
            });
          }
        });
      }
    }]);

    _inherits(MultiSelect, _React$Component);

    return MultiSelect;
  }(React__default.Component);

  _defineProperty(MultiSelect, "propTypes", _objectSpread({}, sortingPropTypes, {
    /**
     * Disable the control
     */
    disabled: PropTypes.bool,

    /**
     * We try to stay as generic as possible here to allow individuals to pass
     * in a collection of whatever kind of data structure they prefer
     */
    items: PropTypes.array.isRequired,

    /**
     * Allow users to pass in arbitrary items from their collection that are
     * pre-selected
     */
    initialSelectedItems: PropTypes.array,

    /**
     * Helper function passed to downshift that allows the library to render a
     * given item to a string label. By default, it extracts the `label` field
     * from a given item to serve as the item label in the list.
     */
    itemToString: PropTypes.func,

    /**
     * Generic `label` that will be used as the textual representation of what
     * this field is for
     */
    label: PropTypes.node.isRequired,

    /**
     * Specify the locale of the control. Used for the default `compareItems`
     * used for sorting the list of items in the control.
     */
    locale: PropTypes.string,

    /**
     * `onChange` is a utility for this controlled component to communicate to a
     * consuming component what kind of internal state changes are occuring.
     */
    onChange: PropTypes.func,

    /**
     * Specify 'inline' to create an inline multi-select.
     */
    type: PropTypes.oneOf(['default', 'inline'])
  }));

  _defineProperty(MultiSelect, "defaultProps", {
    compareItems: defaultCompareItems,
    disabled: false,
    locale: 'en',
    itemToString: defaultItemToString$2,
    initialSelectedItems: [],
    sortItems: defaultSortItems,
    type: 'default'
  });

  var defaultFilterItems = function defaultFilterItems(items, _ref) {
    var itemToString = _ref.itemToString,
        inputValue = _ref.inputValue;
    return items.filter(function (item) {
      if (!inputValue) {
        return true;
      }

      return itemToString(item).toLowerCase().includes(inputValue.toLowerCase());
    });
  };

  var FilterableMultiSelect =
  /*#__PURE__*/
  function (_React$Component) {
    function FilterableMultiSelect(props) {
      var _this;

      _classCallCheck(this, FilterableMultiSelect);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(FilterableMultiSelect).call(this, props));

      _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleOnChange", function (changes) {
        if (_this.props.onChange) {
          _this.props.onChange(changes);
        }
      });

      _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleOnToggleMenu", function () {
        _this.setState(function (state) {
          return {
            isOpen: !state.isOpen
          };
        });
      });

      _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleOnOuterClick", function () {
        _this.setState({
          isOpen: false
        });
      });

      _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleOnStateChange", function (changes) {
        var type = changes.type;

        switch (type) {
          case Downshift.stateChangeTypes.changeInput:
            _this.setState({
              inputValue: changes.inputValue
            });

            break;

          case Downshift.stateChangeTypes.keyDownArrowDown:
          case Downshift.stateChangeTypes.keyDownArrowUp:
          case Downshift.stateChangeTypes.itemMouseEnter:
            _this.setState({
              highlightedIndex: changes.highlightedIndex
            });

            break;

          case Downshift.stateChangeTypes.keyDownEscape:
          case Downshift.stateChangeTypes.mouseUp:
            _this.setState({
              isOpen: false
            });

            break;
          // Opt-in to some cases where we should be toggling the menu based on
          // a given key press or mouse handler
          // Reference: https://github.com/paypal/downshift/issues/206

          case Downshift.stateChangeTypes.clickButton:
          case Downshift.stateChangeTypes.keyDownSpaceButton:
            _this.setState(function () {
              var nextIsOpen = changes.isOpen;

              if (changes.isOpen === false) {
                // If Downshift is trying to close the menu, but we know the input
                // is the active element in thedocument, then keep the menu open
                if (_this.inputNode === document.activeElement) {
                  nextIsOpen = true;
                }
              }

              return {
                isOpen: nextIsOpen
              };
            });

            break;
        }
      });

      _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleOnInputKeyDown", function (event) {
        event.stopPropagation();
      });

      _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleOnInputValueChange", function (inputValue) {
        _this.setState(function () {
          if (Array.isArray(inputValue)) {
            return {
              inputValue: ''
            };
          }

          return {
            inputValue: inputValue || ''
          };
        });
      });

      _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "clearInputValue", function (event) {
        event.stopPropagation();

        _this.setState({
          inputValue: ''
        });

        _this.inputNode && _this.inputNode.focus && _this.inputNode.focus();
      });

      _this.state = {
        highlightedIndex: null,
        isOpen: false,
        inputValue: ''
      };
      return _this;
    }

    _createClass(FilterableMultiSelect, [{
      key: "render",
      value: function render() {
        var _this2 = this;

        var _this$state = this.state,
            highlightedIndex = _this$state.highlightedIndex,
            isOpen = _this$state.isOpen,
            inputValue = _this$state.inputValue;
        var _this$props = this.props,
            containerClassName = _this$props.className,
            disabled = _this$props.disabled,
            filterItems = _this$props.filterItems,
            items = _this$props.items,
            itemToString = _this$props.itemToString,
            initialSelectedItems = _this$props.initialSelectedItems,
            id = _this$props.id,
            locale = _this$props.locale,
            placeholder = _this$props.placeholder,
            sortItems = _this$props.sortItems,
            compareItems = _this$props.compareItems;
        var className = classNames('bx--multi-select', 'bx--combo-box', containerClassName);
        return React__default.createElement(Selection, {
          onChange: this.handleOnChange,
          initialSelectedItems: initialSelectedItems,
          render: function render(_ref) {
            var selectedItems = _ref.selectedItems,
                onItemChange = _ref.onItemChange,
                clearSelection = _ref.clearSelection;
            return React__default.createElement(Downshift, {
              highlightedIndex: highlightedIndex,
              isOpen: isOpen,
              inputValue: inputValue,
              onInputValueChange: _this2.handleOnInputValueChange,
              onChange: onItemChange,
              itemToString: itemToString,
              onStateChange: _this2.handleOnStateChange,
              onOuterClick: _this2.handleOnOuterClick,
              selectedItem: selectedItems,
              render: function render(_ref2) {
                var getButtonProps = _ref2.getButtonProps,
                    getInputProps = _ref2.getInputProps,
                    getItemProps = _ref2.getItemProps,
                    getRootProps = _ref2.getRootProps,
                    isOpen = _ref2.isOpen,
                    inputValue = _ref2.inputValue,
                    selectedItem = _ref2.selectedItem;
                return React__default.createElement(ListBox, _extends({
                  className: className,
                  disabled: disabled
                }, getRootProps({
                  refKey: 'innerRef'
                })), React__default.createElement(ListBox.Field, getButtonProps({
                  disabled: disabled
                }), selectedItem.length > 0 && React__default.createElement(ListBox.Selection, {
                  clearSelection: clearSelection,
                  selectionCount: selectedItem.length
                }), React__default.createElement("input", _extends({
                  className: "bx--text-input",
                  ref: function ref(el) {
                    return _this2.inputNode = el;
                  }
                }, getInputProps({
                  disabled: disabled,
                  id: id,
                  placeholder: placeholder,
                  onKeyDown: _this2.handleOnInputKeyDown
                }))), inputValue && isOpen && React__default.createElement(ListBox.Selection, {
                  clearSelection: _this2.clearInputValue
                }), React__default.createElement(ListBox.MenuIcon, {
                  isOpen: isOpen
                })), isOpen && React__default.createElement(ListBox.Menu, null, sortItems(filterItems(items, {
                  itemToString: itemToString,
                  inputValue: inputValue
                }), {
                  selectedItems: selectedItems,
                  itemToString: itemToString,
                  compareItems: compareItems,
                  locale: locale
                }).map(function (item, index) {
                  var itemProps = getItemProps({
                    item: item
                  });
                  var itemText = itemToString(item);
                  var isChecked = selectedItem.indexOf(item) !== -1;
                  return React__default.createElement(ListBox.MenuItem, _extends({
                    key: itemProps.id,
                    isActive: selectedItem.indexOf(item) !== -1,
                    isHighlighted: highlightedIndex === index
                  }, itemProps), React__default.createElement(Checkbox, {
                    id: itemProps.id,
                    name: itemText,
                    checked: isChecked,
                    readOnly: true,
                    tabIndex: "-1",
                    labelText: itemText
                  }));
                })));
              }
            });
          }
        });
      }
    }]);

    _inherits(FilterableMultiSelect, _React$Component);

    return FilterableMultiSelect;
  }(React__default.Component);

  _defineProperty(FilterableMultiSelect, "propTypes", _objectSpread({}, sortingPropTypes, {
    /**
     * Disable the control
     */
    disabled: PropTypes.bool,

    /**
     * We try to stay as generic as possible here to allow individuals to pass
     * in a collection of whatever kind of data structure they prefer
     */
    items: PropTypes.array.isRequired,

    /**
     * Allow users to pass in arbitrary items from their collection that are
     * pre-selected
     */
    initialSelectedItems: PropTypes.array,

    /**
     * Helper function passed to downshift that allows the library to render a
     * given item to a string label. By default, it extracts the `label` field
     * from a given item to serve as the item label in the list.
     */
    itemToString: PropTypes.func,

    /**
     * Specify the locale of the control. Used for the default `compareItems`
     * used for sorting the list of items in the control.
     */
    locale: PropTypes.string,

    /**
     * `onChange` is a utility for this controlled component to communicate to a
     * consuming component what kind of internal state changes are occuring.
     */
    onChange: PropTypes.func,

    /**
     * Generic `placeholder` that will be used as the textual representation of
     * what this field is for
     */
    placeholder: PropTypes.string.isRequired
  }));

  _defineProperty(FilterableMultiSelect, "defaultProps", {
    compareItems: defaultCompareItems,
    disabled: false,
    filterItems: defaultFilterItems,
    initialSelectedItems: [],
    itemToString: defaultItemToString$2,
    locale: 'en',
    sortItems: defaultSortItems
  });

  MultiSelect.Filterable = FilterableMultiSelect;

  var NotificationButton =
  /*#__PURE__*/
  function (_Component) {
    function NotificationButton() {
      _classCallCheck(this, NotificationButton);

      return _possibleConstructorReturn(this, _getPrototypeOf(NotificationButton).apply(this, arguments));
    }

    _createClass(NotificationButton, [{
      key: "render",
      value: function render() {
        var _this$props = this.props,
            ariaLabel = _this$props.ariaLabel,
            className = _this$props.className,
            iconDescription = _this$props.iconDescription,
            type = _this$props.type,
            name = _this$props.name,
            notificationType = _this$props.notificationType,
            other = _objectWithoutProperties(_this$props, ["ariaLabel", "className", "iconDescription", "type", "name", "notificationType"]);

        var buttonClasses = classNames({
          'bx--toast-notification__close-button': notificationType === 'toast',
          'bx--inline-notification__close-button': notificationType === 'inline'
        }, className);
        var iconClasses = classNames({
          'bx--toast-notification__icon': notificationType === 'toast',
          'bx--inline-notification__close-icon': notificationType === 'inline'
        });
        return React__default.createElement("button", _extends({}, other, {
          type: type,
          className: buttonClasses
        }), React__default.createElement(Icon, {
          description: iconDescription,
          className: iconClasses,
          "aria-label": ariaLabel,
          name: name
        }));
      }
    }]);

    _inherits(NotificationButton, _Component);

    return NotificationButton;
  }(React.Component);

  _defineProperty(NotificationButton, "propTypes", {
    className: PropTypes.string,
    ariaLabel: PropTypes.string,
    type: PropTypes.string,
    iconDescription: PropTypes.string,
    name: PropTypes.string,
    notificationType: PropTypes.oneOf(['toast', 'inline'])
  });

  _defineProperty(NotificationButton, "defaultProps", {
    ariaLabel: 'close notificaion',
    notificationType: 'toast',
    type: 'button',
    iconDescription: 'close icon',
    name: 'close'
  });

  var NotificationTextDetails =
  /*#__PURE__*/
  function (_Component2) {
    function NotificationTextDetails() {
      _classCallCheck(this, NotificationTextDetails);

      return _possibleConstructorReturn(this, _getPrototypeOf(NotificationTextDetails).apply(this, arguments));
    }

    _createClass(NotificationTextDetails, [{
      key: "render",
      value: function render() {
        var _this$props2 = this.props,
            title = _this$props2.title,
            subtitle = _this$props2.subtitle,
            caption = _this$props2.caption,
            notificationType = _this$props2.notificationType,
            other = _objectWithoutProperties(_this$props2, ["title", "subtitle", "caption", "notificationType"]);

        if (notificationType === 'toast') {
          return React__default.createElement("div", _extends({}, other, {
            className: "bx--toast-notification__details"
          }), React__default.createElement("h3", {
            className: "bx--toast-notification__title"
          }, title), React__default.createElement("div", {
            className: "bx--toast-notification__subtitle"
          }, subtitle), React__default.createElement("div", {
            className: "bx--toast-notification__caption"
          }, caption));
        }

        if (notificationType === 'inline') {
          return React__default.createElement("div", _extends({}, other, {
            className: "bx--inline-notification__text-wrapper"
          }), React__default.createElement("p", {
            className: "bx--inline-notification__title"
          }, title), React__default.createElement("div", {
            className: "bx--inline-notification__subtitle"
          }, subtitle));
        }
      }
    }]);

    _inherits(NotificationTextDetails, _Component2);

    return NotificationTextDetails;
  }(React.Component);

  _defineProperty(NotificationTextDetails, "propTypes", {
    title: PropTypes.string,
    subtitle: PropTypes.node,
    caption: PropTypes.node,
    notificationType: PropTypes.oneOf(['toast', 'inline'])
  });

  _defineProperty(NotificationTextDetails, "defaultProps", {
    title: 'title',
    subtitle: 'subtitle',
    caption: 'caption',
    notificationType: 'toast'
  });

  var ToastNotification =
  /*#__PURE__*/
  function (_Component3) {
    function ToastNotification() {
      var _getPrototypeOf2;

      var _temp, _this;

      _classCallCheck(this, ToastNotification);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _possibleConstructorReturn(_this, (_temp = _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(ToastNotification)).call.apply(_getPrototypeOf2, [this].concat(args))), _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
        open: true
      }), _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleCloseButtonClick", function (evt) {
        _this.setState({
          open: false
        });

        _this.props.onCloseButtonClick(evt);
      }), _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "useIconName", function (kindProp) {
        var isSuccess = kindProp === 'success';
        return isSuccess ? 'checkmark--glyph' : "".concat(kindProp, "--glyph");
      }), _temp));
    }

    _createClass(ToastNotification, [{
      key: "render",
      value: function render() {
        if (!this.state.open) {
          return null;
        }

        var _this$props3 = this.props,
            role = _this$props3.role,
            notificationType = _this$props3.notificationType,
            onCloseButtonClick = _this$props3.onCloseButtonClick,
            iconDescription = _this$props3.iconDescription,
            className = _this$props3.className,
            caption = _this$props3.caption,
            subtitle = _this$props3.subtitle,
            title = _this$props3.title,
            kind = _this$props3.kind,
            hideCloseButton = _this$props3.hideCloseButton,
            other = _objectWithoutProperties(_this$props3, ["role", "notificationType", "onCloseButtonClick", "iconDescription", "className", "caption", "subtitle", "title", "kind", "hideCloseButton"]);

        var classes = classNames('bx--toast-notification', _defineProperty({}, "bx--toast-notification--".concat(this.props.kind), this.props.kind), className);
        return React__default.createElement("div", _extends({}, other, {
          role: role,
          kind: kind,
          className: classes
        }), React__default.createElement(NotificationTextDetails, {
          title: title,
          subtitle: subtitle,
          caption: caption,
          notificationType: notificationType
        }), !hideCloseButton && React__default.createElement(NotificationButton, {
          iconDescription: iconDescription,
          notificationType: notificationType,
          onClick: this.handleCloseButtonClick
        }));
      }
    }]);

    _inherits(ToastNotification, _Component3);

    return ToastNotification;
  }(React.Component);

  _defineProperty(ToastNotification, "propTypes", {
    children: PropTypes.node,
    className: PropTypes.string,
    kind: PropTypes.oneOf(['error', 'info', 'success', 'warning']).isRequired,
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.node.isRequired,
    role: PropTypes.string.isRequired,
    caption: PropTypes.node,
    onCloseButtonClick: PropTypes.func,
    iconDescription: PropTypes.string.isRequired,
    notificationType: PropTypes.string,
    hideCloseButton: PropTypes.bool
  });

  _defineProperty(ToastNotification, "defaultProps", {
    kind: 'error',
    title: 'provide a title',
    subtitle: 'provide a subtitle',
    caption: 'provide a caption',
    role: 'alert',
    notificationType: 'toast',
    iconDescription: 'closes notification',
    onCloseButtonClick: function onCloseButtonClick() {},
    hideCloseButton: false
  });

  var InlineNotification =
  /*#__PURE__*/
  function (_Component4) {
    function InlineNotification() {
      var _getPrototypeOf3;

      var _temp2, _this2;

      _classCallCheck(this, InlineNotification);

      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }

      return _possibleConstructorReturn(_this2, (_temp2 = _this2 = _possibleConstructorReturn(this, (_getPrototypeOf3 = _getPrototypeOf(InlineNotification)).call.apply(_getPrototypeOf3, [this].concat(args))), _defineProperty(_assertThisInitialized(_assertThisInitialized(_this2)), "state", {
        open: true
      }), _defineProperty(_assertThisInitialized(_assertThisInitialized(_this2)), "handleCloseButtonClick", function (evt) {
        _this2.setState({
          open: false
        });

        _this2.props.onCloseButtonClick(evt);
      }), _defineProperty(_assertThisInitialized(_assertThisInitialized(_this2)), "useIconName", function (kindProp) {
        var isSuccess = kindProp === 'success';
        return isSuccess ? 'checkmark--glyph' : "".concat(kindProp, "--glyph");
      }), _temp2));
    }

    _createClass(InlineNotification, [{
      key: "render",
      value: function render() {
        if (!this.state.open) {
          return null;
        }

        var _this$props4 = this.props,
            role = _this$props4.role,
            notificationType = _this$props4.notificationType,
            onCloseButtonClick = _this$props4.onCloseButtonClick,
            iconDescription = _this$props4.iconDescription,
            className = _this$props4.className,
            subtitle = _this$props4.subtitle,
            title = _this$props4.title,
            kind = _this$props4.kind,
            hideCloseButton = _this$props4.hideCloseButton,
            other = _objectWithoutProperties(_this$props4, ["role", "notificationType", "onCloseButtonClick", "iconDescription", "className", "subtitle", "title", "kind", "hideCloseButton"]);

        var classes = classNames('bx--inline-notification', _defineProperty({}, "bx--inline-notification--".concat(this.props.kind), this.props.kind), className);
        return React__default.createElement("div", _extends({}, other, {
          role: role,
          kind: kind,
          className: classes
        }), React__default.createElement("div", {
          className: "bx--inline-notification__details"
        }, React__default.createElement(Icon, {
          description: this.props.iconDescription,
          className: "bx--inline-notification__icon",
          "aria-label": "close",
          name: this.useIconName(kind)
        }), React__default.createElement(NotificationTextDetails, {
          title: title,
          subtitle: subtitle,
          notificationType: notificationType
        })), !hideCloseButton && React__default.createElement(NotificationButton, {
          notificationType: notificationType,
          onClick: this.handleCloseButtonClick
        }));
      }
    }]);

    _inherits(InlineNotification, _Component4);

    return InlineNotification;
  }(React.Component); // Deprecated

  _defineProperty(InlineNotification, "propTypes", {
    children: PropTypes.node,
    className: PropTypes.string,
    kind: PropTypes.oneOf(['error', 'info', 'success', 'warning']).isRequired,
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.node.isRequired,
    role: PropTypes.string.isRequired,
    onCloseButtonClick: PropTypes.func,
    iconDescription: PropTypes.string.isRequired,
    notificationType: PropTypes.string,
    hideCloseButton: PropTypes.bool
  });

  _defineProperty(InlineNotification, "defaultProps", {
    role: 'alert',
    notificationType: 'inline',
    iconDescription: 'closes notification',
    onCloseButtonClick: function onCloseButtonClick() {},
    hideCloseButton: false
  });

  var Notification =
  /*#__PURE__*/
  function (_Component5) {
    function Notification() {
      var _getPrototypeOf4;

      var _temp3, _this3;

      _classCallCheck(this, Notification);

      for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
        args[_key3] = arguments[_key3];
      }

      return _possibleConstructorReturn(_this3, (_temp3 = _this3 = _possibleConstructorReturn(this, (_getPrototypeOf4 = _getPrototypeOf(Notification)).call.apply(_getPrototypeOf4, [this].concat(args))), _defineProperty(_assertThisInitialized(_assertThisInitialized(_this3)), "state", {
        open: true
      }), _defineProperty(_assertThisInitialized(_assertThisInitialized(_this3)), "handleCloseButtonClick", function (evt) {
        _this3.setState({
          open: false
        });

        _this3.props.onCloseButtonClick(evt);
      }), _defineProperty(_assertThisInitialized(_assertThisInitialized(_this3)), "useIconName", function (kindProp) {
        var isSuccess = kindProp === 'success';
        return isSuccess ? 'checkmark--glyph' : "".concat(kindProp, "--glyph");
      }), _temp3));
    }

    _createClass(Notification, [{
      key: "render",
      value: function render() {
        if (!this.state.open) {
          return null;
        }

        var _this$props5 = this.props,
            onCloseButtonClick = _this$props5.onCloseButtonClick,
            iconDescription = _this$props5.iconDescription,
            className = _this$props5.className,
            caption = _this$props5.caption,
            subtitle = _this$props5.subtitle,
            title = _this$props5.title,
            kind = _this$props5.kind,
            hideCloseButton = _this$props5.hideCloseButton,
            other = _objectWithoutProperties(_this$props5, ["onCloseButtonClick", "iconDescription", "className", "caption", "subtitle", "title", "kind", "hideCloseButton"]);

        var notificationClasses = {
          toast: classNames('bx--toast-notification', _defineProperty({}, "bx--toast-notification--".concat(this.props.kind), this.props.kind), className),
          inline: classNames('bx--inline-notification', _defineProperty({}, "bx--inline-notification--".concat(this.props.kind), this.props.kind), className)
        };
        var toastHTML = React__default.createElement("div", _extends({}, other, {
          role: "alert",
          kind: kind,
          className: notificationClasses.toast
        }), React__default.createElement(NotificationTextDetails, {
          title: title,
          subtitle: subtitle,
          caption: caption,
          notificationType: "toast"
        }), !hideCloseButton && React__default.createElement(NotificationButton, {
          notificationType: "toast",
          onClick: this.handleCloseButtonClick
        }));
        var inlineHTML = React__default.createElement("div", _extends({}, other, {
          role: "alert",
          kind: kind,
          className: notificationClasses.inline
        }), React__default.createElement("div", {
          className: "bx--inline-notification__details"
        }, React__default.createElement(Icon, {
          description: this.props.iconDescription,
          className: "bx--inline-notification__icon",
          "aria-label": "close",
          name: this.useIconName(kind)
        }), React__default.createElement(NotificationTextDetails, {
          title: title,
          subtitle: subtitle,
          notificationType: "inline"
        })), !hideCloseButton && React__default.createElement(NotificationButton, {
          notificationType: "inline",
          onClick: this.handleCloseButtonClick
        }));
        return caption ? toastHTML : inlineHTML;
      }
    }]);

    _inherits(Notification, _Component5);

    return Notification;
  }(React.Component);

  _defineProperty(Notification, "propTypes", {
    children: PropTypes.node,
    className: PropTypes.string,
    kind: PropTypes.oneOf(['error', 'info', 'success', 'warning']).isRequired,
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    caption: PropTypes.string,
    onCloseButtonClick: PropTypes.func,
    iconDescription: PropTypes.string.isRequired,
    hideCloseButton: PropTypes.bool
  });

  _defineProperty(Notification, "defaultProps", {
    onCloseButtonClick: function onCloseButtonClick() {},
    iconDescription: 'closes notification',
    title: 'Provide a title',
    subtitle: 'Provide a subtitle',
    hideCloseButton: false
  });

  var NumberInputSkeleton = function NumberInputSkeleton(_ref) {
    var hideLabel = _ref.hideLabel,
        id = _ref.id;
    var label = hideLabel ? null : React__default.createElement("label", {
      className: "bx--label bx--skeleton",
      htmlFor: id
    });
    return React__default.createElement("div", {
      className: "bx--form-item"
    }, label, React__default.createElement("div", {
      className: "bx--number bx--skeleton"
    }));
  };

  NumberInputSkeleton.propTypes = {
    hideLabel: PropTypes.bool
  };

  var NumberInput =
  /*#__PURE__*/
  function (_Component) {
    /**
     * The DOM node refernce to the `<input>`.
     * @type {HTMLInputElement}
     */
    function NumberInput(props) {
      var _this;

      _classCallCheck(this, NumberInput);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(NumberInput).call(this, props));

      _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "_inputRef", null);

      _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleChange", function (evt) {
        if (!_this.props.disabled) {
          evt.persist();
          evt.imaginaryTarget = _this._inputRef;

          _this.setState({
            value: evt.target.value
          }, function () {
            _this.props.onChange(evt);
          });
        }
      });

      _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleArrowClick", function (evt, direction) {
        var value = typeof _this.state.value === 'string' ? Number(_this.state.value) : _this.state.value;
        var _this$props = _this.props,
            disabled = _this$props.disabled,
            min = _this$props.min,
            max = _this$props.max,
            step = _this$props.step;
        var conditional = direction === 'down' ? min !== undefined && value > min || min === undefined : max !== undefined && value < max || max === undefined;

        if (!disabled && conditional) {
          value = direction === 'down' ? value - step : value + step;
          evt.persist();
          evt.imaginaryTarget = _this._inputRef;

          _this.setState({
            value: value
          }, function () {
            _this.props.onClick(evt, direction);

            _this.props.onChange(evt, direction);
          });
        }
      });

      _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "_handleInputRef", function (ref) {
        _this._inputRef = ref;
      });

      var _value = props.value;

      if (props.min || props.min === 0) {
        _value = Math.max(props.min, _value);
      }

      _this.state = {
        value: _value
      };
      return _this;
    }

    _createClass(NumberInput, [{
      key: "componentWillReceiveProps",
      value: function componentWillReceiveProps(nextProps) {
        if (nextProps.value !== this.props.value) {
          this.setState({
            value: nextProps.value
          });
        }
      }
    }, {
      key: "render",
      value: function render() {
        var _this2 = this;

        var _this$props2 = this.props,
            className = _this$props2.className,
            disabled = _this$props2.disabled,
            iconDescription = _this$props2.iconDescription,
            id = _this$props2.id,
            label = _this$props2.label,
            max = _this$props2.max,
            min = _this$props2.min,
            step = _this$props2.step,
            invalid = _this$props2.invalid,
            invalidText = _this$props2.invalidText,
            other = _objectWithoutProperties(_this$props2, ["className", "disabled", "iconDescription", "id", "label", "max", "min", "step", "invalid", "invalidText"]);

        var numberInputClasses = classNames('bx--number', className);
        var props = {
          disabled: disabled,
          id: id,
          max: max,
          min: min,
          step: step,
          onChange: this.handleChange,
          value: this.state.value
        };
        var buttonProps = {
          disabled: disabled,
          type: 'button',
          className: 'bx--number__control-btn'
        };
        var inputWrapperProps = {};
        var error = null;

        if (invalid || this.state.value === '') {
          inputWrapperProps['data-invalid'] = true;
          error = React__default.createElement("div", {
            className: "bx--form-requirement"
          }, invalidText);
        }

        return React__default.createElement("div", {
          className: "bx--form-item"
        }, React__default.createElement("label", {
          htmlFor: id,
          className: "bx--label"
        }, label), React__default.createElement("div", _extends({
          className: numberInputClasses
        }, inputWrapperProps), React__default.createElement("input", _extends({
          type: "number",
          pattern: "[0-9]*"
        }, other, props, {
          ref: this._handleInputRef
        })), React__default.createElement("div", {
          className: "bx--number__controls"
        }, React__default.createElement("button", _extends({}, buttonProps, {
          onClick: function onClick(evt) {
            return _this2.handleArrowClick(evt, 'up');
          }
        }), React__default.createElement(Icon, {
          className: "up-icon",
          name: "caret--up",
          description: this.props.iconDescription,
          viewBox: "0 2 10 5"
        })), React__default.createElement("button", _extends({}, buttonProps, {
          onClick: function onClick(evt) {
            return _this2.handleArrowClick(evt, 'down');
          }
        }), React__default.createElement(Icon, {
          className: "down-icon",
          name: "caret--down",
          viewBox: "0 2 10 5",
          description: this.props.iconDescription
        })))), error);
      }
    }]);

    _inherits(NumberInput, _Component);

    return NumberInput;
  }(React.Component);

  _defineProperty(NumberInput, "propTypes", {
    className: PropTypes.string,
    disabled: PropTypes.bool,
    iconDescription: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    label: PropTypes.string,
    max: PropTypes.number,
    min: PropTypes.number,

    /**
     * The new value is available in 'imaginaryTarget.value'
     * i.e. to get the value: evt.imaginaryTarget.value
     */
    onChange: PropTypes.func,
    onClick: PropTypes.func,
    step: PropTypes.number,
    value: PropTypes.number,
    invalid: PropTypes.bool,
    invalidText: PropTypes.string
  });

  _defineProperty(NumberInput, "defaultProps", {
    disabled: false,
    iconDescription: 'choose a number',
    label: ' ',
    onChange: function onChange() {},
    onClick: function onClick() {},
    step: 1,
    value: 0,
    invalid: false,
    invalidText: 'Provide invalidText'
  });

  var OrderedList = function OrderedList(_ref) {
    var children = _ref.children,
        className = _ref.className,
        nested = _ref.nested,
        other = _objectWithoutProperties(_ref, ["children", "className", "nested"]);

    var classNames$$1 = classNames('bx--list--ordered', className, {
      'bx--list--nested': nested
    });
    return React__default.createElement("ol", _extends({
      className: classNames$$1
    }, other), children);
  };

  OrderedList.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    nested: PropTypes.bool
  };
  OrderedList.defaultProps = {
    nested: false
  };

  var OrderSummary =
  /*#__PURE__*/
  function (_Component) {
    function OrderSummary() {
      _classCallCheck(this, OrderSummary);

      return _possibleConstructorReturn(this, _getPrototypeOf(OrderSummary).apply(this, arguments));
    }

    _createClass(OrderSummary, [{
      key: "render",
      value: function render() {
        var _this$props = this.props,
            children = _this$props.children,
            className = _this$props.className,
            other = _objectWithoutProperties(_this$props, ["children", "className"]);

        var classes = classNames('bx--order-summary', className);
        return React__default.createElement("div", _extends({
          className: classes
        }, other), children);
      }
    }]);

    _inherits(OrderSummary, _Component);

    return OrderSummary;
  }(React.Component);

  _defineProperty(OrderSummary, "propTypes", {
    children: PropTypes.node,
    className: PropTypes.string
  });

  var OrderSummaryHeader =
  /*#__PURE__*/
  function (_Component2) {
    function OrderSummaryHeader() {
      _classCallCheck(this, OrderSummaryHeader);

      return _possibleConstructorReturn(this, _getPrototypeOf(OrderSummaryHeader).apply(this, arguments));
    }

    _createClass(OrderSummaryHeader, [{
      key: "render",
      value: function render() {
        var _this$props2 = this.props,
            children = _this$props2.children,
            className = _this$props2.className,
            _this$props2$id = _this$props2.id,
            id = _this$props2$id === void 0 ? this._sectionId = this._sectionId || "order__summary__header__id_".concat(Math.random().toString(36).substr(2)) : _this$props2$id,
            title = _this$props2.title,
            other = _objectWithoutProperties(_this$props2, ["children", "className", "id", "title"]);

        var classes = classNames('bx--order-header', className);
        return React__default.createElement("section", _extends({
          className: classes,
          "aria-labelledby": "".concat(id, "__title")
        }, other), React__default.createElement("p", {
          className: "bx--order-header-title",
          id: "".concat(id, "__title")
        }, title), children);
      }
    }]);

    _inherits(OrderSummaryHeader, _Component2);

    return OrderSummaryHeader;
  }(React.Component);

  _defineProperty(OrderSummaryHeader, "propTypes", {
    children: PropTypes.node,
    className: PropTypes.string,
    id: PropTypes.string,
    title: PropTypes.string
  });

  _defineProperty(OrderSummaryHeader, "defaultProps", {
    title: 'Order Summary'
  });

  var OrderSummaryList =
  /*#__PURE__*/
  function (_Component3) {
    function OrderSummaryList() {
      _classCallCheck(this, OrderSummaryList);

      return _possibleConstructorReturn(this, _getPrototypeOf(OrderSummaryList).apply(this, arguments));
    }

    _createClass(OrderSummaryList, [{
      key: "render",
      value: function render() {
        var _this$props3 = this.props,
            children = _this$props3.children,
            className = _this$props3.className,
            other = _objectWithoutProperties(_this$props3, ["children", "className"]);

        var classes = classNames('bx--order-list', className);
        return React__default.createElement("ul", _extends({
          className: classes
        }, other), children);
      }
    }]);

    _inherits(OrderSummaryList, _Component3);

    return OrderSummaryList;
  }(React.Component);

  _defineProperty(OrderSummaryList, "propTypes", {
    children: PropTypes.node,
    className: PropTypes.string
  });

  var OrderSummaryCategory =
  /*#__PURE__*/
  function (_Component4) {
    function OrderSummaryCategory() {
      _classCallCheck(this, OrderSummaryCategory);

      return _possibleConstructorReturn(this, _getPrototypeOf(OrderSummaryCategory).apply(this, arguments));
    }

    _createClass(OrderSummaryCategory, [{
      key: "render",
      value: function render() {
        var _this$props4 = this.props,
            children = _this$props4.children,
            className = _this$props4.className,
            categoryText = _this$props4.categoryText,
            other = _objectWithoutProperties(_this$props4, ["children", "className", "categoryText"]);

        var classes = classNames('bx--order-category', className);
        return React__default.createElement("li", _extends({
          className: classes
        }, other), React__default.createElement("p", {
          className: "bx--order-category-title"
        }, categoryText), React__default.createElement("ul", null, children));
      }
    }]);

    _inherits(OrderSummaryCategory, _Component4);

    return OrderSummaryCategory;
  }(React.Component);

  _defineProperty(OrderSummaryCategory, "propTypes", {
    children: PropTypes.node,
    className: PropTypes.string,
    categoryText: PropTypes.string
  });

  _defineProperty(OrderSummaryCategory, "defaultProps", {
    categoryText: 'Category Label'
  });

  var OrderSummaryListItem =
  /*#__PURE__*/
  function (_Component5) {
    function OrderSummaryListItem() {
      _classCallCheck(this, OrderSummaryListItem);

      return _possibleConstructorReturn(this, _getPrototypeOf(OrderSummaryListItem).apply(this, arguments));
    }

    _createClass(OrderSummaryListItem, [{
      key: "render",
      value: function render() {
        var _this$props5 = this.props,
            className = _this$props5.className,
            text = _this$props5.text,
            price = _this$props5.price,
            other = _objectWithoutProperties(_this$props5, ["className", "text", "price"]);

        var classes = classNames('bx--order-item', className);
        return React__default.createElement("li", _extends({
          className: classes
        }, other), React__default.createElement("p", {
          className: "bx--order-detail"
        }, text), React__default.createElement("p", {
          className: "bx--order-price"
        }, price));
      }
    }]);

    _inherits(OrderSummaryListItem, _Component5);

    return OrderSummaryListItem;
  }(React.Component);

  _defineProperty(OrderSummaryListItem, "propTypes", {
    className: PropTypes.string,
    text: PropTypes.string,
    price: PropTypes.string
  });

  _defineProperty(OrderSummaryListItem, "defaultProps", {
    text: 'Detail 1',
    price: '--'
  });

  var OrderSummaryTotal =
  /*#__PURE__*/
  function (_Component6) {
    function OrderSummaryTotal() {
      _classCallCheck(this, OrderSummaryTotal);

      return _possibleConstructorReturn(this, _getPrototypeOf(OrderSummaryTotal).apply(this, arguments));
    }

    _createClass(OrderSummaryTotal, [{
      key: "render",
      value: function render() {
        var _this$props6 = this.props,
            children = _this$props6.children,
            className = _this$props6.className,
            _this$props6$id = _this$props6.id,
            id = _this$props6$id === void 0 ? "order__summary__total__id_".concat(Math.random().toString(36).substr(2)) : _this$props6$id,
            summaryText = _this$props6.summaryText,
            summaryPrice = _this$props6.summaryPrice,
            summaryDetails = _this$props6.summaryDetails,
            other = _objectWithoutProperties(_this$props6, ["children", "className", "id", "summaryText", "summaryPrice", "summaryDetails"]);

        var classes = classNames('bx--order-total-container', className);
        return React__default.createElement("section", _extends({
          className: classes,
          "aria-labelledby": "".concat(id, "__title")
        }, other), React__default.createElement("div", {
          className: "bx--order-total"
        }, React__default.createElement("p", {
          className: "bx--order-total-text",
          id: "".concat(id, "__title")
        }, summaryText), React__default.createElement("p", {
          className: "bx--order-total-price"
        }, summaryPrice, React__default.createElement("span", null, summaryDetails))), children);
      }
    }]);

    _inherits(OrderSummaryTotal, _Component6);

    return OrderSummaryTotal;
  }(React.Component);

  _defineProperty(OrderSummaryTotal, "propTypes", {
    children: PropTypes.node,
    className: PropTypes.string,
    id: PropTypes.string,
    summaryText: PropTypes.string,
    summaryPrice: PropTypes.string,
    summaryDetails: PropTypes.string
  });

  _defineProperty(OrderSummaryTotal, "defaultProps", {
    summaryText: 'Total due now:',
    summaryPrice: '$0.00',
    summaryDetails: 'estimated'
  });

  var OrderSummaryFooter =
  /*#__PURE__*/
  function (_Component7) {
    function OrderSummaryFooter() {
      _classCallCheck(this, OrderSummaryFooter);

      return _possibleConstructorReturn(this, _getPrototypeOf(OrderSummaryFooter).apply(this, arguments));
    }

    _createClass(OrderSummaryFooter, [{
      key: "render",
      value: function render() {
        var _this$props7 = this.props,
            className = _this$props7.className,
            _this$props7$id = _this$props7.id,
            id = _this$props7$id === void 0 ? this._sectionId = this._sectionId || "order__summary__footer__id_".concat(Math.random().toString(36).substr(2)) : _this$props7$id,
            footerText = _this$props7.footerText,
            linkText = _this$props7.linkText,
            href = _this$props7.href,
            target = _this$props7.target,
            rel = _this$props7.rel,
            other = _objectWithoutProperties(_this$props7, ["className", "id", "footerText", "linkText", "href", "target", "rel"]);

        var classes = classNames('bx--order-footer', className);
        return React__default.createElement("section", _extends({
          className: classes,
          "aria-labelledby": "".concat(id, "__title")
        }, other), React__default.createElement("p", {
          className: "bx--order-footer-text",
          id: "".concat(id, "__title")
        }, footerText), "\xA0", React__default.createElement(Link, {
          href: href,
          target: target,
          rel: rel
        }, linkText));
      }
    }]);

    _inherits(OrderSummaryFooter, _Component7);

    return OrderSummaryFooter;
  }(React.Component);

  _defineProperty(OrderSummaryFooter, "propTypes", {
    className: PropTypes.string,
    id: PropTypes.string,
    linkText: PropTypes.string,
    href: PropTypes.string,
    target: PropTypes.string,
    rel: PropTypes.string
  });

  _defineProperty(OrderSummaryFooter, "defaultProps", {
    footerText: 'Need Help?',
    linkText: 'Contact Bluemix Sales',
    href: '',
    target: '_blank',
    rel: 'noreferrer noopener'
  });

  var OverflowMenuItem = function OverflowMenuItem(_ref) {
    var className = _ref.className,
        itemText = _ref.itemText,
        hasDivider = _ref.hasDivider,
        isDelete = _ref.isDelete,
        disabled = _ref.disabled,
        closeMenu = _ref.closeMenu,
        onClick = _ref.onClick,
        primaryFocus = _ref.primaryFocus,
        wrapperClassName = _ref.wrapperClassName,
        other = _objectWithoutProperties(_ref, ["className", "itemText", "hasDivider", "isDelete", "disabled", "closeMenu", "onClick", "primaryFocus", "wrapperClassName"]);

    var overflowMenuBtnClasses = classNames('bx--overflow-menu-options__btn', className);
    var overflowMenuItemClasses = classNames('bx--overflow-menu-options__option', {
      'bx--overflow-menu--divider': hasDivider,
      'bx--overflow-menu-options__option--danger': isDelete,
      'bx--overflow-menu-options__option--disabled': disabled
    }, wrapperClassName);

    var handleClick = function handleClick(evt) {
      onClick(evt);
      closeMenu();
    };

    var primaryFocusProp = !primaryFocus ? {} : {
      'data-floating-menu-primary-focus': true
    };
    var item = React__default.createElement("li", {
      className: overflowMenuItemClasses,
      role: "menuitem"
    }, React__default.createElement("button", _extends({}, other, primaryFocusProp, {
      className: overflowMenuBtnClasses,
      disabled: disabled,
      onClick: handleClick,
      tabIndex: disabled ? -1 : 0
    }), itemText));
    return item;
  };

  OverflowMenuItem.propTypes = {
    /**
     * The CSS class name to be placed on the button element
     */
    className: PropTypes.string,

    /**
     * The CSS class name to be placed on the wrapper list item element
     */
    wrapperClassName: PropTypes.string,

    /**
     * The text in the menu item.
     */
    itemText: PropTypes.node.isRequired,

    /**
     * `true` to make this menu item a divider.
     */
    hasDivider: PropTypes.bool,

    /**
     * `true` to make this menu item a "danger button".
     */
    isDelete: PropTypes.bool,

    /**
     * `true` to make this menu item disabled.
     */
    disabled: PropTypes.bool,
    onBlur: PropTypes.func,
    onClick: PropTypes.func,
    onFocus: PropTypes.func,
    onKeyDown: PropTypes.func,
    onKeyUp: PropTypes.func,
    onMouseDown: PropTypes.func,
    onMouseEnter: PropTypes.func,
    onMouseLeave: PropTypes.func,
    onMouseUp: PropTypes.func,

    /**
     * A callback to tell the parent menu component that the menu should be closed.
     */
    closeMenu: PropTypes.func,

    /**
     * `true` if this menu item should get focus when the menu gets open.
     */
    primaryFocus: PropTypes.bool
  };
  OverflowMenuItem.defaultProps = {
    hasDivider: false,
    isDelete: false,
    disabled: false,
    itemText: 'Provide itemText',
    onClick: function onClick() {}
  };

  var SelectSkeleton = function SelectSkeleton(_ref) {
    var hideLabel = _ref.hideLabel,
        id = _ref.id;
    var label = hideLabel ? null : React__default.createElement("label", {
      className: "bx--label bx--skeleton",
      htmlFor: id
    });
    return React__default.createElement("div", {
      className: "bx--form-item"
    }, label, React__default.createElement("div", {
      className: "bx--select bx--skeleton"
    }, React__default.createElement("select", {
      className: "bx--select-input"
    })));
  };

  SelectSkeleton.propTypes = {
    hideLabel: PropTypes.bool
  };

  var Select = function Select(_ref) {
    var className = _ref.className,
        id = _ref.id,
        inline = _ref.inline,
        labelText = _ref.labelText,
        disabled = _ref.disabled,
        children = _ref.children,
        iconDescription = _ref.iconDescription,
        hideLabel = _ref.hideLabel,
        other = _objectWithoutProperties(_ref, ["className", "id", "inline", "labelText", "disabled", "children", "iconDescription", "hideLabel"]);

    var selectClasses = classNames(_defineProperty({
      'bx--select': true,
      'bx--select--inline': inline
    }, className, className));
    var labelClasses = classNames('bx--label', {
      'bx--visually-hidden': hideLabel
    });
    return React__default.createElement("div", {
      className: "bx--form-item"
    }, !inline ? React__default.createElement("label", {
      htmlFor: id,
      className: labelClasses
    }, labelText) : null, React__default.createElement("div", {
      className: selectClasses
    }, inline ? React__default.createElement("label", {
      htmlFor: id,
      className: labelClasses
    }, labelText) : null, React__default.createElement("select", _extends({}, other, {
      id: id,
      className: "bx--select-input",
      disabled: disabled
    }), children), React__default.createElement(Icon, {
      name: "caret--down",
      className: "bx--select__arrow",
      description: iconDescription
    })));
  };

  Select.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    id: PropTypes.string.isRequired,
    inline: PropTypes.bool,
    labelText: PropTypes.string,
    onChange: PropTypes.func,
    disabled: PropTypes.bool,
    defaultValue: PropTypes.any,
    iconDescription: PropTypes.string.isRequired,
    hideLabel: PropTypes.bool
  };
  Select.defaultProps = {
    disabled: false,
    labelText: 'Select',
    inline: false,
    iconDescription: 'open list of options'
  };

  var SelectItem = function SelectItem(_ref) {
    var className = _ref.className,
        value = _ref.value,
        disabled = _ref.disabled,
        hidden = _ref.hidden,
        text = _ref.text,
        other = _objectWithoutProperties(_ref, ["className", "value", "disabled", "hidden", "text"]);

    var selectItemClasses = classNames(_defineProperty({
      'bx--select-option': true
    }, className, className));
    return React__default.createElement("option", _extends({}, other, {
      className: selectItemClasses,
      value: value,
      disabled: disabled,
      hidden: hidden
    }), text);
  };

  SelectItem.propTypes = {
    value: PropTypes.any.isRequired,
    className: PropTypes.string,
    disabled: PropTypes.bool,
    hidden: PropTypes.bool,
    text: PropTypes.string.isRequired
  };
  SelectItem.defaultProps = {
    disabled: false,
    hidden: false,
    value: '',
    text: ''
  };

  var TextInputSkeleton = function TextInputSkeleton(_ref) {
    var hideLabel = _ref.hideLabel,
        id = _ref.id;
    var label = hideLabel ? null : React__default.createElement("label", {
      className: "bx--label bx--skeleton",
      htmlFor: id
    });
    return React__default.createElement("div", {
      className: "bx--form-item"
    }, label, React__default.createElement("div", {
      className: "bx--skeleton bx--text-input"
    }));
  };

  TextInputSkeleton.propTypes = {
    hideLabel: PropTypes.bool
  };

  var TextInput = function TextInput(_ref) {
    var labelText = _ref.labelText,
        className = _ref.className,
        id = _ref.id,
        placeholder = _ref.placeholder,
        type = _ref.type,
        _onChange = _ref.onChange,
        _onClick = _ref.onClick,
        hideLabel = _ref.hideLabel,
        invalid = _ref.invalid,
        invalidText = _ref.invalidText,
        other = _objectWithoutProperties(_ref, ["labelText", "className", "id", "placeholder", "type", "onChange", "onClick", "hideLabel", "invalid", "invalidText"]);

    var textInputProps = {
      id: id,
      onChange: function onChange(evt) {
        if (!other.disabled) {
          _onChange(evt);
        }
      },
      onClick: function onClick(evt) {
        if (!other.disabled) {
          _onClick(evt);
        }
      },
      placeholder: placeholder,
      type: type
    };
    var errorId = id + '-error-msg';
    var textInputClasses = classNames('bx--text-input', className);
    var labelClasses = classNames('bx--label', {
      'bx--visually-hidden': hideLabel
    });
    var label = labelText ? React__default.createElement("label", {
      htmlFor: id,
      className: labelClasses
    }, labelText) : null;
    var error = invalid ? React__default.createElement("div", {
      className: "bx--form-requirement",
      id: errorId
    }, invalidText) : null;
    var input = invalid ? React__default.createElement("input", _extends({}, other, textInputProps, {
      "data-invalid": true,
      "aria-invalid": true,
      "aria-describedby": errorId,
      className: textInputClasses
    })) : React__default.createElement("input", _extends({}, other, textInputProps, {
      className: textInputClasses
    }));
    return React__default.createElement("div", {
      className: "bx--form-item"
    }, label, input, error);
  };

  TextInput.propTypes = {
    className: PropTypes.string,
    defaultValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    disabled: PropTypes.bool,
    id: PropTypes.string.isRequired,
    labelText: PropTypes.string.isRequired,
    onChange: PropTypes.func,
    onClick: PropTypes.func,
    placeholder: PropTypes.string,
    type: PropTypes.string,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    hideLabel: PropTypes.bool,
    invalid: PropTypes.bool,
    invalidText: PropTypes.string
  };
  TextInput.defaultProps = {
    className: 'bx--text__input',
    disabled: false,
    type: 'text',
    onChange: function onChange() {},
    onClick: function onClick() {},
    invalid: false,
    invalidText: ''
  };

  /**
   * Shallow compare two arrays for equality
   * @param {Array} arr1 the first array
   * @param {Array} arr2 the second array
   * @returns {boolean} true if both arrays have the same contents, otherwise false
   */
  function equals(arr1, arr2) {
    if (!Array.isArray(arr1) || !Array.isArray(arr2) || arr1.length !== arr2.length) {
      return false;
    }

    if (arr1 === arr2) {
      return true;
    }

    for (var i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i]) {
        return false;
      }
    }

    return true;
  }

  var Pagination =
  /*#__PURE__*/
  function (_Component) {
    function Pagination() {
      var _getPrototypeOf2;

      var _temp, _this;

      _classCallCheck(this, Pagination);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _possibleConstructorReturn(_this, (_temp = _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Pagination)).call.apply(_getPrototypeOf2, [this].concat(args))), _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
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
      }), _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handlePageInputChange", function (evt) {
        var page = Number(evt.target.value);

        if ( // Added props for defaultPageText and defaultItemText to be
        // used for case when page # is 0 or empty. For other cases
        // existing props will be used.
        page >= 0 && page <= Math.max(Math.ceil(_this.props.totalItems / _this.state.pageSize), 1)) {
          _this.setState({
            page: page
          }, function () {
            return _this.pageInputDebouncer(_this.state.page);
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
      }), _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "getItemsText", function () {
        var _this$props = _this.props,
            pagesUnknown = _this$props.pagesUnknown,
            totalItems = _this$props.totalItems,
            itemRangeText = _this$props.itemRangeText,
            itemText = _this$props.itemText,
            defaultItemText = _this$props.defaultItemText;
        var _this$state = _this.state,
            pageSize = _this$state.pageSize,
            page = _this$state.page;

        if (pagesUnknown) {
          return itemText(pageSize * (page - 1) + 1, page * pageSize);
        } else if (page > 0) {
          return itemRangeText(Math.min(pageSize * (page - 1) + 1, totalItems), Math.min(page * pageSize, totalItems), totalItems);
        }

        return defaultItemText(totalItems);
      }), _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "getPagesText", function () {
        var _this$props2 = _this.props,
            pagesUnknown = _this$props2.pagesUnknown,
            totalItems = _this$props2.totalItems,
            pageRangeText = _this$props2.pageRangeText,
            pageText = _this$props2.pageText,
            defaultPageText = _this$props2.defaultPageText;
        var _this$state2 = _this.state,
            pageSize = _this$state2.pageSize,
            page = _this$state2.page;

        if (pagesUnknown) {
          return pageText(page);
        } else if (page > 0) {
          return pageRangeText(page, Math.max(Math.ceil(totalItems / pageSize), 1));
        }

        return defaultPageText(Math.ceil(totalItems / pageSize));
      }), _temp));
    }

    _createClass(Pagination, [{
      key: "componentWillMount",
      value: function componentWillMount() {
        this.uniqueId = "".concat(Math.floor(Math.random() * 0xffff));
      }
    }, {
      key: "componentDidMount",
      value: function componentDidMount() {
        var _this2 = this;

        this.pageInputDebouncer = lodash_debounce(function (page) {
          return page > 0 && _this2.props.onChange({
            page: page,
            pageSize: _this2.state.pageSize
          });
        }, this.props.onChangeInterval);
      }
    }, {
      key: "componentWillUnmount",
      value: function componentWillUnmount() {
        this.pageInputDebouncer.cancel();
      }
    }, {
      key: "componentWillReceiveProps",
      value: function componentWillReceiveProps(_ref) {
        var pageSizes = _ref.pageSizes,
            page = _ref.page,
            pageSize = _ref.pageSize;

        if (!equals(pageSizes, this.props.pageSizes)) {
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
        var _this$props3 = this.props,
            backwardText = _this$props3.backwardText,
            className = _this$props3.className,
            defaultItemText = _this$props3.defaultItemText,
            defaultPageText = _this$props3.defaultPageText,
            forwardText = _this$props3.forwardText,
            id = _this$props3.id,
            itemsPerPageText = _this$props3.itemsPerPageText,
            itemRangeText = _this$props3.itemRangeText,
            pageNumberText = _this$props3.pageNumberText,
            pageRangeText = _this$props3.pageRangeText,
            pageSize = _this$props3.pageSize,
            pageSizes = _this$props3.pageSizes,
            itemText = _this$props3.itemText,
            pageText = _this$props3.pageText,
            pagesUnknown = _this$props3.pagesUnknown,
            isLastPage = _this$props3.isLastPage,
            pageInputDisabled = _this$props3.pageInputDisabled,
            totalItems = _this$props3.totalItems,
            onChange = _this$props3.onChange,
            onChangeInterval = _this$props3.onChangeInterval,
            pageNumber = _this$props3.page,
            other = _objectWithoutProperties(_this$props3, ["backwardText", "className", "defaultItemText", "defaultPageText", "forwardText", "id", "itemsPerPageText", "itemRangeText", "pageNumberText", "pageRangeText", "pageSize", "pageSizes", "itemText", "pageText", "pagesUnknown", "isLastPage", "pageInputDisabled", "totalItems", "onChange", "onChangeInterval", "page"]);

        var statePage = this.state.page;
        var statePageSize = this.state.pageSize;
        var totalPages = Math.max(Math.ceil(totalItems / statePageSize), 1);
        var classNames$$1 = classNames('bx--pagination', className);
        var inputId = id || this.uniqueId;
        return React__default.createElement("div", _extends({
          className: classNames$$1
        }, other), React__default.createElement("div", {
          className: "bx--pagination__left"
        }, React__default.createElement(Select, {
          id: "bx-pagination-select-".concat(inputId),
          labelText: itemsPerPageText,
          hideLabel: true,
          onChange: this.handleSizeChange,
          value: statePageSize
        }, pageSizes.map(function (size) {
          return React__default.createElement(SelectItem, {
            key: size,
            value: size,
            text: String(size)
          });
        })), React__default.createElement("span", {
          className: "bx--pagination__text"
        }, itemsPerPageText, "\xA0\xA0|\xA0\xA0"), React__default.createElement("span", {
          className: "bx--pagination__text"
        }, this.getItemsText())), React__default.createElement("div", {
          className: "bx--pagination__right"
        }, React__default.createElement("span", {
          className: "bx--pagination__text"
        }, this.getPagesText()), React__default.createElement("button", {
          className: "bx--pagination__button bx--pagination__button--backward",
          onClick: this.decrementPage,
          disabled: this.props.disabled || statePage === 1
        }, React__default.createElement(Icon, {
          className: "bx--pagination__button-icon",
          name: "chevron--left",
          description: backwardText
        })), pageInputDisabled ? React__default.createElement("span", {
          className: "bx--pagination__text"
        }, "|") : React__default.createElement(TextInput, {
          id: "bx-pagination-input-".concat(inputId),
          value: statePage > 0 ? statePage : '',
          onChange: this.handlePageInputChange,
          labelText: pageNumberText,
          hideLabel: true
        }), React__default.createElement("button", {
          className: "bx--pagination__button bx--pagination__button--forward",
          onClick: this.incrementPage,
          disabled: this.props.disabled || statePage === totalPages || isLastPage
        }, React__default.createElement(Icon, {
          className: "bx--pagination__button-icon",
          name: "chevron--right",
          description: forwardText
        }))));
      }
    }]);

    _inherits(Pagination, _Component);

    return Pagination;
  }(React.Component);

  _defineProperty(Pagination, "propTypes", {
    backwardText: PropTypes.string,
    className: PropTypes.string,
    itemRangeText: PropTypes.func,
    forwardText: PropTypes.string,
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    itemsPerPageText: PropTypes.string,
    itemText: PropTypes.func,
    onChange: PropTypes.func,
    pageNumberText: PropTypes.string,
    pageRangeText: PropTypes.func,
    pageText: PropTypes.func,
    pageSizes: PropTypes.arrayOf(PropTypes.number).isRequired,
    totalItems: PropTypes.number,
    disabled: PropTypes.bool,
    page: PropTypes.number,
    pageSize: PropTypes.number,
    pagesUnknown: PropTypes.bool,
    isLastPage: PropTypes.bool,
    pageInputDisabled: PropTypes.bool,
    onChangeInterval: PropTypes.number,
    defaultPageText: PropTypes.func,
    defaultItemText: PropTypes.func
  });

  _defineProperty(Pagination, "defaultProps", {
    backwardText: 'Backward',
    itemRangeText: function itemRangeText(min, max, total) {
      return "".concat(min, "-").concat(max, " of ").concat(total, " items");
    },
    forwardText: 'Forward',
    itemsPerPageText: 'items per page',
    onChange: function onChange() {},
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
    },
    defaultPageText: function defaultPageText(totalPages) {
      return "".concat(totalPages, " pages");
    },
    defaultItemText: function defaultItemText(totalItems) {
      return "".concat(totalItems, " items");
    },
    onChangeInterval: 250
  });

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
          itemArr.push(React__default.createElement(SelectItem, {
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

        if (!equals(pageSizes, this.props.pageSizes)) {
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
        var classNames$$1 = classNames('bx--pagination', className);
        var backButtonClasses = classNames('bx--pagination__button', 'bx--pagination__button--backward', {
          'bx--pagination__button--no-index': pageInputDisabled
        });
        var inputId = id || this.uniqueId;
        var totalPages = Math.max(Math.ceil(totalItems / statePageSize), 1);
        var selectItems = this.renderSelectItems(totalPages);
        return React__default.createElement("div", _extends({
          className: classNames$$1
        }, other), React__default.createElement("div", {
          className: "bx--pagination__left"
        }, React__default.createElement("span", {
          className: "bx--pagination__text"
        }, itemsPerPageFollowsText || "".concat(itemsPerPageText, ":")), React__default.createElement(Select, {
          id: "bx-pagination-select-".concat(inputId),
          labelText: itemsPerPageText,
          hideLabel: true,
          inline: true,
          onChange: this.handleSizeChange,
          value: statePageSize
        }, pageSizes.map(function (size) {
          return React__default.createElement(SelectItem, {
            key: size,
            value: size,
            text: String(size)
          });
        })), React__default.createElement("span", {
          className: "bx--pagination__text"
        }, "\xA0|\xA0\xA0", pagesUnknown ? itemText(statePageSize * (statePage - 1) + 1, statePage * statePageSize) : itemRangeText(Math.min(statePageSize * (statePage - 1) + 1, totalItems), Math.min(statePage * statePageSize, totalItems), totalItems))), React__default.createElement("div", {
          className: "bx--pagination__right bx--pagination--inline"
        }, React__default.createElement("span", {
          className: "bx--pagination__text"
        }, pagesUnknown ? pageText(statePage) : pageRangeText(statePage, totalPages)), React__default.createElement("button", {
          className: backButtonClasses,
          onClick: this.decrementPage,
          disabled: this.props.disabled || statePage === 1
        }, React__default.createElement(Icon, {
          className: "bx--pagination__button-icon",
          name: "chevron--left",
          description: backwardText
        })), pageInputDisabled ? null : React__default.createElement(Select, {
          id: "bx-pagination-select-".concat(inputId + 2),
          labelText: itemsPerPageText,
          hideLabel: true,
          inline: true,
          onChange: this.handlePageInputChange,
          value: statePage
        }, selectItems), React__default.createElement("button", {
          className: "bx--pagination__button bx--pagination__button--forward",
          onClick: this.incrementPage,
          disabled: this.props.disabled || statePage === totalPages || isLastPage
        }, React__default.createElement(Icon, {
          className: "bx--pagination__button-icon",
          name: "chevron--right",
          description: forwardText
        }))));
      }
    }]);

    _inherits(PaginationV2, _Component);

    return PaginationV2;
  }(React.Component);

  _defineProperty(PaginationV2, "propTypes", {
    /**
     * The description for the backward icon.
     */
    backwardText: PropTypes.string,

    /**
     * The CSS class names.
     */
    className: PropTypes.string,

    /**
     * The function returning a translatable text showing where the current page is,
     * in a manner of the range of items.
     */
    itemRangeText: PropTypes.func,

    /**
     * The description for the forward icon.
     */
    forwardText: PropTypes.string,

    /**
     * The unique ID of this component instance.
     */
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

    /**
     * The translatable text indicating the number of items per page.
     */
    itemsPerPageText: PropTypes.string,

    /**
     * A variant of `itemsPerPageText`, with a sign indicating that the number follows, e.g. ':'.
     */
    itemsPerPageFollowsText: PropTypes.string,

    /**
     * A variant of `itemRangeText`, used if the total number of items is unknown.
     */
    itemText: PropTypes.func,

    /**
     * The callback function called when the current page changes.
     */
    onChange: PropTypes.func,
    pageNumberText: PropTypes.string,

    /**
     * A function returning PII showing where the current page is.
     */
    pageRangeText: PropTypes.func,

    /**
     * The translatable text showing the current page.
     */
    pageText: PropTypes.func,

    /**
     * The choices for `pageSize`.
     */
    pageSizes: PropTypes.arrayOf(PropTypes.number).isRequired,

    /**
     * The total number of items.
     */
    totalItems: PropTypes.number,

    /**
     * `true` if the backward/forward buttons should be disabled.
     */
    disabled: PropTypes.bool,

    /**
     * The current page.
     */
    page: PropTypes.number,

    /**
     * The number dictating how many items a page contains.
     */
    pageSize: PropTypes.number,

    /**
     * `true` if the total number of items is unknown.
     */
    pagesUnknown: PropTypes.bool,

    /**
     * `true` if the current page should be the last page.
     */
    isLastPage: PropTypes.bool,

    /**
     * `true` if the select box to change the page should be disabled.
     */
    pageInputDisabled: PropTypes.bool
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

  var PaginationSkeleton =
  /*#__PURE__*/
  function (_React$Component) {
    function PaginationSkeleton() {
      _classCallCheck(this, PaginationSkeleton);

      return _possibleConstructorReturn(this, _getPrototypeOf(PaginationSkeleton).apply(this, arguments));
    }

    _createClass(PaginationSkeleton, [{
      key: "render",
      value: function render() {
        return React__default.createElement("div", {
          className: "bx--pagination bx--skeleton"
        }, React__default.createElement("div", {
          className: "bx--pagination__left"
        }, React__default.createElement(SkeletonText, {
          width: "70px"
        }), React__default.createElement(SkeletonText, {
          width: "35px"
        }), React__default.createElement(SkeletonText, {
          width: "105px"
        })), React__default.createElement("div", {
          className: "bx--pagination__right bx--pagination--inline"
        }, React__default.createElement(SkeletonText, {
          width: "70px"
        })));
      }
    }]);

    _inherits(PaginationSkeleton, _React$Component);

    return PaginationSkeleton;
  }(React__default.Component);

  var PrimaryButton = function PrimaryButton(props) {
    return React__default.createElement(Button, _extends({
      kind: "primary"
    }, props));
  };

  var ProgressIndicatorSkeleton =
  /*#__PURE__*/
  function (_React$Component) {
    function ProgressIndicatorSkeleton() {
      _classCallCheck(this, ProgressIndicatorSkeleton);

      return _possibleConstructorReturn(this, _getPrototypeOf(ProgressIndicatorSkeleton).apply(this, arguments));
    }

    _createClass(ProgressIndicatorSkeleton, [{
      key: "render",
      value: function render() {
        var step = React__default.createElement("li", {
          className: "bx--progress-step bx--progress-step--incomplete"
        }, React__default.createElement("svg", null, React__default.createElement("g", null, React__default.createElement("circle", {
          cx: "12",
          cy: "12",
          r: "12"
        }))), React__default.createElement("p", {
          className: "bx--progress-label"
        }), React__default.createElement("span", {
          className: "bx--progress-line"
        }));
        return React__default.createElement("ul", {
          className: "bx--progress bx--skeleton"
        }, step, step, step, step);
      }
    }]);

    _inherits(ProgressIndicatorSkeleton, _React$Component);

    return ProgressIndicatorSkeleton;
  }(React__default.Component);

  var ProgressStep = function ProgressStep(_ref) {
    var props = _extends({}, _ref);

    var label = props.label,
        description = props.description,
        className = props.className,
        current = props.current,
        complete = props.complete;
    var classes = classNames(_defineProperty({
      'bx--progress-step': true,
      'bx--progress-step--current': current,
      'bx--progress-step--complete': complete,
      'bx--progress-step--incomplete': !complete && !current
    }, className, className));
    var currentSvg = current && React__default.createElement("g", null, React__default.createElement("circle", {
      stroke: "#3d70b2",
      strokeWidth: "5",
      fill: "transparent",
      cx: "12",
      cy: "12",
      r: "12"
    }), React__default.createElement("circle", {
      fill: "#3d70b2",
      cx: "12",
      cy: "12",
      r: "6"
    }));
    var completeSvg = complete && React__default.createElement("g", null, React__default.createElement("circle", {
      cx: "12",
      cy: "12",
      r: "12"
    }), React__default.createElement("polygon", {
      points: "10.3 13.6 7.7 11 6.3 12.4 10.3 16.4 17.8 9 16.4 7.6"
    }));
    var incompleteSvg = !complete && React__default.createElement("g", null, React__default.createElement("circle", {
      cx: "12",
      cy: "12",
      r: "12"
    }));
    return React__default.createElement("li", {
      className: classes
    }, React__default.createElement("svg", null, React__default.createElement("title", null, description), currentSvg || completeSvg || incompleteSvg), React__default.createElement("p", {
      className: "bx--progress-label"
    }, label), React__default.createElement("span", {
      className: "bx--progress-line"
    }));
  };
  ProgressStep.propTypes = {
    label: PropTypes.string.isRequired,
    className: PropTypes.string,
    current: PropTypes.bool,
    complete: PropTypes.bool,
    description: PropTypes.string
  };
  var ProgressIndicator =
  /*#__PURE__*/
  function (_Component) {
    function ProgressIndicator() {
      var _getPrototypeOf2;

      var _temp, _this;

      _classCallCheck(this, ProgressIndicator);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _possibleConstructorReturn(_this, (_temp = _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(ProgressIndicator)).call.apply(_getPrototypeOf2, [this].concat(args))), _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
        currentIndex: _this.props.currentIndex
      }), _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "renderSteps", function () {
        return React__default.Children.map(_this.props.children, function (child, index) {
          if (index === _this.state.currentIndex) {
            return React__default.cloneElement(child, {
              current: true
            });
          } else if (index < _this.state.currentIndex) {
            return React__default.cloneElement(child, {
              complete: true
            });
          } else if (index > _this.state.currentIndex) {
            return React__default.cloneElement(child, {
              complete: false
            });
          }

          return null;
        });
      }), _temp));
    }

    _createClass(ProgressIndicator, [{
      key: "componentWillReceiveProps",
      value: function componentWillReceiveProps(nextProps) {
        if (nextProps.currentIndex !== this.props.currentIndex) {
          this.setState({
            currentIndex: nextProps.currentIndex
          });
        }
      }
    }, {
      key: "render",
      value: function render() {
        var _this$props = this.props,
            className = _this$props.className,
            currentIndex = _this$props.currentIndex,
            other = _objectWithoutProperties(_this$props, ["className", "currentIndex"]); // eslint-disable-line no-unused-vars


        var classes = classNames(_defineProperty({
          'bx--progress': true
        }, className, className));
        return React__default.createElement("ul", _extends({
          className: classes
        }, other), this.renderSteps());
      }
    }]);

    _inherits(ProgressIndicator, _Component);

    return ProgressIndicator;
  }(React.Component);

  _defineProperty(ProgressIndicator, "propTypes", {
    children: PropTypes.node,
    className: PropTypes.string,
    currentIndex: PropTypes.number
  });

  _defineProperty(ProgressIndicator, "defaultProps", {
    currentIndex: 0
  });

  var RadioButtonSkeleton =
  /*#__PURE__*/
  function (_React$Component) {
    function RadioButtonSkeleton() {
      _classCallCheck(this, RadioButtonSkeleton);

      return _possibleConstructorReturn(this, _getPrototypeOf(RadioButtonSkeleton).apply(this, arguments));
    }

    _createClass(RadioButtonSkeleton, [{
      key: "render",
      value: function render() {
        var id = this.props.id;
        return React__default.createElement("div", {
          className: "radioButtonWrapper"
        }, React__default.createElement("div", {
          className: "bx--radio-button bx--skeleton"
        }), React__default.createElement("label", {
          className: "bx--radio-button__label bx--skeleton",
          htmlFor: id
        }));
      }
    }]);

    _inherits(RadioButtonSkeleton, _React$Component);

    return RadioButtonSkeleton;
  }(React__default.Component);

  var RadioButton =
  /*#__PURE__*/
  function (_React$Component) {
    function RadioButton() {
      var _getPrototypeOf2;

      var _temp, _this;

      _classCallCheck(this, RadioButton);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _possibleConstructorReturn(_this, (_temp = _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(RadioButton)).call.apply(_getPrototypeOf2, [this].concat(args))), _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleChange", function (evt) {
        _this.props.onChange(_this.props.value, _this.props.name, evt);
      }), _temp));
    }

    _createClass(RadioButton, [{
      key: "componentWillMount",
      value: function componentWillMount() {
        this.uid = this.props.id || uid();
      }
    }, {
      key: "render",
      value: function render() {
        var wrapperClasses = classNames('radioButtonWrapper', this.props.className);

        var _this$props = this.props,
            labelText = _this$props.labelText,
            other = _objectWithoutProperties(_this$props, ["labelText"]);

        return React__default.createElement("div", {
          className: wrapperClasses
        }, React__default.createElement("input", _extends({}, other, {
          type: "radio",
          className: "bx--radio-button",
          onChange: this.handleChange,
          id: this.uid
        })), React__default.createElement("label", {
          htmlFor: this.uid,
          className: "bx--radio-button__label"
        }, React__default.createElement("span", {
          className: "bx--radio-button__appearance"
        }), labelText));
      }
    }]);

    _inherits(RadioButton, _React$Component);

    return RadioButton;
  }(React__default.Component);

  _defineProperty(RadioButton, "propTypes", {
    checked: PropTypes.bool,
    className: PropTypes.string,
    defaultChecked: PropTypes.bool,
    disabled: PropTypes.bool,
    id: PropTypes.string,
    labelText: PropTypes.string.isRequired,
    name: PropTypes.string,
    onChange: PropTypes.func,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired
  });

  _defineProperty(RadioButton, "defaultProps", {
    onChange: function onChange() {}
  });

  var RadioButtonGroup =
  /*#__PURE__*/
  function (_React$Component) {
    function RadioButtonGroup() {
      var _getPrototypeOf2;

      var _temp, _this;

      _classCallCheck(this, RadioButtonGroup);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _possibleConstructorReturn(_this, (_temp = _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(RadioButtonGroup)).call.apply(_getPrototypeOf2, [this].concat(args))), _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
        selected: null
      }), _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "getRadioButtons", function () {
        var children = React__default.Children.map(_this.props.children, function (radioButton) {
          var _radioButton$props = radioButton.props,
              value = _radioButton$props.value,
              other = _objectWithoutProperties(_radioButton$props, ["value"]);
          /* istanbul ignore if */


          if (radioButton.props.hasOwnProperty('checked')) {
            warning_1(false, "Instead of using the checked property on the RadioButton, set\n            the defaultSelected property or valueSelected property on the RadioButtonGroup.");
          }

          return React__default.createElement(RadioButton, _extends({}, other, {
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

    _createClass(RadioButtonGroup, [{
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
        return React__default.createElement("div", {
          className: "bx--form-item"
        }, React__default.createElement("div", {
          className: className,
          disabled: disabled
        }, this.getRadioButtons()));
      }
    }]);

    _inherits(RadioButtonGroup, _React$Component);

    return RadioButtonGroup;
  }(React__default.Component);

  _defineProperty(RadioButtonGroup, "propTypes", {
    children: PropTypes.node,
    className: PropTypes.string,
    defaultSelected: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    name: PropTypes.string.isRequired,
    disabled: PropTypes.bool,
    onChange: PropTypes.func,
    valueSelected: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
  });

  _defineProperty(RadioButtonGroup, "defaultProps", {
    onChange:
    /* istanbul ignore next */
    function onChange() {},
    className: 'bx--radio-button-group'
  });

  var SecondaryButton = function SecondaryButton(props) {
    return React__default.createElement(Button, _extends({
      kind: "secondary"
    }, props));
  };

  var SelectItemGroup = function SelectItemGroup(_ref) {
    var children = _ref.children,
        className = _ref.className,
        disabled = _ref.disabled,
        label = _ref.label,
        other = _objectWithoutProperties(_ref, ["children", "className", "disabled", "label"]);

    var classNames$$1 = classNames('bx--select-optgroup', className);
    return React__default.createElement("optgroup", _extends({
      className: classNames$$1,
      label: label,
      disabled: disabled
    }, other), children);
  };

  SelectItemGroup.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    disabled: PropTypes.bool,
    label: PropTypes.string.isRequired
  };
  SelectItemGroup.defaultProps = {
    disabled: false,
    label: 'Provide label'
  };

  var Switch = function Switch(props) {
    var className = props.className,
        index = props.index,
        kind = props.kind,
        name = props.name,
        onClick = props.onClick,
        onKeyDown = props.onKeyDown,
        selected = props.selected,
        text = props.text,
        icon = props.icon,
        href = props.href,
        other = _objectWithoutProperties(props, ["className", "index", "kind", "name", "onClick", "onKeyDown", "selected", "text", "icon", "href"]);

    var handleClick = function handleClick(e) {
      e.preventDefault();
      onClick({
        index: index,
        name: name,
        text: text
      });
    };

    var handleKeyDown = function handleKeyDown(e) {
      var key = e.key || e.which;

      if (key === 'Enter' || key === 13 || key === ' ' || key === 32) {
        onKeyDown({
          index: index,
          name: name,
          text: text
        });
      }
    };

    var classes = classNames(className, 'bx--content-switcher-btn', {
      'bx--content-switcher--selected': selected
    });
    var commonProps = {
      onClick: handleClick,
      onKeyDown: handleKeyDown,
      className: classes
    };
    var btnIcon = icon ? React__default.cloneElement(icon, {
      className: classNames(icon.props.className, ' bx--content-switcher__icon')
    }) : null;

    if (kind === 'button') {
      return React__default.createElement("button", _extends({}, other, commonProps), btnIcon, text);
    }

    return React__default.createElement("a", _extends({
      href: href
    }, other, commonProps), btnIcon, text);
  };

  Switch.propTypes = {
    className: PropTypes.string,
    index: PropTypes.number,
    kind: PropTypes.oneOf(['button', 'anchor']).isRequired,
    name: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    onClick: PropTypes.func,
    onKeyDown: PropTypes.func,
    selected: PropTypes.bool,
    text: PropTypes.string.isRequired,
    icon: PropTypes.element,
    href: PropTypes.string
  };
  Switch.defaultProps = {
    selected: false,
    kind: 'anchor',
    text: 'Provide text',
    href: '',
    onClick: function onClick() {},
    onKeyDown: function onKeyDown() {}
  };

  var SliderSkeleton = function SliderSkeleton(_ref) {
    var hideLabel = _ref.hideLabel,
        id = _ref.id;
    var label = hideLabel ? null : React__default.createElement("label", {
      className: "bx--label bx--skeleton",
      htmlFor: id
    });
    return React__default.createElement("div", {
      className: "bx--form-item"
    }, label, React__default.createElement("div", {
      className: "bx--slider-container bx--skeleton"
    }, React__default.createElement("span", {
      className: "bx--slider__range-label"
    }), React__default.createElement("div", {
      className: "bx--slider"
    }, React__default.createElement("div", {
      className: "bx--slider__track"
    }), React__default.createElement("div", {
      className: "bx--slider__filled-track"
    }), React__default.createElement("div", {
      className: "bx--slider__thumb"
    })), React__default.createElement("span", {
      className: "bx--slider__range-label"
    })));
  };

  SliderSkeleton.propTypes = {
    hideLabel: PropTypes.bool
  };

  var defaultFormatLabel = function defaultFormatLabel(value, label) {
    return typeof label === 'function' ? label(value) : "".concat(value).concat(label);
  };

  var Slider =
  /*#__PURE__*/
  function (_PureComponent) {
    function Slider() {
      var _getPrototypeOf2;

      var _temp, _this;

      _classCallCheck(this, Slider);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _possibleConstructorReturn(_this, (_temp = _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Slider)).call.apply(_getPrototypeOf2, [this].concat(args))), _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
        dragging: false,
        value: _this.props.value,
        left: 0
      }), _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "updatePosition", function (evt) {
        if (evt && _this.props.disabled) {
          return;
        }

        if (evt && evt.dispatchConfig) {
          evt.persist();
        }

        if (_this.state.dragging) {
          return;
        }

        _this.setState({
          dragging: true
        });

        requestAnimationFrame(function () {
          _this.setState(function (prevState, props) {
            var fromInput = evt && evt.target && evt.target.classList.contains('bx-slider-text-input');

            var _this$calcValue = _this.calcValue(evt, prevState, props),
                left = _this$calcValue.left,
                newSliderValue = _this$calcValue.newValue;

            var newValue = fromInput ? Number(evt.target.value) : newSliderValue;

            if (prevState.left === left && prevState.value === newValue) {
              return {
                dragging: false
              };
            }

            if (typeof props.onChange === 'function') {
              props.onChange({
                value: newValue
              });
            }

            return {
              dragging: false,
              left: left,
              value: newValue
            };
          });
        });
      }), _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "calcValue", function (evt, prevState, props) {
        var min = props.min,
            max = props.max,
            step = props.step,
            stepMuliplier = props.stepMuliplier;
        var value = prevState.value;
        var range = max - min;
        var valuePercentage = (value - min) / range * 100;
        var left;
        var newValue;
        left = valuePercentage;
        newValue = value;

        if (evt) {
          var type = evt.type;

          if (type === 'keydown') {
            var direction = {
              40: -1,
              // decreasing
              37: -1,
              // decreasing
              38: 1,
              // increasing
              39: 1 // increasing

            }[evt.which];

            if (direction !== undefined) {
              var multiplier = evt.shiftKey === true ? range / step / stepMuliplier : 1;
              var stepMultiplied = step * multiplier;
              var stepSize = stepMultiplied / range * 100;
              left = valuePercentage + stepSize * direction;
              newValue = Number(value) + stepMultiplied * direction;
            }
          }

          if (type === 'mousemove' || type === 'click' || type === 'touchmove') {
            var clientX = evt.touches ? evt.touches[0].clientX : evt.clientX;

            var track = _this.track.getBoundingClientRect();

            var ratio = (clientX - track.left) / track.width;
            var rounded = min + Math.round(range * ratio / step) * step;
            left = (rounded - min) / range * 100;
            newValue = rounded;
          }
        }

        if (newValue <= Number(min)) {
          left = 0;
          newValue = min;
        }

        if (newValue >= Number(max)) {
          left = 100;
          newValue = max;
        }

        return {
          left: left,
          newValue: newValue
        };
      }), _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleMouseStart", function () {
        _this.element.ownerDocument.addEventListener('mousemove', _this.updatePosition);

        _this.element.ownerDocument.addEventListener('mouseup', _this.handleMouseEnd);
      }), _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleMouseEnd", function () {
        _this.element.ownerDocument.removeEventListener('mousemove', _this.updatePosition);

        _this.element.ownerDocument.removeEventListener('mouseup', _this.handleMouseEnd);
      }), _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleTouchStart", function () {
        _this.element.ownerDocument.addEventListener('touchmove', _this.updatePosition);

        _this.element.ownerDocument.addEventListener('touchup', _this.handleTouchEnd);

        _this.element.ownerDocument.addEventListener('touchend', _this.handleTouchEnd);

        _this.element.ownerDocument.addEventListener('touchcancel', _this.handleTouchEnd);
      }), _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleTouchEnd", function () {
        _this.element.ownerDocument.removeEventListener('touchmove', _this.updatePosition);

        _this.element.ownerDocument.removeEventListener('touchup', _this.handleTouchEnd);

        _this.element.ownerDocument.removeEventListener('touchend', _this.handleTouchEnd);

        _this.element.ownerDocument.removeEventListener('touchcancel', _this.handleTouchEnd);
      }), _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleChange", function (evt) {
        _this.setState({
          value: evt.target.value
        });

        _this.updatePosition(evt);
      }), _temp));
    }

    _createClass(Slider, [{
      key: "componentDidMount",
      value: function componentDidMount() {
        this.updatePosition();
      }
    }, {
      key: "componentWillReceiveProps",
      value: function componentWillReceiveProps(nextProps) {
        if (!lodash_isequal(nextProps, this.props)) {
          this.updatePosition();
        }
      }
    }, {
      key: "render",
      value: function render() {
        var _this2 = this;

        var _this$props = this.props,
            ariaLabelInput = _this$props.ariaLabelInput,
            className = _this$props.className,
            hideTextInput = _this$props.hideTextInput,
            _this$props$id = _this$props.id,
            id = _this$props$id === void 0 ? this.inputId = this.inputId || "__carbon-slider_".concat(Math.random().toString(36).substr(2)) : _this$props$id,
            min = _this$props.min,
            minLabel = _this$props.minLabel,
            max = _this$props.max,
            maxLabel = _this$props.maxLabel,
            _this$props$formatLab = _this$props.formatLabel,
            formatLabel = _this$props$formatLab === void 0 ? defaultFormatLabel : _this$props$formatLab,
            labelText = _this$props.labelText,
            step = _this$props.step,
            stepMuliplier = _this$props.stepMuliplier,
            inputType = _this$props.inputType,
            required = _this$props.required,
            disabled = _this$props.disabled,
            name = _this$props.name,
            other = _objectWithoutProperties(_this$props, ["ariaLabelInput", "className", "hideTextInput", "id", "min", "minLabel", "max", "maxLabel", "formatLabel", "labelText", "step", "stepMuliplier", "inputType", "required", "disabled", "name"]);

        var _this$state = this.state,
            value = _this$state.value,
            left = _this$state.left;
        var sliderClasses = classNames('bx--slider', {
          'bx--slider--disabled': disabled
        }, className);
        var filledTrackStyle = {
          transform: "translate(0%, -50%) scaleX(".concat(left / 100, ")")
        };
        var thumbStyle = {
          left: "".concat(left, "%")
        };
        return React__default.createElement("div", {
          className: "bx--form-item"
        }, React__default.createElement("label", {
          htmlFor: id,
          className: "bx--label"
        }, labelText), React__default.createElement("div", {
          className: "bx--slider-container"
        }, React__default.createElement("span", {
          className: "bx--slider__range-label"
        }, formatLabel(min, minLabel)), React__default.createElement("div", _extends({
          className: sliderClasses,
          ref: function ref(node) {
            _this2.element = node;
          },
          onClick: this.updatePosition,
          onKeyPress: this.updatePosition,
          role: "presentation",
          tabIndex: -1
        }, other), React__default.createElement("div", {
          className: "bx--slider__track",
          ref: function ref(node) {
            _this2.track = node;
          }
        }), React__default.createElement("div", {
          className: "bx--slider__filled-track",
          style: filledTrackStyle
        }), React__default.createElement("div", {
          className: "bx--slider__thumb",
          role: "slider",
          id: id,
          tabIndex: 0,
          "aria-valuemax": max,
          "aria-valuemin": min,
          "aria-valuenow": value,
          style: thumbStyle,
          onMouseDown: this.handleMouseStart,
          onTouchStart: this.handleTouchStart,
          onKeyDown: this.updatePosition
        }), React__default.createElement("input", {
          type: "hidden",
          name: name,
          value: value,
          required: required,
          min: min,
          max: max,
          step: step,
          onChange: this.handleChange
        })), React__default.createElement("span", {
          className: "bx--slider__range-label"
        }, formatLabel(max, maxLabel)), !hideTextInput && React__default.createElement(TextInput, {
          type: inputType,
          id: "input-for-slider",
          className: "bx-slider-text-input",
          value: value,
          onChange: this.handleChange,
          labelText: "",
          "aria-label": ariaLabelInput
        })));
      }
    }]);

    _inherits(Slider, _PureComponent);

    return Slider;
  }(React.PureComponent);

  _defineProperty(Slider, "propTypes", {
    /**
     * The CSS class name for the slider.
     */
    className: PropTypes.string,

    /**
     * `true` to hide the number input box.
     */
    hideTextInput: PropTypes.bool,

    /**
     * The ID of the `<input>`.
     */
    id: PropTypes.string,

    /**
     * The callback to get notified of change in value.
     */
    onChange: PropTypes.func,

    /**
     * The value.
     */
    value: PropTypes.number.isRequired,

    /**
     * The minimum value.
     */
    min: PropTypes.number.isRequired,

    /**
     * The label associated with the minimum value.
     */
    minLabel: PropTypes.string,

    /**
     * The maximum value.
     */
    max: PropTypes.number.isRequired,

    /**
     * The label associated with the maximum value.
     */
    maxLabel: PropTypes.string,

    /**
     * The callback to format the label associated with the minimum/maximum value.
     */
    formatLabel: PropTypes.func,

    /**
     * The label for the slider.
     */
    labelText: PropTypes.string,

    /**
     * A value determining how much the value should increase/decrease by moving the thumb by mouse.
     */
    step: PropTypes.number,

    /**
     * A value determining how much the value should increase/decrease by Shift+arrow keys,
     * which will be `(max - min) / stepMuliplier`.
     */
    stepMuliplier: PropTypes.number,

    /**
     * The child nodes.
     */
    children: PropTypes.node,

    /**
     * `true` to disable this slider.
     */
    disabled: PropTypes.bool,

    /**
     * The `name` attribute of the `<input>`.
     */
    name: PropTypes.bool,

    /**
     * The `type` attribute of the `<input>`.
     */
    inputType: PropTypes.string,

    /**
     * The `ariaLabel` for the `<input>`.
     */
    ariaLabelInput: PropTypes.string
  });

  _defineProperty(Slider, "defaultProps", {
    hideTextInput: false,
    step: 1,
    stepMuliplier: 4,
    disabled: false,
    minLabel: '',
    maxLabel: '',
    inputType: 'number',
    ariaLabelInput: 'Slider number input'
  });

  var StructuredListSkeleton = function StructuredListSkeleton(_ref) {
    var rowCount = _ref.rowCount,
        border = _ref.border;
    var StructuredListSkeletonClasses = classNames({
      'bx--skeleton': true,
      'bx--structured-list': true,
      'bx--structured-list--border': border
    });
    var rows = [];

    for (var i = 0; i < rowCount; i++) {
      rows.push(React__default.createElement("div", {
        className: "bx--structured-list-row",
        key: i
      }, React__default.createElement("div", {
        className: "bx--structured-list-td"
      }), React__default.createElement("div", {
        className: "bx--structured-list-td"
      }), React__default.createElement("div", {
        className: "bx--structured-list-td"
      })));
    }

    return React__default.createElement("section", {
      className: StructuredListSkeletonClasses
    }, React__default.createElement("div", {
      className: "bx--structured-list-thead"
    }, React__default.createElement("div", {
      className: "bx--structured-list-row bx--structured-list-row--header-row"
    }, React__default.createElement("div", {
      className: "bx--structured-list-th"
    }, React__default.createElement("span", null)), React__default.createElement("div", {
      className: "bx--structured-list-th"
    }, React__default.createElement("span", null)), React__default.createElement("div", {
      className: "bx--structured-list-th"
    }, React__default.createElement("span", null)))), React__default.createElement("div", {
      className: "bx--structured-list-tbody"
    }, rows));
  };

  StructuredListSkeleton.propTypes = {
    /**
     * number of table rows
     */
    rowCount: PropTypes.number,
    border: PropTypes.bool
  };
  StructuredListSkeleton.defaultProps = {
    rowCount: 5,
    border: false
  };

  var StructuredListWrapper =
  /*#__PURE__*/
  function (_Component) {
    function StructuredListWrapper() {
      _classCallCheck(this, StructuredListWrapper);

      return _possibleConstructorReturn(this, _getPrototypeOf(StructuredListWrapper).apply(this, arguments));
    }

    _createClass(StructuredListWrapper, [{
      key: "render",
      value: function render() {
        var _this$props = this.props,
            children = _this$props.children,
            selection = _this$props.selection,
            className = _this$props.className,
            border = _this$props.border,
            ariaLabel = _this$props.ariaLabel,
            other = _objectWithoutProperties(_this$props, ["children", "selection", "className", "border", "ariaLabel"]);

        var classes = classNames('bx--structured-list', className, {
          'bx--structured-list--border': border,
          'bx--structured-list--selection': selection
        });
        return React__default.createElement("section", _extends({
          className: classes
        }, other, {
          "aria-label": ariaLabel
        }), children);
      }
    }]);

    _inherits(StructuredListWrapper, _Component);

    return StructuredListWrapper;
  }(React.Component);

  _defineProperty(StructuredListWrapper, "propTypes", {
    children: PropTypes.node,
    className: PropTypes.string,
    border: PropTypes.bool,
    selection: PropTypes.bool,
    ariaLabel: PropTypes.string
  });

  _defineProperty(StructuredListWrapper, "defaultProps", {
    border: false,
    selection: false,
    ariaLabel: 'Structured list section'
  });

  var StructuredListHead =
  /*#__PURE__*/
  function (_Component2) {
    function StructuredListHead() {
      _classCallCheck(this, StructuredListHead);

      return _possibleConstructorReturn(this, _getPrototypeOf(StructuredListHead).apply(this, arguments));
    }

    _createClass(StructuredListHead, [{
      key: "render",
      value: function render() {
        var _this$props2 = this.props,
            children = _this$props2.children,
            className = _this$props2.className,
            other = _objectWithoutProperties(_this$props2, ["children", "className"]);

        var classes = classNames('bx--structured-list-thead', className);
        return React__default.createElement("div", _extends({
          className: classes
        }, other), children);
      }
    }]);

    _inherits(StructuredListHead, _Component2);

    return StructuredListHead;
  }(React.Component);

  _defineProperty(StructuredListHead, "propTypes", {
    children: PropTypes.node,
    className: PropTypes.string
  });

  var StructuredListInput =
  /*#__PURE__*/
  function (_Component3) {
    function StructuredListInput() {
      _classCallCheck(this, StructuredListInput);

      return _possibleConstructorReturn(this, _getPrototypeOf(StructuredListInput).apply(this, arguments));
    }

    _createClass(StructuredListInput, [{
      key: "componentWillMount",
      value: function componentWillMount() {
        this.uid = this.props.id || uid();
      }
    }, {
      key: "render",
      value: function render() {
        var _this$props3 = this.props,
            className = _this$props3.className,
            value = _this$props3.value,
            name = _this$props3.name,
            title = _this$props3.title,
            other = _objectWithoutProperties(_this$props3, ["className", "value", "name", "title"]);

        var classes = classNames('bx--structured-list-input', className);
        return React__default.createElement("input", _extends({}, other, {
          type: "radio",
          tabIndex: -1,
          id: this.uid,
          className: classes,
          value: value,
          name: name,
          title: title
        }));
      }
    }]);

    _inherits(StructuredListInput, _Component3);

    return StructuredListInput;
  }(React.Component);

  _defineProperty(StructuredListInput, "propTypes", {
    className: PropTypes.string,
    id: PropTypes.string,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    name: PropTypes.string,
    title: PropTypes.string,
    defaultChecked: PropTypes.bool,
    onChange: PropTypes.func
  });

  _defineProperty(StructuredListInput, "defaultProps", {
    onChange: function onChange() {},
    value: 'value',
    title: 'title'
  });

  var StructuredListRow =
  /*#__PURE__*/
  function (_Component4) {
    function StructuredListRow() {
      _classCallCheck(this, StructuredListRow);

      return _possibleConstructorReturn(this, _getPrototypeOf(StructuredListRow).apply(this, arguments));
    }

    _createClass(StructuredListRow, [{
      key: "render",
      value: function render() {
        var _this$props4 = this.props,
            onKeyDown = _this$props4.onKeyDown,
            tabIndex = _this$props4.tabIndex,
            children = _this$props4.children,
            className = _this$props4.className,
            head = _this$props4.head,
            label = _this$props4.label,
            other = _objectWithoutProperties(_this$props4, ["onKeyDown", "tabIndex", "children", "className", "head", "label"]);

        var classes = classNames('bx--structured-list-row', className, {
          'bx--structured-list-row--header-row': head
        });
        return label ? React__default.createElement("label", _extends({}, other, {
          tabIndex: tabIndex,
          className: classes,
          onKeyDown: onKeyDown,
          role: "presentation"
        }), children) : React__default.createElement("div", _extends({}, other, {
          className: classes
        }), children);
      }
    }]);

    _inherits(StructuredListRow, _Component4);

    return StructuredListRow;
  }(React.Component);

  _defineProperty(StructuredListRow, "propTypes", {
    children: PropTypes.node,
    className: PropTypes.string,
    head: PropTypes.bool,
    label: PropTypes.bool,
    tabIndex: PropTypes.number,
    onKeyDown: PropTypes.func
  });

  _defineProperty(StructuredListRow, "defaultProps", {
    head: false,
    label: false,
    tabIndex: 0,
    onKeyDown: function onKeyDown() {}
  });

  var StructuredListBody =
  /*#__PURE__*/
  function (_Component5) {
    function StructuredListBody() {
      var _getPrototypeOf2;

      var _temp, _this;

      _classCallCheck(this, StructuredListBody);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _possibleConstructorReturn(_this, (_temp = _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(StructuredListBody)).call.apply(_getPrototypeOf2, [this].concat(args))), _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
        labelRows: null,
        rowSelected: 0
      }), _temp));
    }

    _createClass(StructuredListBody, [{
      key: "render",
      value: function render() {
        var _this$props5 = this.props,
            children = _this$props5.children,
            className = _this$props5.className,
            other = _objectWithoutProperties(_this$props5, ["children", "className"]);

        var classes = classNames('bx--structured-list-tbody', className);
        return React__default.createElement("div", _extends({
          className: classes
        }, other), children);
      }
    }]);

    _inherits(StructuredListBody, _Component5);

    return StructuredListBody;
  }(React.Component);

  _defineProperty(StructuredListBody, "propTypes", {
    children: PropTypes.node,
    className: PropTypes.string,
    head: PropTypes.bool,
    onKeyDown: PropTypes.func
  });

  _defineProperty(StructuredListBody, "defaultProps", {
    onKeyDown: function onKeyDown() {}
  });

  var StructuredListCell =
  /*#__PURE__*/
  function (_Component6) {
    function StructuredListCell() {
      _classCallCheck(this, StructuredListCell);

      return _possibleConstructorReturn(this, _getPrototypeOf(StructuredListCell).apply(this, arguments));
    }

    _createClass(StructuredListCell, [{
      key: "render",
      value: function render() {
        var _this$props6 = this.props,
            children = _this$props6.children,
            className = _this$props6.className,
            head = _this$props6.head,
            noWrap = _this$props6.noWrap,
            other = _objectWithoutProperties(_this$props6, ["children", "className", "head", "noWrap"]);

        var classes = classNames(className, {
          'bx--structured-list-th': head,
          'bx--structured-list-td': !head,
          'bx--structured-list-content--nowrap': noWrap
        });
        return React__default.createElement("div", _extends({
          className: classes
        }, other), children);
      }
    }]);

    _inherits(StructuredListCell, _Component6);

    return StructuredListCell;
  }(React.Component);

  _defineProperty(StructuredListCell, "propTypes", {
    children: PropTypes.node,
    className: PropTypes.string,
    head: PropTypes.bool,
    noWrap: PropTypes.bool
  });

  _defineProperty(StructuredListCell, "defaultProps", {
    head: false,
    noWrap: false
  });

  var Tab =
  /*#__PURE__*/
  function (_React$Component) {
    function Tab() {
      _classCallCheck(this, Tab);

      return _possibleConstructorReturn(this, _getPrototypeOf(Tab).apply(this, arguments));
    }

    _createClass(Tab, [{
      key: "setTabFocus",
      value: function setTabFocus(evt) {
        var leftKey = 37;
        var rightKey = 39;

        if (evt.which === leftKey) {
          this.props.handleTabAnchorFocus(this.props.index - 1);
        } else if (evt.which === rightKey) {
          this.props.handleTabAnchorFocus(this.props.index + 1);
        } else {
          return;
        }
      }
    }, {
      key: "render",
      value: function render() {
        var _this = this;

        var _this$props = this.props,
            className = _this$props.className,
            handleTabClick = _this$props.handleTabClick,
            handleTabAnchorFocus = _this$props.handleTabAnchorFocus,
            handleTabKeyDown = _this$props.handleTabKeyDown,
            href = _this$props.href,
            index = _this$props.index,
            label = _this$props.label,
            selected = _this$props.selected,
            tabIndex = _this$props.tabIndex,
            _onClick = _this$props.onClick,
            _onKeyDown = _this$props.onKeyDown,
            renderAnchor = _this$props.renderAnchor,
            other = _objectWithoutProperties(_this$props, ["className", "handleTabClick", "handleTabAnchorFocus", "handleTabKeyDown", "href", "index", "label", "selected", "tabIndex", "onClick", "onKeyDown", "renderAnchor"]);

        var classes = classNames('bx--tabs__nav-item', {
          'bx--tabs__nav-item--selected': selected
        }, className);
        var anchorProps = {
          className: 'bx--tabs__nav-link',
          href: href,
          role: 'tab',
          tabIndex: tabIndex,
          ref: function ref(e) {
            _this.tabAnchor = e;
          }
        };
        return React__default.createElement("li", _extends({}, other, {
          tabIndex: -1,
          className: classes,
          onClick: function onClick(evt) {
            handleTabClick(index, label, evt);

            _onClick(evt);
          },
          onKeyDown: function onKeyDown(evt) {
            _this.setTabFocus(evt);

            handleTabKeyDown(index, label, evt);

            _onKeyDown(evt);
          },
          role: "presentation",
          selected: selected
        }), renderAnchor ? renderAnchor(anchorProps) : React__default.createElement("a", anchorProps, label));
      }
    }]);

    _inherits(Tab, _React$Component);

    return Tab;
  }(React__default.Component);

  _defineProperty(Tab, "propTypes", {
    className: PropTypes.string,
    handleTabClick: PropTypes.func,
    handleTabAnchorFocus: PropTypes.func,
    handleTabKeyDown: PropTypes.func,
    href: PropTypes.string.isRequired,
    index: PropTypes.number,
    label: PropTypes.string,
    role: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
    onKeyDown: PropTypes.func.isRequired,
    selected: PropTypes.bool.isRequired,
    tabIndex: PropTypes.number.isRequired,

    /*
     * An optional parameter to allow overriding the anchor rendering.
     * Useful for using Tab along with react-router or other client
     * side router libraries.
     **/
    renderAnchor: PropTypes.func
  });

  _defineProperty(Tab, "defaultProps", {
    role: 'presentation',
    label: 'provide a label',
    tabIndex: 0,
    href: '#',
    selected: false,
    onClick: function onClick() {},
    onKeyDown: function onKeyDown() {}
  });

  var Table$1 = function Table(props) {
    var children = props.children,
        className = props.className,
        containerClassName = props.containerClassName,
        other = _objectWithoutProperties(props, ["children", "className", "containerClassName"]);

    var tableClasses = classNames(className, 'bx--responsive-table');
    var tableContainerClasses = classNames(containerClassName, 'bx--responsive-table-container');
    return React__default.createElement("div", {
      className: tableContainerClasses
    }, React__default.createElement("table", _extends({}, other, {
      className: tableClasses,
      style: {
        borderCollapse: 'collapse',
        borderSpacing: 0
      }
    }), children));
  };

  Table$1.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    containerClassName: PropTypes.string
  };

  var TableRow$1 = function TableRow(props) {
    var even = props.even,
        header = props.header,
        className = props.className,
        children = props.children,
        other = _objectWithoutProperties(props, ["even", "header", "className", "children"]);

    var tableRowClasses = classNames(className, 'bx--table-row', {
      'bx--parent-row': !header,
      'bx--parent-row--even': even
    });
    return React__default.createElement("tr", _extends({}, other, {
      className: tableRowClasses
    }), children);
  };

  TableRow$1.propTypes = {
    header: PropTypes.bool,
    className: PropTypes.string,
    children: PropTypes.node,
    even: PropTypes.bool
  };
  TableRow$1.defaultProps = {
    header: false
  };

  /**
   * Adds striping to TableRows if the `even` prop wasn’t explicitly set.
   * @param {Array} rows React elements that are children of the `<TableBody>`.
   * @returns {Array} The updated child elements.
   */

  var handleRowStriping = function handleRowStriping(rows) {
    var count = 0;
    return rows.map(function (child) {
      // Only make changes if it's a TableRow
      if (child.type === TableRow$1) {
        // manually increase the TableRow count
        count++; // Don’t override user-set `even` prop

        var even = 'even' in child.props ? child.props.even : count % 2 === 1; // Return a clone of the element with the `even` prop set.

        return React__default.cloneElement(child, {
          even: even
        });
      }

      return child;
    });
  };

  var TableBody$1 = function TableBody(props) {
    var children = props.children,
        className = props.className,
        other = _objectWithoutProperties(props, ["children", "className"]);

    var tableBodyClasses = classNames(className, 'bx--table-body');
    var childArray = React__default.Children.toArray(children);
    var childrenWithProps = handleRowStriping(childArray);
    return React__default.createElement("tbody", _extends({}, other, {
      className: tableBodyClasses
    }), childrenWithProps);
  };

  TableBody$1.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string
  };

  var TableData = function TableData(props) {
    var children = props.children,
        className = props.className,
        iconClassName = props.iconClassName,
        expanded = props.expanded,
        other = _objectWithoutProperties(props, ["children", "className", "iconClassName", "expanded"]);

    var tableDataClasses = classNames(className);
    var iconClasses = classNames(iconClassName, 'bx--table-expand__svg');
    var style = expanded ? {
      transform: 'rotate(90deg)'
    } : {};
    return React__default.createElement("td", _extends({}, other, {
      className: tableDataClasses
    }), expanded === undefined ? children : React__default.createElement(Icon, {
      className: iconClasses,
      name: "chevron--right",
      description: "expand row",
      style: style,
      tabIndex: 0,
      onKeyPress: function onKeyPress(evt) {
        if (props.onClick && (evt.which === 13 || evt.which === 32)) {
          props.onClick(evt);
        }
      }
    }));
  };

  TableData.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    iconClassName: PropTypes.string,
    expanded: PropTypes.bool
  };

  var TableHead$1 = function TableHead(props) {
    var children = props.children,
        className = props.className,
        other = _objectWithoutProperties(props, ["children", "className"]);

    var tableHeadClasses = classNames(className, 'bx--table-head');
    return React__default.createElement("thead", _extends({}, other, {
      className: tableHeadClasses
    }), children);
  };

  TableHead$1.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string
  };

  var TableHeader$1 = function TableHeader(props) {
    var children = props.children,
        className = props.className,
        iconClassName = props.iconClassName,
        sortDir = props.sortDir,
        other = _objectWithoutProperties(props, ["children", "className", "iconClassName", "sortDir"]);

    var tableHeaderClasses = classNames(className, 'bx--table-header');
    var iconClasses = classNames(iconClassName, 'bx--table-sort__svg');
    var sortContent;

    if (sortDir) {
      sortContent = sortDir === 'DESC' ? React__default.createElement(Icon, {
        name: "caret--down",
        description: "descending sort",
        className: iconClasses
      }) : React__default.createElement(Icon, {
        name: "caret--up",
        description: "ascending sort",
        className: iconClasses
      });
    } else {
      sortContent = '';
    }

    return React__default.createElement("th", _extends({}, other, {
      className: tableHeaderClasses
    }), children, sortContent);
  };

  TableHeader$1.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    iconClassName: PropTypes.string,
    sortDir: PropTypes.string
  };

  var TableRowExpanded = function TableRowExpanded(props) {
    var _classNames;

    var children = props.children,
        className = props.className,
        even = props.even,
        colSpan = props.colSpan,
        expanded = props.expanded,
        other = _objectWithoutProperties(props, ["children", "className", "even", "colSpan", "expanded"]);

    var tableRowClasses = classNames((_classNames = {}, _defineProperty(_classNames, className, className), _defineProperty(_classNames, 'bx--table-row', true), _defineProperty(_classNames, 'bx--expandable-row', true), _defineProperty(_classNames, 'bx--expandable-row--even', even), _classNames));

    if (!expanded) {
      return false;
    }

    return React__default.createElement("tr", _extends({}, other, {
      className: tableRowClasses
    }), React__default.createElement("td", {
      colSpan: colSpan
    }, children));
  };

  TableRowExpanded.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    colSpan: PropTypes.number,
    expanded: PropTypes.bool,
    even: PropTypes.bool
  };
  TableRowExpanded.defaultProps = {
    expanded: false
  };

  var TagSkeleton =
  /*#__PURE__*/
  function (_React$Component) {
    function TagSkeleton() {
      _classCallCheck(this, TagSkeleton);

      return _possibleConstructorReturn(this, _getPrototypeOf(TagSkeleton).apply(this, arguments));
    }

    _createClass(TagSkeleton, [{
      key: "render",
      value: function render() {
        return React__default.createElement("span", {
          className: "bx--tag bx--skeleton"
        });
      }
    }]);

    _inherits(TagSkeleton, _React$Component);

    return TagSkeleton;
  }(React__default.Component);

  var TYPES = {
    beta: 'Beta',
    community: 'Community',
    custom: 'Custom',
    dedicated: 'Dedicated',
    experimental: 'Experimental',
    ibm: 'IBM',
    local: 'Local',
    private: 'Private',
    'third-party': 'Third-Party'
  };

  var Tag = function Tag(_ref) {
    var children = _ref.children,
        className = _ref.className,
        type = _ref.type,
        other = _objectWithoutProperties(_ref, ["children", "className", "type"]);

    var tagClass = "bx--tag--".concat(type);
    var tagClasses = classNames('bx--tag', tagClass, className);
    return React__default.createElement("span", _extends({
      className: tagClasses
    }, other), children || TYPES[type]);
  };

  Tag.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    type: PropTypes.oneOf(Object.keys(TYPES)).isRequired
  };
  var types = Object.keys(TYPES);

  var TextAreaSkeleton = function TextAreaSkeleton(_ref) {
    var hideLabel = _ref.hideLabel,
        id = _ref.id;
    var label = hideLabel ? null : React__default.createElement("label", {
      className: "bx--label bx--skeleton",
      htmlFor: id
    });
    return React__default.createElement("div", {
      className: "bx--form-item"
    }, label, React__default.createElement("div", {
      className: "bx--skeleton bx--text-area"
    }));
  };

  TextAreaSkeleton.propTypes = {
    hideLabel: PropTypes.bool
  };

  var TextArea = function TextArea(_ref) {
    var className = _ref.className,
        id = _ref.id,
        labelText = _ref.labelText,
        hideLabel = _ref.hideLabel,
        _onChange = _ref.onChange,
        _onClick = _ref.onClick,
        invalid = _ref.invalid,
        invalidText = _ref.invalidText,
        other = _objectWithoutProperties(_ref, ["className", "id", "labelText", "hideLabel", "onChange", "onClick", "invalid", "invalidText"]);

    var textareaProps = {
      id: id,
      onChange: function onChange(evt) {
        if (!other.disabled) {
          _onChange(evt);
        }
      },
      onClick: function onClick(evt) {
        if (!other.disabled) {
          _onClick(evt);
        }
      }
    };
    var textareaClasses = classNames('bx--text-area', className);
    var labelClasses = classNames('bx--label', {
      'bx--visually-hidden': hideLabel
    });
    var label = labelText ? React__default.createElement("label", {
      htmlFor: id,
      className: labelClasses
    }, labelText) : null;
    var error = invalid ? React__default.createElement("div", {
      className: "bx--form-requirement"
    }, invalidText) : null;
    var input = invalid ? React__default.createElement("textarea", _extends({}, other, textareaProps, {
      className: textareaClasses,
      "data-invalid": true
    })) : React__default.createElement("textarea", _extends({}, other, textareaProps, {
      className: textareaClasses
    }));
    return React__default.createElement("div", {
      className: "bx--form-item"
    }, label, input, error);
  };

  TextArea.propTypes = {
    className: PropTypes.string,
    cols: PropTypes.number,
    defaultValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    disabled: PropTypes.bool,
    id: PropTypes.string,
    labelText: PropTypes.string.isRequired,
    onChange: PropTypes.func,
    onClick: PropTypes.func,
    placeholder: PropTypes.string,
    rows: PropTypes.number,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    invalid: PropTypes.bool,
    invalidText: PropTypes.string,
    hideLabel: PropTypes.bool
  };
  TextArea.defaultProps = {
    disabled: false,
    onChange: function onChange() {},
    onClick: function onClick() {},
    placeholder: '',
    rows: 4,
    cols: 50,
    invalid: false,
    invalidText: ''
  };

  var Tile =
  /*#__PURE__*/
  function (_Component) {
    function Tile() {
      _classCallCheck(this, Tile);

      return _possibleConstructorReturn(this, _getPrototypeOf(Tile).apply(this, arguments));
    }

    _createClass(Tile, [{
      key: "render",
      value: function render() {
        var _this$props = this.props,
            children = _this$props.children,
            className = _this$props.className,
            other = _objectWithoutProperties(_this$props, ["children", "className"]);

        var tileClasses = classNames('bx--tile', className);
        return React__default.createElement("div", _extends({
          className: tileClasses
        }, other), children);
      }
    }]);

    _inherits(Tile, _Component);

    return Tile;
  }(React.Component);

  _defineProperty(Tile, "propTypes", {
    children: PropTypes.node,
    className: PropTypes.string
  });

  var ClickableTile =
  /*#__PURE__*/
  function (_Component2) {
    function ClickableTile() {
      var _getPrototypeOf2;

      var _temp, _this;

      _classCallCheck(this, ClickableTile);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _possibleConstructorReturn(_this, (_temp = _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(ClickableTile)).call.apply(_getPrototypeOf2, [this].concat(args))), _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
        clicked: _this.props.clicked
      }), _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleClick", function (evt) {
        _this.setState({
          clicked: !_this.state.clicked
        }, function () {
          _this.props.handleClick(evt);
        });
      }), _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleKeyDown", function (evt) {
        if (evt.which === 13 || evt.which === 32) {
          _this.setState({
            clicked: !_this.state.clicked
          }, function () {
            _this.props.handleKeyDown(evt);
          });
        } else {
          _this.props.handleKeyDown(evt);
        }
      }), _temp));
    }

    _createClass(ClickableTile, [{
      key: "componentWillReceiveProps",
      value: function componentWillReceiveProps(_ref) {
        var clicked = _ref.clicked;

        if (clicked !== this.props.clicked) {
          this.setState({
            clicked: clicked
          });
        }
      }
    }, {
      key: "render",
      value: function render() {
        var _this$props2 = this.props,
            children = _this$props2.children,
            href = _this$props2.href,
            className = _this$props2.className,
            handleClick = _this$props2.handleClick,
            handleKeyDown = _this$props2.handleKeyDown,
            clicked = _this$props2.clicked,
            other = _objectWithoutProperties(_this$props2, ["children", "href", "className", "handleClick", "handleKeyDown", "clicked"]);

        var classes = classNames('bx--tile', 'bx--tile--clickable', {
          'bx--tile--is-clicked': this.state.clicked
        }, className);
        return React__default.createElement("a", _extends({
          href: href,
          className: classes
        }, other, {
          onClick: this.handleClick,
          onKeyDown: this.handleKeyDown
        }), children);
      }
    }]);

    _inherits(ClickableTile, _Component2);

    return ClickableTile;
  }(React.Component);

  _defineProperty(ClickableTile, "propTypes", {
    children: PropTypes.node,
    className: PropTypes.string,
    href: PropTypes.string
  });

  _defineProperty(ClickableTile, "defaultProps", {
    clicked: false,
    handleClick: function handleClick() {},
    handleKeyDown: function handleKeyDown() {}
  });

  var SelectableTile =
  /*#__PURE__*/
  function (_Component3) {
    function SelectableTile() {
      var _getPrototypeOf3;

      var _temp2, _this2;

      _classCallCheck(this, SelectableTile);

      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }

      return _possibleConstructorReturn(_this2, (_temp2 = _this2 = _possibleConstructorReturn(this, (_getPrototypeOf3 = _getPrototypeOf(SelectableTile)).call.apply(_getPrototypeOf3, [this].concat(args))), _defineProperty(_assertThisInitialized(_assertThisInitialized(_this2)), "state", {
        selected: _this2.props.selected
      }), _defineProperty(_assertThisInitialized(_assertThisInitialized(_this2)), "handleClick", function (evt) {
        evt.preventDefault();
        var isInput = evt.target === _this2.input;

        if (!isInput) {
          _this2.setState({
            selected: !_this2.state.selected
          }, function () {
            _this2.props.handleClick(evt);
          });
        } else {
          _this2.props.handleClick(evt);
        }
      }), _defineProperty(_assertThisInitialized(_assertThisInitialized(_this2)), "handleKeyDown", function (evt) {
        evt.preventDefault();

        if (evt.which === 13 || evt.which === 32) {
          _this2.setState({
            selected: !_this2.state.selected
          }, function () {
            _this2.props.handleKeyDown(evt);
          });
        } else {
          _this2.props.handleKeyDown(evt);
        }
      }), _temp2));
    }

    _createClass(SelectableTile, [{
      key: "componentWillReceiveProps",
      value: function componentWillReceiveProps(_ref2) {
        var selected = _ref2.selected;

        if (selected !== this.props.selected) {
          this.setState({
            selected: selected
          });
        }
      }
    }, {
      key: "render",
      value: function render() {
        var _this3 = this;

        var _this$props3 = this.props,
            children = _this$props3.children,
            id = _this$props3.id,
            tabIndex = _this$props3.tabIndex,
            value = _this$props3.value,
            name = _this$props3.name,
            title = _this$props3.title,
            className = _this$props3.className,
            handleClick = _this$props3.handleClick,
            handleKeyDown = _this$props3.handleKeyDown,
            other = _objectWithoutProperties(_this$props3, ["children", "id", "tabIndex", "value", "name", "title", "className", "handleClick", "handleKeyDown"]);

        var classes = classNames('bx--tile', 'bx--tile--selectable', className);
        return (// eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions
          React__default.createElement("label", _extends({
            htmlFor: id,
            className: classes,
            tabIndex: tabIndex
          }, other, {
            onClick: this.handleClick,
            onKeyDown: this.handleKeyDown
          }), React__default.createElement("input", {
            ref: function ref(input) {
              _this3.input = input;
            },
            tabIndex: -1,
            id: id,
            className: "bx--tile-input",
            value: value,
            type: "checkbox",
            name: name,
            title: title,
            checked: this.state.selected
          }), React__default.createElement("div", {
            className: "bx--tile__checkmark"
          }, React__default.createElement(Icon, {
            name: "checkmark--glyph",
            description: "Tile checkmark"
          })), React__default.createElement("div", {
            className: "bx--tile-content"
          }, children))
        );
      }
    }]);

    _inherits(SelectableTile, _Component3);

    return SelectableTile;
  }(React.Component);

  _defineProperty(SelectableTile, "propTypes", {
    children: PropTypes.node,
    className: PropTypes.string,
    selected: PropTypes.bool,
    id: PropTypes.string,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    name: PropTypes.string,
    title: PropTypes.string
  });

  _defineProperty(SelectableTile, "defaultProps", {
    value: 'value',
    title: 'title',
    selected: false,
    handleClick: function handleClick() {},
    handleKeyDown: function handleKeyDown() {}
  });

  var ExpandableTile =
  /*#__PURE__*/
  function (_Component4) {
    function ExpandableTile() {
      var _getPrototypeOf4;

      var _temp3, _this4;

      _classCallCheck(this, ExpandableTile);

      for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
        args[_key3] = arguments[_key3];
      }

      return _possibleConstructorReturn(_this4, (_temp3 = _this4 = _possibleConstructorReturn(this, (_getPrototypeOf4 = _getPrototypeOf(ExpandableTile)).call.apply(_getPrototypeOf4, [this].concat(args))), _defineProperty(_assertThisInitialized(_assertThisInitialized(_this4)), "state", {
        expanded: _this4.props.expanded,
        tileMaxHeight: _this4.props.tileMaxHeight,
        tilePadding: _this4.props.tilePadding
      }), _defineProperty(_assertThisInitialized(_assertThisInitialized(_this4)), "componentDidMount", function () {
        if (_this4.refs[0]) {
          _this4.aboveTheFold = ReactDOM.findDOMNode(_this4.refs[0]); // eslint-disable-line
        }

        var getStyle = window.getComputedStyle(_this4.tile, null);

        _this4.setState({
          tileMaxHeight: _this4.aboveTheFold.getBoundingClientRect().height,
          tilePadding: parseInt(getStyle.getPropertyValue('padding-top'), 10) + parseInt(getStyle.getPropertyValue('padding-bottom'), 10)
        });
      }), _defineProperty(_assertThisInitialized(_assertThisInitialized(_this4)), "setMaxHeight", function () {
        if (_this4.state.expanded) {
          _this4.setState({
            tileMaxHeight: _this4.tileContent.getBoundingClientRect().height
          });
        } else {
          _this4.setState({
            tileMaxHeight: _this4.aboveTheFold.getBoundingClientRect().height
          });
        }
      }), _defineProperty(_assertThisInitialized(_assertThisInitialized(_this4)), "handleClick", function (evt) {
        _this4.setState({
          expanded: !_this4.state.expanded
        }, function () {
          _this4.setMaxHeight();

          _this4.props.handleClick(evt);
        });
      }), _defineProperty(_assertThisInitialized(_assertThisInitialized(_this4)), "getChildren", function () {
        return React__default.Children.map(_this4.props.children, function (child) {
          return child;
        });
      }), _temp3));
    }

    _createClass(ExpandableTile, [{
      key: "componentWillReceiveProps",
      value: function componentWillReceiveProps(_ref3) {
        var expanded = _ref3.expanded,
            tileMaxHeight = _ref3.tileMaxHeight,
            tilePadding = _ref3.tilePadding;

        if (expanded !== this.props.expanded) {
          this.setState({
            expanded: expanded
          });
        }

        if (tileMaxHeight !== this.props.tileMaxHeight) {
          this.setState({
            tileMaxHeight: tileMaxHeight
          });
        }

        if (tilePadding !== this.props.tilePadding) {
          this.setState({
            tilePadding: tilePadding
          });
        }
      }
    }, {
      key: "render",
      value: function render() {
        var _this5 = this;

        var _this$props4 = this.props,
            tabIndex = _this$props4.tabIndex,
            className = _this$props4.className,
            tileMaxHeight = _this$props4.tileMaxHeight,
            tilePadding = _this$props4.tilePadding,
            handleClick = _this$props4.handleClick,
            expanded = _this$props4.expanded,
            other = _objectWithoutProperties(_this$props4, ["tabIndex", "className", "tileMaxHeight", "tilePadding", "handleClick", "expanded"]);

        var classes = classNames('bx--tile', 'bx--tile--expandable', {
          'bx--tile--is-expanded': this.state.expanded
        }, className);
        var tileStyle = {
          maxHeight: this.state.tileMaxHeight + this.state.tilePadding
        };
        var content = this.getChildren().map(function (child, index) {
          return React__default.cloneElement(child, {
            ref: index
          });
        });
        return (// eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions
          React__default.createElement("div", _extends({
            ref: function ref(tile) {
              _this5.tile = tile;
            },
            style: tileStyle,
            className: classes
          }, other, {
            role: "button",
            onClick: this.handleClick,
            tabIndex: tabIndex
          }), React__default.createElement("button", {
            className: "bx--tile__chevron"
          }, React__default.createElement(Icon, {
            name: "chevron--down",
            description: "Tile chevron"
          })), React__default.createElement("div", {
            ref: function ref(tileContent) {
              _this5.tileContent = tileContent;
            },
            className: "bx--tile-content"
          }, content))
        );
      }
    }]);

    _inherits(ExpandableTile, _Component4);

    return ExpandableTile;
  }(React.Component);

  _defineProperty(ExpandableTile, "propTypes", {
    children: PropTypes.node,
    className: PropTypes.string,
    expanded: PropTypes.bool,
    tabIndex: PropTypes.number
  });

  _defineProperty(ExpandableTile, "defaultProps", {
    tabIndex: 0,
    expanded: false,
    tileMaxHeight: '0',
    handleClick: function handleClick() {}
  });

  var TileAboveTheFoldContent =
  /*#__PURE__*/
  function (_Component5) {
    function TileAboveTheFoldContent() {
      _classCallCheck(this, TileAboveTheFoldContent);

      return _possibleConstructorReturn(this, _getPrototypeOf(TileAboveTheFoldContent).apply(this, arguments));
    }

    _createClass(TileAboveTheFoldContent, [{
      key: "render",
      value: function render() {
        var children = this.props.children;
        return React__default.createElement("span", {
          className: "bx--tile-content__above-the-fold"
        }, children);
      }
    }]);

    _inherits(TileAboveTheFoldContent, _Component5);

    return TileAboveTheFoldContent;
  }(React.Component);

  _defineProperty(TileAboveTheFoldContent, "propTypes", {
    children: PropTypes.node,
    className: PropTypes.string
  });

  var TileBelowTheFoldContent =
  /*#__PURE__*/
  function (_Component6) {
    function TileBelowTheFoldContent() {
      _classCallCheck(this, TileBelowTheFoldContent);

      return _possibleConstructorReturn(this, _getPrototypeOf(TileBelowTheFoldContent).apply(this, arguments));
    }

    _createClass(TileBelowTheFoldContent, [{
      key: "render",
      value: function render() {
        var children = this.props.children;
        return React__default.createElement("span", {
          className: "bx--tile-content__below-the-fold"
        }, children);
      }
    }]);

    _inherits(TileBelowTheFoldContent, _Component6);

    return TileBelowTheFoldContent;
  }(React.Component);

  _defineProperty(TileBelowTheFoldContent, "propTypes", {
    children: PropTypes.node,
    className: PropTypes.string
  });

  var RadioTile =
  /*#__PURE__*/
  function (_React$Component) {
    function RadioTile() {
      var _getPrototypeOf2;

      var _temp, _this;

      _classCallCheck(this, RadioTile);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _possibleConstructorReturn(_this, (_temp = _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(RadioTile)).call.apply(_getPrototypeOf2, [this].concat(args))), _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleChange", function (evt) {
        _this.props.onChange(_this.props.value, _this.props.name, evt);
      }), _temp));
    }

    _createClass(RadioTile, [{
      key: "componentWillMount",
      value: function componentWillMount() {
        this.uid = this.props.id || uid();
      }
    }, {
      key: "render",
      value: function render() {
        var _this$props = this.props,
            children = _this$props.children,
            className = _this$props.className,
            other = _objectWithoutProperties(_this$props, ["children", "className"]);

        var classes = classNames(className, 'bx--tile', 'bx--tile--selectable', {
          'bx--tile--is-selected': this.props.checked
        });
        return React__default.createElement("label", {
          htmlFor: this.uid,
          className: classes
        }, React__default.createElement("input", _extends({}, other, {
          type: "radio",
          className: "bx--tile-input",
          onChange: this.handleChange,
          id: this.uid
        })), React__default.createElement("div", {
          className: "bx--tile__checkmark"
        }, React__default.createElement(Icon, {
          name: "checkmark--glyph",
          description: "Tile checkmark"
        })), React__default.createElement("div", {
          className: "bx--tile-content"
        }, children));
      }
    }]);

    _inherits(RadioTile, _React$Component);

    return RadioTile;
  }(React__default.Component);

  _defineProperty(RadioTile, "propTypes", {
    checked: PropTypes.bool,
    className: PropTypes.string,
    defaultChecked: PropTypes.bool,
    id: PropTypes.string,
    name: PropTypes.string,
    onChange: PropTypes.func,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired
  });

  _defineProperty(RadioTile, "defaultProps", {
    onChange: function onChange() {}
  });

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
        var childrenArray = React__default.Children.toArray(_this.props.children);
        var children = childrenArray.map(function (tileRadio) {
          var _tileRadio$props = tileRadio.props,
              value = _tileRadio$props.value,
              other = _objectWithoutProperties(_tileRadio$props, ["value"]);
          /* istanbul ignore if */


          if (tileRadio.props.hasOwnProperty('checked')) {
            warning_1(false, "Instead of using the checked property on the RadioTile, set\n            the defaultSelected property or valueSelected property on the TileGroup.");
          }

          return React__default.createElement(RadioTile, _extends({}, other, {
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
        return React__default.createElement("div", {
          className: className,
          disabled: disabled
        }, this.getRadioTiles());
      }
    }]);

    _inherits(TileGroup, _React$Component);

    return TileGroup;
  }(React__default.Component);

  _defineProperty(TileGroup, "propTypes", {
    children: PropTypes.node,
    className: PropTypes.string,
    defaultSelected: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    name: PropTypes.string.isRequired,
    disabled: PropTypes.bool,
    onChange: PropTypes.func,
    valueSelected: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
  });

  _defineProperty(TileGroup, "defaultProps", {
    onChange:
    /* istanbul ignore next */
    function onChange() {},
    className: 'bx--tile-group'
  });

  var TimePicker =
  /*#__PURE__*/
  function (_Component) {
    function TimePicker(props) {
      var _this;

      _classCallCheck(this, TimePicker);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(TimePicker).call(this, props));
      _this.state = {
        value: props.value
      };
      return _this;
    }

    _createClass(TimePicker, [{
      key: "componentWillReceiveProps",
      value: function componentWillReceiveProps(nextProps) {
        if (nextProps.value !== this.props.value) {
          this.setState({
            value: nextProps.value
          });
        }
      }
    }, {
      key: "render",
      value: function render() {
        var _this2 = this;

        var _this$props = this.props,
            children = _this$props.children,
            className = _this$props.className,
            id = _this$props.id,
            labelText = _this$props.labelText,
            type = _this$props.type,
            pattern = _this$props.pattern,
            _onChange = _this$props.onChange,
            _onClick = _this$props.onClick,
            _onBlur = _this$props.onBlur,
            placeholder = _this$props.placeholder,
            maxLength = _this$props.maxLength,
            invalidText = _this$props.invalidText,
            invalid = _this$props.invalid,
            hideLabel = _this$props.hideLabel,
            other = _objectWithoutProperties(_this$props, ["children", "className", "id", "labelText", "type", "pattern", "onChange", "onClick", "onBlur", "placeholder", "maxLength", "invalidText", "invalid", "hideLabel"]);

        var timePickerInputProps = {
          onChange: function onChange(evt) {
            if (!other.disabled) {
              _this2.setState({
                value: evt.target.value
              });

              _onChange(evt);
            }
          },
          onClick: function onClick(evt) {
            if (!other.disabled) {
              _this2.setState({
                value: evt.target.value
              });

              _onClick(evt);
            }
          },
          onBlur: function onBlur(evt) {
            if (!other.disabled) {
              _this2.setState({
                value: evt.target.value
              });

              _onBlur(evt);
            }
          },
          pattern: pattern,
          placeholder: placeholder,
          maxLength: maxLength,
          id: id,
          type: type,
          value: this.state.value
        };
        var timePickerClasses = classNames(_defineProperty({
          'bx--time-picker': true
        }, className, className));
        var labelClasses = classNames('bx--label', {
          'bx--visually-hidden': hideLabel
        });
        var label = labelText ? React__default.createElement("label", {
          htmlFor: id,
          className: labelClasses
        }, labelText) : null;
        var error = invalid ? React__default.createElement("div", {
          className: "bx--form-requirement"
        }, invalidText) : null;
        return React__default.createElement("div", {
          className: "bx--form-item"
        }, label, React__default.createElement("div", {
          className: timePickerClasses
        }, React__default.createElement("div", {
          className: "bx--time-picker__input"
        }, React__default.createElement("input", _extends({}, other, timePickerInputProps, {
          "data-invalid": invalid ? invalid : undefined,
          className: "bx--time-picker__input-field"
        })), error), children));
      }
    }]);

    _inherits(TimePicker, _Component);

    return TimePicker;
  }(React.Component);

  _defineProperty(TimePicker, "propTypes", {
    children: PropTypes.node,
    className: PropTypes.string,
    id: PropTypes.string.isRequired,
    labelText: PropTypes.string,
    onClick: PropTypes.func,
    onChange: PropTypes.func,
    onBlur: PropTypes.func,
    type: PropTypes.string,
    pattern: PropTypes.string,
    placeholder: PropTypes.string,
    maxLength: PropTypes.number,
    invalid: PropTypes.bool,
    invalidText: PropTypes.string,
    hideLabel: PropTypes.bool,
    disabled: PropTypes.bool,
    value: PropTypes.string
  });

  _defineProperty(TimePicker, "defaultProps", {
    type: 'text',
    pattern: '(1[012]|[1-9]):[0-5][0-9](\\s)?(?i)',
    placeholder: 'hh:mm',
    maxLength: 5,
    invalidText: 'Invalid time format.',
    invalid: false,
    disabled: false,
    onChange: function onChange() {},
    onClick: function onClick() {},
    onBlur: function onBlur() {}
  });

  var TimePickerSelect =
  /*#__PURE__*/
  function (_Component) {
    function TimePickerSelect() {
      _classCallCheck(this, TimePickerSelect);

      return _possibleConstructorReturn(this, _getPrototypeOf(TimePickerSelect).apply(this, arguments));
    }

    _createClass(TimePickerSelect, [{
      key: "render",
      value: function render() {
        var _this$props = this.props,
            id = _this$props.id,
            disabled = _this$props.disabled,
            children = _this$props.children,
            iconDescription = _this$props.iconDescription,
            className = _this$props.className,
            hideLabel = _this$props.hideLabel,
            labelText = _this$props.labelText,
            inline = _this$props.inline,
            other = _objectWithoutProperties(_this$props, ["id", "disabled", "children", "iconDescription", "className", "hideLabel", "labelText", "inline"]);

        var selectClasses = classNames(_defineProperty({
          'bx--select': true,
          'bx--time-picker__select': true,
          'bx--select--inline': true
        }, className, className));
        var labelClasses = classNames('bx--label', {
          'bx--visually-hidden': hideLabel
        });
        var label = labelText ? React__default.createElement("label", {
          htmlFor: id,
          className: labelClasses
        }, labelText) : null;
        return React__default.createElement("div", {
          className: selectClasses
        }, label, React__default.createElement("select", _extends({}, other, {
          id: id,
          className: "bx--select-input",
          disabled: disabled
        }), children), React__default.createElement(Icon, {
          name: "caret--down",
          className: "bx--select__arrow",
          description: iconDescription
        }));
      }
    }]);

    _inherits(TimePickerSelect, _Component);

    return TimePickerSelect;
  }(React.Component);

  _defineProperty(TimePickerSelect, "propTypes", {
    children: PropTypes.node,
    className: PropTypes.string,
    id: PropTypes.string.isRequired,
    inline: PropTypes.bool,
    disabled: PropTypes.bool,
    defaultValue: PropTypes.any,
    iconDescription: PropTypes.string.isRequired,
    hideLabel: PropTypes.bool,
    labelText: PropTypes.string.isRequired
  });

  _defineProperty(TimePickerSelect, "defaultProps", {
    disabled: false,
    inline: true,
    iconDescription: 'open list of options',
    hideLabel: true
  });

  var ToggleSkeleton =
  /*#__PURE__*/
  function (_React$Component) {
    function ToggleSkeleton() {
      _classCallCheck(this, ToggleSkeleton);

      return _possibleConstructorReturn(this, _getPrototypeOf(ToggleSkeleton).apply(this, arguments));
    }

    _createClass(ToggleSkeleton, [{
      key: "render",
      value: function render() {
        var id = this.props.id;
        return React__default.createElement("div", {
          className: "bx--form-item"
        }, React__default.createElement("input", {
          type: "checkbox",
          id: id,
          className: "bx--toggle bx--skeleton"
        }), React__default.createElement("label", {
          className: "bx--toggle__label bx--skeleton",
          htmlFor: id
        }, React__default.createElement("span", {
          className: "bx--toggle__text--left"
        }), React__default.createElement("span", {
          className: "bx--toggle__appearance"
        }), React__default.createElement("span", {
          className: "bx--toggle__text--right"
        })));
      }
    }]);

    _inherits(ToggleSkeleton, _React$Component);

    return ToggleSkeleton;
  }(React__default.Component);

  var Toggle = function Toggle(_ref) {
    var className = _ref.className,
        defaultToggled = _ref.defaultToggled,
        toggled = _ref.toggled,
        _onChange = _ref.onChange,
        onToggle = _ref.onToggle,
        id = _ref.id,
        labelA = _ref.labelA,
        labelB = _ref.labelB,
        other = _objectWithoutProperties(_ref, ["className", "defaultToggled", "toggled", "onChange", "onToggle", "id", "labelA", "labelB"]);

    var input;
    var wrapperClasses = classNames(_defineProperty({
      'bx--form-item': true
    }, className, className));
    var checkedProps = {};

    if (typeof toggled !== 'undefined') {
      checkedProps.checked = toggled;
    } else {
      checkedProps.defaultChecked = defaultToggled;
    }

    return React__default.createElement("div", {
      className: wrapperClasses
    }, React__default.createElement("input", _extends({}, other, checkedProps, {
      type: "checkbox",
      id: id,
      className: "bx--toggle",
      onChange: function onChange(evt) {
        _onChange && _onChange(evt);
        onToggle(input.checked, id, evt);
      },
      ref: function ref(el) {
        input = el;
      }
    })), React__default.createElement("label", {
      className: "bx--toggle__label",
      htmlFor: id
    }, React__default.createElement("span", {
      className: "bx--toggle__text--left"
    }, labelA), React__default.createElement("span", {
      className: "bx--toggle__appearance"
    }), React__default.createElement("span", {
      className: "bx--toggle__text--right"
    }, labelB)));
  };

  Toggle.propTypes = {
    className: PropTypes.string,
    defaultToggled: PropTypes.bool,
    onToggle: PropTypes.func,
    id: PropTypes.string.isRequired,
    toggled: PropTypes.bool,
    labelA: PropTypes.string.isRequired,
    labelB: PropTypes.string.isRequired
  };
  Toggle.defaultProps = {
    defaultToggled: false,
    labelA: 'Off',
    labelB: 'On',
    onToggle: function onToggle() {}
  };

  var ToggleSmallSkeleton =
  /*#__PURE__*/
  function (_React$Component) {
    function ToggleSmallSkeleton() {
      _classCallCheck(this, ToggleSmallSkeleton);

      return _possibleConstructorReturn(this, _getPrototypeOf(ToggleSmallSkeleton).apply(this, arguments));
    }

    _createClass(ToggleSmallSkeleton, [{
      key: "render",
      value: function render() {
        var id = this.props.id;
        return React__default.createElement("div", {
          className: "bx--form-item"
        }, React__default.createElement("input", {
          type: "checkbox",
          id: id,
          className: "bx--toggle bx--toggle--small bx--skeleton"
        }), React__default.createElement("label", {
          className: "bx--toggle__label bx--skeleton",
          htmlFor: id
        }, React__default.createElement("span", {
          className: "bx--toggle__appearance"
        }, React__default.createElement("svg", {
          className: "bx--toggle__check",
          width: "6px",
          height: "5px",
          viewBox: "0 0 6 5"
        }, React__default.createElement("path", {
          d: "M2.2403 2.7299L4.9245 0 6 1.1117 2.2384 5 0 2.6863 1.0612 1.511z"
        })))));
      }
    }]);

    _inherits(ToggleSmallSkeleton, _React$Component);

    return ToggleSmallSkeleton;
  }(React__default.Component);

  var ToggleSmall = function ToggleSmall(_ref) {
    var className = _ref.className,
        defaultToggled = _ref.defaultToggled,
        toggled = _ref.toggled,
        _onChange = _ref.onChange,
        onToggle = _ref.onToggle,
        id = _ref.id,
        ariaLabel = _ref.ariaLabel,
        other = _objectWithoutProperties(_ref, ["className", "defaultToggled", "toggled", "onChange", "onToggle", "id", "ariaLabel"]);

    var input;
    var wrapperClasses = classNames(_defineProperty({
      'bx--form-item': true
    }, className, className));
    var checkedProps = {};

    if (typeof toggled !== 'undefined') {
      checkedProps.checked = toggled;
    } else {
      checkedProps.defaultChecked = defaultToggled;
    }

    return React__default.createElement("div", {
      className: wrapperClasses
    }, React__default.createElement("input", _extends({}, other, checkedProps, {
      type: "checkbox",
      id: id,
      className: "bx--toggle bx--toggle--small",
      onChange: function onChange(evt) {
        _onChange && _onChange(evt);
        onToggle(input.checked, id, evt);
      },
      ref: function ref(el) {
        input = el;
      },
      "aria-label": ariaLabel
    })), React__default.createElement("label", {
      className: "bx--toggle__label",
      htmlFor: id
    }, React__default.createElement("span", {
      className: "bx--toggle__appearance"
    }, React__default.createElement("svg", {
      className: "bx--toggle__check",
      width: "6px",
      height: "5px",
      viewBox: "0 0 6 5"
    }, React__default.createElement("path", {
      d: "M2.2403 2.7299L4.9245 0 6 1.1117 2.2384 5 0 2.6863 1.0612 1.511z"
    })))));
  };

  ToggleSmall.propTypes = {
    /**
     * The CSS class for the toggle
     */
    className: PropTypes.string,

    /**
     * `true` to make it toggled on by default.
     */
    defaultToggled: PropTypes.bool,

    /**
     * The event handler for the `onChange` event.
     */
    onToggle: PropTypes.func,

    /**
     * The `id` attribute for the toggle
     */
    id: PropTypes.string.isRequired,

    /**
     * `true` to make it toggled on
     */
    toggled: PropTypes.bool,

    /**
     * The `aria-label` attribute for the toggle
     */
    ariaLabel: PropTypes.string.isRequired
  };
  ToggleSmall.defaultProps = {
    defaultToggled: false,
    onToggle: function onToggle() {}
  };

  var ToolbarSearch =
  /*#__PURE__*/
  function (_Component) {
    function ToolbarSearch() {
      var _getPrototypeOf2;

      var _temp, _this;

      _classCallCheck(this, ToolbarSearch);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _possibleConstructorReturn(_this, (_temp = _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(ToolbarSearch)).call.apply(_getPrototypeOf2, [this].concat(args))), _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
        expanded: false
      }), _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "expandSearch", function () {
        _this.setState({
          expanded: !_this.state.expanded
        });

        _this.input.focus();
      }), _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleClickOutside", function () {
        _this.setState({
          expanded: false
        });
      }), _temp));
    }

    _createClass(ToolbarSearch, [{
      key: "render",
      value: function render() {
        var _this2 = this;

        var _this$props = this.props,
            className = _this$props.className,
            type = _this$props.type,
            id = _this$props.id,
            placeHolderText = _this$props.placeHolderText,
            labelText = _this$props.labelText,
            role = _this$props.role,
            other = _objectWithoutProperties(_this$props, ["className", "type", "id", "placeHolderText", "labelText", "role"]);

        var searchClasses = classNames(_defineProperty({
          'bx--search bx--search--sm bx--toolbar-search': true,
          'bx--toolbar-search--active': this.state.expanded
        }, className, className));
        return React__default.createElement(ClickListener, {
          onClickOutside: this.handleClickOutside
        }, React__default.createElement("div", {
          className: searchClasses,
          role: role
        }, React__default.createElement("label", {
          htmlFor: id,
          className: "bx--label"
        }, labelText), React__default.createElement("input", _extends({}, other, {
          type: type,
          className: "bx--search-input",
          id: id,
          placeholder: placeHolderText,
          ref: function ref(input) {
            _this2.input = input;
          }
        })), React__default.createElement("button", {
          className: "bx--toolbar-search__btn",
          onClick: this.expandSearch
        }, React__default.createElement(Icon, {
          name: "search--glyph",
          description: "search",
          className: "bx--search-magnifier"
        }))));
      }
    }]);

    _inherits(ToolbarSearch, _Component);

    return ToolbarSearch;
  }(React.Component);

  _defineProperty(ToolbarSearch, "propTypes", {
    children: PropTypes.node,
    className: PropTypes.string,
    type: PropTypes.string,
    small: PropTypes.bool,
    placeHolderText: PropTypes.string,
    labelText: PropTypes.string,
    id: PropTypes.string
  });

  _defineProperty(ToolbarSearch, "defaultProps", {
    type: 'search',
    id: 'search__input',
    labelText: '',
    placeHolderText: '',
    role: 'search'
  });

  var Toolbar = function Toolbar(_ref) {
    var children = _ref.children,
        className = _ref.className,
        other = _objectWithoutProperties(_ref, ["children", "className"]);

    var wrapperClasses = classNames('bx--toolbar', className);
    return React__default.createElement("div", _extends({
      className: wrapperClasses
    }, other), children);
  };

  Toolbar.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string
  };
  var ToolbarItem = function ToolbarItem(_ref2) {
    var children = _ref2.children,
        type = _ref2.type,
        placeHolderText = _ref2.placeHolderText;
    var toolbarItem = type === 'search' ? React__default.createElement(ToolbarSearch, {
      placeHolderText: placeHolderText
    }) : children;
    return toolbarItem;
  };
  ToolbarItem.propTypes = {
    children: PropTypes.node,
    type: PropTypes.string,
    placeHolderText: PropTypes.string
  };
  ToolbarItem.defaultProps = {
    placeHolderText: 'Provide placeHolderText'
  };
  var ToolbarTitle = function ToolbarTitle(_ref3) {
    var title = _ref3.title;
    return React__default.createElement("li", {
      className: "bx--toolbar-menu__title"
    }, title);
  };
  ToolbarTitle.propTypes = {
    title: PropTypes.string
  };
  var ToolbarOption = function ToolbarOption(_ref4) {
    var children = _ref4.children;
    return React__default.createElement("li", {
      className: "bx--toolbar-menu__option"
    }, children);
  };
  ToolbarOption.propTypes = {
    children: PropTypes.node
  };
  var ToolbarDivider = function ToolbarDivider() {
    return React__default.createElement("hr", {
      className: "bx--toolbar-menu__divider"
    });
  };

  /**
   * @param {Element} menuBody The menu body with the menu arrow.
   * @param {string} menuDirection Where the floating menu menu should be placed relative to the trigger button.
   * @returns {FloatingMenu~offset} The adjustment of the floating menu position, upon the position of the menu arrow.
   * @private
   */

  var getMenuOffset$1 = function getMenuOffset(menuBody, menuDirection) {
    var _DIRECTION_LEFT$DIREC, _DIRECTION_LEFT$DIREC2;

    var arrowStyle = menuBody.ownerDocument.defaultView.getComputedStyle(menuBody, ':before');
    var arrowPositionProp = (_DIRECTION_LEFT$DIREC = {}, _defineProperty(_DIRECTION_LEFT$DIREC, DIRECTION_LEFT, 'right'), _defineProperty(_DIRECTION_LEFT$DIREC, DIRECTION_TOP, 'bottom'), _defineProperty(_DIRECTION_LEFT$DIREC, DIRECTION_RIGHT, 'left'), _defineProperty(_DIRECTION_LEFT$DIREC, DIRECTION_BOTTOM, 'top'), _DIRECTION_LEFT$DIREC)[menuDirection];
    var menuPositionAdjustmentProp = (_DIRECTION_LEFT$DIREC2 = {}, _defineProperty(_DIRECTION_LEFT$DIREC2, DIRECTION_LEFT, 'left'), _defineProperty(_DIRECTION_LEFT$DIREC2, DIRECTION_TOP, 'top'), _defineProperty(_DIRECTION_LEFT$DIREC2, DIRECTION_RIGHT, 'left'), _defineProperty(_DIRECTION_LEFT$DIREC2, DIRECTION_BOTTOM, 'top'), _DIRECTION_LEFT$DIREC2)[menuDirection];
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
      }), _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "_debouncedHandleHover", lodash_debounce(_this._handleHover, 200)), _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleMouse", function (evt) {
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
        var tooltipClasses = classNames('bx--tooltip', {
          'bx--tooltip--shown': open
        }, className);
        var triggerClasses = classNames('bx--tooltip__trigger', triggerClassName);
        return React__default.createElement("div", null, React__default.createElement(ClickListener, {
          onClickOutside: this.handleClickOutside
        }, showIcon ? React__default.createElement("div", {
          className: triggerClasses
        }, triggerText, React__default.createElement("div", {
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
        }, React__default.createElement(Icon, {
          onKeyDown: this.handleKeyPress,
          onClick: function onClick() {
            return _this3.handleMouse('click');
          },
          name: iconName,
          description: iconDescription,
          iconRef: function iconRef(node) {
            _this3.triggerEl = node;
          }
        }))) : React__default.createElement("div", {
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
        }, triggerText)), open && React__default.createElement(FloatingMenu, {
          menuPosition: this.state.triggerPosition,
          menuDirection: direction,
          menuOffset: menuOffset
        }, React__default.createElement("div", _extends({
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
  }(React.Component);

  _defineProperty(Tooltip, "propTypes", {
    /**
     * The ID of the trigger button.
     */
    triggerId: PropTypes.string,

    /**
     * The ID of the tooltip content.
     */
    tooltipId: PropTypes.string,

    /**
     * Open/closed state.
     */
    open: PropTypes.bool,

    /**
     * Contents to put into the tooltip.
     */
    children: PropTypes.node,

    /**
     * The CSS class names of the tooltip.
     */
    className: PropTypes.string,

    /**
     * The CSS class names of the trigger UI.
     */
    triggerClassName: PropTypes.string,

    /**
     * Where to put the tooltip, relative to the trigger UI.
     */
    direction: PropTypes.oneOf(['bottom', 'top', 'left', 'right']),

    /**
     * The adjustment of the tooltip position.
     */
    menuOffset: PropTypes.oneOfType([PropTypes.shape({
      top: PropTypes.number,
      left: PropTypes.number
    }), PropTypes.func]),

    /**
     * The content to put into the trigger UI, except the (default) tooltip icon.
     */
    triggerText: PropTypes.node,

    /**
     * `true` to show the default tooltip icon.
     */
    showIcon: PropTypes.bool,

    /**
     * The name of the default tooltip icon.
     */
    iconName: PropTypes.string,

    /**
     * The description of the default tooltip icon, to be put in its SVG `<title>` element.
     */
    iconDescription: PropTypes.string,

    /**
     * `true` if opening tooltip should be triggered by clicking the trigger button.
     */
    clickToOpen: PropTypes.bool
  });

  _defineProperty(Tooltip, "defaultProps", {
    open: false,
    direction: DIRECTION_BOTTOM,
    showIcon: true,
    iconName: 'info--glyph',
    iconDescription: 'tooltip',
    triggerText: 'Provide triggerText',
    menuOffset: getMenuOffset$1
  });

  var TooltipSimple = function TooltipSimple(_ref) {
    var children = _ref.children,
        className = _ref.className,
        position = _ref.position,
        text = _ref.text,
        showIcon = _ref.showIcon,
        iconName = _ref.iconName,
        iconDescription = _ref.iconDescription,
        other = _objectWithoutProperties(_ref, ["children", "className", "position", "text", "showIcon", "iconName", "iconDescription"]);

    var tooltipClasses = classNames("bx--tooltip--simple__".concat(position));
    var tooltipWrapperClasses = classNames("bx--tooltip--simple", className);
    return React__default.createElement("div", null, showIcon ? React__default.createElement("div", {
      className: tooltipWrapperClasses
    }, children, React__default.createElement("div", _extends({
      className: tooltipClasses,
      "data-tooltip-text": text,
      tabIndex: "0",
      role: "button"
    }, other), React__default.createElement(Icon, {
      role: "img",
      name: iconName,
      description: iconDescription
    }))) : React__default.createElement("div", {
      className: tooltipWrapperClasses
    }, React__default.createElement("div", _extends({
      className: tooltipClasses,
      "data-tooltip-text": text,
      tabIndex: "0",
      role: "button"
    }, other), children)));
  };

  TooltipSimple.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    position: PropTypes.oneOf(['bottom', 'top']),
    text: PropTypes.string.isRequired,
    showIcon: PropTypes.bool,
    iconName: PropTypes.string,
    iconDescription: PropTypes.string
  };
  TooltipSimple.defaultProps = {
    position: 'top',
    showIcon: true,
    iconName: 'info--glyph',
    iconDescription: 'tooltip',
    text: 'Provide text'
  };

  var UnorderedList = function UnorderedList(_ref) {
    var children = _ref.children,
        className = _ref.className,
        nested = _ref.nested,
        other = _objectWithoutProperties(_ref, ["children", "className", "nested"]);

    var classNames$$1 = classNames('bx--list--unordered', className, {
      'bx--list--nested': nested
    });
    return React__default.createElement("ul", _extends({
      className: classNames$$1
    }, other), children);
  };

  UnorderedList.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    nested: PropTypes.bool
  };
  UnorderedList.defaultProps = {
    nested: false
  };

  var DataTableSkeleton = function DataTableSkeleton(_ref) {
    var rowCount = _ref.rowCount,
        zebra = _ref.zebra,
        compact = _ref.compact,
        other = _objectWithoutProperties(_ref, ["rowCount", "zebra", "compact"]);

    var dataTableSkeletonClasses = classNames({
      'bx--skeleton': true,
      'bx--data-table-v2': true,
      'bx--data-table-v2--zebra': zebra,
      'bx--data-table-v2--compact': compact
    });
    var rows = [];
    var rowRepeat = rowCount - 1;

    for (var i = 0; i < rowRepeat; i++) {
      rows.push(React__default.createElement("tr", {
        key: i
      }, React__default.createElement("td", null), React__default.createElement("td", null), React__default.createElement("td", null), React__default.createElement("td", null), React__default.createElement("td", null)));
    }

    return React__default.createElement("table", _extends({
      className: dataTableSkeletonClasses
    }, other), React__default.createElement("thead", null, React__default.createElement("tr", null, React__default.createElement("th", null), React__default.createElement("th", null), React__default.createElement("th", null), React__default.createElement("th", null), React__default.createElement("th", null))), React__default.createElement("tbody", null, React__default.createElement("tr", null, React__default.createElement("td", null, React__default.createElement("span", null)), React__default.createElement("td", null, React__default.createElement("span", null)), React__default.createElement("td", null, React__default.createElement("span", null)), React__default.createElement("td", null, React__default.createElement("span", null)), React__default.createElement("td", null, React__default.createElement("span", null))), rows));
  };

  DataTableSkeleton.propTypes = {
    /**
     * number of table rows
     */
    rowCount: PropTypes.number,
    zebra: PropTypes.bool,
    compact: PropTypes.bool
  };
  DataTableSkeleton.defaultProps = {
    rowCount: 5,
    zebra: false,
    compact: false
  };

  exports.Accordion = Accordion;
  exports.AccordionItem = AccordionItem;
  exports.Breadcrumb = Breadcrumb;
  exports.BreadcrumbItem = BreadcrumbItem;
  exports.Button = Button;
  exports.Card = Card;
  exports.CardActionItem = CardActionItem;
  exports.CardActions = CardActions;
  exports.CardContent = CardContent;
  exports.CardFooter = CardFooter;
  exports.CardStatus = CardStatus;
  exports.Checkbox = Checkbox;
  exports.CodeSnippet = CodeSnippet;
  exports.ComboBox = ComboBox;
  exports.ComposedModal = ComposedModal;
  exports.ContentSwitcher = ContentSwitcher;
  exports.CopyButton = CopyButton;
  exports.DangerButton = DangerButton;
  exports.DataTable = DataTable;
  exports.DatePicker = DatePicker;
  exports.DatePickerInput = DatePickerInput;
  exports.DetailPageHeader = DetailPageHeader;
  exports.Dropdown = Dropdown;
  exports.DropdownItem = DropdownItem;
  exports.DropdownV2 = DropdownV2;
  exports.FileUploader = FileUploader;
  exports.Footer = Footer;
  exports.Form = Form;
  exports.FormGroup = FormGroup;
  exports.FormItem = FormItem;
  exports.FormLabel = FormLabel;
  exports.Icon = Icon;
  exports.InteriorLeftNav = InteriorLeftNav;
  exports.InteriorLeftNavItem = InteriorLeftNavItem;
  exports.InteriorLeftNavList = InteriorLeftNavList;
  exports.Link = Link;
  exports.ListItem = ListItem;
  exports.Loading = Loading;
  exports.Modal = Modal;
  exports.ModalWrapper = ModalWrapper;
  exports.MultiSelect = MultiSelect;
  exports.Notification = Notification;
  exports.NumberInput = NumberInput;
  exports.OrderedList = OrderedList;
  exports.OverflowMenu = OverflowMenu;
  exports.OverflowMenuItem = OverflowMenuItem;
  exports.Pagination = Pagination;
  exports.PaginationV2 = PaginationV2;
  exports.PrimaryButton = PrimaryButton;
  exports.RadioButton = RadioButton;
  exports.RadioButtonGroup = RadioButtonGroup;
  exports.Search = Search;
  exports.SearchFilterButton = SearchFilterButton;
  exports.SearchLayoutButton = SearchLayoutButton;
  exports.SecondaryButton = SecondaryButton;
  exports.Select = Select;
  exports.SelectItem = SelectItem;
  exports.SelectItemGroup = SelectItemGroup;
  exports.Switch = Switch;
  exports.Slider = Slider;
  exports.Tab = Tab;
  exports.TabContent = TabContent;
  exports.Table = Table$1;
  exports.TableBody = TableBody$1;
  exports.TableData = TableData;
  exports.TableHead = TableHead$1;
  exports.TableHeader = TableHeader$1;
  exports.TableRow = TableRow$1;
  exports.TableRowExpanded = TableRowExpanded;
  exports.Tag = Tag;
  exports.Tabs = Tabs;
  exports.TextArea = TextArea;
  exports.TextInput = TextInput;
  exports.RadioTile = RadioTile;
  exports.TileGroup = TileGroup;
  exports.TimePicker = TimePicker;
  exports.TimePickerSelect = TimePickerSelect;
  exports.Toggle = Toggle;
  exports.ToggleSmall = ToggleSmall;
  exports.Toolbar = Toolbar;
  exports.ToolbarSearch = ToolbarSearch;
  exports.Tooltip = Tooltip;
  exports.TooltipSimple = TooltipSimple;
  exports.UnorderedList = UnorderedList;
  exports.SkeletonText = SkeletonText;
  exports.DataTableSkeleton = DataTableSkeleton;
  exports.AccordionSkeleton = AccordionSkeleton;
  exports.BreadcrumbSkeleton = BreadcrumbSkeleton;
  exports.ButtonSkeleton = ButtonSkeleton;
  exports.CheckboxSkeleton = CheckboxSkeleton;
  exports.CodeSnippetSkeleton = CodeSnippetSkeleton;
  exports.DropdownSkeleton = DropdownSkeleton;
  exports.FileUploaderSkeleton = FileUploaderSkeleton;
  exports.NumberInputSkeleton = NumberInputSkeleton;
  exports.ProgressIndicatorSkeleton = ProgressIndicatorSkeleton;
  exports.RadioButtonSkeleton = RadioButtonSkeleton;
  exports.SearchSkeleton = SearchSkeleton;
  exports.SelectSkeleton = SelectSkeleton;
  exports.SliderSkeleton = SliderSkeleton;
  exports.TabsSkeleton = TabsSkeleton;
  exports.TagSkeleton = TagSkeleton;
  exports.TextAreaSkeleton = TextAreaSkeleton;
  exports.TextInputSkeleton = TextInputSkeleton;
  exports.ToggleSkeleton = ToggleSkeleton;
  exports.ToggleSmallSkeleton = ToggleSmallSkeleton;
  exports.ModalHeader = ModalHeader;
  exports.ModalBody = ModalBody;
  exports.ModalFooter = ModalFooter;
  exports.Filename = Filename;
  exports.FileUploaderButton = FileUploaderButton;
  exports.Module = Module;
  exports.ModuleBody = ModuleBody;
  exports.ModuleHeader = ModuleHeader;
  exports.ToastNotification = ToastNotification;
  exports.InlineNotification = InlineNotification;
  exports.NotificationButton = NotificationButton;
  exports.NotificationTextDetails = NotificationTextDetails;
  exports.OrderSummary = OrderSummary;
  exports.OrderSummaryHeader = OrderSummaryHeader;
  exports.OrderSummaryCategory = OrderSummaryCategory;
  exports.OrderSummaryList = OrderSummaryList;
  exports.OrderSummaryListItem = OrderSummaryListItem;
  exports.OrderSummaryTotal = OrderSummaryTotal;
  exports.OrderSummaryFooter = OrderSummaryFooter;
  exports.ProgressIndicator = ProgressIndicator;
  exports.ProgressStep = ProgressStep;
  exports.StructuredListWrapper = StructuredListWrapper;
  exports.StructuredListHead = StructuredListHead;
  exports.StructuredListBody = StructuredListBody;
  exports.StructuredListRow = StructuredListRow;
  exports.StructuredListInput = StructuredListInput;
  exports.StructuredListCell = StructuredListCell;
  exports.types = types;
  exports.Tile = Tile;
  exports.ClickableTile = ClickableTile;
  exports.SelectableTile = SelectableTile;
  exports.ExpandableTile = ExpandableTile;
  exports.TileAboveTheFoldContent = TileAboveTheFoldContent;
  exports.TileBelowTheFoldContent = TileBelowTheFoldContent;
  exports.ToolbarItem = ToolbarItem;
  exports.ToolbarTitle = ToolbarTitle;
  exports.ToolbarOption = ToolbarOption;
  exports.ToolbarDivider = ToolbarDivider;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
