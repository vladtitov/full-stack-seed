import { Component, OnInit } from '@angular/core';
import {AllCoinsService} from '../all-coins.service';
import {VOExchangeData} from '../../models/SS-models';

@Component({
  selector: 'app-ss-main',
  templateUrl: './ss-main.component.html',
  styleUrls: ['./ss-main.component.css']
})
export class SsMainComponent implements OnInit {

  sortedAllCoins:VOExchangeData[]
  counter:number=0;
  constructor(private service:AllCoinsService) { }


  ngOnInit() {
    this.service.sortedAllCoins$.subscribe(res=>this.sortedAllCoins=res);
    this.service.loadData()
    this.service.counter$.subscribe(res=>this.counter = res);

  }

  onRefresh(){
    this.service.loadData();
  }

}
