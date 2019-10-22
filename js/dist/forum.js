module.exports =
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./forum.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./forum.js":
/*!******************!*\
  !*** ./forum.js ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_forum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/forum */ "./src/forum/index.js");
/* empty/unused harmony star reexport *//*
 * This file is part of Flarum.
 *
 * (c) Toby Zerner <toby.zerner@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */


/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/extends.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/extends.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _extends; });
function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _inheritsLoose; });
function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}

/***/ }),

/***/ "./src/forum/addFlagControl.js":
/*!*************************************!*\
  !*** ./src/forum/addFlagControl.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var flarum_extend__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! flarum/extend */ "flarum/extend");
/* harmony import */ var flarum_extend__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(flarum_extend__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var flarum_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/app */ "flarum/app");
/* harmony import */ var flarum_app__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_app__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_utils_PostControls__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/utils/PostControls */ "flarum/utils/PostControls");
/* harmony import */ var flarum_utils_PostControls__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_utils_PostControls__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_components_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/components/Button */ "flarum/components/Button");
/* harmony import */ var flarum_components_Button__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_components_Button__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_FlagPostModal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/FlagPostModal */ "./src/forum/components/FlagPostModal.js");





/* harmony default export */ __webpack_exports__["default"] = (function () {
  Object(flarum_extend__WEBPACK_IMPORTED_MODULE_0__["extend"])(flarum_utils_PostControls__WEBPACK_IMPORTED_MODULE_2___default.a, 'userControls', function (items, post) {
    console.log(flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.forum.attribute('canFlagOwn'));
    if (post.isHidden() || post.contentType() !== 'comment' || !post.canFlag() || post.user() === flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.session.user && !Number(flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.forum.attribute('canFlagOwn'))) return;
    items.add('flag', m(flarum_components_Button__WEBPACK_IMPORTED_MODULE_3___default.a, {
      icon: "fas fa-flag",
      onclick: function onclick() {
        return flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.modal.show(new _components_FlagPostModal__WEBPACK_IMPORTED_MODULE_4__["default"]({
          post: post
        }));
      }
    }, flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans('flarum-flags.forum.post_controls.flag_button')));
  });
});

/***/ }),

/***/ "./src/forum/addFlagsDropdown.js":
/*!***************************************!*\
  !*** ./src/forum/addFlagsDropdown.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var flarum_extend__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! flarum/extend */ "flarum/extend");
/* harmony import */ var flarum_extend__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(flarum_extend__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var flarum_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/app */ "flarum/app");
/* harmony import */ var flarum_app__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_app__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_components_HeaderSecondary__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/components/HeaderSecondary */ "flarum/components/HeaderSecondary");
/* harmony import */ var flarum_components_HeaderSecondary__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_components_HeaderSecondary__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_FlagsDropdown__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/FlagsDropdown */ "./src/forum/components/FlagsDropdown.js");




/* harmony default export */ __webpack_exports__["default"] = (function () {
  Object(flarum_extend__WEBPACK_IMPORTED_MODULE_0__["extend"])(flarum_components_HeaderSecondary__WEBPACK_IMPORTED_MODULE_2___default.a.prototype, 'items', function (items) {
    if (flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.forum.attribute('canViewFlags')) {
      items.add('flags', m(_components_FlagsDropdown__WEBPACK_IMPORTED_MODULE_3__["default"], null), 15);
    }
  });
});

/***/ }),

/***/ "./src/forum/addFlagsToPosts.js":
/*!**************************************!*\
  !*** ./src/forum/addFlagsToPosts.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var flarum_extend__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! flarum/extend */ "flarum/extend");
/* harmony import */ var flarum_extend__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(flarum_extend__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var flarum_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/app */ "flarum/app");
/* harmony import */ var flarum_app__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_app__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_components_Post__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/components/Post */ "flarum/components/Post");
/* harmony import */ var flarum_components_Post__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_components_Post__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_components_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/components/Button */ "flarum/components/Button");
/* harmony import */ var flarum_components_Button__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_components_Button__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var flarum_utils_ItemList__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! flarum/utils/ItemList */ "flarum/utils/ItemList");
/* harmony import */ var flarum_utils_ItemList__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(flarum_utils_ItemList__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var flarum_utils_PostControls__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! flarum/utils/PostControls */ "flarum/utils/PostControls");
/* harmony import */ var flarum_utils_PostControls__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(flarum_utils_PostControls__WEBPACK_IMPORTED_MODULE_5__);






