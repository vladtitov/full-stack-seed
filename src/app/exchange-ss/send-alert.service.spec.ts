import { TestBed, inject } from '@angular/core/testing';

import { SendAlertService } from './send-alert.service';

describe('SendAlertService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SendAlertService]
    });
  });

  it('should be created', inject([SendAlertService], (service: SendAlertService) => {
    expect(service).toBeTruthy();
  }));
});
