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

  constructor() {
    console.log('Car List Constructor Called');
  }

  ngOnChanges() {
    if (this.carSendTo == 'stock') {
      console.log('Production Car List OnChanges Called');
    } else if (this.carSendTo == 'sold') {
      console.log('Stock Car List OnChanges Called');
    } else if (this.carSendTo == 'production') {
      console.log('Sold Car List OnChanges Called');
    }
  }

  ngOnInit() {
    if (this.carSendTo == 'stock') {
      console.log('Production Car List OnInit Called');
    } else if (this.carSendTo == 'sold') {
      console.log('Stock Car List OnInit Called');
    } else if (this.carSendTo == 'production') {
      console.log('Sold Car List OnInit Called');
    }
  }

  switchCar(SWITCH_TO_LIST, INDEX) {
    let data = {
      "switchToCar": SWITCH_TO_LIST,
      "index": INDEX
    }
    this.switchedCar.emit(data);
  }

  ngOnDestroy() {
    if (this.carSendTo == 'stock') {
      console.log('Production Car List OnDestroy Called');
    } else if (this.carSendTo == 'sold') {
      console.log('Stock Car List OnDestroy Called');
    } else if (this.carSendTo == 'production') {
      console.log('Sold Car List OnDestroy Called');
    }
  }

}
