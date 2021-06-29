import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgstyleComponent } from './ngstyle.component';



@NgModule({
  declarations: [
    NgstyleComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    NgstyleComponent
  ]
})
export class NgstyleModule { }
