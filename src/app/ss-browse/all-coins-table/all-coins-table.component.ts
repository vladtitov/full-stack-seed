import {Component,  OnInit} from '@angular/core';
import {VOExchangeData} from '../../models/SS-models';
import * as _ from 'lodash';
import {AllCoinsService} from '../all-coins.service';
@Component({
  selector: 'app-all-coins-table',
  templateUrl: './all-coins-table.component.html',
  styleUrls: ['./all-coins-table.component.css']
})
export class AllCoinsTableComponent implements OnInit {

  //@Input() allCoins:VOExchangeData[];

  //@Output()selectedCoinsNamesChange = new EventEmitter();




  allCoinsData:VOExchangeData[];

 //modelCoins:VOExchangeData[];
  creteria:string;

  asc_desc='asc';

  constructor( private allCoinsService:AllCoinsService) { }

 // ngOnChanges(changes: any) {
   // console.log(changes);

    //this.modelCoins  = changes.allCoins.currentValue;// _.reject(changes.allCoins,'selected')

    //this.doSomething(changes.categoryId.currentValue);

  //}

  ngOnInit() {

    this.allCoinsService.allCoins$.subscribe(res=>this.allCoinsData = res);
  }


  private changeStatus(coin:VOExchangeData):void{

  }

  onCoinSelected(event, coin:VOExchangeData):void {
    console.log(event.target.checked, coin);
    if(event.target.checked){
      this.allCoinsService.addSelected(coin.symbol);
    }else{
      this.allCoinsService.removeSelected(coin.symbol)
    }






/*
    let selectedCoinsNames = this.allCoins.reduce(function (result, item) {
      if(item.selected)  result.push(item.symbol);
      return result;
    },[]);


    this.selectedCoinsNamesChange.emit(selectedCoinsNames);*/
  }

  onClickHeader(creteria:string):void{
    console.log(creteria);
    if(this.creteria === creteria){
      if(this.asc_desc === 'asc') this.asc_desc ='desc';
      else  this.asc_desc='asc';
    }else this.asc_desc = 'asc';
    console.log(this.asc_desc);

    this.allCoinsData = _.orderBy(this.allCoinsData, creteria, this.asc_desc);
    this.creteria = creteria;

  }

}
