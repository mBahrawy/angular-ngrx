import { createAction, props } from '@ngrx/store';

export const loadCities = createAction('[Cities Grid Page] Load cities');

export const nukeCity = createAction(
  '[Cities Grid Page] Nuke city',
  props<{ cityId: number }>()
);

export const growCity = createAction(
  '[Cities Grid Page] Grow city',
  props<{ cityId: number }>()
);