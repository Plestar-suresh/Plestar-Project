"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/leaves/page",{

/***/ "(app-pages-browser)/./app/components/PermissionForm/PermissionForm.tsx":
/*!**********************************************************!*\
  !*** ./app/components/PermissionForm/PermissionForm.tsx ***!
  \**********************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_datepicker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-datepicker */ \"(app-pages-browser)/../node_modules/react-datepicker/dist/react-datepicker.min.js\");\n/* harmony import */ var react_datepicker__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_datepicker__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_datepicker_dist_react_datepicker_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-datepicker/dist/react-datepicker.css */ \"(app-pages-browser)/../node_modules/react-datepicker/dist/react-datepicker.css\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/axios/lib/axios.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst PermissionForm = ()=>{\n    _s();\n    const [profileName, setProfileName] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [reason, setReason] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [selectedDate, setSelectedDate] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const today = new Date();\n    const tomorrow = new Date();\n    tomorrow.setDate(tomorrow.getDate() + 1);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const fetchData = async ()=>{\n            try {\n                const response = await axios__WEBPACK_IMPORTED_MODULE_3__[\"default\"].post(\"http://localhost:3500/getProfile\", {\n                    \"employeeid\": window.sessionStorage.getItem(\"LoginedEmployeeId\"),\n                    \"id\": window.sessionStorage.getItem(\"LoginedId\")\n                });\n                if (response.data && response.data.response === \"success\") {\n                    setProfileName(response.data.data[0].fullname);\n                }\n            } catch (error) {\n                console.error(\"Error get profile:\", error);\n            }\n        };\n        fetchData();\n    }, []);\n    const handleDateChange = (date)=>{\n        setSelectedDate(date);\n    };\n    const handleSubmit = (e)=>{\n        e.preventDefault();\n    // Handle form submission\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n        className: \"w-96\",\n        onSubmit: handleSubmit,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                htmlFor: \"name\",\n                className: \"block mt-4 text-sm font-medium text-gray-600\",\n                children: \"Name\"\n            }, void 0, false, {\n                fileName: \"C:\\\\xampp\\\\htdocs\\\\Plestar-Project\\\\emp\\\\app\\\\components\\\\PermissionForm\\\\PermissionForm.tsx\",\n                lineNumber: 42,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                type: \"text\",\n                id: \"name\",\n                name: \"name\",\n                className: \"mt-1 p-2 border border-gray-300 rounded-md w-full\"\n            }, void 0, false, {\n                fileName: \"C:\\\\xampp\\\\htdocs\\\\Plestar-Project\\\\emp\\\\app\\\\components\\\\PermissionForm\\\\PermissionForm.tsx\",\n                lineNumber: 45,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                htmlFor: \"confirmPassword\",\n                className: \"block mt-4 text-sm font-medium text-gray-600\",\n                children: \"Shift\"\n            }, void 0, false, {\n                fileName: \"C:\\\\xampp\\\\htdocs\\\\Plestar-Project\\\\emp\\\\app\\\\components\\\\PermissionForm\\\\PermissionForm.tsx\",\n                lineNumber: 54,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"select\", {\n                /* value={selectedShift}\r\n            onChange={(e) => setSelectedShift(e.target.value)} */ className: \"mt-1 p-2 border border-gray-300 rounded-md w-full\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                        value: \"\",\n                        children: \"Select a shift\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\xampp\\\\htdocs\\\\Plestar-Project\\\\emp\\\\app\\\\components\\\\PermissionForm\\\\PermissionForm.tsx\",\n                        lineNumber: 62,\n                        columnNumber: 13\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                        value: \"Morning\",\n                        children: \"Morning\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\xampp\\\\htdocs\\\\Plestar-Project\\\\emp\\\\app\\\\components\\\\PermissionForm\\\\PermissionForm.tsx\",\n                        lineNumber: 63,\n                        columnNumber: 13\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                        value: \"Afternoon\",\n                        children: \"Afternoon\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\xampp\\\\htdocs\\\\Plestar-Project\\\\emp\\\\app\\\\components\\\\PermissionForm\\\\PermissionForm.tsx\",\n                        lineNumber: 64,\n                        columnNumber: 13\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                        value: \"Night\",\n                        children: \"General\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\xampp\\\\htdocs\\\\Plestar-Project\\\\emp\\\\app\\\\components\\\\PermissionForm\\\\PermissionForm.tsx\",\n                        lineNumber: 65,\n                        columnNumber: 13\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\xampp\\\\htdocs\\\\Plestar-Project\\\\emp\\\\app\\\\components\\\\PermissionForm\\\\PermissionForm.tsx\",\n                lineNumber: 57,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex mt-3\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex flex-col mr-4\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                className: \"block text-sm font-medium text-gray-700\",\n                                children: \"Date\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\xampp\\\\htdocs\\\\Plestar-Project\\\\emp\\\\app\\\\components\\\\PermissionForm\\\\PermissionForm.tsx\",\n                                lineNumber: 71,\n                                columnNumber: 17\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_datepicker__WEBPACK_IMPORTED_MODULE_4___default()), {\n                                selected: selectedDate,\n                                onChange: handleDateChange,\n                                className: \"input mt-1 p-2 border border-gray-300 rounded-md w-full\",\n                                minDate: today,\n                                maxDate: tomorrow\n                            }, void 0, false, {\n                                fileName: \"C:\\\\xampp\\\\htdocs\\\\Plestar-Project\\\\emp\\\\app\\\\components\\\\PermissionForm\\\\PermissionForm.tsx\",\n                                lineNumber: 72,\n                                columnNumber: 17\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\xampp\\\\htdocs\\\\Plestar-Project\\\\emp\\\\app\\\\components\\\\PermissionForm\\\\PermissionForm.tsx\",\n                        lineNumber: 70,\n                        columnNumber: 13\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex flex-col\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                className: \"block text-sm font-medium text-gray-700\",\n                                children: \"Time\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\xampp\\\\htdocs\\\\Plestar-Project\\\\emp\\\\app\\\\components\\\\PermissionForm\\\\PermissionForm.tsx\",\n                                lineNumber: 81,\n                                columnNumber: 17\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"select\", {\n                                /* value={selectedShift}\r\n                    onChange={(e) => setSelectedShift(e.target.value)} */ className: \"mt-1 p-2 border border-gray-300 rounded-md w-full\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                        value: \"\",\n                                        children: \"Select a Time\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\xampp\\\\htdocs\\\\Plestar-Project\\\\emp\\\\app\\\\components\\\\PermissionForm\\\\PermissionForm.tsx\",\n                                        lineNumber: 87,\n                                        columnNumber: 21\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                        value: \"Morning\",\n                                        children: \"Morning - 6:30 AM\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\xampp\\\\htdocs\\\\Plestar-Project\\\\emp\\\\app\\\\components\\\\PermissionForm\\\\PermissionForm.tsx\",\n                                        lineNumber: 88,\n                                        columnNumber: 21\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                        value: \"Afternoon\",\n                                        children: \"Afternoon - 12:30 PM\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\xampp\\\\htdocs\\\\Plestar-Project\\\\emp\\\\app\\\\components\\\\PermissionForm\\\\PermissionForm.tsx\",\n                                        lineNumber: 89,\n                                        columnNumber: 21\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                        value: \"Night\",\n                                        children: \"Evening - 6:30 PM\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\xampp\\\\htdocs\\\\Plestar-Project\\\\emp\\\\app\\\\components\\\\PermissionForm\\\\PermissionForm.tsx\",\n                                        lineNumber: 90,\n                                        columnNumber: 21\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\xampp\\\\htdocs\\\\Plestar-Project\\\\emp\\\\app\\\\components\\\\PermissionForm\\\\PermissionForm.tsx\",\n                                lineNumber: 82,\n                                columnNumber: 17\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\xampp\\\\htdocs\\\\Plestar-Project\\\\emp\\\\app\\\\components\\\\PermissionForm\\\\PermissionForm.tsx\",\n                        lineNumber: 80,\n                        columnNumber: 13\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\xampp\\\\htdocs\\\\Plestar-Project\\\\emp\\\\app\\\\components\\\\PermissionForm\\\\PermissionForm.tsx\",\n                lineNumber: 69,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-col mt-3\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        className: \"block text-sm font-medium text-gray-700\",\n                        children: \"Reason for Permission\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\xampp\\\\htdocs\\\\Plestar-Project\\\\emp\\\\app\\\\components\\\\PermissionForm\\\\PermissionForm.tsx\",\n                        lineNumber: 96,\n                        columnNumber: 13\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                        value: reason,\n                        onChange: (e)=>setReason(e.target.value),\n                        className: \"mt-1 p-2 border border-gray-300 rounded-md w-full\",\n                        rows: 4\n                    }, void 0, false, {\n                        fileName: \"C:\\\\xampp\\\\htdocs\\\\Plestar-Project\\\\emp\\\\app\\\\components\\\\PermissionForm\\\\PermissionForm.tsx\",\n                        lineNumber: 97,\n                        columnNumber: 13\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\xampp\\\\htdocs\\\\Plestar-Project\\\\emp\\\\app\\\\components\\\\PermissionForm\\\\PermissionForm.tsx\",\n                lineNumber: 95,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                type: \"submit\",\n                className: \"mt-4 w-full bg-blue-500 font-semibold text-white p-2 rounded-md hover:bg-blue-600\",\n                children: \"Apply\"\n            }, void 0, false, {\n                fileName: \"C:\\\\xampp\\\\htdocs\\\\Plestar-Project\\\\emp\\\\app\\\\components\\\\PermissionForm\\\\PermissionForm.tsx\",\n                lineNumber: 105,\n                columnNumber: 9\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\xampp\\\\htdocs\\\\Plestar-Project\\\\emp\\\\app\\\\components\\\\PermissionForm\\\\PermissionForm.tsx\",\n        lineNumber: 41,\n        columnNumber: 7\n    }, undefined);\n};\n_s(PermissionForm, \"mKUPRGKjtK+aKNe+4zWsoCG19UM=\");\n_c = PermissionForm;\n/* harmony default export */ __webpack_exports__[\"default\"] = (PermissionForm);\nvar _c;\n$RefreshReg$(_c, \"PermissionForm\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9jb21wb25lbnRzL1Blcm1pc3Npb25Gb3JtL1Blcm1pc3Npb25Gb3JtLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQThEO0FBQ3BCO0FBQ1U7QUFDMUI7QUFFMUIsTUFBTUssaUJBQWlCOztJQUNyQixNQUFNLENBQUNDLGFBQWFDLGVBQWUsR0FBR04sK0NBQVFBLENBQUM7SUFDL0MsTUFBTSxDQUFDTyxRQUFRQyxVQUFVLEdBQUdSLCtDQUFRQSxDQUFDO0lBQ3JDLE1BQU0sQ0FBQ1MsY0FBY0MsZ0JBQWdCLEdBQUdWLCtDQUFRQSxDQUFjO0lBRTlELE1BQU1XLFFBQVEsSUFBSUM7SUFDbEIsTUFBTUMsV0FBVyxJQUFJRDtJQUNyQkMsU0FBU0MsT0FBTyxDQUFDRCxTQUFTRSxPQUFPLEtBQUs7SUFDdENkLGdEQUFTQSxDQUFDO1FBQ1IsTUFBTWUsWUFBWTtZQUNoQixJQUFJO2dCQUNGLE1BQU1DLFdBQVcsTUFBTWQsNkNBQUtBLENBQUNlLElBQUksQ0FBQyxvQ0FBbUM7b0JBQUMsY0FBYUMsT0FBT0MsY0FBYyxDQUFDQyxPQUFPLENBQUM7b0JBQXNCLE1BQUtGLE9BQU9DLGNBQWMsQ0FBQ0MsT0FBTyxDQUFDO2dCQUFZO2dCQUV0TCxJQUFJSixTQUFTSyxJQUFJLElBQUlMLFNBQVNLLElBQUksQ0FBQ0wsUUFBUSxLQUFLLFdBQVc7b0JBQ3pEWCxlQUFnQlcsU0FBU0ssSUFBSSxDQUFDQSxJQUFJLENBQUMsRUFBRSxDQUFDQyxRQUFRO2dCQUNoRDtZQUVGLEVBQUUsT0FBT0MsT0FBTztnQkFDZEMsUUFBUUQsS0FBSyxDQUFDLHNCQUFzQkE7WUFDdEM7UUFDRjtRQUVBUjtJQUNGLEdBQUcsRUFBRTtJQUVMLE1BQU1VLG1CQUFtQixDQUFDQztRQUN4QmpCLGdCQUFnQmlCO0lBQ2xCO0lBRUEsTUFBTUMsZUFBZSxDQUFDQztRQUNwQkEsRUFBRUMsY0FBYztJQUNoQix5QkFBeUI7SUFDM0I7SUFFQSxxQkFDSSw4REFBQ0M7UUFBS0MsV0FBVTtRQUFPQyxVQUFVTDs7MEJBQy9CLDhEQUFDTTtnQkFBTUMsU0FBUTtnQkFBT0gsV0FBVTswQkFBK0M7Ozs7OzswQkFHL0UsOERBQUNJO2dCQUNDQyxNQUFLO2dCQUNMQyxJQUFHO2dCQUNIQyxNQUFLO2dCQUNMUCxXQUFVOzs7Ozs7MEJBS1osOERBQUNFO2dCQUFNQyxTQUFRO2dCQUFrQkgsV0FBVTswQkFBK0M7Ozs7OzswQkFHMUYsOERBQUNRO2dCQUNHOytEQUNtRCxHQUNuRFIsV0FBVTs7a0NBRVYsOERBQUNTO3dCQUFPQyxPQUFNO2tDQUFHOzs7Ozs7a0NBQ2pCLDhEQUFDRDt3QkFBT0MsT0FBTTtrQ0FBVTs7Ozs7O2tDQUN4Qiw4REFBQ0Q7d0JBQU9DLE9BQU07a0NBQVk7Ozs7OztrQ0FDMUIsOERBQUNEO3dCQUFPQyxPQUFNO2tDQUFROzs7Ozs7Ozs7Ozs7MEJBSTFCLDhEQUFDQztnQkFBSVgsV0FBVTs7a0NBQ1gsOERBQUNXO3dCQUFJWCxXQUFVOzswQ0FDWCw4REFBQ0U7Z0NBQU1GLFdBQVU7MENBQTBDOzs7Ozs7MENBQzNELDhEQUFDOUIseURBQVVBO2dDQUNYMEMsVUFBVW5DO2dDQUNWb0MsVUFBVW5CO2dDQUNWTSxXQUFVO2dDQUNWYyxTQUFTbkM7Z0NBQ1RvQyxTQUFTbEM7Ozs7Ozs7Ozs7OztrQ0FHYiw4REFBQzhCO3dCQUFJWCxXQUFVOzswQ0FDWCw4REFBQ0U7Z0NBQU1GLFdBQVU7MENBQTBDOzs7Ozs7MENBQzNELDhEQUFDUTtnQ0FDRzt1RUFDbUQsR0FDbkRSLFdBQVU7O2tEQUVWLDhEQUFDUzt3Q0FBT0MsT0FBTTtrREFBRzs7Ozs7O2tEQUNqQiw4REFBQ0Q7d0NBQU9DLE9BQU07a0RBQVU7Ozs7OztrREFDeEIsOERBQUNEO3dDQUFPQyxPQUFNO2tEQUFZOzs7Ozs7a0RBQzFCLDhEQUFDRDt3Q0FBT0MsT0FBTTtrREFBUTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzBCQUtsQyw4REFBQ0M7Z0JBQUlYLFdBQVU7O2tDQUNYLDhEQUFDRTt3QkFBTUYsV0FBVTtrQ0FBMEM7Ozs7OztrQ0FDM0QsOERBQUNnQjt3QkFDRE4sT0FBT25DO3dCQUNQc0MsVUFBVSxDQUFDaEIsSUFBTXJCLFVBQVVxQixFQUFFb0IsTUFBTSxDQUFDUCxLQUFLO3dCQUN6Q1YsV0FBVTt3QkFDVmtCLE1BQU07Ozs7Ozs7Ozs7OzswQkFJViw4REFBQ0M7Z0JBQ0NkLE1BQUs7Z0JBQ0xMLFdBQVU7MEJBQ1g7Ozs7Ozs7Ozs7OztBQU1UO0dBNUdNNUI7S0FBQUE7QUE4R04sK0RBQWVBLGNBQWNBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2NvbXBvbmVudHMvUGVybWlzc2lvbkZvcm0vUGVybWlzc2lvbkZvcm0udHN4PzQ3NWMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IEZvcm1FdmVudCwgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IERhdGVQaWNrZXIgZnJvbSAncmVhY3QtZGF0ZXBpY2tlcic7XHJcbmltcG9ydCAncmVhY3QtZGF0ZXBpY2tlci9kaXN0L3JlYWN0LWRhdGVwaWNrZXIuY3NzJzsgXHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcblxyXG5jb25zdCBQZXJtaXNzaW9uRm9ybSA9ICgpID0+IHtcclxuICBjb25zdCBbcHJvZmlsZU5hbWUsIHNldFByb2ZpbGVOYW1lXSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBbcmVhc29uLCBzZXRSZWFzb25dID0gdXNlU3RhdGUoJycpO1xyXG4gIGNvbnN0IFtzZWxlY3RlZERhdGUsIHNldFNlbGVjdGVkRGF0ZV0gPSB1c2VTdGF0ZTxEYXRlIHwgbnVsbD4obnVsbCk7XHJcblxyXG4gIGNvbnN0IHRvZGF5ID0gbmV3IERhdGUoKTtcclxuICBjb25zdCB0b21vcnJvdyA9IG5ldyBEYXRlKCk7XHJcbiAgdG9tb3Jyb3cuc2V0RGF0ZSh0b21vcnJvdy5nZXREYXRlKCkgKyAxKTtcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgZmV0Y2hEYXRhID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MucG9zdCgnaHR0cDovL2xvY2FsaG9zdDozNTAwL2dldFByb2ZpbGUnLHsnZW1wbG95ZWVpZCc6d2luZG93LnNlc3Npb25TdG9yYWdlLmdldEl0ZW0oXCJMb2dpbmVkRW1wbG95ZWVJZFwiKSwgJ2lkJzp3aW5kb3cuc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbShcIkxvZ2luZWRJZFwiKX0pO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGlmIChyZXNwb25zZS5kYXRhICYmIHJlc3BvbnNlLmRhdGEucmVzcG9uc2UgPT09ICdzdWNjZXNzJykge1xyXG4gICAgICAgICAgc2V0UHJvZmlsZU5hbWUoIHJlc3BvbnNlLmRhdGEuZGF0YVswXS5mdWxsbmFtZSwpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBnZXQgcHJvZmlsZTonLCBlcnJvcik7XHJcbiAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgZmV0Y2hEYXRhKCk7XHJcbiAgfSwgW10pO1xyXG5cclxuICBjb25zdCBoYW5kbGVEYXRlQ2hhbmdlID0gKGRhdGU6IERhdGUgfCBudWxsKSA9PiB7XHJcbiAgICBzZXRTZWxlY3RlZERhdGUoZGF0ZSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlU3VibWl0ID0gKGU6IEZvcm1FdmVudDxIVE1MRm9ybUVsZW1lbnQ+KSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAvLyBIYW5kbGUgZm9ybSBzdWJtaXNzaW9uXHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgICAgPGZvcm0gY2xhc3NOYW1lPVwidy05NlwiIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9PlxyXG4gICAgICAgIDxsYWJlbCBodG1sRm9yPVwibmFtZVwiIGNsYXNzTmFtZT1cImJsb2NrIG10LTQgdGV4dC1zbSBmb250LW1lZGl1bSB0ZXh0LWdyYXktNjAwXCI+XHJcbiAgICAgICAgICBOYW1lXHJcbiAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICA8aW5wdXRcclxuICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgIGlkPVwibmFtZVwiXHJcbiAgICAgICAgICBuYW1lPVwibmFtZVwiXHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJtdC0xIHAtMiBib3JkZXIgYm9yZGVyLWdyYXktMzAwIHJvdW5kZWQtbWQgdy1mdWxsXCJcclxuICAgICAgICAgIC8qIHZhbHVlPXtwYXNzd29yZH1cclxuICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2VQYXNzd29yZH0gKi9cclxuICAgICAgICAvPlxyXG5cclxuICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImNvbmZpcm1QYXNzd29yZFwiIGNsYXNzTmFtZT1cImJsb2NrIG10LTQgdGV4dC1zbSBmb250LW1lZGl1bSB0ZXh0LWdyYXktNjAwXCI+XHJcbiAgICAgICAgICBTaGlmdFxyXG4gICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgPHNlbGVjdFxyXG4gICAgICAgICAgICAvKiB2YWx1ZT17c2VsZWN0ZWRTaGlmdH1cclxuICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRTZWxlY3RlZFNoaWZ0KGUudGFyZ2V0LnZhbHVlKX0gKi9cclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwibXQtMSBwLTIgYm9yZGVyIGJvcmRlci1ncmF5LTMwMCByb3VuZGVkLW1kIHctZnVsbFwiXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlwiPlNlbGVjdCBhIHNoaWZ0PC9vcHRpb24+XHJcbiAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJNb3JuaW5nXCI+TW9ybmluZzwvb3B0aW9uPlxyXG4gICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiQWZ0ZXJub29uXCI+QWZ0ZXJub29uPC9vcHRpb24+XHJcbiAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJOaWdodFwiPkdlbmVyYWw8L29wdGlvbj5cclxuICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICB7Lyoge2NvbmZpcm1QYXNzd29yZEVycm9yICYmIDxwIGNsYXNzTmFtZT1cInRleHQtcmVkLTUwMCB0ZXh0LXNtXCI+e2NvbmZpcm1QYXNzd29yZEVycm9yfTwvcD59ICovfVxyXG5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleCBtdC0zJz5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIG1yLTRcIj5cclxuICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJibG9jayB0ZXh0LXNtIGZvbnQtbWVkaXVtIHRleHQtZ3JheS03MDBcIj5EYXRlPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgIDxEYXRlUGlja2VyXHJcbiAgICAgICAgICAgICAgICBzZWxlY3RlZD17c2VsZWN0ZWREYXRlfVxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZURhdGVDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpbnB1dCBtdC0xIHAtMiBib3JkZXIgYm9yZGVyLWdyYXktMzAwIHJvdW5kZWQtbWQgdy1mdWxsXCJcclxuICAgICAgICAgICAgICAgIG1pbkRhdGU9e3RvZGF5fVxyXG4gICAgICAgICAgICAgICAgbWF4RGF0ZT17dG9tb3Jyb3d9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sXCI+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiYmxvY2sgdGV4dC1zbSBmb250LW1lZGl1bSB0ZXh0LWdyYXktNzAwXCI+VGltZTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8c2VsZWN0XHJcbiAgICAgICAgICAgICAgICAgICAgLyogdmFsdWU9e3NlbGVjdGVkU2hpZnR9XHJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRTZWxlY3RlZFNoaWZ0KGUudGFyZ2V0LnZhbHVlKX0gKi9cclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtdC0xIHAtMiBib3JkZXIgYm9yZGVyLWdyYXktMzAwIHJvdW5kZWQtbWQgdy1mdWxsXCJcclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlwiPlNlbGVjdCBhIFRpbWU8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiTW9ybmluZ1wiPk1vcm5pbmcgLSA2OjMwIEFNPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIkFmdGVybm9vblwiPkFmdGVybm9vbiAtIDEyOjMwIFBNPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIk5pZ2h0XCI+RXZlbmluZyAtIDY6MzAgUE08L29wdGlvbj5cclxuICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICBcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgbXQtM1wiPlxyXG4gICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiYmxvY2sgdGV4dC1zbSBmb250LW1lZGl1bSB0ZXh0LWdyYXktNzAwXCI+UmVhc29uIGZvciBQZXJtaXNzaW9uPC9sYWJlbD5cclxuICAgICAgICAgICAgPHRleHRhcmVhXHJcbiAgICAgICAgICAgIHZhbHVlPXtyZWFzb259XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0UmVhc29uKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwibXQtMSBwLTIgYm9yZGVyIGJvcmRlci1ncmF5LTMwMCByb3VuZGVkLW1kIHctZnVsbFwiXHJcbiAgICAgICAgICAgIHJvd3M9ezR9IC8vIFNldCB0aGUgbnVtYmVyIG9mIHZpc2libGUgcm93c1xyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIHsvKiB7cGFzc3dvcmRFcnJvciAmJiA8cCBjbGFzc05hbWU9XCJ0ZXh0LXJlZC01MDAgdGV4dC1zbVwiPntwYXNzd29yZEVycm9yfTwvcD59ICovfVxyXG4gICAgICAgIDxidXR0b25cclxuICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwibXQtNCB3LWZ1bGwgYmctYmx1ZS01MDAgZm9udC1zZW1pYm9sZCB0ZXh0LXdoaXRlIHAtMiByb3VuZGVkLW1kIGhvdmVyOmJnLWJsdWUtNjAwXCJcclxuICAgICAgICA+XHJcbiAgICAgICAgICBBcHBseVxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgIHsvKiB7RXJyb3IgJiYgPHAgY2xhc3NOYW1lPVwidGV4dC1yZWQtNTAwIHRleHQtc21cIj57RXJyb3J9PC9wPn0gKi99XHJcbiAgICAgIDwvZm9ybT5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUGVybWlzc2lvbkZvcm07XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiRGF0ZVBpY2tlciIsImF4aW9zIiwiUGVybWlzc2lvbkZvcm0iLCJwcm9maWxlTmFtZSIsInNldFByb2ZpbGVOYW1lIiwicmVhc29uIiwic2V0UmVhc29uIiwic2VsZWN0ZWREYXRlIiwic2V0U2VsZWN0ZWREYXRlIiwidG9kYXkiLCJEYXRlIiwidG9tb3Jyb3ciLCJzZXREYXRlIiwiZ2V0RGF0ZSIsImZldGNoRGF0YSIsInJlc3BvbnNlIiwicG9zdCIsIndpbmRvdyIsInNlc3Npb25TdG9yYWdlIiwiZ2V0SXRlbSIsImRhdGEiLCJmdWxsbmFtZSIsImVycm9yIiwiY29uc29sZSIsImhhbmRsZURhdGVDaGFuZ2UiLCJkYXRlIiwiaGFuZGxlU3VibWl0IiwiZSIsInByZXZlbnREZWZhdWx0IiwiZm9ybSIsImNsYXNzTmFtZSIsIm9uU3VibWl0IiwibGFiZWwiLCJodG1sRm9yIiwiaW5wdXQiLCJ0eXBlIiwiaWQiLCJuYW1lIiwic2VsZWN0Iiwib3B0aW9uIiwidmFsdWUiLCJkaXYiLCJzZWxlY3RlZCIsIm9uQ2hhbmdlIiwibWluRGF0ZSIsIm1heERhdGUiLCJ0ZXh0YXJlYSIsInRhcmdldCIsInJvd3MiLCJidXR0b24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/components/PermissionForm/PermissionForm.tsx\n"));

/***/ })

});