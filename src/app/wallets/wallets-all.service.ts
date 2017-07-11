import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {Observable} from 'rxjs/Observable';
import {CoinConfig, WalletModel} from '../models/app-models';
import {Http} from '@angular/http';
import  * as CryptoJS  from 'crypto-js';
import * as _ from 'lodash';


@Injectable()
export class WalletsAllService {
  private  myWallets:WalletModel[] =[];
  private myWalletsSub:BehaviorSubject<WalletModel[]> = new BehaviorSubject([]);
  myWallets$:Observable<WalletModel[]>;

  private coinsAvailable:CoinConfig[];
  private coinsAvailableSub:BehaviorSubject<CoinConfig[]> = new BehaviorSubject([]);
  coinsAvailable$:Observable<CoinConfig[]>;

  config:any;
  password:string = 'my secure password';

  constructor(
    private http:Http
  ) {
    this.myWallets$ = this.myWalletsSub.asObservable();
    this.coinsAvailable$ = this.coinsAvailableSub.asObservable();
    //this.loadConfig();
    //this.loadWallets();
  }

  getAllWallets():WalletModel[]{
    return this.myWallets;
  }

  deleteWallet(wallet:WalletModel){

    let ar = this.myWallets;
    for(let i =ar.length-1;i>=0;i--)if(ar[i].label == wallet.label)ar.splice(i,1);
    this.saveWalletes();
    this.loadWallets();
  }

  createNewWallet(wallet:WalletModel){

    let ecrypted = CryptoJS.AES.encrypt(wallet.privateKey, this.password);
    wallet.privateKey = ecrypted.toString();
   // console.log(ecrypted.toString());

    let bytes  = CryptoJS.AES.decrypt(wallet.privateKey, this.password);
    let plaintext = bytes.toString(CryptoJS.enc.Utf8);
    this.myWallets.push(wallet);
    this.myWalletsSub.next(this.myWallets);
    this.saveWalletes();
    console.log(plaintext);
  }

  loadWallets(){
    let str =  localStorage.getItem('mywallets');
    if(str) {
      let password= this.password;
      let crypto = CryptoJS
      let wallets  = JSON.parse(str);


      this.myWallets = wallets.map(function (item) {

        item.privateKey = crypto.AES.decrypt(item.privateKey, password).toString(crypto.enc.Utf8);
        return item;
      });


      console.log(this.myWallets)
      this.myWalletsSub.next(this.myWallets);
    }
  }

  saveWalletes(){
    console.log(this);
    let password = this.password;
    let crypto = CryptoJS.AES
    let walets = _.cloneDeep(this.myWallets);

    walets = _.map(walets, function (item) {
      item.privateKey = crypto.encrypt(item.privateKey, password).toString();
      return item;
    });
    localStorage.setItem('mywallets',JSON.stringify(walets));
  }

  setPassword(password:string){
    this.password = password;
  }

  getWalletsBySymbol(symbol:string):WalletModel[]{

    return _.filter(this.myWallets,{symbol:symbol});
    //for(let i= ar.length -1; i>=0; i--) if(ar[i].symbol == symbol) return ar[i];
    //return null;
  }
  getWalletsByName(label:string):WalletModel[]{

    return _.filter(this.myWallets,{label:label});
    //for(let i= ar.length -1; i>=0; i--) if(ar[i].symbol == symbol) return ar[i];
    //return null;
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
