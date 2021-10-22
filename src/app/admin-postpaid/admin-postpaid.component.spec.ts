import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminPostpaidComponent } from './admin-postpaid.component';

describe('AdminPostpaidComponent', () => {
  let component: AdminPostpaidComponent;
  let fixture: ComponentFixture<AdminPostpaidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminPostpaidComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminPostpaidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
