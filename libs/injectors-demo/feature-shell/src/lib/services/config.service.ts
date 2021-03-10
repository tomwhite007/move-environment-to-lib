import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { environment } from '@injectors-demo/injectors-demo/util-environment';
import { ConfigFacade, ConfigModel } from '@injectors-demo/shared/data-access-config';

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


  constructor(private http: HttpClient, private configFacade: ConfigFacade) {}

  loadConfig(path: string) {
    return this.http
      .get<Config>(path)
      .pipe(
        tap((config) => {
          this.config = config;
          this.configFacade.initState({...config, ...environment})
        })
      )
      .toPromise();
  }

  getConfig() {
    if (!this.config) {
      throw new Error('Config not set');
    }
    return this.config;
  }

  getLibraryConfig() {
    if (!this.config) {
      throw new Error('Config not set');
    }
    return { libraryConfig: this.config.libraryConfig };
  }

}
