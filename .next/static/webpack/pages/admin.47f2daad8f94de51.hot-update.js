"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/admin",{

/***/ "./components/routes/UserRoute.js":
/*!****************************************!*\
  !*** ./components/routes/UserRoute.js ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var E_OLD_BACKUP_MERN_STACK_PROJECTS_Social_Media_Site_2021_client_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/regenerator-runtime/runtime.js */ \"./node_modules/regenerator-runtime/runtime.js\");\n/* harmony import */ var E_OLD_BACKUP_MERN_STACK_PROJECTS_Social_Media_Site_2021_client_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(E_OLD_BACKUP_MERN_STACK_PROJECTS_Social_Media_Site_2021_client_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"../node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ant-design/icons */ \"./node_modules/@ant-design/icons/es/index.js\");\n/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../context */ \"./context/index.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar UserRoute = function(param) {\n    var children = param.children;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false), ok = ref[0], setOk = ref[1];\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(_context__WEBPACK_IMPORTED_MODULE_5__.UserContext), state = ref1[0];\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        if (state && state.token) getCurrentUser();\n    }, [\n        state && state.token\n    ]);\n    var getCurrentUser = _asyncToGenerator(E_OLD_BACKUP_MERN_STACK_PROJECTS_Social_Media_Site_2021_client_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n        var data;\n        return E_OLD_BACKUP_MERN_STACK_PROJECTS_Social_Media_Site_2021_client_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n            while(1)switch(_ctx.prev = _ctx.next){\n                case 0:\n                    _ctx.prev = 0;\n                    _ctx.next = 3;\n                    return axios__WEBPACK_IMPORTED_MODULE_3___default().get(\"/current-user\");\n                case 3:\n                    data = _ctx.sent.data;\n                    if (data.ok) {\n                        setOk(true);\n                    }\n                    _ctx.next = 10;\n                    break;\n                case 7:\n                    _ctx.prev = 7;\n                    _ctx.t0 = _ctx[\"catch\"](0);\n                    router.push(\"/login\");\n                case 10:\n                case \"end\":\n                    return _ctx.stop();\n            }\n        }, _callee, null, [\n            [\n                0,\n                7\n            ]\n        ]);\n    }));\n     true && state === null && setTimeout(function() {\n        getCurrentUser();\n    }, 2000);\n    return !ok ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_ant_design_icons__WEBPACK_IMPORTED_MODULE_6__.SyncOutlined, {\n        spin: true,\n        className: \"d-flex justify-content-center display-1 text-primary p-5\",\n        __source: {\n            fileName: \"E:\\\\OLD BACKUP\\\\MERN STACK PROJECTS\\\\Social-Media-Site-2021\\\\client\\\\components\\\\routes\\\\UserRoute.js\",\n            lineNumber: 35,\n            columnNumber: 5\n        },\n        __self: _this\n    }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {\n        children: children\n    });\n};\n_s(UserRoute, \"vvndkmmTgUZGTWJhHxqqVbyM5o0=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter\n    ];\n});\n_c = UserRoute;\n/* harmony default export */ __webpack_exports__[\"default\"] = (UserRoute);\nvar _c;\n$RefreshReg$(_c, \"UserRoute\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3JvdXRlcy9Vc2VyUm91dGUuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUF1RDtBQUM5QjtBQUNjO0FBQ1M7QUFDTDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFM0MsR0FBSyxDQUFDTyxTQUFTLEdBQUcsUUFBUSxRQUFVLENBQUM7UUFBaEJDLFFBQVEsU0FBUkEsUUFBUTs7SUFDM0IsR0FBSyxDQUFlUCxHQUFlLEdBQWZBLCtDQUFRLENBQUMsS0FBSyxHQUEzQlEsRUFBRSxHQUFXUixHQUFlLEtBQXhCUyxLQUFLLEdBQUlULEdBQWU7SUFDbkMsR0FBSyxDQUFDVSxNQUFNLEdBQUdQLHNEQUFTO0lBQ3hCLEdBQUssQ0FBV0YsSUFBdUIsR0FBdkJBLGlEQUFVLENBQUNJLGlEQUFXLEdBQS9CTSxLQUFLLEdBQUlWLElBQXVCO0lBRXZDRixnREFBUyxDQUFDLFFBQVEsR0FBRixDQUFDO1FBQ2YsRUFBRSxFQUFFWSxLQUFLLElBQUlBLEtBQUssQ0FBQ0MsS0FBSyxFQUFFQyxjQUFjO0lBQzFDLENBQUMsRUFBRSxDQUFDRjtRQUFBQSxLQUFLLElBQUlBLEtBQUssQ0FBQ0MsS0FBSztJQUFBLENBQUM7SUFFekIsR0FBSyxDQUFDQyxjQUFjLDRLQUFHLFFBQVEsV0FBSSxDQUFDO1lBRXhCQyxJQUFJOzs7Ozs7MkJBQVdaLGdEQUFTLENBQUUsQ0FBYTs7b0JBQXZDWSxJQUFJLGFBQUpBLElBQUk7b0JBRVosRUFBRSxFQUFFQSxJQUFJLENBQUNOLEVBQUUsRUFBRSxDQUFDO3dCQUNaQyxLQUFLLENBQUMsSUFBSTtvQkFDWixDQUFDOzs7Ozs7b0JBRURDLE1BQU0sQ0FBQ00sSUFBSSxDQUFDLENBQVE7Ozs7Ozs7Ozs7O0lBRXhCLENBQUM7SUFFREMsS0FBZSxJQUNiTixLQUFLLEtBQUssSUFBSSxJQUNkUSxVQUFVLENBQUMsUUFBUSxHQUFGLENBQUM7UUFDaEJOLGNBQWM7SUFDaEIsQ0FBQyxFQUFFLElBQUk7SUFFVCxNQUFNLEVBQUVMLEVBQUUsd0VBQ1BKLDJEQUFZO1FBQ1hnQixJQUFJO1FBQ0pDLFNBQVMsRUFBQyxDQUEwRDs7Ozs7Ozs7a0JBR25FZCxRQUFROztBQUVmLENBQUM7R0FuQ0tELFNBQVM7O1FBRUVILGtEQUFTOzs7S0FGcEJHLFNBQVM7QUFxQ2YsK0RBQWVBLFNBQVMsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL3JvdXRlcy9Vc2VyUm91dGUuanM/NzVkMiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlLCB1c2VDb250ZXh0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCB7IFN5bmNPdXRsaW5lZCB9IGZyb20gXCJAYW50LWRlc2lnbi9pY29uc1wiO1xyXG5pbXBvcnQgeyBVc2VyQ29udGV4dCB9IGZyb20gXCIuLi8uLi9jb250ZXh0XCI7XHJcblxyXG5jb25zdCBVc2VyUm91dGUgPSAoeyBjaGlsZHJlbiB9KSA9PiB7XHJcbiAgY29uc3QgW29rLCBzZXRPa10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgY29uc3QgW3N0YXRlXSA9IHVzZUNvbnRleHQoVXNlckNvbnRleHQpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKHN0YXRlICYmIHN0YXRlLnRva2VuKSBnZXRDdXJyZW50VXNlcigpO1xyXG4gIH0sIFtzdGF0ZSAmJiBzdGF0ZS50b2tlbl0pO1xyXG5cclxuICBjb25zdCBnZXRDdXJyZW50VXNlciA9IGFzeW5jICgpID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgYXhpb3MuZ2V0KGAvY3VycmVudC11c2VyYCk7XHJcblxyXG4gICAgICBpZiAoZGF0YS5vaykge1xyXG4gICAgICAgIHNldE9rKHRydWUpO1xyXG4gICAgICB9XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICByb3V0ZXIucHVzaChcIi9sb2dpblwiKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBwcm9jZXNzLmJyb3dzZXIgJiZcclxuICAgIHN0YXRlID09PSBudWxsICYmXHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgZ2V0Q3VycmVudFVzZXIoKTtcclxuICAgIH0sIDIwMDApO1xyXG5cclxuICByZXR1cm4gIW9rID8gKFxyXG4gICAgPFN5bmNPdXRsaW5lZFxyXG4gICAgICBzcGluXHJcbiAgICAgIGNsYXNzTmFtZT1cImQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyIGRpc3BsYXktMSB0ZXh0LXByaW1hcnkgcC01XCJcclxuICAgIC8+XHJcbiAgKSA6IChcclxuICAgIDw+e2NoaWxkcmVufTwvPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBVc2VyUm91dGU7XHJcbiJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsInVzZUNvbnRleHQiLCJheGlvcyIsInVzZVJvdXRlciIsIlN5bmNPdXRsaW5lZCIsIlVzZXJDb250ZXh0IiwiVXNlclJvdXRlIiwiY2hpbGRyZW4iLCJvayIsInNldE9rIiwicm91dGVyIiwic3RhdGUiLCJ0b2tlbiIsImdldEN1cnJlbnRVc2VyIiwiZGF0YSIsImdldCIsInB1c2giLCJwcm9jZXNzIiwiYnJvd3NlciIsInNldFRpbWVvdXQiLCJzcGluIiwiY2xhc3NOYW1lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/routes/UserRoute.js\n");

