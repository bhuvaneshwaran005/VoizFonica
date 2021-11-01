import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Prepaid } from '../prepaid';
import { PrepaidService } from '../prepaid.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-addplan',
  templateUrl: './addplan.component.html',
  styleUrls: ['./addplan.component.css']
})
export class AddplanComponent implements OnInit {

  prepaid = new Prepaid();
  msg="";
  addform: FormGroup
  constructor(private formBuilder: FormBuilder,private service: PrepaidService,
     private location:Location) {
    this.addform = this.formBuilder.group({
      category: new FormControl(''),
      cost: new FormControl('', [Validators.required, Validators.pattern(/^[0-9]*$/)]),
      validity: new FormControl(''),
      data: new FormControl(''),
      sms: new FormControl(''),
      voice: new FormControl('')
    })
  }

  ngOnInit(): void {
  }

  onSubmit(){
    if (this.addform.invalid) {
      return;
    }
    else {
      if(this.prepaid.voice == null){
        this.prepaid.voice = "NA";
      }
      if(this.prepaid.sms == null){
        this.prepaid.sms = "NA";
      }
      this.addPrepaid();
    }
  }
  addPrepaid(){
    this.service.addprepaidPlan(this.prepaid).subscribe(data =>{
      alert("plan added successfully!");
      console.log("added!");
      this.location.back();
    },
    error=>{
      alert("plan already exists");
    })
  }
}
