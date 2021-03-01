import { InjectionToken, ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyConfigurableComponentComponent } from './my-configurable-component/my-configurable-component.component';
import { LibraryConfigToken } from './tokens/library-config.token';
import { LibraryConfig } from './interfaces/library-config';

@NgModule({
  imports: [CommonModule],
  declarations: [MyConfigurableComponentComponent],
  exports: [MyConfigurableComponentComponent],
})
export class SharedUiMyConfigurableComponentModule {
  static forRoot(
    token: InjectionToken<LibraryConfig>
  ): ModuleWithProviders<SharedUiMyConfigurableComponentModule> {
    return {
      ngModule: SharedUiMyConfigurableComponentModule,
      providers: [
        {
          provide: LibraryConfigToken,
          useExisting: token,
        },
      ],
    };
  }
}
