"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var HomeComponent = (function () {
    function HomeComponent(homeService) {
        this.homeService = homeService;
        this.posts = [];
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.posts$ = this.homeService.getPosts();
        /* .subscribe(res=>{
          this.posts = res;
          console.log(res);
        },
        console.warn);*/
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    core_1.Component({
        selector: 'home',
        template: "\n  <div>\n      <h3>Home</h3>\n      <div>\n          Posts\n          <div>\n              <md-list>\n                <md-list-item *ngFor=\"let post of (posts$ | async)\">\n                    <md-icon md-list-icon class=\"fa fa-snowflake-o\"></md-icon>\n                    <md-icon md-list-avatar class=\"fa fa-area-chart\"></md-icon>\n                    <p md-line> {{ post.description }} </p>                                \n                </md-list-item>\n              </md-list>\n          </div>\n      </div>\n  </div>\n  "
    })
], HomeComponent);
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=home.component.js.map