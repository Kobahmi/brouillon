exports.id = "component---src-pages-index-js";
exports.ids = ["component---src-pages-index-js"];
exports.modules = {

/***/ "./node_modules/@loadable/component/dist/loadable.esm.js":
/*!***************************************************************!*\
  !*** ./node_modules/@loadable/component/dist/loadable.esm.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED": () => (/* binding */ __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "lazy": () => (/* binding */ lazy$2),
/* harmony export */   "loadableReady": () => (/* binding */ loadableReady)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var react_is__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-is */ "./node_modules/react-is/index.js");
/* harmony import */ var hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! hoist-non-react-statics */ "./node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js");
/* harmony import */ var hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_6__);








/* eslint-disable import/prefer-default-export */
function invariant(condition, message) {
  if (condition) return;
  var error = new Error("loadable: " + message);
  error.framesToPop = 1;
  error.name = 'Invariant Violation';
  throw error;
}
function warn(message) {
  // eslint-disable-next-line no-console
  console.warn("loadable: " + message);
}

var Context = /*#__PURE__*/
react__WEBPACK_IMPORTED_MODULE_0___default().createContext();

var LOADABLE_REQUIRED_CHUNKS_KEY = '__LOADABLE_REQUIRED_CHUNKS__';
function getRequiredChunkKey(namespace) {
  return "" + namespace + LOADABLE_REQUIRED_CHUNKS_KEY;
}

var sharedInternals = /*#__PURE__*/Object.freeze({
  __proto__: null,
  getRequiredChunkKey: getRequiredChunkKey,
  invariant: invariant,
  Context: Context
});

var LOADABLE_SHARED = {
  initialChunks: {}
};

var STATUS_PENDING = 'PENDING';
var STATUS_RESOLVED = 'RESOLVED';
var STATUS_REJECTED = 'REJECTED';

function resolveConstructor(ctor) {
  if (typeof ctor === 'function') {
    return {
      requireAsync: ctor,
      resolve: function resolve() {
        return undefined;
      },
      chunkName: function chunkName() {
        return undefined;
      }
    };
  }

  return ctor;
}

var withChunkExtractor = function withChunkExtractor(Component) {
  var LoadableWithChunkExtractor = function LoadableWithChunkExtractor(props) {
    return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Context.Consumer, null, function (extractor) {
      return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Component, Object.assign({
        __chunkExtractor: extractor
      }, props));
    });
  };

  if (Component.displayName) {
    LoadableWithChunkExtractor.displayName = Component.displayName + "WithChunkExtractor";
  }

  return LoadableWithChunkExtractor;
};

var identity = function identity(v) {
  return v;
};

function createLoadable(_ref) {
  var _ref$defaultResolveCo = _ref.defaultResolveComponent,
      defaultResolveComponent = _ref$defaultResolveCo === void 0 ? identity : _ref$defaultResolveCo,
      _render = _ref.render,
      onLoad = _ref.onLoad;

  function loadable(loadableConstructor, options) {
    if (options === void 0) {
      options = {};
    }

    var ctor = resolveConstructor(loadableConstructor);
    var cache = {};
    /**
     * Cachekey represents the component to be loaded
     * if key changes - component has to be reloaded
     * @param props
     * @returns {null|Component}
     */

    function _getCacheKey(props) {
      if (options.cacheKey) {
        return options.cacheKey(props);
      }

      if (ctor.resolve) {
        return ctor.resolve(props);
      }

      return 'static';
    }
    /**
     * Resolves loaded `module` to a specific `Component
     * @param module
     * @param props
     * @param Loadable
     * @returns Component
     */


    function resolve(module, props, Loadable) {
      var Component = options.resolveComponent ? options.resolveComponent(module, props) : defaultResolveComponent(module);

      if (options.resolveComponent && !(0,react_is__WEBPACK_IMPORTED_MODULE_5__.isValidElementType)(Component)) {
        throw new Error("resolveComponent returned something that is not a React component!");
      }

      hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_6___default()(Loadable, Component, {
        preload: true
      });
      return Component;
    }

    var cachedLoad = function cachedLoad(props) {
      var cacheKey = _getCacheKey(props);

      var promise = cache[cacheKey];

      if (!promise || promise.status === STATUS_REJECTED) {
        promise = ctor.requireAsync(props);
        promise.status = STATUS_PENDING;
        cache[cacheKey] = promise;
        promise.then(function () {
          promise.status = STATUS_RESOLVED;
        }, function (error) {
          console.error('loadable-components: failed to asynchronously load component', {
            fileName: ctor.resolve(props),
            chunkName: ctor.chunkName(props),
            error: error ? error.message : error
          });
          promise.status = STATUS_REJECTED;
        });
      }

      return promise;
    };

    var InnerLoadable =
    /*#__PURE__*/
    function (_React$Component) {
      (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_4__["default"])(InnerLoadable, _React$Component);

      InnerLoadable.getDerivedStateFromProps = function getDerivedStateFromProps(props, state) {
        var cacheKey = _getCacheKey(props);

        return (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__["default"])({}, state, {
          cacheKey: cacheKey,
          // change of a key triggers loading state automatically
          loading: state.loading || state.cacheKey !== cacheKey
        });
      };

      function InnerLoadable(props) {
        var _this;

        _this = _React$Component.call(this, props) || this;
        _this.state = {
          result: null,
          error: null,
          loading: true,
          cacheKey: _getCacheKey(props)
        };
        invariant(!props.__chunkExtractor || ctor.requireSync, 'SSR requires `@loadable/babel-plugin`, please install it'); // Server-side

        if (props.__chunkExtractor) {
          // This module has been marked with no SSR
          if (options.ssr === false) {
            return (0,_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this);
          } // We run load function, we assume that it won't fail and that it
          // triggers a synchronous loading of the module


          ctor.requireAsync(props)["catch"](function () {
            return null;
          }); // So we can require now the module synchronously

          _this.loadSync();

          props.__chunkExtractor.addChunk(ctor.chunkName(props));

          return (0,_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this);
        } // Client-side with `isReady` method present (SSR probably)
        // If module is already loaded, we use a synchronous loading
        // Only perform this synchronous loading if the component has not
        // been marked with no SSR, else we risk hydration mismatches


        if (options.ssr !== false && ( // is ready - was loaded in this session
        ctor.isReady && ctor.isReady(props) || // is ready - was loaded during SSR process
        ctor.chunkName && LOADABLE_SHARED.initialChunks[ctor.chunkName(props)])) {
          _this.loadSync();
        }

        return _this;
      }

      var _proto = InnerLoadable.prototype;

      _proto.componentDidMount = function componentDidMount() {
        this.mounted = true; // retrieve loading promise from a global cache

        var cachedPromise = this.getCache(); // if promise exists, but rejected - clear cache

        if (cachedPromise && cachedPromise.status === STATUS_REJECTED) {
          this.setCache();
        } // component might be resolved synchronously in the constructor


        if (this.state.loading) {
          this.loadAsync();
        }
      };

      _proto.componentDidUpdate = function componentDidUpdate(prevProps, prevState) {
        // Component has to be reloaded on cacheKey change
        if (prevState.cacheKey !== this.state.cacheKey) {
          this.loadAsync();
        }
      };

      _proto.componentWillUnmount = function componentWillUnmount() {
        this.mounted = false;
      };

      _proto.safeSetState = function safeSetState(nextState, callback) {
        if (this.mounted) {
          this.setState(nextState, callback);
        }
      }
      /**
       * returns a cache key for the current props
       * @returns {Component|string}
       */
      ;

      _proto.getCacheKey = function getCacheKey() {
        return _getCacheKey(this.props);
      }
      /**
       * access the persistent cache
       */
      ;

      _proto.getCache = function getCache() {
        return cache[this.getCacheKey()];
      }
      /**
       * sets the cache value. If called without value sets it as undefined
       */
      ;

      _proto.setCache = function setCache(value) {
        if (value === void 0) {
          value = undefined;
        }

        cache[this.getCacheKey()] = value;
      };

      _proto.triggerOnLoad = function triggerOnLoad() {
        var _this2 = this;

        if (onLoad) {
          setTimeout(function () {
            onLoad(_this2.state.result, _this2.props);
          });
        }
      }
      /**
       * Synchronously loads component
       * target module is expected to already exists in the module cache
       * or be capable to resolve synchronously (webpack target=node)
       */
      ;

      _proto.loadSync = function loadSync() {
        // load sync is expecting component to be in the "loading" state already
        // sounds weird, but loading=true is the initial state of InnerLoadable
        if (!this.state.loading) return;

        try {
          var loadedModule = ctor.requireSync(this.props);
          var result = resolve(loadedModule, this.props, Loadable);
          this.state.result = result;
          this.state.loading = false;
        } catch (error) {
          console.error('loadable-components: failed to synchronously load component, which expected to be available', {
            fileName: ctor.resolve(this.props),
            chunkName: ctor.chunkName(this.props),
            error: error ? error.message : error
          });
          this.state.error = error;
        }
      }
      /**
       * Asynchronously loads a component.
       */
      ;

      _proto.loadAsync = function loadAsync() {
        var _this3 = this;

        var promise = this.resolveAsync();
        promise.then(function (loadedModule) {
          var result = resolve(loadedModule, _this3.props, Loadable);

          _this3.safeSetState({
            result: result,
            loading: false
          }, function () {
            return _this3.triggerOnLoad();
          });
        })["catch"](function (error) {
          return _this3.safeSetState({
            error: error,
            loading: false
          });
        });
        return promise;
      }
      /**
       * Asynchronously resolves(not loads) a component.
       * Note - this function does not change the state
       */
      ;

      _proto.resolveAsync = function resolveAsync() {
        var _this$props = this.props,
            __chunkExtractor = _this$props.__chunkExtractor,
            forwardedRef = _this$props.forwardedRef,
            props = (0,_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(_this$props, ["__chunkExtractor", "forwardedRef"]);

        return cachedLoad(props);
      };

      _proto.render = function render() {
        var _this$props2 = this.props,
            forwardedRef = _this$props2.forwardedRef,
            propFallback = _this$props2.fallback,
            __chunkExtractor = _this$props2.__chunkExtractor,
            props = (0,_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(_this$props2, ["forwardedRef", "fallback", "__chunkExtractor"]);

        var _this$state = this.state,
            error = _this$state.error,
            loading = _this$state.loading,
            result = _this$state.result;

        if (options.suspense) {
          var cachedPromise = this.getCache() || this.loadAsync();

          if (cachedPromise.status === STATUS_PENDING) {
            throw this.loadAsync();
          }
        }

        if (error) {
          throw error;
        }

        var fallback = propFallback || options.fallback || null;

        if (loading) {
          return fallback;
        }

        return _render({
          fallback: fallback,
          result: result,
          options: options,
          props: (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__["default"])({}, props, {
            ref: forwardedRef
          })
        });
      };

      return InnerLoadable;
    }((react__WEBPACK_IMPORTED_MODULE_0___default().Component));

    var EnhancedInnerLoadable = withChunkExtractor(InnerLoadable);
    var Loadable = react__WEBPACK_IMPORTED_MODULE_0___default().forwardRef(function (props, ref) {
      return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(EnhancedInnerLoadable, Object.assign({
        forwardedRef: ref
      }, props));
    });
    Loadable.displayName = 'Loadable'; // In future, preload could use `<link rel="preload">`

    Loadable.preload = function (props) {
      Loadable.load(props);
    };

    Loadable.load = function (props) {
      return cachedLoad(props);
    };

    return Loadable;
  }

  function lazy(ctor, options) {
    return loadable(ctor, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__["default"])({}, options, {
      suspense: true
    }));
  }

  return {
    loadable: loadable,
    lazy: lazy
  };
}

function defaultResolveComponent(loadedModule) {
  // eslint-disable-next-line no-underscore-dangle
  return loadedModule.__esModule ? loadedModule["default"] : loadedModule["default"] || loadedModule;
}

/* eslint-disable no-use-before-define, react/no-multi-comp */

var _createLoadable =
/*#__PURE__*/
createLoadable({
  defaultResolveComponent: defaultResolveComponent,
  render: function render(_ref) {
    var Component = _ref.result,
        props = _ref.props;
    return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Component, props);
  }
}),
    loadable = _createLoadable.loadable,
    lazy = _createLoadable.lazy;

/* eslint-disable no-use-before-define, react/no-multi-comp */

var _createLoadable$1 =
/*#__PURE__*/
createLoadable({
  onLoad: function onLoad(result, props) {
    if (result && props.forwardedRef) {
      if (typeof props.forwardedRef === 'function') {
        props.forwardedRef(result);
      } else {
        props.forwardedRef.current = result;
      }
    }
  },
  render: function render(_ref) {
    var result = _ref.result,
        props = _ref.props;

    if (props.children) {
      return props.children(result);
    }

    return null;
  }
}),
    loadable$1 = _createLoadable$1.loadable,
    lazy$1 = _createLoadable$1.lazy;

