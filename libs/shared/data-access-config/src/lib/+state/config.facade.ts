import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { ConfigModel } from './config.model';
import { ConfigPartialState } from './config.reducer';
import * as ConfigSelectors from './config.selectors';
import * as ConfigActions from './config.actions';
import { SharedDataAccessConfigModule } from '../shared-data-access-config.module';
import { filter } from 'rxjs/operators';
import { Observable } from 'rxjs';
@Injectable({ providedIn: SharedDataAccessConfigModule })
export class ConfigFacade {
  config$: Observable<ConfigModel> = this.store.pipe(
    select(ConfigSelectors.getConfigState),
    filter((state) => !!state)
  );

  constructor(private store: Store<ConfigPartialState>) {}

  initState(initialState: ConfigModel) {
    this.store.dispatch(ConfigActions.init({ initialState }));
  }
}
