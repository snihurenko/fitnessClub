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

/***/ "./node_modules/events/events.js":
/*!***************************************!*\
  !*** ./node_modules/events/events.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("// Copyright Joyent, Inc. and other Node contributors.\n//\n// Permission is hereby granted, free of charge, to any person obtaining a\n// copy of this software and associated documentation files (the\n// \"Software\"), to deal in the Software without restriction, including\n// without limitation the rights to use, copy, modify, merge, publish,\n// distribute, sublicense, and/or sell copies of the Software, and to permit\n// persons to whom the Software is furnished to do so, subject to the\n// following conditions:\n//\n// The above copyright notice and this permission notice shall be included\n// in all copies or substantial portions of the Software.\n//\n// THE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS\n// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF\n// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN\n// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,\n// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR\n// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE\n// USE OR OTHER DEALINGS IN THE SOFTWARE.\n\n\n\nvar R = typeof Reflect === 'object' ? Reflect : null\nvar ReflectApply = R && typeof R.apply === 'function'\n  ? R.apply\n  : function ReflectApply(target, receiver, args) {\n    return Function.prototype.apply.call(target, receiver, args);\n  }\n\nvar ReflectOwnKeys\nif (R && typeof R.ownKeys === 'function') {\n  ReflectOwnKeys = R.ownKeys\n} else if (Object.getOwnPropertySymbols) {\n  ReflectOwnKeys = function ReflectOwnKeys(target) {\n    return Object.getOwnPropertyNames(target)\n      .concat(Object.getOwnPropertySymbols(target));\n  };\n} else {\n  ReflectOwnKeys = function ReflectOwnKeys(target) {\n    return Object.getOwnPropertyNames(target);\n  };\n}\n\nfunction ProcessEmitWarning(warning) {\n  if (console && console.warn) console.warn(warning);\n}\n\nvar NumberIsNaN = Number.isNaN || function NumberIsNaN(value) {\n  return value !== value;\n}\n\nfunction EventEmitter() {\n  EventEmitter.init.call(this);\n}\nmodule.exports = EventEmitter;\nmodule.exports.once = once;\n\n// Backwards-compat with node 0.10.x\nEventEmitter.EventEmitter = EventEmitter;\n\nEventEmitter.prototype._events = undefined;\nEventEmitter.prototype._eventsCount = 0;\nEventEmitter.prototype._maxListeners = undefined;\n\n// By default EventEmitters will print a warning if more than 10 listeners are\n// added to it. This is a useful default which helps finding memory leaks.\nvar defaultMaxListeners = 10;\n\nfunction checkListener(listener) {\n  if (typeof listener !== 'function') {\n    throw new TypeError('The \"listener\" argument must be of type Function. Received type ' + typeof listener);\n  }\n}\n\nObject.defineProperty(EventEmitter, 'defaultMaxListeners', {\n  enumerable: true,\n  get: function() {\n    return defaultMaxListeners;\n  },\n  set: function(arg) {\n    if (typeof arg !== 'number' || arg < 0 || NumberIsNaN(arg)) {\n      throw new RangeError('The value of \"defaultMaxListeners\" is out of range. It must be a non-negative number. Received ' + arg + '.');\n    }\n    defaultMaxListeners = arg;\n  }\n});\n\nEventEmitter.init = function() {\n\n  if (this._events === undefined ||\n      this._events === Object.getPrototypeOf(this)._events) {\n    this._events = Object.create(null);\n    this._eventsCount = 0;\n  }\n\n  this._maxListeners = this._maxListeners || undefined;\n};\n\n// Obviously not all Emitters should be limited to 10. This function allows\n// that to be increased. Set to zero for unlimited.\nEventEmitter.prototype.setMaxListeners = function setMaxListeners(n) {\n  if (typeof n !== 'number' || n < 0 || NumberIsNaN(n)) {\n    throw new RangeError('The value of \"n\" is out of range. It must be a non-negative number. Received ' + n + '.');\n  }\n  this._maxListeners = n;\n  return this;\n};\n\nfunction _getMaxListeners(that) {\n  if (that._maxListeners === undefined)\n    return EventEmitter.defaultMaxListeners;\n  return that._maxListeners;\n}\n\nEventEmitter.prototype.getMaxListeners = function getMaxListeners() {\n  return _getMaxListeners(this);\n};\n\nEventEmitter.prototype.emit = function emit(type) {\n  var args = [];\n  for (var i = 1; i < arguments.length; i++) args.push(arguments[i]);\n  var doError = (type === 'error');\n\n  var events = this._events;\n  if (events !== undefined)\n    doError = (doError && events.error === undefined);\n  else if (!doError)\n    return false;\n\n  // If there is no 'error' event listener then throw.\n  if (doError) {\n    var er;\n    if (args.length > 0)\n      er = args[0];\n    if (er instanceof Error) {\n      // Note: The comments on the `throw` lines are intentional, they show\n      // up in Node's output if this results in an unhandled exception.\n      throw er; // Unhandled 'error' event\n    }\n    // At least give some kind of context to the user\n    var err = new Error('Unhandled error.' + (er ? ' (' + er.message + ')' : ''));\n    err.context = er;\n    throw err; // Unhandled 'error' event\n  }\n\n  var handler = events[type];\n\n  if (handler === undefined)\n    return false;\n\n  if (typeof handler === 'function') {\n    ReflectApply(handler, this, args);\n  } else {\n    var len = handler.length;\n    var listeners = arrayClone(handler, len);\n    for (var i = 0; i < len; ++i)\n      ReflectApply(listeners[i], this, args);\n  }\n\n  return true;\n};\n\nfunction _addListener(target, type, listener, prepend) {\n  var m;\n  var events;\n  var existing;\n\n  checkListener(listener);\n\n  events = target._events;\n  if (events === undefined) {\n    events = target._events = Object.create(null);\n    target._eventsCount = 0;\n  } else {\n    // To avoid recursion in the case that type === \"newListener\"! Before\n    // adding it to the listeners, first emit \"newListener\".\n    if (events.newListener !== undefined) {\n      target.emit('newListener', type,\n                  listener.listener ? listener.listener : listener);\n\n      // Re-assign `events` because a newListener handler could have caused the\n      // this._events to be assigned to a new object\n      events = target._events;\n    }\n    existing = events[type];\n  }\n\n  if (existing === undefined) {\n    // Optimize the case of one listener. Don't need the extra array object.\n    existing = events[type] = listener;\n    ++target._eventsCount;\n  } else {\n    if (typeof existing === 'function') {\n      // Adding the second element, need to change to array.\n      existing = events[type] =\n        prepend ? [listener, existing] : [existing, listener];\n      // If we've already got an array, just append.\n    } else if (prepend) {\n      existing.unshift(listener);\n    } else {\n      existing.push(listener);\n    }\n\n    // Check for listener leak\n    m = _getMaxListeners(target);\n    if (m > 0 && existing.length > m && !existing.warned) {\n      existing.warned = true;\n      // No error code for this since it is a Warning\n      // eslint-disable-next-line no-restricted-syntax\n      var w = new Error('Possible EventEmitter memory leak detected. ' +\n                          existing.length + ' ' + String(type) + ' listeners ' +\n                          'added. Use emitter.setMaxListeners() to ' +\n                          'increase limit');\n      w.name = 'MaxListenersExceededWarning';\n      w.emitter = target;\n      w.type = type;\n      w.count = existing.length;\n      ProcessEmitWarning(w);\n    }\n  }\n\n  return target;\n}\n\nEventEmitter.prototype.addListener = function addListener(type, listener) {\n  return _addListener(this, type, listener, false);\n};\n\nEventEmitter.prototype.on = EventEmitter.prototype.addListener;\n\nEventEmitter.prototype.prependListener =\n    function prependListener(type, listener) {\n      return _addListener(this, type, listener, true);\n    };\n\nfunction onceWrapper() {\n  if (!this.fired) {\n    this.target.removeListener(this.type, this.wrapFn);\n    this.fired = true;\n    if (arguments.length === 0)\n      return this.listener.call(this.target);\n    return this.listener.apply(this.target, arguments);\n  }\n}\n\nfunction _onceWrap(target, type, listener) {\n  var state = { fired: false, wrapFn: undefined, target: target, type: type, listener: listener };\n  var wrapped = onceWrapper.bind(state);\n  wrapped.listener = listener;\n  state.wrapFn = wrapped;\n  return wrapped;\n}\n\nEventEmitter.prototype.once = function once(type, listener) {\n  checkListener(listener);\n  this.on(type, _onceWrap(this, type, listener));\n  return this;\n};\n\nEventEmitter.prototype.prependOnceListener =\n    function prependOnceListener(type, listener) {\n      checkListener(listener);\n      this.prependListener(type, _onceWrap(this, type, listener));\n      return this;\n    };\n\n// Emits a 'removeListener' event if and only if the listener was removed.\nEventEmitter.prototype.removeListener =\n    function removeListener(type, listener) {\n      var list, events, position, i, originalListener;\n\n      checkListener(listener);\n\n      events = this._events;\n      if (events === undefined)\n        return this;\n\n      list = events[type];\n      if (list === undefined)\n        return this;\n\n      if (list === listener || list.listener === listener) {\n        if (--this._eventsCount === 0)\n          this._events = Object.create(null);\n        else {\n          delete events[type];\n          if (events.removeListener)\n            this.emit('removeListener', type, list.listener || listener);\n        }\n      } else if (typeof list !== 'function') {\n        position = -1;\n\n        for (i = list.length - 1; i >= 0; i--) {\n          if (list[i] === listener || list[i].listener === listener) {\n            originalListener = list[i].listener;\n            position = i;\n            break;\n          }\n        }\n\n        if (position < 0)\n          return this;\n\n        if (position === 0)\n          list.shift();\n        else {\n          spliceOne(list, position);\n        }\n\n        if (list.length === 1)\n          events[type] = list[0];\n\n        if (events.removeListener !== undefined)\n          this.emit('removeListener', type, originalListener || listener);\n      }\n\n      return this;\n    };\n\nEventEmitter.prototype.off = EventEmitter.prototype.removeListener;\n\nEventEmitter.prototype.removeAllListeners =\n    function removeAllListeners(type) {\n      var listeners, events, i;\n\n      events = this._events;\n      if (events === undefined)\n        return this;\n\n      // not listening for removeListener, no need to emit\n      if (events.removeListener === undefined) {\n        if (arguments.length === 0) {\n          this._events = Object.create(null);\n          this._eventsCount = 0;\n        } else if (events[type] !== undefined) {\n          if (--this._eventsCount === 0)\n            this._events = Object.create(null);\n          else\n            delete events[type];\n        }\n        return this;\n      }\n\n      // emit removeListener for all listeners on all events\n      if (arguments.length === 0) {\n        var keys = Object.keys(events);\n        var key;\n        for (i = 0; i < keys.length; ++i) {\n          key = keys[i];\n          if (key === 'removeListener') continue;\n          this.removeAllListeners(key);\n        }\n        this.removeAllListeners('removeListener');\n        this._events = Object.create(null);\n        this._eventsCount = 0;\n        return this;\n      }\n\n      listeners = events[type];\n\n      if (typeof listeners === 'function') {\n        this.removeListener(type, listeners);\n      } else if (listeners !== undefined) {\n        // LIFO order\n        for (i = listeners.length - 1; i >= 0; i--) {\n          this.removeListener(type, listeners[i]);\n        }\n      }\n\n      return this;\n    };\n\nfunction _listeners(target, type, unwrap) {\n  var events = target._events;\n\n  if (events === undefined)\n    return [];\n\n  var evlistener = events[type];\n  if (evlistener === undefined)\n    return [];\n\n  if (typeof evlistener === 'function')\n    return unwrap ? [evlistener.listener || evlistener] : [evlistener];\n\n  return unwrap ?\n    unwrapListeners(evlistener) : arrayClone(evlistener, evlistener.length);\n}\n\nEventEmitter.prototype.listeners = function listeners(type) {\n  return _listeners(this, type, true);\n};\n\nEventEmitter.prototype.rawListeners = function rawListeners(type) {\n  return _listeners(this, type, false);\n};\n\nEventEmitter.listenerCount = function(emitter, type) {\n  if (typeof emitter.listenerCount === 'function') {\n    return emitter.listenerCount(type);\n  } else {\n    return listenerCount.call(emitter, type);\n  }\n};\n\nEventEmitter.prototype.listenerCount = listenerCount;\nfunction listenerCount(type) {\n  var events = this._events;\n\n  if (events !== undefined) {\n    var evlistener = events[type];\n\n    if (typeof evlistener === 'function') {\n      return 1;\n    } else if (evlistener !== undefined) {\n      return evlistener.length;\n    }\n  }\n\n  return 0;\n}\n\nEventEmitter.prototype.eventNames = function eventNames() {\n  return this._eventsCount > 0 ? ReflectOwnKeys(this._events) : [];\n};\n\nfunction arrayClone(arr, n) {\n  var copy = new Array(n);\n  for (var i = 0; i < n; ++i)\n    copy[i] = arr[i];\n  return copy;\n}\n\nfunction spliceOne(list, index) {\n  for (; index + 1 < list.length; index++)\n    list[index] = list[index + 1];\n  list.pop();\n}\n\nfunction unwrapListeners(arr) {\n  var ret = new Array(arr.length);\n  for (var i = 0; i < ret.length; ++i) {\n    ret[i] = arr[i].listener || arr[i];\n  }\n  return ret;\n}\n\nfunction once(emitter, name) {\n  return new Promise(function (resolve, reject) {\n    function eventListener() {\n      if (errorListener !== undefined) {\n        emitter.removeListener('error', errorListener);\n      }\n      resolve([].slice.call(arguments));\n    };\n    var errorListener;\n\n    // Adding an error listener is not optional because\n    // if an error is thrown on an event emitter we cannot\n    // guarantee that the actual event we are waiting will\n    // be fired. The result could be a silent way to create\n    // memory or file descriptor leaks, which is something\n    // we should avoid.\n    if (name !== 'error') {\n      errorListener = function errorListener(err) {\n        emitter.removeListener(name, eventListener);\n        reject(err);\n      };\n\n      emitter.once('error', errorListener);\n    }\n\n    emitter.once(name, eventListener);\n  });\n}\n\n\n//# sourceURL=webpack:///./node_modules/events/events.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_dropdownMenu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/dropdownMenu */ \"./src/modules/dropdownMenu.js\");\n/* harmony import */ var _modules_modalVisitForm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/modalVisitForm */ \"./src/modules/modalVisitForm.js\");\n/* harmony import */ var _modules_modalCallbackForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/modalCallbackForm */ \"./src/modules/modalCallbackForm.js\");\n/* harmony import */ var _modules_modalGift__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/modalGift */ \"./src/modules/modalGift.js\");\n/* harmony import */ var _modules_burgerMenu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/burgerMenu */ \"./src/modules/burgerMenu.js\");\n/* harmony import */ var _modules_sliderMainPage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/sliderMainPage */ \"./src/modules/sliderMainPage.js\");\n/* harmony import */ var _modules_sliderServices__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/sliderServices */ \"./src/modules/sliderServices.js\");\n/* harmony import */ var _modules_sliderGallery__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/sliderGallery */ \"./src/modules/sliderGallery.js\");\n/* harmony import */ var _modules_calculator__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modules/calculator */ \"./src/modules/calculator.js\");\n\n\n\n\n\n\n\n\n\n\n\nObject(_modules_dropdownMenu__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\nObject(_modules_burgerMenu__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\nObject(_modules_modalVisitForm__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\nObject(_modules_modalCallbackForm__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\nObject(_modules_modalGift__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\nObject(_modules_sliderMainPage__WEBPACK_IMPORTED_MODULE_5__[\"default\"])();\nObject(_modules_sliderServices__WEBPACK_IMPORTED_MODULE_6__[\"default\"])();\nObject(_modules_sliderGallery__WEBPACK_IMPORTED_MODULE_7__[\"showDots\"])();\nObject(_modules_sliderGallery__WEBPACK_IMPORTED_MODULE_7__[\"sliderGallery\"])();\nObject(_modules_calculator__WEBPACK_IMPORTED_MODULE_8__[\"default\"])();\n\n//# sourceURL=webpack:///./src/index.js?");

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
eval("__webpack_require__.r(__webpack_exports__);\nvar calculator = function calculator() {\n  var form = document.getElementById('card_order'),\n      time = document.querySelector('.time'),\n      priceTotal = document.getElementById('price-total');\n  var mozaikaPrices = new Array();\n  mozaikaPrices[\"1\"] = 1999;\n  mozaikaPrices[\"6\"] = 9900;\n  mozaikaPrices[\"9\"] = 13900;\n  mozaikaPrices[\"12\"] = 19900;\n  var schelkovoPrices = new Array();\n  schelkovoPrices[\"1\"] = 2999;\n  schelkovoPrices[\"6\"] = 14990;\n  schelkovoPrices[\"9\"] = 21990;\n  schelkovoPrices[\"12\"] = 24990;\n  var period = 1;\n  var priceList = [];\n\n  var getPeriod = function getPeriod() {\n    time.addEventListener('click', function (event) {\n      var clubName = document.getElementsByName('club-name');\n\n      if (clubName[0].checked) {\n        priceList = mozaikaPrices;\n      } else if (clubName[1].checked) {\n        priceList = schelkovoPrices;\n      }\n\n      var target = event.target;\n\n      if (target.previousElementSibling.value === '1') {\n        target.previousElementSibling.checked = true;\n        period = '1';\n        changePrice(priceList, period);\n      }\n\n      if (target.previousElementSibling.value === '6') {\n        target.previousElementSibling.checked = true;\n        period = '6';\n        changePrice(priceList, period);\n      }\n\n      if (target.previousElementSibling.value === '9') {\n        target.previousElementSibling.checked = true;\n        period = '9';\n        changePrice(priceList, period);\n      }\n\n      if (target.previousElementSibling.value === '12') {\n        target.previousElementSibling.checked = true;\n        period = '12';\n        changePrice(priceList, period);\n      }\n    });\n    return period;\n  };\n\n  var changePrice = function changePrice(priceList, period) {\n    priceTotal.textContent = priceList[period];\n  };\n\n  form.addEventListener('click', function (event) {\n    var target = event.target;\n    getPeriod();\n\n    if (target.previousElementSibling.value === 'schelkovo') {\n      target.previousElementSibling.checked = true;\n      changePrice(schelkovoPrices, period);\n    }\n\n    if (target.previousElementSibling.value === 'mozaika') {\n      target.previousElementSibling.checked = true;\n      changePrice(mozaikaPrices, period);\n    }\n  });\n  getPeriod();\n  changePrice(mozaikaPrices, period);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (calculator);\n\n//# sourceURL=webpack:///./src/modules/calculator.js?");

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
eval("__webpack_require__.r(__webpack_exports__);\nvar modalGift = function modalGift() {\n  var form = document.getElementById('gift');\n  document.addEventListener('click', function (event) {\n    var target = event.target;\n\n    if (target.closest('.fixed-gift')) {\n      form.style.display = 'block';\n      document.querySelector('.fixed-gift').style.display = 'none';\n    }\n  });\n  form.addEventListener('click', function (event) {\n    var target = event.target;\n\n    if (target.classList.contains('close_icon') || !target.closest('.form-content') || target.classList.contains('close-btn')) {\n      form.style.display = 'none';\n    }\n  });\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (modalGift);\n\n//# sourceURL=webpack:///./src/modules/modalGift.js?");

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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"sliderGallery\", function() { return sliderGallery; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"showDots\", function() { return showDots; });\nvar sliderGallery = function sliderGallery() {\n  var slide = document.querySelectorAll('.gallery-slide'),\n      dot = document.querySelectorAll('.slider-dots'),\n      slider = document.querySelector('.gallery-slider');\n  var currentSlide = 0,\n      interval;\n\n  var prevSlide = function prevSlide(elem, index, strClass) {\n    elem[index].classList.remove(strClass);\n  };\n\n  var nextSlide = function nextSlide(elem, index, strClass) {\n    elem[index].classList.add(strClass);\n  };\n\n  var autoPlaySlider = function autoPlaySlider() {\n    prevSlide(slide, currentSlide, 'gallery-slide-active');\n    prevSlide(dot, currentSlide, 'gallery-dot-active');\n    currentSlide++;\n\n    if (currentSlide >= slide.length) {\n      currentSlide = 0;\n    }\n\n    nextSlide(slide, currentSlide, 'gallery-slide-active');\n    nextSlide(dot, currentSlide, 'gallery-dot-active');\n  };\n\n  var startSlide = function startSlide() {\n    var time = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 3000;\n    interval = setInterval(autoPlaySlider, time);\n  };\n\n  var stopSlide = function stopSlide() {\n    clearInterval(interval);\n  };\n\n  slider.addEventListener('click', function (event) {\n    event.preventDefault();\n    var target = event.target; //console.log(target);\n\n    if (!target.matches('.slider-arrow, .slider-dots')) {\n      return;\n    }\n\n    prevSlide(slide, currentSlide, 'gallery-slide-active');\n    prevSlide(dot, currentSlide, 'gallery-dot-active');\n\n    if (target.matches('#arrow-right')) {\n      currentSlide++;\n    }\n\n    if (target.matches('#arrow-left')) {\n      currentSlide--;\n    }\n\n    if (target.closest('.slider-dots')) {\n      dot.forEach(function (elem, index) {\n        if (elem === target) {\n          currentSlide = index;\n        }\n      });\n    }\n\n    if (currentSlide >= slide.length) {\n      currentSlide = 0;\n    }\n\n    if (currentSlide < 0) {\n      currentSlide = slide.length - 1;\n    }\n\n    nextSlide(slide, currentSlide, 'gallery-slide-active');\n    nextSlide(dot, currentSlide, 'gallery-dot-active');\n  });\n  slider.addEventListener('mouseover', function (event) {\n    if (event.target.matches('.slider-arrow') || event.target.matches('.slider-dots')) {\n      stopSlide();\n    }\n  });\n  slider.addEventListener('mouseout', function (event) {\n    if (event.target.matches('.slider-arrow') || event.target.matches('.slider-dots')) {\n      startSlide();\n    }\n  });\n  startSlide(3000);\n};\n\nvar showDots = function showDots() {\n  var dotsContainer = document.querySelector('.slider-dots-container'),\n      slide = document.querySelectorAll('.gallery-slide');\n\n  for (var i = 0; i < slide.length; i++) {\n    var dot = document.createElement('li');\n    dot.classList.add('slider-dots');\n    dotsContainer.append(dot);\n  }\n\n  var firstDot = document.querySelector('.slider-dots');\n  firstDot.classList.add('gallery-dot-active');\n};\n\n\n\n//# sourceURL=webpack:///./src/modules/sliderGallery.js?");

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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var events__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! events */ \"./node_modules/events/events.js\");\n/* harmony import */ var events__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(events__WEBPACK_IMPORTED_MODULE_0__);\n\n\nvar sliderServices = function sliderServices() {\n  var slider = document.querySelector('.services-slider'),\n      slide = slider.querySelectorAll('.slide');\n  var currentSlide = 0,\n      slidesToShow = 4;\n  slide.forEach(function (elem) {\n    //elem.style.flex = `0 0 ${Math.floor(100/slidesToShow)}%;`\n    elem.style.flex = '0 0 25%';\n  });\n  document.addEventListener('click', function (event) {\n    event.preventDefault();\n    var target = event.target;\n\n    if (!target.matches('.slider-arrow')) {\n      return;\n    }\n\n    if (target.matches('#serv-arrow-right')) {\n      currentSlide++;\n\n      if (currentSlide >= slide.length - slidesToShow) {\n        currentSlide = 0;\n      }\n\n      slider.style.transform = \"translateX(-\".concat(currentSlide * 25, \"%)\");\n    }\n\n    if (target.matches('#serv-arrow-left')) {\n      currentSlide--;\n\n      if (currentSlide < 0) {\n        currentSlide = slide.length - slidesToShow;\n      }\n\n      slider.style.transform = \"translateX(-\".concat(currentSlide * 25, \"%)\");\n    }\n  });\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (sliderServices);\n\n//# sourceURL=webpack:///./src/modules/sliderServices.js?");

/***/ })

/******/ });