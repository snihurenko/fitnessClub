/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_dropdownMenu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/dropdownMenu */ \"./src/modules/dropdownMenu.js\");\n/* harmony import */ var _modules_modalVisitForm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/modalVisitForm */ \"./src/modules/modalVisitForm.js\");\n/* harmony import */ var _modules_modalCallbackForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/modalCallbackForm */ \"./src/modules/modalCallbackForm.js\");\n/* harmony import */ var _modules_modalGift__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/modalGift */ \"./src/modules/modalGift.js\");\n/* harmony import */ var _modules_burgerMenu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/burgerMenu */ \"./src/modules/burgerMenu.js\");\n/* harmony import */ var _modules_sliderMainPage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/sliderMainPage */ \"./src/modules/sliderMainPage.js\");\n/* harmony import */ var _modules_sliderServices__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/sliderServices */ \"./src/modules/sliderServices.js\");\n/* harmony import */ var _modules_slider__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/slider */ \"./src/modules/slider.js\");\n/* harmony import */ var _modules_calculator__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modules/calculator */ \"./src/modules/calculator.js\");\n/* harmony import */ var _modules_sendForm__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./modules/sendForm */ \"./src/modules/sendForm.js\");\n/* harmony import */ var _modules_maskPhone__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./modules/maskPhone */ \"./src/modules/maskPhone.js\");\n\n\n\n\n\n\n\n\n //import { sliderGallery, showDots } from './modules/sliderGallery';\n\n\n\n\n\nObject(_modules_maskPhone__WEBPACK_IMPORTED_MODULE_10__[\"default\"])('.form_phone', '+_(___) ___-__-__');\nObject(_modules_dropdownMenu__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\nObject(_modules_burgerMenu__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\nObject(_modules_modalVisitForm__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\nObject(_modules_modalCallbackForm__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\nObject(_modules_modalGift__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\nObject(_modules_sliderMainPage__WEBPACK_IMPORTED_MODULE_5__[\"default\"])();\nObject(_modules_sliderServices__WEBPACK_IMPORTED_MODULE_6__[\"default\"])();\nObject(_modules_slider__WEBPACK_IMPORTED_MODULE_7__[\"showDots\"])(); //sliderGallery();\n\nObject(_modules_slider__WEBPACK_IMPORTED_MODULE_7__[\"slider\"])();\nObject(_modules_calculator__WEBPACK_IMPORTED_MODULE_8__[\"default\"])();\nObject(_modules_sendForm__WEBPACK_IMPORTED_MODULE_9__[\"default\"])();\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/modules/burgerMenu.js":
/*!***********************************!*\
  !*** ./src/modules/burgerMenu.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar burgerMenu = function burgerMenu() {\n  var btn = document.querySelector('.menu-button'),\n      menu = document.querySelector('.popup-menu'),\n      topMenu = document.querySelector('.top-menu');\n  document.addEventListener('click', function (event) {\n    var target = event.target;\n\n    if (target.closest('.menu-button')) {\n      menu.style.display = 'flex';\n    }\n  });\n  menu.addEventListener('click', function (event) {\n    var target = event.target;\n\n    if (target.closest('.close-menu-btn') || target.matches('li>a')) {\n      menu.style.display = 'none';\n    }\n  });\n  window.addEventListener('scroll', function () {\n    var sticky = btn.offsetTop;\n\n    if (window.innerWidth < 768) {\n      if (window.pageYOffset >= sticky) {\n        topMenu.classList.add('menu-fix');\n      }\n\n      if (window.pageYOffset === 0) {\n        topMenu.classList.remove('menu-fix');\n      }\n    }\n  });\n  window.addEventListener('resize', function () {\n    if (window.innerWidth < 768) {\n      btn.classList.remove('hidden-large');\n    } else if (window.innerWidth > 768) {\n      btn.classList.add('hidden-large');\n    }\n  }); //arrow to top\n\n  var arrowToTop = document.getElementById('arrow-top');\n  window.addEventListener('scroll', function () {\n    document.documentElement.scrollTop > window.innerHeight ? arrowToTop.hidden = false : arrowToTop.hidden = true;\n  });\n  arrowToTop.addEventListener('click', function () {\n    window.scrollTo(pageXOffset, 0);\n  });\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (burgerMenu);\n\n//# sourceURL=webpack:///./src/modules/burgerMenu.js?");

/***/ }),

