import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChMarketComponent } from './ch-market/ch-market.component';
import {ChangellyService} from './changelly.service';
import {MaterialAppModule} from '../material/material-app.module';

@NgModule({
  imports: [
    CommonModule,
    MaterialAppModule
  ],
  declarations: [ChMarketComponent],
  providers:[ChangellyService]
})
export class ChangellyModule { }
