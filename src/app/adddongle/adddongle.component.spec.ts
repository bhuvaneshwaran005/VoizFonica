import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdddongleComponent } from './adddongle.component';

describe('AdddongleComponent', () => {
  let component: AdddongleComponent;
  let fixture: ComponentFixture<AdddongleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdddongleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdddongleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
