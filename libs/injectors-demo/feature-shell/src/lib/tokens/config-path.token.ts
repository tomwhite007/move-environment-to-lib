import { InjectionToken } from '@angular/core';

export const ConfigPathToken = new InjectionToken<string>(
  'Token to pass url for config file'
);
