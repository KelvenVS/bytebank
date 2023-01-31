import { Component, Input, NgModule } from '@angular/core';

@Component({
  selector: 'app-extract',
  templateUrl: './extract.component.html',
  styleUrls: ['./extract.component.scss']
})
export class ExtractComponent {
  @Input() transferDatas: any[];

  constructor () {}
}
