import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TransferService {
  private listTransfer : any[];

constructor() {
  this.listTransfer = [];
 }

  get transfer() {
  return this.listTransfer;
 }

 addBank(transfer: any) {
    this.hidratar(transfer);
    this.listTransfer.push(transfer);
 }

 private hidratar(transfer: any){
  transfer.date = new Date();
 }

}
