exports.id = 678;
exports.ids = [678];
exports.modules = {

/***/ 6371:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var lodash_throttle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3096);
/* harmony import */ var lodash_throttle__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_throttle__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1296);
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

/***/ 2369:
/***/ ((module) => {

"use strict";
const preserveCamelCase=string=>{let isLastCharLower=false;let isLastCharUpper=false;let isLastLastCharUpper=false;for(let i=0;i<string.length;i++){const character=string[i];if(isLastCharLower&&/[a-zA-Z]/.test(character)&&character.toUpperCase()===character){string=string.slice(0,i)+'-'+string.slice(i);isLastCharLower=false;isLastLastCharUpper=isLastCharUpper;isLastCharUpper=true;i++;}else if(isLastCharUpper&&isLastLastCharUpper&&/[a-zA-Z]/.test(character)&&character.toLowerCase()===character){string=string.slice(0,i-1)+'-'+string.slice(i-1);isLastLastCharUpper=isLastCharUpper;isLastCharUpper=false;isLastCharLower=true;}else{isLastCharLower=character.toLowerCase()===character&&character.toUpperCase()!==character;isLastLastCharUpper=isLastCharUpper;isLastCharUpper=character.toUpperCase()===character&&character.toLowerCase()!==character;}}return string;};const camelCase=(input,options)=>{if(!(typeof input==='string'||Array.isArray(input))){throw new TypeError('Expected the input to be `string | string[]`');}options=Object.assign({pascalCase:false},options);const postProcess=x=>options.pascalCase?x.charAt(0).toUpperCase()+x.slice(1):x;if(Array.isArray(input)){input=input.map(x=>x.trim()).filter(x=>x.length).join('-');}else{input=input.trim();}if(input.length===0){return'';}if(input.length===1){return options.pascalCase?input.toUpperCase():input.toLowerCase();}const hasUpperCase=input!==input.toLowerCase();if(hasUpperCase){input=preserveCamelCase(input);}input=input.replace(/^[_.\- ]+/,'').toLowerCase().replace(/[_.\- ]+(\w|$)/g,(_,p1)=>p1.toUpperCase()).replace(/\d+(\w|$)/g,m=>m.toUpperCase());return postProcess(input);};module.exports=camelCase;// TODO: Remove this for the next major release
module.exports["default"]=camelCase;

/***/ }),

/***/ 4711:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ components_Contact)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(7294);
;// CONCATENATED MODULE: ./src/images/Logo.svg
/* harmony default export */ const Logo = ("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjI4IiBoZWlnaHQ9IjMxIiB2aWV3Qm94PSIwIDAgMjI4IDMxIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8ZyBjbGlwLXBhdGg9InVybCgjY2xpcDBfMjlfOTYpIj4KPHBhdGggZD0iTTU3LjQyOTggMTUuMTJDNTcuNDI5OCAxOS41MyA1NC4xMjk4IDIzLjEzIDQ5LjczOTggMjMuNDlINDkuMDU5OEM0NC40Mzk4IDIzLjQ5IDQwLjY4OTggMTkuNzMgNDAuNjg5OCAxNS4xMlYwSDM0LjAwOThWMTUuMTRDMzQuMDc5OCAxOS4xNCAzNS42Nzk4IDIyLjg5IDM4LjUwOTggMjUuNjlDNDEuMzM5OCAyOC40OSA0NS4wODk4IDMwLjA0IDQ5LjA2OTggMzAuMDRDNTMuMDQ5OCAzMC4wNCA1Ni44Mzk4IDI4LjUgNTkuNjc5OCAyNS42OUM2Mi41MTk4IDIyLjg5IDY0LjExOTggMTkuMTQgNjQuMTg5OCAxNS4xMlYwSDU3LjQzOThWMTUuMTJINTcuNDI5OFoiIGZpbGw9IndoaXRlIi8+CjxwYXRoIGQ9Ik02OC4xMzk4IDE1LjEyQzY4LjEzOTggMjMuNDIgNzQuODg5OCAzMC4xOCA4My4xOTk4IDMwLjE4SDg0LjM3OThWMjMuNUg4My4xOTk4Qzc4LjU3OTggMjMuNSA3NC44Mjk4IDE5Ljc0IDc0LjgyOTggMTUuMTNWNi44MTAwMUg4NC4zODk4VjAuMDcwMDA3M0g2OC4xNDk4VjE1LjEzTDY4LjEzOTggMTUuMTJaIiBmaWxsPSJ3aGl0ZSIvPgo8cGF0aCBkPSJNMTMzLjU2IDBDMTI1LjI2IDAgMTE4LjUgNi43OCAxMTguNSAxNS4xMlYzMC4xOEgxMjUuMThWMTUuMTJDMTI1LjE4IDEwLjUgMTI4Ljk0IDYuNzUgMTMzLjU1IDYuNzVIMTM0LjczVjBIMTMzLjU1SDEzMy41NloiIGZpbGw9IndoaXRlIi8+CjxwYXRoIGQ9Ik0xMDAuNzggMEM5Mi40Mzk4IDAgODUuNjU5OCA2Ljc4IDg1LjY1OTggMTUuMTJDODUuNjU5OCAyMy40NiA5Mi40Mzk4IDMwLjE4IDEwMC43OCAzMC4xOEMxMDkuMTIgMzAuMTggMTE1Ljg0IDIzLjQzIDExNS44NCAxNS4xMkMxMTUuODQgNi44MSAxMDkuMDggMCAxMDAuNzggMFpNMTAwLjc4IDIzLjVDOTYuMTI5OCAyMy41IDkyLjMzOTggMTkuNzQgOTIuMzM5OCAxNS4xM0M5Mi4zMzk4IDEwLjUyIDk2LjEyOTggNi43NiAxMDAuNzggNi43NkMxMDUuNDMgNi43NiAxMDkuMTUgMTAuNTIgMTA5LjE1IDE1LjEzQzEwOS4xNSAxOS43NCAxMDUuMzkgMjMuNSAxMDAuNzggMjMuNVoiIGZpbGw9IndoaXRlIi8+CjxwYXRoIGQ9Ik0xNTAuNDIgMEMxNDIuMDggMCAxMzUuMyA2Ljc4IDEzNS4zIDE1LjEyQzEzNS4zIDIzLjQ2IDE0Mi4wOCAzMC4xOCAxNTAuNDIgMzAuMThDMTU4Ljc2IDMwLjE4IDE2NS40OCAyMy40MyAxNjUuNDggMTUuMTJDMTY1LjQ4IDYuODEgMTU4LjczIDAgMTUwLjQyIDBaTTE1MC40MiAyMy41QzE0NS43NyAyMy41IDE0MS45OCAxOS43NCAxNDEuOTggMTUuMTNDMTQxLjk4IDEwLjUyIDE0NS43NyA2Ljc2IDE1MC40MiA2Ljc2QzE1NS4wNyA2Ljc2IDE1OC43OSAxMC41MiAxNTguNzkgMTUuMTNDMTU4Ljc5IDE5Ljc0IDE1NS4wMyAyMy41IDE1MC40MiAyMy41WiIgZmlsbD0id2hpdGUiLz4KPHBhdGggZD0iTTE4My4yNSAwQzE3NC45MSAwIDE2OC4xMyA2Ljc4IDE2OC4xMyAxNS4xMkMxNjguMTMgMjMuNDYgMTc0LjkxIDMwLjE4IDE4My4yNSAzMC4xOEMxOTEuNTkgMzAuMTggMTk4LjMxIDIzLjQzIDE5OC4zMSAxNS4xMkMxOTguMzEgNi44MSAxOTEuNTYgMCAxODMuMjUgMFpNMTgzLjI1IDIzLjVDMTc4LjYgMjMuNSAxNzQuODEgMTkuNzQgMTc0LjgxIDE1LjEzQzE3NC44MSAxMC41MiAxNzguNiA2Ljc2IDE4My4yNSA2Ljc2QzE4Ny45IDYuNzYgMTkxLjYyIDEwLjUyIDE5MS42MiAxNS4xM0MxOTEuNjIgMTkuNzQgMTg3Ljg2IDIzLjUgMTgzLjI1IDIzLjVaIiBmaWxsPSJ3aGl0ZSIvPgo8cGF0aCBkPSJNMjE3Ljk1IDYuODEwMDFWMC4wNzAwMDczSDIwMS43MVYxNS4xM0MyMDEuNzEgMjMuNDMgMjA4LjQ2IDMwLjE5IDIxNi43NyAzMC4xOUgyMTcuOTVWMjMuNTFIMjE2Ljc3QzIxMi4xNSAyMy41MSAyMDguNCAxOS43NSAyMDguNCAxNS4xNFY2LjgxMDAxSDIxNy45NkgyMTcuOTVaIiBmaWxsPSJ3aGl0ZSIvPgo8cGF0aCBkPSJNMjIwLjg4IDI3LjI0QzIyMC44OCAyNS4yMSAyMjIuMzcgMjMuOCAyMjQuMiAyMy44QzIyNi4wMyAyMy44IDIyNy41IDI1LjIxIDIyNy41IDI3LjI0QzIyNy41IDI5LjI3IDIyNi4wMSAzMC42OCAyMjQuMiAzMC42OEMyMjIuMzkgMzAuNjggMjIwLjg4IDI5LjI3IDIyMC44OCAyNy4yNFpNMjI2Ljc0IDI3LjI0QzIyNi43NCAyNS42MiAyMjUuNjUgMjQuNDggMjI0LjE5IDI0LjQ4QzIyMi43MyAyNC40OCAyMjEuNjMgMjUuNjEgMjIxLjYzIDI3LjI0QzIyMS42MyAyOC44NyAyMjIuNzMgMjkuOTggMjI0LjE5IDI5Ljk4QzIyNS42NSAyOS45OCAyMjYuNzQgMjguODggMjI2Ljc0IDI3LjI0VjI3LjI0Wk0yMjIuODkgMjUuNDZIMjI0LjI3QzIyNS4wMiAyNS40NiAyMjUuNjUgMjUuNzcgMjI1LjY1IDI2LjU5QzIyNS42NSAyNyAyMjUuNDEgMjcuMzkgMjI1IDI3LjU0TDIyNS43OCAyOC45NUgyMjQuOTJMMjI0LjM0IDI3Ljc4SDIyMy42OFYyOC45NUgyMjIuODlWMjUuNDZWMjUuNDZaTTIyNC4xIDI3LjE5QzIyNC41NCAyNy4xOSAyMjQuNzkgMjYuOTggMjI0Ljc5IDI2LjYzQzIyNC43OSAyNi4zMiAyMjQuNiAyNi4wOSAyMjQuMTMgMjYuMDlIMjIzLjY4VjI3LjE5SDIyNC4xVjI3LjE5WiIgZmlsbD0id2hpdGUiLz4KPHBhdGggZD0iTTU3LjQyOTggMTUuMTJDNTcuNDI5OCAxOS41MyA1NC4xMjk4IDIzLjEzIDQ5LjczOTggMjMuNDlINDkuMDU5OEM0NC40Mzk4IDIzLjQ5IDQwLjY4OTggMTkuNzMgNDAuNjg5OCAxNS4xMlYwSDM0LjAwOThWMTUuMTRDMzQuMDc5OCAxOS4xNCAzNS42Nzk4IDIyLjg5IDM4LjUwOTggMjUuNjlDNDEuMzM5OCAyOC40OSA0NS4wODk4IDMwLjA0IDQ5LjA2OTggMzAuMDRDNTMuMDQ5OCAzMC4wNCA1Ni44Mzk4IDI4LjUgNTkuNjc5OCAyNS42OUM2Mi41MTk4IDIyLjg5IDY0LjExOTggMTkuMTQgNjQuMTg5OCAxNS4xMlYwSDU3LjQzOThWMTUuMTJINTcuNDI5OFoiIGZpbGw9IndoaXRlIi8+CjxwYXRoIGQ9Ik02OC4xMzk4IDE1LjEyQzY4LjEzOTggMjMuNDIgNzQuODg5OCAzMC4xOCA4My4xOTk4IDMwLjE4SDg0LjM3OThWMjMuNUg4My4xOTk4Qzc4LjU3OTggMjMuNSA3NC44Mjk4IDE5Ljc0IDc0LjgyOTggMTUuMTNWNi44MTAwMUg4NC4zODk4VjAuMDcwMDA3M0g2OC4xNDk4VjE1LjEzTDY4LjEzOTggMTUuMTJaIiBmaWxsPSJ3aGl0ZSIvPgo8cGF0aCBkPSJNMTMzLjU2IDBDMTI1LjI2IDAgMTE4LjUgNi43OCAxMTguNSAxNS4xMlYzMC4xOEgxMjUuMThWMTUuMTJDMTI1LjE4IDEwLjUgMTI4Ljk0IDYuNzUgMTMzLjU1IDYuNzVIMTM0LjczVjBIMTMzLjU1SDEzMy41NloiIGZpbGw9IndoaXRlIi8+CjxwYXRoIGQ9Ik0xMDAuNzggMEM5Mi40Mzk4IDAgODUuNjU5OCA2Ljc4IDg1LjY1OTggMTUuMTJDODUuNjU5OCAyMy40NiA5Mi40Mzk4IDMwLjE4IDEwMC43OCAzMC4xOEMxMDkuMTIgMzAuMTggMTE1Ljg0IDIzLjQzIDExNS44NCAxNS4xMkMxMTUuODQgNi44MSAxMDkuMDggMCAxMDAuNzggMFpNMTAwLjc4IDIzLjVDOTYuMTI5OCAyMy41IDkyLjMzOTggMTkuNzQgOTIuMzM5OCAxNS4xM0M5Mi4zMzk4IDEwLjUyIDk2LjEyOTggNi43NiAxMDAuNzggNi43NkMxMDUuNDMgNi43NiAxMDkuMTUgMTAuNTIgMTA5LjE1IDE1LjEzQzEwOS4xNSAxOS43NCAxMDUuMzkgMjMuNSAxMDAuNzggMjMuNVoiIGZpbGw9IndoaXRlIi8+CjxwYXRoIGQ9Ik0xNTAuNDIgMEMxNDIuMDggMCAxMzUuMyA2Ljc4IDEzNS4zIDE1LjEyQzEzNS4zIDIzLjQ2IDE0Mi4wOCAzMC4xOCAxNTAuNDIgMzAuMThDMTU4Ljc2IDMwLjE4IDE2NS40OCAyMy40MyAxNjUuNDggMTUuMTJDMTY1LjQ4IDYuODEgMTU4LjczIDAgMTUwLjQyIDBaTTE1MC40MiAyMy41QzE0NS43NyAyMy41IDE0MS45OCAxOS43NCAxNDEuOTggMTUuMTNDMTQxLjk4IDEwLjUyIDE0NS43NyA2Ljc2IDE1MC40MiA2Ljc2QzE1NS4wNyA2Ljc2IDE1OC43OSAxMC41MiAxNTguNzkgMTUuMTNDMTU4Ljc5IDE5Ljc0IDE1NS4wMyAyMy41IDE1MC40MiAyMy41WiIgZmlsbD0id2hpdGUiLz4KPHBhdGggZD0iTTE4My4yNSAwQzE3NC45MSAwIDE2OC4xMyA2Ljc4IDE2OC4xMyAxNS4xMkMxNjguMTMgMjMuNDYgMTc0LjkxIDMwLjE4IDE4My4yNSAzMC4xOEMxOTEuNTkgMzAuMTggMTk4LjMxIDIzLjQzIDE5OC4zMSAxNS4xMkMxOTguMzEgNi44MSAxOTEuNTYgMCAxODMuMjUgMFpNMTgzLjI1IDIzLjVDMTc4LjYgMjMuNSAxNzQuODEgMTkuNzQgMTc0LjgxIDE1LjEzQzE3NC44MSAxMC41MiAxNzguNiA2Ljc2IDE4My4yNSA2Ljc2QzE4Ny45IDYuNzYgMTkxLjYyIDEwLjUyIDE5MS42MiAxNS4xM0MxOTEuNjIgMTkuNzQgMTg3Ljg2IDIzLjUgMTgzLjI1IDIzLjVaIiBmaWxsPSJ3aGl0ZSIvPgo8cGF0aCBkPSJNMjE3Ljk1IDYuODEwMDFWMC4wNzAwMDczSDIwMS43MVYxNS4xM0MyMDEuNzEgMjMuNDMgMjA4LjQ2IDMwLjE5IDIxNi43NyAzMC4xOUgyMTcuOTVWMjMuNTFIMjE2Ljc3QzIxMi4xNSAyMy41MSAyMDguNCAxOS43NSAyMDguNCAxNS4xNFY2LjgxMDAxSDIxNy45NkgyMTcuOTVaIiBmaWxsPSJ3aGl0ZSIvPgo8cGF0aCBkPSJNMjIwLjg4IDI3LjI0QzIyMC44OCAyNS4yMSAyMjIuMzcgMjMuOCAyMjQuMiAyMy44QzIyNi4wMyAyMy44IDIyNy41IDI1LjIxIDIyNy41IDI3LjI0QzIyNy41IDI5LjI3IDIyNi4wMSAzMC42OCAyMjQuMiAzMC42OEMyMjIuMzkgMzAuNjggMjIwLjg4IDI5LjI3IDIyMC44OCAyNy4yNFpNMjI2Ljc0IDI3LjI0QzIyNi43NCAyNS42MiAyMjUuNjUgMjQuNDggMjI0LjE5IDI0LjQ4QzIyMi43MyAyNC40OCAyMjEuNjMgMjUuNjEgMjIxLjYzIDI3LjI0QzIyMS42MyAyOC44NyAyMjIuNzMgMjkuOTggMjI0LjE5IDI5Ljk4QzIyNS42NSAyOS45OCAyMjYuNzQgMjguODggMjI2Ljc0IDI3LjI0VjI3LjI0Wk0yMjIuODkgMjUuNDZIMjI0LjI3QzIyNS4wMiAyNS40NiAyMjUuNjUgMjUuNzcgMjI1LjY1IDI2LjU5QzIyNS42NSAyNyAyMjUuNDEgMjcuMzkgMjI1IDI3LjU0TDIyNS43OCAyOC45NUgyMjQuOTJMMjI0LjM0IDI3Ljc4SDIyMy42OFYyOC45NUgyMjIuODlWMjUuNDZWMjUuNDZaTTIyNC4xIDI3LjE5QzIyNC41NCAyNy4xOSAyMjQuNzkgMjYuOTggMjI0Ljc5IDI2LjYzQzIyNC43OSAyNi4zMiAyMjQuNiAyNi4wOSAyMjQuMTMgMjYuMDlIMjIzLjY4VjI3LjE5SDIyNC4xVjI3LjE5WiIgZmlsbD0id2hpdGUiLz4KPHBhdGggb3BhY2l0eT0iMC41IiBkPSJNMjMuNDk5OCAxNS4xMlYyNy42MkMyMi45Mzk4IDI4IDIyLjM0OTggMjguMzQgMjEuNzM5OCAyOC42NEwyMy4yMjk4IDE3LjI0QzIzLjI2OTggMTcuMSAyMy4yOTk4IDE2Ljk1IDIzLjMzOTggMTYuOEMyMy40MDk4IDE2LjQzIDIzLjQ2OTggMTYuMDcgMjMuNDg5OCAxNS42OUMyMy40OTk4IDE1LjUgMjMuNTA5OCAxNS4zIDIzLjUwOTggMTUuMTFMMjMuNDk5OCAxNS4xMloiIGZpbGw9IndoaXRlIi8+CjxwYXRoIGQ9Ik0zMC4xNzk4IDE1LjEyVjMwLjE4SDIzLjQ5OThWMTUuMTJDMjMuNDk5OCAxMC41MSAxOS43Mzk4IDYuNzUgMTUuMTE5OCA2Ljc1QzEwLjQ5OTggNi43NSA2LjY3OTc2IDEwLjUxIDYuNjc5NzYgMTUuMTJDNi42Nzk3NiAxOS43MyAxMC40Njk4IDIzLjUgMTUuMTE5OCAyMy41QzE4Ljk5OTggMjMuNSAyMi4yNjk4IDIwLjg0IDIzLjIxOTggMTcuMjVMMjEuNzI5OCAyOC42NUMxOS43Mjk4IDI5LjYzIDE3LjQ4OTggMzAuMTggMTUuMTE5OCAzMC4xOEM2Ljc4OTc2IDMwLjE4IC0wLjAwMDI0NDE0MSAyMy40MyAtMC4wMDAyNDQxNDEgMTUuMTJDLTAuMDAwMjQ0MTQxIDYuODEgNi43ODk3NiAwIDE1LjExOTggMEMyMy40NDk4IDAgMzAuMTc5OCA2Ljc4IDMwLjE3OTggMTUuMTJaIiBmaWxsPSJ3aGl0ZSIvPgo8L2c+CjxkZWZzPgo8Y2xpcFBhdGggaWQ9ImNsaXAwXzI5Xzk2Ij4KPHJlY3Qgd2lkdGg9IjIyNy41IiBoZWlnaHQ9IjMwLjY4IiBmaWxsPSJ3aGl0ZSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTAuMDAwMjQ0MTQxKSIvPgo8L2NsaXBQYXRoPgo8L2RlZnM+Cjwvc3ZnPgo=");
// EXTERNAL MODULE: ./.cache/gatsby-browser-entry.js + 11 modules
var gatsby_browser_entry = __webpack_require__(7076);
;// CONCATENATED MODULE: ./src/components/Contact.js
const Contact=()=>{return/*#__PURE__*/react.createElement("section",{className:"bg-gradient-to-t from-[#30F9FC] to-lime-300 px-6 pb-6"},/*#__PURE__*/react.createElement("div",{className:"max-w-[1200px] mx-auto"},/*#__PURE__*/react.createElement(gatsby_browser_entry.Link,{to:"/"},/*#__PURE__*/react.createElement("img",{className:"h-auto w-[16rem] pb-10",src:Logo,loading:"lazy",alt:"logo"})),/*#__PURE__*/react.createElement("ul",{className:"text-neutral-700 grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3"},/*#__PURE__*/react.createElement("li",{className:"border-gray-400 border-solid border-l-2 px-6 py-4"},/*#__PURE__*/react.createElement("div",{className:"flex flex-col max-w-[25rem] gap-4 pl-10 py-6  md:pl-0 md:pr-10"},/*#__PURE__*/react.createElement("h2",{className:"text-lg font-bold sm:text-2xl md:text-3xl lg:text-4xl"},"LIENS RAPIDES"),/*#__PURE__*/react.createElement("p",null,"Produits"),/*#__PURE__*/react.createElement("p",null,"D\xE9mo"),/*#__PURE__*/react.createElement("p",null,"Support"),/*#__PURE__*/react.createElement("p",null,"Contact"))),/*#__PURE__*/react.createElement("li",{className:"border-gray-400 border-solid border-l-2 px-6 py-4"},/*#__PURE__*/react.createElement("div",{className:"flex flex-col max-w-[25rem] gap-4  pl-10 py-6  md:pl-0 md:pr-10"},/*#__PURE__*/react.createElement("h2",{className:" text-lg font-bold sm:text-2xl md:text-3xl lg:text-4xl"},"CONTACT"),/*#__PURE__*/react.createElement("p",null,"Patrick Branchaud"),/*#__PURE__*/react.createElement("p",null,"Contact"))),/*#__PURE__*/react.createElement("li",{className:"border-gray-400 border-solid border-l-2 px-6 py-4"},/*#__PURE__*/react.createElement("div",{className:"flex flex-col max-w-[25rem] gap-4 pl-10 py-6 md:pl-0 md:pr-10"},/*#__PURE__*/react.createElement("h2",{className:"text-lg font-bold sm:text-2xl md:text-3xl lg:text-4xl"},"ADRESSE"),/*#__PURE__*/react.createElement("p",null,"34234 boul asdgsdg"),/*#__PURE__*/react.createElement("p",null,"Sherbrooke"),/*#__PURE__*/react.createElement("p",null,"Quebec"))))));};/* harmony default export */ const components_Contact = (Contact);

