import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from './customer';
import { Postpaid } from './postpaid';

@Injectable({
  providedIn: 'root'
})
export class PostpaidService {
  url:string;
  constructor(private http:HttpClient) { 
    this.url="http://localhost:8080/getpostpaidplans";
  }

  public findAllPostpaidPlans():Observable<Postpaid[]>{
    return this.http.get<Postpaid[]>(this.url);
  }
  public buypostpaidPlan(customer:Customer,postpaid:Postpaid):Observable<any>{
    return this.http.put(`http://localhost:8080/${customer.id}/customer/postpaidplan/${postpaid.id}`,{})
  }
  public updatepostpaidPlan(postpaid:Postpaid):Observable<any> {
    return this.http.post("http://localhost:8080/update/postpaid/plans",postpaid);
  }
  public deletepostpaidPlan(postpaid:Postpaid):Observable<any>{
    return this.http.post("http://localhost:8080/delete/postpaid/plans",postpaid);
  }
  public addpostpaidPlan(postpaid: Postpaid):Observable<any> {
    return this.http.post("http://localhost:8080/add/postpaid/plans",postpaid);
  }
  
}
