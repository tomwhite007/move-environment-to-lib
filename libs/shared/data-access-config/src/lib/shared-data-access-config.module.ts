import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import * as fromConfig from './+state/config.reducer';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature(fromConfig.CONFIG_FEATURE_KEY, fromConfig.reducer),
  ],
})
export class SharedDataAccessConfigModule {}
