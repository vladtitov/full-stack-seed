import { Component, OnInit } from '@angular/core';
import {WalletsAllService} from '../wallets/wallets-all.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-set-password',
  templateUrl: './set-password.component.html',
  styleUrls: ['./set-password.component.css']
})
export class SetPasswordComponent implements OnInit {

  mypassword:string
  constructor(
    private allWalletsService:WalletsAllService,
    private router:Router
  ) { }

  ngOnInit() {
  }

  setPassword(){

    if(this.mypassword)this.allWalletsService.setPassword(this.mypassword);
    console.log(this.mypassword);

    this.router.navigate(['/my-wallets']);
  }

}
