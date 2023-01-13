"use strict";
exports.id = "component---src-pages-index-js";
exports.ids = ["component---src-pages-index-js"];
exports.modules = {

/***/ "./node_modules/gatsby-plugin-image/dist/gatsby-image.module.js":
/*!**********************************************************************!*\
  !*** ./node_modules/gatsby-plugin-image/dist/gatsby-image.module.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GatsbyImage": () => (/* binding */ B),
/* harmony export */   "MainImage": () => (/* binding */ z),
/* harmony export */   "Placeholder": () => (/* binding */ T),
/* harmony export */   "StaticImage": () => (/* binding */ V),
/* harmony export */   "generateImageData": () => (/* binding */ f),
/* harmony export */   "getImage": () => (/* binding */ M),
/* harmony export */   "getImageData": () => (/* binding */ x),
/* harmony export */   "getLowResolutionImageURL": () => (/* binding */ m),
/* harmony export */   "getSrc": () => (/* binding */ S),
/* harmony export */   "getSrcSet": () => (/* binding */ N),
/* harmony export */   "withArtDirection": () => (/* binding */ I)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var camelcase__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! camelcase */ "./node_modules/gatsby-plugin-image/node_modules/camelcase/index.js");
/* harmony import */ var camelcase__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(camelcase__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);




function n() {
  return n = Object.assign ? Object.assign.bind() : function (e) {
    for (var t = 1; t < arguments.length; t++) {
      var a = arguments[t];
      for (var i in a) Object.prototype.hasOwnProperty.call(a, i) && (e[i] = a[i]);
    }
    return e;
  }, n.apply(this, arguments);
}
function o(e, t) {
  if (null == e) return {};
  var a,
    i,
    r = {},
    n = Object.keys(e);
  for (i = 0; i < n.length; i++) t.indexOf(a = n[i]) >= 0 || (r[a] = e[a]);
  return r;
}
var s = [.25, .5, 1, 2],
  l = [750, 1080, 1366, 1920],
  u = [320, 654, 768, 1024, 1366, 1600, 1920, 2048, 2560, 3440, 3840, 4096],
  d = function (e) {
    return console.warn(e);
  },
  c = function (e, t) {
    return e - t;
  },
  h = function (e) {
    return e.map(function (e) {
      return e.src + " " + e.width + "w";
    }).join(",\n");
  };
function g(e) {
  var t = e.lastIndexOf(".");
  if (-1 !== t) {
    var a = e.slice(t + 1);
    if ("jpeg" === a) return "jpg";
    if (3 === a.length || 4 === a.length) return a;
  }
}
function p(e) {
  var t = e.layout,
    i = void 0 === t ? "constrained" : t,
    r = e.width,
    o = e.height,
    s = e.sourceMetadata,
    l = e.breakpoints,
    u = e.aspectRatio,
    d = e.formats,
    c = void 0 === d ? ["auto", "webp"] : d;
  return c = c.map(function (e) {
    return e.toLowerCase();
  }), i = camelcase__WEBPACK_IMPORTED_MODULE_1___default()(i), r && o ? n({}, e, {
    formats: c,
    layout: i,
    aspectRatio: r / o
  }) : (s.width && s.height && !u && (u = s.width / s.height), "fullWidth" === i ? (r = r || s.width || l[l.length - 1], o = o || Math.round(r / (u || 1.3333333333333333))) : (r || (r = o && u ? o * u : s.width ? s.width : o ? Math.round(o / 1.3333333333333333) : 800), u && !o ? o = Math.round(r / u) : u || (u = r / o)), n({}, e, {
    width: r,
    height: o,
    aspectRatio: u,
    layout: i,
    formats: c
  }));
}
function m(e, t) {
  var a;
  return void 0 === t && (t = 20), null == (a = (0, (e = p(e)).generateImageSource)(e.filename, t, Math.round(t / e.aspectRatio), e.sourceMetadata.format || "jpg", e.fit, e.options)) ? void 0 : a.src;
}
function f(e) {
  var t,
    a = (e = p(e)).pluginName,
    i = e.sourceMetadata,
    r = e.generateImageSource,
    o = e.layout,
    u = e.fit,
    c = e.options,
    m = e.width,
    f = e.height,
    b = e.filename,
    k = e.reporter,
    E = void 0 === k ? {
      warn: d
    } : k,
    M = e.backgroundColor,
    S = e.placeholderURL;
  if (a || E.warn('[gatsby-plugin-image] "generateImageData" was not passed a plugin name'), "function" != typeof r) throw new Error("generateImageSource must be a function");
  i && (i.width || i.height) ? i.format || (i.format = g(b)) : i = {
    width: m,
    height: f,
    format: (null == (t = i) ? void 0 : t.format) || g(b) || "auto"
  };
  var N = new Set(e.formats);
  (0 === N.size || N.has("auto") || N.has("")) && (N.delete("auto"), N.delete(""), N.add(i.format)), N.has("jpg") && N.has("png") && (E.warn("[" + a + "] Specifying both 'jpg' and 'png' formats is not supported. Using 'auto' instead"), N.delete("jpg" === i.format ? "png" : "jpg"));
  var x = function (e) {
      var t = e.filename,
        a = e.layout,
        i = void 0 === a ? "constrained" : a,
        r = e.sourceMetadata,
        o = e.reporter,
        u = void 0 === o ? {
          warn: d
        } : o,
        c = e.breakpoints,
        h = void 0 === c ? l : c,
        g = Object.entries({
          width: e.width,
          height: e.height
        }).filter(function (e) {
          var t = e[1];
          return "number" == typeof t && t < 1;
        });
      if (g.length) throw new Error("Specified dimensions for images must be positive numbers (> 0). Problem dimensions you have are " + g.map(function (e) {
        return e.join(": ");
      }).join(", "));
      return "fixed" === i ? function (e) {
        var t = e.filename,
          a = e.sourceMetadata,
          i = e.width,
          r = e.height,
          n = e.fit,
          o = void 0 === n ? "cover" : n,
          l = e.outputPixelDensities,
          u = e.reporter,
          c = void 0 === u ? {
            warn: d
          } : u,
          h = a.width / a.height,
          g = v(void 0 === l ? s : l);
        if (i && r) {
          var p = y(a, {
            width: i,
            height: r,
            fit: o
          });
          i = p.width, r = p.height, h = p.aspectRatio;
        }
        i ? r || (r = Math.round(i / h)) : i = r ? Math.round(r * h) : 800;
        var m = i;
        if (a.width < i || a.height < r) {
          var f = a.width < i ? "width" : "height";
          c.warn("\nThe requested " + f + ' "' + ("width" === f ? i : r) + 'px" for the image ' + t + " was larger than the actual image " + f + " of " + a[f] + "px. If possible, replace the current image with a larger one."), "width" === f ? (i = a.width, r = Math.round(i / h)) : i = (r = a.height) * h;
        }
        return {
          sizes: g.filter(function (e) {
            return e >= 1;
          }).map(function (e) {
            return Math.round(e * i);
          }).filter(function (e) {
            return e <= a.width;
          }),
          aspectRatio: h,
          presentationWidth: m,
          presentationHeight: Math.round(m / h),
          unscaledWidth: i
        };
      }(e) : "constrained" === i ? w(e) : "fullWidth" === i ? w(n({
        breakpoints: h
      }, e)) : (u.warn("No valid layout was provided for the image at " + t + ". Valid image layouts are fixed, fullWidth, and constrained. Found " + i), {
        sizes: [r.width],
        presentationWidth: r.width,
        presentationHeight: r.height,
        aspectRatio: r.width / r.height,
        unscaledWidth: r.width
      });
    }(n({}, e, {
      sourceMetadata: i
    })),
    I = {
      sources: []
    },
    W = e.sizes;
  W || (W = function (e, t) {
    switch (t) {
      case "constrained":
        return "(min-width: " + e + "px) " + e + "px, 100vw";
      case "fixed":
        return e + "px";
      case "fullWidth":
        return "100vw";
      default:
        return;
    }
  }(x.presentationWidth, o)), N.forEach(function (e) {
    var t = x.sizes.map(function (t) {
      var i = r(b, t, Math.round(t / x.aspectRatio), e, u, c);
      if (null != i && i.width && i.height && i.src && i.format) return i;
      E.warn("[" + a + "] The resolver for image " + b + " returned an invalid value.");
    }).filter(Boolean);
    if ("jpg" === e || "png" === e || "auto" === e) {
      var i = t.find(function (e) {
        return e.width === x.unscaledWidth;
      }) || t[0];
      i && (I.fallback = {
        src: i.src,
        srcSet: h(t),
        sizes: W
      });
    } else {
      var n;
      null == (n = I.sources) || n.push({
        srcSet: h(t),
        sizes: W,
        type: "image/" + e
      });
    }
  });
  var j = {
    images: I,
    layout: o,
    backgroundColor: M
  };
  switch (S && (j.placeholder = {
    fallback: S
  }), o) {
    case "fixed":
      j.width = x.presentationWidth, j.height = x.presentationHeight;
      break;
    case "fullWidth":
      j.width = 1, j.height = 1 / x.aspectRatio;
      break;
    case "constrained":
      j.width = e.width || x.presentationWidth || 1, j.height = (j.width || 1) / x.aspectRatio;
  }
  return j;
}
var v = function (e) {
  return Array.from(new Set([1].concat(e))).sort(c);
};
function w(e) {
  var t,
    a = e.sourceMetadata,
    i = e.width,
    r = e.height,
    n = e.fit,
    o = void 0 === n ? "cover" : n,
    l = e.outputPixelDensities,
    u = e.breakpoints,
    d = e.layout,
    h = a.width / a.height,
    g = v(void 0 === l ? s : l);
  if (i && r) {
    var p = y(a, {
      width: i,
      height: r,
      fit: o
    });
    i = p.width, r = p.height, h = p.aspectRatio;
  }
  i = i && Math.min(i, a.width), r = r && Math.min(r, a.height), i || r || (r = (i = Math.min(800, a.width)) / h), i || (i = r * h);
  var m = i;
  return (a.width < i || a.height < r) && (i = a.width, r = a.height), i = Math.round(i), (null == u ? void 0 : u.length) > 0 ? (t = u.filter(function (e) {
    return e <= a.width;
  })).length < u.length && !t.includes(a.width) && t.push(a.width) : t = (t = g.map(function (e) {
    return Math.round(e * i);
  })).filter(function (e) {
    return e <= a.width;
  }), "constrained" !== d || t.includes(i) || t.push(i), {
    sizes: t = t.sort(c),
    aspectRatio: h,
    presentationWidth: m,
    presentationHeight: Math.round(m / h),
    unscaledWidth: i
  };
}
function y(e, t) {
  var a = e.width / e.height,
    i = t.width,
    r = t.height;
  switch (t.fit) {
    case "fill":
      i = t.width ? t.width : e.width, r = t.height ? t.height : e.height;
      break;
    case "inside":
      var n = t.width ? t.width : Number.MAX_SAFE_INTEGER,
        o = t.height ? t.height : Number.MAX_SAFE_INTEGER;
      i = Math.min(n, Math.round(o * a)), r = Math.min(o, Math.round(n / a));
      break;
    case "outside":
      var s = t.width ? t.width : 0,
        l = t.height ? t.height : 0;
      i = Math.max(s, Math.round(l * a)), r = Math.max(l, Math.round(s / a));
      break;
    default:
      t.width && !t.height && (i = t.width, r = Math.round(t.width / a)), t.height && !t.width && (i = Math.round(t.height * a), r = t.height);
  }
  return {
    width: i,
    height: r,
    aspectRatio: i / r
  };
}
var b = ["baseUrl", "urlBuilder", "sourceWidth", "sourceHeight", "pluginName", "formats", "breakpoints", "options"],
  k = ["images", "placeholder"];
function E() {
  return "undefined" != typeof GATSBY___IMAGE && GATSBY___IMAGE;
}
var M = function (e) {
    var t;
    return function (e) {
      var t, a;
      return Boolean(null == e || null == (t = e.images) || null == (a = t.fallback) ? void 0 : a.src);
    }(e) ? e : function (e) {
      return Boolean(null == e ? void 0 : e.gatsbyImageData);
    }(e) ? e.gatsbyImageData : function (e) {
      return Boolean(null == e ? void 0 : e.gatsbyImage);
    }(e) ? e.gatsbyImage : null == e || null == (t = e.childImageSharp) ? void 0 : t.gatsbyImageData;
  },
  S = function (e) {
    var t, a, i;
    return null == (t = M(e)) || null == (a = t.images) || null == (i = a.fallback) ? void 0 : i.src;
  },
  N = function (e) {
    var t, a, i;
    return null == (t = M(e)) || null == (a = t.images) || null == (i = a.fallback) ? void 0 : i.srcSet;
  };
function x(e) {
  var t,
    a = e.baseUrl,
    i = e.urlBuilder,
    r = e.sourceWidth,
    s = e.sourceHeight,
    l = e.pluginName,
    d = void 0 === l ? "getImageData" : l,
    c = e.formats,
    h = void 0 === c ? ["auto"] : c,
    g = e.breakpoints,
    p = e.options,
    m = o(e, b);
  return null != (t = g) && t.length || "fullWidth" !== m.layout && "FULL_WIDTH" !== m.layout || (g = u), f(n({}, m, {
    pluginName: d,
    generateImageSource: function (e, t, a, r) {
      return {
        width: t,
        height: a,
        format: r,
        src: i({
          baseUrl: e,
          width: t,
          height: a,
          options: p,
          format: r
        })
      };
    },
    filename: a,
    formats: h,
    breakpoints: g,
    sourceMetadata: {
      width: r,
      height: s,
      format: "auto"
    }
  }));
}
function I(e, t) {
  var a,
    i,
    r,
    s = e.images,
    l = e.placeholder,
    u = n({}, o(e, k), {
      images: n({}, s, {
        sources: []
      }),
      placeholder: l && n({}, l, {
        sources: []
      })
    });
  return t.forEach(function (t) {
    var a,
      i = t.media,
      r = t.image;
    i ? (r.layout !== e.layout && "development" === "development" && console.warn('[gatsby-plugin-image] Mismatched image layout: expected "' + e.layout + '" but received "' + r.layout + '". All art-directed images use the same layout as the default image'), (a = u.images.sources).push.apply(a, r.images.sources.map(function (e) {
      return n({}, e, {
        media: i
      });
    }).concat([{
      media: i,
      srcSet: r.images.fallback.srcSet
    }])), u.placeholder && u.placeholder.sources.push({
      media: i,
      srcSet: r.placeholder.fallback
    })) :  true && console.warn("[gatsby-plugin-image] All art-directed images passed to must have a value set for `media`. Skipping.");
  }), (a = u.images.sources).push.apply(a, s.sources), null != l && l.sources && (null == (i = u.placeholder) || (r = i.sources).push.apply(r, l.sources)), u;
}
var W,
  j = ["src", "srcSet", "loading", "alt", "shouldLoad"],
  R = ["fallback", "sources", "shouldLoad"],
  _ = function (t) {
    var a = t.src,
      i = t.srcSet,
      r = t.loading,
      s = t.alt,
      l = void 0 === s ? "" : s,
      u = t.shouldLoad,
      d = o(t, j);
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", n({}, d, {
      decoding: "async",
      loading: r,
      src: u ? a : void 0,
      "data-src": u ? void 0 : a,
      srcSet: u ? i : void 0,
      "data-srcset": u ? void 0 : i,
      alt: l
    }));
  },
  A = function (t) {
    var a = t.fallback,
      i = t.sources,
      r = void 0 === i ? [] : i,
      s = t.shouldLoad,
      l = void 0 === s || s,
      u = o(t, R),
      d = u.sizes || (null == a ? void 0 : a.sizes),
      c = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_, n({}, u, a, {
        sizes: d,
        shouldLoad: l
      }));
    return r.length ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("picture", null, r.map(function (t) {
      var a = t.media,
        i = t.srcSet,
        r = t.type;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("source", {
        key: a + "-" + r + "-" + i,
        type: r,
        media: a,
        srcSet: l ? i : void 0,
        "data-srcset": l ? void 0 : i,
        sizes: d
      });
    }), c) : c;
  };
