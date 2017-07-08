import { Component, OnInit } from '@angular/core';
import {CoinConfig} from '../../models/app-models';
import {MyWalletsService} from '../my-wallets/my-wallets.service';

@Component({
  selector: 'app-wallet-create',
  templateUrl: './wallet-create.component.html',
  styleUrls: ['./wallet-create.component.css']
})
export class WalletCreateComponent implements OnInit {

  coinsAvalable:CoinConfig[];

  constructor(
    private myWaletsService:MyWalletsService
  ) { }

  ngOnInit() {
    this.myWaletsService.coinsAvailable$.subscribe(res=>this.coinsAvalable = res);
  }

}
