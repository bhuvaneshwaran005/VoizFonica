import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Customer } from '../customer';
import { LoginserviceService } from '../loginservice.service';
import { RegistrationService } from '../registration.service';

@Component({
  selector: 'app-login-user',
  templateUrl: './login-user.component.html',
  styleUrls: ['./login-user.component.css']
})
export class LoginUserComponent implements OnInit {

  msg ="";
  hide = true;
  userlogin: FormGroup;
  customer = new Customer();
  userid!: Customer[];
  constructor(private service:RegistrationService, 
    private router:Router,
    private formBuilder:FormBuilder,
    private loginservice:LoginserviceService) { 

      this.userlogin = this.formBuilder.group({
        email: new FormControl(null, [Validators.required, Validators.email,
          Validators.pattern(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)]),
          password: new FormControl('', [Validators.required, Validators.minLength(8)])
      })

  }

  get control() { return this.userlogin.controls; }

  ngOnInit(): void {
  }

  onSubmit(){
    if (this.userlogin.invalid) {
      console.log("form not submitted");
      return;
    }
    else {
      this.login()
    }
  }
  login() {
    this.service.loginUser(this.customer).subscribe(
      data => {
        this.matchEmail()
        //this.loginservice.setScope(this.userid);
        console.log("successfull",this.userid);
        this.router.navigate(['/userdashboard'])
    },
      error => {
        console.log("exception")
        this.msg = "Invalid username/password"
      }
    )
  }
  matchEmail(){
    this.service.getdetails().subscribe(data => {this.userid = data});
    console.log("get",this.userid)
  }
}