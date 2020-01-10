import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin.component';
import { SuperAdminComponent } from './component/super-admin/super-admin.component';
import { TeamAdminComponent } from './component/team-admin/team-admin.component';

const adminRoutes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      { path: '', redirectTo: 'super-admin', pathMatch: 'full' },
      { path: 'super-admin', component: SuperAdminComponent },
      { path: 'team-admin', component: TeamAdminComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(adminRoutes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
