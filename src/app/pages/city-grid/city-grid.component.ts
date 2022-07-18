import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import {  loadCities, nukeCity, growCity }  from 'src/app/core/state/cities/city.actions'
import { selectAllCities } from 'src/app/core/state/cities/city.selectors';

@Component({
  selector: 'app-city-grid',
  templateUrl: './city-grid.component.html',
  styleUrls: ['./city-grid.component.scss']
})
export class CityGridComponent implements OnInit {

  constructor(private store: Store) {}

  public allCities$ = this.store.select(selectAllCities);

  nuke = ($event) => this.store.dispatch(nukeCity({ cityId: $event }));

  grow = ($event) => this.store.dispatch(growCity({ cityId: $event }));
    
  ngOnInit(): void {
    this.store.dispatch(loadCities());
  }

}
