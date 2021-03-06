"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _warning = _interopRequireDefault(require("warning"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _Icon = _interopRequireDefault(require("../Icon"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

var CardContent = function CardContent(_ref) {
  var className = _ref.className,
      children = _ref.children,
      cardIcon = _ref.cardIcon,
      cardTitle = _ref.cardTitle,
      cardLink = _ref.cardLink,
      cardInfo = _ref.cardInfo,
      iconDescription = _ref.iconDescription,
      other = _objectWithoutProperties(_ref, ["className", "children", "cardIcon", "cardTitle", "cardLink", "cardInfo", "iconDescription"]);

  var cardContentClasses = (0, _classnames.default)(_defineProperty({
    'bx--card__card-overview': true
  }, className, className));
  var cardLinkContent = cardLink ? cardLink.map(function (link, key) {
    return _react.default.createElement("a", {
      key: key,
      href: link,
      className: "bx--about__title--link"
    }, link);
  }) : '';
  var cardInfoContent = cardInfo ? cardInfo.map(function (info, key) {
    return _react.default.createElement("h4", {
      key: key,
      className: "bx--about__title--additional-info"
    }, info);
  }) : '';
  var cardLinkContentArray = Object.keys(cardLinkContent);
  var cardInfoContentArray = Object.keys(cardInfoContent);
  (0, _warning.default)(!(0, _react.isValidElement)(cardIcon) || iconDescription === CardContent.defaultProps.iconDescription, "Specified a custom icon while the icon description is provided.\nIt'll be ignored as an icon description is only used for carbon-icons sprite.");
  return _react.default.createElement("div", _extends({}, other, {
    className: cardContentClasses
  }), children, _react.default.createElement("div", {
    className: "bx--card-overview__about"
  }, cardIcon && _react.default.createElement("div", {
    className: "bx--about__icon"
  }, (0, _react.isValidElement)(cardIcon) ? cardIcon : _react.default.createElement(_Icon.default, {
    className: "bx--about__icon--img",
    name: cardIcon,
    description: iconDescription
  })), _react.default.createElement("div", {
    className: "bx--about__title"
  }, _react.default.createElement("p", {
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
  children: _propTypes.default.node,

  /**
   * The name of icon sprite, or icon itself.
   */
  cardIcon: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.node]),

  /**
   * The title of the card.
   */
  cardTitle: _propTypes.default.string,

  /**
   * A link to put in the card.
   */
  cardLink: _propTypes.default.node,

  /**
   * Additional info to put in the card.
   */
  cardInfo: _propTypes.default.array,

  /**
   * The CSS class names.
   */
  className: _propTypes.default.string,

  /**
   * The description of the icon.
   */
  iconDescription: _propTypes.default.string
};
CardContent.defaultProps = {
  iconDescription: 'card icon',
  cardIcon: 'app-services',
  cardTitle: 'card title'
};
var _default = CardContent;
exports.default = _default;