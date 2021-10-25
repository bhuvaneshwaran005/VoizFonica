import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Customer } from 'src/app/customer';
import { LoginserviceService } from 'src/app/loginservice.service';
import { Prepaid } from 'src/app/prepaid';
import { PrepaidService } from 'src/app/prepaid.service';
import { DataService } from '../data.service';

@Component({
  selector: 'app-popularplan',
  templateUrl: './popularplan.component.html',
  styleUrls: ['./popularplan.component.css']
})
export class PopularplanComponent implements OnInit {
  @Input() showplans!: string;
  prepaid! : Prepaid[];
  public customer : Customer
  prepaidplan = new Prepaid();
  panelOpenState = false;
  constructor(private service:PrepaidService,
    private router:Router, private dataservice:DataService) { 
      this.customer = dataservice.getScope();
  }

  ngOnInit(): void {
    
    this.service.findAll().subscribe(data =>{this.prepaid = data})
  }

  buyPlan(current_planId:number){
    this.service.buyprepaidPlan(this.customer,current_planId).subscribe(
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
