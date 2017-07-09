import { Component, OnInit } from '@angular/core';
import {CoinConfig, WalletModel} from '../../models/app-models';
import {WalletsAllService} from '../wallets-all.service';
import {MdDialog} from '@angular/material';
import {DialogSimpleComponent} from '../../shared/dialog-simple/dialog-simple.component';


@Component({
  selector: 'app-wallet-create',
  templateUrl: './wallet-create.component.html',
  styleUrls: ['./wallet-create.component.css']
})
export class WalletCreateComponent implements OnInit {

  coinsAvalable:CoinConfig[];
  wallet:WalletModel;


  privateKey:string;
  symbol:string;

  constructor(
      private waletsService:WalletsAllService,
      private dialog:MdDialog,
      private allWalletsService:WalletsAllService
  ) { }

  ngOnInit() {
    this.waletsService.coinsAvailable$.subscribe(res=>this.coinsAvalable = res);
  }


  addWallet(evt){
    console.log(this.privateKey);
    let wallet = new WalletModel();


    this.allWalletsService.createNewWallet(this.privateKey)


  }

  coinSelectChanged(event){
    this.symbol = event.value;
    console.log(event.value)
    let cfg = this.waletsService.getCoinConfigBySymbol(event.value);
    console.log(cfg);

    if(cfg.contractAddress){
      let parent:WalletModel = this.waletsService.getWalletBySymbol(cfg.parent);
      console.log(parent)
      if(parent){


      }else {
        this.dialog.open(DialogSimpleComponent, {data:{message:'You have to have wallet on '+ cfg.parent}})

      }
    }else{

    }

  }

}
