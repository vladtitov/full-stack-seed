import {Component, Input, OnInit} from '@angular/core';
import {VOExchangeData} from '../../models/SS-models';
import * as _ from 'lodash';

@Component({
  selector: 'app-selected-coins',
  templateUrl: './selected-coins.component.html',
  styleUrls: ['./selected-coins.component.css']
})
export class SelectedCoinsComponent implements OnInit {

  @Input() modelCoins:VOExchangeData[];
  sortCreteria:string = 'rank';
  asc_desc='asc';
  constructor() { }

  ngOnInit() {
  }

  onClickHeader(creteria:string):void{
    console.log(creteria);
    if(this.sortCreteria === creteria){
      if(this.asc_desc === 'asc') this.asc_desc ='desc';
      else  this.asc_desc='asc';
    }else this.asc_desc = 'asc';
    console.log(this.asc_desc);

    this.modelCoins = _.orderBy(this.modelCoins, creteria, this.asc_desc);
    this.sortCreteria = creteria;

  }

}
