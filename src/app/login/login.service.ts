/**
 * Created by Vlad on 4/3/2017.
 */
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/observable';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
//import {Observable, BehaviorSubject} from "rxjs";
import 'rxjs/operator/publishLast';

import {Http, Headers} from '@angular/http';
//import {AuthHttp, setToken} from '../libs/angular2-jwt';

export class User {
  firstName: string;
  lastName?:string;
}

export const UNKNOWN_USER : User = {
  firstName: 'Unknown'
};


@Injectable()
export class LoginService{

  private subject = new BehaviorSubject(UNKNOWN_USER);
  user$: Observable<User> = this.subject.asObservable();

  constructor(private http:Http, private auth:Http){

  }

  login(username:string, password:string): Observable<User> {

    const headers = new Headers();
    headers.append('Content-Type', 'application/json');

const url ='/api/login';
console.log(url);
    return this.http.post(url, {username,password,deviceId:1}, headers)
      .map(res => res.json().data)
      ///.do(token => {
      //  return setToken(token);
     // })
     // .do(user => this.subject.next(user))
     // .publishLast().refCount();

  }
}