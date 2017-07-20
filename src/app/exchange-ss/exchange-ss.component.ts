import { Component, OnInit } from '@angular/core';
import {ExchangeSsService} from './exchange-ss.service';
import {WalletModel} from '../models/app-models';
import {VOExchangeData} from '../models/SS-models';
import {WalletsAllService} from '../wallets/wallets-all.service';
import {AllCoinsService} from '../ss-browse/all-coins.service';
import {ApiServerService} from '../api-server.service';


@Component({
  selector: 'app-exchange-ss',
  templateUrl: './exchange-ss.component.html',
  styleUrls: ['./exchange-ss.component.css']
})
export class ExchangeSsComponent implements OnInit {

  myWallets:WalletModel[];
  _myWallets:WalletModel[];
  myCoins:VOExchangeData[];
  market:any;
  counter:number;

  start_stop ='Start';
  active:boolean;

  seconds:number;
  interval:any;
  constructor(
    private api:ApiServerService,
    private allWallets:WalletsAllService,
    private allCoins:AllCoinsService) { }

  ngOnInit() {

    this.allWallets.myWallets$.subscribe(wallets=>{

      this._myWallets = wallets;
      this.refreshData();
    });

    this.allCoins.market$.subscribe(market =>{

      this.market = market;
      this.refreshData();



    })
   // this.exchangeService.init();
    //this.exchangeService.myWallets$.subscribe(res=>this.myWallets= res);

    //this.exchangeService.myCoins$.subscribe(res=>{
    //  console.log(res);
     // this.myCoins = res
   // });

  }

  refreshData(){

    if(!this.market || !this._myWallets) return;

    let market = this.market;
    let wallets = this._myWallets;
    this.counter = this.allCoins.counter;
    this.seconds = 30;
    wallets.forEach(function (wallet) {

      let newMarket =  market[wallet.symbol];
      let last = newMarket.price_usd.toFixed(2);
      let lastB = (newMarket.price_btc/1000).toFixed(2);

      if(!wallet.analitics) wallet.analitics={price_usd_history:[last], price_btc_history:[lastB], price_usd_historyDisplay:''};


      let ar1 = wallet.analitics.price_usd_history;

      if(ar1[ar1.length-1] !== last){
        ar1.push(last);
        if(ar1.length>10) ar1.shift();
        wallet.analitics.price_usd_historyDisplay = ar1.toString();
      }


/*
      if(wallet.analitics.price_btc_history.length>50){
        wallet.analitics.price_usd_history.shift();
        wallet.analitics.price_btc_history.shift();
      }*/

      console.log(wallet.analitics.price_usd_history);



      /* if(wallet.market){
       if(newMarket.percent_change_1h !== wallet.market.percent_change_1h){
       wallet.prev_1h = wallet.market.percent_change_1h;
       wallet.prev_1h_stamp = Date.now();

       }else{
       let delta =  (Date.now()  - wallet.prev_1h_stamp)/60000

       }


       }else{
       wallet.prev_1h = newMarket.percent_change_1h;
       wallet.prev_1h_stamp = Date.now();
       }

       */



      wallet.market = newMarket;

      wallet.usd =  (wallet.market.price_usd * wallet.balanceDisplay).toFixed(2);
    });

    this.myWallets = wallets;


  }

  startStop(){
    if(this.start_stop === 'Start'){
      this.start_stop = 'Stop';
      this.active = true;
      this.seconds = 30;
      this.interval = setInterval(()=>{this.seconds++},1000);
      this.allCoins.start();
    }else{
      this.start_stop = 'Start';
      this.seconds =0;
      clearInterval(this.interval);
      this.active = false;
      this.allCoins.stop();
    }
  }

  updateBalance(wallet:WalletModel) {

    this.api.getBalance(wallet.symbol, wallet.address).subscribe(balance=>{
      console.log(balance);
    })

   // this.exchangeService.updateBalance(wallet);
  }

  onUsdClick(wallet){

  }



}
