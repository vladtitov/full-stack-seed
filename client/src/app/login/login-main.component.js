"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * Created by Vlad on 4/3/2017.
 */
var core_1 = require('@angular/core');
var login_service_1 = require('./login.service');
var LoginMain = (function () {
    function LoginMain(loginService) {
        this.loginService = loginService;
    }
    LoginMain = __decorate([
        core_1.Component({
            selector: 'login-main',
            template: "\n  <div>\n      <div>\n          <div>\n              <form (ngSubmit)=\"login()\" [formGroup]=\"loginForm\" novalidate>\n                <div>\n                    <input type=\"text\" class=\"form-control\" formControlName=\"username\"  [placeholder]=\"'Username' | translate\" />\n                </div>\n                <div>\n                    <input type=\"password\" class=\"form-control\" formControlName=\"password\" [placeholder]=\"'Password' | translate\" required/>\n                </div>\n                <div>\n                    \n                </div>\n              </form>\n              \n          </div>\n      </div>\n  </div>\n  "
        }), 
        __metadata('design:paramtypes', [login_service_1.LoginService])
    ], LoginMain);
    return LoginMain;
}());
exports.LoginMain = LoginMain;
//# sourceMappingURL=login-main.component.js.map