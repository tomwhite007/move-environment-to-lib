import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { environment } from '@injectors-demo/injectors-demo/util-environment';
import { ConfigModel } from '@injectors-demo/shared/data-access-config';

export interface Config {
  loadedMessage: string;
  libraryConfig: string;
}

@Injectable({
  providedIn: 'root',
})
export class ConfigService {
  private config: Config = {
    loadedMessage: 'Message from Async Config receieved',
    libraryConfig: 'This string is to configure my library'
  };


  constructor(private http: HttpClient) {}

  loadConfig(path: string) {
    return this.http
      .get<Config>(path)
      .pipe(tap((config) => (this.config = config)))
      .toPromise();
  }

  getConfig() {
    if (!this.config) {
      throw new Error('Config not set');
    }
    return this.config;
  }

  getConfigAndEnvironment(): ConfigModel {
    if (!this.config) {
      throw new Error('Config not set');
    }
    return { ...this.config, ...environment };
  }

  getLibraryConfig() {
    if (!this.config) {
      throw new Error('Config not set');
    }
    return { libraryConfig: this.config.libraryConfig };
  }

  getInitialState(){
    return {
      loadedMessage: 'test',
      libraryConfig: 'test',
      production: false,
      configPath: 'test',
    };
  }
}