/* eslint-disable no-underscore-dangle, camelcase */
var BROWSER = typeof window !== 'undefined';
function loadableReady(done, _temp) {
  if (done === void 0) {
    done = function done() {};
  }

  var _ref = _temp === void 0 ? {} : _temp,
      _ref$namespace = _ref.namespace,
      namespace = _ref$namespace === void 0 ? '' : _ref$namespace,
      _ref$chunkLoadingGlob = _ref.chunkLoadingGlobal,
      chunkLoadingGlobal = _ref$chunkLoadingGlob === void 0 ? '__LOADABLE_LOADED_CHUNKS__' : _ref$chunkLoadingGlob;

  if (!BROWSER) {
    warn('`loadableReady()` must be called in browser only');
    done();
    return Promise.resolve();
  }

  var requiredChunks = null;

  if (BROWSER) {
    var id = getRequiredChunkKey(namespace);
    var dataElement = document.getElementById(id);

    if (dataElement) {
      requiredChunks = JSON.parse(dataElement.textContent);
      var extElement = document.getElementById(id + "_ext");

      if (extElement) {
        var _JSON$parse = JSON.parse(extElement.textContent),
            namedChunks = _JSON$parse.namedChunks;

        namedChunks.forEach(function (chunkName) {
          LOADABLE_SHARED.initialChunks[chunkName] = true;
        });
      } else {
        // version mismatch
        throw new Error('loadable-component: @loadable/server does not match @loadable/component');
      }
    }
  }

  if (!requiredChunks) {
    warn('`loadableReady()` requires state, please use `getScriptTags` or `getScriptElements` server-side');
    done();
    return Promise.resolve();
  }

  var resolved = false;
  return new Promise(function (resolve) {
    window[chunkLoadingGlobal] = window[chunkLoadingGlobal] || [];
    var loadedChunks = window[chunkLoadingGlobal];
    var originalPush = loadedChunks.push.bind(loadedChunks);

    function checkReadyState() {
      if (requiredChunks.every(function (chunk) {
        return loadedChunks.some(function (_ref2) {
          var chunks = _ref2[0];
          return chunks.indexOf(chunk) > -1;
        });
      })) {
        if (!resolved) {
          resolved = true;
          resolve();
        }
      }
    }

    loadedChunks.push = function () {
      originalPush.apply(void 0, arguments);
      checkReadyState();
    };

    checkReadyState();
  }).then(done);
}

/* eslint-disable no-underscore-dangle */
var loadable$2 = loadable;
loadable$2.lib = loadable$1;
var lazy$2 = lazy;
lazy$2.lib = lazy$1;
var __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = sharedInternals;

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadable$2);



/***/ }),

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
/* harmony import */ var _images_Layer1_webp__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../images/Layer1.webp */ "./src/images/Layer1.webp");
/* harmony import */ var _images_Layer2_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../images/Layer2.svg */ "./src/images/Layer2.svg");




const Experience = () => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("section", {
    className: "bg-white py-6"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "flex flex-col items-center "
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "flex flex-col justify-center items-center text-center px-6"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", {
    className: "flex z-20 flex-col text-xl font-bold sm:text-2xl md:text-5xl lg:text-6xl"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "bg-clip-text whitespace-nowrap text-transparent bg-gradient-to-r from-[#30F9FC] to-lime-300"
  }, "UNE EXPERIENCE OPTIMISEE")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: " pt-2"
  }, "POUR VOUS ET VOS CLIENTS"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: " text-sm max-w-[30rem] py-10 "
  }, "A small team of people driven by performance and excellence. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "rounded-xl bg-gray-300 h-[2px] max-w-[30rem] w-full "
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(gatsby__WEBPACK_IMPORTED_MODULE_1__.Link, {
    to: "/",
    className: "text-black z-20 mx-auto mt-8 bg-gradient-to-tr from-[#30F9FC] to-lime-300 rounded-full px-6 py-2 brightness-90 hover:brightness-100 duration-200 ease-in "
  }, "COMMENCER")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "flex flex-col gap-10 items-center p-10 xl:flex-row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    "data-aos": "fade-left",
    "data-aos-duration": "1000",
    className: "object-cover h-full w-full",
    src: _images_Layer1_webp__WEBPACK_IMPORTED_MODULE_2__["default"],
    alt: "travail"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "flex flex-col max-w-[25rem] gap-4 border-gray-300 border-solid border-l-2 pl-10 py-6"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", {
    className: "text-lg font-bold sm:text-2xl md:text-3xl lg:text-4xl"
  }, "DES SITES WEBS ULTRA RAPIDES"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    "data-aos": "fade-up"
  }, "Avec l'utilisation des dernieres technologies pour offrir des sites web ultra rapides."))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "flex flex-col gap-10 items-center p-10 xl:flex-row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "xl:order-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    "data-aos": "fade-up",
    "data-aos-duration": "1000",
    className: "object-cover h-full w-full ",
    src: _images_Layer2_svg__WEBPACK_IMPORTED_MODULE_3__["default"],
    alt: "travail"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "flex flex-col max-w-[25rem] gap-4 border-gray-300 border-solid border-l-2 pl-10 py-6 xl:order-1 md:border-l-0 md:border-r-2 md:pl-0 md:pr-10"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", {
    className: "text-lg font-bold sm:text-2xl md:text-3xl lg:text-4xl"
  }, "PLATEFORME (CMS)FACILE A UTILISER"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    "data-aos": "fade-up"
  }, "Pour l'integration de contenus personnalises sur le site Web (article de blogue, landing pages, promotions du mois, textes SEO et plus)."))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "flex flex-col gap-10 items-center p-10 xl:flex-row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    "data-aos": "fade-up",
    "data-aos-duration": "1000",
    className: "object-cover w-full h-full",
    src: _images_Layer1_webp__WEBPACK_IMPORTED_MODULE_2__["default"],
    alt: "travail"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "flex flex-col max-w-[25rem] gap-4 border-gray-300 border-solid border-l-2 pl-10 py-6"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", {
    className: "text-lg font-bold sm:text-2xl md:text-3xl lg:text-4xl"
  }, "DEMANDES WEB DE QUALITE (LEADS)"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    "data-aos": "fade-up"
  }, "Offrant un taux de conversion plus eleve et un cout d'acquisition plus bas."))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "flex flex-col gap-10 items-center p-10 xl:flex-row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "xl:order-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    "data-aos": "fade-up",
    "data-aos-duration": "1000",
    className: "object-cover h-full w-full",
    src: _images_Layer2_svg__WEBPACK_IMPORTED_MODULE_3__["default"],
    alt: "travail"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "flex flex-col max-w-[25rem] gap-4 border-gray-300 border-solid border-l-2 pl-10 py-6 xl:order-1 md:border-l-0 md:border-r-2 md:pl-0 md:pr-10"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", {
    className: "text-lg font-bold sm:text-2xl md:text-3xl lg:text-4xl"
  }, "CONCEPTION GRAPHIQUE ET EXPERIENCE EN LIGNE OPTIMALE"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    "data-aos": "fade-up"
  }, "Pour facilite la navigation."))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "flex flex-col gap-10 items-center p-10 xl:flex-row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    "data-aos": "fade-up",
    "data-aos-duration": "1000",
    className: "object-cover h-full w-full",
    src: _images_Layer1_webp__WEBPACK_IMPORTED_MODULE_2__["default"],
    alt: "travail"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "flex flex-col max-w-[25rem] gap-4 border-gray-300 border-solid border-l-2 pl-10 py-6"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", {
    className: "text-lg font-bold sm:text-2xl md:text-3xl lg:text-4xl"
  }, "MISES A JOUR AUTOMATISEE DES PROGRAMMES ET PROMOTIONS"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    "data-aos": "fade-up"
  }, "Des manifacturiers."))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "flex flex-col gap-10 items-center p-10 xl:flex-row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "xl:order-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    "data-aos": "fade-up",
    "data-aos-duration": "1000",
    className: "object-cover w-full h-full",
    src: _images_Layer2_svg__WEBPACK_IMPORTED_MODULE_3__["default"],
    alt: "travail"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "flex flex-col max-w-[25rem] gap-4 border-gray-300 border-solid border-l-2 pl-10 py-6 xl:order-1 md:border-l-0 md:border-r-2 md:pl-0 md:pr-10"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", {
    className: "text-lg font-bold sm:text-2xl md:text-3xl lg:text-4xl"
  }, "OPTIMISATION SEO"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    "data-aos": "fade-up"
  }, "Incluant la gestion de la taille des images, des balises, des donnees structurees, des sitemaps, etc.")))));
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
    className: "w-full bg-neutral-800 lg:absolute"
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
    to: "/",
    className: "duration-100 ease-in font-bold px-4 py-2 text-white rounded-full  hover:bg-gray-600"
  }, "CONNEXION"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(gatsby__WEBPACK_IMPORTED_MODULE_0__.Link, {
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
/* harmony import */ var _images_Layer1_webp__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../images/Layer1.webp */ "./src/images/Layer1.webp");



const Hero = () => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("section", {
    className: "bg-neutral-800 min-h-[880px] lg:h-screen"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "flex flex-col h-full max-w-[1200px] mx-auto px-6 gap-2 pt-16 lg:pt-0 lg:flex-row lg:items-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "flex flex-col justify-center items-center text-center lg:items-start lg:text-start"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", {
    className: "flex z-20 flex-col text-xl font-bold sm:text-2xl md:text-5xl lg:text-6xl"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "text-lime-300"
  }, "DES SITES WEBS"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "whitespace-nowrap bg-clip-text text-transparent bg-gradient-to-r from-[#30F9FC] to-lime-300"
  }, "DE CONCESSIONAIRES")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    "data-aos": "fade-in",
    "data-aos-duration": "1000",
    className: "text-white z-20"
  }, "Concus pour generer des leads de qualite"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(gatsby__WEBPACK_IMPORTED_MODULE_1__.Link, {
    className: "mt-10",
    to: "/"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "  px-4 py-3 border-white border-[1px] rounded-full font-bold text-white transition duration-300 ease-in-out hover:bg-white hover:text-black mr-6"
  }, "DEMANDER UNE DEMO"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "z-0 mx-auto lg:ml-[-18rem]"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    className: "object-scale-down h-[320px] w-[313px] md:w-[529px] md:h-[541px] lg:h-[789px] lg:w-[772px]",
    src: _images_Layer1_webp__WEBPACK_IMPORTED_MODULE_2__["default"],
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
/* harmony import */ var _images_illustration_flowing_conversation_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../images/illustration-flowing-conversation.svg */ "./src/images/illustration-flowing-conversation.svg");
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gatsby */ "./.cache/gatsby-browser-entry.js");



const Integration = () => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("section", {
    className: "bg-black py-6"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "flex flex-col max-w-[1200px] mx-auto"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", {
    "data-aos": "fade-up",
    className: "text-center py-6 text-xl font-bold sm:text-2xl md:text-5xl lg:text-6xl"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "bg-clip-text py-2 text-transparent bg-gradient-to-r from-[#30F9FC] to-lime-300"
  }, "INTEGRATION")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "flex flex-col gap-10 items-center p-10 md:flex-row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    "data-aos": "fade-in",
    "data-aos-duration": "1000",
    "data-aos-mirror": "true",
    className: "object-cover w-full h-full",
    src: _images_illustration_flowing_conversation_svg__WEBPACK_IMPORTED_MODULE_1__["default"],
    alt: "travail",
    loading: "lazy"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "flex flex-col gap-4 border-gray-700 border-solid border-l-2 pl-10 py-6"
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
    className: "bg-black p-4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "flex flex-col gap-6 max-w-[1200px] mx-auto"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", {
    "data-aos": "fade-up",
    className: "text-center py-6 text-xl font-bold sm:text-2xl md:text-5xl lg:text-6xl"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "bg-clip-text py-2 text-transparent bg-gradient-to-r from-[#30F9FC] to-lime-300"
  }, "INTEGRE AVEC VOS OUTILS")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "text-white max-w-xl mx-auto text-center"
  }, "Notre plateforme se connecte aux differents API et sources de donnees que vous avez en place. DMS, CRM, Evaluateur, Syndication, etc."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#30F9FC] to-lime-300 max-w-xl mx-auto text-center"
  }, "POUR VOUS ET VOS CLIENTS"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    src: _images_Logo2_webp__WEBPACK_IMPORTED_MODULE_2__["default"],
    className: "py-6 w-full h-full",
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
/* harmony import */ var _images_Icons_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../images/Icons.svg */ "./src/images/Icons.svg");
/* harmony import */ var _images_Icons2_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../images/Icons2.svg */ "./src/images/Icons2.svg");
/* harmony import */ var _images_Icons3_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../images/Icons3.svg */ "./src/images/Icons3.svg");
/* harmony import */ var _images_Icons4_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../images/Icons4.svg */ "./src/images/Icons4.svg");
/* harmony import */ var _images_Icons5_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../images/Icons5.svg */ "./src/images/Icons5.svg");







