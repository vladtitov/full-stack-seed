import { Component, OnInit } from '@angular/core';
import {VOExchangeData, WatchDog} from '../../models/SS-models';
import {AllCoinsService} from '../../ss-browse/all-coins.service';
import {EmailServiceService} from '../email-service.service';
import {MdDialog, MdSnackBar} from '@angular/material';
import * as _ from 'lodash';


@Component({
  selector: 'app-run-watchdogs',
  templateUrl: './run-watchdogs.component.html',
  styleUrls: ['./run-watchdogs.component.css']
})
export class RunWatchdogsComponent implements OnInit {

  coinMarket:VOExchangeData;
  markets:{[symbol:string]:VOExchangeData};
  coinsAvailable:VOExchangeData[];
  // selectedCoins:{[symbol:string]:VOExchangeData};
  watchDogs:WatchDog[];

  currentDog:WatchDog;

  dogs:{[uid:string]:WatchDog};

  sortCriteria:string = 'rank';
  asc_desc='asc';

  isSource:boolean = false;


  active:boolean;

  seconds:number;
  interval:any;
  start_stop:string= "Start Refresh Timer";

  constructor(
    private coinsService:AllCoinsService,
    private emailService:EmailServiceService,
    private dialog:MdDialog,
    private snakBar:MdSnackBar
  ) { }



  viewSorse(){
    this.isSource = !this.isSource;

  }

  testScript(){

  }

  onEditDog(dog){
    console.log(dog);
    this.currentDog = dog;
  }

  closeDog(){
    this.currentDog = null;
  }

  saveDog(){
    if(this.currentDog) {
      this.emailService.saveDog(this.currentDog)
      this.snakBar.open(this.currentDog.label + " Saved!",'',{duration:3000});
    }

  }



  ngOnInit() {
    this.coinsService.selectedCoins$.subscribe(res=>this.setMarket(res));
    this.emailService.watchDogs$.subscribe(res => this.setDogs(res));
  }

  setMarket(markets){
    this.markets = markets;
    this.mergeData();
  }


  setDogs(dogs:{[uid:string]:WatchDog}){
    this.dogs = dogs;
    this.watchDogs  = _.orderBy(_.values(dogs) , this.sortCriteria, this.asc_desc);
    this.mergeData();
  }


  startRefreshTimer(){
    if(this.start_stop === 'Start Refresh Timer'){
      this.start_stop = 'Stop Refresh Timer';
      this.active = true;
      this.seconds = 30;
      this.interval = setInterval(()=>{this.seconds++},1000);
      this.coinsService.start();
    }else{
      this.start_stop = 'Start Refresh Timer';
      this.seconds =0;
      clearInterval(this.interval);
      this.active = false;
      this.coinsService.stop();
    }

  }

  mergeData(){

    if(this.markets && this.dogs){
      let markets = this.markets;
      let ar = _.values(this.dogs);

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

      this.seconds = 30;

      this.currentDog = _.first(ar);

      //this.watchDogs  = _.orderBy(ar, this.sortCriteria, this.asc_desc);
    }
  }

  onClickHeader(criteria:string):void{
    if(this.sortCriteria === criteria){
      if(this.asc_desc === 'asc') this.asc_desc ='desc';
      else  this.asc_desc='asc';
    }else this.asc_desc = 'asc';
    //console.log(this.asc_desc);
    this.sortCriteria = criteria;
    this.watchDogs  = _.orderBy(this.watchDogs , this.sortCriteria, this.asc_desc);
  }


}
