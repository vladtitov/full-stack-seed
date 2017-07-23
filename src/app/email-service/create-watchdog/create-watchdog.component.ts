import { Component, OnInit } from '@angular/core';
import {VOExchangeData, WatchDog} from '../../models/SS-models';
import {AllCoinsService} from '../../ss-browse/all-coins.service';
import * as _ from 'lodash';

@Component({
  selector: 'app-create-watchdog',
  templateUrl: './create-watchdog.component.html',
  styleUrls: ['./create-watchdog.component.css']
})
export class CreateWatchdogComponent implements OnInit {


  watchDog:WatchDog ={
    label:'',
    uid:'',
    symbol:'',
    coin:null
  };

  coinsAvailable:VOExchangeData[];

  constructor(private coinsService:AllCoinsService ) { }

  ngOnInit() {
    this.coinsService.selectedCoins$.subscribe(res => this.coinsAvailable = _.values(res))

  }


  createDog(){

  }


  coinSelectChanged(evt){
    console.log(evt.value);
    let symbol = evt.value;
    let coin:VOExchangeData = this.coinsAvailable.find(function (item) {
      return item.symbol === symbol;
    });

    this.watchDog  = {
      label:coin.symbol,
      uid:coin.symbol,
      symbol:coin.symbol,
      coin:coin
    };

   /* let cfg = this.allWalletsService.getCoinConfigBySymbol(event.value);
    if(!cfg) return
    console.log(cfg);

    this.wallet.symbol = cfg.symbol;
    this.wallet.network = cfg.network;
    this.wallet.displayName = cfg.displayName;
    let wallets =  this.allWalletsService.getAllWallets();

    if(!this.wallet.label) {

      let exists = _.filter(wallets, {symbol:this.wallet.symbol});
      this.wallet.label = this.wallet.symbol + ' '+ exists.length;
    }



    if(cfg.contractAddress){
      let network = cfg.network;
      let networkWallets = this.allWalletsService.getMyWalletsBySymbol(network);

      if(networkWallets.length){
        let pk = networkWallets[0].privateKey;
        if(!this.wallet.privateKey) this.wallet.privateKey = pk;



      }else{
        this.dialog.open(DialogSimpleComponent, {data:{message:'You have to have wallet on '+ cfg.network}})
      }


      // let parent:WalletModel = this.waletsService.getWalletBySymbol(cfg.parent);
      // console.log(parent)
      //  if(parent){



    }else {


    }*/

  //  this.generateAddress();

  }

}
