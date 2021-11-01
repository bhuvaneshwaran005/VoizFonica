import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../admin-customers/customer.service';
import { Complaint } from '../complaint';
import { ComplaintService } from '../complaint/complaint.service';

@Component({
  selector: 'app-admin-crm',
  templateUrl: './admin-crm.component.html',
  styleUrls: ['./admin-crm.component.css']
})
export class AdminCRMComponent implements OnInit {


  complaint!:Complaint[];
  constructor(private service:ComplaintService) { }

  ngOnInit(): void {
    this.service.getComplaint().subscribe(
      data=>{this.complaint=data;}
    )
  }

  close(user:Complaint){
    this.service.deleteComplaint(user).subscribe(data =>{
      user = data;
    })
  }

}
