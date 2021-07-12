(self["webpackChunknextAlitaApp"] = self["webpackChunknextAlitaApp"] || []).push([["mf-dep_p__list__index"],{

/***/ "./src/pages/list/index.less?modules":
/*!*******************************************!*\
  !*** ./src/pages/list/index.less?modules ***!
  \*******************************************/
/***/ (function(module) {

// extracted by mini-css-extract-plugin
module.exports = {"listIcon":"listIcon___1ssUR"};
    if(false) { var cssReload; }
  

/***/ }),

/***/ "./src/pages/list/index.tsx":
/*!**********************************!*\
  !*** ./src/pages/list/index.tsx ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd_mobile_es_list_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd-mobile/es/list/style */ "./node_modules/antd-mobile/es/list/style/index.js");
/* harmony import */ var antd_mobile_es_list__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd-mobile/es/list */ "./node_modules/antd-mobile/es/list/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _services_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/services/api */ "./src/services/api.ts");
/* harmony import */ var _alitajs_list_view__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @alitajs/list-view */ "./node_modules/@alitajs/list-view/dist/index.esm.js");
/* harmony import */ var umi__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! umi */ "./src/.umi/core/umiExports.ts");
/* harmony import */ var _assets_logo_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/assets/logo.png */ "./src/assets/logo.png");
/* harmony import */ var _assets_logo_png__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_assets_logo_png__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _index_less_modules__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./index.less?modules */ "./src/pages/list/index.less?modules");
/* harmony import */ var _index_less_modules__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_index_less_modules__WEBPACK_IMPORTED_MODULE_6__);



var _jsxFileName = "/Users/xiaohuoni/Desktop/\u684C\u9762/nextAlitaApp/src/pages/list/index.tsx",
    _this = undefined;







var Item = antd_mobile_es_list__WEBPACK_IMPORTED_MODULE_1__.default.Item;
var Brief = Item.Brief;

var ListPage = function ListPage(_ref) {
  var list = _ref.list,
      dispatch = _ref.dispatch;
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {
    dispatch({
      type: 'list/query'
    });
  }, []);
  var name = list.name;

  var renderRow = function renderRow(rowData, sectionID, rowID) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(Item, {
      arrow: "horizontal",
      thumb: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("img", {
        src: (_assets_logo_png__WEBPACK_IMPORTED_MODULE_5___default()),
        className: (_index_less_modules__WEBPACK_IMPORTED_MODULE_6___default().listIcon),
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28,
          columnNumber: 14
        }
      }),
      multipleLine: true,
      onClick: function onClick() {
        (0,umi__WEBPACK_IMPORTED_MODULE_7__.dropByCacheKey)('/list');
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 5
      }
    }, "12312321 ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(Brief, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 16
      }
    }, rowID));
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(react__WEBPACK_IMPORTED_MODULE_2__.Fragment, null, "Model Name:", name, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_alitajs_list_view__WEBPACK_IMPORTED_MODULE_4__.default, {
    isTabsPage: true,
    requestFunc: _services_api__WEBPACK_IMPORTED_MODULE_3__.queryList,
    renderRow: renderRow,
    requestParams: {
      abc: '123',
      token: 'alita',
      pageSize: 10,
      offset: 0
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 7
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = ((0,umi__WEBPACK_IMPORTED_MODULE_7__.connect)(function (_ref2) {
  var list = _ref2.list;
  return {
    list: list
  };
})(ListPage));

/***/ }),

/***/ "./src/assets/logo.png":
/*!*****************************!*\
  !*** ./src/assets/logo.png ***!
  \*****************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/logo.901f7b2c.png";

/***/ })

}]);