import { Component, OnInit } from '@angular/core';
import {VOExchangeData, WatchDog} from '../../models/SS-models';
import {AllCoinsService} from '../../ss-browse/all-coins.service';
import * as _ from 'lodash';
import {EmailServiceService} from '../email-service.service';
import {DialogSimpleComponent} from '../../shared/dialog-simple/dialog-simple.component';
import {MdDialog} from '@angular/material';

@Component({
  selector: 'app-create-watchdog',
  templateUrl: './create-watchdog.component.html',
  styleUrls: ['./create-watchdog.component.css']
})
export class CreateWatchdogComponent implements OnInit {



  watchDog:WatchDog ={
    label:'',
    uid:'',
    symbol:''
  };

  coinMarket:VOExchangeData;
  marketsRaw:{[symbol:string]:VOExchangeData};
  coinsAvailable:VOExchangeData[];
 // selectedCoins:{[symbol:string]:VOExchangeData};
  watchDogs:WatchDog[];


  sortCriteria:string = 'rank';
  asc_desc='asc';

  constructor(
    private coinsService:AllCoinsService,
    private emailService:EmailServiceService,
    private dialog:MdDialog
  ) { }

  ngOnInit() {

    this.coinsService.selectedCoins$.subscribe(res=>this.setMarket(res))

    /*this.coinsService.selectedCoins$.subscribe(res =>{

    } */

    this.emailService.watchDogs$.subscribe(res =>{
      this.setData(_.values(res))

    });

  }

  onDeleteClick(dog:WatchDog){
    console.log(dog);

    let ref = this.dialog.open(DialogSimpleComponent, {data:{
      title:'Alert',
      message:'You want to delete watch dog '+ dog.uid + ' '+ dog.label+'?',
      buttons:['Yes','No']
    }})

    ref.afterClosed().subscribe(res=>{
      console.log(res);
      if(res==='Yes')  this.emailService.deleteDog(dog);
    })
  }

  mergeData(){
    if(this.marketsRaw && this.watchDogs){
      let markets = this.marketsRaw;

      let ar = this.watchDogs;
      ar.forEach(function (item) {

        let market = markets[item.symbol];

        if(market){
          item.price_usd = market.price_usd;
          item.rank = market.rank;
          item.percent_change_1h = market.percent_change_1h;
          item.percent_change_24h = market.percent_change_24h;
          item.percent_change_7d = market.percent_change_7d;
          item.market = market
        }

      })

      this.watchDogs  = _.orderBy(ar, this.sortCriteria, this.asc_desc);
    }
  }

  setMarket(market:{[symbol:string]:VOExchangeData}){
    this.marketsRaw = market;
    this.coinsAvailable = _.values(market);
    this.mergeData();

  }

  createDog(){
    this.watchDog.market = this.coinMarket;
    this.watchDog.uid = this.emailService.createUid(this.watchDog.symbol);
    this.emailService.addDog(this.watchDog);
  }


  setData(ar:WatchDog[]){
    //console.log(ar);
    this.watchDogs = _.orderBy(ar, this.sortCriteria, this.asc_desc);
    console.log('setData  '+this.sortCriteria  +'  ' +this.asc_desc);


    this.mergeData();
  }

  onClickHeader(criteria:string):void{

    if(this.sortCriteria === criteria){
      if(this.asc_desc === 'asc') this.asc_desc ='desc';
      else  this.asc_desc='asc';
    }else this.asc_desc = 'asc';
    console.log(this.asc_desc);
    this.sortCriteria = criteria;
    this.setData(this.watchDogs);

  }



  coinSelectChanged(evt){
    console.log(evt.value);
    let symbol = evt.value;
    let market:VOExchangeData = this.coinsAvailable.find(function (item) {
      return item.symbol === symbol;
    });

    this.coinMarket = market;

    this.watchDog  = {
      label:market.symbol,
      uid:this.emailService.createUid(symbol),
      symbol:market.symbol
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
