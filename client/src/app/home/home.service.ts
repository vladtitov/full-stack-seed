import {Injectable, OnInit} from '@angular/core';
import {AuthHttp, getTokenExpiredDate, tokenNotExpired} from '../libs/angular2-jwt';
import {Observable} from 'rxjs';
/**
 * Created by Vlad on 4/3/2017.
 */
@Injectable()
export class HomeService{
  constructor( private http:AuthHttp){

  }

  getPosts(): Observable<any>{
    console.log(getTokenExpiredDate());
    if(tokenNotExpired()){
      console.log(' not yet');
    }

    return this.http.get('http://localhost:8090/api/posts').map(res => res.json().data);
  }
}