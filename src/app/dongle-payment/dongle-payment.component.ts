import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Customer } from '../customer';
import { DataService } from '../data.service';
import { Dongle } from '../dongle';
import { DongleService } from '../dongle.service';

@Component({
  selector: 'app-dongle-payment',
  templateUrl: './dongle-payment.component.html',
  styleUrls: ['./dongle-payment.component.css']
})
export class DonglePaymentComponent implements OnInit {

  cost!:number;
  user!: Customer;
  customer = new Customer();
  dongle!:Dongle;
  constructor(private dongleservice:DongleService,private location:Location,
    private dataservice: DataService) {
    this.dataservice.dongleplan.subscribe(data =>{this.dongle = data});
   }

  ngOnInit(): void {
    this.cost = this.dongle.cost;
  }
  makeDonglePayment() {
    this.dataservice.shared.subscribe(
      data => {
        this.customer = data;
        console.log("got customer details", this.customer);
        this.dataservice.findAll(this.customer).subscribe(
          data => {
            this.user = data;
            this.customer = this.user;
            console.log("plan", this.dongle);
            this.dongleservice.buydonglePlan(this.customer, this.dongle).subscribe(
              data => {
                alert("Payment Successfull!");
                console.log("successfully bought the plan");
                this.location.back();
              },
              error => {
                alert("Sign in required");
                console.log("exception");
              }
            )

          })
      })
  }
}
