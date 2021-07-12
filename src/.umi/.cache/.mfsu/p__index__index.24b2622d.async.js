(self["webpackChunknextAlitaApp"] = self["webpackChunknextAlitaApp"] || []).push([["mf-dep_p__index__index"],{

/***/ "./src/pages/index/index.less?modules":
/*!********************************************!*\
  !*** ./src/pages/index/index.less?modules ***!
  \********************************************/
/***/ (function(module) {

// extracted by mini-css-extract-plugin
module.exports = {"center":"center___n7agZ"};
    if(false) { var cssReload; }
  

/***/ }),

/***/ "./src/pages/index/index.tsx":
/*!***********************************!*\
  !*** ./src/pages/index/index.tsx ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var umi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! umi */ "./src/.umi/core/umiExports.ts");
/* harmony import */ var _index_less_modules__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.less?modules */ "./src/pages/index/index.less?modules");
/* harmony import */ var _index_less_modules__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_index_less_modules__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/xiaohuoni/Desktop/\u684C\u9762/nextAlitaApp/src/pages/index/index.tsx",
    _this = undefined;





var IndexPage = function IndexPage(_ref) {
  var index = _ref.index,
      dispatch = _ref.dispatch;
  // 这里发起了初始化请求
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    dispatch === null || dispatch === void 0 ? void 0 : dispatch({
      type: 'index/query'
    });
    return function () {// 这里写一些需要消除副作用的代码
      // 如: 声明周期中写在 componentWillUnmount
    };
  }, []); // 注意，上面这里写空数组，表示初始化，如果需要监听某个字段变化再发起请求，可以在这里写明

  var name = index.name;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: (_index_less_modules__WEBPACK_IMPORTED_MODULE_1___default().center),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 10
    }
  }, "Hello ", name);
};

/* harmony default export */ __webpack_exports__["default"] = ((0,umi__WEBPACK_IMPORTED_MODULE_2__.connect)(function (_ref2) {
  var index = _ref2.index;
  return {
    index: index
  };
})(IndexPage));

/***/ })

}]);