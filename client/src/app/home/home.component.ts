import {Component, OnInit} from '@angular/core';
import {HomeService} from './home.service';

@Component({
  selector: 'home',
  template: `
  <div>
      <h3>Home</h3>
      <div>
          Posts
          <div>
              <ul>
                <li *ngFor="let post of posts">                
                        {{ post.description }}                 
                </li>
              </ul>
          </div>
      </div>
  </div>`
})
export class HomeComponent implements OnInit {

  posts:any[] =[];
  constructor(private homeService:HomeService){

  }

  ngOnInit():void{
    this.homeService.getPosts().subscribe(res=>{
      this.posts = res;
      console.log(res);
    },
    console.warn);
  }
}
