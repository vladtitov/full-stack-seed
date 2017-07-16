import { Injectable } from '@angular/core';
import {Http} from '@angular/http';

@Injectable()
export class ApiServerService {

  constructor( private http:Http) { }


  getBalance(symbol:string, address:string){

    let url = '/api/coin/balance/{{symbol}}/{{address}}';
    url =  url.replace('{{symbol}}', symbol)
      .replace('{{address}}', address);

    return this.http.get(url).map(res=>{
     // console.log(res);
      return res.json();
    })
  }

  sendTranasaction(symbol:string, address:string, transaction:string){

    let url = '/api/coin/sendTransaction/{{symbol}}';
    url =  url.replace('{{symbol}}', symbol)
     // .replace('{{address}}', address);

    return this.http.post(url,{rawTransaction:transaction}).map(res=>{
      console.log(res);

      return res;
    })
  }

}