/* harmony default export */ __webpack_exports__["default"] = (function () {
  Object(flarum_extend__WEBPACK_IMPORTED_MODULE_0__["extend"])(flarum_components_Post__WEBPACK_IMPORTED_MODULE_2___default.a.prototype, 'attrs', function (attrs) {
    if (this.props.post.flags().length) {
      attrs.className += ' Post--flagged';
    }
  });

  flarum_components_Post__WEBPACK_IMPORTED_MODULE_2___default.a.prototype.dismissFlag = function (data) {
    var post = this.props.post;
    delete post.data.relationships.flags;
    this.subtree.invalidate();

    if (flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.cache.flags) {
      flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.cache.flags.some(function (flag, i) {
        if (flag.post() === post) {
          flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.cache.flags.splice(i, 1);

          if (flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.cache.flagIndex === post) {
            var next = flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.cache.flags[i];
            if (!next) next = flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.cache.flags[0];

            if (next) {
              var nextPost = next.post();
              flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.cache.flagIndex = nextPost;
              m.route(flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.route.post(nextPost));
            }
          }

          return true;
        }
      });
    }

    return flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.request({
      url: flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.forum.attribute('apiUrl') + post.apiEndpoint() + '/flags',
      method: 'DELETE',
      data: data
    });
  };

  flarum_components_Post__WEBPACK_IMPORTED_MODULE_2___default.a.prototype.flagActionItems = function () {
    var _this = this;

    var items = new flarum_utils_ItemList__WEBPACK_IMPORTED_MODULE_4___default.a();
    var controls = flarum_utils_PostControls__WEBPACK_IMPORTED_MODULE_5___default.a.destructiveControls(this.props.post);
    Object.keys(controls.items).forEach(function (k) {
      var props = controls.get(k).props;
      props.className = 'Button';
      Object(flarum_extend__WEBPACK_IMPORTED_MODULE_0__["extend"])(props, 'onclick', function () {
        return _this.dismissFlag();
      });
    });
    items.add('controls', m("div", {
      className: "ButtonGroup"
    }, controls.toArray()));
    items.add('dismiss', m(flarum_components_Button__WEBPACK_IMPORTED_MODULE_3___default.a, {
      className: "Button",
      icon: "far fa-eye-slash",
      onclick: this.dismissFlag.bind(this)
    }, flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans('flarum-flags.forum.post.dismiss_flag_button')), -100);
    return items;
  };

  Object(flarum_extend__WEBPACK_IMPORTED_MODULE_0__["extend"])(flarum_components_Post__WEBPACK_IMPORTED_MODULE_2___default.a.prototype, 'content', function (vdom) {
    var _this2 = this;

    var post = this.props.post;
    var flags = post.flags();
    if (!flags.length) return;
    if (post.isHidden()) this.revealContent = true;
    vdom.unshift(m("div", {
      className: "Post-flagged"
    }, m("div", {
      className: "Post-flagged-flags"
    }, flags.map(function (flag) {
      return m("div", {
        className: "Post-flagged-flag"
      }, _this2.flagReason(flag));
    })), m("div", {
      className: "Post-flagged-actions"
    }, this.flagActionItems().toArray())));
  });

  flarum_components_Post__WEBPACK_IMPORTED_MODULE_2___default.a.prototype.flagReason = function (flag) {
    if (flag.type() === 'user') {
      var user = flag.user();
      var reason = flag.reason();
      var detail = flag.reasonDetail();
      return [flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans(reason ? 'flarum-flags.forum.post.flagged_by_with_reason_text' : 'flarum-flags.forum.post.flagged_by_text', {
        user: user,
        reason: reason
      }), detail ? m("span", {
        className: "Post-flagged-detail"
      }, detail) : ''];
    }
  };
});

/***/ }),

/***/ "./src/forum/compat.js":
/*!*****************************!*\
  !*** ./src/forum/compat.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _addFlagsToPosts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./addFlagsToPosts */ "./src/forum/addFlagsToPosts.js");
