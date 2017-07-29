import {AfterContentInit, AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {VOExchangeData, WatchDog} from '../../models/SS-models';
import {AllCoinsService} from '../../ss-browse/all-coins.service';
import {EmailServiceService} from '../email-service.service';
import {MdDialog, MdSnackBar} from '@angular/material';
import * as _ from 'lodash';
import {runDogScript} from './script-analytics';



@Component({
  selector: 'app-run-watchdogs',
  templateUrl: './run-watchdogs.component.html',
  styleUrls: ['./run-watchdogs.component.css']
})
export class RunWatchdogsComponent implements OnInit, AfterViewInit {

  coinMarket:VOExchangeData;
  markets:{[symbol:string]:VOExchangeData};
  coinsAvailable:VOExchangeData[];
  // selectedCoins:{[symbol:string]:VOExchangeData};
  watchDogs:WatchDog[];

  currentDog:WatchDog;

  dogs:{[uid:string]:WatchDog};

  sortCriteria:string = 'rank';
  asc_desc='asc';

  isSource:boolean = false;


  isRunning:boolean;

  seconds:number;
  interval:any;
  start_stop:string= "Start Refresh Timer";

  variablesAvailable:{label:string, index:string, value:number}[] =[
    {label:'usd_percent_change_1h',index:'usd_percent_change_1h',value:0},
    {label:'usd_percent_change_24h',index:'usd_percent_change_24h', value:0},
    {label:'usd_percent_change_7d',index:'usd_percent_change_7d',value:0},
    {label:'prev_usd_percent_change_1h',index:'prev_usd_percent_change_1h',value:0},
    {label:'prev_usd_percent_change_24h',index:'prev_usd_percent_change_24h',value:0},
    {label:'prev_usd_percent_change_7d',index:'prev_usd_percent_change_7d',value:0}
  ]

  @ViewChild('scriptContent') scriptContent;

  constructor(
    private coinsService:AllCoinsService,
    private emailService:EmailServiceService,
    private dialog:MdDialog,
    private snakBar:MdSnackBar
  ) { }

  ngAfterViewInit() {
   // console.log();
  }


  runScript(){
    let script = this.scriptContent.nativeElement.innerText.toString();
    this.innerHTML = this.scriptContent.nativeElement.innerHTML;

    console.log(script);



    let dog ={
      market:{
        percent_change_1h:3,
        percent_change_24h:20,
        percent_change_7d:30
      }
    }

    let result =  runDogScript(dog, script);
    console.log(result);



  }

  insertTextAtCursor(text) {
    var sel, range, html;

    console.log(window.getSelection);
    if (window.getSelection) {

      sel = window.getSelection();
      if (sel.getRangeAt && sel.rangeCount) {
        range = sel.getRangeAt(0);
        range.deleteContents();
        range.insertNode( document.createTextNode(text) );
      }
    }/* else if (document.selection && document.selection.createRange) {
      document.selection.createRange().text = text;
    }*/
  }


  private range;
  private scriptValue:string;
  private innerHTML:string;

  onScriptContentBlur(content){
    var sel, range, html;
    this.innerHTML = this.scriptContent.nativeElement.innerHTML;

    //this.scriptValue.replace("\t","");
    //this.scriptContent.nativeElement.innerHTML = this.scriptValue;

    //let scriptValue = this.scriptContent.nativeElement.innerHTML;

    if (window.getSelection) {

      sel = window.getSelection();
      if (sel.getRangeAt && sel.rangeCount) {
        range = sel.getRangeAt(0);
        this.range = range;
        //range.deleteContents();
       // range.insertNode( document.createTextNode("\t") );
      }
    }

   // console.log(content, this.range);
   // console.log(this.scriptValue);
   // console.log(this.scriptValue.indexOf("\t"));
  }

  onScriptContentChange(content){
    console.log(content);
  }

  currentTrigger:string;

  insertTrigget(selector){

    if(this.range){

      let action =this.currentTrigger;
      if(action.indexOf('send') !==0) action =' if ('+action+' > 0) {     }';
      else action = 'send_notification ( "Text of notification goes here" )';
      this.range.insertNode( document.createTextNode(action) );
    }
  }


  setCurrentScript(script:string){

    console.log('setCurrentScript  ' + script);
    if(this.scriptContent)this.scriptContent.nativeElement.innerHTML = script;
    else setTimeout(()=>this.setCurrentScript(script),2000);
  }
  getCurrentScript():string{
   // console.log(this.scriptContent);
    let text = this.scriptContent.nativeElement.innerText.toString();
    //console.log(text)
    return text;

  }
  viewSorse(){
    this.isSource = !this.isSource;

  }

  runAnalytics(){

    let ar:WatchDog[] = this.watchDogs;
   let results:string[]=[];


    ar.forEach(function (item) {
        let script = item.scriptText;
      if(script){
        let res =  runDogScript(item, script);
        if(res.length)results = results.concat(res);
      }

    })


  }

  setCurrentDog(dog:WatchDog){
    let script = (dog && dog.scriptText)?dog.scriptText:'';
    this.setCurrentScript(script);
    this.currentDog = dog;
  }
  onEditDog(dog){
    console.log(dog);
    this.setCurrentDog(dog);
  }

  closeDog(){
    this.setCurrentDog(null);
  }

  saveDog(){
    if(this.currentDog) {
      let text = this.getCurrentScript();

      this.currentDog.scriptText = text;
      console.log(text);

      this.emailService.saveDog(this.currentDog)
      this.snakBar.open(this.currentDog.label + " Saved!",'',{duration:3000});
    }

  }



  ngOnInit() {
    this.coinsService.selectedCoins$.subscribe(res=>this.setMarket(res));
    this.emailService.watchDogs$.subscribe(res => this.setDogs(res));
  }

  setMarket(markets){
    this.markets = markets;
    this.mergeData();
  }


  setDogs(dogs:{[uid:string]:WatchDog}){
    this.dogs = dogs;
    this.watchDogs  = _.orderBy(_.values(dogs) , this.sortCriteria, this.asc_desc);
    this.mergeData();
  }


  startRefreshTimer(){
    if(this.start_stop === 'Start Refresh Timer'){
      this.start_stop = 'Stop Refresh Timer';
      this.isRunning = true;
      this.seconds = 30;
      this.interval = setInterval(()=>{this.seconds++},1000);
      this.coinsService.start();
    }else{
      this.start_stop = 'Start Refresh Timer';
      this.seconds =0;
      clearInterval(this.interval);
      this.isRunning = false;
      this.coinsService.stop();
    }

  }

  private errors:string[] = [];
  saveError(error:string){
    this.errors.push(error);
  }

  mergeData(){


    if(this.markets && this.watchDogs){
      let markets = this.markets;


      let time = new Date().toLocaleTimeString();
      let errors:string[] =[]

      let ar:WatchDog[] = this.watchDogs;
      ar.forEach(function (item) {
        let market = markets[item.symbol];
        if(market){
          if(!item.marketHistory)item.marketHistory =[];
          else  item.marketHistory.push(item.market);
          if(item.marketHistory.length>100)item.marketHistory.shift();



          if(!item.price_usd_history) item.price_usd_history = [];
          else item.price_usd_history.push({
                time:item.time,
                value:item.price_usd
              });
          if(item.price_usd_history.length>100) item.price_usd_history.shift();

          item.time = time;
          item.market = market;
          item.price_usd = market.price_usd;
          item.rank = market.rank;
          item.percent_change_1h = market.percent_change_1h;
          item.percent_change_24h = market.percent_change_24h;
          item.percent_change_7d = market.percent_change_7d;

        }else errors.push('Error:12345 No Marlet for '+item.symbol);

      })

      this.seconds = 30;


      setTimeout(()=>this.runAnalytics(), 500);

      this.setCurrentDog(_.first(ar));


      //this.watchDogs  = _.orderBy(ar, this.sortCriteria, this.asc_desc);
    }
  }

  onClickHeader(criteria:string):void{
    if(this.sortCriteria === criteria){
      if(this.asc_desc === 'asc') this.asc_desc ='desc';
      else  this.asc_desc='asc';
    }else this.asc_desc = 'asc';
    //console.log(this.asc_desc);
    this.sortCriteria = criteria;
    this.watchDogs  = _.orderBy(this.watchDogs , this.sortCriteria, this.asc_desc);
  }


}
