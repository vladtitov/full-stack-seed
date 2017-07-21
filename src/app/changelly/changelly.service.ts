import { Injectable } from '@angular/core';
import {Http} from '@angular/http';

@Injectable()
export class ChangellyService {

  constructor(private http:Http) {

  }

  getCurrencies(){
    let url = '/api/exchange/changelly/getCurrencies';
    return this.http.get(url).map(res=>res.json());
  }

  getExchangeAmount(from_to:string, amount:number){
    let url = '/api/exchange/changelly/getExchangeAmount/'+from_to+'/'+amount;
    return this.http.get(url).map(res=>res.json());
  }

  getMinAmount(from_to:string){
    let url = '/api/exchange/changelly/getMinAmount/'+from_to;
    return this.http.get(url).map(res=>res.json());
  }

  generateAddress(from_to:string, address:string){
    let url = '/api/exchange/changelly/generateAddress/'+from_to+'/'+address;
    return this.http.get(url).map(res=>res.json());

  }

  getTransactions(symbol:string, address){
    let url = '/api/exchange/changelly/getTransactions/'+symbol+'/'+address;
    return this.http.get(url).map(res=>res.json());
  }

}
