import {Component, OnInit} from '@angular/core';
import {AuthHttp} from './libs/angular2-jwt';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  template: `       
      <h1>{{title}}</h1>
      <div>
          {{menu | async}}
      <ul>
          UL
         <!-- <li *ngFor = "let item of (menu | async)" >
              {{item}}
          </li>-->
      </ul>
      
      </div>
      <app-test> </app-test>      
      <router-outlet></router-outlet>
  `
})
export class AppComponent implements OnInit {
  title = 'app works!';
  menu:any;

  constructor(private http:AuthHttp, private router:Router){


  }

  ngOnInit():void{
    this.http.authError.subscribe((err:any)=>{
      console.warn(err);
      this.router.navigateByUrl('/login');
    });

    /*this.menu = this.http.get('http://localhost:8090/api/menu/1').map(res=>{

      console.log(res.json().menu);
      return res.json().menu;
    })*/
  }
}
