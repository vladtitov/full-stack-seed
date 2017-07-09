import { Component, OnInit } from '@angular/core';
import {WalletModel} from '../../models/app-models';
import {WalletsAllService} from '../wallets-all.service';
import {MdDialog} from '@angular/material';
import {WalletEditComponent} from '../wallet-edit/wallet-edit.component';
import * as _ from 'lodash';
import {connectableObservableDescriptor} from 'rxjs/observable/ConnectableObservable';

@Component({
  selector: 'app-my-wallets',
  templateUrl: './my-wallets.component.html',
  styleUrls: ['./my-wallets.component.css']
})
export class MyWalletsComponent implements OnInit {

  myWallets:WalletModel[];
  selected:WalletModel;

  constructor(
    private walletsService:WalletsAllService,
    private dialog:MdDialog
  ) { }

  ngOnInit() {
    this.walletsService.myWallets$.subscribe(res=>this.myWallets = res);
  }

  addWallet(evt){


  }


  onWalletSelected(wallet){
    if(this.selected) this.selected.selected = false;
    wallet.selected = true;
    this.selected = wallet;
    console.log(this.selected)
  }

  onEditClick(wallet){
    if(!wallet.label) {
      let wallets =  this.walletsService.getAllWallets();
      let exists = _.filter(wallets, {symbol:wallet.symbol});
      wallet.label = wallet.symbol + ' '+ exists.length;
    }

    let ref = this.dialog.open(WalletEditComponent, {data:wallet});

    ref.afterClosed().subscribe(res=>{
      console.log(res);
      if(res === 'saveMe'){

        this.walletsService.saveWalletes();
      }

    })

    console.log(wallet);
  }
}
