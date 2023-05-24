import { Component, OnInit, ViewChild } from '@angular/core';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {
 message:string="Hello Child From Parent";
 messageFromChild:any;
 @ViewChild(ChildComponent) child :ChildComponent;
  constructor() { }

  ngOnInit(): void {
    //this.child.WhoAmI();
  }
  ngAfterViewInit()
  {
    this.child.WhoAmI();
  }

}
