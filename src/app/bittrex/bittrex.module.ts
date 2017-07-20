import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BittrexMarketComponent } from './bittrex-market/bittrex-market.component';
import {BittrexService} from './bittrex.service';
import {MaterialAppModule} from '../material/material-app.module';

@NgModule({
  imports: [
    CommonModule,
    MaterialAppModule
  ],
  declarations: [BittrexMarketComponent],
  providers:[BittrexService]
})
export class BittrexModule { }
