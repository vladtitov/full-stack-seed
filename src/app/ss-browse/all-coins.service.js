"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var SS_models_1 = require("../models/SS-models");
var BehaviorSubject_1 = require("rxjs/BehaviorSubject");
var Subject_1 = require("rxjs/Subject");
var AllCoinsService = (function () {
    function AllCoinsService(http) {
        this.http = http;
        this.url = 'https://utils.jaxx.io/api/exchange/proxy';
        this.sortCreteria = 'rank';
        //$emitter:JQuery = $({});
        this.CHANGE = 'CHANGE';
        this.NEW_DATA = 'NEW_DATA';
        this.counter = 0;
        this.sortedAllCoinsSub = new BehaviorSubject_1.BehaviorSubject([]);
        this.sortedAllCoins$ = this.sortedAllCoinsSub.asObservable();
        this.counterSub = new Subject_1.Subject();
        this.counter$ = this.counterSub.asObservable();
    }
    AllCoinsService.prototype.start = function () {
        //setInterval(()=> this.loadData(),60000);
        this.loadData();
    };
    AllCoinsService.prototype.setData = function (data) {
        this.allData = data;
        console.log(data.length);
        this.counterSub.next(this.counter++);
        this.sortedAllCoinsSub.next(data);
    };
    AllCoinsService.prototype.loadData = function () {
        var _this = this;
        /* let str = localStorage.getItem('exchange');
         if(str){
           let data = JSON.parse(str);
          // console.log(data);
           if(data.exchange && (Date.now() - data.timestamp)< 100000 ) {
             this.setData(data.exchange.map(this.mapExchangeData));
             return;
           }
         }
     */
        this.http.get(this.url).map(function (res) {
            return res.json().map(_this.mapExchangeData);
        }).subscribe(function (result) {
            //localStorage.setItem('exchange',JSON.stringify(result));
            /*let now = Date.now();
            let diff=  - (item.last_updated*1000);
            item.last_updated_date = Math.round(diff/1000/60)+ 'm';*/
            _this.setData(result);
        });
    };
    AllCoinsService.prototype.mapExchangeData = function (obj) {
        var data = new SS_models_1.VOExchangeData();
        for (var str in obj)
            data[str] = isNaN(obj[str]) ? obj[str] : +obj[str];
        data.volume_usd_24h = +obj['24h_volume_usd'];
        delete data['24h_volume_usd'];
        return data;
    };
    return AllCoinsService;
}());
AllCoinsService = __decorate([
    core_1.Injectable()
], AllCoinsService);
exports.AllCoinsService = AllCoinsService;
//# sourceMappingURL=all-coins.service.js.map