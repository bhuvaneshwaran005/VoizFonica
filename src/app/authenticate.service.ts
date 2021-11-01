import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Customer } from './customer';

@Injectable({
  providedIn: 'root'
})
export class AuthenticateService {

  isAdminAuthenticated = false;
  isCustomerAuthenticated = false;
  constructor(private router:Router) { }

  authenticate():boolean{
    console.log("authenticated")
    this.isCustomerAuthenticated = true;
    return this.isCustomerAuthenticated;
  }
  adminAuthenticate():boolean{
    this.isAdminAuthenticated=true;
    return this.isAdminAuthenticated;
  }

  public loggedIn(): any{

  }

  public logoutUser(){
    if(this.isCustomerAuthenticated){
      this.isCustomerAuthenticated=false;
      this.router.navigate(['/login'])
    }
    if(this.isAdminAuthenticated){
      this.isAdminAuthenticated = false;
      this.router.navigate(['/adminlogin'])
    }
    this.isCustomerAuthenticated=false;
    this.isAdminAuthenticated = false;
    window.location.reload();
  }
}
