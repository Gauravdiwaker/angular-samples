import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllPipesComponent } from './all-pipes/all-pipes.component';
import { AttributeBindingComponent } from './attribute-binding/attribute-binding.component';
import { CustomPipeComponent } from './custom-pipe/custom-pipe.component';
import { DecoratorComponent } from './decorator/decorator.component';
import { EventComponent } from './event/event.component';
import { FormComponent } from './form/form.component';
import { GroupingNgforComponent } from './grouping-ngfor/grouping-ngfor.component';
import { InterpolationComponent } from './interpolation/interpolation.component';
import { JsonPipeComponent } from './json-pipe/json-pipe.component';
import { MultiplePipeComponent } from './multiple-pipe/multiple-pipe.component';
import { NestedArrayComponent } from './nested-array/nested-array.component';
import { NgSwitchComponent } from './ng-switch/ng-switch.component';
import { NgclassComponent } from './ngclass/ngclass.component';
import { NgforComponent } from './ngfor/ngfor.component';
import { NgstyleComponent } from './ngstyle/ngstyle.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { ParameterizedComponent } from './parameterized/parameterized.component';
import { PipeWithStringComponent } from './pipe-with-string/pipe-with-string.component';
import { PipeComponent } from './pipe/pipe.component';
import { PropertyBindingComponent } from './property-binding/property-binding.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { TrackbyComponent } from './trackby/trackby.component';
import { TwoWayDataBindingComponent } from './two-way-data-binding/two-way-data-binding.component';

const routes: Routes = [
  {
    path:'',
    redirectTo:'all-pipes',
    pathMatch:'full',
  },
  {
    path:'all-pipes',
    component:AllPipesComponent
  },
  {
    path:'custom-pipes',
    component:CustomPipeComponent
  },
  {
    path:'attribute-binding',
    component:AttributeBindingComponent
  },
  {
    path:'decorator',
    component:DecoratorComponent
  },
  {
    path:'event',
    component:EventComponent
  },
  {
    path:'grouping-ngfor',
    component:GroupingNgforComponent
  },
  {
    path:'interpolation',
    component:InterpolationComponent
  },
  {
    path:'json-pipe',
    component:JsonPipeComponent
  },
  {
    path:'multiple-pipe',
    component:MultiplePipeComponent
  },
  {
    path:'ng-switch',
    component:NgSwitchComponent
  },
  {
    path:'ngclass',
    component:NgclassComponent
  },
  {
    path:'ngfor',
    component:NgforComponent
  },
  {
    path:'ngstyle',
    component:NgstyleComponent
  },
  {
    path:'parameterized',
    component:ParameterizedComponent
  },
  {
    path:'pipe',
    component:PipeComponent
  },
  {
    path:'pipe-with-string',
    component:PipeWithStringComponent
  },
  {
    path:'property-binding',
    component:PropertyBindingComponent
  },
  {
    path:'trackby',
    component:TrackbyComponent
  },
  {
    path:'two-way-data-binding',
    component:TwoWayDataBindingComponent
  },
  {
    path:'form',
    component:FormComponent
  },
  {
    path:'nested-array',
    component:NestedArrayComponent
  },
  {
    path:'reactive-form',
    component:ReactiveFormComponent
  },
  {
    path:'**',
    component:PagenotfoundComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }