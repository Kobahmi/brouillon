exports.id = "component---src-pages-index-js";
exports.ids = ["component---src-pages-index-js"];
exports.modules = {

/***/ "./node_modules/aos/dist/aos.esm.js":
/*!******************************************!*\
  !*** ./node_modules/aos/dist/aos.esm.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var lodash_throttle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash.throttle */ "./node_modules/lodash.throttle/index.js");
/* harmony import */ var lodash_throttle__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_throttle__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash.debounce */ "./node_modules/lodash.debounce/index.js");
/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_debounce__WEBPACK_IMPORTED_MODULE_1__);



var callback = function callback() {};

function containsAOSNode(nodes) {
  var i = void 0,
      currentNode = void 0,
      result = void 0;

  for (i = 0; i < nodes.length; i += 1) {
    currentNode = nodes[i];

    if (currentNode.dataset && currentNode.dataset.aos) {
      return true;
    }

    result = currentNode.children && containsAOSNode(currentNode.children);

    if (result) {
      return true;
    }
  }

  return false;
}

function check(mutations) {
  if (!mutations) return;

  mutations.forEach(function (mutation) {
    var addedNodes = Array.prototype.slice.call(mutation.addedNodes);
    var removedNodes = Array.prototype.slice.call(mutation.removedNodes);
    var allNodes = addedNodes.concat(removedNodes);

    if (containsAOSNode(allNodes)) {
      return callback();
    }
  });
}

function getMutationObserver() {
  return window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver;
}

function isSupported() {
  return !!getMutationObserver();
}

function ready(selector, fn) {
  var doc = window.document;
  var MutationObserver = getMutationObserver();

  var observer = new MutationObserver(check);
  callback = fn;

  observer.observe(doc.documentElement, {
    childList: true,
    subtree: true,
    removedNodes: true
  });
}

var observer = { isSupported: isSupported, ready: ready };

var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var _extends = Object.assign || function (target) {
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

/**
 * Device detector
 */

var fullNameRe = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i;
var prefixRe = /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i;
var fullNameMobileRe = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i;
var prefixMobileRe = /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i;

function ua() {
  return navigator.userAgent || navigator.vendor || window.opera || '';
}

var Detector = function () {
  function Detector() {
    classCallCheck(this, Detector);
  }

  createClass(Detector, [{
    key: 'phone',
    value: function phone() {
      var a = ua();
      return !!(fullNameRe.test(a) || prefixRe.test(a.substr(0, 4)));
    }
  }, {
    key: 'mobile',
    value: function mobile() {
      var a = ua();
      return !!(fullNameMobileRe.test(a) || prefixMobileRe.test(a.substr(0, 4)));
    }
  }, {
    key: 'tablet',
    value: function tablet() {
      return this.mobile() && !this.phone();
    }

    // http://browserhacks.com/#hack-acea075d0ac6954f275a70023906050c

  }, {
    key: 'ie11',
    value: function ie11() {
      return '-ms-scroll-limit' in document.documentElement.style && '-ms-ime-align' in document.documentElement.style;
    }
  }]);
  return Detector;
}();

var detect = new Detector();

/**
 * Adds multiple classes on node
 * @param {DOMNode} node
 * @param {array}  classes
 */
var addClasses = function addClasses(node, classes) {
  return classes && classes.forEach(function (className) {
    return node.classList.add(className);
  });
};

/**
 * Removes multiple classes from node
 * @param {DOMNode} node
 * @param {array}  classes
 */
var removeClasses = function removeClasses(node, classes) {
  return classes && classes.forEach(function (className) {
    return node.classList.remove(className);
  });
};

var fireEvent = function fireEvent(eventName, data) {
  var customEvent = void 0;

  if (detect.ie11()) {
    customEvent = document.createEvent('CustomEvent');
    customEvent.initCustomEvent(eventName, true, true, { detail: data });
  } else {
    customEvent = new CustomEvent(eventName, {
      detail: data
    });
  }

  return document.dispatchEvent(customEvent);
};

/**
 * Set or remove aos-animate class
 * @param {node} el         element
 * @param {int}  top        scrolled distance
 */
var applyClasses = function applyClasses(el, top) {
  var options = el.options,
      position = el.position,
      node = el.node,
      data = el.data;


  var hide = function hide() {
    if (!el.animated) return;

    removeClasses(node, options.animatedClassNames);
    fireEvent('aos:out', node);

    if (el.options.id) {
      fireEvent('aos:in:' + el.options.id, node);
    }

    el.animated = false;
  };

  var show = function show() {
    if (el.animated) return;

    addClasses(node, options.animatedClassNames);

    fireEvent('aos:in', node);
    if (el.options.id) {
      fireEvent('aos:in:' + el.options.id, node);
    }

    el.animated = true;
  };

  if (options.mirror && top >= position.out && !options.once) {
    hide();
  } else if (top >= position.in) {
    show();
  } else if (el.animated && !options.once) {
    hide();
  }
};

/**
 * Scroll logic - add or remove 'aos-animate' class on scroll
 *
 * @param  {array} $elements         array of elements nodes
 * @return {void}
 */
var handleScroll = function handleScroll($elements) {
  return $elements.forEach(function (el, i) {
    return applyClasses(el, window.pageYOffset);
  });
};

/**
 * Get offset of DOM element
 * like there were no transforms applied on it
 *
 * @param  {Node} el [DOM element]
 * @return {Object} [top and left offset]
 */
var offset = function offset(el) {
  var _x = 0;
  var _y = 0;

  while (el && !isNaN(el.offsetLeft) && !isNaN(el.offsetTop)) {
    _x += el.offsetLeft - (el.tagName != 'BODY' ? el.scrollLeft : 0);
    _y += el.offsetTop - (el.tagName != 'BODY' ? el.scrollTop : 0);
    el = el.offsetParent;
  }

  return {
    top: _y,
    left: _x
  };
};

/**
 * Get inline option with a fallback.
 *
 * @param  {Node} el [Dom element]
 * @param  {String} key [Option key]
 * @param  {String} fallback [Default (fallback) value]
 * @return {Mixed} [Option set with inline attributes or fallback value if not set]
 */

var getInlineOption = (function (el, key, fallback) {
  var attr = el.getAttribute('data-aos-' + key);

  if (typeof attr !== 'undefined') {
    if (attr === 'true') {
      return true;
    } else if (attr === 'false') {
      return false;
    }
  }

  return attr || fallback;
});

/**
 * Calculate offset
 * basing on element's settings like:
 * - anchor
 * - offset
 *
 * @param  {Node} el [Dom element]
 * @return {Integer} [Final offset that will be used to trigger animation in good position]
 */

var getPositionIn = function getPositionIn(el, defaultOffset, defaultAnchorPlacement) {
  var windowHeight = window.innerHeight;
  var anchor = getInlineOption(el, 'anchor');
  var inlineAnchorPlacement = getInlineOption(el, 'anchor-placement');
  var additionalOffset = Number(getInlineOption(el, 'offset', inlineAnchorPlacement ? 0 : defaultOffset));
  var anchorPlacement = inlineAnchorPlacement || defaultAnchorPlacement;
  var finalEl = el;

  if (anchor && document.querySelectorAll(anchor)) {
    finalEl = document.querySelectorAll(anchor)[0];
  }

  var triggerPoint = offset(finalEl).top - windowHeight;

  switch (anchorPlacement) {
    case 'top-bottom':
      // Default offset
      break;
    case 'center-bottom':
      triggerPoint += finalEl.offsetHeight / 2;
      break;
    case 'bottom-bottom':
      triggerPoint += finalEl.offsetHeight;
      break;
    case 'top-center':
      triggerPoint += windowHeight / 2;
      break;
    case 'center-center':
      triggerPoint += windowHeight / 2 + finalEl.offsetHeight / 2;
      break;
    case 'bottom-center':
      triggerPoint += windowHeight / 2 + finalEl.offsetHeight;
      break;
    case 'top-top':
      triggerPoint += windowHeight;
      break;
    case 'bottom-top':
      triggerPoint += windowHeight + finalEl.offsetHeight;
      break;
    case 'center-top':
      triggerPoint += windowHeight + finalEl.offsetHeight / 2;
      break;
  }

  return triggerPoint + additionalOffset;
};

var getPositionOut = function getPositionOut(el, defaultOffset) {
  var windowHeight = window.innerHeight;
  var anchor = getInlineOption(el, 'anchor');
  var additionalOffset = getInlineOption(el, 'offset', defaultOffset);
  var finalEl = el;

  if (anchor && document.querySelectorAll(anchor)) {
    finalEl = document.querySelectorAll(anchor)[0];
  }

  var elementOffsetTop = offset(finalEl).top;

  return elementOffsetTop + finalEl.offsetHeight - additionalOffset;
};

/* Clearing variables */

var prepare = function prepare($elements, options) {
  $elements.forEach(function (el, i) {
    var mirror = getInlineOption(el.node, 'mirror', options.mirror);
    var once = getInlineOption(el.node, 'once', options.once);
    var id = getInlineOption(el.node, 'id');
    var customClassNames = options.useClassNames && el.node.getAttribute('data-aos');

    var animatedClassNames = [options.animatedClassName].concat(customClassNames ? customClassNames.split(' ') : []).filter(function (className) {
      return typeof className === 'string';
    });

    if (options.initClassName) {
      el.node.classList.add(options.initClassName);
    }

    el.position = {
      in: getPositionIn(el.node, options.offset, options.anchorPlacement),
      out: mirror && getPositionOut(el.node, options.offset)
    };

    el.options = {
      once: once,
      mirror: mirror,
      animatedClassNames: animatedClassNames,
      id: id
    };
  });

  return $elements;
};

/**
 * Generate initial array with elements as objects
 * This array will be extended later with elements attributes values
 * like 'position'
 */
var elements = (function () {
  var elements = document.querySelectorAll('[data-aos]');
  return Array.prototype.map.call(elements, function (node) {
    return { node: node };
  });
});

/**
 * *******************************************************
 * AOS (Animate on scroll) - wowjs alternative
 * made to animate elements on scroll in both directions
 * *******************************************************
 */

/**
 * Private variables
 */
var $aosElements = [];
var initialized = false;

/**
 * Default options
 */
var options = {
  offset: 120,
  delay: 0,
  easing: 'ease',
  duration: 400,
  disable: false,
  once: false,
  mirror: false,
  anchorPlacement: 'top-bottom',
  startEvent: 'DOMContentLoaded',
  animatedClassName: 'aos-animate',
  initClassName: 'aos-init',
  useClassNames: false,
  disableMutationObserver: false,
  throttleDelay: 99,
  debounceDelay: 50
};

// Detect not supported browsers (<=IE9)
// http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
var isBrowserNotSupported = function isBrowserNotSupported() {
  return document.all && !window.atob;
};

var initializeScroll = function initializeScroll() {
  // Extend elements objects in $aosElements with their positions
  $aosElements = prepare($aosElements, options);
  // Perform scroll event, to refresh view and show/hide elements
  handleScroll($aosElements);

  /**
   * Handle scroll event to animate elements on scroll
   */
  window.addEventListener('scroll', lodash_throttle__WEBPACK_IMPORTED_MODULE_0___default()(function () {
    handleScroll($aosElements, options.once);
  }, options.throttleDelay));

  return $aosElements;
};

/**
 * Refresh AOS
 */
var refresh = function refresh() {
  var initialize = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

  // Allow refresh only when it was first initialized on startEvent
  if (initialize) initialized = true;
  if (initialized) initializeScroll();
};

/**
 * Hard refresh
 * create array with new elements and trigger refresh
 */
var refreshHard = function refreshHard() {
  $aosElements = elements();

  if (isDisabled(options.disable) || isBrowserNotSupported()) {
    return disable();
  }

  refresh();
};

/**
 * Disable AOS
 * Remove all attributes to reset applied styles
 */
var disable = function disable() {
  $aosElements.forEach(function (el, i) {
    el.node.removeAttribute('data-aos');
    el.node.removeAttribute('data-aos-easing');
    el.node.removeAttribute('data-aos-duration');
    el.node.removeAttribute('data-aos-delay');

    if (options.initClassName) {
      el.node.classList.remove(options.initClassName);
    }

    if (options.animatedClassName) {
      el.node.classList.remove(options.animatedClassName);
    }
  });
};

/**
 * Check if AOS should be disabled based on provided setting
 */
var isDisabled = function isDisabled(optionDisable) {
  return optionDisable === true || optionDisable === 'mobile' && detect.mobile() || optionDisable === 'phone' && detect.phone() || optionDisable === 'tablet' && detect.tablet() || typeof optionDisable === 'function' && optionDisable() === true;
};

/**
 * Initializing AOS
 * - Create options merging defaults with user defined options
 * - Set attributes on <body> as global setting - css relies on it
 * - Attach preparing elements to options.startEvent,
 *   window resize and orientation change
 * - Attach function that handle scroll and everything connected to it
 *   to window scroll event and fire once document is ready to set initial state
 */
var init = function init(settings) {
  options = _extends(options, settings);

  // Create initial array with elements -> to be fullfilled later with prepare()
  $aosElements = elements();

  /**
   * Disable mutation observing if not supported
   */
  if (!options.disableMutationObserver && !observer.isSupported()) {
    console.info('\n      aos: MutationObserver is not supported on this browser,\n      code mutations observing has been disabled.\n      You may have to call "refreshHard()" by yourself.\n    ');
    options.disableMutationObserver = true;
  }

  /**
   * Observe [aos] elements
   * If something is loaded by AJAX
   * it'll refresh plugin automatically
   */
  if (!options.disableMutationObserver) {
    observer.ready('[data-aos]', refreshHard);
  }

  /**
   * Don't init plugin if option `disable` is set
   * or when browser is not supported
   */
  if (isDisabled(options.disable) || isBrowserNotSupported()) {
    return disable();
  }

  /**
   * Set global settings on body, based on options
   * so CSS can use it
   */
  document.querySelector('body').setAttribute('data-aos-easing', options.easing);

  document.querySelector('body').setAttribute('data-aos-duration', options.duration);

  document.querySelector('body').setAttribute('data-aos-delay', options.delay);

  /**
   * Handle initializing
   */
  if (['DOMContentLoaded', 'load'].indexOf(options.startEvent) === -1) {
    // Listen to options.startEvent and initialize AOS
    document.addEventListener(options.startEvent, function () {
      refresh(true);
    });
  } else {
    window.addEventListener('load', function () {
      refresh(true);
    });
  }

  if (options.startEvent === 'DOMContentLoaded' && ['complete', 'interactive'].indexOf(document.readyState) > -1) {
    // Initialize AOS if default startEvent was already fired
    refresh(true);
  }

  /**
   * Refresh plugin on window resize or orientation change
   */
  window.addEventListener('resize', lodash_debounce__WEBPACK_IMPORTED_MODULE_1___default()(refresh, options.debounceDelay, true));

  window.addEventListener('orientationchange', lodash_debounce__WEBPACK_IMPORTED_MODULE_1___default()(refresh, options.debounceDelay, true));

  return $aosElements;
};

/**
 * Export Public API
 */

var aos = {
  init: init,
  refresh: refresh,
  refreshHard: refreshHard
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (aos);


/***/ }),

/***/ "./src/components/Automatisation.js":
/*!******************************************!*\
  !*** ./src/components/Automatisation.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _images_office_webp__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../images/office.webp */ "./src/images/office.webp");
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gatsby */ "./.cache/gatsby-browser-entry.js");



const Automatisation = () => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("section", {
    className: "py-6"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "flex flex-col max-w-[1200px] mx-auto"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", {
    "data-aos": "fade-up",
    className: "text-center py-6 text-2xl font-bold  md:text-5xl lg:text-6xl"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "bg-clip-text py-2 text-transparent bg-gradient-to-r from-[#30F9FC] to-lime-300"
  }, "AUTOMATISATION DES STRATEGIES MARKETING/ PARTENAIRE MARKETING LEADSTREAM")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "flex flex-col gap-10 items-center p-10 md:flex-row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    "data-aos": "fade-in",
    "data-aos-duration": "1000",
    className: "relative"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "absolute -z-10 translate-y-[1rem] translate-x-[-1rem] h-full w-full  bg-gradient-to-t from-[#30F9FC] to-lime-300"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    className: "object-cover h-full w-full",
    src: _images_office_webp__WEBPACK_IMPORTED_MODULE_1__["default"],
    alt: "travail",
    loading: "lazy"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "flex flex-col gap-4 pl-10 py-6"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", {
    className: "flex flex-col"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "max-w-lg text-lg font-bold sm:text-2xl md:text-3xl lg:text-4xl"
  }, "NOS SITES WEB GENERENT DES FEEDS POUR LE GOOGLE MERCHANT CENTER")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "max-w-lg"
  }, "Nos services de marketing seront offers en partenariat avec l'agence Leadstream."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", {
    className: "list-disc  font-bold ml-6"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, "Campagne Facebook et Google Ads"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, "Referencement et redaction de contenus"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, "Conseils et strategies de marketing")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(gatsby__WEBPACK_IMPORTED_MODULE_2__.Link, {
    to: "/",
    className: "text-black z-20 mr-auto mt-8 bg-gradient-to-tr from-[#30F9FC] to-lime-300 rounded-full px-6 py-2 brightness-90 hover:brightness-100 duration-200 ease-in "
  }, "COMMENCER")))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Automatisation);

/***/ }),

/***/ "./src/components/Contact.js":
/*!***********************************!*\
  !*** ./src/components/Contact.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _images_Logo_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../images/Logo.svg */ "./src/images/Logo.svg");
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gatsby */ "./.cache/gatsby-browser-entry.js");



const Contact = () => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("section", {
    className: "bg-gradient-to-t from-[#30F9FC] to-lime-300 px-6 pb-6"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "max-w-[1200px] mx-auto"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(gatsby__WEBPACK_IMPORTED_MODULE_2__.Link, {
    to: "/"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    className: "h-auto w-[16rem] pb-10",
    src: _images_Logo_svg__WEBPACK_IMPORTED_MODULE_1__["default"],
    loading: "lazy",
    alt: "logo"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", {
    className: "text-black grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
    className: "border-gray-400 border-solid border-l-2 px-6 py-4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "flex flex-col max-w-[25rem] gap-4 pl-10 py-6  md:pl-0 md:pr-10"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", {
    className: "text-lg font-bold sm:text-2xl md:text-3xl lg:text-4xl"
  }, "LIENS RAPIDES"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "Produits"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "Demo"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "Support"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "Contact"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
    className: "border-gray-400 border-solid border-l-2 px-6 py-4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "flex flex-col max-w-[25rem] gap-4  pl-10 py-6  md:pl-0 md:pr-10"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", {
    className: " text-lg font-bold sm:text-2xl md:text-3xl lg:text-4xl"
  }, "CONTACT"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "Patrick Branchaud"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "Contact"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
    className: "border-gray-400 border-solid border-l-2 px-6 py-4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "flex flex-col max-w-[25rem] gap-4 pl-10 py-6 md:pl-0 md:pr-10"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", {
    className: "text-lg font-bold sm:text-2xl md:text-3xl lg:text-4xl"
  }, "ADRESSE"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "34234 boul asdgsdg"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "Sherbrooke"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "Quebec"))))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Contact);

