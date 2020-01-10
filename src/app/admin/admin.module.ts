import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { SuperAdminComponent } from './component/super-admin/super-admin.component';
import { TeamAdminComponent } from './component/team-admin/team-admin.component';
import { AdminService } from './service/admin.service';
import { AdminRoutingModule } from './admin-routing.module';



@NgModule({
  declarations: [
    AdminComponent, 
    SuperAdminComponent, 
    TeamAdminComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ],
  providers: [AdminService],
  exports: [
    AdminComponent
  ]
})
export class AdminModule { 

  constructor() {
    console.log('Admin Module Loaded====================================');
  }
  
}
