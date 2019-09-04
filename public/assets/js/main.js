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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/assets/js/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/assets/js/main.js":
/*!*******************************!*\
  !*** ./src/assets/js/main.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// Write Code Here
$(document).ready(function () {
    var imageHeight = $(".item-list ul li img").height();
    $(".item-list ul li .user-details").css("height", imageHeight);
    $(".item-list ul li .user-details").hide();

    $('.item-list ul li').on('mouseenter touchstart', function () {
        if ($(this).find(".user-details").css('display') == 'block') {
            return;
        }
        var containerWidth = $(".item-list").outerWidth();
        var currentBlockStart = $(this).position().left;
        var currentBlockWidth = $(this).outerWidth();
        var currentBlockTopPosition = $(this).position().top;
        var currentElement = this;
        $(".item-list ul li").each(function () {
            if (this !== currentElement) {
                $(this).addClass('imageOverlay');
            }
        });
        $(currentElement).find(".user-details").show();
        $(currentElement).find(".user-details").css({ "left": currentBlockStart, "top": currentBlockTopPosition, "width": currentBlockWidth });
        if (containerWidth - currentBlockStart > currentBlockWidth) {
            $(currentElement).next("li").removeClass("imageOverlay");
            $(currentElement).find(".user-details").animate({ left: currentBlockStart + currentBlockWidth }, "fast");
        } else {
            $(currentElement).prev("li").removeClass("imageOverlay");
            $(currentElement).find(".user-details").animate({ left: currentBlockStart - currentBlockWidth }, "fast");
        }
    });

    $('.item-list ul li').on('mouseleave touchend', function () {
        if ($(this).find(".user-details").css('display') == 'none') {
            return;
        }
        var that = this;
        $(that).find(".user-details").hide();
        $(that).find(".user-details").css("left", "0px");
        $(that).find(".user-details").css("top", "0px");
        $(".item-list ul li").each(function () {
            $(this).removeClass('imageOverlay');
        });
    });
});

/***/ })

/******/ });
//# sourceMappingURL=main.js.map