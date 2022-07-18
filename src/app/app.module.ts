import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatSliderModule } from '@angular/material/slider';
import { MatCardModule } from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';

import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { CityReducer } from './core/state/cities/city.reducer'
import { environment } from '../environments/environment';

import { AppComponent } from './app.component';
import { CityGridComponent } from './pages/city-grid/city-grid.component';
import { CityCardComponent } from './pages/city-grid/city-card/city-card.component';


@NgModule({
  declarations: [
    AppComponent,
    CityGridComponent,
    CityCardComponent
  ],
  imports: [
    BrowserModule,
    MatSliderModule,
    MatButtonModule,
    AppRoutingModule,
    CommonModule,
    BrowserAnimationsModule,
    StoreModule.forRoot({ cities: CityReducer }),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    }),
    NgbModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
