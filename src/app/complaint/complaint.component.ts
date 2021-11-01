import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Complaint } from '../complaint';
import { Customer } from '../customer';
import { DataService } from '../data.service';
import { ComplaintService } from './complaint.service';

@Component({
  selector: 'app-complaint',
  templateUrl: './complaint.component.html',
  styleUrls: ['./complaint.component.css']
})
export class ComplaintComponent implements OnInit {

    // Math.random should be unique because of its seeding algorithm.
    // Convert it to base 36 (numbers + letters), and grab the first 9 characters
    // after the decimal.
    user!:Customer;
  customer = new Customer();
  ID = Math.random().toString().substr(2, 9);
  numberId = Number(this.ID);
  complaint = new Complaint();
  supportform:FormGroup;
  constructor(private formBuilder:FormBuilder, private dataservice:DataService,
    private service:ComplaintService,private router:Router) { 

    this.supportform = this.formBuilder.group({
      type: new FormControl('',[Validators.required]),
      phone: new FormControl('', [Validators.required, Validators.pattern(/^[0-9]*$/),
      Validators.minLength(10)]),
      message: new FormControl('',[Validators.required, Validators.maxLength(100)])
      })
  }

  get control() { return this.supportform.controls; }
  ngOnInit(): void {
    this.dataservice.shared.subscribe(
      data => {
        this.customer = data;
        console.log("got customer details", this.customer);
        this.dataservice.findAll(this.customer).subscribe(
          data => {
            this.user = data;
            this.customer = this.user;
          })
      })
    
  }
  onSubmit(){
    if(this.supportform.invalid){
      return;
    }
    this.complaint.id = this.numberId;
    this.passComplaint()
    console.log("submitted",this.complaint)
  }
  passComplaint(){
    console.log(this.customer.name);
    this.service.makeComplaint(this.complaint,this.customer.name).subscribe(data =>{
      alert("Complaint Registered")
      console.log("registered");
      this.router.navigate(["/aboutus"])
      this.ngOnInit();
    },error =>{
      console.log("error")
    }
    )
  }
}
