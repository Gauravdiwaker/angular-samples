import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-json-pipe',
  templateUrl: './json-pipe.component.html',
  styleUrls: ['./json-pipe.component.scss']
})
export class JsonPipeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  public employee=[{
    id:1, name:"vikash"
  },
  {
    id:2, name:"shashank"
  },
  {
    id:3, name:"himanshu"
  },
  {
    id:4, name:"harsh"
  },
]
}
