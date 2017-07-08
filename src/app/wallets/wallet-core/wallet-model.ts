import {ICoinNetwork} from './networks-definitions';
import {GeneratorBlockchain} from './generator-blockchain';
/**
 * Created by Vlad on 7/6/2017.
 */
export class WalletModel{
  privateKey:string;
  publicAddress:string;
  symbol:string;
  index:number;
  amountSmall:number;
  amountString:string;
  amountLarge:number;

 // generator:GeneratorBlockchain;

  //constructor(private name:string, hdIndex:number,  network:ICoinNetwork){
  //  this.generator = new GeneratorBlockchain(name, hdIndex, network);
 // }


}