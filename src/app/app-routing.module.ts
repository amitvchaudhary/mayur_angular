import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeroesComponent } from './component/heroes/heroes.component';
import { CarComponent } from './component/car/car.component';
import { HouseComponent } from './component/house/house.component';
import { PageNotFoundComponent } from './component/page-not-found/page-not-found.component';


const routes: Routes = [
  { path: '', redirectTo: '/car', pathMatch: 'full' },
  { path: 'car', component: CarComponent },
  { path: 'heroes', component: HeroesComponent },
  { path: 'house', component: HouseComponent },
  { path: "admin", loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule) },
  { path: "user", loadChildren: () => import('./user/user.module').then(m => m.UserModule) },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