/***/ }),

/***/ 3117:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7294);
const Dividerleftthree=()=>{return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"w-0 h-0 border-r-[100vw] border-r-white border-b-[10vw] border-b-lime-300"});};/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Dividerleftthree);

/***/ }),

/***/ 6947:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7294);
const Footer=()=>{return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("section",{className:"bg-black"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p",{className:"text-white p-2 text-center text-sm sm:text-md"},"Tous droits r\xE9serv\xE9s Autoroot Technologies Inc. \xA9 2023"));};/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Footer);

/***/ }),

/***/ 9866:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ components_Header)
});

// EXTERNAL MODULE: ./.cache/gatsby-browser-entry.js + 11 modules
var gatsby_browser_entry = __webpack_require__(7076);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(7294);
;// CONCATENATED MODULE: ./src/images/menu.svg
/* harmony default export */ const menu = ("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgNTEyIDUxMiIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMjsiIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPGc+DQoJPGc+DQoJCTxwYXRoIGZpbGw9InJnYig2NCA2NCA2NCkiIGQ9Ik00OTIsMjM2SDIwYy0xMS4wNDYsMC0yMCw4Ljk1NC0yMCwyMGMwLDExLjA0Niw4Ljk1NCwyMCwyMCwyMGg0NzJjMTEuMDQ2LDAsMjAtOC45NTQsMjAtMjBTNTAzLjA0NiwyMzYsNDkyLDIzNnoiLz4NCgk8L2c+DQo8L2c+DQo8Zz4NCgk8Zz4NCgkJPHBhdGggZmlsbD0icmdiKDY0IDY0IDY0KSIgZD0iTTQ5Miw3NkgyMEM4Ljk1NCw3NiwwLDg0Ljk1NCwwLDk2czguOTU0LDIwLDIwLDIwaDQ3MmMxMS4wNDYsMCwyMC04Ljk1NCwyMC0yMFM1MDMuMDQ2LDc2LDQ5Miw3NnoiLz4NCgk8L2c+DQo8L2c+DQo8Zz4NCgk8Zz4NCgkJPHBhdGggZmlsbD0icmdiKDY0IDY0IDY0KSIgZD0iTTQ5MiwzOTZIMjBjLTExLjA0NiwwLTIwLDguOTU0LTIwLDIwYzAsMTEuMDQ2LDguOTU0LDIwLDIwLDIwaDQ3MmMxMS4wNDYsMCwyMC04Ljk1NCwyMC0yMA0KCQkJQzUxMiw0MDQuOTU0LDUwMy4wNDYsMzk2LDQ5MiwzOTZ6Ii8+DQoJPC9nPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPC9zdmc+DQo=");
;// CONCATENATED MODULE: ./src/images/Vector.svg
/* harmony default export */ const Vector = ("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzEiIGhlaWdodD0iMzEiIHZpZXdCb3g9IjAgMCAzMSAzMSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTMwLjE3OTkgMTUuMTJWMzAuMThIMjMuNDk5OVYxNS4xMkMyMy40OTk5IDEwLjUxIDE5LjczOTkgNi43NSAxNS4xMTk5IDYuNzVDMTAuNDk5OSA2Ljc1IDYuNjc5ODggMTAuNTEgNi42Nzk4OCAxNS4xMkM2LjY3OTg4IDE5LjczIDEwLjQ2OTkgMjMuNSAxNS4xMTk5IDIzLjVDMTguOTk5OSAyMy41IDIyLjI2OTkgMjAuODQgMjMuMjE5OSAxNy4yNUwyMS43Mjk5IDI4LjY1QzE5LjcyOTkgMjkuNjMgMTcuNDg5OSAzMC4xOCAxNS4xMTk5IDMwLjE4QzYuNzg5ODggMzAuMTggLTAuMDAwMTIyMDcgMjMuNDMgLTAuMDAwMTIyMDcgMTUuMTJDLTAuMDAwMTIyMDcgNi44MSA2Ljc4OTg4IDAgMTUuMTE5OSAwQzIzLjQ0OTkgMCAzMC4xNzk5IDYuNzggMzAuMTc5OSAxNS4xMloiIGZpbGw9IiMzRjNGM0YiLz4KPC9zdmc+Cg==");
;// CONCATENATED MODULE: ./src/images/Vector1b.svg
/* harmony default export */ const Vector1b = ("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzEiIGhlaWdodD0iMzEiIHZpZXdCb3g9IjAgMCAzMSAzMSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTIzLjQyOTkgMTUuMTJDMjMuNDI5OSAxOS41MyAyMC4xMjk5IDIzLjEzIDE1LjczOTkgMjMuNDlIMTUuMDU5OUMxMC40Mzk5IDIzLjQ5IDYuNjg5ODkgMTkuNzMgNi42ODk4OSAxNS4xMlYwSDAuMDA5ODg3N1YxNS4xNEMwLjA3OTg4NzcgMTkuMTQgMS42Nzk4OSAyMi44OSA0LjUwOTg5IDI1LjY5QzcuMzM5ODkgMjguNDkgMTEuMDg5OSAzMC4wNCAxNS4wNjk5IDMwLjA0QzE5LjA0OTkgMzAuMDQgMjIuODM5OSAyOC41IDI1LjY3OTkgMjUuNjlDMjguNTE5OSAyMi44OSAzMC4xMTk5IDE5LjE0IDMwLjE4OTkgMTUuMTJWMEgyMy40Mzk5VjE1LjEySDIzLjQyOTlaIiBmaWxsPSIjM0YzRjNGIi8+Cjwvc3ZnPgo=");
;// CONCATENATED MODULE: ./src/images/Vector2b.svg
/* harmony default export */ const Vector2b = ("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTciIGhlaWdodD0iMzEiIHZpZXdCb3g9IjAgMCAxNyAzMSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTAuMTM5ODkzIDE1LjEyQzAuMTM5ODkzIDIzLjQyIDYuODg5ODkgMzAuMTggMTUuMTk5OSAzMC4xOEgxNi4zNzk5VjIzLjVIMTUuMTk5OUMxMC41Nzk5IDIzLjUgNi44Mjk5IDE5Ljc0IDYuODI5OSAxNS4xM1Y2LjgxMDAxSDE2LjM4OTlWMC4wNzAwMDczSDAuMTQ5ODk1VjE1LjEzTDAuMTM5ODkzIDE1LjEyWiIgZmlsbD0iIzNGM0YzRiIvPgo8L3N2Zz4K");
;// CONCATENATED MODULE: ./src/images/Vector4.svg
/* harmony default export */ const Vector4 = ("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTciIGhlaWdodD0iMzEiIHZpZXdCb3g9IjAgMCAxNyAzMSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTE1LjU1OTkgMEM3LjI1OTg4IDAgMC40OTk4NzggNi43OCAwLjQ5OTg3OCAxNS4xMlYzMC4xOEg3LjE3OTg4VjE1LjEyQzcuMTc5ODggMTAuNSAxMC45Mzk5IDYuNzUgMTUuNTQ5OSA2Ljc1SDE2LjcyOTlWMEgxNS41NDk5SDE1LjU1OTlaIiBmaWxsPSIjM0YzRjNGIi8+Cjwvc3ZnPgo=");
;// CONCATENATED MODULE: ./src/images/Vector3b.svg
/* harmony default export */ const Vector3b = ("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzEiIGhlaWdodD0iMzEiIHZpZXdCb3g9IjAgMCAzMSAzMSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTE1Ljc3OTkgMEM3LjQzOTkxIDAgMC42NTk5MTIgNi43OCAwLjY1OTkxMiAxNS4xMkMwLjY1OTkxMiAyMy40NiA3LjQzOTkxIDMwLjE4IDE1Ljc3OTkgMzAuMThDMjQuMTE5OSAzMC4xOCAzMC44Mzk5IDIzLjQzIDMwLjgzOTkgMTUuMTJDMzAuODM5OSA2LjgxIDI0LjA3OTkgMCAxNS43Nzk5IDBaTTE1Ljc3OTkgMjMuNUMxMS4xMjk5IDIzLjUgNy4zMzk5IDE5Ljc0IDcuMzM5OSAxNS4xM0M3LjMzOTkgMTAuNTIgMTEuMTI5OSA2Ljc2IDE1Ljc3OTkgNi43NkMyMC40Mjk5IDYuNzYgMjQuMTQ5OSAxMC41MiAyNC4xNDk5IDE1LjEzQzI0LjE0OTkgMTkuNzQgMjAuMzg5OSAyMy41IDE1Ljc3OTkgMjMuNVoiIGZpbGw9IiMzRjNGM0YiLz4KPC9zdmc+Cg==");
;// CONCATENATED MODULE: ./src/images/Vector6b.svg
/* harmony default export */ const Vector6b = ("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iOCIgaGVpZ2h0PSI4IiB2aWV3Qm94PSIwIDAgOCA4IiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8cGF0aCBkPSJNMC44Nzk4ODMgNC4yMzk5OUMwLjg3OTg4MyAyLjIwOTk5IDIuMzY5ODcgMC43OTk5ODggNC4xOTk4NyAwLjc5OTk4OEM2LjAyOTg3IDAuNzk5OTg4IDcuNDk5ODggMi4yMDk5OSA3LjQ5OTg4IDQuMjM5OTlDNy40OTk4OCA2LjI2OTk5IDYuMDA5ODcgNy42Nzk5OSA0LjE5OTg3IDcuNjc5OTlDMi4zODk4NyA3LjY3OTk5IDAuODc5ODgzIDYuMjY5OTkgMC44Nzk4ODMgNC4yMzk5OVpNNi43Mzk4OCA0LjIzOTk5QzYuNzM5ODggMi42MTk5OSA1LjY0OTg4IDEuNDc5OTkgNC4xODk4OCAxLjQ3OTk5QzIuNzI5ODggMS40Nzk5OSAxLjYyOTg4IDIuNjA5OTkgMS42Mjk4OCA0LjIzOTk5QzEuNjI5ODggNS44Njk5OSAyLjcyOTg4IDYuOTc5OTkgNC4xODk4OCA2Ljk3OTk5QzUuNjQ5ODggNi45Nzk5OSA2LjczOTg4IDUuODc5OTkgNi43Mzk4OCA0LjIzOTk5Wk0yLjg4OTg4IDIuNDU5OTlINC4yNjk4OEM1LjAxOTg4IDIuNDU5OTkgNS42NDk4NyAyLjc2OTk5IDUuNjQ5ODcgMy41ODk5OUM1LjY0OTg3IDMuOTk5OTkgNS40MDk4OCA0LjM4OTk5IDQuOTk5ODggNC41Mzk5OUw1Ljc3OTg4IDUuOTQ5OTlINC45MTk4OEw0LjMzOTg3IDQuNzc5OTlIMy42Nzk4N1Y1Ljk0OTk5SDIuODg5ODhWMi40NTk5OVpNNC4wOTk4OCA0LjE4OTk5QzQuNTM5ODggNC4xODk5OSA0Ljc4OTg3IDMuOTc5OTkgNC43ODk4NyAzLjYyOTk5QzQuNzg5ODcgMy4zMTk5OSA0LjU5OTg4IDMuMDg5OTkgNC4xMjk4OCAzLjA4OTk5SDMuNjc5ODdWNC4xODk5OUg0LjA5OTg4WiIgZmlsbD0iIzNGM0YzRiIvPgo8L3N2Zz4K");
;// CONCATENATED MODULE: ./src/images/iconconnexion.webp
/* harmony default export */ const iconconnexion = ("data:image/webp;base64,UklGRiwBAABXRUJQVlA4WAoAAAAQAAAAFwAAFwAAQUxQSN8AAAABgFBbb97mgyAG/SCMQcqgZdAycBjIDDwGGoNBEIRCEARB6I/llEJETABq6R7PZ3ojDtNzXE7AabMwHthDBWvNfdGDOMzoxR7El4wdAJMoe+YowCBgivLXhH9aQB0M1ElAspKUZisBuMBQ3xZqlL+xuHqeKun5fD5vC8YTJR++CTYLFnguQlHqYxGn6W5Yuk5Mv0y+rc4+nV3H9MRacrImKZPwPszG9QfPKQhXAOMZ1m639v94DgDdAAbxNZMA9uA3jIZZg8cYinrPfkB6NKxpYWcCvI504jCb5/MZroIaAFZQOCAmAAAA0AIAnQEqGAAYAD6RRJ1KpaOioagIALASCWkAAD2joAD++M8awAA=");
;// CONCATENATED MODULE: ./src/components/Header.js
const Header=({backgroundColor})=>{const{0:navbar,1:setNavbar}=(0,react.useState)(false);return/*#__PURE__*/react.createElement("nav",{className:`w-full ${backgroundColor} bg-opacity-100 z-40 lg:absolute lg:bg-opacity-0`},/*#__PURE__*/react.createElement("div",{className:"justify-between px-6 mx-auto lg:pt-[2px] lg:max-w-7xl lg:items-center lg:flex"},/*#__PURE__*/react.createElement("div",null,/*#__PURE__*/react.createElement("div",{className:"flex items-center justify-between py-3 lg:py-5 lg:block"},/*#__PURE__*/react.createElement(gatsby_browser_entry.Link,{to:"/",className:"flex gap-[1px]"},/*#__PURE__*/react.createElement("img",{"data-aos":"flip-left","data-aos-duration":"500",className:"h-[1.5rem] w-[1.5rem]",src:Vector,alt:"Letter A"}),/*#__PURE__*/react.createElement("img",{"data-aos":"fade-down","data-aos-duration":"500","data-aos-easing":"ease-in",className:"h-[1.5rem] w-[1.5rem] ",src:Vector1b,alt:"Letter U"}),/*#__PURE__*/react.createElement("img",{"data-aos":"fade-down","data-aos-duration":"500","data-aos-delay":"200","data-aos-easing":"ease-in",className:"h-[1.5rem] w-[1.5rem] ml-[-0.3rem]",src:Vector2b,alt:"Letter T"}),/*#__PURE__*/react.createElement("img",{"data-aos":"fade-down","data-aos-duration":"500","data-aos-delay":"400","data-aos-easing":"ease-in",className:"h-[1.5rem] w-[1.5rem] ml-[-0.3rem]",src:Vector3b,alt:"Letter O"}),/*#__PURE__*/react.createElement("img",{"data-aos":"fade-left","data-aos-delay":"700","data-aos-duration":"500","data-aos-easing":"ease-in-out-back",className:"h-[1.5rem] w-[1.5rem] ml-[-0.3rem]",src:Vector4,alt:"Letter R"}),/*#__PURE__*/react.createElement("img",{"data-aos":"fade-left","data-aos-delay":"700","data-aos-duration":"500","data-aos-easing":"ease-in-out-back",className:"h-[1.5rem] w-[1.5rem] ml-[-0.4rem]",src:Vector3b,alt:"Letter O"}),/*#__PURE__*/react.createElement("img",{"data-aos":"fade-left","data-aos-delay":"700","data-aos-duration":"500","data-aos-easing":"ease-in-out-back",className:"h-[1.5rem] w-[1.5rem]",src:Vector3b,alt:"Letter O"}),/*#__PURE__*/react.createElement("img",{"data-aos":"fade-left","data-aos-delay":"700","data-aos-duration":"500","data-aos-easing":"ease-in-out-back",className:"h-[1.5rem] w-[1.5rem] ml-[-0.3rem]",src:Vector2b,alt:"Letter T"}),/*#__PURE__*/react.createElement("div",{className:"flex justify-start items-end ml-[-0.2rem]"},/*#__PURE__*/react.createElement("img",{"data-aos":"fade-in","data-aos-delay":"1350","data-aos-duration":"1500",className:"h-[0.7rem] w-[0.7rem] ",src:Vector6b,alt:"Rights"}))),/*#__PURE__*/react.createElement("div",{className:"lg:hidden"},/*#__PURE__*/react.createElement("button",{"aria-label":"menu",id:"commence",className:"p-2 text-gray-700 rounded-md outline-none ",onClick:()=>setNavbar(!navbar)},navbar?/*#__PURE__*/react.createElement("p",{className:"text-neutral-700 text-xl mr-[5px] font-bold"},"X"):/*#__PURE__*/react.createElement("img",{className:"w-7 h-7",src:menu,alt:"menu"}))))),/*#__PURE__*/react.createElement("div",null,/*#__PURE__*/react.createElement("div",{className:`flex-1 justify-self-center pb-3 mt-8 lg:block lg:pb-0 lg:mt-0 ${navbar?"block":"hidden"}`},/*#__PURE__*/react.createElement("div",{className:"flex flex-col gap-6 items-center justify-center lg:flex-row"},/*#__PURE__*/react.createElement("ul",{className:"w-full items-center justify-center text-center space-y-8 border-b-2 border-neutral-600 pb-10 lg:pb-0 lg:border-b-0 lg:flex lg:space-x-6 lg:space-y-0"},/*#__PURE__*/react.createElement("li",{className:"flex justify-center"},/*#__PURE__*/react.createElement(gatsby_browser_entry.Link,{className:"btn group flex items-center bg-transparent tracking-widest text-white",to:"/"},/*#__PURE__*/react.createElement("span",{className:"relative text-neutral-700 after:transition-transform after:duration-500 after:ease-out after:absolute after:bottom-0 after:left-0 after:block after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-neutral-700 after:content-[''] after:group-hover:origin-bottom-left after:group-hover:scale-x-100"},"PRODUITS"))),/*#__PURE__*/react.createElement("li",{className:"flex justify-center"},/*#__PURE__*/react.createElement(gatsby_browser_entry.Link,{className:"btn group flex items-center bg-transparent tracking-widest text-white",to:"/demo"},/*#__PURE__*/react.createElement("span",{className:"relative  text-neutral-700 after:transition-transform after:duration-500 after:ease-out after:absolute after:bottom-0 after:left-0 after:block after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-neutral-700 after:content-[''] after:group-hover:origin-bottom-left after:group-hover:scale-x-100"},"D\xC9MO"))),/*#__PURE__*/react.createElement("li",{className:"flex justify-center"},/*#__PURE__*/react.createElement(gatsby_browser_entry.Link,{className:"btn group flex items-center bg-transparent tracking-widest text-white",to:"/"},/*#__PURE__*/react.createElement("span",{className:"relative  text-neutral-700 after:transition-transform after:duration-500 after:ease-out after:absolute after:bottom-0 after:left-0 after:block after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-neutral-700 after:content-[''] after:group-hover:origin-bottom-left after:group-hover:scale-x-100"},"SUPPORT"))),/*#__PURE__*/react.createElement("li",{className:"flex justify-center"},/*#__PURE__*/react.createElement(gatsby_browser_entry.Link,{className:"btn group flex items-center bg-transparent tracking-widest text-white",to:"/"},/*#__PURE__*/react.createElement("span",{className:"relative  text-neutral-700 after:transition-transform after:duration-500 after:ease-out after:absolute after:bottom-0 after:left-0 after:block after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-neutral-700 after:content-[''] after:group-hover:origin-bottom-left after:group-hover:scale-x-100"},"CONTACT"))),/*#__PURE__*/react.createElement("li",{className:"text-white  hover:text-indigo-200 lg:hidden"},/*#__PURE__*/react.createElement(gatsby_browser_entry.Link,{to:"/"},/*#__PURE__*/react.createElement("span",{className:" border-2 px-12 py-2 border-neutral-700 rounded-full font-bold text-neutral-700 transition duration-300 ease-in-out hover:bg-neutral-700 hover:text-white"},"CONNEXION"))),/*#__PURE__*/react.createElement("li",{className:"text-white hover:text-indigo-200 lg:hidden"},/*#__PURE__*/react.createElement(gatsby_browser_entry.Link,{to:"/"},/*#__PURE__*/react.createElement("span",{className:"border-2 px-11 py-2 border-neutral-700 rounded-full font-bold text-neutral-700 transition duration-300 ease-in-out hover:bg-neutral-700 hover:text-white"},"COMMENCER"))))))),/*#__PURE__*/react.createElement("div",{className:"hidden space-x-5 items-center lg:flex"},/*#__PURE__*/react.createElement(gatsby_browser_entry.Link,{className:"flex groupe gap-2 items-center btn group  bg-transparent tracking-widest text-white",to:"/"},/*#__PURE__*/react.createElement("span",{className:"relative font-bold pb-[2px] text-neutral-700 after:transition-transform after:duration-500 after:ease-out after:absolute after:bottom-0 after:left-0 after:block after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-neutral-700 after:content-[''] after:group-hover:origin-bottom-left after:group-hover:scale-x-100"},"CONNEXION"),/*#__PURE__*/react.createElement("img",{className:"h-[24px] w-[24px] transition-all duration-200 ease-out group-hover:scale-105",alt:"icon",src:iconconnexion})),/*#__PURE__*/react.createElement(gatsby_browser_entry.Link,{to:"/",className:"flex group btn items-center text-neutral-700 border-[1px] border-neutral-700 rounded-full transition duration-300 ease-in-out hover:bg-neutral-700 hover:text-white"},/*#__PURE__*/react.createElement("span",{className:" px-4 py-2  font-bold "},"COMMENCER"),/*#__PURE__*/react.createElement("svg",{viewBox:"0 0 46 16",xmlns:"http://www.w3.org/2000/svg",className:"-translate-x-2 h-[10px] w-[30px] fill-neutral-700 transition-all duration-300 ease-out group-hover:scale-x-105 group-hover:fill-white"},/*#__PURE__*/react.createElement("path",{transform:"translate(30)",d:"M8,0,6.545,1.455l5.506,5.506H-30V9.039H12.052L6.545,14.545,8,16l8-8Z","data-name":"Path 10"}))))));};/* harmony default export */ const components_Header = (Header);

