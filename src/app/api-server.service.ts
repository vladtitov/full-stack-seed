import { Injectable } from '@angular/core';
import {Http} from '@angular/http';

@Injectable()
export class ApiServerService {

  constructor( private http:Http) { }


  getTokenBalance(symbol:string, address:string){

    let url = '/api/token/balance/{{symbol}}/{{address}}';
    url =  url.replace('{{symbol}}', symbol)
      .replace('{{address}}', address)

    return this.http.get(url).map(res=>{
      console.log(res)
      return res;
    })
  }

}
