import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AuthenticateService } from './authenticate.service';
import { RegistrationService } from './registration.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'demoApp';


  constructor(public _authservice:AuthenticateService, private router:Router){}

  showprofile(){
    if(this._authservice.isAdminAuthenticated){
      this.router.navigate(['adminprofile']);
    }
    if(this._authservice.isCustomerAuthenticated){
      this.router.navigate(['userdashboard/userprofile'])
    }
  }
 
}
