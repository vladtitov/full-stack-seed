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
var angular2_jwt_1 = require('./libs/angular2-jwt');
var router_1 = require('@angular/router');
var AppComponent = (function () {
    function AppComponent(http, router) {
        this.http = http;
        this.router = router;
        this.title = 'app works!';
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.http.authError.subscribe(function (err) {
            console.warn(err);
            _this.router.navigateByUrl('/login');
        });
        /*this.menu = this.http.get('http://localhost:8090/api/menu/1').map(res=>{
    
          console.log(res.json().menu);
          return res.json().menu;
        })*/
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app-root',
            template: "       \n      <h1>{{title}}</h1>\n      <div>\n          {{menu | async}}\n      <ul>\n          UL\n         <!-- <li *ngFor = \"let item of (menu | async)\" >\n              {{item}}\n          </li>-->\n      </ul>\n      \n      </div>\n      <app-test> </app-test>      \n      <router-outlet></router-outlet>\n  "
        }), 
        __metadata('design:paramtypes', [angular2_jwt_1.AuthHttp, router_1.Router])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map