import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-new-transfer',
  templateUrl: './new-transfer.component.html',
  styleUrls: ['./new-transfer.component.scss'],
})
export class newTransferComponent {

  @Output() whenTransferring = new EventEmitter<any>();

  value : number;
  destiny : number;

  transfer() {
    console.log('Solicitado nova transferencia');
    const valueEmit = {value : this.value , destiny : this.destiny}
   this.whenTransferring.emit(valueEmit)
   this.cleanField();
  }

  cleanField() {
    this.value = 0;
    this.destiny = 0;
  }

}
