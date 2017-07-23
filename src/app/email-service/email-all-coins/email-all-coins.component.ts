import { Component, OnInit } from '@angular/core';
import {AllCoinsService} from '../../ss-browse/all-coins.service';
import {VOExchangeData} from '../../models/SS-models';
import * as _ from 'lodash';

@Component({
  selector: 'app-email-all-coins',
  templateUrl: './email-all-coins.component.html',
  styleUrls: ['./email-all-coins.component.css']
})
export class EmailAllCoinsComponent implements OnInit {

  allCoinsData:VOExchangeData[];
  sortCriteria:string = 'rank';
  asc_desc='asc';
  constructor(private coinsService:AllCoinsService) { }

  ngOnInit() {
    this.coinsService.allCoins$.subscribe(res=>this.allCoinsData = res)
  }

  onCoinSelected(event, coin:VOExchangeData):void {
    console.log(event.target.checked, coin);
    if(event.target.checked){
      this.coinsService.addSelected(coin.symbol);
    }else{
      this.coinsService.removeSelected(coin.symbol)
    }






    /*
        let selectedCoinsNames = this.allCoins.reduce(function (result, item) {
          if(item.selected)  result.push(item.symbol);
          return result;
        },[]);


        this.selectedCoinsNamesChange.emit(selectedCoinsNames);*/
  }

  onClickHeader(criteria:string):void{
    console.log(criteria);
    if(this.sortCriteria === criteria){
      if(this.asc_desc === 'asc') this.asc_desc ='desc';
      else  this.asc_desc='asc';
    }else this.asc_desc = 'asc';
    console.log(this.asc_desc);

    this.allCoinsData = _.orderBy(this.allCoinsData, criteria, this.asc_desc);
    this.sortCriteria = criteria;

  }

}
