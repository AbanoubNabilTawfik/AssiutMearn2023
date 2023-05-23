import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-style-binding',
  templateUrl: './style-binding.component.html',
  styleUrls: ['./style-binding.component.scss']
})
export class StyleBindingComponent implements OnInit {
  textColor:string="green";
  hasError:boolean=true;
  trueColor:string="blue";
  falseColor:string="yellow";
  myStyles={
    color:'white',
    backgroundColor:"black",
    fontStyle:"italic"
  }


  myStyles2={
    color:'black',
    backgroundColor:"green",
    fontStyle:"italic"
  }
  constructor() { }

  ngOnInit(): void {
  }

}
