import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GauravComponent } from './gaurav.component';



@NgModule({
  declarations: [
    GauravComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    GauravComponent
  ]
})
export class GauravModule { }
