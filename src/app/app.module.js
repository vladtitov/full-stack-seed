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
var platform_browser_1 = require('@angular/platform-browser');
var core_1 = require('@angular/core');
var forms_1 = require('@angular/forms');
var http_1 = require('@angular/http');
var router_1 = require('@angular/router');
var app_routes_1 = require('./app.routes');
var app_component_1 = require('./app.component');
var test_component_1 = require('../../arch/test/test.component');
require('rxjs/add/operator/map');
require('rxjs/add/operator/toPromise');
require('rxjs/add/observable/throw');
require('rxjs/operator/publishLast');
var angular2_jwt_1 = require('../../arch/angular2-jwt');
var about_component_1 = require('./about/about.component');
var home_component_1 = require('./home/home.component');
var repo_browser_component_1 = require('./github/repo-browser/repo-browser.component');
var repo_list_component_1 = require('./github/repo-list/repo-list.component');
var repo_detail_component_1 = require('./github/repo-detail/repo-detail.component');
var contact_component_1 = require('./contact/contact.component');
var github_service_1 = require('./github/shared/github.service');
var login_main_component_1 = require('./login/login-main.component');
var login_service_1 = require('./login/login.service');
var material_1 = require('@angular/material');
//import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
var home_service_1 = require('./home/home.service');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                test_component_1.TestComponent,
                about_component_1.AboutComponent,
                repo_browser_component_1.RepoBrowserComponent,
                repo_list_component_1.RepoListComponent,
                repo_detail_component_1.RepoDetailComponent,
                home_component_1.HomeComponent,
                contact_component_1.ContactComponent,
                login_main_component_1.LoginMain
            ],
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                forms_1.ReactiveFormsModule,
                material_1.MaterialModule,
                // BrowserAnimationsModule,
                http_1.HttpModule,
                angular2_jwt_1.AuthModule,
                router_1.RouterModule.forRoot(app_routes_1.rootRouterConfig, { useHash: true })
            ],
            providers: [
                angular2_jwt_1.AuthHttp,
                github_service_1.GithubService,
                login_service_1.LoginService,
                home_service_1.HomeService,
                angular2_jwt_1.provideAuth({})
            ],
            bootstrap: [app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map