import {Component, OnInit} from '@angular/core';
//import {AuthHttp} from './libs/angular2-jwt';
import {Router} from '@angular/router';
import {Http} from '@angular/http';

@Component({
  selector: 'app-root',
  templateUrl:'app.component.html'
})
export class AppComponent implements OnInit {
  title = 'app works!';
  menu:any;

  constructor(private http:Http, private router:Router){


  }

  ngOnInit():void{
 /*   this.http.authError.subscribe((err:any)=>{
      console.warn(err);
      this.router.navigateByUrl('/login');
    });
*/
    /*this.menu = this.http.get('http://localhost:8090/api/menu/1').map(res=>{

      console.log(res.json().menu);
      return res.json().menu;
    })*/
  }
}
