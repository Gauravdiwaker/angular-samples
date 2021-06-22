import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DecoratorModule } from './decorator/decorator.module';
import { GroupingNgforModule } from './grouping-ngfor/grouping-ngfor.module';
import { NgSwitchModule } from './ng-switch/ng-switch.module';
import { NgforModule } from './ngfor/ngfor.module';
import { TrackbyModule } from './trackby/trackby.module';

@NgModule({
  declarations: [
    AppComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgSwitchModule,
    DecoratorModule,
    NgforModule,
    TrackbyModule,
    GroupingNgforModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
