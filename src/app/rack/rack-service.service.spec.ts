import { TestBed } from '@angular/core/testing';

import { RackService } from './rack-service';

describe('RackServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RackService = TestBed.get(RackService);
    expect(service).toBeTruthy();
  });
});
