import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-interpolation',
  templateUrl: './interpolation.component.html',
  styleUrls: ['./interpolation.component.scss']
})
export class InterpolationComponent implements OnInit {
  tittle = 'my world'
  constructor() { }
  empfirstname:string = 'gaurav'
  emplastname:string = 'diwaker'
  a:number = 30;
  b:number = 30;
  ngOnInit(): void {
  }

}
