import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard-user',
  templateUrl: './dashboard-user.component.html',
  styleUrls: ['./dashboard-user.component.css']
})
export class DashboardUserComponent implements OnInit {

/** Based on the screen size, switch from standard to one column per row */
cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
  map(({ matches }) => {
    if (matches) {
      return [
        { title: 'New Plan', cols: 1, rows: 1 },
        { title: 'Add Connection', cols: 1, rows: 1 },
        { title: 'Choose Multiple Connection', cols: 1, rows: 1 },
        { title: 'Current Plan Details', cols: 1, rows: 1 },
        { title: 'Change Plan', cols: 1, rows: 1 },
        { title: 'Port to VoizFonica', cols: 1, rows: 1 },
        { title: 'Bills and Invoice', cols: 1, rows: 1 },
        { title: 'Plan History', cols: 1, rows: 1 },
        { title: 'Support and services', cols: 1, rows: 1 },
        { title: 'Feedback', cols: 1, rows: 1 }
      ];
    }

    return [
      { title: 'New Plan', cols: 1, rows: 1 },
      { title: 'Add Connection', cols: 1, rows: 1 },
      { title: 'Choose Multiple Connection', cols: 1, rows: 1 },
      { title: 'Current Plan Details', cols: 1, rows: 1 },
      { title: 'Change Plan', cols: 1, rows: 1 },
      { title: 'Port to VoizFonica', cols: 1, rows: 1 },
      { title: 'Bills and Invoice', cols: 1, rows: 1 },
      { title: 'Plan History', cols: 1, rows: 1 },
      { title: 'Support and services', cols: 1, rows: 1 },
      { title: 'Feedback', cols: 1, rows: 1 }
    ];
  })
);

constructor(private breakpointObserver: BreakpointObserver,private router:Router) {

}
  ngOnInit(): void {
  }
onclick(){
  this.router.navigate(["/newplan"]) 
}

}
