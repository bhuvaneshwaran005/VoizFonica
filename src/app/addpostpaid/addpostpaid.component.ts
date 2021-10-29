import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Postpaid } from '../postpaid';
import { PostpaidService } from '../postpaid.service';

@Component({
  selector: 'app-addpostpaid',
  templateUrl: './addpostpaid.component.html',
  styleUrls: ['./addpostpaid.component.css']
})
export class AddpostpaidComponent implements OnInit {

  postpaid = new Postpaid();
  msg="";
  addform: FormGroup
  constructor( private formBuilder: FormBuilder,private location:Location,
    private service: PostpaidService) {
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
      if(this.postpaid.voice == null){
        this.postpaid.voice = "NA";
      }
      if(this.postpaid.validity == null){
        this.postpaid.validity = "NA";
      }
      if(this.postpaid.sms == null){
        this.postpaid.sms = "NA";
      }
      this.addPrepaid();
    }
  }
  addPrepaid(){
    this.service.addpostpaidPlan(this.postpaid).subscribe(data =>{
      alert("Added Successfully");
      console.log("added!");
      this.location.back();
    })
  }

}