_.propTypes = {
  src: prop_types__WEBPACK_IMPORTED_MODULE_2__.string.isRequired,
  alt: prop_types__WEBPACK_IMPORTED_MODULE_2__.string.isRequired,
  sizes: prop_types__WEBPACK_IMPORTED_MODULE_2__.string,
  srcSet: prop_types__WEBPACK_IMPORTED_MODULE_2__.string,
  shouldLoad: prop_types__WEBPACK_IMPORTED_MODULE_2__.bool
}, A.displayName = "Picture", A.propTypes = {
  alt: prop_types__WEBPACK_IMPORTED_MODULE_2__.string.isRequired,
  shouldLoad: prop_types__WEBPACK_IMPORTED_MODULE_2__.bool,
  fallback: prop_types__WEBPACK_IMPORTED_MODULE_2__.exact({
    src: prop_types__WEBPACK_IMPORTED_MODULE_2__.string.isRequired,
    srcSet: prop_types__WEBPACK_IMPORTED_MODULE_2__.string,
    sizes: prop_types__WEBPACK_IMPORTED_MODULE_2__.string
  }),
  sources: prop_types__WEBPACK_IMPORTED_MODULE_2__.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_2__.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_2__.exact({
    media: prop_types__WEBPACK_IMPORTED_MODULE_2__.string.isRequired,
    type: prop_types__WEBPACK_IMPORTED_MODULE_2__.string,
    sizes: prop_types__WEBPACK_IMPORTED_MODULE_2__.string,
    srcSet: prop_types__WEBPACK_IMPORTED_MODULE_2__.string.isRequired
  }), prop_types__WEBPACK_IMPORTED_MODULE_2__.exact({
    media: prop_types__WEBPACK_IMPORTED_MODULE_2__.string,
    type: prop_types__WEBPACK_IMPORTED_MODULE_2__.string.isRequired,
    sizes: prop_types__WEBPACK_IMPORTED_MODULE_2__.string,
    srcSet: prop_types__WEBPACK_IMPORTED_MODULE_2__.string.isRequired
  })]))
};
var O = ["fallback"],
  T = function (t) {
    var a = t.fallback,
      i = o(t, O);
    return a ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(A, n({}, i, {
      fallback: {
        src: a
      },
      "aria-hidden": !0,
      alt: ""
    })) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", n({}, i));
  };
T.displayName = "Placeholder", T.propTypes = {
  fallback: prop_types__WEBPACK_IMPORTED_MODULE_2__.string,
  sources: null == (W = A.propTypes) ? void 0 : W.sources,
  alt: function (e, t, a) {
    return e[t] ? new Error("Invalid prop `" + t + "` supplied to `" + a + "`. Validation failed.") : null;
  }
};
var z = function (t) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(A, n({}, t)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("noscript", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(A, n({}, t, {
    shouldLoad: !0
  }))));
};
z.displayName = "MainImage", z.propTypes = A.propTypes;
var L = ["children"],
  q = function () {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("script", {
      type: "module",
      dangerouslySetInnerHTML: {
        __html: 'const t="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype;if(t){const t=document.querySelectorAll("img[data-main-image]");for(let e of t){e.dataset.src&&(e.setAttribute("src",e.dataset.src),e.removeAttribute("data-src")),e.dataset.srcset&&(e.setAttribute("srcset",e.dataset.srcset),e.removeAttribute("data-srcset"));const t=e.parentNode.querySelectorAll("source[data-srcset]");for(let e of t)e.setAttribute("srcset",e.dataset.srcset),e.removeAttribute("data-srcset");e.complete&&(e.style.opacity=1,e.parentNode.parentNode.querySelector("[data-placeholder-image]").style.opacity=0)}}'
      }
    });
  },
  C = function (t) {
    var a = t.layout,
      i = t.width,
      r = t.height;
    return "fullWidth" === a ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      "aria-hidden": !0,
      style: {
        paddingTop: r / i * 100 + "%"
      }
    }) : "constrained" === a ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      style: {
        maxWidth: i,
        display: "block"
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
      alt: "",
      role: "presentation",
      "aria-hidden": "true",
      src: "data:image/svg+xml;charset=utf-8,%3Csvg height='" + r + "' width='" + i + "' xmlns='http://www.w3.org/2000/svg' version='1.1'%3E%3C/svg%3E",
      style: {
        maxWidth: "100%",
        display: "block",
        position: "static"
      }
    })) : null;
  },
  D = function (a) {
    var i = a.children,
      r = o(a, L);
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(C, n({}, r)), i, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(q, null));
  },
  P = ["as", "className", "class", "style", "image", "loading", "imgClassName", "imgStyle", "backgroundColor", "objectFit", "objectPosition"],
  H = ["style", "className"],
  F = function (e) {
    return e.replace(/\n/g, "");
  },
  B = function (t) {
    var a = t.as,
      i = void 0 === a ? "div" : a,
      r = t.className,
      s = t.class,
      l = t.style,
      u = t.image,
      d = t.loading,
      c = void 0 === d ? "lazy" : d,
      h = t.imgClassName,
      g = t.imgStyle,
      p = t.backgroundColor,
      m = t.objectFit,
      f = t.objectPosition,
      v = o(t, P);
    if (!u) return console.warn("[gatsby-plugin-image] Missing image prop"), null;
    s && (r = s), g = n({
      objectFit: m,
      objectPosition: f,
      backgroundColor: p
    }, g);
    var w = u.width,
      y = u.height,
      b = u.layout,
      k = u.images,
      M = u.placeholder,
      S = u.backgroundColor,
      N = function (e, t, a) {
        var i = {},
          r = "gatsby-image-wrapper";
        return E() || (i.position = "relative", i.overflow = "hidden"), "fixed" === a ? (i.width = e, i.height = t) : "constrained" === a && (E() || (i.display = "inline-block", i.verticalAlign = "top"), r = "gatsby-image-wrapper gatsby-image-wrapper-constrained"), {
          className: r,
          "data-gatsby-image-wrapper": "",
          style: i
        };
      }(w, y, b),
      x = N.style,
      I = N.className,
      W = o(N, H),
      j = {
        fallback: void 0,
        sources: []
      };
    return k.fallback && (j.fallback = n({}, k.fallback, {
      srcSet: k.fallback.srcSet ? F(k.fallback.srcSet) : void 0
    })), k.sources && (j.sources = k.sources.map(function (e) {
      return n({}, e, {
        srcSet: F(e.srcSet)
      });
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(i, n({}, W, {
      style: n({}, x, l, {
        backgroundColor: p
      }),
      className: I + (r ? " " + r : "")
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(D, {
      layout: b,
      width: w,
      height: y
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(T, n({}, function (e, t, a, i, r, o, s, l) {
      var u = {};
      o && (u.backgroundColor = o, "fixed" === a ? (u.width = i, u.height = r, u.backgroundColor = o, u.position = "relative") : ("constrained" === a || "fullWidth" === a) && (u.position = "absolute", u.top = 0, u.left = 0, u.bottom = 0, u.right = 0)), s && (u.objectFit = s), l && (u.objectPosition = l);
      var d = n({}, e, {
        "aria-hidden": !0,
        "data-placeholder-image": "",
        style: n({
          opacity: 1,
          transition: "opacity 500ms linear"
        }, u)
      });
      return E() || (d.style = {
        height: "100%",
        left: 0,
        position: "absolute",
        top: 0,
        width: "100%"
      }), d;
    }(M, 0, b, w, y, S, m, f))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(z, n({
      "data-gatsby-image-ssr": "",
      className: h
    }, v, function (e, t, a, i, r) {
      return void 0 === r && (r = {}), E() || (r = n({
        height: "100%",
        left: 0,
        position: "absolute",
        top: 0,
        transform: "translateZ(0)",
        transition: "opacity 250ms linear",
        width: "100%",
        willChange: "opacity"
      }, r)), n({}, a, {
        loading: i,
        shouldLoad: e,
        "data-main-image": "",
        style: n({}, r, {
          opacity: 0
        })
      });
    }("eager" === c, 0, j, c, g)))));
  },
  G = ["src", "__imageData", "__error", "width", "height", "aspectRatio", "tracedSVGOptions", "placeholder", "formats", "quality", "transformOptions", "jpgOptions", "pngOptions", "webpOptions", "avifOptions", "blurredOptions", "breakpoints", "outputPixelDensities"],
  V = function (t) {
    return function (a) {
      var i = a.src,
        r = a.__imageData,
        s = a.__error,
        l = o(a, G);
      return s && console.warn(s), r ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(t, n({
        image: r
      }, l)) : (console.warn("Image not loaded", i), s || "development" !== "development" || console.warn('Please ensure that "gatsby-plugin-image" is included in the plugins array in gatsby-config.js, and that your version of gatsby is at least 2.24.78'), null);
    };
  }(B),
  U = function (e, t) {
    return "fullWidth" !== e.layout || "width" !== t && "height" !== t || !e[t] ? prop_types__WEBPACK_IMPORTED_MODULE_2___default().number.apply((prop_types__WEBPACK_IMPORTED_MODULE_2___default()), [e, t].concat([].slice.call(arguments, 2))) : new Error('"' + t + '" ' + e[t] + " may not be passed when layout is fullWidth.");
  },
  X = new Set(["fixed", "fullWidth", "constrained"]),
  Y = {
    src: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string.isRequired),
    alt: function (e, t, a) {
      return e.alt || "" === e.alt ? prop_types__WEBPACK_IMPORTED_MODULE_2___default().string.apply((prop_types__WEBPACK_IMPORTED_MODULE_2___default()), [e, t, a].concat([].slice.call(arguments, 3))) : new Error('The "alt" prop is required in ' + a + '. If the image is purely presentational then pass an empty string: e.g. alt="". Learn more: https://a11y-style-guide.com/style-guide/section-media.html');
    },
    width: U,
    height: U,
    sizes: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string),
    layout: function (e) {
      if (void 0 !== e.layout && !X.has(e.layout)) return new Error("Invalid value " + e.layout + '" provided for prop "layout". Defaulting to "constrained". Valid values are "fixed", "fullWidth" or "constrained".');
    }
  };
V.displayName = "StaticImage", V.propTypes = Y;


/***/ }),

/***/ "./node_modules/gatsby-plugin-image/node_modules/camelcase/index.js":
/*!**************************************************************************!*\
  !*** ./node_modules/gatsby-plugin-image/node_modules/camelcase/index.js ***!
  \**************************************************************************/
/***/ ((module) => {



const preserveCamelCase = string => {
  let isLastCharLower = false;
  let isLastCharUpper = false;
  let isLastLastCharUpper = false;
  for (let i = 0; i < string.length; i++) {
    const character = string[i];
    if (isLastCharLower && /[a-zA-Z]/.test(character) && character.toUpperCase() === character) {
      string = string.slice(0, i) + '-' + string.slice(i);
      isLastCharLower = false;
      isLastLastCharUpper = isLastCharUpper;
      isLastCharUpper = true;
      i++;
    } else if (isLastCharUpper && isLastLastCharUpper && /[a-zA-Z]/.test(character) && character.toLowerCase() === character) {
      string = string.slice(0, i - 1) + '-' + string.slice(i - 1);
      isLastLastCharUpper = isLastCharUpper;
      isLastCharUpper = false;
      isLastCharLower = true;
    } else {
      isLastCharLower = character.toLowerCase() === character && character.toUpperCase() !== character;
      isLastLastCharUpper = isLastCharUpper;
      isLastCharUpper = character.toUpperCase() === character && character.toLowerCase() !== character;
    }
  }
  return string;
};
const camelCase = (input, options) => {
  if (!(typeof input === 'string' || Array.isArray(input))) {
    throw new TypeError('Expected the input to be `string | string[]`');
  }
  options = Object.assign({
    pascalCase: false
  }, options);
  const postProcess = x => options.pascalCase ? x.charAt(0).toUpperCase() + x.slice(1) : x;
  if (Array.isArray(input)) {
    input = input.map(x => x.trim()).filter(x => x.length).join('-');
  } else {
    input = input.trim();
  }
  if (input.length === 0) {
    return '';
  }
  if (input.length === 1) {
    return options.pascalCase ? input.toUpperCase() : input.toLowerCase();
  }
  const hasUpperCase = input !== input.toLowerCase();
  if (hasUpperCase) {
    input = preserveCamelCase(input);
  }
  input = input.replace(/^[_.\- ]+/, '').toLowerCase().replace(/[_.\- ]+(\w|$)/g, (_, p1) => p1.toUpperCase()).replace(/\d+(\w|$)/g, m => m.toUpperCase());
  return postProcess(input);
};
module.exports = camelCase;
// TODO: Remove this for the next major release
module.exports["default"] = camelCase;

/***/ }),

/***/ "./src/components/Automatisation.js":
/*!******************************************!*\
  !*** ./src/components/Automatisation.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! gatsby */ "./.cache/gatsby-browser-entry.js");
/* harmony import */ var gatsby_plugin_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gatsby-plugin-image */ "./node_modules/gatsby-plugin-image/dist/gatsby-image.module.js");



const Automatisation = () => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("section", {
    className: "py-6"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "flex flex-col items-center max-w-7xl mx-auto"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", {
    "data-aos": "fade-up",
    className: "text-center py-6 text-2xl font-bold  md:text-5xl lg:text-6xl"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "bg-clip-text py-2 text-transparent bg-gradient-to-r from-[#30F9FC] to-lime-300"
  }, "AUTOMATISATION DES STRAT\xC9GIES MARKETING/ PARTENAIRE MARKETING LEADSTREAM")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "flex flex-col gap-10 items-center p-10 md:flex-row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "relative"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    "data-aos": "fade-in",
    "data-aos-duration": "1000",
    "data-aos-delay": "500"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "absolute -z-10 translate-y-[1rem] translate-x-[-1rem] h-full w-full  bg-gradient-to-t from-[#30F9FC] to-lime-300"
  }), " "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(gatsby_plugin_image__WEBPACK_IMPORTED_MODULE_2__.StaticImage, {
    src: "../images/bureau.webp",
    alt: "travail",
    placeholder: "white",
    __imageData: __webpack_require__(/*! ./.cache/caches/gatsby-plugin-image/2318581405.json */ "./.cache/caches/gatsby-plugin-image/2318581405.json")
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "flex flex-col text-neutral-700 gap-4 pl-10 py-6"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", {
    className: "flex flex-col"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "max-w-lg text-lg font-bold sm:text-2xl md:text-3xl lg:text-4xl"
  }, "NOS SITES WEB G\xC9N\xC8RENT DES FEEDS POUR LE GOOGLE MERCHANT CENTER")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "max-w-lg"
  }, "Nos services de marketing seront offerts en partenariat avec l'agence Leadstream."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", {
    className: "list-disc  font-bold ml-6"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, "Campagne Facebook et Google Ads"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, "R\xE9f\xE9rencement et r\xE9daction de contenus"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, "Conseils et strat\xE9gies de marketing")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(gatsby__WEBPACK_IMPORTED_MODULE_1__.Link, {
    className: "mt-10",
    to: "/demo"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "px-4 py-3 border-neutral-700 border-[1px] rounded-full font-bold text-neutral-700 transition duration-300 ease-in-out hover:bg-neutral-700 hover:text-white mr-6"
  }, "COMMENCER"))))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Automatisation);

