import { InjectionToken, ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import * as fromConfig from './+state/config.reducer';
import { State } from './+state/config.reducer';
import { StateConfigToken } from './tokens/state-config.token';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature(fromConfig.CONFIG_FEATURE_KEY, fromConfig.reducer, StateConfigToken),
  ],
})
export class SharedDataAccessConfigModule {
  static forRoot(
    token: InjectionToken<State>
  ): ModuleWithProviders<SharedDataAccessConfigModule> {
    return {
      ngModule: SharedDataAccessConfigModule,
      providers: [
        {
          provide: StateConfigToken,
          useExisting: token,
        },
      ],
    };
  }

}
