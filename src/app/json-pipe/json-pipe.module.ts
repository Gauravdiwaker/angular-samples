import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JsonPipeComponent } from './json-pipe.component';



@NgModule({
  declarations: [
    JsonPipeComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    JsonPipeComponent
  ]
})
export class JsonPipeModule { }