/***/ }),

/***/ 8678:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7294);
const Layout=({children})=>{return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("main",null,children));};/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Layout);

/***/ }),

/***/ 9357:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7294);
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7076);
/**
 * SEO component that queries for data with
 * Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */function Seo({description,title,children}){var _site$siteMetadata,_site$siteMetadata2;const{site}=(0,gatsby__WEBPACK_IMPORTED_MODULE_1__.useStaticQuery)("63159454");const metaDescription=description||site.siteMetadata.description;const defaultTitle=(_site$siteMetadata=site.siteMetadata)===null||_site$siteMetadata===void 0?void 0:_site$siteMetadata.title;return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("title",null,defaultTitle?`${title} | ${defaultTitle}`:title),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("meta",{name:"description",content:metaDescription}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("meta",{property:"og:title",content:title}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("meta",{property:"og:description",content:metaDescription}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("meta",{property:"og:type",content:"website"}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("meta",{name:"twitter:card",content:"summary"}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("meta",{name:"twitter:creator",content:((_site$siteMetadata2=site.siteMetadata)===null||_site$siteMetadata2===void 0?void 0:_site$siteMetadata2.author)||``}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("meta",{name:"twitter:title",content:title}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("meta",{name:"twitter:description",content:metaDescription}),children);}/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Seo);

/***/ }),

/***/ 6259:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Head": () => (/* binding */ Head),
  "default": () => (/* binding */ pages)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(7294);
// EXTERNAL MODULE: ./node_modules/aos/dist/aos.esm.js
var aos_esm = __webpack_require__(6371);
;// CONCATENATED MODULE: ./src/components/Divider.js
const Divider=()=>{return/*#__PURE__*/react.createElement("div",{className:"w-0 h-0 border-r-[100vw] border-r-[#30F9FC] border-b-[10vw] border-b-neutral-900"});};/* harmony default export */ const components_Divider = (Divider);
;// CONCATENATED MODULE: ./src/components/Dividerleft.js
const Dividerleft=()=>{return/*#__PURE__*/react.createElement("div",{className:"w-0 h-0 border-l-[100vw] border-l-neutral-900 border-b-[10vw] border-b-black "});};/* harmony default export */ const components_Dividerleft = (Dividerleft);
// EXTERNAL MODULE: ./src/components/Dividerleftthree.js
var Dividerleftthree = __webpack_require__(3117);
;// CONCATENATED MODULE: ./src/components/Dividerlefttwo.js
const Dividerlefttwo=()=>{return/*#__PURE__*/react.createElement("div",{className:"w-0 h-0 border-l-[100vw] border-l-white border-b-[10vw] border-b-black "});};/* harmony default export */ const components_Dividerlefttwo = (Dividerlefttwo);
;// CONCATENATED MODULE: ./src/components/Dividerright.js
const Dividerright=()=>{return/*#__PURE__*/react.createElement("div",{className:"w-0 h-0 border-r-[100vw] border-r-black border-b-[10vw] border-b-white "});};/* harmony default export */ const components_Dividerright = (Dividerright);
;// CONCATENATED MODULE: ./src/components/Dividerrightthree.js
const Dividerrightthree=()=>{return/*#__PURE__*/react.createElement("div",{className:"w-0 h-0 border-l-[100vw] border-l-[#30F9FC] border-b-[10vw] border-b-white"});};/* harmony default export */ const components_Dividerrightthree = (Dividerrightthree);
;// CONCATENATED MODULE: ./src/components/Dividerrighttwo.js
const Dividerrighttwo=()=>{return/*#__PURE__*/react.createElement("div",{className:"w-0 h-0 border-r-[100vw] border-r-black border-b-[10vw] border-b-lime-300"});};/* harmony default export */ const components_Dividerrighttwo = (Dividerrighttwo);
// EXTERNAL MODULE: ./.cache/gatsby-browser-entry.js + 11 modules
var gatsby_browser_entry = __webpack_require__(7076);
// EXTERNAL MODULE: ./node_modules/gatsby-plugin-image/node_modules/camelcase/index.js
var camelcase = __webpack_require__(2369);
// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__(5697);
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);
;// CONCATENATED MODULE: ./node_modules/gatsby-plugin-image/dist/gatsby-image.module.js
function n(){return n=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var i in a)Object.prototype.hasOwnProperty.call(a,i)&&(e[i]=a[i]);}return e;},n.apply(this,arguments);}function o(e,t){if(null==e)return{};var a,i,r={},n=Object.keys(e);for(i=0;i<n.length;i++)t.indexOf(a=n[i])>=0||(r[a]=e[a]);return r;}var s=(/* unused pure expression or super */ null && ([.25,.5,1,2])),l=(/* unused pure expression or super */ null && ([750,1080,1366,1920])),u=(/* unused pure expression or super */ null && ([320,654,768,1024,1366,1600,1920,2048,2560,3440,3840,4096])),d=function(e){return console.warn(e);},c=function(e,t){return e-t;},h=function(e){return e.map(function(e){return e.src+" "+e.width+"w";}).join(",\n");};function g(e){var t=e.lastIndexOf(".");if(-1!==t){var a=e.slice(t+1);if("jpeg"===a)return"jpg";if(3===a.length||4===a.length)return a;}}function p(e){var t=e.layout,i=void 0===t?"constrained":t,r=e.width,o=e.height,s=e.sourceMetadata,l=e.breakpoints,u=e.aspectRatio,d=e.formats,c=void 0===d?["auto","webp"]:d;return c=c.map(function(e){return e.toLowerCase();}),i=a(i),r&&o?n({},e,{formats:c,layout:i,aspectRatio:r/o}):(s.width&&s.height&&!u&&(u=s.width/s.height),"fullWidth"===i?(r=r||s.width||l[l.length-1],o=o||Math.round(r/(u||1.3333333333333333))):(r||(r=o&&u?o*u:s.width?s.width:o?Math.round(o/1.3333333333333333):800),u&&!o?o=Math.round(r/u):u||(u=r/o)),n({},e,{width:r,height:o,aspectRatio:u,layout:i,formats:c}));}function m(e,t){var a;return void 0===t&&(t=20),null==(a=(0,(e=p(e)).generateImageSource)(e.filename,t,Math.round(t/e.aspectRatio),e.sourceMetadata.format||"jpg",e.fit,e.options))?void 0:a.src;}function f(e){var t,a=(e=p(e)).pluginName,i=e.sourceMetadata,r=e.generateImageSource,o=e.layout,u=e.fit,c=e.options,m=e.width,f=e.height,b=e.filename,k=e.reporter,E=void 0===k?{warn:d}:k,M=e.backgroundColor,S=e.placeholderURL;if(a||E.warn('[gatsby-plugin-image] "generateImageData" was not passed a plugin name'),"function"!=typeof r)throw new Error("generateImageSource must be a function");i&&(i.width||i.height)?i.format||(i.format=g(b)):i={width:m,height:f,format:(null==(t=i)?void 0:t.format)||g(b)||"auto"};var N=new Set(e.formats);(0===N.size||N.has("auto")||N.has(""))&&(N.delete("auto"),N.delete(""),N.add(i.format)),N.has("jpg")&&N.has("png")&&(E.warn("["+a+"] Specifying both 'jpg' and 'png' formats is not supported. Using 'auto' instead"),N.delete("jpg"===i.format?"png":"jpg"));var x=function(e){var t=e.filename,a=e.layout,i=void 0===a?"constrained":a,r=e.sourceMetadata,o=e.reporter,u=void 0===o?{warn:d}:o,c=e.breakpoints,h=void 0===c?l:c,g=Object.entries({width:e.width,height:e.height}).filter(function(e){var t=e[1];return"number"==typeof t&&t<1;});if(g.length)throw new Error("Specified dimensions for images must be positive numbers (> 0). Problem dimensions you have are "+g.map(function(e){return e.join(": ");}).join(", "));return"fixed"===i?function(e){var t=e.filename,a=e.sourceMetadata,i=e.width,r=e.height,n=e.fit,o=void 0===n?"cover":n,l=e.outputPixelDensities,u=e.reporter,c=void 0===u?{warn:d}:u,h=a.width/a.height,g=v(void 0===l?s:l);if(i&&r){var p=y(a,{width:i,height:r,fit:o});i=p.width,r=p.height,h=p.aspectRatio;}i?r||(r=Math.round(i/h)):i=r?Math.round(r*h):800;var m=i;if(a.width<i||a.height<r){var f=a.width<i?"width":"height";c.warn("\nThe requested "+f+' "'+("width"===f?i:r)+'px" for the image '+t+" was larger than the actual image "+f+" of "+a[f]+"px. If possible, replace the current image with a larger one."),"width"===f?(i=a.width,r=Math.round(i/h)):i=(r=a.height)*h;}return{sizes:g.filter(function(e){return e>=1;}).map(function(e){return Math.round(e*i);}).filter(function(e){return e<=a.width;}),aspectRatio:h,presentationWidth:m,presentationHeight:Math.round(m/h),unscaledWidth:i};}(e):"constrained"===i?w(e):"fullWidth"===i?w(n({breakpoints:h},e)):(u.warn("No valid layout was provided for the image at "+t+". Valid image layouts are fixed, fullWidth, and constrained. Found "+i),{sizes:[r.width],presentationWidth:r.width,presentationHeight:r.height,aspectRatio:r.width/r.height,unscaledWidth:r.width});}(n({},e,{sourceMetadata:i})),I={sources:[]},W=e.sizes;W||(W=function(e,t){switch(t){case"constrained":return"(min-width: "+e+"px) "+e+"px, 100vw";case"fixed":return e+"px";case"fullWidth":return"100vw";default:return;}}(x.presentationWidth,o)),N.forEach(function(e){var t=x.sizes.map(function(t){var i=r(b,t,Math.round(t/x.aspectRatio),e,u,c);if(null!=i&&i.width&&i.height&&i.src&&i.format)return i;E.warn("["+a+"] The resolver for image "+b+" returned an invalid value.");}).filter(Boolean);if("jpg"===e||"png"===e||"auto"===e){var i=t.find(function(e){return e.width===x.unscaledWidth;})||t[0];i&&(I.fallback={src:i.src,srcSet:h(t),sizes:W});}else{var n;null==(n=I.sources)||n.push({srcSet:h(t),sizes:W,type:"image/"+e});}});var j={images:I,layout:o,backgroundColor:M};switch(S&&(j.placeholder={fallback:S}),o){case"fixed":j.width=x.presentationWidth,j.height=x.presentationHeight;break;case"fullWidth":j.width=1,j.height=1/x.aspectRatio;break;case"constrained":j.width=e.width||x.presentationWidth||1,j.height=(j.width||1)/x.aspectRatio;}return j;}var v=function(e){return Array.from(new Set([1].concat(e))).sort(c);};function w(e){var t,a=e.sourceMetadata,i=e.width,r=e.height,n=e.fit,o=void 0===n?"cover":n,l=e.outputPixelDensities,u=e.breakpoints,d=e.layout,h=a.width/a.height,g=v(void 0===l?s:l);if(i&&r){var p=y(a,{width:i,height:r,fit:o});i=p.width,r=p.height,h=p.aspectRatio;}i=i&&Math.min(i,a.width),r=r&&Math.min(r,a.height),i||r||(r=(i=Math.min(800,a.width))/h),i||(i=r*h);var m=i;return(a.width<i||a.height<r)&&(i=a.width,r=a.height),i=Math.round(i),(null==u?void 0:u.length)>0?(t=u.filter(function(e){return e<=a.width;})).length<u.length&&!t.includes(a.width)&&t.push(a.width):t=(t=g.map(function(e){return Math.round(e*i);})).filter(function(e){return e<=a.width;}),"constrained"!==d||t.includes(i)||t.push(i),{sizes:t=t.sort(c),aspectRatio:h,presentationWidth:m,presentationHeight:Math.round(m/h),unscaledWidth:i};}function y(e,t){var a=e.width/e.height,i=t.width,r=t.height;switch(t.fit){case"fill":i=t.width?t.width:e.width,r=t.height?t.height:e.height;break;case"inside":var n=t.width?t.width:Number.MAX_SAFE_INTEGER,o=t.height?t.height:Number.MAX_SAFE_INTEGER;i=Math.min(n,Math.round(o*a)),r=Math.min(o,Math.round(n/a));break;case"outside":var s=t.width?t.width:0,l=t.height?t.height:0;i=Math.max(s,Math.round(l*a)),r=Math.max(l,Math.round(s/a));break;default:t.width&&!t.height&&(i=t.width,r=Math.round(t.width/a)),t.height&&!t.width&&(i=Math.round(t.height*a),r=t.height);}return{width:i,height:r,aspectRatio:i/r};}var b=(/* unused pure expression or super */ null && (["baseUrl","urlBuilder","sourceWidth","sourceHeight","pluginName","formats","breakpoints","options"])),k=(/* unused pure expression or super */ null && (["images","placeholder"]));function E(){return true&&true;}var M=function(e){var t;return function(e){var t,a;return Boolean(null==e||null==(t=e.images)||null==(a=t.fallback)?void 0:a.src);}(e)?e:function(e){return Boolean(null==e?void 0:e.gatsbyImageData);}(e)?e.gatsbyImageData:function(e){return Boolean(null==e?void 0:e.gatsbyImage);}(e)?e.gatsbyImage:null==e||null==(t=e.childImageSharp)?void 0:t.gatsbyImageData;},S=function(e){var t,a,i;return null==(t=M(e))||null==(a=t.images)||null==(i=a.fallback)?void 0:i.src;},N=function(e){var t,a,i;return null==(t=M(e))||null==(a=t.images)||null==(i=a.fallback)?void 0:i.srcSet;};function x(e){var t,a=e.baseUrl,i=e.urlBuilder,r=e.sourceWidth,s=e.sourceHeight,l=e.pluginName,d=void 0===l?"getImageData":l,c=e.formats,h=void 0===c?["auto"]:c,g=e.breakpoints,p=e.options,m=o(e,b);return null!=(t=g)&&t.length||"fullWidth"!==m.layout&&"FULL_WIDTH"!==m.layout||(g=u),f(n({},m,{pluginName:d,generateImageSource:function(e,t,a,r){return{width:t,height:a,format:r,src:i({baseUrl:e,width:t,height:a,options:p,format:r})};},filename:a,formats:h,breakpoints:g,sourceMetadata:{width:r,height:s,format:"auto"}}));}function I(e,t){var a,i,r,s=e.images,l=e.placeholder,u=n({},o(e,k),{images:n({},s,{sources:[]}),placeholder:l&&n({},l,{sources:[]})});return t.forEach(function(t){var a,i=t.media,r=t.image;i?(r.layout!==e.layout&&"development"==="production"&&0,(a=u.images.sources).push.apply(a,r.images.sources.map(function(e){return n({},e,{media:i});}).concat([{media:i,srcSet:r.images.fallback.srcSet}])),u.placeholder&&u.placeholder.sources.push({media:i,srcSet:r.placeholder.fallback})): false&&0;}),(a=u.images.sources).push.apply(a,s.sources),null!=l&&l.sources&&(null==(i=u.placeholder)||(r=i.sources).push.apply(r,l.sources)),u;}var W,j=["src","srcSet","loading","alt","shouldLoad"],R=["fallback","sources","shouldLoad"],_=function(t){var a=t.src,i=t.srcSet,r=t.loading,s=t.alt,l=void 0===s?"":s,u=t.shouldLoad,d=o(t,j);return/*#__PURE__*/react.createElement("img",n({},d,{decoding:"async",loading:r,src:u?a:void 0,"data-src":u?void 0:a,srcSet:u?i:void 0,"data-srcset":u?void 0:i,alt:l}));},A=function(t){var a=t.fallback,i=t.sources,r=void 0===i?[]:i,s=t.shouldLoad,l=void 0===s||s,u=o(t,R),d=u.sizes||(null==a?void 0:a.sizes),c=/*#__PURE__*/react.createElement(_,n({},u,a,{sizes:d,shouldLoad:l}));return r.length?/*#__PURE__*/react.createElement("picture",null,r.map(function(t){var a=t.media,i=t.srcSet,r=t.type;return/*#__PURE__*/react.createElement("source",{key:a+"-"+r+"-"+i,type:r,media:a,srcSet:l?i:void 0,"data-srcset":l?void 0:i,sizes:d});}),c):c;};_.propTypes={src:prop_types.string.isRequired,alt:prop_types.string.isRequired,sizes:prop_types.string,srcSet:prop_types.string,shouldLoad:prop_types.bool},A.displayName="Picture",A.propTypes={alt:prop_types.string.isRequired,shouldLoad:prop_types.bool,fallback:prop_types.exact({src:prop_types.string.isRequired,srcSet:prop_types.string,sizes:prop_types.string}),sources:prop_types.arrayOf(prop_types.oneOfType([prop_types.exact({media:prop_types.string.isRequired,type:prop_types.string,sizes:prop_types.string,srcSet:prop_types.string.isRequired}),prop_types.exact({media:prop_types.string,type:prop_types.string.isRequired,sizes:prop_types.string,srcSet:prop_types.string.isRequired})]))};var O=["fallback"],T=function(t){var a=t.fallback,i=o(t,O);return a?/*#__PURE__*/react.createElement(A,n({},i,{fallback:{src:a},"aria-hidden":!0,alt:""})):/*#__PURE__*/react.createElement("div",n({},i));};T.displayName="Placeholder",T.propTypes={fallback:prop_types.string,sources:null==(W=A.propTypes)?void 0:W.sources,alt:function(e,t,a){return e[t]?new Error("Invalid prop `"+t+"` supplied to `"+a+"`. Validation failed."):null;}};var z=function(t){return/*#__PURE__*/react.createElement(react.Fragment,null,/*#__PURE__*/react.createElement(A,n({},t)),/*#__PURE__*/react.createElement("noscript",null,/*#__PURE__*/react.createElement(A,n({},t,{shouldLoad:!0}))));};z.displayName="MainImage",z.propTypes=A.propTypes;var L=["children"],q=function(){return/*#__PURE__*/react.createElement("script",{type:"module",dangerouslySetInnerHTML:{__html:'const t="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype;if(t){const t=document.querySelectorAll("img[data-main-image]");for(let e of t){e.dataset.src&&(e.setAttribute("src",e.dataset.src),e.removeAttribute("data-src")),e.dataset.srcset&&(e.setAttribute("srcset",e.dataset.srcset),e.removeAttribute("data-srcset"));const t=e.parentNode.querySelectorAll("source[data-srcset]");for(let e of t)e.setAttribute("srcset",e.dataset.srcset),e.removeAttribute("data-srcset");e.complete&&(e.style.opacity=1,e.parentNode.parentNode.querySelector("[data-placeholder-image]").style.opacity=0)}}'}});},C=function(t){var a=t.layout,i=t.width,r=t.height;return"fullWidth"===a?/*#__PURE__*/react.createElement("div",{"aria-hidden":!0,style:{paddingTop:r/i*100+"%"}}):"constrained"===a?/*#__PURE__*/react.createElement("div",{style:{maxWidth:i,display:"block"}},/*#__PURE__*/react.createElement("img",{alt:"",role:"presentation","aria-hidden":"true",src:"data:image/svg+xml;charset=utf-8,%3Csvg height='"+r+"' width='"+i+"' xmlns='http://www.w3.org/2000/svg' version='1.1'%3E%3C/svg%3E",style:{maxWidth:"100%",display:"block",position:"static"}})):null;},D=function(a){var i=a.children,r=o(a,L);return/*#__PURE__*/react.createElement(react.Fragment,null,/*#__PURE__*/react.createElement(C,n({},r)),i,/*#__PURE__*/react.createElement(q,null));},P=["as","className","class","style","image","loading","imgClassName","imgStyle","backgroundColor","objectFit","objectPosition"],H=["style","className"],F=function(e){return e.replace(/\n/g,"");},B=function(t){var a=t.as,i=void 0===a?"div":a,r=t.className,s=t.class,l=t.style,u=t.image,d=t.loading,c=void 0===d?"lazy":d,h=t.imgClassName,g=t.imgStyle,p=t.backgroundColor,m=t.objectFit,f=t.objectPosition,v=o(t,P);if(!u)return console.warn("[gatsby-plugin-image] Missing image prop"),null;s&&(r=s),g=n({objectFit:m,objectPosition:f,backgroundColor:p},g);var w=u.width,y=u.height,b=u.layout,k=u.images,M=u.placeholder,S=u.backgroundColor,N=function(e,t,a){var i={},r="gatsby-image-wrapper";return E()||(i.position="relative",i.overflow="hidden"),"fixed"===a?(i.width=e,i.height=t):"constrained"===a&&(E()||(i.display="inline-block",i.verticalAlign="top"),r="gatsby-image-wrapper gatsby-image-wrapper-constrained"),{className:r,"data-gatsby-image-wrapper":"",style:i};}(w,y,b),x=N.style,I=N.className,W=o(N,H),j={fallback:void 0,sources:[]};return k.fallback&&(j.fallback=n({},k.fallback,{srcSet:k.fallback.srcSet?F(k.fallback.srcSet):void 0})),k.sources&&(j.sources=k.sources.map(function(e){return n({},e,{srcSet:F(e.srcSet)});})),/*#__PURE__*/react.createElement(i,n({},W,{style:n({},x,l,{backgroundColor:p}),className:I+(r?" "+r:"")}),/*#__PURE__*/react.createElement(D,{layout:b,width:w,height:y},/*#__PURE__*/react.createElement(T,n({},function(e,t,a,i,r,o,s,l){var u={};o&&(u.backgroundColor=o,"fixed"===a?(u.width=i,u.height=r,u.backgroundColor=o,u.position="relative"):("constrained"===a||"fullWidth"===a)&&(u.position="absolute",u.top=0,u.left=0,u.bottom=0,u.right=0)),s&&(u.objectFit=s),l&&(u.objectPosition=l);var d=n({},e,{"aria-hidden":!0,"data-placeholder-image":"",style:n({opacity:1,transition:"opacity 500ms linear"},u)});return E()||(d.style={height:"100%",left:0,position:"absolute",top:0,width:"100%"}),d;}(M,0,b,w,y,S,m,f))),/*#__PURE__*/react.createElement(z,n({"data-gatsby-image-ssr":"",className:h},v,function(e,t,a,i,r){return void 0===r&&(r={}),E()||(r=n({height:"100%",left:0,position:"absolute",top:0,transform:"translateZ(0)",transition:"opacity 250ms linear",width:"100%",willChange:"opacity"},r)),n({},a,{loading:i,shouldLoad:e,"data-main-image":"",style:n({},r,{opacity:0})});}("eager"===c,0,j,c,g)))));},G=["src","__imageData","__error","width","height","aspectRatio","tracedSVGOptions","placeholder","formats","quality","transformOptions","jpgOptions","pngOptions","webpOptions","avifOptions","blurredOptions","breakpoints","outputPixelDensities"],V=function(t){return function(a){var i=a.src,r=a.__imageData,s=a.__error,l=o(a,G);return s&&console.warn(s),r?/*#__PURE__*/react.createElement(t,n({image:r},l)):(console.warn("Image not loaded",i),s||"development"!=="production"||0,null);};}(B),U=function(e,t){return"fullWidth"!==e.layout||"width"!==t&&"height"!==t||!e[t]?prop_types_default().number.apply((prop_types_default()),[e,t].concat([].slice.call(arguments,2))):new Error('"'+t+'" '+e[t]+" may not be passed when layout is fullWidth.");},X=new Set(["fixed","fullWidth","constrained"]),Y={src:(prop_types_default()).string.isRequired,alt:function(e,t,a){return e.alt||""===e.alt?prop_types_default().string.apply((prop_types_default()),[e,t,a].concat([].slice.call(arguments,3))):new Error('The "alt" prop is required in '+a+'. If the image is purely presentational then pass an empty string: e.g. alt="". Learn more: https://a11y-style-guide.com/style-guide/section-media.html');},width:U,height:U,sizes:(prop_types_default()).string,layout:function(e){if(void 0!==e.layout&&!X.has(e.layout))return new Error("Invalid value "+e.layout+'" provided for prop "layout". Defaulting to "constrained". Valid values are "fixed", "fullWidth" or "constrained".');}};V.displayName="StaticImage",V.propTypes=Y;
;// CONCATENATED MODULE: ./src/components/Experience.js
const Experience=()=>{return/*#__PURE__*/react.createElement("section",{className:"bg-white pt-6 pb-[8.5rem]"},/*#__PURE__*/react.createElement("div",{className:"flex flex-col items-center text-neutral-700"},/*#__PURE__*/react.createElement("div",{className:"flex flex-col justify-center items-center text-center px-6"},/*#__PURE__*/react.createElement("h1",{className:"flex flex-col text-2xl font-bold  md:text-5xl lg:text-6xl"},/*#__PURE__*/react.createElement("span",{className:"pt-2 bg-clip-text text-transparent bg-gradient-to-r from-[#30F9FC] to-lime-300"},"UNE EXP\xC9RIENCE OPTIMIS\xC9E")),/*#__PURE__*/react.createElement("p",{className:" pt-2"},"POUR VOUS ET VOS CLIENTS"),/*#__PURE__*/react.createElement("p",{className:" text-sm max-w-[30rem] py-10 "},"A small team of people driven by performance and excellence. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi."),/*#__PURE__*/react.createElement("div",{className:"rounded-xl mb-6 bg-gray-300 h-[2px] max-w-[30rem] w-full "}),/*#__PURE__*/react.createElement(gatsby_browser_entry.Link,{to:"/",className:"flex group btn items-center text-neutral-700 border-[1px] border-neutral-700 rounded-full transition duration-300 ease-in-out hover:bg-neutral-700 hover:text-white"},/*#__PURE__*/react.createElement("span",{className:" px-4 py-2  font-bold "},"COMMENCER"),/*#__PURE__*/react.createElement("svg",{viewBox:"0 0 46 16",xmlns:"http://www.w3.org/2000/svg",id:"arrow-horizontal",className:"-translate-x-2 h-[10px] w-[30px] fill-neutral-700 transition-all duration-300 ease-out group-hover:scale-x-105 group-hover:fill-white"},/*#__PURE__*/react.createElement("path",{transform:"translate(30)",d:"M8,0,6.545,1.455l5.506,5.506H-30V9.039H12.052L6.545,14.545,8,16l8-8Z","data-name":"Path 10"})))),/*#__PURE__*/react.createElement("div",{className:"flex flex-col gap-10 items-center p-10 lg:flex-row"},/*#__PURE__*/react.createElement("div",{"data-aos":"fade-right","data-aos-duration":"1000"},/*#__PURE__*/react.createElement(V,{src:"../images/Images1-min.svg",alt:"travail",__imageData:__webpack_require__(96)})),/*#__PURE__*/react.createElement("div",{className:"flex flex-col max-w-[25rem] gap-4 border-gray-300 border-solid border-l-2 pl-10 py-6"},/*#__PURE__*/react.createElement("h2",{className:"text-lg font-bold sm:text-2xl md:text-3xl lg:text-4xl"},"DES SITES WEB ULTRA RAPIDES"),/*#__PURE__*/react.createElement("p",null,"Avec l'utilisation des derni\xE8res technologies pour offrir des sites web ultra rapides."))),/*#__PURE__*/react.createElement("div",{className:"flex flex-col gap-10 items-center p-10 lg:flex-row"},/*#__PURE__*/react.createElement("div",{"data-aos":"fade-left","data-aos-duration":"1000",className:"lg:order-2"},/*#__PURE__*/react.createElement(V,{src:"../images/Images2-min.svg",alt:"travail",__imageData:__webpack_require__(7850)})),/*#__PURE__*/react.createElement("div",{className:"flex flex-col max-w-[25rem] gap-4 border-gray-300 border-solid border-l-2 pl-10 py-6 lg:order-1 md:border-l-0 md:border-r-2 md:pl-0 md:pr-10"},/*#__PURE__*/react.createElement("h2",{className:"text-lg font-bold sm:text-2xl md:text-3xl lg:text-4xl"},"PLATEFORME (CMS)FACILE \xC0 UTILISER"),/*#__PURE__*/react.createElement("p",null,"Pour l'int\xE9gration de contenus personnalis\xE9s sur le site Web (article de blogue, landing pages, promotions du mois, textes SEO et plus)."))),/*#__PURE__*/react.createElement("div",{className:"flex flex-col gap-10 items-center p-10 lg:flex-row"},/*#__PURE__*/react.createElement("div",{"data-aos":"fade-right","data-aos-duration":"1000"},/*#__PURE__*/react.createElement(V,{src:"../images/Images3-min.svg",alt:"travail",__imageData:__webpack_require__(3903)})),/*#__PURE__*/react.createElement("div",{className:"flex flex-col max-w-[25rem] gap-4 border-gray-300 border-solid border-l-2 pl-10 py-6"},/*#__PURE__*/react.createElement("h2",{className:"text-lg font-bold sm:text-2xl md:text-3xl lg:text-4xl"},"DEMANDES WEB DE QUALIT\xC9 (LEADS)"),/*#__PURE__*/react.createElement("p",null,"Offrant un taux de conversion plus \xE9lev\xE9 et un co\xFBt d'acquisition plus bas."))),/*#__PURE__*/react.createElement("div",{className:"flex flex-col gap-10 items-center p-10 lg:flex-row"},/*#__PURE__*/react.createElement("div",{"data-aos":"fade-left","data-aos-duration":"1000",className:"lg:order-2"},/*#__PURE__*/react.createElement(V,{src:"../images/Imags-min.svg",alt:"travail",__imageData:__webpack_require__(113)})),/*#__PURE__*/react.createElement("div",{className:"flex flex-col max-w-[25rem] gap-4 border-gray-300 border-solid border-l-2 pl-10 py-6 lg:order-1 md:border-l-0 md:border-r-2 md:pl-0 md:pr-10"},/*#__PURE__*/react.createElement("h2",{className:"text-lg font-bold sm:text-2xl md:text-3xl lg:text-4xl"},"CONCEPTION GRAPHIQUE ET EXP\xC9RIENCE EN LIGNE OPTIMALE"),/*#__PURE__*/react.createElement("p",null,"Pour faciliter la navigation."))),/*#__PURE__*/react.createElement("div",{className:"flex flex-col gap-10 items-center p-10 lg:flex-row"},/*#__PURE__*/react.createElement("div",{"data-aos":"fade-right","data-aos-duration":"1000"},/*#__PURE__*/react.createElement(V,{src:"../images/Images4-min.svg",alt:"travail",__imageData:__webpack_require__(6069)})),/*#__PURE__*/react.createElement("div",{className:"flex flex-col max-w-[25rem] gap-4 border-gray-300 border-solid border-l-2 pl-10 py-6"},/*#__PURE__*/react.createElement("h2",{className:"text-lg font-bold sm:text-2xl md:text-3xl lg:text-4xl"},"MISES A JOUR AUTOMATIS\xC9E DES PROGRAMMES ET PROMOTIONS"),/*#__PURE__*/react.createElement("p",null,"Des manifacturiers."))),/*#__PURE__*/react.createElement("div",{className:"flex flex-col gap-10 items-center p-10 lg:flex-row"},/*#__PURE__*/react.createElement("div",{"data-aos":"fade-left","data-aos-duration":"1000",className:"lg:order-2"},/*#__PURE__*/react.createElement(V,{src:"../images/Images5-min.svg",alt:"travail",__imageData:__webpack_require__(1450)})),/*#__PURE__*/react.createElement("div",{className:"flex flex-col max-w-[25rem] gap-4 border-gray-300 border-solid border-l-2 pl-10 py-6 lg:order-1 md:border-l-0 md:border-r-2 md:pl-0 md:pr-10"},/*#__PURE__*/react.createElement("h2",{className:"text-lg font-bold sm:text-2xl md:text-3xl lg:text-4xl"},"OPTIMISATION SEO"),/*#__PURE__*/react.createElement("p",null,"Incluant la gestion de la taille des images, des balises, des donnees structur\xE9es, des sitemaps, etc.")))));};/* harmony default export */ const components_Experience = (Experience);
// EXTERNAL MODULE: ./src/components/Contact.js + 1 modules
var Contact = __webpack_require__(4711);
// EXTERNAL MODULE: ./src/components/Footer.js
var Footer = __webpack_require__(6947);
;// CONCATENATED MODULE: ./src/components/Hero.js
const Hero=()=>{return/*#__PURE__*/react.createElement("section",{className:"bg-gradient-to-t from-[#30F9FC] to-lime-300"},/*#__PURE__*/react.createElement("div",{className:"flex flex-col h-full max-w-[1280px] mx-auto px-6 gap-2 pt-8 lg:pt-16 lg:flex-row lg:items-center"},/*#__PURE__*/react.createElement("div",{className:"flex flex-col justify-center items-center text-center lg:items-start lg:text-start"},/*#__PURE__*/react.createElement("h1",{className:"flex flex-col z-20 text-neutral-700 text-2xl font-bold  md:text-5xl lg:text-6xl"},/*#__PURE__*/react.createElement("span",null,"DES SITES WEB"),/*#__PURE__*/react.createElement("span",{className:"whitespace-nowrap"},"DE CONCESSIONAIRES")),/*#__PURE__*/react.createElement("p",{className:"text-neutral-700 text-lg z-20 pt-3"},"CON\xC7US POUR G\xC9N\xC9RER DES LEADS DE QUALIT\xC9"),/*#__PURE__*/react.createElement(gatsby_browser_entry.Link,{className:"mt-10",to:"/demo"},/*#__PURE__*/react.createElement("span",{className:"px-4 py-3 border-neutral-700 border-[1px] rounded-full font-bold text-neutral-700 transition duration-300 ease-in-out hover:bg-neutral-700 hover:text-white"},"DEMANDER UNE D\xC9MO"))),/*#__PURE__*/react.createElement("div",{className:"relative mt-[1rem] lg:ml-[-18rem]"},/*#__PURE__*/react.createElement("div",{"data-aos":"fade-up","data-aos-duration":"2000",className:"absolute"},/*#__PURE__*/react.createElement(V,{src:"../images/stars.webp",alt:"stars",loading:"eager",__imageData:__webpack_require__(5622)})),/*#__PURE__*/react.createElement(V,{src:"../images/Images-min.svg",alt:"stock",loading:"eager",__imageData:__webpack_require__(5628)}))));};/* harmony default export */ const components_Hero = (Hero);
;// CONCATENATED MODULE: ./src/components/Integration.js
const Integration=()=>{return/*#__PURE__*/react.createElement("section",{className:"bg-black relative z-0 py-6"},/*#__PURE__*/react.createElement("div",{className:"flex flex-col  max-w-7xl mx-auto"},/*#__PURE__*/react.createElement("h1",{"data-aos":"fade-up",className:"text-center py-6 text-2xl font-bold  md:text-5xl lg:text-6xl"},/*#__PURE__*/react.createElement("span",{className:"bg-clip-text py-2 text-transparent bg-gradient-to-r from-[#30F9FC] to-lime-300"},"INT\xC9GRATION")),/*#__PURE__*/react.createElement("div",{className:"flex flex-col gap-10 items-center p-10 lg:flex-row"},/*#__PURE__*/react.createElement("div",{className:"relative"},/*#__PURE__*/react.createElement("div",{"data-aos":"fade-in","data-aos-duration":"1500"},/*#__PURE__*/react.createElement("div",{className:"absolute -z-10 translate-y-[1rem] translate-x-[-1rem] h-full w-full bg-gradient-to-t from-[#30F9FC] to-lime-300"})),/*#__PURE__*/react.createElement(V,{src:"../images/auto.webp",alt:"travail",__imageData:__webpack_require__(7241)})),/*#__PURE__*/react.createElement("div",{className:"flex flex-col gap-4 py-6 md:pl-10 md:border-gray-700 md:border-solid md:border-l-2"},/*#__PURE__*/react.createElement("h2",{className:"flex flex-col"},/*#__PURE__*/react.createElement("span",{className:"bg-clip-text text-transparent bg-gradient-to-r from-[#30F9FC] to-lime-300 text-lg font-bold sm:text-2xl md:text-3xl lg:text-4xl"},"INT\xC9GRATION"),/*#__PURE__*/react.createElement("span",{className:"font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#30F9FC] to-lime-300"},"AVEC LES MEILLEURES PLATEFORMES")),/*#__PURE__*/react.createElement("p",{className:" text-white"},"Notre portfolio inclus d\xE9j\xE0 plusieurs marques de v\xE9hicules neufs:"),/*#__PURE__*/react.createElement("ul",{className:"list-disc text-white font-bold ml-6"},/*#__PURE__*/react.createElement("li",null,"Hyundai"),/*#__PURE__*/react.createElement("li",null,"Kia"),/*#__PURE__*/react.createElement("li",null,"Nissan"),/*#__PURE__*/react.createElement("li",null,"Mazda"),/*#__PURE__*/react.createElement("li",null,"Subaru"),/*#__PURE__*/react.createElement("li",null,"Mitsubishi"),/*#__PURE__*/react.createElement("li",null,"Infiniti")),/*#__PURE__*/react.createElement("p",{className:" text-white"},"Et plusieurs autres marques en d\xE9veloppement."),/*#__PURE__*/react.createElement(gatsby_browser_entry.Link,{className:"mt-10",to:"/demo"},/*#__PURE__*/react.createElement("span",{className:" border-[1px] px-4 py-3 border-white rounded-full font-bold text-white transition duration-300 ease-in-out hover:bg-white hover:text-black"},"DEMANDER UNE D\xC9MO"))))));};/* harmony default export */ const components_Integration = (Integration);
;// CONCATENATED MODULE: ./src/components/Integre.js
const Integre=()=>{return/*#__PURE__*/react.createElement("section",{className:"bg-black p-4 relative z-30"},/*#__PURE__*/react.createElement("div",{className:"flex flex-col items-center gap-6 max-w-7xl mx-auto"},/*#__PURE__*/react.createElement("h1",{"data-aos":"fade-up",className:"text-center py-6 text-2xl font-bold md:text-5xl lg:text-6xl"},/*#__PURE__*/react.createElement("span",{className:"bg-clip-text py-2 text-transparent bg-gradient-to-r from-[#30F9FC] to-lime-300"},"INT\xC9GR\xC9 AVEC VOS OUTILS")),/*#__PURE__*/react.createElement("p",{className:"text-white max-w-xl mx-auto text-center"},"Notre plateforme se connecte aux differents API et sources de donn\xE9es que vous avez en place. DMS, CRM, \xC9valuateur, Syndication, etc."),/*#__PURE__*/react.createElement("p",{className:"text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#30F9FC] to-lime-300 max-w-xl mx-auto text-center"},"POUR VOUS ET VOS CLIENTS"),/*#__PURE__*/react.createElement("div",{className:"py-6"},/*#__PURE__*/react.createElement(V,{src:"../images/Logo2.webp",alt:"logo",__imageData:__webpack_require__(1946)})),/*#__PURE__*/react.createElement("p",{className:"bg-clip-text text-transparent bg-gradient-to-r from-[#30F9FC] to-lime-300 mx-auto text-center"},"Vous ne trouvez pas votre CRM? \xC9crivez-nous et nous vous contacterons!"),/*#__PURE__*/react.createElement(gatsby_browser_entry.Link,{to:"/",className:"flex group mt-6 btn items-center text-white border-[1px] border-white rounded-full transition duration-300 ease-in-out hover:bg-white hover:text-black"},/*#__PURE__*/react.createElement("span",{className:" px-4 py-2  font-bold "},"COMMENCER"),/*#__PURE__*/react.createElement("svg",{viewBox:"0 0 46 16",xmlns:"http://www.w3.org/2000/svg",className:"-translate-x-2 h-[10px] w-[30px] fill-white transition-all duration-300 ease-out group-hover:scale-x-105 group-hover:fill-black"},/*#__PURE__*/react.createElement("path",{transform:"translate(30)",d:"M8,0,6.545,1.455l5.506,5.506H-30V9.039H12.052L6.545,14.545,8,16l8-8Z","data-name":"Path 10"})))));};/* harmony default export */ const components_Integre = (Integre);
// EXTERNAL MODULE: ./src/components/layout.js
var layout = __webpack_require__(8678);
;// CONCATENATED MODULE: ./src/components/Produits.js
const Produits=()=>{return/*#__PURE__*/react.createElement("section",{className:"bg-neutral-900"},/*#__PURE__*/react.createElement("div",{className:"flex flex-col px-6 py-6 max-w-7xl mx-auto"},/*#__PURE__*/react.createElement("h1",{"data-aos":"fade-up",className:"text-center py-16 text-2xl font-bold md:text-5xl lg:text-6xl"},/*#__PURE__*/react.createElement("span",{className:"bg-clip-text py-2 text-transparent bg-gradient-to-r from-[#30F9FC] to-lime-300"},"PRODUITS")),/*#__PURE__*/react.createElement("ul",{className:"text-white grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3"},/*#__PURE__*/react.createElement("li",{className:"border-gray-700 border-solid border-l-2 px-6 py-4"},/*#__PURE__*/react.createElement("div",{"data-aos":"fade-left"},/*#__PURE__*/react.createElement(V,{src:"../images/Icons-min.svg",alt:"icon1",__imageData:__webpack_require__(7566)})),/*#__PURE__*/react.createElement("h2",{className:"font-bold py-3"},"SITES WEB DE CONCESSIONAIRES AUTOS"),/*#__PURE__*/react.createElement("p",{className:"text-sm"},"Suivant les normes des manifacturiers")),/*#__PURE__*/react.createElement("li",{className:"border-gray-700 border-solid border-l-2 px-6 py-4"},/*#__PURE__*/react.createElement("div",{"data-aos":"fade-left","data-aos-delay":"50"},/*#__PURE__*/react.createElement(V,{src:"../images/Icons2-min.svg",alt:"icon2",__imageData:__webpack_require__(4283)})),/*#__PURE__*/react.createElement("h2",{className:"font-bold py-3"},"MODULE D'ACHAT EN LIGNE COMPLET"),/*#__PURE__*/react.createElement("p",{className:"text-sm"},"Incluant les accessoires, garanties, assurances et d\xE9pots")),/*#__PURE__*/react.createElement("li",{className:"border-gray-700 border-solid border-l-2 px-6 py-4"},/*#__PURE__*/react.createElement("div",{"data-aos":"fade-left","data-aos-delay":"100"},/*#__PURE__*/react.createElement(V,{src:"../images/Icons3-min.svg",alt:"icon3",__imageData:__webpack_require__(5158)})),/*#__PURE__*/react.createElement("h2",{className:"font-bold py-3"},"GESTIONNAIRE D'INVENTAIRE D'OCCASIONS"),/*#__PURE__*/react.createElement("p",{className:"text-sm"},"(Eval Auto) Incluant la syndication vers les plateformes les plus populaires (Kijiji, Cargurus, Otogo, AutoTraders, etc)")),/*#__PURE__*/react.createElement("li",{className:"border-gray-700 border-solid border-l-2 px-6 py-4"},/*#__PURE__*/react.createElement("div",{"data-aos":"fade-left","data-aos-delay":"150"},/*#__PURE__*/react.createElement(V,{src:"../images/Icons4-min.svg",alt:"icon4",__imageData:__webpack_require__(4726)})),/*#__PURE__*/react.createElement("h2",{className:"font-bold py-3"},"MODULE DE PUBLICATION AUTOMATISEE"),/*#__PURE__*/react.createElement("p",{className:"text-sm"},"Sur Facebook (Carrousel et Marketplace) et Google (Merchant center) pour v\xE9hicules d'occasion.")),/*#__PURE__*/react.createElement("li",{className:"border-gray-700 border-solid border-l-2 px-6 py-4"},/*#__PURE__*/react.createElement("div",{"data-aos":"fade-left","data-aos-delay":"200"},/*#__PURE__*/react.createElement(V,{src:"../images/Icons5-min.svg",alt:"icon5",__imageData:__webpack_require__(6144)})),/*#__PURE__*/react.createElement("h2",{className:"font-bold py-3"},"SITES WEB D'OCCASIONS"),/*#__PURE__*/react.createElement("p",{className:"text-sm"},"De style marketplace r\xE9unissant l'inventaire de plusieurs concessions dans un m\xEAme site. Strat\xE9gie incontournable pour les groupes automobiles."))),/*#__PURE__*/react.createElement(gatsby_browser_entry.Link,{className:"mt-12 mx-auto",to:"/demo"},/*#__PURE__*/react.createElement("span",{className:"border-[1px] px-4 py-3 border-white rounded-full font-bold text-white transition duration-300 ease-in-out hover:bg-white hover:text-black"},"DEMANDER UNE D\xC9MO"))));};/* harmony default export */ const components_Produits = (Produits);
;// CONCATENATED MODULE: ./src/components/Rapide.js
const Rapide=()=>{return/*#__PURE__*/react.createElement("section",{className:"bg-neutral-900 pt-2"},/*#__PURE__*/react.createElement("div",{className:"flex justify-center items-center h-full"},/*#__PURE__*/react.createElement("div",{className:"flex flex-col justify-center items-center px-6 text-center"},/*#__PURE__*/react.createElement("div",null,/*#__PURE__*/react.createElement("h1",{className:"flex flex-col z-20 text-2xl font-bold md:text-5xl lg:text-6xl"},/*#__PURE__*/react.createElement("span",{className:"text-lime-300"},"DES APPLICATIONS WEB"),/*#__PURE__*/react.createElement("span",{className:"bg-clip-text whitespace-nowrap text-transparent bg-gradient-to-r from-[#30F9FC] to-lime-300"},"ULTRA RAPIDES")),/*#__PURE__*/react.createElement("p",{className:"text-white font-bold pt-2"},"POUR DES CONCESSIONAIRES AUTOMOBILES DU QU\xC9BEC")),/*#__PURE__*/react.createElement("div",null,/*#__PURE__*/react.createElement("p",{className:"text-white text-sm max-w-lg pt-10 pb-14"},"A small team of people driven by performance and excellence. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi."),/*#__PURE__*/react.createElement(gatsby_browser_entry.Link,{to:"/demo"},/*#__PURE__*/react.createElement("span",{className:" border-[1px] px-4 py-3 border-white rounded-full font-bold text-white transition duration-300 ease-in-out hover:bg-white hover:text-black"},"DEMANDER UNE D\xC9MO")),/*#__PURE__*/react.createElement("div",{className:"hidden mt-16 rounded-xl bg-gray-600 w-[21rem] mx-auto h-[1px] lg:block"})))));};/* harmony default export */ const components_Rapide = (Rapide);
// EXTERNAL MODULE: ./src/components/seo.js
var seo = __webpack_require__(9357);
;// CONCATENATED MODULE: ./src/components/Syndication.js
const Syndication=()=>{return/*#__PURE__*/react.createElement("section",{className:"overflow-y-hidden bg-gradient-to-t from-[#30F9FC] to-lime-300"},/*#__PURE__*/react.createElement("div",{className:"flex flex-col text-neutral-700 items-center"},/*#__PURE__*/react.createElement("div",{className:"flex flex-col gap-10 items-center px-10 lg:flex-row"},/*#__PURE__*/react.createElement("div",{"data-aos":"fade-up","data-aos-duration":"1000"},/*#__PURE__*/react.createElement(V,{src:"../images/Mockup.webp",alt:"travail",__imageData:__webpack_require__(6226)})),/*#__PURE__*/react.createElement("div",{className:"flex flex-col gap-4 pb-6 lg:pt-6 "},/*#__PURE__*/react.createElement("h2",{className:"flex flex-col"},/*#__PURE__*/react.createElement("span",{className:"text-lg font-bold sm:text-2xl md:text-3xl lg:text-4xl"},"INT\xC9GRATION"),/*#__PURE__*/react.createElement("span",{className:"text-lg font-bold sm:text-2xl md:text-3xl lg:text-4xl"},"SYNDICATION")),/*#__PURE__*/react.createElement("ul",{className:"flex flex-col  list-disc ml-6 md:gap-10 lg:py-4 lg:pl-10"},/*#__PURE__*/react.createElement("li",null,/*#__PURE__*/react.createElement("span",{className:"font-bold"},"Facebook")," ",/*#__PURE__*/react.createElement("br",null)," ",/*#__PURE__*/react.createElement("span",null,"(Carroussel et Marketplace)")),/*#__PURE__*/react.createElement("li",null,/*#__PURE__*/react.createElement("span",{className:"font-bold"},"Canadian Black Book")," ",/*#__PURE__*/react.createElement("br",null),"(\xC9valuation de vehicule d'echange)"),/*#__PURE__*/react.createElement("li",null,/*#__PURE__*/react.createElement("span",{className:"font-bold"},"DealerCorp"),/*#__PURE__*/react.createElement("br",null)," ",/*#__PURE__*/react.createElement("span",null,"(Gestionaire d'inventaire)"))),/*#__PURE__*/react.createElement("p",null,"Vous voulez ajouter une Syndication? ",/*#__PURE__*/react.createElement("br",null),"\xC9crivez-nous et nous l'ajouterons!"),/*#__PURE__*/react.createElement(gatsby_browser_entry.Link,{className:"mt-10",to:"/"},/*#__PURE__*/react.createElement("span",{className:"px-4 py-3 border-neutral-700 border-[1px] rounded-full font-bold text-neutral-700 transition duration-300 ease-in-out hover:bg-neutral-700 hover:text-white"},"DEMANDER UNE D\xC9MO"))))));};/* harmony default export */ const components_Syndication = (Syndication);
;// CONCATENATED MODULE: ./src/components/Automatisation.js
const Automatisation=()=>{return/*#__PURE__*/react.createElement("section",{className:"py-6"},/*#__PURE__*/react.createElement("div",{className:"flex flex-col items-center max-w-7xl mx-auto"},/*#__PURE__*/react.createElement("h1",{"data-aos":"fade-up",className:"text-center py-6 text-2xl font-bold  md:text-5xl lg:text-6xl"},/*#__PURE__*/react.createElement("span",{className:"bg-clip-text py-2 text-transparent bg-gradient-to-r from-[#30F9FC] to-lime-300"},"AUTOMATISATION DES STRAT\xC9GIES MARKETING/ PARTENAIRE MARKETING LEADSTREAM")),/*#__PURE__*/react.createElement("div",{className:"flex flex-col gap-10 items-center p-10 md:flex-row"},/*#__PURE__*/react.createElement("div",{className:"relative"},/*#__PURE__*/react.createElement("div",{"data-aos":"fade-in","data-aos-duration":"1000"},/*#__PURE__*/react.createElement("div",{className:"absolute -z-10 translate-y-[1rem] translate-x-[-1rem] h-full w-full  bg-gradient-to-t from-[#30F9FC] to-lime-300"})," "),/*#__PURE__*/react.createElement(V,{src:"../images/bureau.webp",alt:"travail",__imageData:__webpack_require__(3475)})),/*#__PURE__*/react.createElement("div",{className:"flex flex-col text-neutral-700 gap-4 pl-10 py-6"},/*#__PURE__*/react.createElement("h2",{className:"flex flex-col"},/*#__PURE__*/react.createElement("span",{className:"max-w-lg text-lg font-bold sm:text-2xl md:text-3xl lg:text-4xl"},"NOS SITES WEB G\xC9N\xC8RENT DES FEEDS POUR LE GOOGLE MERCHANT CENTER")),/*#__PURE__*/react.createElement("p",{className:"max-w-lg"},"Nos services de marketing seront offerts en partenariat avec l'agence Leadstream."),/*#__PURE__*/react.createElement("ul",{className:"list-disc font-bold ml-6"},/*#__PURE__*/react.createElement("li",null,"Campagne Facebook et Google Ads"),/*#__PURE__*/react.createElement("li",null,"R\xE9f\xE9rencement et r\xE9daction de contenus"),/*#__PURE__*/react.createElement("li",null,"Conseils et strat\xE9gies de marketing")),/*#__PURE__*/react.createElement(gatsby_browser_entry.Link,{to:"/",className:"flex group btn items-center mr-auto mt-4 text-neutral-700 border-[1px] border-neutral-700 rounded-full transition duration-300 ease-in-out hover:bg-neutral-700 hover:text-white"},/*#__PURE__*/react.createElement("span",{className:" px-4 py-2  font-bold "},"COMMENCER"),/*#__PURE__*/react.createElement("svg",{viewBox:"0 0 46 16",xmlns:"http://www.w3.org/2000svg",className:"-translate-x-2 h-[10px] w-[30px] fill-neutral-700 transition-all duration-300 ease-out group-hover:scale-x-105 group-hover:fill-white"},/*#__PURE__*/react.createElement("path",{transform:"translate(30)",d:"M8,0,6.545,1.455l5.506,5.506H-30V9.039H12.052L6.545,14.545,8,16l8-8Z","data-name":"Path 10"})))))));};/* harmony default export */ const components_Automatisation = (Automatisation);
// EXTERNAL MODULE: ./src/components/Header.js + 8 modules
var Header = __webpack_require__(9866);
;// CONCATENATED MODULE: ./src/pages/index.js
const IndexPage=()=>{(0,react.useEffect)(()=>{aos_esm/* default.init */.Z.init();aos_esm/* default.refresh */.Z.refresh();},[]);return/*#__PURE__*/react.createElement(layout/* default */.Z,null,/*#__PURE__*/react.createElement(Header/* default */.Z,{backgroundColor:"bg-lime-300"}),/*#__PURE__*/react.createElement(components_Hero,null),/*#__PURE__*/react.createElement(components_Divider,null),/*#__PURE__*/react.createElement(components_Rapide,null),/*#__PURE__*/react.createElement(components_Produits,null),/*#__PURE__*/react.createElement(components_Dividerleft,null),/*#__PURE__*/react.createElement(components_Integration,null),/*#__PURE__*/react.createElement(components_Dividerright,null),/*#__PURE__*/react.createElement(components_Experience,null),/*#__PURE__*/react.createElement(components_Dividerlefttwo,null),/*#__PURE__*/react.createElement(components_Integre,null),/*#__PURE__*/react.createElement(components_Dividerrighttwo,null),/*#__PURE__*/react.createElement(components_Syndication,null),/*#__PURE__*/react.createElement(components_Dividerrightthree,null),/*#__PURE__*/react.createElement(components_Automatisation,null),/*#__PURE__*/react.createElement(Dividerleftthree/* default */.Z,null),/*#__PURE__*/react.createElement(Contact/* default */.Z,null),/*#__PURE__*/react.createElement(Footer/* default */.Z,null));};const Head=()=>/*#__PURE__*/react.createElement(seo/* default */.Z,{title:"Home"});/* harmony default export */ const pages = (IndexPage);

