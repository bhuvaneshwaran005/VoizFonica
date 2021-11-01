import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetconnComponent } from './getconn.component';

describe('GetconnComponent', () => {
  let component: GetconnComponent;
  let fixture: ComponentFixture<GetconnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetconnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetconnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
