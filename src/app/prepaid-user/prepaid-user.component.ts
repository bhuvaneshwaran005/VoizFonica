import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';


@Component({
  selector: 'app-prepaid-user',
  templateUrl: './prepaid-user.component.html',
  styleUrls: ['./prepaid-user.component.css']
})
export class PrepaidUserComponent implements OnInit {

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
