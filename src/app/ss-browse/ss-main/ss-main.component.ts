import { Component, OnInit } from '@angular/core';
import {AllCoinsService} from '../all-coins.service';
import {VOExchangeData} from '../../models/SS-models';

@Component({
  selector: 'app-ss-main',
  templateUrl: './ss-main.component.html',
  styleUrls: ['./ss-main.component.css']
})
export class SsMainComponent implements OnInit {

  allCoins:VOExchangeData[];
  selectedCoinsNames:string[] =[];
  selectedCoins:VOExchangeData[];

  counter:number=0;
  constructor(private service:AllCoinsService) { }


  ngOnInit() {
    this.service.allCoins$.subscribe(res=>this.allCoins=res);
    this.service.loadData()
    this.service.counter$.subscribe(res=>this.counter = res);

  }

  onSelectChanged(val):void{
    console.log(val);
  }

  onRefresh(){
    this.service.loadData();
  }

}
