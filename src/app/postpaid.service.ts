import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
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
}
