import { InjectionToken } from '@angular/core';
import { ConfigModel } from '@injectors-demo/shared/data-access-config';

export const ConfigStateToken = new InjectionToken<ConfigModel>(
  'Token to pass to data-access-config'
);
