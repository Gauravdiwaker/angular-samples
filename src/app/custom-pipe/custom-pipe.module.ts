import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomPipeComponent } from './custom-pipe.component';
import { MypipePipe } from '../mypipe.pipe';



@NgModule({
  declarations: [
    CustomPipeComponent,
    MypipePipe,
  ],
  imports: [
    CommonModule,
  ],
  exports:[
    CustomPipeComponent
  ]
})
export class CustomPipeModule { }
