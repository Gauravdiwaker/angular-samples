import { NgIf } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NgIfModule } from './ng-if/ng-if.module';
import { NgSwitchModule } from './ng-switch/ng-switch.module';

@NgModule({
  declarations: [
    AppComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgIfModule,
    NgSwitchModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
