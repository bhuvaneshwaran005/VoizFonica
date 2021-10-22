import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostpaidUserComponent } from './postpaid-user.component';

describe('PostpaidUserComponent', () => {
  let component: PostpaidUserComponent;
  let fixture: ComponentFixture<PostpaidUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostpaidUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostpaidUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
