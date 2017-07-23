import { Injectable } from '@angular/core';
import {WatchDog} from '../models/SS-models';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {Observable} from 'rxjs/Observable';
import * as _ from 'lodash';

@Injectable()
export class EmailServiceService {

  private email:string;
  private watchDogs:{[uid:string]:WatchDog};
  private watchDogsSub:BehaviorSubject<{[uid:string]:WatchDog}>;
  watchDogs$:Observable<{[uid:string]:WatchDog}>;

  constructor() {

    this.watchDogsSub = new BehaviorSubject({});
    this.watchDogs$ = this.watchDogsSub.asObservable();
    this.loadWatchDogs();
  }

  saveData(){
    let dogs =  _.cloneDeep(this.watchDogs);
    console.log(dogs);
    for(let str in dogs){
      delete dogs[str].market;
      dogs[str].uid = str;
    }
    localStorage.setItem('watch-dogs', JSON.stringify(dogs));
  }

  loadWatchDogs():void{
    let str = localStorage.getItem('watch-dogs');
    if(str)

      this.watchDogs = JSON.parse(str);
    else this.watchDogs ={};
    this.watchDogsSub.next(this.watchDogs);
  }

  addDog(dog:WatchDog){
    if(!this.watchDogs[dog.uid]) {
      this.watchDogs[dog.uid] = dog;
      this.watchDogsSub.next(this.watchDogs);
      this.saveData();
    }
    else throw new Error(' Exists ' + dog.uid);
   // this.watchDogs.push(dog)
  }


  createUid(symbol:string):string{
    let i = 0;
    while(this.watchDogs[symbol +'_'+ (++i)]);
    return symbol +'_' + i;
  }


  deleteDog(dog: WatchDog) {

    delete this.watchDogs[dog.uid];
    this.saveData();
    this.watchDogsSub.next(this.watchDogs);

  }
}
