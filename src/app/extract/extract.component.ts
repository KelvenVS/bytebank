import { Transferencia } from './../../../models/transfer.model';
import { TransferService } from './../services/transfer.service';
import { Component, Input, NgModule, OnInit } from '@angular/core';

@Component({
  selector: 'app-extract',
  templateUrl: './extract.component.html',
  styleUrls: ['./extract.component.scss']
})
export class ExtractComponent implements OnInit {
  transferList: any[];

  constructor (private service: TransferService) {}

  ngOnInit(){
    // this.transferList = this.service.transfer;
    this.service.allTransfer().subscribe((transfer: Transferencia[]) => {
      console.table(transfer);
      this.transferList = transfer;
    });
  }
}
