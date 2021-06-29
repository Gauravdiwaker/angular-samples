import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PipeWithStringComponent } from './pipe-with-string.component';



@NgModule({
  declarations: [
    PipeWithStringComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    PipeWithStringComponent
  ]
})
export class PipeWithStringModule { }
