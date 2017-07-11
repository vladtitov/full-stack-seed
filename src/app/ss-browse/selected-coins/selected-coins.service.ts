import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {VOExchangeData} from '../../models/SS-models';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class SelectedCoinsService {

  private selectedCoinsNames:string[];
  private selectedCoins:VOExchangeData[];
  private selectedCoinsSub:BehaviorSubject<VOExchangeData[]>;
  selectedCoins$:Observable<VOExchangeData[]>
  constructor() {
    this.selectedCoinsSub = new BehaviorSubject([]);
    this.selectedCoins$ = this.selectedCoinsSub.asObservable();
  }

  setSelected(coins:VOExchangeData[]){
    this.selectedCoins = coins
  }

  loadData(){

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

}
