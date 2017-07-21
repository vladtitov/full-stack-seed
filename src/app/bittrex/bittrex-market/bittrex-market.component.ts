import { Component, OnInit } from '@angular/core';
import {BittrexService, MarketModel1, MarketSummary} from '../bittrex.service';
import * as _ from 'lodash';

@Component({
  selector: 'app-bittrex-market',
  templateUrl: './bittrex-market.component.html',
  styleUrls: ['./bittrex-market.component.css']
})

export class BittrexMarketComponent implements OnInit {

  sortBy:string;
  asc_desc:string ='desc';
  marketModels1:MarketModel1[];
  summaries:MarketSummary[];

  constructor(private bittrexService:BittrexService) { }

  ngOnInit() {

   /* this.bittrexService.getMarkets().subscribe(res=>{
     // console.log(res);
      this.marketModels1 = res;
    })

    this.bittrexService.getCurrencies().subscribe(res=>{
     /// console.log(res);
     // this.marketModels1 = res;
    })*/
    this.bittrexService.getMarketSummaries().subscribe(res=>{
     // console.log(res);

     this.doSort(res);
      // this.marketModels1 = res;
    })
  }


  private doSort(ar:MarketSummary[]){
    if(this.sortBy) this.summaries = _.orderBy(ar, this.sortBy, this.asc_desc);
    else this.summaries = ar;
  }
  onClickHeader(sortBy:string){
    console.log(sortBy);
    if(this.sortBy === sortBy){
      if(this.asc_desc === 'asc') this.asc_desc ='desc';
      else  this.asc_desc='asc';
    }else this.asc_desc = 'asc';
    console.log(this.asc_desc);
    this.sortBy = sortBy;
    if(this.summaries) this.doSort(this.summaries);
  }

}
