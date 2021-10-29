import { Component, Input, OnInit } from '@angular/core';
import { ITS_JUST_ANGULAR } from '@angular/core/src/r3_symbols';
import { Router } from '@angular/router';
import { Admin } from 'src/app/admin';
import { Customer } from 'src/app/customer';
import { DataService } from 'src/app/data.service';
import { Prepaid } from 'src/app/prepaid';
import { PrepaidService } from 'src/app/prepaid.service';

@Component({
  selector: 'app-popularplan',
  templateUrl: './popularplan.component.html',
  styleUrls: ['./popularplan.component.css']
})
export class PopularplanComponent implements OnInit {
  @Input() showplans!: string;
  prepaid! : Prepaid[];
  user!:Customer[];
  admin!:Admin;
  panelOpenState = false;
  buttonName = "Buy";
  constructor(private service:PrepaidService,
    private dataservice:DataService, private router:Router) { 
   
  }

  ngOnInit(): void {
    this.service.findAll().subscribe(data =>{this.prepaid = data});
    this.dataservice.admin.subscribe(data => {this.admin = data});
    if(this.admin.email != null){
      this.buttonName = "Modify";
    }
  }

  buyPlan(prepaid:Prepaid){
    this.dataservice.setPlan(prepaid);
    if(this.buttonName == 'Buy'){
      this.router.navigate(['userdashboard/newplan/prepaiduser/payment']);
    }
    else{
      this.router.navigate(['/admindashboard/modify']);
    }
    
  }

  addprepaid(){
    this.router.navigate(['/admindashboard/addplan']);
  }

}
