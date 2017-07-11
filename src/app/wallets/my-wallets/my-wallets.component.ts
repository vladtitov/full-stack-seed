import { Component, OnInit } from '@angular/core';
import {WalletModel} from '../../models/app-models';
import {WalletsAllService} from '../wallets-all.service';
import {MdDialog} from '@angular/material';
import {WalletEditComponent} from '../wallet-edit/wallet-edit.component';
import * as _ from 'lodash';
import {connectableObservableDescriptor} from 'rxjs/observable/ConnectableObservable';
import {DialogSimpleComponent} from '../../shared/dialog-simple/dialog-simple.component';

@Component({
  selector: 'app-my-wallets',
  templateUrl: './my-wallets.component.html',
  styleUrls: ['./my-wallets.component.css']
})
export class MyWalletsComponent implements OnInit {

  myWallets:WalletModel[];
  walletSelected:WalletModel;


  constructor(
    private walletsService:WalletsAllService,
    private dialog:MdDialog
  ) { }

  ngOnInit() {
    this.walletsService.loadConfig();
    this.walletsService.loadWallets();
    this.walletsService.myWallets$.subscribe(res=>this.myWallets = res);
  }

  addWallet(evt){


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




        this.walletsService.saveWalletes();
      }

    })

    console.log(wallet);
  }
}
