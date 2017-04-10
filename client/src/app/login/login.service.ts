/**
 * Created by Vlad on 4/3/2017.
 */
import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {Http, Headers} from '@angular/http';




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

  constructor(private http:Http){

  }



  login(username:string, password:string): Observable<User> {

    const headers = new Headers();
    headers.append('Content-Type', 'application/json');

    return this.http.post('/api/login', {username,password}, headers)
      .map(res => res.json())
      .do(user => console.log(user))
      .do(user => this.subject.next(user))
      .publishLast().refCount();

  }
}