/***/ }),

/***/ 1296:
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

/***/ 3096:
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

/***/ 1450:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"layout":"constrained","backgroundColor":"transparent","images":{"fallback":{"src":"/static/b3b191630832c296290f5eac5d67b6b2/cb32c/Images5-min.svg","srcSet":"/static/b3b191630832c296290f5eac5d67b6b2/c1ec2/Images5-min.svg 105w,\\n/static/b3b191630832c296290f5eac5d67b6b2/ffa58/Images5-min.svg 210w,\\n/static/b3b191630832c296290f5eac5d67b6b2/cb32c/Images5-min.svg 420w","sizes":"(min-width: 420px) 420px, 100vw"},"sources":[{"srcSet":"/static/b3b191630832c296290f5eac5d67b6b2/3600d/Images5-min.webp 105w,\\n/static/b3b191630832c296290f5eac5d67b6b2/c73bf/Images5-min.webp 210w,\\n/static/b3b191630832c296290f5eac5d67b6b2/94712/Images5-min.webp 420w","type":"image/webp","sizes":"(min-width: 420px) 420px, 100vw"}]},"width":420,"height":511}');

/***/ }),

/***/ 4726:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"layout":"constrained","backgroundColor":"transparent","images":{"fallback":{"src":"/static/b9b8d9fe89422c8e4dd9b0cdf721f3e8/b694c/Icons4-min.svg","srcSet":"/static/b9b8d9fe89422c8e4dd9b0cdf721f3e8/08cdf/Icons4-min.svg 37w,\\n/static/b9b8d9fe89422c8e4dd9b0cdf721f3e8/0d864/Icons4-min.svg 74w,\\n/static/b9b8d9fe89422c8e4dd9b0cdf721f3e8/b694c/Icons4-min.svg 148w","sizes":"(min-width: 148px) 148px, 100vw"},"sources":[{"srcSet":"/static/b9b8d9fe89422c8e4dd9b0cdf721f3e8/03cae/Icons4-min.webp 37w,\\n/static/b9b8d9fe89422c8e4dd9b0cdf721f3e8/cd135/Icons4-min.webp 74w,\\n/static/b9b8d9fe89422c8e4dd9b0cdf721f3e8/a9709/Icons4-min.webp 148w","type":"image/webp","sizes":"(min-width: 148px) 148px, 100vw"}]},"width":148,"height":148}');

