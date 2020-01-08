import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';
import { SuperUserComponent } from './component/super-user/super-user.component';
import { NormalUserComponent } from './component/normal-user/normal-user.component';
import { UserService } from './service/user.service';



@NgModule({
  declarations: [UserComponent, SuperUserComponent, NormalUserComponent],
  imports: [
    CommonModule
  ],
  providers: [UserService],
  exports: [
    UserComponent
  ]
})
export class UserModule { }
