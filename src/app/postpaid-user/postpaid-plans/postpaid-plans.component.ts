import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Customer } from 'src/app/customer';
import { Postpaid } from 'src/app/postpaid';
import { PostpaidService } from 'src/app/postpaid.service';
import { Prepaid } from 'src/app/prepaid';
import { PrepaidService } from 'src/app/prepaid.service';
@Component({
  selector: 'app-postpaid-plans',
  templateUrl: './postpaid-plans.component.html',
  styleUrls: ['./postpaid-plans.component.css']
})
export class PostpaidPlansComponent implements OnInit {

  @Input() showplans!: string;
  postpaid! : Postpaid[];

  panelOpenState = false;
  constructor(private service:PostpaidService,private router:Router) { 
  }

  ngOnInit(): void {
    this.service.findAllPostpaidPlans().subscribe(data =>{this.postpaid = data})
  }
}
