import { Injectable } from '@angular/core';
import {WalletModel} from '../../models/app-models';

@Injectable()
export class WalletService {

  private wallet:WalletModel;
  constructor() { }

  setWallet(wallet:WalletModel){
    this.wallet = wallet;
  }


}
