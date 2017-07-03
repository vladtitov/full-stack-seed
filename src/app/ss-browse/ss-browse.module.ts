import {NgModule, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import { SsMainComponent } from './ss-main/ss-main.component';
import {AllCoinsService} from './all-coins.service';
import { AllCoinsTableComponent } from './all-coins-table/all-coins-table.component';
import { SelectedCoinsComponent } from './selected-coins/selected-coins.component';
import {MdButton, MdCard} from '@angular/material';
import {MaterialAppModule} from '../material-app.module';

@NgModule({
  imports: [
    CommonModule,
    MaterialAppModule
  ],
  declarations: [SsMainComponent, AllCoinsTableComponent, SelectedCoinsComponent],
  providers:[AllCoinsService]
})
export class SsBrowseModule {}