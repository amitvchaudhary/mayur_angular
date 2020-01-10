import { Component, OnInit } from '@angular/core';
import { UserService } from '../../service/user.service';
import { CommonService } from 'src/app/service/common.service';
import { AdminService } from 'src/app/admin/service/admin.service';

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
    private userService: UserService,
    // private adminService: AdminService
  ) { }

  ngOnInit() {
    this.userAppInjector = this.commonService.getCommonServiceResponse('Normal User Component');
    this.userInjector = this.userService.getUserServiceResponse('Normal User Component');
    // console.log(this.adminService.getAdminServiceResponse('Normal User Component'));
  }

}
