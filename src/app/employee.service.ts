import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { IEmployee } from './IEmployee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  employees=[];
  _url='/assets/Data/employees.json';
  constructor(private http:HttpClient) { }

  getEmployees():Observable<IEmployee[]>
  {
   //return this.employees;
   return this.http.get<IEmployee[]>(this._url).pipe(catchError((err)=>{
    return throwError(()=>err.message || "Server error")
   }));
  }

  postEmployee()
  {
    let body={
      "id":10,
      "name":"Jhon Adams"
    }
    return this.http.post(this._url,body).pipe(catchError((err)=>{
      return throwError(()=>err.message || "Server error")
     }));
  }
}
