import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DecoratorModule } from './decorator/decorator.module';
import { NgSwitchModule } from './ng-switch/ng-switch.module';

@NgModule({
  declarations: [
    AppComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgSwitchModule,
    DecoratorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
