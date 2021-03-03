import { Component, OnInit } from '@angular/core';
import {
  Config,
  ConfigService,
} from '@injectors-demo/injectors-demo/feature-shell';
import { environment } from '@injectors-demo/injectors-demo/util-environment';

@Component({
  selector: 'injectors-demo-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'injectors-demo';
  config: Config;

  constructor(private configService: ConfigService) {}

  ngOnInit() {
    this.config = this.configService.getConfig();
    console.log('environment.production', environment.production);
  }
}
