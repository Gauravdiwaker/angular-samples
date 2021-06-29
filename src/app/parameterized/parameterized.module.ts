import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ParameterizedComponent } from './parameterized.component';



@NgModule({
  declarations: [
    ParameterizedComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    ParameterizedComponent
  ]
})
export class ParameterizedModule { }