/***/ }),

/***/ 3475:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"layout":"constrained","backgroundColor":"transparent","images":{"fallback":{"src":"/static/13a9a6a8b2a89773fb6f281cca938256/3b0a1/bureau.webp","srcSet":"/static/13a9a6a8b2a89773fb6f281cca938256/dc28c/bureau.webp 145w,\\n/static/13a9a6a8b2a89773fb6f281cca938256/02b4f/bureau.webp 290w,\\n/static/13a9a6a8b2a89773fb6f281cca938256/3b0a1/bureau.webp 580w","sizes":"(min-width: 580px) 580px, 100vw"},"sources":[]},"width":580,"height":630}');

/***/ }),

/***/ 5628:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"layout":"constrained","backgroundColor":"transparent","images":{"fallback":{"src":"/static/a1eedd49f6ffdb56906d1cbafef1f2a5/afcd9/Images-min.svg","srcSet":"/static/a1eedd49f6ffdb56906d1cbafef1f2a5/86a36/Images-min.svg 214w,\\n/static/a1eedd49f6ffdb56906d1cbafef1f2a5/6f400/Images-min.svg 428w,\\n/static/a1eedd49f6ffdb56906d1cbafef1f2a5/afcd9/Images-min.svg 856w","sizes":"(min-width: 856px) 856px, 100vw"},"sources":[{"srcSet":"/static/a1eedd49f6ffdb56906d1cbafef1f2a5/e8df0/Images-min.webp 214w,\\n/static/a1eedd49f6ffdb56906d1cbafef1f2a5/71911/Images-min.webp 428w,\\n/static/a1eedd49f6ffdb56906d1cbafef1f2a5/2b47a/Images-min.webp 856w","type":"image/webp","sizes":"(min-width: 856px) 856px, 100vw"}]},"width":856,"height":781}');

