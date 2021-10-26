import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  url:string
  constructor(private http:HttpClient) { 
    this.url="http://localhost:8080/getdetail";
  }

  getCustomerDetails():Observable<any>{
    return this.http.get(this.url);
  }
}