const Produits = () => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("section", {
    className: "bg-neutral-900"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "flex flex-col px-6 py-6 max-w-[1200px] mx-auto"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", {
    "data-aos": "fade-up",
    className: "flex pb-10 text-center text-lime-300 z-20 flex-col text-xl font-bold sm:text-2xl md:text-5xl lg:text-6xl"
  }, "NOS PRODUITS"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", {
    className: "text-white grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
    className: "border-gray-700 border-solid border-l-2 px-6 py-4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    "data-aos": "fade-left",
    "data-aos-mirror": "true",
    src: _images_Icons_svg__WEBPACK_IMPORTED_MODULE_2__["default"],
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
    src: _images_Icons2_svg__WEBPACK_IMPORTED_MODULE_3__["default"],
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
    src: _images_Icons3_svg__WEBPACK_IMPORTED_MODULE_4__["default"],
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
    src: _images_Icons4_svg__WEBPACK_IMPORTED_MODULE_5__["default"],
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
    src: _images_Icons5_svg__WEBPACK_IMPORTED_MODULE_6__["default"],
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
    className: "bg-neutral-900 h-[50vh] min-h-[500px]"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "flex justify-center items-center  h-full"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "flex flex-col justify-center items-center text-center px-6"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", {
    className: "flex z-20 flex-col text-xl font-bold sm:text-2xl md:text-5xl lg:text-6xl"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "text-lime-300"
  }, "DES APPLICATIONS WEBS"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "bg-clip-text whitespace-nowrap text-transparent bg-gradient-to-r from-[#30F9FC] to-lime-300"
  }, "ULTRA RAPIDES")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "text-white font-bold pt-2"
  }, "POUR DES CONCESSIONAIRES AUTOMOBILES DU QUEBEC"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "text-white text-sm max-w-[30rem] py-10"
  }, "A small team of people driven by performance and excellence. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "rounded-xl bg-gray-600 h-[1px] max-w-[30rem] w-full "
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(gatsby__WEBPACK_IMPORTED_MODULE_1__.Link, {
    className: "mt-10",
    to: "/"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: " border-[1px] px-4 py-3 border-white rounded-full font-bold text-white transition duration-300 ease-in-out hover:bg-white hover:text-black mr-6"
  }, "DEMANDER UNE DEMO")))));
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
/* harmony import */ var _images_car_christmas_transport_svgrepo_com_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../images/car-christmas-transport-svgrepo-com.svg */ "./src/images/car-christmas-transport-svgrepo-com.svg");



const Syndication = () => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("section", {
    className: "bg-gradient-to-t from-[#30F9FC] to-lime-300"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "flex flex-col max-w-[1200px] mx-auto"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "flex flex-col gap-10 items-center p-10 xl:flex-row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    "data-aos": "fade-up",
    "data-aos-duration": "1000"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    className: "h-[500px] w-[300px] md:h-[700px] md:w-[500px]",
    src: _images_car_christmas_transport_svgrepo_com_svg__WEBPACK_IMPORTED_MODULE_2__["default"],
    alt: "travail"
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
/* harmony import */ var _loadable_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @loadable/component */ "./node_modules/@loadable/component/dist/loadable.esm.js");




















const Automatisation = (0,_loadable_component__WEBPACK_IMPORTED_MODULE_19__["default"])(() => __webpack_require__.e(/*! import() */ "src_components_Automatisation_js").then(__webpack_require__.bind(__webpack_require__, /*! ../components/Automatisation */ "./src/components/Automatisation.js")), {
  fallback: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, "Loading...")
});
const IndexPage = () => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_layout__WEBPACK_IMPORTED_MODULE_14__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_Hero__WEBPACK_IMPORTED_MODULE_11__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_Divider__WEBPACK_IMPORTED_MODULE_1__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_Rapide__WEBPACK_IMPORTED_MODULE_16__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_Produits__WEBPACK_IMPORTED_MODULE_15__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_Dividerleft__WEBPACK_IMPORTED_MODULE_2__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_Integration__WEBPACK_IMPORTED_MODULE_12__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_Dividerright__WEBPACK_IMPORTED_MODULE_5__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_Experience__WEBPACK_IMPORTED_MODULE_8__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_Dividerlefttwo__WEBPACK_IMPORTED_MODULE_4__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_Integre__WEBPACK_IMPORTED_MODULE_13__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_Dividerrighttwo__WEBPACK_IMPORTED_MODULE_7__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_Syndication__WEBPACK_IMPORTED_MODULE_18__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_Dividerrightthree__WEBPACK_IMPORTED_MODULE_6__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Automatisation, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_Dividerleftthree__WEBPACK_IMPORTED_MODULE_3__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_Contact__WEBPACK_IMPORTED_MODULE_9__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_Footer__WEBPACK_IMPORTED_MODULE_10__["default"], null));
};
const Head = () => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_seo__WEBPACK_IMPORTED_MODULE_17__["default"], {
  title: "Home"
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (IndexPage);

/***/ }),

/***/ "./node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var reactIs = __webpack_require__(/*! react-is */ "./node_modules/react-is/index.js");

/**
 * Copyright 2015, Yahoo! Inc.
 * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
 */
var REACT_STATICS = {
  childContextTypes: true,
  contextType: true,
  contextTypes: true,
  defaultProps: true,
  displayName: true,
  getDefaultProps: true,
  getDerivedStateFromError: true,
  getDerivedStateFromProps: true,
  mixins: true,
  propTypes: true,
  type: true
};
var KNOWN_STATICS = {
  name: true,
  length: true,
  prototype: true,
  caller: true,
  callee: true,
  arguments: true,
  arity: true
};
var FORWARD_REF_STATICS = {
  '$$typeof': true,
  render: true,
  defaultProps: true,
  displayName: true,
  propTypes: true
};
var MEMO_STATICS = {
  '$$typeof': true,
  compare: true,
  defaultProps: true,
  displayName: true,
  propTypes: true,
  type: true
};
var TYPE_STATICS = {};
TYPE_STATICS[reactIs.ForwardRef] = FORWARD_REF_STATICS;
TYPE_STATICS[reactIs.Memo] = MEMO_STATICS;

function getStatics(component) {
  // React v16.11 and below
  if (reactIs.isMemo(component)) {
    return MEMO_STATICS;
  } // React v16.12 and above


  return TYPE_STATICS[component['$$typeof']] || REACT_STATICS;
}

var defineProperty = Object.defineProperty;
var getOwnPropertyNames = Object.getOwnPropertyNames;
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
var getPrototypeOf = Object.getPrototypeOf;
var objectPrototype = Object.prototype;
function hoistNonReactStatics(targetComponent, sourceComponent, blacklist) {
  if (typeof sourceComponent !== 'string') {
    // don't hoist over string (html) components
    if (objectPrototype) {
      var inheritedComponent = getPrototypeOf(sourceComponent);

      if (inheritedComponent && inheritedComponent !== objectPrototype) {
        hoistNonReactStatics(targetComponent, inheritedComponent, blacklist);
      }
    }

    var keys = getOwnPropertyNames(sourceComponent);

    if (getOwnPropertySymbols) {
      keys = keys.concat(getOwnPropertySymbols(sourceComponent));
    }

    var targetStatics = getStatics(targetComponent);
    var sourceStatics = getStatics(sourceComponent);

    for (var i = 0; i < keys.length; ++i) {
      var key = keys[i];

      if (!KNOWN_STATICS[key] && !(blacklist && blacklist[key]) && !(sourceStatics && sourceStatics[key]) && !(targetStatics && targetStatics[key])) {
        var descriptor = getOwnPropertyDescriptor(sourceComponent, key);

        try {
          // Avoid failures from read-only properties
          defineProperty(targetComponent, key, descriptor);
        } catch (e) {}
      }
    }
  }

  return targetComponent;
}

module.exports = hoistNonReactStatics;


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

