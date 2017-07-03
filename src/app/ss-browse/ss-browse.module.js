"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var ss_main_component_1 = require("./ss-main/ss-main.component");
var all_coins_service_1 = require("./all-coins.service");
var all_coins_table_component_1 = require("./all-coins-table/all-coins-table.component");
var SsBrowseModule = (function () {
    function SsBrowseModule() {
    }
    return SsBrowseModule;
}());
SsBrowseModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule
        ],
        declarations: [ss_main_component_1.SsMainComponent, all_coins_table_component_1.AllCoinsTableComponent],
        providers: [all_coins_service_1.AllCoinsService]
    })
], SsBrowseModule);
exports.SsBrowseModule = SsBrowseModule;
//# sourceMappingURL=ss-browse.module.js.map