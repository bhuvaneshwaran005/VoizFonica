import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CustomerService } from '../admin-customers/customer.service';
import { Customer } from '../customer';
import { Location } from '@angular/common'


@Component({
  selector: 'app-updatecustomer',
  templateUrl: './updatecustomer.component.html',
  styleUrls: ['./updatecustomer.component.css']
})
export class UpdatecustomerComponent implements OnInit {
  customer = new Customer();
  updateform: FormGroup;
  msg = "";
  constructor(private formBuilder: FormBuilder,
    private service:CustomerService,private location:Location,
    private router: Router) {

    this.updateform = this.formBuilder.group({
      name: new FormControl(null, [Validators.pattern(/^[a-zA-Z][a-zA-Z\s]+$/)]),
      email: new FormControl(null, [Validators.email,
      Validators.pattern(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)]),
      phone: new FormControl('', [Validators.pattern(/^[0-9]*$/),
      Validators.minLength(10)]),
    })
  }
  get control() { return this.updateform.controls; }

  ngOnInit(): void {
    this.service.plan.subscribe(
      data =>{this.customer = data;
      console.log("got update")}
    )
  }

  onSubmit() {
    if (this.updateform.invalid) {
      console.log("form not submitted");
      return;
    }
    else {
      this.update()
    }
  }
  update() {
    this.service.updateCustomer(this.customer).subscribe(
      data => {
        console.log("successfully updated");
        alert("successfully updated")
        //this.router.navigate(['..'])
        this.location.back();
      },
      error => {
        console.log("exception");
        this.msg = "user not exist!"
      }
    )
  }

}
