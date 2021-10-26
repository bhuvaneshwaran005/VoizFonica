import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-newplan',
  templateUrl: './newplan.component.html',
  styleUrls: ['./newplan.component.css']
})
export class NewplanComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

}
