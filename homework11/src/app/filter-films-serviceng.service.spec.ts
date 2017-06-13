import { TestBed, inject } from '@angular/core/testing';

import { FilterFilmsServicengService } from './filter-films-serviceng.service';

describe('FilterFilmsServicengService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FilterFilmsServicengService]
    });
  });

  it('should be created', inject([FilterFilmsServicengService], (service: FilterFilmsServicengService) => {
    expect(service).toBeTruthy();
  }));
});
