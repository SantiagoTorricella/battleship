/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/style.css":
/*!********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/style.css ***!
  \********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `* {\n  pad: 0px;\n  margin: 0px;\n}\nbody {\n  width: 100%;\n  height: 100vh;\n}\nheader {\n  width: 100%;\n  height: 10%;\n  background-color: lightblue;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\nmain {\n  height: 85%;\n  background-color: lightcyan;\n  display: flex;\n  justify-content: space-evenly;\n  align-items: center;\n}\n\nsection {\n  height: 80%;\n  width: 40%;\n  background-color: lightgoldenrodyellow;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.container {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.player-board,\n.ai-board,\n.setup-board {\n  height: 70%;\n  width: 90%;\n  background-color: darkblue;\n  justify-self: center;\n  display: flex;\n  flex-wrap: wrap;\n}\n\nfooter {\n  height: 5%;\n  background-color: lightskyblue;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n/* ELEMENTS */\n\n.cell {\n  cursor: pointer;\n  box-sizing: border-box;\n  width: 10%;\n  height: 10%;\n  border: 1px solid black;\n}\n\n.initial-modal[open] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.initial-modal {\n  background-color: lightcyan;\n  border: none;\n  width: 50%;\n  height: 50%;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  overflow-y: hidden;\n}\n\nbutton {\n  cursor: pointer;\n  text-decoration: none;\n  width: 8em;\n  height: 2em;\n  margin-top: 1em;\n}\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://my-webpack-project/./src/styles/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://my-webpack-project/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://my-webpack-project/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/styles/style.css":
/*!******************************!*\
  !*** ./src/styles/style.css ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://my-webpack-project/./src/styles/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://my-webpack-project/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://my-webpack-project/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://my-webpack-project/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://my-webpack-project/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://my-webpack-project/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://my-webpack-project/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/ai.js":
/*!*******************!*\
  !*** ./src/ai.js ***!
  \*******************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   aiFactory: () => (/* binding */ aiFactory)\n/* harmony export */ });\n/* harmony import */ var _factorys_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./factorys.js */ \"./src/factorys.js\");\n\n\n\n\nfunction aiFactory() {\n  return {\n    turn: false,\n    attackedArray: [],\n    makeRandomNumber: function makeRandomNumber() {\n      var x = Math.floor(Math.random() * _factorys_js__WEBPACK_IMPORTED_MODULE_0__.rows);\n      var y = Math.floor(Math.random() * _factorys_js__WEBPACK_IMPORTED_MODULE_0__.cols);\n      return [x, y];\n    },\n    aiAttack: function aiAttack(board) {\n      var _this = this;\n      var flag = true;\n      var _loop = function _loop() {\n        var randomNumbers = _this.makeRandomNumber();\n        var x = randomNumbers[0];\n        var y = randomNumbers[1];\n        if (_this.turn === true && !_this.attackedArray.some(function (e) {\n          return e.x === x && e.y === y;\n        })) {\n          _this.attackedArray.push({\n            x: x,\n            y: y\n          });\n          board.gameBoardArray[x][y].shipName.hit();\n          flag = false;\n        }\n      };\n      while (flag) {\n        _loop();\n      }\n      flag = true;\n    }\n  };\n}\n\n\n//# sourceURL=webpack://my-webpack-project/./src/ai.js?");

/***/ }),

