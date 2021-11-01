import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Customer } from '../customer';
import { Location } from '@angular/common'
import { RegistrationService } from '../registration.service';

@Component({
  selector: 'app-addcustomer',
  templateUrl: './addcustomer.component.html',
  styleUrls: ['./addcustomer.component.css']
})
export class AddcustomerComponent implements OnInit {

  customer = new Customer();
  addform: FormGroup;
  msg = "";
  constructor(private formBuilder: FormBuilder,private location:Location,
    private service:RegistrationService) {

    this.addform = this.formBuilder.group({
      name: new FormControl(null, [Validators.required, Validators.pattern(/^[a-zA-Z][a-zA-Z\s]+$/)]),
      email: new FormControl(null, [Validators.required, Validators.email,
      Validators.pattern(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)]),
      phone: new FormControl('', [Validators.required, Validators.pattern(/^[0-9]*$/),
      Validators.minLength(10)]),
    })
  }
  get control() { return this.addform.controls; }

  ngOnInit(): void {

  }

  onSubmit() {
    if (this.addform.invalid) {
      console.log("form not submitted");
      return;
    }
    else {
      this.add()
    }
  }
  add() {
    this.service.registerUser(this.customer).subscribe(
      data => {
        console.log("successfull");
        alert("Successfully Added");
        this.location.back();
      },
      error => {
        console.log("exception")
        //this.service.authenticate(false);
        this.msg = "email id already exist!"
      }
    )
  }
}
