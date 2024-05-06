"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/react-onclickoutside";
exports.ids = ["vendor-chunks/react-onclickoutside"];
exports.modules = {

/***/ "(ssr)/../node_modules/react-onclickoutside/dist/react-onclickoutside.es.js":
/*!****************************************************************************!*\
  !*** ../node_modules/react-onclickoutside/dist/react-onclickoutside.es.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   IGNORE_CLASS_NAME: () => (/* binding */ IGNORE_CLASS_NAME),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"(ssr)/./node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ \"(ssr)/./node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react-dom.js\");\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);\nfunction _inheritsLoose(subClass, superClass) {\r\n  subClass.prototype = Object.create(superClass.prototype);\r\n  subClass.prototype.constructor = subClass;\r\n\r\n  _setPrototypeOf(subClass, superClass);\r\n}\r\n\r\nfunction _setPrototypeOf(o, p) {\r\n  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {\r\n    o.__proto__ = p;\r\n    return o;\r\n  };\r\n\r\n  return _setPrototypeOf(o, p);\r\n}\r\n\r\nfunction _objectWithoutPropertiesLoose(source, excluded) {\r\n  if (source == null) return {};\r\n  var target = {};\r\n  var sourceKeys = Object.keys(source);\r\n  var key, i;\r\n\r\n  for (i = 0; i < sourceKeys.length; i++) {\r\n    key = sourceKeys[i];\r\n    if (excluded.indexOf(key) >= 0) continue;\r\n    target[key] = source[key];\r\n  }\r\n\r\n  return target;\r\n}\r\n\r\nfunction _assertThisInitialized(self) {\r\n  if (self === void 0) {\r\n    throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\");\r\n  }\r\n\r\n  return self;\r\n}/**\r\n * Check whether some DOM node is our Component's node.\r\n */\r\nfunction isNodeFound(current, componentNode, ignoreClass) {\r\n  if (current === componentNode) {\r\n    return true;\r\n  } // SVG <use/> elements do not technically reside in the rendered DOM, so\r\n  // they do not have classList directly, but they offer a link to their\r\n  // corresponding element, which can have classList. This extra check is for\r\n  // that case.\r\n  // See: http://www.w3.org/TR/SVG11/struct.html#InterfaceSVGUseElement\r\n  // Discussion: https://github.com/Pomax/react-onclickoutside/pull/17\r\n\r\n\r\n  if (current.correspondingElement) {\r\n    return current.correspondingElement.classList.contains(ignoreClass);\r\n  }\r\n\r\n  return current.classList.contains(ignoreClass);\r\n}\r\n/**\r\n * Try to find our node in a hierarchy of nodes, returning the document\r\n * node as highest node if our node is not found in the path up.\r\n */\r\n\r\nfunction findHighest(current, componentNode, ignoreClass) {\r\n  if (current === componentNode) {\r\n    return true;\r\n  } // If source=local then this event came from 'somewhere'\r\n  // inside and should be ignored. We could handle this with\r\n  // a layered approach, too, but that requires going back to\r\n  // thinking in terms of Dom node nesting, running counter\r\n  // to React's 'you shouldn't care about the DOM' philosophy.\r\n  // Also cover shadowRoot node by checking current.host\r\n\r\n\r\n  while (current.parentNode || current.host) {\r\n    // Only check normal node without shadowRoot\r\n    if (current.parentNode && isNodeFound(current, componentNode, ignoreClass)) {\r\n      return true;\r\n    }\r\n\r\n    current = current.parentNode || current.host;\r\n  }\r\n\r\n  return current;\r\n}\r\n/**\r\n * Check if the browser scrollbar was clicked\r\n */\r\n\r\nfunction clickedScrollbar(evt) {\r\n  return document.documentElement.clientWidth <= evt.clientX || document.documentElement.clientHeight <= evt.clientY;\r\n}// ideally will get replaced with external dep\r\n// when rafrex/detect-passive-events#4 and rafrex/detect-passive-events#5 get merged in\r\nvar testPassiveEventSupport = function testPassiveEventSupport() {\r\n  if (typeof window === 'undefined' || typeof window.addEventListener !== 'function') {\r\n    return;\r\n  }\r\n\r\n  var passive = false;\r\n  var options = Object.defineProperty({}, 'passive', {\r\n    get: function get() {\r\n      passive = true;\r\n    }\r\n  });\r\n\r\n  var noop = function noop() {};\r\n\r\n  window.addEventListener('testPassiveEventSupport', noop, options);\r\n  window.removeEventListener('testPassiveEventSupport', noop, options);\r\n  return passive;\r\n};function autoInc(seed) {\r\n  if (seed === void 0) {\r\n    seed = 0;\r\n  }\r\n\r\n  return function () {\r\n    return ++seed;\r\n  };\r\n}\r\n\r\nvar uid = autoInc();var passiveEventSupport;\r\nvar handlersMap = {};\r\nvar enabledInstances = {};\r\nvar touchEvents = ['touchstart', 'touchmove'];\r\nvar IGNORE_CLASS_NAME = 'ignore-react-onclickoutside';\r\n/**\r\n * Options for addEventHandler and removeEventHandler\r\n */\r\n\r\nfunction getEventHandlerOptions(instance, eventName) {\r\n  var handlerOptions = {};\r\n  var isTouchEvent = touchEvents.indexOf(eventName) !== -1;\r\n\r\n  if (isTouchEvent && passiveEventSupport) {\r\n    handlerOptions.passive = !instance.props.preventDefault;\r\n  }\r\n\r\n  return handlerOptions;\r\n}\r\n/**\r\n * This function generates the HOC function that you'll use\r\n * in order to impart onOutsideClick listening to an\r\n * arbitrary component. It gets called at the end of the\r\n * bootstrapping code to yield an instance of the\r\n * onClickOutsideHOC function defined inside setupHOC().\r\n */\r\n\r\n\r\nfunction onClickOutsideHOC(WrappedComponent, config) {\r\n  var _class, _temp;\r\n\r\n  var componentName = WrappedComponent.displayName || WrappedComponent.name || 'Component';\r\n  return _temp = _class = /*#__PURE__*/function (_Component) {\r\n    _inheritsLoose(onClickOutside, _Component);\r\n\r\n    function onClickOutside(props) {\r\n      var _this;\r\n\r\n      _this = _Component.call(this, props) || this;\r\n\r\n      _this.__outsideClickHandler = function (event) {\r\n        if (typeof _this.__clickOutsideHandlerProp === 'function') {\r\n          _this.__clickOutsideHandlerProp(event);\r\n\r\n          return;\r\n        }\r\n\r\n        var instance = _this.getInstance();\r\n\r\n        if (typeof instance.props.handleClickOutside === 'function') {\r\n          instance.props.handleClickOutside(event);\r\n          return;\r\n        }\r\n\r\n        if (typeof instance.handleClickOutside === 'function') {\r\n          instance.handleClickOutside(event);\r\n          return;\r\n        }\r\n\r\n        throw new Error(\"WrappedComponent: \" + componentName + \" lacks a handleClickOutside(event) function for processing outside click events.\");\r\n      };\r\n\r\n      _this.__getComponentNode = function () {\r\n        var instance = _this.getInstance();\r\n\r\n        if (config && typeof config.setClickOutsideRef === 'function') {\r\n          return config.setClickOutsideRef()(instance);\r\n        }\r\n\r\n        if (typeof instance.setClickOutsideRef === 'function') {\r\n          return instance.setClickOutsideRef();\r\n        }\r\n\r\n        return (0,react_dom__WEBPACK_IMPORTED_MODULE_1__.findDOMNode)(instance);\r\n      };\r\n\r\n      _this.enableOnClickOutside = function () {\r\n        if (typeof document === 'undefined' || enabledInstances[_this._uid]) {\r\n          return;\r\n        }\r\n\r\n        if (typeof passiveEventSupport === 'undefined') {\r\n          passiveEventSupport = testPassiveEventSupport();\r\n        }\r\n\r\n        enabledInstances[_this._uid] = true;\r\n        var events = _this.props.eventTypes;\r\n\r\n        if (!events.forEach) {\r\n          events = [events];\r\n        }\r\n\r\n        handlersMap[_this._uid] = function (event) {\r\n          if (_this.componentNode === null) return;\r\n\r\n          if (_this.props.preventDefault) {\r\n            event.preventDefault();\r\n          }\r\n\r\n          if (_this.props.stopPropagation) {\r\n            event.stopPropagation();\r\n          }\r\n\r\n          if (_this.props.excludeScrollbar && clickedScrollbar(event)) return;\r\n          var current = event.composed && event.composedPath && event.composedPath().shift() || event.target;\r\n\r\n          if (findHighest(current, _this.componentNode, _this.props.outsideClickIgnoreClass) !== document) {\r\n            return;\r\n          }\r\n\r\n          _this.__outsideClickHandler(event);\r\n        };\r\n\r\n        events.forEach(function (eventName) {\r\n          document.addEventListener(eventName, handlersMap[_this._uid], getEventHandlerOptions(_assertThisInitialized(_this), eventName));\r\n        });\r\n      };\r\n\r\n      _this.disableOnClickOutside = function () {\r\n        delete enabledInstances[_this._uid];\r\n        var fn = handlersMap[_this._uid];\r\n\r\n        if (fn && typeof document !== 'undefined') {\r\n          var events = _this.props.eventTypes;\r\n\r\n          if (!events.forEach) {\r\n            events = [events];\r\n          }\r\n\r\n          events.forEach(function (eventName) {\r\n            return document.removeEventListener(eventName, fn, getEventHandlerOptions(_assertThisInitialized(_this), eventName));\r\n          });\r\n          delete handlersMap[_this._uid];\r\n        }\r\n      };\r\n\r\n      _this.getRef = function (ref) {\r\n        return _this.instanceRef = ref;\r\n      };\r\n\r\n      _this._uid = uid();\r\n      return _this;\r\n    }\r\n    /**\r\n     * Access the WrappedComponent's instance.\r\n     */\r\n\r\n\r\n    var _proto = onClickOutside.prototype;\r\n\r\n    _proto.getInstance = function getInstance() {\r\n      if (WrappedComponent.prototype && !WrappedComponent.prototype.isReactComponent) {\r\n        return this;\r\n      }\r\n\r\n      var ref = this.instanceRef;\r\n      return ref.getInstance ? ref.getInstance() : ref;\r\n    };\r\n\r\n    /**\r\n     * Add click listeners to the current document,\r\n     * linked to this component's state.\r\n     */\r\n    _proto.componentDidMount = function componentDidMount() {\r\n      // If we are in an environment without a DOM such\r\n      // as shallow rendering or snapshots then we exit\r\n      // early to prevent any unhandled errors being thrown.\r\n      if (typeof document === 'undefined' || !document.createElement) {\r\n        return;\r\n      }\r\n\r\n      var instance = this.getInstance();\r\n\r\n      if (config && typeof config.handleClickOutside === 'function') {\r\n        this.__clickOutsideHandlerProp = config.handleClickOutside(instance);\r\n\r\n        if (typeof this.__clickOutsideHandlerProp !== 'function') {\r\n          throw new Error(\"WrappedComponent: \" + componentName + \" lacks a function for processing outside click events specified by the handleClickOutside config option.\");\r\n        }\r\n      }\r\n\r\n      this.componentNode = this.__getComponentNode(); // return early so we dont initiate onClickOutside\r\n\r\n      if (this.props.disableOnClickOutside) return;\r\n      this.enableOnClickOutside();\r\n    };\r\n\r\n    _proto.componentDidUpdate = function componentDidUpdate() {\r\n      this.componentNode = this.__getComponentNode();\r\n    }\r\n    /**\r\n     * Remove all document's event listeners for this component\r\n     */\r\n    ;\r\n\r\n    _proto.componentWillUnmount = function componentWillUnmount() {\r\n      this.disableOnClickOutside();\r\n    }\r\n    /**\r\n     * Can be called to explicitly enable event listening\r\n     * for clicks and touches outside of this element.\r\n     */\r\n    ;\r\n\r\n    /**\r\n     * Pass-through render\r\n     */\r\n    _proto.render = function render() {\r\n      // eslint-disable-next-line no-unused-vars\r\n      var _this$props = this.props;\r\n          _this$props.excludeScrollbar;\r\n          var props = _objectWithoutPropertiesLoose(_this$props, [\"excludeScrollbar\"]);\r\n\r\n      if (WrappedComponent.prototype && WrappedComponent.prototype.isReactComponent) {\r\n        props.ref = this.getRef;\r\n      } else {\r\n        props.wrappedRef = this.getRef;\r\n      }\r\n\r\n      props.disableOnClickOutside = this.disableOnClickOutside;\r\n      props.enableOnClickOutside = this.enableOnClickOutside;\r\n      return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(WrappedComponent, props);\r\n    };\r\n\r\n    return onClickOutside;\r\n  }(react__WEBPACK_IMPORTED_MODULE_0__.Component), _class.displayName = \"OnClickOutside(\" + componentName + \")\", _class.defaultProps = {\r\n    eventTypes: ['mousedown', 'touchstart'],\r\n    excludeScrollbar: config && config.excludeScrollbar || false,\r\n    outsideClickIgnoreClass: IGNORE_CLASS_NAME,\r\n    preventDefault: false,\r\n    stopPropagation: false\r\n  }, _class.getClass = function () {\r\n    return WrappedComponent.getClass ? WrappedComponent.getClass() : WrappedComponent;\r\n  }, _temp;\r\n}/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (onClickOutsideHOC);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi4vbm9kZV9tb2R1bGVzL3JlYWN0LW9uY2xpY2tvdXRzaWRlL2Rpc3QvcmVhY3Qtb25jbGlja291dHNpZGUuZXMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQWdGO0FBQ2hGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWMsdUJBQXVCO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0NBQXdDO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsc0RBQVc7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzREFBc0Q7QUFDdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLG9EQUFhO0FBQzFCO0FBQ0E7QUFDQTtBQUNBLEdBQUcsQ0FBQyw0Q0FBUztBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0gsQ0FBQyxpRUFBZSxpQkFBaUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lbXBsb3llZS8uLi9ub2RlX21vZHVsZXMvcmVhY3Qtb25jbGlja291dHNpZGUvZGlzdC9yZWFjdC1vbmNsaWNrb3V0c2lkZS5lcy5qcz81NmVmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Y3JlYXRlRWxlbWVudCxDb21wb25lbnR9ZnJvbSdyZWFjdCc7aW1wb3J0IHtmaW5kRE9NTm9kZX1mcm9tJ3JlYWN0LWRvbSc7ZnVuY3Rpb24gX2luaGVyaXRzTG9vc2Uoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHtcclxuICBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MucHJvdG90eXBlKTtcclxuICBzdWJDbGFzcy5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBzdWJDbGFzcztcclxuXHJcbiAgX3NldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKTtcclxufVxyXG5cclxuZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHtcclxuICBfc2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHwgZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHtcclxuICAgIG8uX19wcm90b19fID0gcDtcclxuICAgIHJldHVybiBvO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiBfc2V0UHJvdG90eXBlT2YobywgcCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKHNvdXJjZSwgZXhjbHVkZWQpIHtcclxuICBpZiAoc291cmNlID09IG51bGwpIHJldHVybiB7fTtcclxuICB2YXIgdGFyZ2V0ID0ge307XHJcbiAgdmFyIHNvdXJjZUtleXMgPSBPYmplY3Qua2V5cyhzb3VyY2UpO1xyXG4gIHZhciBrZXksIGk7XHJcblxyXG4gIGZvciAoaSA9IDA7IGkgPCBzb3VyY2VLZXlzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICBrZXkgPSBzb3VyY2VLZXlzW2ldO1xyXG4gICAgaWYgKGV4Y2x1ZGVkLmluZGV4T2Yoa2V5KSA+PSAwKSBjb250aW51ZTtcclxuICAgIHRhcmdldFtrZXldID0gc291cmNlW2tleV07XHJcbiAgfVxyXG5cclxuICByZXR1cm4gdGFyZ2V0O1xyXG59XHJcblxyXG5mdW5jdGlvbiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpIHtcclxuICBpZiAoc2VsZiA9PT0gdm9pZCAwKSB7XHJcbiAgICB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gc2VsZjtcclxufS8qKlxyXG4gKiBDaGVjayB3aGV0aGVyIHNvbWUgRE9NIG5vZGUgaXMgb3VyIENvbXBvbmVudCdzIG5vZGUuXHJcbiAqL1xyXG5mdW5jdGlvbiBpc05vZGVGb3VuZChjdXJyZW50LCBjb21wb25lbnROb2RlLCBpZ25vcmVDbGFzcykge1xyXG4gIGlmIChjdXJyZW50ID09PSBjb21wb25lbnROb2RlKSB7XHJcbiAgICByZXR1cm4gdHJ1ZTtcclxuICB9IC8vIFNWRyA8dXNlLz4gZWxlbWVudHMgZG8gbm90IHRlY2huaWNhbGx5IHJlc2lkZSBpbiB0aGUgcmVuZGVyZWQgRE9NLCBzb1xyXG4gIC8vIHRoZXkgZG8gbm90IGhhdmUgY2xhc3NMaXN0IGRpcmVjdGx5LCBidXQgdGhleSBvZmZlciBhIGxpbmsgdG8gdGhlaXJcclxuICAvLyBjb3JyZXNwb25kaW5nIGVsZW1lbnQsIHdoaWNoIGNhbiBoYXZlIGNsYXNzTGlzdC4gVGhpcyBleHRyYSBjaGVjayBpcyBmb3JcclxuICAvLyB0aGF0IGNhc2UuXHJcbiAgLy8gU2VlOiBodHRwOi8vd3d3LnczLm9yZy9UUi9TVkcxMS9zdHJ1Y3QuaHRtbCNJbnRlcmZhY2VTVkdVc2VFbGVtZW50XHJcbiAgLy8gRGlzY3Vzc2lvbjogaHR0cHM6Ly9naXRodWIuY29tL1BvbWF4L3JlYWN0LW9uY2xpY2tvdXRzaWRlL3B1bGwvMTdcclxuXHJcblxyXG4gIGlmIChjdXJyZW50LmNvcnJlc3BvbmRpbmdFbGVtZW50KSB7XHJcbiAgICByZXR1cm4gY3VycmVudC5jb3JyZXNwb25kaW5nRWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoaWdub3JlQ2xhc3MpO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIGN1cnJlbnQuY2xhc3NMaXN0LmNvbnRhaW5zKGlnbm9yZUNsYXNzKTtcclxufVxyXG4vKipcclxuICogVHJ5IHRvIGZpbmQgb3VyIG5vZGUgaW4gYSBoaWVyYXJjaHkgb2Ygbm9kZXMsIHJldHVybmluZyB0aGUgZG9jdW1lbnRcclxuICogbm9kZSBhcyBoaWdoZXN0IG5vZGUgaWYgb3VyIG5vZGUgaXMgbm90IGZvdW5kIGluIHRoZSBwYXRoIHVwLlxyXG4gKi9cclxuXHJcbmZ1bmN0aW9uIGZpbmRIaWdoZXN0KGN1cnJlbnQsIGNvbXBvbmVudE5vZGUsIGlnbm9yZUNsYXNzKSB7XHJcbiAgaWYgKGN1cnJlbnQgPT09IGNvbXBvbmVudE5vZGUpIHtcclxuICAgIHJldHVybiB0cnVlO1xyXG4gIH0gLy8gSWYgc291cmNlPWxvY2FsIHRoZW4gdGhpcyBldmVudCBjYW1lIGZyb20gJ3NvbWV3aGVyZSdcclxuICAvLyBpbnNpZGUgYW5kIHNob3VsZCBiZSBpZ25vcmVkLiBXZSBjb3VsZCBoYW5kbGUgdGhpcyB3aXRoXHJcbiAgLy8gYSBsYXllcmVkIGFwcHJvYWNoLCB0b28sIGJ1dCB0aGF0IHJlcXVpcmVzIGdvaW5nIGJhY2sgdG9cclxuICAvLyB0aGlua2luZyBpbiB0ZXJtcyBvZiBEb20gbm9kZSBuZXN0aW5nLCBydW5uaW5nIGNvdW50ZXJcclxuICAvLyB0byBSZWFjdCdzICd5b3Ugc2hvdWxkbid0IGNhcmUgYWJvdXQgdGhlIERPTScgcGhpbG9zb3BoeS5cclxuICAvLyBBbHNvIGNvdmVyIHNoYWRvd1Jvb3Qgbm9kZSBieSBjaGVja2luZyBjdXJyZW50Lmhvc3RcclxuXHJcblxyXG4gIHdoaWxlIChjdXJyZW50LnBhcmVudE5vZGUgfHwgY3VycmVudC5ob3N0KSB7XHJcbiAgICAvLyBPbmx5IGNoZWNrIG5vcm1hbCBub2RlIHdpdGhvdXQgc2hhZG93Um9vdFxyXG4gICAgaWYgKGN1cnJlbnQucGFyZW50Tm9kZSAmJiBpc05vZGVGb3VuZChjdXJyZW50LCBjb21wb25lbnROb2RlLCBpZ25vcmVDbGFzcykpIHtcclxuICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgY3VycmVudCA9IGN1cnJlbnQucGFyZW50Tm9kZSB8fCBjdXJyZW50Lmhvc3Q7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gY3VycmVudDtcclxufVxyXG4vKipcclxuICogQ2hlY2sgaWYgdGhlIGJyb3dzZXIgc2Nyb2xsYmFyIHdhcyBjbGlja2VkXHJcbiAqL1xyXG5cclxuZnVuY3Rpb24gY2xpY2tlZFNjcm9sbGJhcihldnQpIHtcclxuICByZXR1cm4gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudFdpZHRoIDw9IGV2dC5jbGllbnRYIHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRIZWlnaHQgPD0gZXZ0LmNsaWVudFk7XHJcbn0vLyBpZGVhbGx5IHdpbGwgZ2V0IHJlcGxhY2VkIHdpdGggZXh0ZXJuYWwgZGVwXHJcbi8vIHdoZW4gcmFmcmV4L2RldGVjdC1wYXNzaXZlLWV2ZW50cyM0IGFuZCByYWZyZXgvZGV0ZWN0LXBhc3NpdmUtZXZlbnRzIzUgZ2V0IG1lcmdlZCBpblxyXG52YXIgdGVzdFBhc3NpdmVFdmVudFN1cHBvcnQgPSBmdW5jdGlvbiB0ZXN0UGFzc2l2ZUV2ZW50U3VwcG9ydCgpIHtcclxuICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcgfHwgdHlwZW9mIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyICE9PSAnZnVuY3Rpb24nKSB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICB2YXIgcGFzc2l2ZSA9IGZhbHNlO1xyXG4gIHZhciBvcHRpb25zID0gT2JqZWN0LmRlZmluZVByb3BlcnR5KHt9LCAncGFzc2l2ZScsIHtcclxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xyXG4gICAgICBwYXNzaXZlID0gdHJ1ZTtcclxuICAgIH1cclxuICB9KTtcclxuXHJcbiAgdmFyIG5vb3AgPSBmdW5jdGlvbiBub29wKCkge307XHJcblxyXG4gIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCd0ZXN0UGFzc2l2ZUV2ZW50U3VwcG9ydCcsIG5vb3AsIG9wdGlvbnMpO1xyXG4gIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCd0ZXN0UGFzc2l2ZUV2ZW50U3VwcG9ydCcsIG5vb3AsIG9wdGlvbnMpO1xyXG4gIHJldHVybiBwYXNzaXZlO1xyXG59O2Z1bmN0aW9uIGF1dG9JbmMoc2VlZCkge1xyXG4gIGlmIChzZWVkID09PSB2b2lkIDApIHtcclxuICAgIHNlZWQgPSAwO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcclxuICAgIHJldHVybiArK3NlZWQ7XHJcbiAgfTtcclxufVxyXG5cclxudmFyIHVpZCA9IGF1dG9JbmMoKTt2YXIgcGFzc2l2ZUV2ZW50U3VwcG9ydDtcclxudmFyIGhhbmRsZXJzTWFwID0ge307XHJcbnZhciBlbmFibGVkSW5zdGFuY2VzID0ge307XHJcbnZhciB0b3VjaEV2ZW50cyA9IFsndG91Y2hzdGFydCcsICd0b3VjaG1vdmUnXTtcclxudmFyIElHTk9SRV9DTEFTU19OQU1FID0gJ2lnbm9yZS1yZWFjdC1vbmNsaWNrb3V0c2lkZSc7XHJcbi8qKlxyXG4gKiBPcHRpb25zIGZvciBhZGRFdmVudEhhbmRsZXIgYW5kIHJlbW92ZUV2ZW50SGFuZGxlclxyXG4gKi9cclxuXHJcbmZ1bmN0aW9uIGdldEV2ZW50SGFuZGxlck9wdGlvbnMoaW5zdGFuY2UsIGV2ZW50TmFtZSkge1xyXG4gIHZhciBoYW5kbGVyT3B0aW9ucyA9IHt9O1xyXG4gIHZhciBpc1RvdWNoRXZlbnQgPSB0b3VjaEV2ZW50cy5pbmRleE9mKGV2ZW50TmFtZSkgIT09IC0xO1xyXG5cclxuICBpZiAoaXNUb3VjaEV2ZW50ICYmIHBhc3NpdmVFdmVudFN1cHBvcnQpIHtcclxuICAgIGhhbmRsZXJPcHRpb25zLnBhc3NpdmUgPSAhaW5zdGFuY2UucHJvcHMucHJldmVudERlZmF1bHQ7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gaGFuZGxlck9wdGlvbnM7XHJcbn1cclxuLyoqXHJcbiAqIFRoaXMgZnVuY3Rpb24gZ2VuZXJhdGVzIHRoZSBIT0MgZnVuY3Rpb24gdGhhdCB5b3UnbGwgdXNlXHJcbiAqIGluIG9yZGVyIHRvIGltcGFydCBvbk91dHNpZGVDbGljayBsaXN0ZW5pbmcgdG8gYW5cclxuICogYXJiaXRyYXJ5IGNvbXBvbmVudC4gSXQgZ2V0cyBjYWxsZWQgYXQgdGhlIGVuZCBvZiB0aGVcclxuICogYm9vdHN0cmFwcGluZyBjb2RlIHRvIHlpZWxkIGFuIGluc3RhbmNlIG9mIHRoZVxyXG4gKiBvbkNsaWNrT3V0c2lkZUhPQyBmdW5jdGlvbiBkZWZpbmVkIGluc2lkZSBzZXR1cEhPQygpLlxyXG4gKi9cclxuXHJcblxyXG5mdW5jdGlvbiBvbkNsaWNrT3V0c2lkZUhPQyhXcmFwcGVkQ29tcG9uZW50LCBjb25maWcpIHtcclxuICB2YXIgX2NsYXNzLCBfdGVtcDtcclxuXHJcbiAgdmFyIGNvbXBvbmVudE5hbWUgPSBXcmFwcGVkQ29tcG9uZW50LmRpc3BsYXlOYW1lIHx8IFdyYXBwZWRDb21wb25lbnQubmFtZSB8fCAnQ29tcG9uZW50JztcclxuICByZXR1cm4gX3RlbXAgPSBfY2xhc3MgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKF9Db21wb25lbnQpIHtcclxuICAgIF9pbmhlcml0c0xvb3NlKG9uQ2xpY2tPdXRzaWRlLCBfQ29tcG9uZW50KTtcclxuXHJcbiAgICBmdW5jdGlvbiBvbkNsaWNrT3V0c2lkZShwcm9wcykge1xyXG4gICAgICB2YXIgX3RoaXM7XHJcblxyXG4gICAgICBfdGhpcyA9IF9Db21wb25lbnQuY2FsbCh0aGlzLCBwcm9wcykgfHwgdGhpcztcclxuXHJcbiAgICAgIF90aGlzLl9fb3V0c2lkZUNsaWNrSGFuZGxlciA9IGZ1bmN0aW9uIChldmVudCkge1xyXG4gICAgICAgIGlmICh0eXBlb2YgX3RoaXMuX19jbGlja091dHNpZGVIYW5kbGVyUHJvcCA9PT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgICAgICAgX3RoaXMuX19jbGlja091dHNpZGVIYW5kbGVyUHJvcChldmVudCk7XHJcblxyXG4gICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdmFyIGluc3RhbmNlID0gX3RoaXMuZ2V0SW5zdGFuY2UoKTtcclxuXHJcbiAgICAgICAgaWYgKHR5cGVvZiBpbnN0YW5jZS5wcm9wcy5oYW5kbGVDbGlja091dHNpZGUgPT09ICdmdW5jdGlvbicpIHtcclxuICAgICAgICAgIGluc3RhbmNlLnByb3BzLmhhbmRsZUNsaWNrT3V0c2lkZShldmVudCk7XHJcbiAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodHlwZW9mIGluc3RhbmNlLmhhbmRsZUNsaWNrT3V0c2lkZSA9PT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgICAgICAgaW5zdGFuY2UuaGFuZGxlQ2xpY2tPdXRzaWRlKGV2ZW50KTtcclxuICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIldyYXBwZWRDb21wb25lbnQ6IFwiICsgY29tcG9uZW50TmFtZSArIFwiIGxhY2tzIGEgaGFuZGxlQ2xpY2tPdXRzaWRlKGV2ZW50KSBmdW5jdGlvbiBmb3IgcHJvY2Vzc2luZyBvdXRzaWRlIGNsaWNrIGV2ZW50cy5cIik7XHJcbiAgICAgIH07XHJcblxyXG4gICAgICBfdGhpcy5fX2dldENvbXBvbmVudE5vZGUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIGluc3RhbmNlID0gX3RoaXMuZ2V0SW5zdGFuY2UoKTtcclxuXHJcbiAgICAgICAgaWYgKGNvbmZpZyAmJiB0eXBlb2YgY29uZmlnLnNldENsaWNrT3V0c2lkZVJlZiA9PT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgICAgICAgcmV0dXJuIGNvbmZpZy5zZXRDbGlja091dHNpZGVSZWYoKShpbnN0YW5jZSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodHlwZW9mIGluc3RhbmNlLnNldENsaWNrT3V0c2lkZVJlZiA9PT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgICAgICAgcmV0dXJuIGluc3RhbmNlLnNldENsaWNrT3V0c2lkZVJlZigpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIGZpbmRET01Ob2RlKGluc3RhbmNlKTtcclxuICAgICAgfTtcclxuXHJcbiAgICAgIF90aGlzLmVuYWJsZU9uQ2xpY2tPdXRzaWRlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09ICd1bmRlZmluZWQnIHx8IGVuYWJsZWRJbnN0YW5jZXNbX3RoaXMuX3VpZF0pIHtcclxuICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0eXBlb2YgcGFzc2l2ZUV2ZW50U3VwcG9ydCA9PT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgICAgIHBhc3NpdmVFdmVudFN1cHBvcnQgPSB0ZXN0UGFzc2l2ZUV2ZW50U3VwcG9ydCgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZW5hYmxlZEluc3RhbmNlc1tfdGhpcy5fdWlkXSA9IHRydWU7XHJcbiAgICAgICAgdmFyIGV2ZW50cyA9IF90aGlzLnByb3BzLmV2ZW50VHlwZXM7XHJcblxyXG4gICAgICAgIGlmICghZXZlbnRzLmZvckVhY2gpIHtcclxuICAgICAgICAgIGV2ZW50cyA9IFtldmVudHNdO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaGFuZGxlcnNNYXBbX3RoaXMuX3VpZF0gPSBmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgICAgICAgIGlmIChfdGhpcy5jb21wb25lbnROb2RlID09PSBudWxsKSByZXR1cm47XHJcblxyXG4gICAgICAgICAgaWYgKF90aGlzLnByb3BzLnByZXZlbnREZWZhdWx0KSB7XHJcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgaWYgKF90aGlzLnByb3BzLnN0b3BQcm9wYWdhdGlvbikge1xyXG4gICAgICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBpZiAoX3RoaXMucHJvcHMuZXhjbHVkZVNjcm9sbGJhciAmJiBjbGlja2VkU2Nyb2xsYmFyKGV2ZW50KSkgcmV0dXJuO1xyXG4gICAgICAgICAgdmFyIGN1cnJlbnQgPSBldmVudC5jb21wb3NlZCAmJiBldmVudC5jb21wb3NlZFBhdGggJiYgZXZlbnQuY29tcG9zZWRQYXRoKCkuc2hpZnQoKSB8fCBldmVudC50YXJnZXQ7XHJcblxyXG4gICAgICAgICAgaWYgKGZpbmRIaWdoZXN0KGN1cnJlbnQsIF90aGlzLmNvbXBvbmVudE5vZGUsIF90aGlzLnByb3BzLm91dHNpZGVDbGlja0lnbm9yZUNsYXNzKSAhPT0gZG9jdW1lbnQpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIF90aGlzLl9fb3V0c2lkZUNsaWNrSGFuZGxlcihldmVudCk7XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgZXZlbnRzLmZvckVhY2goZnVuY3Rpb24gKGV2ZW50TmFtZSkge1xyXG4gICAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihldmVudE5hbWUsIGhhbmRsZXJzTWFwW190aGlzLl91aWRdLCBnZXRFdmVudEhhbmRsZXJPcHRpb25zKF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpLCBldmVudE5hbWUpKTtcclxuICAgICAgICB9KTtcclxuICAgICAgfTtcclxuXHJcbiAgICAgIF90aGlzLmRpc2FibGVPbkNsaWNrT3V0c2lkZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBkZWxldGUgZW5hYmxlZEluc3RhbmNlc1tfdGhpcy5fdWlkXTtcclxuICAgICAgICB2YXIgZm4gPSBoYW5kbGVyc01hcFtfdGhpcy5fdWlkXTtcclxuXHJcbiAgICAgICAgaWYgKGZuICYmIHR5cGVvZiBkb2N1bWVudCAhPT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgICAgIHZhciBldmVudHMgPSBfdGhpcy5wcm9wcy5ldmVudFR5cGVzO1xyXG5cclxuICAgICAgICAgIGlmICghZXZlbnRzLmZvckVhY2gpIHtcclxuICAgICAgICAgICAgZXZlbnRzID0gW2V2ZW50c107XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgZXZlbnRzLmZvckVhY2goZnVuY3Rpb24gKGV2ZW50TmFtZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudE5hbWUsIGZuLCBnZXRFdmVudEhhbmRsZXJPcHRpb25zKF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpLCBldmVudE5hbWUpKTtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgZGVsZXRlIGhhbmRsZXJzTWFwW190aGlzLl91aWRdO1xyXG4gICAgICAgIH1cclxuICAgICAgfTtcclxuXHJcbiAgICAgIF90aGlzLmdldFJlZiA9IGZ1bmN0aW9uIChyZWYpIHtcclxuICAgICAgICByZXR1cm4gX3RoaXMuaW5zdGFuY2VSZWYgPSByZWY7XHJcbiAgICAgIH07XHJcblxyXG4gICAgICBfdGhpcy5fdWlkID0gdWlkKCk7XHJcbiAgICAgIHJldHVybiBfdGhpcztcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogQWNjZXNzIHRoZSBXcmFwcGVkQ29tcG9uZW50J3MgaW5zdGFuY2UuXHJcbiAgICAgKi9cclxuXHJcblxyXG4gICAgdmFyIF9wcm90byA9IG9uQ2xpY2tPdXRzaWRlLnByb3RvdHlwZTtcclxuXHJcbiAgICBfcHJvdG8uZ2V0SW5zdGFuY2UgPSBmdW5jdGlvbiBnZXRJbnN0YW5jZSgpIHtcclxuICAgICAgaWYgKFdyYXBwZWRDb21wb25lbnQucHJvdG90eXBlICYmICFXcmFwcGVkQ29tcG9uZW50LnByb3RvdHlwZS5pc1JlYWN0Q29tcG9uZW50KSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHZhciByZWYgPSB0aGlzLmluc3RhbmNlUmVmO1xyXG4gICAgICByZXR1cm4gcmVmLmdldEluc3RhbmNlID8gcmVmLmdldEluc3RhbmNlKCkgOiByZWY7XHJcbiAgICB9O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQWRkIGNsaWNrIGxpc3RlbmVycyB0byB0aGUgY3VycmVudCBkb2N1bWVudCxcclxuICAgICAqIGxpbmtlZCB0byB0aGlzIGNvbXBvbmVudCdzIHN0YXRlLlxyXG4gICAgICovXHJcbiAgICBfcHJvdG8uY29tcG9uZW50RGlkTW91bnQgPSBmdW5jdGlvbiBjb21wb25lbnREaWRNb3VudCgpIHtcclxuICAgICAgLy8gSWYgd2UgYXJlIGluIGFuIGVudmlyb25tZW50IHdpdGhvdXQgYSBET00gc3VjaFxyXG4gICAgICAvLyBhcyBzaGFsbG93IHJlbmRlcmluZyBvciBzbmFwc2hvdHMgdGhlbiB3ZSBleGl0XHJcbiAgICAgIC8vIGVhcmx5IHRvIHByZXZlbnQgYW55IHVuaGFuZGxlZCBlcnJvcnMgYmVpbmcgdGhyb3duLlxyXG4gICAgICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSAndW5kZWZpbmVkJyB8fCAhZG9jdW1lbnQuY3JlYXRlRWxlbWVudCkge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG5cclxuICAgICAgdmFyIGluc3RhbmNlID0gdGhpcy5nZXRJbnN0YW5jZSgpO1xyXG5cclxuICAgICAgaWYgKGNvbmZpZyAmJiB0eXBlb2YgY29uZmlnLmhhbmRsZUNsaWNrT3V0c2lkZSA9PT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgICAgIHRoaXMuX19jbGlja091dHNpZGVIYW5kbGVyUHJvcCA9IGNvbmZpZy5oYW5kbGVDbGlja091dHNpZGUoaW5zdGFuY2UpO1xyXG5cclxuICAgICAgICBpZiAodHlwZW9mIHRoaXMuX19jbGlja091dHNpZGVIYW5kbGVyUHJvcCAhPT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiV3JhcHBlZENvbXBvbmVudDogXCIgKyBjb21wb25lbnROYW1lICsgXCIgbGFja3MgYSBmdW5jdGlvbiBmb3IgcHJvY2Vzc2luZyBvdXRzaWRlIGNsaWNrIGV2ZW50cyBzcGVjaWZpZWQgYnkgdGhlIGhhbmRsZUNsaWNrT3V0c2lkZSBjb25maWcgb3B0aW9uLlwiKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHRoaXMuY29tcG9uZW50Tm9kZSA9IHRoaXMuX19nZXRDb21wb25lbnROb2RlKCk7IC8vIHJldHVybiBlYXJseSBzbyB3ZSBkb250IGluaXRpYXRlIG9uQ2xpY2tPdXRzaWRlXHJcblxyXG4gICAgICBpZiAodGhpcy5wcm9wcy5kaXNhYmxlT25DbGlja091dHNpZGUpIHJldHVybjtcclxuICAgICAgdGhpcy5lbmFibGVPbkNsaWNrT3V0c2lkZSgpO1xyXG4gICAgfTtcclxuXHJcbiAgICBfcHJvdG8uY29tcG9uZW50RGlkVXBkYXRlID0gZnVuY3Rpb24gY29tcG9uZW50RGlkVXBkYXRlKCkge1xyXG4gICAgICB0aGlzLmNvbXBvbmVudE5vZGUgPSB0aGlzLl9fZ2V0Q29tcG9uZW50Tm9kZSgpO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBSZW1vdmUgYWxsIGRvY3VtZW50J3MgZXZlbnQgbGlzdGVuZXJzIGZvciB0aGlzIGNvbXBvbmVudFxyXG4gICAgICovXHJcbiAgICA7XHJcblxyXG4gICAgX3Byb3RvLmNvbXBvbmVudFdpbGxVbm1vdW50ID0gZnVuY3Rpb24gY29tcG9uZW50V2lsbFVubW91bnQoKSB7XHJcbiAgICAgIHRoaXMuZGlzYWJsZU9uQ2xpY2tPdXRzaWRlKCk7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIENhbiBiZSBjYWxsZWQgdG8gZXhwbGljaXRseSBlbmFibGUgZXZlbnQgbGlzdGVuaW5nXHJcbiAgICAgKiBmb3IgY2xpY2tzIGFuZCB0b3VjaGVzIG91dHNpZGUgb2YgdGhpcyBlbGVtZW50LlxyXG4gICAgICovXHJcbiAgICA7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBQYXNzLXRocm91Z2ggcmVuZGVyXHJcbiAgICAgKi9cclxuICAgIF9wcm90by5yZW5kZXIgPSBmdW5jdGlvbiByZW5kZXIoKSB7XHJcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtdmFyc1xyXG4gICAgICB2YXIgX3RoaXMkcHJvcHMgPSB0aGlzLnByb3BzO1xyXG4gICAgICAgICAgX3RoaXMkcHJvcHMuZXhjbHVkZVNjcm9sbGJhcjtcclxuICAgICAgICAgIHZhciBwcm9wcyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKF90aGlzJHByb3BzLCBbXCJleGNsdWRlU2Nyb2xsYmFyXCJdKTtcclxuXHJcbiAgICAgIGlmIChXcmFwcGVkQ29tcG9uZW50LnByb3RvdHlwZSAmJiBXcmFwcGVkQ29tcG9uZW50LnByb3RvdHlwZS5pc1JlYWN0Q29tcG9uZW50KSB7XHJcbiAgICAgICAgcHJvcHMucmVmID0gdGhpcy5nZXRSZWY7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcHJvcHMud3JhcHBlZFJlZiA9IHRoaXMuZ2V0UmVmO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBwcm9wcy5kaXNhYmxlT25DbGlja091dHNpZGUgPSB0aGlzLmRpc2FibGVPbkNsaWNrT3V0c2lkZTtcclxuICAgICAgcHJvcHMuZW5hYmxlT25DbGlja091dHNpZGUgPSB0aGlzLmVuYWJsZU9uQ2xpY2tPdXRzaWRlO1xyXG4gICAgICByZXR1cm4gY3JlYXRlRWxlbWVudChXcmFwcGVkQ29tcG9uZW50LCBwcm9wcyk7XHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiBvbkNsaWNrT3V0c2lkZTtcclxuICB9KENvbXBvbmVudCksIF9jbGFzcy5kaXNwbGF5TmFtZSA9IFwiT25DbGlja091dHNpZGUoXCIgKyBjb21wb25lbnROYW1lICsgXCIpXCIsIF9jbGFzcy5kZWZhdWx0UHJvcHMgPSB7XHJcbiAgICBldmVudFR5cGVzOiBbJ21vdXNlZG93bicsICd0b3VjaHN0YXJ0J10sXHJcbiAgICBleGNsdWRlU2Nyb2xsYmFyOiBjb25maWcgJiYgY29uZmlnLmV4Y2x1ZGVTY3JvbGxiYXIgfHwgZmFsc2UsXHJcbiAgICBvdXRzaWRlQ2xpY2tJZ25vcmVDbGFzczogSUdOT1JFX0NMQVNTX05BTUUsXHJcbiAgICBwcmV2ZW50RGVmYXVsdDogZmFsc2UsXHJcbiAgICBzdG9wUHJvcGFnYXRpb246IGZhbHNlXHJcbiAgfSwgX2NsYXNzLmdldENsYXNzID0gZnVuY3Rpb24gKCkge1xyXG4gICAgcmV0dXJuIFdyYXBwZWRDb21wb25lbnQuZ2V0Q2xhc3MgPyBXcmFwcGVkQ29tcG9uZW50LmdldENsYXNzKCkgOiBXcmFwcGVkQ29tcG9uZW50O1xyXG4gIH0sIF90ZW1wO1xyXG59ZXhwb3J0IGRlZmF1bHQgb25DbGlja091dHNpZGVIT0M7ZXhwb3J0e0lHTk9SRV9DTEFTU19OQU1FfTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/../node_modules/react-onclickoutside/dist/react-onclickoutside.es.js\n");

/***/ })

};
;