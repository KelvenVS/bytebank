
import { Transferencia } from './../../../models/transfer.model';
import { TransferService } from './../services/transfer.service';
import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from'@angular/router';

@Component({
  selector: 'app-new-transfer',
  templateUrl: './new-transfer.component.html',
  styleUrls: ['./new-transfer.component.scss'],
})
export class newTransferComponent {

  @Output() whenTransferring = new EventEmitter<any>();

  value : number;
  destiny : number;

  constructor(private service: TransferService, private router: Router) {}

  transfer() {
    console.log('Solicitado nova transferencia');
    const valueEmit: Transferencia = {value : this.value , destiny : this.destiny}
  //  this.whenTransferring.emit(valueEmit);

    this.service.addBank(valueEmit).subscribe(result => {
      console.log(result);
      this.cleanField();
      this.router.navigate(['extract']);
    },
    (error) => console.log(error)
    );
  }

  cleanField() {
    this.value = 0;
    this.destiny = 0;
  }

}