/***/ "./src/images/Icons.svg":
/*!******************************!*\
  !*** ./src/images/Icons.svg ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQ4IiBoZWlnaHQ9IjE0OCIgdmlld0JveD0iMCAwIDE0OCAxNDgiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxjaXJjbGUgY3g9IjczLjgzNDUiIGN5PSI3NC4wMDQyIiByPSI3Mi44MzQ1IiBzdHJva2U9InVybCgjcGFpbnQwX2xpbmVhcl8yOV82MDUpIiBzdHJva2Utd2lkdGg9IjIiLz4KPHBhdGggZD0iTTQ2LjAyNiA5OS43NTU1VjEwMi42MThDNDYuMDI2IDEwNC40MzkgNDQuMzg0NiAxMDYgNDIuNDY4OCAxMDZIMjkuMTk4NkMyNy4xNDcyIDEwNiAyNS42NDE1IDEwNC40MzkgMjUuNjQxNSAxMDIuNjE4Vjg5Ljg3MDRDMjUuNjQxNSA4Mi4xOTU1IDI0LjQxIDY5LjU3ODcgMzAuNDMwMSA2My43MjRIMjYuNDYyOUMyNS4wOTU3IDYzLjcyNCAyNCA2Mi42ODM0IDI0IDYxLjM4MjFWNTkuMDQwMkMyNCA1Ny43NDAyIDI1LjUwNDMgNTYuNjk4MyAyNi43MzU4IDU2LjQzODlMMzUuNzY0NSA1NS4yNjc5TDQxLjc4MzEgNDQuNjAxOEM0My40MjQ2IDQyLjM5MDMgNDcuMTE4OSA0MC4wNDg1IDQ5Ljk5MTggMzkuNjU4NkM2NS43MjM1IDM3LjQ0NzEgODIuMTQwOCAzNy40NDcxIDk4LjAwODIgMzkuNjU4NkMxMDAuODgxIDQwLjA0ODUgMTA0LjU3NSA0Mi4zOTAzIDEwNi4yMTcgNDQuNjAxOEwxMTIuMjM2IDU1LjI2NzlMMTIxLjI2NCA1Ni40Mzg5QzEyMi40OTYgNTYuNjk4MyAxMjQgNTcuNzM4OSAxMjQgNTkuMDQwMlY2MS4zODIxQzEyNCA2Mi42ODIxIDEyMi45MDYgNjMuNzI0IDEyMS41MzcgNjMuNzI0SDExNy41N0MxMjMuNTg5IDY5LjU3NzMgMTIyLjM1OSA4Mi4xOTU1IDEyMi4zNTkgODkuODcwNFYxMDIuNjE4QzEyMi4zNTkgMTA0LjQzOSAxMjAuNzE3IDEwNiAxMTguODAxIDEwNkgxMDUuNTMxQzEwMy42MTUgMTA2IDEwMS45NzQgMTA0LjQzOSAxMDEuOTc0IDEwMi42MThWOTkuNzU1NUM4My4zNjk0IDEwMC45MjYgNjQuNjI3NyAxMDAuOTI2IDQ2LjAyMTcgOTkuNzU1NUg0Ni4wMjQ2SDQ2LjAyNlpNNTAuMTI4OSA0MC44Mjk1QzQ3LjUyODkgNDEuMDg5IDQ0LjI0NiA0My4zMDA1IDQyLjc0MTcgNDUuMjUyNUwzNi40NDg3IDU2LjMwODVMMjYuODcyOSA1Ny42MDg1QzI2LjQ2MjkgNTcuNjA4NSAyNi4wNTE1IDU3Ljg2NzkgMjUuNjQxNSA1OC4yNTkxQzI1LjM2ODYgNTguNTE4NiAyNS4yMzE0IDU4Ljc3OTQgMjUuMjMxNCA1OS4wNDAyVjYxLjM4MjFDMjUuMjMxNCA2Mi4wMzI4IDI1Ljc3ODYgNjIuNTUzIDI2LjQ2MjkgNjIuNTUzSDMzLjMwM0MzMi43NTU4IDYzLjA3MzMgMzIuMzQ1OCA2My40NjMyIDMxLjkzNTggNjMuODUzQzI1LjM2ODYgNjkuNzA2MyAyNi44NzQzIDgxLjY3MzggMjYuODc0MyA4OS44NjlDMjYuNzM3MiA5My45MDA4IDI2LjczNzIgOTguMDY0MiAyNi43MzcyIDEwMi42MTZDMjYuNzM3MiAxMDMuNzg3IDI3LjgzMTUgMTA0LjgyOCAyOS4yMDAxIDEwNC44MjhINDIuNDcwM0M0My43MDE3IDEwNC44MjggNDQuNzk2IDEwMy43ODcgNDQuNzk2IDEwMi42MTZWOTguNTg0NUM2NC4zNTkyIDk5Ljc1NTUgODMuNjQ4IDk5Ljc1NTUgMTAzLjIxIDk4LjU4NDVWMTAyLjYxNkMxMDMuMjEgMTAzLjc4NyAxMDQuMzA0IDEwNC44MjggMTA1LjUzNSAxMDQuODI4SDExOC44MDZDMTIwLjE3MyAxMDQuODI4IDEyMS4xMzEgMTAzLjc4NyAxMjEuMTMxIDEwMi42MTZWODkuODY5QzEyMS4xMzEgODEuNjczOCAxMjIuNjM2IDY5LjcwNjMgMTE2LjA3IDYzLjg1M0MxMTUuNTIzIDYzLjQ2MzIgMTE1LjExMyA2My4wNzE5IDExNC43MDMgNjIuNTUzSDEyMS41NDNDMTIyLjIyNyA2Mi41NTMgMTIyLjc3NCA2Mi4wMzI4IDEyMi43NzQgNjEuMzgyMVY1OS4wNDAyQzEyMi43NzQgNTguNzgwOCAxMjIuNjM3IDU4LjUxOTkgMTIyLjM2NCA1OC4yNTkxQzEyMS45NTQgNTcuODY5MyAxMjEuNTQzIDU3LjYwODUgMTIwLjk5NyA1Ny42MDg1TDExMS41NTggNTYuMzA4NUwxMDUuMjY1IDQ1LjI1MjVDMTAzLjc2MSA0My4zMDE4IDEwMC4zNDEgNDEuMDg5IDk3Ljc0MTEgNDAuODI5NUM4Mi4xNDY1IDM4LjQ4NzcgNjUuODY2MyAzOC40ODc3IDUwLjEzNDcgNDAuODI5NUg1MC4xMjg5Wk05Ny4zMjUzIDQ1LjkwMzJDOTguOTY2OCA0Ni40MjM0IDEwMC4wNjEgNDYuOTQzNyAxMDEuMDE4IDQ4LjM3NDFMMTA1Ljk0MyA1Ny42MDk4SDQyLjA1NzRMNDYuOTgxOCA0OC4zNzQxQzQ3LjkzODkgNDYuOTQzNyA0OS4wMzMyIDQ2LjQyMzQgNTAuNjc0NyA0NS45MDMyQzY2LjI2OTIgNDQuMjEyIDgxLjcyOTQgNDQuMjEyIDk3LjMyMzkgNDUuOTAzMkg5Ny4zMjUzWk0xMDcuODU4IDU4LjY1MDRMMTAxLjk3NSA0Ny44NTM4QzEwMC44ODEgNDYuMTYyNiA5OS41MTI1IDQ1LjM4MjkgOTcuNDYxIDQ0Ljg2MjZDODIuOTYwOCA0Mi43ODE2IDY1LjAzOTIgNDIuNzgxNiA1MC41MzkgNDQuODYyNkM0OC40ODc1IDQ1LjM4MjkgNDYuOTgxOCA0Ni4xNjI2IDQ1Ljg4NzUgNDcuODUzOEw0MC4xNDE3IDU4LjY1MDRIMTA3Ljg1OFpNMTA3LjE3NCA3NC4yNTk3QzEwMy4yMDcgNzQuMjU5NyAxMDAuMDYxIDc3LjI1MDkgMTAwLjA2MSA4MC44OTQxQzEwMC4wNjEgODQuNTM3MyAxMDMuMjA3IDg3LjUyODUgMTA3LjE3NCA4Ny41Mjg1QzExMS4xNDEgODcuNTI4NSAxMTQuMTUxIDg0LjUzNzMgMTE0LjE1MSA4MC44OTQxQzExNC4xNTEgNzcuMjUwOSAxMTEuMDA2IDc0LjI1OTcgMTA3LjE3NCA3NC4yNTk3Vjc0LjI1OTdaTTEwNy4xNzQgNzUuNDMwNkMxMTAuMzIgNzUuNDMwNiAxMTIuOTIgNzcuOTAyOSAxMTIuOTIgODAuODk0MUMxMTIuOTIgODMuODg1MyAxMTAuMzIgODYuNDg4IDEwNy4xNzQgODYuNDg4QzEwNC4wMjggODYuNDg4IDEwMS4yOTEgODQuMDE1NyAxMDEuMjkxIDgwLjg5NDFDMTAxLjI5MSA3Ny43NzI1IDEwMy44OTEgNzUuNDMwNiAxMDcuMTc0IDc1LjQzMDZWNzUuNDMwNlpNNDAuODI2IDc0LjI1OTdDNDQuNjU2IDc0LjI1OTcgNDcuODAzMiA3Ny4yNTA5IDQ3LjgwMzIgODAuODk0MUM0Ny44MDMyIDg0LjUzNzMgNDQuNjU3NCA4Ny41Mjg1IDQwLjgyNiA4Ny41Mjg1QzM2Ljk5NDUgODcuNTI4NSAzMy44NDg3IDg0LjUzNzMgMzMuODQ4NyA4MC44OTQxQzMzLjg0ODcgNzcuMjUwOSAzNi45OTQ1IDc0LjI1OTcgNDAuODI2IDc0LjI1OTdWNzQuMjU5N1pNNDAuODI2IDc1LjQzMDZDMzcuNjgwMiA3NS40MzA2IDM1LjA4MDIgNzcuOTAyOSAzNS4wODAyIDgwLjg5NDFDMzUuMDgwMiA4My44ODUzIDM3LjY3ODggODYuNDg4IDQwLjgyNiA4Ni40ODhDNDMuOTczMSA4Ni40ODggNDYuNzA4OSA4NC4wMTU3IDQ2LjcwODkgODAuODk0MUM0Ni43MDg5IDc3Ljc3MjUgNDQuMTA4OSA3NS40MzA2IDQwLjgyNiA3NS40MzA2Vjc1LjQzMDZaIiBmaWxsPSJ3aGl0ZSIgc3Ryb2tlPSJ1cmwoI3BhaW50MV9saW5lYXJfMjlfNjA1KSIvPgo8ZGVmcz4KPGxpbmVhckdyYWRpZW50IGlkPSJwYWludDBfbGluZWFyXzI5XzYwNSIgeDE9IjEwNC41ODgiIHkxPSItMzkuMzE5MiIgeDI9IjQuMTI1MjIiIHkyPSIxMzUuMDAxIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CjxzdG9wIHN0b3AtY29sb3I9IiNGRkY4MDAiLz4KPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjMzBGOUZDIi8+CjwvbGluZWFyR3JhZGllbnQ+CjxsaW5lYXJHcmFkaWVudCBpZD0icGFpbnQxX2xpbmVhcl8yOV82MDUiIHgxPSI5NC44MjYyIiB5MT0iMTkuODE1OCIgeDI9IjU4LjQ5ODYiIHkyPSIxMTIuNTEzIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CjxzdG9wIHN0b3AtY29sb3I9IiNGRkY4MDAiLz4KPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjMzBGOUZDIi8+CjwvbGluZWFyR3JhZGllbnQ+CjwvZGVmcz4KPC9zdmc+Cg==");

/***/ }),

/***/ "./src/images/Icons2.svg":
/*!*******************************!*\
  !*** ./src/images/Icons2.svg ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQ4IiBoZWlnaHQ9IjE0OCIgdmlld0JveD0iMCAwIDE0OCAxNDgiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxjaXJjbGUgY3g9IjczLjgzNDUiIGN5PSI3NC4wMDQyIiByPSI3Mi44MzQ1IiBzdHJva2U9InVybCgjcGFpbnQwX2xpbmVhcl8yOV82MTIpIiBzdHJva2Utd2lkdGg9IjIiLz4KPGxpbmUgeDE9IjI5LjQyMDgiIHkxPSI1MC42NTU4IiB4Mj0iMTE4LjgxNCIgeTI9IjUwLjY1NTgiIHN0cm9rZT0idXJsKCNwYWludDFfbGluZWFyXzI5XzYxMikiIHN0cm9rZS13aWR0aD0iMiIvPgo8cmVjdCB4PSIyOS44NTQ5IiB5PSI0NC4xNjkxIiB3aWR0aD0iODguNTI1IiBoZWlnaHQ9IjU5LjY3MDIiIHJ4PSIzIiBzdHJva2U9InVybCgjcGFpbnQyX2xpbmVhcl8yOV82MTIpIiBzdHJva2Utd2lkdGg9IjIiLz4KPGNpcmNsZSBjeD0iMzUuMDk4NCIgY3k9IjQ3LjQxMjQiIHI9IjAuOTE0NDU0IiBzdHJva2U9InVybCgjcGFpbnQzX2xpbmVhcl8yOV82MTIpIi8+CjxjaXJjbGUgY3g9IjM5LjYyNDUiIGN5PSI0Ny40MTI0IiByPSIwLjkxNDQ1NCIgc3Ryb2tlPSJ1cmwoI3BhaW50NF9saW5lYXJfMjlfNjEyKSIvPgo8Y2lyY2xlIGN4PSI0NC4xNTA5IiBjeT0iNDcuNDEyNCIgcj0iMC45MTQ0NTQiIHN0cm9rZT0idXJsKCNwYWludDVfbGluZWFyXzI5XzYxMikiLz4KPHBhdGggZD0iTTgyLjk1NTYgODEuMTcxQzgyLjk1NTYgODIuMTc2MyA4Mi42OTQ2IDgzLjEyMzcgODIuMTcyNiA4NC4wMTNDODEuNjcgODQuODgzIDgwLjkxNiA4NS42MDggNzkuOTEwNiA4Ni4xODhDNzguOTI0NiA4Ni43NDg3IDc3Ljc1NSA4Ny4wNzczIDc2LjQwMTYgODcuMTc0Vjg5LjUyM0g3NC41NDU2Vjg3LjE0NUM3Mi42MTIzIDg2Ljk3MSA3MS4wNTYgODYuMzkxIDY5Ljg3NjYgODUuNDA1QzY4LjY5NzMgODQuMzk5NyA2OC4wODgzIDgzLjA0NjMgNjguMDQ5NiA4MS4zNDVINzIuMzk5NkM3Mi41MTU2IDgyLjczNyA3My4yMzEgODMuNTc4IDc0LjU0NTYgODMuODY4Vjc4LjMyOUM3My4xNTM2IDc3Ljk4MSA3Mi4wMzIzIDc3LjYzMyA3MS4xODE2IDc3LjI4NUM3MC4zMzEgNzYuOTM3IDY5LjU5NjMgNzYuMzc2MyA2OC45Nzc2IDc1LjYwM0M2OC4zNTkgNzQuODI5NyA2OC4wNDk2IDczLjc3NiA2OC4wNDk2IDcyLjQ0MkM2OC4wNDk2IDcwLjc2IDY4LjY0OSA2OS4zODczIDY5Ljg0NzYgNjguMzI0QzcxLjA2NTYgNjcuMjYwNyA3Mi42MzE2IDY2LjY1MTcgNzQuNTQ1NiA2Ni40OTdWNjQuMTQ4SDc2LjQwMTZWNjYuNDk3Qzc4LjI1NzYgNjYuNjUxNyA3OS43MzY2IDY3LjIxMjMgODAuODM4NiA2OC4xNzlDODEuOTYgNjkuMTQ1NyA4Mi41ODgzIDcwLjQ3OTcgODIuNzIzNiA3Mi4xODFINzguMzQ0NkM3OC4yODY2IDcxLjYyMDMgNzguMDgzNiA3MS4xMzcgNzcuNzM1NiA3MC43MzFDNzcuNDA3IDcwLjMwNTcgNzYuOTYyMyA3MC4wMDYgNzYuNDAxNiA2OS44MzJWNzUuMzEzQzc3Ljg1MTYgNzUuNjgwMyA3OC45OTIzIDc2LjAzOCA3OS44MjM2IDc2LjM4NkM4MC42NzQzIDc2LjcxNDcgODEuNDA5IDc3LjI2NTcgODIuMDI3NiA3OC4wMzlDODIuNjQ2MyA3OC43OTMgODIuOTU1NiA3OS44MzcgODIuOTU1NiA4MS4xNzFaTTcyLjI4MzYgNzIuMjM5QzcyLjI4MzYgNzIuODc3IDcyLjQ3NyA3My4zOTkgNzIuODYzNiA3My44MDVDNzMuMjUwMyA3NC4xOTE3IDczLjgxMSA3NC41MTA3IDc0LjU0NTYgNzQuNzYyVjY5Ljc0NUM3My44NDk2IDY5Ljg0MTcgNzMuMjk4NiA3MC4xMDI3IDcyLjg5MjYgNzAuNTI4QzcyLjQ4NjYgNzAuOTUzMyA3Mi4yODM2IDcxLjUyMzcgNzIuMjgzNiA3Mi4yMzlaTTc2LjQwMTYgODMuOTI2Qzc3LjEzNjMgODMuNzkwNyA3Ny43MDY2IDgzLjQ5MSA3OC4xMTI2IDgzLjAyN0M3OC41MzggODIuNTYzIDc4Ljc1MDYgODIuMDAyMyA3OC43NTA2IDgxLjM0NUM3OC43NTA2IDgwLjcwNyA3OC41NDc2IDgwLjE5NDcgNzguMTQxNiA3OS44MDhDNzcuNzM1NiA3OS40MjEzIDc3LjE1NTYgNzkuMTAyMyA3Ni40MDE2IDc4Ljg1MVY4My45MjZaIiBmaWxsPSJ1cmwoI3BhaW50Nl9saW5lYXJfMjlfNjEyKSIvPgo8ZGVmcz4KPGxpbmVhckdyYWRpZW50IGlkPSJwYWludDBfbGluZWFyXzI5XzYxMiIgeDE9IjEwNC41ODgiIHkxPSItMzkuMzE5MiIgeDI9IjQuMTI1MjIiIHkyPSIxMzUuMDAxIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CjxzdG9wIHN0b3AtY29sb3I9IiNGRkY4MDAiLz4KPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjMzBGOUZDIi8+CjwvbGluZWFyR3JhZGllbnQ+CjxsaW5lYXJHcmFkaWVudCBpZD0icGFpbnQxX2xpbmVhcl8yOV82MTIiIHgxPSI5Mi43MzQ4IiB5MT0iNTEuMzg4MyIgeDI9IjkyLjcyNDciIHkyPSI1Mi45NjA4IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CjxzdG9wIHN0b3AtY29sb3I9IiNGRkY4MDAiLz4KPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjMzBGOUZDIi8+CjwvbGluZWFyR3JhZGllbnQ+CjxsaW5lYXJHcmFkaWVudCBpZD0icGFpbnQyX2xpbmVhcl8yOV82MTIiIHgxPSI5Mi45NzA0IiB5MT0iMjYuNjc3NSIgeDI9IjU5Ljk4IiB5Mj0iMTEwLjcwNSIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPgo8c3RvcCBzdG9wLWNvbG9yPSIjRkZGODAwIi8+CjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iIzMwRjlGQyIvPgo8L2xpbmVhckdyYWRpZW50Pgo8bGluZWFyR3JhZGllbnQgaWQ9InBhaW50M19saW5lYXJfMjlfNjEyIiB4MT0iMzUuNjg3NiIgeTE9IjQ1LjI0MTQiIHgyPSIzMy43NjMiIHkyPSI0OC41ODA5IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CjxzdG9wIHN0b3AtY29sb3I9IiNGRkY4MDAiLz4KPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjMzBGOUZDIi8+CjwvbGluZWFyR3JhZGllbnQ+CjxsaW5lYXJHcmFkaWVudCBpZD0icGFpbnQ0X2xpbmVhcl8yOV82MTIiIHgxPSI0MC4yMTM3IiB5MT0iNDUuMjQxNCIgeDI9IjM4LjI4OTEiIHkyPSI0OC41ODA5IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CjxzdG9wIHN0b3AtY29sb3I9IiNGRkY4MDAiLz4KPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjMzBGOUZDIi8+CjwvbGluZWFyR3JhZGllbnQ+CjxsaW5lYXJHcmFkaWVudCBpZD0icGFpbnQ1X2xpbmVhcl8yOV82MTIiIHgxPSI0NC43NDAxIiB5MT0iNDUuMjQxNCIgeDI9IjQyLjgxNTUiIHkyPSI0OC41ODA5IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CjxzdG9wIHN0b3AtY29sb3I9IiNGRkY4MDAiLz4KPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjMzBGOUZDIi8+CjwvbGluZWFyR3JhZGllbnQ+CjxsaW5lYXJHcmFkaWVudCBpZD0icGFpbnQ2X2xpbmVhcl8yOV82MTIiIHgxPSI4My4wODA5IiB5MT0iMzkuODk2NyIgeDI9IjQ1LjIwNzYiIHkyPSI4NS40OTU3IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CjxzdG9wIHN0b3AtY29sb3I9IiNGRkY4MDAiLz4KPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjMzBGOUZDIi8+CjwvbGluZWFyR3JhZGllbnQ+CjwvZGVmcz4KPC9zdmc+Cg==");

/***/ }),

