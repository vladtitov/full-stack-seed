import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';
import {RouterModule} from '@angular/router';
import {rootRouterConfig} from './app.routes';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';

import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import {AuthHttp, AuthModule, provideAuth, AuthConfig} from './test/angular2-jwt';


import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { RepoBrowserComponent } from './github/repo-browser/repo-browser.component';
import { RepoListComponent } from './github/repo-list/repo-list.component';
import { RepoDetailComponent } from './github/repo-detail/repo-detail.component';
import { ContactComponent } from './contact/contact.component';
import {GithubService} from './github/shared/github.service';



@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    AboutComponent,
    RepoBrowserComponent,
    RepoListComponent,
    RepoDetailComponent,
    HomeComponent,
    ContactComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    AuthModule,
    RouterModule.forRoot(rootRouterConfig, { useHash: true })
  ],
  providers: [
    AuthHttp,
    GithubService,
    provideAuth({
     // headerName: 'Authorization',
    //  headerPrefix: 'Bearer',
    //  tokenName: 'token',
     // tokenGetter: (() => localStorage.getItem('id_token')),
    //  globalHeaders: [{ 'Content-Type': 'application/json' }],
     // noJwtError: true
    })
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
