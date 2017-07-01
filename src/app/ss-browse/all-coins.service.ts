import { Injectable } from '@angular/core';
import {VOExchangeData} from '../models/SS-models';
import {Observable} from 'rxjs/Observable';
import {Http} from '@angular/http';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {Subject} from 'rxjs/Subject';

@Injectable()
export class AllCoinsService {
  private url='https://utils.jaxx.io/api/exchange/proxy';
  allData:VOExchangeData[];
  sortedData:VOExchangeData[];
  sortCreteria:string = 'rank';
  //$emitter:JQuery = $({});
  CHANGE:string = 'CHANGE';
  NEW_DATA = 'NEW_DATA';

  goingDown24Ar:VOExchangeData[];
  goingUp24Ar:VOExchangeData[];

  sortedAllCoins$:Observable<VOExchangeData[]>;
  sortedAllCoinsSub:BehaviorSubject<VOExchangeData[]>
  counterSub:Subject<number>;
  counter$:Observable<number>
  counter=0;
  constructor(private http:Http) {
    this.sortedAllCoinsSub =  new BehaviorSubject([]);
    this.sortedAllCoins$ =  this.sortedAllCoinsSub.asObservable();
    this.counterSub = new Subject()
    this.counter$ = this.counterSub.asObservable();
  }



  start():void{
    //setInterval(()=> this.loadData(),60000);
    this.loadData();
  }

  setData(data:VOExchangeData[]):void{
    this.allData = data;
    console.log(data.length);
    this.counterSub.next(this.counter++);
    this.sortedAllCoinsSub.next(data);
  }



  loadData():void {

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
    this.http.get(this.url).map(res=>{
      return res.json().map(this.mapExchangeData)

    }).subscribe(result=>{
      //localStorage.setItem('exchange',JSON.stringify(result));

      /*let now = Date.now();
      let diff=  - (item.last_updated*1000);
      item.last_updated_date = Math.round(diff/1000/60)+ 'm';*/


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
