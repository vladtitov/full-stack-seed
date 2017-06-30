import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { GithubService } from '../shared/github.service';

@Component({
  selector: 'repo-browser',
  template: `
      <h3>GitHub Browser</h3>
      <input type="text" #repoName placeholder="Search Github Orgs" value="angular" />
      <button (click)="searchForOrg(repoName.value)">Search Orgs</button>
      <router-outlet></router-outlet>  
  `
})
export class RepoBrowserComponent {

  constructor(private router: Router, private github: GithubService) {
  }

  searchForOrg(orgName: string) {
    this.github.getOrg(orgName)
      .subscribe(({name}) => {
        console.log(name);
        this.router.navigate(['/github', orgName]);
      });
  }

}
