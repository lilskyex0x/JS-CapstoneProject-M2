"use strict";
(self["webpackChunkwebpack_boilerplate"] = self["webpackChunkwebpack_boilerplate"] || []).push([["index"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "ol,\r\nul {\r\n  list-style: none;\r\n}\r\n\r\n*,\r\n*::before,\r\n*::after {\r\n  margin: 0;\r\n  padding: 0;\r\n  -webkit-box-sizing: border-box !important;\r\n  -moz-box-sizing: border-box !important;\r\n  -ms-box-sizing: border-box !important;\r\n  box-sizing: border-box !important;\r\n}\r\n\r\n:root {\r\n  --font-family: 'Poppins', sans-serif;\r\n  --font-family-styled: 'Sacramento', cursive;\r\n  --Box-shadow-outside: -5px -5px 20px rgba(255, 255, 255, 0.849), 5px 5px 9px rgba(94, 104, 121, 0.3);\r\n  --Box-shadow-inside: inset -5px -5px 9px rgba(255, 255, 255, 0.647), inset 5px 5px 9px rgba(94, 104, 121, 0.3);\r\n}\r\n\r\nbody {\r\n  background-color: #dbeafa;\r\n  font-family: \"Roboto\", sans-serif;\r\n  color: #5d6267;\r\n  line-height: 1;\r\n}\r\n\r\n.nav {\r\n  margin-top: 1.5rem;\r\n}\r\n\r\n.nav-items {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n.nav-items li {\r\n  margin-left: 5%;\r\n}\r\n\r\n.logo {\r\n  border-radius: 50%;\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: center;\r\n  align-items: center;\r\n  color: #000;\r\n}\r\n\r\n.logo-small {\r\n  font-size: 15px;\r\n  color: #588bae;\r\n  text-decoration: dotted;\r\n}\r\n\r\n.logo-title {\r\n  font-size: 20px;\r\n}\r\n\r\n.img-logo {\r\n  height: 50px;\r\n  width: 50px;\r\n}\r\n\r\n.cards {\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  justify-content: center;\r\n  align-items: center;\r\n  gap: 20px;\r\n  margin: 80px 200px;\r\n}\r\n\r\n.card {\r\n  display: inline-block;\r\n  text-align: center;\r\n  box-shadow: var(--Box-shadow-outside);\r\n  background-color: #fbf0d7;\r\n  padding: 10px;\r\n  height: 250px;\r\n  width: 30%;\r\n\r\n}\r\n\r\n.image-api {\r\n  height: 100px;\r\n  width: 50%;\r\n}\r\n\r\n.likes {\r\n  margin-top: 0.5rem;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  padding-right: 1.5rem;\r\n}\r\n\r\n.comment {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  margin: auto;\r\n}\r\n\r\n.button {\r\n  padding: 0.8rem;\r\n  border: none;\r\n  /* box-shadow: 5px 7px 5px rgba(0, 0, 0, 1); */\r\n  background-color: rgb(100, 86, 86);\r\n  cursor: pointer;\r\n  margin-top: 20px;\r\n  box-shadow: 5px 7px 5px rgba(0, 0, 0, 1);\r\n  background-color: rgb(241, 241, 247);\r\n}\r\n\r\n/* POPUP COMMENT Section */\r\n#popupModal {\r\n  display: flex;\r\n  justify-content: center;\r\n  width: 100%;\r\n}\r\n\r\n.modal {\r\n  position: fixed;\r\n  top: 50%;\r\n  left: 50%;\r\n  transform: translate(-50%, -50%) scale(0);\r\n  transition: 200ms ease-in-out;\r\n}\r\n\r\n.modal.active {\r\n  transform: translate(-50%, -50%) scale(0.85);\r\n}\r\n\r\n.popup-wrapper {\r\n  position: relative;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n  background-color: white;\r\n  border: 2px solid black;\r\n  border-radius: 20px;\r\n  width: 800px;\r\n  max-width: 80%;\r\n  margin: 50px 0;\r\n  padding: 80px;\r\n  gap: 25px;\r\n  z-index: 10;\r\n}\r\n\r\n.close-btn {\r\n  position: absolute;\r\n  top: 50px;\r\n  right: 60px;\r\n  font-size: 25px;\r\n  font-weight: bold;\r\n  padding: 5px 10px;\r\n  cursor: pointer;\r\n  border-radius: 8px;\r\n  border-color: aqua;\r\n}\r\n\r\n.art-details ul {\r\n  display: grid;\r\n  grid-template-columns: 1fr 1fr;\r\n  gap: 10px;\r\n}\r\n\r\n.art-details ul li {\r\n  padding: 0.5rem;\r\n}\r\n\r\n.cmds {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n  gap: 25px;\r\n}\r\n\r\n.cmds p {\r\n  align-self: flex-start;\r\n}\r\n\r\n.form {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 25px;\r\n}\r\n\r\n#name {\r\n  width: 80%;\r\n  padding: .5em .5em;\r\n}\r\n\r\n#insights {\r\n  padding: .5em .5em 5em .5em;\r\n}\r\n\r\n#cmd-btn {\r\n  width: 80%;\r\n}\r\n\r\n#overlay {\r\n  position: fixed;\r\n  opacity: 0;\r\n  top: 0;\r\n  left: 0;\r\n  right: 0;\r\n  bottom: 0;\r\n  background-color: rgba(0, 0, 0, .5);\r\n  transition: 200ms ease-in-out;\r\n  pointer-events: none;\r\n}\r\n\r\n#overlay.active {\r\n  opacity: 1;\r\n  pointer-events: all;\r\n}\r\n\r\n\r\nfooter {\r\n  line-height: 50px;\r\n}\r\n\r\n.bordered {\r\n  border: 3px solid black;\r\n  width: 100%;\r\n  padding: 0 30px;\r\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAEA;;EAEE,gBAAgB;AAClB;;AAEA;;;EAGE,SAAS;EACT,UAAU;EACV,yCAAyC;EACzC,sCAAsC;EACtC,qCAAqC;EACrC,iCAAiC;AACnC;;AAEA;EACE,oCAAoC;EACpC,2CAA2C;EAC3C,oGAAoG;EACpG,8GAA8G;AAChH;;AAEA;EACE,yBAAyB;EACzB,iCAAiC;EACjC,cAAc;EACd,cAAc;AAChB;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,kBAAkB;EAClB,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,mBAAmB;EACnB,WAAW;AACb;;AAEA;EACE,eAAe;EACf,cAAc;EACd,uBAAuB;AACzB;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,YAAY;EACZ,WAAW;AACb;;AAEA;EACE,aAAa;EACb,eAAe;EACf,uBAAuB;EACvB,mBAAmB;EACnB,SAAS;EACT,kBAAkB;AACpB;;AAEA;EACE,qBAAqB;EACrB,kBAAkB;EAClB,qCAAqC;EACrC,yBAAyB;EACzB,aAAa;EACb,aAAa;EACb,UAAU;;AAEZ;;AAEA;EACE,aAAa;EACb,UAAU;AACZ;;AAEA;EACE,kBAAkB;EAClB,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,qBAAqB;AACvB;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,YAAY;AACd;;AAEA;EACE,eAAe;EACf,YAAY;EACZ,8CAA8C;EAC9C,kCAAkC;EAClC,eAAe;EACf,gBAAgB;EAChB,wCAAwC;EACxC,oCAAoC;AACtC;;AAEA,0BAA0B;AAC1B;EACE,aAAa;EACb,uBAAuB;EACvB,WAAW;AACb;;AAEA;EACE,eAAe;EACf,QAAQ;EACR,SAAS;EACT,yCAAyC;EACzC,6BAA6B;AAC/B;;AAEA;EACE,4CAA4C;AAC9C;;AAEA;EACE,kBAAkB;EAClB,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,mBAAmB;EACnB,uBAAuB;EACvB,uBAAuB;EACvB,mBAAmB;EACnB,YAAY;EACZ,cAAc;EACd,cAAc;EACd,aAAa;EACb,SAAS;EACT,WAAW;AACb;;AAEA;EACE,kBAAkB;EAClB,SAAS;EACT,WAAW;EACX,eAAe;EACf,iBAAiB;EACjB,iBAAiB;EACjB,eAAe;EACf,kBAAkB;EAClB,kBAAkB;AACpB;;AAEA;EACE,aAAa;EACb,8BAA8B;EAC9B,SAAS;AACX;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,mBAAmB;EACnB,SAAS;AACX;;AAEA;EACE,sBAAsB;AACxB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,SAAS;AACX;;AAEA;EACE,UAAU;EACV,kBAAkB;AACpB;;AAEA;EACE,2BAA2B;AAC7B;;AAEA;EACE,UAAU;AACZ;;AAEA;EACE,eAAe;EACf,UAAU;EACV,MAAM;EACN,OAAO;EACP,QAAQ;EACR,SAAS;EACT,mCAAmC;EACnC,6BAA6B;EAC7B,oBAAoB;AACtB;;AAEA;EACE,UAAU;EACV,mBAAmB;AACrB;;;AAGA;EACE,iBAAiB;AACnB;;AAEA;EACE,uBAAuB;EACvB,WAAW;EACX,eAAe;AACjB","sourcesContent":["@import url(\"https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap\");\r\n\r\nol,\r\nul {\r\n  list-style: none;\r\n}\r\n\r\n*,\r\n*::before,\r\n*::after {\r\n  margin: 0;\r\n  padding: 0;\r\n  -webkit-box-sizing: border-box !important;\r\n  -moz-box-sizing: border-box !important;\r\n  -ms-box-sizing: border-box !important;\r\n  box-sizing: border-box !important;\r\n}\r\n\r\n:root {\r\n  --font-family: 'Poppins', sans-serif;\r\n  --font-family-styled: 'Sacramento', cursive;\r\n  --Box-shadow-outside: -5px -5px 20px rgba(255, 255, 255, 0.849), 5px 5px 9px rgba(94, 104, 121, 0.3);\r\n  --Box-shadow-inside: inset -5px -5px 9px rgba(255, 255, 255, 0.647), inset 5px 5px 9px rgba(94, 104, 121, 0.3);\r\n}\r\n\r\nbody {\r\n  background-color: #dbeafa;\r\n  font-family: \"Roboto\", sans-serif;\r\n  color: #5d6267;\r\n  line-height: 1;\r\n}\r\n\r\n.nav {\r\n  margin-top: 1.5rem;\r\n}\r\n\r\n.nav-items {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n.nav-items li {\r\n  margin-left: 5%;\r\n}\r\n\r\n.logo {\r\n  border-radius: 50%;\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: center;\r\n  align-items: center;\r\n  color: #000;\r\n}\r\n\r\n.logo-small {\r\n  font-size: 15px;\r\n  color: #588bae;\r\n  text-decoration: dotted;\r\n}\r\n\r\n.logo-title {\r\n  font-size: 20px;\r\n}\r\n\r\n.img-logo {\r\n  height: 50px;\r\n  width: 50px;\r\n}\r\n\r\n.cards {\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  justify-content: center;\r\n  align-items: center;\r\n  gap: 20px;\r\n  margin: 80px 200px;\r\n}\r\n\r\n.card {\r\n  display: inline-block;\r\n  text-align: center;\r\n  box-shadow: var(--Box-shadow-outside);\r\n  background-color: #fbf0d7;\r\n  padding: 10px;\r\n  height: 250px;\r\n  width: 30%;\r\n\r\n}\r\n\r\n.image-api {\r\n  height: 100px;\r\n  width: 50%;\r\n}\r\n\r\n.likes {\r\n  margin-top: 0.5rem;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  padding-right: 1.5rem;\r\n}\r\n\r\n.comment {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  margin: auto;\r\n}\r\n\r\n.button {\r\n  padding: 0.8rem;\r\n  border: none;\r\n  /* box-shadow: 5px 7px 5px rgba(0, 0, 0, 1); */\r\n  background-color: rgb(100, 86, 86);\r\n  cursor: pointer;\r\n  margin-top: 20px;\r\n  box-shadow: 5px 7px 5px rgba(0, 0, 0, 1);\r\n  background-color: rgb(241, 241, 247);\r\n}\r\n\r\n/* POPUP COMMENT Section */\r\n#popupModal {\r\n  display: flex;\r\n  justify-content: center;\r\n  width: 100%;\r\n}\r\n\r\n.modal {\r\n  position: fixed;\r\n  top: 50%;\r\n  left: 50%;\r\n  transform: translate(-50%, -50%) scale(0);\r\n  transition: 200ms ease-in-out;\r\n}\r\n\r\n.modal.active {\r\n  transform: translate(-50%, -50%) scale(0.85);\r\n}\r\n\r\n.popup-wrapper {\r\n  position: relative;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n  background-color: white;\r\n  border: 2px solid black;\r\n  border-radius: 20px;\r\n  width: 800px;\r\n  max-width: 80%;\r\n  margin: 50px 0;\r\n  padding: 80px;\r\n  gap: 25px;\r\n  z-index: 10;\r\n}\r\n\r\n.close-btn {\r\n  position: absolute;\r\n  top: 50px;\r\n  right: 60px;\r\n  font-size: 25px;\r\n  font-weight: bold;\r\n  padding: 5px 10px;\r\n  cursor: pointer;\r\n  border-radius: 8px;\r\n  border-color: aqua;\r\n}\r\n\r\n.art-details ul {\r\n  display: grid;\r\n  grid-template-columns: 1fr 1fr;\r\n  gap: 10px;\r\n}\r\n\r\n.art-details ul li {\r\n  padding: 0.5rem;\r\n}\r\n\r\n.cmds {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n  gap: 25px;\r\n}\r\n\r\n.cmds p {\r\n  align-self: flex-start;\r\n}\r\n\r\n.form {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 25px;\r\n}\r\n\r\n#name {\r\n  width: 80%;\r\n  padding: .5em .5em;\r\n}\r\n\r\n#insights {\r\n  padding: .5em .5em 5em .5em;\r\n}\r\n\r\n#cmd-btn {\r\n  width: 80%;\r\n}\r\n\r\n#overlay {\r\n  position: fixed;\r\n  opacity: 0;\r\n  top: 0;\r\n  left: 0;\r\n  right: 0;\r\n  bottom: 0;\r\n  background-color: rgba(0, 0, 0, .5);\r\n  transition: 200ms ease-in-out;\r\n  pointer-events: none;\r\n}\r\n\r\n#overlay.active {\r\n  opacity: 1;\r\n  pointer-events: all;\r\n}\r\n\r\n\r\nfooter {\r\n  line-height: 50px;\r\n}\r\n\r\n.bordered {\r\n  border: 3px solid black;\r\n  width: 100%;\r\n  padding: 0 30px;\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _modules_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/api.js */ "./src/modules/api.js");
/* harmony import */ var _modules_popup__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/popup */ "./src/modules/popup.js");





const callAPI = new _modules_api_js__WEBPACK_IMPORTED_MODULE_1__["default"]();

callAPI.GetArtworks();

const cmdButtonOpen = document.querySelectorAll(".button");
const cmdButtonClose = document.querySelectorAll(".close-btn");

cmdButtonOpen.forEach((button) => {
  button.addEventListener("click", () => {
    (0,_modules_popup__WEBPACK_IMPORTED_MODULE_2__.openModal)(_modules_popup__WEBPACK_IMPORTED_MODULE_2__.modal);
  });
});

cmdButtonClose.forEach((button) => {
  button.addEventListener("click", () => {
    (0,_modules_popup__WEBPACK_IMPORTED_MODULE_2__.closeModal)(_modules_popup__WEBPACK_IMPORTED_MODULE_2__.modal);
  });
});



/***/ }),

/***/ "./src/modules/api.js":
/*!****************************!*\
  !*** ./src/modules/api.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Api)
/* harmony export */ });
/* harmony import */ var _listCards_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./listCards.js */ "./src/modules/listCards.js");


