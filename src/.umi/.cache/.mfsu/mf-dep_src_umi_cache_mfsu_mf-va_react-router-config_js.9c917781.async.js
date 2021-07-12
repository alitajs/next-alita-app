(self["webpackChunknextAlitaApp"] = self["webpackChunknextAlitaApp"] || []).push([["mf-dep_src_umi_cache_mfsu_mf-va_react-router-config_js"],{

/***/ "./node_modules/react-router-config/esm/react-router-config.js":
/*!*********************************************************************!*\
  !*** ./node_modules/react-router-config/esm/react-router-config.js ***!
  \*********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "matchRoutes": function() { return /* binding */ matchRoutes; },
/* harmony export */   "renderRoutes": function() { return /* binding */ renderRoutes; }
/* harmony export */ });
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router */ "./node_modules/react-router/esm/react-router.js");
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");




function matchRoutes(routes, pathname,
/*not public API*/
branch) {
  if (branch === void 0) {
    branch = [];
  }

  routes.some(function (route) {
    var match = route.path ? (0,react_router__WEBPACK_IMPORTED_MODULE_2__.matchPath)(pathname, route) : branch.length ? branch[branch.length - 1].match // use parent match
    : react_router__WEBPACK_IMPORTED_MODULE_2__.Router.computeRootMatch(pathname); // use default "root" match

    if (match) {
      branch.push({
        route: route,
        match: match
      });

      if (route.routes) {
        matchRoutes(route.routes, pathname, branch);
      }
    }

    return match;
  });
  return branch;
}

function renderRoutes(routes, extraProps, switchProps) {
  if (extraProps === void 0) {
    extraProps = {};
  }

  if (switchProps === void 0) {
    switchProps = {};
  }

  return routes ? react__WEBPACK_IMPORTED_MODULE_1__.createElement(react_router__WEBPACK_IMPORTED_MODULE_2__.Switch, switchProps, routes.map(function (route, i) {
    return react__WEBPACK_IMPORTED_MODULE_1__.createElement(react_router__WEBPACK_IMPORTED_MODULE_2__.Route, {
      key: route.key || i,
      path: route.path,
      exact: route.exact,
      strict: route.strict,
      render: function render(props) {
        return route.render ? route.render((0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({}, props, {}, extraProps, {
          route: route
        })) : react__WEBPACK_IMPORTED_MODULE_1__.createElement(route.component, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({}, props, extraProps, {
          route: route
        }));
      }
    });
  })) : null;
}


//# sourceMappingURL=react-router-config.js.map


/***/ }),

/***/ "./src/.umi/.cache/.mfsu/mf-va_react-router-config.js":
/*!************************************************************!*\
  !*** ./src/.umi/.cache/.mfsu/mf-va_react-router-config.js ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "matchRoutes": function() { return /* reexport safe */ react_router_config__WEBPACK_IMPORTED_MODULE_0__.matchRoutes; },
/* harmony export */   "renderRoutes": function() { return /* reexport safe */ react_router_config__WEBPACK_IMPORTED_MODULE_0__.renderRoutes; }
/* harmony export */ });
/* harmony import */ var react_router_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-router-config */ "./node_modules/react-router-config/esm/react-router-config.js");



/***/ })

}]);