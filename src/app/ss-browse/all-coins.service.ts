import { Injectable } from '@angular/core';
import {VOExchangeData} from '../models/SS-models';
import {Observable} from 'rxjs/Observable';
import {Http} from '@angular/http';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';

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
  constructor(private http:Http) {
    this.sortedAllCoinsSub =  new BehaviorSubject([]);
    this.sortedAllCoins$ =  this.sortedAllCoinsSub.asObservable();
  }

  start():void{
    setInterval(()=> this.loadData(),3000);
    this.loadData();
  }

  setData(data:VOExchangeData[]):void{
    this.allData = data;
    console.log(data);
    this.sortedAllCoinsSub.next(data);

  }
  loadData():void {

    let str = localStorage.getItem('exchange');
    if(str){
      let data = JSON.parse(str);
      console.log(data);
      if(data.exchange && (Date.now() - data.timestamp)< 100000 ) {
        this.setData(data.exchange);
        return;
      }
    }

    this.http.get(this.url).map((result) => {
      return {
        timestamp:Date.now(),
        exchange:result.json()
      }

    }).subscribe(result=>{
      localStorage.setItem('exchange',JSON.stringify(result));


      /*let now = Date.now();
      let diff=  - (item.last_updated*1000);
      item.last_updated_date = Math.round(diff/1000/60)+ 'm';*/
      let out = result. exchange.map(function (item) { return new VOExchangeData(item);})

      this.setData(out);

    })
  }



}
