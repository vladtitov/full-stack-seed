/**
 * Created by Vlad on 4/3/2017.
 */
import { Routes } from '@angular/router';

import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { RepoBrowserComponent } from './github/repo-browser/repo-browser.component';
import { RepoListComponent } from './github/repo-list/repo-list.component';
import { RepoDetailComponent } from './github/repo-detail/repo-detail.component';
import { ContactComponent } from './contact/contact.component';

import {SsMainComponent} from './ss-browse/ss-main/ss-main.component';
import {WalletsMainComponent} from './wallets/wallets-main/wallets-main.component';
import {MyWalletsComponent} from './wallets/my-wallets/my-wallets.component';
import {ExchangeSsComponent} from './exchange-ss/exchange-ss.component';

import {BittrexMarketComponent} from './bittrex/bittrex-market/bittrex-market.component';
import {AllCoinsTableComponent} from './ss-browse/all-coins-table/all-coins-table.component';
import {ChMarketComponent} from './changelly/ch-market/ch-market.component';
import {WatchDogComponent} from './email-service/watch-dog/watch-dog.component';
import {LoginComponent} from './login/login/login.component';
import {ConfirmComponent} from './login/confirm/confirm.component';
import {EmailMainComponent} from './email-service/email-main/email-main.component';
import {EmailAllCoinsComponent} from './email-service/email-all-coins/email-all-coins.component';
import {EmailSelectedCoinsComponent} from './email-service/email-selected-coins/email-selected-coins.component';
import {CreateWatchdogComponent} from './email-service/create-watchdog/create-watchdog.component';
import {RunWatchdogsComponent} from './email-service/run-watchdogs/run-watchdogs.component';



export const rootRouterConfig: Routes = [
  { path: '', redirectTo: 'ss-main', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
 // { path: 'login', component: LoginMain },
  { path: 'about', component: AboutComponent },
  { path: 'exchange-ss', component:ExchangeSsComponent },
  { path: 'ss-main', component: SsMainComponent },
  { path: 'shapeshift', component: AllCoinsTableComponent },
  { path: 'changelly', component: ChMarketComponent },
  { path: 'wallets', component: WalletsMainComponent },
  { path: 'email-service', component: EmailMainComponent,
    children:[
      { path: '', component: EmailAllCoinsComponent },
      { path: 'all-coins', component: EmailAllCoinsComponent},
      { path: 'selected-coins', component: EmailSelectedCoinsComponent},
      { path: 'create-watch-dog', component: CreateWatchdogComponent},
      { path: 'run-watch-dog', component: RunWatchdogsComponent}
    ]

  },
  { path: 'my-wallets', component: MyWalletsComponent },
  { path: 'bittrex', component: BittrexMarketComponent },
  { path: 'login/:topic', component: LoginComponent },
  { path: 'login-confirm', component:ConfirmComponent },
  { path: 'github', component: RepoBrowserComponent,
    children: [
      { path: '', component: RepoListComponent },
      { path: ':org', component: RepoListComponent,
        children: [
          { path: '', component: RepoDetailComponent },
          { path: ':repo', component: RepoDetailComponent }
        ]
      }]
  },
  { path: 'contact', component: ContactComponent }
];