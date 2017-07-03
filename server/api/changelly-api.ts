/**
 * Created by Vlad on 7/1/2017.
 */
import {Application, Response, Request} from "express";
var Changelly = require('../libs/changelly');

var changelly = new Changelly(
  '23c7a086c98b4f07963208522a42cda0',
  'c1fe7209b388e0792883a1b3f0c3a6a27d9bb0476f39ca6d8a4329f97084e7dc'
);


export function initChangelly(app: Application): void {
  app.route("/api/exchange/changelly/getCurrencies").get(function (req: Request, res: Response) {

    changelly.getCurrencies(function (err, data) {
      if (err) {
        res.json({error: err});
      } else {
        res.json(data.result || data);

      }
    });
  });

  app.route("/api/exchange/changelly/getMinAmount/:from_to").get(function (req: Request, res: Response) {

console.log(req.params.from_to);

    let ar = req.params.from_to.split("_");

    changelly.getMinAmount(ar[0], ar[1], function (err, data) {
      if (err) {
        res.json({error: err});
      } else {
        res.json(data.result || data);

      }
    });
  });


  app.route("/api/exchange/changelly/getExchangeAmount/:from_to/:amount").get(function (req: Request, res: Response) {


    let ar = req.params.from_to.split('_');
    let amount = +req.params.amount;

    changelly.getExchangeAmount(ar[0], ar[1], amount, function (err, data) {
      if (err) {
        res.json({error: err});
      } else {
        res.json(data.result || data);

      }
    });
  });

  app.route("/api/exchange/changelly/generateAddress/:from_to/:address").get(function (req: Request, res: Response) {


    let ar = req.params.from_to.split('_');
    let address = +req.params.address;

    changelly.generateAddress(ar[0], ar[1], address, function (err, data) {
      if (err) {
        res.json({error: err});
      } else {
        res.json(data.result || data);

      }
    });
  });

  app.route("/api/exchange/changelly/getTransactions/:currency/:address").get(function (req: Request, res: Response) {


    let currency = req.params.currency;
    let address = +req.params.address;

    changelly.getTransactions(currency, address, function (err, data) {
      if (err) {
        res.json({error: err});
      } else {
        res.json(data.result || data);

      }
    });
  });

}







