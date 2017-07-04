/**
 * Created by Vlad on 7/1/2017.
 */
import {Application, Response, Request} from "express";

import * as request from 'request';


let all_market:any ={
  timestamp:0,
  payload:'[]'
}


function updateAllMarket(){
  let url = 'https://api.coinmarketcap.com/v1/ticker/';
  console.log(url)
  
  request.get(url,function (err,r,body){

    if(err){
     console.error(' error from https://api.coinmarketcap.com/v1/ticker/ ', err);
     //console.log(body);
    // console.log(body);
    }else{
     // console.log(body)
      all_market.payload = body;
    }

  })
}

export function initShapeSift(app: Application): void {


  setInterval(updateAllMarket, 600000);

  updateAllMarket();

  app.route("/api/exchange/shapeshift/all-market").get(function (req: Request, res: Response) {

    res.end(all_market.payload);

  });



  app.route("/api/exchange/shapeshift/getcoins").get(function (req: Request, res: Response) {

    request.get('https://shapeshift.io/getcoins',function (err,r,body){
      res.end(body);
    })
  });



  app.route("/api/exchange/shapeshift/rate/:from_to").get(function (req: Request, res: Response) {

    request.get('https://shapeshift.io/rate/'+req.params.from_to,function (err,r,body){
      res.end(body);
    })
  });


  app.route("/api/exchange/shapeshift/marketinfo/:from_to/").get(function (req: Request, res: Response) {

    request.get('https://shapeshift.io/marketinfo/'+req.params.from_to,function (err,r,body){
      res.end(body);
    })
  });

  app.route("/api/exchange/shapeshift/shift").post(function (req: Request, res: Response) {

    var options = {
      uri: 'https://shapeshift.io/shift/',
      method: 'POST',
      json:req.body
    };

    request(options, function (err, response, body) {
      if(err){
        res.json({error:err})
      }else{
        res.end(body)
      }

    });

  });

  app.route("/api/exchange/shapeshift/validateAddress/:address/:coin").get(function (req: Request, res: Response) {

    request.get('https://shapeshift.io/validateAddress/'+req.params.address+'/'+req.params.coin,function (err,r,body){
      res.end(body);
    })

  });

}
