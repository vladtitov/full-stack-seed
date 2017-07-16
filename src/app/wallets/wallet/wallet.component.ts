import {AfterContentInit, Component, Input, OnInit} from '@angular/core';
import {CoinConfig, WalletModel} from '../../models/app-models';
import {WalletService} from './wallet.service';
import {WalletsAllService} from '../wallets-all.service';
import {ApiServerService} from '../../api-server.service';
import {weiToEther} from '../../shared/math';
import {AllCoinsService} from '../../ss-browse/all-coins.service';
import {MdDialog} from '@angular/material';
import {DialogSimpleComponent} from '../../shared/dialog-simple/dialog-simple.component';

@Component({
  selector: 'app-wallet',
  templateUrl: './wallet.component.html',
  styleUrls: ['./wallet.component.css'],
  providers:[WalletService]
})
export class WalletComponent implements OnInit, AfterContentInit {


  @Input() wallet:WalletModel;
  coinConfigs:CoinConfig[];

  constructor(
    private walletService:WalletService,
    private allWallets:WalletsAllService,
    private api:ApiServerService,
    private allCoinsService:AllCoinsService,
    private dialog:MdDialog
  ) {

    allWallets.coinsAvailable$.subscribe(res=>{
      this.coinConfigs = res;
      this.setConfig();

    })

  }

  setConfig(){

    if(this.coinConfigs && this.wallet && this.coinConfigs.length && this.wallet.symbol){

      let mySymbol:string = this.wallet.symbol;
      let configs = this.coinConfigs.filter(function (item) {
        return item.symbol === mySymbol
      });

      if(configs.length) this.walletService.setCoinConfig(configs[0]);
      else console.error(' no config for wallet ' + mySymbol)


    }
  }


  ngOnInit() {
   // this.allCoinsService.start();
  }

  ngAfterContentInit(){

    this.walletService.setWallet(this.wallet);
    this.setConfig();
   // console.log(this.wallet);


  }


  updateBalance(){
    //console.log('update balance  ');


    this.api.getBalance(this.wallet.symbol, this.wallet.address).subscribe(res=>{
      console.log(res)
      this.wallet.balance = res.result;

      this.wallet.balanceDisplay = +this.wallet.balance/1e18;
      let price = this.allCoinsService.getCoinPrice(this.wallet.symbol);
      //console.log(price);
      if(!price){

        price = 0;
        this.dialog.open(DialogSimpleComponent,{data:{title:'Error',message:'Please add ' + this.wallet.symbol+' coin to selected coins on Browse Market page'}});
      }
      this.wallet.price_usd = price;
      this.wallet.usd = (price * this.wallet.balanceDisplay).toFixed(2);

      this.allWallets.saveWalletes();
    })
  }

}