/***/ }),

/***/ "./src/components/Divider.js":
/*!***********************************!*\
  !*** ./src/components/Divider.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const Divider = () => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "w-0 h-0 border-r-[100vw] border-r-neutral-800 border-b-[10vw] border-b-neutral-900 mt-[-8vw]"
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Divider);

/***/ }),

/***/ "./src/components/Dividerleft.js":
/*!***************************************!*\
  !*** ./src/components/Dividerleft.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const Dividerleft = () => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "w-0 h-0 border-l-[100vw] border-l-neutral-900 border-b-[10vw] border-b-black "
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Dividerleft);

/***/ }),

/***/ "./src/components/Dividerleftthree.js":
/*!********************************************!*\
  !*** ./src/components/Dividerleftthree.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const Dividerleftthree = () => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "w-0 h-0 border-r-[100vw] border-r-white border-b-[10vw] border-b-lime-300"
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Dividerleftthree);

/***/ }),

/***/ "./src/components/Dividerlefttwo.js":
/*!******************************************!*\
  !*** ./src/components/Dividerlefttwo.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const Dividerlefttwo = () => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "w-0 h-0 border-l-[100vw] border-l-white border-b-[10vw] border-b-black "
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Dividerlefttwo);

/***/ }),

/***/ "./src/components/Dividerright.js":
/*!****************************************!*\
  !*** ./src/components/Dividerright.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const Dividerright = () => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "w-0 h-0 border-r-[100vw] border-r-black border-b-[10vw] border-b-white "
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Dividerright);

/***/ }),

/***/ "./src/components/Dividerrightthree.js":
/*!*********************************************!*\
  !*** ./src/components/Dividerrightthree.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const Dividerrightthree = () => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "w-0 h-0 border-l-[100vw] border-l-[#30F9FC] border-b-[10vw] border-b-white"
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Dividerrightthree);

/***/ }),

/***/ "./src/components/Dividerrighttwo.js":
/*!*******************************************!*\
  !*** ./src/components/Dividerrighttwo.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const Dividerrighttwo = () => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "w-0 h-0 border-r-[100vw] border-r-black border-b-[10vw] border-b-lime-300"
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Dividerrighttwo);

/***/ }),

/***/ "./src/components/Experience.js":
/*!**************************************!*\
  !*** ./src/components/Experience.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! gatsby */ "./.cache/gatsby-browser-entry.js");
/* harmony import */ var _images_Layer1v2_webp__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../images/Layer1v2.webp */ "./src/images/Layer1v2.webp");
/* harmony import */ var _images_Layer2_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../images/Layer2.svg */ "./src/images/Layer2.svg");




const Experience = () => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("section", {
    className: "bg-white pt-6 pb-[8.5rem]"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "flex flex-col items-center "
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "flex flex-col justify-center items-center text-center px-6"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", {
    className: "flex flex-col text-2xl font-bold  md:text-5xl lg:text-6xl"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "bg-clip-text  text-transparent bg-gradient-to-r from-[#30F9FC] to-lime-300"
  }, "UNE EXPERIENCE OPTIMISEE")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: " pt-2"
  }, "POUR VOUS ET VOS CLIENTS"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: " text-sm max-w-[30rem] py-10 "
  }, "A small team of people driven by performance and excellence. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "rounded-xl bg-gray-300 h-[2px] max-w-[30rem] w-full "
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(gatsby__WEBPACK_IMPORTED_MODULE_1__.Link, {
    to: "/",
    className: "text-black z-20 mx-auto mt-8 bg-gradient-to-tr from-[#30F9FC] to-lime-300 rounded-full px-6 py-2 brightness-90 hover:brightness-100 duration-200 ease-in"
  }, "COMMENCER")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "flex flex-col gap-10 items-center p-10 lg:flex-row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    "data-aos": "fade-right",
    "data-aos-duration": "1000"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    className: "object-cover h-full w-full",
    src: _images_Layer1v2_webp__WEBPACK_IMPORTED_MODULE_2__["default"],
    alt: "travail",
    loading: "lazy"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "flex flex-col max-w-[25rem] gap-4 border-gray-300 border-solid border-l-2 pl-10 py-6"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", {
    className: "text-lg font-bold sm:text-2xl md:text-3xl lg:text-4xl"
  }, "DES SITES WEBS ULTRA RAPIDES"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "Avec l'utilisation des dernieres technologies pour offrir des sites web ultra rapides."))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "flex flex-col gap-10 items-center p-10 lg:flex-row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    "data-aos": "fade-left",
    "data-aos-duration": "1000",
    className: "lg:order-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    className: "object-cover h-full w-full ",
    src: _images_Layer2_svg__WEBPACK_IMPORTED_MODULE_3__["default"],
    alt: "travail",
    loading: "lazy"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "flex flex-col max-w-[25rem] gap-4 border-gray-300 border-solid border-l-2 pl-10 py-6 lg:order-1 md:border-l-0 md:border-r-2 md:pl-0 md:pr-10"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", {
    className: "text-lg font-bold sm:text-2xl md:text-3xl lg:text-4xl"
  }, "PLATEFORME (CMS)FACILE A UTILISER"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "Pour l'integration de contenus personnalises sur le site Web (article de blogue, landing pages, promotions du mois, textes SEO et plus)."))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "flex flex-col gap-10 items-center p-10 lg:flex-row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    "data-aos": "fade-right",
    "data-aos-duration": "1000"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    className: "object-cover w-full h-full",
    src: _images_Layer1v2_webp__WEBPACK_IMPORTED_MODULE_2__["default"],
    alt: "travail",
    loading: "lazy"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "flex flex-col max-w-[25rem] gap-4 border-gray-300 border-solid border-l-2 pl-10 py-6"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", {
    className: "text-lg font-bold sm:text-2xl md:text-3xl lg:text-4xl"
  }, "DEMANDES WEB DE QUALITE (LEADS)"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "Offrant un taux de conversion plus eleve et un cout d'acquisition plus bas."))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "flex flex-col gap-10 items-center p-10 lg:flex-row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    "data-aos": "fade-left",
    "data-aos-duration": "1000",
    className: "lg:order-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    className: "object-cover h-full w-full",
    src: _images_Layer2_svg__WEBPACK_IMPORTED_MODULE_3__["default"],
    alt: "travail",
    loading: "lazy"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "flex flex-col max-w-[25rem] gap-4 border-gray-300 border-solid border-l-2 pl-10 py-6 lg:order-1 md:border-l-0 md:border-r-2 md:pl-0 md:pr-10"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", {
    className: "text-lg font-bold sm:text-2xl md:text-3xl lg:text-4xl"
  }, "CONCEPTION GRAPHIQUE ET EXPERIENCE EN LIGNE OPTIMALE"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "Pour facilite la navigation."))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "flex flex-col gap-10 items-center p-10 lg:flex-row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    "data-aos": "fade-right",
    "data-aos-duration": "1000"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    className: "object-cover h-full w-full",
    src: _images_Layer1v2_webp__WEBPACK_IMPORTED_MODULE_2__["default"],
    alt: "travail",
    loading: "lazy"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "flex flex-col max-w-[25rem] gap-4 border-gray-300 border-solid border-l-2 pl-10 py-6"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", {
    className: "text-lg font-bold sm:text-2xl md:text-3xl lg:text-4xl"
  }, "MISES A JOUR AUTOMATISEE DES PROGRAMMES ET PROMOTIONS"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "Des manifacturiers."))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "flex flex-col gap-10 items-center p-10 lg:flex-row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    "data-aos": "fade-left",
    "data-aos-duration": "1000",
    className: "lg:order-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    className: "object-cover w-full h-full",
    src: _images_Layer2_svg__WEBPACK_IMPORTED_MODULE_3__["default"],
    alt: "travail",
    loading: "lazy"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "flex flex-col max-w-[25rem] gap-4 border-gray-300 border-solid border-l-2 pl-10 py-6 lg:order-1 md:border-l-0 md:border-r-2 md:pl-0 md:pr-10"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", {
    className: "text-lg font-bold sm:text-2xl md:text-3xl lg:text-4xl"
  }, "OPTIMISATION SEO"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "Incluant la gestion de la taille des images, des balises, des donnees structurees, des sitemaps, etc.")))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Experience);

/***/ }),

/***/ "./src/components/Footer.js":
/*!**********************************!*\
  !*** ./src/components/Footer.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const Footer = () => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("section", {
    className: "bg-black"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "text-white py-2 text-center"
  }, "Tous droits reserves Autoroot Technologies Inc \xA9 2022"));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Footer);

/***/ }),

/***/ "./src/components/Header.js":
/*!**********************************!*\
  !*** ./src/components/Header.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! gatsby */ "./.cache/gatsby-browser-entry.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _images_menu_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../images/menu.svg */ "./src/images/menu.svg");
/* harmony import */ var _images_Vector_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../images/Vector.svg */ "./src/images/Vector.svg");
/* harmony import */ var _images_Vector2_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../images/Vector2.svg */ "./src/images/Vector2.svg");
/* harmony import */ var _images_Vector3_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../images/Vector3.svg */ "./src/images/Vector3.svg");
/* harmony import */ var _images_Vector4_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../images/Vector4.svg */ "./src/images/Vector4.svg");
/* harmony import */ var _images_Vector5_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../images/Vector5.svg */ "./src/images/Vector5.svg");
/* harmony import */ var _images_Vector6_svg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../images/Vector6.svg */ "./src/images/Vector6.svg");










