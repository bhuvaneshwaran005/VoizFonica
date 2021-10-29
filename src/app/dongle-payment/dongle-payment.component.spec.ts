import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DonglePaymentComponent } from './dongle-payment.component';

describe('DonglePaymentComponent', () => {
  let component: DonglePaymentComponent;
  let fixture: ComponentFixture<DonglePaymentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DonglePaymentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DonglePaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