/***/ }),

/***/ "./src/components/Contact.js":
/*!***********************************!*\
  !*** ./src/components/Contact.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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
    className: "text-neutral-700 grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
    className: "border-gray-400 border-solid border-l-2 px-6 py-4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "flex flex-col max-w-[25rem] gap-4 pl-10 py-6  md:pl-0 md:pr-10"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", {
    className: "text-lg font-bold sm:text-2xl md:text-3xl lg:text-4xl"
  }, "LIENS RAPIDES"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "Produits"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "D\xE9mo"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "Support"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "Contact"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
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

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const Divider = () => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "w-0 h-0 border-r-[100vw] border-r-[#30F9FC] border-b-[10vw] border-b-neutral-900"
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Divider);

/***/ }),

/***/ "./src/components/Dividerleft.js":
/*!***************************************!*\
  !*** ./src/components/Dividerleft.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! gatsby */ "./.cache/gatsby-browser-entry.js");
/* harmony import */ var gatsby_plugin_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gatsby-plugin-image */ "./node_modules/gatsby-plugin-image/dist/gatsby-image.module.js");



const Experience = () => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("section", {
    className: "bg-white pt-6 pb-[8.5rem]"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "flex flex-col items-center text-neutral-700"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "flex flex-col justify-center items-center text-center px-6"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", {
    className: "flex flex-col text-2xl font-bold  md:text-5xl lg:text-6xl"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "pt-2 bg-clip-text text-transparent bg-gradient-to-r from-[#30F9FC] to-lime-300"
  }, "UNE EXP\xC9RIENCE OPTIMIS\xC9E")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: " pt-2"
  }, "POUR VOUS ET VOS CLIENTS"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: " text-sm max-w-[30rem] py-10 "
  }, "A small team of people driven by performance and excellence. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "rounded-xl mb-8 bg-gray-300 h-[2px] max-w-[30rem] w-full "
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(gatsby__WEBPACK_IMPORTED_MODULE_1__.Link, {
    to: "/demo"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "border-[1px] px-4 py-2 border-neutral-700 rounded-full font-bold text-neutral-700 transition duration-300 ease-in-out hover:bg-neutral-700 hover:text-white"
  }, "COMMENCER"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "flex flex-col gap-10 items-center p-10 lg:flex-row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    "data-aos": "fade-right",
    "data-aos-duration": "1000"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(gatsby_plugin_image__WEBPACK_IMPORTED_MODULE_2__.StaticImage, {
    src: "../images/Images1-min.svg",
    alt: "travail",
    placeholder: "white",
    __imageData: __webpack_require__(/*! ./.cache/caches/gatsby-plugin-image/3512290765.json */ "./.cache/caches/gatsby-plugin-image/3512290765.json")
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "flex flex-col max-w-[25rem] gap-4 border-gray-300 border-solid border-l-2 pl-10 py-6"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", {
    className: "text-lg font-bold sm:text-2xl md:text-3xl lg:text-4xl"
  }, "DES SITES WEB ULTRA RAPIDES"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "Avec l'utilisation des derni\xE8res technologies pour offrir des sites web ultra rapides."))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "flex flex-col gap-10 items-center p-10 lg:flex-row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    "data-sal": "slide-left",
    "data-sal-duration": "1000",
    className: "lg:order-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(gatsby_plugin_image__WEBPACK_IMPORTED_MODULE_2__.StaticImage, {
    src: "../images/Images2-min.svg",
    alt: "travail",
    placeholder: "white",
    __imageData: __webpack_require__(/*! ./.cache/caches/gatsby-plugin-image/3984715358.json */ "./.cache/caches/gatsby-plugin-image/3984715358.json")
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "flex flex-col max-w-[25rem] gap-4 border-gray-300 border-solid border-l-2 pl-10 py-6 lg:order-1 md:border-l-0 md:border-r-2 md:pl-0 md:pr-10"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", {
    className: "text-lg font-bold sm:text-2xl md:text-3xl lg:text-4xl"
  }, "PLATEFORME (CMS)FACILE \xC0 UTILISER"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "Pour l'int\xE9gration de contenus personnalis\xE9s sur le site Web (article de blogue, landing pages, promotions du mois, textes SEO et plus)."))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "flex flex-col gap-10 items-center p-10 lg:flex-row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    "data-aos": "fade-right",
    "data-aos-duration": "1000"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(gatsby_plugin_image__WEBPACK_IMPORTED_MODULE_2__.StaticImage, {
    src: "../images/Images3-min.svg",
    alt: "travail",
    placeholder: "white",
    __imageData: __webpack_require__(/*! ./.cache/caches/gatsby-plugin-image/3042297799.json */ "./.cache/caches/gatsby-plugin-image/3042297799.json")
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "flex flex-col max-w-[25rem] gap-4 border-gray-300 border-solid border-l-2 pl-10 py-6"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", {
    className: "text-lg font-bold sm:text-2xl md:text-3xl lg:text-4xl"
  }, "DEMANDES WEB DE QUALIT\xC9 (LEADS)"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "Offrant un taux de conversion plus \xE9lev\xE9 et un co\xFBt d'acquisition plus bas."))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "flex flex-col gap-10 items-center p-10 lg:flex-row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    "data-aos": "fade-left",
    "data-aos-duration": "1000",
    className: "lg:order-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(gatsby_plugin_image__WEBPACK_IMPORTED_MODULE_2__.StaticImage, {
    src: "../images/Imags-min.svg",
    alt: "travail",
    placeholder: "white",
    __imageData: __webpack_require__(/*! ./.cache/caches/gatsby-plugin-image/3943714865.json */ "./.cache/caches/gatsby-plugin-image/3943714865.json")
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "flex flex-col max-w-[25rem] gap-4 border-gray-300 border-solid border-l-2 pl-10 py-6 lg:order-1 md:border-l-0 md:border-r-2 md:pl-0 md:pr-10"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", {
    className: "text-lg font-bold sm:text-2xl md:text-3xl lg:text-4xl"
  }, "CONCEPTION GRAPHIQUE ET EXP\xC9RIENCE EN LIGNE OPTIMALE"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "Pour faciliter la navigation."))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "flex flex-col gap-10 items-center p-10 lg:flex-row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    "data-aos": "fade-right",
    "data-aos-duration": "1000"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(gatsby_plugin_image__WEBPACK_IMPORTED_MODULE_2__.StaticImage, {
    src: "../images/Images4-min.svg",
    alt: "travail",
    placeholder: "white",
    __imageData: __webpack_require__(/*! ./.cache/caches/gatsby-plugin-image/1513207106.json */ "./.cache/caches/gatsby-plugin-image/1513207106.json")
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "flex flex-col max-w-[25rem] gap-4 border-gray-300 border-solid border-l-2 pl-10 py-6"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", {
    className: "text-lg font-bold sm:text-2xl md:text-3xl lg:text-4xl"
  }, "MISES A JOUR AUTOMATIS\xC9E DES PROGRAMMES ET PROMOTIONS"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "Des manifacturiers."))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "flex flex-col gap-10 items-center p-10 lg:flex-row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    "data-aos": "fade-left",
    "data-aos-duration": "1000",
    className: "lg:order-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(gatsby_plugin_image__WEBPACK_IMPORTED_MODULE_2__.StaticImage, {
    src: "../images/Images5-min.svg",
    alt: "travail",
    placeholder: "white",
    __imageData: __webpack_require__(/*! ./.cache/caches/gatsby-plugin-image/419675804.json */ "./.cache/caches/gatsby-plugin-image/419675804.json")
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "flex flex-col max-w-[25rem] gap-4 border-gray-300 border-solid border-l-2 pl-10 py-6 lg:order-1 md:border-l-0 md:border-r-2 md:pl-0 md:pr-10"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", {
    className: "text-lg font-bold sm:text-2xl md:text-3xl lg:text-4xl"
  }, "OPTIMISATION SEO"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "Incluant la gestion de la taille des images, des balises, des donnees structur\xE9es, des sitemaps, etc.")))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Experience);

/***/ }),

/***/ "./src/components/Footer.js":
/*!**********************************!*\
  !*** ./src/components/Footer.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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
  }, "Tous droits r\xE9serv\xE9s Autoroot Technologies Inc \xA9 2022"));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Footer);

/***/ }),

/***/ "./src/components/Header.js":
/*!**********************************!*\
  !*** ./src/components/Header.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! gatsby */ "./.cache/gatsby-browser-entry.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _images_menu_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../images/menu.svg */ "./src/images/menu.svg");
/* harmony import */ var _images_Vector_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../images/Vector.svg */ "./src/images/Vector.svg");
/* harmony import */ var _images_Vector1b_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../images/Vector1b.svg */ "./src/images/Vector1b.svg");
/* harmony import */ var _images_Vector2b_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../images/Vector2b.svg */ "./src/images/Vector2b.svg");
/* harmony import */ var _images_Vector4_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../images/Vector4.svg */ "./src/images/Vector4.svg");
/* harmony import */ var _images_Vector3b_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../images/Vector3b.svg */ "./src/images/Vector3b.svg");
/* harmony import */ var _images_Vector6b_svg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../images/Vector6b.svg */ "./src/images/Vector6b.svg");