/***/ }),

/***/ "./pages/admin/index.js":
/*!******************************!*\
  !*** ./pages/admin/index.js ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var E_OLD_BACKUP_MERN_STACK_PROJECTS_Social_Media_Site_2021_client_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/regenerator-runtime/runtime.js */ \"./node_modules/regenerator-runtime/runtime.js\");\n/* harmony import */ var E_OLD_BACKUP_MERN_STACK_PROJECTS_Social_Media_Site_2021_client_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(E_OLD_BACKUP_MERN_STACK_PROJECTS_Social_Media_Site_2021_client_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../context */ \"./context/index.js\");\n/* harmony import */ var _components_routes_UserRoute__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/routes/UserRoute */ \"./components/routes/UserRoute.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! axios */ \"../node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-toastify */ \"./node_modules/react-toastify/dist/react-toastify.esm.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\n\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar Admin = function() {\n    var _this1 = _this;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(_context__WEBPACK_IMPORTED_MODULE_3__.UserContext), state = ref[0], setState = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]), posts = ref1[0], setPosts = ref1[1];\n    var page = \"dashboard\";\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter)();\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        if (state && state.token) {\n            newsFeed();\n        }\n    }, [\n        state && state.token\n    ]);\n    var newsFeed = _asyncToGenerator(E_OLD_BACKUP_MERN_STACK_PROJECTS_Social_Media_Site_2021_client_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n        var data;\n        return E_OLD_BACKUP_MERN_STACK_PROJECTS_Social_Media_Site_2021_client_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n            while(1)switch(_ctx.prev = _ctx.next){\n                case 0:\n                    _ctx.prev = 0;\n                    _ctx.next = 3;\n                    return axios__WEBPACK_IMPORTED_MODULE_6___default().get(\"/posts\");\n                case 3:\n                    data = _ctx.sent.data;\n                    setPosts(data);\n                    _ctx.next = 10;\n                    break;\n                case 7:\n                    _ctx.prev = 7;\n                    _ctx.t0 = _ctx[\"catch\"](0);\n                    console.log(_ctx.t0);\n                case 10:\n                case \"end\":\n                    return _ctx.stop();\n            }\n        }, _callee, null, [\n            [\n                0,\n                7\n            ]\n        ]);\n    }));\n    var handleDelete = _asyncToGenerator(E_OLD_BACKUP_MERN_STACK_PROJECTS_Social_Media_Site_2021_client_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(post) {\n        var answer, data;\n        return E_OLD_BACKUP_MERN_STACK_PROJECTS_Social_Media_Site_2021_client_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n            while(1)switch(_ctx.prev = _ctx.next){\n                case 0:\n                    _ctx.prev = 0;\n                    answer = window.confirm(\"Are you sure you want to delete?\");\n                    if (answer) {\n                        _ctx.next = 6;\n                        break;\n                    }\n                    return _ctx.abrupt(\"return\");\n                case 6:\n                    _ctx.next = 8;\n                    return axios__WEBPACK_IMPORTED_MODULE_6___default()[\"delete\"](\"/admin/delete-post/\".concat(post._id));\n                case 8:\n                    data = _ctx.sent.data;\n                    react_toastify__WEBPACK_IMPORTED_MODULE_7__.toast.error(\"Post Deleted!!!\");\n                    newsFeed();\n                case 11:\n                    _ctx.next = 16;\n                    break;\n                case 13:\n                    _ctx.prev = 13;\n                    _ctx.t0 = _ctx[\"catch\"](0);\n                    console.log(_ctx.t0);\n                case 16:\n                case \"end\":\n                    return _ctx.stop();\n            }\n        }, _callee, null, [\n            [\n                0,\n                13\n            ]\n        ]);\n    }));\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(AdminRoute, {\n        __source: {\n            fileName: \"E:\\\\OLD BACKUP\\\\MERN STACK PROJECTS\\\\Social-Media-Site-2021\\\\client\\\\pages\\\\admin\\\\index.js\",\n            lineNumber: 47,\n            columnNumber: 5\n        },\n        __self: _this,\n        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(\"div\", {\n            className: \"container-fluid\",\n            __source: {\n                fileName: \"E:\\\\OLD BACKUP\\\\MERN STACK PROJECTS\\\\Social-Media-Site-2021\\\\client\\\\pages\\\\admin\\\\index.js\",\n                lineNumber: 48,\n                columnNumber: 7\n            },\n            __self: _this,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"div\", {\n                    className: \"row py-5 bg-default-image text-light\",\n                    __source: {\n                        fileName: \"E:\\\\OLD BACKUP\\\\MERN STACK PROJECTS\\\\Social-Media-Site-2021\\\\client\\\\pages\\\\admin\\\\index.js\",\n                        lineNumber: 49,\n                        columnNumber: 9\n                    },\n                    __self: _this,\n                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"div\", {\n                        className: \"col text-center\",\n                        __source: {\n                            fileName: \"E:\\\\OLD BACKUP\\\\MERN STACK PROJECTS\\\\Social-Media-Site-2021\\\\client\\\\pages\\\\admin\\\\index.js\",\n                            lineNumber: 50,\n                            columnNumber: 11\n                        },\n                        __self: _this,\n                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"h1\", {\n                            __source: {\n                                fileName: \"E:\\\\OLD BACKUP\\\\MERN STACK PROJECTS\\\\Social-Media-Site-2021\\\\client\\\\pages\\\\admin\\\\index.js\",\n                                lineNumber: 51,\n                                columnNumber: 13\n                            },\n                            __self: _this,\n                            children: \"ADMIN\"\n                        })\n                    })\n                }),\n                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"div\", {\n                    className: \"row py-4\",\n                    __source: {\n                        fileName: \"E:\\\\OLD BACKUP\\\\MERN STACK PROJECTS\\\\Social-Media-Site-2021\\\\client\\\\pages\\\\admin\\\\index.js\",\n                        lineNumber: 54,\n                        columnNumber: 9\n                    },\n                    __self: _this,\n                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"div\", {\n                        className: \"col-md-8 offset-md-2\",\n                        __source: {\n                            fileName: \"E:\\\\OLD BACKUP\\\\MERN STACK PROJECTS\\\\Social-Media-Site-2021\\\\client\\\\pages\\\\admin\\\\index.js\",\n                            lineNumber: 55,\n                            columnNumber: 11\n                        },\n                        __self: _this,\n                        children: posts.map(function(p) {\n                            /*#__PURE__*/ return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(\"div\", {\n                                __source: {\n                                    fileName: \"E:\\\\OLD BACKUP\\\\MERN STACK PROJECTS\\\\Social-Media-Site-2021\\\\client\\\\pages\\\\admin\\\\index.js\",\n                                    lineNumber: 57,\n                                    columnNumber: 15\n                                },\n                                __self: _this1,\n                                children: [\n                                    p.content,\n                                    \" - \",\n                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"b\", {\n                                        __source: {\n                                            fileName: \"E:\\\\OLD BACKUP\\\\MERN STACK PROJECTS\\\\Social-Media-Site-2021\\\\client\\\\pages\\\\admin\\\\index.js\",\n                                            lineNumber: 58,\n                                            columnNumber: 31\n                                        },\n                                        __self: _this1,\n                                        children: p.postedBy.name\n                                    }),\n                                    \" \",\n                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"span\", {\n                                        onClick: function() {\n                                            return handleDelete(p);\n                                        },\n                                        className: \"text-danger\",\n                                        __source: {\n                                            fileName: \"E:\\\\OLD BACKUP\\\\MERN STACK PROJECTS\\\\Social-Media-Site-2021\\\\client\\\\pages\\\\admin\\\\index.js\",\n                                            lineNumber: 59,\n                                            columnNumber: 17\n                                        },\n                                        __self: _this1,\n                                        children: \"DELETE\"\n                                    })\n                                ]\n                            }, p._id);\n                        })\n                    })\n                })\n            ]\n        })\n    }));\n};\n_s(Admin, \"BUV/ivELUpA8kC99iabUkya82Gs=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter\n    ];\n});\n_c = Admin;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Admin);\nvar _c;\n$RefreshReg$(_c, \"Admin\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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bWluL2luZGV4LmpzPzhjMjgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlQ29udGV4dCwgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBVc2VyQ29udGV4dCB9IGZyb20gXCIuLi8uLi9jb250ZXh0XCI7XHJcbmltcG9ydCBVc2VyUm91dGUgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvcm91dGVzL1VzZXJSb3V0ZVwiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQgeyB0b2FzdCB9IGZyb20gXCJyZWFjdC10b2FzdGlmeVwiO1xyXG5cclxuY29uc3QgQWRtaW4gPSAoKSA9PiB7XHJcbiAgY29uc3QgW3N0YXRlLCBzZXRTdGF0ZV0gPSB1c2VDb250ZXh0KFVzZXJDb250ZXh0KTtcclxuXHJcbiAgY29uc3QgW3Bvc3RzLCBzZXRQb3N0c10gPSB1c2VTdGF0ZShbXSk7XHJcblxyXG4gIGNvbnN0IHBhZ2UgPSBcImRhc2hib2FyZFwiO1xyXG5cclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmIChzdGF0ZSAmJiBzdGF0ZS50b2tlbikge1xyXG4gICAgICBuZXdzRmVlZCgpO1xyXG4gICAgfVxyXG4gIH0sIFtzdGF0ZSAmJiBzdGF0ZS50b2tlbl0pO1xyXG5cclxuICBjb25zdCBuZXdzRmVlZCA9IGFzeW5jICgpID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgYXhpb3MuZ2V0KGAvcG9zdHNgKTtcclxuICAgICAgc2V0UG9zdHMoZGF0YSk7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlRGVsZXRlID0gYXN5bmMgKHBvc3QpID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IGFuc3dlciA9IHdpbmRvdy5jb25maXJtKFwiQXJlIHlvdSBzdXJlIHlvdSB3YW50IHRvIGRlbGV0ZT9cIik7XHJcbiAgICAgIGlmICghYW5zd2VyKSByZXR1cm47XHJcbiAgICAgIGVsc2Uge1xyXG4gICAgICAgIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgYXhpb3MuZGVsZXRlKGAvYWRtaW4vZGVsZXRlLXBvc3QvJHtwb3N0Ll9pZH1gKTtcclxuICAgICAgICB0b2FzdC5lcnJvcihcIlBvc3QgRGVsZXRlZCEhIVwiKTtcclxuICAgICAgICBuZXdzRmVlZCgpO1xyXG4gICAgICB9XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxBZG1pblJvdXRlPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lci1mbHVpZFwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IHB5LTUgYmctZGVmYXVsdC1pbWFnZSB0ZXh0LWxpZ2h0XCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbCB0ZXh0LWNlbnRlclwiPlxyXG4gICAgICAgICAgICA8aDE+QURNSU48L2gxPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgcHktNFwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtOCBvZmZzZXQtbWQtMlwiPlxyXG4gICAgICAgICAgICB7cG9zdHMubWFwKChwKSA9PiAoXHJcbiAgICAgICAgICAgICAgPGRpdiBrZXk9e3AuX2lkfT5cclxuICAgICAgICAgICAgICAgIHtwLmNvbnRlbnR9IC0gPGI+e3AucG9zdGVkQnkubmFtZX08L2I+e1wiIFwifVxyXG4gICAgICAgICAgICAgICAgPHNwYW4gb25DbGljaz17KCkgPT4gaGFuZGxlRGVsZXRlKHApfSBjbGFzc05hbWU9XCJ0ZXh0LWRhbmdlclwiPlxyXG4gICAgICAgICAgICAgICAgICBERUxFVEVcclxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L0FkbWluUm91dGU+XHJcbiAgKTtcclxufTtcclxuZXhwb3J0IGRlZmF1bHQgQWRtaW47XHJcbiJdLCJuYW1lcyI6WyJ1c2VDb250ZXh0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJVc2VyQ29udGV4dCIsIlVzZXJSb3V0ZSIsInVzZVJvdXRlciIsImF4aW9zIiwidG9hc3QiLCJBZG1pbiIsInN0YXRlIiwic2V0U3RhdGUiLCJwb3N0cyIsInNldFBvc3RzIiwicGFnZSIsInJvdXRlciIsInRva2VuIiwibmV3c0ZlZWQiLCJkYXRhIiwiZ2V0IiwiY29uc29sZSIsImxvZyIsImhhbmRsZURlbGV0ZSIsInBvc3QiLCJhbnN3ZXIiLCJ3aW5kb3ciLCJjb25maXJtIiwiZGVsZXRlIiwiX2lkIiwiZXJyb3IiLCJBZG1pblJvdXRlIiwiZGl2IiwiY2xhc3NOYW1lIiwiaDEiLCJtYXAiLCJwIiwiY29udGVudCIsImIiLCJwb3N0ZWRCeSIsIm5hbWUiLCJzcGFuIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/admin/index.js\n");

/***/ })

});