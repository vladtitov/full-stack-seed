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
var http_1 = require('@angular/http');
var angular2_jwt_1 = require('../angular2-jwt');
var TestService = (function () {
    function TestService(http, auth) {
        this.http = http;
        this.auth = auth;
    }
    TestService.prototype.loadAPI = function () {
        return this.http.get('http://localhost:8090/api/test').map(function (res) { return res.json(); });
    };
    TestService.prototype.login = function () {
        return this.http.post('http://localhost:8090/api/login', {
            // username:'uplight.ca@gmail.com',
            username: 'john@doe.com',
            password: 'my password 2',
            deviceId: 'device2'
        }).map(function (res) { return res.json(); });
    };
    TestService.prototype.getPosts = function () {
        return this.auth.get('http://localhost:8090/api/posts').map(function (res) { return res.json(); });
    };
    TestService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http, angular2_jwt_1.AuthHttp])
    ], TestService);
    return TestService;
}());
exports.TestService = TestService;
//# sourceMappingURL=test.service.js.map