import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/customer';
import { Dongle } from 'src/app/dongle';
import { Postpaid } from 'src/app/postpaid';
import { Prepaid } from 'src/app/prepaid';
import { CustomerService } from '../admin-customers/customer.service';
import { DataService } from '../data.service';

@Component({
  selector: 'app-customer-plans',
  templateUrl: './customer-plans.component.html',
  styleUrls: ['./customer-plans.component.css']
})
export class CustomerPlansComponent implements OnInit {

  prepaidLength!:number;
  postpaidLength!:number;
  dongleLength!:number;
  customer = new Customer();
  prepaid!:Prepaid[];
  postpaid!:Postpaid[];
  dongle!:Dongle[];
  msg ="";
  constructor(private service:CustomerService,private dataservice:DataService) { 
    this.service.plan.subscribe(data =>{this.customer = data;console.log("id",this.customer)});
    
  }

  ngOnInit(): void {
    this.service.findAll(this.customer).subscribe(
      data => {this.customer = data;
        console.log(this.customer);
        this.service.getCustomerprepaid(this.customer).subscribe(data =>{
          this.prepaid = data;this.prepaidLength = this.prepaid.length;});
    
        this.service.getCustomerpostpaid(this.customer).subscribe(data =>{
          this.postpaid = data; this.postpaidLength = this.postpaid.length;});
    
        this.service.getCustomerdongle(this.customer).subscribe(data =>{
          this.dongle = data;this.dongleLength = this.dongle.length;
          if(this.prepaidLength == 0 && this.dongleLength == 0 && this.postpaidLength == 0){
            this.setmessage();
          }});
      })

    
  }

  setmessage(){
      this.msg="No Active Plans!";
  }
}
