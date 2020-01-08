import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Car } from 'src/core/model';

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.css']
})
export class CarListComponent implements OnInit {

  @Input() carList: Car[] = [];
  @Input() carSendTo: string;

  @Output() switchedCar = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  switchCar(SWITCH_TO_LIST, INDEX) {
    debugger
    let data = {
      "switchToCar": SWITCH_TO_LIST,
      "index": INDEX
    }
    this.switchedCar.emit(data);
  }

}
