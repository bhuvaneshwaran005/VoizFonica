import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'
import { Router } from '@angular/router';
import { Admin } from '../admin';
import { AdminloginService } from '../adminlogin.service';
import { AuthenticateService } from '../authenticate.service';
import { DataService } from '../data.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

  
  hide: boolean = true;
  admin=new Admin();
  msg="";
  constructor(private fb: FormBuilder,private service:AdminloginService,
    private authservice:AuthenticateService,
     private router:Router, private dataservice:DataService) {
  }

  ngOnInit() {
  }

  loginForm: FormGroup = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]]
  })


  onLogin() {
    if (this.loginForm.invalid) {
      return;
    }
    this.dataservice.setAdmin(this.admin);
    console.log(this.loginForm.value);
    this.service.loginUser(this.admin).subscribe(
      data => {
        console.log("successfull")
        this.authservice.adminAuthenticate();
        this.router.navigate(['/admindashboard'])
    },
      error => {
        console.log("exception")
        this.msg = "Invalid username/password"
      }
    )
  }

}