/* harmony import */ var _addFlagControl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./addFlagControl */ "./src/forum/addFlagControl.js");
/* harmony import */ var _addFlagsDropdown__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./addFlagsDropdown */ "./src/forum/addFlagsDropdown.js");
/* harmony import */ var _models_Flag__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./models/Flag */ "./src/forum/models/Flag.js");
/* harmony import */ var _components_FlagList__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/FlagList */ "./src/forum/components/FlagList.js");
/* harmony import */ var _components_FlagPostModal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/FlagPostModal */ "./src/forum/components/FlagPostModal.js");
/* harmony import */ var _components_FlagsPage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/FlagsPage */ "./src/forum/components/FlagsPage.js");
/* harmony import */ var _components_FlagsDropdown__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/FlagsDropdown */ "./src/forum/components/FlagsDropdown.js");








/* harmony default export */ __webpack_exports__["default"] = ({
  'flags/addFlagsToPosts': _addFlagsToPosts__WEBPACK_IMPORTED_MODULE_0__["default"],
  'flags/addFlagControl': _addFlagControl__WEBPACK_IMPORTED_MODULE_1__["default"],
  'flags/addFlagsDropdown': _addFlagsDropdown__WEBPACK_IMPORTED_MODULE_2__["default"],
  'flags/models/Flag': _models_Flag__WEBPACK_IMPORTED_MODULE_3__["default"],
  'flags/components/FlagList': _components_FlagList__WEBPACK_IMPORTED_MODULE_4__["default"],
  'flags/components/FlagPostModal': _components_FlagPostModal__WEBPACK_IMPORTED_MODULE_5__["default"],
  'flags/components/FlagsPage': _components_FlagsPage__WEBPACK_IMPORTED_MODULE_6__["default"],
  'flags/components/FlagsDropdown': _components_FlagsDropdown__WEBPACK_IMPORTED_MODULE_7__["default"]
});

/***/ }),

/***/ "./src/forum/components/FlagList.js":
/*!******************************************!*\
  !*** ./src/forum/components/FlagList.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return FlagList; });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_Component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/Component */ "flarum/Component");
/* harmony import */ var flarum_Component__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_Component__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_components_LoadingIndicator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/components/LoadingIndicator */ "flarum/components/LoadingIndicator");
/* harmony import */ var flarum_components_LoadingIndicator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_components_LoadingIndicator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_helpers_avatar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/helpers/avatar */ "flarum/helpers/avatar");
/* harmony import */ var flarum_helpers_avatar__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_helpers_avatar__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var flarum_helpers_username__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! flarum/helpers/username */ "flarum/helpers/username");
/* harmony import */ var flarum_helpers_username__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(flarum_helpers_username__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var flarum_helpers_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! flarum/helpers/icon */ "flarum/helpers/icon");
/* harmony import */ var flarum_helpers_icon__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(flarum_helpers_icon__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var flarum_helpers_humanTime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! flarum/helpers/humanTime */ "flarum/helpers/humanTime");
/* harmony import */ var flarum_helpers_humanTime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(flarum_helpers_humanTime__WEBPACK_IMPORTED_MODULE_6__);








