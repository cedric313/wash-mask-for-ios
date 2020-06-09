function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["login-login-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.page.html":
  /*!*****************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.page.html ***!
    \*****************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppLoginLoginPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-content>\n    <div *ngIf=\"isAccountExist && !isNeedNewPassword\" style=\"display: flex; align-items: center; align-content: center; justify-content: center;\n   flex-direction: column; margin-top: 50%;--ion-background-color: transparent \">\n        <ion-list>\n            <form [formGroup]=\"signInValidator\">\n                <ion-item>\n                    <ion-label>\n                        <ion-icon name=\"mail-outline\"></ion-icon>\n                    </ion-label>\n                    <ion-input formControlName=\"email\" placeholder=\"Email\" [(ngModel)]=\"user.email\"\n                               type=\"text\"></ion-input>\n                </ion-item>\n                <ion-item>\n                    <ion-label>\n                        <ion-icon name=\"person\"></ion-icon>\n                    </ion-label>\n                    <ion-input formControlName=\"username\" placeholder=\"User name\" [(ngModel)]=\"user.username\"\n                               type=\"text\"></ion-input>\n                </ion-item>\n                <ion-item>\n                    <ion-label>\n                        <ion-icon name=\"key-outline\"></ion-icon>\n                    </ion-label>\n                    <ion-input formControlName=\"password\" placeholder=\"Password\" [(ngModel)]=\"user.password\"\n                               type=\"password\"></ion-input>\n                </ion-item>\n                <div style=\"display: flex; align-items: center; align-content: center;flex-direction: column\">\n                    <ion-button [disabled]=\"!signInValidator.valid\" color=\"success\" shape=\"round\" (click)=\"onSubmitSignIn()\">\n                        Sign in\n                    </ion-button>\n                </div>\n                <div style=\"display: flex; align-items: center; align-content: center; flex-direction: column\">\n                    <a (click)=\"onForgetPassword()\">Forget password?</a>\n                    <a (click)=\"isAccountExist = !isAccountExist\">Create Account</a>\n                </div>\n            </form>\n        </ion-list>\n    </div>\n    <div *ngIf=\"!isAccountExist && !isNeedNewPassword\" style=\"display: flex; align-items: center; align-content: center; justify-content: center;\n   flex-direction: column; margin-top: 50%;--ion-background-color: transparent \">\n        <ion-list>\n            <form [formGroup]=\"createAccountValidator\">\n                <ion-item>\n                    <ion-label>\n                        <ion-icon name=\"mail-outline\"></ion-icon>\n                    </ion-label>\n                    <ion-input formControlName=\"email\" placeholder=\"Email\" [(ngModel)]=\"user.email\"\n                               type=\"text\"></ion-input>\n                </ion-item>\n                <ion-item>\n                    <ion-label>\n                        <ion-icon name=\"person\"></ion-icon>\n                    </ion-label>\n                    <ion-input formControlName=\"username\" placeholder=\"User name\" [(ngModel)]=\"user.username\"\n                               type=\"text\"></ion-input>\n                </ion-item>\n                <ion-item>\n                    <ion-label>\n                        <ion-icon name=\"key-outline\"></ion-icon>\n                    </ion-label>\n                    <ion-input formControlName=\"password\" placeholder=\"Password\" [(ngModel)]=\"user.password\"\n                               type=\"password\"></ion-input>\n                </ion-item>\n                <div style=\"display: flex; align-items: center; align-content: center; justify-content: center\">\n                    <ion-button [disabled]=\"!createAccountValidator.valid\" color=\"success\" shape=\"round\"\n                                (click)=\"onSubmitCreateAccount()\">Create Account\n                    </ion-button>\n                    <a (click)=\"isAccountExist = !isAccountExist\">Sign In</a>\n                </div>\n            </form>\n        </ion-list>\n    </div>\n    <div *ngIf=\"isNeedNewPassword\" style=\"display: flex; align-items: center; align-content: center; justify-content: center;\n   flex-direction: column; margin-top: 50%;--ion-background-color: transparent \">\n        <ion-list>\n            <form style=\"display: flex;flex-direction: column;justify-content: center;align-items: center\" [formGroup]=\"forgetPasswordValidator\">\n                <ion-item>\n                    <ion-label>\n                        <ion-icon name=\"mail-outline\"></ion-icon>\n                    </ion-label>\n                    <ion-input formControlName=\"email\" placeholder=\"Email\" [(ngModel)]=\"user.email\"\n                               type=\"text\"></ion-input>\n                </ion-item>\n                <ion-item>\n                    <ion-label>\n                        <ion-icon name=\"person\"></ion-icon>\n                    </ion-label>\n                    <ion-input formControlName=\"userName\" placeholder=\"User name\" [(ngModel)]=\"user.username\"\n                               type=\"text\"></ion-input>\n                </ion-item>\n                <form >\n                    <ion-button [disabled]=\"!forgetPasswordValidator.valid\" color=\"success\" shape=\"round\"\n                                (click)=\"sendPasswordForget()\">Send password\n                    </ion-button>\n                </form>\n                    <a (click)=\"isNeedNewPassword = !isNeedNewPassword\">Sign In</a>\n            </form>\n        </ion-list>\n    </div>\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/User.ts":
  /*!*************************!*\
    !*** ./src/app/User.ts ***!
    \*************************/

  /*! exports provided: User */

  /***/
  function srcAppUserTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "User", function () {
      return User;
    });

    var User = function User(email, password, authError, pseudo, id, isActive, username, role) {
      _classCallCheck(this, User);

      this.email = email;
      this.username = username;
      this.password = password;
      this.pseudo = pseudo;
      this.id = id;
      this.authError = authError;
      this.role = role;
      this.isActive = isActive;
    };
    /***/

  },

  /***/
  "./src/app/login/login-routing.module.ts":
  /*!***********************************************!*\
    !*** ./src/app/login/login-routing.module.ts ***!
    \***********************************************/

  /*! exports provided: LoginPageRoutingModule */

  /***/
  function srcAppLoginLoginRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginPageRoutingModule", function () {
      return LoginPageRoutingModule;
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


    var _login_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./login.page */
    "./src/app/login/login.page.ts");

    var routes = [{
      path: '',
      component: _login_page__WEBPACK_IMPORTED_MODULE_3__["LoginPage"]
    }];

    var LoginPageRoutingModule = function LoginPageRoutingModule() {
      _classCallCheck(this, LoginPageRoutingModule);
    };

    LoginPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], LoginPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/login/login.module.ts":
  /*!***************************************!*\
    !*** ./src/app/login/login.module.ts ***!
    \***************************************/

  /*! exports provided: LoginPageModule */

  /***/
  function srcAppLoginLoginModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginPageModule", function () {
      return LoginPageModule;
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


    var _login_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./login-routing.module */
    "./src/app/login/login-routing.module.ts");
    /* harmony import */


    var _login_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./login.page */
    "./src/app/login/login.page.ts");

    var LoginPageModule = function LoginPageModule() {
      _classCallCheck(this, LoginPageModule);
    };

    LoginPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _login_routing_module__WEBPACK_IMPORTED_MODULE_5__["LoginPageRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]],
      declarations: [_login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]]
    })], LoginPageModule);
    /***/
  },

  /***/
  "./src/app/login/login.page.scss":
  /*!***************************************!*\
    !*** ./src/app/login/login.page.scss ***!
    \***************************************/

  /*! exports provided: default */

  /***/
  function srcAppLoginLoginPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLnBhZ2Uuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/login/login.page.ts":
  /*!*************************************!*\
    !*** ./src/app/login/login.page.ts ***!
    \*************************************/

  /*! exports provided: LoginPage */

  /***/
  function srcAppLoginLoginPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginPage", function () {
      return LoginPage;
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


    var _User__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../User */
    "./src/app/User.ts");
    /* harmony import */


    var _services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../services/user.service */
    "./src/app/services/user.service.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _services_auth_guard_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../services/auth-guard.service */
    "./src/app/services/auth-guard.service.ts");
    /* harmony import */


    var _services_auth_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../services/auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var _services_token_storage_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../services/token-storage.service */
    "./src/app/services/token-storage.service.ts");

    var LoginPage = /*#__PURE__*/function () {
      function LoginPage(router, userService, formBuilder, toastController, authGuardService, loadingController, authService, tokenStorage) {
        _classCallCheck(this, LoginPage);

        this.router = router;
        this.userService = userService;
        this.formBuilder = formBuilder;
        this.toastController = toastController;
        this.authGuardService = authGuardService;
        this.loadingController = loadingController;
        this.authService = authService;
        this.tokenStorage = tokenStorage;
        this.user = new _User__WEBPACK_IMPORTED_MODULE_3__["User"]("", "", true);
        this.isAccountExist = true;
        this.isNeedNewPassword = false;
        this.isLoading = false;
        this.form = {};
        this.isLoggedIn = false;
        this.isLoginFailed = false;
        this.errorMessage = '';
        this.roles = [];
        this.isSuccessful = false;
        this.isSignUpFailed = false;
        this.signInValidator = this.formBuilder.group({
          email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
          password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
          username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]
        }), this.createAccountValidator = this.formBuilder.group({
          email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
          password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
          username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]
        }), this.forgetPasswordValidator = this.formBuilder.group({
          email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
          username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]
        });
      }

      _createClass(LoginPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          if (this.tokenStorage.getToken()) {
            this.isLoggedIn = true;
            this.roles = this.tokenStorage.getUser().roles;
          }
        }
      }, {
        key: "onSubmitCreateAccount",
        value: function onSubmitCreateAccount() {
          var _this = this;

          this.present();
          console.log(this.user);
          var subscription = this.authService.register(this.user).subscribe(function (data) {
            console.log(data);
            _this.isSuccessful = true;
            _this.isSignUpFailed = false;
          }, function (err) {
            _this.presentToast(err.error.message, 2000);

            _this.errorMessage = err.error.message;
            _this.isSignUpFailed = true;

            _this.dismiss();

            subscription.unsubscribe();
          }, function () {
            _this.presentToast('Account created, please check your Mail box', 2000), _this.dismiss();
            _this.isAccountExist = !_this.isAccountExist; // this.onSubmitSignIn();

            subscription.unsubscribe();
          });
        }
      }, {
        key: "onSubmitSignIn",
        value: function onSubmitSignIn() {
          var _this2 = this;

          this.present();
          console.log(this.user);
          var subscription = this.authService.login(this.user).subscribe(function (data) {
            _this2.tokenStorage.saveToken(data.accessToken);

            _this2.tokenStorage.saveUser(data);

            _this2.isLoginFailed = false;
            _this2.isLoggedIn = true;
            _this2.roles = _this2.tokenStorage.getUser().roles;

            _this2.signIn();
          }, function (err) {
            console.log(err);

            _this2.presentToast(err.error.message, 2000);

            _this2.errorMessage = err.error.message;
            _this2.isLoginFailed = true;

            _this2.dismiss();

            subscription.unsubscribe();
          }, function () {
            _this2.dismiss();

            subscription.unsubscribe();
          });
        }
      }, {
        key: "signIn",
        value: function signIn() {
          var _this3 = this;

          var userToSignIn = new _User__WEBPACK_IMPORTED_MODULE_3__["User"]();
          userToSignIn.email = this.user.email;
          userToSignIn.password = this.user.password;
          userToSignIn.authError = this.user.authError;
          this.present();
          console.log(userToSignIn);
          var subscription = this.userService.signIn(userToSignIn).subscribe(function (value) {
            _this3.userService.user = value;
          }, function (error) {
            _this3.presentToast(error.error.message, 2000), _this3.dismiss();
          }, function () {
            _this3.checkIfIsConnected(_this3.userService.user.authError), _this3.dismiss();
            subscription.unsubscribe();
          });
        }
      }, {
        key: "createAccount",
        value: function createAccount() {
          var _this4 = this;

          var userToLog = new _User__WEBPACK_IMPORTED_MODULE_3__["User"]();
          userToLog.email = this.user.email;
          userToLog.password = this.user.password;
          userToLog.pseudo = this.user.pseudo;
          var subscription = this.userService.createAccount(userToLog).subscribe(function (value) {
            _this4.userService.user = value, console.log(value);
          }, function (error) {
            _this4.presentToast(error.error.message, 2000), _this4.dismiss();
          }, function () {
            console.log(_this4.user.authError), _this4.checkIfIsConnected(_this4.userService.user.authError), _this4.presentToast('Account created, please check your Mail box', 2000), _this4.dismiss(), subscription.unsubscribe();
          });
        }
      }, {
        key: "checkIfIsConnected",
        value: function checkIfIsConnected(userError) {
          if (userError === true) {
            console.log(userError);
            this.presentToast("connexion impossible probléme de mot de passe", 2000);
            return console.log("connection failed", "je passe dans le true");
          } else {
            console.log(this.user, "je passe dans le false");
            this.authGuardService.isAuthenticated = true;
            this.router.navigateByUrl('/home');
            this.presentToast("connected", 2000);
            return console.log("connected");
          }
        }
      }, {
        key: "onForgetPassword",
        value: function onForgetPassword() {
          this.isNeedNewPassword = !this.isNeedNewPassword;
        }
      }, {
        key: "sendPasswordForget",
        value: function sendPasswordForget() {
          var _this5 = this;

          var messageToast = "";
          console.log('send password');
          var userToGetPassword = new _User__WEBPACK_IMPORTED_MODULE_3__["User"]();
          userToGetPassword.email = this.user.email;
          userToGetPassword.username = this.user.username;
          userToGetPassword.password = this.user.username;
          this.present();
          var subscription = this.userService.getForgetPassword(userToGetPassword).subscribe(function (value) {
            messageToast = value;
          }, function (error) {
            _this5.presentToast(error.error.message, 2000), _this5.dismiss();
          }, function () {
            _this5.presentToast(messageToast, 2000), _this5.isNeedNewPassword = false, _this5.dismiss();
            subscription.unsubscribe();
          });
        }
      }, {
        key: "presentToast",
        value: function presentToast(message, duration) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var toast;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return this.toastController.create({
                      message: message,
                      duration: duration
                    });

                  case 2:
                    toast = _context.sent;
                    toast.present();

                  case 4:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "present",
        value: function present() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            var _this6 = this;

            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    this.isLoading = true;
                    _context2.next = 3;
                    return this.loadingController.create({// duration: 5000,
                    }).then(function (a) {
                      a.present().then(function () {
                        console.log('presented');

                        if (!_this6.isLoading) {
                          a.dismiss().then(function () {
                            return console.log('abort presenting');
                          });
                        }
                      });
                    });

                  case 3:
                    return _context2.abrupt("return", _context2.sent);

                  case 4:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }, {
        key: "dismiss",
        value: function dismiss() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    this.isLoading = false;
                    _context3.next = 3;
                    return this.loadingController.dismiss().then(function () {
                      return console.log('dismissed');
                    });

                  case 3:
                    return _context3.abrupt("return", _context3.sent);

                  case 4:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3, this);
          }));
        }
      }]);

      return LoginPage;
    }();

    LoginPage.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"]
      }, {
        type: _services_auth_guard_service__WEBPACK_IMPORTED_MODULE_7__["AuthGuardService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["LoadingController"]
      }, {
        type: _services_auth_service__WEBPACK_IMPORTED_MODULE_8__["AuthService"]
      }, {
        type: _services_token_storage_service__WEBPACK_IMPORTED_MODULE_9__["TokenStorageService"]
      }];
    };

    LoginPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-login',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./login.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./login.page.scss */
      "./src/app/login/login.page.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"], _services_auth_guard_service__WEBPACK_IMPORTED_MODULE_7__["AuthGuardService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["LoadingController"], _services_auth_service__WEBPACK_IMPORTED_MODULE_8__["AuthService"], _services_token_storage_service__WEBPACK_IMPORTED_MODULE_9__["TokenStorageService"]])], LoginPage);
    /***/
  },

  /***/
  "./src/app/services/auth.service.ts":
  /*!******************************************!*\
    !*** ./src/app/services/auth.service.ts ***!
    \******************************************/

  /*! exports provided: AuthService */

  /***/
  function srcAppServicesAuthServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthService", function () {
      return AuthService;
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
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js"); // const AUTH_API = 'http://localhost:8082/api/auth/';


    var AUTH_API = 'https://mask-wash-back-end.herokuapp.com/api/auth/';
    var httpOptions = {
      headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
        'Content-Type': 'application/json'
      })
    };

    var AuthService = /*#__PURE__*/function () {
      function AuthService(http) {
        _classCallCheck(this, AuthService);

        this.http = http;
      }

      _createClass(AuthService, [{
        key: "login",
        value: function login(credentials) {
          return this.http.post(AUTH_API + 'signin', {
            username: credentials.username,
            password: credentials.password
          }, httpOptions);
        }
      }, {
        key: "register",
        value: function register(user) {
          return this.http.post(AUTH_API + 'signup', {
            username: user.username,
            email: user.email,
            password: user.password
          }, httpOptions);
        }
      }]);

      return AuthService;
    }();

    AuthService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    AuthService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])], AuthService);
    /***/
  }
}]);
//# sourceMappingURL=login-login-module-es5.js.map