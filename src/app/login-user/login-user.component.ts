import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CustomerService } from '../admin-customers/customer.service';
import { AuthenticateService } from '../authenticate.service';
import { Customer } from '../customer';
import { DataService } from '../data.service';
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
  constructor(private service:RegistrationService, 
    private router:Router,
    private formBuilder:FormBuilder,private authservice:AuthenticateService,
    private dataservice:DataService,
    private customerservice:CustomerService) { 

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
    if(this.userlogin.invalid){
      return;
    }
    else{
      this.login();
      this.customerservice.setdata(this.customer);
      this.dataservice.setData(this.customer);
    }
  }
  login() {
    this.service.loginUser(this.customer).subscribe(
      data => {
        console.log("successfull")
        this.authservice.authenticate();
        this.router.navigate(['/userdashboard'])
    },
      error => {
        console.log("exception")
        this.msg = "Invalid username/password"
      }
    )
  }
}
