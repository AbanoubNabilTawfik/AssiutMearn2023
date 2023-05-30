import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ForbiddenNameValidator } from '../custom validations/userName.validator';
import { ConfirmPasswordValidator } from '../custom validations/confirmPassword.validator';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.scss']
})
export class ReactiveFormsComponent implements OnInit {
  // registerationForm =new FormGroup({
  //   userName:new FormControl(''),
  //   password:new FormControl(''),
  //   confirmPassword:new FormControl(''),
  //   address:new FormGroup({
  //      city:new FormControl(''),
  //      state:new FormControl(''),
  //      postalCode:new FormControl('')
  //   })
  // })
  registerationForm =this.fb.group({
    userName:['',[Validators.required,Validators.minLength(5),ForbiddenNameValidator]],
    password:[''],
    confirmPassword:[''],
    email:[''],
    subscribe:[false],
    alternativeEmails:this.fb.array([]),
    address:this.fb.group({
       city:[''],
       state:[''],
       postalCode:['']
    })
  },{validator:[ConfirmPasswordValidator]})
  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
  }



  setEmailValidator()
  {
    this.registerationForm.get('subscribe')?.valueChanges.subscribe(
      checkedValue=>{
        const email=this.registerationForm.get('email');
         if(checkedValue)
         {
          console.log("entered")
          email?.setValidators(Validators.required)
          console.log(email?.hasValidator(Validators.required))
         }
         else
         {
          email?.clearValidators();
         }
         email?.updateValueAndValidity();
    })
  }

  get userName()
  {
    return this.registerationForm.get('userName');
  }
  get email()
  {
    return this.registerationForm.get('email');
  }

  get alternativeEmails()
  {
    return this.registerationForm.get('alternativeEmails') as FormArray;
  }

  addAlternativeEmail()
  {
    this.alternativeEmails.push(this.fb.control(''));
  }
  deleteInput(index:any)
  {
    this.alternativeEmails.removeAt(index);
  }
  getData()
  {
    // this.registerationForm.setValue({
    //   userName:'ITI',
    //   password:'123',
    //   confirmPassword:'123',
    //   address:{
    //     city:'Assiut',
    //     state:'Egypt',
    //     postalCode:'71111'
    //   }
    // })

    this.registerationForm.patchValue({
      userName:'ITI',
      address:{
        city:'Assiut',
        state:'Egypt',
        postalCode:'71111'
      }
    })
  }

}