/***/ "./src/modules/calculator.js":
/*!***********************************!*\
  !*** ./src/modules/calculator.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar calculator = function calculator() {\n  var clubs = document.querySelector('.clubs'),\n      time = document.querySelector('.time');\n\n  if (clubs && time) {\n    var priceTotal = document.getElementById('price-total'),\n        promocode = document.getElementById('promocode');\n    var mozaikaPrices = new Array();\n    mozaikaPrices[\"1\"] = 1999;\n    mozaikaPrices[\"6\"] = 9900;\n    mozaikaPrices[\"9\"] = 13900;\n    mozaikaPrices[\"12\"] = 19900;\n    var schelkovoPrices = new Array();\n    schelkovoPrices[\"1\"] = 2999;\n    schelkovoPrices[\"6\"] = 14990;\n    schelkovoPrices[\"9\"] = 21990;\n    schelkovoPrices[\"12\"] = 24990;\n    var period = 1;\n    var priceList = [];\n\n    var recalculateNewPeriod = function recalculateNewPeriod(target) {\n      target.checked = true;\n      applyDiscount();\n      changePrice(priceList, period);\n    };\n\n    var recalculateNewClub = function recalculateNewClub(target) {\n      target.checked = true;\n      getClubChecked();\n      applyDiscount();\n      changePrice(priceList, period);\n    };\n\n    var getClubChecked = function getClubChecked() {\n      var clubName = document.getElementsByName('club-name');\n\n      if (clubName[0].checked) {\n        priceList = mozaikaPrices;\n      } else if (clubName[1].checked) {\n        priceList = schelkovoPrices;\n      }\n\n      return priceList;\n    };\n\n    var getPeriod = function getPeriod() {\n      time.addEventListener('click', function (event) {\n        getClubChecked();\n        var target = event.target;\n\n        if (target.value === '1') {\n          period = '1';\n          recalculateNewPeriod(target);\n        }\n\n        if (target.value === '6') {\n          period = '6';\n          recalculateNewPeriod(target);\n        }\n\n        if (target.value === '9') {\n          period = '9';\n          recalculateNewPeriod(target);\n        }\n\n        if (target.value === '12') {\n          period = '12';\n          recalculateNewPeriod(target);\n        }\n      });\n      return period;\n    };\n\n    var changePrice = function changePrice(priceList, period) {\n      priceTotal.textContent = priceList[period];\n    };\n\n    clubs.addEventListener('click', function (event) {\n      var target = event.target;\n      getPeriod();\n\n      if (target.value === 'schelkovo') {\n        recalculateNewClub(target);\n      }\n\n      if (target.value === 'mozaika') {\n        recalculateNewClub(target);\n      }\n    });\n\n    var applyDiscount = function applyDiscount() {\n      if (promocode.value !== null && promocode.value !== '') {\n        if (promocode.value.toUpperCase() === 'ТЕЛО2020') {\n          getClubChecked();\n          getPeriod();\n          priceList = priceList.map(function (elem) {\n            return Math.floor(elem * 0.7);\n          });\n          return priceList;\n        }\n      }\n    };\n\n    promocode.addEventListener('change', function () {\n      applyDiscount();\n      changePrice(priceList, period);\n    });\n    getPeriod();\n    changePrice(mozaikaPrices, period);\n  }\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (calculator);\n\n//# sourceURL=webpack:///./src/modules/calculator.js?");

/***/ }),

/***/ "./src/modules/dropdownMenu.js":
/*!*************************************!*\
  !*** ./src/modules/dropdownMenu.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar dropdownMenu = function dropdownMenu() {\n  var clubsDropdown = document.getElementById('clubs-dropdown');\n  document.addEventListener('click', function (event) {\n    if (event.target.matches('#clubs-btn') && clubsDropdown.style.display === 'none') {\n      clubsDropdown.style.display = 'block';\n    } else {\n      clubsDropdown.style.display = 'none';\n    }\n  });\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (dropdownMenu);\n\n//# sourceURL=webpack:///./src/modules/dropdownMenu.js?");

/***/ }),

