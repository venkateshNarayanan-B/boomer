"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/test",{

/***/ "./pages/test.js":
/*!***********************!*\
  !*** ./pages/test.js ***!
  \***********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dynamic */ \"./node_modules/next/dynamic.js\");\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_react_quill_dist_quill_snow_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../node_modules/react-quill/dist/quill.snow.css */ \"./node_modules/react-quill/dist/quill.snow.css\");\n/* harmony import */ var _node_modules_react_quill_dist_quill_snow_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_react_quill_dist_quill_snow_css__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _s = $RefreshSig$();\n\n\nconst ReactQuill = next_dynamic__WEBPACK_IMPORTED_MODULE_2___default()(()=>__webpack_require__.e(/*! import() */ \"node_modules_react-quill_lib_index_js\").then(__webpack_require__.t.bind(__webpack_require__, /*! react-quill */ \"./node_modules/react-quill/lib/index.js\", 23)), {\n    loadableGenerated: {\n        modules: [\n            \"test.js -> \" + \"react-quill\"\n        ]\n    },\n    ssr: false\n});\n_c = ReactQuill;\n\nconst MyComponent = ()=>{\n    _s();\n    const [editorHtml, setEditorHtml] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const quillRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();\n    const handleChange = (html)=>{\n        setEditorHtml(html);\n    };\n    const apiPostNewsImage = async (formData)=>{\n        try {\n            // Implement your API post here to upload the image and get its URL\n            // You can use axios or fetch to make the API call\n            // Example:\n            // const response = await axios.post('/upload-image', formData);\n            // return response.data.imageURL;\n            // For now, we'll return a placeholder URL\n            return \"https://example.com/images/foo.png\";\n        } catch (error) {\n            console.error(\"Error uploading image\", error);\n            throw error;\n        }\n    };\n    const imageHandler = ()=>{\n        const input = document.createElement(\"input\");\n        input.setAttribute(\"type\", \"file\");\n        input.setAttribute(\"accept\", \"image/*\");\n        input.click();\n        input.onchange = async ()=>{\n            const file = input.files[0];\n            const formData = new FormData();\n            formData.append(\"image\", file);\n            if (!quillRef.current) return;\n            // Save current cursor state\n            const range = quillRef.current.getSelection(true);\n            // Insert temporary loading placeholder image\n            quillRef.current.insertEmbed(range.index, \"image\", \"\".concat(window.location.origin, \"/images/loaders/placeholder.gif\"));\n            // Move cursor to right side of image (easier to continue typing)\n            quillRef.current.setSelection(range.index + 1);\n            try {\n                // Call the API to upload the image\n                const imageURL = await apiPostNewsImage(formData);\n                // Remove placeholder image\n                quillRef.current.deleteText(range.index, 1);\n                // Insert uploaded image\n                quillRef.current.insertEmbed(range.index, \"image\", imageURL);\n            } catch (error) {\n                console.error(\"Error uploading image\", error);\n            // Handle error if needed\n            }\n        };\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"text-editor\",\n        children: [\n            JSON.stringify(editorHtml),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"hr\", {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Venture\\\\Desktop\\\\workspace\\\\boomer\\\\client\\\\pages\\\\test.js\",\n                lineNumber: 73,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ReactQuill, {\n                ref: quillRef,\n                value: editorHtml,\n                onChange: handleChange,\n                placeholder: \"Type something...\",\n                modules: {\n                    toolbar: {\n                        container: [\n                            [\n                                {\n                                    header: \"1\"\n                                },\n                                {\n                                    header: \"2\"\n                                },\n                                {\n                                    header: [\n                                        3,\n                                        4,\n                                        5,\n                                        6\n                                    ]\n                                },\n                                {\n                                    font: []\n                                }\n                            ],\n                            [\n                                {\n                                    size: []\n                                }\n                            ],\n                            [\n                                \"bold\",\n                                \"italic\",\n                                \"underline\",\n                                \"strike\",\n                                \"blockquote\"\n                            ],\n                            [\n                                {\n                                    list: \"ordered\"\n                                },\n                                {\n                                    list: \"bullet\"\n                                }\n                            ],\n                            [\n                                \"link\",\n                                \"video\"\n                            ],\n                            [\n                                \"link\",\n                                \"image\",\n                                \"video\"\n                            ],\n                            [\n                                \"clean\"\n                            ],\n                            [\n                                \"code-block\"\n                            ]\n                        ],\n                        handlers: {\n                            image: imageHandler\n                        }\n                    }\n                }\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Venture\\\\Desktop\\\\workspace\\\\boomer\\\\client\\\\pages\\\\test.js\",\n                lineNumber: 74,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Venture\\\\Desktop\\\\workspace\\\\boomer\\\\client\\\\pages\\\\test.js\",\n        lineNumber: 71,\n        columnNumber: 5\n    }, undefined);\n};\n_s(MyComponent, \"nsKXGzeuI1sEOArpD0XHofzdIyg=\");\n_c1 = MyComponent;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MyComponent);\nvar _c, _c1;\n$RefreshReg$(_c, \"ReactQuill\");\n$RefreshReg$(_c1, \"MyComponent\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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OzRCQUNUO2dDQUFDOzZCQUFhO3lCQUNmO3dCQUNEQyxVQUFVOzRCQUNSQyxPQUFPdkM7d0JBQ1Q7b0JBQ0Y7Z0JBQ0Y7Ozs7Ozs7Ozs7OztBQUlSO0dBN0ZNVjtNQUFBQTtBQStGTiwrREFBZUEsV0FBV0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy90ZXN0LmpzP2QwOTkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VSZWYgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBkeW5hbWljIGZyb20gJ25leHQvZHluYW1pYyc7XHJcbmNvbnN0IFJlYWN0UXVpbGwgPSBkeW5hbWljKCgpID0+IGltcG9ydCgncmVhY3QtcXVpbGwnKSwgeyBzc3I6IGZhbHNlIH0pO1xyXG5pbXBvcnQgJy4uL25vZGVfbW9kdWxlcy9yZWFjdC1xdWlsbC9kaXN0L3F1aWxsLnNub3cuY3NzJztcclxuXHJcbmNvbnN0IE15Q29tcG9uZW50ID0gKCkgPT4ge1xyXG4gIGNvbnN0IFtlZGl0b3JIdG1sLCBzZXRFZGl0b3JIdG1sXSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBxdWlsbFJlZiA9IHVzZVJlZigpO1xyXG5cclxuICBjb25zdCBoYW5kbGVDaGFuZ2UgPSAoaHRtbCkgPT4ge1xyXG4gICAgc2V0RWRpdG9ySHRtbChodG1sKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBhcGlQb3N0TmV3c0ltYWdlID0gYXN5bmMgKGZvcm1EYXRhKSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICAvLyBJbXBsZW1lbnQgeW91ciBBUEkgcG9zdCBoZXJlIHRvIHVwbG9hZCB0aGUgaW1hZ2UgYW5kIGdldCBpdHMgVVJMXHJcbiAgICAgIC8vIFlvdSBjYW4gdXNlIGF4aW9zIG9yIGZldGNoIHRvIG1ha2UgdGhlIEFQSSBjYWxsXHJcbiAgICAgIC8vIEV4YW1wbGU6XHJcbiAgICAgIC8vIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MucG9zdCgnL3VwbG9hZC1pbWFnZScsIGZvcm1EYXRhKTtcclxuICAgICAgLy8gcmV0dXJuIHJlc3BvbnNlLmRhdGEuaW1hZ2VVUkw7XHJcblxyXG4gICAgICAvLyBGb3Igbm93LCB3ZSdsbCByZXR1cm4gYSBwbGFjZWhvbGRlciBVUkxcclxuICAgICAgcmV0dXJuICdodHRwczovL2V4YW1wbGUuY29tL2ltYWdlcy9mb28ucG5nJztcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIHVwbG9hZGluZyBpbWFnZScsIGVycm9yKTtcclxuICAgICAgdGhyb3cgZXJyb3I7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaW1hZ2VIYW5kbGVyID0gKCkgPT4ge1xyXG4gICAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG5cclxuICAgIGlucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsICdmaWxlJyk7XHJcbiAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ2FjY2VwdCcsICdpbWFnZS8qJyk7XHJcbiAgICBpbnB1dC5jbGljaygpO1xyXG5cclxuICAgIGlucHV0Lm9uY2hhbmdlID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICBjb25zdCBmaWxlID0gaW5wdXQuZmlsZXNbMF07XHJcbiAgICAgIGNvbnN0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XHJcblxyXG4gICAgICBmb3JtRGF0YS5hcHBlbmQoJ2ltYWdlJywgZmlsZSk7XHJcblxyXG4gICAgICBpZiAoIXF1aWxsUmVmLmN1cnJlbnQpIHJldHVybjtcclxuXHJcbiAgICAgIC8vIFNhdmUgY3VycmVudCBjdXJzb3Igc3RhdGVcclxuICAgICAgY29uc3QgcmFuZ2UgPSBxdWlsbFJlZi5jdXJyZW50LmdldFNlbGVjdGlvbih0cnVlKTtcclxuXHJcbiAgICAgIC8vIEluc2VydCB0ZW1wb3JhcnkgbG9hZGluZyBwbGFjZWhvbGRlciBpbWFnZVxyXG4gICAgICBxdWlsbFJlZi5jdXJyZW50Lmluc2VydEVtYmVkKHJhbmdlLmluZGV4LCAnaW1hZ2UnLCBgJHt3aW5kb3cubG9jYXRpb24ub3JpZ2lufS9pbWFnZXMvbG9hZGVycy9wbGFjZWhvbGRlci5naWZgKTtcclxuXHJcbiAgICAgIC8vIE1vdmUgY3Vyc29yIHRvIHJpZ2h0IHNpZGUgb2YgaW1hZ2UgKGVhc2llciB0byBjb250aW51ZSB0eXBpbmcpXHJcbiAgICAgIHF1aWxsUmVmLmN1cnJlbnQuc2V0U2VsZWN0aW9uKHJhbmdlLmluZGV4ICsgMSk7XHJcblxyXG4gICAgICB0cnkge1xyXG4gICAgICAgIC8vIENhbGwgdGhlIEFQSSB0byB1cGxvYWQgdGhlIGltYWdlXHJcbiAgICAgICAgY29uc3QgaW1hZ2VVUkwgPSBhd2FpdCBhcGlQb3N0TmV3c0ltYWdlKGZvcm1EYXRhKTtcclxuXHJcbiAgICAgICAgLy8gUmVtb3ZlIHBsYWNlaG9sZGVyIGltYWdlXHJcbiAgICAgICAgcXVpbGxSZWYuY3VycmVudC5kZWxldGVUZXh0KHJhbmdlLmluZGV4LCAxKTtcclxuXHJcbiAgICAgICAgLy8gSW5zZXJ0IHVwbG9hZGVkIGltYWdlXHJcbiAgICAgICAgcXVpbGxSZWYuY3VycmVudC5pbnNlcnRFbWJlZChyYW5nZS5pbmRleCwgJ2ltYWdlJywgaW1hZ2VVUkwpO1xyXG4gICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIHVwbG9hZGluZyBpbWFnZScsIGVycm9yKTtcclxuICAgICAgICAvLyBIYW5kbGUgZXJyb3IgaWYgbmVlZGVkXHJcbiAgICAgIH1cclxuICAgIH07XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1lZGl0b3JcIj5cclxuICAgICAge0pTT04uc3RyaW5naWZ5KGVkaXRvckh0bWwpfVxyXG4gICAgICA8aHIgLz5cclxuICAgICAgPFJlYWN0UXVpbGxcclxuICAgICAgICByZWY9e3F1aWxsUmVmfVxyXG4gICAgICAgIHZhbHVlPXtlZGl0b3JIdG1sfVxyXG4gICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgcGxhY2Vob2xkZXI9XCJUeXBlIHNvbWV0aGluZy4uLlwiXHJcbiAgICAgICAgbW9kdWxlcz17e1xyXG4gICAgICAgICAgdG9vbGJhcjoge1xyXG4gICAgICAgICAgICBjb250YWluZXI6IFtcclxuICAgICAgICAgICAgICBbeyBoZWFkZXI6ICcxJyB9LCB7IGhlYWRlcjogJzInIH0sIHsgaGVhZGVyOiBbMywgNCwgNSwgNl0gfSwgeyBmb250OiBbXSB9XSxcclxuICAgICAgICAgICAgICBbeyBzaXplOiBbXSB9XSxcclxuICAgICAgICAgICAgICBbJ2JvbGQnLCAnaXRhbGljJywgJ3VuZGVybGluZScsICdzdHJpa2UnLCAnYmxvY2txdW90ZSddLFxyXG4gICAgICAgICAgICAgIFt7IGxpc3Q6ICdvcmRlcmVkJyB9LCB7IGxpc3Q6ICdidWxsZXQnIH1dLFxyXG4gICAgICAgICAgICAgIFsnbGluaycsICd2aWRlbyddLFxyXG4gICAgICAgICAgICAgIFsnbGluaycsICdpbWFnZScsICd2aWRlbyddLFxyXG4gICAgICAgICAgICAgIFsnY2xlYW4nXSxcclxuICAgICAgICAgICAgICBbJ2NvZGUtYmxvY2snXSxcclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgaGFuZGxlcnM6IHtcclxuICAgICAgICAgICAgICBpbWFnZTogaW1hZ2VIYW5kbGVyLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICB9fVxyXG4gICAgICAvPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE15Q29tcG9uZW50O1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZVJlZiIsImR5bmFtaWMiLCJSZWFjdFF1aWxsIiwic3NyIiwiTXlDb21wb25lbnQiLCJlZGl0b3JIdG1sIiwic2V0RWRpdG9ySHRtbCIsInF1aWxsUmVmIiwiaGFuZGxlQ2hhbmdlIiwiaHRtbCIsImFwaVBvc3ROZXdzSW1hZ2UiLCJmb3JtRGF0YSIsImVycm9yIiwiY29uc29sZSIsImltYWdlSGFuZGxlciIsImlucHV0IiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50Iiwic2V0QXR0cmlidXRlIiwiY2xpY2siLCJvbmNoYW5nZSIsImZpbGUiLCJmaWxlcyIsIkZvcm1EYXRhIiwiYXBwZW5kIiwiY3VycmVudCIsInJhbmdlIiwiZ2V0U2VsZWN0aW9uIiwiaW5zZXJ0RW1iZWQiLCJpbmRleCIsIndpbmRvdyIsImxvY2F0aW9uIiwib3JpZ2luIiwic2V0U2VsZWN0aW9uIiwiaW1hZ2VVUkwiLCJkZWxldGVUZXh0IiwiZGl2IiwiY2xhc3NOYW1lIiwiSlNPTiIsInN0cmluZ2lmeSIsImhyIiwicmVmIiwidmFsdWUiLCJvbkNoYW5nZSIsInBsYWNlaG9sZGVyIiwibW9kdWxlcyIsInRvb2xiYXIiLCJjb250YWluZXIiLCJoZWFkZXIiLCJmb250Iiwic2l6ZSIsImxpc3QiLCJoYW5kbGVycyIsImltYWdlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/test.js\n"));

/***/ })

});