"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
//import {AuthHttp, getToken, getTokenExpiredDate, tokenNotExpired} from '../../../arch/angular2-jwt';
var Observable_1 = require("rxjs/Observable");
/**
 * Created by Vlad on 4/3/2017.
 */
var HomeService = (function () {
    function HomeService(http) {
        this.http = http;
    }
    HomeService.prototype.getPosts = function () {
        //console.log(getTokenExpiredDate());
        // if(tokenNotExpired()){
        //  console.log(' not yet');
        //}
        //let decoded = getToken();
        // console.log(new Date(decoded.exp*1000).toLocaleString());
        var url = 'http://localhost:8090/api/posts';
        console.log(url);
        return this.http.get(url)
            .map(function (res) {
            var r = res.json().data;
            console.log(r);
            return r;
        })
            .catch(function (err) {
            return Observable_1.Observable.throw(err);
        });
    };
    return HomeService;
}());
HomeService = __decorate([
    core_1.Injectable()
], HomeService);
exports.HomeService = HomeService;
//# sourceMappingURL=home.service.js.map