import { Component, OnInit } from '@angular/core';
import { Car } from 'src/core/model';
import { CAR_BRAND_LIST } from 'src/core/data';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {

  carBrandList: any = CAR_BRAND_LIST;
  stockCarList: Car[] = [];
  productionCarList: Car[] = [];
  soldCarList: Car[] = [];

  constructor() {
    console.log('Car Custructor Called');
  }

  ngOnChanges() {
    console.log('Car OnChanges Called');
  }

  ngOnInit() {
    console.log('Car OnInit Called');
    this.addCustomCar('City 11', 'Honda', 'silver', 'Mayur', 1500);
    this.addCustomCar('Baleno 22', 'Maruti Suzuki', 'blue', 'Aditi', 1200);
    this.addCustomCar('i20 33', 'Hyundai', 'red', 'Hima', 1200);
    this.addCustomCar('Thar 44', 'Mahindra', 'red', 'Jenish', 2000);
    this.addCustomCar('Ciaz 55', 'Maruti Suzuki', 'silver', 'Neel', 1400);
    this.addCustomCar('Elantra 66', 'Hyundai', 'blue', 'Parth', 1800);

    // this.productionCarList = this.stockCarList;
  }

  addCustomCar(NAME, BRAND, COLOR, OWNER, CC) {
    const car: Car = new Car();
    car.name = NAME;
    car.brand = BRAND;
    car.owner = OWNER;
    car.noOfCylinder = 4;
    car.color = COLOR;
    car.fuelType = 'Petrol';
    car.engineCubicCapacity = CC;

    this.stockCarList.push(car);
  }

  switchCar(SWITCH_TO_LIST, CAR_INDEX) {
    if (SWITCH_TO_LIST == "production") {
      if (CAR_INDEX == 0) {
        this.productionCarList.push(this.soldCarList.shift());
      } else {
        let car: Car = this.soldCarList[CAR_INDEX];
        this.productionCarList.push(car);
        this.soldCarList.splice(CAR_INDEX, 1);
      }
    } else if (SWITCH_TO_LIST == "stock") {
      if (CAR_INDEX == 0) {
        this.stockCarList.push(this.productionCarList.shift());
      } else {
        let car: Car = this.productionCarList[CAR_INDEX];
        this.stockCarList.push(car);
        this.productionCarList.splice(CAR_INDEX, 1);
      }
    } else if (SWITCH_TO_LIST == "sold") {
      if (CAR_INDEX == 0) {
        this.soldCarList.push(this.stockCarList.shift());
      } else {
        let car: Car = this.stockCarList[CAR_INDEX];
        this.soldCarList.push(car);
        this.stockCarList.splice(CAR_INDEX, 1);
      }
    }
  }

  switchAllCar(SWITCH_TO_LIST) {
    if (SWITCH_TO_LIST == "production") {
      this.productionCarList = this.productionCarList.concat(this.soldCarList);
      this.soldCarList = [];
    } else if (SWITCH_TO_LIST == "stock") {
      this.stockCarList = this.stockCarList.concat(this.productionCarList);
      this.productionCarList = [];
    } else if (SWITCH_TO_LIST == "sold") {
      this.soldCarList = this.soldCarList.concat(this.stockCarList);
      this.stockCarList = [];
    }
  }

  swapCar(event) {
    this.switchCar(event['switchToCar'], event['index']);
  }

  // addCar(BRAND, color, owner) {
  //   const car: Car = new Car();
  //   car.brand = BRAND;
  //   car.owner = owner;
  //   car.noOfCylinder = 4;
  //   car.color = color;
  //   if (BRAND == 'Honda') {
  //     car.name = 'City';
  //     car.fuelType = 'Petrol';
  //     car.engineCubicCapacity = 1500;
  //   } else if (BRAND == 'MS') {
  //     car.name = 'Ciaz';
  //     car.fuelType = 'Petrol';
  //     car.engineCubicCapacity = 1200;
  //   } else if (BRAND == 'Hyundai') {
  //     car.name = 'Sonata Elantra';
  //     car.fuelType = 'Petrol';
  //     car.engineCubicCapacity = 1600;
  //   } else if (BRAND == 'Ford') {
  //     car.name = 'Endeavor';
  //     car.fuelType = 'Petrol';
  //     car.engineCubicCapacity = 2200;
  //   } else if (BRAND == 'Jeep') {
  //     car.name = 'Compass';
  //     car.fuelType = 'Petrol';
  //     car.engineCubicCapacity = 1400;
  //   } else if (BRAND == 'BMW') {
  //     car.name = 'M5';
  //     car.fuelType = 'Diesel';
  //     car.engineCubicCapacity = 4400;
  //   } else if (BRAND == 'Tata') {
  //     car.name = 'Harrier';
  //     car.fuelType = 'Diesel';
  //     car.engineCubicCapacity = 2000;
  //   }

  //   this.carList.push(car);
  // }

  // removeCar(index) {
  //   this.stockCarList.splice(index, 1);
  // }

}
