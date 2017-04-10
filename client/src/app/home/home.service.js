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
var angular2_jwt_1 = require('../libs/angular2-jwt');
/**
 * Created by Vlad on 4/3/2017.
 */
var HomeService = (function () {
    function HomeService(http) {
        this.http = http;
    }
    HomeService.prototype.getPosts = function () {
        console.log(angular2_jwt_1.getTokenExpiredDate());
        if (angular2_jwt_1.tokenNotExpired()) {
            console.log(' not yet');
        }
        return this.http.get('http://localhost:8090/api/posts').map(function (res) { return res.json().data; });
    };
    HomeService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [angular2_jwt_1.AuthHttp])
    ], HomeService);
    return HomeService;
}());
exports.HomeService = HomeService;
//# sourceMappingURL=home.service.js.map