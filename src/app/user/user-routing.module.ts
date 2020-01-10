import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './user.component';
import { SuperUserComponent } from './component/super-user/super-user.component';
import { NormalUserComponent } from './component/normal-user/normal-user.component';

const userRoutes: Routes = [
  {
    path: '',
    component: UserComponent,
    children: [
      { path: '', redirectTo: 'super-user', pathMatch: 'full' },
      { path: 'super-user', component: SuperUserComponent },
      { path: 'normal-user', component: NormalUserComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(userRoutes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