const Header = () => {
  const {
    0: navbar,
    1: setNavbar
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("nav", {
    className: "w-full bg-neutral-800 z-40 lg:absolute"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
    className: "justify-between px-6 mx-auto lg:pt-[2px] lg:max-w-7xl lg:items-center lg:flex"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
    className: "flex items-center justify-between py-3 lg:py-5 lg:block"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(gatsby__WEBPACK_IMPORTED_MODULE_0__.Link, {
    to: "/",
    className: "flex gap-[1px]"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("img", {
    "data-aos": "flip-left",
    "data-aos-duration": "500",
    className: "h-[1.5rem] w-[1.5rem]",
    src: _images_Vector_svg__WEBPACK_IMPORTED_MODULE_3__["default"],
    alt: "Letter A"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("img", {
    "data-aos": "fade-down",
    "data-aos-duration": "500",
    "data-aos-easing": "ease-in",
    className: "h-[1.5rem] w-[1.5rem] ",
    src: _images_Vector2_svg__WEBPACK_IMPORTED_MODULE_4__["default"],
    alt: "Letter U"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("img", {
    "data-aos": "fade-down",
    "data-aos-duration": "500",
    "data-aos-delay": "200",
    "data-aos-easing": "ease-in",
    className: "h-[1.5rem] w-[1.5rem] ml-[-0.3rem]",
    src: _images_Vector3_svg__WEBPACK_IMPORTED_MODULE_5__["default"],
    alt: "Letter T"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("img", {
    "data-aos": "fade-down",
    "data-aos-duration": "500",
    "data-aos-delay": "400",
    "data-aos-easing": "ease-in",
    className: "h-[1.5rem] w-[1.5rem] ml-[-0.3rem]",
    src: _images_Vector5_svg__WEBPACK_IMPORTED_MODULE_7__["default"],
    alt: "Letter O"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("img", {
    "data-aos": "fade-left",
    "data-aos-delay": "700",
    "data-aos-duration": "500",
    "data-aos-easing": "ease-in-out-back",
    className: "h-[1.5rem] w-[1.5rem] ml-[-0.3rem]",
    src: _images_Vector4_svg__WEBPACK_IMPORTED_MODULE_6__["default"],
    alt: "Letter R"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("img", {
    "data-aos": "fade-left",
    "data-aos-delay": "700",
    "data-aos-duration": "500",
    "data-aos-easing": "ease-in-out-back",
    className: "h-[1.5rem] w-[1.5rem] ml-[-0.4rem]",
    src: _images_Vector5_svg__WEBPACK_IMPORTED_MODULE_7__["default"],
    alt: "Letter O"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("img", {
    "data-aos": "fade-left",
    "data-aos-delay": "700",
    "data-aos-duration": "500",
    "data-aos-easing": "ease-in-out-back",
    className: "h-[1.5rem] w-[1.5rem]",
    src: _images_Vector5_svg__WEBPACK_IMPORTED_MODULE_7__["default"],
    alt: "Letter O"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("img", {
    "data-aos": "fade-left",
    "data-aos-delay": "700",
    "data-aos-duration": "500",
    "data-aos-easing": "ease-in-out-back",
    className: "h-[1.5rem] w-[1.5rem] ml-[-0.3rem]",
    src: _images_Vector3_svg__WEBPACK_IMPORTED_MODULE_5__["default"],
    alt: "Letter T"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
    className: "flex justify-start items-end ml-[-0.2rem]"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("img", {
    "data-aos": "fade-in",
    "data-aos-delay": "1350",
    "data-aos-duration": "1500",
    className: "h-[0.7rem] w-[0.7rem] ",
    src: _images_Vector6_svg__WEBPACK_IMPORTED_MODULE_8__["default"],
    alt: "Rights"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
    className: "lg:hidden"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("button", {
    "aria-label": "menu",
    id: "commence",
    className: "p-2 text-gray-700 rounded-md outline-none ",
    onClick: () => setNavbar(!navbar)
  }, navbar ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("p", {
    className: "text-white text-xl mr-[5px] font-bold"
  }, "X") : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("img", {
    className: "w-7 h-7",
    src: _images_menu_svg__WEBPACK_IMPORTED_MODULE_2__["default"],
    alt: "menu"
  }))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
    className: `flex-1 justify-self-center pb-3 mt-8 lg:block lg:pb-0 lg:mt-0 ${navbar ? "block" : "hidden"}`
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
    className: "flex flex-col gap-6 items-center justify-center lg:flex-row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("ul", {
    className: "w-full items-center justify-center text-center space-y-8 border-b-2 border-neutral-600 pb-10 lg:pb-0 lg:border-b-0 lg:flex lg:space-x-6 lg:space-y-0"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("li", {
    className: "flex justify-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(gatsby__WEBPACK_IMPORTED_MODULE_0__.Link, {
    className: "btn group flex items-center bg-transparent tracking-widest text-white",
    to: "/"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("span", {
    className: "relative  text-white after:transition-transform after:duration-500 after:ease-out after:absolute after:bottom-0 after:left-0 after:block after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-white after:content-[''] after:group-hover:origin-bottom-left after:group-hover:scale-x-100"
  }, "PRODUITS"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("li", {
    className: "flex justify-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(gatsby__WEBPACK_IMPORTED_MODULE_0__.Link, {
    className: "btn group flex items-center bg-transparent tracking-widest text-white",
    to: "/"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("span", {
    className: "relative  text-white after:transition-transform after:duration-500 after:ease-out after:absolute after:bottom-0 after:left-0 after:block after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-white after:content-[''] after:group-hover:origin-bottom-left after:group-hover:scale-x-100"
  }, "DEMO"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("li", {
    className: "flex justify-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(gatsby__WEBPACK_IMPORTED_MODULE_0__.Link, {
    className: "btn group flex items-center bg-transparent tracking-widest text-white",
    to: "/"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("span", {
    className: "relative  text-white after:transition-transform after:duration-500 after:ease-out after:absolute after:bottom-0 after:left-0 after:block after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-white after:content-[''] after:group-hover:origin-bottom-left after:group-hover:scale-x-100"
  }, "SUPPORT"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("li", {
    className: "flex justify-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(gatsby__WEBPACK_IMPORTED_MODULE_0__.Link, {
    className: "btn group flex items-center bg-transparent tracking-widest text-white",
    to: "/"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("span", {
    className: "relative  text-white after:transition-transform after:duration-500 after:ease-out after:absolute after:bottom-0 after:left-0 after:block after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-white after:content-[''] after:group-hover:origin-bottom-left after:group-hover:scale-x-100"
  }, "CONTACT"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("li", {
    className: "text-white  hover:text-indigo-200 lg:hidden"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(gatsby__WEBPACK_IMPORTED_MODULE_0__.Link, {
    to: "/"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("span", {
    className: " border-2 px-12 py-2 border-white rounded-full font-bold text-white transition duration-300 ease-in-out hover:bg-white hover:text-black"
  }, "CONNEXION"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("li", {
    className: "text-white hover:text-indigo-200 lg:hidden"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(gatsby__WEBPACK_IMPORTED_MODULE_0__.Link, {
    to: "/"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("span", {
    className: "border-2 px-11 py-2 border-white rounded-full font-bold text-white transition duration-300 ease-in-out hover:bg-white hover:text-black"
  }, "COMMENCER"))))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
    className: "hidden space-x-2 lg:inline-block"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(gatsby__WEBPACK_IMPORTED_MODULE_0__.Link, {
    className: "btn group  bg-transparent tracking-widest text-white",
    to: "/"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("span", {
    className: "relative font-bold pb-[2px] text-white after:transition-transform after:duration-500 after:ease-out after:absolute after:bottom-0 after:left-0 after:block after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-white after:content-[''] after:group-hover:origin-bottom-left after:group-hover:scale-x-100"
  }, "CONNEXION")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(gatsby__WEBPACK_IMPORTED_MODULE_0__.Link, {
    to: "/"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("span", {
    className: "border-[1px] px-4 py-2 border-white rounded-full font-bold text-white transition duration-300 ease-in-out hover:bg-white hover:text-black "
  }, "COMMENCER")))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Header);

/***/ }),

/***/ "./src/components/Hero.js":
/*!********************************!*\
  !*** ./src/components/Hero.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! gatsby */ "./.cache/gatsby-browser-entry.js");
/* harmony import */ var _images_Images_min_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../images/Images-min.svg */ "./src/images/Images-min.svg");



const Hero = () => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("section", {
    className: "bg-neutral-800 min-h-[580px] md:min-h-[830px] lg:min-h-[940px] "
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "flex flex-col h-full max-w-[1200px] mx-auto px-6 gap-2 pt-8 lg:pt-16 lg:flex-row lg:items-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "flex flex-col justify-center items-center text-center lg:items-start lg:text-start"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", {
    className: "flex z-20 flex-col text-2xl font-bold  md:text-5xl lg:text-6xl"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "text-lime-300"
  }, "DES SITES WEBS"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "whitespace-nowrap bg-clip-text text-transparent bg-gradient-to-r from-[#30F9FC] to-lime-300"
  }, "DE CONCESSIONAIRES")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "text-white z-20"
  }, "Concus pour generer des leads de qualite"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(gatsby__WEBPACK_IMPORTED_MODULE_1__.Link, {
    className: "mt-10",
    to: "/"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "px-4 py-3 border-white border-[1px] rounded-full font-bold text-white transition duration-300 ease-in-out hover:bg-white hover:text-black mr-6"
  }, "DEMANDER UNE DEMO"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "z-0 mx-auto lg:ml-[-18rem] mt-[1rem]"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    className: "object-cover h-full w-full",
    src: _images_Images_min_svg__WEBPACK_IMPORTED_MODULE_2__["default"],
    alt: "stock"
  }))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Hero);

/***/ }),

/***/ "./src/components/Integration.js":
/*!***************************************!*\
  !*** ./src/components/Integration.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _images_Images2_webp__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../images/Images2.webp */ "./src/images/Images2.webp");
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gatsby */ "./.cache/gatsby-browser-entry.js");



const Integration = () => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("section", {
    className: "bg-black relative z-0 py-6"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "flex flex-col max-w-[1200px] mx-auto"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", {
    "data-aos": "fade-up",
    className: "text-center py-6 text-2xl font-bold  md:text-5xl lg:text-6xl"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "bg-clip-text py-2 text-transparent bg-gradient-to-r from-[#30F9FC] to-lime-300"
  }, "INTEGRATION")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "flex flex-col gap-10 items-center p-10 lg:flex-row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    "data-aos": "fade-in",
    "data-aos-duration": "1000",
    className: "relative"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "absolute h-full w-full rounded-tr-[10rem] rounded-bl-[10rem] opacity-20 bg-gradient-to-t from-[#30F9FC] to-lime-300"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "absolute -z-10 translate-y-[1rem] translate-x-[-1rem] h-full w-full rounded-tr-[10rem] rounded-bl-[10rem] bg-gradient-to-t from-[#30F9FC] to-lime-300"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    className: "object-cover w-full h-full rounded-tr-[10rem] rounded-bl-[10rem]",
    src: _images_Images2_webp__WEBPACK_IMPORTED_MODULE_1__["default"],
    alt: "travail",
    loading: "lazy"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "flex flex-col gap-4 py-6 md:pl-10 md:border-gray-700 md:border-solid md:border-l-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", {
    className: "flex flex-col"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "bg-clip-text text-transparent bg-gradient-to-r from-[#30F9FC] to-lime-300 text-lg font-bold sm:text-2xl md:text-3xl lg:text-4xl"
  }, "INTEGRATION"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#30F9FC] to-lime-300"
  }, "AVEC LES MEILLEURES PLATEFORMES")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: " text-white"
  }, "Notre portfolio inclus deja plusieurs marques de vehicules neufs:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", {
    className: "list-disc text-white font-bold ml-6"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, "Hyundai"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, "Kia"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, "Nissan"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, "Mazda"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, "Subaru"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, "Mitsubishi"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, "Infiniti")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: " text-white"
  }, "Et plusieurs autres marques en developpement."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(gatsby__WEBPACK_IMPORTED_MODULE_2__.Link, {
    className: "mt-10",
    to: "/"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: " border-[1px] px-4 py-3 border-white rounded-full font-bold text-white transition duration-300 ease-in-out hover:bg-white hover:text-black mr-6"
  }, "DEMANDER UNE DEMO"))))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Integration);

/***/ }),

/***/ "./src/components/Integre.js":
/*!***********************************!*\
  !*** ./src/components/Integre.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! gatsby */ "./.cache/gatsby-browser-entry.js");
/* harmony import */ var _images_Logo2_webp__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../images/Logo2.webp */ "./src/images/Logo2.webp");



const Integre = () => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("section", {
    className: "bg-black p-4 relative z-30"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "flex flex-col gap-6 max-w-[1200px] mx-auto"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", {
    "data-aos": "fade-up",
    className: "text-center py-6 text-2xl font-bold md:text-5xl lg:text-6xl"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "bg-clip-text py-2 text-transparent bg-gradient-to-r from-[#30F9FC] to-lime-300"
  }, "INTEGRE AVEC VOS OUTILS")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "text-white max-w-xl mx-auto text-center"
  }, "Notre plateforme se connecte aux differents API et sources de donnees que vous avez en place. DMS, CRM, Evaluateur, Syndication, etc."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#30F9FC] to-lime-300 max-w-xl mx-auto text-center"
  }, "POUR VOUS ET VOS CLIENTS"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    src: _images_Logo2_webp__WEBPACK_IMPORTED_MODULE_2__["default"],
    className: "py-6 w-full h-full",
    loading: "lazy",
    alt: "logo"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "bg-clip-text text-transparent bg-gradient-to-r from-[#30F9FC] to-lime-300 max-w-xl mx-auto text-center"
  }, "Vous ne trouvez pas votre CRM? Ecrivez-nous et nous vous contacterons!"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "rounded-xl bg-gray-700 h-[1px] max-w-[30rem] mx-auto w-full "
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(gatsby__WEBPACK_IMPORTED_MODULE_1__.Link, {
    to: "/",
    className: "text-black z-20 mx-auto mt-8 bg-gradient-to-tr from-[#30F9FC] to-lime-300 rounded-full px-6 py-2 brightness-90 hover:brightness-100 duration-200 ease-in "
  }, "COMMENCER")));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Integre);

/***/ }),

/***/ "./src/components/Produits.js":
/*!************************************!*\
  !*** ./src/components/Produits.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! gatsby */ "./.cache/gatsby-browser-entry.js");
/* harmony import */ var _images_Icons_min_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../images/Icons-min.svg */ "./src/images/Icons-min.svg");
/* harmony import */ var _images_Icons2_min_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../images/Icons2-min.svg */ "./src/images/Icons2-min.svg");
/* harmony import */ var _images_Icons3_min_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../images/Icons3-min.svg */ "./src/images/Icons3-min.svg");
/* harmony import */ var _images_Icons4_min_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../images/Icons4-min.svg */ "./src/images/Icons4-min.svg");
/* harmony import */ var _images_Icons5_min_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../images/Icons5-min.svg */ "./src/images/Icons5-min.svg");







const Produits = () => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("section", {
    className: "bg-neutral-900"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "flex flex-col px-6 py-6 max-w-[1200px] mx-auto"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", {
    "data-aos": "fade-up",
    className: "text-center py-16 text-2xl font-bold md:text-5xl lg:text-6xl"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "bg-clip-text py-2 text-transparent bg-gradient-to-r from-[#30F9FC] to-lime-300"
  }, "PRODUITS")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", {
    className: "text-white grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
    className: "border-gray-700 border-solid border-l-2 px-6 py-4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    "data-aos": "fade-left",
    "data-aos-mirror": "true",
    src: _images_Icons_min_svg__WEBPACK_IMPORTED_MODULE_2__["default"],
    alt: "icon1"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", {
    className: "font-bold py-3"
  }, "SITES WEB DE CONCESSIONAIRES AUTOS"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "text-sm"
  }, "Suivant les normes des manifacturiers")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
    className: "border-gray-700 border-solid border-l-2 px-6 py-4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    "data-aos": "fade-left",
    "data-aos-mirror": "true",
    "data-aos-delay": "50",
    src: _images_Icons2_min_svg__WEBPACK_IMPORTED_MODULE_3__["default"],
    alt: "icon2"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", {
    className: "font-bold py-3"
  }, "MODULE D'ACHAT EN LIGNE COMPLET"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "text-sm"
  }, "Incluant les accessoires, garanties, assurances et depots")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
    className: "border-gray-700 border-solid border-l-2 px-6 py-4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    "data-aos": "fade-left",
    "data-aos-mirror": "true",
    "data-aos-delay": "100",
    src: _images_Icons3_min_svg__WEBPACK_IMPORTED_MODULE_4__["default"],
    alt: "icon3"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", {
    className: "font-bold py-3"
  }, "GESTIONNAIRE D'INVENTAIRE D'OCCASIONS"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "text-sm"
  }, "(Eval Auto) Incluant la syndication vers les plateformes les plus populaires (Kijiji, Cargurus, Otogo, AutoTraders, etc)")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
    className: "border-gray-700 border-solid border-l-2 px-6 py-4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    "data-aos": "fade-left",
    "data-aos-mirror": "true",
    "data-aos-delay": "150",
    src: _images_Icons4_min_svg__WEBPACK_IMPORTED_MODULE_5__["default"],
    alt: "icon4"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", {
    className: "font-bold py-3"
  }, "MODULE DE PUBLICATION AUTOMATISEE"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "text-sm"
  }, "Sur Facebook (Carrousel et Marketplace) et Google (Merchant center) pour vehicules d'occasion.")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
    className: "border-gray-700 border-solid border-l-2 px-6 py-4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    "data-aos": "fade-left",
    "data-aos-mirror": "true",
    "data-aos-delay": "200",
    src: _images_Icons5_min_svg__WEBPACK_IMPORTED_MODULE_6__["default"],
    alt: "icon5"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", {
    className: "font-bold py-3"
  }, "SITES WEB D'OCCASIONS"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "text-sm"
  }, "De style marketplace reunissant l'inventaire de plusieurs concessions dans un meme site. Strategie incontournable pour les groupes automobiles."))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(gatsby__WEBPACK_IMPORTED_MODULE_1__.Link, {
    className: "mt-10 mx-auto",
    to: "/"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "border-[1px] px-4 py-3 border-white rounded-full font-bold text-white transition duration-300 ease-in-out hover:bg-white hover:text-black mr-6"
  }, "DEMANDER UNE DEMO"))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Produits);

/***/ }),

/***/ "./src/components/Rapide.js":
/*!**********************************!*\
  !*** ./src/components/Rapide.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! gatsby */ "./.cache/gatsby-browser-entry.js");


const Rapide = () => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("section", {
    className: "bg-neutral-900  "
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "flex justify-center items-center  h-full"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "flex flex-col justify-center items-center px-6 text-center lg:text-start lg:flex-row lg:justify-between"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", {
    className: "flex flex-col z-20 max-w-xl text-2xl font-bold md:text-5xl lg:text-6xl"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "text-lime-300"
  }, "DES APPLICATIONS WEBS"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "bg-clip-text whitespace-nowrap text-transparent bg-gradient-to-r from-[#30F9FC] to-lime-300"
  }, "ULTRA RAPIDES")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "text-white font-bold pt-2 lg:max-w-md"
  }, "POUR DES CONCESSIONAIRES AUTOMOBILES DU QUEBEC")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "hidden rounded-xl bg-gray-600 w-[1px] h-[21rem] mx-10 lg:block"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "text-white text-sm max-w-lg py-10"
  }, "A small team of people driven by performance and excellence. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(gatsby__WEBPACK_IMPORTED_MODULE_1__.Link, {
    className: "mt-10",
    to: "/"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: " border-[1px] px-4 py-3 border-white rounded-full font-bold text-white transition duration-300 ease-in-out hover:bg-white hover:text-black mr-6"
  }, "DEMANDER UNE DEMO"))))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Rapide);

/***/ }),

/***/ "./src/components/Syndication.js":
/*!***************************************!*\
  !*** ./src/components/Syndication.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! gatsby */ "./.cache/gatsby-browser-entry.js");
/* harmony import */ var _images_Mockup_webp__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../images/Mockup.webp */ "./src/images/Mockup.webp");



const Syndication = () => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("section", {
    className: "bg-gradient-to-t from-[#30F9FC] to-lime-300"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "flex flex-col max-w-[1200px] mx-auto"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "flex flex-col gap-10 items-center p-10 lg:flex-row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    "data-aos": "fade-up",
    "data-aos-duration": "1000"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    className: "object-cover h-full w-full",
    src: _images_Mockup_webp__WEBPACK_IMPORTED_MODULE_2__["default"],
    alt: "travail",
    loading: "lazy"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "flex flex-col gap-4 border-gray-700 border-solid border-l-2 pl-10 py-6"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", {
    className: "flex flex-col"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "text-lg font-bold sm:text-2xl md:text-3xl lg:text-4xl"
  }, "INTEGRATION"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "text-lg font-bold sm:text-2xl md:text-3xl lg:text-4xl"
  }, "SYNDICATION")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "Notre portfolio inclus deja plusieurs marques de vehicules neufs:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", {
    className: "list-disc ml-6"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "font-bold"
  }, "Facebook"), " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "(Carroussel et Marketplace)")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "font-bold"
  }, "Canadian Black Book"), " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), "(Evaluation de vehicule d'echange)"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
    className: "flex flex-col"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "font-bold"
  }, "DealerCorp"), " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "(gestionaire d'inventaire)"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "Vous voulez ajouter une Syndication? ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), "Ecrivez-nous et nous vous contacterons!"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(gatsby__WEBPACK_IMPORTED_MODULE_1__.Link, {
    to: "/",
    className: "text-black bg-white z-20 mr-auto mt-8 rounded-full px-6 py-2 brightness-100 hover:brightness-90 duration-100 ease-in "
  }, "DEMANDER UNE DEMO")))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Syndication);

/***/ }),

/***/ "./src/components/layout.js":
/*!**********************************!*\
  !*** ./src/components/layout.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! aos */ "./node_modules/aos/dist/aos.esm.js");
/* harmony import */ var aos_dist_aos_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! aos/dist/aos.css */ "./node_modules/aos/dist/aos.css");
/* harmony import */ var aos_dist_aos_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(aos_dist_aos_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Header */ "./src/components/Header.js");





const Layout = ({
  children
}) => {
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    aos__WEBPACK_IMPORTED_MODULE_1__["default"].init();
    aos__WEBPACK_IMPORTED_MODULE_1__["default"].refresh();
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Header__WEBPACK_IMPORTED_MODULE_3__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("main", null, children));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Layout);

/***/ }),

/***/ "./src/components/seo.js":
/*!*******************************!*\
  !*** ./src/components/seo.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _public_page_data_sq_d_63159454_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../public/page-data/sq/d/63159454.json */ "./public/page-data/sq/d/63159454.json");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);

/**
 * SEO component that queries for data with
 * Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */


function Seo({
  description,
  title,
  children
}) {
  var _site$siteMetadata, _site$siteMetadata2;
  const {
    site
  } = _public_page_data_sq_d_63159454_json__WEBPACK_IMPORTED_MODULE_0__.data;
  const metaDescription = description || site.siteMetadata.description;
  const defaultTitle = (_site$siteMetadata = site.siteMetadata) === null || _site$siteMetadata === void 0 ? void 0 : _site$siteMetadata.title;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("title", null, defaultTitle ? `${title} | ${defaultTitle}` : title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("meta", {
    name: "description",
    content: metaDescription
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("meta", {
    property: "og:title",
    content: title
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("meta", {
    property: "og:description",
    content: metaDescription
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("meta", {
    property: "og:type",
    content: "website"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("meta", {
    name: "twitter:card",
    content: "summary"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("meta", {
    name: "twitter:creator",
    content: ((_site$siteMetadata2 = site.siteMetadata) === null || _site$siteMetadata2 === void 0 ? void 0 : _site$siteMetadata2.author) || ``
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("meta", {
    name: "twitter:title",
    content: title
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("meta", {
    name: "twitter:description",
    content: metaDescription
  }), children);
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Seo);

/***/ }),

/***/ "./src/pages/index.js?export=default":
/*!*******************************************!*\
  !*** ./src/pages/index.js?export=default ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Head": () => (/* binding */ Head),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Divider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Divider */ "./src/components/Divider.js");
/* harmony import */ var _components_Dividerleft__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Dividerleft */ "./src/components/Dividerleft.js");
/* harmony import */ var _components_Dividerleftthree__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Dividerleftthree */ "./src/components/Dividerleftthree.js");
/* harmony import */ var _components_Dividerlefttwo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Dividerlefttwo */ "./src/components/Dividerlefttwo.js");
/* harmony import */ var _components_Dividerright__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Dividerright */ "./src/components/Dividerright.js");
/* harmony import */ var _components_Dividerrightthree__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Dividerrightthree */ "./src/components/Dividerrightthree.js");
/* harmony import */ var _components_Dividerrighttwo__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Dividerrighttwo */ "./src/components/Dividerrighttwo.js");
/* harmony import */ var _components_Experience__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/Experience */ "./src/components/Experience.js");
/* harmony import */ var _components_Contact__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/Contact */ "./src/components/Contact.js");
/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/Footer */ "./src/components/Footer.js");
/* harmony import */ var _components_Hero__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/Hero */ "./src/components/Hero.js");
/* harmony import */ var _components_Integration__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/Integration */ "./src/components/Integration.js");
/* harmony import */ var _components_Integre__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../components/Integre */ "./src/components/Integre.js");
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../components/layout */ "./src/components/layout.js");
/* harmony import */ var _components_Produits__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../components/Produits */ "./src/components/Produits.js");
/* harmony import */ var _components_Rapide__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../components/Rapide */ "./src/components/Rapide.js");
/* harmony import */ var _components_seo__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../components/seo */ "./src/components/seo.js");
/* harmony import */ var _components_Syndication__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../components/Syndication */ "./src/components/Syndication.js");
/* harmony import */ var _components_Automatisation__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../components/Automatisation */ "./src/components/Automatisation.js");




















const IndexPage = () => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_layout__WEBPACK_IMPORTED_MODULE_14__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_Hero__WEBPACK_IMPORTED_MODULE_11__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_Divider__WEBPACK_IMPORTED_MODULE_1__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_Rapide__WEBPACK_IMPORTED_MODULE_16__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_Produits__WEBPACK_IMPORTED_MODULE_15__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_Dividerleft__WEBPACK_IMPORTED_MODULE_2__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_Integration__WEBPACK_IMPORTED_MODULE_12__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_Dividerright__WEBPACK_IMPORTED_MODULE_5__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_Experience__WEBPACK_IMPORTED_MODULE_8__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_Dividerlefttwo__WEBPACK_IMPORTED_MODULE_4__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_Integre__WEBPACK_IMPORTED_MODULE_13__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_Dividerrighttwo__WEBPACK_IMPORTED_MODULE_7__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_Syndication__WEBPACK_IMPORTED_MODULE_18__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_Dividerrightthree__WEBPACK_IMPORTED_MODULE_6__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_Automatisation__WEBPACK_IMPORTED_MODULE_19__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_Dividerleftthree__WEBPACK_IMPORTED_MODULE_3__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_Contact__WEBPACK_IMPORTED_MODULE_9__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_Footer__WEBPACK_IMPORTED_MODULE_10__["default"], null));
};
const Head = () => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_seo__WEBPACK_IMPORTED_MODULE_17__["default"], {
  title: "Home"
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (IndexPage);

/***/ }),

