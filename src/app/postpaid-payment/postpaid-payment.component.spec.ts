import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostpaidPaymentComponent } from './postpaid-payment.component';

describe('PostpaidPaymentComponent', () => {
  let component: PostpaidPaymentComponent;
  let fixture: ComponentFixture<PostpaidPaymentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostpaidPaymentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostpaidPaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
