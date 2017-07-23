import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WatchDogComponent } from './watch-dog/watch-dog.component';
import {WatchDogService} from './watch-dog.service';

import { CreateWatchdogComponent } from './create-watchdog/create-watchdog.component';

import { RunWatchdogsComponent } from './run-watchdogs/run-watchdogs.component';
import { EmailMainComponent } from './email-main/email-main.component';
import { EmailAllCoinsComponent } from './email-all-coins/email-all-coins.component';
import { EmailSelectedCoinsComponent } from './email-selected-coins/email-selected-coins.component';
import {RouterModule} from '@angular/router';
import {MaterialAppModule} from '../material/material-app.module';
import {FormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    MaterialAppModule
  ],
  declarations: [WatchDogComponent, CreateWatchdogComponent, RunWatchdogsComponent, EmailMainComponent, EmailAllCoinsComponent, EmailSelectedCoinsComponent],
  providers:[
    WatchDogService
  ]

})
export class EmailServiceModule { }
