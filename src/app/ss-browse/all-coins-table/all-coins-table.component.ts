import {Component, Input, OnInit} from '@angular/core';
import {VOExchangeData} from '../../models/SS-models';
import * as _ from 'lodash';
@Component({
  selector: 'app-all-coins-table',
  templateUrl: './all-coins-table.component.html',
  styleUrls: ['./all-coins-table.component.css']
})
export class AllCoinsTableComponent implements OnInit {

  @Input()sortedAllCoins:VOExchangeData[];
  constructor() { }

  ngOnInit() {
  }

  onClick(creteria:string):void{
    console.log(creteria);
    this.sortedAllCoins = _.sortBy(this.sortedAllCoins,creteria);


  }

}