/***/ "./src/modules/maskPhone.js":
/*!**********************************!*\
  !*** ./src/modules/maskPhone.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === \"undefined\" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === \"number\") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError(\"Invalid attempt to iterate non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it[\"return\"] != null) it[\"return\"](); } finally { if (didErr) throw err; } } }; }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction maskPhone(selector) {\n  var masked = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '+7 (___) ___-__-__';\n  var elems = document.querySelectorAll(selector);\n\n  function mask(event) {\n    var keyCode = event.keyCode;\n    var template = masked,\n        def = template.replace(/\\D/g, \"\"),\n        val = this.value.replace(/\\D/g, \"\"); //console.log(template);\n\n    var i = 0,\n        newValue = template.replace(/[_\\d]/g, function (a) {\n      return i < val.length ? val.charAt(i++) || def.charAt(i) : a;\n    });\n    i = newValue.indexOf(\"_\");\n\n    if (i != -1) {\n      newValue = newValue.slice(0, i);\n    }\n\n    var reg = template.substr(0, this.value.length).replace(/_+/g, function (a) {\n      return \"\\\\d{1,\" + a.length + \"}\";\n    }).replace(/[+()]/g, \"\\\\$&\");\n    reg = new RegExp(\"^\" + reg + \"$\");\n\n    if (!reg.test(this.value) || this.value.length < 5 || keyCode > 47 && keyCode < 58) {\n      this.value = newValue;\n    }\n\n    if (event.type == \"blur\" && this.value.length < 5) {\n      this.value = \"\";\n    }\n  }\n\n  var _iterator = _createForOfIteratorHelper(elems),\n      _step;\n\n  try {\n    for (_iterator.s(); !(_step = _iterator.n()).done;) {\n      var elem = _step.value;\n      elem.addEventListener(\"input\", mask);\n      elem.addEventListener(\"focus\", mask);\n      elem.addEventListener(\"blur\", mask);\n    }\n  } catch (err) {\n    _iterator.e(err);\n  } finally {\n    _iterator.f();\n  }\n} // use\n//maskPhone('селектор элементов', 'маска, если маску не передать то будет работать стандартная +7 (___) ___-__-__');\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (maskPhone);\n\n//# sourceURL=webpack:///./src/modules/maskPhone.js?");

/***/ }),

/***/ "./src/modules/modalCallbackForm.js":
/*!******************************************!*\
  !*** ./src/modules/modalCallbackForm.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar modalCallBackForm = function modalCallBackForm() {\n  var form = document.getElementById('callback_form');\n  document.addEventListener('click', function (event) {\n    var target = event.target;\n\n    if (target.closest('#modal-callback-btn')) {\n      form.style.display = 'block';\n    }\n  });\n  form.addEventListener('click', function (event) {\n    var target = event.target;\n\n    if (target.classList.contains('close_icon') || !target.closest('.form-content')) {\n      form.style.display = 'none';\n    }\n  });\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (modalCallBackForm);\n\n//# sourceURL=webpack:///./src/modules/modalCallbackForm.js?");

/***/ }),

/***/ "./src/modules/modalGift.js":
/*!**********************************!*\
  !*** ./src/modules/modalGift.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar modalGift = function modalGift() {\n  var form = document.getElementById('gift');\n\n  if (form) {\n    document.addEventListener('click', function (event) {\n      var target = event.target;\n\n      if (target.closest('.fixed-gift')) {\n        form.style.display = 'block';\n        document.querySelector('.fixed-gift').style.display = 'none';\n      }\n    });\n    form.addEventListener('click', function (event) {\n      var target = event.target;\n\n      if (target.classList.contains('close_icon') || !target.closest('.form-content') || target.classList.contains('close-btn')) {\n        form.style.display = 'none';\n      }\n    });\n  }\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (modalGift);\n\n//# sourceURL=webpack:///./src/modules/modalGift.js?");

/***/ }),

