import { InjectionToken } from '@angular/core';
import { LibraryConfig } from '@injectors-demo/shared/ui-my-configurable-component';

export const ConfigToken = new InjectionToken<LibraryConfig>(
  'Token to pass to my library forRoot'
);
