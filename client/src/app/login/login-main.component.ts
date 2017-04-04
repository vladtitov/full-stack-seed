/**
 * Created by Vlad on 4/3/2017.
 */
import {Component} from '@angular/core';
import {LoginService} from './login.service';
@Component({
  selector:'login-main',
  template:`
  <div>
      <div>
          <div>
              <form (ngSubmit)="login()" [formGroup]="loginForm" novalidate>
                <div>
                    <input type="text" class="form-control" formControlName="username"  [placeholder]="'Username' | translate" />
                </div>
                <div>
                    <input type="password" class="form-control" formControlName="password" [placeholder]="'Password' | translate" required/>
                </div>
                <div>
                    
                </div>
              </form>
              
          </div>
      </div>
  </div>
  `
})

export class LoginMain{
  constructor(private loginService:LoginService){

  }
}