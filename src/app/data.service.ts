import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Admin } from './admin';
import { Customer } from './customer';
import { Dongle } from './dongle';
import { Postpaid } from './postpaid';
import { Prepaid } from './prepaid';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private _admin = new BehaviorSubject<Admin>(new Admin);
  admin = this._admin.asObservable();

  private _shared = new BehaviorSubject<Customer>(new Customer);
  shared = this._shared.asObservable();

  private _plan = new BehaviorSubject<Prepaid>(new Prepaid);
  plan = this._plan.asObservable();

  private _postplan = new BehaviorSubject<Postpaid>(new Postpaid);
  postplan = this._postplan.asObservable();

  private _dongleplan = new BehaviorSubject<Dongle>(new Dongle);
  dongleplan = this._dongleplan.asObservable();


  constructor(private http:HttpClient) { 
    
  }

  setAdmin(newadmin: any) {
    this._admin.next(newadmin);
  }

  setData(newData:any){
    this._shared.next(newData);
  }

  setPlan(newPlan:any){
    this._plan.next(newPlan);
  }
  setPostPlan(newPlan:any){
    this._postplan.next(newPlan);
  }

  setDonglePlan(dongleplan: any) {
    this._dongleplan.next(dongleplan);
  }

  public findAll(customer:Customer):Observable<any>{
    return this.http.get(`http://localhost:8080/getdetail/${customer.email}`);
  }
}
