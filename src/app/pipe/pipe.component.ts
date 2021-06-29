import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.scss']
})
export class PipeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  employees:any[]=[
    {
      code:'emp001',name:'gaurav', salary:'300000',dob:'12/20/2005'
    },
    {
      code:'emp002',name:'himanshu', salary:'200000',dob:'7/22/2004'
    },
    {
      code:'emp003',name:'ASSAS', salary:'100000',dob:'30/1/2004'
    },
    {
      code:'emp004',name:'hemant', salary:'90000',dob:'28/5/2004'
    },
    {
      code:'emp005',name:'harsh', salary:'80000',dob:'3/14/2005'
    },
    {
      code:'emp006',name:'bhasker', salary:'70000',dob:'11/30/2005'
    },
  ];
}
