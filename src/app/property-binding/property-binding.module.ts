import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PropertyBindingComponent } from './property-binding.component';



@NgModule({
  declarations: [
    PropertyBindingComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    PropertyBindingComponent
  ]
})
export class PropertyBindingModule { }
