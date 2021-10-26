import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Complaint } from '../complaint';
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
  ID = Math.random().toString().substr(2, 9);
  numberId = Number(this.ID);
  complaint = new Complaint();
  supportform:FormGroup
  constructor(private formBuilder:FormBuilder, private service:ComplaintService) { 

    this.supportform = this.formBuilder.group({
      type: new FormControl('',[Validators.required]),
      phone: new FormControl('', [Validators.required, Validators.pattern(/^[0-9]*$/),
      Validators.minLength(10)]),
      message: new FormControl('',[Validators.required, Validators.maxLength(100)])
      })
  }

  get control() { return this.supportform.controls; }
  ngOnInit(): void {
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
    this.service.makeComplaint(this.complaint).subscribe(data =>{
      console.log("registered");
    },error =>{
      console.log("error")
    }
    )
  }
}
