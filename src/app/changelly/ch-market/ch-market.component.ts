import { Component, OnInit } from '@angular/core';
import {ChangellyService} from '../changelly.service';

@Component({
  selector: 'app-ch-market',
  templateUrl: './ch-market.component.html',
  styleUrls: ['./ch-market.component.css']
})

export class ChMarketComponent implements OnInit {

  allCurrency:string[];
  constructor(private changellyService:ChangellyService) { }

  ngOnInit() {
    this.changellyService.getCurrencies().subscribe(res=>{
     // console.log(res);
      this.allCurrency = res
    })

  }

}
