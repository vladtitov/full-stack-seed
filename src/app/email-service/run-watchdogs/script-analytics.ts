import {VOExchangeData, WatchDog} from '../../models/SS-models';
import * as _ from 'lodash';

export function runDogScript(dog:any, script:string):string[]{

    let results:string[] =[];
    
    let send_notification = function (text) {
      results.push(text);
    }

    let prev_percent_change_1h:number, prev_percent_change_24h:number, prev_percent_change_7d:number,
    percent_change_1h:number, percent_change_24h:number, percent_change_7d:number;

    let market:VOExchangeData = dog.market;
    let history:VOExchangeData[] = dog.marketHistory;
    let prev_market:VOExchangeData = _.last(history);

    if(prev_market){
      prev_percent_change_1h = prev_market.percent_change_1h;
      prev_percent_change_24h = prev_market.percent_change_24h;
      prev_percent_change_7d = prev_market.percent_change_7d;
    }

    percent_change_1h = market.percent_change_1h;
    percent_change_24h = market.percent_change_24h;
    percent_change_7d = market.percent_change_7d;



    eval(script);
    return results;
}
