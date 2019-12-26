import { Component, OnInit } from '@angular/core';
import { Car } from 'src/core/model';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {

  carList: Car[] = [];

  constructor() { }

  ngOnInit() {
  }

  addCar(BRAND) {
    const car: Car = new Car();
    if(BRAND == 'Honda') {
      car.name = 'City';
      car.brand = BRAND;
      car.noOfCylinder = 4;
      car.fuelType = 'Petrol';
      car.engineCubicCapacity = 1500;
      car.color = 'Silver';
    } else if(BRAND == 'MS') {
      car.name = 'Ciaz';
      car.brand = BRAND;
      car.noOfCylinder = 4;
      car.fuelType = 'Petrol';
      car.engineCubicCapacity = 1200;
      car.color = 'Chocolate';
    } else if(BRAND == 'Hyundai') {
      car.name = 'Sonata Elantra';
      car.brand = BRAND;
      car.noOfCylinder = 4;
      car.fuelType = 'Petrol';
      car.engineCubicCapacity = 1600;
      car.color = 'White';
    } else if(BRAND == 'Ford') {
      car.name = 'Endeavor';
      car.brand = BRAND;
      car.noOfCylinder = 4;
      car.fuelType = 'Petrol';
      car.engineCubicCapacity = 2200;
      car.color = 'Black';
    } else if(BRAND == 'Jeep') {
      car.name = 'Compass';
      car.brand = BRAND;
      car.noOfCylinder = 4;
      car.fuelType = 'Petrol';
      car.engineCubicCapacity = 1400;
      car.color = 'White';
    } else if(BRAND == 'BMW') {
      car.name = 'M5';
      car.brand = BRAND;
      car.noOfCylinder = 4;
      car.fuelType = 'Diesel';
      car.engineCubicCapacity = 4400;
      car.color = 'Navy Blue';
    } else if(BRAND == 'Tata') {
      car.name = 'Harrier';
      car.brand = BRAND;
      car.noOfCylinder = 4;
      car.fuelType = 'Diesel';
      car.engineCubicCapacity = 2000;
      car.color = 'Black';
    }

    this.carList.push(car);
  }

}