/***/ }),

/***/ 96:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"layout":"constrained","backgroundColor":"transparent","images":{"fallback":{"src":"/static/212d51d960e98f74eabfe70511a41e2d/1700c/Images1-min.svg","srcSet":"/static/212d51d960e98f74eabfe70511a41e2d/fb2a4/Images1-min.svg 135w,\\n/static/212d51d960e98f74eabfe70511a41e2d/8a811/Images1-min.svg 270w,\\n/static/212d51d960e98f74eabfe70511a41e2d/1700c/Images1-min.svg 540w","sizes":"(min-width: 540px) 540px, 100vw"},"sources":[{"srcSet":"/static/212d51d960e98f74eabfe70511a41e2d/770a0/Images1-min.webp 135w,\\n/static/212d51d960e98f74eabfe70511a41e2d/7c47d/Images1-min.webp 270w,\\n/static/212d51d960e98f74eabfe70511a41e2d/6218a/Images1-min.webp 540w","type":"image/webp","sizes":"(min-width: 540px) 540px, 100vw"}]},"width":540,"height":640}');

/***/ }),

/***/ 7850:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"layout":"constrained","backgroundColor":"transparent","images":{"fallback":{"src":"/static/15ca356854dd8d9161dc269902b2819c/b1330/Images2-min.svg","srcSet":"/static/15ca356854dd8d9161dc269902b2819c/cdafb/Images2-min.svg 129w,\\n/static/15ca356854dd8d9161dc269902b2819c/199be/Images2-min.svg 257w,\\n/static/15ca356854dd8d9161dc269902b2819c/b1330/Images2-min.svg 514w","sizes":"(min-width: 514px) 514px, 100vw"},"sources":[{"srcSet":"/static/15ca356854dd8d9161dc269902b2819c/21d1e/Images2-min.webp 129w,\\n/static/15ca356854dd8d9161dc269902b2819c/d15d4/Images2-min.webp 257w,\\n/static/15ca356854dd8d9161dc269902b2819c/8c67a/Images2-min.webp 514w","type":"image/webp","sizes":"(min-width: 514px) 514px, 100vw"}]},"width":514,"height":590}');

