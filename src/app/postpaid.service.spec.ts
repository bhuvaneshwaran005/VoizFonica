import { TestBed } from '@angular/core/testing';

import { PostpaidService } from './postpaid.service';

describe('PostpaidService', () => {
  let service: PostpaidService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PostpaidService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
