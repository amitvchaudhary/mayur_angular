import { Component, OnInit } from '@angular/core';
import { Hero } from 'src/core/model';
import { CommonService } from 'src/app/service/common.service';
import { UserService } from 'src/app/user/service/user.service';
import { Router } from '@angular/router';

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

  heroInjector: string = '';

  constructor(
    private commonService: CommonService,
    private userService: UserService,
    private router: Router
  ) { }

  ngOnInit() {
    this.heroInjector = this.commonService.getCommonServiceResponse('Heroes Component');
    console.log(this.userService.getUserServiceResponse('Heroes Component'));
  }

  navigateTo(path) {
    this.router.navigateByUrl(path);
  }

}
