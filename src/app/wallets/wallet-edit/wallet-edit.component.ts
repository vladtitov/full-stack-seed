import {Component, Inject, OnInit} from '@angular/core';
import {MD_DIALOG_DATA, MdDialogRef, MdSnackBar} from '@angular/material';
import {WalletModel} from '../../models/app-models';
import {generateAddressFromPrivateKey} from '../../shared/generate-address';
import {WalletsAllService} from '../wallets-all.service';
import {address} from 'bitcoinjs-lib';

@Component({
  selector: 'app-wallet-edit',
  templateUrl: './wallet-edit.component.html',
  styleUrls: ['./wallet-edit.component.css']
})
export class WalletEditComponent implements OnInit {

  wallet:WalletModel;

  constructor(
    public dialogRef: MdDialogRef<WalletEditComponent>,
    @Inject(MD_DIALOG_DATA) public data: WalletModel,
    public snackBar: MdSnackBar,
    private allWalletsService:WalletsAllService
  ) {
   this.wallet = data;

  }

  ngOnInit() {

  }

  onPrivateKeyBlur(evt){
    let pk = this.wallet.privateKey;
    let address:string;
    try{
     address = generateAddressFromPrivateKey(pk, this.wallet.network);


    }catch(e){
      console.error(e);
      console.log(pk);
      this.snackBar.open(' Error ' + e.toString(),'Message',{ duration: 3000});
    }


    if(address){
      let id = this.wallet.symbol+'_'+address
      let exists = this.allWalletsService.getMyWalletById(id);

      if(!exists){
        this.wallet.address = address;
        this.wallet.id = this.wallet.symbol+'_'+address;
        this.allWalletsService.saveWalletes();
        this.allWalletsService.dispattchWalletChanges();

      }else{
        this.snackBar.open('This wallet exists ','Error',{ duration: 3000});
      }


    }

  }

  onClose(){
    this.dialogRef.close();
  }


  saveWallet(evt){
    this.dialogRef.close('saveMe');

  }
}
