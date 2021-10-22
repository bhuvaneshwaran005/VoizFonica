import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminPrepaidComponent } from './admin-prepaid.component';

describe('AdminPrepaidComponent', () => {
  let component: AdminPrepaidComponent;
  let fixture: ComponentFixture<AdminPrepaidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminPrepaidComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminPrepaidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