var FlagList =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(FlagList, _Component);

  function FlagList() {
    return _Component.apply(this, arguments) || this;
  }

  var _proto = FlagList.prototype;

  _proto.init = function init() {
    /**
     * Whether or not the notifications are loading.
     *
     * @type {Boolean}
     */
    this.loading = false;
  };

  _proto.view = function view() {
    var flags = app.cache.flags || [];
    return m("div", {
      className: "NotificationList FlagList"
    }, m("div", {
      className: "NotificationList-header"
    }, m("h4", {
      className: "App-titleControl App-titleControl--text"
    }, app.translator.trans('flarum-flags.forum.flagged_posts.title'))), m("div", {
      className: "NotificationList-content"
    }, m("ul", {
      className: "NotificationGroup-content"
    }, flags.length ? flags.map(function (flag) {
      var post = flag.post();
      return m("li", null, m("a", {
        href: app.route.post(post),
        className: "Notification Flag",
        config: function config(element, isInitialized) {
          m.route.apply(this, arguments);
          if (!isInitialized) $(element).on('click', function () {
            return app.cache.flagIndex = post;
          });
        }
      }, flarum_helpers_avatar__WEBPACK_IMPORTED_MODULE_3___default()(post.user()), flarum_helpers_icon__WEBPACK_IMPORTED_MODULE_5___default()('fas fa-flag', {
        className: 'Notification-icon'
      }), m("span", {
        className: "Notification-content"
      }, app.translator.trans('flarum-flags.forum.flagged_posts.item_text', {
        username: flarum_helpers_username__WEBPACK_IMPORTED_MODULE_4___default()(post.user()),
        em: m("em", null),
        discussion: post.discussion().title()
      })), flarum_helpers_humanTime__WEBPACK_IMPORTED_MODULE_6___default()(flag.createdAt()), m("div", {
        className: "Notification-excerpt"
      }, post.contentPlain())));
    }) : !this.loading ? m("div", {
      className: "NotificationList-empty"
    }, app.translator.trans('flarum-flags.forum.flagged_posts.empty_text')) : flarum_components_LoadingIndicator__WEBPACK_IMPORTED_MODULE_2___default.a.component({
      className: 'LoadingIndicator--block'
    }))));
  };
  /**
   * Load flags into the application's cache if they haven't already
   * been loaded.
   */


  _proto.load = function load() {
    var _this = this;

    if (app.cache.flags && !app.session.user.attribute('newFlagCount')) {
      return;
    }

    this.loading = true;
    m.redraw();
    app.store.find('flags').then(function (flags) {
      app.session.user.pushAttributes({
        newFlagCount: 0
      });
      app.cache.flags = flags.sort(function (a, b) {
        return b.createdAt() - a.createdAt();
      });
    }).catch(function () {}).then(function () {
      _this.loading = false;
      m.redraw();
    });
  };

  return FlagList;
}(flarum_Component__WEBPACK_IMPORTED_MODULE_1___default.a);



/***/ }),

/***/ "./src/forum/components/FlagPostModal.js":
/*!***********************************************!*\
  !*** ./src/forum/components/FlagPostModal.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return FlagPostModal; });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_components_Modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/components/Modal */ "flarum/components/Modal");
/* harmony import */ var flarum_components_Modal__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_components_Modal__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_components_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/components/Button */ "flarum/components/Button");
/* harmony import */ var flarum_components_Button__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_components_Button__WEBPACK_IMPORTED_MODULE_2__);




