import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Complaint } from '../complaint';

@Injectable({
  providedIn: 'root'
})
export class ComplaintService {

  url:string
  constructor(private http:HttpClient) { 
    this.url="http://localhost:8080/registercomplaint";
  }

  makeComplaint(complaint:Complaint):Observable<any>{
    return this.http.post(this.url,complaint);
  }
}
