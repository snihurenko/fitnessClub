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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_dropdownMenu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/dropdownMenu */ \"./src/modules/dropdownMenu.js\");\n/* harmony import */ var _modules_modalVisitForm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/modalVisitForm */ \"./src/modules/modalVisitForm.js\");\n/* harmony import */ var _modules_modalCallbackForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/modalCallbackForm */ \"./src/modules/modalCallbackForm.js\");\n/* harmony import */ var _modules_modalGift__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/modalGift */ \"./src/modules/modalGift.js\");\n/* harmony import */ var _modules_sliderMainPage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/sliderMainPage */ \"./src/modules/sliderMainPage.js\");\n/* harmony import */ var _modules_sliderGallery__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/sliderGallery */ \"./src/modules/sliderGallery.js\");\n\n\n\n\n\n\n\n\nObject(_modules_dropdownMenu__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\nObject(_modules_modalVisitForm__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\nObject(_modules_modalCallbackForm__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\nObject(_modules_modalGift__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\nObject(_modules_sliderMainPage__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\nObject(_modules_sliderGallery__WEBPACK_IMPORTED_MODULE_5__[\"showDots\"])();\nObject(_modules_sliderGallery__WEBPACK_IMPORTED_MODULE_5__[\"sliderGallery\"])();\n\n//# sourceURL=webpack:///./src/index.js?");

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

/***/ "./src/modules/modalCallbackForm.js":
/*!******************************************!*\
  !*** ./src/modules/modalCallbackForm.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar modalCallBackForm = function modalCallBackForm() {\n  var form = document.getElementById('callback_form');\n  document.addEventListener('click', function (event) {\n    var target = event.target;\n\n    if (target.closest('.callback-btn')) {\n      form.style.display = 'block';\n    }\n  });\n  form.addEventListener('click', function (event) {\n    var target = event.target;\n\n    if (target.classList.contains('close_icon') || !target.closest('.form-content')) {\n      form.style.display = 'none';\n    }\n  });\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (modalCallBackForm);\n\n//# sourceURL=webpack:///./src/modules/modalCallbackForm.js?");

/***/ }),

/***/ "./src/modules/modalGift.js":
/*!**********************************!*\
  !*** ./src/modules/modalGift.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar modalGift = function modalGift() {\n  var form = document.getElementById('gift');\n  document.addEventListener('click', function (event) {\n    var target = event.target;\n\n    if (target.closest('.fixed-gift')) {\n      form.style.display = 'block';\n      document.querySelector('.fixed-gift').style.display = 'none';\n    }\n  });\n  form.addEventListener('click', function (event) {\n    var target = event.target;\n\n    if (target.classList.contains('close_icon') || !target.closest('.form-content') || target.classList.contains('close-btn')) {\n      form.style.display = 'none';\n      document.querySelector('.fixed-gift').style.display = 'block';\n    }\n  });\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (modalGift);\n\n//# sourceURL=webpack:///./src/modules/modalGift.js?");

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

/***/ "./src/modules/sliderGallery.js":
/*!**************************************!*\
  !*** ./src/modules/sliderGallery.js ***!
  \**************************************/
/*! exports provided: sliderGallery, showDots */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"sliderGallery\", function() { return sliderGallery; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"showDots\", function() { return showDots; });\nvar sliderGallery = function sliderGallery() {\n  var slide = document.querySelectorAll('.gallery-slide'),\n      dot = document.querySelectorAll('.slider-dots'),\n      slider = document.querySelector('.gallery-slider');\n  console.log(dot);\n  var currentSlide = 0,\n      interval;\n\n  var prevSlide = function prevSlide(elem, index, strClass) {\n    elem[index].classList.remove(strClass);\n  };\n\n  var nextSlide = function nextSlide(elem, index, strClass) {\n    elem[index].classList.add(strClass);\n  };\n\n  var autoPlaySlider = function autoPlaySlider() {\n    prevSlide(slide, currentSlide, 'gallery-slide-active');\n    prevSlide(dot, currentSlide, 'gallery-dot-active');\n    currentSlide++;\n\n    if (currentSlide >= slide.length) {\n      currentSlide = 0;\n    }\n\n    nextSlide(slide, currentSlide, 'gallery-slide-active');\n    nextSlide(dot, currentSlide, 'gallery-dot-active');\n  };\n\n  var startSlide = function startSlide() {\n    var time = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 3000;\n    interval = setInterval(autoPlaySlider, time);\n  };\n\n  var stopSlide = function stopSlide() {\n    clearInterval(interval);\n  };\n\n  slider.addEventListener('click', function (event) {\n    event.preventDefault();\n    var target = event.target;\n    console.log(target);\n\n    if (!target.matches('.slider-arrow, .slider-dots')) {\n      return;\n    }\n\n    prevSlide(slide, currentSlide, 'gallery-slide-active');\n    prevSlide(dot, currentSlide, 'gallery-dot-active');\n\n    if (target.matches('#arrow-right')) {\n      currentSlide++;\n    }\n\n    if (target.matches('#arrow-left')) {\n      currentSlide--;\n    }\n\n    if (target.closest('.slider-dots')) {\n      dot.forEach(function (elem, index) {\n        if (elem === target) {\n          currentSlide = index;\n        }\n      });\n    }\n\n    if (currentSlide >= slide.length) {\n      currentSlide = 0;\n    }\n\n    if (currentSlide < 0) {\n      currentSlide = slide.length - 1;\n    }\n\n    nextSlide(slide, currentSlide, 'gallery-slide-active');\n    nextSlide(dot, currentSlide, 'gallery-dot-active');\n  });\n  slider.addEventListener('mouseover', function (event) {\n    if (event.target.matches('.slider-arrow') || event.target.matches('.slider-dots')) {\n      stopSlide();\n    }\n  });\n  slider.addEventListener('mouseout', function (event) {\n    if (event.target.matches('.slider-arrow') || event.target.matches('.slider-dots')) {\n      startSlide();\n    }\n  });\n  startSlide(3000);\n};\n\nvar showDots = function showDots() {\n  var dotsContainer = document.querySelector('.slider-dots-container'),\n      slide = document.querySelectorAll('.gallery-slide');\n\n  for (var i = 0; i < slide.length; i++) {\n    var dot = document.createElement('li');\n    dot.classList.add('slider-dots');\n    dotsContainer.append(dot);\n  }\n\n  var firstDot = document.querySelector('.slider-dots');\n  firstDot.classList.add('gallery-dot-active');\n};\n\n\n\n//# sourceURL=webpack:///./src/modules/sliderGallery.js?");

/***/ }),

/***/ "./src/modules/sliderMainPage.js":
/*!***************************************!*\
  !*** ./src/modules/sliderMainPage.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar sliderMainPage = function sliderMainPage() {\n  var slider = document.querySelector('.main-slider'),\n      slide = slider.querySelectorAll('.slide');\n  var slideIndex = 0;\n\n  var carousel = function carousel() {\n    slide[slideIndex].style.display = \"none\";\n    slideIndex++;\n\n    if (slideIndex >= slide.length) {\n      slideIndex = 0;\n    }\n\n    slide[slideIndex].style.display = \"block\";\n  };\n\n  setInterval(carousel, 3000);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (sliderMainPage);\n\n//# sourceURL=webpack:///./src/modules/sliderMainPage.js?");

/***/ })

/******/ });