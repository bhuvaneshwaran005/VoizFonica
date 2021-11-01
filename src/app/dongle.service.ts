import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from './customer';
import { Dongle } from './dongle';

@Injectable({
  providedIn: 'root'
})
export class DongleService {
  url:string;
  constructor(private http:HttpClient) { 
    this.url="http://localhost:8080/getdongleplans";
  }

  public findAllDonglePlans():Observable<Dongle[]>{
    return this.http.get<Dongle[]>(this.url);
  }
  public buydonglePlan(customer:Customer,dongle:Dongle):Observable<any>{
    return this.http.put(`http://localhost:8080/${customer.id}/customer/dongleplan/${dongle.id}`,{})
  }
  updatedonglePlan(dongle: Dongle):Observable<any> {
    return this.http.post("http://localhost:8080/update/dongle/plans",dongle)
  }
  public deletedonglePlan(dongle:Dongle):Observable<any>{
    return this.http.post("http://localhost:8080/delete/dongle/plans",dongle);
  }
  adddonglePlan(dongle: Dongle):Observable<any> {
    return this.http.post("http://localhost:8080/add/dongle/plans",dongle);
  }
}
