import {VOExchangeData, WatchDog} from '../../models/SS-models';
import * as _ from 'lodash';

export function runDogScript(dog:any, script:string):string[]{

    let results:string[] =[];
    
    let send_notification = function (text) {
      results.push(text);
    }

    let prev_usd_percent_change_1h:number, prev_usd_percent_change_24h:number, prev_usd_percent_change_7d:number,
    usd_percent_change_1h:number, usd_percent_change_24h:number, usd_percent_change_7d:number;

    let market:VOExchangeData = dog.market;
    let history:VOExchangeData[] = dog.marketHistory;
    let prev_market:VOExchangeData = _.last(history);

    if(prev_market){
      prev_usd_percent_change_1h = prev_market.percent_change_1h;
      prev_usd_percent_change_24h = prev_market.percent_change_24h;
      prev_usd_percent_change_7d = prev_market.percent_change_7d;
    }


    usd_percent_change_1h = market.percent_change_1h;
    usd_percent_change_24h = market.percent_change_24h;
    usd_percent_change_7d = market.percent_change_7d;


    let counter = 34;
    console.log(script);

   /*script ='  console.log(counter); '+

     ' if (usd_percent_change_1h > 0) { send_notification ( "Text of 1" )}; ' +
     ' if (usd_percent_change_1h > 4) {' +
     ' send_notification ( "Text of 2" )' +
     ' }; ' +
     ' if (usd_percent_change_1h > 1) {' +
     ' send_notification ( "Text of 3" )' +
     ' } ;' +
     'send_notification ( "Text of 5" ) ';*/



    eval(script);
    console.log(results, counter);
    return results;
}
