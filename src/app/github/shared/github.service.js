"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
require("rxjs/add/operator/map");
var GithubService = (function () {
    function GithubService(http) {
        this.http = http;
    }
    GithubService.prototype.getOrg = function (org) {
        return this.makeRequest("orgs/" + org);
    };
    GithubService.prototype.getReposForOrg = function (org) {
        return this.makeRequest("orgs/" + org + "/repos");
    };
    GithubService.prototype.getRepoForOrg = function (org, repo) {
        return this.makeRequest("repos/" + org + "/" + repo);
    };
    GithubService.prototype.makeRequest = function (path) {
        var params = new http_1.URLSearchParams();
        params.set('per_page', '100');
        var url = "https://api.github.com/" + path;
        return this.http.get(url, { search: params })
            .map(function (res) { return res.json(); });
    };
    return GithubService;
}());
GithubService = __decorate([
    core_1.Injectable()
], GithubService);
exports.GithubService = GithubService;
//# sourceMappingURL=github.service.js.map