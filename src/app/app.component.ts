import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'project';
  isvalid:boolean=true;
  changevalue(valid:any){
    this.isvalid=valid;
  }
}
