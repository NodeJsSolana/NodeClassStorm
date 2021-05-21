import { TestBed } from '@angular/core/testing';

import { ParkDataService } from './park-data.service';

describe('ParkDataService', () => {
  let service: ParkDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ParkDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
