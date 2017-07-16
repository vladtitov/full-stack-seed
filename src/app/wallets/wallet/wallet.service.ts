import { Injectable } from '@angular/core';
import {CoinConfig, WalletModel} from '../../models/app-models';
import {Http} from '@angular/http';

@Injectable()
export class WalletService {

  private wallet:WalletModel;
  private config:CoinConfig;
  balance:number;
  utxos:any[];

  miningFee:number;

  gasLimit:number;
  gasPrice:number;

  constructor( private http:Http) { }

  setWallet(wallet:WalletModel){
    this.wallet = wallet;
  }

  setCoinConfig(config:CoinConfig){
    console.log(config);
    this.config = config;
   // this.loadBalance();
  }

  loadBalance(){

    let url = '/api/token/balance/'+this.config.symbol+'/'+this.wallet.address;
    console.log(url);
    this.http.get(url).map(res=>res.json()).subscribe(res=>{

      console.log(res);
    })

  }

  senTransaction(amount:number, address:string){


  }

  buildTransactionNitcoin(){

  }

  buildTransactionEther(){

  }



}



