import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WalletsMainComponent } from './wallets-main/wallets-main.component';
import { WalletComponent } from './wallet/wallet.component';
import { WaletsAllComponent } from './walets-all/walets-all.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [WalletsMainComponent, WalletComponent, WaletsAllComponent]
})
export class WalletsModule { }
