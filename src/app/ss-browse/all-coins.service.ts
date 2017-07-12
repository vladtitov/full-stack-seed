import { Injectable } from '@angular/core';
import {VOExchangeData} from '../models/SS-models';
import {Observable} from 'rxjs/Observable';
import {Http} from '@angular/http';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {Subject} from 'rxjs/Subject';
import {script} from 'bitcoinjs-lib';
import number = script.number;

@Injectable()
export class AllCoinsService {

  allCoins:VOExchangeData[];
  allCoins$:Observable<VOExchangeData[]>;
  allCoinsSub:BehaviorSubject<VOExchangeData[]>

  selectedCoins:VOExchangeData[];
  selectedCoins$:Observable<VOExchangeData[]>;
  selectedCoinsSub:BehaviorSubject<VOExchangeData[]>

  selectedCoinsNames:string[];

  timestampSub:Subject<number>;
  timestamp$:Observable<number>;
  timestamp=0;

  totalCoins$:Observable<number>;
  totalCoinsSub:Subject<number>;

  totalSelectedCoins$:Observable<number>;
  totalSelectedCoinsSub:Subject<number>;

  constructor(private http:Http) {

    this.allCoinsSub =  new BehaviorSubject([]);
    this.allCoins$ =  this.allCoinsSub.asObservable();

    this.timestampSub = new Subject()
    this.timestamp$ = this.timestampSub.asObservable();


    this.totalCoinsSub = new Subject()
    this.totalCoins$ = this.totalCoinsSub.asObservable();


    this.totalCoinsSub = new Subject()
    this.totalCoins$ = this.totalCoinsSub.asObservable();


    this.totalSelectedCoinsSub = new Subject()
    this.totalSelectedCoins$ = this.totalCoinsSub.asObservable();



    this.selectedCoinsSub =  new BehaviorSubject([]);
    this.selectedCoins$ =  this.selectedCoinsSub.asObservable();
  }



  start():void{
    //setInterval(()=> this.loadData(),60000);
    this.loadData();
  }


  setData(data:{payload:VOExchangeData[],timestamp:number}):void{

    let ar = data.payload;

    let selNames:string[] = this.getSelectedNames();
    console.log(selNames);


    ar.forEach(function (item) {
      item.selected = selNames.indexOf(item.symbol) !==-1
    })

    this.allCoins =ar;


    this.timestamp = data.timestamp;
    console.log(this.allCoins.length);

    this.selectedCoins = ar.filter(function (item) {
      return item.selected;
    });


    console.log(this.selectedCoins.length);
    this.broadcastUpdate()
  }

  broadcastUpdate(){
    this.timestampSub.next(this.timestamp);
    this.allCoinsSub.next(this.allCoins);
    this.selectedCoinsSub.next(this.selectedCoins);

    this.totalCoinsSub.next(this.allCoins.length);
    this.totalSelectedCoinsSub.next(this.selectedCoins.length);
  }

  populateSelected():void{
    let ar=[];
    let val = this.getSelectedNames();

    this.allCoins.forEach(function (item) {
      if(val.indexOf(item.symbol) !== -1) ar.push(item)
    });

    this.selectedCoins = ar;
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
    let ar = this.getSelectedNames()
    if(ar.indexOf(symbol) === -1)ar.push(symbol);
    this.saveSelectedNames(ar);

  }

  removeSelected(symbol:string){

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



}
