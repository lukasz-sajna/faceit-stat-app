/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { LocalApiService } from './local-api.service';

describe('Service: LocalApi', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LocalApiService]
    });
  });

  it('should ...', inject([LocalApiService], (service: LocalApiService) => {
    expect(service).toBeTruthy();
  }));
});
