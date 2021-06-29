import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe-with-string',
  templateUrl: './pipe-with-string.component.html',
  styleUrls: ['./pipe-with-string.component.scss']
})
export class PipeWithStringComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  name:string='gaurav'
  school:string='aihss'
  class:string='tenth'
}
