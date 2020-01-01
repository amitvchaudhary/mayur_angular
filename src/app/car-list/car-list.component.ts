import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Car } from 'src/core/model';

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.css']
})
export class CarListComponent implements OnInit {

  @Input() carList: Car[] = [];

  @Output() sendCar = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  passCar(){
    this.sendCar.emit(null)
  }

}
