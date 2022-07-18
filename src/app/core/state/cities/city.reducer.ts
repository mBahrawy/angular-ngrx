import { CityProperties } from './../../interfaces/city.interface';
import { createReducer, on } from '@ngrx/store';

import cities from '../../../cities-data.json';

import {
  loadCities,
  nukeCity,
  growCity,
} from './city.actions';

export interface CityState {
  cities: CityProperties[];
}

export const initialState: CityState = {
  cities: [],
};

const minNukePopulation = 5000000;
const nukePoplulationAmount = 5000000;
const gorwPopulationAmount = 1000000;

export const CityReducer = createReducer(
  initialState,
  on(loadCities, (state) => (
    {
      ...state,
      cities: cities.map((city: CityProperties) => {
        return {
          ...city,
        }
      })
    }
  )),

  on(nukeCity, (state, { cityId }) => ({
    ...state,
    cities: cities.map((city: CityProperties) => {
      
      if (city.id === cityId && city.population >= minNukePopulation) {
        
        return {
          ...city,
          population: city.population - nukePoplulationAmount
        }
      } else {
        return city
      }
    })
  })),

  on(growCity, (state, { cityId }) => ({
    ...state,
    cities: cities.map((city: CityProperties) => {
      if (city.id === cityId) {
        return {
          ...city,
          population: city.population + gorwPopulationAmount
        }
      } else {
        return city
      }
    })
  })),


);