class Api {
  constructor() {
    this.artworksList = 'https://api.artic.edu/api/v1/artworks?page=2';
  }

  GetArtworks = async () => {
    await fetch(`${this.artworksList}`)
      .then((response) => response.json())
      .then((json) => {
        const artworks = json.data;
        (0,_listCards_js__WEBPACK_IMPORTED_MODULE_0__["default"])(artworks);
      });
  }
}


/***/ }),

/***/ "./src/modules/listCards.js":
/*!**********************************!*\
  !*** ./src/modules/listCards.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const Cards = document.querySelector(".cards");

async function DisplayCards(data) {
  data.forEach((element, index) => {
    Cards.innerHTML += `
      <div class="card">
        <div class="img-container">
          <div class="img-hold">
            <div class="img">
              <img class = "image-api" src="./assets/image/${index}.jpg">
            </div>
          </div>
        </div>
        <div class="title-container">
          <h3>${element.title} <i class="fa fa-heart"></i></h3>
          <div class="interactions">
            <div class="likes">355 likes</div>
          </div>
          <button class="button comment"><i class="fa fa-comments"></i> Comments</button>
        </div>
      </div>
    `;
  });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DisplayCards);


/***/ }),

/***/ "./src/modules/popup.js":
/*!******************************!*\
  !*** ./src/modules/popup.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "closeModal": () => (/* binding */ closeModal),
