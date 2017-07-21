import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';

@Injectable()
export class BittrexService {

  apisecret: string;
  headers: Headers;

  constructor(private http: Http) {

  }


  buylimit(market: string, quantity: number, rate: number) {

    let url = 'api/bittrex/market/buylimit?&market={{market}}&quantity={{quantity}}&rate={{rate}}';

    url = url
      .replace('{{market}}', market)
      .replace('{{quantity}}', quantity+'')
      .replace('{{rate}}', rate+'');

    return this.http.get(url).map(res => res.json())
  }


  getMarketHistory(market: string) {
    let url = 'api/bittrex/public/getmarkethistory?market=' + market;
    return this.http.get(url).map(res => res.json())
  }

  getOrderBook(market: string, depthMax = '50') {

    let url = 'api/bittrex/public/getorderbook?market=' + market + '&type=both&depth=' + depthMax;
    return this.http.get(url).map(res => res.json())
  }

  getMarketSummary(market: string) {

    let url = 'api/bittrex/public/getmarketsummary?market=' + market;
    return this.http.get(url).map(res => res.json())
  }

  getMarketSummaries() {

    let url = 'api/bittrex/public/getmarketsummaries';
    return this.http.get(url).map(res =>{
      return res.json().result.map(function (item) {
        item.TimeStamp = (new Date(item.TimeStamp)).toLocaleTimeString()
        return item
      })
    } );
  }

  getTicker(market:string) {
    let url = 'api/bittrex/public/getticker?market='+market;
    return this.http.get(url).map(res => res.json())
  }

  getCurrencies() {
    let url = 'api/bittrex/public/getcurrencies';
    return this.http.get(url).map(res => res.json().result)
  }


  getMarkets() {
    let url = 'api/bittrex/public/getmarkets';
    return this.http.get(url).map(res => res.json().result)
  }

  cerateApisecrete(apisecret) {
    this.headers = new Headers()
    this.headers.append('apisecret', '42e47e93bcaf4a2b995b7177d20d1d74');
  }


}


export interface MarketModel1{
  BaseCurrency:string;
  BaseCurrencyLong:string;
  Created:string;
  IsActive:boolean;
  IsSponsored:any;
  LogoUrl:string;
  MarketCurrency:string;
  MarketCurrencyLong:string;
  MarketName:string;
  MinTradeSize:number;
  Notice:any;l
}


export interface MarketSummary{
  Ask:number;
  BaseVolume:number;
  Bid:number;
  Created:string;
  High:number;
  Last:number;
  Low:number;
  MarketName:string;
  OpenBuyOrders:number;
  OpenSellOrders:number;
  PrevDay:number;
  TimeStamp:string;
  Volume:number;
}
