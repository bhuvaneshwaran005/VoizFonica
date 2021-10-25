import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Customer } from 'src/app/customer';
import { Prepaid } from 'src/app/prepaid';
import { PrepaidService } from 'src/app/prepaid.service';
import { RegistrationService } from 'src/app/registration.service';

@Component({
  selector: 'app-popularplan',
  templateUrl: './popularplan.component.html',
  styleUrls: ['./popularplan.component.css']
})
export class PopularplanComponent implements OnInit {
  @Input() showplans!: string;
  prepaid! : Prepaid[];

  customer = new Customer();
  prepaidplan = new Prepaid();
  panelOpenState = false;
  constructor(private service:PrepaidService,private router:Router) { 
    this.customer.id=1;
    this.prepaidplan.id = 6;
  }

  ngOnInit(): void {
    this.service.findAll().subscribe(data =>{this.prepaid = data})
  }

  buyPlan(){
    this.service.buyprepaidPlan(this.customer,this.prepaidplan).subscribe(
      data => {
        console.log("successfull")
        //this.router.navigate(['/userdashboard'])
      },
      error => {
        console.log("exception")
      }
    )
  }

}
