import { Component, OnInit } from '@angular/core';
import {AuthHttpService} from '../../login/auth-http.service';

@Component({
  selector: 'app-watch-dog',
  templateUrl: './watch-dog.component.html',
  styleUrls: ['./watch-dog.component.css']
})
export class WatchDogComponent implements OnInit {

  constructor(private auth:AuthHttpService) { }

  ngOnInit() {
    this.auth.setLastVisited()
  }

}
