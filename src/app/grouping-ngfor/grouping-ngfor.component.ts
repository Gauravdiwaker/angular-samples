import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grouping-ngfor',
  templateUrl: './grouping-ngfor.component.html',
  styleUrls: ['./grouping-ngfor.component.scss']
})
export class GroupingNgforComponent implements OnInit {

  constructor() { }
  countrydetails:any[]=[
    {
      country:'india',
      people:[
        {
          'name':'gaurav'
        },
        {
          'name':'shashank'
        },
        {
          'name':'vikash'
        },
        {
          'name':'karan'
        },
      ]
    },
    {
      country:'uk',
      people:[
        {
          'name':'steave'
        },
        {
          'name':'rock'
        },
        {
          'name':'cane'
        },
        {
          'name':'peter'
        },
      ]
    },
  ];  
  ngOnInit(): void {
  }

}
