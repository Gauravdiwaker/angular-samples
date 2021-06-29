import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TwoWayDataBindingComponent } from './two-way-data-binding.component';



@NgModule({
  declarations: [
    TwoWayDataBindingComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    TwoWayDataBindingComponent
  ]
})
export class TwoWayDataBindingModule { }
