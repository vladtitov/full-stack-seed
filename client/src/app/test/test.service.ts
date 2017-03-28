import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class TestService {

  constructor( private http: Http) { }

  loadAPI(): Observable<any> {
    return this.http.get('api/test').map(res => res.json());
  }

}
