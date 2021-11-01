import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Customer } from '../customer';
import { Prepaid } from '../prepaid';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  private _plan = new BehaviorSubject<Customer>(new Customer);
  plan = this._plan.asObservable();

  

  url:string
  constructor(private http:HttpClient) { 
    this.url="http://localhost:8080/getdetail";
  }

  setdata(newData:any){
    this._plan.next(newData);
  }

  getCustomerDetails():Observable<any>{
    return this.http.get(this.url);
  }

  getCustomerprepaid(customer:Customer):Observable<any>{
    return this.http.get(`http://localhost:8080/getcustomer/plandetail/${customer.id}`);
  }

  getCustomerpostpaid(customer:Customer):Observable<any>{
    return this.http.get(`http://localhost:8080/getcustomer/postpaid/plandetail/${customer.id}`);
  }
  getCustomerdongle(customer:Customer):Observable<any>{
    return this.http.get(`http://localhost:8080/getcustomer/dongle/plandetail/${customer.id}`);
  }
  deleteCustomer(customer:Customer):Observable<any>{
    return this.http.post("http://localhost:8080/delete/customer",customer);
  }
  updateCustomer(customer:Customer):Observable<any>{
    return this.http.put(`http://localhost:8080/update/customer`,customer);
  }

  public findAll(customer:Customer):Observable<any>{
    return this.http.get(`http://localhost:8080/getdetail/${customer.email}`);
  }
}
