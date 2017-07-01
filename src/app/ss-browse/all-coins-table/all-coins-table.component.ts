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
  creteria:string;
  asc_desc='asc';

  constructor() { }

  ngOnInit() {
  }


  onClick(creteria:string):void{
    console.log(creteria);
    if(this.creteria === creteria){
      if(this.asc_desc === 'asc') this.asc_desc ='desc';
      else  this.asc_desc='asc';
    }else this.asc_desc = 'asc';
    console.log(this.asc_desc)

    this.sortedAllCoins = _.orderBy(this.sortedAllCoins, creteria, this.asc_desc);
    this.creteria = creteria;

  }

}