/***/ "./src/images/Icons3.svg":
/*!*******************************!*\
  !*** ./src/images/Icons3.svg ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQ4IiBoZWlnaHQ9IjE0OCIgdmlld0JveD0iMCAwIDE0OCAxNDgiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxjaXJjbGUgY3g9IjczLjgzNDUiIGN5PSI3NC4wMDQyIiByPSI3Mi44MzQ1IiBzdHJva2U9InVybCgjcGFpbnQwX2xpbmVhcl8yOV82NjIpIiBzdHJva2Utd2lkdGg9IjIiLz4KPGxpbmUgeDE9IjQ0IiB5MT0iMTA5IiB4Mj0iMTA0IiB5Mj0iMTA5IiBzdHJva2U9InVybCgjcGFpbnQxX2xpbmVhcl8yOV82NjIpIiBzdHJva2Utd2lkdGg9IjIiLz4KPHJlY3QgeD0iNDQiIHk9IjI0IiB3aWR0aD0iNjAiIGhlaWdodD0iMTAwIiByeD0iNSIgc3Ryb2tlPSJ1cmwoI3BhaW50Ml9saW5lYXJfMjlfNjYyKSIgc3Ryb2tlLXdpZHRoPSIyIi8+CjxjaXJjbGUgY3g9Ijc0LjUiIGN5PSIxMTYuNSIgcj0iMy41IiBzdHJva2U9InVybCgjcGFpbnQzX2xpbmVhcl8yOV82NjIpIiBzdHJva2Utd2lkdGg9IjIiLz4KPGxpbmUgeDE9IjU1LjUiIHkxPSIzOC41IiB4Mj0iOTYuNSIgeTI9IjM4LjUiIHN0cm9rZT0idXJsKCNwYWludDRfbGluZWFyXzI5XzY2MikiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPgo8Y2lyY2xlIGN4PSI1MC41IiBjeT0iMzguNSIgcj0iMS41IiBmaWxsPSJ1cmwoI3BhaW50NV9saW5lYXJfMjlfNjYyKSIvPgo8bGluZSB4MT0iNTUuNSIgeTE9IjQ2LjUiIHgyPSI5Ni41IiB5Mj0iNDYuNSIgc3Ryb2tlPSJ1cmwoI3BhaW50Nl9saW5lYXJfMjlfNjYyKSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+CjxjaXJjbGUgY3g9IjUwLjUiIGN5PSI0Ni41IiByPSIxLjUiIGZpbGw9InVybCgjcGFpbnQ3X2xpbmVhcl8yOV82NjIpIi8+CjxsaW5lIHgxPSI1NS41IiB5MT0iNTQuNSIgeDI9Ijk2LjUiIHkyPSI1NC41IiBzdHJva2U9InVybCgjcGFpbnQ4X2xpbmVhcl8yOV82NjIpIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz4KPGNpcmNsZSBjeD0iNTAuNSIgY3k9IjU0LjUiIHI9IjEuNSIgZmlsbD0idXJsKCNwYWludDlfbGluZWFyXzI5XzY2MikiLz4KPGxpbmUgeDE9IjU1LjUiIHkxPSI2Mi41IiB4Mj0iOTYuNSIgeTI9IjYyLjUiIHN0cm9rZT0idXJsKCNwYWludDEwX2xpbmVhcl8yOV82NjIpIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz4KPGNpcmNsZSBjeD0iNTAuNSIgY3k9IjYyLjUiIHI9IjEuNSIgZmlsbD0idXJsKCNwYWludDExX2xpbmVhcl8yOV82NjIpIi8+CjxsaW5lIHgxPSI1NS41IiB5MT0iNzAuNSIgeDI9Ijk2LjUiIHkyPSI3MC41IiBzdHJva2U9InVybCgjcGFpbnQxMl9saW5lYXJfMjlfNjYyKSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+CjxjaXJjbGUgY3g9IjUwLjUiIGN5PSI3MC41IiByPSIxLjUiIGZpbGw9InVybCgjcGFpbnQxM19saW5lYXJfMjlfNjYyKSIvPgo8bGluZSB4MT0iNTUuNSIgeTE9Ijc4LjUiIHgyPSI5Ni41IiB5Mj0iNzguNSIgc3Ryb2tlPSJ1cmwoI3BhaW50MTRfbGluZWFyXzI5XzY2MikiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPgo8Y2lyY2xlIGN4PSI1MC41IiBjeT0iNzguNSIgcj0iMS41IiBmaWxsPSJ1cmwoI3BhaW50MTVfbGluZWFyXzI5XzY2MikiLz4KPGxpbmUgeDE9IjU1LjUiIHkxPSI4Ni41IiB4Mj0iOTYuNSIgeTI9Ijg2LjUiIHN0cm9rZT0idXJsKCNwYWludDE2X2xpbmVhcl8yOV82NjIpIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz4KPGNpcmNsZSBjeD0iNTAuNSIgY3k9Ijg2LjUiIHI9IjEuNSIgZmlsbD0idXJsKCNwYWludDE3X2xpbmVhcl8yOV82NjIpIi8+CjxsaW5lIHgxPSI1NS41IiB5MT0iOTQuNSIgeDI9Ijk2LjUiIHkyPSI5NC41IiBzdHJva2U9InVybCgjcGFpbnQxOF9saW5lYXJfMjlfNjYyKSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+CjxjaXJjbGUgY3g9IjUwLjUiIGN5PSI5NC41IiByPSIxLjUiIGZpbGw9InVybCgjcGFpbnQxOV9saW5lYXJfMjlfNjYyKSIvPgo8ZGVmcz4KPGxpbmVhckdyYWRpZW50IGlkPSJwYWludDBfbGluZWFyXzI5XzY2MiIgeDE9IjEwNC41ODgiIHkxPSItMzkuMzE5MiIgeDI9IjQuMTI1MjIiIHkyPSIxMzUuMDAxIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CjxzdG9wIHN0b3AtY29sb3I9IiNGRkY4MDAiLz4KPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjMzBGOUZDIi8+CjwvbGluZWFyR3JhZGllbnQ+CjxsaW5lYXJHcmFkaWVudCBpZD0icGFpbnQxX2xpbmVhcl8yOV82NjIiIHgxPSI4Ni40OTU3IiB5MT0iMTA5LjczMyIgeDI9Ijg2LjQ4MDYiIHkyPSIxMTEuMzA1IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CjxzdG9wIHN0b3AtY29sb3I9IiNGRkY4MDAiLz4KPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjMzBGOUZDIi8+CjwvbGluZWFyR3JhZGllbnQ+CjxsaW5lYXJHcmFkaWVudCBpZD0icGFpbnQyX2xpbmVhcl8yOV82NjIiIHgxPSI4Ni45MTIzIiB5MT0iLTQuMjc2MzMiIHgyPSI2LjgyNTMyIiB5Mj0iODAuMTkxOSIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPgo8c3RvcCBzdG9wLWNvbG9yPSIjRkZGODAwIi8+CjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iIzMwRjlGQyIvPgo8L2xpbmVhckdyYWRpZW50Pgo8bGluZWFyR3JhZGllbnQgaWQ9InBhaW50M19saW5lYXJfMjlfNjYyIiB4MT0iNzYuMzc0NCIgeTE9IjEwOS41OTMiIHgyPSI3MC4yNTE0IiB5Mj0iMTIwLjIxOCIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPgo8c3RvcCBzdG9wLWNvbG9yPSIjRkZGODAwIi8+CjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iIzMwRjlGQyIvPgo8L2xpbmVhckdyYWRpZW50Pgo8bGluZWFyR3JhZGllbnQgaWQ9InBhaW50NF9saW5lYXJfMjlfNjYyIiB4MT0iODQuNzQ3IiB5MT0iMzguNzMyNiIgeDI9Ijg0LjcyNTQiIHkyPSI0MC4zMDQ4IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CjxzdG9wIHN0b3AtY29sb3I9IiNGRkY4MDAiLz4KPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjMzBGOUZDIi8+CjwvbGluZWFyR3JhZGllbnQ+CjxsaW5lYXJHcmFkaWVudCBpZD0icGFpbnQ1X2xpbmVhcl8yOV82NjIiIHgxPSI1MS4xMjQ4IiB5MT0iMzYuMTk3OCIgeDI9IjQ5LjA4MzgiIHkyPSIzOS43MzkyIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CjxzdG9wIHN0b3AtY29sb3I9IiNGRkY4MDAiLz4KPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjMzBGOUZDIi8+CjwvbGluZWFyR3JhZGllbnQ+CjxsaW5lYXJHcmFkaWVudCBpZD0icGFpbnQ2X2xpbmVhcl8yOV82NjIiIHgxPSI4NC43NDciIHkxPSI0Ni43MzI2IiB4Mj0iODQuNzI1NCIgeTI9IjQ4LjMwNDgiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KPHN0b3Agc3RvcC1jb2xvcj0iI0ZGRjgwMCIvPgo8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiMzMEY5RkMiLz4KPC9saW5lYXJHcmFkaWVudD4KPGxpbmVhckdyYWRpZW50IGlkPSJwYWludDdfbGluZWFyXzI5XzY2MiIgeDE9IjUxLjEyNDgiIHkxPSI0NC4xOTc4IiB4Mj0iNDkuMDgzOCIgeTI9IjQ3LjczOTIiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KPHN0b3Agc3RvcC1jb2xvcj0iI0ZGRjgwMCIvPgo8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiMzMEY5RkMiLz4KPC9saW5lYXJHcmFkaWVudD4KPGxpbmVhckdyYWRpZW50IGlkPSJwYWludDhfbGluZWFyXzI5XzY2MiIgeDE9Ijg0Ljc0NyIgeTE9IjU0LjczMjYiIHgyPSI4NC43MjU0IiB5Mj0iNTYuMzA0OCIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPgo8c3RvcCBzdG9wLWNvbG9yPSIjRkZGODAwIi8+CjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iIzMwRjlGQyIvPgo8L2xpbmVhckdyYWRpZW50Pgo8bGluZWFyR3JhZGllbnQgaWQ9InBhaW50OV9saW5lYXJfMjlfNjYyIiB4MT0iNTEuMTI0OCIgeTE9IjUyLjE5NzgiIHgyPSI0OS4wODM4IiB5Mj0iNTUuNzM5MiIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPgo8c3RvcCBzdG9wLWNvbG9yPSIjRkZGODAwIi8+CjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iIzMwRjlGQyIvPgo8L2xpbmVhckdyYWRpZW50Pgo8bGluZWFyR3JhZGllbnQgaWQ9InBhaW50MTBfbGluZWFyXzI5XzY2MiIgeDE9Ijg0Ljc0NyIgeTE9IjYyLjczMjYiIHgyPSI4NC43MjU0IiB5Mj0iNjQuMzA0OCIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPgo8c3RvcCBzdG9wLWNvbG9yPSIjRkZGODAwIi8+CjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iIzMwRjlGQyIvPgo8L2xpbmVhckdyYWRpZW50Pgo8bGluZWFyR3JhZGllbnQgaWQ9InBhaW50MTFfbGluZWFyXzI5XzY2MiIgeDE9IjUxLjEyNDgiIHkxPSI2MC4xOTc4IiB4Mj0iNDkuMDgzOCIgeTI9IjYzLjczOTIiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KPHN0b3Agc3RvcC1jb2xvcj0iI0ZGRjgwMCIvPgo8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiMzMEY5RkMiLz4KPC9saW5lYXJHcmFkaWVudD4KPGxpbmVhckdyYWRpZW50IGlkPSJwYWludDEyX2xpbmVhcl8yOV82NjIiIHgxPSI4NC43NDciIHkxPSI3MC43MzI2IiB4Mj0iODQuNzI1NCIgeTI9IjcyLjMwNDgiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KPHN0b3Agc3RvcC1jb2xvcj0iI0ZGRjgwMCIvPgo8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiMzMEY5RkMiLz4KPC9saW5lYXJHcmFkaWVudD4KPGxpbmVhckdyYWRpZW50IGlkPSJwYWludDEzX2xpbmVhcl8yOV82NjIiIHgxPSI1MS4xMjQ4IiB5MT0iNjguMTk3OCIgeDI9IjQ5LjA4MzgiIHkyPSI3MS43MzkyIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CjxzdG9wIHN0b3AtY29sb3I9IiNGRkY4MDAiLz4KPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjMzBGOUZDIi8+CjwvbGluZWFyR3JhZGllbnQ+CjxsaW5lYXJHcmFkaWVudCBpZD0icGFpbnQxNF9saW5lYXJfMjlfNjYyIiB4MT0iODQuNzQ3IiB5MT0iNzguNzMyNiIgeDI9Ijg0LjcyNTQiIHkyPSI4MC4zMDQ4IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CjxzdG9wIHN0b3AtY29sb3I9IiNGRkY4MDAiLz4KPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjMzBGOUZDIi8+CjwvbGluZWFyR3JhZGllbnQ+CjxsaW5lYXJHcmFkaWVudCBpZD0icGFpbnQxNV9saW5lYXJfMjlfNjYyIiB4MT0iNTEuMTI0OCIgeTE9Ijc2LjE5NzgiIHgyPSI0OS4wODM4IiB5Mj0iNzkuNzM5MiIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPgo8c3RvcCBzdG9wLWNvbG9yPSIjRkZGODAwIi8+CjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iIzMwRjlGQyIvPgo8L2xpbmVhckdyYWRpZW50Pgo8bGluZWFyR3JhZGllbnQgaWQ9InBhaW50MTZfbGluZWFyXzI5XzY2MiIgeDE9Ijg0Ljc0NyIgeTE9Ijg2LjczMjYiIHgyPSI4NC43MjU0IiB5Mj0iODguMzA0OCIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPgo8c3RvcCBzdG9wLWNvbG9yPSIjRkZGODAwIi8+CjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iIzMwRjlGQyIvPgo8L2xpbmVhckdyYWRpZW50Pgo8bGluZWFyR3JhZGllbnQgaWQ9InBhaW50MTdfbGluZWFyXzI5XzY2MiIgeDE9IjUxLjEyNDgiIHkxPSI4NC4xOTc4IiB4Mj0iNDkuMDgzOCIgeTI9Ijg3LjczOTIiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KPHN0b3Agc3RvcC1jb2xvcj0iI0ZGRjgwMCIvPgo8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiMzMEY5RkMiLz4KPC9saW5lYXJHcmFkaWVudD4KPGxpbmVhckdyYWRpZW50IGlkPSJwYWludDE4X2xpbmVhcl8yOV82NjIiIHgxPSI4NC43NDciIHkxPSI5NC43MzI2IiB4Mj0iODQuNzI1NCIgeTI9Ijk2LjMwNDgiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KPHN0b3Agc3RvcC1jb2xvcj0iI0ZGRjgwMCIvPgo8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiMzMEY5RkMiLz4KPC9saW5lYXJHcmFkaWVudD4KPGxpbmVhckdyYWRpZW50IGlkPSJwYWludDE5X2xpbmVhcl8yOV82NjIiIHgxPSI1MS4xMjQ4IiB5MT0iOTIuMTk3OCIgeDI9IjQ5LjA4MzgiIHkyPSI5NS43MzkyIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CjxzdG9wIHN0b3AtY29sb3I9IiNGRkY4MDAiLz4KPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjMzBGOUZDIi8+CjwvbGluZWFyR3JhZGllbnQ+CjwvZGVmcz4KPC9zdmc+Cg==");

/***/ }),

