import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';
import {Router, RouterModule} from '@angular/router';
import {rootRouterConfig} from './app.routes';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';

import { AppComponent } from './app.component';
//import { TestComponent } from '../../arch/test/test.component';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/observable/throw';
import 'rxjs/operator/publishLast';

//import {AuthHttp, AuthModule, provideAuth, AuthConfig} from './libs/angular2-jwt';


import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { RepoBrowserComponent } from './github/repo-browser/repo-browser.component';
import { RepoListComponent } from './github/repo-list/repo-list.component';
import { RepoDetailComponent } from './github/repo-detail/repo-detail.component';
import { ContactComponent } from './contact/contact.component';
import {GithubService} from './github/shared/github.service';
import {LoginMain} from './login/login-main.component';
import {LoginService} from './login/login.service';
import {MaterialModule} from '@angular/material';
//import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HomeService} from './home/home.service';
import {SsBrowseModule} from './ss-browse/ss-browse.module';
import {MaterialAppModule} from './material-app.module';



@NgModule({
  declarations: [
    AppComponent,
   // TestComponent,
    AboutComponent,
    RepoBrowserComponent,
    RepoListComponent,
    RepoDetailComponent,
    HomeComponent,
    ContactComponent,
    LoginMain

  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    SsBrowseModule,
    MaterialAppModule,
   // MaterialModule,
   // BrowserAnimationsModule,
    HttpModule,
   // AuthModule,
    RouterModule.forRoot(rootRouterConfig, { useHash: true })
  ],
  providers: [

    //AuthHttp,
    GithubService,
    LoginService,
    HomeService
   // provideAuth({
     // headerName: 'Authorization',
    //  headerPrefix: 'Bearer',
    //  tokenName: 'token',
     // tokenGetter: (() => localStorage.getItem('id_token')),
    //  globalHeaders: [{ 'Content-Type': 'application/json' }],
    // noJwtError: true
     // authError:(why:string)=>{ console.warn(why) }
   // })
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
