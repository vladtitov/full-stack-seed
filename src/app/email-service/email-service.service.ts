import { Injectable } from '@angular/core';
import {WatchDog} from '../models/SS-models';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class EmailServiceService {

  private email:string;
  private watchDogs:WatchDog[];
  private watchDogsSub:BehaviorSubject<WatchDog[]>;
  watchDogs$:Observable<WatchDog[]>;

  constructor() {
    this.watchDogsSub = new BehaviorSubject([]);
    this.watchDogs$ = this.watchDogsSub.asObservable();
  }

  addDog(dog:WatchDog){
    this.watchDogs.push(dog)
  }

  getUid(symbol:string):string{


    let exists:WatchDog[] = this.watchDogs.filter(function (item) {
      return item.symbol === symbol;
    })


    return '';
  }



}
