import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {VOExchangeData} from '../../models/SS-models';
import * as _ from 'lodash';
@Component({
  selector: 'app-all-coins-table',
  templateUrl: './all-coins-table.component.html',
  styleUrls: ['./all-coins-table.component.css']
})
export class AllCoinsTableComponent implements OnInit {

  @Input() allCoins:VOExchangeData[];

  @Output()selectedCoinsNamesChange = new EventEmitter();



  modelCoins:VOExchangeData[];
  creteria:string;

  asc_desc='asc';

  constructor() { }

  ngOnChanges(changes: any) {
    console.log(changes);

    this.modelCoins  = changes.allCoins.currentValue;// _.reject(changes.allCoins,'selected')

    //this.doSomething(changes.categoryId.currentValue);

  }

  ngOnInit() {
  }


  private changeStatus(coin:VOExchangeData):void{

  }
  onCoinSelected(event, coin:VOExchangeData):void {
    console.log(event.target.checked, coin);
    coin.selected = event.target.checked;

    let selectedCoinsNames = this.allCoins.reduce(function (result, item) {
      if(item.selected)  result.push(item.symbol);
      return result;
    },[]);


    this.selectedCoinsNamesChange.emit(selectedCoinsNames);
  }

  onClickHeader(creteria:string):void{
    console.log(creteria);
    if(this.creteria === creteria){
      if(this.asc_desc === 'asc') this.asc_desc ='desc';
      else  this.asc_desc='asc';
    }else this.asc_desc = 'asc';
    console.log(this.asc_desc);

    this.modelCoins = _.orderBy(this.modelCoins, creteria, this.asc_desc);
    this.creteria = creteria;

  }

}
