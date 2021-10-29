import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Admin } from '../admin';
import { Customer } from '../customer';
import { DataService } from '../data.service';
import { Dongle } from '../dongle';
import { DongleService } from '../dongle.service';

@Component({
  selector: 'app-dongle-user',
  templateUrl: './dongle-user.component.html',
  styleUrls: ['./dongle-user.component.css']
})
export class DongleUserComponent implements OnInit {

  dongle! : Dongle[];
  user!:Customer[];
  admin!:Admin;
  buttonName = "Buy";
  panelOpenState = false;
  constructor(private service:DongleService,private dataservice:DataService,
     private router:Router) { 
      this.dataservice.admin.subscribe(data => {this.admin = data});
      if(this.admin.email != null){
        this.buttonName = "Modify";
      }
  }

  ngOnInit(): void {
    this.service.findAllDonglePlans().subscribe(data =>{this.dongle = data;
      console.log("succes",this.dongle)})
    
  }
  buyPlan(dongleobj:Dongle){
    this.dataservice.setDonglePlan(dongleobj);
    if(this.buttonName == 'Buy'){
      this.router.navigate(['userdashboard/newplan/dongleuser/donglepayment']);
    }
    else{
      this.router.navigate(['/admindashboard/modifydongle']);
    }
  }
  addDongle(){
    this.router.navigate(['/admindashboard/adddongle'])
  }
}