const Header = ({
  backgroundColor
}) => {
  const {
    0: navbar,
    1: setNavbar
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("nav", {
    className: `w-full ${backgroundColor} bg-opacity-100 z-40 lg:absolute lg:bg-opacity-0`
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
    className: "justify-between px-6 mx-auto lg:pt-[2px] lg:max-w-7xl lg:items-center lg:flex"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
    className: "flex items-center justify-between py-3 lg:py-5 lg:block"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(gatsby__WEBPACK_IMPORTED_MODULE_0__.Link, {
    to: "/",
    className: "flex gap-[1px]"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("img", {
    "data-sal": "flip-left",
    "data-sal-duration": "500",
    className: "h-[1.5rem] w-[1.5rem]",
    src: _images_Vector_svg__WEBPACK_IMPORTED_MODULE_3__["default"],
    alt: "Letter A"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("img", {
    "data-sal": "slide-down",
    "data-sal-duration": "500",
    "data-sal-easing": "ease-in",
    className: "h-[1.5rem] w-[1.5rem] ",
    src: _images_Vector1b_svg__WEBPACK_IMPORTED_MODULE_4__["default"],
    alt: "Letter U"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("img", {
    "data-sal": "slide-down",
    "data-sal-duration": "500",
    "data-sal-delay": "200",
    "data-sal-easing": "ease-in",
    className: "h-[1.5rem] w-[1.5rem] ml-[-0.3rem]",
    src: _images_Vector2b_svg__WEBPACK_IMPORTED_MODULE_5__["default"],
    alt: "Letter T"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("img", {
    "data-sal": "slide-down",
    "data-sal-duration": "500",
    "data-sal-delay": "400",
    "data-sal-easing": "ease-in",
    className: "h-[1.5rem] w-[1.5rem] ml-[-0.3rem]",
    src: _images_Vector3b_svg__WEBPACK_IMPORTED_MODULE_7__["default"],
    alt: "Letter O"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("img", {
    "data-sal": "slide-left",
    "data-sal-delay": "700",
    "data-sal-duration": "500",
    "data-sal-easing": "ease-in-out-back",
    className: "h-[1.5rem] w-[1.5rem] ml-[-0.3rem]",
    src: _images_Vector4_svg__WEBPACK_IMPORTED_MODULE_6__["default"],
    alt: "Letter R"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("img", {
    "data-sal": "slide-left",
    "data-sal-delay": "700",
    "data-sal-duration": "500",
    "data-sal-easing": "ease-in-out-back",
    className: "h-[1.5rem] w-[1.5rem] ml-[-0.4rem]",
    src: _images_Vector3b_svg__WEBPACK_IMPORTED_MODULE_7__["default"],
    alt: "Letter O"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("img", {
    "data-sal": "slide-left",
    "data-sal-delay": "700",
    "data-sal-duration": "500",
    "data-sal-easing": "ease-in-out-back",
    className: "h-[1.5rem] w-[1.5rem]",
    src: _images_Vector3b_svg__WEBPACK_IMPORTED_MODULE_7__["default"],
    alt: "Letter O"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("img", {
    "data-sal": "slide-left",
    "data-sal-delay": "700",
    "data-sal-duration": "500",
    "data-sal-easing": "ease-in-out-back",
    className: "h-[1.5rem] w-[1.5rem] ml-[-0.3rem]",
    src: _images_Vector2b_svg__WEBPACK_IMPORTED_MODULE_5__["default"],
    alt: "Letter T"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
    className: "flex justify-start items-end ml-[-0.2rem]"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("img", {
    "data-sal": "fade",
    "data-sal-delay": "1000",
    "data-sal-duration": "1500",
    className: "h-[0.7rem] w-[0.7rem] ",
    src: _images_Vector6b_svg__WEBPACK_IMPORTED_MODULE_8__["default"],
    alt: "Rights"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
    className: "lg:hidden"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("button", {
    "aria-label": "menu",
    id: "commence",
    className: "p-2 text-gray-700 rounded-md outline-none ",
    onClick: () => setNavbar(!navbar)
  }, navbar ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("p", {
    className: "text-neutral-700 text-xl mr-[5px] font-bold"
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
    className: "relative text-neutral-700 after:transition-transform after:duration-500 after:ease-out after:absolute after:bottom-0 after:left-0 after:block after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-neutral-700 after:content-[''] after:group-hover:origin-bottom-left after:group-hover:scale-x-100"
  }, "PRODUITS"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("li", {
    className: "flex justify-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(gatsby__WEBPACK_IMPORTED_MODULE_0__.Link, {
    className: "btn group flex items-center bg-transparent tracking-widest text-white",
    to: "/demo"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("span", {
    className: "relative  text-neutral-700 after:transition-transform after:duration-500 after:ease-out after:absolute after:bottom-0 after:left-0 after:block after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-neutral-700 after:content-[''] after:group-hover:origin-bottom-left after:group-hover:scale-x-100"
  }, "D\xC9MO"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("li", {
    className: "flex justify-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(gatsby__WEBPACK_IMPORTED_MODULE_0__.Link, {
    className: "btn group flex items-center bg-transparent tracking-widest text-white",
    to: "/"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("span", {
    className: "relative  text-neutral-700 after:transition-transform after:duration-500 after:ease-out after:absolute after:bottom-0 after:left-0 after:block after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-neutral-700 after:content-[''] after:group-hover:origin-bottom-left after:group-hover:scale-x-100"
  }, "SUPPORT"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("li", {
    className: "flex justify-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(gatsby__WEBPACK_IMPORTED_MODULE_0__.Link, {
    className: "btn group flex items-center bg-transparent tracking-widest text-white",
    to: "/"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("span", {
    className: "relative  text-neutral-700 after:transition-transform after:duration-500 after:ease-out after:absolute after:bottom-0 after:left-0 after:block after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-neutral-700 after:content-[''] after:group-hover:origin-bottom-left after:group-hover:scale-x-100"
  }, "CONTACT"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("li", {
    className: "text-white  hover:text-indigo-200 lg:hidden"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(gatsby__WEBPACK_IMPORTED_MODULE_0__.Link, {
    to: "/"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("span", {
    className: " border-2 px-12 py-2 border-neutral-700 rounded-full font-bold text-neutral-700 transition duration-300 ease-in-out hover:bg-neutral-700 hover:text-white"
  }, "CONNEXION"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("li", {
    className: "text-white hover:text-indigo-200 lg:hidden"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(gatsby__WEBPACK_IMPORTED_MODULE_0__.Link, {
    to: "/"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("span", {
    className: "border-2 px-11 py-2 border-neutral-700 rounded-full font-bold text-neutral-700 transition duration-300 ease-in-out hover:bg-neutral-700 hover:text-white"
  }, "COMMENCER"))))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
    className: "hidden space-x-2 lg:inline-block"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(gatsby__WEBPACK_IMPORTED_MODULE_0__.Link, {
    className: "btn group  bg-transparent tracking-widest text-white",
    to: "/"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("span", {
    className: "relative font-bold pb-[2px] text-neutral-700 after:transition-transform after:duration-500 after:ease-out after:absolute after:bottom-0 after:left-0 after:block after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-neutral-700 after:content-[''] after:group-hover:origin-bottom-left after:group-hover:scale-x-100"
  }, "CONNEXION")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(gatsby__WEBPACK_IMPORTED_MODULE_0__.Link, {
    to: "/"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("span", {
    className: "border-[1px] px-4 py-2 border-neutral-700 rounded-full font-bold text-neutral-700 transition duration-300 ease-in-out hover:bg-neutral-700 hover:text-white"
  }, "COMMENCER")))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Header);

/***/ }),

/***/ "./src/components/Hero.js":
/*!********************************!*\
  !*** ./src/components/Hero.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! gatsby */ "./.cache/gatsby-browser-entry.js");
/* harmony import */ var gatsby_plugin_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gatsby-plugin-image */ "./node_modules/gatsby-plugin-image/dist/gatsby-image.module.js");



const Hero = () => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("section", {
    className: "bg-gradient-to-t from-[#30F9FC] to-lime-300 "
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "flex flex-col h-full max-w-[1280px] mx-auto px-6 gap-2 pt-8 lg:pt-16 lg:flex-row lg:items-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "flex flex-col justify-center items-center text-center lg:items-start lg:text-start"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", {
    className: "flex flex-col z-20 text-neutral-700 text-2xl font-bold  md:text-5xl lg:text-6xl"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "DES SITES WEB"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "whitespace-nowrap"
  }, "DE CONCESSIONAIRES")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "text-neutral-700 text-lg z-20 pt-3"
  }, "CON\xC7US POUR G\xC9N\xC9RER DES LEADS DE QUALIT\xC9"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(gatsby__WEBPACK_IMPORTED_MODULE_1__.Link, {
    className: "mt-10",
    to: "/demo"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "px-4 py-3 border-neutral-700 border-[1px] rounded-full font-bold text-neutral-700 transition duration-300 ease-in-out hover:bg-neutral-700 hover:text-white mr-6"
  }, "DEMANDER UNE D\xC9MO"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "relative pb-10 mt-[1rem] lg:ml-[-18rem] lg:pb-0"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    "data-sal": "slide-up",
    "data-sal-duration": "2000",
    className: "absolute"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(gatsby_plugin_image__WEBPACK_IMPORTED_MODULE_2__.StaticImage, {
    src: "../images/stars.webp",
    alt: "stars",
    placeholder: "blurred",
    loading: "eager",
    __imageData: __webpack_require__(/*! ./.cache/caches/gatsby-plugin-image/1163227408.json */ "./.cache/caches/gatsby-plugin-image/1163227408.json")
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(gatsby_plugin_image__WEBPACK_IMPORTED_MODULE_2__.StaticImage, {
    src: "../images/Images-min.svg",
    alt: "stock",
    placeholder: "rgb(31 41 55)",
    loading: "eager",
    __imageData: __webpack_require__(/*! ./.cache/caches/gatsby-plugin-image/1388991188.json */ "./.cache/caches/gatsby-plugin-image/1388991188.json")
  }))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Hero);

/***/ }),

/***/ "./src/components/Integration.js":
/*!***************************************!*\
  !*** ./src/components/Integration.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! gatsby */ "./.cache/gatsby-browser-entry.js");
/* harmony import */ var gatsby_plugin_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gatsby-plugin-image */ "./node_modules/gatsby-plugin-image/dist/gatsby-image.module.js");



const Integration = () => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("section", {
    className: "bg-black relative z-0 py-6"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "flex flex-col  max-w-7xl mx-auto"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", {
    "data-aos": "fade-up",
    className: "text-center py-6 text-2xl font-bold  md:text-5xl lg:text-6xl"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "bg-clip-text py-2 text-transparent bg-gradient-to-r from-[#30F9FC] to-lime-300"
  }, "INT\xC9GRATION")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "flex flex-col gap-10 items-center p-10 lg:flex-row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "relative"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    "data-aos": "fade-in",
    "data-aos-duration": "1500",
    "data-aos-delay": "500"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "absolute -z-10 translate-y-[1rem] translate-x-[-1rem] h-full w-full rounded-tr-[10rem] rounded-bl-[10rem] bg-gradient-to-t from-[#30F9FC] to-lime-300"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(gatsby_plugin_image__WEBPACK_IMPORTED_MODULE_2__.StaticImage, {
    className: "rounded-tr-[10rem] rounded-bl-[10rem]",
    src: "../images/auto.webp",
    alt: "travail",
    placeholder: "black",
    __imageData: __webpack_require__(/*! ./.cache/caches/gatsby-plugin-image/1356714465.json */ "./.cache/caches/gatsby-plugin-image/1356714465.json")
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "flex flex-col gap-4 py-6 md:pl-10 md:border-gray-700 md:border-solid md:border-l-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", {
    className: "flex flex-col"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "bg-clip-text text-transparent bg-gradient-to-r from-[#30F9FC] to-lime-300 text-lg font-bold sm:text-2xl md:text-3xl lg:text-4xl"
  }, "INT\xC9GRATION"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#30F9FC] to-lime-300"
  }, "AVEC LES MEILLEURES PLATEFORMES")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: " text-white"
  }, "Notre portfolio inclus d\xE9j\xE0 plusieurs marques de v\xE9hicules neufs:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", {
    className: "list-disc text-white font-bold ml-6"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, "Hyundai"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, "Kia"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, "Nissan"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, "Mazda"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, "Subaru"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, "Mitsubishi"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, "Infiniti")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: " text-white"
  }, "Et plusieurs autres marques en d\xE9veloppement."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(gatsby__WEBPACK_IMPORTED_MODULE_1__.Link, {
    className: "mt-10",
    to: "/demo"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: " border-[1px] px-4 py-3 border-white rounded-full font-bold text-white transition duration-300 ease-in-out hover:bg-white hover:text-black mr-6"
  }, "DEMANDER UNE D\xC9MO"))))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Integration);

/***/ }),

/***/ "./src/components/Integre.js":
/*!***********************************!*\
  !*** ./src/components/Integre.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! gatsby */ "./.cache/gatsby-browser-entry.js");
/* harmony import */ var gatsby_plugin_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gatsby-plugin-image */ "./node_modules/gatsby-plugin-image/dist/gatsby-image.module.js");



const Integre = () => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("section", {
    className: "bg-black p-4 relative z-30"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "flex flex-col items-center gap-6 max-w-7xl mx-auto"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", {
    "data-aos": "fade-up",
    className: "text-center py-6 text-2xl font-bold md:text-5xl lg:text-6xl"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "bg-clip-text py-2 text-transparent bg-gradient-to-r from-[#30F9FC] to-lime-300"
  }, "INT\xC9GR\xC9 AVEC VOS OUTILS")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "text-white max-w-xl mx-auto text-center"
  }, "Notre plateforme se connecte aux differents API et sources de donn\xE9es que vous avez en place. DMS, CRM, \xC9valuateur, Syndication, etc."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#30F9FC] to-lime-300 max-w-xl mx-auto text-center"
  }, "POUR VOUS ET VOS CLIENTS"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "py-6"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(gatsby_plugin_image__WEBPACK_IMPORTED_MODULE_2__.StaticImage, {
    src: "../images/Logo2.webp",
    alt: "logo",
    placeholder: "black",
    __imageData: __webpack_require__(/*! ./.cache/caches/gatsby-plugin-image/2874707961.json */ "./.cache/caches/gatsby-plugin-image/2874707961.json")
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "bg-clip-text text-transparent bg-gradient-to-r from-[#30F9FC] to-lime-300 max-w-xl mx-auto text-center"
  }, "Vous ne trouvez pas votre CRM? \xC9crivez-nous et nous vous contacterons!"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "rounded-xl bg-gray-700 h-[1px] max-w-[30rem] mx-auto w-full "
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(gatsby__WEBPACK_IMPORTED_MODULE_1__.Link, {
    className: "mt-8 mx-auto",
    to: "/demo"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "border-[1px] px-4 py-3 border-white rounded-full font-bold text-white transition duration-300 ease-in-out hover:bg-white hover:text-black "
  }, "COMMENCER"))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Integre);

/***/ }),

/***/ "./src/components/Produits.js":
/*!************************************!*\
  !*** ./src/components/Produits.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! gatsby */ "./.cache/gatsby-browser-entry.js");
/* harmony import */ var gatsby_plugin_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gatsby-plugin-image */ "./node_modules/gatsby-plugin-image/dist/gatsby-image.module.js");



const Produits = () => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("section", {
    className: "bg-neutral-900"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "flex flex-col px-6 py-6 max-w-7xl mx-auto"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", {
    "data-aos": "fade-up",
    className: "text-center py-16 text-2xl font-bold md:text-5xl lg:text-6xl"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "bg-clip-text py-2 text-transparent bg-gradient-to-r from-[#30F9FC] to-lime-300"
  }, "PRODUITS")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", {
    className: "text-white grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
    className: "border-gray-700 border-solid border-l-2 px-6 py-4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    "data-aos": "fade-left"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(gatsby_plugin_image__WEBPACK_IMPORTED_MODULE_2__.StaticImage, {
    src: "../images/Icons-min.svg",
    alt: "icon1",
    placeholder: "rgb(23 23 23)",
    __imageData: __webpack_require__(/*! ./.cache/caches/gatsby-plugin-image/14817578.json */ "./.cache/caches/gatsby-plugin-image/14817578.json")
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", {
    className: "font-bold py-3"
  }, "SITES WEB DE CONCESSIONAIRES AUTOS"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "text-sm"
  }, "Suivant les normes des manifacturiers")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
    className: "border-gray-700 border-solid border-l-2 px-6 py-4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    "data-aos": "fade-left",
    "data-aos-delay": "50"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(gatsby_plugin_image__WEBPACK_IMPORTED_MODULE_2__.StaticImage, {
    src: "../images/Icons2-min.svg",
    alt: "icon2",
    placeholder: "rgb(23 23 23)",
    __imageData: __webpack_require__(/*! ./.cache/caches/gatsby-plugin-image/3546507381.json */ "./.cache/caches/gatsby-plugin-image/3546507381.json")
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", {
    className: "font-bold py-3"
  }, "MODULE D'ACHAT EN LIGNE COMPLET"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "text-sm"
  }, "Incluant les accessoires, garanties, assurances et d\xE9pots")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
    className: "border-gray-700 border-solid border-l-2 px-6 py-4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    "data-aos": "fade-left",
    "data-aos-delay": "100"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(gatsby_plugin_image__WEBPACK_IMPORTED_MODULE_2__.StaticImage, {
    src: "../images/Icons3-min.svg",
    alt: "icon3",
    placeholder: "rgb(23 23 23)",
    __imageData: __webpack_require__(/*! ./.cache/caches/gatsby-plugin-image/201318390.json */ "./.cache/caches/gatsby-plugin-image/201318390.json")
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", {
    className: "font-bold py-3"
  }, "GESTIONNAIRE D'INVENTAIRE D'OCCASIONS"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "text-sm"
  }, "(Eval Auto) Incluant la syndication vers les plateformes les plus populaires (Kijiji, Cargurus, Otogo, AutoTraders, etc)")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
    className: "border-gray-700 border-solid border-l-2 px-6 py-4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    "data-aos": "fade-left",
    "data-aos-delay": "150"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(gatsby_plugin_image__WEBPACK_IMPORTED_MODULE_2__.StaticImage, {
    src: "../images/Icons4-min.svg",
    alt: "icon4",
    placeholder: "rgb(23 23 23)",
    __imageData: __webpack_require__(/*! ./.cache/caches/gatsby-plugin-image/187719252.json */ "./.cache/caches/gatsby-plugin-image/187719252.json")
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", {
    className: "font-bold py-3"
  }, "MODULE DE PUBLICATION AUTOMATISEE"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "text-sm"
  }, "Sur Facebook (Carrousel et Marketplace) et Google (Merchant center) pour v\xE9hicules d'occasion.")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
    className: "border-gray-700 border-solid border-l-2 px-6 py-4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    "data-aos": "fade-left",
    "data-aos-delay": "200"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(gatsby_plugin_image__WEBPACK_IMPORTED_MODULE_2__.StaticImage, {
    src: "../images/Icons5-min.svg",
    alt: "icon5",
    placeholder: "rgb(23 23 23)",
    __imageData: __webpack_require__(/*! ./.cache/caches/gatsby-plugin-image/230194665.json */ "./.cache/caches/gatsby-plugin-image/230194665.json")
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", {
    className: "font-bold py-3"
  }, "SITES WEB D'OCCASIONS"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "text-sm"
  }, "De style marketplace r\xE9unissant l'inventaire de plusieurs concessions dans un m\xEAme site. Strat\xE9gie incontournable pour les groupes automobiles."))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(gatsby__WEBPACK_IMPORTED_MODULE_1__.Link, {
    className: "mt-10 mx-auto",
    to: "/demo"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "border-[1px] px-4 py-3 border-white rounded-full font-bold text-white transition duration-300 ease-in-out hover:bg-white hover:text-black mr-6"
  }, "DEMANDER UNE D\xC9MO"))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Produits);

/***/ }),

/***/ "./src/components/Rapide.js":
/*!**********************************!*\
  !*** ./src/components/Rapide.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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
    className: "flex justify-center items-center h-full"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "flex flex-col justify-center items-center px-6 text-center lg:text-start lg:flex-row lg:justify-between"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", {
    className: "flex flex-col z-20 max-w-xl text-2xl font-bold md:text-5xl lg:text-6xl"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "text-lime-300"
  }, "DES APPLICATIONS WEB"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "bg-clip-text whitespace-nowrap text-transparent bg-gradient-to-r from-[#30F9FC] to-lime-300"
  }, "ULTRA RAPIDES")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "text-white font-bold pt-2 lg:max-w-md"
  }, "POUR DES CONCESSIONAIRES AUTOMOBILES DU QU\xC9BEC")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "hidden rounded-xl bg-gray-600 w-[1px] h-[21rem] mx-10 lg:block"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "text-white text-sm max-w-lg py-10"
  }, "A small team of people driven by performance and excellence. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(gatsby__WEBPACK_IMPORTED_MODULE_1__.Link, {
    className: "mt-10",
    to: "/demo"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: " border-[1px] px-4 py-3 border-white rounded-full font-bold text-white transition duration-300 ease-in-out hover:bg-white hover:text-black mr-6"
  }, "DEMANDER UNE D\xC9MO"))))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Rapide);

/***/ }),

/***/ "./src/components/Syndication.js":
/*!***************************************!*\
  !*** ./src/components/Syndication.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! gatsby */ "./.cache/gatsby-browser-entry.js");
/* harmony import */ var gatsby_plugin_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gatsby-plugin-image */ "./node_modules/gatsby-plugin-image/dist/gatsby-image.module.js");



const Syndication = () => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("section", {
    className: "bg-gradient-to-t from-[#30F9FC] to-lime-300"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "flex flex-col text-neutral-700 items-center max-w-7xl mx-auto"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "flex flex-col gap-10 items-center p-10 lg:flex-row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    "data-aos": "fade-up",
    "data-aos-duration": "1000"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(gatsby_plugin_image__WEBPACK_IMPORTED_MODULE_2__.StaticImage, {
    src: "../images/Mockup.webp",
    alt: "travail",
    placeholder: "blurred",
    __imageData: __webpack_require__(/*! ./.cache/caches/gatsby-plugin-image/885640978.json */ "./.cache/caches/gatsby-plugin-image/885640978.json")
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "flex flex-col gap-4  pl-10 py-6"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", {
    className: "flex flex-col"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "text-lg font-bold sm:text-2xl md:text-3xl lg:text-4xl"
  }, "INT\xC9GRATION"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "text-lg font-bold sm:text-2xl md:text-3xl lg:text-4xl"
  }, "SYNDICATION")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", {
    className: "list-disc ml-6"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "font-bold"
  }, "Facebook"), " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "(Carroussel et Marketplace)")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "font-bold"
  }, "Canadian Black Book"), " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), "(\xC9valuation de vehicule d'echange)"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "font-bold"
  }, "DealerCorp"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "(Gestionaire d'inventaire)"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "Vous voulez ajouter une Syndication? ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), "\xC9crivez-nous et nous l'ajouterons!"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(gatsby__WEBPACK_IMPORTED_MODULE_1__.Link, {
    className: "mt-10",
    to: "/"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "px-4 py-3 border-neutral-700 border-[1px] rounded-full font-bold text-neutral-700 transition duration-300 ease-in-out hover:bg-neutral-700 hover:text-white mr-6"
  }, "DEMANDER UNE D\xC9MO"))))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Syndication);

