import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Customer } from '../customer';
import { DataService } from '../data.service';
import { CustomerService } from './customer.service';


@Component({
  selector: 'app-admin-customers',
  templateUrl: './admin-customers.component.html',
  styleUrls: ['./admin-customers.component.css']
})
export class AdminCustomersComponent implements OnInit {

  
  user!:Customer;
  customer!:Customer[];
  constructor(private service:CustomerService,
     private router:Router) {
   }

  ngOnInit(): void {
    this.service.getCustomerDetails().subscribe(data =>{this.customer = data})

  }
  onView(customer:Customer){
    this.user = customer;
    this.service.setdata(this.user);
    this.router.navigate(['/admindashboard/customerplans']);
  }
  update(customer:Customer){
    this.user = customer;
    this.service.setdata(this.user);
    this.router.navigate(['/admindashboard/updatecustomer']);
  }
  delete(customer:Customer){
    this.user = customer;
    this.service.deleteCustomer(this.user).subscribe(
      data =>{console.log("deleted");
    alert("Successfully Deleted");
    this.ngOnInit();},
    error =>{
      alert("Can't Delete the active customer")
    }
    )
  }
  addcustomer(){
    this.router.navigate(['/admindashboard/addcustomer']);
  }
}
