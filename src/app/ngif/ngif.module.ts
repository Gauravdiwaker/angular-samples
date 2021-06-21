import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgifComponent } from './ngif.component';



@NgModule({
  declarations: [
    NgifComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    NgifComponent
  ]
})
export class NgifModule { }
