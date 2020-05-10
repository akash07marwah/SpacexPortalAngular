import { TestBed } from '@angular/core/testing';

import { GetLaunchesService } from './get-launches.service';

describe('GetLaunchesService', () => {
  let service: GetLaunchesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetLaunchesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
