import { Component, OnInit } from '@angular/core';
import { House } from 'src/core/model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-house',
  templateUrl: './house.component.html',
  styleUrls: ['./house.component.css']
})
export class HouseComponent implements OnInit {

  house: House = {
    name: '',
    address: '',
    type: '',
    hasLift: false,
    hasGarden: false,
    hasPool: false,
    noOfFloor: 0,
    noOfRoom: 0,
    noOfBath: 0,
    noOfCarParking: 0
  }

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  navigateTo(path) {
    this.router.navigateByUrl(path);
  }

}