/***/ }),

/***/ "./src/components/layout.js":
/*!**********************************!*\
  !*** ./src/components/layout.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const Layout = ({
  children
}) => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("main", null, children));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Layout);

/***/ }),

/***/ "./src/components/seo.js":
/*!*******************************!*\
  !*** ./src/components/seo.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../components/Header */ "./src/components/Header.js");





















const IndexPage = () => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_layout__WEBPACK_IMPORTED_MODULE_14__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_Header__WEBPACK_IMPORTED_MODULE_20__["default"], {
    backgroundColor: "bg-lime-300"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_Hero__WEBPACK_IMPORTED_MODULE_11__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_Divider__WEBPACK_IMPORTED_MODULE_1__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_Rapide__WEBPACK_IMPORTED_MODULE_16__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_Produits__WEBPACK_IMPORTED_MODULE_15__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_Dividerleft__WEBPACK_IMPORTED_MODULE_2__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_Integration__WEBPACK_IMPORTED_MODULE_12__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_Dividerright__WEBPACK_IMPORTED_MODULE_5__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_Experience__WEBPACK_IMPORTED_MODULE_8__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_Dividerlefttwo__WEBPACK_IMPORTED_MODULE_4__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_Integre__WEBPACK_IMPORTED_MODULE_13__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_Dividerrighttwo__WEBPACK_IMPORTED_MODULE_7__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_Syndication__WEBPACK_IMPORTED_MODULE_18__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_Dividerrightthree__WEBPACK_IMPORTED_MODULE_6__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_Automatisation__WEBPACK_IMPORTED_MODULE_19__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_Dividerleftthree__WEBPACK_IMPORTED_MODULE_3__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_Contact__WEBPACK_IMPORTED_MODULE_9__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_Footer__WEBPACK_IMPORTED_MODULE_10__["default"], null));
};
const Head = () => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_seo__WEBPACK_IMPORTED_MODULE_17__["default"], {
  title: "Home"
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (IndexPage);

/***/ }),

