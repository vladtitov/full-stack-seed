import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WatchDogComponent } from './watch-dog/watch-dog.component';
import {WatchDogService} from './watch-dog.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [WatchDogComponent],
  providers:[
    WatchDogService
  ]

})
export class EmailServiceModule { }
