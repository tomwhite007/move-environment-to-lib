import { APP_INITIALIZER, ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MyConfigurableComponentComponent,
  SharedUiMyConfigurableComponentModule,
} from '@injectors-demo/shared/ui-my-configurable-component';
import { ConfigToken } from './tokens/config.token';
import { ConfigPathToken } from './tokens/config-path.token';
import { ConfigService, Config } from './services/config.service';
import { HttpClientModule } from '@angular/common/http';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { environment } from '@injectors-demo/injectors-demo/util-environment';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { ServiceWorkerModule } from '@angular/service-worker';

const loadAsyncConfigFactory = (
  buildConfigService: ConfigService,
  path: string
) => (): Promise<Config> => {
  return buildConfigService.loadConfig(path);
};

const returnLibraryConfigFactory = (buildConfigService: ConfigService) => {
  return buildConfigService.getLibraryConfig();
};

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    StoreModule.forRoot(
      {},
      {
        runtimeChecks: {
          strictActionImmutability: true,
          strictStateImmutability: true,
        },
      }
    ),
    EffectsModule.forRoot([]),
    SharedUiMyConfigurableComponentModule.forRoot(ConfigToken),

    // Now environment is accessible, imports that require environment.production can now be moved into feature-shell
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
    }),
  ],
  providers: [
    {
      provide: APP_INITIALIZER, // ensure the application isn't started until the config file has loaded.
      useFactory: loadAsyncConfigFactory,
      deps: [ConfigService, ConfigPathToken],
      multi: true,
    },
    {
      provide: ConfigToken,
      useFactory: returnLibraryConfigFactory,
      deps: [ConfigService],
    },
  ],
  exports: [MyConfigurableComponentComponent],
})
export class InjectorsDemoFeatureShellModule {
  static forRoot(
    configPath: string
  ): ModuleWithProviders<InjectorsDemoFeatureShellModule> {
    return {
      ngModule: InjectorsDemoFeatureShellModule,
      providers: [
        {
          provide: ConfigPathToken,
          useValue: configPath,
        },
      ],
    };
  }
}
