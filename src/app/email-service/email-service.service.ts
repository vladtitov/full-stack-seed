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
    let tosave:WatchDog[] =[] ;//=  _.cloneDeep(this.watchDogs);



   // console.log(dogs);
    for(let str in this.watchDogs){
      let item =  this.watchDogs[str];
      tosave.push({
        uid:str,
        label:item.label,
        description:item.description,
        symbol:item.symbol
      })
    }
    localStorage.setItem('watch-dogs', JSON.stringify(tosave));
  }

  loadWatchDogs():void{
    let str = localStorage.getItem('watch-dogs');
    this.watchDogs ={};
    if(str)
      try{
        let saved = JSON.parse(str);
        this.watchDogs = <any>_.keyBy(saved,'uid');
      }catch(e){
      console.error(e);
      }
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

  saveDog(currentDog: WatchDog) {
    let uid = currentDog.uid;
    this.watchDogs[uid] = currentDog;
    this.saveData();

  }
}