var FlagPostModal =
/*#__PURE__*/
function (_Modal) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(FlagPostModal, _Modal);

  function FlagPostModal() {
    return _Modal.apply(this, arguments) || this;
  }

  var _proto = FlagPostModal.prototype;

  _proto.init = function init() {
    _Modal.prototype.init.call(this);

    this.success = false;
    this.reason = m.prop('');
    this.reasonDetail = m.prop('');
  };

  _proto.className = function className() {
    return 'FlagPostModal Modal--small';
  };

  _proto.title = function title() {
    return app.translator.trans('flarum-flags.forum.flag_post.title');
  };

  _proto.content = function content() {
    if (this.success) {
      return m("div", {
        className: "Modal-body"
      }, m("div", {
        className: "Form Form--centered"
      }, m("p", {
        className: "helpText"
      }, app.translator.trans('flarum-flags.forum.flag_post.confirmation_message')), m("div", {
        className: "Form-group"
      }, m(flarum_components_Button__WEBPACK_IMPORTED_MODULE_2___default.a, {
        className: "Button Button--primary Button--block",
        onclick: this.hide.bind(this)
      }, app.translator.trans('flarum-flags.forum.flag_post.dismiss_button')))));
    }

    var guidelinesUrl = app.forum.attribute('guidelinesUrl');
    return m("div", {
      className: "Modal-body"
    }, m("div", {
      className: "Form Form--centered"
    }, m("div", {
      className: "Form-group"
    }, m("div", null, m("label", {
      className: "checkbox"
    }, m("input", {
      type: "radio",
      name: "reason",
      checked: this.reason() === 'off_topic',
      value: "off_topic",
      onclick: m.withAttr('value', this.reason)
    }), m("strong", null, app.translator.trans('flarum-flags.forum.flag_post.reason_off_topic_label')), app.translator.trans('flarum-flags.forum.flag_post.reason_off_topic_text')), m("label", {
      className: "checkbox"
    }, m("input", {
      type: "radio",
      name: "reason",
      checked: this.reason() === 'inappropriate',
      value: "inappropriate",
      onclick: m.withAttr('value', this.reason)
    }), m("strong", null, app.translator.trans('flarum-flags.forum.flag_post.reason_inappropriate_label')), app.translator.trans('flarum-flags.forum.flag_post.reason_inappropriate_text', {
      a: guidelinesUrl ? m("a", {
        href: guidelinesUrl,
        target: "_blank"
      }) : undefined
    })), m("label", {
      className: "checkbox"
    }, m("input", {
      type: "radio",
      name: "reason",
      checked: this.reason() === 'spam',
      value: "spam",
      onclick: m.withAttr('value', this.reason)
    }), m("strong", null, app.translator.trans('flarum-flags.forum.flag_post.reason_spam_label')), app.translator.trans('flarum-flags.forum.flag_post.reason_spam_text')), m("label", {
      className: "checkbox"
    }, m("input", {
      type: "radio",
      name: "reason",
      checked: this.reason() === 'other',
      value: "other",
      onclick: m.withAttr('value', this.reason)
    }), m("strong", null, app.translator.trans('flarum-flags.forum.flag_post.reason_other_label')), this.reason() === 'other' ? m("textarea", {
      className: "FormControl",
      value: this.reasonDetail(),
      oninput: m.withAttr('value', this.reasonDetail)
    }) : ''))), m("div", {
      className: "Form-group"
    }, m(flarum_components_Button__WEBPACK_IMPORTED_MODULE_2___default.a, {
      className: "Button Button--primary Button--block",
      type: "submit",
      loading: this.loading,
      disabled: !this.reason()
    }, app.translator.trans('flarum-flags.forum.flag_post.submit_button')))));
  };

  _proto.onsubmit = function onsubmit(e) {
    var _this = this;

    e.preventDefault();
    this.loading = true;
    app.store.createRecord('flags').save({
      reason: this.reason() === 'other' ? null : this.reason(),
      reasonDetail: this.reasonDetail(),
      relationships: {
        user: app.session.user,
        post: this.props.post
      }
    }).then(function () {
      return _this.success = true;
    }).catch(function () {}).then(this.loaded.bind(this));
  };

  return FlagPostModal;
}(flarum_components_Modal__WEBPACK_IMPORTED_MODULE_1___default.a);



/***/ }),

/***/ "./src/forum/components/FlagsDropdown.js":
/*!***********************************************!*\
  !*** ./src/forum/components/FlagsDropdown.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return FlagsDropdown; });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_components_NotificationsDropdown__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/components/NotificationsDropdown */ "flarum/components/NotificationsDropdown");
/* harmony import */ var flarum_components_NotificationsDropdown__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_components_NotificationsDropdown__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _FlagList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./FlagList */ "./src/forum/components/FlagList.js");




var FlagsDropdown =
/*#__PURE__*/
function (_NotificationsDropdow) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(FlagsDropdown, _NotificationsDropdow);

  function FlagsDropdown() {
    return _NotificationsDropdow.apply(this, arguments) || this;
  }

  FlagsDropdown.initProps = function initProps(props) {
    props.label = props.label || app.translator.trans('flarum-flags.forum.flagged_posts.tooltip');
    props.icon = props.icon || 'fas fa-flag';

    _NotificationsDropdow.initProps.call(this, props);
  };

  var _proto = FlagsDropdown.prototype;

  _proto.init = function init() {
    _NotificationsDropdow.prototype.init.call(this);

    this.list = new _FlagList__WEBPACK_IMPORTED_MODULE_2__["default"]();
  };

  _proto.goToRoute = function goToRoute() {
    m.route(app.route('flags'));
  };

  _proto.getUnreadCount = function getUnreadCount() {
    return app.cache.flags ? app.cache.flags.length : app.forum.attribute('flagCount');
  };

  _proto.getNewCount = function getNewCount() {
    return app.session.user.attribute('newFlagCount');
  };

  return FlagsDropdown;
}(flarum_components_NotificationsDropdown__WEBPACK_IMPORTED_MODULE_1___default.a);



