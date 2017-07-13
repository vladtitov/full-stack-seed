
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


export class WalletModel{
 // config:CoinConfig;
  selected:boolean;
  network:any;
  displayName:string;
  hdindex:number;
  privateKey:string;
  balance:number;
  balanceDisplay:number;
  label:string;
  symbol:string;
  address:string;
  sort:number;
  createdAt:string;
  updateAt:string;
  index:number;
  amountSmall:number;
  amountString:string;
  amountLarge:number;

}