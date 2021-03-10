import { createFeatureSelector } from '@ngrx/store';
import {
  CONFIG_FEATURE_KEY,
  State,
  ConfigPartialState,
} from './config.reducer';

export const getConfigState = createFeatureSelector<ConfigPartialState, State>(
  CONFIG_FEATURE_KEY
);
