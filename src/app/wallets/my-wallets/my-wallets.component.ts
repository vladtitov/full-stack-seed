import { Component, OnInit } from '@angular/core';
import {WalletModel} from '../../models/app-models';
import {WalletsAllService} from '../wallets-all.service';
import {MdDialog} from '@angular/material';
import {WalletEditComponent} from '../wallet-edit/wallet-edit.component';
import * as _ from 'lodash';
import {connectableObservableDescriptor} from 'rxjs/observable/ConnectableObservable';
import {DialogSimpleComponent} from '../../shared/dialog-simple/dialog-simple.component';
import {AllCoinsService} from '../../ss-browse/all-coins.service';

@Component({
  selector: 'app-my-wallets',
  templateUrl: './my-wallets.component.html',
  styleUrls: ['./my-wallets.component.css']
})
export class MyWalletsComponent implements OnInit {

  myWallets:WalletModel[];

  walletSelected:WalletModel;
  isCreate:boolean;


  constructor(
    private walletsService:WalletsAllService,
    private dialog:MdDialog,
    private allCoinsService:AllCoinsService
  ) { }

  ngOnInit() {
    //this.walletsService.loadConfig();
    //this.walletsService.loadWallets();
    this.walletsService.myWallets$.subscribe(res=>{
     // console.log(res);
      this.myWallets = res
    });

    this.allCoinsService.market$.subscribe(market=>{
     // console.log(market)

      this.myWallets.forEach(function (wallet) {
        wallet.market =  market[wallet.symbol]
        wallet.usd =  (wallet.market.price_usd * wallet.balanceDisplay).toFixed(2);
      })
    })
  }




  addWallet(evt){

    this.isCreate = !this.isCreate;

  }


  deleteWallet(evt){
    let wallet = this.walletSelected
    if(!wallet) return;
    let ref = this.dialog.open(DialogSimpleComponent, {data:{
      title:'Alert',
      message:'You want to delete wallet '+ wallet.label+'?',
      buttons:['Yes','No']
    }})

    ref.afterClosed().subscribe(res=>{
      console.log(res);
      if(res==='Yes')  this.walletsService.deleteWallet(wallet);
    })

  }


  onWalletSelected(wallet){
    if(this.walletSelected) this.walletSelected.selected = false;
    wallet.selected = true;
    this.walletSelected = wallet;
    console.log(this.walletSelected)
  }

  editWallet(event){
    let wallet = this.walletSelected;
    if(!wallet) return;
    if(!wallet.label) {
      let wallets =  this.walletsService.getAllWallets();
      let exists = _.filter(wallets, {symbol:wallet.symbol});
      wallet.label = wallet.symbol + ' '+ exists.length;
    }

    let ref = this.dialog.open(WalletEditComponent, {data:wallet});

    ref.afterClosed().subscribe(res=>{
      console.log(res);
      if(res === 'saveMe'){

        let newname = wallet.label;

        this.walletsService.saveWallets();
      }

    })

    console.log(wallet);
  }
}
