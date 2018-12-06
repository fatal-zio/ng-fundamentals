import { TestBed } from '@angular/core/testing';

import { JQueryService } from './j-query.service';

describe('JQueryService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: JQueryService = TestBed.get(JQueryService);
    expect(service).toBeTruthy();
  });
});
