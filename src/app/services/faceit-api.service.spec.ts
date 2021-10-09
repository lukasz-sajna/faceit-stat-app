import { TestBed } from '@angular/core/testing';

import { FaceitApiService } from './faceit-api.service';

describe('FaceitApiService', () => {
  let service: FaceitApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FaceitApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
