import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from './customer';
import { Postpaid } from './postpaid';
import { Prepaid } from './prepaid';

@Injectable({
  providedIn: 'root'
})
export class PrepaidService {
  url:string;
  constructor(private http:HttpClient) { 
    this.url="http://localhost:8080/getplans";
  }

  public findAll():Observable<Prepaid[]>{
    return this.http.get<Prepaid[]>(this.url);
  }
  public buyprepaidPlan(customer:Customer,prepaid:Prepaid):Observable<any>{
    return this.http.put(`http://localhost:8080/${customer.id}/customerplan/${prepaid.id}`,{})
  }
  public updateprepaidPlan(prepaid:Prepaid):Observable<any>{
    return this.http.post("http://localhost:8080/update/prepaid/plans",prepaid);
  }
  public deleteprepaidPlan(prepaid:Prepaid):Observable<any>{
    return this.http.post("http://localhost:8080/delete/prepaid/plans",prepaid);
  }
  addprepaidPlan(prepaid: Prepaid):Observable<any> {
    return this.http.post("http://localhost:8080/add/prepaid/plans",prepaid);
  }

}
