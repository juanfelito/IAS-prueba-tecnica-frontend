import { TestBed } from '@angular/core/testing';

import { AveService } from './ave.service';

describe('AveService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AveService = TestBed.get(AveService);
    expect(service).toBeTruthy();
  });
});
