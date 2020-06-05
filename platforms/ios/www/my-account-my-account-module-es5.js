function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["my-account-my-account-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/my-account/my-account.page.html":
  /*!***************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/my-account/my-account.page.html ***!
    \***************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppMyAccountMyAccountPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button\n              [text]=\"buttonText\"\n              [icon]=\"buttonIcon\">\n      </ion-back-button>\n    </ion-buttons>\n    <ion-title>My account</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-card>\n    <ion-card-content>\n      <div>Name: {{userFromDb.username}}</div>\n      <div>Email: {{userFromDb.email}} </div>\n    </ion-card-content>\n  </ion-card>\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/my-account/my-account-routing.module.ts":
  /*!*********************************************************!*\
    !*** ./src/app/my-account/my-account-routing.module.ts ***!
    \*********************************************************/

  /*! exports provided: MyAccountPageRoutingModule */

  /***/
  function srcAppMyAccountMyAccountRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MyAccountPageRoutingModule", function () {
      return MyAccountPageRoutingModule;
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


    var _my_account_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./my-account.page */
    "./src/app/my-account/my-account.page.ts");

    var routes = [{
      path: '',
      component: _my_account_page__WEBPACK_IMPORTED_MODULE_3__["MyAccountPage"]
    }];

    var MyAccountPageRoutingModule = function MyAccountPageRoutingModule() {
      _classCallCheck(this, MyAccountPageRoutingModule);
    };

    MyAccountPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], MyAccountPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/my-account/my-account.module.ts":
  /*!*************************************************!*\
    !*** ./src/app/my-account/my-account.module.ts ***!
    \*************************************************/

  /*! exports provided: MyAccountPageModule */

  /***/
  function srcAppMyAccountMyAccountModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MyAccountPageModule", function () {
      return MyAccountPageModule;
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


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _my_account_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./my-account-routing.module */
    "./src/app/my-account/my-account-routing.module.ts");
    /* harmony import */


    var _my_account_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./my-account.page */
    "./src/app/my-account/my-account.page.ts");

    var MyAccountPageModule = function MyAccountPageModule() {
      _classCallCheck(this, MyAccountPageModule);
    };

    MyAccountPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _my_account_routing_module__WEBPACK_IMPORTED_MODULE_5__["MyAccountPageRoutingModule"]],
      declarations: [_my_account_page__WEBPACK_IMPORTED_MODULE_6__["MyAccountPage"]]
    })], MyAccountPageModule);
    /***/
  },

  /***/
  "./src/app/my-account/my-account.page.scss":
  /*!*************************************************!*\
    !*** ./src/app/my-account/my-account.page.scss ***!
    \*************************************************/

  /*! exports provided: default */

  /***/
  function srcAppMyAccountMyAccountPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL215LWFjY291bnQvbXktYWNjb3VudC5wYWdlLnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/my-account/my-account.page.ts":
  /*!***********************************************!*\
    !*** ./src/app/my-account/my-account.page.ts ***!
    \***********************************************/

  /*! exports provided: MyAccountPage */

  /***/
  function srcAppMyAccountMyAccountPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MyAccountPage", function () {
      return MyAccountPage;
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


    var _services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../services/user.service */
    "./src/app/services/user.service.ts");
    /* harmony import */


    var _services_familymembers_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../services/familymembers.service */
    "./src/app/services/familymembers.service.ts");

    var MyAccountPage = /*#__PURE__*/function () {
      function MyAccountPage(userService, familymembersService) {
        _classCallCheck(this, MyAccountPage);

        this.userService = userService;
        this.familymembersService = familymembersService;
        this.buttonText = "Back";
        this.buttonIcon = "arrow-back";
      }

      _createClass(MyAccountPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.userFromDb = this.userService.user;
          this.getAllFamilyMembers();
        }
      }, {
        key: "getAllFamilyMembers",
        value: function getAllFamilyMembers() {
          var _this = this;

          var subscription = this.familymembersService.findFamilyMembers().subscribe(function (value) {
            console.log(value), _this.familyMembersFromDb = value;
          }, function (error) {}, function () {
            subscription.unsubscribe();
          });
        }
      }]);

      return MyAccountPage;
    }();

    MyAccountPage.ctorParameters = function () {
      return [{
        type: _services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]
      }, {
        type: _services_familymembers_service__WEBPACK_IMPORTED_MODULE_3__["FamilymembersService"]
      }];
    };

    MyAccountPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-my-account',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./my-account.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/my-account/my-account.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./my-account.page.scss */
      "./src/app/my-account/my-account.page.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"], _services_familymembers_service__WEBPACK_IMPORTED_MODULE_3__["FamilymembersService"]])], MyAccountPage);
    /***/
  }
}]);
//# sourceMappingURL=my-account-my-account-module-es5.js.map