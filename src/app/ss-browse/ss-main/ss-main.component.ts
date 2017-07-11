import { Component, OnInit } from '@angular/core';
import {AllCoinsService} from '../all-coins.service';
import {VOExchangeData} from '../../models/SS-models';
import {SelectedCoinsService} from '../selected-coins/selected-coins.service';

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

  timestamp:string = '';
  constructor(
    private allCoinsService:AllCoinsService,
    private selectedService:SelectedCoinsService
  ) { }

  ngOnInit() {
    this.allCoinsService.allCoins$.subscribe(res=>{
      this.markSelected(res)
      this.allCoins=res;
      this.populateSelected();
    });
    this.allCoinsService.loadData()
    this.allCoinsService.timestamp$.subscribe(res=>this.timestamp = (new Date(res)).toLocaleTimeString());
  }

  showAllCoins(){
    if(this.isAllcoins)this.isAllcoins = false;
    else this.isAllcoins = true;
  }
  onClose(){
    this.isAllcoins = false;
  }

  getSelectedNames():string[]{

    if(!this.selectedCoinsNames) {
      this.selectedCoinsNames = []
      let str = localStorage.getItem('selectedCoinsNames');
      try {
        if (str) this.selectedCoinsNames = JSON.parse(str);
      } catch (e) {
        console.error(e);
      }
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
    this.allCoinsService.loadData('now');
  }

}
