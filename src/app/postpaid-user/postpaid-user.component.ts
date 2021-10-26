import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

@Component({
  selector: 'app-postpaid-user',
  templateUrl: './postpaid-user.component.html',
  styleUrls: ['./postpaid-user.component.css']
})
export class PostpaidUserComponent implements OnInit {

  plantype ="monthly";

  constructor(private breakpointObserver:BreakpointObserver) { }

  ngOnInit(): void {
   
  }
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
  .pipe(
    map(result => result.matches),
    shareReplay()
  );

  onClick(plan:string){
    this.plantype = plan;
  }

}
