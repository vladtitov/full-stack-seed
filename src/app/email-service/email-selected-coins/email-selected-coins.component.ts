import { Component, OnInit } from '@angular/core';
import {AllCoinsService} from '../../ss-browse/all-coins.service';
import {VOExchangeData} from '../../models/SS-models';
import * as _ from 'lodash';

@Component({
  selector: 'app-email-selected-coins',
  templateUrl: './email-selected-coins.component.html',
  styleUrls: ['./email-selected-coins.component.css']
})
export class EmailSelectedCoinsComponent implements OnInit {

  selectedCoins:VOExchangeData[] = [];

  sortCriteria:string = 'rank';
  asc_desc='asc';

  constructor(private allCoinsService:AllCoinsService) { }

  ngOnInit() {
    this.allCoinsService.selectedCoins$.subscribe(res=>this.setCoins(_.values(res)))
  }

  setCoins(ar:VOExchangeData[]){
    this.selectedCoins = _.orderBy(ar, this.sortCriteria, this.asc_desc);
  }


  onClickHeader(criteria:string):void{
    console.log(criteria);
    if(this.sortCriteria === criteria){
      if(this.asc_desc === 'asc') this.asc_desc ='desc';
      else  this.asc_desc='asc';
    }else this.asc_desc = 'asc';
    console.log(this.asc_desc);
    this.sortCriteria = criteria;
    this.setCoins(this.selectedCoins);

  }

}
