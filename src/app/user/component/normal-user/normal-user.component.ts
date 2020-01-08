import { Component, OnInit } from '@angular/core';
import { UserService } from '../../service/user.service';
import { CommonService } from 'src/app/service/common.service';

@Component({
  selector: 'app-normal-user',
  templateUrl: './normal-user.component.html',
  styleUrls: ['./normal-user.component.css']
})
export class NormalUserComponent implements OnInit {

  userInjector: string = '';
  userAppInjector: string = '';

  constructor(
    private commonService: CommonService,
    private userService: UserService
  ) { }

  ngOnInit() {
    this.userAppInjector = this.commonService.getCommonServiceResponse('Normal User Component');
    this.userInjector = this.userService.getUserServiceResponse('Normal User Component');
  }

}
