import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parameterized',
  templateUrl: './parameterized.component.html',
  styleUrls: ['./parameterized.component.scss']
})
export class ParameterizedComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  dob=new Date (1986,8,2);
  salary:number=50000;
}
