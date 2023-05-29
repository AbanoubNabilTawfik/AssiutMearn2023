import { Component, OnInit } from '@angular/core';
import { User } from '../User';
import { EnrollService } from '../enroll.service';

@Component({
  selector: 'app-template-driven-forms',
  templateUrl: './template-driven-forms.component.html',
  styleUrls: ['./template-driven-forms.component.scss']
})
export class TemplateDrivenFormsComponent implements OnInit {
  topics=["Angular","React" ,"Vue"];
  userModel= new User("","","","",false);
  constructor(private enrollService:EnrollService) { }

  ngOnInit(): void {
  }

  onSubmit()
  {
    //console.log(this.userModel)
    this.enrollService.enroll(this.userModel).subscribe({
      next:data=>console.log(data),
      error:error=>console.log(error)
    })
  }

}
