import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { DataService } from '../data.service';
import { Prepaid } from '../prepaid';
import { PrepaidService } from '../prepaid.service';

@Component({
  selector: 'app-modify',
  templateUrl: './modify.component.html',
  styleUrls: ['./modify.component.css']
})
export class ModifyComponent implements OnInit {

  prepaid = new Prepaid();
  msg = "";
  modifyform: FormGroup
  constructor(private dataservice: DataService, private formBuilder: FormBuilder,
    private service: PrepaidService) {
    this.modifyform = this.formBuilder.group({
      category: new FormControl(''),
      cost: new FormControl('', [Validators.required, Validators.pattern(/^[0-9]*$/)]),
      validity: new FormControl(''),
      data: new FormControl(''),
      sms: new FormControl(''),
      voice: new FormControl('')
    })
    this.dataservice.plan.subscribe(data => { this.prepaid = data });
  }

  ngOnInit(): void {
  }
  onSubmit() {
    if (this.modifyform.invalid) {
      return;
    }
    else {
      this.updatePrepaid();
    }
  }
  updatePrepaid() {
    this.service.updateprepaidPlan(this.prepaid).subscribe(
      data => {
        alert("Successfully Updated");
        console.log("prepaid plan updated")
      })
  }
  deletePlan() {
      this.service.deleteprepaidPlan(this.prepaid).subscribe(
        data => { alert("successfully Deleted");console.log("deleted post paid") },
      error => { this.msg = "*this plan is currently using by active users" })
  }
}


