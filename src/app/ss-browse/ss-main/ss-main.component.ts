import { Component, OnInit } from '@angular/core';
import {AllCoinsService} from '../all-coins.service';
import {VOExchangeData} from '../../models/SS-models';

@Component({
  selector: 'app-ss-main',
  templateUrl: './ss-main.component.html',
  styleUrls: ['./ss-main.component.css']
})
export class SsMainComponent implements OnInit {

  allCoins:VOExchangeData[];
  selectedCoinsNames:string[];
  selectedCoins:VOExchangeData[];
  isAllcoins:boolean;

  counter:number=0;
  constructor(private service:AllCoinsService) { }

  ngOnInit() {
    this.service.allCoins$.subscribe(res=>{
      this.markSelected(res)
      this.allCoins=res;
      this.populateSelected();
    });
    this.service.loadData()
    this.service.counter$.subscribe(res=>this.counter = res);
  }

  showAllCoins(){
    if(this.isAllcoins)this.isAllcoins = false;
    else this.isAllcoins = true;
  }
  onClose(){
    this.isAllcoins = false;
  }

  getSelectedNames():string[]{
    if(!this.selectedCoinsNames){
      let str=localStorage.getItem('selectedCoinsNames');
      if(str) this.selectedCoinsNames = JSON.parse(str);
    }
    return this.selectedCoinsNames;
  }

  saveSelectedNames(val:string[]):void{
    this.selectedCoinsNames = val;
    localStorage.setItem('selectedCoinsNames', JSON.stringify(val));
  }

  markSelected(ar:VOExchangeData[]):void{
    let selNames:string[] = this.getSelectedNames();
    ar.forEach(function (item) {
      item.selected = selNames.indexOf(item.symbol) !==-1
    })
  }

  populateSelected():void{
    let ar=[];
    let val = this.getSelectedNames();
    this.allCoins.forEach(function (item) {
      if(val.indexOf(item.symbol) !== -1) ar.push(item)
    });

    this.selectedCoins = ar;
  }

  onSelectChanged(val:string[]):void{

    this.saveSelectedNames(val);
    this.populateSelected();
  }

  onRefresh(){
    this.service.loadData();
  }

}
