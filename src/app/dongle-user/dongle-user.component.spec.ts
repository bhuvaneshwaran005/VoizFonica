import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DongleUserComponent } from './dongle-user.component';

describe('DongleUserComponent', () => {
  let component: DongleUserComponent;
  let fixture: ComponentFixture<DongleUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DongleUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DongleUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
