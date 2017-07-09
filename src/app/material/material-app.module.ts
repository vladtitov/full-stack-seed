/**
 * Created by Vlad on 7/3/2017.
 */
import { NgModule } from '@angular/core';
import {
  MdButtonModule,
  MdCardModule,
  MdCheckboxModule,
  MdDialogModule,
  MdGridListModule,
  MdInputModule,
  MdListModule,
  MdMenuModule,
  MdSidenavModule,
  MdSlideToggleModule,
  MdRadioModule, MdToolbarModule, MdTabsModule, MdSelectModule
} from "@angular/material";


@NgModule({
  imports: [
    MdButtonModule,
    MdCardModule,
    MdCheckboxModule,
    MdDialogModule,
    MdGridListModule,
    MdInputModule,
    MdListModule,
    MdMenuModule,
    MdSidenavModule,
    MdSlideToggleModule,
    MdRadioModule,
    MdToolbarModule,
    MdTabsModule,
    MdSelectModule
  ],
  exports: [
    MdButtonModule,
    MdCardModule,
    MdCheckboxModule,
    MdDialogModule,
    MdGridListModule,
    MdInputModule,
    MdListModule,
    MdMenuModule,
    MdSidenavModule,
    MdSlideToggleModule,
    MdRadioModule,
    MdToolbarModule,
    MdTabsModule,
    MdSelectModule

  ]
})

export class MaterialAppModule { }