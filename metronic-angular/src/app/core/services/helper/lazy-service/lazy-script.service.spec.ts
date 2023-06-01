import { TestBed } from '@angular/core/testing';

import { LazyScriptService } from './lazy-script.service';

describe('LazyScriptService', () => {
  let service: LazyScriptService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LazyScriptService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
