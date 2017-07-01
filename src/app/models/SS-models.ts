/**
 * Created by Vlad on 6/29/2017.
 */
export class VOExchangeData{
  id:string;
  name: string;
  symbol:string;
  rank: number;
  age:number;
  price_usd: number;
  price_btc: number;
  volume_usd_24h: number;
  market_cap_usd:number;
  available_supply:number;
  total_supply: number;
  percent_change_1h:number;
  percent_change_24h:number;
  percent_change_7d:number;
  last_updated: number;
  last_updated_date:string;
  selected:boolean;
}