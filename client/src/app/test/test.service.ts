import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class TestService {

  constructor( private http: Http) { }

  loadAPI(): Observable<any> {
    return this.http.get('http://localhost:8090/api/test').map(res => res.json());
  }

  login(): Observable<any> {
    return this.http.post('http://localhost:8090/api/login',{
      username:'uplight.ca@gmail.com',
      password:'$2a$10$Op3rW9gYT6uXDlAOrmRsHOheTy6jwwDamZONx.apHaQjzmqj8Tiem',
      deviceId:'device2'
    }).map(res => res.json());
  }
  getPosts(): Observable<any>{
    return this.http.get('http://localhost:8090/api/posts',{ withCredentials: true }).map(res => res.json());
  }


}
