import { PlatformLocation } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Customer } from '../customer';
import { RegistrationService } from '../registration.service';


@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {

  customer = new Customer();
  hide = true;
  userValidation: FormGroup;
  msg = "";
  constructor(private formBuilder: FormBuilder,
    private service: RegistrationService,
    private router: Router, 
    private platformLocation: PlatformLocation) {

      this.backbutton();
     
    this.userValidation = this.formBuilder.group({
      email: new FormControl(null, [Validators.required, Validators.email,
      Validators.pattern(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)]),
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
      this.reset()
    }
  }
  reset() {
    this.service.resetPassword(this.customer).subscribe(
      data => {
        console.log("successfull");
        this.router.navigate(['/login'])
      },
      error => {
        console.log("exception")
        this.msg = "email id not exist!"
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