/***/ "./src/images/Icons4.svg":
/*!*******************************!*\
  !*** ./src/images/Icons4.svg ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQ4IiBoZWlnaHQ9IjE0OCIgdmlld0JveD0iMCAwIDE0OCAxNDgiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxjaXJjbGUgY3g9IjczLjgzNDUiIGN5PSI3My44MzQ0IiByPSI3Mi44MzQ1IiBzdHJva2U9InVybCgjcGFpbnQwX2xpbmVhcl8yOV82MjcpIiBzdHJva2Utd2lkdGg9IjIiLz4KPHBhdGggZD0iTTM2LjU4OTYgODMuNjNWOTcuNTQ0MkgzOC4yMDc5VjgzLjA2MjdINjEuNTM5OVY5Ny41NDQySDYzLjE1NjRWODMuMDYyN0g4NS43OTUzVjk3LjU0NDJIODcuNDExOVY4My4wNjI3SDExMC43NDRWOTcuNTQ0MkgxMTIuMzZWODMuNjNDMTEyLjM2IDgzLjEwMzYgMTEyLjE0NyA4Mi41OTc2IDExMS43NyA4Mi4yMjQ0QzExMS4zOTIgODEuODUxMyAxMTAuODc2IDgxLjY0MTggMTEwLjM0IDgxLjY0MThINzUuNDU2NlY1MS44MjY4SDczLjgzODNWODEuNjQxOEgzOC42MDk5QzM3LjQ5NCA4MS42NDE4IDM2LjU4NzkgODIuNTMyOCAzNi41ODc5IDgzLjYzSDM2LjU4OTZaIiBmaWxsPSJ3aGl0ZSIgc3Ryb2tlPSJ1cmwoI3BhaW50MV9saW5lYXJfMjlfNjI3KSIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIi8+CjxwYXRoIGQ9Ik03NC40Nzc2IDQ5LjU5MzJDODEuNjY1IDQ5LjU5MzIgODcuNDkxNSA0My44NjQgODcuNDkxNSAzNi43OTY2Qzg3LjQ5MTUgMjkuNzI5MiA4MS42NjUgMjQgNzQuNDc3NiAyNEM2Ny4yOTAxIDI0IDYxLjQ2MzYgMjkuNzI5MiA2MS40NjM2IDM2Ljc5NjZDNjEuNDYzNiA0My44NjQgNjcuMjkwMSA0OS41OTMyIDc0LjQ3NzYgNDkuNTkzMloiIHN0cm9rZT0idXJsKCNwYWludDJfbGluZWFyXzI5XzYyNykiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIi8+CjxwYXRoIGQ9Ik0zNy41MDYxIDExMy41ODVDNDEuMDk5NCAxMTMuNTg1IDQ0LjAxMjMgMTEwLjcyIDQ0LjAxMjMgMTA3LjE4N0M0NC4wMTIzIDEwMy42NTQgNDEuMDk5NCAxMDAuNzkgMzcuNTA2MSAxMDAuNzlDMzMuOTEyOSAxMDAuNzkgMzEgMTAzLjY1NCAzMSAxMDcuMTg3QzMxIDExMC43MiAzMy45MTI5IDExMy41ODUgMzcuNTA2MSAxMTMuNTg1WiIgc3Ryb2tlPSJ1cmwoI3BhaW50M19saW5lYXJfMjlfNjI3KSIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiLz4KPHBhdGggZD0iTTYyLjUzNDMgMTEzLjYzMUM2Ni4xMjc1IDExMy42MzEgNjkuMDQwNCAxMTAuNzY2IDY5LjA0MDQgMTA3LjIzM0M2OS4wNDA0IDEwMy43IDY2LjEyNzUgMTAwLjgzNiA2Mi41MzQzIDEwMC44MzZDNTguOTQxMSAxMDAuODM2IDU2LjAyODIgMTAzLjcgNTYuMDI4MiAxMDcuMjMzQzU2LjAyODIgMTEwLjc2NiA1OC45NDExIDExMy42MzEgNjIuNTM0MyAxMTMuNjMxWiIgc3Ryb2tlPSJ1cmwoI3BhaW50NF9saW5lYXJfMjlfNjI3KSIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiLz4KPHBhdGggZD0iTTg2Ljg0MTYgMTEzLjU4NUM5MC40MzQ5IDExMy41ODUgOTMuMzQ3OCAxMTAuNzIgOTMuMzQ3OCAxMDcuMTg3QzkzLjM0NzggMTAzLjY1NCA5MC40MzQ5IDEwMC43OSA4Ni44NDE2IDEwMC43OUM4My4yNDg0IDEwMC43OSA4MC4zMzU1IDEwMy42NTQgODAuMzM1NSAxMDcuMTg3QzgwLjMzNTUgMTEwLjcyIDgzLjI0ODQgMTEzLjU4NSA4Ni44NDE2IDExMy41ODVaIiBzdHJva2U9InVybCgjcGFpbnQ1X2xpbmVhcl8yOV82MjcpIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIvPgo8cGF0aCBkPSJNMTExLjQ5NiAxMTMuNTg1QzExNS4wODkgMTEzLjU4NSAxMTguMDAyIDExMC43MiAxMTguMDAyIDEwNy4xODdDMTE4LjAwMiAxMDMuNjU0IDExNS4wODkgMTAwLjc5IDExMS40OTYgMTAwLjc5QzEwNy45MDMgMTAwLjc5IDEwNC45OSAxMDMuNjU0IDEwNC45OSAxMDcuMTg3QzEwNC45OSAxMTAuNzIgMTA3LjkwMyAxMTMuNTg1IDExMS40OTYgMTEzLjU4NVoiIHN0cm9rZT0idXJsKCNwYWludDZfbGluZWFyXzI5XzYyNykiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIi8+CjxkZWZzPgo8bGluZWFyR3JhZGllbnQgaWQ9InBhaW50MF9saW5lYXJfMjlfNjI3IiB4MT0iMTA0LjU4OCIgeTE9Ii0zOS40ODkiIHgyPSI0LjEyNTIyIiB5Mj0iMTM0LjgzMSIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPgo8c3RvcCBzdG9wLWNvbG9yPSIjRkZGODAwIi8+CjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iIzMwRjlGQyIvPgo8L2xpbmVhckdyYWRpZW50Pgo8bGluZWFyR3JhZGllbnQgaWQ9InBhaW50MV9saW5lYXJfMjlfNjI3IiB4MT0iOTAuMjU0NyIgeTE9IjM5LjYwMTIiIHgyPSI2Ny45NTI1IiB5Mj0iMTAzLjc0IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CjxzdG9wIHN0b3AtY29sb3I9IiNGRkY4MDAiLz4KPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjMzBGOUZDIi8+CjwvbGluZWFyR3JhZGllbnQ+CjxsaW5lYXJHcmFkaWVudCBpZD0icGFpbnQyX2xpbmVhcl8yOV82MjciIHgxPSI3OS44OTgyIiB5MT0iMTcuMTU2IiB4Mj0iNjIuNjM0NyIgeTI9IjQ3LjYxOTgiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KPHN0b3Agc3RvcC1jb2xvcj0iI0ZGRjgwMCIvPgo8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiMzMEY5RkMiLz4KPC9saW5lYXJHcmFkaWVudD4KPGxpbmVhckdyYWRpZW50IGlkPSJwYWludDNfbGluZWFyXzI5XzYyNyIgeDE9IjQwLjIxNjEiIHkxPSI5Ny4zNjgyIiB4Mj0iMzEuNTg1NSIgeTI9IjExMi41OTgiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KPHN0b3Agc3RvcC1jb2xvcj0iI0ZGRjgwMCIvPgo8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiMzMEY5RkMiLz4KPC9saW5lYXJHcmFkaWVudD4KPGxpbmVhckdyYWRpZW50IGlkPSJwYWludDRfbGluZWFyXzI5XzYyNyIgeDE9IjY1LjI0NDMiIHkxPSI5Ny40MTQzIiB4Mj0iNTYuNjEzNyIgeTI9IjExMi42NDQiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KPHN0b3Agc3RvcC1jb2xvcj0iI0ZGRjgwMCIvPgo8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiMzMEY5RkMiLz4KPC9saW5lYXJHcmFkaWVudD4KPGxpbmVhckdyYWRpZW50IGlkPSJwYWludDVfbGluZWFyXzI5XzYyNyIgeDE9Ijg5LjU1MTYiIHkxPSI5Ny4zNjgyIiB4Mj0iODAuOTIxIiB5Mj0iMTEyLjU5OCIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPgo8c3RvcCBzdG9wLWNvbG9yPSIjRkZGODAwIi8+CjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iIzMwRjlGQyIvPgo8L2xpbmVhckdyYWRpZW50Pgo8bGluZWFyR3JhZGllbnQgaWQ9InBhaW50Nl9saW5lYXJfMjlfNjI3IiB4MT0iMTE0LjIwNiIgeTE9Ijk3LjM2ODIiIHgyPSIxMDUuNTc1IiB5Mj0iMTEyLjU5OCIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPgo8c3RvcCBzdG9wLWNvbG9yPSIjRkZGODAwIi8+CjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iIzMwRjlGQyIvPgo8L2xpbmVhckdyYWRpZW50Pgo8L2RlZnM+Cjwvc3ZnPgo=");

/***/ }),

