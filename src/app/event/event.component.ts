import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss']
})
export class EventComponent implements OnInit {
  
  constructor() { }

  ngOnInit(): void {
    console.log("i am gaurav")
  }
  show(){
    console.log("show function run")
  }
  onclick()
  {
    alert("hi user")
  }
}
