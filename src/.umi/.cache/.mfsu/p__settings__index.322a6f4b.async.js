(self["webpackChunknextAlitaApp"] = self["webpackChunknextAlitaApp"] || []).push([["mf-dep_p__settings__index"],{

/***/ "./src/pages/settings/index.less?modules":
/*!***********************************************!*\
  !*** ./src/pages/settings/index.less?modules ***!
  \***********************************************/
/***/ (function(module) {

// extracted by mini-css-extract-plugin
module.exports = {"center":"center___jSyBo"};
    if(false) { var cssReload; }
  

/***/ }),

/***/ "./src/pages/settings/index.tsx":
/*!**************************************!*\
  !*** ./src/pages/settings/index.tsx ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd_mobile_es_icon_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd-mobile/es/icon/style */ "./node_modules/antd-mobile/es/icon/style/index.js");
/* harmony import */ var antd_mobile_es_icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd-mobile/es/icon */ "./node_modules/antd-mobile/es/icon/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var umi__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! umi */ "./src/.umi/core/umiExports.ts");
/* harmony import */ var _index_less_modules__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./index.less?modules */ "./src/pages/settings/index.less?modules");
/* harmony import */ var _index_less_modules__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_index_less_modules__WEBPACK_IMPORTED_MODULE_3__);



var _jsxFileName = "/Users/xiaohuoni/Desktop/\u684C\u9762/nextAlitaApp/src/pages/settings/index.tsx",
    _this = undefined;





var SettingsPage = function SettingsPage(_ref) {
  var settings = _ref.settings,
      dispatch = _ref.dispatch,
      location = _ref.location;

  var onLeftClick = function onLeftClick() {
    console.log('click left');
  };

  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {
    (0,umi__WEBPACK_IMPORTED_MODULE_4__.setPageNavBar)({
      pagePath: location.pathname,
      navBar: {
        onLeftClick: onLeftClick,
        rightContent: [/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(antd_mobile_es_icon__WEBPACK_IMPORTED_MODULE_1__.default, {
          key: "0",
          type: "search",
          style: {
            marginRight: '16px'
          },
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 21,
            columnNumber: 11
          }
        }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(antd_mobile_es_icon__WEBPACK_IMPORTED_MODULE_1__.default, {
          key: "1",
          type: "ellipsis",
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 22,
            columnNumber: 11
          }
        })]
      }
    });
    dispatch({
      type: 'settings/query'
    });
  }, []);
  var name = settings.name;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("div", {
    className: (_index_less_modules__WEBPACK_IMPORTED_MODULE_3___default().center),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 10
    }
  }, "Hello ", name);
};

/* harmony default export */ __webpack_exports__["default"] = ((0,umi__WEBPACK_IMPORTED_MODULE_4__.connect)(function (_ref2) {
  var settings = _ref2.settings;
  return {
    settings: settings
  };
})(SettingsPage));

/***/ })

}]);