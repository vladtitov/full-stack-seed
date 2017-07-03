"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var SsMainComponent = (function () {
    function SsMainComponent(service) {
        this.service = service;
        this.counter = 0;
    }
    SsMainComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.service.sortedAllCoins$.subscribe(function (res) { return _this.sortedAllCoins = res; });
        this.service.loadData();
        this.service.counter$.subscribe(function (res) { return _this.counter = res; });
    };
    SsMainComponent.prototype.onRefresh = function () {
        this.service.loadData();
    };
    return SsMainComponent;
}());
SsMainComponent = __decorate([
    core_1.Component({
        selector: 'app-ss-main',
        templateUrl: './ss-main.component.html',
        styleUrls: ['./ss-main.component.css']
    })
], SsMainComponent);
exports.SsMainComponent = SsMainComponent;
//# sourceMappingURL=ss-main.component.js.map