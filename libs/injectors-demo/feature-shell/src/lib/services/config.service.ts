import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

export interface Config {
  loadedMessage: string;
  libraryConfig: string;
}

@Injectable({
  providedIn: 'root',
})
export class ConfigService {
  private config!: Config;

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

  getLibraryConfig() {
    if (!this.config) {
      throw new Error('Config not set');
    }
    return { libraryConfig: this.config.libraryConfig };
  }
}
