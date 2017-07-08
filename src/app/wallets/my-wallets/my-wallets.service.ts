import { Injectable } from '@angular/core';
import {CoinConfig, WalletModel} from '../../models/app-models';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {Observable} from 'rxjs/Observable';


@Injectable()
export class MyWalletsService {

 private  myWallets:WalletModel[];
  private myWalletsSub:BehaviorSubject<WalletModel[]> = new BehaviorSubject([]);
  myWallets$:Observable<WalletModel[]>;

  private coinsAvailable:CoinConfig[];
  private coinsAvailableSub:BehaviorSubject<CoinConfig[]> = new BehaviorSubject([]);
  coinsAvailable$:Observable<CoinConfig[]>;

  constructor() {
    this.myWallets$ = this.myWalletsSub.asObservable();
    this.coinsAvailable$ = this.coinsAvailableSub.asObservable();
  }

}
