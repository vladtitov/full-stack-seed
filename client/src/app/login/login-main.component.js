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
var forms_1 = require('@angular/forms');
var router_1 = require('@angular/router');
var LoginMain = (function () {
    function LoginMain(loginService, formBuilder, router) {
        this.loginService = loginService;
        this.formBuilder = formBuilder;
        this.router = router;
    }
    LoginMain.prototype.ngOnInit = function () {
        this.loginForm = this.formBuilder.group({
            username: ['john@doe.com', forms_1.Validators.compose([forms_1.Validators.required, forms_1.Validators.minLength(3), forms_1.Validators.maxLength(64)])],
            password: ['my password 2', forms_1.Validators.compose([forms_1.Validators.required, forms_1.Validators.minLength(3), forms_1.Validators.maxLength(32)])]
        });
    };
    LoginMain.prototype.login = function (email, password) {
        var _this = this;
        this.loginService.login(email, password)
            .subscribe(function () {
            alert('Login successful');
            _this.router.navigateByUrl('/home');
        }, console.error);
    };
    LoginMain = __decorate([
        core_1.Component({
            selector: 'login-main',
            template: "\n  <div>\n      <div>\n          <div>\n             <div>\n                <div>\n                    <md-input-container>\n                        <input #username mdInput  type=\"text\"  formControlName=\"username\"  placeholder=\"username\"  />\n                    </md-input-container>\n                </div>\n                <div>\n                    <md-input-container>\n                        <input #password mdInput type=\"password\"  formControlName=\"password\" placeholder=\"password\" required />\n                    </md-input-container>\n                </div>\n                  <div>\n                      <button [disabled]=\"!loginForm.valid\" md-raised-button color=\"accent\" (click)=\"login(email.value, password.value)\" >Login</button>\n                  </div>\n                <div>\n                    \n                </div>\n              </div>\n              \n          </div>\n      </div>\n  </div>\n  "
        }), 
        __metadata('design:paramtypes', [login_service_1.LoginService, forms_1.FormBuilder, router_1.Router])
    ], LoginMain);
    return LoginMain;
}());
exports.LoginMain = LoginMain;
//# sourceMappingURL=login-main.component.js.map