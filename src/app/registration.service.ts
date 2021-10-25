import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from './customer';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {
 /* isAuthenticated = true;
  authenticate(status: boolean):boolean {
       this.isAuthenticated = status;
       return this.isAuthenticated;
  }*/

  constructor(private http:HttpClient) { }
  
  public loginUser(customer:Customer):Observable<any>{
    return this.http.post('http://localhost:8080/login',customer)
  }
  public registerUser(customer:Customer):Observable<any>{
    return this.http.post('http://localhost:8080/register',customer)
  }
  public resetPassword(customer:Customer):Observable<any>{
    return this.http.post('http://localhost:8080/forgotpassword',customer)
  }
 
}