/***/ }),

/***/ 4283:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"layout":"constrained","backgroundColor":"transparent","images":{"fallback":{"src":"/static/3fa7a18ea519a76267fc517bf50aab92/b694c/Icons2-min.svg","srcSet":"/static/3fa7a18ea519a76267fc517bf50aab92/08cdf/Icons2-min.svg 37w,\\n/static/3fa7a18ea519a76267fc517bf50aab92/0d864/Icons2-min.svg 74w,\\n/static/3fa7a18ea519a76267fc517bf50aab92/b694c/Icons2-min.svg 148w","sizes":"(min-width: 148px) 148px, 100vw"},"sources":[{"srcSet":"/static/3fa7a18ea519a76267fc517bf50aab92/03cae/Icons2-min.webp 37w,\\n/static/3fa7a18ea519a76267fc517bf50aab92/cd135/Icons2-min.webp 74w,\\n/static/3fa7a18ea519a76267fc517bf50aab92/a9709/Icons2-min.webp 148w","type":"image/webp","sizes":"(min-width: 148px) 148px, 100vw"}]},"width":148,"height":148}');

/***/ }),

/***/ 113:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"layout":"constrained","backgroundColor":"transparent","images":{"fallback":{"src":"/static/8440c93a3f8358773fc53f0038a32fbd/1c700/Imags-min.svg","srcSet":"/static/8440c93a3f8358773fc53f0038a32fbd/19ecd/Imags-min.svg 136w,\\n/static/8440c93a3f8358773fc53f0038a32fbd/58b35/Imags-min.svg 271w,\\n/static/8440c93a3f8358773fc53f0038a32fbd/1c700/Imags-min.svg 542w","sizes":"(min-width: 542px) 542px, 100vw"},"sources":[{"srcSet":"/static/8440c93a3f8358773fc53f0038a32fbd/ce86e/Imags-min.webp 136w,\\n/static/8440c93a3f8358773fc53f0038a32fbd/c8f30/Imags-min.webp 271w,\\n/static/8440c93a3f8358773fc53f0038a32fbd/06b7e/Imags-min.webp 542w","type":"image/webp","sizes":"(min-width: 542px) 542px, 100vw"}]},"width":542,"height":528}');

