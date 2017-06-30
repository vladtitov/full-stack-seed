import {NgModule, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import { SsMainComponent } from './ss-main/ss-main.component';
import {AllCoinsService} from './all-coins.service';
import { AllCoinsTableComponent } from './all-coins-table/all-coins-table.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [SsMainComponent, AllCoinsTableComponent],
  providers:[AllCoinsService]
})
export class SsBrowseModule {}