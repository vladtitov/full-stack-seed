import { Component, OnInit } from '@angular/core';
import {WalletModel} from '../../models/app-models';
import {WalletsAllService} from '../wallets-all.service';

@Component({
  selector: 'app-my-wallets',
  templateUrl: './my-wallets.component.html',
  styleUrls: ['./my-wallets.component.css']
})
export class MyWalletsComponent implements OnInit {

  myWallets:WalletModel[];

  constructor(private walletsService:WalletsAllService) { }

  ngOnInit() {
    this.walletsService.myWallets$.subscribe(res=>this.myWallets = res)

  }

  addWallet(evt){


  }

  onEditClick(wallet){
    console.log(wallet);
  }
}
