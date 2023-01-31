import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'bytebank';
  transferDatas: any[] = [];

  transferPage($event){
    console.log($event);
    const transfer = {...$event,date: new Date()}
    this.transferDatas.push(transfer);
  }
}
