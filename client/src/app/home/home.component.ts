import {Component, OnInit} from '@angular/core';
import {HomeService} from './home.service';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'home',
  template: `
  <div>
      <h3>Home</h3>
      <div>
          Posts
          <div>
              <md-list>
                <md-list-item *ngFor="let post of (posts$ | async)">
                    <md-icon md-list-icon class="fa fa-snowflake-o"></md-icon>
                    <md-icon md-list-avatar class="fa fa-area-chart"></md-icon>
                    <p md-line> {{ post.description }} </p>                                
                </md-list-item>
              </md-list>
          </div>
      </div>
  </div>
  `
})
export class HomeComponent implements OnInit {

  posts:any[] =[];
  posts$:Observable<any>
  constructor(private homeService:HomeService){

  }

  ngOnInit():void{
   this.posts$ =  this.homeService.getPosts()
    /* .subscribe(res=>{
      this.posts = res;
      console.log(res);
    },
    console.warn);*/
  }
}
