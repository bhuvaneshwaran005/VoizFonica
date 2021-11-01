import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Customer } from '../customer';
import { DataService } from '../data.service';
import { Postpaid } from '../postpaid';
import { PostpaidService } from '../postpaid.service';

@Component({
  selector: 'app-postpaid-payment',
  templateUrl: './postpaid-payment.component.html',
  styleUrls: ['./postpaid-payment.component.css']
})
export class PostpaidPaymentComponent implements OnInit {

  cost!:number;
  user!: Customer;
  customer = new Customer();
  postpaid!:Postpaid;
  constructor( private postpaidservice:PostpaidService,private location:Location,
    private dataservice: DataService,) {
    this.dataservice.postplan.subscribe(data => {this.postpaid = data});
   }

  ngOnInit(): void {
    this.cost = this.postpaid.cost;
  }

  makepostpaidPayment() {
    this.dataservice.shared.subscribe(
      data => {
        this.customer = data;
        console.log("got customer details", this.customer);
        this.dataservice.findAll(this.customer).subscribe(
          data => {
            this.user = data;
            this.customer = this.user;
            console.log("plan", this.postpaid);
            this.postpaidservice.buypostpaidPlan(this.customer, this.postpaid).subscribe(
              data => {
                alert("Payment Successfull!");
                console.log("successfully bought the plan");
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
