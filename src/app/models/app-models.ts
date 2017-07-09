/**
 * Created by Vlad on 7/8/2017.
 */
export interface CoinConfig{
  privateKey:string;
  symbol:string;
  active:string;
  icon:string;
  contractAddress:string;
  parent:string;
  displayName:string;
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
  config:CoinConfig;
  symbol:string;
  sort:number;
  createdAt:string;
  updateAt:string;
  publicAddress:string;
  index:number;
  amountSmall:number;
  amountString:string;
  amountLarge:number;
}