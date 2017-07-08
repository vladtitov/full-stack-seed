import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WalletsMainComponent } from './wallets-main/wallets-main.component';
import { WalletComponent } from './wallet/wallet.component';
import { WaletsAllComponent } from './walets-all/walets-all.component';
import { MyWalletsComponent } from './my-wallets/my-wallets.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [WalletsMainComponent, WalletComponent, WaletsAllComponent, MyWalletsComponent]
})
export class WalletsModule { }
