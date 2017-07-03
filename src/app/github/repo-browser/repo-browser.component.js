"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var RepoBrowserComponent = (function () {
    function RepoBrowserComponent(router, github) {
        this.router = router;
        this.github = github;
    }
    RepoBrowserComponent.prototype.searchForOrg = function (orgName) {
        var _this = this;
        this.github.getOrg(orgName)
            .subscribe(function (_a) {
            var name = _a.name;
            console.log(name);
            _this.router.navigate(['/github', orgName]);
        });
    };
    return RepoBrowserComponent;
}());
RepoBrowserComponent = __decorate([
    core_1.Component({
        selector: 'repo-browser',
        template: "\n      <h3>GitHub Browser</h3>\n      <input type=\"text\" #repoName placeholder=\"Search Github Orgs\" value=\"angular\" />\n      <button (click)=\"searchForOrg(repoName.value)\">Search Orgs</button>\n      <router-outlet></router-outlet>  \n  "
    })
], RepoBrowserComponent);
exports.RepoBrowserComponent = RepoBrowserComponent;
//# sourceMappingURL=repo-browser.component.js.map