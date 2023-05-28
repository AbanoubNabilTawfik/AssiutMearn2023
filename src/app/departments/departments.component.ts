import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

@Component({
  selector: 'app-departments',
  templateUrl: './departments.component.html',
  styleUrls: ['./departments.component.scss']
})
export class DepartmentsComponent implements OnInit {
 departments=[
  {"id":1 , "name":"Angular"},
  {"id":2 , "name":"JavaScript"},
  {"id":3 , "name":"JS DP"},
  {"id":4 ,"name":"JQuery"},
  {"id":5 , "name":"Advanced JavaScript"}
 ]
 selectedId:any;
  constructor(private router:Router,private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((params:ParamMap)=>{
      this.selectedId= params.get("id");
    })
  }

  goToDepartmentDetails(id:any)
  {
    //go to department details page and pass the id
    this.router.navigate(['/department',id]);
  }

}
