import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {Observable} from 'rxjs/Observable';
import {CoinConfig, WalletModel} from '../models/app-models';
import {Http} from '@angular/http';
import  * as CryptoJS  from 'crypto-js';
import * as _ from 'lodash';
import {ApiServerService} from '../api-server.service';


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
  email:string = 'vlad@gmail.com'

  isRwmote:boolean = true;
  //password:string = '';

  constructor(
    private api:ApiServerService
  ) {
    this.myWallets$ = this.myWalletsSub.asObservable();
    this.coinsAvailable$ = this.coinsAvailableSub.asObservable();

    this.loadConfig();
   // this.loadWallets();
    this.loadWallets2();
  }

  getAllWallets():WalletModel[]{
    return this.myWallets;
  }

  deleteWallet(wallet:WalletModel){
    let ar = this.myWallets;
    for(let i =ar.length-1;i>=0;i--)if(ar[i].label == wallet.label)ar.splice(i,1);

    this.saveWallets();
   // this.loadWallets();
  }

  createNewWallet(wallet:WalletModel){

    wallet = _.clone(wallet);
    wallet.id=wallet.symbol + '_'+wallet.address;

   // let ecrypted = CryptoJS.AES.encrypt(wallet.privateKey, this.password);
   // wallet.privateKey = ecrypted.toString();
   // console.log(ecrypted.toString());

    //let bytes  = CryptoJS.AES.decrypt(wallet.privateKey, this.password);
    //let plaintext = bytes.toString(CryptoJS.enc.Utf8);

    this.myWallets.push(wallet);

    this.myWalletsSub.next(this.myWallets);

    this.saveWallets();
  }

  dispattchWalletChanges():void{
    this.myWalletsSub.next(this.myWallets);
  }



  private loadWalletsLocaly():void{
    console.warn('loadWalletsLocaly');


    let str =  localStorage.getItem('mywallets');
    str = null;
    if(str) {
      let wallets =[]
      let crypto = CryptoJS
      let password= this.password;

      try{
         wallets = JSON.parse(str);

        wallets.forEach(function (item) {
          console.log('1 '+item.privateKey);
          item.privateKey = crypto.AES.decrypt(item.privateKey, password).toString(crypto.enc.Utf8);
          console.log('2 '+item.privateKey);
        });

        console.log(wallets)
      } catch (e){
        console.log(e.toString());
        e.toString();
      }

      this.myWallets = wallets;
      this.dispattchWalletChanges();

     /* this.saveWalletes().subscribe(res=>{
        console.log(res);
      });*/

    }
  }

  saveWalletesRemote(){
    let password = this.password;
    if(!password) {
      throw new Error('Password required')
    }
    let crypto = CryptoJS.AES
    let walets = _.clone(this.myWallets);

    walets.forEach(function (item) {
      delete item.market;
      delete item.analitics;
      // item.privateKey = crypto.encrypt(item.privateKey, password).toString();
    });

    console.log(walets);


    let payload = crypto.encrypt(JSON.stringify(walets), this.password).toString();
    console.log(payload);

    return this.api.saveWallets(payload, this.email)
  }



  loadWallets2(){
    if(this.isRwmote) this.loadWalletsRemote();
    else this.loadWalletsLocaly();

  }


  saveWallets(){
    if(this.isRwmote) this.saveWalletesRemote();
    else this.saveWalletesLoacaly();

  }

  private saveWalletesLoacaly(){



   console.warn('saveWalletesLoacaly')

   /*
    let password = this.password;
    if(!password) {
      throw new Error('Password required')
    }
    let crypto = CryptoJS.AES
    let walets = _.clone(this.myWallets);



    walets.forEach(function (item) {
      delete item.market;
      delete item.analitics;
      item.privateKey = crypto.encrypt(item.privateKey, password).toString();
    });


    let payload = crypto.encrypt(JSON.stringify(walets), this.password).toString();
    console.log(payload);

   localStorage.setItem('mywallets',JSON.stringify(walets));*/
  }



 /* saveWalletes():boolean{

    //console.log(this);
    let password = this.password;
    if(!password) {
      throw new Error('Password required')
    }
    let crypto = CryptoJS.AES
    let walets = _.clone(this.myWallets);

   walets.forEach(function (item) {
      delete item.market;
      item.privateKey = crypto.encrypt(item.privateKey, password).toString();
    });
    localStorage.setItem('mywallets',JSON.stringify(walets));

    return true;
  }*/



  login(email:string, password:string, isRemote:boolean){
    this.isRwmote = isRemote;
    this.email = email;
    this.password = password;
    if(isRemote) this.loadWalletsRemote();
    else this.loadWalletsLocaly();
  };


  private loadWalletsRemote(){
    let email = this.email;
    let password = this.password;
    let crypto = CryptoJS;

    this.api.loadWallets(email).subscribe(res=>{
      let payload = res.payload

      let result  = crypto.AES.decrypt(res.payload, password).toString(crypto.enc.Utf8);

      let wallets:WalletModel[] = JSON.parse(result);

      wallets.forEach(function (wallet) {
        wallet.privateKey = crypto.AES.decrypt(wallet.privateKey, password).toString(crypto.enc.Utf8);
      });


    //  console.log(res);
    //  console.log(result)
    //  console.log(result)
    //  console.log(result)

      this.myWallets = wallets ;
     // console.log(wallets);
      this.dispattchWalletChanges();

     // this.saveWalletesRemote();
    })

  }




  getMyWalletsBySymbol(symbol:string):WalletModel[]{

    return _.filter(this.myWallets,{symbol:symbol});
    //for(let i= ar.length -1; i>=0; i--) if(ar[i].symbol == symbol) return ar[i];
    //return null;
  }
  getMyWalletsByName(label:string):WalletModel[]{

    return _.filter(this.myWallets,{label:label});
    //for(let i= ar.length -1; i>=0; i--) if(ar[i].symbol == symbol) return ar[i];
    //return null;
  }

  getMyWalletById(id:string):WalletModel{
    let ar = this.getAllWallets()
    for(let i = ar.length -1; i>=0; i--) if(ar[i].id === id) return ar[i];
    return null;
  }

  getCoinConfigBySymbol(symbol:string):CoinConfig{
    let ar = this.coinsAvailable;
    for(let i= ar.length -1; i>=0; i--) if(ar[i].symbol == symbol) return ar[i];
    return null;
  }

  loadConfig(){
    this.api.loadConfig().subscribe(res=>{
      this.config = res;
      this.coinsAvailable = res.coins.concat(res.tokens);
      this.coinsAvailableSub.next(this.coinsAvailable);
    })

  }

  logout() {
    this.email = null;
    this.password = null;
    this.myWallets = [];
    this.dispattchWalletChanges();
  }
}