/***/ "./src/modules/modalVisitForm.js":
/*!***************************************!*\
  !*** ./src/modules/modalVisitForm.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar modalVisitForm = function modalVisitForm() {\n  var form = document.getElementById('free_visit_form');\n  document.addEventListener('click', function (event) {\n    var target = event.target;\n\n    if (target.closest('.open-popup')) {\n      form.style.display = 'block';\n    }\n  });\n  form.addEventListener('click', function (event) {\n    var target = event.target;\n\n    if (target.classList.contains('close_icon') || !target.closest('.form-content')) {\n      form.style.display = 'none';\n    }\n  });\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (modalVisitForm);\n\n//# sourceURL=webpack:///./src/modules/modalVisitForm.js?");

/***/ }),

/***/ "./src/modules/sendForm.js":
/*!*********************************!*\
  !*** ./src/modules/sendForm.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === \"undefined\" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === \"number\") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError(\"Invalid attempt to iterate non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it[\"return\"] != null) it[\"return\"](); } finally { if (didErr) throw err; } } }; }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nvar sendForm = function sendForm() {\n  var errorMessage = 'Что-то пошло не так ...',\n      dataShareApproveMessage = 'Вы не приняли соглашение об обработке персональных данных';\n  var thanksPopup = document.getElementById('thanks');\n\n  var preloader = function preloader(statusMessage) {\n    statusMessage.insertAdjacentHTML('beforeend', \"\\n            <div class=\\\"preloader\\\">\\n                <div class=\\\"preloader__bar js--animate\\\"  data-position=\\\"1\\\"></div>\\n                <div class=\\\"preloader__bar\\\" data-position=\\\"2\\\"></div>\\n                <div class=\\\"preloader__bar\\\" data-position=\\\"3\\\"></div>\\n            </div>\\n        \");\n\n    var animation = function animation() {\n      var activeBar = document.querySelector('.preloader .js--animate');\n\n      if (activeBar) {\n        var nextBar = activeBar.nextElementSibling;\n\n        if (!nextBar) {\n          var parent = activeBar.parentElement;\n          nextBar = parent.firstElementChild;\n          activeBar.classList.remove('js--animate');\n          nextBar.classList.add('js--animate');\n        } else {\n          activeBar.classList.remove('js--animate');\n          nextBar.classList.add('js--animate');\n        }\n      }\n    };\n\n    setInterval(animation, 300);\n  };\n\n  var getDataForm = function getDataForm(target) {\n    var statusMessage = document.createElement('div');\n    preloader(statusMessage);\n    statusMessage.classList.add('statusMessage');\n    target.appendChild(statusMessage);\n    var formData = new FormData(target);\n    var body = {};\n\n    var _iterator = _createForOfIteratorHelper(formData.entries()),\n        _step;\n\n    try {\n      for (_iterator.s(); !(_step = _iterator.n()).done;) {\n        var val = _step.value;\n        body[val[0]] = val[1];\n      }\n    } catch (err) {\n      _iterator.e(err);\n    } finally {\n      _iterator.f();\n    }\n\n    ;\n\n    var outputData = function outputData() {\n      var preloader = document.querySelector('.preloader');\n\n      if (preloader) {\n        preloader.parentNode.removeChild(preloader);\n      }\n\n      thanksPopup.style.display = 'flex';\n      thanksPopup.addEventListener('click', function (event) {\n        var target = event.target;\n\n        if (target.classList.contains('close_icon') || !target.closest('.form-content') || target.classList.contains('close-btn')) {\n          thanksPopup.style.display = 'none';\n        }\n      });\n    };\n\n    var errorData = function errorData(error) {\n      console.error(error);\n      statusMessage.textContent = errorMessage;\n    };\n\n    postData(body).then(function (response) {\n      if (response.status !== 200) {\n        throw new Error('Network status not 200');\n      }\n\n      outputData();\n    })[\"catch\"](function (error) {\n      errorData(error);\n    });\n    target.reset();\n  };\n\n  var postData = function postData(body) {\n    return fetch('./server.php', {\n      method: 'POST',\n      headers: {\n        'Content-Type': 'application/json'\n      },\n      body: JSON.stringify(body)\n    });\n  };\n\n  document.addEventListener('submit', function (event) {\n    event.preventDefault();\n    var target = event.target;\n    var bannerCheck = document.getElementById('check1');\n    var form1Check = document.getElementById('check');\n    var form2Check = document.getElementById('check2');\n    var cardCheck = document.getElementById('card_check');\n\n    if (target.matches('#form1') && form1Check.checked || target.matches('#form2') && form2Check.checked || target.matches('#footer_form') || target.matches('#banner-form') && bannerCheck.checked || target.matches('#card_order') && cardCheck.checked) {\n      var statusMessage = document.querySelector('#dataShare');\n\n      if (statusMessage) {\n        statusMessage.parentNode.removeChild(statusMessage);\n      }\n\n      getDataForm(target);\n    } else {\n      var message = document.querySelector('#dataShare');\n\n      if (message) {\n        message.parentNode.removeChild(message);\n      }\n\n      var _statusMessage = document.createElement('div');\n\n      _statusMessage.classList.add('statusMessage');\n\n      _statusMessage.id = 'dataShare';\n      _statusMessage.style.color = 'red';\n      _statusMessage.textContent = dataShareApproveMessage;\n      target.appendChild(_statusMessage);\n    }\n  });\n  document.addEventListener('input', function (event) {\n    var target = event.target;\n\n    if (target.closest('#form1') || target.closest('#form2') || target.closest('#footer_form') || target.closest('#banner-form') || target.closest('#card_order')) {\n      validateInput(target);\n    }\n  });\n\n  var validateInput = function validateInput(target) {\n    if (target.matches('.form_name')) {\n      target.value = target.value.replace(/[^а-яё\\s]/ig, '');\n    }\n  };\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (sendForm);\n\n//# sourceURL=webpack:///./src/modules/sendForm.js?");

/***/ }),

