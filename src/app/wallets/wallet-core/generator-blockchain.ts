// declare var thirdparty:any;
import {ECPair} from "bitcoinjs-lib";
declare var require: any;
import * as bitcoin from 'bitcoinjs-lib';
import * as cryptojs from 'crypto-js';
import {Buffer} from 'buffer';
var etherutils = require('ethereumjs-util');


export class GeneratorBlockchain {

    masterNode: any;
    seedHex: string;
    isETH: boolean;
    network: any;

    constructor(private name: string, private coinIndex: number, private networkConfig: any) {
        this.network = networkConfig.mainNet;
        console.log(etherutils);


        if (coinIndex === 60 || coinIndex == 61 || coinIndex === (137 + 37173)) this.isETH = true;
    }

    private getMasterNode() {
        // if (!this.masterNode) this.masterNode = thirdparty.bitcoin.HDNode.fromSeedHex(Utils2.getSeedHex(), this.networkConfig.mainNet);
        return this.masterNode;
    }

    getXpubAddress(): string {
        return this.getMasterNode().deriveHardened(44).deriveHardened(this.coinIndex).deriveHardened(0).neutered().toBase58();
    }

    generateEtherAddressFromPrivateKey(privateKey: string): string {
        return etherutils.addHexPrefix(etherutils.privateToAddress(new Buffer(privateKey, 'hex')).toString('hex'));
    }


    generateEthereumNodeFromPrivateKey(privateKey: string): any {
        var privateKeyToSweep = new Buffer(privateKey, 'hex');
        console.log(privateKeyToSweep);
        etherutils.privateToAddress(privateKeyToSweep).toString('hex');
        return privateKeyToSweep;

    }

    generateEthereumAddress(address:string, nonce:number = 0):string{

        let add =   etherutils.generateAddress('2d1798fda0397a749b8aec9e9477082027f8de65', nonce).toString('hex');

        return add;//.toString('hex');
    }

    generateBitcoinAddressFromPrivateKey(privateKey:string, network?:any):string{
      return  bitcoin.ECPair.fromWIF(privateKey, network || this.network).getAddress();
    }

    restorePairFromPrivateKey(privateKey: string): ECPair{
        return bitcoin.ECPair.fromWIF(privateKey, this.network);
    }

    private generateNodeReceive(index: number): any {
        return this.getMasterNode().deriveHardened(44).deriveHardened(this.coinIndex).deriveHardened(0).derive(0).derive(index);
    }

    private generateNodeChage(index: number): any {
        return this.getMasterNode().deriveHardened(44).deriveHardened(this.coinIndex).deriveHardened(0).derive(1).derive(index);
    }

    private getNodePrivateKey(node: any): string {
        return node.keyPair.d.toBuffer(32).toString('hex');
    }

    generatePrivateKeyReceive(index: number): string {
        let node = this.generateNodeReceive(index);
        return this.getNodePrivateKey(node);
    }

    generatePrivateKeyChange(index: number): string {
        let node = this.generateNodeChage(index);
        return this.getNodePrivateKey(node);
    }

    generateAddressReceive(index: number): string {
        let node = this.generateNodeReceive(index);
        return this.isETH ? GeneratorBlockchain.getEtherAddress(node) : node.keyPair.getAddress();
    }

    generateAddressChange(index: number): string {
        let node = this.generateNodeChage(index);
        return this.isETH ? GeneratorBlockchain.getEtherAddress(node) : node.keyPair.getAddress();
    }


    static getEtherAddress(node: any): string {

        var ethKeyPair = node.keyPair;      //        console.log("[ethereum] keyPair :: " + ethKeyPair.d + " :: " + ethKeyPair.__Q);
        var prevCompressed = ethKeyPair.compressed;
        ethKeyPair.compressed = false;
        var pubKey = ethKeyPair.getPublicKeyBuffer();
        //  console.log('ethKeyPairPublicKey     ',ethKeyPairPublicKey);
        var pubKeyHexEth = pubKey.toString('hex').slice(2);
        //  console.log('pubKeyHexEth    ',pubKeyHexEth);
        var pubKeyWordArrayEth = cryptojs.enc.Hex.parse(pubKeyHexEth);
        var hashEth = (<any>cryptojs).SHA3(pubKeyWordArrayEth, {outputLength: 256});
        var address = hashEth.toString(cryptojs.enc.Hex).slice(24);
        ethKeyPair.compressed = prevCompressed;
        return "0x" + address;
    }

}
