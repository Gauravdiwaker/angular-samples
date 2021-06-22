import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-decorator',
  templateUrl: './decorator.component.html',
  styleUrls: ['./decorator.component.scss']
})
export class DecoratorComponent implements OnInit {

  constructor() {
    console.log("hi this is component")
   }
   @HostListener('click',['$event'])
   onhostclick(event:Event)
   {
     alert("hello user");
   }
  ngOnInit(): void {
  }

}
