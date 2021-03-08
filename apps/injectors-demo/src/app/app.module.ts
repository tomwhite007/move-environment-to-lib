import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { environment } from '@injectors-demo/injectors-demo/util-environment';
import { InjectorsDemoFeatureShellModule } from '@injectors-demo/injectors-demo/feature-shell';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    InjectorsDemoFeatureShellModule.forRoot(environment.configPath),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
