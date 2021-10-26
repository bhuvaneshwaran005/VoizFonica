import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
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
  
}
