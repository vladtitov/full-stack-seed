import { Component, OnInit } from '@angular/core';
import {ExchangeSsService} from './exchange-ss.service';
import {WalletModel} from '../models/app-models';
import {VOExchangeData} from '../models/SS-models';

@Component({
  selector: 'app-exchange-ss',
  templateUrl: './exchange-ss.component.html',
  styleUrls: ['./exchange-ss.component.css']
})
export class ExchangeSsComponent implements OnInit {

  myWallets:WalletModel[];
  myCoins:VOExchangeData[]
  constructor(private exchangeService:ExchangeSsService) { }

  ngOnInit() {
    this.exchangeService.init();
    this.exchangeService.myWallets$.subscribe(res=>this.myWallets= res);

  }

}
