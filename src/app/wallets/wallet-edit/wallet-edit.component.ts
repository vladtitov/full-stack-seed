import {Component, Inject, OnInit} from '@angular/core';
import {MD_DIALOG_DATA, MdDialogRef} from '@angular/material';
import {WalletModel} from '../../models/app-models';
import {generateAddressFromPrivateKey} from '../../shared/generate-address';

@Component({
  selector: 'app-wallet-edit',
  templateUrl: './wallet-edit.component.html',
  styleUrls: ['./wallet-edit.component.css']
})
export class WalletEditComponent implements OnInit {

  wallet:WalletModel;

  constructor( public dialogRef: MdDialogRef<WalletEditComponent>, @Inject(MD_DIALOG_DATA) public data: WalletModel) {
   this.wallet = data;

  }

  ngOnInit() {
  }

  onPrivateKeyBlur(evt){
    this.wallet.address = generateAddressFromPrivateKey(this.wallet.privateKey, this.wallet.network);
  }

  onClose(){
    this.dialogRef.close();
  }


  saveWallet(evt){
    this.dialogRef.close('saveMe');

  }
}
