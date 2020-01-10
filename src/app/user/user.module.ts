import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';
import { SuperUserComponent } from './component/super-user/super-user.component';
import { NormalUserComponent } from './component/normal-user/normal-user.component';
import { UserService } from './service/user.service';
import { UserRoutingModule } from './user-routing.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    UserComponent, 
    SuperUserComponent, 
    NormalUserComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule
  ],
  providers: [UserService],
  exports: [
    
  ]
})
export class UserModule { 
  
  constructor() {
    console.log('User Module Loaded=====================================');
  }

}
