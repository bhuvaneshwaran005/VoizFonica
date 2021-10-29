import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddpostpaidComponent } from './addpostpaid.component';

describe('AddpostpaidComponent', () => {
  let component: AddpostpaidComponent;
  let fixture: ComponentFixture<AddpostpaidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddpostpaidComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddpostpaidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
