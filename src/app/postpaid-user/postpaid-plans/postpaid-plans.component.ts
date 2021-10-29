import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Admin } from 'src/app/admin';
import { Customer } from 'src/app/customer';
import { DataService } from 'src/app/data.service';
import { Postpaid } from 'src/app/postpaid';
import { PostpaidService } from 'src/app/postpaid.service';

@Component({
  selector: 'app-postpaid-plans',
  templateUrl: './postpaid-plans.component.html',
  styleUrls: ['./postpaid-plans.component.css']
})
export class PostpaidPlansComponent implements OnInit {

  
  @Input() showplans!: string;
  user!:Customer[];
  admin!:Admin;
  postpaid! : Postpaid[];
  buttonName = "Buy";
  panelOpenState = false;
  constructor(private service:PostpaidService,
    private router:Router,
    private dataservice:DataService) { 
  }

  ngOnInit(): void {
    this.service.findAllPostpaidPlans().subscribe(data =>{this.postpaid = data});
    this.dataservice.admin.subscribe(data => {this.admin = data});
    if(this.admin.email != null){
      this.buttonName = "Modify";
    }
  }

  buyPlan(postpaid:Postpaid){
    this.dataservice.setPostPlan(postpaid);
    if(this.buttonName == 'Buy'){
      this.router.navigate(['userdashboard/newplan/postpaiduser/postpaidpayment']);
    }
    else{
      this.router.navigate(['/admindashboard/modifypostpaid']);
    }
  }
  addpostpaid(){
    this.router.navigate(['/admindashboard/addpostpaidplan']);
  }
}
