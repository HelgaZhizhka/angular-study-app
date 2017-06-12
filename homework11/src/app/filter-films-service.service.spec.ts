import { TestBed, inject } from '@angular/core/testing';

import { FilterFilmsServiceService } from './filter-films-service.service';

describe('FilterFilmsServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FilterFilmsServiceService]
    });
  });

  it('should be created', inject([FilterFilmsServiceService], (service: FilterFilmsServiceService) => {
    expect(service).toBeTruthy();
  }));
});
