import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-if',
  templateUrl: './ng-if.component.html',
  styleUrls: ['./ng-if.component.scss']
})
export class NgIfComponent implements OnInit {

  constructor() { }
  displayMessage:boolean=true;
  loggedIn:boolean=true;
  ngOnInit(): void {
  }

  login(useName:string,password:string)
  {
    //calling to API
    if(this.loggedIn)
    {
      this.displayMessage=true

    }
    else
    {
      this.displayMessage=false;
    }
  }

}
