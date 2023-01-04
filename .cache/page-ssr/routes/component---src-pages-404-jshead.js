"use strict";
exports.id = "component---src-pages-404-jshead";
exports.ids = ["component---src-pages-404-jshead"];
exports.modules = {

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
/* harmony import */ var _images_Logo_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../images/Logo.svg */ "./src/images/Logo.svg");
/* harmony import */ var _images_menu_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../images/menu.svg */ "./src/images/menu.svg");




const Header = () => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("section", {
  className: "absolute w-full z-30 text-white"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("nav", {
  className: "flex justify-between items-center max-w-[1200px]  mx-auto p-6"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(gatsby__WEBPACK_IMPORTED_MODULE_0__.Link, {
  to: "/"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("img", {
  className: "h-auto w-[10rem]",
  src: _images_Logo_svg__WEBPACK_IMPORTED_MODULE_2__["default"],
  alt: "logo"
})), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("button", {
  className: "icon-toggle md:hidden"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("img", {
  className: "w-6 ",
  src: _images_menu_svg__WEBPACK_IMPORTED_MODULE_3__["default"],
  alt: "menu"
})), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("ul", {
  className: "hidden text-xs px-2 gap-2 md:flex"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(gatsby__WEBPACK_IMPORTED_MODULE_0__.Link, {
  to: "/",
  className: "rounded px-1 py-1 hover:bg-slate-200 hover:bg-opacity-10 duration-100 ease-in"
}, "PRODUITS")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(gatsby__WEBPACK_IMPORTED_MODULE_0__.Link, {
  to: "/",
  className: "rounded px-1 py-1 hover:bg-slate-200 hover:bg-opacity-10 duration-100 ease-in"
}, "DEMO")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(gatsby__WEBPACK_IMPORTED_MODULE_0__.Link, {
  to: "/",
  className: "rounded px-1 py-1 hover:bg-slate-200 hover:bg-opacity-10 duration-100 ease-in"
}, "SUPPORT")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(gatsby__WEBPACK_IMPORTED_MODULE_0__.Link, {
  to: "/",
  className: "rounded px-1 py-1 hover:bg-slate-200 hover:bg-opacity-10 duration-100 ease-in"
}, "CONTACT"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("ul", {
  className: "hidden gap-2 text-sm  pt-6 sm:pt-0 sm:gap-4 sm:text-md md:flex"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("li", null, " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(gatsby__WEBPACK_IMPORTED_MODULE_0__.Link, {
  to: "/",
  className: "rounded-full font-bold px-6 py-2 hover:bg-slate-200 hover:bg-opacity-10 duration-100 ease-in"
}, "CONNEXION")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("li", null, " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(gatsby__WEBPACK_IMPORTED_MODULE_0__.Link, {
  to: "/",
  className: "text-black bg-gradient-to-tr from-[#30F9FC] to-lime-300 rounded-full px-6 py-2 brightness-90 hover:brightness-100 duration-200 ease-in"
}, "COMMENCER")))));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Header);

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
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Header */ "./src/components/Header.js");
/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */



const Layout = ({
  children
}) => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Header__WEBPACK_IMPORTED_MODULE_1__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("main", null, children));
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

/***/ "./src/pages/404.js?export=head":
/*!**************************************!*\
  !*** ./src/pages/404.js?export=head ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Head": () => (/* binding */ Head),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/layout */ "./src/components/layout.js");
/* harmony import */ var _components_seo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/seo */ "./src/components/seo.js");



const NotFoundPage = () => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_layout__WEBPACK_IMPORTED_MODULE_1__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h1", null, "404: Not Found"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, "You just hit a route that doesn't exist... the sadness."));
const Head = () => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_seo__WEBPACK_IMPORTED_MODULE_2__["default"], {
  title: "404: Not Found"
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NotFoundPage);

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

/***/ "./src/images/menu.svg":
/*!*****************************!*\
  !*** ./src/images/menu.svg ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgNTEyIDUxMiIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMjsiIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPGc+DQoJPGc+DQoJCTxwYXRoIGZpbGw9IiNmYWZhZmEiIGQ9Ik00OTIsMjM2SDIwYy0xMS4wNDYsMC0yMCw4Ljk1NC0yMCwyMGMwLDExLjA0Niw4Ljk1NCwyMCwyMCwyMGg0NzJjMTEuMDQ2LDAsMjAtOC45NTQsMjAtMjBTNTAzLjA0NiwyMzYsNDkyLDIzNnoiLz4NCgk8L2c+DQo8L2c+DQo8Zz4NCgk8Zz4NCgkJPHBhdGggZmlsbD0iI2ZhZmFmYSIgZD0iTTQ5Miw3NkgyMEM4Ljk1NCw3NiwwLDg0Ljk1NCwwLDk2czguOTU0LDIwLDIwLDIwaDQ3MmMxMS4wNDYsMCwyMC04Ljk1NCwyMC0yMFM1MDMuMDQ2LDc2LDQ5Miw3NnoiLz4NCgk8L2c+DQo8L2c+DQo8Zz4NCgk8Zz4NCgkJPHBhdGggZmlsbD0iI2ZhZmFmYSIgZD0iTTQ5MiwzOTZIMjBjLTExLjA0NiwwLTIwLDguOTU0LTIwLDIwYzAsMTEuMDQ2LDguOTU0LDIwLDIwLDIwaDQ3MmMxMS4wNDYsMCwyMC04Ljk1NCwyMC0yMA0KCQkJQzUxMiw0MDQuOTU0LDUwMy4wNDYsMzk2LDQ5MiwzOTZ6Ii8+DQoJPC9nPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPC9zdmc+DQo=");

/***/ }),

/***/ "./public/page-data/sq/d/63159454.json":
/*!*********************************************!*\
  !*** ./public/page-data/sq/d/63159454.json ***!
  \*********************************************/
/***/ ((module) => {

module.exports = JSON.parse('{"data":{"site":{"siteMetadata":{"title":"Gatsby Default Starter","description":"Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.","author":"@gatsbyjs"}}}}');

/***/ })

};
;
//# sourceMappingURL=component---src-pages-404-jshead.js.map