/***/ "./src/images/Icons5.svg":
/*!*******************************!*\
  !*** ./src/images/Icons5.svg ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQ4IiBoZWlnaHQ9IjE0OCIgdmlld0JveD0iMCAwIDE0OCAxNDgiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxjaXJjbGUgY3g9IjczLjgzNDUiIGN5PSI3My45OTU3IiByPSI3Mi44MzQ1IiBzdHJva2U9InVybCgjcGFpbnQwX2xpbmVhcl8yOV82NDkpIiBzdHJva2Utd2lkdGg9IjIiLz4KPGxpbmUgeDE9IjI0LjQyMDgiIHkxPSI0NS42NDczIiB4Mj0iMTEzLjgxNCIgeTI9IjQ1LjY0NzMiIHN0cm9rZT0idXJsKCNwYWludDFfbGluZWFyXzI5XzY0OSkiIHN0cm9rZS13aWR0aD0iMiIvPgo8cGF0aCBkPSJNMTE0IDYxLjVWNDJDMTE0IDM5Ljc5MDkgMTEyLjIwOSAzOCAxMTAgMzhIMjhDMjUuNzkwOSAzOCAyNCAzOS43OTA5IDI0IDQyVjk1QzI0IDk3LjIwOTEgMjUuNzkwOSA5OSAyOCA5OUg2MSIgc3Ryb2tlPSJ1cmwoI3BhaW50Ml9saW5lYXJfMjlfNjQ5KSIgc3Ryb2tlLXdpZHRoPSIyIi8+CjxjaXJjbGUgY3g9IjMwLjA5ODIiIGN5PSI0Mi40MDQiIHI9IjAuOTE0NDU0IiBzdHJva2U9InVybCgjcGFpbnQzX2xpbmVhcl8yOV82NDkpIi8+CjxjaXJjbGUgY3g9IjM0LjYyNDYiIGN5PSI0Mi40MDQiIHI9IjAuOTE0NDU0IiBzdHJva2U9InVybCgjcGFpbnQ0X2xpbmVhcl8yOV82NDkpIi8+CjxjaXJjbGUgY3g9IjM5LjE1MDciIGN5PSI0Mi40MDQiIHI9IjAuOTE0NDU0IiBzdHJva2U9InVybCgjcGFpbnQ1X2xpbmVhcl8yOV82NDkpIi8+CjxwYXRoIGQ9Ik03OS4wOTY3IDEwOC40OTVWMTEwLjUxMUM3OS4wOTY3IDExMS43OTQgNzguMDQ2MSAxMTIuODkzIDc2LjgyMDEgMTEyLjg5M0g2OC4zMjcxQzY3LjAxNDIgMTEyLjg5MyA2Ni4wNTA1IDExMS43OTQgNjYuMDUwNSAxMTAuNTExVjEwMS41MzJDNjYuMDUwNSA5Ni4xMjY3IDY1LjI2MjQgODcuMjQwNCA2OS4xMTUzIDgzLjExNjhINjYuNTc2M0M2NS43MDEzIDgzLjExNjggNjUgODIuMzgzOSA2NSA4MS40Njc0Vjc5LjgxNzlDNjUgNzguOTAyMyA2NS45NjI4IDc4LjE2ODUgNjYuNzUwOSA3Ny45ODU3TDcyLjUyOTMgNzcuMTYxTDc2LjM4MTIgNjkuNjQ4NkM3Ny40MzE3IDY4LjA5MSA3OS43OTYxIDY2LjQ0MTYgODEuNjM0OCA2Ni4xNjdDOTEuNzAzIDY0LjYwOTQgMTAyLjIxIDY0LjYwOTQgMTEyLjM2NSA2Ni4xNjdDMTE0LjIwNCA2Ni40NDE2IDExNi41NjggNjguMDkxIDExNy42MTkgNjkuNjQ4NkwxMjEuNDcxIDc3LjE2MUwxMjcuMjQ5IDc3Ljk4NTdDMTI4LjAzNyA3OC4xNjg1IDEyOSA3OC45MDE0IDEyOSA3OS44MTc5VjgxLjQ2NzRDMTI5IDgyLjM4MyAxMjguMyA4My4xMTY4IDEyNy40MjQgODMuMTE2OEgxMjQuODg1QzEyOC43MzcgODcuMjM5NSAxMjcuOTQ5IDk2LjEyNjcgMTI3Ljk0OSAxMDEuNTMyVjExMC41MTFDMTI3Ljk0OSAxMTEuNzk0IDEyNi44OTkgMTEyLjg5MyAxMjUuNjczIDExMi44OTNIMTE3LjE4QzExNS45NTQgMTEyLjg5MyAxMTQuOTAzIDExMS43OTQgMTE0LjkwMyAxMTAuNTExVjEwOC40OTVDMTAyLjk5NiAxMDkuMzE5IDkxLjAwMTcgMTA5LjMxOSA3OS4wOTM5IDEwOC40OTVINzkuMDk1N0g3OS4wOTY3Wk04MS43MjI1IDY2Ljk5MTdDODAuMDU4NSA2Ny4xNzQ0IDc3Ljk1NzQgNjguNzMyIDc2Ljk5NDcgNzAuMTA2OUw3Mi45NjcyIDc3Ljg5MzlMNjYuODM4NyA3OC44MDk1QzY2LjU3NjMgNzguODA5NSA2Ni4zMTI5IDc4Ljk5MjIgNjYuMDUwNSA3OS4yNjc4QzY1Ljg3NTkgNzkuNDUwNSA2NS43ODgxIDc5LjYzNDIgNjUuNzg4MSA3OS44MTc5VjgxLjQ2NzRDNjUuNzg4MSA4MS45MjU3IDY2LjEzODMgODIuMjkyMSA2Ni41NzYzIDgyLjI5MjFINzAuOTUzOUM3MC42MDM3IDgyLjY1ODUgNzAuMzQxMyA4Mi45MzMxIDcwLjA3ODkgODMuMjA3N0M2NS44NzU5IDg3LjMzMDQgNjYuODM5NiA5NS43NTkzIDY2LjgzOTYgMTAxLjUzMUM2Ni43NTE4IDEwNC4zNzEgNjYuNzUxOCAxMDcuMzA0IDY2Ljc1MTggMTEwLjUxQzY2Ljc1MTggMTExLjMzNCA2Ny40NTIxIDExMi4wNjcgNjguMzI4IDExMi4wNjdINzYuODIxQzc3LjYwOTEgMTEyLjA2NyA3OC4zMDk0IDExMS4zMzQgNzguMzA5NCAxMTAuNTFWMTA3LjY3QzkwLjgyOTkgMTA4LjQ5NSAxMDMuMTc1IDEwOC40OTUgMTE1LjY5NCAxMDcuNjdWMTEwLjUxQzExNS42OTQgMTExLjMzNCAxMTYuMzk1IDExMi4wNjcgMTE3LjE4MyAxMTIuMDY3SDEyNS42NzZDMTI2LjU1MSAxMTIuMDY3IDEyNy4xNjQgMTExLjMzNCAxMjcuMTY0IDExMC41MVYxMDEuNTMxQzEyNy4xNjQgOTUuNzU5MyAxMjguMTI3IDg3LjMzMDQgMTIzLjkyNSA4My4yMDc3QzEyMy41NzUgODIuOTMzMSAxMjMuMzEyIDgyLjY1NzYgMTIzLjA1IDgyLjI5MjFIMTI3LjQyN0MxMjcuODY1IDgyLjI5MjEgMTI4LjIxNiA4MS45MjU3IDEyOC4yMTYgODEuNDY3NFY3OS44MTc5QzEyOC4yMTYgNzkuNjM1MiAxMjguMTI4IDc5LjQ1MTUgMTI3Ljk1MyA3OS4yNjc4QzEyNy42OTEgNzguOTkzMiAxMjcuNDI3IDc4LjgwOTUgMTI3LjA3OCA3OC44MDk1TDEyMS4wMzcgNzcuODkzOUwxMTcuMDEgNzAuMTA2OUMxMTYuMDQ3IDY4LjczMyAxMTMuODU4IDY3LjE3NDQgMTEyLjE5NCA2Ni45OTE3QzEwMi4yMTQgNjUuMzQyMyA5MS43OTQ0IDY1LjM0MjMgODEuNzI2MiA2Ni45OTE3SDgxLjcyMjVaTTExMS45MjggNzAuNTY1MkMxMTIuOTc5IDcwLjkzMTYgMTEzLjY3OSA3MS4yOTggMTE0LjI5MiA3Mi4zMDU1TDExNy40NDMgNzguODEwNUg3Ni41NTY3TDc5LjcwODMgNzIuMzA1NUM4MC4zMjA5IDcxLjI5OCA4MS4wMjEzIDcwLjkzMTYgODIuMDcxOCA3MC41NjUyQzkyLjA1MjMgNjkuMzc0IDEwMS45NDcgNjkuMzc0IDExMS45MjcgNzAuNTY1MkgxMTEuOTI4Wk0xMTguNjY5IDc5LjU0MzNMMTE0LjkwNCA3MS45MzkxQzExNC4yMDQgNzAuNzQ3OSAxMTMuMzI4IDcwLjE5ODcgMTEyLjAxNSA2OS44MzIzQzEwMi43MzUgNjguMzY2NSA5MS4yNjUxIDY4LjM2NjUgODEuOTg0OSA2OS44MzIzQzgwLjY3MiA3MC4xOTg3IDc5LjcwODMgNzAuNzQ3OSA3OS4wMDggNzEuOTM5MUw3NS4zMzA3IDc5LjU0MzNIMTE4LjY2OVpNMTE4LjIzMSA5MC41Mzc0QzExNS42OTIgOTAuNTM3NCAxMTMuNjc5IDkyLjY0NDIgMTEzLjY3OSA5NS4yMTAyQzExMy42NzkgOTcuNzc2MiAxMTUuNjkyIDk5Ljg4MjkgMTE4LjIzMSA5OS44ODI5QzEyMC43NyA5OS44ODI5IDEyMi42OTcgOTcuNzc2MiAxMjIuNjk3IDk1LjIxMDJDMTIyLjY5NyA5Mi42NDQyIDEyMC42ODQgOTAuNTM3NCAxMTguMjMxIDkwLjUzNzRWOTAuNTM3NFpNMTE4LjIzMSA5MS4zNjIxQzEyMC4yNDUgOTEuMzYyMSAxMjEuOTA5IDkzLjEwMzQgMTIxLjkwOSA5NS4yMTAyQzEyMS45MDkgOTcuMzE2OSAxMjAuMjQ1IDk5LjE1MDEgMTE4LjIzMSA5OS4xNTAxQzExNi4yMTggOTkuMTUwMSAxMTQuNDY2IDk3LjQwODggMTE0LjQ2NiA5NS4yMTAyQzExNC40NjYgOTMuMDExNSAxMTYuMTMgOTEuMzYyMSAxMTguMjMxIDkxLjM2MjFWOTEuMzYyMVpNNzUuNzY4NiA5MC41Mzc0Qzc4LjIxOTggOTAuNTM3NCA4MC4yMzQgOTIuNjQ0MiA4MC4yMzQgOTUuMjEwMkM4MC4yMzQgOTcuNzc2MiA3OC4yMjA4IDk5Ljg4MjkgNzUuNzY4NiA5OS44ODI5QzczLjMxNjUgOTkuODgyOSA3MS4zMDMyIDk3Ljc3NjIgNzEuMzAzMiA5NS4yMTAyQzcxLjMwMzIgOTIuNjQ0MiA3My4zMTY1IDkwLjUzNzQgNzUuNzY4NiA5MC41Mzc0VjkwLjUzNzRaTTc1Ljc2ODYgOTEuMzYyMUM3My43NTUzIDkxLjM2MjEgNzIuMDkxMyA5My4xMDM0IDcyLjA5MTMgOTUuMjEwMkM3Mi4wOTEzIDk3LjMxNjkgNzMuNzU0NCA5OS4xNTAxIDc1Ljc2ODYgOTkuMTUwMUM3Ny43ODI4IDk5LjE1MDEgNzkuNTMzNyA5Ny40MDg4IDc5LjUzMzcgOTUuMjEwMkM3OS41MzM3IDkzLjAxMTUgNzcuODY5NyA5MS4zNjIxIDc1Ljc2ODYgOTEuMzYyMVY5MS4zNjIxWiIgc3Ryb2tlPSJ1cmwoI3BhaW50Nl9saW5lYXJfMjlfNjQ5KSIvPgo8ZGVmcz4KPGxpbmVhckdyYWRpZW50IGlkPSJwYWludDBfbGluZWFyXzI5XzY0OSIgeDE9IjEwNC41ODgiIHkxPSItMzkuMzI3NyIgeDI9IjQuMTI1MjIiIHkyPSIxMzQuOTkyIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CjxzdG9wIHN0b3AtY29sb3I9IiNGRkY4MDAiLz4KPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjMzBGOUZDIi8+CjwvbGluZWFyR3JhZGllbnQ+CjxsaW5lYXJHcmFkaWVudCBpZD0icGFpbnQxX2xpbmVhcl8yOV82NDkiIHgxPSI4Ny43MzQ4IiB5MT0iNDYuMzc5OSIgeDI9Ijg3LjcyNDciIHkyPSI0Ny45NTI0IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CjxzdG9wIHN0b3AtY29sb3I9IiNGRkY4MDAiLz4KPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjMzBGOUZDIi8+CjwvbGluZWFyR3JhZGllbnQ+CjxsaW5lYXJHcmFkaWVudCBpZD0icGFpbnQyX2xpbmVhcl8yOV82NDkiIHgxPSI4Ny43NDM2IiB5MT0iMjEuNjg3NyIgeDI9IjU1LjIzMzkiIHkyPSIxMDQuOTE1IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CjxzdG9wIHN0b3AtY29sb3I9IiNGRkY4MDAiLz4KPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjMzBGOUZDIi8+CjwvbGluZWFyR3JhZGllbnQ+CjxsaW5lYXJHcmFkaWVudCBpZD0icGFpbnQzX2xpbmVhcl8yOV82NDkiIHgxPSIzMC42ODc0IiB5MT0iNDAuMjMzIiB4Mj0iMjguNzYyOCIgeTI9IjQzLjU3MjUiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KPHN0b3Agc3RvcC1jb2xvcj0iI0ZGRjgwMCIvPgo8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiMzMEY5RkMiLz4KPC9saW5lYXJHcmFkaWVudD4KPGxpbmVhckdyYWRpZW50IGlkPSJwYWludDRfbGluZWFyXzI5XzY0OSIgeDE9IjM1LjIxMzgiIHkxPSI0MC4yMzMiIHgyPSIzMy4yODkyIiB5Mj0iNDMuNTcyNSIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPgo8c3RvcCBzdG9wLWNvbG9yPSIjRkZGODAwIi8+CjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iIzMwRjlGQyIvPgo8L2xpbmVhckdyYWRpZW50Pgo8bGluZWFyR3JhZGllbnQgaWQ9InBhaW50NV9saW5lYXJfMjlfNjQ5IiB4MT0iMzkuNzM5OSIgeTE9IjQwLjIzMyIgeDI9IjM3LjgxNTMiIHkyPSI0My41NzI1IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CjxzdG9wIHN0b3AtY29sb3I9IiNGRkY4MDAiLz4KPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjMzBGOUZDIi8+CjwvbGluZWFyR3JhZGllbnQ+CjxsaW5lYXJHcmFkaWVudCBpZD0icGFpbnQ2X2xpbmVhcl8yOV82NDkiIHgxPSIxMTAuMzI5IiB5MT0iNTIuMTkxMiIgeDI9IjgyLjk0MDUiIHkyPSIxMTUuNjk1IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CjxzdG9wIHN0b3AtY29sb3I9IiNGRkY4MDAiLz4KPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjMzBGOUZDIi8+CjwvbGluZWFyR3JhZGllbnQ+CjwvZGVmcz4KPC9zdmc+Cg==");

/***/ }),

