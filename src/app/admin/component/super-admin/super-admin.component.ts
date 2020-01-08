import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/service/common.service';
import { AdminService } from '../../service/admin.service';

@Component({
  selector: 'app-super-admin',
  templateUrl: './super-admin.component.html',
  styleUrls: ['./super-admin.component.css']
})
export class SuperAdminComponent implements OnInit {

  adminInjector: string = '';
  adminAppInjector: string = '';

  constructor(
    private commonService: CommonService,
    private adminService: AdminService
  ) { }

  ngOnInit() {
    this.adminAppInjector = this.commonService.getCommonServiceResponse('Super Admin Component');
    this.adminInjector = this.adminService.getAdminServiceResponse('Super Admin Component');
  }

}