/***/ "./src/modules/slider.js":
/*!*******************************!*\
  !*** ./src/modules/slider.js ***!
  \*******************************/
/*! exports provided: slider, showDots */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"slider\", function() { return slider; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"showDots\", function() { return showDots; });\nvar slider = function slider() {\n  var slide = document.querySelectorAll('.gallery-slide'),\n      dot = document.querySelectorAll('.slider-dots'),\n      slider = document.querySelector('.gallery-slider');\n  var currentSlide = 0,\n      interval;\n\n  var prevSlide = function prevSlide(elem, index, strClass) {\n    elem[index].classList.remove(strClass);\n  };\n\n  var nextSlide = function nextSlide(elem, index, strClass) {\n    elem[index].classList.add(strClass);\n  };\n\n  var autoPlaySlider = function autoPlaySlider() {\n    prevSlide(slide, currentSlide, 'gallery-slide-active');\n    prevSlide(dot, currentSlide, 'gallery-dot-active'); // currentSlide--;\n    // if (currentSlide <= slide.length - (slide.length + 1)) {\n    //     currentSlide = slide.length -1;\n    // }\n\n    currentSlide++;\n\n    if (currentSlide >= slide.length) {\n      currentSlide = 0;\n    }\n\n    nextSlide(slide, currentSlide, 'gallery-slide-active');\n    nextSlide(dot, currentSlide, 'gallery-dot-active');\n  };\n\n  var startSlide = function startSlide() {\n    var time = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 3000;\n    interval = setInterval(autoPlaySlider, time);\n  };\n\n  var stopSlide = function stopSlide() {\n    clearInterval(interval);\n  };\n\n  slider.addEventListener('click', function (event) {\n    event.preventDefault();\n    var target = event.target;\n\n    if (!target.matches('.slider-arrow, .slider-dots')) {\n      return;\n    }\n\n    prevSlide(slide, currentSlide, 'gallery-slide-active');\n    prevSlide(dot, currentSlide, 'gallery-dot-active');\n\n    if (target.matches('#arrow-right')) {\n      currentSlide--;\n    }\n\n    if (target.matches('#arrow-left')) {\n      currentSlide++;\n    }\n\n    if (target.closest('.slider-dots')) {\n      dot.forEach(function (elem, index) {\n        if (elem === target) {\n          currentSlide = index;\n        }\n      });\n    }\n\n    if (currentSlide >= slide.length) {\n      currentSlide = 0;\n    }\n\n    if (currentSlide < 0) {\n      currentSlide = slide.length - 1;\n    }\n\n    nextSlide(slide, currentSlide, 'gallery-slide-active');\n    nextSlide(dot, currentSlide, 'gallery-dot-active');\n  });\n  slider.addEventListener('mouseover', function (event) {\n    if (event.target.matches('.slider-arrow') || event.target.matches('.slider-dots')) {\n      stopSlide();\n    }\n  });\n  slider.addEventListener('mouseout', function (event) {\n    if (event.target.matches('.slider-arrow') || event.target.matches('.slider-dots')) {\n      startSlide();\n    }\n  });\n  startSlide(5000);\n};\n\nvar showDots = function showDots() {\n  var dotsContainer = document.querySelector('.slider-dots-container'),\n      slide = document.querySelectorAll('.gallery-slide');\n\n  for (var i = 0; i < slide.length; i++) {\n    var dot = document.createElement('li');\n    dot.classList.add('slider-dots');\n    dotsContainer.prepend(dot);\n    console.log(dot);\n  }\n\n  var firstDot = document.querySelector('.slider-dots');\n  firstDot.classList.add('gallery-dot-active');\n};\n\n\n\n//# sourceURL=webpack:///./src/modules/slider.js?");

