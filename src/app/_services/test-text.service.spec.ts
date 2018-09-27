import { TestBed } from '@angular/core/testing';

import { TestTextService } from './test-text.service';

describe('TestTextService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TestTextService = TestBed.get(TestTextService);
    expect(service).toBeTruthy();
  });
});
