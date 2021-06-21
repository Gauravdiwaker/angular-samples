import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgSwitchComponent } from './ng-switch.component';



@NgModule({
  declarations: [
    NgSwitchComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    NgSwitchComponent
  ]
})
export class NgSwitchModule { }
