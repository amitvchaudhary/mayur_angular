import { Component, OnInit } from '@angular/core';
import { Hero } from 'src/core/hero';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  hero: Hero = {
    id: 1,
    title: 'Ironman',
    firstName: 'Tony',
    lastName: 'Stark'
  }

  constructor() { }

  ngOnInit() {
  }

}