/* harmony export */   "modal": () => (/* binding */ modal),
/* harmony export */   "openModal": () => (/* binding */ openModal)
/* harmony export */ });
const popupSection = document.createElement("section");
popupSection.setAttribute("id", "popupModal");
popupSection.classList.add("modal");
popupSection.innerHTML = `
<div class="popup-wrapper">
    <button class="close-btn">&times;</button>
    <img src="./assets/artlogo.png" alt="">
    <h2>Artwork</h2>
    <div class="art-details">
        <ul>
            <li>Fuel: titanium</li>
            <li>Weight: 400</li>
            <li>Length: 100,000</li>
            <li>Power: 100,000,000</li> 
        </ul>
    </div>
    <div class="cmds">
        <h3>Comments (3)</h3>
        <p>Skye: I love it</p>
        <p>Meave: I would buy that one, its AWESOME</p>
    </div>
    <div class="cmd-form">
        <form action="#" class="form">
            <input type="text" name="name" id="name" placeholder="Your Name">
            <input type="text" name="insight" id="insights" placeholder="Your insights">
            <input type="button" value="Comment" id="cmd-btn">
        </form>
    </div>
</div>
<div id="overlay"></div>`;
document.body.appendChild(popupSection);

const modal = document.getElementById("popupModal");
const overlay = document.getElementById("overlay");

