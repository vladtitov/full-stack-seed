import {Component, Input, OnInit} from '@angular/core';
import {WalletModel} from '../../models/app-models';

@Component({
  selector: 'app-wallet',
  templateUrl: './wallet.component.html',
  styleUrls: ['./wallet.component.css']
})
export class WalletComponent implements OnInit {


  @Input() wallet:WalletModel;
  constructor() { }

  ngOnInit() {
  }

}
