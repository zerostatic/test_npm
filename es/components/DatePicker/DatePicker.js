function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

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
import React, { Component } from 'react';
import classNames from 'classnames';
import flatpickr from 'flatpickr';
import l10n from 'flatpickr/dist/l10n/index';
import rangePlugin from 'flatpickr/dist/plugins/rangePlugin';
import DatePickerInput from '../DatePickerInput'; // Weekdays shorthand for english locale

l10n.en.weekdays.shorthand.forEach(function (day, index) {
  var currentDay = l10n.en.weekdays.shorthand;

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
          locale: l10n[locale],
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
      var datePickerIcon = datePickerType === 'range' ? React.createElement("svg", {
        onClick: this.openCalendar,
        className: "bx--date-picker__icon",
        width: "17",
        height: "19",
        viewBox: "0 0 17 19"
      }, React.createElement("path", {
        d: "M12 0h2v2.7h-2zM3 0h2v2.7H3z"
      }), React.createElement("path", {
        d: "M0 2v17h17V2H0zm15 15H2V7h13v10z"
      }), React.createElement("path", {
        d: "M9.9 15H8.6v-3.9H7.1v-.9c.9 0 1.7-.3 1.8-1.2h1v6z"
      })) : '';
      var childArray = React.Children.toArray(children);
      var childrenWithProps = childArray.map(function (child, index) {
        if (index === 0 && child.type === DatePickerInput) {
          return React.cloneElement(child, {
            datePickerType: datePickerType,
            ref: _this3.assignInputFieldRef
          });
        } else if (index === 1 && child.type === DatePickerInput) {
          return React.cloneElement(child, {
            datePickerType: datePickerType,
            ref: _this3.assignToInputFieldRef
          });
        } else if (index === 0) {
          return React.cloneElement(child, {
            ref: _this3.assignInputFieldRef
          });
        } else if (index === 1) {
          return React.cloneElement(child, {
            ref: _this3.assignToInputFieldRef
          });
        }
      });
      return React.createElement("div", {
        className: "bx--form-item"
      }, React.createElement("div", _extends({
        className: datePickerClasses
      }, other), childrenWithProps, datePickerIcon));
    }
  }]);

  _inherits(DatePicker, _Component);

  return DatePicker;
}(Component);

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

export { DatePicker as default };