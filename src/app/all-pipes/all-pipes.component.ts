import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-all-pipes',
  templateUrl: './all-pipes.component.html',
  styleUrls: ['./all-pipes.component.scss']
})
export class AllPipesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  mydate=new Date (30,12,2021)
  mynumber:number=0.311166271865;
}
