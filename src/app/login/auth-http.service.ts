import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {Observable} from 'rxjs/Observable';
import {Subject} from 'rxjs/Subject';

import { Http, Response, Headers, RequestOptions, CookieXSRFStrategy, XSRFStrategy, ResponseContentType,} from '@angular/http';
import {ActivatedRoute, Router} from '@angular/router';


@Injectable()
export class AuthHttpService {
  headers: Headers;

  private userSub: BehaviorSubject<VOUser>;
  user$: Observable<VOUser>;
  private user: VOUser = null;
  authenticatedSub: Subject<boolean>;
  authenticated$: Observable<boolean>;

  constructor( private http:Http, private router:Router, private route:ActivatedRoute) {

    this.userSub = new BehaviorSubject<VOUser>(null);
    this.user$ = this.userSub.asObservable();
    this.authenticatedSub = new BehaviorSubject<boolean>(false);
    this.authenticated$ = this.authenticatedSub.asObservable();
    setTimeout(()=>this.autoLogin(),2000);
  }

  login(email: string, password: string) {

   // let sub: Subject<VOUser> = new Subject();

    let url ='/api/login/login';
    return this.http.post(url,{email:email, password:password}).map(res=>res.json())



    //return sub.asObservable();
  }

  register(email:string, password:string){
    let url ='api/login/register';
    return this.http.post(url,{email:email, password:password}).map(res=>res.json())
  }

  autoLogin(): void {

    let lastVisited = this.getLastVisited();
    let user = this.getUser();
    this.user = user
    this.dispatchUser();
    if(user && lastVisited && lastVisited !== 'undefined') {
      console.warn(lastVisited);
      this.router.navigate([lastVisited]);
    }

  }


  dispatchUser():void{
    this.userSub.next(this.user);
    this.authenticatedSub.next((this.user !== null));
  }
  logout() {
    this.user = null;
    this.dispatchUser();
  }



  getToken(): string {
    let user: VOUser = this.getUser();
    return user ? user.token : null;
  }


  getUser(): VOUser {
    if (!this.user) {
      let str = localStorage.getItem('authentication');
      try {
        if (str) this.user = JSON.parse(atob(str));
        // /   new VOUser(JSON.parse(atob(str)));
      } catch (e) {
        console.error(e);
        //this.removeAuthentication();
      }
    }
    return this.user;
  }

  removeAuthentication(): void {
    this.logout();
    localStorage.removeItem('authentication');
  }

  saveUser(){
    localStorage.setItem('authentication',btoa(JSON.stringify(this.user)));
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

  setLastVisited(url?:string){
    if(!url)url = this.router.url;
   localStorage.setItem('lastVisited', url);
  }

  getLastVisited():string{
    return localStorage.getItem('lastVisited');
  }

  setUser(user:any) {

    this.user = user;
    this.saveUser();
    this.dispatchUser();
  }
}


export interface VOUser{
  id:string;
  nikname:string;
  email:string;
  password:string;
  token:string;
}
