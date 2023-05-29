import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from './User';

@Injectable({
  providedIn: 'root'
})
export class EnrollService {

  _usrl="http://localhost:3000/enroll";
  constructor(private http:HttpClient) { }

  enroll(user:User)
  {
    return this.http.post<any>(this._usrl,user);
  }
}
