import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-custom-pipe',
  templateUrl: './custom-pipe.component.html',
  styleUrls: ['./custom-pipe.component.scss']
})
export class CustomPipeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  employees:any=[{
    code:'0001', name:'ankit',gender:'male',salary:55000  
  },
  {
    code:'0002', name:'vikash',gender:'male',salary:55000  
  },
  {
    code:'0003', name:'shakshi',gender:'female',salary:55000  
  },
  {
    code:'0004', name:'kavita',gender:'female',salary:55000  
  },
  {
    code:'0005', name:'harsh',gender:'male',salary:55000  
  },
  {
    code:'0006', name:'shashank',gender:'male',salary:55000  
  },
];
}
