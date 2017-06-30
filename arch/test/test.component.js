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
var core_1 = require('@angular/core');
var test_service_1 = require('./test.service');
var angular2_jwt_1 = require('../angular2-jwt');
var TestComponent = (function () {
    function TestComponent(testService, auth) {
        this.testService = testService;
        this.auth = auth;
    }
    TestComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.testService.loadAPI().subscribe(function (res) {
            _this.message = res.data.message;
            /*this.testService.login().subscribe(res =>{
              console.log(res);
              localStorage.setItem('id_token', res.data),
              this.testService.getPosts().subscribe(res=>{
                console.log(res);
              })
            });*/
        });
    };
    TestComponent = __decorate([
        core_1.Component({
            selector: 'app-test',
            templateUrl: './test.component.html',
            providers: [test_service_1.TestService]
        }), 
        __metadata('design:paramtypes', [test_service_1.TestService, angular2_jwt_1.AuthHttp])
    ], TestComponent);
    return TestComponent;
}());
exports.TestComponent = TestComponent;
//# sourceMappingURL=test.component.js.map