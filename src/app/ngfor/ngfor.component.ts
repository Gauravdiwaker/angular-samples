import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngfor',
  templateUrl: './ngfor.component.html',
  styleUrls: ['./ngfor.component.scss']
})
export class NgforComponent implements OnInit {

  constructor() { }
  students = [
    {
      name:'Gaurav'
    },
    {
      name:'Rohan'
    },
    {
      name:'Shashank'
    },
    {
      name:'Vikash'
    },
    {
      name:'Aman'
    },
    {
      name:'Mahesh'
    }
  ];
  ngOnInit(): void {
  }

}