/***/ "./src/images/Layer1.webp":
/*!********************************!*\
  !*** ./src/images/Layer1.webp ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/static/Layer1-76c4e850e8d01da95fda627646bfb3f0.webp");

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

/***/ "./src/images/car-christmas-transport-svgrepo-com.svg":
/*!************************************************************!*\
  !*** ./src/images/car-christmas-transport-svgrepo-com.svg ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PgoNPCEtLSBVcGxvYWRlZCB0bzogU1ZHIFJlcG8sIHd3dy5zdmdyZXBvLmNvbSwgR2VuZXJhdG9yOiBTVkcgUmVwbyBNaXhlciBUb29scyAtLT4KPHN2ZyB3aWR0aD0iODAwcHgiIGhlaWdodD0iODAwcHgiIHZpZXdCb3g9IjAgMCA2NCA2NCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KDTxnIGlkPSJmbGF0Ij4KDTxwYXRoIGQ9Ik05LDUxSDNWNDUuMDY0QTQsNCwwLDAsMSw1Ljk1OSw0MS4yTDE0LjEyNywzOUg1N2E0LDQsMCwwLDEsNCw0djhINTUiIHN0eWxlPSJmaWxsOiNkZDRhNDMiLz4KDTxwYXRoIGQ9Ik0zLjE1Nyw0NkEyLjA5LDIuMDksMCwwLDAsMyw0Ni43NlY1MUg2MVY0NloiIHN0eWxlPSJmaWxsOiNkMTNlMzciLz4KDTxwYXRoIGQ9Ik01NCwzOUgxNC4xMjdsOC44LTEwLjU2MUE0LDQsMCwwLDEsMjYsMjdINDMuODU5YTQsNCwwLDAsMSwzLjMyOCwxLjc4MVoiIHN0eWxlPSJmaWxsOiM4N2NlZDkiLz4KDTxyZWN0IGhlaWdodD0iMTIiIHN0eWxlPSJmaWxsOiM1ZWIzZDEiIHdpZHRoPSIyIiB4PSIzNCIgeT0iMjciLz4KDTxjaXJjbGUgY3g9IjE0IiBjeT0iNTEiIHI9IjUiIHN0eWxlPSJmaWxsOiM1NzU3NTUiLz4KDTxjaXJjbGUgY3g9IjUwIiBjeT0iNTEiIHI9IjUiIHN0eWxlPSJmaWxsOiM1NzU3NTUiLz4KDTxjaXJjbGUgY3g9IjE0IiBjeT0iNTEiIHI9IjIiIHN0eWxlPSJmaWxsOiNlYmViZTgiLz4KDTxjaXJjbGUgY3g9IjUwIiBjeT0iNTEiIHI9IjIiIHN0eWxlPSJmaWxsOiNlYmViZTgiLz4KDTxwb2x5Z29uIHBvaW50cz0iNTIgOCA0MCAxMyA0MCA5IDI4IDE0IDI4IDEwIDE2IDE1LjA1MyAxNiAxMiAzIDE4IDE2IDI0IDE2IDIwLjk0NyAyOCAyNiAyOCAyMiA0MCAyNyA0MCAyMyA1MiAyOCA1MiA4IiBzdHlsZT0iZmlsbDojN2VhODJkIi8+Cg08cmVjdCBoZWlnaHQ9IjQiIHN0eWxlPSJmaWxsOiNhNjViMmQiIHdpZHRoPSI5IiB4PSI1MiIgeT0iMTYiLz4KDTxwYXRoIGQ9Ik0yNywyOGEuOTcyLjk3MiwwLDAsMS0uMTg1LS4wMTcsMSwxLDAsMCwxLS44LTEuMTY3bDMtMTZhMSwxLDAsMSwxLDEuOTY2LjM2OGwtMywxNkExLDEsMCwwLDEsMjcsMjhaIiBzdHlsZT0iZmlsbDojN2E0MzIxIi8+Cg08cGF0aCBkPSJNNDUsMjhhMSwxLDAsMCwxLS45ODItLjgxNmwtMy0xNmExLDEsMCwwLDEsMS45NjYtLjM2OGwzLDE2YTEsMSwwLDAsMS0uOCwxLjE2N0EuOTcyLjk3MiwwLDAsMSw0NSwyOFoiIHN0eWxlPSJmaWxsOiM3YTQzMjEiLz4KDTxyZWN0IGhlaWdodD0iMiIgc3R5bGU9ImZpbGw6I2ViZWJlOCIgd2lkdGg9IjQiIHg9IjI4IiB5PSI0MiIvPgoNPHJlY3QgaGVpZ2h0PSIyIiBzdHlsZT0iZmlsbDojZWJlYmU4IiB3aWR0aD0iNCIgeD0iNDQiIHk9IjQyIi8+Cg08cmVjdCBoZWlnaHQ9IjIiIHN0eWxlPSJmaWxsOiNhN2UxZWIiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xMy45NzMgMzEuMzY2KSByb3RhdGUoLTUwLjE5MSkiIHdpZHRoPSIxLjU2MiIgeD0iMjUuNzE5IiB5PSIyOS42Ii8+Cg08cmVjdCBoZWlnaHQ9IjIiIHN0eWxlPSJmaWxsOiNhN2UxZWIiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xNy44MTcgMzAuMzU2KSByb3RhdGUoLTUwLjE5MSkiIHdpZHRoPSI0LjY4NiIgeD0iMjEuMTU3IiB5PSIzMy4yIi8+Cg08cmVjdCBoZWlnaHQ9IjEyIiBzdHlsZT0iZmlsbDojZDEzZTM3IiB3aWR0aD0iMiIgeD0iMzQiIHk9IjM5Ii8+Cg08L2c+Cg08L3N2Zz4=");

/***/ }),

/***/ "./src/images/illustration-flowing-conversation.svg":
/*!**********************************************************!*\
  !*** ./src/images/illustration-flowing-conversation.svg ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/static/illustration-flowing-conversation-447b9b47aef8c266f047e609cbf11004.svg");

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

/***/ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _assertThisInitialized)
/* harmony export */ });
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return self;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/extends.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/extends.js ***!
  \************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _extends)
/* harmony export */ });
function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function (target) {
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

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js ***!
  \******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _inheritsLoose)
/* harmony export */ });
/* harmony import */ var _setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./setPrototypeOf.js */ "./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js");

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  (0,_setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__["default"])(subClass, superClass);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _objectWithoutPropertiesLoose)
/* harmony export */ });
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }
  return target;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _setPrototypeOf)
/* harmony export */ });
function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };
  return _setPrototypeOf(o, p);
}

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