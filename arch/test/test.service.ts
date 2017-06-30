import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {AuthHttp} from '../angular2-jwt';

@Injectable()
export class TestService {

  constructor( private http: Http, private auth:AuthHttp) { }

  loadAPI(): Observable<any> {
    return this.http.get('http://localhost:8090/api/test').map(res => res.json());
  }

  login(): Observable<any> {
    return this.http.post('http://localhost:8090/api/login',{
     // username:'uplight.ca@gmail.com',
      username:'john@doe.com',
      password:'my password 2',
      deviceId:'device2'
    }).map(res => res.json());
  }
  getPosts(): Observable<any>{
    return this.auth.get('http://localhost:8090/api/posts').map(res => res.json());
  }


}
