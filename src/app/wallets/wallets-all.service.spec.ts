import { TestBed, inject } from '@angular/core/testing';

import { WalletsAllService } from './wallets-all.service';

describe('WalletsAllService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WalletsAllService]
    });
  });

  it('should be created', inject([WalletsAllService], (service: WalletsAllService) => {
    expect(service).toBeTruthy();
  }));
});
