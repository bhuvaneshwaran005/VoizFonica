import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifyPostpaidComponent } from './modify-postpaid.component';

describe('ModifyPostpaidComponent', () => {
  let component: ModifyPostpaidComponent;
  let fixture: ComponentFixture<ModifyPostpaidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifyPostpaidComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifyPostpaidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
