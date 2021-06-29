import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl,FormArray } from '@angular/forms';
@Component({
  selector: 'app-nested-array',
  templateUrl: './nested-array.component.html',
  styleUrls: ['./nested-array.component.scss']
})
export class NestedArrayComponent implements OnInit {
  FormGroup!: FormGroup; 
  form:any;
  constructor() { }

  ngOnInit(): void {
    this.form = new FormGroup({
      ContactNos: new FormArray([
        new FormControl ('848664644847'),
        new FormControl ('788635456377'),
      ]),
    });
  }
  addContactNo() {this.form.get('ContactNos').push(new FormControl());}
  onSubmit(){
    console.log(this.form.get('ContactNos').value);
    console.log(this.form.value);
  }
  setPreset() {this.form.get('ContactNos').patchValue(['345676543', '4567654']);}
}
