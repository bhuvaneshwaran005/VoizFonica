import { PlatformLocation } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Customer } from '../customer';
import { RegistrationService } from '../registration.service';



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  customer = new Customer();
  hide = true;
  userValidation: FormGroup;
  msg = "";
  constructor(private formBuilder: FormBuilder,
    private service: RegistrationService,
    private router: Router, private platformLocation: PlatformLocation,) {

      this.backbutton();
     
    this.userValidation = this.formBuilder.group({
      name: new FormControl(null, [Validators.required, Validators.pattern(/^[a-zA-Z][a-zA-Z\s]+$/)]),
      email: new FormControl(null, [Validators.required, Validators.email,
      Validators.pattern(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)]),
      phone: new FormControl('', [Validators.required, Validators.pattern(/^[0-9]*$/),
      Validators.minLength(10)]),
      password: new FormControl('', [Validators.required, Validators.minLength(8)]),
      confirmpassword: new FormControl('', [Validators.required])
    }, { validators: this.mustMatch('password', 'confirmpassword') })
  }
  get control() { return this.userValidation.controls; }

  mustMatch(controlName: string, matchControlName: string) {
    return (formGroup: FormGroup) => {
      const actualcontrol = formGroup.controls[controlName];
      const matchControl = formGroup.controls[matchControlName];
      if (matchControl.errors && !matchControl.errors.mustMatch) {
        return;
      }
      if (actualcontrol.value !== matchControl.value) {
        matchControl.setErrors({ mustMatch: true });
      }
      else {
        matchControl.setErrors(null);
      }
    }
  }
  ngOnInit(): void {

  }

  onSubmit() {
    if (this.userValidation.invalid) {
      console.log("form not submitted");
      return;
    }
    else {
      this.register()
    }
  }
  register() {
    this.service.registerUser(this.customer).subscribe(
      data => {
        console.log("successfull")
       // this.service.authenticate(true);
        this.router.navigate(['/userdashboard'])
      },
      error => {
        console.log("exception")
        //this.service.authenticate(false);
        this.msg = "email id already exist!"
      }
    )
  }

  backbutton(){
    this.platformLocation.onPopState(() => {
      console.log("onPopState called");
      window.alert("your data will be lost");
    })
  }
}
