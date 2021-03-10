import { Component, OnInit } from '@angular/core';
import { environment } from '@injectors-demo/injectors-demo/util-environment';
import {
  ConfigFacade,
  ConfigModel,
} from '@injectors-demo/shared/data-access-config';
import { Observable } from 'rxjs';

@Component({
  selector: 'injectors-demo-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'injectors-demo';
  config$: Observable<ConfigModel>;

  constructor(private configFacade: ConfigFacade) {}

  ngOnInit() {
    this.config$ = this.configFacade.config$;
    console.log('environment.production', environment.production);
  }
}
