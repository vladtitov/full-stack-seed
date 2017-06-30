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
import {LoginMain} from './login/login-main.component';
import {SsMainComponent} from './ss-browse/ss-main/ss-main.component';

export const rootRouterConfig: Routes = [
  { path: '', redirectTo: 'ss-main', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginMain },
  { path: 'about', component: AboutComponent },
  { path: 'ss-main', component: SsMainComponent },
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