/***/ }),

/***/ 5158:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"layout":"constrained","backgroundColor":"transparent","images":{"fallback":{"src":"/static/ae442ead174df1e063d260176cf091f0/b694c/Icons3-min.svg","srcSet":"/static/ae442ead174df1e063d260176cf091f0/08cdf/Icons3-min.svg 37w,\\n/static/ae442ead174df1e063d260176cf091f0/0d864/Icons3-min.svg 74w,\\n/static/ae442ead174df1e063d260176cf091f0/b694c/Icons3-min.svg 148w","sizes":"(min-width: 148px) 148px, 100vw"},"sources":[{"srcSet":"/static/ae442ead174df1e063d260176cf091f0/03cae/Icons3-min.webp 37w,\\n/static/ae442ead174df1e063d260176cf091f0/cd135/Icons3-min.webp 74w,\\n/static/ae442ead174df1e063d260176cf091f0/a9709/Icons3-min.webp 148w","type":"image/webp","sizes":"(min-width: 148px) 148px, 100vw"}]},"width":148,"height":148}');

/***/ }),

/***/ 5622:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"layout":"constrained","backgroundColor":"transparent","images":{"fallback":{"src":"/static/5217fff88e54abd5ae169a90e5c2e9c5/a9027/stars.webp","srcSet":"/static/5217fff88e54abd5ae169a90e5c2e9c5/3e179/stars.webp 185w,\\n/static/5217fff88e54abd5ae169a90e5c2e9c5/30133/stars.webp 370w,\\n/static/5217fff88e54abd5ae169a90e5c2e9c5/a9027/stars.webp 740w","sizes":"(min-width: 740px) 740px, 100vw"},"sources":[]},"width":740,"height":554}');

/***/ }),

/***/ 7241:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"layout":"constrained","backgroundColor":"transparent","images":{"fallback":{"src":"/static/71984a32ad65b4562e144de236f4472a/33275/auto.webp","srcSet":"/static/71984a32ad65b4562e144de236f4472a/c5456/auto.webp 151w,\\n/static/71984a32ad65b4562e144de236f4472a/54706/auto.webp 301w,\\n/static/71984a32ad65b4562e144de236f4472a/33275/auto.webp 602w","sizes":"(min-width: 602px) 602px, 100vw"},"sources":[]},"width":602,"height":656}');

/***/ }),

/***/ 6069:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"layout":"constrained","backgroundColor":"transparent","images":{"fallback":{"src":"/static/ece95a6121d5c094fa280a4019e76327/f76e7/Images4-min.svg","srcSet":"/static/ece95a6121d5c094fa280a4019e76327/0c9f4/Images4-min.svg 112w,\\n/static/ece95a6121d5c094fa280a4019e76327/e3d3e/Images4-min.svg 224w,\\n/static/ece95a6121d5c094fa280a4019e76327/f76e7/Images4-min.svg 447w","sizes":"(min-width: 447px) 447px, 100vw"},"sources":[{"srcSet":"/static/ece95a6121d5c094fa280a4019e76327/f8c8f/Images4-min.webp 112w,\\n/static/ece95a6121d5c094fa280a4019e76327/53e4a/Images4-min.webp 224w,\\n/static/ece95a6121d5c094fa280a4019e76327/b9dd0/Images4-min.webp 447w","type":"image/webp","sizes":"(min-width: 447px) 447px, 100vw"}]},"width":447,"height":636}');

/***/ }),

/***/ 3903:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"layout":"constrained","backgroundColor":"transparent","images":{"fallback":{"src":"/static/ac88c706cd0c363b999e449c205f2fb9/ab79b/Images3-min.svg","srcSet":"/static/ac88c706cd0c363b999e449c205f2fb9/120c9/Images3-min.svg 165w,\\n/static/ac88c706cd0c363b999e449c205f2fb9/c2fbb/Images3-min.svg 331w,\\n/static/ac88c706cd0c363b999e449c205f2fb9/ab79b/Images3-min.svg 661w","sizes":"(min-width: 661px) 661px, 100vw"},"sources":[{"srcSet":"/static/ac88c706cd0c363b999e449c205f2fb9/5e13f/Images3-min.webp 165w,\\n/static/ac88c706cd0c363b999e449c205f2fb9/1b891/Images3-min.webp 331w,\\n/static/ac88c706cd0c363b999e449c205f2fb9/7f87e/Images3-min.webp 661w","type":"image/webp","sizes":"(min-width: 661px) 661px, 100vw"}]},"width":661,"height":551}');

/***/ }),

/***/ 6144:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"layout":"constrained","backgroundColor":"transparent","images":{"fallback":{"src":"/static/bc79a7ca291dbe57bfb04f57315f2e9e/b694c/Icons5-min.svg","srcSet":"/static/bc79a7ca291dbe57bfb04f57315f2e9e/08cdf/Icons5-min.svg 37w,\\n/static/bc79a7ca291dbe57bfb04f57315f2e9e/0d864/Icons5-min.svg 74w,\\n/static/bc79a7ca291dbe57bfb04f57315f2e9e/b694c/Icons5-min.svg 148w","sizes":"(min-width: 148px) 148px, 100vw"},"sources":[{"srcSet":"/static/bc79a7ca291dbe57bfb04f57315f2e9e/03cae/Icons5-min.webp 37w,\\n/static/bc79a7ca291dbe57bfb04f57315f2e9e/cd135/Icons5-min.webp 74w,\\n/static/bc79a7ca291dbe57bfb04f57315f2e9e/a9709/Icons5-min.webp 148w","type":"image/webp","sizes":"(min-width: 148px) 148px, 100vw"}]},"width":148,"height":148}');

/***/ }),

/***/ 1946:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"layout":"constrained","backgroundColor":"transparent","images":{"fallback":{"src":"/static/a80bf1c4ac5e0fb37b4209fb873cee95/7cb36/Logo2.webp","srcSet":"/static/a80bf1c4ac5e0fb37b4209fb873cee95/cb227/Logo2.webp 284w,\\n/static/a80bf1c4ac5e0fb37b4209fb873cee95/b0e98/Logo2.webp 569w,\\n/static/a80bf1c4ac5e0fb37b4209fb873cee95/7cb36/Logo2.webp 1137w","sizes":"(min-width: 1137px) 1137px, 100vw"},"sources":[]},"width":1137,"height":60}');

/***/ }),

/***/ 7566:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"layout":"constrained","backgroundColor":"transparent","images":{"fallback":{"src":"/static/b4cfbba0d3bcbeb6c8d6b843c535b0b1/b694c/Icons-min.svg","srcSet":"/static/b4cfbba0d3bcbeb6c8d6b843c535b0b1/08cdf/Icons-min.svg 37w,\\n/static/b4cfbba0d3bcbeb6c8d6b843c535b0b1/0d864/Icons-min.svg 74w,\\n/static/b4cfbba0d3bcbeb6c8d6b843c535b0b1/b694c/Icons-min.svg 148w","sizes":"(min-width: 148px) 148px, 100vw"},"sources":[{"srcSet":"/static/b4cfbba0d3bcbeb6c8d6b843c535b0b1/03cae/Icons-min.webp 37w,\\n/static/b4cfbba0d3bcbeb6c8d6b843c535b0b1/cd135/Icons-min.webp 74w,\\n/static/b4cfbba0d3bcbeb6c8d6b843c535b0b1/a9709/Icons-min.webp 148w","type":"image/webp","sizes":"(min-width: 148px) 148px, 100vw"}]},"width":148,"height":148}');

/***/ }),

/***/ 6226:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"layout":"constrained","backgroundColor":"transparent","images":{"fallback":{"src":"/static/f5596e8cecdbe18dc9f2624de0e324ff/4873a/Mockup.webp","srcSet":"/static/f5596e8cecdbe18dc9f2624de0e324ff/c8b2e/Mockup.webp 201w,\\n/static/f5596e8cecdbe18dc9f2624de0e324ff/68701/Mockup.webp 401w,\\n/static/f5596e8cecdbe18dc9f2624de0e324ff/4873a/Mockup.webp 802w","sizes":"(min-width: 802px) 802px, 100vw"},"sources":[]},"width":802,"height":1036}');

/***/ })

};
;
//# sourceMappingURL=component---src-pages-index-js.js.map