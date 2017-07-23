import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {Observable} from 'rxjs/Observable';
import {Subject} from 'rxjs/Subject';

import { Http, Response, Headers, RequestOptions, CookieXSRFStrategy, XSRFStrategy, ResponseContentType,} from '@angular/http';

@Injectable()
export class AuthHttpService {
  headers: Headers;

  private userSub: BehaviorSubject<VOUser>;
  user$: Observable<VOUser>;
  private user: VOUser;
  authenticatedSub: Subject<boolean>;
  authenticated$: Observable<boolean>;

  constructor( private http:Http) {

    this.userSub = new BehaviorSubject<VOUser>(null);
    this.user$ = this.userSub.asObservable();
    this.authenticatedSub = new BehaviorSubject<boolean>(false);
    this.authenticated$ = this.authenticatedSub.asObservable();
  }

  login(email: string, password: string) {

   // let sub: Subject<VOUser> = new Subject();

    let url ='/api/login/login';
    return this.http.post(url,{email:email, password:password})



    //return sub.asObservable();
  }

  register(email:string, password:string){
    let url ='api/login/register';
    return this.http.post(url,{email:email, password:password}).map(res=>res.json())
  }

  autoLogin(): void {
    let user: VOUser = this.readUser();
    //TODO if expired error
    console.log(user);
   /* this.getUsersExtended(user).subscribe(user => {
      //console.log(user);
      this.userSub.next(user);
    });*/

  }


  logout() {



    this.user = null;
    this.userSub.next(null);
    this.authenticatedSub.next(false);
  }



  getToken(): string {
    let user: VOUser = this.readUser();
    return user ? user.token : null;
  }


  readUser(): VOUser {
    // if(!this.us)
    if (!this.user) {
      let str = localStorage.getItem('authentication');
      try {
        if (str) this.user = JSON.parse(atob(str));  //   new VOUser(JSON.parse(atob(str)));
      } catch (e) {
        //this.removeAuthentication();
      }
    }
    return this.user;
  }

  removeAuthentication(): void {
    this.logout();
    localStorage.removeItem('authentication');
  }


  getHeaders(): any {
    if (!this.headers) {
      this.headers = new Headers();
      let token: string = this.getToken();
      // console.log('token' , token);

      if (token) {
        this.headers.append('Authorization', token);
        // this.headers.append('token', token);
      }
      // this.headers.append('withCredentials','true');
    }
    return this.headers;
  }

  addHeaders(options: any): any {
    if (options) options.headers ? options.headers.append('Authorization', this.getToken()) : options.headers = this.getHeaders();
    else options = {headers: this.getHeaders(), withCredentials: true};
    // console.log(options);
    return options;


  }

  public get(url: string, options?: RequestOptions): Observable<Response> {

    return this.http.get(url, this.addHeaders(options));
  }

  public post(url: string, body: any, options?: RequestOptions): Observable<Response> {
    return this.http.post(url, body, this.addHeaders(options));
  }

  public put(url: string, body: any, options?: RequestOptions): Observable<Response> {
    return this.http.put(url, body, this.addHeaders(options));
  }

  public delete(url: string, options?: RequestOptions): Observable<Response> {
    return this.http.delete(url, this.addHeaders(options));
  }

  public patch(url: string, body: any, options?: RequestOptions): Observable<Response> {
    return this.http.patch(url, this.addHeaders(options));
  }

  public head(url: string, options?: RequestOptions): Observable<Response> {
    return this.http.head(url, this.addHeaders(options));
  }

  public options(url: string, options?: RequestOptions): Observable<Response> {
    return this.http.options(url, this.addHeaders(options));
  }

}


export interface VOUser{
  id:string;
  nikname:string;
  email:string;
  password:string;
  token:string;
}
