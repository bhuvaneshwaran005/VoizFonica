import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Location } from '@angular/common';
import { Dongle } from '../dongle';
import { DongleService } from '../dongle.service';

@Component({
  selector: 'app-adddongle',
  templateUrl: './adddongle.component.html',
  styleUrls: ['./adddongle.component.css']
})
export class AdddongleComponent implements OnInit {

  dongle = new Dongle();
  msg="";
  addform: FormGroup
  constructor(private formBuilder: FormBuilder,private service:DongleService,
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
      if(this.dongle.voice == null){
        this.dongle.voice = "NA";
      }
      if(this.dongle.sms == null){
        this.dongle.sms = "NA";
      }
      if(this.dongle.category == null){
        this.dongle.category == "NA";
      }
      this.addDongle();
    }
  }
  addDongle(){
    this.service.adddonglePlan(this.dongle).subscribe(data =>{
      alert("plan added successfully!");
      console.log("added!");
      this.location.back();
    }, error=>{
      alert("plan already exists");
    })
  }
}
