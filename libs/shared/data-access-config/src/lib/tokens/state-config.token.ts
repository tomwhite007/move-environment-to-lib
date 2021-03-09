import { InjectionToken } from '@angular/core';
import { State } from '../+state/config.reducer';

export const StateConfigToken = new InjectionToken<State>(
  'Initial values for Config state'
);
