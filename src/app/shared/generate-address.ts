declare var require: any;
import * as bitcoin from 'bitcoinjs-lib';
import {getNetwork} from '../wallets/wallet-core/networks-definitions';
var etherutils = require('ethereumjs-util');
var ethereumtx = require('ethereumjs-tx');
import {Buffer} from 'buffer';

declare var web3:any;

/**
 * Created by Vlad on 7/9/2017.
 */


export function generateAddressFromPrivateKey(privateKey:string, network:string ){

  switch(network){
    case 'ETH':
      console.log('ETH address')
      return etherutils.addHexPrefix(etherutils.privateToAddress(new Buffer(privateKey, 'hex')).toString('hex'));
    default:
      console.log('BTC  address')
      return bitcoin.ECPair.fromWIF(privateKey, <any>getNetwork(network).mainNet).getAddress()
  }

}

 // private signature:Buffer;
  //private url:string = 'https://api.etherscan.io/api?module=proxy&action=eth_sendRawTransaction&hex={{hex}}';

  function createSignature(privateKey:string):void{
    this.signature = new Buffer(privateKey, 'hex');
  }

  function setNonce(nonce:number):void{
    this.nonce = nonce;
  }

 export function hexTransaction(addressTo:string, amount:string):string{


 let gasPrice:number;
 let gasLimit:number;
 let nonce:number;


   let raw =  mapTransaction(web3, addressTo, amount, nonce, gasPrice, gasLimit);

    let transaction  =  new ethereumtx.tx(raw);

    transaction.sign(this.signature);

    let hex = transaction.serialize().toString('hex');

    let url =  this.url.replace('{{hex}}', hex);

    return hex;


  }

  function mapTransaction(web3:any, addressTo:string, amount:string, nonce:number, gasPrice:number, gasLimit:number):any{

    return {
      nonce: web3.toHex(nonce),
      gasPrice: web3.toHex(gasPrice),
      gasLimit: web3.toHex(gasLimit),
      to: addressTo,
      value: web3.toHex(amount),
      //data: '',
    };

  }