/***/ "./src/factorys.js":
/*!*************************!*\
  !*** ./src/factorys.js ***!
  \*************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GameBoard: () => (/* binding */ GameBoard),\n/* harmony export */   cols: () => (/* binding */ cols),\n/* harmony export */   playerFactory: () => (/* binding */ playerFactory),\n/* harmony export */   rows: () => (/* binding */ rows),\n/* harmony export */   shipFactory: () => (/* binding */ shipFactory)\n/* harmony export */ });\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && \"function\" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }, _typeof(obj); }\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\nfunction _toPropertyKey(arg) { var key = _toPrimitive(arg, \"string\"); return _typeof(key) === \"symbol\" ? key : String(key); }\nfunction _toPrimitive(input, hint) { if (_typeof(input) !== \"object\" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || \"default\"); if (_typeof(res) !== \"object\") return res; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (hint === \"string\" ? String : Number)(input); }\n/* eslint-disable prefer-const */\n/* eslint-disable require-jsdoc */\n/* eslint-disable no-unused-vars */\nvar rows = 10;\nvar cols = 10;\n\n// factory function for ships\nfunction shipFactory(largo) {\n  return {\n    length: largo,\n    hitTimes: 0,\n    hit: function hit() {\n      this.hitTimes++;\n    },\n    isSunk: function isSunk() {\n      if (this.length === this.hitTimes) {\n        return true;\n      } else {\n        return false;\n      }\n    }\n  };\n}\n\n// class for creating gameboard\nvar GameBoard = /*#__PURE__*/function () {\n  function GameBoard() {\n    _classCallCheck(this, GameBoard);\n    this.gameBoardArray = this.createGameBoard();\n    this.missedAttacks = [];\n    this.placedShips = [];\n  }\n  _createClass(GameBoard, [{\n    key: \"createGameBoard\",\n    value: function createGameBoard() {\n      var array = [];\n      var arrayItem = [];\n      for (var i = 0; i < 10; i++) {\n        for (var j = 0; j < 10; j++) {\n          arrayItem.push({\n            shipName: undefined,\n            shipIndex: undefined\n          });\n        }\n        array.push(arrayItem);\n        arrayItem = [];\n      }\n      return array;\n    }\n  }, {\n    key: \"getGameBoard\",\n    value: function getGameBoard() {\n      return this.gameBoardArray;\n    }\n  }, {\n    key: \"checkValidPlacement\",\n    value: function checkValidPlacement(length, x, y, isVertical) {\n      if (x > 10 || x < 0 || y > 10 || y < 0) return false;\n      if (length + x > 10 && isVertical === true) return false;\n      if (length + y > 10 && isVertical === false) return false;\n      if (isVertical) {\n        for (var i = x; i < x + length; i++) {\n          if (this.gameBoardArray[i][y].shipName != undefined) return false;\n        }\n      }\n      if (!isVertical) {\n        for (var _i = y; _i < y + length; _i++) {\n          if (this.gameBoardArray[x][_i].shipName != undefined) return false;\n        }\n      }\n      return true;\n    }\n  }, {\n    key: \"placeShip\",\n    value: function placeShip(ship, x, y, isVertical) {\n      var i = 0;\n      var h = 0;\n      if (this.checkValidPlacement(ship.length, x, y, isVertical)) {\n        if (isVertical) {\n          for (i = x; i < x + ship.length; i++) {\n            this.gameBoardArray[i][y].shipName = ship;\n            this.gameBoardArray[i][y].shipIndex = h;\n            h++;\n          }\n        }\n        if (!isVertical) {\n          for (i = y; i < y + ship.length; i++) {\n            this.gameBoardArray[x][i].shipName = ship;\n            this.gameBoardArray[x][i].shipIndex = h;\n            h++;\n          }\n        }\n        this.placedShips.push(ship);\n        return true;\n      }\n      return false;\n    }\n  }, {\n    key: \"placeRandomShip\",\n    value: function placeRandomShip(ship) {\n      var x;\n      var y;\n      var randomBoolean;\n      var flag = true;\n      while (flag) {\n        x = Math.floor(Math.random() * rows);\n        y = Math.floor(Math.random() * cols);\n        randomBoolean = Math.random() < 0.5;\n        if (this.checkValidPlacement(ship.length, x, y, randomBoolean)) {\n          this.placeShip(ship, x, y, randomBoolean);\n          flag = false;\n        }\n      }\n    }\n  }, {\n    key: \"reciveAttack\",\n    value: function reciveAttack(x, y) {\n      if (this.gameBoardArray[x][y].shipName === undefined) this.missedAttacks.push({\n        x: x,\n        y: y\n      });else {\n        this.gameBoardArray[x][y].shipName.hit();\n      }\n    }\n  }, {\n    key: \"allShipsSunk\",\n    value: function allShipsSunk() {\n      var i;\n      for (i = 0; i < this.placedShips.length; i++) {\n        if (this.placedShips[i].isSunk() === true) {\n          return true;\n        } else return false;\n      }\n    }\n  }]);\n  return GameBoard;\n}();\nfunction playerFactory(name) {\n  return {\n    name: name,\n    turn: false,\n    getPlayerName: function getPlayerName() {\n      return this.name;\n    },\n    checkTurn: function checkTurn() {\n      return this.turn;\n    },\n    changeTurn: function changeTurn() {\n      if (this.turn === true) this.turn = false;else this.turn = true;\n    },\n    attack: function attack(board, x, y) {\n      if (this.turn) {\n        board.reciveAttack(x, y);\n        this.changeTurn();\n      }\n    }\n  };\n}\n\n\n//# sourceURL=webpack://my-webpack-project/./src/factorys.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _ai_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ai.js */ \"./src/ai.js\");\n/* harmony import */ var _factorys_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./factorys.js */ \"./src/factorys.js\");\n/* harmony import */ var _styles_style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles/style.css */ \"./src/styles/style.css\");\n\n\n\n\n\n\n// DOM references\nvar intialModal = document.querySelector(\".initial-modal\");\nvar button = document.querySelector(\"#rotate-button\");\nvar boardPlacement = document.querySelector(\".setup-board\");\nvar playerBoardDom = document.querySelector(\".player-board\");\n\n// create gameBoards\nvar playerBoard = new _factorys_js__WEBPACK_IMPORTED_MODULE_1__.GameBoard();\nvar aiBoard = new _factorys_js__WEBPACK_IMPORTED_MODULE_1__.GameBoard();\n\n// create all ships in the game\nvar playerDestroyer = (0,_factorys_js__WEBPACK_IMPORTED_MODULE_1__.shipFactory)(2);\nvar playerSubmarine = (0,_factorys_js__WEBPACK_IMPORTED_MODULE_1__.shipFactory)(3);\nvar playerCruiser = (0,_factorys_js__WEBPACK_IMPORTED_MODULE_1__.shipFactory)(3);\nvar playerBattleship = (0,_factorys_js__WEBPACK_IMPORTED_MODULE_1__.shipFactory)(4);\nvar playerCarrier = (0,_factorys_js__WEBPACK_IMPORTED_MODULE_1__.shipFactory)(5);\nvar aiDestroyer = (0,_factorys_js__WEBPACK_IMPORTED_MODULE_1__.shipFactory)(2);\nvar aiSubmarine = (0,_factorys_js__WEBPACK_IMPORTED_MODULE_1__.shipFactory)(3);\nvar aiCruiser = (0,_factorys_js__WEBPACK_IMPORTED_MODULE_1__.shipFactory)(3);\nvar aiBattleship = (0,_factorys_js__WEBPACK_IMPORTED_MODULE_1__.shipFactory)(4);\nvar aiCarrier = (0,_factorys_js__WEBPACK_IMPORTED_MODULE_1__.shipFactory)(5);\n\n// variable declaration\nvar playerShipsArray = [playerDestroyer, playerSubmarine, playerCruiser, playerBattleship, playerCarrier];\nvar isVertical = true;\nintialModal.showModal();\ncreateBoard(\"player-board\");\ncreateBoard(\"ai-board\");\ncreateSetUpBoard();\nplaceAiShips();\n\n// create cells for the gameboard\nfunction createBoard(boardName) {\n  var board = document.querySelector(\".\".concat(boardName));\n  for (var i = 0; i < 10; i++) {\n    for (var j = 0; j < 10; j++) {\n      var cell = document.createElement(\"div\");\n      cell.classList.add(\"cell\");\n      cell.dataset.x = i;\n      cell.dataset.y = j;\n      board.appendChild(cell);\n    }\n  }\n}\nfunction createSetUpBoard() {\n  var board = document.querySelector(\".setup-board\");\n  for (var i = 0; i < 10; i++) {\n    for (var j = 0; j < 10; j++) {\n      var cell = document.createElement(\"div\");\n      cell.classList.add(\"cell\");\n      cell.dataset.x = i;\n      cell.dataset.y = j;\n      board.appendChild(cell);\n    }\n  }\n}\n\n// place ai ships in the ai-board\nfunction placeAiShips() {\n  aiBoard.placeRandomShip(aiDestroyer);\n  aiBoard.placeRandomShip(aiSubmarine);\n  aiBoard.placeRandomShip(aiCruiser);\n  aiBoard.placeRandomShip(aiBattleship);\n  aiBoard.placeRandomShip(aiCarrier);\n}\n// color aiships\nfunction colorShips() {\n  for (var i = 0; i < 10; i++) {\n    for (var j = 0; j < 10; j++) {\n      if (aiBoard.gameBoardArray[i][j].shipName != undefined) {\n        var board = document.querySelector(\".ai-board\");\n        var cell = board.querySelector(\"[data-x=\\\"\".concat(i, \"\\\"][data-y=\\\"\").concat(j, \"\\\"]\"));\n        cell.style.backgroundColor = \"red\";\n      }\n    }\n  }\n}\ncolorShips();\nvar cellPlacement = boardPlacement.querySelectorAll(\".cell\");\n\n// color ships from the player\nfunction colorPlayerShips() {\n  for (var i = 0; i < 10; i++) {\n    for (var j = 0; j < 10; j++) {\n      if (playerBoard.gameBoardArray[i][j].shipName != undefined) {\n        var cell = playerBoardDom.querySelector(\"[data-x=\\\"\".concat(i, \"\\\"][data-y=\\\"\").concat(j, \"\\\"]\"));\n        var cellSetUp = boardPlacement.querySelector(\"[data-x=\\\"\".concat(i, \"\\\"][data-y=\\\"\").concat(j, \"\\\"]\"));\n        cell.style.backgroundColor = \"green\";\n        cellSetUp.style.backgroundColor = \"green\";\n      }\n    }\n  }\n}\n\n// rotate ship placement\nbutton.addEventListener(\"click\", function () {\n  isVertical = !isVertical;\n  if (button.innerText === \"Rotate: y\") {\n    button.innerText = \"Rotate: x\";\n  } else button.innerText = \"Rotate: y\";\n});\n\n// place player ships\nfunction placePlayerShips() {\n  var i = 0;\n  cellPlacement.forEach(function (e) {\n    e.addEventListener(\"click\", function () {\n      var x = Number(e.getAttribute(\"data-x\"));\n      var y = Number(e.getAttribute(\"data-y\"));\n      if (playerBoard.placeShip(playerShipsArray[i], x, y, isVertical)) i++;\n      colorPlayerShips();\n      if (i === 5) {\n        intialModal.close();\n      }\n    });\n  });\n}\nplacePlayerShips();\n\n//# sourceURL=webpack://my-webpack-project/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;