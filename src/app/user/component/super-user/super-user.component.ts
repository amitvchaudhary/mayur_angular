import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/service/common.service';
import { UserService } from '../../service/user.service';

@Component({
  selector: 'app-super-user',
  templateUrl: './super-user.component.html',
  styleUrls: ['./super-user.component.css']
})
export class SuperUserComponent implements OnInit {

  userInjector: string = '';
  userAppInjector: string = '';

  constructor(
    private commonService: CommonService,
    private userService: UserService
  ) { }

  ngOnInit() {
    this.userAppInjector = this.commonService.getCommonServiceResponse('Super User Component');
    this.userInjector = this.userService.getUserServiceResponse('Super User Component');
  }

}
