import { Component } from '@angular/core';

@Component({
  selector: 'app-new-transfer',
  templateUrl: './new-transfer.component.html',
  styleUrls: ['./new-transfer.component.scss'],
})
export class newTransferComponent {

  value : number;
  destiny : number;

  transfer() {
    console.log('Solicitado nova transferencia');
    console.log('Valor', this.value);
    console.log('Destino', this.destiny);

  }
}
