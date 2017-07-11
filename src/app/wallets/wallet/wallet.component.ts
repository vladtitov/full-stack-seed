import {Component, Input, OnInit} from '@angular/core';
import {WalletModel} from '../../models/app-models';
import {WalletService} from './wallet.service';

@Component({
  selector: 'app-wallet',
  templateUrl: './wallet.component.html',
  styleUrls: ['./wallet.component.css'],
  providers:[WalletService]
})
export class WalletComponent implements OnInit {


  @Input() wallet:WalletModel;
  constructor( private service:WalletService) {


  }

  ngOnInit() {
  }

}
