import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HeroesComponent } from './component/heroes/heroes.component';
import { HouseComponent } from './component/house/house.component';
import { CarComponent } from './component/car/car.component';
import { CarListComponent } from './component/car-list/car-list.component';
import { AdminModule } from './admin/admin.module';
import { UserModule } from './user/user.module';
import { PageNotFoundComponent } from './component/page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HouseComponent,
    CarComponent,
    CarListComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    // AdminModule,
    // UserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 

  constructor() {
    console.log('App Module Loaded======================================');
  }
  
}
