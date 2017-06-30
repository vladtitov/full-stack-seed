import {Injectable, OnInit} from '@angular/core';
//import {AuthHttp, getToken, getTokenExpiredDate, tokenNotExpired} from '../../../arch/angular2-jwt';
import {Observable} from 'rxjs/Observable';
import {Http} from '@angular/http';
/**
 * Created by Vlad on 4/3/2017.
 */
@Injectable()
export class HomeService{
  constructor( private http:Http){

  }

  getPosts(): Observable<any>{
    //console.log(getTokenExpiredDate());
   // if(tokenNotExpired()){
    //  console.log(' not yet');
    //}
    //let decoded = getToken();

   // console.log(new Date(decoded.exp*1000).toLocaleString());


    let url ='http://localhost:8090/api/posts';

    console.log(url)
    return this.http.get(url)
      .map(res =>{
       let r = res.json().data;
       console.log(r);
       return r
      })
      .catch(err=>{
      return Observable.throw(err);
    });
  }
}