/***/ }),

/***/ "./src/modules/sliderMainPage.js":
/*!***************************************!*\
  !*** ./src/modules/sliderMainPage.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar sliderMainPage = function sliderMainPage() {\n  var slider = document.querySelector('.main-slider'),\n      slide = slider.querySelectorAll('.slide');\n  var slideIndex = 0;\n\n  var carousel = function carousel() {\n    slide[slideIndex].style.display = \"none\";\n    slideIndex++;\n\n    if (slideIndex >= slide.length) {\n      slideIndex = 0;\n    }\n\n    slide[slideIndex].style.display = \"block\";\n  };\n\n  setInterval(carousel, 3000);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (sliderMainPage);\n\n//# sourceURL=webpack:///./src/modules/sliderMainPage.js?");

/***/ }),

/***/ "./src/modules/sliderServices.js":
/*!***************************************!*\
  !*** ./src/modules/sliderServices.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n//import { EventEmitter } from \"events\";\nvar sliderServices = function sliderServices() {\n  var slider = document.querySelector('.services-slider'),\n      slide = slider.querySelectorAll('.slide');\n  var currentSlide = 0,\n      slidesToShow = 4;\n  slide.forEach(function (elem) {\n    //elem.style.flex = `0 0 ${Math.floor(100/slidesToShow)}%;`\n    elem.style.flex = '0 0 25%';\n  });\n  document.addEventListener('click', function (event) {\n    var target = event.target;\n\n    if (!target.matches('.slider-arrow')) {\n      return;\n    }\n\n    if (target.matches('#serv-arrow-right')) {\n      event.preventDefault();\n      currentSlide++;\n\n      if (currentSlide >= slide.length - slidesToShow) {\n        currentSlide = 0;\n      }\n\n      slider.style.transform = \"translateX(-\".concat(currentSlide * 25, \"%)\");\n    }\n\n    if (target.matches('#serv-arrow-left')) {\n      event.preventDefault();\n      currentSlide--;\n\n      if (currentSlide < 0) {\n        currentSlide = slide.length - slidesToShow;\n      }\n\n      slider.style.transform = \"translateX(-\".concat(currentSlide * 25, \"%)\");\n    }\n  });\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (sliderServices);\n\n//# sourceURL=webpack:///./src/modules/sliderServices.js?");

/***/ })

/******/ });