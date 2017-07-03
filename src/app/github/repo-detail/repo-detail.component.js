"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var RepoDetailComponent = (function () {
    function RepoDetailComponent(github, route) {
        this.github = github;
        this.route = route;
        this.repoDetails = {};
    }
    RepoDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.org = _this.route.snapshot.parent.params['org'];
            _this.repo = params['repo'] || '';
            if (_this.repo) {
                _this.github.getRepoForOrg(_this.org, _this.repo)
                    .subscribe(function (repoDetails) {
                    _this.repoDetails = repoDetails;
                });
            }
        });
    };
    return RepoDetailComponent;
}());
RepoDetailComponent = __decorate([
    core_1.Component({
        selector: 'repo-detail',
        styleUrls: ['./repo-detail.component.css'],
        templateUrl: './repo-detail.component.html'
    })
], RepoDetailComponent);
exports.RepoDetailComponent = RepoDetailComponent;
//# sourceMappingURL=repo-detail.component.js.map