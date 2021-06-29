import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NestedArrayComponent } from './nested-array.component';



@NgModule({
  declarations: [
    NestedArrayComponent,
  ],
  imports: [
    CommonModule
  ],
  exports:[
    NestedArrayComponent
  ]
})
export class NestedArrayModule { }