/***/ }),

/***/ "./src/forum/components/FlagsPage.js":
/*!*******************************************!*\
  !*** ./src/forum/components/FlagsPage.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return FlagsPage; });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_components_Page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/components/Page */ "flarum/components/Page");
/* harmony import */ var flarum_components_Page__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_components_Page__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _FlagList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./FlagList */ "./src/forum/components/FlagList.js");



/**
 * The `FlagsPage` component shows the flags list. It is only
 * used on mobile devices where the flags dropdown is within the drawer.
 */

var FlagsPage =
/*#__PURE__*/
function (_Page) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(FlagsPage, _Page);

  function FlagsPage() {
    return _Page.apply(this, arguments) || this;
  }

  var _proto = FlagsPage.prototype;

  _proto.init = function init() {
    _Page.prototype.init.call(this);

    app.history.push('flags');
    this.list = new _FlagList__WEBPACK_IMPORTED_MODULE_2__["default"]();
    this.list.load();
    this.bodyClass = 'App--flags';
  };

  _proto.view = function view() {
    return m("div", {
      className: "FlagsPage"
    }, this.list.render());
  };

  return FlagsPage;
}(flarum_components_Page__WEBPACK_IMPORTED_MODULE_1___default.a);



/***/ }),

/***/ "./src/forum/index.js":
/*!****************************!*\
  !*** ./src/forum/index.js ***!
  \****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var flarum_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/app */ "flarum/app");
/* harmony import */ var flarum_app__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_app__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_Model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/Model */ "flarum/Model");
/* harmony import */ var flarum_Model__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_Model__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _models_Flag__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./models/Flag */ "./src/forum/models/Flag.js");
/* harmony import */ var _components_FlagsPage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/FlagsPage */ "./src/forum/components/FlagsPage.js");
/* harmony import */ var _addFlagControl__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./addFlagControl */ "./src/forum/addFlagControl.js");
/* harmony import */ var _addFlagsDropdown__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./addFlagsDropdown */ "./src/forum/addFlagsDropdown.js");
/* harmony import */ var _addFlagsToPosts__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./addFlagsToPosts */ "./src/forum/addFlagsToPosts.js");
/* harmony import */ var _compat__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./compat */ "./src/forum/compat.js");
/* harmony import */ var _flarum_core_forum__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @flarum/core/forum */ "@flarum/core/forum");
/* harmony import */ var _flarum_core_forum__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_flarum_core_forum__WEBPACK_IMPORTED_MODULE_9__);








flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.initializers.add('flarum-flags', function () {
  flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.store.models.posts.prototype.flags = flarum_Model__WEBPACK_IMPORTED_MODULE_2___default.a.hasMany('flags');
  flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.store.models.posts.prototype.canFlag = flarum_Model__WEBPACK_IMPORTED_MODULE_2___default.a.attribute('canFlag');
  flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.store.models.flags = _models_Flag__WEBPACK_IMPORTED_MODULE_3__["default"];
  flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.routes.flags = {
    path: '/flags',
    component: m(_components_FlagsPage__WEBPACK_IMPORTED_MODULE_4__["default"], null)
  };
  Object(_addFlagControl__WEBPACK_IMPORTED_MODULE_5__["default"])();
  Object(_addFlagsDropdown__WEBPACK_IMPORTED_MODULE_6__["default"])();
  Object(_addFlagsToPosts__WEBPACK_IMPORTED_MODULE_7__["default"])();
}); // Expose compat API




Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])(_flarum_core_forum__WEBPACK_IMPORTED_MODULE_9__["compat"], _compat__WEBPACK_IMPORTED_MODULE_8__["default"]);

/***/ }),

/***/ "./src/forum/models/Flag.js":
/*!**********************************!*\
  !*** ./src/forum/models/Flag.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_Model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/Model */ "flarum/Model");
/* harmony import */ var flarum_Model__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_Model__WEBPACK_IMPORTED_MODULE_2__);




