import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WalletsMainComponent } from './wallets-main/wallets-main.component';
import { WalletComponent } from './wallet/wallet.component';
import { WaletsAllComponent } from './walets-all/walets-all.component';
import { MyWalletsComponent } from './my-wallets/my-wallets.component';
import {MaterialAppModule} from '../material/material-app.module';
import { WalletCreateComponent } from './wallet-create/wallet-create.component';
import {WalletsAllService} from './wallets-all.service';
import {FormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    MaterialAppModule,
    FormsModule
  ],
  declarations: [
    WalletsMainComponent,
    WalletComponent,
    WaletsAllComponent,
    MyWalletsComponent,
    WalletCreateComponent
  ],
  providers:[
    WalletsAllService
  ]
})
export class WalletsModule { }
