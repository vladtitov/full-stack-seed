import { Injectable } from '@angular/core';
import {WalletModel} from '../wallet-core/wallet-model';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class WalletsAllService {

  myWallets:WalletModel[];
  myWaletsSub:BehaviorSubject<WalletModel[]>;
  myWallets$:Observable<WalletModel[]>;
  
  constructor() {
    this.myWaletsSub = new BehaviorSubject([]);
    this.myWallets$ = this.myWaletsSub.asObservable();
  }

}
