import { Component, Inject } from '@angular/core';
import { LibraryConfig } from '../interfaces/library-config';
import { LibraryConfigToken } from '../tokens/library-config.token';

@Component({
  selector: 'injectors-demo-my-configurable-component',
  templateUrl: './my-configurable-component.component.html',
  styleUrls: ['./my-configurable-component.component.scss'],
})
export class MyConfigurableComponentComponent {
  constructor(@Inject(LibraryConfigToken) public config: LibraryConfig) {}
}
