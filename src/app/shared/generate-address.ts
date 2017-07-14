declare var require: any;
import * as bitcoin from 'bitcoinjs-lib';
import {getNetwork} from '../wallets/wallet-core/networks-definitions';
var etherutils = require('ethereumjs-util');
import {Buffer} from 'buffer';
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