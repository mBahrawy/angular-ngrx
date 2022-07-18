import { createSelector } from '@ngrx/store';
import { AppState } from '../app.state';
import { CityState } from './city.reducer';

export const selectCities = (state: AppState) => state.cities;

export const selectAllCities = createSelector(
  selectCities,
  (state: CityState) => state.cities
);
