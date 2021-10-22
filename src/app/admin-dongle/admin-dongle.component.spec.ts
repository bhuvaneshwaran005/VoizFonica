import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminDongleComponent } from './admin-dongle.component';

describe('AdminDongleComponent', () => {
  let component: AdminDongleComponent;
  let fixture: ComponentFixture<AdminDongleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminDongleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminDongleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
