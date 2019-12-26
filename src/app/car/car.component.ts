import { Component, OnInit } from '@angular/core';
import { Car } from 'src/core/model';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {

  isCarVisible: boolean = false;
  carList: Car[] = [];

  constructor() { }

  ngOnInit() {
  }

  addCar(BRAND, color, owner) {
    const car: Car = new Car();
    car.brand = BRAND;
    car.owner = owner;
    car.noOfCylinder = 4;
    car.color = color;
    if (BRAND == 'Honda') {
      car.name = 'City';
      car.fuelType = 'Petrol';
      car.engineCubicCapacity = 1500;
    } else if (BRAND == 'MS') {
      car.name = 'Ciaz';
      car.fuelType = 'Petrol';
      car.engineCubicCapacity = 1200;
    } else if (BRAND == 'Hyundai') {
      car.name = 'Sonata Elantra';
      car.fuelType = 'Petrol';
      car.engineCubicCapacity = 1600;
    } else if (BRAND == 'Ford') {
      car.name = 'Endeavor';
      car.fuelType = 'Petrol';
      car.engineCubicCapacity = 2200;
    } else if (BRAND == 'Jeep') {
      car.name = 'Compass';
      car.fuelType = 'Petrol';
      car.engineCubicCapacity = 1400;
    } else if (BRAND == 'BMW') {
      car.name = 'M5';
      car.fuelType = 'Diesel';
      car.engineCubicCapacity = 4400;
    } else if (BRAND == 'Tata') {
      car.name = 'Harrier';
      car.fuelType = 'Diesel';
      car.engineCubicCapacity = 2000;
    }

    this.carList.push(car);
  }

}
