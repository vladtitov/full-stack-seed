import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {CoinConfig, WalletModel} from '../../models/app-models';
import {WalletsAllService} from '../wallets-all.service';
import {MdDialog} from '@angular/material';
import {DialogSimpleComponent} from '../../shared/dialog-simple/dialog-simple.component';
import * as _ from 'lodash';
import {generateAddressFromPrivateKey} from '../../shared/generate-address';
import {main} from '@angular/compiler-cli/src/main';




@Component({
  selector: 'app-wallet-create',
  templateUrl: './wallet-create.component.html',
  styleUrls: ['./wallet-create.component.css']
})
export class WalletCreateComponent implements OnInit {



  @Output() created:EventEmitter<WalletModel> = new EventEmitter(null);

  coinsAvalable:CoinConfig[];
  wallet:WalletModel;

  privateKeyETH = 'f6ebe5512937e1eea5eda7b40a497276008954ff30d48f5ff5e7873aa694fa12';///0xc724cb4bb59210caaf1e71c9111f191aca5f1bf9
  privateKeyBTC0='L5ZXWJbQfrYKFcf27R9g25DTY568Hwst5ceyz8bC2J9TqxayCzdP';//1Mfu3eqLrMAbhGGdPXiQivtRvL2s4TgybB
  privateKeyBTC1='L2W7ENfabpwvuMRC1NJuSE8Jcw6mHp3gfXEJuWsywbLFtUgjcb8N'; //18sGMWwmTdihaPRYDY3mxY8USf4fYfSRsk
  privateKeyETHNotHD='9d9b915a832d9cd957610a9c69e9d6379c2128ddbf19adfd90744ff8dc844791'; //0xbd4165aa0192ef0bb6547b9461a98468ee80765c
  privateKeyLTCWitBalance='TAp38Z7iUrm4RUbrMyGXjP5FwfhwzMUNMJtoEo1qhVtVDema4KZq'; //4.26411486 LPckv2ot7AjbWUpf47rFVQB4FXT6BdfURM
  privateKeyLTC0='T7eQ9wfF9tseKqQs3R39bpmZxFokCw6F6UDULTRVDPMVfbKXg5YZ' // LUhx6yurUdybU1Xxzm9qsU8NUyaYc7z8EQ

  constructor(
      private dialog:MdDialog,
      private allWalletsService:WalletsAllService
  ) {
    this.wallet = new WalletModel();
    console.log(this.created);
   // this.wallet.privateKey = this.privateKeyETH;

  }

  ngOnInit() {
    this.allWalletsService.coinsAvailable$.subscribe(res=>this.coinsAvalable = res);

  }


  onPrivateKeyBlur($event){
    this.generateAddress();
  }

  generateAddress(){

    if(this.wallet.privateKey  && this.wallet.privateKey.length > 50 && this.wallet.network){

      this.wallet.address = generateAddressFromPrivateKey(this.wallet.privateKey,this.wallet.network);
    }


    console.log(this.wallet.address);

  }

  addWallet(evt){
    let id = this.wallet.symbol+'_'+this.wallet.address;

    let exists =  this.allWalletsService.getMyWalletById(id);


    if(exists){
      this.dialog.open(DialogSimpleComponent, {data:{title:'ERROR',message:'Wallet with this address and Coin exists. Please use another private key'}})
      return
    }
      this.allWalletsService.createNewWallet(this.wallet);
  }



  coinSelectChanged(event){
    console.log(event.value);
    let cfg = this.allWalletsService.getCoinConfigBySymbol(event.value);
    if(!cfg) return
    console.log(cfg);

    this.wallet.symbol = cfg.symbol;
    this.wallet.network = cfg.network;
    this.wallet.displayName = cfg.displayName;
    let wallets =  this.allWalletsService.getAllWallets();

    if(!this.wallet.label) {

      let exists = _.filter(wallets, {symbol:this.wallet.symbol});
      this.wallet.label = this.wallet.symbol + ' '+ exists.length;
    }



    if(cfg.contractAddress){
      let network = cfg.network;
      let networkWallets = this.allWalletsService.getMyWalletsBySymbol(network);

      if(networkWallets.length){
        let pk = networkWallets[0].privateKey;
        if(!this.wallet.privateKey) this.wallet.privateKey = pk;



      }else{
        this.dialog.open(DialogSimpleComponent, {data:{message:'You have to have wallet on '+ cfg.network}})
      }


     // let parent:WalletModel = this.waletsService.getWalletBySymbol(cfg.parent);
     // console.log(parent)
    //  if(parent){



      }else {


      }

    this.generateAddress();

  }

}
