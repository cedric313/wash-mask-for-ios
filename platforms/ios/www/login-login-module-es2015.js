(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["login-login-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.page.html":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.page.html ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\n    <div *ngIf=\"isAccountExist && !isNeedNewPassword\" style=\"display: flex; align-items: center; align-content: center; justify-content: center;\n   flex-direction: column; margin-top: 50%;--ion-background-color: transparent \">\n        <ion-list>\n            <form [formGroup]=\"signInValidator\">\n                <ion-item>\n                    <ion-label>\n                        <ion-icon name=\"mail-outline\"></ion-icon>\n                    </ion-label>\n                    <ion-input formControlName=\"email\" placeholder=\"Email\" [(ngModel)]=\"user.email\"\n                               type=\"text\"></ion-input>\n                </ion-item>\n                <ion-item>\n                    <ion-label>\n                        <ion-icon name=\"person\"></ion-icon>\n                    </ion-label>\n                    <ion-input formControlName=\"username\" placeholder=\"User name\" [(ngModel)]=\"user.username\"\n                               type=\"text\"></ion-input>\n                </ion-item>\n                <ion-item>\n                    <ion-label>\n                        <ion-icon name=\"key-outline\"></ion-icon>\n                    </ion-label>\n                    <ion-input formControlName=\"password\" placeholder=\"Password\" [(ngModel)]=\"user.password\"\n                               type=\"password\"></ion-input>\n                </ion-item>\n                <div style=\"display: flex; align-items: center; align-content: center;flex-direction: column\">\n                    <ion-button [disabled]=\"!signInValidator.valid\" color=\"success\" shape=\"round\" (click)=\"onSubmitSignIn()\">\n                        Sign in\n                    </ion-button>\n                </div>\n                <div style=\"display: flex; align-items: center; align-content: center; flex-direction: column\">\n                    <a (click)=\"onForgetPassword()\">Forget password?</a>\n                    <a (click)=\"isAccountExist = !isAccountExist\">Create Account</a>\n                </div>\n            </form>\n        </ion-list>\n    </div>\n    <div *ngIf=\"!isAccountExist && !isNeedNewPassword\" style=\"display: flex; align-items: center; align-content: center; justify-content: center;\n   flex-direction: column; margin-top: 50%;--ion-background-color: transparent \">\n        <ion-list>\n            <form [formGroup]=\"createAccountValidator\">\n                <ion-item>\n                    <ion-label>\n                        <ion-icon name=\"mail-outline\"></ion-icon>\n                    </ion-label>\n                    <ion-input formControlName=\"email\" placeholder=\"Email\" [(ngModel)]=\"user.email\"\n                               type=\"text\"></ion-input>\n                </ion-item>\n                <ion-item>\n                    <ion-label>\n                        <ion-icon name=\"person\"></ion-icon>\n                    </ion-label>\n                    <ion-input formControlName=\"username\" placeholder=\"User name\" [(ngModel)]=\"user.username\"\n                               type=\"text\"></ion-input>\n                </ion-item>\n                <ion-item>\n                    <ion-label>\n                        <ion-icon name=\"key-outline\"></ion-icon>\n                    </ion-label>\n                    <ion-input formControlName=\"password\" placeholder=\"Password\" [(ngModel)]=\"user.password\"\n                               type=\"password\"></ion-input>\n                </ion-item>\n                <div style=\"display: flex; align-items: center; align-content: center; justify-content: center\">\n                    <ion-button [disabled]=\"!createAccountValidator.valid\" color=\"success\" shape=\"round\"\n                                (click)=\"onSubmitCreateAccount()\">Create Account\n                    </ion-button>\n                    <a (click)=\"isAccountExist = !isAccountExist\">Sign In</a>\n                </div>\n            </form>\n        </ion-list>\n    </div>\n    <div *ngIf=\"isNeedNewPassword\" style=\"display: flex; align-items: center; align-content: center; justify-content: center;\n   flex-direction: column; margin-top: 50%;--ion-background-color: transparent \">\n        <ion-list>\n            <form style=\"display: flex;flex-direction: column;justify-content: center;align-items: center\" [formGroup]=\"forgetPasswordValidator\">\n                <ion-item>\n                    <ion-label>\n                        <ion-icon name=\"mail-outline\"></ion-icon>\n                    </ion-label>\n                    <ion-input formControlName=\"email\" placeholder=\"Email\" [(ngModel)]=\"user.email\"\n                               type=\"text\"></ion-input>\n                </ion-item>\n                <ion-item>\n                    <ion-label>\n                        <ion-icon name=\"person\"></ion-icon>\n                    </ion-label>\n                    <ion-input formControlName=\"userName\" placeholder=\"User name\" [(ngModel)]=\"user.username\"\n                               type=\"text\"></ion-input>\n                </ion-item>\n                <form >\n                    <ion-button [disabled]=\"!forgetPasswordValidator.valid\" color=\"success\" shape=\"round\"\n                                (click)=\"sendPasswordForget()\">Send password\n                    </ion-button>\n                </form>\n                    <a (click)=\"isNeedNewPassword = !isNeedNewPassword\">Sign In</a>\n            </form>\n        </ion-list>\n    </div>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/User.ts":
/*!*************************!*\
  !*** ./src/app/User.ts ***!
  \*************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
class User {
    constructor(email, password, authError, pseudo, id, isActive, username, role) {
        this.email = email;
        this.username = username;
        this.password = password;
        this.pseudo = pseudo;
        this.id = id;
        this.authError = authError;
        this.role = role;
        this.isActive = isActive;
    }
}


/***/ }),

