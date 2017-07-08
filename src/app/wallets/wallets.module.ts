import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WalletsMainComponent } from './wallets-main/wallets-main.component';
import { WalletComponent } from './wallet/wallet.component';
import { WaletsAllComponent } from './walets-all/walets-all.component';
import { MyWalletsComponent } from './my-wallets/my-wallets.component';
import {MaterialAppModule} from '../material-app.module';
import { WalletCreateComponent } from './wallet-create/wallet-create.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialAppModule
  ],
  declarations: [
    WalletsMainComponent,
    WalletComponent,
    WaletsAllComponent,
    MyWalletsComponent,
    WalletCreateComponent
  ]
})
export class WalletsModule { }
