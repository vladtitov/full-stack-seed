import {Injectable, OnInit} from '@angular/core';
import {AuthHttp, getTokenExpiredDate, tokenNotExpired} from '../libs/angular2-jwt';
import {Observable} from 'rxjs/Observable';
/**
 * Created by Vlad on 4/3/2017.
 */
@Injectable()
export class HomeService{
  constructor( private http:AuthHttp){

  }

  getPosts(): Observable<any>{
    //console.log(getTokenExpiredDate());
   // if(tokenNotExpired()){
    //  console.log(' not yet');
    //}
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