/***/ "./src/images/Logo.svg":
/*!*****************************!*\
  !*** ./src/images/Logo.svg ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjI4IiBoZWlnaHQ9IjMxIiB2aWV3Qm94PSIwIDAgMjI4IDMxIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8ZyBjbGlwLXBhdGg9InVybCgjY2xpcDBfMjlfOTYpIj4KPHBhdGggZD0iTTU3LjQyOTggMTUuMTJDNTcuNDI5OCAxOS41MyA1NC4xMjk4IDIzLjEzIDQ5LjczOTggMjMuNDlINDkuMDU5OEM0NC40Mzk4IDIzLjQ5IDQwLjY4OTggMTkuNzMgNDAuNjg5OCAxNS4xMlYwSDM0LjAwOThWMTUuMTRDMzQuMDc5OCAxOS4xNCAzNS42Nzk4IDIyLjg5IDM4LjUwOTggMjUuNjlDNDEuMzM5OCAyOC40OSA0NS4wODk4IDMwLjA0IDQ5LjA2OTggMzAuMDRDNTMuMDQ5OCAzMC4wNCA1Ni44Mzk4IDI4LjUgNTkuNjc5OCAyNS42OUM2Mi41MTk4IDIyLjg5IDY0LjExOTggMTkuMTQgNjQuMTg5OCAxNS4xMlYwSDU3LjQzOThWMTUuMTJINTcuNDI5OFoiIGZpbGw9IndoaXRlIi8+CjxwYXRoIGQ9Ik02OC4xMzk4IDE1LjEyQzY4LjEzOTggMjMuNDIgNzQuODg5OCAzMC4xOCA4My4xOTk4IDMwLjE4SDg0LjM3OThWMjMuNUg4My4xOTk4Qzc4LjU3OTggMjMuNSA3NC44Mjk4IDE5Ljc0IDc0LjgyOTggMTUuMTNWNi44MTAwMUg4NC4zODk4VjAuMDcwMDA3M0g2OC4xNDk4VjE1LjEzTDY4LjEzOTggMTUuMTJaIiBmaWxsPSJ3aGl0ZSIvPgo8cGF0aCBkPSJNMTMzLjU2IDBDMTI1LjI2IDAgMTE4LjUgNi43OCAxMTguNSAxNS4xMlYzMC4xOEgxMjUuMThWMTUuMTJDMTI1LjE4IDEwLjUgMTI4Ljk0IDYuNzUgMTMzLjU1IDYuNzVIMTM0LjczVjBIMTMzLjU1SDEzMy41NloiIGZpbGw9IndoaXRlIi8+CjxwYXRoIGQ9Ik0xMDAuNzggMEM5Mi40Mzk4IDAgODUuNjU5OCA2Ljc4IDg1LjY1OTggMTUuMTJDODUuNjU5OCAyMy40NiA5Mi40Mzk4IDMwLjE4IDEwMC43OCAzMC4xOEMxMDkuMTIgMzAuMTggMTE1Ljg0IDIzLjQzIDExNS44NCAxNS4xMkMxMTUuODQgNi44MSAxMDkuMDggMCAxMDAuNzggMFpNMTAwLjc4IDIzLjVDOTYuMTI5OCAyMy41IDkyLjMzOTggMTkuNzQgOTIuMzM5OCAxNS4xM0M5Mi4zMzk4IDEwLjUyIDk2LjEyOTggNi43NiAxMDAuNzggNi43NkMxMDUuNDMgNi43NiAxMDkuMTUgMTAuNTIgMTA5LjE1IDE1LjEzQzEwOS4xNSAxOS43NCAxMDUuMzkgMjMuNSAxMDAuNzggMjMuNVoiIGZpbGw9IndoaXRlIi8+CjxwYXRoIGQ9Ik0xNTAuNDIgMEMxNDIuMDggMCAxMzUuMyA2Ljc4IDEzNS4zIDE1LjEyQzEzNS4zIDIzLjQ2IDE0Mi4wOCAzMC4xOCAxNTAuNDIgMzAuMThDMTU4Ljc2IDMwLjE4IDE2NS40OCAyMy40MyAxNjUuNDggMTUuMTJDMTY1LjQ4IDYuODEgMTU4LjczIDAgMTUwLjQyIDBaTTE1MC40MiAyMy41QzE0NS43NyAyMy41IDE0MS45OCAxOS43NCAxNDEuOTggMTUuMTNDMTQxLjk4IDEwLjUyIDE0NS43NyA2Ljc2IDE1MC40MiA2Ljc2QzE1NS4wNyA2Ljc2IDE1OC43OSAxMC41MiAxNTguNzkgMTUuMTNDMTU4Ljc5IDE5Ljc0IDE1NS4wMyAyMy41IDE1MC40MiAyMy41WiIgZmlsbD0id2hpdGUiLz4KPHBhdGggZD0iTTE4My4yNSAwQzE3NC45MSAwIDE2OC4xMyA2Ljc4IDE2OC4xMyAxNS4xMkMxNjguMTMgMjMuNDYgMTc0LjkxIDMwLjE4IDE4My4yNSAzMC4xOEMxOTEuNTkgMzAuMTggMTk4LjMxIDIzLjQzIDE5OC4zMSAxNS4xMkMxOTguMzEgNi44MSAxOTEuNTYgMCAxODMuMjUgMFpNMTgzLjI1IDIzLjVDMTc4LjYgMjMuNSAxNzQuODEgMTkuNzQgMTc0LjgxIDE1LjEzQzE3NC44MSAxMC41MiAxNzguNiA2Ljc2IDE4My4yNSA2Ljc2QzE4Ny45IDYuNzYgMTkxLjYyIDEwLjUyIDE5MS42MiAxNS4xM0MxOTEuNjIgMTkuNzQgMTg3Ljg2IDIzLjUgMTgzLjI1IDIzLjVaIiBmaWxsPSJ3aGl0ZSIvPgo8cGF0aCBkPSJNMjE3Ljk1IDYuODEwMDFWMC4wNzAwMDczSDIwMS43MVYxNS4xM0MyMDEuNzEgMjMuNDMgMjA4LjQ2IDMwLjE5IDIxNi43NyAzMC4xOUgyMTcuOTVWMjMuNTFIMjE2Ljc3QzIxMi4xNSAyMy41MSAyMDguNCAxOS43NSAyMDguNCAxNS4xNFY2LjgxMDAxSDIxNy45NkgyMTcuOTVaIiBmaWxsPSJ3aGl0ZSIvPgo8cGF0aCBkPSJNMjIwLjg4IDI3LjI0QzIyMC44OCAyNS4yMSAyMjIuMzcgMjMuOCAyMjQuMiAyMy44QzIyNi4wMyAyMy44IDIyNy41IDI1LjIxIDIyNy41IDI3LjI0QzIyNy41IDI5LjI3IDIyNi4wMSAzMC42OCAyMjQuMiAzMC42OEMyMjIuMzkgMzAuNjggMjIwLjg4IDI5LjI3IDIyMC44OCAyNy4yNFpNMjI2Ljc0IDI3LjI0QzIyNi43NCAyNS42MiAyMjUuNjUgMjQuNDggMjI0LjE5IDI0LjQ4QzIyMi43MyAyNC40OCAyMjEuNjMgMjUuNjEgMjIxLjYzIDI3LjI0QzIyMS42MyAyOC44NyAyMjIuNzMgMjkuOTggMjI0LjE5IDI5Ljk4QzIyNS42NSAyOS45OCAyMjYuNzQgMjguODggMjI2Ljc0IDI3LjI0VjI3LjI0Wk0yMjIuODkgMjUuNDZIMjI0LjI3QzIyNS4wMiAyNS40NiAyMjUuNjUgMjUuNzcgMjI1LjY1IDI2LjU5QzIyNS42NSAyNyAyMjUuNDEgMjcuMzkgMjI1IDI3LjU0TDIyNS43OCAyOC45NUgyMjQuOTJMMjI0LjM0IDI3Ljc4SDIyMy42OFYyOC45NUgyMjIuODlWMjUuNDZWMjUuNDZaTTIyNC4xIDI3LjE5QzIyNC41NCAyNy4xOSAyMjQuNzkgMjYuOTggMjI0Ljc5IDI2LjYzQzIyNC43OSAyNi4zMiAyMjQuNiAyNi4wOSAyMjQuMTMgMjYuMDlIMjIzLjY4VjI3LjE5SDIyNC4xVjI3LjE5WiIgZmlsbD0id2hpdGUiLz4KPHBhdGggZD0iTTU3LjQyOTggMTUuMTJDNTcuNDI5OCAxOS41MyA1NC4xMjk4IDIzLjEzIDQ5LjczOTggMjMuNDlINDkuMDU5OEM0NC40Mzk4IDIzLjQ5IDQwLjY4OTggMTkuNzMgNDAuNjg5OCAxNS4xMlYwSDM0LjAwOThWMTUuMTRDMzQuMDc5OCAxOS4xNCAzNS42Nzk4IDIyLjg5IDM4LjUwOTggMjUuNjlDNDEuMzM5OCAyOC40OSA0NS4wODk4IDMwLjA0IDQ5LjA2OTggMzAuMDRDNTMuMDQ5OCAzMC4wNCA1Ni44Mzk4IDI4LjUgNTkuNjc5OCAyNS42OUM2Mi41MTk4IDIyLjg5IDY0LjExOTggMTkuMTQgNjQuMTg5OCAxNS4xMlYwSDU3LjQzOThWMTUuMTJINTcuNDI5OFoiIGZpbGw9IndoaXRlIi8+CjxwYXRoIGQ9Ik02OC4xMzk4IDE1LjEyQzY4LjEzOTggMjMuNDIgNzQuODg5OCAzMC4xOCA4My4xOTk4IDMwLjE4SDg0LjM3OThWMjMuNUg4My4xOTk4Qzc4LjU3OTggMjMuNSA3NC44Mjk4IDE5Ljc0IDc0LjgyOTggMTUuMTNWNi44MTAwMUg4NC4zODk4VjAuMDcwMDA3M0g2OC4xNDk4VjE1LjEzTDY4LjEzOTggMTUuMTJaIiBmaWxsPSJ3aGl0ZSIvPgo8cGF0aCBkPSJNMTMzLjU2IDBDMTI1LjI2IDAgMTE4LjUgNi43OCAxMTguNSAxNS4xMlYzMC4xOEgxMjUuMThWMTUuMTJDMTI1LjE4IDEwLjUgMTI4Ljk0IDYuNzUgMTMzLjU1IDYuNzVIMTM0LjczVjBIMTMzLjU1SDEzMy41NloiIGZpbGw9IndoaXRlIi8+CjxwYXRoIGQ9Ik0xMDAuNzggMEM5Mi40Mzk4IDAgODUuNjU5OCA2Ljc4IDg1LjY1OTggMTUuMTJDODUuNjU5OCAyMy40NiA5Mi40Mzk4IDMwLjE4IDEwMC43OCAzMC4xOEMxMDkuMTIgMzAuMTggMTE1Ljg0IDIzLjQzIDExNS44NCAxNS4xMkMxMTUuODQgNi44MSAxMDkuMDggMCAxMDAuNzggMFpNMTAwLjc4IDIzLjVDOTYuMTI5OCAyMy41IDkyLjMzOTggMTkuNzQgOTIuMzM5OCAxNS4xM0M5Mi4zMzk4IDEwLjUyIDk2LjEyOTggNi43NiAxMDAuNzggNi43NkMxMDUuNDMgNi43NiAxMDkuMTUgMTAuNTIgMTA5LjE1IDE1LjEzQzEwOS4xNSAxOS43NCAxMDUuMzkgMjMuNSAxMDAuNzggMjMuNVoiIGZpbGw9IndoaXRlIi8+CjxwYXRoIGQ9Ik0xNTAuNDIgMEMxNDIuMDggMCAxMzUuMyA2Ljc4IDEzNS4zIDE1LjEyQzEzNS4zIDIzLjQ2IDE0Mi4wOCAzMC4xOCAxNTAuNDIgMzAuMThDMTU4Ljc2IDMwLjE4IDE2NS40OCAyMy40MyAxNjUuNDggMTUuMTJDMTY1LjQ4IDYuODEgMTU4LjczIDAgMTUwLjQyIDBaTTE1MC40MiAyMy41QzE0NS43NyAyMy41IDE0MS45OCAxOS43NCAxNDEuOTggMTUuMTNDMTQxLjk4IDEwLjUyIDE0NS43NyA2Ljc2IDE1MC40MiA2Ljc2QzE1NS4wNyA2Ljc2IDE1OC43OSAxMC41MiAxNTguNzkgMTUuMTNDMTU4Ljc5IDE5Ljc0IDE1NS4wMyAyMy41IDE1MC40MiAyMy41WiIgZmlsbD0id2hpdGUiLz4KPHBhdGggZD0iTTE4My4yNSAwQzE3NC45MSAwIDE2OC4xMyA2Ljc4IDE2OC4xMyAxNS4xMkMxNjguMTMgMjMuNDYgMTc0LjkxIDMwLjE4IDE4My4yNSAzMC4xOEMxOTEuNTkgMzAuMTggMTk4LjMxIDIzLjQzIDE5OC4zMSAxNS4xMkMxOTguMzEgNi44MSAxOTEuNTYgMCAxODMuMjUgMFpNMTgzLjI1IDIzLjVDMTc4LjYgMjMuNSAxNzQuODEgMTkuNzQgMTc0LjgxIDE1LjEzQzE3NC44MSAxMC41MiAxNzguNiA2Ljc2IDE4My4yNSA2Ljc2QzE4Ny45IDYuNzYgMTkxLjYyIDEwLjUyIDE5MS42MiAxNS4xM0MxOTEuNjIgMTkuNzQgMTg3Ljg2IDIzLjUgMTgzLjI1IDIzLjVaIiBmaWxsPSJ3aGl0ZSIvPgo8cGF0aCBkPSJNMjE3Ljk1IDYuODEwMDFWMC4wNzAwMDczSDIwMS43MVYxNS4xM0MyMDEuNzEgMjMuNDMgMjA4LjQ2IDMwLjE5IDIxNi43NyAzMC4xOUgyMTcuOTVWMjMuNTFIMjE2Ljc3QzIxMi4xNSAyMy41MSAyMDguNCAxOS43NSAyMDguNCAxNS4xNFY2LjgxMDAxSDIxNy45NkgyMTcuOTVaIiBmaWxsPSJ3aGl0ZSIvPgo8cGF0aCBkPSJNMjIwLjg4IDI3LjI0QzIyMC44OCAyNS4yMSAyMjIuMzcgMjMuOCAyMjQuMiAyMy44QzIyNi4wMyAyMy44IDIyNy41IDI1LjIxIDIyNy41IDI3LjI0QzIyNy41IDI5LjI3IDIyNi4wMSAzMC42OCAyMjQuMiAzMC42OEMyMjIuMzkgMzAuNjggMjIwLjg4IDI5LjI3IDIyMC44OCAyNy4yNFpNMjI2Ljc0IDI3LjI0QzIyNi43NCAyNS42MiAyMjUuNjUgMjQuNDggMjI0LjE5IDI0LjQ4QzIyMi43MyAyNC40OCAyMjEuNjMgMjUuNjEgMjIxLjYzIDI3LjI0QzIyMS42MyAyOC44NyAyMjIuNzMgMjkuOTggMjI0LjE5IDI5Ljk4QzIyNS42NSAyOS45OCAyMjYuNzQgMjguODggMjI2Ljc0IDI3LjI0VjI3LjI0Wk0yMjIuODkgMjUuNDZIMjI0LjI3QzIyNS4wMiAyNS40NiAyMjUuNjUgMjUuNzcgMjI1LjY1IDI2LjU5QzIyNS42NSAyNyAyMjUuNDEgMjcuMzkgMjI1IDI3LjU0TDIyNS43OCAyOC45NUgyMjQuOTJMMjI0LjM0IDI3Ljc4SDIyMy42OFYyOC45NUgyMjIuODlWMjUuNDZWMjUuNDZaTTIyNC4xIDI3LjE5QzIyNC41NCAyNy4xOSAyMjQuNzkgMjYuOTggMjI0Ljc5IDI2LjYzQzIyNC43OSAyNi4zMiAyMjQuNiAyNi4wOSAyMjQuMTMgMjYuMDlIMjIzLjY4VjI3LjE5SDIyNC4xVjI3LjE5WiIgZmlsbD0id2hpdGUiLz4KPHBhdGggb3BhY2l0eT0iMC41IiBkPSJNMjMuNDk5OCAxNS4xMlYyNy42MkMyMi45Mzk4IDI4IDIyLjM0OTggMjguMzQgMjEuNzM5OCAyOC42NEwyMy4yMjk4IDE3LjI0QzIzLjI2OTggMTcuMSAyMy4yOTk4IDE2Ljk1IDIzLjMzOTggMTYuOEMyMy40MDk4IDE2LjQzIDIzLjQ2OTggMTYuMDcgMjMuNDg5OCAxNS42OUMyMy40OTk4IDE1LjUgMjMuNTA5OCAxNS4zIDIzLjUwOTggMTUuMTFMMjMuNDk5OCAxNS4xMloiIGZpbGw9IndoaXRlIi8+CjxwYXRoIGQ9Ik0zMC4xNzk4IDE1LjEyVjMwLjE4SDIzLjQ5OThWMTUuMTJDMjMuNDk5OCAxMC41MSAxOS43Mzk4IDYuNzUgMTUuMTE5OCA2Ljc1QzEwLjQ5OTggNi43NSA2LjY3OTc2IDEwLjUxIDYuNjc5NzYgMTUuMTJDNi42Nzk3NiAxOS43MyAxMC40Njk4IDIzLjUgMTUuMTE5OCAyMy41QzE4Ljk5OTggMjMuNSAyMi4yNjk4IDIwLjg0IDIzLjIxOTggMTcuMjVMMjEuNzI5OCAyOC42NUMxOS43Mjk4IDI5LjYzIDE3LjQ4OTggMzAuMTggMTUuMTE5OCAzMC4xOEM2Ljc4OTc2IDMwLjE4IC0wLjAwMDI0NDE0MSAyMy40MyAtMC4wMDAyNDQxNDEgMTUuMTJDLTAuMDAwMjQ0MTQxIDYuODEgNi43ODk3NiAwIDE1LjExOTggMEMyMy40NDk4IDAgMzAuMTc5OCA2Ljc4IDMwLjE3OTggMTUuMTJaIiBmaWxsPSJ3aGl0ZSIvPgo8L2c+CjxkZWZzPgo8Y2xpcFBhdGggaWQ9ImNsaXAwXzI5Xzk2Ij4KPHJlY3Qgd2lkdGg9IjIyNy41IiBoZWlnaHQ9IjMwLjY4IiBmaWxsPSJ3aGl0ZSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTAuMDAwMjQ0MTQxKSIvPgo8L2NsaXBQYXRoPgo8L2RlZnM+Cjwvc3ZnPgo=");

/***/ }),

/***/ "./src/images/Vector.svg":
/*!*******************************!*\
  !*** ./src/images/Vector.svg ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzEiIGhlaWdodD0iMzEiIHZpZXdCb3g9IjAgMCAzMSAzMSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTMwLjE3OTkgMTUuMTJWMzAuMThIMjMuNDk5OVYxNS4xMkMyMy40OTk5IDEwLjUxIDE5LjczOTkgNi43NSAxNS4xMTk5IDYuNzVDMTAuNDk5OSA2Ljc1IDYuNjc5ODggMTAuNTEgNi42Nzk4OCAxNS4xMkM2LjY3OTg4IDE5LjczIDEwLjQ2OTkgMjMuNSAxNS4xMTk5IDIzLjVDMTguOTk5OSAyMy41IDIyLjI2OTkgMjAuODQgMjMuMjE5OSAxNy4yNUwyMS43Mjk5IDI4LjY1QzE5LjcyOTkgMjkuNjMgMTcuNDg5OSAzMC4xOCAxNS4xMTk5IDMwLjE4QzYuNzg5ODggMzAuMTggLTAuMDAwMTIyMDcgMjMuNDMgLTAuMDAwMTIyMDcgMTUuMTJDLTAuMDAwMTIyMDcgNi44MSA2Ljc4OTg4IDAgMTUuMTE5OSAwQzIzLjQ0OTkgMCAzMC4xNzk5IDYuNzggMzAuMTc5OSAxNS4xMloiIGZpbGw9IiMzRjNGM0YiLz4KPC9zdmc+Cg==");

/***/ }),

/***/ "./src/images/Vector1b.svg":
/*!*********************************!*\
  !*** ./src/images/Vector1b.svg ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzEiIGhlaWdodD0iMzEiIHZpZXdCb3g9IjAgMCAzMSAzMSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTIzLjQyOTkgMTUuMTJDMjMuNDI5OSAxOS41MyAyMC4xMjk5IDIzLjEzIDE1LjczOTkgMjMuNDlIMTUuMDU5OUMxMC40Mzk5IDIzLjQ5IDYuNjg5ODkgMTkuNzMgNi42ODk4OSAxNS4xMlYwSDAuMDA5ODg3N1YxNS4xNEMwLjA3OTg4NzcgMTkuMTQgMS42Nzk4OSAyMi44OSA0LjUwOTg5IDI1LjY5QzcuMzM5ODkgMjguNDkgMTEuMDg5OSAzMC4wNCAxNS4wNjk5IDMwLjA0QzE5LjA0OTkgMzAuMDQgMjIuODM5OSAyOC41IDI1LjY3OTkgMjUuNjlDMjguNTE5OSAyMi44OSAzMC4xMTk5IDE5LjE0IDMwLjE4OTkgMTUuMTJWMEgyMy40Mzk5VjE1LjEySDIzLjQyOTlaIiBmaWxsPSIjM0YzRjNGIi8+Cjwvc3ZnPgo=");

/***/ }),

/***/ "./src/images/Vector2b.svg":
/*!*********************************!*\
  !*** ./src/images/Vector2b.svg ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTciIGhlaWdodD0iMzEiIHZpZXdCb3g9IjAgMCAxNyAzMSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTAuMTM5ODkzIDE1LjEyQzAuMTM5ODkzIDIzLjQyIDYuODg5ODkgMzAuMTggMTUuMTk5OSAzMC4xOEgxNi4zNzk5VjIzLjVIMTUuMTk5OUMxMC41Nzk5IDIzLjUgNi44Mjk5IDE5Ljc0IDYuODI5OSAxNS4xM1Y2LjgxMDAxSDE2LjM4OTlWMC4wNzAwMDczSDAuMTQ5ODk1VjE1LjEzTDAuMTM5ODkzIDE1LjEyWiIgZmlsbD0iIzNGM0YzRiIvPgo8L3N2Zz4K");

/***/ }),

