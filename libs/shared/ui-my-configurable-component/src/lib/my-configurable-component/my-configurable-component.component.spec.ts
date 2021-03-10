import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LibraryConfigToken } from '../tokens/library-config.token';

import { MyConfigurableComponentComponent } from './my-configurable-component.component';

describe('MyConfigurableComponentComponent', () => {
  let component: MyConfigurableComponentComponent;
  let fixture: ComponentFixture<MyConfigurableComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MyConfigurableComponentComponent],
      providers: [{ provide: LibraryConfigToken, useValue: {} }],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyConfigurableComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
