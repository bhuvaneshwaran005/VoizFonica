import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Admin } from './admin';

@Injectable({
  providedIn: 'root'
})
export class AdminloginService {

  constructor(private http:HttpClient) { 
    
  }
  public loginUser(admin:Admin):Observable<any>{
    return this.http.post('http://localhost:8080/adminlogin',admin)
  }

}