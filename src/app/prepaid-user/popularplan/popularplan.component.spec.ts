import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopularplanComponent } from './popularplan.component';

describe('PopularplanComponent', () => {
  let component: PopularplanComponent;
  let fixture: ComponentFixture<PopularplanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopularplanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PopularplanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
