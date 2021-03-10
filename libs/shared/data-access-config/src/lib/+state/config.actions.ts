import { createAction, props } from '@ngrx/store';
import { ConfigModel } from './config.model';

export const init = createAction(
  '[Config] Init',
  props<{ initialState: ConfigModel }>()
);
