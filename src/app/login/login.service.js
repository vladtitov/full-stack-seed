"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Created by Vlad on 4/3/2017.
 */
var core_1 = require("@angular/core");
var BehaviorSubject_1 = require("rxjs/BehaviorSubject");
//import {Observable, BehaviorSubject} from "rxjs";
require("rxjs/operator/publishLast");
var http_1 = require("@angular/http");
//import {AuthHttp, setToken} from '../libs/angular2-jwt';
var User = (function () {
    function User() {
    }
    return User;
}());
exports.User = User;
exports.UNKNOWN_USER = {
    firstName: 'Unknown'
};
var LoginService = (function () {
    function LoginService(http, auth) {
        this.http = http;
        this.auth = auth;
        this.subject = new BehaviorSubject_1.BehaviorSubject(exports.UNKNOWN_USER);
        this.user$ = this.subject.asObservable();
    }
    LoginService.prototype.login = function (username, password) {
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        var url = '/api/login';
        console.log(url);
        return this.http.post(url, { username: username, password: password, deviceId: 1 }, headers)
            .map(function (res) { return res.json().data; });
        ///.do(token => {
        //  return setToken(token);
        // })
        // .do(user => this.subject.next(user))
        // .publishLast().refCount();
    };
    return LoginService;
}());
LoginService = __decorate([
    core_1.Injectable()
], LoginService);
exports.LoginService = LoginService;
//# sourceMappingURL=login.service.js.map