var Flag =
/*#__PURE__*/
function (_Model) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(Flag, _Model);

  function Flag() {
    return _Model.apply(this, arguments) || this;
  }

  return Flag;
}(flarum_Model__WEBPACK_IMPORTED_MODULE_2___default.a);

Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])(Flag.prototype, {
  type: flarum_Model__WEBPACK_IMPORTED_MODULE_2___default.a.attribute('type'),
  reason: flarum_Model__WEBPACK_IMPORTED_MODULE_2___default.a.attribute('reason'),
  reasonDetail: flarum_Model__WEBPACK_IMPORTED_MODULE_2___default.a.attribute('reasonDetail'),
  createdAt: flarum_Model__WEBPACK_IMPORTED_MODULE_2___default.a.attribute('createdAt', flarum_Model__WEBPACK_IMPORTED_MODULE_2___default.a.transformDate),
  post: flarum_Model__WEBPACK_IMPORTED_MODULE_2___default.a.hasOne('post'),
  user: flarum_Model__WEBPACK_IMPORTED_MODULE_2___default.a.hasOne('user')
});

/* harmony default export */ __webpack_exports__["default"] = (Flag);

/***/ }),

/***/ "@flarum/core/forum":
/*!******************************!*\
  !*** external "flarum.core" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core;

/***/ }),

/***/ "flarum/Component":
/*!**************************************************!*\
  !*** external "flarum.core.compat['Component']" ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['Component'];

/***/ }),

/***/ "flarum/Model":
/*!**********************************************!*\
  !*** external "flarum.core.compat['Model']" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['Model'];

/***/ }),

/***/ "flarum/app":
/*!********************************************!*\
  !*** external "flarum.core.compat['app']" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['app'];

/***/ }),

/***/ "flarum/components/Button":
/*!**********************************************************!*\
  !*** external "flarum.core.compat['components/Button']" ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['components/Button'];

/***/ }),

/***/ "flarum/components/HeaderSecondary":
/*!*******************************************************************!*\
  !*** external "flarum.core.compat['components/HeaderSecondary']" ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['components/HeaderSecondary'];

/***/ }),

/***/ "flarum/components/LoadingIndicator":
/*!********************************************************************!*\
  !*** external "flarum.core.compat['components/LoadingIndicator']" ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['components/LoadingIndicator'];

/***/ }),

/***/ "flarum/components/Modal":
/*!*********************************************************!*\
  !*** external "flarum.core.compat['components/Modal']" ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['components/Modal'];

/***/ }),

/***/ "flarum/components/NotificationsDropdown":
/*!*************************************************************************!*\
  !*** external "flarum.core.compat['components/NotificationsDropdown']" ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['components/NotificationsDropdown'];

/***/ }),

/***/ "flarum/components/Page":
/*!********************************************************!*\
  !*** external "flarum.core.compat['components/Page']" ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['components/Page'];

/***/ }),

/***/ "flarum/components/Post":
/*!********************************************************!*\
  !*** external "flarum.core.compat['components/Post']" ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['components/Post'];

/***/ }),

/***/ "flarum/extend":
/*!***********************************************!*\
  !*** external "flarum.core.compat['extend']" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['extend'];

/***/ }),

/***/ "flarum/helpers/avatar":
/*!*******************************************************!*\
  !*** external "flarum.core.compat['helpers/avatar']" ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['helpers/avatar'];

/***/ }),

/***/ "flarum/helpers/humanTime":
/*!**********************************************************!*\
  !*** external "flarum.core.compat['helpers/humanTime']" ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['helpers/humanTime'];

/***/ }),

/***/ "flarum/helpers/icon":
/*!*****************************************************!*\
  !*** external "flarum.core.compat['helpers/icon']" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['helpers/icon'];

/***/ }),

/***/ "flarum/helpers/username":
/*!*********************************************************!*\
  !*** external "flarum.core.compat['helpers/username']" ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['helpers/username'];

/***/ }),

/***/ "flarum/utils/ItemList":
/*!*******************************************************!*\
  !*** external "flarum.core.compat['utils/ItemList']" ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['utils/ItemList'];

/***/ }),

/***/ "flarum/utils/PostControls":
/*!***********************************************************!*\
  !*** external "flarum.core.compat['utils/PostControls']" ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['utils/PostControls'];

/***/ })

/******/ });
//# sourceMappingURL=forum.js.map