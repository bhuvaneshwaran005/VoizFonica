import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCRMComponent } from './admin-crm.component';

describe('AdminCRMComponent', () => {
  let component: AdminCRMComponent;
  let fixture: ComponentFixture<AdminCRMComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminCRMComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminCRMComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
