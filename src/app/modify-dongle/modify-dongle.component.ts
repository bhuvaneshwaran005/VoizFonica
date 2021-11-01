import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { DataService } from '../data.service';
import { Dongle } from '../dongle';
import { DongleService } from '../dongle.service';

@Component({
  selector: 'app-modify-dongle',
  templateUrl: './modify-dongle.component.html',
  styleUrls: ['./modify-dongle.component.css']
})
export class ModifyDongleComponent implements OnInit {

  dongle!: Dongle;
  msg="";
  modifydongleform:FormGroup;
  constructor(private dataservice: DataService, private formBuilder: FormBuilder,private location:Location,
    private dongleservice: DongleService) {
    this.modifydongleform = this.formBuilder.group({
      category: new FormControl(''),
      cost: new FormControl('', [Validators.required, Validators.pattern(/^[0-9]*$/)]),
      validity: new FormControl(''),
      data: new FormControl(''),
      sms: new FormControl(''),
      voice: new FormControl('')
    })
    this.dataservice.dongleplan.subscribe(data => { this.dongle = data });
   }

  ngOnInit(): void {
  }

  onSubmit() {
    if (this.modifydongleform.invalid) {
      return;
    }
    else {
        this.updatedongle();
    }
  }

  updatedongle() {
    this.dongleservice.updatedonglePlan(this.dongle).subscribe(
      data => { alert("Successfully Updated");
       console.log("dongle plan updated") })
  }
  deletePlan() {
      this.dongleservice.deletedonglePlan(this.dongle).subscribe(
        data => { alert("successfully Deleted");console.log("deleted post paid");this.location.back() },
      error => { this.msg = "*this plan is currently using by active users" })
    }
}
