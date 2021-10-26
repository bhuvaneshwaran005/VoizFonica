import { Component, OnInit } from '@angular/core';
import { Dongle } from '../dongle';
import { DongleService } from '../dongle.service';

@Component({
  selector: 'app-dongle-user',
  templateUrl: './dongle-user.component.html',
  styleUrls: ['./dongle-user.component.css']
})
export class DongleUserComponent implements OnInit {

  dongle! : Dongle[];

  panelOpenState = false;
  constructor(private service:DongleService) { 
  }

  ngOnInit(): void {
    this.service.findAllDonglePlans().subscribe(data =>{this.dongle = data})
    console.log("succes",this.dongle)
  }

}
