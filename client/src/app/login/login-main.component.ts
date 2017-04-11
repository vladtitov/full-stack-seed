/**
 * Created by Vlad on 4/3/2017.
 */
import {Component, OnInit} from '@angular/core';
import {LoginService} from './login.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
@Component({
  selector:'login-main',
  template:`
  <div>
      <div>
          <div>             
              <form  [formGroup]="loginForm" novalidate>
                  <div>
                    <md-input-container>
                        <input #username mdInput  type="text"  formControlName="username"  placeholder="username"  />
                    </md-input-container>
                  </div>
                  <div>
                      <md-input-container>
                          <input #password mdInput type="password"  formControlName="password" placeholder="password" required />
                      </md-input-container>
                  </div>
                  <div>
                      <button [disabled]="!loginForm.valid" md-raised-button color="accent" (click)="login(username.value, password.value)" >Login</button>
                  </div>
                <div>
                    
                </div>
              </form>            
              
          </div>
      </div>
  </div>
  `
})

export class LoginMain implements  OnInit{

  loginForm: FormGroup;
  constructor(private loginService:LoginService,  private formBuilder: FormBuilder, private router:Router){

  }

  ngOnInit() {

    this.loginForm = this.formBuilder.group({
      username: ['john@doe.com', Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(64)])],
      password: ['my password 2', Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(32)])]
    });

  }

  login(email:string, password:string) {

    this.loginService.login(email, password)
      .subscribe(
        () => {
          alert('Login successful');
          this.router.navigateByUrl('/home')
        },
        console.error
      );

  }

 /* login(values:any):boolean{
    console.log(values);
    console.log(this.loginForm.value);
    this.loginService.login(this.loginForm.value).subscribe(res=>{
      console.log(res);
      localStorage.setItem('id_token', res.data);
      this.roter.navigate(['/home'])

    })

    return false;
  }*/
}