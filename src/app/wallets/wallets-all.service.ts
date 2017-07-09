import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {Observable} from 'rxjs/Observable';
import {CoinConfig, WalletModel} from '../models/app-models';
import {Http} from '@angular/http';
import  * as CryptoJS  from 'crypto-js';
;

@Injectable()
export class WalletsAllService {
  private  myWallets:WalletModel[] =[];
  private myWalletsSub:BehaviorSubject<WalletModel[]> = new BehaviorSubject([]);
  myWallets$:Observable<WalletModel[]>;

  private coinsAvailable:CoinConfig[];
  private coinsAvailableSub:BehaviorSubject<CoinConfig[]> = new BehaviorSubject([]);
  coinsAvailable$:Observable<CoinConfig[]>;

  config:any;
  password:string = 'hello world';

  constructor(
    private http:Http
  ) {
    this.myWallets$ = this.myWalletsSub.asObservable();
    this.coinsAvailable$ = this.coinsAvailableSub.asObservable();
    this.loadConfig();
  }

  createNewWallet(privateKey:string):string{

    let ecrypted = CryptoJS.AES.encrypt(privateKey, this.password);

    console.log(ecrypted.toString());

    var bytes  = CryptoJS.AES.decrypt(ecrypted.toString(), this.password);
    var plaintext = bytes.toString(CryptoJS.enc.Utf8);
    console.log(plaintext);

    return '';
  }

  setPassword(password:string){
    this.password = password;
  }

  getWalletBySymbol(symbol:string):WalletModel{
    let ar = this.myWallets;
    for(let i= ar.length -1; i>=0; i--) if(ar[i].symbol == symbol) return ar[i];
    return null;
  }

  getCoinConfigBySymbol(symbol:string):CoinConfig{
    let ar = this.coinsAvailable;
    for(let i= ar.length -1; i>=0; i--) if(ar[i].symbol == symbol) return ar[i];
    return null;
  }

  loadConfig(){
    let url = 'api/app-config';

    this.http.get(url).map(res=>res.json()).subscribe(res=>{
      console.log(res);
      this.config = res;
      this.coinsAvailable = res.coins.concat(res.tokens);
      this.coinsAvailableSub.next(this.coinsAvailable);

    })
  }

}
