import { TestBed, inject } from '@angular/core/testing';

import { SimulationclearService } from './simulationclear.service';

describe('SimulationclearService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SimulationclearService]
    });
  });

  it('should be created', inject([SimulationclearService], (service: SimulationclearService) => {
    expect(service).toBeTruthy();
  }));
});
