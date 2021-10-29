import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent  {

  /** Based on the screen size, switch from standard to one column per row */
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          { title: 'Total Customers Count', cols: 1, rows: 1 },
          { title: 'Active Customers Count', cols: 1, rows: 1 },
          { title: 'Pending Request', cols: 1, rows: 1 }
        ];
      }

      return [
        { title: 'Total Customers Count', cols: 1, rows: 1 },
        { title: 'Active Customers Count', cols: 1, rows: 1 },
        { title: 'Pending Request', cols: 1, rows: 1 },
      ];
    })
  );

  constructor(private breakpointObserver: BreakpointObserver) {}
  
  
}