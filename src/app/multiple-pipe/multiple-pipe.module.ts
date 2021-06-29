import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MultiplePipeComponent } from './multiple-pipe.component';



@NgModule({
  declarations: [
    MultiplePipeComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    MultiplePipeComponent
  ]
})
export class MultiplePipeModule { }
