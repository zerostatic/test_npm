"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Icon = _interopRequireDefault(require("../Icon"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

/**
 * The filter button for `<Search>`.
 */
var SearchFilterButton = function SearchFilterButton(_ref) {
  var labelText = _ref.labelText,
      other = _objectWithoutProperties(_ref, ["labelText"]);

  return _react.default.createElement("button", _extends({
    className: "bx--search-button",
    type: "button",
    "aria-label": labelText
  }, other), _react.default.createElement(_Icon.default, {
    name: "filter--glyph",
    description: "filter",
    className: "bx--search-filter"
  }));
};

SearchFilterButton.propTypes = {
  /**
   * The a11y label text.
   */
  labelText: _propTypes.default.string
};
SearchFilterButton.defaultProps = {
  labelText: 'Search'
};
var _default = SearchFilterButton;
exports.default = _default;