import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { DataService } from '../data.service';
import { Postpaid } from '../postpaid';
import { PostpaidService } from '../postpaid.service';

@Component({
  selector: 'app-modify-postpaid',
  templateUrl: './modify-postpaid.component.html',
  styleUrls: ['./modify-postpaid.component.css']
})
export class ModifyPostpaidComponent implements OnInit {

  msg = "";
  postpaid = new Postpaid();
  modifypostpaidform: FormGroup;
  constructor(private dataservice: DataService, private formBuilder: FormBuilder,
    private postpaidservice: PostpaidService,) {
    this.modifypostpaidform = this.formBuilder.group({
      category: new FormControl('', [Validators.required]),
      cost: new FormControl('', [Validators.required, Validators.pattern(/^[0-9]*$/)]),
      validity: new FormControl(''),
      data: new FormControl('',[Validators.required]),
      sms: new FormControl('',[Validators.required]),
      voice: new FormControl('',[Validators.required])
    })
    this.dataservice.postplan.subscribe(data => { this.postpaid = data });
  }

  ngOnInit(): void {
  }

  onSubmit() {
    if (this.modifypostpaidform.invalid) {
      return;
    }
    else {
      this.updatePostpaid();
    }
  }

  updatePostpaid() {
    this.postpaidservice.updatepostpaidPlan(this.postpaid).subscribe(
      data => {
        alert("Successfully Updated");
        console.log("postpaid plan updated", this.postpaid)
      })
  }

  deletePlan() {
    this.postpaidservice.deletepostpaidPlan(this.postpaid).subscribe(
      data => { alert("successfully Deleted");console.log("deleted post paid") },
      error => { this.msg = "*this plan is currently using by active users" }
    )
  }
}
