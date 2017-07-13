import {AfterContentInit, Component, Input, OnInit} from '@angular/core';
import {CoinConfig, WalletModel} from '../../models/app-models';
import {WalletService} from './wallet.service';
import {WalletsAllService} from '../wallets-all.service';

@Component({
  selector: 'app-wallet',
  templateUrl: './wallet.component.html',
  styleUrls: ['./wallet.component.css'],
  providers:[WalletService]
})
export class WalletComponent implements OnInit, AfterContentInit {


  @Input() wallet:WalletModel;
  coinConfigs:CoinConfig[];

  constructor( private walletService:WalletService, private allWallets:WalletsAllService) {

    allWallets.coinsAvailable$.subscribe(res=>{
      this.coinConfigs = res;
      this.setConfig();

    })

  }

  setConfig(){
    if(this.coinConfigs.length && this.wallet.symbol){

      let mySymbol:string = this.wallet.symbol;
      let configs = this.coinConfigs.filter(function (item) {
        return item.symbol === mySymbol
      });

      if(configs.length) this.walletService.setCoinConfig(configs[0]);
      else console.error(' no config for wallet ' + mySymbol)


    }
  }


  ngOnInit() {
  }

  ngAfterContentInit(){
    this.walletService.setWallet(this.wallet);
    this.setConfig();
   // console.log(this.wallet);
  }

}
