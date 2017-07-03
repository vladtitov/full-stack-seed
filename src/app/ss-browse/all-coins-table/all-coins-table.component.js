"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var _ = require("lodash");
var AllCoinsTableComponent = (function () {
    function AllCoinsTableComponent() {
        this.asc_desc = 'asc';
    }
    AllCoinsTableComponent.prototype.ngOnInit = function () {
    };
    AllCoinsTableComponent.prototype.onClick = function (creteria) {
        console.log(creteria);
        if (this.creteria === creteria) {
            if (this.asc_desc === 'asc')
                this.asc_desc = 'desc';
            else
                this.asc_desc = 'asc';
        }
        else
            this.asc_desc = 'asc';
        console.log(this.asc_desc);
        this.sortedAllCoins = _.orderBy(this.sortedAllCoins, creteria, this.asc_desc);
        this.creteria = creteria;
    };
    return AllCoinsTableComponent;
}());
__decorate([
    core_1.Input()
], AllCoinsTableComponent.prototype, "sortedAllCoins", void 0);
AllCoinsTableComponent = __decorate([
    core_1.Component({
        selector: 'app-all-coins-table',
        templateUrl: './all-coins-table.component.html',
        styleUrls: ['./all-coins-table.component.css']
    })
], AllCoinsTableComponent);
exports.AllCoinsTableComponent = AllCoinsTableComponent;
//# sourceMappingURL=all-coins-table.component.js.map