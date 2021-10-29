import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifyDongleComponent } from './modify-dongle.component';

describe('ModifyDongleComponent', () => {
  let component: ModifyDongleComponent;
  let fixture: ComponentFixture<ModifyDongleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifyDongleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifyDongleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
