import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AttributeBindingComponent } from './attribute-binding.component';



@NgModule({
  declarations: [
    AttributeBindingComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    AttributeBindingComponent
  ]
})
export class AttributeBindingModule { }
