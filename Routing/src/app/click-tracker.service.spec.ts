import { TestBed } from '@angular/core/testing';

import { ClickTrackerService } from './click-tracker.service';

describe('ClickTrackerService', () => {
  let service: ClickTrackerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClickTrackerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
