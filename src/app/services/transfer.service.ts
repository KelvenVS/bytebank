import { Transferencia } from './../../../models/transfer.model';
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class TransferService {
  private listTransfer: any[];
  private url = 'http://localhost:3000/transferencias';

constructor(private httpClient: HttpClient) {
  this.listTransfer = [];
 }

  get transfer() {
  return this.listTransfer;
 }

 allTransfer(): Observable<Transferencia[]>{
  return this.httpClient.get<Transferencia[]>(this.url);
 }

 addBank(transfer: Transferencia): Observable<Transferencia> {
    this.hidratar(transfer);
    // this.listTransfer.push(transfer);
    return this.httpClient.post<Transferencia>(this.url, transfer );
 }

 private hidratar(transfer: any){
  transfer.date = new Date();
 }

}
