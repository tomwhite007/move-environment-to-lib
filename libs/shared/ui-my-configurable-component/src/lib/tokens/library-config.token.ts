import { InjectionToken } from '@angular/core';
import { LibraryConfig } from '../interfaces/library-config';

export const LibraryConfigToken = new InjectionToken<LibraryConfig>(
  'Config Required For This Lib'
);
