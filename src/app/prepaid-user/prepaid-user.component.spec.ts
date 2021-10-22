import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrepaidUserComponent } from './prepaid-user.component';

describe('PrepaidUserComponent', () => {
  let component: PrepaidUserComponent;
  let fixture: ComponentFixture<PrepaidUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrepaidUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrepaidUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
