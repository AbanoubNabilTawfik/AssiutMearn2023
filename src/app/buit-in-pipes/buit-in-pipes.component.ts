import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-buit-in-pipes',
  templateUrl: './buit-in-pipes.component.html',
  styleUrls: ['./buit-in-pipes.component.scss']
})
export class BuitInPipesComponent implements OnInit {
 fullName:string="Abanoub nabil"
 todayDate= new Date();
  constructor() { }

  ngOnInit(): void {
  }

}
