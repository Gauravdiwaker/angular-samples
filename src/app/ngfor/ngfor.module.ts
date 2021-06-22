import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgforComponent } from './ngfor.component';



@NgModule({
  declarations: [
    NgforComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    NgforComponent
  ]
})
export class NgforModule { }
