import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  regForm: any;

  constructor() { }

  ngOnInit(): void {
  }
  Register(regForm:any){
    console.log(regForm)
  }
  resetForm() {
    this.regForm.reset();
  }
}
