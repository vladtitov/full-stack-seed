import { Injectable } from '@angular/core';
import {WalletModel} from '../models/app-models';
import {VOExchangeData} from '../models/SS-models';
import {WalletsAllService} from '../wallets/wallets-all.service';
import {SelectedCoinsService} from '../ss-browse/selected-coins/selected-coins.service';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class ExchangeSsService {

  private myWallets:WalletModel[];
  private myWalletsSub:BehaviorSubject<WalletModel[]>;
  myWallets$:Observable<WalletModel[]>

  private coins:VOExchangeData[];
  private coinsSub:BehaviorSubject<VOExchangeData[]>;
  coins$:Observable<VOExchangeData[]>





  constructor(private allWallets:WalletsAllService, private selectsdCoins:SelectedCoinsService) {
    //this.walletsSub =  new BehaviorSubject<WalletModel[]>([])
    this.myWallets$ = allWallets.myWallets$;//this.walletsSub.asObservable();

    this.coinsSub = new BehaviorSubject([]);
    this.coins$ = this.coinsSub.asObservable();

    allWallets.loadConfig();
    allWallets.loadWallets()
  }

  init(){



  }

}
