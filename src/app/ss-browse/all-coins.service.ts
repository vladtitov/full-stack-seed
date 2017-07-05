import { Injectable } from '@angular/core';
import {VOExchangeData} from '../models/SS-models';
import {Observable} from 'rxjs/Observable';
import {Http} from '@angular/http';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {Subject} from 'rxjs/Subject';

@Injectable()
export class AllCoinsService {

  allCoins:VOExchangeData[];
  allCoins$:Observable<VOExchangeData[]>;
  allCoinsSub:BehaviorSubject<VOExchangeData[]>

  timestampSub:Subject<number>;
  timestamp$:Observable<number>;
  timestamp=0;

  constructor(private http:Http) {
    this.allCoinsSub =  new BehaviorSubject([]);
    this.allCoins$ =  this.allCoinsSub.asObservable();
    this.timestampSub = new Subject()
    this.timestamp$ = this.timestampSub.asObservable();
  }



  start():void{
    //setInterval(()=> this.loadData(),60000);
    this.loadData();
  }

  setData(data:{payload:VOExchangeData[],timestamp:number}):void{

    this.allCoins = data.payload;
    this.timestamp = data.timestamp;
    console.log(this.allCoins.length);
    this.timestampSub.next(this.timestamp);
    this.allCoinsSub.next(this.allCoins);
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