function openModal(modal) {
  if (modal === null) return;
  modal.classList.add("active");
  overlay.classList.add("active");
}

function closeModal(modal) {
  if (modal === null) return;
  modal.classList.remove("active");
  overlay.classList.remove("active");
}


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtBQUNBLFFBQVEseURBQVk7QUFDcEIsT0FBTztBQUNQO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ2ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZEQUE2RCxNQUFNO0FBQ25FO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLGVBQWU7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLGlFQUFlLFlBQVksRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6QjVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQ0FBcUM7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWJwYWNrLWJvaWxlcnBsYXRlLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWJvaWxlcnBsYXRlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWJvaWxlcnBsYXRlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1ib2lsZXJwbGF0ZS8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly93ZWJwYWNrLWJvaWxlcnBsYXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3dlYnBhY2stYm9pbGVycGxhdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3dlYnBhY2stYm9pbGVycGxhdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1ib2lsZXJwbGF0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWJvaWxlcnBsYXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1ib2lsZXJwbGF0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3dlYnBhY2stYm9pbGVycGxhdGUvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1ib2lsZXJwbGF0ZS8uL3NyYy9tb2R1bGVzL2FwaS5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWJvaWxlcnBsYXRlLy4vc3JjL21vZHVsZXMvbGlzdENhcmRzLmpzIiwid2VicGFjazovL3dlYnBhY2stYm9pbGVycGxhdGUvLi9zcmMvbW9kdWxlcy9wb3B1cC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVJvYm90bzp3Z2h0QDMwMCZkaXNwbGF5PXN3YXApO1wiXSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJvbCxcXHJcXG51bCB7XFxyXFxuICBsaXN0LXN0eWxlOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4qLFxcclxcbio6OmJlZm9yZSxcXHJcXG4qOjphZnRlciB7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbiAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94ICFpbXBvcnRhbnQ7XFxyXFxuICAtbW96LWJveC1zaXppbmc6IGJvcmRlci1ib3ggIWltcG9ydGFudDtcXHJcXG4gIC1tcy1ib3gtc2l6aW5nOiBib3JkZXItYm94ICFpbXBvcnRhbnQ7XFxyXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94ICFpbXBvcnRhbnQ7XFxyXFxufVxcclxcblxcclxcbjpyb290IHtcXHJcXG4gIC0tZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcXHJcXG4gIC0tZm9udC1mYW1pbHktc3R5bGVkOiAnU2FjcmFtZW50bycsIGN1cnNpdmU7XFxyXFxuICAtLUJveC1zaGFkb3ctb3V0c2lkZTogLTVweCAtNXB4IDIwcHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjg0OSksIDVweCA1cHggOXB4IHJnYmEoOTQsIDEwNCwgMTIxLCAwLjMpO1xcclxcbiAgLS1Cb3gtc2hhZG93LWluc2lkZTogaW5zZXQgLTVweCAtNXB4IDlweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNjQ3KSwgaW5zZXQgNXB4IDVweCA5cHggcmdiYSg5NCwgMTA0LCAxMjEsIDAuMyk7XFxyXFxufVxcclxcblxcclxcbmJvZHkge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RiZWFmYTtcXHJcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUm9ib3RvXFxcIiwgc2Fucy1zZXJpZjtcXHJcXG4gIGNvbG9yOiAjNWQ2MjY3O1xcclxcbiAgbGluZS1oZWlnaHQ6IDE7XFxyXFxufVxcclxcblxcclxcbi5uYXYge1xcclxcbiAgbWFyZ2luLXRvcDogMS41cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2LWl0ZW1zIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5uYXYtaXRlbXMgbGkge1xcclxcbiAgbWFyZ2luLWxlZnQ6IDUlO1xcclxcbn1cXHJcXG5cXHJcXG4ubG9nbyB7XFxyXFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGNvbG9yOiAjMDAwO1xcclxcbn1cXHJcXG5cXHJcXG4ubG9nby1zbWFsbCB7XFxyXFxuICBmb250LXNpemU6IDE1cHg7XFxyXFxuICBjb2xvcjogIzU4OGJhZTtcXHJcXG4gIHRleHQtZGVjb3JhdGlvbjogZG90dGVkO1xcclxcbn1cXHJcXG5cXHJcXG4ubG9nby10aXRsZSB7XFxyXFxuICBmb250LXNpemU6IDIwcHg7XFxyXFxufVxcclxcblxcclxcbi5pbWctbG9nbyB7XFxyXFxuICBoZWlnaHQ6IDUwcHg7XFxyXFxuICB3aWR0aDogNTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmNhcmRzIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LXdyYXA6IHdyYXA7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBnYXA6IDIwcHg7XFxyXFxuICBtYXJnaW46IDgwcHggMjAwcHg7XFxyXFxufVxcclxcblxcclxcbi5jYXJkIHtcXHJcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIGJveC1zaGFkb3c6IHZhcigtLUJveC1zaGFkb3ctb3V0c2lkZSk7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmJmMGQ3O1xcclxcbiAgcGFkZGluZzogMTBweDtcXHJcXG4gIGhlaWdodDogMjUwcHg7XFxyXFxuICB3aWR0aDogMzAlO1xcclxcblxcclxcbn1cXHJcXG5cXHJcXG4uaW1hZ2UtYXBpIHtcXHJcXG4gIGhlaWdodDogMTAwcHg7XFxyXFxuICB3aWR0aDogNTAlO1xcclxcbn1cXHJcXG5cXHJcXG4ubGlrZXMge1xcclxcbiAgbWFyZ2luLXRvcDogMC41cmVtO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIHBhZGRpbmctcmlnaHQ6IDEuNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbW1lbnQge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIG1hcmdpbjogYXV0bztcXHJcXG59XFxyXFxuXFxyXFxuLmJ1dHRvbiB7XFxyXFxuICBwYWRkaW5nOiAwLjhyZW07XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICAvKiBib3gtc2hhZG93OiA1cHggN3B4IDVweCByZ2JhKDAsIDAsIDAsIDEpOyAqL1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDEwMCwgODYsIDg2KTtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIG1hcmdpbi10b3A6IDIwcHg7XFxyXFxuICBib3gtc2hhZG93OiA1cHggN3B4IDVweCByZ2JhKDAsIDAsIDAsIDEpO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0MSwgMjQxLCAyNDcpO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBQT1BVUCBDT01NRU5UIFNlY3Rpb24gKi9cXHJcXG4jcG9wdXBNb2RhbCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuLm1vZGFsIHtcXHJcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gIHRvcDogNTAlO1xcclxcbiAgbGVmdDogNTAlO1xcclxcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSkgc2NhbGUoMCk7XFxyXFxuICB0cmFuc2l0aW9uOiAyMDBtcyBlYXNlLWluLW91dDtcXHJcXG59XFxyXFxuXFxyXFxuLm1vZGFsLmFjdGl2ZSB7XFxyXFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKSBzY2FsZSgwLjg1KTtcXHJcXG59XFxyXFxuXFxyXFxuLnBvcHVwLXdyYXBwZXIge1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXHJcXG4gIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcXHJcXG4gIHdpZHRoOiA4MDBweDtcXHJcXG4gIG1heC13aWR0aDogODAlO1xcclxcbiAgbWFyZ2luOiA1MHB4IDA7XFxyXFxuICBwYWRkaW5nOiA4MHB4O1xcclxcbiAgZ2FwOiAyNXB4O1xcclxcbiAgei1pbmRleDogMTA7XFxyXFxufVxcclxcblxcclxcbi5jbG9zZS1idG4ge1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgdG9wOiA1MHB4O1xcclxcbiAgcmlnaHQ6IDYwcHg7XFxyXFxuICBmb250LXNpemU6IDI1cHg7XFxyXFxuICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gIHBhZGRpbmc6IDVweCAxMHB4O1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xcclxcbiAgYm9yZGVyLWNvbG9yOiBhcXVhO1xcclxcbn1cXHJcXG5cXHJcXG4uYXJ0LWRldGFpbHMgdWwge1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcXHJcXG4gIGdhcDogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmFydC1kZXRhaWxzIHVsIGxpIHtcXHJcXG4gIHBhZGRpbmc6IDAuNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmNtZHMge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBnYXA6IDI1cHg7XFxyXFxufVxcclxcblxcclxcbi5jbWRzIHAge1xcclxcbiAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcXHJcXG59XFxyXFxuXFxyXFxuLmZvcm0ge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBnYXA6IDI1cHg7XFxyXFxufVxcclxcblxcclxcbiNuYW1lIHtcXHJcXG4gIHdpZHRoOiA4MCU7XFxyXFxuICBwYWRkaW5nOiAuNWVtIC41ZW07XFxyXFxufVxcclxcblxcclxcbiNpbnNpZ2h0cyB7XFxyXFxuICBwYWRkaW5nOiAuNWVtIC41ZW0gNWVtIC41ZW07XFxyXFxufVxcclxcblxcclxcbiNjbWQtYnRuIHtcXHJcXG4gIHdpZHRoOiA4MCU7XFxyXFxufVxcclxcblxcclxcbiNvdmVybGF5IHtcXHJcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gIG9wYWNpdHk6IDA7XFxyXFxuICB0b3A6IDA7XFxyXFxuICBsZWZ0OiAwO1xcclxcbiAgcmlnaHQ6IDA7XFxyXFxuICBib3R0b206IDA7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIC41KTtcXHJcXG4gIHRyYW5zaXRpb246IDIwMG1zIGVhc2UtaW4tb3V0O1xcclxcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbiNvdmVybGF5LmFjdGl2ZSB7XFxyXFxuICBvcGFjaXR5OiAxO1xcclxcbiAgcG9pbnRlci1ldmVudHM6IGFsbDtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuZm9vdGVyIHtcXHJcXG4gIGxpbmUtaGVpZ2h0OiA1MHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uYm9yZGVyZWQge1xcclxcbiAgYm9yZGVyOiAzcHggc29saWQgYmxhY2s7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIHBhZGRpbmc6IDAgMzBweDtcXHJcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFFQTs7RUFFRSxnQkFBZ0I7QUFDbEI7O0FBRUE7OztFQUdFLFNBQVM7RUFDVCxVQUFVO0VBQ1YseUNBQXlDO0VBQ3pDLHNDQUFzQztFQUN0QyxxQ0FBcUM7RUFDckMsaUNBQWlDO0FBQ25DOztBQUVBO0VBQ0Usb0NBQW9DO0VBQ3BDLDJDQUEyQztFQUMzQyxvR0FBb0c7RUFDcEcsOEdBQThHO0FBQ2hIOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLGlDQUFpQztFQUNqQyxjQUFjO0VBQ2QsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsV0FBVztBQUNiOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGNBQWM7RUFDZCx1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGFBQWE7RUFDYixlQUFlO0VBQ2YsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixTQUFTO0VBQ1Qsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLGtCQUFrQjtFQUNsQixxQ0FBcUM7RUFDckMseUJBQXlCO0VBQ3pCLGFBQWE7RUFDYixhQUFhO0VBQ2IsVUFBVTs7QUFFWjs7QUFFQTtFQUNFLGFBQWE7RUFDYixVQUFVO0FBQ1o7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsWUFBWTtBQUNkOztBQUVBO0VBQ0UsZUFBZTtFQUNmLFlBQVk7RUFDWiw4Q0FBOEM7RUFDOUMsa0NBQWtDO0VBQ2xDLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsd0NBQXdDO0VBQ3hDLG9DQUFvQztBQUN0Qzs7QUFFQSwwQkFBMEI7QUFDMUI7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGVBQWU7RUFDZixRQUFRO0VBQ1IsU0FBUztFQUNULHlDQUF5QztFQUN6Qyw2QkFBNkI7QUFDL0I7O0FBRUE7RUFDRSw0Q0FBNEM7QUFDOUM7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2Qix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLFlBQVk7RUFDWixjQUFjO0VBQ2QsY0FBYztFQUNkLGFBQWE7RUFDYixTQUFTO0VBQ1QsV0FBVztBQUNiOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxXQUFXO0VBQ1gsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixpQkFBaUI7RUFDakIsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLFNBQVM7QUFDWDs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsU0FBUztBQUNYOztBQUVBO0VBQ0Usc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixTQUFTO0FBQ1g7O0FBRUE7RUFDRSxVQUFVO0VBQ1Ysa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsMkJBQTJCO0FBQzdCOztBQUVBO0VBQ0UsVUFBVTtBQUNaOztBQUVBO0VBQ0UsZUFBZTtFQUNmLFVBQVU7RUFDVixNQUFNO0VBQ04sT0FBTztFQUNQLFFBQVE7RUFDUixTQUFTO0VBQ1QsbUNBQW1DO0VBQ25DLDZCQUE2QjtFQUM3QixvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsbUJBQW1CO0FBQ3JCOzs7QUFHQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLHVCQUF1QjtFQUN2QixXQUFXO0VBQ1gsZUFBZTtBQUNqQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0IHVybChcXFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Sb2JvdG86d2dodEAzMDAmZGlzcGxheT1zd2FwXFxcIik7XFxyXFxuXFxyXFxub2wsXFxyXFxudWwge1xcclxcbiAgbGlzdC1zdHlsZTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuKixcXHJcXG4qOjpiZWZvcmUsXFxyXFxuKjo6YWZ0ZXIge1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG4gIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveCAhaW1wb3J0YW50O1xcclxcbiAgLW1vei1ib3gtc2l6aW5nOiBib3JkZXItYm94ICFpbXBvcnRhbnQ7XFxyXFxuICAtbXMtYm94LXNpemluZzogYm9yZGVyLWJveCAhaW1wb3J0YW50O1xcclxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveCAhaW1wb3J0YW50O1xcclxcbn1cXHJcXG5cXHJcXG46cm9vdCB7XFxyXFxuICAtLWZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XFxyXFxuICAtLWZvbnQtZmFtaWx5LXN0eWxlZDogJ1NhY3JhbWVudG8nLCBjdXJzaXZlO1xcclxcbiAgLS1Cb3gtc2hhZG93LW91dHNpZGU6IC01cHggLTVweCAyMHB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44NDkpLCA1cHggNXB4IDlweCByZ2JhKDk0LCAxMDQsIDEyMSwgMC4zKTtcXHJcXG4gIC0tQm94LXNoYWRvdy1pbnNpZGU6IGluc2V0IC01cHggLTVweCA5cHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjY0NyksIGluc2V0IDVweCA1cHggOXB4IHJnYmEoOTQsIDEwNCwgMTIxLCAwLjMpO1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5IHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNkYmVhZmE7XFxyXFxuICBmb250LWZhbWlseTogXFxcIlJvYm90b1xcXCIsIHNhbnMtc2VyaWY7XFxyXFxuICBjb2xvcjogIzVkNjI2NztcXHJcXG4gIGxpbmUtaGVpZ2h0OiAxO1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2IHtcXHJcXG4gIG1hcmdpbi10b3A6IDEuNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdi1pdGVtcyB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2LWl0ZW1zIGxpIHtcXHJcXG4gIG1hcmdpbi1sZWZ0OiA1JTtcXHJcXG59XFxyXFxuXFxyXFxuLmxvZ28ge1xcclxcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBjb2xvcjogIzAwMDtcXHJcXG59XFxyXFxuXFxyXFxuLmxvZ28tc21hbGwge1xcclxcbiAgZm9udC1zaXplOiAxNXB4O1xcclxcbiAgY29sb3I6ICM1ODhiYWU7XFxyXFxuICB0ZXh0LWRlY29yYXRpb246IGRvdHRlZDtcXHJcXG59XFxyXFxuXFxyXFxuLmxvZ28tdGl0bGUge1xcclxcbiAgZm9udC1zaXplOiAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uaW1nLWxvZ28ge1xcclxcbiAgaGVpZ2h0OiA1MHB4O1xcclxcbiAgd2lkdGg6IDUwcHg7XFxyXFxufVxcclxcblxcclxcbi5jYXJkcyB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC13cmFwOiB3cmFwO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgZ2FwOiAyMHB4O1xcclxcbiAgbWFyZ2luOiA4MHB4IDIwMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uY2FyZCB7XFxyXFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICBib3gtc2hhZG93OiB2YXIoLS1Cb3gtc2hhZG93LW91dHNpZGUpO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZiZjBkNztcXHJcXG4gIHBhZGRpbmc6IDEwcHg7XFxyXFxuICBoZWlnaHQ6IDI1MHB4O1xcclxcbiAgd2lkdGg6IDMwJTtcXHJcXG5cXHJcXG59XFxyXFxuXFxyXFxuLmltYWdlLWFwaSB7XFxyXFxuICBoZWlnaHQ6IDEwMHB4O1xcclxcbiAgd2lkdGg6IDUwJTtcXHJcXG59XFxyXFxuXFxyXFxuLmxpa2VzIHtcXHJcXG4gIG1hcmdpbi10b3A6IDAuNXJlbTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBwYWRkaW5nLXJpZ2h0OiAxLjVyZW07XFxyXFxufVxcclxcblxcclxcbi5jb21tZW50IHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBtYXJnaW46IGF1dG87XFxyXFxufVxcclxcblxcclxcbi5idXR0b24ge1xcclxcbiAgcGFkZGluZzogMC44cmVtO1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgLyogYm94LXNoYWRvdzogNXB4IDdweCA1cHggcmdiYSgwLCAwLCAwLCAxKTsgKi9cXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxMDAsIDg2LCA4Nik7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICBtYXJnaW4tdG9wOiAyMHB4O1xcclxcbiAgYm94LXNoYWRvdzogNXB4IDdweCA1cHggcmdiYSgwLCAwLCAwLCAxKTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDEsIDI0MSwgMjQ3KTtcXHJcXG59XFxyXFxuXFxyXFxuLyogUE9QVVAgQ09NTUVOVCBTZWN0aW9uICovXFxyXFxuI3BvcHVwTW9kYWwge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbi5tb2RhbCB7XFxyXFxuICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICB0b3A6IDUwJTtcXHJcXG4gIGxlZnQ6IDUwJTtcXHJcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpIHNjYWxlKDApO1xcclxcbiAgdHJhbnNpdGlvbjogMjAwbXMgZWFzZS1pbi1vdXQ7XFxyXFxufVxcclxcblxcclxcbi5tb2RhbC5hY3RpdmUge1xcclxcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSkgc2NhbGUoMC44NSk7XFxyXFxufVxcclxcblxcclxcbi5wb3B1cC13cmFwcGVyIHtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxuICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxyXFxuICB3aWR0aDogODAwcHg7XFxyXFxuICBtYXgtd2lkdGg6IDgwJTtcXHJcXG4gIG1hcmdpbjogNTBweCAwO1xcclxcbiAgcGFkZGluZzogODBweDtcXHJcXG4gIGdhcDogMjVweDtcXHJcXG4gIHotaW5kZXg6IDEwO1xcclxcbn1cXHJcXG5cXHJcXG4uY2xvc2UtYnRuIHtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIHRvcDogNTBweDtcXHJcXG4gIHJpZ2h0OiA2MHB4O1xcclxcbiAgZm9udC1zaXplOiAyNXB4O1xcclxcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICBwYWRkaW5nOiA1cHggMTBweDtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXHJcXG4gIGJvcmRlci1jb2xvcjogYXF1YTtcXHJcXG59XFxyXFxuXFxyXFxuLmFydC1kZXRhaWxzIHVsIHtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxyXFxuICBnYXA6IDEwcHg7XFxyXFxufVxcclxcblxcclxcbi5hcnQtZGV0YWlscyB1bCBsaSB7XFxyXFxuICBwYWRkaW5nOiAwLjVyZW07XFxyXFxufVxcclxcblxcclxcbi5jbWRzIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgZ2FwOiAyNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4uY21kcyBwIHtcXHJcXG4gIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7XFxyXFxufVxcclxcblxcclxcbi5mb3JtIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgZ2FwOiAyNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4jbmFtZSB7XFxyXFxuICB3aWR0aDogODAlO1xcclxcbiAgcGFkZGluZzogLjVlbSAuNWVtO1xcclxcbn1cXHJcXG5cXHJcXG4jaW5zaWdodHMge1xcclxcbiAgcGFkZGluZzogLjVlbSAuNWVtIDVlbSAuNWVtO1xcclxcbn1cXHJcXG5cXHJcXG4jY21kLWJ0biB7XFxyXFxuICB3aWR0aDogODAlO1xcclxcbn1cXHJcXG5cXHJcXG4jb3ZlcmxheSB7XFxyXFxuICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICBvcGFjaXR5OiAwO1xcclxcbiAgdG9wOiAwO1xcclxcbiAgbGVmdDogMDtcXHJcXG4gIHJpZ2h0OiAwO1xcclxcbiAgYm90dG9tOiAwO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAuNSk7XFxyXFxuICB0cmFuc2l0aW9uOiAyMDBtcyBlYXNlLWluLW91dDtcXHJcXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4jb3ZlcmxheS5hY3RpdmUge1xcclxcbiAgb3BhY2l0eTogMTtcXHJcXG4gIHBvaW50ZXItZXZlbnRzOiBhbGw7XFxyXFxufVxcclxcblxcclxcblxcclxcbmZvb3RlciB7XFxyXFxuICBsaW5lLWhlaWdodDogNTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmJvcmRlcmVkIHtcXHJcXG4gIGJvcmRlcjogM3B4IHNvbGlkIGJsYWNrO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBwYWRkaW5nOiAwIDMwcHg7XFxyXFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCBcIi4vc3R5bGUuY3NzXCI7XHJcbmltcG9ydCBBcGkgZnJvbSBcIi4vbW9kdWxlcy9hcGkuanNcIjtcclxuaW1wb3J0IHsgb3Blbk1vZGFsLCBjbG9zZU1vZGFsIH0gZnJvbSBcIi4vbW9kdWxlcy9wb3B1cFwiO1xyXG5pbXBvcnQgeyBtb2RhbCB9IGZyb20gXCIuL21vZHVsZXMvcG9wdXBcIjtcclxuXHJcbmNvbnN0IGNhbGxBUEkgPSBuZXcgQXBpKCk7XHJcblxyXG5jYWxsQVBJLkdldEFydHdvcmtzKCk7XHJcblxyXG5jb25zdCBjbWRCdXR0b25PcGVuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5idXR0b25cIik7XHJcbmNvbnN0IGNtZEJ1dHRvbkNsb3NlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5jbG9zZS1idG5cIik7XHJcblxyXG5jbWRCdXR0b25PcGVuLmZvckVhY2goKGJ1dHRvbikgPT4ge1xyXG4gIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgb3Blbk1vZGFsKG1vZGFsKTtcclxuICB9KTtcclxufSk7XHJcblxyXG5jbWRCdXR0b25DbG9zZS5mb3JFYWNoKChidXR0b24pID0+IHtcclxuICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgIGNsb3NlTW9kYWwobW9kYWwpO1xyXG4gIH0pO1xyXG59KTtcclxuXHJcbiIsImltcG9ydCBEaXNwbGF5Q2FyZHMgZnJvbSBcIi4vbGlzdENhcmRzLmpzXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBcGkge1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgdGhpcy5hcnR3b3Jrc0xpc3QgPSAnaHR0cHM6Ly9hcGkuYXJ0aWMuZWR1L2FwaS92MS9hcnR3b3Jrcz9wYWdlPTInO1xyXG4gIH1cclxuXHJcbiAgR2V0QXJ0d29ya3MgPSBhc3luYyAoKSA9PiB7XHJcbiAgICBhd2FpdCBmZXRjaChgJHt0aGlzLmFydHdvcmtzTGlzdH1gKVxyXG4gICAgICAudGhlbigocmVzcG9uc2UpID0+IHJlc3BvbnNlLmpzb24oKSlcclxuICAgICAgLnRoZW4oKGpzb24pID0+IHtcclxuICAgICAgICBjb25zdCBhcnR3b3JrcyA9IGpzb24uZGF0YTtcclxuICAgICAgICBEaXNwbGF5Q2FyZHMoYXJ0d29ya3MpO1xyXG4gICAgICB9KTtcclxuICB9XHJcbn1cclxuIiwiY29uc3QgQ2FyZHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNhcmRzXCIpO1xyXG5cclxuYXN5bmMgZnVuY3Rpb24gRGlzcGxheUNhcmRzKGRhdGEpIHtcclxuICBkYXRhLmZvckVhY2goKGVsZW1lbnQsIGluZGV4KSA9PiB7XHJcbiAgICBDYXJkcy5pbm5lckhUTUwgKz0gYFxyXG4gICAgICA8ZGl2IGNsYXNzPVwiY2FyZFwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJpbWctY29udGFpbmVyXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiaW1nLWhvbGRcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImltZ1wiPlxyXG4gICAgICAgICAgICAgIDxpbWcgY2xhc3MgPSBcImltYWdlLWFwaVwiIHNyYz1cIi4vYXNzZXRzL2ltYWdlLyR7aW5kZXh9LmpwZ1wiPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJ0aXRsZS1jb250YWluZXJcIj5cclxuICAgICAgICAgIDxoMz4ke2VsZW1lbnQudGl0bGV9IDxpIGNsYXNzPVwiZmEgZmEtaGVhcnRcIj48L2k+PC9oMz5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJpbnRlcmFjdGlvbnNcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImxpa2VzXCI+MzU1IGxpa2VzPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJidXR0b24gY29tbWVudFwiPjxpIGNsYXNzPVwiZmEgZmEtY29tbWVudHNcIj48L2k+IENvbW1lbnRzPC9idXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgYDtcclxuICB9KTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRGlzcGxheUNhcmRzO1xyXG4iLCJjb25zdCBwb3B1cFNlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VjdGlvblwiKTtcclxucG9wdXBTZWN0aW9uLnNldEF0dHJpYnV0ZShcImlkXCIsIFwicG9wdXBNb2RhbFwiKTtcclxucG9wdXBTZWN0aW9uLmNsYXNzTGlzdC5hZGQoXCJtb2RhbFwiKTtcclxucG9wdXBTZWN0aW9uLmlubmVySFRNTCA9IGBcclxuPGRpdiBjbGFzcz1cInBvcHVwLXdyYXBwZXJcIj5cclxuICAgIDxidXR0b24gY2xhc3M9XCJjbG9zZS1idG5cIj4mdGltZXM7PC9idXR0b24+XHJcbiAgICA8aW1nIHNyYz1cIi4vYXNzZXRzL2FydGxvZ28ucG5nXCIgYWx0PVwiXCI+XHJcbiAgICA8aDI+QXJ0d29yazwvaDI+XHJcbiAgICA8ZGl2IGNsYXNzPVwiYXJ0LWRldGFpbHNcIj5cclxuICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgIDxsaT5GdWVsOiB0aXRhbml1bTwvbGk+XHJcbiAgICAgICAgICAgIDxsaT5XZWlnaHQ6IDQwMDwvbGk+XHJcbiAgICAgICAgICAgIDxsaT5MZW5ndGg6IDEwMCwwMDA8L2xpPlxyXG4gICAgICAgICAgICA8bGk+UG93ZXI6IDEwMCwwMDAsMDAwPC9saT4gXHJcbiAgICAgICAgPC91bD5cclxuICAgIDwvZGl2PlxyXG4gICAgPGRpdiBjbGFzcz1cImNtZHNcIj5cclxuICAgICAgICA8aDM+Q29tbWVudHMgKDMpPC9oMz5cclxuICAgICAgICA8cD5Ta3llOiBJIGxvdmUgaXQ8L3A+XHJcbiAgICAgICAgPHA+TWVhdmU6IEkgd291bGQgYnV5IHRoYXQgb25lLCBpdHMgQVdFU09NRTwvcD5cclxuICAgIDwvZGl2PlxyXG4gICAgPGRpdiBjbGFzcz1cImNtZC1mb3JtXCI+XHJcbiAgICAgICAgPGZvcm0gYWN0aW9uPVwiI1wiIGNsYXNzPVwiZm9ybVwiPlxyXG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwibmFtZVwiIGlkPVwibmFtZVwiIHBsYWNlaG9sZGVyPVwiWW91ciBOYW1lXCI+XHJcbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJpbnNpZ2h0XCIgaWQ9XCJpbnNpZ2h0c1wiIHBsYWNlaG9sZGVyPVwiWW91ciBpbnNpZ2h0c1wiPlxyXG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cImJ1dHRvblwiIHZhbHVlPVwiQ29tbWVudFwiIGlkPVwiY21kLWJ0blwiPlxyXG4gICAgICAgIDwvZm9ybT5cclxuICAgIDwvZGl2PlxyXG48L2Rpdj5cclxuPGRpdiBpZD1cIm92ZXJsYXlcIj48L2Rpdj5gO1xyXG5kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHBvcHVwU2VjdGlvbik7XHJcblxyXG5leHBvcnQgY29uc3QgbW9kYWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBvcHVwTW9kYWxcIik7XHJcbmNvbnN0IG92ZXJsYXkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm92ZXJsYXlcIik7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gb3Blbk1vZGFsKG1vZGFsKSB7XHJcbiAgaWYgKG1vZGFsID09PSBudWxsKSByZXR1cm47XHJcbiAgbW9kYWwuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcclxuICBvdmVybGF5LmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjbG9zZU1vZGFsKG1vZGFsKSB7XHJcbiAgaWYgKG1vZGFsID09PSBudWxsKSByZXR1cm47XHJcbiAgbW9kYWwuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcclxuICBvdmVybGF5LmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XHJcbn1cclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9