/***/ "./src/app/login/login-routing.module.ts":
/*!***********************************************!*\
  !*** ./src/app/login/login-routing.module.ts ***!
  \***********************************************/
/*! exports provided: LoginPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageRoutingModule", function() { return LoginPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login.page */ "./src/app/login/login.page.ts");




const routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_3__["LoginPage"]
    }
];
let LoginPageRoutingModule = class LoginPageRoutingModule {
};
LoginPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], LoginPageRoutingModule);



/***/ }),

/***/ "./src/app/login/login.module.ts":
/*!***************************************!*\
  !*** ./src/app/login/login.module.ts ***!
  \***************************************/
/*! exports provided: LoginPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _login_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login-routing.module */ "./src/app/login/login-routing.module.ts");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login.page */ "./src/app/login/login.page.ts");







let LoginPageModule = class LoginPageModule {
};
LoginPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _login_routing_module__WEBPACK_IMPORTED_MODULE_5__["LoginPageRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
        ],
        declarations: [_login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]]
    })
], LoginPageModule);



/***/ }),

/***/ "./src/app/login/login.page.scss":
/*!***************************************!*\
  !*** ./src/app/login/login.page.scss ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/login/login.page.ts":
/*!*************************************!*\
  !*** ./src/app/login/login.page.ts ***!
  \*************************************/
/*! exports provided: LoginPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPage", function() { return LoginPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _User__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../User */ "./src/app/User.ts");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _services_auth_guard_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/auth-guard.service */ "./src/app/services/auth-guard.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_token_storage_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../services/token-storage.service */ "./src/app/services/token-storage.service.ts");










