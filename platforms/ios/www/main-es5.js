function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/@ionic/core/dist/esm lazy recursive ^\\.\\/.*\\.entry\\.js$ include: \\.entry\\.js$ exclude: \\.system\\.entry\\.js$":
  /*!*****************************************************************************************************************************************!*\
    !*** ./node_modules/@ionic/core/dist/esm lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
    \*****************************************************************************************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesIonicCoreDistEsmLazyRecursiveEntryJs$IncludeEntryJs$ExcludeSystemEntryJs$(module, exports, __webpack_require__) {
    var map = {
      "./ion-action-sheet-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-action-sheet-ios.entry.js", "common", 0],
      "./ion-action-sheet-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-action-sheet-md.entry.js", "common", 1],
      "./ion-alert-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-alert-ios.entry.js", "common", 2],
      "./ion-alert-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-alert-md.entry.js", "common", 3],
      "./ion-app_8-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-app_8-ios.entry.js", "common", 4],
      "./ion-app_8-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-app_8-md.entry.js", "common", 5],
      "./ion-avatar_3-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-avatar_3-ios.entry.js", "common", 6],
      "./ion-avatar_3-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-avatar_3-md.entry.js", "common", 7],
      "./ion-back-button-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-back-button-ios.entry.js", "common", 8],
      "./ion-back-button-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-back-button-md.entry.js", "common", 9],
      "./ion-backdrop-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-backdrop-ios.entry.js", 10],
      "./ion-backdrop-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-backdrop-md.entry.js", 11],
      "./ion-button_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-button_2-ios.entry.js", "common", 12],
      "./ion-button_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-button_2-md.entry.js", "common", 13],
      "./ion-card_5-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-card_5-ios.entry.js", "common", 14],
      "./ion-card_5-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-card_5-md.entry.js", "common", 15],
      "./ion-checkbox-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-checkbox-ios.entry.js", "common", 16],
      "./ion-checkbox-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-checkbox-md.entry.js", "common", 17],
      "./ion-chip-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-chip-ios.entry.js", "common", 18],
      "./ion-chip-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-chip-md.entry.js", "common", 19],
      "./ion-col_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-col_3.entry.js", 20],
      "./ion-datetime_3-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-datetime_3-ios.entry.js", "common", 21],
      "./ion-datetime_3-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-datetime_3-md.entry.js", "common", 22],
      "./ion-fab_3-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-fab_3-ios.entry.js", "common", 23],
      "./ion-fab_3-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-fab_3-md.entry.js", "common", 24],
      "./ion-img.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-img.entry.js", 25],
      "./ion-infinite-scroll_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-infinite-scroll_2-ios.entry.js", 26],
      "./ion-infinite-scroll_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-infinite-scroll_2-md.entry.js", 27],
      "./ion-input-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-input-ios.entry.js", "common", 28],
      "./ion-input-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-input-md.entry.js", "common", 29],
      "./ion-item-option_3-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-item-option_3-ios.entry.js", "common", 30],
      "./ion-item-option_3-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-item-option_3-md.entry.js", "common", 31],
      "./ion-item_8-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-item_8-ios.entry.js", "common", 32],
      "./ion-item_8-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-item_8-md.entry.js", "common", 33],
      "./ion-loading-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-loading-ios.entry.js", "common", 34],
      "./ion-loading-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-loading-md.entry.js", "common", 35],
      "./ion-menu_3-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-menu_3-ios.entry.js", "common", 36],
      "./ion-menu_3-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-menu_3-md.entry.js", "common", 37],
      "./ion-modal-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-modal-ios.entry.js", "common", 38],
      "./ion-modal-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-modal-md.entry.js", "common", 39],
      "./ion-nav_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-nav_2.entry.js", "common", 40],
      "./ion-popover-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-popover-ios.entry.js", "common", 41],
      "./ion-popover-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-popover-md.entry.js", "common", 42],
      "./ion-progress-bar-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-progress-bar-ios.entry.js", "common", 43],
      "./ion-progress-bar-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-progress-bar-md.entry.js", "common", 44],
      "./ion-radio_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-radio_2-ios.entry.js", "common", 45],
      "./ion-radio_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-radio_2-md.entry.js", "common", 46],
      "./ion-range-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-range-ios.entry.js", "common", 47],
      "./ion-range-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-range-md.entry.js", "common", 48],
      "./ion-refresher_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-refresher_2-ios.entry.js", "common", 49],
      "./ion-refresher_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-refresher_2-md.entry.js", "common", 50],
      "./ion-reorder_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-reorder_2-ios.entry.js", "common", 51],
      "./ion-reorder_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-reorder_2-md.entry.js", "common", 52],
      "./ion-ripple-effect.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-ripple-effect.entry.js", 53],
      "./ion-route_4.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-route_4.entry.js", "common", 54],
      "./ion-searchbar-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-searchbar-ios.entry.js", "common", 55],
      "./ion-searchbar-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-searchbar-md.entry.js", "common", 56],
      "./ion-segment_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-segment_2-ios.entry.js", "common", 57],
      "./ion-segment_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-segment_2-md.entry.js", "common", 58],
      "./ion-select_3-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-select_3-ios.entry.js", "common", 59],
      "./ion-select_3-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-select_3-md.entry.js", "common", 60],
      "./ion-slide_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-slide_2-ios.entry.js", 61],
      "./ion-slide_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-slide_2-md.entry.js", 62],
      "./ion-spinner.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-spinner.entry.js", "common", 63],
      "./ion-split-pane-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-split-pane-ios.entry.js", 64],
      "./ion-split-pane-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-split-pane-md.entry.js", 65],
      "./ion-tab-bar_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-tab-bar_2-ios.entry.js", "common", 66],
      "./ion-tab-bar_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-tab-bar_2-md.entry.js", "common", 67],
      "./ion-tab_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-tab_2.entry.js", "common", 68],
      "./ion-text.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-text.entry.js", "common", 69],
      "./ion-textarea-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-textarea-ios.entry.js", "common", 70],
      "./ion-textarea-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-textarea-md.entry.js", "common", 71],
      "./ion-toast-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-toast-ios.entry.js", "common", 72],
      "./ion-toast-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-toast-md.entry.js", "common", 73],
      "./ion-toggle-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-toggle-ios.entry.js", "common", 74],
      "./ion-toggle-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-toggle-md.entry.js", "common", 75],
      "./ion-virtual-scroll.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-virtual-scroll.entry.js", 76]
    };

    function webpackAsyncContext(req) {
      if (!__webpack_require__.o(map, req)) {
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      var ids = map[req],
          id = ids[0];
      return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function () {
        return __webpack_require__(id);
      });
    }

    webpackAsyncContext.keys = function webpackAsyncContextKeys() {
      return Object.keys(map);
    };

    webpackAsyncContext.id = "./node_modules/@ionic/core/dist/esm lazy recursive ^\\.\\/.*\\.entry\\.js$ include: \\.entry\\.js$ exclude: \\.system\\.entry\\.js$";
    module.exports = webpackAsyncContext;
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-app>\n  <ion-menu side=\"start\" menuId=\"first\" contentId=\"content1\">\n    <ion-header>\n      <ion-toolbar>\n        <ion-title>Menu</ion-title>\n      </ion-toolbar>\n    </ion-header>\n    <ion-content>\n      <ion-list *ngFor=\"let pages of navigate\">\n        <ion-menu-toggle auto-hide=\"true\">\n          <ion-item (click)=\"pages.title === 'Disconnect'? onDisconnect() : ''\" [routerLink]=\"pages.url\" routerDirection=\"forward\" [ngStyle]=\"{'color':pages.title === 'Disconnect' ? 'red' : 'black' } \">\n            <ion-icon [ngStyle]=\"{'color':pages.title === 'Disconnect' ? 'red' : 'black'} \" [name]=\"pages.icon\" slot=\"start\"></ion-icon>\n            {{pages.title}}\n          </ion-item>\n        </ion-menu-toggle>\n      </ion-list>\n    </ion-content>\n  </ion-menu>\n  <ion-router-outlet id=\"content1\"></ion-router-outlet>\n</ion-app>\n\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/family/family.page.html":
  /*!*******************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/family/family.page.html ***!
    \*******************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppFamilyFamilyPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button\n              [text]=\"buttonText\"\n              [icon]=\"buttonIcon\">\n      </ion-back-button>\n    </ion-buttons>\n    <ion-title size=\"medium\">Your Family</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\n    <ion-fab-button style=\"width: 33px; height: 33px\" (click)=\"wantCreateMemberFamily()\" color=\"success\">\n      <ion-icon name=\"add\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab>\n\n  <ion-card *ngIf=\"isWantCreateMemberFamily\">\n    <form [formGroup]=\"familyMembersCreateValidator\">\n    <ion-item>\n        <ion-label> <ion-icon name=\"person\"></ion-icon> </ion-label>\n        <ion-input formControlName=\"name\" placeholder=\"First name\" [(ngModel)]=\"member.firstName\"  type=\"text\"></ion-input>\n    </ion-item>\n      <div style=\"display: flex; align-items: center; align-content: center; justify-content: center\">\n        <ion-button [disabled]=\"!familyMembersCreateValidator.valid\"  color=\"success\" shape=\"round\" (click)=\"createFamilyMember()\">Create member family</ion-button>\n      </div>\n    </form>\n  </ion-card>\n\n  <ion-list [ngStyle]=\"{'filter':isWantCreateMemberFamily === true ? 'blur(4px)' : 'blur(0px)' }\"\n            *ngFor=\"let family of familyMembersFromDb; let i = index\"\n            >\n    <ion-card>\n      <ion-card-header>\n        <div style=\"display: flex; justify-content: flex-end\" >\n          <ion-button (click)=\"showAlertDeletedMember(family.id)\" style=\"font-size: 10px\" color=\"danger\"><ion-icon style=\"font-size: 20px\" name=\"trash\"></ion-icon> </ion-button>\n        </div>\n      </ion-card-header>\n      <ion-card-content (click)=\"goMask(family.id)\">\n        <ion-card-title>{{family.firstName}}</ion-card-title>\n      </ion-card-content>\n    </ion-card>\n  </ion-list>\n</ion-content>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/mask/mask.page.html":
  /*!***************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/mask/mask.page.html ***!
    \***************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppMaskMaskPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button\n              [text]=\"buttonText\"\n              [icon]=\"buttonIcon\">\n      </ion-back-button>\n    </ion-buttons>\n    <ion-title>{{firstNameMember}}'s mask</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\n    <ion-fab-button style=\"width: 33px; height: 33px\" (click)=\"wantCreateMask()\" color=\"success\">\n      <ion-icon name=\"add\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab>\n\n  <ion-card *ngIf=\"isWantCreateMask\">\n    <form [formGroup]=\"createMaskValidator\">\n    <ion-item>\n      <ion-label> <ion-icon name=\"medkit\"></ion-icon> </ion-label>\n      <ion-input formControlName=\"name\" placeholder=\"Nom du masque\" [(ngModel)]=\"mask.name\"  type=\"text\"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label> <ion-icon name=\"repeat\"></ion-icon> </ion-label>\n      <ion-input formControlName=\"numberWash\" placeholder=\"Nombre max de lavage\" [(ngModel)]=\"mask.maxWashingMask\"  type=\"number\"></ion-input>\n    </ion-item>\n    <div style=\"display: flex; align-items: center; align-content: center; justify-content: center\">\n      <ion-button [disabled]=\"!createMaskValidator.valid\" color=\"success\" shape=\"round\" (click)=\"createMask()\">Create mask</ion-button>\n    </div>\n    </form>\n  </ion-card>\n  <ion-list *ngFor=\"let mask of masksOfMember; let i = index\"\n            [ngStyle]=\"{'filter':isWantCreateMask === true ? 'blur(4px)' : 'blur(0px)' }\">\n    <ion-card>\n      <ion-card-header>\n        <div style=\"display: flex; justify-content: flex-end\" >\n          <ion-button (click)=\"showAlertDeletedMask(mask.id)\" style=\"font-size: 10px\" color=\"danger\"><ion-icon  style=\"font-size: 20px\" name=\"trash\"></ion-icon></ion-button>\n        </div>\n        <ion-card-title>{{mask.name}} : lavages max {{mask.maxWashingMask}} </ion-card-title>\n      </ion-card-header>\n      <ion-card-content>\n        Vous avez fait {{mask.numberWash}} lavages.\n      </ion-card-content>\n      <div style=\"display: flex; flex-direction: row; justify-content: center\">\n        <ion-button color=\"success\" [disabled]=\"isSubmit\" (click)=\"addWashToMask(mask.id)\">+1 lavage</ion-button>\n        <ion-button color=\"danger\" [disabled]=\"isSubmit || mask.numberWash < 1\" (click)=\"sousWashToMask(mask.id)\">-1 lavage</ion-button>\n      </div>\n    </ion-card>\n  </ion-list>\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/FamilyMembers.ts":
  /*!**********************************!*\
    !*** ./src/app/FamilyMembers.ts ***!
    \**********************************/

  /*! exports provided: FamilyMembers */

  /***/
  function srcAppFamilyMembersTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FamilyMembers", function () {
      return FamilyMembers;
    });

    var FamilyMembers = function FamilyMembers(id, firstName, mask) {
      _classCallCheck(this, FamilyMembers);

      this.id = id;
      this.firstName = firstName;
      this.mask = mask;
    };
    /***/

  },

  /***/
  "./src/app/Mask.ts":
  /*!*************************!*\
    !*** ./src/app/Mask.ts ***!
    \*************************/

  /*! exports provided: Mask */

  /***/
  function srcAppMaskTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Mask", function () {
      return Mask;
    });

    var Mask = function Mask(name, numberWash, maxWashingMask, isOver) {
      _classCallCheck(this, Mask);

      this.name = name;
      this.numberWash = numberWash;
      this.maxWashingMask = maxWashingMask;
      this.isOver = isOver;
    };
    /***/

  },

  /***/
  "./src/app/_helper/auth.interceptor.ts":
  /*!*********************************************!*\
    !*** ./src/app/_helper/auth.interceptor.ts ***!
    \*********************************************/

  /*! exports provided: AuthInterceptor, authInterceptorProviders */

  /***/
  function srcApp_helperAuthInterceptorTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthInterceptor", function () {
      return AuthInterceptor;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "authInterceptorProviders", function () {
      return authInterceptorProviders;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _services_token_storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../services/token-storage.service */
    "./src/app/services/token-storage.service.ts");

    var TOKEN_HEADER_KEY = 'Authorization'; // for Spring Boot back-end
    // const TOKEN_HEADER_KEY = 'x-access-token';   // for Node.js Express back-end

    var AuthInterceptor = /*#__PURE__*/function () {
      function AuthInterceptor(token) {
        _classCallCheck(this, AuthInterceptor);

        this.token = token;
      }

      _createClass(AuthInterceptor, [{
        key: "intercept",
        value: function intercept(req, next) {
          var authReq = req;
          var token = this.token.getToken();

          if (token != null) {
            // for Spring Boot back-end
            authReq = req.clone({
              headers: req.headers.set(TOKEN_HEADER_KEY, 'Bearer ' + token)
            }); // for Node.js Express back-end
            // authReq = req.clone({ headers: req.headers.set(TOKEN_HEADER_KEY, token) });
          }

          return next.handle(authReq);
        }
      }]);

      return AuthInterceptor;
    }();

    AuthInterceptor.ctorParameters = function () {
      return [{
        type: _services_token_storage_service__WEBPACK_IMPORTED_MODULE_3__["TokenStorageService"]
      }];
    };

    AuthInterceptor = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_token_storage_service__WEBPACK_IMPORTED_MODULE_3__["TokenStorageService"]])], AuthInterceptor);
    var authInterceptorProviders = [{
      provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HTTP_INTERCEPTORS"],
      useClass: AuthInterceptor,
      multi: true
    }];
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _services_auth_guard_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./services/auth-guard.service */
    "./src/app/services/auth-guard.service.ts");

    var routes = [{
      path: 'home',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | home-home-module */
        [__webpack_require__.e("common"), __webpack_require__.e("home-home-module")]).then(__webpack_require__.bind(null,
        /*! ./home/home.module */
        "./src/app/home/home.module.ts")).then(function (m) {
          return m.HomePageModule;
        });
      },
      canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_3__["AuthGuardService"]]
    }, {
      path: '',
      redirectTo: 'home',
      pathMatch: 'full',
      canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_3__["AuthGuardService"]]
    }, {
      path: 'family',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | family-family-module */
        "common").then(__webpack_require__.bind(null,
        /*! ./family/family.module */
        "./src/app/family/family.module.ts")).then(function (m) {
          return m.FamilyPageModule;
        });
      },
      canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_3__["AuthGuardService"]]
    }, {
      path: 'login',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | login-login-module */
        "login-login-module").then(__webpack_require__.bind(null,
        /*! ./login/login.module */
        "./src/app/login/login.module.ts")).then(function (m) {
          return m.LoginPageModule;
        });
      }
    }, {
      path: 'mask',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | mask-mask-module */
        "mask-mask-module").then(__webpack_require__.bind(null,
        /*! ./mask/mask.module */
        "./src/app/mask/mask.module.ts")).then(function (m) {
          return m.MaskPageModule;
        });
      },
      canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_3__["AuthGuardService"]]
    }, {
      path: 'my-account',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | my-account-my-account-module */
        "my-account-my-account-module").then(__webpack_require__.bind(null,
        /*! ./my-account/my-account.module */
        "./src/app/my-account/my-account.module.ts")).then(function (m) {
          return m.MyAccountPageModule;
        });
      },
      canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_3__["AuthGuardService"]]
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, {
        preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_2__["PreloadAllModules"]
      })],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AppRoutingModule);
    /***/
  },

  /***/
  "./src/app/app.component.scss":
  /*!************************************!*\
    !*** ./src/app/app.component.scss ***!
    \************************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic-native/splash-screen/ngx */
    "./node_modules/@ionic-native/splash-screen/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic-native/status-bar/ngx */
    "./node_modules/@ionic-native/status-bar/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _services_user_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./services/user.service */
    "./src/app/services/user.service.ts");
    /* harmony import */


    var _services_auth_guard_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./services/auth-guard.service */
    "./src/app/services/auth-guard.service.ts");
    /* harmony import */


    var _services_token_storage_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./services/token-storage.service */
    "./src/app/services/token-storage.service.ts");

    var AppComponent = /*#__PURE__*/function () {
      function AppComponent(tokenStorageService, platform, splashScreen, statusBar, router, userService, alertCtrl, toastController, authGuardService) {
        _classCallCheck(this, AppComponent);

        this.tokenStorageService = tokenStorageService;
        this.platform = platform;
        this.splashScreen = splashScreen;
        this.statusBar = statusBar;
        this.router = router;
        this.userService = userService;
        this.alertCtrl = alertCtrl;
        this.toastController = toastController;
        this.authGuardService = authGuardService;
        this.isLoggedIn = false;
        this.showAdminBoard = false;
        this.showModeratorBoard = false;
        this.userPseudo = this.userService.user.email;
        this.sideMenu();
        this.initializeApp();
      }

      _createClass(AppComponent, [{
        key: "sideMenu",
        value: function sideMenu() {
          this.navigate = [{
            title: "Family",
            url: "family",
            icon: "people-outline"
          }, {
            title: "My Account",
            url: "my-account",
            icon: "person-circle-outline"
          }, {
            title: "Disconnect",
            icon: "log-out-outline"
          }];
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          this.isLoggedIn = !!this.tokenStorageService.getToken();

          if (this.isLoggedIn) {
            var user = this.tokenStorageService.getUser();
            this.roles = user.roles;
            this.showAdminBoard = this.roles.includes('ROLE_ADMIN');
            this.showModeratorBoard = this.roles.includes('ROLE_MODERATOR');
            this.username = user.username;
          }
        }
      }, {
        key: "initializeApp",
        value: function initializeApp() {
          var _this = this;

          this.platform.ready().then(function () {
            _this.router.navigateByUrl('login');

            _this.statusBar.styleDefault();

            _this.splashScreen.hide();
          });
        }
      }, {
        key: "onDisconnect",
        value: function onDisconnect() {
          this.showAlertDeletedMask();
        }
      }, {
        key: "logout",
        value: function logout() {
          this.tokenStorageService.signOut();
        }
      }, {
        key: "showAlertDeletedMask",
        value: function showAlertDeletedMask() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var _this2 = this;

            var confirm;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return this.alertCtrl.create({
                      header: 'Disconnect',
                      message: 'Are you sure?',
                      buttons: [{
                        text: 'Cancel',
                        role: 'cancel',
                        handler: function handler() {
                          console.log('Confirm Cancel');
                        }
                      }, {
                        text: 'Okay',
                        handler: function handler() {
                          var user = {
                            id: "-1",
                            email: "",
                            password: "",
                            pseudo: "",
                            authError: "true",
                            isActive: "",
                            username: "",
                            role: "",
                            familyMembers: [{
                              firstName: "",
                              masks: [{
                                name: "",
                                numberWash: "",
                                maxWashingMask: "",
                                isOver: ""
                              }]
                            }]
                          };
                          console.log(_this2.userService.user);
                          _this2.userService.user = user;
                          console.log(_this2.userService.user);
                          _this2.authGuardService.isAuthenticated = false;

                          _this2.router.navigateByUrl('login');

                          _this2.logout();

                          _this2.presentToast('Disconnected');
                        }
                      }]
                    });

                  case 2:
                    confirm = _context.sent;
                    _context.next = 5;
                    return confirm.present();

                  case 5:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "presentToast",
        value: function presentToast(message) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            var toast;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    _context2.next = 2;
                    return this.toastController.create({
                      message: message,
                      duration: 2000
                    });

                  case 2:
                    toast = _context2.sent;
                    toast.present();

                  case 4:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }]);

      return AppComponent;
    }();

    AppComponent.ctorParameters = function () {
      return [{
        type: _services_token_storage_service__WEBPACK_IMPORTED_MODULE_8__["TokenStorageService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"]
      }, {
        type: _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_3__["SplashScreen"]
      }, {
        type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__["StatusBar"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
      }, {
        type: _services_user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"]
      }, {
        type: _services_auth_guard_service__WEBPACK_IMPORTED_MODULE_7__["AuthGuardService"]
      }];
    };

    AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./app.component.scss */
      "./src/app/app.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_token_storage_service__WEBPACK_IMPORTED_MODULE_8__["TokenStorageService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"], _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_3__["SplashScreen"], _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__["StatusBar"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], _services_user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"], _services_auth_guard_service__WEBPACK_IMPORTED_MODULE_7__["AuthGuardService"]])], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic-native/splash-screen/ngx */
    "./node_modules/@ionic-native/splash-screen/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ionic-native/status-bar/ngx */
    "./node_modules/@ionic-native/status-bar/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _family_family_page__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./family/family.page */
    "./src/app/family/family.page.ts");
    /* harmony import */


    var _mask_mask_page__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./mask/mask.page */
    "./src/app/mask/mask.page.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _services_auth_guard_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./services/auth-guard.service */
    "./src/app/services/auth-guard.service.ts");
    /* harmony import */


    var _helper_auth_interceptor__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./_helper/auth.interceptor */
    "./src/app/_helper/auth.interceptor.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"], _family_family_page__WEBPACK_IMPORTED_MODULE_10__["FamilyPage"], _mask_mask_page__WEBPACK_IMPORTED_MODULE_11__["MaskPage"]],
      entryComponents: [_family_family_page__WEBPACK_IMPORTED_MODULE_10__["FamilyPage"], _mask_mask_page__WEBPACK_IMPORTED_MODULE_11__["MaskPage"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"].forRoot(), _app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["ReactiveFormsModule"]],
      providers: [_ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_6__["StatusBar"], _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_5__["SplashScreen"], _services_auth_guard_service__WEBPACK_IMPORTED_MODULE_13__["AuthGuardService"], _helper_auth_interceptor__WEBPACK_IMPORTED_MODULE_14__["authInterceptorProviders"], {
        provide: _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouteReuseStrategy"],
        useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicRouteStrategy"]
      }],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/family/family.page.scss":
  /*!*****************************************!*\
    !*** ./src/app/family/family.page.scss ***!
    \*****************************************/

  /*! exports provided: default */

  /***/
  function srcAppFamilyFamilyPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZhbWlseS9mYW1pbHkucGFnZS5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/family/family.page.ts":
  /*!***************************************!*\
    !*** ./src/app/family/family.page.ts ***!
    \***************************************/

  /*! exports provided: FamilyPage */

  /***/
  function srcAppFamilyFamilyPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FamilyPage", function () {
      return FamilyPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _services_familymembers_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../services/familymembers.service */
    "./src/app/services/familymembers.service.ts");
    /* harmony import */


    var _FamilyMembers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../FamilyMembers */
    "./src/app/FamilyMembers.ts");
    /* harmony import */


    var _services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../services/user.service */
    "./src/app/services/user.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _services_mask_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../services/mask.service */
    "./src/app/services/mask.service.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    var FamilyPage = /*#__PURE__*/function () {
      function FamilyPage(familymembersService, userService, maskService, router, alertCtrl, formBuilder, loadingController, toastController) {
        _classCallCheck(this, FamilyPage);

        this.familymembersService = familymembersService;
        this.userService = userService;
        this.maskService = maskService;
        this.router = router;
        this.alertCtrl = alertCtrl;
        this.formBuilder = formBuilder;
        this.loadingController = loadingController;
        this.toastController = toastController;
        this.member = new _FamilyMembers__WEBPACK_IMPORTED_MODULE_3__["FamilyMembers"]();
        this.buttonText = "Back";
        this.buttonIcon = "arrow-back";
        this.isWantCreateMemberFamily = false;
        this.isLoading = false;
        {
          this.familyMembersCreateValidator = this.formBuilder.group({
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required]
          });
        }
      }

      _createClass(FamilyPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          console.log(this.userService.user.familyMembers);
          this.getAllFamilyMembers();
        }
      }, {
        key: "getAllFamilyMembers",
        value: function getAllFamilyMembers() {
          var _this3 = this;

          this.present();
          var subscription = this.familymembersService.findFamilyMembers().subscribe(function (value) {
            console.log(value), _this3.familyMembersFromDb = value;
          }, function (error) {
            _this3.dismiss(), _this3.presentToast(error, 2000);
          }, function () {
            _this3.dismiss(), subscription.unsubscribe();
          });
        }
      }, {
        key: "createFamilyMember",
        value: function createFamilyMember() {
          var _this4 = this;

          this.present();
          var subscription = this.familymembersService.createFamilyMember(this.member).subscribe(function (value) {
            return _this4.userService.user.familyMembers.push(value);
          }, function (error) {
            _this4.dismiss(), _this4.presentToast(error, 2000);
          }, function () {
            _this4.dismiss(), _this4.member.firstName = "", _this4.isWantCreateMemberFamily = false, _this4.getAllFamilyMembers(), subscription.unsubscribe();
          });
        }
      }, {
        key: "goMask",
        value: function goMask(index) {
          this.maskService.idMemberFamilyToCreateMask = index;
          console.log(index);
          console.log(this.maskService.idMemberFamilyToCreateMask);
          this.router.navigateByUrl('mask');
        }
      }, {
        key: "wantCreateMemberFamily",
        value: function wantCreateMemberFamily() {
          this.isWantCreateMemberFamily = !this.isWantCreateMemberFamily;
        }
      }, {
        key: "deleteMember",
        value: function deleteMember(idMember) {
          var _this5 = this;

          var reset = [];
          this.present();
          var subscription = this.familymembersService.deleteMember(idMember).subscribe(function (response) {
            _this5.userService.user.familyMembers = reset;
          }, function (error) {
            _this5.dismiss(), console.log(error), _this5.presentToast(error, 2000);
          }, function () {
            _this5.getAllFamilyMembers(), _this5.dismiss(), subscription.unsubscribe();
          });
        }
      }, {
        key: "presentToast",
        value: function presentToast(message, duration) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
            var toast;
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    _context3.next = 2;
                    return this.toastController.create({
                      message: message,
                      duration: duration
                    });

                  case 2:
                    toast = _context3.sent;
                    toast.present();

                  case 4:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3, this);
          }));
        }
      }, {
        key: "showAlertDeletedMember",
        value: function showAlertDeletedMember(idMember) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
            var _this6 = this;

            var confirm;
            return regeneratorRuntime.wrap(function _callee4$(_context4) {
              while (1) {
                switch (_context4.prev = _context4.next) {
                  case 0:
                    _context4.next = 2;
                    return this.alertCtrl.create({
                      header: 'Delete member family',
                      message: 'Are you sure?',
                      buttons: [{
                        text: 'Cancel',
                        role: 'cancel',
                        handler: function handler() {
                          console.log('Confirm Cancel');
                        }
                      }, {
                        text: 'Okay',
                        handler: function handler() {
                          {
                            _this6.deleteMember(idMember), console.log("confirm user");
                          }
                          ;
                        }
                      }]
                    });

                  case 2:
                    confirm = _context4.sent;
                    _context4.next = 5;
                    return confirm.present();

                  case 5:
                  case "end":
                    return _context4.stop();
                }
              }
            }, _callee4, this);
          }));
        }
      }, {
        key: "present",
        value: function present() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
            var _this7 = this;

            return regeneratorRuntime.wrap(function _callee5$(_context5) {
              while (1) {
                switch (_context5.prev = _context5.next) {
                  case 0:
                    this.isLoading = true;
                    _context5.next = 3;
                    return this.loadingController.create({// duration: 5000,
                    }).then(function (a) {
                      a.present().then(function () {
                        console.log('presented');

                        if (!_this7.isLoading) {
                          a.dismiss().then(function () {
                            return console.log('abort presenting');
                          });
                        }
                      });
                    });

                  case 3:
                    return _context5.abrupt("return", _context5.sent);

                  case 4:
                  case "end":
                    return _context5.stop();
                }
              }
            }, _callee5, this);
          }));
        }
      }, {
        key: "dismiss",
        value: function dismiss() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
            return regeneratorRuntime.wrap(function _callee6$(_context6) {
              while (1) {
                switch (_context6.prev = _context6.next) {
                  case 0:
                    this.isLoading = false;
                    _context6.next = 3;
                    return this.loadingController.dismiss().then(function () {
                      return console.log('dismissed');
                    });

                  case 3:
                    return _context6.abrupt("return", _context6.sent);

                  case 4:
                  case "end":
                    return _context6.stop();
                }
              }
            }, _callee6, this);
          }));
        }
      }]);

      return FamilyPage;
    }();

    FamilyPage.ctorParameters = function () {
      return [{
        type: _services_familymembers_service__WEBPACK_IMPORTED_MODULE_2__["FamilymembersService"]
      }, {
        type: _services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"]
      }, {
        type: _services_mask_service__WEBPACK_IMPORTED_MODULE_6__["MaskService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["AlertController"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormBuilder"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["LoadingController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["ToastController"]
      }];
    };

    FamilyPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-family',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./family.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/family/family.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./family.page.scss */
      "./src/app/family/family.page.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_familymembers_service__WEBPACK_IMPORTED_MODULE_2__["FamilymembersService"], _services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"], _services_mask_service__WEBPACK_IMPORTED_MODULE_6__["MaskService"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["AlertController"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormBuilder"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["LoadingController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["ToastController"]])], FamilyPage);
    /***/
  },

  /***/
  "./src/app/mask/mask.page.scss":
  /*!*************************************!*\
    !*** ./src/app/mask/mask.page.scss ***!
    \*************************************/

  /*! exports provided: default */

  /***/
  function srcAppMaskMaskPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21hc2svbWFzay5wYWdlLnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/mask/mask.page.ts":
  /*!***********************************!*\
    !*** ./src/app/mask/mask.page.ts ***!
    \***********************************/

  /*! exports provided: MaskPage */

  /***/
  function srcAppMaskMaskPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MaskPage", function () {
      return MaskPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _services_mask_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../services/mask.service */
    "./src/app/services/mask.service.ts");
    /* harmony import */


    var _Mask__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../Mask */
    "./src/app/Mask.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _services_familymembers_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../services/familymembers.service */
    "./src/app/services/familymembers.service.ts");

    var MaskPage = /*#__PURE__*/function () {
      function MaskPage(maskService, familymembersService, alertCtrl, formBuilder, loadingController) {
        _classCallCheck(this, MaskPage);

        this.maskService = maskService;
        this.familymembersService = familymembersService;
        this.alertCtrl = alertCtrl;
        this.formBuilder = formBuilder;
        this.loadingController = loadingController;
        this.isSubmit = false;
        this.buttonText = " Back";
        this.buttonIcon = "arrow-back";
        this.idMemberFamily = -1;
        this.firstNameMember = "";
        this.mask = new _Mask__WEBPACK_IMPORTED_MODULE_3__["Mask"]();
        this.masksOfMember = [];
        this.isWantCreateMask = false;
        this.isLoading = false;
        this.createMaskValidator = this.formBuilder.group({
          name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
          numberWash: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]
        });
      }

      _createClass(MaskPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.idMemberFamily = this.maskService.idMemberFamilyToCreateMask;
          this.getFirstNameMember();
          this.getMaskOfMember();
        }
      }, {
        key: "getFirstNameMember",
        value: function getFirstNameMember() {
          var _this8 = this;

          var subscription = this.familymembersService.getFirstName(this.idMemberFamily).subscribe(function (value) {
            _this8.firstNameMember = value;
          }, function (error) {
            console.log(error);
          }, function () {
            console.log('complet recup firstname member'), _this8.dismiss(), subscription.unsubscribe();
          });
        }
      }, {
        key: "wantCreateMask",
        value: function wantCreateMask() {
          this.isWantCreateMask = !this.isWantCreateMask;
        }
      }, {
        key: "createMask",
        value: function createMask() {
          var _this9 = this;

          this.present();
          var subscription = this.maskService.createMask(this.idMemberFamily, this.mask).subscribe(function (value) {
            console.log(value);
          }, function (error) {
            _this9.dismiss(), console.log(error.error.message);
          }, function () {
            _this9.getMaskOfMember(), _this9.isWantCreateMask = false, _this9.mask.name = "", _this9.mask.maxWashingMask = null, _this9.dismiss(), subscription.unsubscribe();
          });
        }
      }, {
        key: "getMaskOfMember",
        value: function getMaskOfMember() {
          var _this10 = this;

          this.present();
          var subscription = this.maskService.findMaskByMember(this.idMemberFamily).subscribe(function (value) {
            _this10.masksOfMember = value;
          }, function (error) {
            _this10.dismiss();
          }, function () {
            _this10.dismiss(), console.log(_this10.masksOfMember), subscription.unsubscribe();
          });
        }
      }, {
        key: "addWashToMask",
        value: function addWashToMask(idMask) {
          var _this11 = this;

          this.present();
          var subscription = this.maskService.addWashToMask(idMask).subscribe(function (value) {
            _this11.isSubmit = true;
          }, function (error) {
            _this11.dismiss();
          }, function () {
            _this11.dismiss(), _this11.getMaskOfMember(), _this11.isSubmit = false, subscription.unsubscribe();
          });
        }
      }, {
        key: "sousWashToMask",
        value: function sousWashToMask(idMask) {
          var _this12 = this;

          this.present();
          var subscription = this.maskService.sousWashToMask(idMask).subscribe(function (value) {
            _this12.isSubmit = true;
          }, function (error) {
            _this12.dismiss();
          }, function () {
            _this12.dismiss(), _this12.getMaskOfMember(), _this12.isSubmit = false, subscription.unsubscribe();
          });
        }
      }, {
        key: "deleteMask",
        value: function deleteMask(idMask) {
          var _this13 = this;

          this.present();
          var subscription = this.maskService.deleteMask(idMask).subscribe(function (response) {
            console.log(response);
          }, function (error) {
            _this13.dismiss(), console.log(error);
          }, function () {
            _this13.getMaskOfMember(), _this13.dismiss(), subscription.unsubscribe();
          });
        }
      }, {
        key: "showAlertDeletedMask",
        value: function showAlertDeletedMask(idMask) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
            var _this14 = this;

            var confirm;
            return regeneratorRuntime.wrap(function _callee7$(_context7) {
              while (1) {
                switch (_context7.prev = _context7.next) {
                  case 0:
                    _context7.next = 2;
                    return this.alertCtrl.create({
                      header: 'Delete mask',
                      message: 'Are you sure?',
                      buttons: [{
                        text: 'Cancel',
                        role: 'cancel',
                        handler: function handler() {
                          console.log('Confirm Cancel');
                        }
                      }, {
                        text: 'Okay',
                        handler: function handler() {
                          {
                            _this14.deleteMask(idMask), console.log("confirm user");
                          }
                          ;
                        }
                      }]
                    });

                  case 2:
                    confirm = _context7.sent;
                    _context7.next = 5;
                    return confirm.present();

                  case 5:
                  case "end":
                    return _context7.stop();
                }
              }
            }, _callee7, this);
          }));
        }
      }, {
        key: "present",
        value: function present() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee8() {
            var _this15 = this;

            return regeneratorRuntime.wrap(function _callee8$(_context8) {
              while (1) {
                switch (_context8.prev = _context8.next) {
                  case 0:
                    this.isLoading = true;
                    _context8.next = 3;
                    return this.loadingController.create({// duration: 5000,
                    }).then(function (a) {
                      a.present().then(function () {
                        console.log('presented');

                        if (!_this15.isLoading) {
                          a.dismiss().then(function () {
                            return console.log('abort presenting');
                          });
                        }
                      });
                    });

                  case 3:
                    return _context8.abrupt("return", _context8.sent);

                  case 4:
                  case "end":
                    return _context8.stop();
                }
              }
            }, _callee8, this);
          }));
        }
      }, {
        key: "dismiss",
        value: function dismiss() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee9() {
            return regeneratorRuntime.wrap(function _callee9$(_context9) {
              while (1) {
                switch (_context9.prev = _context9.next) {
                  case 0:
                    this.isLoading = false;
                    _context9.next = 3;
                    return this.loadingController.dismiss().then(function () {
                      return console.log('dismissed');
                    });

                  case 3:
                    return _context9.abrupt("return", _context9.sent);

                  case 4:
                  case "end":
                    return _context9.stop();
                }
              }
            }, _callee9, this);
          }));
        }
      }]);

      return MaskPage;
    }();

    MaskPage.ctorParameters = function () {
      return [{
        type: _services_mask_service__WEBPACK_IMPORTED_MODULE_2__["MaskService"]
      }, {
        type: _services_familymembers_service__WEBPACK_IMPORTED_MODULE_6__["FamilymembersService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"]
      }];
    };

    MaskPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-mask',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./mask.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/mask/mask.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./mask.page.scss */
      "./src/app/mask/mask.page.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_mask_service__WEBPACK_IMPORTED_MODULE_2__["MaskService"], _services_familymembers_service__WEBPACK_IMPORTED_MODULE_6__["FamilymembersService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"]])], MaskPage);
    /***/
  },

  /***/
  "./src/app/services/auth-guard.service.ts":
  /*!************************************************!*\
    !*** ./src/app/services/auth-guard.service.ts ***!
    \************************************************/

  /*! exports provided: AuthGuardService */

  /***/
  function srcAppServicesAuthGuardServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthGuardService", function () {
      return AuthGuardService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var AuthGuardService = /*#__PURE__*/function () {
      function AuthGuardService(router) {
        _classCallCheck(this, AuthGuardService);

        this.router = router;
        this.isAuthenticated = false;
      }

      _createClass(AuthGuardService, [{
        key: "canActivate",
        value: function canActivate(route, state) {
          console.log(route);

          if (!this.isAuthenticated) {
            this.router.navigate(["login"]);
            return false;
          }

          return true;
        }
      }]);

      return AuthGuardService;
    }();

    AuthGuardService.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };

    AuthGuardService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])], AuthGuardService);
    /***/
  },

  /***/
  "./src/app/services/familymembers.service.ts":
  /*!***************************************************!*\
    !*** ./src/app/services/familymembers.service.ts ***!
    \***************************************************/

  /*! exports provided: FamilymembersService */

  /***/
  function srcAppServicesFamilymembersServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FamilymembersService", function () {
      return FamilymembersService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./user.service */
    "./src/app/services/user.service.ts");

    var FamilymembersService = /*#__PURE__*/function () {
      function FamilymembersService(httpClient, userService) {
        _classCallCheck(this, FamilymembersService);

        this.httpClient = httpClient;
        this.userService = userService; //urlBack = "http://localhost:8082/";

        this.urlBack = 'https://mask-wash-back-end.herokuapp.com/';
        this.member = {
          id: "-1",
          email: "",
          password: "",
          pseudo: "",
          family: [{}]
        };
      }

      _createClass(FamilymembersService, [{
        key: "createFamilyMember",
        value: function createFamilyMember(member) {
          var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Content-Type': 'application/json'
          });
          return this.httpClient.post(this.urlBack + "user/" + this.userService.user.id + "/" + "family_members", member, {
            headers: headers
          });
        }
      }, {
        key: "findFamilyMembers",
        value: function findFamilyMembers() {
          return this.httpClient.get(this.urlBack + "user/" + this.userService.user.id);
        }
      }, {
        key: "deleteMember",
        value: function deleteMember(id) {
          return this.httpClient.post(this.urlBack + "family_members/delete/" + id, {}, {
            responseType: 'text'
          });
        }
      }, {
        key: "getFirstName",
        value: function getFirstName(id) {
          return this.httpClient.get(this.urlBack + "family_members/first_name/" + id, {
            responseType: 'text'
          });
        }
      }]);

      return FamilymembersService;
    }();

    FamilymembersService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }, {
        type: _user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]
      }];
    };

    FamilymembersService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]])], FamilymembersService);
    /***/
  },

  /***/
  "./src/app/services/mask.service.ts":
  /*!******************************************!*\
    !*** ./src/app/services/mask.service.ts ***!
    \******************************************/

  /*! exports provided: MaskService */

  /***/
  function srcAppServicesMaskServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MaskService", function () {
      return MaskService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./user.service */
    "./src/app/services/user.service.ts");

    var MaskService = /*#__PURE__*/function () {
      function MaskService(httpClient, userService) {
        _classCallCheck(this, MaskService);

        this.httpClient = httpClient;
        this.userService = userService; //urlBack = "http://localhost:8082/";

        this.urlBack = 'https://mask-wash-back-end.herokuapp.com/';
        this.mask = {
          id: "-1",
          email: "",
          password: "",
          pseudo: "",
          family: [{}]
        };
      }

      _createClass(MaskService, [{
        key: "createMask",
        value: function createMask(id, mask) {
          var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Content-Type': 'application/json'
          });
          return this.httpClient.post(this.urlBack + "family_members/" + id + "/" + "mask", mask, {
            headers: headers
          });
        }
      }, {
        key: "findMaskByMember",
        value: function findMaskByMember(id) {
          return this.httpClient.get(this.urlBack + "mask/" + id);
        }
      }, {
        key: "addWashToMask",
        value: function addWashToMask(id) {
          var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Content-Type': 'application/json'
          });
          return this.httpClient.post(this.urlBack + "mask/" + id + "/" + "wash", {}, {
            headers: headers
          });
        }
      }, {
        key: "sousWashToMask",
        value: function sousWashToMask(id) {
          var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Content-Type': 'application/json'
          });
          return this.httpClient.post(this.urlBack + "mask/" + id + "/" + "diswash", {}, {
            headers: headers
          });
        }
      }, {
        key: "deleteMask",
        value: function deleteMask(id) {
          var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Content-Type': 'application/json'
          });
          return this.httpClient.post(this.urlBack + "mask/" + id, {}, {
            responseType: 'text'
          });
        }
      }]);

      return MaskService;
    }();

    MaskService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }, {
        type: _user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]
      }];
    };

    MaskService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]])], MaskService);
    /***/
  },

  /***/
  "./src/app/services/token-storage.service.ts":
  /*!***************************************************!*\
    !*** ./src/app/services/token-storage.service.ts ***!
    \***************************************************/

  /*! exports provided: TokenStorageService */

  /***/
  function srcAppServicesTokenStorageServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TokenStorageService", function () {
      return TokenStorageService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var TOKEN_KEY = 'auth-token';
    var USER_KEY = 'auth-user';

    var TokenStorageService = /*#__PURE__*/function () {
      function TokenStorageService() {
        _classCallCheck(this, TokenStorageService);
      }

      _createClass(TokenStorageService, [{
        key: "signOut",
        value: function signOut() {
          window.sessionStorage.clear();
        }
      }, {
        key: "saveToken",
        value: function saveToken(token) {
          window.sessionStorage.removeItem(TOKEN_KEY);
          window.sessionStorage.setItem(TOKEN_KEY, token);
        }
      }, {
        key: "getToken",
        value: function getToken() {
          return sessionStorage.getItem(TOKEN_KEY);
        }
      }, {
        key: "saveUser",
        value: function saveUser(user) {
          window.sessionStorage.removeItem(USER_KEY);
          window.sessionStorage.setItem(USER_KEY, JSON.stringify(user));
        }
      }, {
        key: "getUser",
        value: function getUser() {
          return JSON.parse(sessionStorage.getItem(USER_KEY));
        }
      }]);

      return TokenStorageService;
    }();

    TokenStorageService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], TokenStorageService);
    /***/
  },

  /***/
  "./src/app/services/user.service.ts":
  /*!******************************************!*\
    !*** ./src/app/services/user.service.ts ***!
    \******************************************/

  /*! exports provided: UserService */

  /***/
  function srcAppServicesUserServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserService", function () {
      return UserService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var UserService = /*#__PURE__*/function () {
      function UserService(httpClient) {
        _classCallCheck(this, UserService);

        this.httpClient = httpClient; //urlBack = 'http://localhost:8082/';

        this.urlBack = 'https://mask-wash-back-end.herokuapp.com/';
        this.urlToCreateAccount = 'create/user';
        this.urlToSigin = 'user/connect';
        this.urlToGetPassword = '/api/auth/forgetPassword';
        this.user = {
          id: '-1',
          email: '',
          password: '',
          pseudo: '',
          authError: '',
          isActive: '',
          username: '',
          role: '',
          familyMembers: [{
            firstName: '',
            masks: [{
              name: '',
              numberWash: '',
              maxWashingMask: '',
              isOver: ''
            }]
          }]
        };
      }

      _createClass(UserService, [{
        key: "createAccount",
        value: function createAccount(user) {
          var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Content-Type': 'application/json'
          });
          return this.httpClient.post(this.urlBack + this.urlToCreateAccount, user, {
            headers: headers
          });
        }
      }, {
        key: "signIn",
        value: function signIn(user) {
          var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Content-Type': 'application/json'
          });
          return this.httpClient.post(this.urlBack + this.urlToSigin, user, {
            headers: headers
          });
        }
      }, {
        key: "getForgetPassword",
        value: function getForgetPassword(user) {
          var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Content-Type': 'application/json'
          });
          return this.httpClient.post(this.urlBack + this.urlToGetPassword, user, {
            headers: headers,
            responseType: 'text'
          });
        }
      }]);

      return UserService;
    }();

    UserService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    UserService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])], UserService);
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/__ivy_ngcc__/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.log(err);
    });
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! /Users/cedric/Documents/ionic/wash-mask-for-ios/src/main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map