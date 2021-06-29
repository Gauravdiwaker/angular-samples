import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-multiple-pipe',
  templateUrl: './multiple-pipe.component.html',
  styleUrls: ['./multiple-pipe.component.scss']
})
export class MultiplePipeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  dob=new Date (19,12,2021)
}
