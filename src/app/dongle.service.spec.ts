import { TestBed } from '@angular/core/testing';

import { DongleService } from './dongle.service';

describe('DongleService', () => {
  let service: DongleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DongleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
