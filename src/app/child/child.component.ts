import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {
 @Input() parentData :any;
 @Output() childEvent = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  sendData()
  {
   this.childEvent.emit("Hello parent from child")
  }

  WhoAmI()
  {
    console.log("Im child");
  }

}
