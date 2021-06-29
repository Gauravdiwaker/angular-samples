import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllPipesComponent } from './all-pipes.component';



@NgModule({
  declarations: [
    AllPipesComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    AllPipesComponent
  ]
})
export class AllPipesModule { }