/***/ "./src/images/Vector3b.svg":
/*!*********************************!*\
  !*** ./src/images/Vector3b.svg ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzEiIGhlaWdodD0iMzEiIHZpZXdCb3g9IjAgMCAzMSAzMSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTE1Ljc3OTkgMEM3LjQzOTkxIDAgMC42NTk5MTIgNi43OCAwLjY1OTkxMiAxNS4xMkMwLjY1OTkxMiAyMy40NiA3LjQzOTkxIDMwLjE4IDE1Ljc3OTkgMzAuMThDMjQuMTE5OSAzMC4xOCAzMC44Mzk5IDIzLjQzIDMwLjgzOTkgMTUuMTJDMzAuODM5OSA2LjgxIDI0LjA3OTkgMCAxNS43Nzk5IDBaTTE1Ljc3OTkgMjMuNUMxMS4xMjk5IDIzLjUgNy4zMzk5IDE5Ljc0IDcuMzM5OSAxNS4xM0M3LjMzOTkgMTAuNTIgMTEuMTI5OSA2Ljc2IDE1Ljc3OTkgNi43NkMyMC40Mjk5IDYuNzYgMjQuMTQ5OSAxMC41MiAyNC4xNDk5IDE1LjEzQzI0LjE0OTkgMTkuNzQgMjAuMzg5OSAyMy41IDE1Ljc3OTkgMjMuNVoiIGZpbGw9IiMzRjNGM0YiLz4KPC9zdmc+Cg==");

/***/ }),

/***/ "./src/images/Vector4.svg":
/*!********************************!*\
  !*** ./src/images/Vector4.svg ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTciIGhlaWdodD0iMzEiIHZpZXdCb3g9IjAgMCAxNyAzMSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTE1LjU1OTkgMEM3LjI1OTg4IDAgMC40OTk4NzggNi43OCAwLjQ5OTg3OCAxNS4xMlYzMC4xOEg3LjE3OTg4VjE1LjEyQzcuMTc5ODggMTAuNSAxMC45Mzk5IDYuNzUgMTUuNTQ5OSA2Ljc1SDE2LjcyOTlWMEgxNS41NDk5SDE1LjU1OTlaIiBmaWxsPSIjM0YzRjNGIi8+Cjwvc3ZnPgo=");

/***/ }),

/***/ "./src/images/Vector6b.svg":
/*!*********************************!*\
  !*** ./src/images/Vector6b.svg ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iOCIgaGVpZ2h0PSI4IiB2aWV3Qm94PSIwIDAgOCA4IiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8cGF0aCBkPSJNMC44Nzk4ODMgNC4yMzk5OUMwLjg3OTg4MyAyLjIwOTk5IDIuMzY5ODcgMC43OTk5ODggNC4xOTk4NyAwLjc5OTk4OEM2LjAyOTg3IDAuNzk5OTg4IDcuNDk5ODggMi4yMDk5OSA3LjQ5OTg4IDQuMjM5OTlDNy40OTk4OCA2LjI2OTk5IDYuMDA5ODcgNy42Nzk5OSA0LjE5OTg3IDcuNjc5OTlDMi4zODk4NyA3LjY3OTk5IDAuODc5ODgzIDYuMjY5OTkgMC44Nzk4ODMgNC4yMzk5OVpNNi43Mzk4OCA0LjIzOTk5QzYuNzM5ODggMi42MTk5OSA1LjY0OTg4IDEuNDc5OTkgNC4xODk4OCAxLjQ3OTk5QzIuNzI5ODggMS40Nzk5OSAxLjYyOTg4IDIuNjA5OTkgMS42Mjk4OCA0LjIzOTk5QzEuNjI5ODggNS44Njk5OSAyLjcyOTg4IDYuOTc5OTkgNC4xODk4OCA2Ljk3OTk5QzUuNjQ5ODggNi45Nzk5OSA2LjczOTg4IDUuODc5OTkgNi43Mzk4OCA0LjIzOTk5Wk0yLjg4OTg4IDIuNDU5OTlINC4yNjk4OEM1LjAxOTg4IDIuNDU5OTkgNS42NDk4NyAyLjc2OTk5IDUuNjQ5ODcgMy41ODk5OUM1LjY0OTg3IDMuOTk5OTkgNS40MDk4OCA0LjM4OTk5IDQuOTk5ODggNC41Mzk5OUw1Ljc3OTg4IDUuOTQ5OTlINC45MTk4OEw0LjMzOTg3IDQuNzc5OTlIMy42Nzk4N1Y1Ljk0OTk5SDIuODg5ODhWMi40NTk5OVpNNC4wOTk4OCA0LjE4OTk5QzQuNTM5ODggNC4xODk5OSA0Ljc4OTg3IDMuOTc5OTkgNC43ODk4NyAzLjYyOTk5QzQuNzg5ODcgMy4zMTk5OSA0LjU5OTg4IDMuMDg5OTkgNC4xMjk4OCAzLjA4OTk5SDMuNjc5ODdWNC4xODk5OUg0LjA5OTg4WiIgZmlsbD0iIzNGM0YzRiIvPgo8L3N2Zz4K");

/***/ }),

/***/ "./src/images/menu.svg":
/*!*****************************!*\
  !*** ./src/images/menu.svg ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgNTEyIDUxMiIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMjsiIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPGc+DQoJPGc+DQoJCTxwYXRoIGZpbGw9InJnYig2NCA2NCA2NCkiIGQ9Ik00OTIsMjM2SDIwYy0xMS4wNDYsMC0yMCw4Ljk1NC0yMCwyMGMwLDExLjA0Niw4Ljk1NCwyMCwyMCwyMGg0NzJjMTEuMDQ2LDAsMjAtOC45NTQsMjAtMjBTNTAzLjA0NiwyMzYsNDkyLDIzNnoiLz4NCgk8L2c+DQo8L2c+DQo8Zz4NCgk8Zz4NCgkJPHBhdGggZmlsbD0icmdiKDY0IDY0IDY0KSIgZD0iTTQ5Miw3NkgyMEM4Ljk1NCw3NiwwLDg0Ljk1NCwwLDk2czguOTU0LDIwLDIwLDIwaDQ3MmMxMS4wNDYsMCwyMC04Ljk1NCwyMC0yMFM1MDMuMDQ2LDc2LDQ5Miw3NnoiLz4NCgk8L2c+DQo8L2c+DQo8Zz4NCgk8Zz4NCgkJPHBhdGggZmlsbD0icmdiKDY0IDY0IDY0KSIgZD0iTTQ5MiwzOTZIMjBjLTExLjA0NiwwLTIwLDguOTU0LTIwLDIwYzAsMTEuMDQ2LDguOTU0LDIwLDIwLDIwaDQ3MmMxMS4wNDYsMCwyMC04Ljk1NCwyMC0yMA0KCQkJQzUxMiw0MDQuOTU0LDUwMy4wNDYsMzk2LDQ5MiwzOTZ6Ii8+DQoJPC9nPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPC9zdmc+DQo=");

/***/ }),

/***/ "./.cache/caches/gatsby-plugin-image/1163227408.json":
/*!***********************************************************!*\
  !*** ./.cache/caches/gatsby-plugin-image/1163227408.json ***!
  \***********************************************************/
/***/ ((module) => {

module.exports = JSON.parse('{"layout":"constrained","placeholder":{"fallback":"data:image/webp;base64,UklGRpwAAABXRUJQVlA4WAoAAAAQAAAAEwAADgAAQUxQSDwAAAABZ6AgbQMWtjsREdi5+5iAQSNJiuYYNPCzvJf2Et7bsYOI/k8AgJcBH6a7jrNj6d9RNRWOtuxoJ9sqnwZWUDggOgAAALACAJ0BKhQADwA+0VqkTCglI6IwCAEAGglpAAB7IAD+7eX+7dy/qnEkxtmULgC75/j/zhLYZ1Z0AAA="},"images":{"fallback":{"src":"/static/5217fff88e54abd5ae169a90e5c2e9c5/027f9/stars.webp","srcSet":"/static/5217fff88e54abd5ae169a90e5c2e9c5/91034/stars.webp 185w,\\n/static/5217fff88e54abd5ae169a90e5c2e9c5/5e843/stars.webp 370w,\\n/static/5217fff88e54abd5ae169a90e5c2e9c5/027f9/stars.webp 740w","sizes":"(min-width: 740px) 740px, 100vw"},"sources":[]},"width":740,"height":554}');

/***/ }),

/***/ "./.cache/caches/gatsby-plugin-image/1356714465.json":
/*!***********************************************************!*\
  !*** ./.cache/caches/gatsby-plugin-image/1356714465.json ***!
  \***********************************************************/
/***/ ((module) => {

module.exports = JSON.parse('{"layout":"constrained","images":{"fallback":{"src":"/static/71984a32ad65b4562e144de236f4472a/b62fd/auto.webp","srcSet":"/static/71984a32ad65b4562e144de236f4472a/fc4df/auto.webp 151w,\\n/static/71984a32ad65b4562e144de236f4472a/32234/auto.webp 301w,\\n/static/71984a32ad65b4562e144de236f4472a/b62fd/auto.webp 602w","sizes":"(min-width: 602px) 602px, 100vw"},"sources":[]},"width":602,"height":656}');

/***/ }),

/***/ "./.cache/caches/gatsby-plugin-image/1388991188.json":
/*!***********************************************************!*\
  !*** ./.cache/caches/gatsby-plugin-image/1388991188.json ***!
  \***********************************************************/
/***/ ((module) => {

module.exports = JSON.parse('{"layout":"constrained","images":{"fallback":{"src":"/static/a1eedd49f6ffdb56906d1cbafef1f2a5/a27be/Images-min.svg","srcSet":"/static/a1eedd49f6ffdb56906d1cbafef1f2a5/48a86/Images-min.svg 214w,\\n/static/a1eedd49f6ffdb56906d1cbafef1f2a5/7c210/Images-min.svg 428w,\\n/static/a1eedd49f6ffdb56906d1cbafef1f2a5/a27be/Images-min.svg 856w","sizes":"(min-width: 856px) 856px, 100vw"},"sources":[{"srcSet":"/static/a1eedd49f6ffdb56906d1cbafef1f2a5/951f5/Images-min.webp 214w,\\n/static/a1eedd49f6ffdb56906d1cbafef1f2a5/dda13/Images-min.webp 428w,\\n/static/a1eedd49f6ffdb56906d1cbafef1f2a5/2e7f4/Images-min.webp 856w","type":"image/webp","sizes":"(min-width: 856px) 856px, 100vw"}]},"width":856,"height":781}');

/***/ }),

/***/ "./.cache/caches/gatsby-plugin-image/14817578.json":
/*!*********************************************************!*\
  !*** ./.cache/caches/gatsby-plugin-image/14817578.json ***!
  \*********************************************************/
/***/ ((module) => {

module.exports = JSON.parse('{"layout":"constrained","images":{"fallback":{"src":"/static/b4cfbba0d3bcbeb6c8d6b843c535b0b1/7f8cd/Icons-min.svg","srcSet":"/static/b4cfbba0d3bcbeb6c8d6b843c535b0b1/51544/Icons-min.svg 37w,\\n/static/b4cfbba0d3bcbeb6c8d6b843c535b0b1/08987/Icons-min.svg 74w,\\n/static/b4cfbba0d3bcbeb6c8d6b843c535b0b1/7f8cd/Icons-min.svg 148w","sizes":"(min-width: 148px) 148px, 100vw"},"sources":[{"srcSet":"/static/b4cfbba0d3bcbeb6c8d6b843c535b0b1/7e23d/Icons-min.webp 37w,\\n/static/b4cfbba0d3bcbeb6c8d6b843c535b0b1/e1943/Icons-min.webp 74w,\\n/static/b4cfbba0d3bcbeb6c8d6b843c535b0b1/4c54c/Icons-min.webp 148w","type":"image/webp","sizes":"(min-width: 148px) 148px, 100vw"}]},"width":148,"height":148}');

/***/ }),

/***/ "./.cache/caches/gatsby-plugin-image/1513207106.json":
/*!***********************************************************!*\
  !*** ./.cache/caches/gatsby-plugin-image/1513207106.json ***!
  \***********************************************************/
/***/ ((module) => {

module.exports = JSON.parse('{"layout":"constrained","images":{"fallback":{"src":"/static/ece95a6121d5c094fa280a4019e76327/4ae50/Images4-min.svg","srcSet":"/static/ece95a6121d5c094fa280a4019e76327/03b70/Images4-min.svg 112w,\\n/static/ece95a6121d5c094fa280a4019e76327/e7094/Images4-min.svg 224w,\\n/static/ece95a6121d5c094fa280a4019e76327/4ae50/Images4-min.svg 447w","sizes":"(min-width: 447px) 447px, 100vw"},"sources":[{"srcSet":"/static/ece95a6121d5c094fa280a4019e76327/ac2b7/Images4-min.webp 112w,\\n/static/ece95a6121d5c094fa280a4019e76327/6c40a/Images4-min.webp 224w,\\n/static/ece95a6121d5c094fa280a4019e76327/72834/Images4-min.webp 447w","type":"image/webp","sizes":"(min-width: 447px) 447px, 100vw"}]},"width":447,"height":636}');

/***/ }),

/***/ "./.cache/caches/gatsby-plugin-image/187719252.json":
/*!**********************************************************!*\
  !*** ./.cache/caches/gatsby-plugin-image/187719252.json ***!
  \**********************************************************/
/***/ ((module) => {

module.exports = JSON.parse('{"layout":"constrained","images":{"fallback":{"src":"/static/b9b8d9fe89422c8e4dd9b0cdf721f3e8/7f8cd/Icons4-min.svg","srcSet":"/static/b9b8d9fe89422c8e4dd9b0cdf721f3e8/51544/Icons4-min.svg 37w,\\n/static/b9b8d9fe89422c8e4dd9b0cdf721f3e8/08987/Icons4-min.svg 74w,\\n/static/b9b8d9fe89422c8e4dd9b0cdf721f3e8/7f8cd/Icons4-min.svg 148w","sizes":"(min-width: 148px) 148px, 100vw"},"sources":[{"srcSet":"/static/b9b8d9fe89422c8e4dd9b0cdf721f3e8/7e23d/Icons4-min.webp 37w,\\n/static/b9b8d9fe89422c8e4dd9b0cdf721f3e8/e1943/Icons4-min.webp 74w,\\n/static/b9b8d9fe89422c8e4dd9b0cdf721f3e8/4c54c/Icons4-min.webp 148w","type":"image/webp","sizes":"(min-width: 148px) 148px, 100vw"}]},"width":148,"height":148}');

/***/ }),

/***/ "./.cache/caches/gatsby-plugin-image/201318390.json":
/*!**********************************************************!*\
  !*** ./.cache/caches/gatsby-plugin-image/201318390.json ***!
  \**********************************************************/
