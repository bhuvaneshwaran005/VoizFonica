import { TestBed } from '@angular/core/testing';

import { AuthauardGuard } from './authauard.guard';

describe('AuthauardGuard', () => {
  let guard: AuthauardGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AuthauardGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
