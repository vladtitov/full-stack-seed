import { Injectable } from '@angular/core';
import {WalletModel} from '../models/app-models';
import {VOExchangeData} from '../models/SS-models';
import {WalletsAllService} from '../wallets/wallets-all.service';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {Observable} from 'rxjs/Observable';
import {AllCoinsService} from '../ss-browse/all-coins.service';
import {Http} from '@angular/http';
import {ApiServerService} from '../api-server.service';

@Injectable()
export class ExchangeSsService {

  private myWallets:WalletModel[];
  private myWalletsSub:BehaviorSubject<WalletModel[]>;
  myWallets$:Observable<WalletModel[]>

  private myCoins:VOExchangeData[];
  private myCoinsSub:BehaviorSubject<VOExchangeData[]>;
  myCoins$:Observable<VOExchangeData[]>

  myCoinsSymbols:string[];
  allCoins:VOExchangeData[];


  constructor(
    private allWallets:WalletsAllService,
    private allCoinsService:AllCoinsService,
    private api:ApiServerService
  ) {

    this.myWalletsSub =  new BehaviorSubject<WalletModel[]>([])
    this.myWallets$ = this.myWalletsSub.asObservable();
    allWallets.myWallets$.subscribe(res=>{
      this.myWallets = res;
      this.myCoinsSymbols = this.filterWalletsSymbolsUnique(res);
      this.myWalletsSub.next(this.myWallets);
      this.populateCoins();

    });//this.walletsSub.asObservable();

    this.myCoinsSub = new BehaviorSubject([]);
    this.myCoins$ = this.myCoinsSub.asObservable();

    //allWallets.loadConfig();
    //allWallets.loadWallets()

    allCoinsService.allCoins$.subscribe(res=>{
      this.allCoins = res;
      this.populateCoins();

    })

    allCoinsService.loadData();

  }


  updateBalance(wallet:WalletModel){

    this.api.getBalance(wallet.symbol, wallet.address).subscribe(res=>{
      console.log(res);
    })

  }


  populateCoins(){
    let coins:VOExchangeData[] = this.allCoins;
    if(!coins) return;
    let ar:VOExchangeData[] = [];
    let symbols:string[] = this.myCoinsSymbols;
    coins.forEach(function (coin) {
      if(symbols.indexOf(coin.symbol) !==-1)ar.push(coin)
    })
    this.myCoins = ar;
    this.myCoinsSub.next(this.myCoins);
  }



  filterWalletsSymbolsUnique(wallets:WalletModel[]):string[]{
    let ar:string[]=[]
    wallets.forEach(function (wallet) {
      if(ar.indexOf(wallet.symbol) ===-1) ar.push(wallet.symbol)
    })
    return ar;
  }

  init(){



  }

}
