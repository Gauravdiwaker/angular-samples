import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AllPipesModule } from './all-pipes/all-pipes.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AttributeBindingModule } from './attribute-binding/attribute-binding.module';
import { DecoratorModule } from './decorator/decorator.module';
import { EventModule } from './event/event.module';
import { GroupingNgforModule } from './grouping-ngfor/grouping-ngfor.module';
import { InterpolationModule } from './interpolation/interpolation.module';
import { JsonPipeModule } from './json-pipe/json-pipe.module';
import { MultiplePipeModule } from './multiple-pipe/multiple-pipe.module';
import { NgSwitchModule } from './ng-switch/ng-switch.module';
import { NgclassModule } from './ngclass/ngclass.module';
import { NgforModule } from './ngfor/ngfor.module';
import { NgstyleModule } from './ngstyle/ngstyle.module';
import { ParameterizedModule } from './parameterized/parameterized.module';
import { PipeWithStringModule } from './pipe-with-string/pipe-with-string.module';
import { PipeModule } from './pipe/pipe.module';
import { PropertyBindingModule } from './property-binding/property-binding.module';
import { TrackbyModule } from './trackby/trackby.module';
import { TwoWayDataBindingModule } from './two-way-data-binding/two-way-data-binding.module';
import { CustomPipeModule } from './custom-pipe/custom-pipe.module';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormModule } from './form/form.module';
import { ReactiveFormModule } from './reactive-form/reactive-form.module';
import { NestedArrayModule } from './nested-array/nested-array.module';
@NgModule({
  declarations: [
    AppComponent,
    PagenotfoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgSwitchModule,
    DecoratorModule,
    NgforModule,
    TrackbyModule,
    GroupingNgforModule,
    NgstyleModule,
    NgclassModule,
    InterpolationModule,
    PropertyBindingModule,
    AttributeBindingModule,
    EventModule,
    TwoWayDataBindingModule,
    PipeModule,
    ParameterizedModule,
    MultiplePipeModule,
    PipeWithStringModule,
    AllPipesModule,
    JsonPipeModule,
    CustomPipeModule,
    NgbModule,
    FormModule,
    ReactiveFormModule,
    NestedArrayModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }