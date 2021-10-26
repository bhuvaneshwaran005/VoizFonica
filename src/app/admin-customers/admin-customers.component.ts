import { Component, OnInit } from '@angular/core';
import { Customer } from '../customer';
import { CustomerService } from './customer.service';

@Component({
  selector: 'app-admin-customers',
  templateUrl: './admin-customers.component.html',
  styleUrls: ['./admin-customers.component.css']
})
export class AdminCustomersComponent implements OnInit {

  customer!:Customer[];
  constructor(private service:CustomerService) {
   }

  ngOnInit(): void {
    this.service.getCustomerDetails().subscribe(data =>{this.customer = data})

  }

}
