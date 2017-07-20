
import {VOExchangeData} from './SS-models';
/**
 * Created by Vlad on 7/8/2017.
 */
export interface CoinConfig{
  symbol:string;
  network:any;
  active:string;
  icon:string;
  contractAddress:string;
  generator:string;
  displayName:string;
  mainNet:any;
  parent:string;
  urlBalance:string;
  urlSendTransaction:string;
  urlNonce:string;
  shapeshift:any;
  transactionType:string;
}



export class UTXO{
  address:string;
  balance:number;
  vouts:number;
  txid:string;
}

export interface UserProfile{
  ver:number;
  timestamp:number;
  date:string;
  filename:string;
  coins:CoinConfig[]
}

export class CoinsAvailable{
  coins:CoinConfig[]
  tokens:CoinConfig[]
}


export class VOBalance{
  address:string;
  symbol:string;
  balance:string;
}

export class Analitycs{

  price_usd_history:string[];
  price_btc_history:string[];
  price_usd_historyDisplay:string;

}

export class WalletModel{
 // config:CoinConfig;
  id:string;
  selected:boolean;
  network:any;
  displayName:string;
  hdindex:number;
  market:VOExchangeData;
  analitics:Analitycs;
  privateKey:string;
  balance:string;
  balanceDisplay:number;
  usd:string;
  price_usd:number;


  label:string;
  symbol:string;
  address:string;
  sort:number;
  createdAt:string;
  updatedAt:string;

}