import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'bytebank';
  destiny: number;
  value: number;

  transferPage($event){
    console.log($event);
    this.destiny = $event.destiny;
    this.value = $event.value;
  }
}
