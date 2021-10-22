import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Customer } from '../customer';
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
    private formBuilder:FormBuilder) { 

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
    
  }
  login() {
    this.service.loginUser(this.customer).subscribe(
      data => {
        console.log("successfull")
        //this.service.authenticate(true);
        this.router.navigate(['/userdashboard'])
    },
      error => {
        console.log("exception")
        this.msg = "Invalid username/password"
      }
    )
  }
}
