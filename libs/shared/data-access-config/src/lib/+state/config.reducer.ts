import { createReducer, Action } from '@ngrx/store';
import { ConfigModel } from './config.model';

export const CONFIG_FEATURE_KEY = 'config';

export type State = ConfigModel;

export interface ConfigPartialState {
  readonly [CONFIG_FEATURE_KEY]: State;
}

export const initialState: State = {
  loadedMessage: 'test',
  libraryConfig: 'test',
  production: false,
  configPath: 'test',
};

const configReducer = createReducer(
  // undefined
  initialState
  // on(ConfigActions.init, (state) => ({ ...state, loaded: false, error: null })),
);

export function reducer(state: State | undefined, action: Action) {
  return configReducer(state, action);
}
