import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,FormBuilder,Validators,FormArray } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss']
})
export class ReactiveFormComponent implements OnInit {
  signupForm:FormGroup;
  FirstName:string="";
  LastNmae:string="";
  Email:string="";
  Password:string="";
  constructor(private formbuilder:FormBuilder) { 
    this.signupForm=formbuilder.group({
      fname:['',Validators.required],
      lname:['',Validators.required,,Validators.maxLength(10)],
      Email:['',Validators.required,Validators.email],
      userpassword:['',Validators.required]
    });
  }

  ngOnInit(): void {
    this.signupForm.get('fname')?.valueChanges.subscribe(
      uname=>{
        console.log('fname changed:'+ uname);
      }
      )
      const arr=new FormArray([
        new FormControl(),
         new FormControl()
      ]);
      arr.patchValue(['Gaurav']);
    console.log(arr.value)
    console.log(arr.status)
  }
  PostData(signupForm:any)
  {
    console.log(signupForm.controls);
  }
  resetForm(){
    this.signupForm.reset();  
  }

  filldata()
    {
      this.signupForm.setValue({
        "fname":"shashank",
        "lname":"mishra",
        "Emailid":"shashank@gamil.com",
        "userpassword":"jbxibonodnp;an",
      })
    }
  }