/***/ ((module) => {

module.exports = JSON.parse('{"layout":"constrained","images":{"fallback":{"src":"/static/ae442ead174df1e063d260176cf091f0/7f8cd/Icons3-min.svg","srcSet":"/static/ae442ead174df1e063d260176cf091f0/51544/Icons3-min.svg 37w,\\n/static/ae442ead174df1e063d260176cf091f0/08987/Icons3-min.svg 74w,\\n/static/ae442ead174df1e063d260176cf091f0/7f8cd/Icons3-min.svg 148w","sizes":"(min-width: 148px) 148px, 100vw"},"sources":[{"srcSet":"/static/ae442ead174df1e063d260176cf091f0/7e23d/Icons3-min.webp 37w,\\n/static/ae442ead174df1e063d260176cf091f0/e1943/Icons3-min.webp 74w,\\n/static/ae442ead174df1e063d260176cf091f0/4c54c/Icons3-min.webp 148w","type":"image/webp","sizes":"(min-width: 148px) 148px, 100vw"}]},"width":148,"height":148}');

/***/ }),

/***/ "./.cache/caches/gatsby-plugin-image/230194665.json":
/*!**********************************************************!*\
  !*** ./.cache/caches/gatsby-plugin-image/230194665.json ***!
  \**********************************************************/
/***/ ((module) => {

module.exports = JSON.parse('{"layout":"constrained","images":{"fallback":{"src":"/static/bc79a7ca291dbe57bfb04f57315f2e9e/7f8cd/Icons5-min.svg","srcSet":"/static/bc79a7ca291dbe57bfb04f57315f2e9e/51544/Icons5-min.svg 37w,\\n/static/bc79a7ca291dbe57bfb04f57315f2e9e/08987/Icons5-min.svg 74w,\\n/static/bc79a7ca291dbe57bfb04f57315f2e9e/7f8cd/Icons5-min.svg 148w","sizes":"(min-width: 148px) 148px, 100vw"},"sources":[{"srcSet":"/static/bc79a7ca291dbe57bfb04f57315f2e9e/7e23d/Icons5-min.webp 37w,\\n/static/bc79a7ca291dbe57bfb04f57315f2e9e/e1943/Icons5-min.webp 74w,\\n/static/bc79a7ca291dbe57bfb04f57315f2e9e/4c54c/Icons5-min.webp 148w","type":"image/webp","sizes":"(min-width: 148px) 148px, 100vw"}]},"width":148,"height":148}');

/***/ }),

/***/ "./.cache/caches/gatsby-plugin-image/2318581405.json":
/*!***********************************************************!*\
  !*** ./.cache/caches/gatsby-plugin-image/2318581405.json ***!
  \***********************************************************/
/***/ ((module) => {

module.exports = JSON.parse('{"layout":"constrained","images":{"fallback":{"src":"/static/13a9a6a8b2a89773fb6f281cca938256/85740/bureau.webp","srcSet":"/static/13a9a6a8b2a89773fb6f281cca938256/b1fc4/bureau.webp 145w,\\n/static/13a9a6a8b2a89773fb6f281cca938256/db8a2/bureau.webp 290w,\\n/static/13a9a6a8b2a89773fb6f281cca938256/85740/bureau.webp 580w","sizes":"(min-width: 580px) 580px, 100vw"},"sources":[]},"width":580,"height":630}');

/***/ }),

/***/ "./.cache/caches/gatsby-plugin-image/2874707961.json":
/*!***********************************************************!*\
  !*** ./.cache/caches/gatsby-plugin-image/2874707961.json ***!
  \***********************************************************/
/***/ ((module) => {

module.exports = JSON.parse('{"layout":"constrained","images":{"fallback":{"src":"/static/a80bf1c4ac5e0fb37b4209fb873cee95/6deb1/Logo2.webp","srcSet":"/static/a80bf1c4ac5e0fb37b4209fb873cee95/b5c68/Logo2.webp 284w,\\n/static/a80bf1c4ac5e0fb37b4209fb873cee95/5766a/Logo2.webp 569w,\\n/static/a80bf1c4ac5e0fb37b4209fb873cee95/6deb1/Logo2.webp 1137w","sizes":"(min-width: 1137px) 1137px, 100vw"},"sources":[]},"width":1137,"height":60}');

/***/ }),

/***/ "./.cache/caches/gatsby-plugin-image/3042297799.json":
/*!***********************************************************!*\
  !*** ./.cache/caches/gatsby-plugin-image/3042297799.json ***!
  \***********************************************************/
/***/ ((module) => {

module.exports = JSON.parse('{"layout":"constrained","images":{"fallback":{"src":"/static/ac88c706cd0c363b999e449c205f2fb9/b58f4/Images3-min.svg","srcSet":"/static/ac88c706cd0c363b999e449c205f2fb9/b2762/Images3-min.svg 165w,\\n/static/ac88c706cd0c363b999e449c205f2fb9/eb336/Images3-min.svg 331w,\\n/static/ac88c706cd0c363b999e449c205f2fb9/b58f4/Images3-min.svg 661w","sizes":"(min-width: 661px) 661px, 100vw"},"sources":[{"srcSet":"/static/ac88c706cd0c363b999e449c205f2fb9/bddb3/Images3-min.webp 165w,\\n/static/ac88c706cd0c363b999e449c205f2fb9/3879a/Images3-min.webp 331w,\\n/static/ac88c706cd0c363b999e449c205f2fb9/facfd/Images3-min.webp 661w","type":"image/webp","sizes":"(min-width: 661px) 661px, 100vw"}]},"width":661,"height":551}');

/***/ }),

/***/ "./.cache/caches/gatsby-plugin-image/3512290765.json":
/*!***********************************************************!*\
  !*** ./.cache/caches/gatsby-plugin-image/3512290765.json ***!
  \***********************************************************/
/***/ ((module) => {

module.exports = JSON.parse('{"layout":"constrained","images":{"fallback":{"src":"/static/212d51d960e98f74eabfe70511a41e2d/38205/Images1-min.svg","srcSet":"/static/212d51d960e98f74eabfe70511a41e2d/d8439/Images1-min.svg 135w,\\n/static/212d51d960e98f74eabfe70511a41e2d/fb93f/Images1-min.svg 270w,\\n/static/212d51d960e98f74eabfe70511a41e2d/38205/Images1-min.svg 540w","sizes":"(min-width: 540px) 540px, 100vw"},"sources":[{"srcSet":"/static/212d51d960e98f74eabfe70511a41e2d/a478e/Images1-min.webp 135w,\\n/static/212d51d960e98f74eabfe70511a41e2d/77543/Images1-min.webp 270w,\\n/static/212d51d960e98f74eabfe70511a41e2d/76646/Images1-min.webp 540w","type":"image/webp","sizes":"(min-width: 540px) 540px, 100vw"}]},"width":540,"height":640}');

/***/ }),

/***/ "./.cache/caches/gatsby-plugin-image/3546507381.json":
/*!***********************************************************!*\
  !*** ./.cache/caches/gatsby-plugin-image/3546507381.json ***!
  \***********************************************************/
/***/ ((module) => {

module.exports = JSON.parse('{"layout":"constrained","images":{"fallback":{"src":"/static/3fa7a18ea519a76267fc517bf50aab92/7f8cd/Icons2-min.svg","srcSet":"/static/3fa7a18ea519a76267fc517bf50aab92/51544/Icons2-min.svg 37w,\\n/static/3fa7a18ea519a76267fc517bf50aab92/08987/Icons2-min.svg 74w,\\n/static/3fa7a18ea519a76267fc517bf50aab92/7f8cd/Icons2-min.svg 148w","sizes":"(min-width: 148px) 148px, 100vw"},"sources":[{"srcSet":"/static/3fa7a18ea519a76267fc517bf50aab92/7e23d/Icons2-min.webp 37w,\\n/static/3fa7a18ea519a76267fc517bf50aab92/e1943/Icons2-min.webp 74w,\\n/static/3fa7a18ea519a76267fc517bf50aab92/4c54c/Icons2-min.webp 148w","type":"image/webp","sizes":"(min-width: 148px) 148px, 100vw"}]},"width":148,"height":148}');

/***/ }),

/***/ "./.cache/caches/gatsby-plugin-image/3943714865.json":
/*!***********************************************************!*\
  !*** ./.cache/caches/gatsby-plugin-image/3943714865.json ***!
  \***********************************************************/
/***/ ((module) => {

module.exports = JSON.parse('{"layout":"constrained","images":{"fallback":{"src":"/static/8440c93a3f8358773fc53f0038a32fbd/6cdb1/Imags-min.svg","srcSet":"/static/8440c93a3f8358773fc53f0038a32fbd/db891/Imags-min.svg 136w,\\n/static/8440c93a3f8358773fc53f0038a32fbd/4765c/Imags-min.svg 271w,\\n/static/8440c93a3f8358773fc53f0038a32fbd/6cdb1/Imags-min.svg 542w","sizes":"(min-width: 542px) 542px, 100vw"},"sources":[{"srcSet":"/static/8440c93a3f8358773fc53f0038a32fbd/eb6ee/Imags-min.webp 136w,\\n/static/8440c93a3f8358773fc53f0038a32fbd/ff74e/Imags-min.webp 271w,\\n/static/8440c93a3f8358773fc53f0038a32fbd/428d1/Imags-min.webp 542w","type":"image/webp","sizes":"(min-width: 542px) 542px, 100vw"}]},"width":542,"height":528}');

/***/ }),

/***/ "./.cache/caches/gatsby-plugin-image/3984715358.json":
/*!***********************************************************!*\
  !*** ./.cache/caches/gatsby-plugin-image/3984715358.json ***!
  \***********************************************************/
/***/ ((module) => {

module.exports = JSON.parse('{"layout":"constrained","images":{"fallback":{"src":"/static/15ca356854dd8d9161dc269902b2819c/50121/Images2-min.svg","srcSet":"/static/15ca356854dd8d9161dc269902b2819c/ff88c/Images2-min.svg 129w,\\n/static/15ca356854dd8d9161dc269902b2819c/a4b1b/Images2-min.svg 257w,\\n/static/15ca356854dd8d9161dc269902b2819c/50121/Images2-min.svg 514w","sizes":"(min-width: 514px) 514px, 100vw"},"sources":[{"srcSet":"/static/15ca356854dd8d9161dc269902b2819c/f49ca/Images2-min.webp 129w,\\n/static/15ca356854dd8d9161dc269902b2819c/5ad0e/Images2-min.webp 257w,\\n/static/15ca356854dd8d9161dc269902b2819c/3f595/Images2-min.webp 514w","type":"image/webp","sizes":"(min-width: 514px) 514px, 100vw"}]},"width":514,"height":590}');

/***/ }),

/***/ "./.cache/caches/gatsby-plugin-image/419675804.json":
/*!**********************************************************!*\
  !*** ./.cache/caches/gatsby-plugin-image/419675804.json ***!
  \**********************************************************/
/***/ ((module) => {

module.exports = JSON.parse('{"layout":"constrained","images":{"fallback":{"src":"/static/b3b191630832c296290f5eac5d67b6b2/733cb/Images5-min.svg","srcSet":"/static/b3b191630832c296290f5eac5d67b6b2/af957/Images5-min.svg 105w,\\n/static/b3b191630832c296290f5eac5d67b6b2/e7067/Images5-min.svg 210w,\\n/static/b3b191630832c296290f5eac5d67b6b2/733cb/Images5-min.svg 420w","sizes":"(min-width: 420px) 420px, 100vw"},"sources":[{"srcSet":"/static/b3b191630832c296290f5eac5d67b6b2/8062e/Images5-min.webp 105w,\\n/static/b3b191630832c296290f5eac5d67b6b2/c47fe/Images5-min.webp 210w,\\n/static/b3b191630832c296290f5eac5d67b6b2/adb9a/Images5-min.webp 420w","type":"image/webp","sizes":"(min-width: 420px) 420px, 100vw"}]},"width":420,"height":511}');

/***/ }),

/***/ "./.cache/caches/gatsby-plugin-image/885640978.json":
/*!**********************************************************!*\
  !*** ./.cache/caches/gatsby-plugin-image/885640978.json ***!
  \**********************************************************/
/***/ ((module) => {

module.exports = JSON.parse('{"layout":"constrained","placeholder":{"fallback":"data:image/webp;base64,UklGRvABAABXRUJQVlA4WAoAAAAQAAAAEwAAGQAAQUxQSNYAAAANgBzZtmplnXuffNxlzJgIKPLwmYXgEAcZQAQk4C6hODy9Bzv/vxAiYgJAnACoBmzfankB6iyrDElWdoMC0eF+pv/RO83/s9eF4eLCcFHB/z6o0aNRXoIqLmBqv099mZdFLWpNHg06Fydn6zlt+l4BZObyWcWyYxpI69CA4hp4a0XBdQSq0gRNNlNLLdJJ5aU4mfIg0jdg5F6L4wMHms4tGypB868KhN5uA7TyqqDiXBtkPgaoQ/yfqkBWR6KhvB5r/dGnXgFCpSD3G5X86Y2wQ1nUCogAVlA4IPQAAABwBQCdASoUABoAPtFcqE4oJSQiKAqpABoJZQAD4ukJWXBbJlwwavovzuYYHr9kvh+Ci0YwAP7k6DGyRLIg7I7JJeUXlNyQJtqnxJyxzUVJ882GKHBbvYnirzn7tPJ8d77vIhgY1QO4SPrMCFBPkCi+7AkBVp0X+RqRu0AtR3pd4EkTaCLkFyA0T7Q0ra04jMVyn9Nqn3usinkXV5Tea6C+nsNyI+t018MIzSN4b3ttc7hDztGhOEfa7P9co+npEGoDjJcxHK7vD4YTjZziTlEXGgv/9yN/7wtlzhe0//aN+Lf8r2FPRHxlZyuWf2HxYjqOAAAA"},"images":{"fallback":{"src":"/static/f5596e8cecdbe18dc9f2624de0e324ff/05bdd/Mockup.webp","srcSet":"/static/f5596e8cecdbe18dc9f2624de0e324ff/ab924/Mockup.webp 201w,\\n/static/f5596e8cecdbe18dc9f2624de0e324ff/3c501/Mockup.webp 401w,\\n/static/f5596e8cecdbe18dc9f2624de0e324ff/05bdd/Mockup.webp 802w","sizes":"(min-width: 802px) 802px, 100vw"},"sources":[]},"width":802,"height":1036}');

/***/ }),

/***/ "./public/page-data/sq/d/63159454.json":
/*!*********************************************!*\
  !*** ./public/page-data/sq/d/63159454.json ***!
  \*********************************************/
/***/ ((module) => {

module.exports = JSON.parse('{"data":{"site":{"siteMetadata":{"title":"Brouillon","description":"SEO Testing","author":"@gatsbyjs"}}}}');

/***/ })

};
;
//# sourceMappingURL=component---src-pages-index-js.js.map