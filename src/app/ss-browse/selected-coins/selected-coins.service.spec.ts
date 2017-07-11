import { TestBed, inject } from '@angular/core/testing';

import { SelectedCoinsService } from './selected-coins.service';

describe('SelectedCoinsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SelectedCoinsService]
    });
  });

  it('should be created', inject([SelectedCoinsService], (service: SelectedCoinsService) => {
    expect(service).toBeTruthy();
  }));
});
