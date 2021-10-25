import { Injectable } from '@angular/core';
import { Customer } from './customer';

@Injectable({
  providedIn: 'root'
})
export class LoginserviceService {

  public scope!: Customer;

    constructor() {
    }

    public getScope(): Customer {
      console.log("data returned")
        return this.scope;
    }

    public setScope(scope: any): void {
        this.scope = scope;
    }
}
