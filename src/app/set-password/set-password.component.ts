import { Component, OnInit } from '@angular/core';
import {WalletsAllService} from '../wallets/wallets-all.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-set-password',
  templateUrl: './set-password.component.html',
  styleUrls: ['./set-password.component.css']
})
export class SetPasswordComponent implements OnInit {

  mypassword:string
  constructor(
    private allWalletsService:WalletsAllService,
    private router:Router,
    private route:ActivatedRoute
  ) { }

  ngOnInit() {
    let path = this.route.snapshot.url[0].path;
    if(path === 'logout') {
      this.allWalletsService.setPassword('');
      this.router.navigate(['/my-wallets']);
    }
  }

  setPassword(){

    if(this.mypassword)this.allWalletsService.setPassword(this.mypassword);
    console.log(this.mypassword);

    this.router.navigate(['/my-wallets']);
  }

}