/***/ "./node_modules/lodash.debounce/index.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash.debounce/index.js ***!
  \***********************************************/
/***/ ((module) => {

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
var symbolTag = '[object Symbol]';

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
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString = objectProto.toString;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max,
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
  return root.Date.now();
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
function debounce(func, wait, options) {
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
  if (isObject(options)) {
    leading = !!options.leading;
    maxing = 'maxWait' in options;
    maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
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
  if (isSymbol(value)) {
    return NAN;
  }
  if (isObject(value)) {
    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
    value = isObject(other) ? (other + '') : other;
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

module.exports = debounce;


/***/ }),

/***/ "./node_modules/lodash.throttle/index.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash.throttle/index.js ***!
  \***********************************************/
/***/ ((module) => {

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
var symbolTag = '[object Symbol]';

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
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString = objectProto.toString;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max,
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
  return root.Date.now();
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
function debounce(func, wait, options) {
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
  if (isObject(options)) {
    leading = !!options.leading;
    maxing = 'maxWait' in options;
    maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
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
 * Creates a throttled function that only invokes `func` at most once per
 * every `wait` milliseconds. The throttled function comes with a `cancel`
 * method to cancel delayed `func` invocations and a `flush` method to
 * immediately invoke them. Provide `options` to indicate whether `func`
 * should be invoked on the leading and/or trailing edge of the `wait`
 * timeout. The `func` is invoked with the last arguments provided to the
 * throttled function. Subsequent calls to the throttled function return the
 * result of the last `func` invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the throttled function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.throttle` and `_.debounce`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to throttle.
 * @param {number} [wait=0] The number of milliseconds to throttle invocations to.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=true]
 *  Specify invoking on the leading edge of the timeout.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new throttled function.
 * @example
 *
 * // Avoid excessively updating the position while scrolling.
 * jQuery(window).on('scroll', _.throttle(updatePosition, 100));
 *
 * // Invoke `renewToken` when the click event is fired, but not more than once every 5 minutes.
 * var throttled = _.throttle(renewToken, 300000, { 'trailing': false });
 * jQuery(element).on('click', throttled);
 *
 * // Cancel the trailing throttled invocation.
 * jQuery(window).on('popstate', throttled.cancel);
 */
function throttle(func, wait, options) {
  var leading = true,
      trailing = true;

  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  if (isObject(options)) {
    leading = 'leading' in options ? !!options.leading : leading;
    trailing = 'trailing' in options ? !!options.trailing : trailing;
  }
  return debounce(func, wait, {
    'leading': leading,
    'maxWait': wait,
    'trailing': trailing
  });
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
  if (isSymbol(value)) {
    return NAN;
  }
  if (isObject(value)) {
    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
    value = isObject(other) ? (other + '') : other;
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

module.exports = throttle;


/***/ }),

/***/ "./node_modules/aos/dist/aos.css":
/*!***************************************!*\
  !*** ./node_modules/aos/dist/aos.css ***!
  \***************************************/
/***/ (() => {



/***/ }),

/***/ "./src/images/Icons-min.svg":
/*!**********************************!*\
  !*** ./src/images/Icons-min.svg ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQ4IiBoZWlnaHQ9IjE0OCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48Y2lyY2xlIGN4PSI3My44MzUiIGN5PSI3NC4wMDQiIHI9IjcyLjgzNSIgc3Ryb2tlPSJ1cmwoI2EpIiBzdHJva2Utd2lkdGg9IjIiLz48cGF0aCBkPSJNNDYuMDI2IDk5Ljc1NXYyLjg2M2MwIDEuODIxLTEuNjQxIDMuMzgyLTMuNTU3IDMuMzgyaC0xMy4yN2MtMi4wNTIgMC0zLjU1OC0xLjU2MS0zLjU1OC0zLjM4MlY4OS44N2MwLTcuNjc1LTEuMjMxLTIwLjI5MSA0Ljc5LTI2LjE0NmgtMy45NjhjLTEuMzY3IDAtMi40NjMtMS4wNC0yLjQ2My0yLjM0MlY1OS4wNGMwLTEuMyAxLjUwNC0yLjM0MiAyLjczNi0yLjYwMWw5LjAyOC0xLjE3MSA2LjAyLTEwLjY2NmMxLjY0LTIuMjEyIDUuMzM1LTQuNTUzIDguMjA4LTQuOTQzIDE1LjczMi0yLjIxMiAzMi4xNDktMi4yMTIgNDguMDE2IDAgMi44NzMuMzkgNi41NjcgMi43MzEgOC4yMDkgNC45NDNsNi4wMTkgMTAuNjY2IDkuMDI4IDEuMTdjMS4yMzIuMjYgMi43MzYgMS4zIDIuNzM2IDIuNjAydjIuMzQyYzAgMS4zLTEuMDk0IDIuMzQyLTIuNDYzIDIuMzQyaC0zLjk2N2M2LjAxOSA1Ljg1MyA0Ljc4OSAxOC40NzEgNC43ODkgMjYuMTQ2djEyLjc0OGMwIDEuODIxLTEuNjQyIDMuMzgyLTMuNTU4IDMuMzgyaC0xMy4yN2MtMS45MTYgMC0zLjU1Ny0xLjU2MS0zLjU1Ny0zLjM4MnYtMi44NjJhNDQ2LjIxMSA0NDYuMjExIDAgMCAxLTU1Ljk1MiAwaC4wMDR6bTQuMTAzLTU4LjkyNWMtMi42LjI1OS01Ljg4MyAyLjQ3LTcuMzg3IDQuNDIybC02LjI5MyAxMS4wNTYtOS41NzYgMS4zYy0uNDEgMC0uODIyLjI2LTEuMjMyLjY1MS0uMjcyLjI2LS40MS41Mi0uNDEuNzgxdjIuMzQyYzAgLjY1LjU0OCAxLjE3MSAxLjIzMiAxLjE3MWg2Ljg0bC0xLjM2NyAxLjNjLTYuNTY3IDUuODUzLTUuMDYyIDE3LjgyLTUuMDYyIDI2LjAxNi0uMTM3IDQuMDMyLS4xMzcgOC4xOTUtLjEzNyAxMi43NDcgMCAxLjE3MSAxLjA5NSAyLjIxMiAyLjQ2MyAyLjIxMmgxMy4yN2MxLjIzMiAwIDIuMzI2LTEuMDQxIDIuMzI2LTIuMjEydi00LjAzMWE0ODYuMDkyIDQ4Ni4wOTIgMCAwIDAgNTguNDE0IDB2NC4wMzFjMCAxLjE3MSAxLjA5NCAyLjIxMiAyLjMyNSAyLjIxMmgxMy4yNzFjMS4zNjcgMCAyLjMyNS0xLjA0MSAyLjMyNS0yLjIxMlY4OS44NjljMC04LjE5NSAxLjUwNS0yMC4xNjMtNS4wNjEtMjYuMDE2YTYuMzQ2IDYuMzQ2IDAgMCAxLTEuMzY3LTEuM2g2Ljg0Yy42ODQgMCAxLjIzMS0uNTIgMS4yMzEtMS4xN1Y1OS4wNGMwLS4yNi0uMTM3LS41Mi0uNDEtLjc4LS40MS0uMzktLjgyMS0uNjUxLTEuMzY3LS42NTFsLTkuNDM5LTEuMy02LjI5My0xMS4wNTZjLTEuNTA0LTEuOTUxLTQuOTI0LTQuMTY0LTcuNTI0LTQuNDIzLTE1LjU5NC0yLjM0Mi0zMS44NzUtMi4zNDItNDcuNjA2IDBoLS4wMDZ6bTQ3LjE5NiA1LjA3M2MxLjY0Mi41MiAyLjczNiAxLjA0IDMuNjkzIDIuNDcxbDQuOTI1IDkuMjM2SDQyLjA1N2w0LjkyNS05LjIzNmMuOTU3LTEuNDMgMi4wNTEtMS45NSAzLjY5My0yLjQ3YTIxNS4wOTIgMjE1LjA5MiAwIDAgMSA0Ni42NDkgMGguMDAxem0xMC41MzMgMTIuNzQ3LTUuODgzLTEwLjc5NmMtMS4wOTQtMS42OTEtMi40NjItMi40NzEtNC41MTQtMi45OTEtMTQuNS0yLjA4MS0zMi40MjItMi4wODEtNDYuOTIyIDAtMi4wNTIuNTItMy41NTcgMS4zLTQuNjUxIDIuOTlMNDAuMTQyIDU4LjY1aDY3LjcxNnptLS42ODQgMTUuNjFjLTMuOTY3IDAtNy4xMTMgMi45OS03LjExMyA2LjYzNCAwIDMuNjQzIDMuMTQ2IDYuNjM0IDcuMTEzIDYuNjM0IDMuOTY3IDAgNi45NzctMi45OSA2Ljk3Ny02LjYzNCAwLTMuNjQzLTMuMTQ1LTYuNjM0LTYuOTc3LTYuNjM0em0wIDEuMTdjMy4xNDYgMCA1Ljc0NiAyLjQ3MyA1Ljc0NiA1LjQ2NCAwIDIuOTkxLTIuNiA1LjU5NC01Ljc0NiA1LjU5NC0zLjE0NiAwLTUuODgzLTIuNDcyLTUuODgzLTUuNTk0IDAtMy4xMjIgMi42LTUuNDYzIDUuODgzLTUuNDYzem0tNjYuMzQ4LTEuMTdjMy44MyAwIDYuOTc3IDIuOTkgNi45NzcgNi42MzQgMCAzLjY0My0zLjE0NiA2LjYzNC02Ljk3NyA2LjYzNC0zLjgzMSAwLTYuOTc3LTIuOTktNi45NzctNi42MzQgMC0zLjY0MyAzLjE0Ni02LjYzNCA2Ljk3Ny02LjYzNHptMCAxLjE3Yy0zLjE0NiAwLTUuNzQ2IDIuNDczLTUuNzQ2IDUuNDY0IDAgMi45OTEgMi41OTkgNS41OTQgNS43NDYgNS41OTQgMy4xNDcgMCA1Ljg4My0yLjQ3MiA1Ljg4My01LjU5NCAwLTMuMTIyLTIuNi01LjQ2My01Ljg4My01LjQ2M3oiIGZpbGw9IiNmZmYiIHN0cm9rZT0idXJsKCNiKSIvPjxkZWZzPjxsaW5lYXJHcmFkaWVudCBpZD0iYSIgeDE9IjEwNC41ODgiIHkxPSItMzkuMzE5IiB4Mj0iNC4xMjUiIHkyPSIxMzUuMDAxIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHN0b3Agc3RvcC1jb2xvcj0iI0ZGRjgwMCIvPjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iIzMwRjlGQyIvPjwvbGluZWFyR3JhZGllbnQ+PGxpbmVhckdyYWRpZW50IGlkPSJiIiB4MT0iOTQuODI2IiB5MT0iMTkuODE2IiB4Mj0iNTguNDk5IiB5Mj0iMTEyLjUxMyIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPjxzdG9wIHN0b3AtY29sb3I9IiNGRkY4MDAiLz48c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiMzMEY5RkMiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48L3N2Zz4=");

/***/ }),

/***/ "./src/images/Icons2-min.svg":
/*!***********************************!*\
  !*** ./src/images/Icons2-min.svg ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQ4IiBoZWlnaHQ9IjE0OCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48Y2lyY2xlIGN4PSI3My44MzUiIGN5PSI3NC4wMDQiIHI9IjcyLjgzNSIgc3Ryb2tlPSJ1cmwoI2EpIiBzdHJva2Utd2lkdGg9IjIiLz48cGF0aCBzdHJva2U9InVybCgjYikiIHN0cm9rZS13aWR0aD0iMiIgZD0iTTI5LjQyMSA1MC42NTZoODkuMzkzIi8+PHJlY3QgeD0iMjkuODU1IiB5PSI0NC4xNjkiIHdpZHRoPSI4OC41MjUiIGhlaWdodD0iNTkuNjciIHJ4PSIzIiBzdHJva2U9InVybCgjYykiIHN0cm9rZS13aWR0aD0iMiIvPjxjaXJjbGUgY3g9IjM1LjA5OCIgY3k9IjQ3LjQxMiIgcj0iLjkxNCIgc3Ryb2tlPSJ1cmwoI2QpIi8+PGNpcmNsZSBjeD0iMzkuNjI0IiBjeT0iNDcuNDEyIiByPSIuOTE0IiBzdHJva2U9InVybCgjZSkiLz48Y2lyY2xlIGN4PSI0NC4xNTEiIGN5PSI0Ny40MTIiIHI9Ii45MTQiIHN0cm9rZT0idXJsKCNmKSIvPjxwYXRoIGQ9Ik04Mi45NTYgODEuMTcxYTUuNTI0IDUuNTI0IDAgMCAxLS43ODMgMi44NDJjLS41MDMuODctMS4yNTcgMS41OTUtMi4yNjIgMi4xNzUtLjk4Ni41Ni0yLjE1Ni44OS0zLjUxLjk4NnYyLjM0OWgtMS44NTV2LTIuMzc4Yy0xLjkzNC0uMTc0LTMuNDktLjc1NC00LjY3LTEuNzQtMS4xNzktMS4wMDUtMS43ODgtMi4zNTktMS44MjYtNC4wNmg0LjM1Yy4xMTYgMS4zOTIuODMxIDIuMjMzIDIuMTQ2IDIuNTIzdi01LjUzOWMtMS4zOTItLjM0OC0yLjUxNC0uNjk2LTMuMzY0LTEuMDQ0LS44NTEtLjM0OC0xLjU4Ni0uOTA5LTIuMjA0LTEuNjgyLS42MTktLjc3My0uOTI4LTEuODI3LS45MjgtMy4xNjEgMC0xLjY4Mi41OTktMy4wNTUgMS43OTgtNC4xMTggMS4yMTgtMS4wNjMgMi43ODQtMS42NzIgNC42OTgtMS44Mjd2LTIuMzQ5aDEuODU2djIuMzQ5YzEuODU2LjE1NSAzLjMzNS43MTUgNC40MzcgMS42ODIgMS4xMjEuOTY3IDEuNzUgMi4zIDEuODg1IDQuMDAyaC00LjM4YTIuNTggMi41OCAwIDAgMC0uNjA4LTEuNDVjLS4zMjktLjQyNS0uNzc0LS43MjUtMS4zMzQtLjg5OXY1LjQ4MWMxLjQ1LjM2NyAyLjU5LjcyNSAzLjQyMiAxLjA3My44NS4zMjkgMS41ODUuODggMi4yMDQgMS42NTMuNjE4Ljc1NC45MjggMS43OTguOTI4IDMuMTMyem0tMTAuNjcyLTguOTMyYzAgLjYzOC4xOTMgMS4xNi41OCAxLjU2Ni4zODYuMzg3Ljk0Ny43MDYgMS42ODIuOTU3di01LjAxN2MtLjY5Ni4wOTctMS4yNDcuMzU4LTEuNjUzLjc4My0uNDA2LjQyNS0uNjEuOTk2LS42MSAxLjcxMXptNC4xMTggMTEuNjg3Yy43MzQtLjEzNSAxLjMwNS0uNDM1IDEuNzEtLjg5OS40MjYtLjQ2NC42MzktMS4wMjUuNjM5LTEuNjgyIDAtLjYzOC0uMjAzLTEuMTUtLjYxLTEuNTM3LS40MDUtLjM4Ny0uOTg1LS43MDYtMS43NC0uOTU3djUuMDc1eiIgZmlsbD0idXJsKCNnKSIvPjxkZWZzPjxsaW5lYXJHcmFkaWVudCBpZD0iYSIgeDE9IjEwNC41ODgiIHkxPSItMzkuMzE5IiB4Mj0iNC4xMjUiIHkyPSIxMzUuMDAxIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHN0b3Agc3RvcC1jb2xvcj0iI0ZGRjgwMCIvPjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iIzMwRjlGQyIvPjwvbGluZWFyR3JhZGllbnQ+PGxpbmVhckdyYWRpZW50IGlkPSJiIiB4MT0iOTIuNzM1IiB5MT0iNTEuMzg4IiB4Mj0iOTIuNzI1IiB5Mj0iNTIuOTYxIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHN0b3Agc3RvcC1jb2xvcj0iI0ZGRjgwMCIvPjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iIzMwRjlGQyIvPjwvbGluZWFyR3JhZGllbnQ+PGxpbmVhckdyYWRpZW50IGlkPSJjIiB4MT0iOTIuOTciIHkxPSIyNi42NzciIHgyPSI1OS45OCIgeTI9IjExMC43MDUiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj48c3RvcCBzdG9wLWNvbG9yPSIjRkZGODAwIi8+PHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjMzBGOUZDIi8+PC9saW5lYXJHcmFkaWVudD48bGluZWFyR3JhZGllbnQgaWQ9ImQiIHgxPSIzNS42ODgiIHkxPSI0NS4yNDEiIHgyPSIzMy43NjMiIHkyPSI0OC41ODEiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj48c3RvcCBzdG9wLWNvbG9yPSIjRkZGODAwIi8+PHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjMzBGOUZDIi8+PC9saW5lYXJHcmFkaWVudD48bGluZWFyR3JhZGllbnQgaWQ9ImUiIHgxPSI0MC4yMTQiIHkxPSI0NS4yNDEiIHgyPSIzOC4yODkiIHkyPSI0OC41ODEiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj48c3RvcCBzdG9wLWNvbG9yPSIjRkZGODAwIi8+PHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjMzBGOUZDIi8+PC9saW5lYXJHcmFkaWVudD48bGluZWFyR3JhZGllbnQgaWQ9ImYiIHgxPSI0NC43NCIgeTE9IjQ1LjI0MSIgeDI9IjQyLjgxNiIgeTI9IjQ4LjU4MSIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPjxzdG9wIHN0b3AtY29sb3I9IiNGRkY4MDAiLz48c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiMzMEY5RkMiLz48L2xpbmVhckdyYWRpZW50PjxsaW5lYXJHcmFkaWVudCBpZD0iZyIgeDE9IjgzLjA4MSIgeTE9IjM5Ljg5NyIgeDI9IjQ1LjIwOCIgeTI9Ijg1LjQ5NiIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPjxzdG9wIHN0b3AtY29sb3I9IiNGRkY4MDAiLz48c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiMzMEY5RkMiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48L3N2Zz4=");

/***/ }),

/***/ "./src/images/Icons3-min.svg":
/*!***********************************!*\
  !*** ./src/images/Icons3-min.svg ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQ4IiBoZWlnaHQ9IjE0OCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48Y2lyY2xlIGN4PSI3My44MzUiIGN5PSI3NC4wMDQiIHI9IjcyLjgzNSIgc3Ryb2tlPSJ1cmwoI2EpIiBzdHJva2Utd2lkdGg9IjIiLz48cGF0aCBzdHJva2U9InVybCgjYikiIHN0cm9rZS13aWR0aD0iMiIgZD0iTTQ0IDEwOWg2MCIvPjxyZWN0IHg9IjQ0IiB5PSIyNCIgd2lkdGg9IjYwIiBoZWlnaHQ9IjEwMCIgcng9IjUiIHN0cm9rZT0idXJsKCNjKSIgc3Ryb2tlLXdpZHRoPSIyIi8+PGNpcmNsZSBjeD0iNzQuNSIgY3k9IjExNi41IiByPSIzLjUiIHN0cm9rZT0idXJsKCNkKSIgc3Ryb2tlLXdpZHRoPSIyIi8+PHBhdGggc3Ryb2tlPSJ1cmwoI2UpIiBzdHJva2UtbGluZWNhcD0icm91bmQiIGQ9Ik01NS41IDM4LjVoNDEiLz48Y2lyY2xlIGN4PSI1MC41IiBjeT0iMzguNSIgcj0iMS41IiBmaWxsPSJ1cmwoI2YpIi8+PHBhdGggc3Ryb2tlPSJ1cmwoI2cpIiBzdHJva2UtbGluZWNhcD0icm91bmQiIGQ9Ik01NS41IDQ2LjVoNDEiLz48Y2lyY2xlIGN4PSI1MC41IiBjeT0iNDYuNSIgcj0iMS41IiBmaWxsPSJ1cmwoI2gpIi8+PHBhdGggc3Ryb2tlPSJ1cmwoI2kpIiBzdHJva2UtbGluZWNhcD0icm91bmQiIGQ9Ik01NS41IDU0LjVoNDEiLz48Y2lyY2xlIGN4PSI1MC41IiBjeT0iNTQuNSIgcj0iMS41IiBmaWxsPSJ1cmwoI2opIi8+PHBhdGggc3Ryb2tlPSJ1cmwoI2spIiBzdHJva2UtbGluZWNhcD0icm91bmQiIGQ9Ik01NS41IDYyLjVoNDEiLz48Y2lyY2xlIGN4PSI1MC41IiBjeT0iNjIuNSIgcj0iMS41IiBmaWxsPSJ1cmwoI2wpIi8+PHBhdGggc3Ryb2tlPSJ1cmwoI20pIiBzdHJva2UtbGluZWNhcD0icm91bmQiIGQ9Ik01NS41IDcwLjVoNDEiLz48Y2lyY2xlIGN4PSI1MC41IiBjeT0iNzAuNSIgcj0iMS41IiBmaWxsPSJ1cmwoI24pIi8+PHBhdGggc3Ryb2tlPSJ1cmwoI28pIiBzdHJva2UtbGluZWNhcD0icm91bmQiIGQ9Ik01NS41IDc4LjVoNDEiLz48Y2lyY2xlIGN4PSI1MC41IiBjeT0iNzguNSIgcj0iMS41IiBmaWxsPSJ1cmwoI3ApIi8+PHBhdGggc3Ryb2tlPSJ1cmwoI3EpIiBzdHJva2UtbGluZWNhcD0icm91bmQiIGQ9Ik01NS41IDg2LjVoNDEiLz48Y2lyY2xlIGN4PSI1MC41IiBjeT0iODYuNSIgcj0iMS41IiBmaWxsPSJ1cmwoI3IpIi8+PHBhdGggc3Ryb2tlPSJ1cmwoI3MpIiBzdHJva2UtbGluZWNhcD0icm91bmQiIGQ9Ik01NS41IDk0LjVoNDEiLz48Y2lyY2xlIGN4PSI1MC41IiBjeT0iOTQuNSIgcj0iMS41IiBmaWxsPSJ1cmwoI3QpIi8+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJrIiB4MT0iODQuNzQ3IiB5MT0iNjIuNzMzIiB4Mj0iODQuNzI1IiB5Mj0iNjQuMzA1IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHN0b3Agc3RvcC1jb2xvcj0iI0ZGRjgwMCIvPjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iIzMwRjlGQyIvPjwvbGluZWFyR3JhZGllbnQ+PGxpbmVhckdyYWRpZW50IGlkPSJhIiB4MT0iMTA0LjU4OCIgeTE9Ii0zOS4zMTkiIHgyPSI0LjEyNSIgeTI9IjEzNS4wMDEiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj48c3RvcCBzdG9wLWNvbG9yPSIjRkZGODAwIi8+PHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjMzBGOUZDIi8+PC9saW5lYXJHcmFkaWVudD48bGluZWFyR3JhZGllbnQgaWQ9ImMiIHgxPSI4Ni45MTIiIHkxPSItNC4yNzYiIHgyPSI2LjgyNSIgeTI9IjgwLjE5MiIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPjxzdG9wIHN0b3AtY29sb3I9IiNGRkY4MDAiLz48c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiMzMEY5RkMiLz48L2xpbmVhckdyYWRpZW50PjxsaW5lYXJHcmFkaWVudCBpZD0iZCIgeDE9Ijc2LjM3NCIgeTE9IjEwOS41OTMiIHgyPSI3MC4yNTEiIHkyPSIxMjAuMjE4IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHN0b3Agc3RvcC1jb2xvcj0iI0ZGRjgwMCIvPjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iIzMwRjlGQyIvPjwvbGluZWFyR3JhZGllbnQ+PGxpbmVhckdyYWRpZW50IGlkPSJlIiB4MT0iODQuNzQ3IiB5MT0iMzguNzMzIiB4Mj0iODQuNzI1IiB5Mj0iNDAuMzA1IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHN0b3Agc3RvcC1jb2xvcj0iI0ZGRjgwMCIvPjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iIzMwRjlGQyIvPjwvbGluZWFyR3JhZGllbnQ+PGxpbmVhckdyYWRpZW50IGlkPSJmIiB4MT0iNTEuMTI1IiB5MT0iMzYuMTk4IiB4Mj0iNDkuMDg0IiB5Mj0iMzkuNzM5IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHN0b3Agc3RvcC1jb2xvcj0iI0ZGRjgwMCIvPjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iIzMwRjlGQyIvPjwvbGluZWFyR3JhZGllbnQ+PGxpbmVhckdyYWRpZW50IGlkPSJnIiB4MT0iODQuNzQ3IiB5MT0iNDYuNzMzIiB4Mj0iODQuNzI1IiB5Mj0iNDguMzA1IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHN0b3Agc3RvcC1jb2xvcj0iI0ZGRjgwMCIvPjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iIzMwRjlGQyIvPjwvbGluZWFyR3JhZGllbnQ+PGxpbmVhckdyYWRpZW50IGlkPSJoIiB4MT0iNTEuMTI1IiB5MT0iNDQuMTk4IiB4Mj0iNDkuMDg0IiB5Mj0iNDcuNzM5IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHN0b3Agc3RvcC1jb2xvcj0iI0ZGRjgwMCIvPjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iIzMwRjlGQyIvPjwvbGluZWFyR3JhZGllbnQ+PGxpbmVhckdyYWRpZW50IGlkPSJpIiB4MT0iODQuNzQ3IiB5MT0iNTQuNzMzIiB4Mj0iODQuNzI1IiB5Mj0iNTYuMzA1IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHN0b3Agc3RvcC1jb2xvcj0iI0ZGRjgwMCIvPjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iIzMwRjlGQyIvPjwvbGluZWFyR3JhZGllbnQ+PGxpbmVhckdyYWRpZW50IGlkPSJqIiB4MT0iNTEuMTI1IiB5MT0iNTIuMTk4IiB4Mj0iNDkuMDg0IiB5Mj0iNTUuNzM5IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHN0b3Agc3RvcC1jb2xvcj0iI0ZGRjgwMCIvPjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iIzMwRjlGQyIvPjwvbGluZWFyR3JhZGllbnQ+PGxpbmVhckdyYWRpZW50IGlkPSJiIiB4MT0iODYuNDk2IiB5MT0iMTA5LjczMyIgeDI9Ijg2LjQ4MSIgeTI9IjExMS4zMDUiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj48c3RvcCBzdG9wLWNvbG9yPSIjRkZGODAwIi8+PHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjMzBGOUZDIi8+PC9saW5lYXJHcmFkaWVudD48bGluZWFyR3JhZGllbnQgaWQ9ImwiIHgxPSI1MS4xMjUiIHkxPSI2MC4xOTgiIHgyPSI0OS4wODQiIHkyPSI2My43MzkiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj48c3RvcCBzdG9wLWNvbG9yPSIjRkZGODAwIi8+PHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjMzBGOUZDIi8+PC9saW5lYXJHcmFkaWVudD48bGluZWFyR3JhZGllbnQgaWQ9Im0iIHgxPSI4NC43NDciIHkxPSI3MC43MzMiIHgyPSI4NC43MjUiIHkyPSI3Mi4zMDUiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj48c3RvcCBzdG9wLWNvbG9yPSIjRkZGODAwIi8+PHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjMzBGOUZDIi8+PC9saW5lYXJHcmFkaWVudD48bGluZWFyR3JhZGllbnQgaWQ9Im4iIHgxPSI1MS4xMjUiIHkxPSI2OC4xOTgiIHgyPSI0OS4wODQiIHkyPSI3MS43MzkiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj48c3RvcCBzdG9wLWNvbG9yPSIjRkZGODAwIi8+PHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjMzBGOUZDIi8+PC9saW5lYXJHcmFkaWVudD48bGluZWFyR3JhZGllbnQgaWQ9Im8iIHgxPSI4NC43NDciIHkxPSI3OC43MzMiIHgyPSI4NC43MjUiIHkyPSI4MC4zMDUiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj48c3RvcCBzdG9wLWNvbG9yPSIjRkZGODAwIi8+PHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjMzBGOUZDIi8+PC9saW5lYXJHcmFkaWVudD48bGluZWFyR3JhZGllbnQgaWQ9InAiIHgxPSI1MS4xMjUiIHkxPSI3Ni4xOTgiIHgyPSI0OS4wODQiIHkyPSI3OS43MzkiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj48c3RvcCBzdG9wLWNvbG9yPSIjRkZGODAwIi8+PHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjMzBGOUZDIi8+PC9saW5lYXJHcmFkaWVudD48bGluZWFyR3JhZGllbnQgaWQ9InEiIHgxPSI4NC43NDciIHkxPSI4Ni43MzMiIHgyPSI4NC43MjUiIHkyPSI4OC4zMDUiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj48c3RvcCBzdG9wLWNvbG9yPSIjRkZGODAwIi8+PHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjMzBGOUZDIi8+PC9saW5lYXJHcmFkaWVudD48bGluZWFyR3JhZGllbnQgaWQ9InIiIHgxPSI1MS4xMjUiIHkxPSI4NC4xOTgiIHgyPSI0OS4wODQiIHkyPSI4Ny43MzkiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj48c3RvcCBzdG9wLWNvbG9yPSIjRkZGODAwIi8+PHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjMzBGOUZDIi8+PC9saW5lYXJHcmFkaWVudD48bGluZWFyR3JhZGllbnQgaWQ9InMiIHgxPSI4NC43NDciIHkxPSI5NC43MzMiIHgyPSI4NC43MjUiIHkyPSI5Ni4zMDUiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj48c3RvcCBzdG9wLWNvbG9yPSIjRkZGODAwIi8+PHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjMzBGOUZDIi8+PC9saW5lYXJHcmFkaWVudD48bGluZWFyR3JhZGllbnQgaWQ9InQiIHgxPSI1MS4xMjUiIHkxPSI5Mi4xOTgiIHgyPSI0OS4wODQiIHkyPSI5NS43MzkiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj48c3RvcCBzdG9wLWNvbG9yPSIjRkZGODAwIi8+PHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjMzBGOUZDIi8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PC9zdmc+");

/***/ }),

/***/ "./src/images/Icons4-min.svg":
/*!***********************************!*\
  !*** ./src/images/Icons4-min.svg ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQ4IiBoZWlnaHQ9IjE0OCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48Y2lyY2xlIGN4PSI3My44MzUiIGN5PSI3My44MzQiIHI9IjcyLjgzNSIgc3Ryb2tlPSJ1cmwoI2EpIiBzdHJva2Utd2lkdGg9IjIiLz48cGF0aCBkPSJNMzYuNTkgODMuNjN2MTMuOTE0aDEuNjE4VjgzLjA2M0g2MS41NHYxNC40ODFoMS42MTZWODMuMDYzaDIyLjY0djE0LjQ4MWgxLjYxNlY4My4wNjNoMjMuMzMydjE0LjQ4MWgxLjYxNlY4My42M2ExLjk4IDEuOTggMCAwIDAtLjU5LTEuNDA2IDIuMDM4IDIuMDM4IDAgMCAwLTEuNDMtLjU4Mkg3NS40NTdWNTEuODI3aC0xLjYxOXYyOS44MTVIMzguNjFjLTEuMTE2IDAtMi4wMjIuODktMi4wMjIgMS45ODhoLjAwMnoiIGZpbGw9IiNmZmYiIHN0cm9rZT0idXJsKCNiKSIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIi8+PHBhdGggZD0iTTc0LjQ3OCA0OS41OTNjNy4xODcgMCAxMy4wMTQtNS43MjkgMTMuMDE0LTEyLjc5NkM4Ny40OTIgMjkuNzI5IDgxLjY2NSAyNCA3NC40NzggMjRjLTcuMTg4IDAtMTMuMDE0IDUuNzMtMTMuMDE0IDEyLjc5N3M1LjgyNiAxMi43OTYgMTMuMDE0IDEyLjc5NnoiIHN0cm9rZT0idXJsKCNjKSIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiLz48cGF0aCBkPSJNMzcuNTA2IDExMy41ODVjMy41OTMgMCA2LjUwNi0yLjg2NSA2LjUwNi02LjM5OCAwLTMuNTMzLTIuOTEzLTYuMzk3LTYuNTA2LTYuMzk3LTMuNTkzIDAtNi41MDYgMi44NjQtNi41MDYgNi4zOTcgMCAzLjUzMyAyLjkxMyA2LjM5OCA2LjUwNiA2LjM5OHoiIHN0cm9rZT0idXJsKCNkKSIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiLz48cGF0aCBkPSJNNjIuNTM0IDExMy42MzFjMy41OTMgMCA2LjUwNi0yLjg2NSA2LjUwNi02LjM5OCAwLTMuNTMzLTIuOTEzLTYuMzk3LTYuNTA2LTYuMzk3LTMuNTkzIDAtNi41MDYgMi44NjQtNi41MDYgNi4zOTcgMCAzLjUzMyAyLjkxMyA2LjM5OCA2LjUwNiA2LjM5OHoiIHN0cm9rZT0idXJsKCNlKSIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiLz48cGF0aCBkPSJNODYuODQyIDExMy41ODVjMy41OTMgMCA2LjUwNi0yLjg2NSA2LjUwNi02LjM5OCAwLTMuNTMzLTIuOTEzLTYuMzk3LTYuNTA2LTYuMzk3LTMuNTk0IDAtNi41MDcgMi44NjQtNi41MDcgNi4zOTcgMCAzLjUzMyAyLjkxMyA2LjM5OCA2LjUwNyA2LjM5OHoiIHN0cm9rZT0idXJsKCNmKSIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiLz48cGF0aCBkPSJNMTExLjQ5NiAxMTMuNTg1YzMuNTkzIDAgNi41MDYtMi44NjUgNi41MDYtNi4zOTggMC0zLjUzMy0yLjkxMy02LjM5Ny02LjUwNi02LjM5Ny0zLjU5MyAwLTYuNTA2IDIuODY0LTYuNTA2IDYuMzk3IDAgMy41MzMgMi45MTMgNi4zOTggNi41MDYgNi4zOTh6IiBzdHJva2U9InVybCgjZykiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIi8+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJhIiB4MT0iMTA0LjU4OCIgeTE9Ii0zOS40ODkiIHgyPSI0LjEyNSIgeTI9IjEzNC44MzEiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj48c3RvcCBzdG9wLWNvbG9yPSIjRkZGODAwIi8+PHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjMzBGOUZDIi8+PC9saW5lYXJHcmFkaWVudD48bGluZWFyR3JhZGllbnQgaWQ9ImIiIHgxPSI5MC4yNTUiIHkxPSIzOS42MDEiIHgyPSI2Ny45NTMiIHkyPSIxMDMuNzQiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj48c3RvcCBzdG9wLWNvbG9yPSIjRkZGODAwIi8+PHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjMzBGOUZDIi8+PC9saW5lYXJHcmFkaWVudD48bGluZWFyR3JhZGllbnQgaWQ9ImMiIHgxPSI3OS44OTgiIHkxPSIxNy4xNTYiIHgyPSI2Mi42MzUiIHkyPSI0Ny42MiIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPjxzdG9wIHN0b3AtY29sb3I9IiNGRkY4MDAiLz48c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiMzMEY5RkMiLz48L2xpbmVhckdyYWRpZW50PjxsaW5lYXJHcmFkaWVudCBpZD0iZCIgeDE9IjQwLjIxNiIgeTE9Ijk3LjM2OCIgeDI9IjMxLjU4NSIgeTI9IjExMi41OTgiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj48c3RvcCBzdG9wLWNvbG9yPSIjRkZGODAwIi8+PHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjMzBGOUZDIi8+PC9saW5lYXJHcmFkaWVudD48bGluZWFyR3JhZGllbnQgaWQ9ImUiIHgxPSI2NS4yNDQiIHkxPSI5Ny40MTQiIHgyPSI1Ni42MTQiIHkyPSIxMTIuNjQ0IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHN0b3Agc3RvcC1jb2xvcj0iI0ZGRjgwMCIvPjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iIzMwRjlGQyIvPjwvbGluZWFyR3JhZGllbnQ+PGxpbmVhckdyYWRpZW50IGlkPSJmIiB4MT0iODkuNTUyIiB5MT0iOTcuMzY4IiB4Mj0iODAuOTIxIiB5Mj0iMTEyLjU5OCIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPjxzdG9wIHN0b3AtY29sb3I9IiNGRkY4MDAiLz48c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiMzMEY5RkMiLz48L2xpbmVhckdyYWRpZW50PjxsaW5lYXJHcmFkaWVudCBpZD0iZyIgeDE9IjExNC4yMDYiIHkxPSI5Ny4zNjgiIHgyPSIxMDUuNTc1IiB5Mj0iMTEyLjU5OCIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPjxzdG9wIHN0b3AtY29sb3I9IiNGRkY4MDAiLz48c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiMzMEY5RkMiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48L3N2Zz4=");

/***/ }),

/***/ "./src/images/Icons5-min.svg":
/*!***********************************!*\
  !*** ./src/images/Icons5-min.svg ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQ4IiBoZWlnaHQ9IjE0OCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48Y2lyY2xlIGN4PSI3My44MzUiIGN5PSI3My45OTYiIHI9IjcyLjgzNSIgc3Ryb2tlPSJ1cmwoI2EpIiBzdHJva2Utd2lkdGg9IjIiLz48cGF0aCBzdHJva2U9InVybCgjYikiIHN0cm9rZS13aWR0aD0iMiIgZD0iTTI0LjQyMSA0NS42NDdoODkuMzkzIi8+PHBhdGggZD0iTTExNCA2MS41VjQyYTQgNCAwIDAgMC00LTRIMjhhNCA0IDAgMCAwLTQgNHY1M2E0IDQgMCAwIDAgNCA0aDMzIiBzdHJva2U9InVybCgjYykiIHN0cm9rZS13aWR0aD0iMiIvPjxjaXJjbGUgY3g9IjMwLjA5OCIgY3k9IjQyLjQwNCIgcj0iLjkxNCIgc3Ryb2tlPSJ1cmwoI2QpIi8+PGNpcmNsZSBjeD0iMzQuNjI1IiBjeT0iNDIuNDA0IiByPSIuOTE0IiBzdHJva2U9InVybCgjZSkiLz48Y2lyY2xlIGN4PSIzOS4xNTEiIGN5PSI0Mi40MDQiIHI9Ii45MTQiIHN0cm9rZT0idXJsKCNmKSIvPjxwYXRoIGQ9Ik03OS4wOTcgMTA4LjQ5NXYyLjAxNmMwIDEuMjgzLTEuMDUgMi4zODItMi4yNzcgMi4zODJoLTguNDkzYy0xLjMxMyAwLTIuMjc2LTEuMDk5LTIuMjc2LTIuMzgydi04Ljk3OWMwLTUuNDA1LS43ODktMTQuMjkyIDMuMDY0LTE4LjQxNWgtMi41MzljLS44NzUgMC0xLjU3Ni0uNzMzLTEuNTc2LTEuNjV2LTEuNjVjMC0uOTE1Ljk2My0xLjY0OCAxLjc1LTEuODMxbDUuNzgtLjgyNSAzLjg1MS03LjUxMmMxLjA1LTEuNTU4IDMuNDE1LTMuMjA3IDUuMjU0LTMuNDgyIDEwLjA2OC0xLjU1OCAyMC41NzUtMS41NTggMzAuNzMgMCAxLjgzOS4yNzUgNC4yMDMgMS45MjQgNS4yNTQgMy40ODJsMy44NTIgNy41MTIgNS43NzguODI1Yy43ODguMTgyIDEuNzUxLjkxNSAxLjc1MSAxLjgzMnYxLjY1YzAgLjkxNS0uNyAxLjY0OS0xLjU3NiAxLjY0OWgtMi41MzljMy44NTIgNC4xMjMgMy4wNjQgMTMuMDEgMy4wNjQgMTguNDE1djguOTc5YzAgMS4yODMtMS4wNSAyLjM4Mi0yLjI3NiAyLjM4MmgtOC40OTNjLTEuMjI2IDAtMi4yNzctMS4wOTktMi4yNzctMi4zODJ2LTIuMDE2YTI1OS42NzIgMjU5LjY3MiAwIDAgMS0zNS44MSAwaC4wMDN6bTIuNjI2LTQxLjUwM2MtMS42NjUuMTgyLTMuNzY2IDEuNzQtNC43MjggMy4xMTVsLTQuMDI4IDcuNzg3LTYuMTI4LjkxNWMtLjI2MyAwLS41MjYuMTgzLS43ODguNDU5LS4xNzUuMTgzLS4yNjMuMzY2LS4yNjMuNTV2MS42NWMwIC40NTguMzUuODI0Ljc4OC44MjRoNC4zNzhsLS44NzUuOTE2Yy00LjIwMyA0LjEyMi0zLjI0IDEyLjU1MS0zLjI0IDE4LjMyMy0uMDg3IDIuODQtLjA4NyA1Ljc3My0uMDg3IDguOTc5IDAgLjgyNC43IDEuNTU3IDEuNTc2IDEuNTU3aDguNDkzYy43ODggMCAxLjQ4OC0uNzMzIDEuNDg4LTEuNTU3di0yLjg0YzEyLjUyLjgyNSAyNC44NjYuODI1IDM3LjM4NSAwdjIuODRjMCAuODI0LjcwMSAxLjU1NyAxLjQ4OSAxLjU1N2g4LjQ5M2MuODc1IDAgMS40ODgtLjczMyAxLjQ4OC0xLjU1N3YtOC45NzljMC01Ljc3Mi45NjMtMTQuMi0zLjIzOS0xOC4zMjNhNC4yNTMgNC4yNTMgMCAwIDEtLjg3NS0uOTE2aDQuMzc3Yy40MzggMCAuNzg5LS4zNjYuNzg5LS44MjV2LTEuNjVjMC0uMTgyLS4wODgtLjM2NS0uMjYzLS41NS0uMjYyLS4yNzQtLjUyNi0uNDU3LS44NzUtLjQ1N2wtNi4wNDEtLjkxNi00LjAyNy03Ljc4N2MtLjk2My0xLjM3NC0zLjE1Mi0yLjkzMy00LjgxNi0zLjExNS05Ljk4LTEuNjUtMjAuNC0xLjY1LTMwLjQ2OCAwaC0uMDA0em0zMC4yMDUgMy41NzNjMS4wNTEuMzY3IDEuNzUxLjczMyAyLjM2NCAxLjc0bDMuMTUxIDYuNTA1SDc2LjU1N2wzLjE1MS02LjUwNWMuNjEzLTEuMDA3IDEuMzEzLTEuMzczIDIuMzY0LTEuNzRhMTI1LjE1NyAxMjUuMTU3IDAgMCAxIDI5Ljg1NSAwaC4wMDF6bTYuNzQxIDguOTc4LTMuNzY1LTcuNjA0Yy0uNy0xLjE5MS0xLjU3Ni0xLjc0LTIuODg5LTIuMTA3LTkuMjgtMS40NjUtMjAuNzUtMS40NjUtMzAuMDMgMC0xLjMxMy4zNjctMi4yNzcuOTE2LTIuOTc3IDIuMTA3bC0zLjY3NyA3LjYwNGg0My4zMzh6bS0uNDM4IDEwLjk5NGMtMi41MzkgMC00LjU1MiAyLjEwNy00LjU1MiA0LjY3M3MyLjAxMyA0LjY3MyA0LjU1MiA0LjY3M2MyLjUzOSAwIDQuNDY2LTIuMTA3IDQuNDY2LTQuNjczcy0yLjAxMy00LjY3My00LjQ2Ni00LjY3M3ptMCAuODI1YzIuMDE0IDAgMy42NzggMS43NDEgMy42NzggMy44NDggMCAyLjEwNy0xLjY2NCAzLjk0LTMuNjc4IDMuOTQtMi4wMTMgMC0zLjc2NS0xLjc0MS0zLjc2NS0zLjk0IDAtMi4xOTggMS42NjQtMy44NDggMy43NjUtMy44NDh6bS00Mi40NjItLjgyNWMyLjQ1IDAgNC40NjUgMi4xMDcgNC40NjUgNC42NzNzLTIuMDEzIDQuNjczLTQuNDY1IDQuNjczYy0yLjQ1MyAwLTQuNDY2LTIuMTA3LTQuNDY2LTQuNjczczIuMDE0LTQuNjczIDQuNDY2LTQuNjczem0wIC44MjVjLTIuMDE0IDAtMy42NzggMS43NDEtMy42NzggMy44NDggMCAyLjEwNyAxLjY2MyAzLjk0IDMuNjc4IDMuOTQgMi4wMTQgMCAzLjc2NS0xLjc0MSAzLjc2NS0zLjk0IDAtMi4xOTgtMS42NjQtMy44NDgtMy43NjUtMy44NDh6IiBzdHJva2U9InVybCgjZykiLz48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImEiIHgxPSIxMDQuNTg4IiB5MT0iLTM5LjMyOCIgeDI9IjQuMTI1IiB5Mj0iMTM0Ljk5MiIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPjxzdG9wIHN0b3AtY29sb3I9IiNGRkY4MDAiLz48c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiMzMEY5RkMiLz48L2xpbmVhckdyYWRpZW50PjxsaW5lYXJHcmFkaWVudCBpZD0iYiIgeDE9Ijg3LjczNSIgeTE9IjQ2LjM4IiB4Mj0iODcuNzI1IiB5Mj0iNDcuOTUyIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHN0b3Agc3RvcC1jb2xvcj0iI0ZGRjgwMCIvPjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iIzMwRjlGQyIvPjwvbGluZWFyR3JhZGllbnQ+PGxpbmVhckdyYWRpZW50IGlkPSJjIiB4MT0iODcuNzQ0IiB5MT0iMjEuNjg4IiB4Mj0iNTUuMjM0IiB5Mj0iMTA0LjkxNSIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPjxzdG9wIHN0b3AtY29sb3I9IiNGRkY4MDAiLz48c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiMzMEY5RkMiLz48L2xpbmVhckdyYWRpZW50PjxsaW5lYXJHcmFkaWVudCBpZD0iZCIgeDE9IjMwLjY4NyIgeTE9IjQwLjIzMyIgeDI9IjI4Ljc2MyIgeTI9IjQzLjU3MiIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPjxzdG9wIHN0b3AtY29sb3I9IiNGRkY4MDAiLz48c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiMzMEY5RkMiLz48L2xpbmVhckdyYWRpZW50PjxsaW5lYXJHcmFkaWVudCBpZD0iZSIgeDE9IjM1LjIxNCIgeTE9IjQwLjIzMyIgeDI9IjMzLjI4OSIgeTI9IjQzLjU3MiIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPjxzdG9wIHN0b3AtY29sb3I9IiNGRkY4MDAiLz48c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiMzMEY5RkMiLz48L2xpbmVhckdyYWRpZW50PjxsaW5lYXJHcmFkaWVudCBpZD0iZiIgeDE9IjM5Ljc0IiB5MT0iNDAuMjMzIiB4Mj0iMzcuODE1IiB5Mj0iNDMuNTcyIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHN0b3Agc3RvcC1jb2xvcj0iI0ZGRjgwMCIvPjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iIzMwRjlGQyIvPjwvbGluZWFyR3JhZGllbnQ+PGxpbmVhckdyYWRpZW50IGlkPSJnIiB4MT0iMTEwLjMyOSIgeTE9IjUyLjE5MSIgeDI9IjgyLjk0MSIgeTI9IjExNS42OTUiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj48c3RvcCBzdG9wLWNvbG9yPSIjRkZGODAwIi8+PHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjMzBGOUZDIi8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PC9zdmc+");

/***/ }),

/***/ "./src/images/Images-min.svg":
/*!***********************************!*\
  !*** ./src/images/Images-min.svg ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/static/Images-min-a817da53d4c6380ececa74ecf5a00e39.svg");

/***/ }),

/***/ "./src/images/Images2.webp":
/*!*********************************!*\
  !*** ./src/images/Images2.webp ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/static/Images2-2f0617deb9a26fbd80c93189b3ecd9d4.webp");

/***/ }),

/***/ "./src/images/Layer1v2.webp":
/*!**********************************!*\
  !*** ./src/images/Layer1v2.webp ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/static/Layer1v2-34afff4a5aefea152ccd7f51cfb8b453.webp");

/***/ }),

/***/ "./src/images/Layer2.svg":
/*!*******************************!*\
  !*** ./src/images/Layer2.svg ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/static/Layer2-b301f249e0cf38297f9014abafef5532.svg");

/***/ }),

/***/ "./src/images/Logo.svg":
/*!*****************************!*\
  !*** ./src/images/Logo.svg ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjI4IiBoZWlnaHQ9IjMxIiB2aWV3Qm94PSIwIDAgMjI4IDMxIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8ZyBjbGlwLXBhdGg9InVybCgjY2xpcDBfMjlfOTYpIj4KPHBhdGggZD0iTTU3LjQyOTggMTUuMTJDNTcuNDI5OCAxOS41MyA1NC4xMjk4IDIzLjEzIDQ5LjczOTggMjMuNDlINDkuMDU5OEM0NC40Mzk4IDIzLjQ5IDQwLjY4OTggMTkuNzMgNDAuNjg5OCAxNS4xMlYwSDM0LjAwOThWMTUuMTRDMzQuMDc5OCAxOS4xNCAzNS42Nzk4IDIyLjg5IDM4LjUwOTggMjUuNjlDNDEuMzM5OCAyOC40OSA0NS4wODk4IDMwLjA0IDQ5LjA2OTggMzAuMDRDNTMuMDQ5OCAzMC4wNCA1Ni44Mzk4IDI4LjUgNTkuNjc5OCAyNS42OUM2Mi41MTk4IDIyLjg5IDY0LjExOTggMTkuMTQgNjQuMTg5OCAxNS4xMlYwSDU3LjQzOThWMTUuMTJINTcuNDI5OFoiIGZpbGw9IndoaXRlIi8+CjxwYXRoIGQ9Ik02OC4xMzk4IDE1LjEyQzY4LjEzOTggMjMuNDIgNzQuODg5OCAzMC4xOCA4My4xOTk4IDMwLjE4SDg0LjM3OThWMjMuNUg4My4xOTk4Qzc4LjU3OTggMjMuNSA3NC44Mjk4IDE5Ljc0IDc0LjgyOTggMTUuMTNWNi44MTAwMUg4NC4zODk4VjAuMDcwMDA3M0g2OC4xNDk4VjE1LjEzTDY4LjEzOTggMTUuMTJaIiBmaWxsPSJ3aGl0ZSIvPgo8cGF0aCBkPSJNMTMzLjU2IDBDMTI1LjI2IDAgMTE4LjUgNi43OCAxMTguNSAxNS4xMlYzMC4xOEgxMjUuMThWMTUuMTJDMTI1LjE4IDEwLjUgMTI4Ljk0IDYuNzUgMTMzLjU1IDYuNzVIMTM0LjczVjBIMTMzLjU1SDEzMy41NloiIGZpbGw9IndoaXRlIi8+CjxwYXRoIGQ9Ik0xMDAuNzggMEM5Mi40Mzk4IDAgODUuNjU5OCA2Ljc4IDg1LjY1OTggMTUuMTJDODUuNjU5OCAyMy40NiA5Mi40Mzk4IDMwLjE4IDEwMC43OCAzMC4xOEMxMDkuMTIgMzAuMTggMTE1Ljg0IDIzLjQzIDExNS44NCAxNS4xMkMxMTUuODQgNi44MSAxMDkuMDggMCAxMDAuNzggMFpNMTAwLjc4IDIzLjVDOTYuMTI5OCAyMy41IDkyLjMzOTggMTkuNzQgOTIuMzM5OCAxNS4xM0M5Mi4zMzk4IDEwLjUyIDk2LjEyOTggNi43NiAxMDAuNzggNi43NkMxMDUuNDMgNi43NiAxMDkuMTUgMTAuNTIgMTA5LjE1IDE1LjEzQzEwOS4xNSAxOS43NCAxMDUuMzkgMjMuNSAxMDAuNzggMjMuNVoiIGZpbGw9IndoaXRlIi8+CjxwYXRoIGQ9Ik0xNTAuNDIgMEMxNDIuMDggMCAxMzUuMyA2Ljc4IDEzNS4zIDE1LjEyQzEzNS4zIDIzLjQ2IDE0Mi4wOCAzMC4xOCAxNTAuNDIgMzAuMThDMTU4Ljc2IDMwLjE4IDE2NS40OCAyMy40MyAxNjUuNDggMTUuMTJDMTY1LjQ4IDYuODEgMTU4LjczIDAgMTUwLjQyIDBaTTE1MC40MiAyMy41QzE0NS43NyAyMy41IDE0MS45OCAxOS43NCAxNDEuOTggMTUuMTNDMTQxLjk4IDEwLjUyIDE0NS43NyA2Ljc2IDE1MC40MiA2Ljc2QzE1NS4wNyA2Ljc2IDE1OC43OSAxMC41MiAxNTguNzkgMTUuMTNDMTU4Ljc5IDE5Ljc0IDE1NS4wMyAyMy41IDE1MC40MiAyMy41WiIgZmlsbD0id2hpdGUiLz4KPHBhdGggZD0iTTE4My4yNSAwQzE3NC45MSAwIDE2OC4xMyA2Ljc4IDE2OC4xMyAxNS4xMkMxNjguMTMgMjMuNDYgMTc0LjkxIDMwLjE4IDE4My4yNSAzMC4xOEMxOTEuNTkgMzAuMTggMTk4LjMxIDIzLjQzIDE5OC4zMSAxNS4xMkMxOTguMzEgNi44MSAxOTEuNTYgMCAxODMuMjUgMFpNMTgzLjI1IDIzLjVDMTc4LjYgMjMuNSAxNzQuODEgMTkuNzQgMTc0LjgxIDE1LjEzQzE3NC44MSAxMC41MiAxNzguNiA2Ljc2IDE4My4yNSA2Ljc2QzE4Ny45IDYuNzYgMTkxLjYyIDEwLjUyIDE5MS42MiAxNS4xM0MxOTEuNjIgMTkuNzQgMTg3Ljg2IDIzLjUgMTgzLjI1IDIzLjVaIiBmaWxsPSJ3aGl0ZSIvPgo8cGF0aCBkPSJNMjE3Ljk1IDYuODEwMDFWMC4wNzAwMDczSDIwMS43MVYxNS4xM0MyMDEuNzEgMjMuNDMgMjA4LjQ2IDMwLjE5IDIxNi43NyAzMC4xOUgyMTcuOTVWMjMuNTFIMjE2Ljc3QzIxMi4xNSAyMy41MSAyMDguNCAxOS43NSAyMDguNCAxNS4xNFY2LjgxMDAxSDIxNy45NkgyMTcuOTVaIiBmaWxsPSJ3aGl0ZSIvPgo8cGF0aCBkPSJNMjIwLjg4IDI3LjI0QzIyMC44OCAyNS4yMSAyMjIuMzcgMjMuOCAyMjQuMiAyMy44QzIyNi4wMyAyMy44IDIyNy41IDI1LjIxIDIyNy41IDI3LjI0QzIyNy41IDI5LjI3IDIyNi4wMSAzMC42OCAyMjQuMiAzMC42OEMyMjIuMzkgMzAuNjggMjIwLjg4IDI5LjI3IDIyMC44OCAyNy4yNFpNMjI2Ljc0IDI3LjI0QzIyNi43NCAyNS42MiAyMjUuNjUgMjQuNDggMjI0LjE5IDI0LjQ4QzIyMi43MyAyNC40OCAyMjEuNjMgMjUuNjEgMjIxLjYzIDI3LjI0QzIyMS42MyAyOC44NyAyMjIuNzMgMjkuOTggMjI0LjE5IDI5Ljk4QzIyNS42NSAyOS45OCAyMjYuNzQgMjguODggMjI2Ljc0IDI3LjI0VjI3LjI0Wk0yMjIuODkgMjUuNDZIMjI0LjI3QzIyNS4wMiAyNS40NiAyMjUuNjUgMjUuNzcgMjI1LjY1IDI2LjU5QzIyNS42NSAyNyAyMjUuNDEgMjcuMzkgMjI1IDI3LjU0TDIyNS43OCAyOC45NUgyMjQuOTJMMjI0LjM0IDI3Ljc4SDIyMy42OFYyOC45NUgyMjIuODlWMjUuNDZWMjUuNDZaTTIyNC4xIDI3LjE5QzIyNC41NCAyNy4xOSAyMjQuNzkgMjYuOTggMjI0Ljc5IDI2LjYzQzIyNC43OSAyNi4zMiAyMjQuNiAyNi4wOSAyMjQuMTMgMjYuMDlIMjIzLjY4VjI3LjE5SDIyNC4xVjI3LjE5WiIgZmlsbD0id2hpdGUiLz4KPHBhdGggZD0iTTU3LjQyOTggMTUuMTJDNTcuNDI5OCAxOS41MyA1NC4xMjk4IDIzLjEzIDQ5LjczOTggMjMuNDlINDkuMDU5OEM0NC40Mzk4IDIzLjQ5IDQwLjY4OTggMTkuNzMgNDAuNjg5OCAxNS4xMlYwSDM0LjAwOThWMTUuMTRDMzQuMDc5OCAxOS4xNCAzNS42Nzk4IDIyLjg5IDM4LjUwOTggMjUuNjlDNDEuMzM5OCAyOC40OSA0NS4wODk4IDMwLjA0IDQ5LjA2OTggMzAuMDRDNTMuMDQ5OCAzMC4wNCA1Ni44Mzk4IDI4LjUgNTkuNjc5OCAyNS42OUM2Mi41MTk4IDIyLjg5IDY0LjExOTggMTkuMTQgNjQuMTg5OCAxNS4xMlYwSDU3LjQzOThWMTUuMTJINTcuNDI5OFoiIGZpbGw9IndoaXRlIi8+CjxwYXRoIGQ9Ik02OC4xMzk4IDE1LjEyQzY4LjEzOTggMjMuNDIgNzQuODg5OCAzMC4xOCA4My4xOTk4IDMwLjE4SDg0LjM3OThWMjMuNUg4My4xOTk4Qzc4LjU3OTggMjMuNSA3NC44Mjk4IDE5Ljc0IDc0LjgyOTggMTUuMTNWNi44MTAwMUg4NC4zODk4VjAuMDcwMDA3M0g2OC4xNDk4VjE1LjEzTDY4LjEzOTggMTUuMTJaIiBmaWxsPSJ3aGl0ZSIvPgo8cGF0aCBkPSJNMTMzLjU2IDBDMTI1LjI2IDAgMTE4LjUgNi43OCAxMTguNSAxNS4xMlYzMC4xOEgxMjUuMThWMTUuMTJDMTI1LjE4IDEwLjUgMTI4Ljk0IDYuNzUgMTMzLjU1IDYuNzVIMTM0LjczVjBIMTMzLjU1SDEzMy41NloiIGZpbGw9IndoaXRlIi8+CjxwYXRoIGQ9Ik0xMDAuNzggMEM5Mi40Mzk4IDAgODUuNjU5OCA2Ljc4IDg1LjY1OTggMTUuMTJDODUuNjU5OCAyMy40NiA5Mi40Mzk4IDMwLjE4IDEwMC43OCAzMC4xOEMxMDkuMTIgMzAuMTggMTE1Ljg0IDIzLjQzIDExNS44NCAxNS4xMkMxMTUuODQgNi44MSAxMDkuMDggMCAxMDAuNzggMFpNMTAwLjc4IDIzLjVDOTYuMTI5OCAyMy41IDkyLjMzOTggMTkuNzQgOTIuMzM5OCAxNS4xM0M5Mi4zMzk4IDEwLjUyIDk2LjEyOTggNi43NiAxMDAuNzggNi43NkMxMDUuNDMgNi43NiAxMDkuMTUgMTAuNTIgMTA5LjE1IDE1LjEzQzEwOS4xNSAxOS43NCAxMDUuMzkgMjMuNSAxMDAuNzggMjMuNVoiIGZpbGw9IndoaXRlIi8+CjxwYXRoIGQ9Ik0xNTAuNDIgMEMxNDIuMDggMCAxMzUuMyA2Ljc4IDEzNS4zIDE1LjEyQzEzNS4zIDIzLjQ2IDE0Mi4wOCAzMC4xOCAxNTAuNDIgMzAuMThDMTU4Ljc2IDMwLjE4IDE2NS40OCAyMy40MyAxNjUuNDggMTUuMTJDMTY1LjQ4IDYuODEgMTU4LjczIDAgMTUwLjQyIDBaTTE1MC40MiAyMy41QzE0NS43NyAyMy41IDE0MS45OCAxOS43NCAxNDEuOTggMTUuMTNDMTQxLjk4IDEwLjUyIDE0NS43NyA2Ljc2IDE1MC40MiA2Ljc2QzE1NS4wNyA2Ljc2IDE1OC43OSAxMC41MiAxNTguNzkgMTUuMTNDMTU4Ljc5IDE5Ljc0IDE1NS4wMyAyMy41IDE1MC40MiAyMy41WiIgZmlsbD0id2hpdGUiLz4KPHBhdGggZD0iTTE4My4yNSAwQzE3NC45MSAwIDE2OC4xMyA2Ljc4IDE2OC4xMyAxNS4xMkMxNjguMTMgMjMuNDYgMTc0LjkxIDMwLjE4IDE4My4yNSAzMC4xOEMxOTEuNTkgMzAuMTggMTk4LjMxIDIzLjQzIDE5OC4zMSAxNS4xMkMxOTguMzEgNi44MSAxOTEuNTYgMCAxODMuMjUgMFpNMTgzLjI1IDIzLjVDMTc4LjYgMjMuNSAxNzQuODEgMTkuNzQgMTc0LjgxIDE1LjEzQzE3NC44MSAxMC41MiAxNzguNiA2Ljc2IDE4My4yNSA2Ljc2QzE4Ny45IDYuNzYgMTkxLjYyIDEwLjUyIDE5MS42MiAxNS4xM0MxOTEuNjIgMTkuNzQgMTg3Ljg2IDIzLjUgMTgzLjI1IDIzLjVaIiBmaWxsPSJ3aGl0ZSIvPgo8cGF0aCBkPSJNMjE3Ljk1IDYuODEwMDFWMC4wNzAwMDczSDIwMS43MVYxNS4xM0MyMDEuNzEgMjMuNDMgMjA4LjQ2IDMwLjE5IDIxNi43NyAzMC4xOUgyMTcuOTVWMjMuNTFIMjE2Ljc3QzIxMi4xNSAyMy41MSAyMDguNCAxOS43NSAyMDguNCAxNS4xNFY2LjgxMDAxSDIxNy45NkgyMTcuOTVaIiBmaWxsPSJ3aGl0ZSIvPgo8cGF0aCBkPSJNMjIwLjg4IDI3LjI0QzIyMC44OCAyNS4yMSAyMjIuMzcgMjMuOCAyMjQuMiAyMy44QzIyNi4wMyAyMy44IDIyNy41IDI1LjIxIDIyNy41IDI3LjI0QzIyNy41IDI5LjI3IDIyNi4wMSAzMC42OCAyMjQuMiAzMC42OEMyMjIuMzkgMzAuNjggMjIwLjg4IDI5LjI3IDIyMC44OCAyNy4yNFpNMjI2Ljc0IDI3LjI0QzIyNi43NCAyNS42MiAyMjUuNjUgMjQuNDggMjI0LjE5IDI0LjQ4QzIyMi43MyAyNC40OCAyMjEuNjMgMjUuNjEgMjIxLjYzIDI3LjI0QzIyMS42MyAyOC44NyAyMjIuNzMgMjkuOTggMjI0LjE5IDI5Ljk4QzIyNS42NSAyOS45OCAyMjYuNzQgMjguODggMjI2Ljc0IDI3LjI0VjI3LjI0Wk0yMjIuODkgMjUuNDZIMjI0LjI3QzIyNS4wMiAyNS40NiAyMjUuNjUgMjUuNzcgMjI1LjY1IDI2LjU5QzIyNS42NSAyNyAyMjUuNDEgMjcuMzkgMjI1IDI3LjU0TDIyNS43OCAyOC45NUgyMjQuOTJMMjI0LjM0IDI3Ljc4SDIyMy42OFYyOC45NUgyMjIuODlWMjUuNDZWMjUuNDZaTTIyNC4xIDI3LjE5QzIyNC41NCAyNy4xOSAyMjQuNzkgMjYuOTggMjI0Ljc5IDI2LjYzQzIyNC43OSAyNi4zMiAyMjQuNiAyNi4wOSAyMjQuMTMgMjYuMDlIMjIzLjY4VjI3LjE5SDIyNC4xVjI3LjE5WiIgZmlsbD0id2hpdGUiLz4KPHBhdGggb3BhY2l0eT0iMC41IiBkPSJNMjMuNDk5OCAxNS4xMlYyNy42MkMyMi45Mzk4IDI4IDIyLjM0OTggMjguMzQgMjEuNzM5OCAyOC42NEwyMy4yMjk4IDE3LjI0QzIzLjI2OTggMTcuMSAyMy4yOTk4IDE2Ljk1IDIzLjMzOTggMTYuOEMyMy40MDk4IDE2LjQzIDIzLjQ2OTggMTYuMDcgMjMuNDg5OCAxNS42OUMyMy40OTk4IDE1LjUgMjMuNTA5OCAxNS4zIDIzLjUwOTggMTUuMTFMMjMuNDk5OCAxNS4xMloiIGZpbGw9IndoaXRlIi8+CjxwYXRoIGQ9Ik0zMC4xNzk4IDE1LjEyVjMwLjE4SDIzLjQ5OThWMTUuMTJDMjMuNDk5OCAxMC41MSAxOS43Mzk4IDYuNzUgMTUuMTE5OCA2Ljc1QzEwLjQ5OTggNi43NSA2LjY3OTc2IDEwLjUxIDYuNjc5NzYgMTUuMTJDNi42Nzk3NiAxOS43MyAxMC40Njk4IDIzLjUgMTUuMTE5OCAyMy41QzE4Ljk5OTggMjMuNSAyMi4yNjk4IDIwLjg0IDIzLjIxOTggMTcuMjVMMjEuNzI5OCAyOC42NUMxOS43Mjk4IDI5LjYzIDE3LjQ4OTggMzAuMTggMTUuMTE5OCAzMC4xOEM2Ljc4OTc2IDMwLjE4IC0wLjAwMDI0NDE0MSAyMy40MyAtMC4wMDAyNDQxNDEgMTUuMTJDLTAuMDAwMjQ0MTQxIDYuODEgNi43ODk3NiAwIDE1LjExOTggMEMyMy40NDk4IDAgMzAuMTc5OCA2Ljc4IDMwLjE3OTggMTUuMTJaIiBmaWxsPSJ3aGl0ZSIvPgo8L2c+CjxkZWZzPgo8Y2xpcFBhdGggaWQ9ImNsaXAwXzI5Xzk2Ij4KPHJlY3Qgd2lkdGg9IjIyNy41IiBoZWlnaHQ9IjMwLjY4IiBmaWxsPSJ3aGl0ZSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTAuMDAwMjQ0MTQxKSIvPgo8L2NsaXBQYXRoPgo8L2RlZnM+Cjwvc3ZnPgo=");

/***/ }),

/***/ "./src/images/Logo2.webp":
/*!*******************************!*\
  !*** ./src/images/Logo2.webp ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/webp;base64,UklGRogPAABXRUJQVlA4THsPAAAvcMQOEB9hIG2b+De97Tcx//OvsG0bNLR2TD9AgOSEAwgEAGBBPIABARwA4AAUDMDjXzjgHw+Mtm2FjSSJbmbESJ5wEtIYJJBFGP7/Jy3efQ+Fy07HxOoV0X9akG3VraOF7yMaObNBcDgcQHJ+1V9z+m/1PqV//Zf6GU7/90bxP//7HzRxOfW/ajBrKSX9EuG02EPEpbKn9wo9LV+5lPK1jo+Yp9Pn5Jaw+UfM0PnTLcu6vrPYUkowzUylvF1olwtNyyMO6x83RyeSofTO4qt6NTQ2mlDeL8y1lB9LplIl10KfyhvGtfxgojypWvKzpnpMkN8rbPnRRNlU1y0rPI3YQT+9V2w/nKiOtAuvJTGIVB8dlX2r0IWSt3me7c8jSl3EZ9lc6+nUm8WpFKbr+olEDSQgPcrCSrNW7xaWcFPq5xLVzaTqooNmBcbvbSO+AejPZcul5NWfvk/Y2W9fJW/r1Dct0/Th6+trDRZZjf6EEqfY3JVwHnd/glJOdT7vecBS5TPn/WHLQ04tZ1Hpp0x1/LzzoKs+S7LfL2yzbbljHZVUcNp8D1juOoygml7QXHgKc4gZOz1LEpOW4yqq7CApG4frctTq/3GYcmFSMo8gTLjbiUmOwqbVYKRf5lrSRCzNMJcyPhJtU+/RKH0/jdjbY+gnvyweOX+nTzbpnUoA9GKJjvMnn067KJDO2PHsdyH7JakUUYh4zTuQn3txTHc3khNoIECvFuT+pwe9FEFy3y/s9iGsYzlO52GYQh3qBcQ6pUwyBZF+peI14/m4x0M8GzaRWfhBHcO0AettaVmyyeywbc8QQanwKRJRBeUHN7EElriAcplErcOuoEMa6YWtc5k0Asg3fO6XHx70tYiSewBhluOjnk1iIsAjBbkHNlWZQoi//vBjrfGxkJ6F0rXDm4Lk9IlzNlsp43HwTixLX6DFMruBzh1zxsrItpgyvzAqn3Chpf1ZpR6ENNevr62+KYHIezxNy1qFPP2Z8X992L62NbiTFD2Fe27CJBllGJqRqZcGWLe74PWeyyaAm/t8kbhNbLPz3yZsEKzPu0Ah4+5+GYIgNPwBkL3jWkbeDOWbeXSUugA8Z83EWN4i9a2U/jAELwS4pCXALUsjY34z32Vhyvi6ELYdNg6RBqAvCiOeKE55WpneQoL2ME7KO7aSOKs0m4uR46i07ukyFSk38wDCNDan9Isxj54gMChJU0RftniRVVkeH3UmpxGvDjcSL+GDNJjJ2inW4SZCcjBpRNIsfq5S3jXVEi6EudLs6/xEFlXJsaA5zKKv6K2dgiiIdzNSZlhWH6+D825ZGEfT8nzw/YKvzJEX+LcsJokDG2blO6/KDMqz6aSYTLioZ4vJArgrbdI3Clu4aMiV7ULybgs5UDsdKfCLGpiUOpElu+nHR3WxWtTM7OOSfOHLEQekeFaEKG+EgYOmFV5DwsAMMA1LlyuLRTSmTlAcaWDWNg011NwKEPjJr4OhvqrYJPUcTqJVGrxIhiOJhxkmSSXLs1lmIWBMqp8uS2lIw6MIA+IGUZYHGcNezyiSL1us0EJZjP5c1nX1Zwb96Xcxlrvr3FYN05uheY4XLbinS/4jv6Az9BeTPoAyHgq0aSMEHYrEdlneny1XzY1PE6b4V0ovMS2RYZJYJXlbSxqTBaqQW9DyskWUvAiLPMFni84txAcQ5gF3cZvAT7HWdgTJDw1x9RchCIfLev6ATLlE71wsySKmnIN3fquG+kjf7FxIJZlmGtYXiPw86tMwBaOO4NYfC8jIAoGHRv6YzNWqfrWYYl8oWpm2RiVTNTP2KKcNtDsndo24Gd9vGaRYCQm4XU8XW5rS3jTP3yvsBiJtDTfQAvDd/xnhuPnvhrlUhC+ho2MVR1nyRbOz965E0uhtSvpIcK8bhM60lxiHZnzdAR+PY8GHajMsqGdW0NVFyqUeBL5OsOHJ2xwxrFlKYY4bKf9EpdpqD1+msVKWFMLGRlJPBbDFmBsGKTlGLBnD+G/d82Vp4/wAwgZoE4ZW+OY4EshXr5DR9O04GMIby1jjUJPXWy3GwCz0xTWhT5pXssiChYxx2tSxDNXLH49nwYeAgWKykEQmWRNspff6mnB7CtRcVCpG5E7W68k6j2B+xoEMBq7YOyAVeaCXmCEN3JKMkbRz3D1epH5cHqtCCEAyiyngPc+XrQ33AMJG2Lz1kfR7iyfUVSdgK3hupi+eacj9zoqbqiah7RvsmWJo4ZT5NduGW3go9ZXE3FaQAhw11ZfQHgUjykHgIVHes8T9tzs9pbZ7XsK2gnR+JVsqTnzUwWOs1KBQAzTz1xiTOurjwoxoJgKNc9ZjER9cfkpkWcHiwydMbmN5AGEetkZ1AExbXggOm8y6QQ/NrNzwJcUqdzMXD3e7mMA4ZQ1UeV9EX1e5K62rsjrClU0QOql1MFOlQkSXuSURKINO0qsUC9Cpyknb+h/7SphYJ0npDAlSg5KocWJzs2EEK4Ju0FqhDjZSl0BmQDsQM4Fg6/iMKW2EBxC2PAD78TqegTCtGLYpT0XfYc1j3isvIzDI0UHio5zx3aPkZ9rDUfU46lCMq8UDBOssBgljG0THzbxKAmpBIm9mExa0FtzLp0dCHCOKuWoGqZoFBRFgNgdBIZwxBr3n5RAPEPZPoHpHqKaQhfgFJV0zlY6tmHZfHsRHTHgjtYkxsjkwI/GcRC7M8ZBx1CHkrz1l0g5lJOH6kCwZ3Z2qTFPAXP6rZC0Cx13UpnrpbiqBLcOy4bVG1ioIsmlgJqAfxQ4sR8wCBotPmfSk/tDvVoKSunp44YXERFMupibceBO2kDeppgjUVKTYLBy02S327Rc0yk/pUGKg46hm2HRRCNxeZf9hkxTHxBwG7sbIcu5A0q+ERI2QTJkGk2gs8mQkcP7ZKukqaN5ghZIU0wIxeOnP380p5khO5G2g/xighzuJT7GUNfLGJUhWOJ9APdH96XPyX0UKXcL8TdOO5uC3gQ0Pt9Oh5FFBuHU+WXDIS4ojVXoByNy2vO0VMcgwj8J6OKmVRLiq54xvnEx/BGF4QY9gjLRvExbiyPof5K96dM4gHkJNlBR4ohw9hWqD1Bb8sIowKzUmx1OZieVw6DgqHYpTEujS5rF+C18cUdD0ZwBSl/7yCN9B34pgLcyTZmijXditXVjCF8wpkf/khKx3uppeMAbR4k3S7jvoUw62J8MpET35O3ps+44dJDuodzwGEl44gAHYtpuWAObUA21zXPjT8THtDgLWpfzlsTzwtxns3nrS9+HJLcwHCdPtymlTiRJXqJQzBqtMdAAo2Kuk4k1IoGwbr2gnSA6bXEeE5EzsPUzrLc3JHtqkHNy7YQ9Cp4NAGoOEU90QaCZGQc/muF0hF8WiYiOv8/DDAE95iMOgobsnjWuhewxhsOEMIv9J81BjMPMRpxG0tkna6DJlEZzilUqCdb29WpNWTXjJYrM+HfkspVDXS9vv93laq1I7BjUcBNT4AYHzeR0QdjOCwXuy1TL9hXTlArr8GpG5OhNUlnEVwBeeXDs+6ca3DXWt47qenrCJ3oZy4fDbRrD85zmjU7NbpPO3CkNXDLVvztsSYapmKghxR+q+6hyFVbhGYghN9RcVzVpZdvmP2ghcm8gf2Bekle2YN+lNNo21CDYT8qjxSFSsDrEs0D77wl9xOhQAs/mpk6AGjGCQ/0JYCB71T5BE7ZJ0/Y/AcWhe/4Mq7iIpCOG4chWt/4FLlJ7wrU2FsR9+dcG5XdjYKAxaw1Hw04owqbKRAnSlp2GNc4oUUxxbubsdxxm/uBtARglCn86Gzs1J7xjtjnnNDPmPOgoVWxG4YZ7DogAEONQ0QXEfzopQ/iVCLA+OwJkMWUQTUdggNVEG2TP/BpBN3q463uoyF7xj6MHk85O+l/JFPLF1pDDPIfQ0R3hhYLuUcEqVfRFN4g9Uuk4S18YlS1GRmRDSaVZ3cuJGi5ZlQpjop6XfuWrBri3SEMIxB21ChE4dR5eOgNsNjzGJ2b7c5+qQvDjyfaQqRG2vkaFxD9ck6NeYuhPbuPI33ol4FOLZcigDFtGzVjDhZY7YfTNP+mkRXsafY4XNUmFMisytYU11DTseM63kSrNw/6s+8y9bPhBDCYzabmeJnnWjdMZKUgIsw/0VqyiP6CHmxJFMw0ENK1Zytws1PD6xaarKPiWcj2HXgVjuKjxTQgmgt7uKKpw+7QIqk39PsEsZdx2BdafnRJ7dobm1m3COt9tzVJP49EqeFpEZW6Z9wWjJHZQXbB0d7qCpfwtehru1jmWasOPu4pyqXAMVZ86TdywaGM9n/Tysi4A8PIIwYSglL9PpdPpcMnK0kkRzr4ToVPVY9avnbPVFIdQIq6Cjt8UYygidpL7ywAxSclkBq7ou3VohWHioucfxHfNXd90/beL0H1EcrwRk2VJYllwQbA++OufDXdeAo6Wr7bXS5jwtGfq3QNWyrOzMzSDOpmWt5Lb4NSPJeCMHI//jWT+A78wam9gdL8wKhMlCKXwsRcqs5euie+AFd6ksJ5qhKeVRUYjhTbWq00rN6aIs7R9PqXb7upxORHm+KF+s0RV+WJwJFew9TEemdVyhJ/2+PfGz4/YnsnRZsqpfEC096k6Dc9MgpKTGeZ8Ls3OMG+Tp5/lM8yZDFYdvEdaNrHKhds4UisjVvYqlGzFoDfugmUjBO7esJd+1cqghVV3X114EhMo6bnt/BsR0tbo1Z1s7TENFF+059BXsQ8wFn5DpjaMhTpEYZaPUJkWhacRcebld22w0bYNWagU5GAvsn/intuinEFOK86SbhVm5sMHHLaVtnjqlWqSlyo2FuRtg4hT3dyW88HvquXx6UhCd1fizEvTTPM/TAAR3RGoMFxylcXOcPbV73f34UMm55wHh6D1MZZ+Q6W2jYdVER5XJgxSmwVxpyEeqEYy5utQWZr3IJpm5vfH8nSTfx4+JUoM/E4r4EzK9bYhfF8Uqs0k2YtOziDNk6FONoNJ2kbdkgzQmArpXAdi5u76boEdCDA2fkOlNg+mzduMClpcKokszY3tiT+c9+T9bhVFdgFq5W6pg00qfKICzyQVFRDBTdO8mEw2+t31CpneKztaJm1XSdo4pbXWUQqRscCFWixq8xcP5KWyVUUobeth5T2R3deBiF3sZxGGR6uYIsoCHi1vigyKaL48zLcL3ki3AkGDTJ2T6JfKvmFkKcvAbOmp61u8RGh8JAZfE3n6L0DTjzm61SL9EYO9q2nbWn18iHBiHHrT6HYKttpP9rvm3dtrZ/sL51wT/p0i6N4p///vvFgUA");

/***/ }),

/***/ "./src/images/Mockup.webp":
/*!********************************!*\
  !*** ./src/images/Mockup.webp ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/static/Mockup-b14ad5c51656f19c0acb5bf264e0bdc3.webp");

/***/ }),

/***/ "./src/images/Vector.svg":
/*!*******************************!*\
  !*** ./src/images/Vector.svg ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzEiIGhlaWdodD0iMzEiIHZpZXdCb3g9IjAgMCAzMSAzMSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTMwLjE3OTggMTUuMTJWMzAuMThIMjMuNDk5OFYxNS4xMkMyMy40OTk4IDEwLjUxIDE5LjczOTggNi43NSAxNS4xMTk4IDYuNzVDMTAuNDk5OCA2Ljc1IDYuNjc5NzYgMTAuNTEgNi42Nzk3NiAxNS4xMkM2LjY3OTc2IDE5LjczIDEwLjQ2OTggMjMuNSAxNS4xMTk4IDIzLjVDMTguOTk5OCAyMy41IDIyLjI2OTggMjAuODQgMjMuMjE5OCAxNy4yNUwyMS43Mjk4IDI4LjY1QzE5LjcyOTggMjkuNjMgMTcuNDg5OCAzMC4xOCAxNS4xMTk4IDMwLjE4QzYuNzg5NzYgMzAuMTggLTAuMDAwMjQ0MTQxIDIzLjQzIC0wLjAwMDI0NDE0MSAxNS4xMkMtMC4wMDAyNDQxNDEgNi44MSA2Ljc4OTc2IDAgMTUuMTE5OCAwQzIzLjQ0OTggMCAzMC4xNzk4IDYuNzggMzAuMTc5OCAxNS4xMloiIGZpbGw9IndoaXRlIi8+Cjwvc3ZnPgo=");

/***/ }),

/***/ "./src/images/Vector2.svg":
/*!********************************!*\
  !*** ./src/images/Vector2.svg ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzEiIGhlaWdodD0iMzEiIHZpZXdCb3g9IjAgMCAzMSAzMSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTIzLjQyOTggMTUuMTJDMjMuNDI5OCAxOS41MyAyMC4xMjk4IDIzLjEzIDE1LjczOTggMjMuNDlIMTUuMDU5OEMxMC40Mzk4IDIzLjQ5IDYuNjg5NzUgMTkuNzMgNi42ODk3NSAxNS4xMlYwSDAuMDA5NzUwMzdWMTUuMTRDMC4wNzk3NTA0IDE5LjE0IDEuNjc5NzUgMjIuODkgNC41MDk3NSAyNS42OUM3LjMzOTc1IDI4LjQ5IDExLjA4OTggMzAuMDQgMTUuMDY5OCAzMC4wNEMxOS4wNDk4IDMwLjA0IDIyLjgzOTggMjguNSAyNS42Nzk4IDI1LjY5QzI4LjUxOTggMjIuODkgMzAuMTE5OCAxOS4xNCAzMC4xODk4IDE1LjEyVjBIMjMuNDM5OFYxNS4xMkgyMy40Mjk4WiIgZmlsbD0id2hpdGUiLz4KPC9zdmc+Cg==");

/***/ }),

/***/ "./src/images/Vector3.svg":
/*!********************************!*\
  !*** ./src/images/Vector3.svg ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTciIGhlaWdodD0iMzEiIHZpZXdCb3g9IjAgMCAxNyAzMSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTAuMTM5NzU1IDE1LjEyQzAuMTM5NzU1IDIzLjQyIDYuODg5NzUgMzAuMTggMTUuMTk5OCAzMC4xOEgxNi4zNzk4VjIzLjVIMTUuMTk5OEMxMC41Nzk4IDIzLjUgNi44Mjk3NiAxOS43NCA2LjgyOTc2IDE1LjEzVjYuODEwMDFIMTYuMzg5OFYwLjA3MDAwNzNIMC4xNDk3NTdWMTUuMTNMMC4xMzk3NTUgMTUuMTJaIiBmaWxsPSJ3aGl0ZSIvPgo8L3N2Zz4K");

/***/ }),

/***/ "./src/images/Vector4.svg":
/*!********************************!*\
  !*** ./src/images/Vector4.svg ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTciIGhlaWdodD0iMzEiIHZpZXdCb3g9IjAgMCAxNyAzMSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTE1LjU1OTggMEM3LjI1OTc1IDAgMC40OTk3NTYgNi43OCAwLjQ5OTc1NiAxNS4xMlYzMC4xOEg3LjE3OTc2VjE1LjEyQzcuMTc5NzYgMTAuNSAxMC45Mzk4IDYuNzUgMTUuNTQ5OCA2Ljc1SDE2LjcyOThWMEgxNS41NDk4SDE1LjU1OThaIiBmaWxsPSJ3aGl0ZSIvPgo8L3N2Zz4K");

/***/ }),

/***/ "./src/images/Vector5.svg":
/*!********************************!*\
  !*** ./src/images/Vector5.svg ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzEiIGhlaWdodD0iMzEiIHZpZXdCb3g9IjAgMCAzMSAzMSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTE1Ljc3OTggMEM3LjQzOTc1IDAgMC42NTk3NiA2Ljc4IDAuNjU5NzYgMTUuMTJDMC42NTk3NiAyMy40NiA3LjQzOTc1IDMwLjE4IDE1Ljc3OTggMzAuMThDMjQuMTE5OCAzMC4xOCAzMC44Mzk4IDIzLjQzIDMwLjgzOTggMTUuMTJDMzAuODM5OCA2LjgxIDI0LjA3OTggMCAxNS43Nzk4IDBaTTE1Ljc3OTggMjMuNUMxMS4xMjk4IDIzLjUgNy4zMzk3NSAxOS43NCA3LjMzOTc1IDE1LjEzQzcuMzM5NzUgMTAuNTIgMTEuMTI5OCA2Ljc2IDE1Ljc3OTggNi43NkMyMC40Mjk4IDYuNzYgMjQuMTQ5OCAxMC41MiAyNC4xNDk4IDE1LjEzQzI0LjE0OTggMTkuNzQgMjAuMzg5OCAyMy41IDE1Ljc3OTggMjMuNVoiIGZpbGw9IndoaXRlIi8+Cjwvc3ZnPgo=");

/***/ }),

/***/ "./src/images/Vector6.svg":
/*!********************************!*\
  !*** ./src/images/Vector6.svg ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iOCIgaGVpZ2h0PSI4IiB2aWV3Qm94PSIwIDAgOCA4IiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8cGF0aCBkPSJNMC44Nzk3NjEgNC4yMzk5OUMwLjg3OTc2MSAyLjIwOTk5IDIuMzY5NzUgMC43OTk5ODggNC4xOTk3NSAwLjc5OTk4OEM2LjAyOTc1IDAuNzk5OTg4IDcuNDk5NzYgMi4yMDk5OSA3LjQ5OTc2IDQuMjM5OTlDNy40OTk3NiA2LjI2OTk5IDYuMDA5NzUgNy42Nzk5OSA0LjE5OTc1IDcuNjc5OTlDMi4zODk3NSA3LjY3OTk5IDAuODc5NzYxIDYuMjY5OTkgMC44Nzk3NjEgNC4yMzk5OVpNNi43Mzk3NiA0LjIzOTk5QzYuNzM5NzYgMi42MTk5OSA1LjY0OTc2IDEuNDc5OTkgNC4xODk3NiAxLjQ3OTk5QzIuNzI5NzYgMS40Nzk5OSAxLjYyOTc2IDIuNjA5OTkgMS42Mjk3NiA0LjIzOTk5QzEuNjI5NzYgNS44Njk5OSAyLjcyOTc2IDYuOTc5OTkgNC4xODk3NiA2Ljk3OTk5QzUuNjQ5NzYgNi45Nzk5OSA2LjczOTc2IDUuODc5OTkgNi43Mzk3NiA0LjIzOTk5Wk0yLjg4OTc2IDIuNDU5OTlINC4yNjk3NkM1LjAxOTc2IDIuNDU5OTkgNS42NDk3NSAyLjc2OTk5IDUuNjQ5NzUgMy41ODk5OUM1LjY0OTc1IDMuOTk5OTkgNS40MDk3NiA0LjM4OTk5IDQuOTk5NzYgNC41Mzk5OUw1Ljc3OTc1IDUuOTQ5OTlINC45MTk3NUw0LjMzOTc1IDQuNzc5OTlIMy42Nzk3NVY1Ljk0OTk5SDIuODg5NzZWMi40NTk5OVpNNC4wOTk3NiA0LjE4OTk5QzQuNTM5NzYgNC4xODk5OSA0Ljc4OTc1IDMuOTc5OTkgNC43ODk3NSAzLjYyOTk5QzQuNzg5NzUgMy4zMTk5OSA0LjU5OTc2IDMuMDg5OTkgNC4xMjk3NiAzLjA4OTk5SDMuNjc5NzVWNC4xODk5OUg0LjA5OTc2WiIgZmlsbD0id2hpdGUiLz4KPC9zdmc+Cg==");

/***/ }),

/***/ "./src/images/menu.svg":
/*!*****************************!*\
  !*** ./src/images/menu.svg ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgNTEyIDUxMiIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMjsiIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPGc+DQoJPGc+DQoJCTxwYXRoIGZpbGw9IiNmYWZhZmEiIGQ9Ik00OTIsMjM2SDIwYy0xMS4wNDYsMC0yMCw4Ljk1NC0yMCwyMGMwLDExLjA0Niw4Ljk1NCwyMCwyMCwyMGg0NzJjMTEuMDQ2LDAsMjAtOC45NTQsMjAtMjBTNTAzLjA0NiwyMzYsNDkyLDIzNnoiLz4NCgk8L2c+DQo8L2c+DQo8Zz4NCgk8Zz4NCgkJPHBhdGggZmlsbD0iI2ZhZmFmYSIgZD0iTTQ5Miw3NkgyMEM4Ljk1NCw3NiwwLDg0Ljk1NCwwLDk2czguOTU0LDIwLDIwLDIwaDQ3MmMxMS4wNDYsMCwyMC04Ljk1NCwyMC0yMFM1MDMuMDQ2LDc2LDQ5Miw3NnoiLz4NCgk8L2c+DQo8L2c+DQo8Zz4NCgk8Zz4NCgkJPHBhdGggZmlsbD0iI2ZhZmFmYSIgZD0iTTQ5MiwzOTZIMjBjLTExLjA0NiwwLTIwLDguOTU0LTIwLDIwYzAsMTEuMDQ2LDguOTU0LDIwLDIwLDIwaDQ3MmMxMS4wNDYsMCwyMC04Ljk1NCwyMC0yMA0KCQkJQzUxMiw0MDQuOTU0LDUwMy4wNDYsMzk2LDQ5MiwzOTZ6Ii8+DQoJPC9nPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPC9zdmc+DQo=");

/***/ }),

/***/ "./src/images/office.webp":
/*!********************************!*\
  !*** ./src/images/office.webp ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/static/office-d608b15951089be37b84bb388ceeeccf.webp");

/***/ }),

/***/ "./public/page-data/sq/d/63159454.json":
/*!*********************************************!*\
  !*** ./public/page-data/sq/d/63159454.json ***!
  \*********************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"data":{"site":{"siteMetadata":{"title":"Brouillon","description":"SEO Testing","author":"@gatsbyjs"}}}}');

/***/ })

};
;
//# sourceMappingURL=component---src-pages-index-js.js.map