import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import {AuthHttp, AuthModule} from './test/angular2-jwt';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AuthModule
  ],
  providers: [AuthHttp],
  bootstrap: [AppComponent]
})
export class AppModule { }
