import { TestBed, inject } from '@angular/core/testing';

import { AllCoinsService } from './all-coins.service';

describe('AllCoinsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AllCoinsService]
    });
  });

  it('should be created', inject([AllCoinsService], (service: AllCoinsService) => {
    expect(service).toBeTruthy();
  }));
});
