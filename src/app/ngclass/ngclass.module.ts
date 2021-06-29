import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgclassComponent } from './ngclass.component';



@NgModule({
  declarations: [
    NgclassComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    NgclassComponent
  ]
  })
export class NgclassModule { }
