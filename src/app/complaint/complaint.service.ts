import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Complaint } from '../complaint';

@Injectable({
  providedIn: 'root'
})
export class ComplaintService {

  constructor(private http:HttpClient) { }

  makeComplaint(complaint:Complaint,name:string):Observable<any>{
    return this.http.post(`http://localhost:8080/registercomplaint/${name}`,complaint);
  }

  public getComplaint():Observable<any>{
    return this.http.get("http://localhost:8080/get/all/complaints");
  }
  public deleteComplaint(complaint:Complaint):Observable<any>{
    return this.http.post("http://localhost:8080/delete/complaint",complaint)
  }
}
