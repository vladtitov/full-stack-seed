import { Component, OnInit } from '@angular/core';
import {TestService} from './test.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  providers: [TestService]
})
export class TestComponent implements OnInit {

  message: string;
  constructor( private testService: TestService) {


  }

  ngOnInit() {
    this.testService.loadAPI().subscribe(res => {
      this.message = res.data.message;
      this.testService.login().subscribe(res =>{
        console.log(res);
        this.testService.getPosts().subscribe(res=>{
          console.log(res);
        })
      });
    })
  }

}