let LoginPage = class LoginPage {
    constructor(router, userService, formBuilder, toastController, authGuardService, loadingController, authService, tokenStorage) {
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
            username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
        }),
            this.createAccountValidator = this.formBuilder.group({
                email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
                password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
                username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            }),
            this.forgetPasswordValidator = this.formBuilder.group({
                email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
                username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            });
    }
    ngOnInit() {
        if (this.tokenStorage.getToken()) {
            this.isLoggedIn = true;
            this.roles = this.tokenStorage.getUser().roles;
        }
    }
    onSubmitCreateAccount() {
        this.present();
        console.log(this.user);
        const subscription = this.authService.register(this.user).subscribe(data => {
            console.log(data);
            this.isSuccessful = true;
            this.isSignUpFailed = false;
        }, err => {
            this.presentToast(err.error.message, 2000);
            this.errorMessage = err.error.message;
            this.isSignUpFailed = true;
            this.dismiss();
            subscription.unsubscribe();
        }, () => {
            this.presentToast('Account created, please check your Mail box', 2000),
                this.dismiss();
            this.isAccountExist = !this.isAccountExist;
            // this.onSubmitSignIn();
            subscription.unsubscribe();
        });
    }
    onSubmitSignIn() {
        this.present();
        console.log(this.user);
        const subscription = this.authService.login(this.user).subscribe(data => {
            this.tokenStorage.saveToken(data.accessToken);
            this.tokenStorage.saveUser(data);
            this.isLoginFailed = false;
            this.isLoggedIn = true;
            this.roles = this.tokenStorage.getUser().roles;
            this.signIn();
        }, err => {
            console.log(err);
            this.presentToast(err.error.message, 2000);
            this.errorMessage = err.error.message;
            this.isLoginFailed = true;
            this.dismiss();
            subscription.unsubscribe();
        }, () => {
            this.dismiss();
            subscription.unsubscribe();
        });
    }
    signIn() {
        let userToSignIn = new _User__WEBPACK_IMPORTED_MODULE_3__["User"]();
        userToSignIn.email = this.user.email;
        userToSignIn.password = this.user.password;
        userToSignIn.authError = this.user.authError;
        this.present();
        console.log(userToSignIn);
        const subscription = this.userService.signIn(userToSignIn).subscribe(value => {
            this.userService.user = value;
        }, error => {
            this.presentToast(error.error.message, 2000),
                this.dismiss();
        }, () => {
            this.checkIfIsConnected(this.userService.user.authError),
                this.dismiss();
            subscription.unsubscribe();
        });
    }
    createAccount() {
        let userToLog = new _User__WEBPACK_IMPORTED_MODULE_3__["User"]();
        userToLog.email = this.user.email;
        userToLog.password = this.user.password;
        userToLog.pseudo = this.user.pseudo;
        const subscription = this.userService.createAccount(userToLog).subscribe(value => {
            this.userService.user = value,
                console.log(value);
        }, error => {
            this.presentToast(error.error.message, 2000),
                this.dismiss();
        }, () => {
            console.log(this.user.authError),
                this.checkIfIsConnected(this.userService.user.authError),
                this.presentToast('Account created, please check your Mail box', 2000),
                this.dismiss(),
                subscription.unsubscribe();
        });
    }
    checkIfIsConnected(userError) {
        if (userError === true) {
            console.log(userError);
            this.presentToast("connexion impossible probléme de mot de passe", 2000);
            return console.log("connection failed", "je passe dans le true");
        }
        else {
            console.log(this.user, "je passe dans le false");
            this.authGuardService.isAuthenticated = true;
            this.router.navigateByUrl('/home');
            this.presentToast("connected", 2000);
            return console.log("connected");
        }
    }
    onForgetPassword() {
        this.isNeedNewPassword = !this.isNeedNewPassword;
    }
    sendPasswordForget() {
        let messageToast = "";
        console.log('send password');
        let userToGetPassword = new _User__WEBPACK_IMPORTED_MODULE_3__["User"]();
        userToGetPassword.email = this.user.email;
        userToGetPassword.username = this.user.username;
        userToGetPassword.password = this.user.username;
        this.present();
        const subscription = this.userService.getForgetPassword(userToGetPassword).subscribe(value => {
            messageToast = value;
        }, error => {
            this.presentToast(error.error.message, 2000),
                this.dismiss();
        }, () => {
            this.presentToast(messageToast, 2000),
                this.isNeedNewPassword = false,
                this.dismiss();
            subscription.unsubscribe();
        });
    }
    presentToast(message, duration) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: message,
                duration: duration
            });
            toast.present();
        });
    }
    present() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.isLoading = true;
            return yield this.loadingController.create({
            // duration: 5000,
            }).then(a => {
                a.present().then(() => {
                    console.log('presented');
                    if (!this.isLoading) {
                        a.dismiss().then(() => console.log('abort presenting'));
                    }
                });
            });
        });
    }
    dismiss() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.isLoading = false;
            return yield this.loadingController.dismiss().then(() => console.log('dismissed'));
        });
    }
};
LoginPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"] },
    { type: _services_auth_guard_service__WEBPACK_IMPORTED_MODULE_7__["AuthGuardService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["LoadingController"] },
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_8__["AuthService"] },
    { type: _services_token_storage_service__WEBPACK_IMPORTED_MODULE_9__["TokenStorageService"] }
];
LoginPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./login.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./login.page.scss */ "./src/app/login/login.page.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"],
        _services_auth_guard_service__WEBPACK_IMPORTED_MODULE_7__["AuthGuardService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["LoadingController"],
        _services_auth_service__WEBPACK_IMPORTED_MODULE_8__["AuthService"], _services_token_storage_service__WEBPACK_IMPORTED_MODULE_9__["TokenStorageService"]])
], LoginPage);



/***/ }),

/***/ "./src/app/services/auth.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");



//const AUTH_API = 'http://localhost:8082/api/auth/';
const AUTH_API = 'https://mask-wash-back-end.herokuapp.com/api/auth/';
const httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/json' })
};
let AuthService = class AuthService {
    constructor(http) {
        this.http = http;
    }
    login(credentials) {
        return this.http.post(AUTH_API + 'signin', {
            username: credentials.username,
            password: credentials.password
        }, httpOptions);
    }
    register(user) {
        return this.http.post(AUTH_API + 'signup', {
            username: user.username,
            email: user.email,
            password: user.password
        }, httpOptions);
    }
};
AuthService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
AuthService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], AuthService);



/***/ })

}]);
//# sourceMappingURL=login-login-module-es2015.js.map