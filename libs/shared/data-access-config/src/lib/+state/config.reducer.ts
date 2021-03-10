import { createReducer, Action, on } from '@ngrx/store';
import { ConfigModel } from './config.model';

import * as ConfigActions from './config.actions';
export const CONFIG_FEATURE_KEY = 'config';

export type State = ConfigModel;

export interface ConfigPartialState {
  readonly [CONFIG_FEATURE_KEY]: State;
}

const configReducer = createReducer(
  undefined,
  on(ConfigActions.init, (state, { initialState }) => {
    if (state) {
      throw new Error('Config state can only be set once.');
    }
    return { ...initialState };
  })
);

export function reducer(state: State | undefined, action: Action) {
  return configReducer(state, action);
}
