import { Injectable } from '@angular/core';
import {VOExchangeData} from '../models/SS-models';
import {Observable} from 'rxjs/Observable';
import {Http} from '@angular/http';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {Subject} from 'rxjs/Subject';
import {script} from 'bitcoinjs-lib';
import * as _ from 'lodash';

@Injectable()
export class AllCoinsService {

  private allCoins:VOExchangeData[];
  allCoins$:Observable<VOExchangeData[]>;
  private allCoinsSub:BehaviorSubject<VOExchangeData[]>;

  private selectedCoins:{[symbol:string]:VOExchangeData};
  selectedCoins$:Observable<{[symbol:string]:VOExchangeData}>;
  private selectedCoinsSub:BehaviorSubject<{[symbol:string]:VOExchangeData}>;

  private selectedCoinsNames:string[];

  private timestampSub:Subject<number>;
  timestamp$:Observable<number>;
  private timestamp=0;
  counter:number;

  totalCoins$:Observable<number>;
  private totalCoinsSub:Subject<number>;

  totalSelectedCoins$:Observable<number>;
  private totalSelectedCoinsSub:Subject<number>;


  //private marketIndexed:{[s:string]:VOExchangeData};
  //private marketIndexedSub:Subject<{[s:string]:VOExchangeData}>;
 // marketIndexed$:Observable<{[s:string]:VOExchangeData}>;

 // private selectedMarketIndexed:{[s:string]:VOExchangeData};
 // private selectedMarketIndexedSub:Subject<{[s:string]:VOExchangeData}>;
 // selectedMarketIndexed$:Observable<{[s:string]:VOExchangeData}>;

  constructor(private http:Http) {

    this.allCoinsSub =  new BehaviorSubject([]);
    this.allCoins$ =  this.allCoinsSub.asObservable();

    this.timestampSub = new Subject();
    this.timestamp$ = this.timestampSub.asObservable();


    this.totalCoinsSub = new Subject();
    this.totalCoins$ = this.totalCoinsSub.asObservable();


    this.totalCoinsSub = new Subject();
    this.totalCoins$ = this.totalCoinsSub.asObservable();


    this.totalSelectedCoinsSub = new Subject();
    this.totalSelectedCoins$ = this.totalCoinsSub.asObservable();



    this.selectedCoinsSub =  new BehaviorSubject({});
    this.selectedCoins$ =  this.selectedCoinsSub.asObservable();

   // this.marketIndexedSub = new Subject();
   // this.marketIndexed$ = this.marketIndexedSub.asObservable();

   // this.selectedMarketIndexedSub = new Subject();
   // this.selectedMarketIndexed$ = this.selectedMarketIndexedSub.asObservable();
    this.counter = 0;
    this.loadData();
  }


  private interval;
  start():void{
   this.interval =  setInterval(()=> this.loadData(),60000);
    this.loadData();
  }





/*  getSelectedPrices():{[s:string]:number}{
    let out = {};

    this.selectedCoins.forEach(function (item) {
      out[item.symbol]=item.price_usd
    })

    return out;
  }*/


  setData(data:{payload:VOExchangeData[],timestamp:number}):void{

    let ar = data.payload;
    this.allCoins = ar;
    this.timestamp = data.timestamp;
    console.log(' allCoins   ' +this.allCoins.length);
    this.counter++;
    this.filterAllMarket();
    this.timestampSub.next(this.timestamp);
    this.allCoinsSub.next(this.allCoins);
    this.totalCoinsSub.next(this.allCoins.length);
  }


  filterAllMarket(){
    let ar = this.allCoins;
    let marketIndexed = {};
   // let selectedMarketIndexed = {}
    let selectedCoins ={};
    let selNames:string[] = this.getSelectedNames();

    ar.forEach(function (item) {
      marketIndexed[item.symbol] = item
      if(selNames.indexOf(item.symbol) !==-1){
        item.selected = true;
        selectedCoins[item.symbol] = item;
        //selectedCoins.push(item);
      }

    });

    //this.marketIndexed = marketIndexed;
   // this.selectedMarketIndexed = selectedMarketIndexed;
    this.selectedCoins = selectedCoins;


    this.selectedCoinsSub.next(this.selectedCoins);
   // this.totalSelectedCoinsSub.next(this.selectedCoins.length);

    //this.marketIndexedSub.next(this.marketIndexed);

   // this.selectedMarketIndexedSub.next(this.selectedMarketIndexed);
    console.log('selectedCoin  '+ this.selectedCoins.length);

  }


  broadcastUpdate(){


  }

  populateSelected():void{
    let out ={};
    let val = this.getSelectedNames();

    this.allCoins.forEach(function (item) {
      if(val.indexOf(item.symbol) !== -1){

        out[item.symbol] = item;
      }
    });

    this.selectedCoins = out;
  }

  getSelectedNames():string[]{

    if(!this.selectedCoinsNames) {
      this.selectedCoinsNames = []
      let str = localStorage.getItem('selectedCoinsNames');
      try {
        if (str) this.selectedCoinsNames = JSON.parse(str);
      } catch (e) {
        console.error(e);
      }
    }

    return this.selectedCoinsNames;
  }


  addSelected(symbol:string){

    let ar:string[] = _.keys(this.selectedCoins);


    if(ar.indexOf(symbol) === -1)ar.push(symbol);

    this.saveSelectedNames(ar);
    this.populateSelected();
    this.selectedCoinsSub.next(this.selectedCoins);

  }

  removeSelected(symbol:string){
    let ar = this.getSelectedNames()
    for(let i= ar.length -1; i>=0; i--) if(ar[i] === symbol )ar.splice(i,1);
    this.saveSelectedNames(ar);
    this.populateSelected();
    this.selectedCoinsSub.next(this.selectedCoins);
  }


  saveSelectedNames(val:string[]):void{
    this.selectedCoinsNames = val;
    localStorage.setItem('selectedCoinsNames', JSON.stringify(val));
  }


  loadData(now?:string):void {
  let url='/api/exchange/shapeshift/all-market'+(now?'/now':'');
    this.http.get(url).map(res=>{
      let data = res.json();
      data.payload = data.payload.map(this.mapExchangeData)
      return data
    }).subscribe(result=>{
      this.setData(result);
    })
  }

  mapExchangeData(obj):VOExchangeData{
    let data:VOExchangeData = new VOExchangeData();
    for(let str in obj) data[str] = isNaN(obj[str])?obj[str]:+obj[str];

    data.volume_usd_24h = +obj['24h_volume_usd'];
    delete data['24h_volume_usd'];
    return data;
  }

  getCoinMarket(symbol: string) {

    return this.allCoins.find(function (item) {
      return item.symbol == symbol;
    });
  }

  stop() {
    clearInterval(this.interval);

  }
}
