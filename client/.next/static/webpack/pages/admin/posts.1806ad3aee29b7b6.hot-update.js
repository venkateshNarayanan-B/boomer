"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/admin/posts",{

/***/ "./pages/admin/posts/index.js":
/*!************************************!*\
  !*** ./pages/admin/posts/index.js ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_layout_AdminLayout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../components/layout/AdminLayout */ \"./components/layout/AdminLayout.js\");\n/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! antd/lib/button */ \"./node_modules/antd/lib/button/index.js\");\n/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(antd_lib_button__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var antd_lib_col__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! antd/lib/col */ \"./node_modules/antd/lib/col/index.js\");\n/* harmony import */ var antd_lib_row__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! antd/lib/row */ \"./node_modules/antd/lib/row/index.js\");\n/* harmony import */ var _ant_design_icons_lib_icons_PlusOutlined__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ant-design/icons/lib/icons/PlusOutlined */ \"./node_modules/@ant-design/icons/lib/icons/PlusOutlined.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nconst post = ()=>{\n    _s();\n    const [posts, setPosts] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    //get all posts from server\n    const fetchPosts = async ()=>{\n        try {\n            await axios__WEBPACK_IMPORTED_MODULE_4__[\"default\"].get(\"/posts\").then((response)=>{}).catch((error)=>{\n                console.log(error);\n            });\n        } catch (error) {\n            console.log(error);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_layout_AdminLayout__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd_lib_row__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n            style: {\n                height: \"100vh\"\n            },\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd_lib_col__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                offset: 1,\n                lg: 22,\n                sm: 22,\n                xs: 22,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        children: \"Post List\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Venture\\\\Desktop\\\\workspace\\\\boomer\\\\client\\\\pages\\\\admin\\\\posts\\\\index.js\",\n                        lineNumber: 25,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((antd_lib_button__WEBPACK_IMPORTED_MODULE_7___default()), {\n                        type: \"dashed\",\n                        htmlType: \"submit\",\n                        icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ant_design_icons_lib_icons_PlusOutlined__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {}, void 0, false, void 0, void 0),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                            href: \"/admin/posts/new\",\n                            children: \" Add New Post\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Venture\\\\Desktop\\\\workspace\\\\boomer\\\\client\\\\pages\\\\admin\\\\posts\\\\index.js\",\n                            lineNumber: 26,\n                            columnNumber: 82\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Venture\\\\Desktop\\\\workspace\\\\boomer\\\\client\\\\pages\\\\admin\\\\posts\\\\index.js\",\n                        lineNumber: 26,\n                        columnNumber: 17\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Venture\\\\Desktop\\\\workspace\\\\boomer\\\\client\\\\pages\\\\admin\\\\posts\\\\index.js\",\n                lineNumber: 24,\n                columnNumber: 9\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\Venture\\\\Desktop\\\\workspace\\\\boomer\\\\client\\\\pages\\\\admin\\\\posts\\\\index.js\",\n            lineNumber: 23,\n            columnNumber: 9\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Venture\\\\Desktop\\\\workspace\\\\boomer\\\\client\\\\pages\\\\admin\\\\posts\\\\index.js\",\n        lineNumber: 22,\n        columnNumber: 5\n    }, undefined);\n};\n_s(post, \"QFg9xhJ0x9yrnvUQrdhfY5IZlDs=\");\n/* harmony default export */ __webpack_exports__[\"default\"] = (post);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hZG1pbi9wb3N0cy9pbmRleC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQXVDO0FBQ3lCO0FBQ3pCO0FBQUE7QUFBQTtBQUNVO0FBQ3BCO0FBQ0g7QUFFMUIsTUFBTVMsT0FBTzs7SUFDWCxNQUFNLENBQUNDLE9BQU9DLFNBQVMsR0FBR1YsK0NBQVFBLENBQUMsRUFBRTtJQUVyQywyQkFBMkI7SUFDM0IsTUFBTVcsYUFBYTtRQUNqQixJQUFJO1lBQ0YsTUFBTUosaURBQVMsQ0FBQyxVQUFVTSxJQUFJLENBQUNDLENBQUFBLFlBQVksR0FBR0MsS0FBSyxDQUFDQyxDQUFBQTtnQkFDbkRDLFFBQVFDLEdBQUcsQ0FBQ0Y7WUFDYjtRQUNGLEVBQUUsT0FBT0EsT0FBTztZQUNkQyxRQUFRQyxHQUFHLENBQUNGO1FBQ2Q7SUFDRjtJQUNBLHFCQUNFLDhEQUFDZixzRUFBV0E7a0JBQ1IsNEVBQUNHLG9EQUFHQTtZQUFDZSxPQUFPO2dCQUFDQyxRQUFRO1lBQU87c0JBQzVCLDRFQUFDakIsb0RBQUdBO2dCQUFDa0IsUUFBUTtnQkFBR0MsSUFBSTtnQkFBSUMsSUFBSTtnQkFBSUMsSUFBSTs7a0NBQzVCLDhEQUFDQztrQ0FBRzs7Ozs7O2tDQUNKLDhEQUFDdkIsd0RBQU1BO3dCQUFDd0IsTUFBSzt3QkFBU0MsVUFBUzt3QkFBVUMsb0JBQU0sOERBQUN2QixnRkFBWUE7a0NBQUssNEVBQUNDLGtEQUFJQTs0QkFBQ3VCLE1BQUs7c0NBQW1COzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNL0c7R0F4Qk1yQjtBQTBCTiwrREFBZUEsSUFBSUEsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9hZG1pbi9wb3N0cy9pbmRleC5qcz9kNzQ0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgQWRtaW5MYXlvdXQgZnJvbSAnLi4vLi4vLi4vY29tcG9uZW50cy9sYXlvdXQvQWRtaW5MYXlvdXQnXHJcbmltcG9ydCB7IEJ1dHRvbiwgQ29sLCBSb3cgfSBmcm9tICdhbnRkJ1xyXG5pbXBvcnQgeyBQbHVzT3V0bGluZWQgfSBmcm9tICdAYW50LWRlc2lnbi9pY29ucyc7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcblxyXG5jb25zdCBwb3N0ID0gKCkgPT4ge1xyXG4gIGNvbnN0IFtwb3N0cywgc2V0UG9zdHNdID0gdXNlU3RhdGUoW10pO1xyXG5cclxuICAvL2dldCBhbGwgcG9zdHMgZnJvbSBzZXJ2ZXJcclxuICBjb25zdCBmZXRjaFBvc3RzID0gYXN5bmMgKCkgPT57XHJcbiAgICB0cnkge1xyXG4gICAgICBhd2FpdCBheGlvcy5nZXQoJy9wb3N0cycpLnRoZW4ocmVzcG9uc2UgPT57fSkuY2F0Y2goZXJyb3IgPT57XHJcbiAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7IFxyXG4gICAgICB9KTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgIH1cclxuICB9XHJcbiAgcmV0dXJuIChcclxuICAgIDxBZG1pbkxheW91dD5cclxuICAgICAgICA8Um93IHN0eWxlPXt7aGVpZ2h0OiAnMTAwdmgnfX0+XHJcbiAgICAgICAgPENvbCBvZmZzZXQ9ezF9IGxnPXsyMn0gc209ezIyfSB4cz17MjJ9PlxyXG4gICAgICAgICAgICAgICAgPGgxPlBvc3QgTGlzdDwvaDE+XHJcbiAgICAgICAgICAgICAgICA8QnV0dG9uIHR5cGU9J2Rhc2hlZCcgaHRtbFR5cGU9XCJzdWJtaXRcIiAgaWNvbj17PFBsdXNPdXRsaW5lZCAvPn0+PExpbmsgaHJlZj0nL2FkbWluL3Bvc3RzL25ldyc+IEFkZCBOZXcgUG9zdDwvTGluaz48L0J1dHRvbj5cclxuICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgXHJcbiAgICA8L0FkbWluTGF5b3V0PlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgcG9zdCJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiQWRtaW5MYXlvdXQiLCJCdXR0b24iLCJDb2wiLCJSb3ciLCJQbHVzT3V0bGluZWQiLCJMaW5rIiwiYXhpb3MiLCJwb3N0IiwicG9zdHMiLCJzZXRQb3N0cyIsImZldGNoUG9zdHMiLCJnZXQiLCJ0aGVuIiwicmVzcG9uc2UiLCJjYXRjaCIsImVycm9yIiwiY29uc29sZSIsImxvZyIsInN0eWxlIiwiaGVpZ2h0Iiwib2Zmc2V0IiwibGciLCJzbSIsInhzIiwiaDEiLCJ0eXBlIiwiaHRtbFR5cGUiLCJpY29uIiwiaHJlZiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/admin/posts/index.js\n"));

/***/ })

});