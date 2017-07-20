import { TestBed, inject } from '@angular/core/testing';

import { BittrexServiceService } from './bittrex-service.service';

describe('BittrexServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BittrexServiceService]
    });
  });

  it('should be created', inject([BittrexServiceService], (service: BittrexServiceService) => {
    expect(service).toBeTruthy();
  }));
});
