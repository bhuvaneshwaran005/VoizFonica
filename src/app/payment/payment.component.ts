import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Customer } from '../customer';
import { DataService } from '../data.service';
import { Prepaid } from '../prepaid';
import { PrepaidService } from '../prepaid.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  cost!:number;
  user!: Customer;
  customer = new Customer();
  prepaid!:Prepaid;
  constructor(private service: PrepaidService,
     private dataservice: DataService,private location:Location) {
    this.dataservice.plan.subscribe(data => {this.prepaid = data});
  }
  ngOnInit(): void {
      this.cost = this.prepaid.cost;
  }
  makePayment() {
    this.dataservice.shared.subscribe(
      data => {
        this.customer = data;
        console.log("got customer details", this.customer);
        this.dataservice.findAll(this.customer).subscribe(
          data => {
            this.user = data;
            this.customer = this.user;
            console.log("plan", this.prepaid);
            this.service.buyprepaidPlan(this.customer, this.prepaid).subscribe(
              data => {
                alert("Payment Successfull!")
                console.log("successfully bought the plan")
                this.location.back();
              },
              error => {
                alert("Sign in required");
                console.log("exception")
              }
            )

          })
      })
  }
  
}
