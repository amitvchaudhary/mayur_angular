import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../service/admin.service';
import { CommonService } from 'src/app/service/common.service';

@Component({
  selector: 'app-team-admin',
  templateUrl: './team-admin.component.html',
  styleUrls: ['./team-admin.component.css']
})
export class TeamAdminComponent implements OnInit {

  adminInjector: string = '';
  adminAppInjector: string = '';

  constructor(
    private commonService: CommonService,
    private adminService: AdminService
  ) { }

  ngOnInit() {
    this.adminAppInjector = this.commonService.getCommonServiceResponse('Team Admin Component');
    this.adminInjector = this.adminService.getAdminServiceResponse('Team Admin Component');
  }

}
