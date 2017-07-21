import {Component,  OnInit} from '@angular/core';
import {VOExchangeData} from '../../models/SS-models';
import * as _ from 'lodash';
import {AllCoinsService} from '../all-coins.service';

@Component({
  selector: 'app-selected-coins',
  templateUrl: './selected-coins.component.html',
  styleUrls: ['./selected-coins.component.css']
})
export class SelectedCoinsComponent implements OnInit {

  //@Input() modelCoins:VOExchangeData[];

  selectedCoins:VOExchangeData[]
  sortCreteria:string = 'rank';
  asc_desc='asc';

  constructor(private allCoinsService:AllCoinsService) { }

  ngOnInit() {

    this.allCoinsService.selectedCoins$.subscribe(res=>this.selectedCoins = res)

  }

  onClickHeader(creteria:string):void{
    console.log(creteria);
    if(this.sortCreteria === creteria){
      if(this.asc_desc === 'asc') this.asc_desc ='desc';
      else  this.asc_desc='asc';
    }else this.asc_desc = 'asc';
    console.log(this.asc_desc);

    this.selectedCoins = _.orderBy(this.selectedCoins, creteria, this.asc_desc);
    this.sortCreteria = creteria;

  }

}
