import { Injectable } from '@angular/core';
import { Customer } from '../customer';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  public scope!: Customer;

  constructor() {
  }

  public getScope(): Customer {
   
      return this.scope;
  }

  public setScope(scope: any): void {
      this.scope = scope;
      console.log("data setted successfully",scope);
  }
}
