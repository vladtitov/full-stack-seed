import { Injectable } from '@angular/core';
import {WalletModel} from '../wallet-core/wallet-model';
import {Subject} from 'rxjs/Subject';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';

@Injectable()
export class WalletService {

  walletModel:WalletModel;
  walletModelSub

  publicAssressSub:BehaviorSubject<string>;
  sunbolSub:BehaviorSubject<string>
  constructor() { }

}
