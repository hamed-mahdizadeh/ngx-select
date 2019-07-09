import { Component } from '@angular/core';
import { ISelectItem } from './iselect-item';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ngx-select';
  testSelectData: ISelectItem[] = [{
    id: 0,
    text: 'گزینه 1',
    value: { objId: 10, text: 'item1_value' }
  },
  {
    id: 1,
    text: 'گزینه 2',
    value: { objId: 20, text: 'item2_value' }
  },
  {
    id: 2,
    text: 'گزینه 3',
    value: { objId: 30, text: 'item3_value' }
  }];
  constructor() {

  }
}
