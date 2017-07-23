import { Component, OnInit } from '@angular/core';
import {FormGroup} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {AuthHttpService} from '../auth-http.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  showPass: boolean;
  login = {email: 'vladstitov@gmail.com', password: 'zaq12wsx'};
  selectedTab:number;
  exists:boolean;

  confirmPassword:string;


  constructor(
    private router:Router,
    private route:ActivatedRoute,
    private authHttp:AuthHttpService
  ) {

  }

  onRegister(){
    this.exists = false;
    this.authHttp.register(this.login.email, this.login.password).subscribe(res=>{
      console.log(res);
      if(res.error && res.error === 'exists'){
        setTimeout(()=>{ this.exists = false}, 3000);
        this.exists = true;
      }
    })
  }

  ngOnInit() {
    this.route.params.subscribe(params => {

      let topic = params.topic;
      console.log(topic);
      if(topic) {

        switch (topic){
          case 'sign-in':
            this.selectedTab = 0;
            break
          case 'forgot-password':
            this.selectedTab = 2;
            break
          case 'register':
            this.selectedTab = 1;
            break;
          default:
            this.selectedTab = 0;
            break

        }


      }
      console.log(this.selectedTab);

    });

  }

  onShowPasswordChanged($evt, chbox){

    this.showPass = chbox.checked;

  }

  onSubmit(){
    this.authHttp.login(this.login.email, this.login.password).subscribe(res => {
      console.log(res);
      if(res){
        //this.fullName = res.firstName + ' ' + res.lastName;
        //setTimeout(()=>this.modal.closeWindow('login success'), 3000);
      }
      else console.error(' error login');
    });


  }

  signUp() {
    console.log("Sign Up Data:" , this.login);
  }
}

