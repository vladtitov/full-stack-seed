import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogSimpleComponent } from './dialog-simple/dialog-simple.component';
import {MaterialAppModule} from '../material/material-app.module';

@NgModule({
  imports: [
    CommonModule,
    MaterialAppModule
  ],
  declarations: [DialogSimpleComponent],
  entryComponents: [DialogSimpleComponent]
})
export class SharedModule { }
